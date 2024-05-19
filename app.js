// guess game dev

let max = prompt("Enter Maximun value");
let random = Math.floor( Math.random()*max) +1;
console.log(`Random no-- ${random}`);
let guess = prompt("Guess the Random Number");
console.log(`Number Guessed byUser-${guess}`);

while(true){
  if (guess == "q"){
    console.log("Quitting The Game");
    alert("Game Quited");
    break;
  }
  else if (guess == random){
    console.log("Congratulations Won the Game. ");
    alert(`Congratulations Won the Game. Correct Number is ${random}`);
    break;
  }else if(guess < random){
    guess = prompt("Guess value is less than Random Value so GUESS HIGHER.");
  }else if(guess > random){
    guess = prompt("Guess value is Large than Random Value so GUESS LOWER.");
  }
}
