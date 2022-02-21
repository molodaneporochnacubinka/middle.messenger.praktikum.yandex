const { changeLocation } = require('../../layout/js/main');

window.onload = function() {
    const form = document.querySelector('.form.login');
    form.onsubmit =  function(e) {
        e.preventDefault();
        changeLocation('./chats');
    }
}