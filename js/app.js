$(document).ready(function () 
{
  $(".image-slider").slick
  ({
    slidesToShow: 4, 
    slidesToScroll: 1, 
    infinite: true,
    arrows: true,  
    draggable: true, 
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: 
    [
      {
        breakpoint: 1025,
        settings: 
        {
          slidesToShow: 3,
          arrows: false, 
        },
      },
      {
        breakpoint: 768,
        settings: 
        {
          slidesToShow: 1,
          arrows: false,  
        },
      },
    ],
  });
});