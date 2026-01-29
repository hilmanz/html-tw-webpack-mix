import "../scss/main.scss";

// Libraries
import gsap from "gsap";
import anime from "animejs";
import * as THREE from "three";

// Sliders
import Swiper from "swiper";
import "swiper/css";

import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";

// Optional jQuery + plugins loader
import $ from "jquery";
window.$ = window.jQuery = $;

// Your modules
import "./components/sliders";
import "./components/animations";

// Example: GSAP usage
gsap.to(".hero-title", { y: 0, opacity: 1, duration: 1 });

// Example: AnimeJS usage
anime({
  targets: ".pulse-dot",
  scale: [1, 1.3],
  direction: "alternate",
  loop: true
});

// Example: ThreeJS placeholder
const canvas = document.querySelector("#three-canvas");
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  renderer.setSize(300, 300);
  camera.position.z = 3;

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animateThree() {
    requestAnimationFrame(animateThree);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animateThree();
}
