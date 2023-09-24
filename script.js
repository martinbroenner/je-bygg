const hamburger = document.querySelector(".hamburger");
const mobilmenu = document.querySelector(".mobilmenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobilmenu.classList.toggle("active");
});

window.addEventListener('scroll', () => {
  const isMobilmenuActive = mobilmenu.classList.contains('active');
  if (window.pageYOffset > 0) {
    if (!isMobilmenuActive) {
      hamburger.classList.remove('active');
    }
    mobilmenu.classList.remove('active');
  } else {
    if (!isMobilmenuActive) {
      hamburger.classList.remove('active');
    }
  }
});

