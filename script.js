window.addEventListener("load", showPage);

let points;
let lives;

function showPage() {
  console.log("show page");
  // skjul andre skærme
  // vis start skærm
}

//if player clicks play button
function startGame() {
  // skjul andre skærme
  // vis game skærm
  points = 0;
  // print points
  lives = 3;
  // print lives
  // start timer

  //poop random position + random delay
  //seed random position + random delay
  //feather random position + random delay

  // start fall animation on elements
}

//if player clicks on poop
function clickPoop() {
  points++;
  // print points
  // play sound
  // start poopDisappear animation
}

// if poopDisappear animation done
function poopClickReset() {
  //show element again
  //new random position
  //restart fall animation
}

//if poop animation ends
function poopFallReset() {
  lives--;
  //print lives
  //show element again
  //new random position
  //restart fall animation
}

//if player clicks feather
function clickFeather() {
  if (lives < 3) {
    lives++;
  }
  // print lives
  // play sound
  // start featherDisappear animation
}

//if featherDisappear animation done
function featherClickReset() {
  //show element again
  //new random position
  //restart fall animation
}

//if palyer clicks seed
function clickSeed() {
  points--;
  //print points
  //play sound
  //seedDisappear animation
}

//if seedDisappear animation done
function seedReset() {
  //show element again
  //new random position
  //restart fall animation
}

//if lives=0 // if timer animation done
function stopGame() {
  //remove all animations
  //remove all listeners
}

//if stopGame && (if lives = 0 // points<30)
function gameOver() {
  //show gameover screen
}

//if stopGame && points>29
function levelComplete() {
  //show victory screen
}
