document.addEventListener("DOMContentLoaded", () => {

    // Announcement auto slide
    let annIndex = 0;
    const anns = document.querySelectorAll('.announcement');

    if (anns.length > 0) {
        setInterval(() => {
            anns[annIndex].classList.remove('active');
            annIndex = (annIndex + 1) % anns.length;
            anns[annIndex].classList.add('active');
        }, 4000);
    }

    // Close announcement
    const closeBtn = document.querySelector('.close-announcement');
    if (closeBtn) {
        closeBtn.onclick = () => {
            document.querySelector('.announcement-box').style.display = 'none';
        };
    }

    // Copy script buttons
    document.querySelectorAll('.glow').forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.copy;
            const el = document.getElementById(id);
            if (!el) return;

            navigator.clipboard.writeText(el.innerText);
            btn.innerText = "Copied!";
            setTimeout(() => btn.innerText = "Copy Script", 1500);
        };
    });

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.classList.add('active');
        };
    });

    // Lazy load YouTube (เช็กก่อนว่ามีจริง)
    const video = document.querySelector('.video-thumb');
    if (video) {
        video.onclick = function () {
            this.innerHTML = `
            <iframe width="100%" height="200"
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameborder="0" allowfullscreen></iframe>`;
        };
    }

});