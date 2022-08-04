let menuItemIners = document.querySelectorAll('.menu__item-inner');
const iconMenu = document.querySelector('.header__menu-icon');

if (menuItemIners.length > 0) {
    for (let i = 0; i < menuItemIners.length; i++ ) {
        const menuItemIner = menuItemIners[i];
        menuItemIner.addEventListener("click", function(e) {
            menuItemIner.parentElement.classList.toggle('--active');
        });
        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.menu__sub-list') && !target.closest('.menu__item-inner')) {
                menuItemIner.parentElement.classList.remove('--active')
            }
          }
        );
        window.addEventListener('scroll', e => {
            menuItemIner.parentElement.classList.remove('--active')
          }
        );
    }
}

if (iconMenu){
    const menu = document.querySelector('.menu__list');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('--active');
        menu.classList.toggle('--active');
        document.body.classList.toggle('--lock');
    })
}

new Swiper('.furninures__swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        575: {
            slidesPerView: 1.5,
        },
        0: {
            slidesPerView: 1,
        },
    },

    grabCursor: true,

    slidesPerView: 1.5,

    spaceBetween: 16,
});

new Swiper('.feedbacks__swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        
    },

    grabCursor: true,

    slidesPerView: 3,

    spaceBetween: 15,
});

new Swiper('.cities__swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1.3,
        },
        450: {
            slidesPerView: 1.8,
        },
        600: {
            slidesPerView: 2.2,
        },
        700: {
            slidesPerView: 2.5,
        },
        800: {
            slidesPerView: 3.2,
        },
        1024: {
            slidesPerView: 4,
        },
        
    },

    grabCursor: true,

    slidesPerView: 4,

    spaceBetween: 24,
});