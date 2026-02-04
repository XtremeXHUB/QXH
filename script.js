function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copy Script แล้ว!");
}

function openTab(tabId, btn) {
  document.querySelectorAll('.tab-content')
    .forEach(t => t.classList.remove('active'));

  document.querySelectorAll('.tab')
    .forEach(b => b.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}