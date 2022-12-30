/*------------slider-----------------------------*/
$('.banner-slider').slick({
    infinite: true,
    speed: 600,

});
$('.product-control').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
});

/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/
/*----------------------------------------------------*/