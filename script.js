function checkLogin() {
  const logged = localStorage.getItem("qxh_logged_in");
  if (logged === "true") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("hub").style.display = "block";
  }
}

function login() {
  const u = username.value;
  const p = password.value;

  if (!u || !p) {
    alert("กรุณากรอกข้อมูล");
    return;
  }

  localStorage.setItem("qxh_logged_in", "true");
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("hub").style.display = "block";
}

function logout() {
  localStorage.removeItem("qxh_logged_in");
  location.reload();
}

function copyText(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  alert("Copy แล้ว!");
}

function openTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}