export function openModalWindow() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
}

export function changeLocation(location) {
    window.location.replace(location);
}