$(document).foundation();

$(document).ready(function(){
  $('.carousel-class').slick({
 dots: true,
 arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
/*  centerPadding: '1rem',*/

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,  //this is NOT WORKING!!!//
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});