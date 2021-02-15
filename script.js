$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 500) {
      $('.scroll-up-button').addClass('show');
    } else {
      $('.scroll-up-button').removeClass('show');
    }
  });

  // Slide up script
  $('.scroll-up-button').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  //toggle menu/ navbar
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
});

// Typing Script
var typed = new Typed('.type', {
  strings: ['Developer', 'Fresher', 'B.Tech Grad'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed('.type-2', {
  strings: ['Developer', 'Fresher', 'B.Tech Grad'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
