function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copy แล้ว!");
}

function closeAnn() {
  document.getElementById("announcement").style.display = "none";
}

function openTab(id, el) {
  document.querySelectorAll('.tab-content')
    .forEach(t => t.classList.remove('active'));

  document.querySelectorAll('.tab')
    .forEach(b => b.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}