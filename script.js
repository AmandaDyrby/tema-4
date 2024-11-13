window.addEventListener("load", showPage);

let points;
let lives;

function showPage() {
  console.log("show page");
  // skjul andre skærme
  // vis start skærm
  startGame();
}

//if player clicks play button
function startGame() {
  console.log("startGame");
  // skjul andre skærme
  // vis game skærm
  points = 0;
  document.querySelector("#score_board").innerHTML = points;
  lives = 3;
  document.querySelector("#life_board").innerHTML = lives;

  //start timer animation

  //poop random position + random delay
  //seed random position + random delay
  //feather random position + random delay

  // start fall animation on elements

  document.querySelector("#poop_container1").classList.add("fall");
  document.querySelector("#seed_container1").classList.add("fall");
  //feather fall

  document
    .querySelector("#poop_container1")
    .addEventListener("mousedown", clickPoop);
  document
    .querySelector("#seed_container1")
    .addEventListener("mousedown", clickSeed);
  //feather clickable
}

//if player clicks on poop
function clickPoop() {
  document
    .querySelector("#poop_container1")
    .removeEventListener("mousedown", clickPoop);

  points++;
  document.querySelector("#score_board").innerHTML = points;
  document.querySelector("#poop_container1").classList.add("freeze");
  document.querySelector("#poop_sprite1").classList.add("disappear_good");
  // play sound
}

// if poopDisappear animation done
function poopClickReset() {
  document.querySelector("#poop_container1").classList.remove("freeze");
  document.querySelector("#poop_sprite1").classList.remove("disappear_good");
  document.querySelector("#poop_container1").classList.add("fall");
  document
    .querySelector("#poop_container1")
    .addEventListener("mousedown", clickPoop);
  //show element again
  //new random position
}

//if poop animation ends
function poopFallReset() {
  lives--;
  document.querySelector("#life_board").innerHTML = lives;
  //show element again
  //new random position
  document.querySelector("#poop_container1").classList.add("fall");
}

//if palyer clicks seed
function clickSeed() {
  document
    .querySelector("#seed_container1")
    .removeEventListener("mousedown", clickSeed);
  points--;
  document.querySelector("#score_board").innerHTML = points;
  document.querySelector("#seed_container1").classList.add("disappear_bad");
  //play sound
}

//if seedDisappear animation done
function seedReset() {
  //show element again
  //new random position
  //restart fall animation
}

//if player clicks feather
function clickFeather() {
  document
    .querySelector("selector")
    .removeEventListener("mousedown", clickFeather);
  if (lives < 3) {
    lives++;
  }
  document.querySelector("#life_board").innerHTML = lives;
  // play sound
  // start featherDisappear animation
}

//if featherDisappear animation done
function featherClickReset() {
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
