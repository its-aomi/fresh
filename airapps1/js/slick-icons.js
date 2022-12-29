$('.icon-slider').slick({
    slidesToShow: 9, // show 7 slides by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // screen size at which the breakpoint occurs
        settings: {
          slidesToShow: 9 // show 5 slides at this screen size
        }
      },
      {
        breakpoint: 992, // another breakpoint
        settings: {
          slidesToShow: 8 // show 4 slides at this screen size
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7 // show 3 slides at this screen size
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 7 // show 2 slides at this screen size
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 7 // show 1 slide at this screen size
        }
      }
    ]
  });