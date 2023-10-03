// https://confettijs.org/confetti.min.js

// instantiate new object
let confetti = new Confetti('confetti');

// options
confetti.destroyTarget(false);

confetti.setCount(1000);
confetti.setSize(1);
confetti.setPower(60);
confetti.setFade(false);
confetti.destroyTarget(false);

import CircleType from "https://cdn.skypack.dev/circletype@2.3.0";

// Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById('title'));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(200).dir(1);