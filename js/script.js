/** Carousel  JS ***/
$(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
});

// Animate On Scroll

AOS.init({
    offset: 280,
    duration: 600,
});

//LogIn Form
function login(){
    $("#reg-form").hide();
    $("#login-form").show();
    $(".log").addClass("active");
    $(".reg").removeClass("active");
    $(".log-para").show();
    $(".reg-para").hide();
}
function register(){
    $("#reg-form").show();
    $("#login-form").hide();
    $(".log").removeClass("active");
    $(".reg").addClass("active");
    $(".log-para").hide();
    $(".reg-para").show();
}

//Counter 
$(function(){
    $('.count-num').rCounter({
      duration: 50
    });
});

/***  Isotope ****/
$(window).on('load', function() {
    var portfolioIsotope = $('.product-container').isotope({
      itemSelector: '.product-item'
    });
  
    $('#product-flters li').on('click', function() {
      $("#product-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });