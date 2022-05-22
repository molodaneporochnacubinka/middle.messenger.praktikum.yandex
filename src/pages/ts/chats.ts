import { ChatsPage } from '../../modules/Chats/chats';
import { renderDOM } from '../../utils/renderDOM';
import { Button } from '../../components/Button/button';
import { Link } from '../../components/Link/link';
import { Chat } from '../../components/Chat/chat';
import { Message } from '../../components/Message/message';
import { MessageAttach } from '../../components/MessageAttach/message-attach';
import registerComponent from '../../utils/registerComponent';
import data from '../../../data/data.json';

document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Button);
    registerComponent(Link);
    registerComponent(Chat);
    registerComponent(Message);
    registerComponent(MessageAttach);

    const chats = data.chats;

    const chatsPage = new ChatsPage({
        linkText: 'Профиль >',
        linkHref: 'user.html',
        linkClass: 'sidebar',
        searchText: 'Поиск',
        chats: chats,
        initial: 0,
        messages: chats[3].messages,
        messageText: 'Сообщение',
        chatAvatar: '',
        chatName: chats[3].name,
    });
    renderDOM('#app', chatsPage);

    setTimeout( () => {
        // loginPage.setProps({ 
        //     buttonLabel: 'Click me please'
        // });
    }, 3000);
});