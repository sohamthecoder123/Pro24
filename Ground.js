class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:1.0
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      rectMode(CENTER);
      fill("brown");
      noStroke();
      rect(0, 0, this.width, this.height);
      pop();
    }
  };