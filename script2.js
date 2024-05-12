"use strict";

const heroSection = document.querySelector(".hero");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav__links");

// Sticky header
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

// Mobile Navigation
const openNav = function () {
  hamburgerBtn.classList.toggle("is-active");
  nav.classList.toggle("nav--open");
};

hamburgerBtn.addEventListener("click", openNav);
navLinks.forEach((link) => link.addEventListener("click", openNav));

// Footer year
const year = document.querySelector(".footer__year");
year.textContent = new Date().getFullYear();
