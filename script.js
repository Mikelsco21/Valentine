document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "cita.html";
});

document.getElementById("no").addEventListener("click", function() {
    let yesBtn = document.getElementById("yes");
    let noBtn = document.getElementById("no");

    yesBtn.style.fontSize = (parseInt(window.getComputedStyle(yesBtn).fontSize) + 5) + "px";
    noBtn.style.fontSize = (parseInt(window.getComputedStyle(noBtn).fontSize) - 5) + "px";

    if (parseInt(window.getComputedStyle(noBtn).fontSize) < 10) {
        noBtn.style.display = "none"; 
    }
});
