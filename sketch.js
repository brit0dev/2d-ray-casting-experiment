let wall;
let ray;
function setup() {
  createCanvas(800, 800);
  
  wall = new Boundary(300,100,300,200)
  ray = new Ray(100,200)
}

function draw() {
  background(50);
  
  wall.show()
  ray.show()
}