class String
{
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }

        this.pointB = pointB
        this.string1 = Constraint.create(options)
        World.add(world,this.string1)
    }

    display()
    {
        if(this.string1.bodyA)
        {
        var pointA = this.string1.bodyA.position
        var pointB = this.pointB
        push();
        stroke(255,245,0)
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        }
    }

    fly()
    {
        this.string1.bodyA = null
    }

    attach(body)
    {
        this.string1.bodyA = body
    }
}