
var menuMobile = document.querySelector(".nav-list");
var headerMobile = document.querySelector(".header");
var openButton = document.querySelectorAll(".header-nav__opener");
var closeButton = document.querySelectorAll(".header__closer")

if (menuMobile) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    menuMobile.classList.add("nav-list--active");
    headerMobile.classList.add("header--active");
  });

  menuMobile.addEventListener("click", function() {
    menuMobile.classList.remove("nav-list--active");
    headerMobile.classList.remove("header--active");
  });

  menuMobile.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuMobile.classList.remove("nav-list--active");
      headerMobile.classList.remove("header--active");
    }
  });
}

/*Слайдер страницы о ШОУ*/
$(document).ready(function(){
  $('.show-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
		fade: true,
    arrows: true,
		prevArrow: '<div class="prev-1"></div>',
		nextArrow: '<div class="next-1"></div>'
  });
});

/*Слайдер gallery*/
$(document).ready(function(){
  $('.gallery-carousel').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
		prevArrow: '<div class="prev-2"></div>',
		nextArrow: '<div class="next-2"></div>'
  });
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById('time-list');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "April 04 2019 00:00:00 GMT+0200";
initializeClock('time-list', deadline);
