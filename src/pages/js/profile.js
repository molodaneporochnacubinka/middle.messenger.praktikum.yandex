const { openModalWindow, changeLocation } = require('../../layout/js/main');

window.onload = function() {
    const form = document.querySelector('.profile_info');
    form.onsubmit =  function(e) {
        e.preventDefault();
        changeLocation('./profile');
    }
    const btn = document.querySelector('.avatar_img');
    if (btn) {
        btn.onclick = function() {
            openModalWindow();
        };
    }
}



