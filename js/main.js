$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.fadeIn(300): scrollButton.fadeOut(300);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});



var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {

    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: false,
                dots: false,
                loop: true
            }
        }
    });



    var add = document.getElementById('add');
    var sub = document.getElementById('sub');
    var count = document.getElementById('counter-input');

    $(add).click(function() {
        count.value = parseInt(count.value) + 1;
    });

    $(sub).click(function() {
        count.value = parseInt(count.value) - 1;
    });

    var add2 = document.getElementById('add2');
    var sub2 = document.getElementById('sub2');
    var count2 = document.getElementById('counter-input2');

    $(add2).click(function() {
        count2.value = parseInt(count2.value) + 1;
    });

    $(sub2).click(function() {
        count2.value = parseInt(count2.value) - 1;
    });
    if ($(window).width() <= 991) {
        $(".features .features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                700: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".features-box .feature").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };

    if ($(window).width() <= 991) {
        $(".mo-nav .lang-name").click(function() {
            $(this).toggleClass("rotate");
            $(".mo-nav .lang-list").slideToggle(300);
        });
    }

    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".nav-link,.close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box").fadeOut(500);
    });

    $(".config-box .nav-link").click(function() {
        $(".config-box .nav-link .config-name").toggleClass("rotate");
        $(".mo-nav .config-list").css("transition", "none");
        $(".mo-nav .config-list").slideToggle(300);
    });

    // var about = $(".about").position();
    // $(".toabout").click(function() {

    //     $("html,body").animate({ scrollTop: about }, 600);
    // });
    // $('.toabout').click(function() {
    //     $.scrollTo($('#about'), 1000);
    // });
    $(".toabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });
    $(".toprop").click(function() {
        $('html, body').animate({
            scrollTop: $("#prop").offset().top
        }, 500);
    });
});