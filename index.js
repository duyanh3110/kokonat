$(".page-content__references__sliders").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    "<button type='button' class='slick-prev'><img src='images/left-arrow.svg'></button>",
  nextArrow:
    "<button type='button' class='slick-next'><img src='images/right-arrow.svg'></button>",
  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

const goTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}