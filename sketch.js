let wall;
let ray;
let particle;

function setup() {
  createCanvas(400, 400);
  
  wall = new Boundary(300,100,300,300);
  particle = new Particle();

}

function draw() {
  background(50);
  
  wall.show();
  particle.show();
  particle.update(mouseX, mouseY)
  particle.look(wall);
  // ray.show()

  // ray.lookAt(mouseX,mouseY)

  // let pt = ray.cast(wall);

  // if (pt){
  //   fill(255);
  //   ellipse(pt.x,pt.y,8,8);

  // }
}