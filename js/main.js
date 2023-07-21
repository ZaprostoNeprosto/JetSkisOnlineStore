$(function(){

/* Banner slider control */

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ]
  });

/* Tabs control */

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).attr('href')).siblings().removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  });

/* Add to favourite */

  $('.product-item__favourite, .product-card__icon-favorite').on('click', function(){
    $(this).toggleClass('product-item__favourite--active')
  });

/* Item slider control */

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./images/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="../images/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  });


  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });


  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#C4C4C4"
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.top-item__info, .top-item__shop').on('click', function(){
    $(this).toggleClass('footer__top-title--active');
    $(this).next().slideToggle('200');
  });

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
  });

  const seeMoreButton = document.querySelector('.see-more');
  const listItems = document.querySelectorAll('.card-list__list-item');
  
  seeMoreButton.addEventListener('click', () => {
    listItems.forEach((item) => {
      if (!item.classList.contains('card-list__list-item--visible')) {
        item.classList.add('card-list__list-item--visible');
      } else {
        item.classList.remove('card-list__list-item--visible');
      }
    });
  });
  
});

function handleResize() {

  const pageIdElement = document.getElementById("card__input-search");

  if (pageIdElement) {

    if (window.matchMedia("(max-width: 700px)").matches) {
      pageIdElement.placeholder = 'Введите название магазина';
    } else {
      pageIdElement.placeholder = 'Введите название';
    }
  }
}
handleResize()
window.addEventListener('resize', handleResize);