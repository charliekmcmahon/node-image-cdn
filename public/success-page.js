// Who doesn't like confetti?

// Pass in the id of an element
let confetti = new Confetti('demo');

// Edit given parameters
confetti.setCount(100);
confetti.setSize(5);
confetti.setPower(50);
confetti.setFade(false);
confetti.destroyTarget(false);

setTimeout(function (){

	document.getElementById("demo").click();

}, 1000);