class Paper{
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'friction': 0.5,
            'restitution': 0.3,
            'density':1.2
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, radius/2, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(170, 169, 173);
        noStroke();
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}