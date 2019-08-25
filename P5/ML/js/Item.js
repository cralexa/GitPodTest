function Item(x,y,r) {
this.x = x;
this.y = y;
this.r = r;
this.col = color(255,0,0);
  this.show = function() {
    fill(this.col);
    circle(this.x, this.y, this.r);
  }

}
