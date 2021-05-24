class Log{
    constructor(x,y,width,angle){
        var opt={
            restitution:0.3,
            friction:0.8,
            density:0.5
        }
  this.body=Bodies.rectangle(x,y,width,20,opt)
  this.width=width; 
  this.heigt=20;
  
  World.add(world,this.body)
  Matter.Body.setAngle(this.body,angle)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
         rectMode(CENTER)
         fill("brown")
        rect(0,0,this.width,20)
   pop() 
}
}