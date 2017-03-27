$(document).ready(function () {

    let scrollMagicController = new ScrollMagic.Controller();

    let sceneElements = document.querySelectorAll("[data-secne]");

    let getTweenValue = (depth) => {
        const overallSpeedController = 20;
        return  (window.innerHeight / 100) * (depth * overallSpeedController);
    }

    let getTween = (element) => {
        let tween = new TimelineMax();
        let tweenElements = element.querySelectorAll("[data-depth]");
        for (let item = 0; item <= tweenElements.length - 1; item++) {
            tween.fromTo(
                tweenElements[item],
                1,
                {y: getTweenValue(tweenElements[item].getAttribute('data-depth')) + 'px', willChange: 'transform', ease: Linear.easeNone},
                {y: -1 * getTweenValue(tweenElements[item].getAttribute('data-depth')) + 'px', willChange: 'transform', ease: Linear.easeNone},
                0
            )
        }
        return tween;
    }

    let setScene = (element) => {
        for (let item = 0; item <= element.length - 1; item++) {
           new ScrollMagic.Scene({
                triggerElement: element[item],
                triggerHook: 0.5,
                duration: (window.innerHeight * 2) + (element[item].offsetHeight),
                offset: window.innerHeight * -1
            })
                .setTween(getTween(element[item]))
                .addTo(scrollMagicController);
        }
    }

    setScene(sceneElements);

});