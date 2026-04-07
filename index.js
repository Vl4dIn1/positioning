
const overlay  = document.getElementById('overlay');
const btnOpen  = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

function openModal() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
}

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeModal();
    }
});