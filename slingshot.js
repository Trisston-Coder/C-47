class Slingshot{

    constructor(bodyA, pointB)
{
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.8,
        length: 40
    }
    this.sling = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.sling);
}

fly(){
    this.sling.bodyA = null;
}

attach(body){
    this.sling.bodyA = body;
}

display(){
    if(this.sling.bodyA){
    var pointA  = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    stroke("red");
    line(pointA.x+50, pointA.y+30, pointB.x, pointB.y)
    }
}
}