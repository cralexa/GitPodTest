let Animal = [];
let A_Food = [];

function setup() {
  createCanvas(500, 500);
Animal.push(new player(250,250));
A_Food.push(new Food(150,50));
A_Food.push(new Food(150,300));
}

function draw() {
  background(50);
  for (var i = 0; i < Animal.length; i++) {
    Animal[i].show();
    Animal[i].move();
  }
  for (var i = 0; i < A_Food.length; i++) {
    A_Food[i].show();
    A_Food[i].collition();
  }

}

function player(x,y) {
  this.moveX = 0;
  this.moveY = 0;
  this.x = x;
  this.y = y;
  this.col = color(255,0,0);
  this.show = function() {
    fill(this.col);
    rect(this.x,this.y,25,25);
  }
  this.move = function() {
    if (keyCode === LEFT_ARROW) {this.x-=1;}
    if (keyCode === RIGHT_ARROW) {this.x+=1;}
    if (keyCode === UP_ARROW) {this.y-=1;}
    if (keyCode === DOWN_ARROW) {this.y+=1;}
    this.randomMovement();
    this.x += this.moveX;
    this.y += this.moveY;

  }
  this.collition = function(other) {

  }

  this.randomMovement = function() {
    var speed = 1.5;
    this.moveX = random(-1,1)*speed;
    this.moveY = random(-1,1)*speed;
  }


}

function Food(x,y) {
  this.x = x;
  this.y = y;
  this.col = color(255,255,255);
  this.show = function() {
    fill(this.col);
    rect(this.x,this.y,25,25);
  }
  this.collition = function(other) {
    var dis = dist(this.x,this.y,other.x,other.y);
    if (dis < 25) {
      this.col = color(random(255),random(255),random(255));
    }
  }
}
