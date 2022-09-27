let boxes = [];
let prisoners = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  for (let i = 0; i < 100 ; i++) {
    boxes[i] = i+1;
    prisoners[i] = i+1;
  }
  textAlign(LEFT,TOP);
  noStroke();
  fill(255);
  textSize(16);
}

function shuffleBoxes() {
  boxes.sort(() => Math.random() - 0.5);
}

let succesTest = 0;
let numberTest = 1;
function draw() {
  background(25);
  shuffleBoxes();
  if (checkGroup()) {
    succesTest++;
  }
  text("iteration: "+numberTest+" - probability "+(100*succesTest/numberTest).toFixed(2)+"%",10,10);
  numberTest++;
}

function checkGroup() {
  let succesGroup = false;
  for (let current = 0 ; current < prisoners.length; current++ ) {
    let found = false;
    let lookIn = prisoners[current];
    for (let i = 0; i < 50 ; i++) {
      lookIn = boxes[lookIn-1];
      if (lookIn == prisoners[current]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return succesGroup;
    }
  }
  succesGroup = true;
  return succesGroup;
}