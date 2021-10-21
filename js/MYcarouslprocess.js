
    const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 1
    },
    960: {
        items: 1
    }
}


$(document).ready(function () {

    

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        dots:true,
        nav:false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
   });
});


