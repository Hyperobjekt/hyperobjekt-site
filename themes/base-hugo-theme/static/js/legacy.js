
  
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
