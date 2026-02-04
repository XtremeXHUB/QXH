function copyScript(id, btn) {
    const text = document.getElementById(id).innerText;
    const original = btn.innerText;

    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "Copied ✅";
        btn.style.background = "#00cc99";

        setTimeout(() => {
            btn.innerText = original;
            btn.style.background = "";
        }, 1500);
    });
}
