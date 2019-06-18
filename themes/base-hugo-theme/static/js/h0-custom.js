

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
  
    var shiftDelay = 1200 // delay of entire animation
    var startingDelay = 100; // Starting delay of snippet 2 - x
    var staggerDelay = 200;
    var moveDuration = 2000; // how long the leftward movement lasts
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

    /* ----- ONE ------ */
    anime.set(['.grp-1', '.grp-2'],{
      //opacity: 1,
     rotate: 30,
    //translateX: 0,
    translateY: 0,
    //translateZ: 0,
    });
    anime.set('.cls-9', {
      //translateY: 0,

    });
    var herocode = anime.timeline({
      loop: true,
    });
    var heroCode1Delay = function(){
      herocode.add({
        targets: ['.cls-9'],
        easing: 'easeOutCubic',
        keyframes: [
        ],
        duration: 5000,
        delay: anime.stagger(staggerDelay), // increase delay for each element
      })
    };
    setTimeout(heroCode1Delay, 0 + shiftDelay);

    anime({
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
    })

    

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
