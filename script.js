function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copy แล้ว!");
}

function closeAnn() {
  document.getElementById("announcement").style.display = "none";
}
