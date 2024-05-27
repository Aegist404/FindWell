// Dropdown
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dropdownMenus[index].classList.toggle('hidden');
  });
});


// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var swiperSlide = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});