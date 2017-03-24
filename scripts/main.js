$(document).ready(function () {

    let scrollMagicController = new ScrollMagic.Controller();

    let parallaxTween = new TimelineMax();
    let parallaxTween2 = new TimelineMax();

    let triggerElementHeight = document.querySelector('#testCard').offsetHeight;
    let triggerElementHeight2 = document.querySelector('#testCard2').offsetHeight;

    let getTweenValue = (depth) => {
        const overallSpeedController = 20;
        return  (window.innerHeight / 100) * (depth * overallSpeedController);
    }

    parallaxTween
        .fromTo('#aside1', 1, {y: getTweenValue(9) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(9) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0)
        .fromTo('#aside2', 1, {y: getTweenValue(4) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(4) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0);

    parallaxTween2
        .fromTo('#c-aside', 1, {y: getTweenValue(8) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(8) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0)
        .fromTo('#c-title', 1, {y: getTweenValue(6) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(6) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0)
        .fromTo('#c-text', 1, {y: getTweenValue(5) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(5) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0)
        .fromTo('#c-btn', 1, {y: getTweenValue(3) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(3) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0)
        .fromTo('#c-aside-image', 1, {y: getTweenValue(9) + 'px', willChange: 'transform', ease: Linear.easeNone}, {y: -1 * getTweenValue(9) + 'px', willChange: 'transform', ease: Linear.easeNone}, 0);


    let testAnimation = new ScrollMagic.Scene({
            triggerElement: '#testCard',
            triggerHook: 0.5,
            duration: (window.innerHeight * 2) + (triggerElementHeight),
            offset: window.innerHeight * -1
        })
            .setTween(parallaxTween)
            .addTo(scrollMagicController);

    let test2Amination = new ScrollMagic.Scene({
        triggerElement: '#testCard2',
        triggerHook: 0.5,
        duration: (window.innerHeight * 2) + (triggerElementHeight2),
        offset: window.innerHeight * -1
    })
        .setTween(parallaxTween2)
        .addTo(scrollMagicController);

});


















