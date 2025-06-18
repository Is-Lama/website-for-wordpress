$(document).ready(function() {

  // Плавная прокрутка меню
  $('nav a[href^="#"]').click(function() { 
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    },300);
    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.header__menu--mobile .mobile-overlay').toggle(500);
    $('.button__burger-menu').toggleClass('active');
    return false;
  });

  // Мобильное меню 
  $('.button__burger-menu').click(function() {
    $('.header__menu--mobile .mobile-overlay').toggle(500);
    $(this).toggleClass('active');
  })
});