import { changeLocation } from './common';

window.onload = function() {
    const form = document.querySelector('.form.login');
    form.onsubmit =  function(event) {
        event.preventDefault();
        changeLocation('chats-initial.html');
    }
}