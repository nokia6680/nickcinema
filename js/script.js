
var menuMobile = document.querySelector(".nav-list");
var headerMobile = document.querySelector(".header");
var openButton = document.querySelectorAll(".header-nav__opener");
var closeButton = document.querySelector(".header__closer")

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

  closeButton.addEventListener("click", function() {
    menuMobile.classList.remove("nav-list--active");
    headerMobile.classList.remove("header--active");
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

    var daysNum = document.getElementById('daysNum');
    var hoursNum = document.getElementById('hoursNum');
    var minutesNum = document.getElementById('minutesNum');
    var secondsNum = document.getElementById('secondsNum');

    function getLast(number, titles) {
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5?number%10:5)]];
    }

    daysSpan.innerHTML = t.days;
    document.getElementById('daysNum').innerHTML = getLast(t.days, ['день', 'дня', 'дней']);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    document.getElementById('hoursNum').innerHTML = getLast(t.hours, ['час', 'часа', 'часов']);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    document.getElementById('minutesNum').innerHTML = getLast(t.minutes, ['минута', 'минуты', 'минут']);

    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    document.getElementById('secondsNum').innerHTML = getLast(t.seconds, ['секунда', 'секунды', 'секунд']);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "April 04 2019 00:00:00 GMT+0200";
initializeClock('time-list', deadline);
