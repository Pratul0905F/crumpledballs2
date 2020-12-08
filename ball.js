class Ball{
constructor(x,y){
var Options={
restitution:0.5,
friction:0.8,
density:0.2
}
this.ball=Bodies.circle(x,y,70,Options)
World.add(world,this.ball)
this.image = loadImage("paper.png");

}
display(){
var pos=this.ball.position
push()
imageMode(RADIUS);
image (this.image, pos.x, pos.y,20,20)
pop()
}
}