
var angle2 = 0;

function setup() {
  createCanvas(500, 500);
  background(200);
  drawHex();
}

function draw() {
  background(200);
  angle2 += 0.03;
  drawHex();
}


function drawHex() {
  var rot = Math.random() * PI/2;

  for (var i=0; i < 6; i++) {
    push();
    translate(250, 250);
    var angle = 2*PI*i / 6;
    // rotate(angle);
    var x = 100 * cos(angle);
    var y = 100 * sin(angle);

    push();
    translate(x, y);

    ellipse(0, 0, 10);

    rotate(angle);

    push();
    rotate(angle2);
    line(0, 0, 70, 70);
    pop();

    push();
    rotate(-angle2);
    line(0, 0, 70, 70);
    pop();

    pop();

    pop();
  }
}
