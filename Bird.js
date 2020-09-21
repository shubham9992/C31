class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg=loadImage("sprites/smoke.png");
    this.arrTra=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>200 && this.body.velocity.x>8){
        var posArr=[this.body.position.x,this.body.position.y];
        this.arrTra.push(posArr);
    }
    
    for(var i=0;i<this.arrTra.length;i++){
        image(this.smokeImg,this.arrTra[i][0],this.arrTra[i][1]);
    }
    
    super.display();
  }
}
