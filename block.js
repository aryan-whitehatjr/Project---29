class Block {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      'restitution': 0.7,
      'friction': 0.6,


    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(10)
    stroke("green")
    fill("blue")
    rect(0, 0, this.width, this.height);
    pop();
  }
};
