let img;

function setup() {
  createCanvas(500,500);
  img = getImage('/static/poop.jpeg');
  console.log(img);
  console.log("pixels: "+img.pixels);
}
function draw() {
  background(51);
  image(img,125,125);



}
function getImage(path) {
  return loadImage(path);
}
