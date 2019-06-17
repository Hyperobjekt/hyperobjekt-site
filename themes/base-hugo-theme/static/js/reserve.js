var shiftDelay = 1200 // delay of entire animation
    var startingDelay = 100; // Starting delay of snippet 2 - x
    var staggerDelay = 50;
    var moveDuration = 2000; // how long the leftward movement lasts
    var moveDurationOffset = '-=2000'; // time offset of leftward movement
    var fadeout = 2000; // opacity fade-out length
    var fadeoutOffset ='-=200'; // offset of the aboive
    var loopDelay = 1400; // delay before each line appears again after it fades out
    var xOne = 500; // x position of snippet 1
    var xTwo = 600;
    var xThree = 700;
    var xFour = 800;
    var yOne = -100;
    var yStagger = 72;

    /* ----- ONE ------ */
    anime.set('#code1', {
      opacity: 0,
      translateX: xOne,
      translateY: yOne,
      translateZ: 0,
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
        targets: ['#code1'],
        translateX: xOne - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      }, moveDurationOffset).add({
        targets: ['#code1'],
        opacity: [1, 0],
        duration: fadeout,
        easing: 'easeOutCubic',
        endDelay: loopDelay,   
      },fadeoutOffset);
    };
    setTimeout(heroCode1Delay, 0 + shiftDelay);
    /* ----- TWO ------ */
    anime.set('#code2', {
      opacity: 0,
      translateY: yOne + yStagger,
      translateX: xTwo,
      translateZ: 0,
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
        targets: ['#code2'],
        translateX: xTwo - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      }, moveDurationOffset).add({
        targets: ['#code2'],
        opacity: [.9, 0],
        duration: fadeout,
        easing: 'easeOutCubic', 
        endDelay: loopDelay,   
      },fadeoutOffset);
    };
    setTimeout(heroCode2Delay, startingDelay + shiftDelay); 
    /* ----- THREE ------ */
    anime.set('#code3', {
      translateY: yOne + yStagger -80,
      opacity: 0,
      translateX: xThree,
      translateZ: 0,
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
        targets: ['#code3'],
        translateX: xThree - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      }, moveDurationOffset).add({
        targets: ['#code3'],
        opacity: [1, 0],
        duration: fadeout,
        easing: 'easeOutCubic',   
        endDelay: loopDelay, 
      },fadeoutOffset);
    };
    setTimeout(heroCode3Delay, startingDelay * 2 + 1800 + shiftDelay);
    /* ----- FOUR ------ */
    anime.set('#code4', {
      opacity: 0,
      translateY: yOne + yStagger + 0,
      translateX: xFour,
      translateZ: 0,
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
        targets: ['#code4'],
        translateX: xFour - 20,
        duration: moveDuration,
        easing: 'easeOutCubic',
      },moveDurationOffset).add({
        targets: ['#code4'],
        opacity: [.9, 0],
        duration: fadeout,
        easing: 'easeOutCubic',   
        endDelay: loopDelay, 
      },fadeoutOffset);
    };
    setTimeout(heroCode4Delay, startingDelay * 3 + 1800 + shiftDelay);