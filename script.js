let annIndex = 0;
const anns = document.querySelectorAll('.announcement');

setInterval(() => {
    anns[annIndex].classList.remove('active');
    annIndex = (annIndex + 1) % anns.length;
    anns[annIndex].classList.add('active');
}, 4000);

document.querySelector('.close-announcement').onclick = () => {
    document.querySelector('.announcement-box').style.display = 'none';
};

document.querySelectorAll('.glow').forEach(btn => {
    btn.onclick = () => {
        const id = btn.dataset.copy;
        navigator.clipboard.writeText(document.getElementById(id).innerText);
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = "Copy Script", 1500);
    };
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    };
});

document.querySelector('.video-thumb').onclick = function () {
    this.innerHTML = `<iframe width="100%" height="200"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0" allowfullscreen></iframe>`;
};