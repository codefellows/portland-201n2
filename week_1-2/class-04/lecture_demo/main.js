var username = "";
while (username == "") {
  username = prompt("What's your name?");
}
var sampleNumber = 4;
console.log("Ask the user for a number.");
var guess = parseInt(prompt ("Pick a number between 1 and 10:"));
// var guessIsCorrect = false;
// if (sampleNumber == guess) {
//   guessIsCorrect = true;
// }
console.log ("Compare the guessed number to ours.");
var guessIsCorrect = (sampleNumber == guess);
var message = "Hello "+username+". You picked "+guess+". ";
// if (guessIsCorrect) {
//   message += "You guess the number!";
// } else {
//   message += "You did NOT guess the number.";
// }
console.log("Build a message to show the user.");
message += guessIsCorrect ? "You guessed the number!" : "You did NOT guess the number.";
alert(message);
// alert("The actual number was...");
// for (var counter=1; counter <= sampleNumber; counter++) {
//   alert(counter);
// }
console.log("Difference: "+(guess - sampleNumber));
//      console.log("Difference: "+Math.abs(guess - sampleNumber));
//      if (!guessIsCorrect & (Math.abs(guess - sampleNumber) < 2)) {
if (!guessIsCorrect & ((guess - sampleNumber < 2) & (guess - sampleNumber > -2))) {
  alert("Oh, but you were so close!");
}
