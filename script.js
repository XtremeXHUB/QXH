// ซ่อนรูปอัตโนมัติ ถ้าไฟล์ไม่มี
document.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
        img.style.display = "none";
    };
});

// Tabs
function openTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// Copy Script
function copyScript(id, btn) {
    const text = document.getElementById(id).innerText;
    const old = btn.innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "Copied ✅";
        setTimeout(() => btn.innerText = old, 1500);
    });
}

// เวลา Announcement
document.querySelectorAll(".time").forEach(el => {
    el.innerText = new Date(el.dataset.time).toLocaleString("th-TH");
});
