
var angle2 = 10.1;
var colorPairs = [[], ['steelblue', 'orange'], ['tomato', 'grey'], ['green', 'purple']];
var w, h;

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  background(200);
  drawHex(w/2, h/2, h/4, h/6, 3);

  // drawMoreHex(250, 250, 70);
}

function draw() {
  background(200);
  angle2 += 0.03;
  drawHex(w/2, h/2, h/4, h/6, 3);
}

function drawMoreHex(cx, cy, s) {
  for (var i=0; i < 6; i++) {

  }
}


function drawHex(cx, cy, r, s, iters) {
  // var rot = Math.random() * PI/2;

  if (iters < 1) {
    return;
  }

  for (var i=0; i < 6; i++) {
    push();
    translate(cx, cy);
    var angle = 2*PI*i / 6;
    // rotate(angle);
    var x = r * cos(angle);
    var y = r * sin(angle);

    push();
    translate(x, y);

    // ellipse(0, 0, 10);


    drawHex(0, 0, 20, r/3, iters - 1); // If you do this, you need a stopping condition.

    rotate(angle);

    push();
    rotate(angle2);
    stroke(colorPairs[iters][0]);
    strokeWeight(2);
    line(0, 0, s, s);
    pop();

    push();
    rotate(-angle2);
    stroke(colorPairs[iters][1]);
    strokeWeight(2);
    line(0, 0, s, s);
    pop();

    pop();

    pop();
  }
}
