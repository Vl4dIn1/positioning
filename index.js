
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


const progressFill = document.querySelector('.progress-fill');
let progress = 0;

function fillProgressBar() {
    progressFill.style.width = '0%';
    progress = 0;
    
    const totalDuration = 3000;
    const interval = 16; // 60 FPS
    const step = 100 / (totalDuration / interval);

    const timer = setInterval(() => {
        progress += step;
        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
        }
        progressFill.style.width = progress + '%';
        
      
        const barWidth = progressFill.parentElement.offsetWidth;
        document.querySelector('.progress-text-white').style.width = barWidth + 'px';
    }, interval);
}

btnOpen.addEventListener('click', () => {
    fillProgressBar();
});