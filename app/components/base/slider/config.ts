import { Navigation } from "swiper";

export const sliderParams = {
  modules: [Navigation],
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    640: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    880: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
    1240: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
};
