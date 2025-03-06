document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".nev-btn");
    const navMenu = document.querySelector("#nevtuggle");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
