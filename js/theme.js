;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height() + 100; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('header').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top) {
                    $("header").addClass("navbar_fixed");
                } else {
                    $("header").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                gridwidth:[1170,960,750,700,300],
                gridheight:[900,900,770,770,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
    
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider_two(){
        if ( $('#main_slider_two').length ){
            $("#main_slider_two").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1360,1199,992,767,480],
                gridwidth:[1170,1140,960,720,700,300],
                gridheight:[655,655,655,655,655,655],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider_two();
    
    
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider_four(){
        if ( $('#main_slider_four').length ){
            $("#main_slider_four").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1360,1199,992,767,480],
                gridwidth:[1170,1140,960,720,700,300],
                gridheight:[680,680,680,680,655,655],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider_four();
    
    
    /*----------------------------------------------------*/
    /*  testimonial Slider
    /*----------------------------------------------------*/
    function testimonial_slider(){
        if ( $('#testimonial').length ){
            $('#testimonial').owlCarousel({
                loop:true,
                margin: 20,
                items: 1,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    }
                }
            })
        }
    }
    testimonial_slider();
    
    /*----------------------------------------------------*/
    /*  s_testimonial Slider
    /*----------------------------------------------------*/
    function s_testimonial(){
        if ( $('.s_testimonial').length ){
            $('.s_testimonial').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                autoplay: false,
                smartSpeed: 1500,
                dots:false,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    }
                }
            })
        }
    }
    s_testimonial();
    
    
    /*----------------------------------------------------*/
    /*  service accordion
    /*----------------------------------------------------*/
    $('.service_accordion .card').each(function () {
        var $this = $(this);
        $this.on('click', function (e) {
            var has = $this.hasClass('active');
            $('.service_accordion .card').removeClass('active');
            if(has) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
        });
    });
    
    /*----------------------------------------------------*/
    /*  service slider
    /*----------------------------------------------------*/
    function service_slider(){
        if ( $('.service_slider').length ){
            $('.service_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                autoplay: false,
                smartSpeed: 1500,
                dots:false,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            })
        }
    }
    service_slider();
    
    
    /*----------------------------------------------------*/
    /*  cases slider
    /*----------------------------------------------------*/
    function casesSlider(){
        if ( $('.cases_slider').length ){
            $('.cases_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                autoplay: true,
                smartSpeed: 1000,
                dots:false,
                nav: true,
                navContainer: ".arrows",
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    576: {
                        items: 3,
                    }
                }
                
            })
        }
    }
    casesSlider();
    
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function client_slider_two(){
        if ( $('.client_slider').length ){
            $('.client_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 6,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    600: {
                        items: 4,
                    },
                    992: {
                        items: 6,
                    }
                }
            })
        }
    }
    client_slider_two();
    
    
   /*==============================
	nice selector js
	==============================*/
    function selector_nice(){
        $('select').niceSelect();
    }
    selector_nice();
    
    /*---------gallery isotope js-----------*/
    function galleryMasonry(){
        if ( $('#gallery').length ){
            $('#gallery').imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                $("#gallery").isotope({
                    itemSelector: ".gallery-item",
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                // Add isotope click function
                $(".gallery-filter li").on('click',function(){
                    $(".gallery-filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery").isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    galleryMasonry();
    
    
    /*==============================
	video-pop
	==============================*/
    /* Magnificpopup js */
    function magnificPopup() {
        if ($('body').length) { 
            //Video Popup
      
            $('.video-pop').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });

            //Search Popup
            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline', 
                fixedContentPos: false,
                fixedBgPos: true, 
                overflowY: 'auto', 
                closeBtnInside: true,
                preloader: false, 
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });
        };
    };
    magnificPopup();
    
})(jQuery)