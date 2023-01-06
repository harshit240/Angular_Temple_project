$(document).ready(function(){
    $('.our_awards').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
        dots: false,
        pauseOnHover: false,
        speed: 300,
        // infinite:true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
  });