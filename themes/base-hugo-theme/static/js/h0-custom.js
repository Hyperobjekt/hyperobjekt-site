

(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;

    

    function checkScroll(y) {
        // console.log(checkScroll);
        // If the scroll is at the top, not sticky.
        // Transition comes farther down the page for
        // the the front page.
        var heroHeight = $('#hero') ? $('#hero').height() : 0;
        // console.log(heroHeight);
        if (y <= (heroHeight - 64)) {
            // $('body').addClass('scroll-top');
            $('nav').removeClass('sticky-top');
            $('.subnav').removeClass('sticky-top');
        } else if (y > (heroHeight - 64)) {
            // $('body').removeClass('scroll-top');
            $('nav').addClass('sticky-top');
            $('.subnav').addClass('sticky-top');
        }
    }

 

  $( document ).ready(function() {
    // Manage navbar appearance by scroll position
    $( window ).scroll(function() {
      var t = $(window).scrollTop();
      checkScroll(t);
    });
    // Check on page load as well.
    var t = $(window).scrollTop();
    checkScroll(t);

    // Smooth scroll down on button click
    $('.scroll-to-section').on('click', function(e) {
        console.log('click');
        e.preventDefault();
        var target_id = $(e.target).attr('data-scroll-target');
        // console.log(target_id);
        $target = $('#' + target_id);
        // console.log($target);
        $('html, body').animate({
            scrollTop: ($target.offset().top) - 63
        }, 500);
        var t = $(window).scrollTop();
        checkScroll(t);
    });

   

   
// PULSE TEST

anime.set(['.pulsestagger'],{
  opacity: 0,
  }); 

   anime({
    targets: ['.pulsestagger'],
   easing: 'linear',
   keyframes: [
  
    { opacity: 1,  duration: 800, easing: 'linear', endDelay: 0, },
   { opacity: 0, duration: 800, easing: 'linear', },
  ],
    loop: true,
    direction: 'forwards',
    delay: anime.stagger(50), 
   // endDelay: delayAtEnd,
  }); 


   anime({
    targets: ['#pulsewave'],
   //easing: easing1,
    scale: 1.04,
    loop: true,
   
    duration: 3200,
    easing: 'linear',
  direction: 'alternate',
   // delay: anime.stagger(150), 
    //endDelay: delayAtEnd,
  }); 


  anime.set(['.pulsestagger2'],{
    opacity: 0,
    }); 
  
     anime({
      targets: ['.pulsestagger2'],
     easing: 'linear',
     keyframes: [
    
      { opacity: 1,  duration: 800, easing: 'linear', endDelay: 0, },
     { opacity: 0, duration: 800, easing: 'linear', },
    ],
      loop: true,
      direction: 'forwards',
      delay: anime.stagger(50), 
      //endDelay: delayAtEnd,
    }); 
  
  
     anime({
      targets: ['#pulsewave2'],
     //easing: easing1,
      //scale: 1.5,
      loop: true,
     
      duration: 3200,
      easing: 'linear',
    direction: 'alternate',
     // delay: anime.stagger(150), 
      //endDelay: delayAtEnd,
    }); 
   
/*--------------------------------------------- */


// NEW HOME V2
    var h0delay = 3300;
// Zoom out logo
  anime.set(['#cosmos',], {
    scale: 1.05,
  });


  // Animate lines appearance  
  var polyLineDur = 2800;
  var polyLineDelay = 300;
  var polyLineEase = 'linear';
    
    
var mq = window.matchMedia( "(max-width: 767px)" );
if (mq.matches) {
    // window width is at less than 767px
    anime.set(['.htext'], {
      opacity: 1
    });
    anime.set(['#red-path','#grey-path','#cyan-path','#purple-path',
    '#yellow-path','#green-path','#pinkpurple-path','#orange-path',
    '#yellow-path2','#fuchsia-path','#yellowgreen-path','#bronze-path' ], {
      opacity: 1,
    });
    anime.set(['#Points'], {
      opacity: 1,
     });
}
else {
    // window width is greater than 767px
    anime.set(['.htext'], {
      opacity: 0
    });
    anime.set(['#red-path','#grey-path','#cyan-path','#purple-path',
    '#yellow-path','#green-path','#pinkpurple-path','#orange-path',
    '#yellow-path2','#fuchsia-path','#yellowgreen-path','#bronze-path' ], {
      opacity: 0,
    });
    anime.set(['#Points'], {
      opacity: 0,
     });

  var lineDrawDelay = function(){

    anime({
      targets: ['#cosmos'],
      keyframes: [
        {scale: 1,  duration: 3400, easing: 'easeOutSine'},
        {scale: 1,  duration: 2000, easing: 'easeOutSine', endDelay: 0,}
      ]
    });

    anime({ // grp 1
      targets: ['#red-path'],
      opacity: [
        {value: 1, duration: 0}
      ],
      strokeDashoffset: [
        {value: [anime.setDashoffset, 0],easing: polyLineEase, duration: polyLineDur,}
      ], 
      
      //delay: anime.stagger(60),
    });

    anime({ // grp 2
      targets: ['#grey-path'],
      opacity: [
        {value: 1, duration: 0}
      ],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.55,
      //delay: 40,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#cyan-path'],
      opacity: [
        {value: 1, duration: 0}
      ],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.7,
     
      //delay: 40,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#purple-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.75,
      delay: polyLineDur * 0.3,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#yellow-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.125,
      delay: polyLineDur * 0.01,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#green-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.325,
      delay: polyLineDur * 0.275,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#pinkpurple-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.125,
      delay: polyLineDur * 0.7,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#orange-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.375,
      delay: polyLineDur * 0.8,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#yellow-path2'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.075,
      delay: polyLineDur * 0.25,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#fuchsia-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.375,
      delay: polyLineDur * 0.5,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#yellowgreen-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.25,
      delay: polyLineDur * 0.825,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#bronze-path'],
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.1,
      delay: polyLineDur * 1,
      //delay: anime.stagger(60),
    });
  
// Animate text appearance ---------------------- /

    anime.set(['.htext'], {
      opacity: 0,
    });
   
    anime({
      targets: ['.htext'],
     easing: 'linear',
     keyframes: [
      { opacity: 0,  duration: 460, easing: 'linear', endDelay: 0, },
      { opacity: 0.7, duration: 300, easing: 'linear', },
    ],
     delay: anime.stagger(250),
    }); 

 // Raise opacity of Hyper0bjekt logo ------------------ /

    var raiseOpacity = function(){
      anime({
        targets: ['.htext'],
        easing: 'linear',
        keyframes: [
          { opacity: 0.7,  duration: 100, easing: 'linear', endDelay: 0, },
          { opacity: 1, duration: 1200, easing: 'linear', },
        ],
        // delay: 3000, 
        }); 
      };
    setTimeout(raiseOpacity, 3300);  
     
// Points --------------- /
    anime.set(['#Points'], {
      opacity: 0,
    });

    anime({
      targets: ['#Points'],
      easing: 'linear',
      opacity: 1,
      duration: 500,
      delay: 3300,
    });

  };

  setTimeout(lineDrawDelay, 00);

  } // End of media query conditional


// Rectangles ----------------------------------/

 // Rectangles starting values

    anime.set(['.rect-md .yellow-rect img'],{ // Just apply these on desktop
     scale: 0.5,
     translateX: '-9%',
    });
    anime.set(['.yellow-rect img'],{ // Apply to all breakpoints
      rotate: -90,
      opacity: 0,
    });
    anime.set(['.rect-md .red-rect img'],{
      scale: 0.42,
      translateX: '-4%',
    });
    anime.set(['.red-rect img'],{
      rotate: -90,
      opacity: 0,
    });
    anime.set(['.rect-md .green-rect img'],{
      scale: 0.3,
      translateX: '10%',
    });
    anime.set(['.green-rect img'],{
      rotate: -90,
      opacity: 0,
    });
    anime.set(['.rect-md .blue-rect img'],{
      scale: 0.4,
      translateX: '17%',
    });
    anime.set(['.blue-rect img'],{
      rotate: -90,
      opacity: 0,
    });

// Opacity

      anime({
        targets: ['.yellow-rect img','.red-rect img', '.green-rect img', '.blue-rect img',],
        opacity: 0.8,
        delay: 000, //anime.stagger(500),
        duration: 2000,
        easing: 'linear',
      })

// Rectangles Rotary Movement ------------------------------------ /

// Set initial properties
        var translateRect = -20;
        var translateRect2 = 250;
        
// Get the rectangles moving ------------------------ /

// Set rotation duration and easing
      var rotateDuration = 16000;
      var rectEasing = 'linear';
      var timeOut = 0;
      var timeOutAdd = 500;
      var timeOutAdd2 = 500;
      var timeoutAdd3 = 500;
   // randomValues();
  

      
      var yellow2 = function randomValues() {
        anime({
          targets: '.yellow-rect img',
          rotate: 270,
          loop: true,
          easing: rectEasing,
          //direction: 'alternate',
          translateX: function() {
            //return anime.random(170, 130);
          },
          complete: randomValues,
          duration: rotateDuration,
        });
      };
      setTimeout(yellow2, timeOut);

    

      var red2 = function randomValues2() {
        anime({
          targets: ['.red-rect img'],
          rotate: 270,
          loop: true,
          //direction: 'alternate',
          easing: rectEasing,
          duration: rotateDuration / 2,
          translateX: function() {
           // return anime.random(200, 300);
          },
          complete: randomValues2,
        });
      };
      setTimeout(red2, timeOut + timeOutAdd);

   

      var green2 = function randomValues3() {
        anime({
          targets: ['.green-rect img'],
          rotate: 270,
          duration: rotateDuration,
          loop: true,
          easing: rectEasing,
          //direction: 'alternate',
          translateX: function() {
            //return anime.random(-300, -200)
          },
          complete: randomValues3,
        });
      }
      setTimeout(green2, timeOut + timeOutAdd2);
       
  

      var blue2 = function randomValues4() {
        anime({
          targets: ['.blue-rect img'],
          rotate: 270,
          duration: rotateDuration / 2,
          loop: true,
          //direction: 'alternate',
          easing: rectEasing,
          translateX: function() {
            //return(-220, -200)
          },
          complete: randomValues4,
          });
      }
      setTimeout(blue2, timeOut + timeoutAdd3);

// Animate subtext 

if (mq.matches) {
  // window width is at less than 767px
  
}  
else {    
      anime.set(['#hero-subtext'], {
        // opacity: 0,
       });
       anime.set(['#web'], {
        translateX: -200,
        translateY: 13.897
      });
      anime.set(['#graphic'], {
        translateX: -200,
        translateY: 22.897,
      });
      anime.set(['#data'], {
        translateX: -200,
        translateY: 31.897,
      });
      anime.set(['#design'], {
        translateX: 200,
        translateY: 22.897,
      });
      anime.set(['#visualization'], {
        translateX: 200,
        translateY: 31.897,
      });
      anime.set(['#subtext-line'], {
        translateX: 0,
        translateY: 50,
      });

    var subtextTiming = function() {  
      
      var subTextEasing = 'spring(1,100,50,0)';
      var subTextDelay = 600;
      var subTextDuration = 1400;  
     
      anime({
        targets: '#web',
        translateX: 9.233,
        duration: subTextDuration,
        delay: 0,
        easing: subTextEasing,
      });
     
      anime({
        targets: '#graphic',
        translateX: 0.364,
        duration: subTextDuration,
        delay: subTextDelay,
        easing: subTextEasing,
      });
     
      anime({
        targets: '#data',
        translateX: 8.75,
        duration: subTextDuration,
        delay: subTextDelay + 300,
        easing: subTextEasing,
      });

      anime({
        targets: '#design',
        translateX: 31.294,
        duration: subTextDuration,
        delay: subTextDelay - 300,
        easing: subTextEasing,
      });
      
      anime({
        targets: '#visualization',
        translateX: 31.056,
        duration: subTextDuration,
        delay: subTextDelay * 2,
        easing: subTextEasing,
      });

      anime({
        targets: '#subtext-line',
        translateY: 0,
        duration: subTextDuration,
        delay: subTextDelay + 1000,
        easing: 'easeOutSine',
      });

    };
    setTimeout(subtextTiming, 3800);  

  }
    

   



   
  });
})(jQuery);
