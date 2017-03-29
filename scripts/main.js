$(document).ready(function () {

    let scrollMagicController = new ScrollMagic.Controller();

    let sceneElements = document.querySelectorAll("[parallax-scene]");

    let getTweenValue = (speed, reverse) => {
        const overallSpeedController = 20;
        let tweenVal = (window.innerHeight / 100) * (speed * overallSpeedController);
        if(reverse) {
            return -1 * tweenVal
        } else {
            return tweenVal;
        }
    }

    let isDecendent = (parentElements, childElement) => (
        (parentElements.length > 0) && (parentElements[0].contains(childElement))
    )

    let getTweenAnimation = (config, reverse) => {

        let tween = "";
        let willChange = '"willChange": "transform", ';
        let ease = '"ease": "Linear.easeNone"';

        for (var key in config) {
            switch(key) {
                case 'speedX':
                    tween += `"x": ${getTweenValue(config[key], reverse)}, `;
                    break;
                case 'speedY':
                    tween += `"y": ${getTweenValue(config[key], reverse)}, `
                    break;
                case 'rotation':
                    tween += `"rotation": ${getTweenValue(config[key], reverse)}, `
                    break;
                default:
                    return tween;
            }
        }

        tween += willChange;
        tween += ease;
        tween = '{' + tween + '}'
        console.log("tween: ", JSON.parse(tween));

        return JSON.parse(tween);

    }

    let getTween = (element) => {
        let tween = new TimelineMax();
        let tweenElements = element.querySelectorAll("[parallax-element]");

        let nestedSceneElements = element.querySelectorAll("[parallax-scene]");

        for (let item = 0; item <= tweenElements.length - 1; item++) {

            if(isDecendent(nestedSceneElements, tweenElements[item])) { break; }

            let config = JSON.parse(tweenElements[item].getAttribute("parallax-element"));

            let fromTween = getTweenAnimation(config, false);
            let toTween = getTweenAnimation(config, true);

                tween.fromTo(
                    tweenElements[item],
                    1,
                    fromTween,
                    toTween,
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