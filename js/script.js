// =====testimonial-slider=====
var swiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// =====scroll-back-to-top=========
const backToTop = document.querySelector('[data-back-to-top]'),
      nav = document.querySelector('[data-nav]');

const scroll = function(){
  if(this.scrollY >= 200){
    backToTop.classList.add('back-to-top');
    nav.classList.add('fixed-nav');
  }
  else{
    backToTop.classList.remove('back-to-top');
    nav.classList.remove('fixed-nav');
  }
};
window.addEventListener('scroll', scroll);

// =====small-device-side-menu======
const menu = document.querySelector('[data-menu]'),
      openMenu = document.querySelector('[data-open-menu]'),
      closeMenu = document.querySelector('[data-close-menu]'),
      overlay = document.querySelector('[data-overlay]');

      const closefunc = function(){
        menu.classList.remove('fixed-menu');
        overlay.classList.remove('overlay');
      }

      openMenu.addEventListener('click',function(){
        menu.classList.add('fixed-menu');
        overlay.classList.add('overlay');
      });

      closeMenu.addEventListener('click', closefunc);
      overlay.addEventListener('click', closefunc);


    // ======dark-mode=====
    const darkEnable = document.querySelector('[data-dark-enable]'),
          darkDisable = document.querySelector('[data-dark-disable]'),
          mainHtml = document.querySelector('[data-html]');

          darkEnable.addEventListener('click', function(){
            mainHtml.classList.add('dark');
          });
          darkDisable.addEventListener('click', function(){
            mainHtml.classList.remove('dark');
          });
      