class Trash
{
    constructor()
    {
    this.radius = 2
    var object_options=
    {
        restitution: 0.3,
        friction: 0.5,
        density:1.2
    }
    /* this.image = loadImage("Sprites/base.png") */
           this.body = Matter.Bodies.circle(100,50,this.radius,object_options);
           World.add(world,this.body);

    }
display()
{
    console.log("hi")
        push();
    translate (this.body.position.x,this.body.position.y);
rotate(this.body.angle);
   fill("white")
   ellipseMode(CENTER);
   ellipse (0,0,this.radius);
   pop();
}
}