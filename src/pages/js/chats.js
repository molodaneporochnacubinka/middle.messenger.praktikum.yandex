window.onload = function() {
    const chats = document.querySelectorAll('.chat');
    const chatBody = document.querySelector('.chat_body');
    const chatBodyTemplate = Handlebars.templates['chat_body.hbs'];
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
        chatBody.classList.remove('empty');
        chatBody.innerHTML = chatBodyTemplate({name: 'Вадим'});
    }
}



