import { changeLocation } from './common';

window.onload = function() {
    const chats = document.querySelectorAll('.chat');
    chats.forEach((element) => {

        element.onclick = function() {
            chatOnclick(element);
        };
    });

    function chatOnclick(chat) {        
        const prevChat = document.querySelector('.chat.active');

        if (prevChat) {
            prevChat.classList.remove('active');
        }
        chat.classList.add('active');
        changeLocation('chats.html');

    }
}



