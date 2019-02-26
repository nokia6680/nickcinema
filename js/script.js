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
