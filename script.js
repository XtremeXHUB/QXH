function checkLogin() {
  if (localStorage.getItem("qxh_logged_in") === "true") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("hub").style.display = "block";
  }
}

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (!u || !p) {
    alert("กรุณากรอก Username และ Password");
    return;
  }

  // เซฟสถานะ Login (เล่น ๆ)
  localStorage.setItem("qxh_logged_in", "true");

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("hub").style.display = "block";
}

function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copy Script แล้ว!");
}

function openTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}