

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

    function toggleAbstract(e) {
        // console.log('toggleAbstract()');
        e.preventDefault();
        $target = $(e.target);
        $target.parents('.research-paper').toggleClass('abstract-visible');
    }


    /* anime.set(['#mainland', '.plotpoints', 'body.home .hero-child h2',
    'body.home .hero-child p', 'body.home .hero-child button'], {
      opacity: [0]
    }); */
    /* anime.set(['g#grades text', 'g#ses-metric text', '#grades path#axis-line-2', '#hp-x-line path#map-x'], {
      opacity: [0]
    }); */
  
    var shiftDelay = 0 // delay of entire animation
    var startingDelay1 = 825; // Starting delay of code groups 13-16 
    var startingDelay2 = 1500; // Starting delay of code groups 21-24 
    var staggerDelay = 150;
    var moveDuration = 1800; // how long the leftward movement lasts
    var moveDistance = 0; // how far the line moves
    var moveDistance2 = 0; // how far the line moves
    var moveDurationOffset = '-=2000'; // time offset of leftward movement
    var fadeout = 2000; // opacity fade-out length
    var fadeoutOffset ='-=200'; // offset of the aboive
    var loopDelay = 1400; // delay before each line appears again after it fades out
    var xOne = 0; // x position of snippet 1
    var xTwo = 600;
    var xThree = 700;
    var xFour = 800;
    var yOne = 300;
    var yStagger = 72;
    var easing1 = 'easeInExpo';
    var opacity1 = .2;
    var opacity2 = .6;

    var loopLength = 12000;

  


    /* ----- Starting Settings ------ */

    anime.set(['.code-grp'],{
     rotate: 30,
      translateY: 20,
      translateX: 350,
      //translateZ: 0,
      });
    anime.set(['.code-grp.topleftl'],{
     
        //translateY: 20,
        translateX: 180,
      
        });  
    anime.set(['.code-grp.topleftr'],{
  
        //translateY: 20,
        //translateX: 3000,
 
        });     
    anime.set(['.code-grp.bcenter', '.code-grp.centergraph', '.code-grp.rightmedl', '.code-grp.ext-bl', '.code-grp.toprightr'],{
    
        //translateY: 20,
        //translateX: 350,
       
        });  
    anime.set(['.code-grp.rightmedr'],{
      
        //translateY: 20,
        translateX: 450,
  
        });       
    
    anime.set(['.code-grp.toprightl'],{
        translateX: 550,
        }); 
    anime.set(['.code-grp.toprightr'],{
      translateX: 550,
      });   
      
      anime.set(['.code-grp .codetext'], {
        opacity: opacity1,
        //opacity: 1,
      });

    anime({
      targets: ['.grp-1 .codetext', '.grp-3 .codetext', '.grp-5 .codetext', '.grp-7 .codetext', '.grp-9 .codetext',
      '.grp-11 .codetext', '.grp-13 .codetext', '.grp-15 .codetext', '.grp-17 .codetext', '.grp-19 .codetext',
      '.grp-21 .codetext', '.grp-23 .codetext', '.grp-25 .codetext'],
      keyframes: [
        //{translateX: moveDistance}, {translateX: 0}
        { translateX: 50 },
        { translateX: 0 },
      ],
      duration: 75000,
      loop: true,
      easing: 'linear',
    });

    anime({
      targets: ['.grp-2 .codetext', '.grp-4 .codetext', '.grp-6 .codetext', '.grp-8 .codetext', '.grp-10 .codetext',
      '.grp-12 .codetext', '.grp-14 .codetext', '.grp-16 .codetext', '.grp-18 .codetext', '.grp-20 .codetext',
      '.grp-22 .codetext', '.grp-24 .codetext'],
      keyframes: [
        //{translateX: moveDistance}, {translateX: 0}
        { translateX: 50 },
        { translateX: 0 },
      ],
      duration: 75000,
      loop: true,
      easing: 'linear',
    });

    // Code groups 5-8 ------------------------------------ 

    var heroCode5Delay = function(){
      anime({
        targets: ['.grp-5 .codetext'],
        easing: easing1,
        keyframes: [
          //{translateX: moveDistance}, {translateX: 0}
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
      })
    };
    setTimeout(heroCode5Delay, 0 + shiftDelay);
  
    var heroCode6Delay = function(){
      anime({
        targets: ['.grp-6 .codetext'],
        // easing: 'easeOutCubic',
        easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
      })
    };
   setTimeout(heroCode6Delay, 500 + shiftDelay); 

    var heroCode7Delay = function(){
      anime({
        targets: ['.grp-7 .codetext'],
        // easing: 'easeOutCubic',
        easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), 
      })
    };
    setTimeout(heroCode7Delay, 250 + shiftDelay);

    var heroCode8Delay = function(){
      anime({
        targets: ['.grp-8 .codetext'],
       //  easing: 'easeOutCubic',
       easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
          //{translateX: moveDistance2}, {translateX: 0},
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode8Delay, 750 + shiftDelay); 

    // Code groups 13-16 ------------------------------------ 

    var heroCode13Delay = function(){
      anime({
        targets: ['.grp-13 .codetext'],
       easing: easing1,
        keyframes: [
          //{translateX: moveDistance}, {translateX: 0}
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
   setTimeout(heroCode13Delay, 0 + startingDelay1);
  
    var heroCode14Delay = function(){
      anime({
        targets: ['.grp-14 .codetext'],
        // easing: 'easeOutCubic',
        easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
   setTimeout(heroCode14Delay, 500 + startingDelay1); 

    var heroCode15Delay = function(){
      anime({
        targets: ['.grp-15 .codetext'],
        // easing: 'easeOutCubic',
        easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode15Delay, 250 + startingDelay1);

    var heroCode16Delay = function(){
      anime({
        targets: ['.grp-16 .codetext'],
       //  easing: 'easeOutCubic',
       easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode16Delay, 750 + shiftDelay); 

    // Code groups 21-24 ------------------------------------ 

    var heroCode21Delay = function(){
      anime({
        targets: ['.grp-21 .codetext'],
      easing: easing1,
        keyframes: [
          //{translateX: moveDistance}, {translateX: 0}
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode21Delay, 0 + startingDelay2);

    var heroCode22Delay = function(){
      anime({
        targets: ['.grp-22 .codetext'],
        // easing: 'easeOutCubic',
        easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode22Delay, 500 + startingDelay2); 

    var heroCode23Delay = function(){
      anime({
        targets: ['.grp-23 .codetext'],
        // easing: 'easeOutCubic',
        easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode23Delay, 250 + startingDelay2);

    var heroCode24Delay = function(){
      anime({
        targets: ['.grp-24 .codetext'],
      //  easing: 'easeOutCubic',
      easing: easing1,
        keyframes: [
          { opacity: opacity1 },
          { opacity: opacity2 },
          { opacity: opacity1 },
        ],
        duration: moveDuration,
        loop: true,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode24Delay, 750 + startingDelay2); 

      // Code groups 9-12 ------------------------------------ 

      var heroCode9Delay = function(){
        anime({
          targets: ['.grp-9 .codetext'],
        easing: easing1,
          keyframes: [
            //{translateX: moveDistance}, {translateX: 0}
            { opacity: opacity1 },
            { opacity: opacity2 },
            { opacity: opacity1 },
          ],
          duration: moveDuration,
          loop: true,
          delay: anime.stagger(staggerDelay), // increase delay for each element
        })
      };
      setTimeout(heroCode9Delay, 0 + shiftDelay);
  
      var heroCode10Delay = function(){
        anime({
          targets: ['.grp-10 .codetext'],
          // easing: 'easeOutCubic',
          easing: easing1,
          keyframes: [
            { opacity: opacity1 },
            { opacity: opacity2 },
            { opacity: opacity1 },
          ],
          duration: moveDuration,
          loop: true,
          delay: anime.stagger(staggerDelay), // increase delay for each element
        })
      };
      setTimeout(heroCode10Delay, 500 + shiftDelay); 
  
      var heroCode11Delay = function(){
        anime({
          targets: ['.grp-11 .codetext'],
          // easing: 'easeOutCubic',
          easing: easing1,
          keyframes: [
            { opacity: opacity1 },
            { opacity: opacity2 },
            { opacity: opacity1 },
          ],
          duration: moveDuration,
          loop: true,
          delay: anime.stagger(staggerDelay), // increase delay for each element
        })
      };
      setTimeout(heroCode12Delay, 250 + shiftDelay);
  
      var heroCode12Delay = function(){
        anime({
          targets: ['.grp-12 .codetext'],
        //  easing: 'easeOutCubic',
        easing: easing1,
          keyframes: [
            { opacity: opacity1 },
            { opacity: opacity2 },
            { opacity: opacity1 },
          ],
          duration: moveDuration,
          loop: true,
          delay: anime.stagger(staggerDelay), // increase delay for each element
        })
      };
      setTimeout(heroCode12Delay, 750 + shiftDelay);   


    /* anime({
      targets: ['.grp-1', '.grp-2'],
      keyframes: [
        {translateX: -15},
        {translateX: 0},
      ],
      easing: 'easeOutCubic',
      duration: 12000,
      loop: false,
    });

    anime({
      targets: ['.grp-3', '.grp-4'],
      keyframes: [
        {translateX: 15},
        {translateX: 0},
      ],
      easing: 'easeOutCubic',
      duration: 12000,
      loop: false,
    }) */

    

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

    // Dropdown for article sorting on mobile
    $('body.research .small-tab-nav ul li a').on('click', function(e) {
        // console.log('Small tab nav selection');
        $(this).tab('show');
        // Store target.
        $target = $(e.target);
        // Clear all active and highlight classes.
        $('body.research .small-tab-nav ul li a').removeClass('active highlight');
        // Add proper classes to selected target.
        $target.addClass('active highlight');
    });

    // Display article abstract and versions for entry on research page.
    $('a.show-versions').on('click', function(e) {
        // console.log('a.show-versions');
        toggleAbstract(e);
    });

    $('body.research a[data-toggle="tab"]').on('click touchstart', function (e) {
        // console.log('hide tab event');
        if ($('.research-paper.abstract-visible').length >= 1) {
            $('.research-paper.abstract-visible').removeClass('abstract-visible');
        }
    });

    $('#toggleDrawer').on('click', function() {
        // console.log('#toggleDrawer selected');
        $('#drawer').addClass('show');
    });

    $('#closeDrawer').on('click', function() {
        console.log('#closeDrawer selected');
        $('#drawer').removeClass('show');
    });

    // Add Subnav active selection highlighting
    $(".subnav a").click(function () {
        $(".subnav a").removeClass("highlight");
        $(this).addClass("highlight");
    });

    if ($('body.home').length >= 1) {
      console.log('setting up home page animations');
      setElPositions();
        $(window).resize(function() {
        setElPositions();
      })
      setElPositions();

      var userScrolled = false;
      var svgScrollEvt = $(window).scroll(function() {
        userScrolled = true;
      });
      var svgScrollInt = setInterval(function() {
        if (avgGraphicAnimated && growthGraphicAnimated && trendGraphicAnimated) {
          // Remove listener and interval
          // console.log('removing listener and interval');
          $(window).off("scroll", svgScrollEvt);
          clearInterval(svgScrollInt);
        } else {
          if (userScrolled) {
            setupAnime();
            checkHomepageAnimations();
            userScrolled = false;
          }
        }
      }, 50);
    }
  });
})(jQuery);
