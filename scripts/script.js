// JavaScript Document
var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links');

function navSlide() { nav.classList.toggle('nav-active');}

burger.addEventListener('click', navSlide)
