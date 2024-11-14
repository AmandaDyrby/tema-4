window.addEventListener("load", sidenVises);
// Opretter global variables
let points;
let liv;
let myRand;

// Opretter global konstanter
const good1 = document.querySelector("#good_container1");
const bad1 = document.querySelector("#bad_container1");

function sidenVises() {
  console.log("sidenVises");

  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#points").textContent = points.toString().padStart(2, "0");

  //reset liv til 3
  liv = 3;
  document.querySelector("#liv").textContent = liv;

  //Giv en random position, start fald-animationer
  myRand = Math.floor(Math.random() * 6) + 1;
  good1.classList.add("pos" + myRand, "fald");
  //Lyt efter fald-animationer er kørt en gang
  good1.addEventListener("animationiteration", genstartGood);
  //Lyt efter klik
  good1.addEventListener("mousedown", clickGood);

  //Giv en random position, start fald-animationer
  myRand = Math.floor(Math.random() * 6) + 1;
  bad1.classList.add("pos" + myRand, "fald");
  //Lyt efter fald-animationer er er kørt en gang
  bad1.addEventListener("animationiteration", genstartBad);
  //Lyt efter klik
  bad1.addEventListener("mousedown", clickBad);
}

function clickGood() {
  console.log("clickGood");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  good1.removeEventListener("mousedown", clickGood);

  //frys (pause), fald-animationen
  good1.classList.add("frys");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#points").textContent = points.toString().padStart(2, "0");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  good1.firstElementChild.classList.add("forsvind_good");

  //Lyt efter forsvind-animationer er færdig
  good1.addEventListener("animationend", genstartGood);
}

function genstartGood() {
  console.log("genstartGood");
  //ryd op, fjern alt er på container og sprite
  good1.classList = "";
  good1.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  good1.offsetLeft;

  //Giv en random position til container og fald-animationer på element
  myRand = Math.floor(Math.random() * 6) + 1;
  good1.classList.add("pos" + myRand, "fald");

  //Lyt efter klik på element
  good1.addEventListener("mousedown", clickGood);
}

function clickBad() {
  console.log("clickBad");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  bad1.removeEventListener("mousedown", clickBad);

  //frys (pause), fald-animationen
  bad1.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  bad1.firstElementChild.classList.add("forsvind_bad");

  //Lyt efter forsvind-animationer er færdig
  bad1.addEventListener("animationend", genstartBad);

  //Tæl en ned på liv og udskriv
  liv--;
  document.querySelector("#liv").textContent = liv;
}

function genstartBad() {
  console.log("genstartBad");
  //ryd op, fjern alt er på container og sprite
  bad1.classList = "";
  bad1.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  bad1.offsetLeft;

  //Giv en random position til container og fald-animationer på element
  myRand = Math.floor(Math.random() * 6) + 1;
  bad1.classList.add("pos" + myRand, "fald");

  //Lyt efter klik på element
  bad1.addEventListener("mousedown", clickBad);
}
