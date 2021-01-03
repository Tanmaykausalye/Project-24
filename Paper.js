class Paper{

constructor(){

var options = {

 isStatic : false,   
restitution : 0.3,
density : 1.2,
friction : 0.4

}


this.body = Bodies.circle(200,50,5,options)
this.radius = 5

World.add(world,this.body)


}

display(){ 

var pos = this.body.position

ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius*2,this.radius*2)

}

}