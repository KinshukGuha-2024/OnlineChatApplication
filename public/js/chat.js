(() => {
    'use strict';

    const staticData = {};

    Object.assign(staticData, {
        currentUser: {
            id: 'u1',
            name: 'Elena Howard',
            avatar: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png',
            status: 'Available - Product Manager',
            presence: 'online',
            role: 'Product Manager',
            devices: { microphone: true, camera: true },
            callPreferences: { defaultMicOn: true, defaultVideoOn: true }
        },
        contacts: [
            {
                id: 'u2',
                name: 'Noah Patterson',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_green_512dp.png',
                presence: 'online',
                role: 'Lead Designer',
                statusMessage: 'Design sprint in progress',
                devices: { microphone: true, camera: false },
                callPreferences: { defaultMicOn: true, defaultVideoOn: false }
            },
            {
                id: 'u3',
                name: 'Sofia Bennett',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_yellow_512dp.png',
                presence: 'away',
                role: 'QA Lead',
                statusMessage: 'Reviewing regression suite',
                devices: { microphone: true, camera: true },
                callPreferences: { defaultMicOn: true, defaultVideoOn: true }
            },
            {
                id: 'u4',
                name: 'Owen Walker',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_red_512dp.png',
                presence: 'online',
                role: 'Engineering Manager',
                statusMessage: 'Shipping build #1208',
                devices: { microphone: false, camera: false },
                callPreferences: { defaultMicOn: false, defaultVideoOn: false }
            },
            {
                id: 'u5',
                name: 'Chloe Smith',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_purple_512dp.png',
                presence: 'offline',
                role: 'Lifecycle Marketing',
                statusMessage: 'In campaign review',
                devices: { microphone: true, camera: true },
                callPreferences: { defaultMicOn: true, defaultVideoOn: false }
            },
            {
                id: 'u6',
                name: 'Ethan Price',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_light_blue_512dp.png',
                presence: 'online',
                role: 'Support Lead',
                statusMessage: 'Resolving priority tickets',
                devices: { microphone: true, camera: true },
                callPreferences: { defaultMicOn: true, defaultVideoOn: true }
            }
        ]
    });

    Object.assign(staticData, {
        directChats: [
            {
                id: 'c1',
                participantId: 'u2',
                topic: 'Brand refresh',
                unreadCount: 0,
                pinned: true,
                messages: [
                    {
                        id: 'c1-m1',
                        senderId: 'u2',
                        timestamp: '2024-05-23T08:12:00Z',
                        text: 'Morning! Here is the updated brand kit and reference moodboard: https://figma.com/file/BRK112. Let me know if we can align today.',
                        attachments: [
                            {
                                id: 'c1-doc1',
                                type: 'document',
                                name: 'Brand-Guidelines-v3.pdf',
                                size: '5.4 MB',
                                url: 'https://example.com/files/Brand-Guidelines-v3.pdf'
                            },
                            {
                                id: 'c1-link1',
                                type: 'link',
                                url: 'https://dribbble.com/shots/18783242-Messaging-Dashboard',
                                title: 'Dribbble - Messaging Dashboard',
                                description: 'Layout references that match the updated tone.'
                            }
                        ],
                        status: 'seen'
                    },
                    {
                        id: 'c1-m2',
                        senderId: 'u1',
                        timestamp: '2024-05-23T08:24:00Z',
                        text: 'These hero shots feel closer to the direction. Thoughts?',
                        attachments: [
                            {
                                id: 'c1-img1',
                                type: 'image',
                                url: 'https://www.gstatic.com/webp/gallery/1.jpg',
                                groupId: 'c1-hero',
                                alt: 'Campaign concept moodboard 1'
                            },
                            {
                                id: 'c1-img2',
                                type: 'image',
                                url: 'https://www.gstatic.com/webp/gallery/2.jpg',
                                groupId: 'c1-hero',
                                alt: 'Campaign concept moodboard 2'
                            },
                            {
                                id: 'c1-img3',
                                type: 'image',
                                url: 'https://www.gstatic.com/webp/gallery/3.jpg',
                                groupId: 'c1-hero',
                                alt: 'Campaign concept moodboard 3'
                            }
                        ],
                        status: 'seen'
                    },
                    {
                        id: 'c1-m3',
                        senderId: 'u2',
                        timestamp: '2024-05-23T08:38:00Z',
                        text: 'Love the second option. I will annotate a few details and we can finalize before lunch.',
                        status: 'delivered'
                    }
                ]
            },
            {
                id: 'c2',
                participantId: 'u3',
                topic: 'Release QA',
                unreadCount: 2,
                pinned: false,
                messages: [
                    {
                        id: 'c2-m1',
                        senderId: 'u3',
                        timestamp: '2024-05-22T17:05:00Z',
                        text: 'Regression on build #1208 is complete. The summary is here.',
                        attachments: [
                            {
                                id: 'c2-link1',
                                type: 'link',
                                url: 'https://linear.app/atlas/product/issue/APP-254',
                                title: 'Linear - APP-254',
                                description: 'Release candidate QA notes and blockers.'
                            }
                        ],
                        status: 'seen'
                    },
                    {
                        id: 'c2-m2',
                        senderId: 'u1',
                        timestamp: '2024-05-22T17:18:00Z',
                        text: 'Thanks! Scheduling a dry run for tomorrow at 09:30.',
                        status: 'seen'
                    },
                    {
                        id: 'c2-m3',
                        senderId: 'u3',
                        timestamp: '2024-05-23T06:44:00Z',
                        text: 'Heads up: payment service test is flaky again, logging details in the deck.',
                        attachments: [
                            {
                                id: 'c2-doc1',
                                type: 'document',
                                name: 'Checkout-Diagnostics.xlsx',
                                size: '842 KB',
                                url: 'https://example.com/files/Checkout-Diagnostics.xlsx'
                            }
                        ],
                        status: 'delivered'
                    }
                ]
            },
            {
                id: 'c3',
                participantId: 'u5',
                topic: 'Lifecycle campaigns',
                unreadCount: 0,
                pinned: false,
                messages: [
                    {
                        id: 'c3-m1',
                        senderId: 'u5',
                        timestamp: '2024-05-21T14:12:00Z',
                        text: 'Sharing the creative copy we reviewed with the agency.',
                        attachments: [
                            {
                                id: 'c3-doc1',
                                type: 'document',
                                name: 'Lifecycle-Copy-Q3.docx',
                                size: '268 KB',
                                url: 'https://example.com/files/Lifecycle-Copy-Q3.docx'
                            }
                        ],
                        status: 'seen'
                    },
                    {
                        id: 'c3-m2',
                        senderId: 'u1',
                        timestamp: '2024-05-21T14:18:00Z',
                        text: 'Looks good. Let us also bundle the onboarding drip updates.',
                        status: 'seen'
                    }
                ]
            }
        ],
        groupChats: [
            {
                id: 'g1',
                name: 'Product Team',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/meet_2020q4_64dp.png',
                description: 'Daily syncs and launch notes',
                members: ['u1', 'u2', 'u3', 'u4', 'u6'],
                unreadCount: 3,
                pinned: true,
                messages: [
                    {
                        id: 'g1-m1',
                        senderId: 'u4',
                        timestamp: '2024-05-23T07:05:00Z',
                        text: 'Morning team! Agenda today: 1) onboarding release, 2) experiment rollout, 3) launch blockers.',
                        status: 'seen'
                    },
                    {
                        id: 'g1-m2',
                        senderId: 'u3',
                        timestamp: '2024-05-23T07:08:00Z',
                        text: 'Latest QA notes are documented here for quick reference.',
                        attachments: [
                            {
                                id: 'g1-link1',
                                type: 'link',
                                url: 'https://notion.so/product-team/launch-readiness',
                                title: 'Launch Readiness Checklist',
                                description: 'Live tracker for experiment rollout and QA sign-off.'
                            }
                        ],
                        status: 'seen'
                    },
                    {
                        id: 'g1-m3',
                        senderId: 'u1',
                        timestamp: '2024-05-23T07:12:00Z',
                        text: 'Documenting the funnel experiment in this deck. Please leave comments before noon.',
                        attachments: [
                            {
                                id: 'g1-doc1',
                                type: 'document',
                                name: 'Activation-Funnel-v2.pptx',
                                size: '4.1 MB',
                                url: 'https://example.com/files/Activation-Funnel-v2.pptx'
                            }
                        ],
                        status: 'sent'
                    },
                    {
                        id: 'g1-m4',
                        senderId: 'u2',
                        timestamp: '2024-05-23T07:18:00Z',
                        text: 'We captured a quick clip of the latest prototype for async review.',
                        attachments: [
                            {
                                id: 'g1-img1',
                                type: 'image',
                                url: 'https://www.gstatic.com/webp/gallery/4.jpg',
                                groupId: 'g1-prototype',
                                alt: 'Prototype frame 1'
                            },
                            {
                                id: 'g1-img2',
                                type: 'image',
                                url: 'https://www.gstatic.com/webp/gallery/5.jpg',
                                groupId: 'g1-prototype',
                                alt: 'Prototype frame 2'
                            }
                        ],
                        status: 'sent'
                    }
                ]
            },
            {
                id: 'g2',
                name: 'Growth Guild',
                avatar: 'https://ssl.gstatic.com/images/branding/product/1x/chat_2020q4_64dp.png',
                description: 'Lifecycle, paid marketing, retention',
                members: ['u1', 'u5', 'u6'],
                unreadCount: 0,
                pinned: false,
                messages: [
                    {
                        id: 'g2-m1',
                        senderId: 'u5',
                        timestamp: '2024-05-22T15:25:00Z',
                        text: 'Reminder: tomorrow we present the retention loops deck to leadership.',
                        status: 'seen'
                    },
                    {
                        id: 'g2-m2',
                        senderId: 'u6',
                        timestamp: '2024-05-22T15:42:00Z',
                        text: 'Customer success highlights are consolidated here: https://miro.com/app/board/hub-journey',
                        status: 'seen'
                    },
                    {
                        id: 'g2-m3',
                        senderId: 'u1',
                        timestamp: '2024-05-22T16:03:00Z',
                        text: 'Perfect, I will update the activation experiment figures before EOD.',
                        status: 'delivered'
                    }
                ]
            }
        ]
    });

    Object.assign(staticData, {
        callLogs: [
            {
                id: 'call1',
                type: 'video',
                direction: 'outgoing',
                status: 'completed',
                timestamp: '2024-05-21T15:00:00Z',
                duration: '16m 24s',
                summary: 'Weekly design sync',
                contextType: 'direct',
                contextId: 'c1',
                participants: [
                    { userId: 'u1', micOn: true, videoOn: true },
                    { userId: 'u2', micOn: true, videoOn: false }
                ]
            },
            {
                id: 'call2',
                type: 'voice',
                direction: 'incoming',
                status: 'missed',
                timestamp: '2024-05-22T09:12:00Z',
                duration: '--',
                summary: 'QA escalation',
                contextType: 'direct',
                contextId: 'c2',
                participants: [
                    { userId: 'u3', micOn: true, videoOn: false },
                    { userId: 'u1', micOn: true, videoOn: false }
                ]
            },
            {
                id: 'call3',
                type: 'video',
                direction: 'outgoing',
                status: 'completed',
                timestamp: '2024-05-20T18:45:00Z',
                duration: '28m 02s',
                summary: 'Launch rehearsal',
                contextType: 'group',
                contextId: 'g1',
                participants: [
                    { userId: 'u1', micOn: true, videoOn: true },
                    { userId: 'u2', micOn: true, videoOn: false },
                    { userId: 'u3', micOn: true, videoOn: true },
                    { userId: 'u4', micOn: false, videoOn: false }
                ]
            }
        ],
        emoji: ['😀','😁','😂','🤣','😃','😄','😊','😍','🤩','😘','😉','😇','🥳','🤗','🤔','🤨','😐','😶','🙄','😏','😴','🤤','😪','😷','🤒','🤕','🤠','🥸','😎','🤓','🥰','😬','😅','😓','😭','😡','😤','🤯','😱','😲','🤩','🥺','🙌','👏','👍','👎','🙏','🔥','🌟','⚡','🎯','✅','📎','📁','🗂️','📝','📞','💬']
    });

    const getCurrentUser = () => staticData.currentUser;
    const getContacts = () => staticData.contacts;
    const getDirectChats = () => staticData.directChats;
    const getGroupChats = () => staticData.groupChats;
    const getCallLogs = () => staticData.callLogs;
    const getEmojiPalette = () => staticData.emoji;

    const state = {
        activeTab: 'direct',
        activeConversationId: null,
        activeConversationType: null,
        attachmentQueue: [],
        mediaGroups: new Map(),
        activeMediaGroup: null,
        callSession: null,
        sidebarOpen: false,
        uploadBatch: 0
    };

    const elements = {
        app: document.getElementById('chatApp'),
        sidebar: document.querySelector('.chat-sidebar'),
        sidebarList: document.getElementById('sidebarList'),
        sidebarTabs: Array.from(document.querySelectorAll('.sidebar-tabs .tab')),
        searchInput: document.getElementById('sidebarSearch'),
        currentUserName: document.getElementById('currentUserName'),
        currentUserStatus: document.getElementById('currentUserStatus'),
        currentUserAvatar: document.getElementById('currentUserAvatar'),
        chatRecipientName: document.getElementById('chatRecipientName'),
        chatRecipientMeta: document.getElementById('chatRecipientMeta'),
        chatRecipientAvatar: document.getElementById('chatRecipientAvatar'),
        chatBody: document.getElementById('chatBody'),
        chatEmptyState: document.getElementById('chatEmptyState'),
        messageInput: document.getElementById('messageInput'),
        sendButton: document.getElementById('btnSendMessage'),
        emojiButton: document.getElementById('btnEmojiPicker'),
        emojiPanel: document.getElementById('emojiPanel'),
        emojiGrid: document.getElementById('emojiGrid'),
        emojiClose: document.getElementById('btnEmojiPanelClose'),
        attachmentInput: document.getElementById('attachmentInput'),
        attachmentPreview: document.getElementById('attachmentPreview'),
        attachButton: document.getElementById('btnAttach'),
        toggleSidebarBtn: document.getElementById('btnToggleSidebar'),
        newChatBtn: document.getElementById('btnNewChat'),
        newGroupBtn: document.getElementById('btnNewGroup'),
        settingsBtn: document.getElementById('btnSettings'),
        conversationInfoBtn: document.getElementById('btnConversationInfo'),
        videoCallBtn: document.getElementById('btnVideoCall'),
        voiceCallBtn: document.getElementById('btnVoiceCall'),
        alert: document.getElementById('customAlert'),
        alertMessage: document.getElementById('customAlertMessage'),
        alertBtn: document.getElementById('customAlertBtn'),
        mediaViewer: document.getElementById('mediaViewer'),
        mediaViewerImage: document.getElementById('mediaViewerImage'),
        mediaViewerThumbs: document.getElementById('mediaViewerThumbs'),
        mediaViewerClose: document.getElementById('mediaViewerClose'),
        mediaViewerOverlay: document.querySelector('.media-viewer__overlay'),
        callModal: document.getElementById('callModal'),
        callModalTitle: document.getElementById('callModalTitle'),
        callParticipants: document.getElementById('callParticipants'),
        callModalClose: document.getElementById('callModalClose'),
        callModalOverlay: document.querySelector('.call-modal__overlay'),
        toggleMicBtn: document.getElementById('btnToggleMic'),
        toggleCameraBtn: document.getElementById('btnToggleCamera'),
        endCallBtn: document.getElementById('btnEndCall')
    };

    const directory = new Map();

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        if (!elements.app) {
            return;
        }

        buildDirectory();
        deriveConversationMeta();
        bindEvents();
        renderCurrentUser();
        renderEmojiGrid();
        renderAttachmentPreview();
        renderSidebarList();
        loadInitialConversation();
        autoResizeTextarea();
    }

    function buildDirectory() {
        directory.clear();
        const currentUser = getCurrentUser();
        directory.set(currentUser.id, currentUser);
        getContacts().forEach(contact => {
            directory.set(contact.id, contact);
        });
    }

    function deriveConversationMeta() {
        const currentUser = getCurrentUser();
        getDirectChats().forEach(chat => {
            chat.type = 'direct';
            chat.participants = [currentUser.id, chat.participantId];
            chat.messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            chat.messages.forEach(message => {
                message.status = message.status || 'sent';
            });
            chat.lastActivity = chat.lastActivity || getLastTimestamp(chat.messages);
        });

        getGroupChats().forEach(group => {
            group.type = 'group';
            group.participants = group.members.slice();
            group.messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            group.messages.forEach(message => {
                message.status = message.status || 'sent';
            });
            group.lastActivity = group.lastActivity || getLastTimestamp(group.messages);
        });

        getCallLogs().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    function getLastTimestamp(messages) {
        if (!messages.length) {
            return new Date().toISOString();
        }
        return messages[messages.length - 1].timestamp;
    }

    function bindEvents() {
        elements.sidebarTabs.forEach(tab => {
            tab.addEventListener('click', handleTabChange);
        });

        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', () => renderSidebarList());
        }

        if (elements.sendButton) {
            elements.sendButton.addEventListener('click', handleSendMessage);
        }

        if (elements.messageInput) {
            elements.messageInput.addEventListener('keydown', event => {
                if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    handleSendMessage();
                }
            });
        }

        if (elements.emojiButton) {
            elements.emojiButton.addEventListener('click', toggleEmojiPanel);
        }

        if (elements.emojiClose) {
            elements.emojiClose.addEventListener('click', closeEmojiPanel);
        }

        document.addEventListener('click', handleGlobalClick);

        if (elements.attachButton && elements.attachmentInput) {
            elements.attachButton.addEventListener('click', () => elements.attachmentInput.click());
            elements.attachmentInput.addEventListener('change', handleAttachmentSelection);
        }

        if (elements.alertBtn) {
            elements.alertBtn.addEventListener('click', hideAlert);
        }

        if (elements.alert) {
            elements.alert.addEventListener('click', event => {
                if (event.target === elements.alert) {
                    hideAlert();
                }
            });
        }

        if (elements.mediaViewerClose) {
            elements.mediaViewerClose.addEventListener('click', closeMediaViewer);
        }

        if (elements.mediaViewerOverlay) {
            elements.mediaViewerOverlay.addEventListener('click', closeMediaViewer);
        }

        if (elements.callModalClose) {
            elements.callModalClose.addEventListener('click', endCurrentCall);
        }

        if (elements.callModalOverlay) {
            elements.callModalOverlay.addEventListener('click', endCurrentCall);
        }

        if (elements.toggleMicBtn) {
            elements.toggleMicBtn.addEventListener('click', toggleLocalMic);
        }

        if (elements.toggleCameraBtn) {
            elements.toggleCameraBtn.addEventListener('click', toggleLocalCamera);
        }

        if (elements.endCallBtn) {
            elements.endCallBtn.addEventListener('click', endCurrentCall);
        }

        if (elements.videoCallBtn) {
            elements.videoCallBtn.addEventListener('click', () => startCall('video'));
        }

        if (elements.voiceCallBtn) {
            elements.voiceCallBtn.addEventListener('click', () => startCall('voice'));
        }

        if (elements.newChatBtn) {
            elements.newChatBtn.addEventListener('click', () => showAlert('Start a conversation by selecting a teammate from the list. This preview uses static data.'));
        }

        if (elements.newGroupBtn) {
            elements.newGroupBtn.addEventListener('click', () => showAlert('Group creation is available in the live product. This prototype bundles a static roster.'));
        }

        if (elements.settingsBtn) {
            elements.settingsBtn.addEventListener('click', () => showAlert('Preferences will open the workspace settings in the full experience.'));
        }

        if (elements.conversationInfoBtn) {
            elements.conversationInfoBtn.addEventListener('click', handleConversationInfo);
        }

        if (elements.toggleSidebarBtn) {
            elements.toggleSidebarBtn.addEventListener('click', () => toggleSidebar());
        }

        window.addEventListener('resize', handleViewportChange);
        document.addEventListener('keydown', handleShortcutKeys);
    }

    function handleTabChange(event) {
        const targetTab = event.currentTarget.dataset.target;
        if (!targetTab || targetTab === state.activeTab) {
            return;
        }

        state.activeTab = targetTab;

        elements.sidebarTabs.forEach(tab => {
            const isActive = tab.dataset.target === targetTab;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
        });

        if (elements.searchInput) {
            elements.searchInput.value = '';
        }

        renderSidebarList();
    }

    function handleGlobalClick(event) {
        if (elements.emojiPanel && elements.emojiPanel.classList.contains('open')) {
            const withinPanel = elements.emojiPanel.contains(event.target);
            const isToggle = elements.emojiButton && elements.emojiButton.contains(event.target);
            if (!withinPanel && !isToggle) {
                closeEmojiPanel();
            }
        }

        if (state.sidebarOpen && window.innerWidth <= 900) {
            const insideSidebar = elements.sidebar && elements.sidebar.contains(event.target);
            const toggleClicked = elements.toggleSidebarBtn && elements.toggleSidebarBtn.contains(event.target);
            if (!insideSidebar && !toggleClicked) {
                toggleSidebar(false);
            }
        }
    }

    function handleViewportChange() {
        if (window.innerWidth > 900 && elements.sidebar) {
            elements.sidebar.classList.remove('open');
            state.sidebarOpen = false;
        }

        if (elements.emojiPanel && elements.emojiPanel.classList.contains('open')) {
            positionEmojiPanel();
        }
    }

    function handleShortcutKeys(event) {
        if (event.key === 'Escape') {
            closeEmojiPanel();
            closeMediaViewer();
            if (state.callSession) {
                endCurrentCall();
            }
            if (state.sidebarOpen && window.innerWidth <= 900) {
                toggleSidebar(false);
            }
        }
    }

    function toggleSidebar(force) {
        if (!elements.sidebar) {
            return;
        }
        const shouldOpen = typeof force === 'boolean' ? force : !state.sidebarOpen;
        state.sidebarOpen = shouldOpen;
        elements.sidebar.classList.toggle('open', shouldOpen);
    }

    function renderCurrentUser() {
        const currentUser = getCurrentUser();
        if (elements.currentUserName) {
            elements.currentUserName.textContent = currentUser.name;
        }
        if (elements.currentUserStatus) {
            elements.currentUserStatus.textContent = currentUser.status || formatPresenceLabel(currentUser.presence);
        }
        if (elements.currentUserAvatar) {
            elements.currentUserAvatar.src = currentUser.avatar || buildInitialsAvatar(currentUser.name);
            elements.currentUserAvatar.alt = `${currentUser.name} avatar`;
        }
    }

    function renderSidebarList() {
        if (!elements.sidebarList) {
            return;
        }

        const query = elements.searchInput ? elements.searchInput.value.trim().toLowerCase() : '';
        const list = elements.sidebarList;
        list.innerHTML = '';

        if (state.activeTab === 'calls') {
            const calls = filterCalls(getCallLogs(), query);
            if (!calls.length) {
                list.appendChild(createEmptyState('No calls yet.'));
                return;
            }
            calls.forEach(call => list.appendChild(createCallLogTile(call)));
            return;
        }

        const isDirect = state.activeTab === 'direct';
        const source = isDirect ? getDirectChats() : getGroupChats();
        const filtered = filterConversations(source, query, isDirect ? 'direct' : 'group');

        if (!filtered.length) {
            list.appendChild(createEmptyState('No conversations found.'));
            return;
        }

        filtered.forEach(conversation => {
            list.appendChild(createConversationTile(conversation, isDirect ? 'direct' : 'group'));
        });
    }

    function filterConversations(conversations, query, type) {
        const sorted = [...conversations].sort((a, b) => {
            if (Boolean(b.pinned) !== Boolean(a.pinned)) {
                return Number(Boolean(b.pinned)) - Number(Boolean(a.pinned));
            }
            return new Date(b.lastActivity) - new Date(a.lastActivity);
        });

        if (!query) {
            return sorted;
        }

        return sorted.filter(conversation => {
            if (type === 'direct') {
                const contact = getContactById(conversation.participantId);
                const nameMatch = contact && contact.name.toLowerCase().includes(query);
                const topicMatch = conversation.topic && conversation.topic.toLowerCase().includes(query);
                const messageMatch = conversation.messages.some(message => (message.text || '').toLowerCase().includes(query));
                return nameMatch || topicMatch || messageMatch;
            }

            if (type === 'group') {
                const nameMatch = conversation.name.toLowerCase().includes(query);
                const descriptionMatch = (conversation.description || '').toLowerCase().includes(query);
                const messageMatch = conversation.messages.some(message => (message.text || '').toLowerCase().includes(query));
                return nameMatch || descriptionMatch || messageMatch;
            }

            return false;
        });
    }

    function filterCalls(calls, query) {
        if (!query) {
            return [...calls];
        }
        return calls.filter(call => {
            const participants = call.participants
                .map(participant => {
                    const user = getContactById(participant.userId);
                    return user ? user.name : '';
                })
                .join(' ')
                .toLowerCase();
            const summaryMatch = (call.summary || '').toLowerCase().includes(query);
            const statusMatch = (call.status || '').toLowerCase().includes(query);
            return participants.includes(query) || summaryMatch || statusMatch;
        });
    }

    function createConversationTile(conversation, type) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'conversation-tile';
        button.dataset.id = conversation.id;
        button.dataset.type = type;

        if (state.activeConversationId === conversation.id && state.activeConversationType === type) {
            button.classList.add('active');
        }

        const avatarWrapper = document.createElement('div');
        avatarWrapper.className = 'conversation-tile__avatar';

        if (type === 'direct') {
            const contact = getContactById(conversation.participantId);
            const avatar = document.createElement('img');
            avatar.src = (contact && contact.avatar) || buildInitialsAvatar(contact ? contact.name : 'User');
            avatar.alt = `${contact ? contact.name : 'User'} avatar`;
            avatarWrapper.appendChild(avatar);

            const statusIndicator = document.createElement('span');
            statusIndicator.className = `status-indicator ${getPresenceClass(contact ? contact.presence : '')}`;
            avatarWrapper.appendChild(statusIndicator);
        } else {
            if (conversation.avatar) {
                const avatar = document.createElement('img');
                avatar.src = conversation.avatar;
                avatar.alt = `${conversation.name} avatar`;
                avatarWrapper.appendChild(avatar);
            } else {
                const stack = document.createElement('div');
                stack.className = 'avatar-stack';
                const members = conversation.members.slice(0, 4);
                members.forEach(memberId => {
                    const member = getContactById(memberId) || getCurrentUser();
                    const img = document.createElement('img');
                    img.src = member.avatar || buildInitialsAvatar(member.name);
                    img.alt = member.name;
                    stack.appendChild(img);
                });
                avatarWrapper.appendChild(stack);
            }
        }

        const body = document.createElement('div');
        body.className = 'conversation-tile__body';

        const title = document.createElement('div');
        title.className = 'conversation-tile__title';

        const name = document.createElement('span');
        name.textContent = type === 'direct'
            ? (getContactById(conversation.participantId)?.name || 'Teammate')
            : conversation.name;
        title.appendChild(name);

        const time = document.createElement('span');
        time.className = 'conversation-tile__time';
        time.textContent = formatSidebarTime(conversation.lastActivity);
        title.appendChild(time);

        body.appendChild(title);

        const messageLine = document.createElement('div');
        messageLine.className = 'conversation-tile__message';

        const snippet = document.createElement('span');
        snippet.textContent = limitText(generatePreviewText(conversation, type));
        messageLine.appendChild(snippet);

        if (conversation.unreadCount && conversation.unreadCount > 0) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = conversation.unreadCount > 9 ? '9+' : String(conversation.unreadCount);
            messageLine.appendChild(badge);
        }

        body.appendChild(messageLine);

        if (conversation.topic && type === 'direct') {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.textContent = conversation.topic;
            body.appendChild(chip);
        }

        button.appendChild(avatarWrapper);
        button.appendChild(body);

        button.addEventListener('click', () => loadConversation(conversation.id, type));

        return button;
    }

    function createCallLogTile(call) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'conversation-tile';
        button.dataset.callId = call.id;

        const avatarWrapper = document.createElement('div');
        avatarWrapper.className = 'conversation-tile__avatar';

        const stack = document.createElement('div');
        stack.className = 'avatar-stack';
        call.participants.slice(0, 4).forEach(participant => {
            const user = getContactById(participant.userId) || getCurrentUser();
            const img = document.createElement('img');
            img.src = user.avatar || buildInitialsAvatar(user.name);
            img.alt = user.name;
            stack.appendChild(img);
        });
        avatarWrapper.appendChild(stack);

        const body = document.createElement('div');
        body.className = 'conversation-tile__body';

        const title = document.createElement('div');
        title.className = 'conversation-tile__title';

        const summary = document.createElement('span');
        summary.textContent = call.summary || (call.type === 'video' ? 'Video call' : 'Voice call');
        title.appendChild(summary);

        const time = document.createElement('span');
        time.className = 'conversation-tile__time';
        time.textContent = formatSidebarTime(call.timestamp);
        title.appendChild(time);

        body.appendChild(title);

        const meta = document.createElement('div');
        meta.className = 'conversation-tile__message';

        const details = document.createElement('span');
        details.textContent = `${capitalize(call.direction)} - ${call.duration}`;
        meta.appendChild(details);

        const status = document.createElement('span');
        status.className = `chip ${getCallStatusClass(call.status)}`;
        status.textContent = capitalize(call.status);
        meta.appendChild(status);

        body.appendChild(meta);

        const mode = document.createElement('span');
        mode.className = 'chip';
        mode.textContent = call.type === 'video' ? 'Video' : 'Voice';
        body.appendChild(mode);

        button.appendChild(avatarWrapper);
        button.appendChild(body);

        button.addEventListener('click', () => startCall(call.type, call));

        return button;
    }

    function createEmptyState(message) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent = message;
        return empty;
    }

    function loadConversation(id, type) {
        const conversation = getConversationById(id, type);
        if (!conversation) {
            return;
        }

        state.activeConversationId = id;
        state.activeConversationType = type;

        conversation.unreadCount = 0;

        closeEmojiPanel();
        renderConversationHeader(conversation, type);
        renderConversation(conversation, type);
        renderSidebarList();
    }

    function getActiveConversation() {
        if (!state.activeConversationId || !state.activeConversationType) {
            return null;
        }
        return getConversationById(state.activeConversationId, state.activeConversationType);
    }

    function renderConversationHeader(conversation, type) {
        if (!conversation) {
            if (elements.chatRecipientName) {
                elements.chatRecipientName.textContent = 'No conversation selected';
            }
            if (elements.chatRecipientMeta) {
                elements.chatRecipientMeta.textContent = '';
            }
            if (elements.chatRecipientAvatar) {
                elements.chatRecipientAvatar.src = '';
                elements.chatRecipientAvatar.alt = '';
            }
            if (elements.videoCallBtn) {
                elements.videoCallBtn.disabled = true;
            }
            if (elements.voiceCallBtn) {
                elements.voiceCallBtn.disabled = true;
            }
            return;
        }

        if (elements.videoCallBtn) {
            elements.videoCallBtn.disabled = false;
        }
        if (elements.voiceCallBtn) {
            elements.voiceCallBtn.disabled = false;
        }

        if (type === 'direct') {
            const contact = getContactById(conversation.participantId);
            if (elements.chatRecipientName) {
                elements.chatRecipientName.textContent = contact ? contact.name : 'Teammate';
            }
            if (elements.chatRecipientMeta) {
            const pieces = [
                contact?.role,
                formatPresenceLabel(contact?.presence),
                conversation.topic
            ].filter(Boolean);
            elements.chatRecipientMeta.textContent = pieces.join(' - ');
            }
            if (elements.chatRecipientAvatar) {
                elements.chatRecipientAvatar.src = (contact && contact.avatar) || buildInitialsAvatar(contact ? contact.name : 'Teammate');
                elements.chatRecipientAvatar.alt = `${contact ? contact.name : 'Teammate'} avatar`;
            }
        } else {
            if (elements.chatRecipientName) {
                elements.chatRecipientName.textContent = conversation.name;
            }
            if (elements.chatRecipientMeta) {
                const descriptor = conversation.description || 'Group conversation';
                elements.chatRecipientMeta.textContent = `${conversation.members.length} members - ${descriptor}`;
            }
            if (elements.chatRecipientAvatar) {
                elements.chatRecipientAvatar.src = conversation.avatar || buildGroupAvatar(conversation.name);
                elements.chatRecipientAvatar.alt = `${conversation.name} avatar`;
            }
        }
    }

    function renderConversation(conversation, type) {
        if (!elements.chatBody) {
            return;
        }

        const body = elements.chatBody;
        const emptyState = elements.chatEmptyState;
        body.innerHTML = '';
        state.mediaGroups.clear();
        state.activeMediaGroup = null;

        if (!conversation) {
            if (emptyState) {
                emptyState.hidden = false;
                body.appendChild(emptyState);
            }
            if (elements.videoCallBtn) {
                elements.videoCallBtn.disabled = true;
            }
            if (elements.voiceCallBtn) {
                elements.voiceCallBtn.disabled = true;
            }
            return;
        }

        if (emptyState) {
            emptyState.hidden = true;
        }

        if (!conversation.messages.length) {
            const placeholder = document.createElement('div');
            placeholder.className = 'chat-day-divider';
            placeholder.textContent = 'No messages yet';
            body.appendChild(placeholder);
            return;
        }

        const fragment = document.createDocumentFragment();
        let previousDayKey = '';

        conversation.messages.forEach(message => {
            const dayKey = formatDateKey(message.timestamp);
            if (dayKey !== previousDayKey) {
                fragment.appendChild(createDayDivider(message.timestamp));
                previousDayKey = dayKey;
            }
            fragment.appendChild(createMessageElement(message, type));
        });

        body.appendChild(fragment);
        scrollChatToBottom();
    }

    function createDayDivider(timestamp) {
        const divider = document.createElement('div');
        divider.className = 'chat-day-divider';
        divider.textContent = formatDayLabel(timestamp);
        return divider;
    }

    function createMessageElement(message, type) {
        const currentUser = getCurrentUser();
        const isOutgoing = message.senderId === currentUser.id;
        const wrapper = document.createElement('article');
        wrapper.className = `message ${isOutgoing ? 'message--outgoing' : 'message--incoming'}`;

        const sender = getContactById(message.senderId) || currentUser;

        const avatar = document.createElement('img');
        avatar.className = 'message__avatar';
        avatar.src = sender.avatar || buildInitialsAvatar(sender.name);
        avatar.alt = `${sender.name} avatar`;
        wrapper.appendChild(avatar);

        const bubble = document.createElement('div');
        bubble.className = 'message__bubble';

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'message__content';

        if (type === 'group' && !isOutgoing) {
            const senderLabel = document.createElement('span');
            senderLabel.className = 'message__sender';
            senderLabel.textContent = sender.name;
            bubble.appendChild(senderLabel);
        }

        if (message.text) {
            const text = document.createElement('p');
            text.className = 'message__text';
            text.innerHTML = linkifyText(message.text);
            contentWrapper.appendChild(text);
        }

        if (Array.isArray(message.attachments) && message.attachments.length) {
            const attachmentsBlock = renderAttachments(message.attachments);
            if (attachmentsBlock) {
                contentWrapper.appendChild(attachmentsBlock);
            }
        }

        bubble.appendChild(contentWrapper);

        const meta = document.createElement('div');
        meta.className = 'message__meta';

        const time = document.createElement('span');
        time.textContent = formatTime(message.timestamp);
        meta.appendChild(time);

        if (isOutgoing) {
            const status = document.createElement('span');
            status.className = 'message-status';
            if (message.status === 'seen') {
                status.classList.add('message-status__seen');
            }
            meta.appendChild(status);

            if (message.status) {
                const label = document.createElement('span');
                label.textContent = capitalize(message.status);
                meta.appendChild(label);
            }
        }

        bubble.appendChild(meta);
        wrapper.appendChild(bubble);

        return wrapper;
    }

    function renderAttachments(attachments) {
        if (!attachments.length) {
            return null;
        }

        const container = document.createElement('div');
        container.className = 'message-attachments';

        const imageGroups = new Map();
        const others = [];

        attachments.forEach(attachment => {
            if (attachment.type === 'image') {
                const groupKey = attachment.groupId || attachment.id;
                if (!imageGroups.has(groupKey)) {
                    imageGroups.set(groupKey, []);
                }
                imageGroups.get(groupKey).push(attachment);
            } else {
                others.push(attachment);
            }
        });

        imageGroups.forEach((group, groupId) => {
            registerMediaGroup(groupId, group);
            const groupContainer = document.createElement('div');
            groupContainer.className = 'attachment-group';
            group.forEach((image, index) => {
                const item = document.createElement('div');
                item.className = 'attachment attachment--image';
                item.dataset.groupId = groupId;
                item.dataset.index = String(index);

                const img = document.createElement('img');
                img.src = image.url;
                img.alt = image.alt || 'Shared image';
                img.loading = 'lazy';
                item.appendChild(img);

                item.addEventListener('click', () => openMediaViewer(groupId, index));
                groupContainer.appendChild(item);
            });
            container.appendChild(groupContainer);
        });

        others.forEach(attachment => {
            if (attachment.type === 'document' || attachment.type === 'file') {
                container.appendChild(createFileAttachment(attachment));
            } else if (attachment.type === 'link') {
                container.appendChild(createLinkAttachment(attachment));
            }
        });

        return container;
    }

    function createFileAttachment(attachment) {
        const wrapper = document.createElement('div');
        wrapper.className = 'attachment attachment--file';

        const label = document.createElement('div');
        label.className = 'attachment__label';

        const icon = document.createElement('i');
        icon.className = 'icon fa-solid fa-file';
        label.appendChild(icon);

        const name = document.createElement('span');
        name.textContent = attachment.name || 'Document';
        label.appendChild(name);

        wrapper.appendChild(label);

        if (attachment.size) {
            const size = document.createElement('span');
            size.className = 'attachment__size';
            size.textContent = attachment.size;
            wrapper.appendChild(size);
        }

        const download = document.createElement('a');
        download.className = 'attachment__download';
        download.href = attachment.url || '#';
        download.target = '_blank';
        download.rel = 'noopener';
        if (attachment.url) {
            download.setAttribute('download', attachment.name || 'attachment');
        }

        const downloadIcon = document.createElement('i');
        downloadIcon.className = 'icon fa-solid fa-download';
        download.appendChild(downloadIcon);

        const downloadText = document.createElement('span');
        downloadText.textContent = 'Download';
        download.appendChild(downloadText);

        wrapper.appendChild(download);

        return wrapper;
    }

    function createLinkAttachment(attachment) {
        const link = document.createElement('a');
        link.className = 'attachment attachment--file attachment--link';
        link.href = attachment.url;
        link.target = '_blank';
        link.rel = 'noopener';

        const label = document.createElement('div');
        label.className = 'attachment__label';

        const icon = document.createElement('i');
        icon.className = 'icon fa-solid fa-link';
        label.appendChild(icon);

        const title = document.createElement('span');
        title.textContent = attachment.title || attachment.url;
        label.appendChild(title);

        link.appendChild(label);

        if (attachment.description) {
            const desc = document.createElement('span');
            desc.className = 'attachment__description';
            desc.textContent = attachment.description;
            link.appendChild(desc);
        }

        return link;
    }

    function registerMediaGroup(groupId, attachments) {
        if (!groupId || !attachments.length) {
            return;
        }
        const normalized = attachments.map(item => ({
            url: item.url,
            alt: item.alt || '',
            name: item.name || ''
        }));
        state.mediaGroups.set(groupId, normalized);
    }

    function openMediaViewer(groupId, index = 0) {
        const group = state.mediaGroups.get(groupId);
        if (!group || !group.length || !elements.mediaViewer) {
            return;
        }

        const safeIndex = index >= 0 && index < group.length ? index : 0;
        state.activeMediaGroup = { id: groupId, index: safeIndex };

        elements.mediaViewerImage.src = group[safeIndex].url;
        elements.mediaViewerImage.alt = group[safeIndex].alt || 'Shared media';

        renderMediaViewerThumbs(group, safeIndex);

        elements.mediaViewer.classList.add('open');
        elements.mediaViewer.setAttribute('aria-hidden', 'false');
    }

    function renderMediaViewerThumbs(group, activeIndex) {
        if (!elements.mediaViewerThumbs) {
            return;
        }

        elements.mediaViewerThumbs.innerHTML = '';
        const fragment = document.createDocumentFragment();

        group.forEach((item, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            if (index === activeIndex) {
                button.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = item.url;
            img.alt = item.alt || 'Thumbnail';
            button.appendChild(img);

            button.addEventListener('click', () => {
                if (!state.activeMediaGroup) {
                    return;
                }
                state.activeMediaGroup = { id: state.activeMediaGroup.id, index };
                elements.mediaViewerImage.src = item.url;
                elements.mediaViewerImage.alt = item.alt || 'Shared media';
                renderMediaViewerThumbs(group, index);
            });

            fragment.appendChild(button);
        });

        elements.mediaViewerThumbs.appendChild(fragment);
    }

    function closeMediaViewer() {
        if (!elements.mediaViewer) {
            return;
        }
        elements.mediaViewer.classList.remove('open');
        elements.mediaViewer.setAttribute('aria-hidden', 'true');
        state.activeMediaGroup = null;
    }

    function renderEmojiGrid() {
        if (!elements.emojiGrid) {
            return;
        }
        elements.emojiGrid.innerHTML = '';
        getEmojiPalette().forEach(symbol => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = symbol;
            button.addEventListener('click', () => insertEmoji(symbol));
            elements.emojiGrid.appendChild(button);
        });
    }

    function insertEmoji(symbol) {
        if (!elements.messageInput) {
            return;
        }
        const textarea = elements.messageInput;
        const start = textarea.selectionStart ?? textarea.value.length;
        const end = textarea.selectionEnd ?? textarea.value.length;
        const value = textarea.value;
        textarea.value = `${value.slice(0, start)}${symbol}${value.slice(end)}`;
        textarea.focus();
        const caret = start + symbol.length;
        textarea.setSelectionRange(caret, caret);
        textarea.dispatchEvent(new Event('input'));
    }

    function toggleEmojiPanel() {
        if (!elements.emojiPanel) {
            return;
        }
        if (elements.emojiPanel.classList.contains('open')) {
            closeEmojiPanel();
        } else {
            openEmojiPanel();
        }
    }

    function openEmojiPanel() {
        if (!elements.emojiPanel) {
            return;
        }
        elements.emojiPanel.classList.add('open');
        elements.emojiPanel.setAttribute('aria-hidden', 'false');
        positionEmojiPanel();
    }

    function closeEmojiPanel() {
        if (!elements.emojiPanel) {
            return;
        }
        elements.emojiPanel.classList.remove('open');
        elements.emojiPanel.setAttribute('aria-hidden', 'true');
    }

    function positionEmojiPanel() {
        if (!elements.emojiPanel || !elements.emojiButton) {
            return;
        }

        const rect = elements.emojiButton.getBoundingClientRect();
        const panel = elements.emojiPanel;
        const panelWidth = panel.offsetWidth || 320;
        const maxLeft = window.innerWidth - panelWidth - 20;
        const left = Math.min(Math.max(rect.left, 16), Math.max(16, maxLeft));
        panel.style.left = `${left}px`;

        if (window.innerWidth < 700) {
            panel.style.bottom = '140px';
        } else {
            const spaceBelow = window.innerHeight - rect.bottom;
            const bottom = spaceBelow + 16;
            panel.style.bottom = `${Math.max(bottom, 120)}px`;
        }
    }

    function handleSendMessage() {
        const conversation = getActiveConversation();
        if (!conversation) {
            showAlert('Select a conversation to send messages.');
            return;
        }

        if (!elements.messageInput) {
            return;
        }

        const textValue = elements.messageInput.value.trim();
        if (!textValue && state.attachmentQueue.length === 0) {
            showAlert('Add a message or attachments before sending.');
            return;
        }

        const currentUser = getCurrentUser();
        const attachments = state.attachmentQueue.map(item => ({
            id: item.id,
            type: item.type,
            url: item.url,
            name: item.name,
            size: item.size,
            groupId: item.groupId,
            alt: item.alt
        }));

        const message = {
            id: `msg-${Date.now()}`,
            senderId: currentUser.id,
            timestamp: new Date().toISOString(),
            text: textValue,
            attachments,
            status: 'sent'
        };

        conversation.messages.push(message);
        conversation.lastActivity = message.timestamp;

        resetMessageComposer();
        renderConversation(conversation, state.activeConversationType);
        renderSidebarList();
    }

    function resetMessageComposer() {
        if (elements.messageInput) {
            elements.messageInput.value = '';
            elements.messageInput.dispatchEvent(new Event('input'));
        }
        state.attachmentQueue = [];
        renderAttachmentPreview();
        closeEmojiPanel();
    }

    function renderAttachmentPreview() {
        if (!elements.attachmentPreview) {
            return;
        }

        const container = elements.attachmentPreview;
        container.innerHTML = '';

        if (!state.attachmentQueue.length) {
            container.hidden = true;
            return;
        }

        container.hidden = false;

        state.attachmentQueue.forEach(item => {
            const preview = document.createElement('div');
            preview.className = 'attachment-preview__item';
            preview.title = item.name;

            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.name || 'Selected image';
                preview.appendChild(img);
            } else {
                preview.classList.add('attachment-preview__item--file');
                const label = document.createElement('span');
                label.textContent = (item.extension || 'FILE').toUpperCase();
                preview.appendChild(label);
            }

            const remove = document.createElement('button');
            remove.type = 'button';
            remove.className = 'attachment-preview__remove';
            const icon = document.createElement('i');
            icon.className = 'icon fa-solid fa-xmark';
            remove.appendChild(icon);
            remove.addEventListener('click', () => removeAttachmentFromQueue(item.id));
            preview.appendChild(remove);

            container.appendChild(preview);
        });
    }

    function handleAttachmentSelection(event) {
        const files = Array.from(event.target?.files || []);
        if (!files.length) {
            return;
        }

        state.uploadBatch += 1;
        const imageGroupId = `upload-${Date.now()}-${state.uploadBatch}`;

        files.forEach(file => {
            const id = `att-${Date.now()}-${Math.random().toString(16).slice(2)}`;
            const isImage = file.type.startsWith('image/');
            const attachment = {
                id,
                type: isImage ? 'image' : 'document',
                name: file.name,
                size: formatFileSize(file.size),
                url: URL.createObjectURL(file),
                groupId: isImage ? imageGroupId : undefined,
                extension: getFileExtension(file.name),
                alt: file.name,
                isObjectUrl: true
            };
            state.attachmentQueue.push(attachment);
        });

        renderAttachmentPreview();
        event.target.value = '';
    }

    function removeAttachmentFromQueue(id) {
        const index = state.attachmentQueue.findIndex(item => item.id === id);
        if (index === -1) {
            return;
        }
        const [removed] = state.attachmentQueue.splice(index, 1);
        if (removed && removed.isObjectUrl && removed.url) {
            URL.revokeObjectURL(removed.url);
        }
        renderAttachmentPreview();
    }

    function getFileExtension(filename = '') {
        const parts = filename.split('.');
        return parts.length > 1 ? parts.pop() : '';
    }

    function formatFileSize(bytes) {
        if (!Number.isFinite(bytes)) {
            return '';
        }
        const units = ['B', 'KB', 'MB', 'GB'];
        let value = bytes;
        let unitIndex = 0;
        while (value >= 1024 && unitIndex < units.length - 1) {
            value /= 1024;
            unitIndex += 1;
        }
        const precision = value < 10 && unitIndex > 0 ? 1 : 0;
        return `${value.toFixed(precision)} ${units[unitIndex]}`;
    }

    function startCall(type, callLog) {
        if (callLog) {
            const derivedType = callLog.contextType === 'group' ? 'group' : 'direct';
            const conversation = getConversationById(callLog.contextId, derivedType);
            if (conversation) {
                loadConversation(conversation.id, derivedType);
            }
        }

        const conversation = getActiveConversation();
        if (!conversation) {
            showAlert('Select a conversation before starting a call.');
            return;
        }

        const conversationType = state.activeConversationType;
        const participantIds = conversationType === 'direct'
            ? conversation.participants
            : conversation.members;

        const participants = participantIds.map(userId => buildParticipantState(userId, type, callLog));
        const currentUser = getCurrentUser();
        const localParticipant = participants.find(participant => participant.userId === currentUser.id);

        state.callSession = {
            type,
            conversationId: conversation.id,
            conversationType,
            participants,
            local: {
                userId: currentUser.id,
                micOn: localParticipant ? localParticipant.micOn : currentUser.devices?.microphone !== false,
                cameraOn: type === 'video' && localParticipant ? localParticipant.videoOn : type === 'video' && currentUser.devices?.camera !== false
            }
        };

        synchronizeLocalParticipant();
        renderCallModal(conversation, type);
    }

    function renderCallModal(conversation, type) {
        if (!elements.callModal || !state.callSession) {
            return;
        }

        const titleBase = type === 'video' ? 'Video call' : 'Voice call';
        const subject = state.activeConversationType === 'direct'
            ? getContactById(conversation.participantId)?.name || 'Teammate'
            : conversation.name;

        if (elements.callModalTitle) {
            elements.callModalTitle.textContent = `${titleBase} - ${subject}`;
        }

        renderCallParticipants(type);
        updateCallControls();

        elements.callModal.classList.add('open');
        elements.callModal.setAttribute('aria-hidden', 'false');
    }

    function renderCallParticipants(callType) {
        if (!elements.callParticipants || !state.callSession) {
            return;
        }

        elements.callParticipants.innerHTML = '';
        const fragment = document.createDocumentFragment();

        state.callSession.participants.forEach(participant => {
            const tile = document.createElement('div');
            tile.className = 'call-tile';
            const user = getContactById(participant.userId) || getCurrentUser();

            if (callType === 'video') {
                if (participant.videoOn && participant.hasCamera) {
                    const feed = document.createElement('img');
                    feed.className = 'call-tile__video';
                    feed.src = user.avatar || buildInitialsAvatar(user.name);
                    feed.alt = `${user.name} video`;
                    tile.appendChild(feed);
                } else {
                    tile.classList.add('no-camera');
                    const placeholder = document.createElement('div');
                    placeholder.className = 'call-tile__placeholder';
                    placeholder.textContent = participant.hasCamera ? getInitials(user.name) : 'No camera';
                    tile.appendChild(placeholder);
                }
            } else {
                tile.classList.add('voice');
                const avatar = document.createElement('img');
                avatar.className = 'call-tile__avatar';
                avatar.src = user.avatar || buildInitialsAvatar(user.name);
                avatar.alt = `${user.name} avatar`;
                tile.appendChild(avatar);
            }

            const footer = document.createElement('div');
            footer.className = 'call-tile__name';

            const name = document.createElement('span');
            name.textContent = user.name;
            footer.appendChild(name);

            const statusTokens = [];

            if (!participant.micOn) {
                statusTokens.push({ icon: 'fa-solid fa-microphone-slash', label: 'Muted' });
            }

            if (callType === 'video') {
                if (!participant.videoOn || !participant.hasCamera) {
                    statusTokens.push({
                        icon: 'fa-solid fa-video-slash',
                        label: participant.hasCamera ? 'Video off' : 'No camera'
                    });
                }
            }

            if (statusTokens.length) {
                const status = document.createElement('div');
                status.className = 'call-tile__status';
                statusTokens.forEach(token => {
                    const icon = document.createElement('i');
                    icon.className = `icon ${token.icon}`;
                    status.appendChild(icon);
                    const label = document.createElement('span');
                    label.textContent = token.label;
                    status.appendChild(label);
                });
                footer.appendChild(status);
            }

            tile.appendChild(footer);
            fragment.appendChild(tile);
        });

        elements.callParticipants.appendChild(fragment);

        const currentUser = getCurrentUser();
        if (elements.toggleCameraBtn) {
            elements.toggleCameraBtn.disabled = callType === 'voice' || currentUser.devices?.camera === false;
        }
        if (elements.toggleMicBtn) {
            elements.toggleMicBtn.disabled = currentUser.devices?.microphone === false;
        }
    }

    function updateCallControls() {
        if (!state.callSession) {
            return;
        }

        if (elements.toggleMicBtn) {
            const micIcon = elements.toggleMicBtn.querySelector('.icon');
            if (micIcon) {
                micIcon.className = `icon fa-solid ${state.callSession.local.micOn ? 'fa-microphone' : 'fa-microphone-slash'}`;
            }
            elements.toggleMicBtn.title = state.callSession.local.micOn ? 'Mute microphone' : 'Unmute microphone';
            elements.toggleMicBtn.classList.toggle('danger', !state.callSession.local.micOn);
        }

        if (elements.toggleCameraBtn) {
            const cameraIcon = elements.toggleCameraBtn.querySelector('.icon');
            const isCameraEnabled = state.callSession.type === 'video' && state.callSession.local.cameraOn;
            if (cameraIcon) {
                cameraIcon.className = `icon fa-solid ${isCameraEnabled ? 'fa-video' : 'fa-video-slash'}`;
            }
            elements.toggleCameraBtn.title = state.callSession.type === 'video'
                ? (isCameraEnabled ? 'Turn camera off' : 'Turn camera on')
                : 'Camera unavailable for voice calls';
            elements.toggleCameraBtn.classList.toggle('danger', !isCameraEnabled);
        }
    }

    function toggleLocalMic() {
        if (!state.callSession) {
            showAlert('Start a call to manage microphone settings.');
            return;
        }
        const currentUser = getCurrentUser();
        if (currentUser.devices?.microphone === false) {
            showAlert('Microphone hardware not available.');
            return;
        }
        state.callSession.local.micOn = !state.callSession.local.micOn;
        synchronizeLocalParticipant();
        updateCallControls();
        renderCallParticipants(state.callSession.type);
    }

    function toggleLocalCamera() {
        if (!state.callSession) {
            showAlert('Start a call to manage camera settings.');
            return;
        }
        if (state.callSession.type === 'voice') {
            showAlert('Camera is not used on voice calls.');
            return;
        }
        const currentUser = getCurrentUser();
        if (currentUser.devices?.camera === false) {
            showAlert('Camera hardware not available.');
            return;
        }
        state.callSession.local.cameraOn = !state.callSession.local.cameraOn;
        synchronizeLocalParticipant();
        updateCallControls();
        renderCallParticipants(state.callSession.type);
    }

    function endCurrentCall() {
        if (!state.callSession || !elements.callModal) {
            return;
        }
        elements.callModal.classList.remove('open');
        elements.callModal.setAttribute('aria-hidden', 'true');
        state.callSession = null;
    }

    function synchronizeLocalParticipant() {
        if (!state.callSession) {
            return;
        }
        const local = state.callSession.participants.find(participant => participant.userId === state.callSession.local.userId);
        if (local) {
            local.micOn = state.callSession.local.micOn;
            local.videoOn = state.callSession.type === 'video' ? state.callSession.local.cameraOn : false;
        }
    }

    function buildParticipantState(userId, type, callLog) {
        const user = getContactById(userId) || getCurrentUser();
        const callPreference = user.callPreferences || {};
        const logParticipant = callLog ? callLog.participants.find(item => item.userId === userId) : undefined;

        const hasMic = user.devices?.microphone !== false;
        const hasCamera = user.devices?.camera !== false;

        const micOn = hasMic
            ? (logParticipant ? logParticipant.micOn : (callPreference.defaultMicOn !== false))
            : false;

        const videoOn = type === 'video' && hasCamera
            ? (logParticipant ? logParticipant.videoOn : Boolean(callPreference.defaultVideoOn))
            : false;

        return {
            userId,
            hasMic,
            hasCamera,
            micOn,
            videoOn
        };
    }

    function handleConversationInfo() {
        const conversation = getActiveConversation();
        if (!conversation) {
            showAlert('Select a conversation to view details.');
            return;
        }

        if (state.activeConversationType === 'direct') {
            const contact = getContactById(conversation.participantId);
        const meta = [
            contact?.role,
            formatPresenceLabel(contact?.presence),
            conversation.topic
        ].filter(Boolean).join(' - ');
            showAlert(`Chat with ${contact ? contact.name : 'Teammate'}\n${meta}\nLast activity ${formatSidebarTime(conversation.lastActivity)}`);
        } else {
            const memberNames = conversation.members
                .map(id => {
                    const member = getContactById(id);
                    return member ? member.name : getCurrentUser().name;
                })
                .join(', ');
        showAlert(`${conversation.name}\n${conversation.members.length} members - Last activity ${formatSidebarTime(conversation.lastActivity)}\n\n${memberNames}`);
        }
    }

    function showAlert(message) {
        if (!elements.alert || !elements.alertMessage) {
            return;
        }
        elements.alertMessage.textContent = message;
        elements.alert.classList.add('open');
        elements.alert.setAttribute('aria-hidden', 'false');
    }

    function hideAlert() {
        if (!elements.alert) {
            return;
        }
        elements.alert.classList.remove('open');
        elements.alert.setAttribute('aria-hidden', 'true');
    }

    function scrollChatToBottom() {
        if (!elements.chatBody) {
            return;
        }
        requestAnimationFrame(() => {
            elements.chatBody.scrollTop = elements.chatBody.scrollHeight;
        });
    }

    function autoResizeTextarea() {
        if (!elements.messageInput) {
            return;
        }
        const textarea = elements.messageInput;
        textarea.style.height = '68px';
        textarea.style.overflowY = 'auto';
        textarea.addEventListener('input', () => {
            textarea.scrollTop = textarea.scrollHeight;
        });
    }

    function loadInitialConversation() {
        const directChats = getDirectChats();
        const groupChats = getGroupChats();
        if (directChats.length) {
            loadConversation(directChats[0].id, 'direct');
        } else if (groupChats.length) {
            loadConversation(groupChats[0].id, 'group');
        } else {
            renderConversation(null, null);
        }
    }

    function getConversationById(id, type) {
        if (type === 'direct') {
            return getDirectChats().find(chat => chat.id === id) || null;
        }
        if (type === 'group') {
            return getGroupChats().find(group => group.id === id) || null;
        }
        return null;
    }

    function getContactById(id) {
        if (id === getCurrentUser().id) {
            return getCurrentUser();
        }
        return directory.get(id) || null;
    }

    function getLastMessage(conversation) {
        if (!conversation || !conversation.messages || !conversation.messages.length) {
            return null;
        }
        return conversation.messages[conversation.messages.length - 1];
    }

    function generatePreviewText(conversation, type) {
        const lastMessage = getLastMessage(conversation);
        if (!lastMessage) {
            return 'No messages yet';
        }

        let content = '';
        if (lastMessage.text) {
            content = lastMessage.text;
        } else if (Array.isArray(lastMessage.attachments) && lastMessage.attachments.length) {
            content = describeAttachments(lastMessage.attachments);
        }

        if (!content) {
            content = 'New message';
        }

        if (type === 'group' && lastMessage.senderId !== getCurrentUser().id) {
            const sender = getContactById(lastMessage.senderId);
            const senderName = sender ? sender.name.split(' ')[0] : 'Member';
            return `${senderName}: ${content}`;
        }

        const prefix = lastMessage.senderId === getCurrentUser().id ? 'You: ' : '';
        return `${prefix}${content}`;
    }

    function describeAttachments(attachments) {
        const images = attachments.filter(item => item.type === 'image').length;
        const documents = attachments.filter(item => item.type === 'document' || item.type === 'file').length;
        const links = attachments.filter(item => item.type === 'link').length;

        const parts = [];
        if (images) {
            parts.push(`${images} image${images > 1 ? 's' : ''}`);
        }
        if (documents) {
            parts.push(`${documents} document${documents > 1 ? 's' : ''}`);
        }
        if (links) {
            parts.push(`${links} link${links > 1 ? 's' : ''}`);
        }

        return parts.length ? `Shared ${parts.join(', ')}` : 'Sent attachments';
    }

    function limitText(text, limit = 72) {
        if (!text) {
            return '';
        }
        return text.length > limit ? `${text.slice(0, limit)}…` : text;
    }

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function formatSidebarTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        if (isSameDay(date, now)) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        if (isYesterday(date, now)) {
            return 'Yesterday';
        }
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }

    function formatDayLabel(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        if (isSameDay(date, now)) {
            return 'Today';
        }
        if (isYesterday(date, now)) {
            return 'Yesterday';
        }
        return date.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' });
    }

    function formatDateKey(timestamp) {
        const date = new Date(timestamp);
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    function isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }

    function isYesterday(date, reference) {
        const yesterday = new Date(reference);
        yesterday.setDate(reference.getDate() - 1);
        return isSameDay(date, yesterday);
    }

    function formatPresenceLabel(presence) {
        switch (presence) {
            case 'online':
                return 'Online now';
            case 'away':
                return 'Away';
            case 'busy':
                return 'Busy';
            default:
                return 'Offline';
        }
    }

    function getPresenceClass(presence) {
        switch (presence) {
            case 'online':
                return 'online';
            case 'away':
                return 'away';
            case 'busy':
                return 'busy';
            default:
                return '';
        }
    }

    function getCallStatusClass(status) {
        switch (status) {
            case 'completed':
                return 'success';
            case 'missed':
                return 'danger';
            default:
                return 'warning';
        }
    }

    function capitalize(value = '') {
        if (!value) {
            return '';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    function escapeHtml(text = '') {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, char => map[char]);
    }

    function linkifyText(text = '') {
        const escaped = escapeHtml(text);
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return escaped.replace(urlRegex, url => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
    }

    function buildInitialsAvatar(name = '', background) {
        const initials = getInitials(name);
        const color = background || getAvatarColor(name);
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" rx="20" fill="${color}"/><text x="50%" y="55%" text-anchor="middle" font-family="Inter,Segoe UI,sans-serif" font-size="32" fill="#ffffff">${initials}</text></svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svg)}`;
    }

    function getInitials(name = '') {
        const parts = name.trim().split(/\s+/);
        const initials = parts.slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('');
        return initials || 'U';
    }

    function getAvatarColor(seed = '') {
        const palette = ['#2563eb', '#7c3aed', '#0ea5e9', '#22c55e', '#f97316', '#ec4899'];
        const index = seed ? seed.charCodeAt(0) % palette.length : 0;
        return palette[index];
    }

    function buildGroupAvatar(name = '') {
        return buildInitialsAvatar(name, '#1f2937');
    }
})();
