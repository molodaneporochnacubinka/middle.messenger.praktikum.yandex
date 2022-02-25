import { changeLocation } from './common';

window.onload = function() {
    const form = document.querySelector('.profile_info');
    form.onsubmit =  function(e) {
        e.preventDefault();
        changeLocation('user.html');
    }
}