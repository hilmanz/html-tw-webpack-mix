import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll("[data-fade]");
  els.forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 });
  });
});
