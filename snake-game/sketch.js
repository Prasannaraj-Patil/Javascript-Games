var s;
var level=1, scl = 20;
var food;

function setup() {
  level = Math.round(+window.prompt("Enter level between 1 to 10", "1"));
  if(level > 10) {
    level = 10;
  }
  createCanvas(600, 600);
  s = new Snake();
  frameRate(1.5*level);
  pickLocation();
}

/* function change_speed() {
  level = this.value;
  setFrameRate(5*level);
}*/
function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  //s.total++;
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  
  if (keyCode === UP_ARROW && s.direction != "DOWN") {
    s.dir(0, -1);
    s.direction = "UP";
  } else if (keyCode === DOWN_ARROW && s.direction != "UP") {
    s.dir(0, 1);
    s.direction = "DOWN";
  } else if (keyCode === RIGHT_ARROW && s.direction != "LEFT") {
    s.dir(1, 0);
    s.direction = "RIGHT";
  } else if (keyCode === LEFT_ARROW && s.direction != "RIGHT") {
    s.dir(-1, 0);
    s.direction = "LEFT";
  }

}
