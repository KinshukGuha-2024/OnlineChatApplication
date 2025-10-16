const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { exec } = require("child_process");
const dotenv = require('dotenv');
dotenv.config();
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

const VALID_DECLARED_PRESENCE = new Set(['online', 'away']);

function normalizePresence(value) {
    if (typeof value !== "string") {
        return null;
    }
    const normalized = value.trim().toLowerCase();
    return VALID_DECLARED_PRESENCE.has(normalized) ? normalized : null;
}

function getSocketsByUserId(userId) {
    const sockets = [];
    if (!userId) {
        return sockets;
    }
    for (let [, activeSocket] of io.of("/").sockets) {
        if (activeSocket.user_id === userId) {
            sockets.push(activeSocket);
        }
    }
    return sockets;
}

function deriveAggregatedPresence(userId) {
    const sockets = getSocketsByUserId(userId);
    if (!sockets.length) {
        return 'offline';
    }
    if (sockets.some((activeSocket) => activeSocket.currentPresence === 'online')) {
        return 'online';
    }
    if (sockets.some((activeSocket) => activeSocket.currentPresence === 'away')) {
        return 'away';
    }
    return 'online';
}

function broadcastPresence(userId) {
    if (!userId) {
        return 'offline';
    }
    const presence = deriveAggregatedPresence(userId);
    const payload = { user_id: userId, presence };
    console.log({event: 'presence', user_id: userId, presence: presence});
    for (let [, activeSocket] of io.of("/").sockets) {
        const isSameUser = activeSocket.user_id === userId;
        const isFriend = Array.isArray(activeSocket.friend_ids) && activeSocket.friend_ids.includes(userId);
        if (isSameUser || isFriend) {
            activeSocket.emit("presence_updated", payload);
        }
    }
    return presence;
}

function sendPresenceSnapshot(socket) {
    if (!socket || !Array.isArray(socket.friend_ids) || !socket.friend_ids.length) {
        return;
    }
    const users = socket.friend_ids.map((friendId) => ({
        user_id: friendId,
        presence: deriveAggregatedPresence(friendId),
    }));
    socket.emit("presence_snapshot", { users });
}

function setSocketPresence(socket, presence) {
    if (!socket || !socket.user_id) {
        return;
    }
    socket.currentPresence = presence;
    broadcastPresence(socket.user_id);
}

function sanitizeBootstrapPayload(payload) {
    if (!payload || typeof payload !== "object") {
        return null;
    }
    const userId = payload.user_id || payload.userId;
    if (!userId) {
        return null;
    }
    const friendIds = Array.isArray(payload.friend_ids || payload.friendIds)
        ? payload.friend_ids || payload.friendIds
        : [];
    return {
        user_id: String(userId),
        friend_ids: friendIds.map((id) => String(id)),
        total_unread: Number(payload.total_unread || payload.totalUnread || 0),
        notification_unread: Number(payload.notification_unread || payload.notificationUnread || 0),
    };
}

io.use((socket, next) => {
    socket.user_id = socket.handshake.auth.user_id;
    next();
});

