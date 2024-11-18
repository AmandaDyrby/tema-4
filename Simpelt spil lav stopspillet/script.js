window.addEventListener("load", sidenVises);
// Opretter global variables
let points;
let liv;
let myRand;
let speed;

// Opretter global konstanter
const red1 = document.querySelector("#red_container1");
const blue1 = document.querySelector("#blue_container1");

function sidenVises() {
  console.log("sidenVises");
  startGame();
}

function startGame() {
  console.log("startGame");

  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score_board").innerHTML = points;

  //reset liv til 3
  liv = 3;
  document.querySelector("#liv").innerHTML = liv;

  //reset speed
  speed = 1;

  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  red1.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er kørt en gang
  red1.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red1.addEventListener("mousedown", clickRed);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  blue1.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er er kørt en gang
  blue1.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue1.addEventListener("mousedown", clickBlue);
}

function clickRed() {
  console.log("clickRed");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  red1.removeEventListener("mousedown", clickRed);

  //frys (pause), op_ned-animationen
  red1.classList.add("frys");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  red1.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  red1.addEventListener("animationend", genstartRed);
}

function genstartRed() {
  console.log("genstartRed");
  //ryd op, fjern alt er på container og sprite
  red1.classList = "";
  red1.firstElementChild.classList = "";

  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  red1.offsetLeft;

  //Giv en random position til container, speed og op_ned-animationer på element
  red1.classList.add("pos" + newRandNum(6), "speed" + speed, "op_ned");

  //Lyt efter klik på element
  red1.addEventListener("mousedown", clickRed);
}

function clickBlue() {
  console.log("clickBlue");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  blue1.removeEventListener("mousedown", clickBlue);

  //frys (pause), op_ned-animationen
  blue1.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  blue1.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  blue1.addEventListener("animationend", genstartBlue);

  //Tæl en ned på liv og udskriv
  liv--;
  document.querySelector("#liv").innerHTML = liv;
}

function genstartBlue() {
  console.log("genstartBlue");
  //ryd op, fjern alt er på container og sprite
  blue1.classList = "";
  blue1.firstElementChild.classList = "";

  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  blue1.offsetLeft;

  //Giv en random position til container, speed og op_ned-animationer på element
  blue1.classList.add("pos" + newRandNum(6), "speed" + speed, "op_ned");

  //Lyt efter klik på element
  blue1.addEventListener("mousedown", clickBlue);
}

function stopSpillet() {
  console.log("stopSpillet");
}

function newRandNum(max) {
  return Math.floor(Math.random() * max) + 1;
}
