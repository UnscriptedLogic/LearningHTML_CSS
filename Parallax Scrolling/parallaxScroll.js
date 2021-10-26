var parallaxImages = document.getElementsByClassName("parallax__image")

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    for (let index = 0; index < parallaxImages.length; index++) {
        parallaxImages[index].style.top = value * 0.4 + "px";
    }
})