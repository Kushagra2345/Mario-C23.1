class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.width=50
		this.height=50
		this.spt=createSprite(this.x, this.y, this.width,this.height);
		this.spt.shapeColor="blue";

	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}
	
   
 moveRight(){
      this.spt.x=this.spt.x+15     
 }
 moveLeft(){
	 this.spt.x=this.spt.x-15
 }
 moveUp(){
	 this.spt.velocityY=-20
 }



}
























