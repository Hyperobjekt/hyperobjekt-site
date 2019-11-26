

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

 

  
    var shiftDelay = 1000 // delay of entire animation
    var startingDelay1 = 700; // Starting delay of code groups 13-16 
    var startingDelay2 = 1500; // Starting delay of code groups 21-24 
    var staggerDelay = 150;
    var moveDuration = 1800; // how long the leftward movement lasts
    var easing1 = 'easeOutQuint';
    var opacity1 = .1;
    var opacity2 = .5;
    var opacity3 = .2;
    var delayAtEnd = 2000;  
    var opDuration1 = 300;
    var opDuration2 = 1200;
    var opDuration3 = 300;

    /* ----- Starting Settings ------ */

    anime.set(['.code-grp'],{
     rotate: 30,
      translateY: 20,
      translateX: 350,
      translateZ: 0,
      });
    anime.set(['.code-grp.topleftl'],{
        translateX: 180,
        });       
    anime.set(['.code-grp.rightmedr'],{
        translateX: 450,
        });       
    anime.set(['.code-grp.toprightl'],{
        translateX: 550,
        }); 
    anime.set(['.code-grp.toprightr'],{
      translateX: 550,
      });   
      anime.set(['.code-grp .codetext'], {
        opacity: opacity3,
        translateZ: 0,
      });

    /* -------- Group movement ----------- */
      /*
    anime({
      targets: ['.grp-1 .codetext', '.grp-3 .codetext', '.grp-5 .codetext', '.grp-7 .codetext', '.grp-9 .codetext',
      '.grp-11 .codetext', '.grp-13 .codetext', '.grp-15 .codetext', '.grp-17 .codetext', '.grp-19 .codetext',
      '.grp-21 .codetext', '.grp-23 .codetext', '.grp-25 .codetext'],
      keyframes: [
        { translateX: -5 },
        { translateX: 0 },
      ],
      //duration: 7000,
      //loop: true,
      easing: 'linear',
    });

    anime({
      targets: ['.grp-2 .codetext', '.grp-4 .codetext', '.grp-6 .codetext', '.grp-8 .codetext', '.grp-10 .codetext',
      '.grp-12 .codetext', '.grp-14 .codetext', '.grp-16 .codetext', '.grp-18 .codetext', '.grp-20 .codetext',
      '.grp-22 .codetext', '.grp-24 .codetext'],
      keyframes: [
        { translateX: 5 },
        { translateX: 0 },
      ],
      //duration: 7000,
      //loop: true,
      easing: 'linear',
    });
    */

    // Code groups 5-8 ------------------------------------ 

    var heroCode5Delay = function(){
      anime({
        targets: ['.grp-5 .codetext'],
       // easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode5Delay, 0 + shiftDelay);
  
    var heroCode6Delay = function(){
      anime({
        targets: ['.grp-6 .codetext'],
        easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
   setTimeout(heroCode6Delay, 500 + shiftDelay); 

    var heroCode7Delay = function(){
      anime({
        targets: ['.grp-7 .codetext'],
        easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode7Delay, 250 + shiftDelay);

    var heroCode8Delay = function(){
      anime({
        targets: ['.grp-8 .codetext'],
       easing: easing1,
       keyframes: [
        { opacity: opacity2, duration: opDuration1, easing: 'linear' },
        { opacity: opacity2, duration: opDuration2, easing: 'linear' },
        { opacity: opacity3, duration: opDuration3, easing: 'linear' },
      ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode8Delay, 750 + shiftDelay); 

    // Code groups 13-16 ------------------------------------ 

    var heroCode13Delay = function(){
      anime({
        targets: ['.grp-13 .codetext'],
        easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode13Delay, 0 + startingDelay1 + shiftDelay);

    var heroCode14Delay = function(){
      anime({
        targets: ['.grp-14 .codetext'],
       easing: easing1,
       keyframes: [
        { opacity: opacity2, duration: opDuration1, easing: 'linear' },
        { opacity: opacity2, duration: opDuration2, easing: 'linear' },
        { opacity: opacity3, duration: opDuration3, easing: 'linear' },
      ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode14Delay, 500 + startingDelay1 + shiftDelay);  

    var heroCode15Delay = function(){
      anime({
        targets: ['.grp-15 .codetext'],
        easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode15Delay, 250 + startingDelay1 + shiftDelay);

    var heroCode16Delay = function(){
      anime({
        targets: ['.grp-16 .codetext'],
       easing: easing1,
       keyframes: [
        { opacity: opacity2, duration: opDuration1, easing: 'linear' },
        { opacity: opacity2, duration: opDuration2, easing: 'linear' },
        { opacity: opacity3, duration: opDuration3, easing: 'linear' },
      ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode16Delay, 750 + startingDelay1 + shiftDelay); 

    // Code groups 21-24 ------------------------------------ 

    var heroCode21Delay = function(){
      anime({
        targets: ['.grp-21 .codetext'],
      easing: easing1,
      keyframes: [
        { opacity: opacity2, duration: opDuration1, easing: 'linear' },
        { opacity: opacity2, duration: opDuration2, easing: 'linear' },
        { opacity: opacity3, duration: opDuration3, easing: 'linear' },
      ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode21Delay, 0 + startingDelay2 + shiftDelay);

    var heroCode22Delay = function(){
      anime({
        targets: ['.grp-22 .codetext'],
        easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay),
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode22Delay, 500 + startingDelay2 + shiftDelay); 

    var heroCode23Delay = function(){
      anime({
        targets: ['.grp-23 .codetext'],
        easing: easing1,
        keyframes: [
          { opacity: opacity2, duration: opDuration1, easing: 'linear' },
          { opacity: opacity2, duration: opDuration2, easing: 'linear' },
          { opacity: opacity3, duration: opDuration3, easing: 'linear' },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode23Delay, 250 + startingDelay2 + shiftDelay);

    var heroCode24Delay = function(){
      anime({
        targets: ['.grp-24 .codetext'],
      easing: easing1,
      keyframes: [
        { opacity: opacity2, duration: opDuration1, easing: 'linear' },
        { opacity: opacity2, duration: opDuration2, easing: 'linear' },
        { opacity: opacity3, duration: opDuration3, easing: 'linear' },
      ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
        endDelay: delayAtEnd,
      })
    };
    setTimeout(heroCode24Delay, 750 + startingDelay2 + shiftDelay); 

    

    var updateModal = {
        activeBio: null,
        allBios: null,
        update: function() {
            // console.log('updateModal.update()');
            var $button = $(this.allBios[this.activeBio]).find('button');

            // Get name, title, bio, and image
            var parent = $button.parent();
            // console.log(parent);
            var name = $button.parent().siblings('.name').text();
            // console.log('name = ' + name);
            var title = $button.parent().siblings('.title').text();
            // console.log('title = ' + title);
            var bio = $button.parent().siblings('.bio').html();
            /// console.log('bio = ' + bio);
            var image = $button.closest('.column-people').children('.pic').attr('style');
            var bigimage = $button.parent().siblings('.bigimage').html();

            // Set contents
            $('#modalImg').attr('style', image);
            $('img#bigimage').attr('src', bigimage);
            $('#modalName').text(name);
            $('#modalTitle').html(title);
            $('#modalBio').html(bio);
            $('#peopleBioModal').modal('show');

            // Check first and last position, disable buttons
            if (this.activeBio <= 0) {
                // console.log('first item');
                $('#prevBio').prop( "disabled", true);
                $('#nextBio').prop( "disabled", false);
            } else if (this.activeBio >= ((this.allBios).length - 1)) {
                // console.log('last item');
                $('#prevBio').prop( "disabled", false);
                $('#nextBio').prop( "disabled", true);
            } else {
                $('#prevBio').prop( "disabled", false);
                $('#nextBio').prop( "disabled", false);
            }
        }
    };

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

    // Handle bio modals
    if ($('.launch-people-bio').length >= 1) {
      // Store the complete collection of bios
      // so we can switch between them all.
      updateModal.allBios = $('.column-people');
      $('.launch-people-bio').click(function(e) {
        e.preventDefault();
        var $button = $(e.target);
        // Store active bio index so navigation between them works.
        updateModal.activeBio = (updateModal.allBios).index($button.closest('.column-people'));
        // console.log(updateModal.activeBio);
        updateModal.update();

        $('#prevBio').on('click', function() {
            if (updateModal.activeBio >= 1) {
                updateModal.activeBio = updateModal.activeBio - 1;
                updateModal.update();
            }
        });
        $('#nextBio').on('click', function() {
            if (updateModal.activeBio < (updateModal.allBios).length - 1) {
                updateModal.activeBio = updateModal.activeBio + 1;
                updateModal.update();
            }
        });
      });
    }

   
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
   

// NEW HOME HERO ------------------------------- //

var polyLineDur = 600;
var polyLineDelay = 300;
var polyLineEase = 'linear';

anime({ // grp 1
  targets: ['#Lines .linegrp1'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur,
  //delay: anime.stagger(60),
});
anime({ // grp 2
  targets: ['#Lines .linegrp2'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur,
  delay: polyLineDelay,
});
anime({ // grp 3
  targets: ['#Lines .linegrp3'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur,
  delay: polyLineDelay * 2,
});
anime({ // grp 4
  targets: ['#Lines .linegrp4'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur,
  delay: polyLineDelay * 3,
});
anime({ // grp 5
  targets: ['#Lines .linegrp5'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur,
  delay: polyLineDelay * 4,
});
anime({ // grp 6
  targets: ['#Lines .linegrp6'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur,
  delay: polyLineDelay * 5,
});
anime({ // grp 7
  targets: ['#Lines .linegrp7-1'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur / 2,
  delay: polyLineDelay * 5,
});
anime({ // grp 7
  targets: ['#Lines .linegrp7-2'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur / 2,
  delay: (polyLineDelay * 6) - (polyLineDelay / 2),
});
anime({ // grp 8
  targets: ['#Lines .linegrp8'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: polyLineEase,
  duration: polyLineDur, 
  delay: polyLineDelay * 6
});


anime.set(['.htext', '.htext2'], {
  opacity: 0,
  }); 

   anime({
    targets: ['#h-Text2'],
   easing: 'linear',
   keyframes: [
    { opacity: 0,  duration: 5000, easing: 'linear', endDelay: 0, },
    { opacity: 0.2, duration: 50, easing: 'linear', },
    { opacity: 0,  duration: 50, easing: 'linear', endDelay: 0, },
    { opacity: 0.4, duration: 50, easing: 'linear', },
    { opacity: 0.2,  duration: 50, easing: 'linear', endDelay: 0, },
    { opacity: 0.4, duration: 100, easing: 'linear', },
    { opacity: 0.2,  duration: 100, easing: 'linear', endDelay: 0, },
    { opacity: 0.6, duration: 150, easing: 'linear', },
    { opacity: 0.2,  duration: 150, easing: 'linear', endDelay: 0, },
    { opacity: 0.8, duration: 150, easing: 'linear', },
    { opacity: 0,  duration: 50, easing: 'linear', endDelay: 0, },
    { opacity: 1, duration: 150, easing: 'linear', },
  ],
    //loop: true,
   // direction: 'reverse',
    delay: anime.stagger(60), 
   // endDelay: delayAtEnd,
  }); 



// NEW HOME V2

  anime.set(['#cosmos',], {
    scale: 1.05,
  });
  anime.set(['#Points'], {
    opacity: 0,
  });

    anime({
      targets: ['#cosmos'],
      keyframes: [
        {scale: 1,  duration: 3400, easing: 'easeOutSine', endDelay: 0,},
        {scale: 1,  duration: 2000, easing: 'easeOutSine', endDelay: 0,}
      ]
    })

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
    anime({
      targets: ['.htext'],
     easing: 'linear',
     keyframes: [
      { opacity: 0,  duration: 460, easing: 'linear', endDelay: 0, },
      { opacity: 0.45, duration: 300, easing: 'linear', },
    ],
      //loop: true,
     // direction: 'reverse',
     delay: anime.stagger(250),
     // endDelay: delayAtEnd,
    }); 



    var flickerDelay = function(){
      anime({
        targets: ['.hyper'],
        easing: 'linear',
        keyframes: [
          { opacity: 0.45,  duration: 200, easing: 'linear', endDelay: 0, },
        //  { opacity: 0.4, duration: 50, easing: 'linear', },
        // { opacity: 0.2,  duration: 150, easing: 'linear', endDelay: 0, },
        // { opacity: 0.6, duration: 50, easing: 'linear', },
          { opacity: 0.1,  duration: 50, easing: 'linear', endDelay: 0, },
          { opacity: 0.6, duration: 100, easing: 'linear', },
          { opacity: 0.1,  duration: 100, easing: 'linear', endDelay: 0, },
        { opacity: 0.8, duration: 100, easing: 'linear', },
        { opacity: 0.1,  duration: 100, easing: 'linear', endDelay: 0, },
        //  { opacity: 0.8, duration: 100, easing: 'linear', },
        // { opacity: 0,  duration: 50, easing: 'linear', endDelay: 0, },
          { opacity: 1, duration: 200, easing: 'linear', },
        ],
          //loop: true,
        // direction: 'reverse',
          delay: 500, 
        // endDelay: delayAtEnd,
        })
      };
    setTimeout(flickerDelay, 3200);

// Points --------------- /

    anime({
      targets: ['#Points'],
      easing: 'linear',
      opacity: 1,
      duration: 500,
      delay: 4400,
    });

// Rectangles ----------------- /
var randomDuration = 5000;
var randomEase = 'easeInOutSine';
function randomValues1() {
  anime({
    targets: ['#red-rectangle'],
    translateX: function() {
      return anime.random(-30, 30);
    },
    translateY: function() {
      return anime.random(30, -30);
    },
    easing: 'linear',
    duration: randomDuration,
 
    complete: randomValues1,
    });
  }
  randomValues1(); 
  function randomValues2() {
    anime({
      targets: ['#yellow-rectangle'],
      translateX: function() {
        return anime.random(30, 30);
      },
      translateY: function() {
        return anime.random(30, -30);
      },
      easing: 'linear',
      duration: randomDuration,
    
      complete: randomValues2,
      });
    }
    randomValues2(); 

  function randomValues3() {
    anime({
      targets: ['#green-rectangle'],
      translateX: function() {
        return anime.random(30, -30);
      },
      translateY: function() {
        return anime.random(30, -30);
      },
      easing: 'linear',
      duration: randomDuration,
    
      complete: randomValues3,
      });
    }
    randomValues3();
    
    function randomValues4() {
      anime({
        targets: ['#blue-rectangle'],
        translateX: function() {
          return anime.random(30, -30);
        },
        translateY: function() {
          return anime.random(30, -30);
        },
        easing: 'linear',
        duration: randomDuration,
      
        complete: randomValues4,
        });
      }
      randomValues4(); 

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
