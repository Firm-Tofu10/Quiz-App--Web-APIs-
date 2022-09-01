var countDownDate = new Date();
countDownDate.setMinutes(countDownDate.getMinutes() + 10);
var countDownTime = countDownDate.getTime();
// Update the count down every 1 second
var x = setInterval(function() {
console.log("fdsfsf");
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownTime - now;

  // Time calculations for days, hours, minutes and seconds
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
