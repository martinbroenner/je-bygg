const hamburger = document.querySelector(".hamburger");
const mobilmenu = document.querySelector(".mobilmenu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobilmenu.classList.toggle("active");
})

