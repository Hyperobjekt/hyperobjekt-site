

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
  



    var shiftDelay = 2000 // delay of entire animation
    var startingDelay = 400; // Starting delay of snippet 2 - x
    var staggerDelay = 100;
    var moveDuration = 2000; // how long the leftward movement lasts
    var moveDurationOffset = '-=2000'; // time offset of leftward movement
    var fadeout = 2000; // opacity fade-out length
    var fadeoutOffset ='-=200'; // offset of the aboive
    var loopDelay = 1400; // delay before each line appears again after it fades out
    var xOne = 0; // x position of snippet 1
    var xTwo = 100;
    var xThree = 300;
    var xFour = 400;
    var yStagger = 72;

    /* ----- ONE ------ */
    anime.set('.code1', {
      opacity: 0,
      translateX: xOne,
    });
    var herocode = anime.timeline({
      loop: true,
    });
    var heroCode1Delay = function(){
      herocode.add({
        targets: ['.codeline'],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        delay: anime.stagger(staggerDelay, {direction: 'reverse'}), // increase delay for each element
      }).add({
        targets: ['.code1'],
        translateX: xOne - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      }, moveDurationOffset).add({
        targets: ['.code1'],
        opacity: [1, 0],
        duration: fadeout,
        easing: 'easeOutCubic',
        endDelay: loopDelay,   
      },fadeoutOffset);
    };
    setTimeout(heroCode1Delay, 0 + shiftDelay);
    /* ----- TWO ------ */
    anime.set('.code2', {
      opacity: 0,
      translateY: yStagger,
      translateX: xTwo,
    }); 
    var herocode2 = anime.timeline({
      loop: true,
    });
    var heroCode2Delay = function(){
      herocode2.add({
        targets: ['.codeline2'],
        opacity: [0, .9],
        easing: 'easeOutCubic',
        delay: anime.stagger(staggerDelay, {direction: 'reverse'}), // increase delay for each element.
      }).add({
        targets: ['.code2'],
        translateX: xTwo - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      }, moveDurationOffset).add({
        targets: ['.code2'],
        opacity: [.9, 0],
        duration: fadeout,
        easing: 'easeOutCubic', 
        endDelay: loopDelay,   
      },fadeoutOffset);
    };
    setTimeout(heroCode2Delay, startingDelay + shiftDelay); 
    /* ----- THREE ------ */
    anime.set('.code3', {
      translateY: yStagger -40,
      opacity: 0,
      translateX: xThree,
    });
    var herocode3 = anime.timeline({
     loop: true,
    }); 
    var heroCode3Delay = function(){
      herocode3.add({
        targets: ['.codeline3'],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        delay: anime.stagger(staggerDelay, {direction: 'reverse'}), // increase delay for each element.
      }).add({
        targets: ['.code3'],
        translateX: xThree - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      }, moveDurationOffset).add({
        targets: ['.code3'],
        opacity: [1, 0],
        duration: fadeout,
        easing: 'easeOutCubic',   
        endDelay: loopDelay, 
      },fadeoutOffset);
    };
    setTimeout(heroCode3Delay, startingDelay * 2 + 1400 + shiftDelay);
    /* ----- FOUR ------ */
    anime.set('#fourthSnippet', {
      opacity: 0,
      translateY: yStagger + 36,
      translateX: xFour,
    });
    var herocode4 = anime.timeline({
      loop: true,
    }); 
    var heroCode4Delay = function(){
      herocode4.add({
        targets: ['.codeline4'],
        opacity: [0, .9],
        easing: 'easeOutCubic',
        delay: anime.stagger(staggerDelay, {direction: 'reverse'}), // increase delay for each element.
      }).add({
        targets: ['#fourthSnippet'],
        translateX: xFour - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      },moveDurationOffset).add({
        targets: ['#fourthSnippet'],
        opacity: [.9, 0],
        duration: fadeout,
        easing: 'easeOutCubic',   
        endDelay: loopDelay, 
      },fadeoutOffset);
    };
    setTimeout(heroCode4Delay, startingDelay * 3 + 1400 + shiftDelay);

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
