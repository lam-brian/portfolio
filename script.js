"use strict";

const heroSection = document.querySelector(".hero__section");
const nav = document.querySelector(".header__nav");

// Stick nav
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
heroObserver.observe(heroSection);

// Wave animation

const waveAnimate = function () {
  const wave = document.querySelector(".hero__wave svg");
  wave.classList.add("wave");
};

window.addEventListener("load", waveAnimate);
