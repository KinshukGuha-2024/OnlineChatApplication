@extends('layout.fluid')

@section('content')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" referrerpolicy="no-referrer">
<link rel="stylesheet" href="{{ asset('css/chat.css') }}">
<div class="chat-app" id="chatApp">
    <aside class="chat-sidebar">
        <div class="sidebar-header">
            <div class="current-user">
                <img src="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" alt="User avatar" class="current-user__avatar" id="currentUserAvatar">
                <div class="current-user__info">
                    <h2 class="current-user__name" id="currentUserName"></h2>
                    <p class="current-user__status" id="currentUserStatus"></p>
                </div>
            </div>
            <div class="sidebar-actions">
                <button class="icon-btn" id="btnNewChat" title="Start new chat">
                    <i class="icon fa-solid fa-pen-to-square"></i>
                </button>
                <button class="icon-btn" id="btnNewGroup" title="Create new group">
                    <i class="icon fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="sidebar-search">
            <input type="search" id="sidebarSearch" placeholder="Search chats, groups or calls" aria-label="Search conversations">
            <i class="icon fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="sidebar-tabs" role="tablist" aria-label="Conversation categories">
            <button class="tab active" data-target="direct" aria-selected="true">Chats</button>
            <button class="tab" data-target="groups" aria-selected="false">Groups</button>
            <button class="tab" data-target="calls" aria-selected="false">Calls</button>
        </div>
        <div class="sidebar-list" id="sidebarList" role="tabpanel" aria-live="polite"></div>
        <footer class="sidebar-footer">
            <button class="link-btn" id="btnSettings">
                <i class="icon fa-solid fa-gear"></i>
                Preferences
            </button>
        </footer>
    </aside>
    <section class="chat-main">
        <header class="chat-header" id="chatHeader">
            <button class="icon-btn chat-header__toggle" id="btnToggleSidebar" title="Toggle sidebar">
                <i class="icon fa-solid fa-bars"></i>
            </button>
            <div class="chat-recipient">
                <img src="https://ssl.gstatic.com/images/branding/product/1x/meet_2020q4_64dp.png" alt="Conversation avatar" class="chat-recipient__avatar" id="chatRecipientAvatar">
                <div>
                    <h3 class="chat-recipient__name" id="chatRecipientName"></h3>
                    <p class="chat-recipient__meta" style="text-align:left;" id="chatRecipientMeta"></p>
                </div>
            </div>
        <div class="chat-header__actions">
            <button class="icon-btn" id="btnVideoCall" title="Start video call">
                    <i class="icon fa-solid fa-video"></i>
                </button>
                <button class="icon-btn" id="btnVoiceCall" title="Start voice call">
                    <i class="icon fa-solid fa-phone"></i>
                </button>
                <button class="icon-btn" id="btnConversationInfo" title="Conversation info">
                    <i class="icon fa-solid fa-circle-info"></i>
                </button>
            </div>
        </header>
        <div class="chat-body" id="chatBody">
            <div class="chat-day-divider" id="chatEmptyState">
                <p>Select a conversation to start chatting</p>
            </div>
            <div class="chat-day-divider" id="NewChatState">
                <p>Say Hi!!</p>
            </div>
        </div>
        <div class="attachment-preview" id="attachmentPreview" hidden></div>
        <div class="chat-input-bar">
            <div class="chat-input__left">
                <button class="icon-btn" id="btnEmojiPicker" title="Insert emoji">
                    <i class="icon fa-regular fa-face-smile"></i>
                </button>
                <div class="file-upload">
                    <input type="file" id="attachmentInput" multiple aria-label="Attach files">
                    <button class="icon-btn" id="btnAttach" title="Attach files">
                        <i class="icon fa-solid fa-paperclip"></i>
                    </button>
                </div>
            </div>
            <div class="chat-input__field">
                <textarea id="messageInput" rows="1" placeholder="Type a message" aria-label="Type a message"></textarea>
            </div>
            <div class="chat-input__right">
                <button class="icon-btn primary" id="btnSendMessage" title="Send message">
                    <i class="icon fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </section>

    <div class="emoji-panel" id="emojiPanel" role="dialog" aria-modal="false" aria-hidden="true">
        <header class="emoji-panel__header">
            <h4>Emoji</h4>
            <button class="icon-btn" id="btnEmojiPanelClose" title="Close">
                <i class="icon fa-solid fa-xmark"></i>
            </button>
        </header>
        <div class="emoji-panel__body" id="emojiGrid"></div>
    </div>

    <div class="custom-alert" id="customAlert" role="alertdialog" aria-hidden="true">
        <div class="custom-alert__content">
            <div class="custom-alert__icon">
                <i class="icon fa-solid fa-circle-info"></i>
            </div>
            <div class="custom-alert__message" id="customAlertMessage"></div>
            <div class="custom-alert__actions">
                <button class="btn" id="customAlertBtn">Okay</button>
            </div>
        </div>
    </div>

    <div class="media-viewer" id="mediaViewer" aria-hidden="true">
        <div class="media-viewer__overlay"></div>
        <div class="media-viewer__content">
            <button class="icon-btn media-viewer__close" id="mediaViewerClose" title="Close">
                <i class="icon fa-solid fa-xmark"></i>
            </button>
            <div class="media-viewer__stage">
                <img src="" alt="Preview" id="mediaViewerImage">
            </div>
            <div class="media-viewer__thumbs" id="mediaViewerThumbs"></div>
        </div>
    </div>

    <div class="call-modal" id="callModal" aria-hidden="true">
        <div class="call-modal__overlay"></div>
        <div class="call-modal__content">
            <header class="call-modal__header">
                <h3 id="callModalTitle"></h3>
                <button class="icon-btn" id="callModalClose" title="End call">
                    <i class="icon fa-solid fa-xmark"></i>
                </button>
            </header>
            <div class="call-modal__participants" id="callParticipants"></div>
            <footer class="call-modal__controls">
                <button class="circle-btn" id="btnToggleMic" title="Toggle microphone">
                    <i class="icon fa-solid fa-microphone"></i>
                </button>
                <button class="circle-btn" id="btnToggleCamera" title="Toggle camera">
                    <i class="icon fa-solid fa-video"></i>
                </button>
                <button class="circle-btn danger" id="btnEndCall" title="End call">
                    <i class="icon fa-solid fa-phone-slash"></i>
                </button>
            </footer>
        </div>
    </div>
</div>
<script src="{{ asset('js/chat.js') }}" defer></script>
@endsection

<div id="userPickerRoot" class="modal-root" aria-hidden="true">
  <div class="modal-backdrop" data-close></div>
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="userPickerTitle">
    <div class="header">
      <h2 id="userPickerTitle" class="title">Start a chat</h2>
      <div class="search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7" stroke-width="2"/><path d="m20 20-3.5-3.5" stroke-width="2"/></svg>
        <input id="userPickerSearch" type="search" placeholder="Search name or email" autocomplete="off" />
      </div>
      <button class="close" type="button" data-close>Close</button>
    </div>
    <div id="userPickerList" class="body" role="listbox" aria-label="Users"></div>
    <div class="footer">
      <span id="userPickerCount">0 users</span>
      <span>Enter to select • Esc to close</span>
    </div>
  </div>
</div>
