// slider_autors----------------------------
new Swiper('.slider_autors',{
	navigation: {
	    nextEl: '.autors_button_next',
	    prevEl: '.autors_button_prev',
	  },
  slidesPerView:4,
  watchOverflow: true,
  // loop:true,
  spaceBetween:40,
  // centeredSlides: true,
  breakpoints: {
  	320:{
  		slidesPerView:1,
  	},
  	575:{
  		slidesPerView:2,
  	},
  	767:{
  		slidesPerView:3,
  	},
  	1050:{
  		slidesPerView:4,
  	},
  },
});
// Scroll to block------------------
const headerBtn = document.querySelector('.header_btn_btn');
const request1 = document.querySelector('.request1');

headerBtn.addEventListener('click', () => {
    request1.scrollIntoView({block: "start", behavior: "smooth"})
});
// pop up--------------------
const btnCallback = document.querySelector('.btn_callback');
const popUp = document.querySelector('.popup');
const close = document.querySelector('.close');
const body = document.querySelector('body');

btnCallback.addEventListener('click', () => {
    popUp.classList.add('visible');
    body.classList.add('lock');
});

close.addEventListener('click', () => {
    popUp.classList.remove('visible');
    body.classList.remove('lock');
});