$('.card_step_wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows:false,
  autoplay:true,
  speed: 1500,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});

function initSlider() {
  $('.experts_cards').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:false,
      centerMode: true,
      centerPadding: '40px',
      variableWidth: true
  });
}

$(document).ready(function() {
  // Function to initialize or destroy slider based on window width
  function adjustSlider() {
      var windowWidth = $(window).width();
      if (windowWidth <= 1200) {
          $('.experts_cards').addClass('experts_slider');
          if (!$('.experts_cards').hasClass('slick-initialized')) {
              initSlider();
          }
      } else {
          $('.experts_cards').removeClass('experts_slider');
          if ($('.experts_cards').hasClass('slick-initialized')) {
              $('.experts_cards').slick('unslick');
          }
      }
  }

  // Initialize or destroy slider on window resize
  $(window).on('resize', function() {
      adjustSlider();
  });

  // Initial adjustment on document ready
  adjustSlider();
});
