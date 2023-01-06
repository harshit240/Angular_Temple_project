
// ==========================================================================================================
// Add active class on Navbar
// ===========================================================================================================
try {
  // Navbar Code
  $(document).ready(function () {
    $(window).bind("scroll", function () {
      var gap = 25;
      if ($(window).scrollTop() > gap) {
        $("header").addClass("addactive");
      } else {
        $("header").removeClass("addactive");
      }
    });
  });
} catch (error) {
  console.log(error);
}
// ==============================================================================================================
// CountrUp Number
// ==============================================================================================================
try {
  // ==============================================================================================================
  // CountrUp Number
  // ==============================================================================================================
  // Number count

  const counterUp = window.counterUp.default
  const callback = entries => {
    entries.forEach( entry => {
      const el = entry.target
      if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
        counterUp( el, {
          duration: 2000,
          delay: 16,
        } )
        el.classList.add( 'is-visible' )
      }
    } )
  }

  document.addEventListener("DOMContentLoaded", function(){

    const IO = new IntersectionObserver( callback, { threshold: 1 } )
  
    const el = document.querySelectorAll( '.counter' )
    // console.log(el);
    
    for (let i = 0; i < el.length; i++) {
      const element = el[i];
      IO.observe( element )
    }  
  });



} catch (error) {
  console.log(error);
}

// ==============================================================================================================
// Sliding images on Awards Section
// ==============================================================================================================
try {
  // ==============================================================================================================
  // Sliding images on Awards Section
  // ==============================================================================================================
  function createSlick() {
    $(document).ready(function () {
      $(".our_awards")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          speed: 300,
          infinite: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });
    });
  }
} catch (error) {
  console.log(error);
}
// =============================================================================================================
// Sliding images on Our Client
// =============================================================================================================

try {
  // =============================================================================================================
  // Sliding images Our Client
  // =============================================================================================================
  function createSlick() {
    $(document).ready(function () {
      $(".our_client")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          dots: false,
          pauseOnHover: false,
          speed: 300,
          infinite: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
    });
  }
} catch (error) {
  console.log(error);
}
