@extends('layout.fluid')
@section('content')
    <div class="bg-gray-900 h-screen w-screen overflow-hidden flex items-center justify-center p-6">

    <!-- Load Custom Styles -->
    <link href="{{ url('css/chat.css') }}" rel="stylesheet">

    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Load Lucide Icons for aesthetic and function -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">

    <!-- Main Application Container -->
    <div class="flex h-[95vh] w-full max-w-[1400px] rounded-2xl overflow-hidden shadow-2xl">

        <!-- 1. Sidebar (Navigation & Profile) - Column 1 -->
        <div class="w-20 frosted-panel flex flex-col items-center py-6 space-y-8 z-10">
            <!-- App Logo/Title -->
            <div class="text-violet-400 text-3xl font-black mb-6">N</div>

            <!-- Navigation Links -->
            <div id="nav-chats" class="cursor-pointer p-3 rounded-xl hover:bg-slate-700 transition duration-150 bg-violet-700 text-white" onclick="showView('chats-view')">
                <i data-lucide="message-square-more" class="w-6 h-6"></i>
            </div>
            <div id="nav-calls" class="cursor-pointer p-3 rounded-xl hover:bg-slate-700 transition duration-150 text-slate-400" onclick="showView('calls-view')">
                <i data-lucide="phone-call" class="w-6 h-6"></i>
            </div>
            <div id="nav-groups" class="cursor-pointer p-3 rounded-xl hover:bg-slate-700 transition duration-150 text-slate-400" onclick="openModal('group-modal')">
                <i data-lucide="users" class="w-6 h-6"></i>
            </div>

            <!-- Spacer -->
            <div class="flex-grow"></div>

            <!-- Settings/Profile -->
            <div class="cursor-pointer p-3 rounded-xl hover:bg-slate-700 transition duration-150 text-slate-400">
                <i data-lucide="settings" class="w-6 h-6"></i>
            </div>
            <div class="w-10 h-10 bg-slate-600 rounded-full cursor-pointer border-2 border-green-500 hover:border-violet-400 transition duration-150 flex items-center justify-center text-sm font-semibold text-white">
                ME
            </div>
        </div>

        <!-- 2. Contacts/Chats List - Column 2 -->
        <div id="chats-and-calls-list" class="w-80 frosted-panel border-r border-slate-700 flex flex-col z-10">
            <div class="p-6">
                <h2 class="text-2xl font-bold text-white mb-4">Chats</h2>
                <div class="relative">
                    <input type="text" placeholder="Search chats or groups..." class="w-full p-2 pl-10 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500">
                    <i data-lucide="search" class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                </div>
            </div>

            <!-- View Toggle Container for Chats -->
            <div id="chats-view" class="h-full custom-scrollbar overflow-y-auto">
                <div class="px-3 py-2 text-xs font-semibold uppercase text-slate-400">Direct Messages</div>
                <!-- 1:1 Chat Item (Active) -->
                <div class="flex items-center p-4 cursor-pointer hover:bg-slate-700/50 transition duration-100 chat-active">
                    <div class="relative">
                        <img src="https://placehold.co/40x40/4c1d95/ffffff?text=JN" class="w-10 h-10 rounded-full object-cover" alt="User Avatar">
                        <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></span>
                    </div>
                    <div class="ml-3 flex-grow overflow-hidden">
                        <p class="text-white font-semibold truncate">Jane Network</p>
                        <p class="text-sm text-slate-400 truncate">You sent an attachment...</p>
                    </div>
                    <div class="text-xs text-slate-400">9:45 AM</div>
                </div>

                <div class="px-3 py-2 text-xs font-semibold uppercase text-slate-400 mt-4">Groups (3)</div>
                <!-- Group Chat Item -->
                <div class="flex items-center p-4 cursor-pointer hover:bg-slate-700/50 transition duration-100" onclick="switchChat('Group: Dev Team Synergy', 'Group: Dev Team Synergy', 'group')">
                    <div class="relative">
                        <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            <i data-lucide="group" class="w-5 h-5"></i>
                        </div>
                    </div>
                    <div class="ml-3 flex-grow overflow-hidden">
                        <p class="text-white font-semibold truncate">Dev Team Synergy</p>
                        <p class="text-sm text-red-400 truncate">@Me: Need to discuss the new feature...</p>
                    </div>
                    <div class="text-xs text-slate-400">Yesterday</div>
                </div>

                <!-- Another 1:1 Chat Item -->
                <div class="flex items-center p-4 cursor-pointer hover:bg-slate-700/50 transition duration-100" onclick="switchChat('Michael Scott', 'Michael Scott', 'individual')">
                    <img src="https://placehold.co/40x40/059669/ffffff?text=MS" class="w-10 h-10 rounded-full object-cover" alt="User Avatar">
                    <div class="ml-3 flex-grow overflow-hidden">
                        <p class="text-white font-semibold truncate">Michael Scott</p>
                        <p class="text-sm text-slate-400 truncate">Ok, I'll send the files...</p>
                    </div>
                    <div class="text-xs text-violet-400 font-bold bg-violet-900 px-2 py-0.5 rounded-full">3</div>
                </div>
            </div>

            <!-- View Toggle Container for Calls -->
            <div id="calls-view" class="h-full custom-scrollbar overflow-y-auto hidden">
                <div class="px-3 py-2 text-xs font-semibold uppercase text-slate-400">Recent Calls</div>
                <!-- Call Item (Group Video) -->
                <div class="flex items-center p-4 cursor-pointer hover:bg-slate-700/50 transition duration-100" onclick="startCall('group-video')">
                    <i data-lucide="video" class="w-5 h-5 text-red-500 mr-3"></i>
                    <div class="flex-grow">
                        <p class="text-white font-semibold">Project Comet Standup</p>
                        <p class="text-sm text-slate-400">Group Video Call (3 participants)</p>
                    </div>
                    <div class="text-xs text-slate-400">10 mins ago</div>
                </div>

                <!-- Call Item (Individual Voice) -->
                <div class="flex items-center p-4 cursor-pointer hover:bg-slate-700/50 transition duration-100" onclick="startCall('individual-voice')">
                    <i data-lucide="phone-missed" class="w-5 h-5 text-yellow-500 mr-3"></i>
                    <div class="flex-grow">
                        <p class="text-white font-semibold">David Wallace</p>
                        <p class="text-sm text-slate-400">Missed Voice Call</p>
                    </div>
                    <div class="text-xs text-slate-400">Yesterday</div>
                </div>
                <div class="mt-4 p-4">
                    <button class="w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition" onclick="openModal('start-call-modal')">
                        <i data-lucide="plus-circle" class="w-5 h-5 inline-block mr-2"></i> Start New Call
                    </button>
                </div>
            </div>
        </div>

        <!-- 3. Main Chat Window - Column 3 -->
        <div class="flex-grow flex flex-col bg-slate-800/80">
            <!-- Chat Header -->
            <div class="frosted-panel p-4 flex justify-between items-center border-b border-slate-700">
                <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm mr-3">JN</div>
                    <div>
                        <h3 id="chat-title" class="text-lg font-bold text-white">Jane Network</h3>
                        <p id="chat-status" class="text-sm text-green-400">Online</p>
                    </div>
                </div>
                <div class="flex space-x-3">
                    <!-- Individual Call Buttons -->
                    <button id="btn-video-call" class="p-2 rounded-full bg-slate-700 text-violet-400 hover:bg-violet-600 hover:text-white transition group-individual-only" onclick="startCall('individual-video')">
                        <i data-lucide="video" class="w-5 h-5"></i>
                    </button>
                    <button id="btn-voice-call" class="p-2 rounded-full bg-slate-700 text-violet-400 hover:bg-violet-600 hover:text-white transition group-individual-only" onclick="startCall('individual-voice')">
                        <i data-lucide="phone-call" class="w-5 h-5"></i>
                    </button>

                    <!-- Group Info Button (visible for group chats) -->
                    <button id="btn-group-info" class="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-slate-600 transition group-group-only hidden">
                        <i data-lucide="info" class="w-5 h-5"></i>
                    </button>
                    <button class="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-slate-600 transition">
                        <i data-lucide="more-vertical" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>

            <!-- Message Area -->
            <div id="message-area" class="flex-grow p-6 overflow-y-auto custom-scrollbar space-y-4">
                <!-- Received Message (Example) -->
                <div class="flex justify-start">
                    <div class="max-w-xs md:max-w-md">
                        <div class="bg-slate-700 p-3 rounded-t-xl rounded-br-xl text-white shadow-md">
                            Hey! The latest project files are ready. I'll send them over now.
                        </div>
                        <p class="text-xs text-slate-500 mt-1">Jane Network, 9:44 AM</p>
                    </div>
                </div>
                <!-- Attachment Received (Example) -->
                <div class="flex justify-start">
                    <div class="max-w-xs md:max-w-md">
                        <div class="bg-slate-600 p-3 rounded-xl border-l-4 border-violet-500 shadow-md flex items-center space-x-3">
                            <i data-lucide="file-text" class="w-6 h-6 text-violet-400"></i>
                            <div class="flex flex-col">
                                <span class="text-white font-semibold truncate">Q4_Report_Final.pdf</span>
                                <span class="text-xs text-slate-400">1.2 MB | PDF</span>
                            </div>
                            <i data-lucide="download" class="w-5 h-5 text-violet-400 cursor-pointer hover:text-violet-300"></i>
                        </div>
                        <p class="text-xs text-slate-500 mt-1">Jane Network, 9:45 AM</p>
                    </div>
                </div>
                <!-- Sent Message (Example) -->
                <div class="flex justify-end">
                    <div class="max-w-xs md:max-w-md">
                        <div class="bg-violet-600 p-3 rounded-t-xl rounded-bl-xl text-white shadow-lg">
                            Awesome, thanks so much! Just confirming receipt. I'll review them now.
                        </div>
                        <p class="text-xs text-slate-500 mt-1 text-right">You, 9:46 AM</p>
                    </div>
                </div>
            </div>

            <!-- Message Input Area -->
            <div class="frosted-panel p-4 border-t border-slate-700 flex items-center space-x-3">
                <!-- Attachment Button -->
                <label for="attachment-input" class="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-violet-600 hover:text-white transition cursor-pointer">
                    <i data-lucide="paperclip" class="w-5 h-5"></i>
                    <input type="file" id="attachment-input" class="hidden" onchange="showAttachmentMessage(this)">
                </label>

                <!-- Emoji/Reaction Button -->
                <button class="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-violet-600 hover:text-white transition">
                    <i data-lucide="smile" class="w-5 h-5"></i>
                </button>

                <!-- Input Field -->
                <input type="text" id="message-input" placeholder="Type your message..." class="flex-grow p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" onkeydown="handleEnter(event)">

                <!-- Send Button -->
                <button class="p-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition" onclick="sendMessage()">
                    <i data-lucide="send" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Group Creation Modal -->
    <div id="group-modal" class="hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50 call-overlay-enter" onclick="if(event.target.id === 'group-modal') closeModal('group-modal')">
        <div class="frosted-panel w-full max-w-lg p-6 rounded-xl shadow-xl">
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                <i data-lucide="plus-square" class="w-6 h-6 mr-3 text-violet-400"></i> Create New Group
            </h3>
            <p class="text-sm text-slate-400 mb-4">A central place for collaborative work and group calls.</p>

            <div class="space-y-4">
                <input type="text" placeholder="Group Name (e.g., Project Phoenix)" class="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500">
                <textarea placeholder="Group Description (Optional)" rows="2" class="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"></textarea>

                <div class="text-white text-lg font-semibold border-b border-slate-700 pb-2">Add Members</div>
                <div class="h-40 overflow-y-auto custom-scrollbar space-y-2">
                    <!-- Mock Member List -->
                    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-700">
                        <div class="flex items-center">
                            <img src="https://placehold.co/30x30/4c1d95/ffffff?text=JN" class="w-8 h-8 rounded-full mr-2" alt="Avatar">
                            <span class="text-white">Jane Network</span>
                        </div>
                        <button class="text-green-400 hover:text-green-300 text-sm font-semibold">Add</button>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-700">
                        <div class="flex items-center">
                            <img src="https://placehold.co/30x30/059669/ffffff?text=MS" class="w-8 h-8 rounded-full mr-2" alt="Avatar">
                            <span class="text-white">Michael Scott</span>
                        </div>
                        <button class="text-green-400 hover:text-green-300 text-sm font-semibold">Add</button>
                    </div>
                </div>

                <button class="w-full py-3 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition" onclick="closeModal('group-modal'); simulateAction('Group Created')">
                    Create Group
                </button>
            </div>

            <button class="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="closeModal('group-modal')">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
    </div>

    <!-- Start New Call Modal -->
    <div id="start-call-modal" class="hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50 call-overlay-enter" onclick="if(event.target.id === 'start-call-modal') closeModal('start-call-modal')">
        <div class="frosted-panel w-full max-w-lg p-6 rounded-xl shadow-xl">
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                <i data-lucide="phone-call" class="w-6 h-6 mr-3 text-green-400"></i> Start New Call
            </h3>
            <p class="text-sm text-slate-400 mb-4">Select a contact or group to begin a voice or video call.</p>

            <div class="space-y-4">
                <input type="text" placeholder="Search contacts..." class="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500">
                
                <div class="text-white text-lg font-semibold border-b border-slate-700 pb-2">Contacts & Groups</div>
                
                <div class="h-40 overflow-y-auto custom-scrollbar space-y-2">
                    <!-- Mock Contact 1: Jane Network -->
                    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-700 hover:bg-slate-600 cursor-pointer" onclick="closeModal('start-call-modal'); startCall('individual-video')">
                        <div class="flex items-center">
                            <img src="https://placehold.co/30x30/4c1d95/ffffff?text=JN" class="w-8 h-8 rounded-full mr-2" alt="Avatar">
                            <span class="text-white">Jane Network</span>
                        </div>
                        <button class="text-violet-400 hover:text-violet-300 text-sm font-semibold">Video Call</button>
                    </div>
                    <!-- Mock Contact 2: Michael Scott -->
                    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-700 hover:bg-slate-600 cursor-pointer" onclick="closeModal('start-call-modal'); startCall('individual-voice')">
                        <div class="flex items-center">
                            <img src="https://placehold.co/30x30/059669/ffffff?text=MS" class="w-8 h-8 rounded-full mr-2" alt="Avatar">
                            <span class="text-white">Michael Scott</span>
                        </div>
                        <button class="text-green-400 hover:text-green-300 text-sm font-semibold">Voice Call</button>
                    </div>
                    <!-- Mock Group: Dev Team Synergy -->
                    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-700 hover:bg-slate-600 cursor-pointer" onclick="closeModal('start-call-modal'); startCall('group-video')">
                        <div class="flex items-center">
                            <i data-lucide="users" class="w-5 h-5 mr-2 text-blue-400"></i>
                            <span class="text-white">Dev Team Synergy (Group)</span>
                        </div>
                        <button class="text-violet-400 hover:text-violet-300 text-sm font-semibold">Video Call</button>
                    </div>
                </div>

                <button class="w-full py-3 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition" onclick="closeModal('start-call-modal'); simulateAction('Initiating Call to Selected Contacts')">
                    Call Selected Contacts
                </button>
            </div>

            <button class="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="closeModal('start-call-modal')">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
    </div>

    <!-- Call Overlay Modal -->
    <div id="call-modal" class="hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50 call-overlay-enter">
        <div class="absolute top-4 left-4 text-white text-lg font-semibold" id="call-type-display">Individual Video Call</div>
        <div class="absolute top-4 right-4 text-white text-lg font-semibold">00:00:00</div>

        <!-- Main Video/Contact Area -->
        <div class="flex-grow w-full flex items-center justify-center relative">
            <!-- Simulated Video Grid (For Group/Individual) -->
            <div id="video-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 h-4/5 p-4">
                <div class="bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl" id="main-video-1">
                    Jane Network (Active Speaker)
                </div>
                <div class="bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-white text-xl hidden" id="main-video-2">
                    User Avatar/Video
                </div>
            </div>
        </div>

        <!-- Call Controls -->
        <div class="flex space-x-6 p-6 frosted-panel rounded-t-2xl z-50">
            <button class="p-4 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition" title="Toggle Mic">
                <i data-lucide="mic" class="w-6 h-6"></i>
            </button>
            <button class="p-4 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition" title="Toggle Camera">
                <i data-lucide="video" class="w-6 h-6"></i>
            </button>
            <button class="p-4 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition" title="Share Screen">
                <i data-lucide="monitor-up" class="w-6 h-6"></i>
            </button>
            <button class="p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition" title="End Call" onclick="closeModal('call-modal'); simulateAction('Call Ended')">
                <i data-lucide="phone-off" class="w-6 h-6"></i>
            </button>
        </div>
    </div>

    <!-- Global Notification/Alert Box -->
    <div id="notification-box" class="fixed bottom-4 right-4 p-4 rounded-lg bg-green-600 text-white shadow-xl transition-all duration-300 opacity-0 transform translate-y-4">
        <!-- Message here -->
    </div>

    <!-- Load custom JavaScript last -->
    <script src="/js/script.js"></script>

    </div>
@endsection