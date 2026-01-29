import Swiper from "swiper";
import { Splide } from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  // Swiper example
  const swiperEl = document.querySelector(".swiper");
  if (swiperEl) {
    new Swiper(".swiper", {
      loop: true
    });
  }

  // Splide example
  const splideEl = document.querySelector("#splide");
  if (splideEl) {
    new Splide("#splide", {
      type: "loop",
      perPage: 3,
      gap: "1rem",
      breakpoints: {
        768: { perPage: 1 }
      }
    }).mount();
  }
});
