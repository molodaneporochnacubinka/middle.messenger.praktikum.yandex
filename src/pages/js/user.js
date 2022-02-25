import { openModalWindow } from './common';

window.onload = function() {
    const btn = document.querySelector('.avatar_img');
    if (btn) {
        btn.onclick = function() {
            openModalWindow();
        };
    }
}