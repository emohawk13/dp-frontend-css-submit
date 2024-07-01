var nav = document.querySelector('.nav');
var navHeight = nav.clientHeight; // Get the height of the navigation bar

function checkNavPosition() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > navHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', checkNavPosition);
