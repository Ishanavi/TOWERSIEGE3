class Box 
{
    constructor(x,y)
    {
        var options =
        {
            //'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.visibility = 255
        this.red = random(0,255)
        this.green = random(0,255)
        this.blue = random(0,255)
        this.width = 40
        this.height = 40
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }

    display()
    {
       // console.log(this.body.speed)
        if(this.body.speed<3)
        {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.red,this.blue,this.green)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
        }


        else
        {
          World.remove(world,this.body)
          push();
          this.visibility = this.visibility-5
          tint(255,this.visibility)
          //rect(this.body.position.x,this.body.position.y,40,40)
          pop();
        }


       
    }
    score()
    {
        if(this.visibility<0  &&  this.visibility>-105)
        {
            pscore++
        }
    }

}