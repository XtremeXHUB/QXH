document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("closeAnn").onclick = () => {
        document.querySelector(".announce").style.display = "none";
    };

    document.querySelectorAll(".tab").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(btn.dataset.tab).classList.add("active");
        };
    });

    document.querySelectorAll(".copy").forEach(btn => {
        btn.onclick = () => {
            const text = document.getElementById(btn.dataset.copy).innerText;
            navigator.clipboard.writeText(text);
            btn.innerText = "Copied!";
            setTimeout(() => btn.innerText = "Copy Script", 1200);
        };
    });

    const video = document.getElementById("video");
    video.onclick = () => {
        video.innerHTML = `
        <iframe width="100%" height="200"
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0" allowfullscreen></iframe>`;
    };

});