io.on('connection', (socket) => {
    try{
        const authPayload = socket.handshake && socket.handshake.auth ? socket.handshake.auth : {};
        const bootstrap = sanitizeBootstrapPayload(authPayload.bootstrap);
        if(bootstrap){
            setUser(bootstrap);
        } else if(authPayload.token){
            exec('php '+process.env.ARTISAN_PATH+' chat:auth-connect --data="'+encodeURI(JSON.stringify({token: authPayload.token}))+'"', (error, stdout, stderr) => {
                if (error) {
                    setUserAsBlank();
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    setUserAsBlank();
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                setUser(JSON.parse(stdout));
            });
        } else {
            setUserAsBlank();
        }
        function setUserAsBlank() {
            socket.user_id = "";
            socket.friend_ids = [];
            socket.currentPresence = undefined;
            socket.declaredPresence = undefined;
        }
        function setUser(data){
            socket.user_id = data.user_id;
            socket.friend_ids = data.friend_ids;
            socket.declaredPresence = 'online';
            setSocketPresence(socket, 'online');
            console.log({event: "connected", "user_id": socket.user_id, "socket_id": socket.id, friend_ids: socket.friend_ids,});
            socket.emit("notification_count", {'count' : data.notification_unread, 'show' :  data.notification_unread > 0});
            socket.emit("chat_count", {'count' : data.total_unread, 'show' : (data.total_unread > 0) ? 1 : 0});
            emitOnlineFriends();
            sendPresenceSnapshot(socket);
        }
        function emitOnlineFriends(){
            var onlineFriendIds = [];
            for (let [id, otherSocket] of io.of("/").sockets) {
                if(socket.friend_ids!=undefined && socket.friend_ids!=undefined && socket.friend_ids.includes(otherSocket.user_id)){
                    if(!onlineFriendIds.includes(otherSocket.user_id)){
                        onlineFriendIds.push(otherSocket.user_id);
                    }
                    socket.to(otherSocket.id).emit("user_connected", {"user_id": socket.user_id});
                }
            }
            socket.emit("online_user_ids", {"user_ids": onlineFriendIds});
        } 

        socket.on('refresh', ({customer_state_service_id}) => {
            console.log({"refresh": customer_state_service_id});
            
            var messageData = {
                runner_id: socket.user_id,
                customer_state_service_id: customer_state_service_id
            }
            exec('php '+process.env.ARTISAN_PATH+' chat:view-customer-state-service --data="'+encodeURI(JSON.stringify(messageData))+'"', (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                refresh(JSON.parse(stdout));  
            });
            function refresh(data){
                if(!socket.friend_ids.includes(data.customer_id)){
                    socket.friend_ids.push(data.customer_id);
                    socket.emit("presence_updated", {"user_id": data.customer_id, "presence": deriveAggregatedPresence(data.customer_id)});
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(otherSocket.user_id == data.customer_id){
                            socket.emit("user_connected", {"user_id": data.customer_id});
                            socket.to(otherSocket.id).emit("user_connected", {"user_id": socket.user_id});
                        }
                        if(otherSocket.user_id == data.runner_id){
                            socket.to(otherSocket.id).emit("user_connected", {"user_id": data.customer_id});
                        }
                    }
                    sendPresenceSnapshot(socket);
                }
            }
        });
        socket.on('update_presence', ({ presence }) => {
            try{
                const normalized = normalizePresence(presence);
                if(!normalized){
                    return;
                }
                socket.declaredPresence = normalized;
                setSocketPresence(socket, normalized);
            } catch (err){
                console.log(err);
            }
        });
        socket.on('update_friends', ({ friend_ids }) => {
            try{
                if(!Array.isArray(friend_ids)){
                    return;
                }
                socket.friend_ids = friend_ids.map((id) => String(id));
                sendPresenceSnapshot(socket);
            } catch (err){
                console.log(err);
            }
        });
        socket.on('disconnect', () => {
            try{
                console.log({event: 'disconnected', user_id: socket.user_id, socket_id: socket.id, friend_ids: socket.friend_ids,});
                const disconnected_user_id = socket.user_id;
                const previousFriendIds = Array.isArray(socket.friend_ids) ? [...socket.friend_ids] : [];
                const remainingSockets = getSocketsByUserId(disconnected_user_id).filter((activeSocket) => activeSocket.id !== socket.id);
                const stillConnected = remainingSockets.length > 0;
                if(!stillConnected){
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(previousFriendIds.includes(otherSocket.user_id)){
                            socket.to(otherSocket.id).emit("user_disconnected", {"user_id": disconnected_user_id});
                        }
                    }
                }
                if(disconnected_user_id){
                    socket.currentPresence = 'offline';
                    broadcastPresence(disconnected_user_id);
                }
                socket.user_id = "";
                socket.friend_ids = [];
                socket.currentPresence = undefined;
                socket.declaredPresence = undefined;
            } catch (err){
                console.log(err);
            }
        });
        socket.on('started_typing', ({ to_user_id, chat_id }) => {
            try{
                if(socket.friend_ids!=undefined && socket.friend_ids.includes(to_user_id)){
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(to_user_id == otherSocket.user_id){
                            socket.to(otherSocket.id).emit("started_typing", {"user_id": socket.user_id, "chat_id": chat_id});
                            socket.to(otherSocket.id).emit("presence_updated", {"user_id": socket.user_id, "presence": "typing", "chat_id": chat_id});
                        }
                    }
                }
            } catch (err){
                console.log(err);
            }
        });
        socket.on('stopped_typing', ({ to_user_id, chat_id }) => {
            try{
                if(socket.friend_ids!=undefined && socket.friend_ids.includes(to_user_id)){
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(to_user_id == otherSocket.user_id){
                            socket.to(otherSocket.id).emit("stopped_typing", {"user_id": socket.user_id, "chat_id": chat_id});
                        }
                    }
                    broadcastPresence(socket.user_id);
                }
            } catch (err){
                console.log(err);
            }
        });
        socket.on('private_message', ({ chat_id, message }) => {
            try{
                var messageData = {
                    chat_id: chat_id,
                    message: message,
                    user_id: socket.user_id
                }
                exec('php '+process.env.ARTISAN_PATH+' chat:store-message --data="'+encodeURI(JSON.stringify(messageData))+'"', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    privateMessageFriend(JSON.parse(stdout));  
                });
                function privateMessageFriend(data){
                    console.log(data.message);
                    socket.emit("sent_message", {"message": data.message});
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(data.message.to_user_id == otherSocket.user_id){
                            socket.to(otherSocket.id).emit("private_message", {"message": data.message});
                            socket.to(otherSocket.id).emit("chat_count", {'count' : data.message.total_unread, 'show' : (data.message.total_unread > 0) ? 1 : 0});
                        }
                    }
                }
            } catch (err){
                console.log(err);
            }
        });
        socket.on('file_message', ({ message_id }) => {
            try{
                var messageData = {
                    message_id: message_id,
                    user_id: socket.user_id
                }
                exec('php '+process.env.ARTISAN_PATH+' chat:view-message --data="'+encodeURI(JSON.stringify(messageData))+'"', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    fileMessageFriend(JSON.parse(stdout));  
                });
                function fileMessageFriend(data){
                    console.log(data.message);
                    socket.emit("file_sent_message", {"message": data.message});
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(data.message.to_user_id == otherSocket.user_id){
                            socket.to(otherSocket.id).emit("file_message", {"message": data.message});
                            socket.to(otherSocket.id).emit("chat_count", {'count' : data.message.total_unread, 'show' : (data.message.total_unread > 0) ? 1 : 0});
                        }
                    }
                }
            } catch (err){
                console.log(err);
            }
        });
        socket.on('read_message', ({ chat_id }) => {
            try{
                var messageData = {
                    chat_id: chat_id,
                    user_id: socket.user_id
                }
                exec('php '+process.env.ARTISAN_PATH+' chat:read-message --data="'+encodeURI(JSON.stringify(messageData))+'"', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    readMessageFriend(JSON.parse(stdout));  
                });
                function readMessageFriend(data){
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(data.to_user_id == otherSocket.user_id){
                            socket.to(otherSocket.id).emit("read_message", {"chat_id": data.chat_id});
                            socket.emit("chat_count", {'count' : data.total_unread, 'show' : (data.total_unread > 0) ? 1 : 0});
                        }
                    }
                }
            } catch (err){
                console.log(err);
            }
        });
        socket.on('delete_message', ({ message_id }) => {
            try{
                var messageData = {
                    message_id: message_id,
                    user_id: socket.user_id
                }
                exec('php '+process.env.ARTISAN_PATH+' chat:delete-message --data="'+encodeURI(JSON.stringify(messageData))+'"', (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    deleteMessageFriend(JSON.parse(stdout));  
                });
                function deleteMessageFriend(data){
                    console.log({event: 'disconnected', message_data: data});
                    socket.emit("delete_message", {"chat_id": data.chat_id, "message_id": data.message_id});
                    for (let [id, otherSocket] of io.of("/").sockets) {
                        if(data.to_user_id == otherSocket.user_id){
                            socket.to(otherSocket.id).emit("delete_message", {"chat_id": data.chat_id, "message_id": data.message_id});
                            socket.to(otherSocket.id).emit("chat_count", {'count' : data.total_unread, 'show' : (data.total_unread > 0) ? 1 : 0});
                        }
                    }
                }
            } catch (err){
                console.log(err);
            }
        });
    } catch (err){
        console.log(err);
    }
});

app.post('/notification_count', express.json(), function(req, res){
    let online = 0;
    for(let [id, soc] of io.of('/').sockets){
        if(req.body.user_id != soc.user_id) continue;
        soc.emit("notification_count", {'count' : req.body.count, 'show' :  req.body.count > 0});
        console.log(req.body);
        online = 1;
    }
    res.send("online: " + online);
});

const PORT = parseInt(process.env.SERVER_PORT || process.env.NODE_PORT || "3000", 10);

server.listen(PORT, () => {
    console.log('listening on *:'+PORT);
});
