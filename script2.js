"use strict";

const heroSection = document.querySelector(".hero");
const header = document.querySelector(".header");
// const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav__links");

// Stick header
const headerHeight = header.getBoundingClientRect().height;

const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
heroObserver.observe(heroSection);
