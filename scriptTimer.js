function startFuntion() { 
//https://www.w3schools.com/howto/howto_js_countdown.asp 
//(This was starter code this was not an exact copy. It is modified to fit my needs as a count down timer and not a count down date.)
const Start = document.getElementById("StartSubmit")
var countDownDate = new Date();
countDownDate.setMinutes(countDownDate.getMinutes() + 3);
var countDownTime = countDownDate.getTime();
var wrong = countDownDate.setMinutes(countDownDate.getSeconds() - 20);
// Update the count down every 1 second
var x = setInterval(function () {

	// Gets current time.
	var now = new Date().getTime();

	// Looks to see the timer length.
	var distance = countDownTime - now;

	// Vars for minutes and seconds.
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in id="timer"
	document.getElementById("timer").innerHTML = minutes + ":" + seconds;

	// On timer end displays text. (Still working on a way on timer end to display score and end quizz.)
	if("Incorrect") { countDownDate.setMinutes(countDownDate.getSeconds() - 20);
	if (distance < 0) {
		// if (Start != null) {return false;}
		// else {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "Times Up!";
		article.style.display = "none";
		NextButton.style.display = "none";
		Qdisplay.style.display = "none";
		finalScore.style.display = "flex";
		document.getElementById("final").innerHTML = score;
		// }
	}
}
}, 1000);
}

