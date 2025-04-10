let walls = [];
let ray;
let particle;
let xoff = 0
let yoff = 0

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 5; i++) {
    let x1 = random(width)
    let x2 = random(width)
    let y1 = random(height)
    let y2 = random(height)

    walls[i] = new Boundary(x1,y1,x2,y2)
  }

  walls.push(new Boundary(0,0,width, 0))
  walls.push(new Boundary(0,0,0, height))
  walls.push(new Boundary(0,height,width, height))
  walls.push(new Boundary(width ,0,width, height))

  wall = new Boundary(100,100,200,300);
  particle = new Particle();

}

function draw() {
  background(50);
  for (const wall of walls) {
    wall.show();
  }
  particle.show();
  particle.update(mouseX, mouseY)
  particle.look(walls);
  // ray.show()

  // ray.lookAt(mouseX,mouseY)

  // let pt = ray.cast(wall);

  // if (pt){
  //   fill(255);
  //   ellipse(pt.x,pt.y,8,8);

  // }
}