class Pilinkos{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10/2,{isStatic: true});
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}