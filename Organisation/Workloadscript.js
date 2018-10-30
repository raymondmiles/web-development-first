function Workloadtimer(){
// Set the moment we open the page
var startDate = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between the start date and now
  var time =  now - startDate ;

  // Time calculations for days, hours, minutes and seconds
  // The Math.floor function rounds the number down to the nearest integer
  //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //The value returned by the getTime method is the number of milliseconds since 1 January 1970 00:00:00.
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);  // its the amount that hasnt converted in minutes
  // Display the result in the element with id="timer"
 document.getElementById("timer").innerHTML ="Time viewing page: " + hours + "h "+ minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  /*if (minutes = 1) {
  window.alert("sometext");

    document.getElementById("demo").innerHTML = "EXPIRED";
  }*/
  return hours,minutes,second;
}, 1000);
}