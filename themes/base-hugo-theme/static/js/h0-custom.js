

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
      { opacity: 0.4, duration: 300, easing: 'linear', },
    ],
     delay: anime.stagger(250),
    }); 

     
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

  setTimeout(lineDrawDelay, 2000);



  // Raise opacity of Hyper0bjekt logo ------------------ /
  var raiseOpacity = function(){
      anime({
        targets: ['.htext'],
        easing: 'linear',
        keyframes: [
          { opacity: 0.4,  duration: 100, easing: 'linear', endDelay: 0, },
          { opacity: 1, duration: 1200, easing: 'linear', },
        ],
         // delay: 3000, 
        }); 
      };
    setTimeout(raiseOpacity, 6600);  


// Rectangles Rotary Movement ------------------------------------ /

// Set initial properties
        var translateRect = -20;
        var translateRect2 = 300;
      anime.set(['.yellow-rect img'],{
        translateX: -translateRect +50, 
        translateY: 100,
      });
      anime.set(['.green-rect img'],{
        translateX: -translateRect2, 
        translateY: 200,
      });
      anime.set(['.red-rect img'],{
        translateX: -translateRect, 
        translateY: -100,
      });
      anime.set(['.blue-rect img'],{
        translateX: translateRect, 
        translateY: -100,
      });

      anime.set(['.colored-rectangles img'], {
        opacity: 0,
      });   
      anime({
        targets: ['.colored-rectangles img'],
        opacity: 1,
        duration: 500,
        delay: 0,
        easing: 'linear',
      });
        
// Get the rectangles moving 
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
            {value: translateRect, duration: rotateDuration /2, endDelay: 000},
            {value: -translateRect2, duration: rotateDuration / 2, endDelay: 000},
           
            ],
            translateY: [
              {value: 100, duration: rotateDuration /2, endDelay: 000},
              {value: 200, duration: rotateDuration /2, endDelay: 000},
             
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

    

   



   
  });
})(jQuery);
