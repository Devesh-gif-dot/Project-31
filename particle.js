class Particles{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,8/2,);
        World.add(world,this.body);
        this.color = color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        push();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,8,8);
        pop();
    }

}