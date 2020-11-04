class Ground{
    constructor(){
        this.body = Bodies.rectangle(400,590,800,10,{isStatic: true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(400,590,800,20);

    }
}