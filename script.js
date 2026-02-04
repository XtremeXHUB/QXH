// Copy Script
function copyScript(id, btn) {
    const text = document.getElementById(id).innerText;
    const old = btn.innerText;

    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "Copied ✅";
        setTimeout(() => btn.innerText = old, 1500);
    });
}

// Announcement slide
let index = 0;
const list = document.querySelectorAll(".announcement");

if (list.length > 0) {
    setInterval(() => {
        list.forEach(a => a.classList.remove("active"));
        index = (index + 1) % list.length;
        list[index].classList.add("active");
    }, 4000);
}

// Close Announcement
function closeAnnouncement(e) {
    e.stopPropagation();
    document.querySelector(".announcement-box").style.display = "none";
}

// Auto Time
document.querySelectorAll(".time").forEach(el => {
    const t = new Date(el.dataset.time);
    el.innerText = t.toLocaleString("th-TH");
});
