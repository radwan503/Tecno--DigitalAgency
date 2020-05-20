(function ($) {
    "use strict";
       $(window).scroll(function () {
            var scrollh = $(this).scrollTop();
            if (scrollh == 0) {
                $(".navbar-default").css({
                    'padding': '15px',
                    'transition':'.5s',
                     'background-color': '#fff'
                    
                , });
                  $(".navbar-brand ").css({
                    'margin-top': '2px',
                       'transition':'.5s'
                    
                , });
                
                 $(".navbar-brand > img ").css({
                    'display': 'block',
                   'height': '32px'
                    
                , });
                
            }
            else {
                $(".navbar-default").css({
                    'padding': '10px',
                    'transition':'.5s',
                     'background-color': '#fff'
                , });
                 $(".navbar-brand").css({
                    'margin-top': '0px',
                       'transition':'.5s'
                , });
                
                  $(".navbar-brand > img ").css({
                    'display': 'block',
                   'height': '20px'
                    
                , });
            }
        });
  

    
    //pre-loader
    $("#pre-loader").fakeLoader({

timeToHide:1200, //Time in milliseconds for fakeLoader disappear
zIndex:"9999999",//Default zIndex
spinner:"spinner6",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
bgColor:"#2ecc71", //Hex, RGB or RGBA colors
        
        

});
 
    //particels js
    var particles = Particles.init({
    selector: '.parralax-particels',
            color: ['#ff5805', '#ff5805', '#ff5805'],
            connectParticles: true,
            maxParticles: 100,
           sizeVariations:10,
    });
  
   
      //counter
    $('.counter-num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    
    //blog slider
     
    $('.blog-post-active').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,    
    navText:['Back','Next'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});    
 $("#testimonial-slider").owlCarousel({
    dots:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000, 
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    } 
        
    });
   //scroll nav 
    $.scrollIt({
           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  activeClass: 'active', // class given to the active nav element
 
});
       
 
    

 
    
   

        
    
    
    
})(jQuery);