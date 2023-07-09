import { EffectFade, Navigation, Thumbs } from "swiper";

export const smallSliderParams = {
  spaceBetween: 20,
  slidesPerView: 3,
  loop: true,
  allowTouchMove: false,
  modules: [Navigation, Thumbs],
  breakpoints: {
    1100: {
      slidesPerView: 2.3,
    },
    1441: {
      slidesPerView: 3,
    },
  },
};

export const bigSliderParams = {
  allowTouchMove: false,
  loop: true,
  modules: [EffectFade, Thumbs],
  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    1100: {
      allowTouchMove: false,
    },
  },
};
