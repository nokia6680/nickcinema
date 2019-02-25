$(document).on("click", ".controls-filter__btn", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("controls-filter__btn--active")) {
    $(".controls-filter__btn").removeClass("controls-filter__btn--active");
    $(".controls-filter__text").removeClass("controls-filter__text--active");

    $(this).addClass("controls-filter__btn--active");
    $(".controls-filter__description").find("b:eq(" + numberIndex + ")").addClass("controls-filter__text--active");

    var listItemHeight = $(".controls-filter__description")
      .find("b:eq(" + numberIndex + ")")
      .innerHeight();
    $(".controls-filter__description").height(listItemHeight + "px");
  }
});

$(document).on("click", ".content-wrapper__item", function(){
	$(this).toggleClass("content-wrapper__item--active");
});


/*Скрипт выезжающей штуки "Как участвовать"*/
var modalSearch = document.querySelector(".top-panel");
var closeButton = document.querySelector(".top-panel__close");
var openButton = document.querySelectorAll(".open-btn");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("top-panel--active");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--active");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("top-panel--active");
    }
  });
}

/*Скрипт выезжающего списка из аватара*/
var symbolList = document.querySelector(".cabinet-result");
var listClose = document.querySelector(".main-cabinet__close");
var listOpen = document.querySelectorAll(".main-cabinet__frame");

if (symbolList) {
  for (var i = 0; i < listOpen.length; i++) listOpen[i].addEventListener("click", function(event) {
    event.preventDefault();
    symbolList.classList.add("cabinet-result--active");
  });

  symbolList.addEventListener("click", function() {
    symbolList.classList.remove("cabinet-result--active");
  });

  symbolList.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  listClose.addEventListener("click", function() {
    symbolList.classList.remove("cabinet-result--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      symbolList.classList.remove("cabinet-result--active");
    }
  });
}

/*Скрипт выезжающих списков"*/
var modalFilmSearch = document.querySelector(".main-nav__list--film");
var openFilmButton = document.querySelectorAll(".main-nav__btn--film");
var modalEventSearch = document.querySelector(".main-nav__list--event");
var openEventButton = document.querySelectorAll(".main-nav__btn--event");


if (modalFilmSearch) {
  for (var i = 0; i < openFilmButton.length; i++) openFilmButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalFilmSearch.classList.toggle("main-nav__list--active");
  });

  modalFilmSearch.addEventListener("click", function() {
    modalFilmSearch.classList.remove("main-nav__list--active");
  });

  modalFilmSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });


  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalFilmSearch.classList.remove("main-nav__list--active");
    }
  });
}

if (modalEventSearch) {
  for (var i = 0; i < openEventButton.length; i++) openEventButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalEventSearch.classList.toggle("main-nav__list--active");
  });

  modalEventSearch.addEventListener("click", function() {
    modalEventSearch.classList.remove("main-nav__list--active");
  });

  modalEventSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });


  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalEventSearch.classList.remove("main-nav__list--active");
    }
  });
}


/*Слайдер в попапе персонажей*/
$(document).ready(function(){
  $('.chars-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
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
