var nav = document.querySelector("nav");
var navHeight = nav.clientHeight;

function checkNavPosition() {
  var scrollPosition = window.scrollY;

  if (scrollPosition > navHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", checkNavPosition);
