

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
   

// NEW HOME V2

// Zoom out logo
  anime.set(['#cosmos',], {
    scale: 1.05,
  });

    anime({
      targets: ['#cosmos'],
      keyframes: [
        {scale: 1,  duration: 3400, easing: 'easeOutSine', endDelay: 0,},
        {scale: 1,  duration: 2000, easing: 'easeOutSine', endDelay: 0,}
      ]
    })


  // Animate lines appearance  
    var polyLineDur = 2800;
    var polyLineDelay = 300;
    var polyLineEase = 'linear';

    anime({ // grp 1
      targets: ['#red-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur,
      //delay: anime.stagger(60),
    });

    anime({ // grp 2
      targets: ['#grey-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.55,
      //delay: 40,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#cyan-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.7,
      //delay: 40,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#purple-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.75,
      delay: polyLineDur * 0.3,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#yellow-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.125,
      delay: polyLineDur * 0.01,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#green-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.325,
      delay: polyLineDur * 0.275,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#pinkpurple-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.125,
      delay: polyLineDur * 0.7,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#orange-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.375,
      delay: polyLineDur * 0.8,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#yellow-path2'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.075,
      delay: polyLineDur * 0.25,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#fuchsia-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.375,
      delay: polyLineDur * 0.5,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#yellowgreen-path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: polyLineEase,
      duration: polyLineDur * 0.25,
      delay: polyLineDur * 0.825,
      //delay: anime.stagger(60),
    });

    anime({ // grp 3
      targets: ['#bronze-path'],
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
      { opacity: 0.4, duration: 300, easing: 'linear', },
    ],
     delay: anime.stagger(250),
   
    }); 


// Add flicker to Hyper0bjekt logo ------------------ /

    var flickerDelay = function(){
      anime({
        targets: ['.hyper'],
        easing: 'linear',
        keyframes: [
          { opacity: 0.4,  duration: 100, easing: 'linear', endDelay: 0, },
        //  { opacity: 0.4, duration: 50, easing: 'linear', },
        // { opacity: 0.2,  duration: 150, easing: 'linear', endDelay: 0, },
        // { opacity: 0.6, duration: 50, easing: 'linear', },
       //   { opacity: 0.1,  duration: 100, easing: 'linear', endDelay: 0, },
       //   { opacity: 0.3, duration: 50, easing: 'linear', },
       //   { opacity: 0.1,  duration: 50, easing: 'linear', endDelay: 0, },
        //{ opacity: 0.3, duration: 50, easing: 'linear', },
       // { opacity: 0.1,  duration: 50, easing: 'linear', endDelay: 0, },
        //  { opacity: 0.8, duration: 100, easing: 'linear', },
        // { opacity: 0,  duration: 50, easing: 'linear', endDelay: 0, },
          { opacity: 1, duration: 1200, easing: 'linear', },
        ],
          //loop: true,
        // direction: 'reverse',
          delay: 100, 
        // endDelay: delayAtEnd,
        })
      };
    setTimeout(flickerDelay, 3300);

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

// Rectangles Random Movement ------------------------------------ /
    var randomDuration = 4000;
    var randomEase = 'easeInOutSine';

// Set initial properties

    anime.set(['.yellow-rect img'],{
      translateX: 0, 
      translateY: 100,
    });
    anime.set(['.green-rect img'],{
      translateX: -0, 
      translateY: 100,
    });
    anime.set(['.red-rect img'],{
      translateX: 0, 
      translateY: -100,
    });
    anime.set(['.blue-rect img'],{
      translateX: -0, 
      translateY: -100,
    });

// Random animation of rectanges

    function randomValuesYellow() {
      anime({
        targets: ['.yellow-rect img'],
        translateX: function() {
          return anime.random(100, 40);
        },
        translateY: function() {
          return anime.random(100, 40);
        },
        easing: 'linear',
        duration: randomDuration,
        complete: randomValuesYellow,
        });
      }
      //randomValuesYellow(); 

      function randomValuesGreen() {
        anime({
          targets: ['.green-rect img'],
          translateX: function() {
            return anime.random(-100, -40);
          },
          translateY: function() {
            return anime.random(100, 40);
          },
          easing: 'linear',
          duration: randomDuration,
          complete: randomValuesGreen,
          });
        }
      // randomValuesGreen();

      function randomValuesRed() {
        anime({
          targets: ['.red-rect img'],
          translateX: function() {
            return anime.random(100, 40);
          },
          translateY: function() {
            return anime.random(-100, -40);
          },
          easing: 'linear',
          duration: randomDuration,
          complete: randomValuesRed,
          });
        }
         //randomValuesRed(); 
    
      function randomValuesBlue() {
        anime({
          targets: ['.blue-rect img'],
          translateX: function() {
            return anime.random(-100, -40);
          },
          translateY: function() {
            return anime.random(-100, -40);
          },
          easing: 'linear',
          duration: randomDuration,
          complete: randomValuesBlue,
          });
        };
    //randomValuesBlue(); 

// Set initial properties
        var translateRect = 0;
        var translateRect2 = 300;
      anime.set(['.yellow-rect img'],{
        translateX: -translateRect +50, 
        translateY: 100,
      });
      anime.set(['.green-rect img'],{
        translateX: translateRect, 
        translateY: 100,
      });
      anime.set(['.red-rect img'],{
        translateX: -translateRect, 
        translateY: -100,
      });
      anime.set(['.blue-rect img'],{
        translateX: translateRect, 
        translateY: -100,
      });


// Rectangles Rotary Movement ------------------------------------ /
        var rotateDuration = 15000;
        anime({
          targets: ['.yellow-rect img'],
            rotate: [
            {value: -180, duration: rotateDuration,
            },
          // {value: 0, duration: 3000, endDelay: 1000},
            ],
          translateX: [
            {value: translateRect2, duration: rotateDuration / 2},
            {value: -translateRect +50, duration: 3000},
            ],
            translateY: [
              {value: 200, duration: rotateDuration / 2},
              {value: 100, duration: rotateDuration / 2},
              ],
          easing: 'linear',
          loop: true,
          direction: 'alternate',
        });
        anime({
          targets: ['.red-rect img'],
            rotate: [
            {value: -180, duration: rotateDuration, endDelay: 000,
            },
          // {value: 0, duration: 3000, endDelay: 1000},
            ],
          translateX: [
            {value: translateRect2, duration: rotateDuration / 2, endDelay: 000},
            {value: -translateRect, duration: rotateDuration /2, endDelay: 000},
            ],
            translateY: [
              {value: -200, duration: rotateDuration /2 , endDelay: 000},
              {value: -100, duration: rotateDuration /2, endDelay: 000},
              ],
          easing: 'linear',
          loop: true,
         
        });
        anime({
          targets: ['.green-rect img'],
            rotate: [
            {value: 180, duration: rotateDuration, endDelay: 000,
            },
           // {value: 0, duration: 3000, endDelay: 1000},
            ],
          translateX: [
            {value: -translateRect2, duration: rotateDuration / 2, endDelay: 000},
            {value: translateRect, duration: rotateDuration /2, endDelay: 000},
            ],
            translateY: [
              {value: 200, duration: rotateDuration /2, endDelay: 000},
              {value: 100, duration: rotateDuration /2, endDelay: 000},
              ],
          easing: 'linear',
          loop: true,
         
        });
        anime({
          targets: ['.blue-rect img'],
            rotate: [
            {value: 180, duration: rotateDuration, endDelay: 000,
            },
           // {value: 0, duration: 3000, endDelay: 1000},
            ],
          translateX: [
            {value: -300, duration: rotateDuration /2, endDelay: 0},
            {value: translateRect, duration: rotateDuration /2, endDelay: 0},
            ],
            translateY: [
              {value: -translateRect2, duration: rotateDuration /2, endDelay: 0},
              {value: -100, duration: rotateDuration /2, endDelay: 0},
              ],
          easing: 'linear',
          loop: true,
          direction: 'alternate',
        });
       

   /*  anime.set(['#color-rectangles'], {
      //opacity: 0,
    });
      anime({
        targets: '#blue-rectangle',
        translateX: -40,
        keyframes: [
          {translateY: 20, duration: 3000, easing: 'linear',},
          {translateY: -20, duration: 3000, easing: 'linear',},
        ],
        easing: 'linear',
        duration: 3000,
        loop: true,
        direction: 'alternate',  
          });
        anime({
        targets: '#green-rectangle',
        translateX: 10,
        translateY: 10,
        easing: 'linear',
        duration: 5000,
        loop: true,
        direction: 'alternate',  
          });  
        anime({
          targets: '#yellow-rectangle',
          translateX: 20,
          translateY: 10,
          easing: 'linear',
          duration: 5000,
          loop: true,
          direction: 'alternate',  
            });     
       /* anime({
          targets: '#color-rectangles',
          opacity: 1,
          duration: 4000,
          delay: 5000,
        });   */ 



   
  });
})(jQuery);
