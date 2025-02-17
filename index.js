
// Popular Classes Section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: -70,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Media Query
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      766: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 2,
      },
     1440: {
      slidesPerView: 3,
      spaceBetween: -70,
     },
     1300: {
      slidesPerView: 3,
      spaceBetween: -70,
     },
    }
  });
  
// Review Section
  var swiper = new Swiper(".MySwiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction:false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Heros Image Section 
  var swiper = new Swiper(".MySwiper2", {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction:false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// Hamburger Menu
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', ()  => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})