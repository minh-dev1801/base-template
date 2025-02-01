import Swiper from "/node_modules/swiper/swiper-bundle.min.mjs";

const swipperInit = () => {
  // Initialize Swiper
  const testimonialsSwiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    navigation: {
      nextEl: ".testimonials__btn__next",
      prevEl: ".testimonials__btn__prev",
    },
  });
};

export default swipperInit;
