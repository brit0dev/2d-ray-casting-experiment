class Ray {
    //constructor(x1,y1,x2,y2) {
    constructor(x, y){
      this.pos = createVector(x,y);
      //this.b = createVector(x2,y2);
      this.dir = createVector(1,0)
    }
    
    show() {
      stroke(255)
      //strokeWeight(2)
      push();
      translate(this.pos.x, this.pos.y);
      line(0 ,0 ,this.dir.x * 10,this.dir.y * 10);
      pop();
    }
    
  }