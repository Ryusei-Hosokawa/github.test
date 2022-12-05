"use strict";

// Navigation //
// Navigation clickAction ↓(22)
{
  // Processing on toggle button click
  const navBtn = document.querySelector('.nav-btn');
  const navWraper = document.querySelector('.nav-wraper');
  const navFixed1 = document.querySelector('html');
  const navFixed2 = document.querySelector('body');
 

  // Menu button click
  navBtn.addEventListener('click', () => {
    // Menu display
    navBtn.classList.toggle('active');
    navWraper.classList.toggle('open');
    // Fixed background
    navFixed1.classList.toggle('menu_open');
    navFixed2.classList.toggle('menu_open');
  });
  // Processing on link click
  const navList = document.querySelectorAll('.nav-list a');
  const len = navList.length;
  for (let i = 0; i < len; i++) {
    navList[i].addEventListener('click', () => {
      navBtn.classList.remove('active');
      navWraper.classList.remove('open');
      navFixed.classList.remove('menu_open');
    });
  }
}
// Obtaining scroll volume
window.addEventListener('scroll' , () => {
let ScrollY = window.scrollY;
  
})

// Smooth scroll action

// (function(){
//   const links = document.querySelectorAll('a[href^="#"]');
  
//   links.forEach(link => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
//       let href = link.getAttribute('href').substr(1);
//       href = href ==='#' ? 'html' : `[id="${href}"]`;
//       const target = docment.querySelector(href);
//       const rect = target.getBoundingClientRect();
//       const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//       const position = rect.top + scrollLeft - offset;
//       window.scrollTo({
//         top: position,
//         behavior: 'smooth'
//       });
//     });
//   });

// });