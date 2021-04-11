(function () {
    const burger                = document.querySelector('.js-burger');
    const header_burger_menu    = document.querySelector('.js-burger-menu');
    const content_overlapping   = document.querySelector('.js-content-overlapping');
    let menuOpen = false;

    if (!burger && !header_burger_menu && !header_burger_menu && !menuOpen) {
        return;
    }

    burger.addEventListener('click', () => {
        if (!menuOpen) {
            burger.classList.add('open');
            header_burger_menu.style.left = 0 + "px";
            content_overlapping.style.display = 'block';
            menuOpen = true;
        } else {
            closeBurgerMenu();
        }
    });

    content_overlapping.addEventListener('click', () => {
        closeBurgerMenu();
    });

    window.addEventListener("resize", function () {
        closeBurgerMenu();
    });

    function closeBurgerMenu() {
        burger.classList.remove('open');
        header_burger_menu.style.left = -1000 + "px";
        content_overlapping.style.display = 'none';
        menuOpen = false;
    }

    /*Swiper controll*/
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs
        }
    });
})();
