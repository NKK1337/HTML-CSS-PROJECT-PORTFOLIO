const tabButtons = document.querySelectorAll(".tab");
const indicator = document.getElementById("indicator");

function moveIndicator(el) {
    indicator.style.left = el.offsetLeft + "px";
    indicator.style.width = el.offsetWidth + "px";
}

tabButtons.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
        moveIndicator(tab);
    });
});

window.addEventListener("load", () => {
    moveIndicator(document.querySelector(".tab.active"));
});