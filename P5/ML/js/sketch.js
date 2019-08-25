let List = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(50);
  for (var i = 0; i < List.length; i++) {
    List[i].show();
  }
}

function mousePressed() {
  console.log("Item made");
  List.push(new Item(mouseX,mouseY,25));

}
function mouseDragged() {
  console.log("Item made");
  List.push(new Item(mouseX,mouseY,25));
}
