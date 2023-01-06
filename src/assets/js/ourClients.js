$(document).ready(function(){
    $('.top_client .clients_title .our_client').slick({
        slidesToShow: 4,
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
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
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