var knifeOutline = 5
var num = 0
function preload(){
  LogImg = loadImage('assets/log.png');
  bgImg = loadImage('assets/Bg0.png')
  knifeImg = loadImage('assets/knife2.png') 
  outlineImg = loadImage('assets/knife4.png')
}

function setup() {
  createCanvas(400,600);
  log = createSprite(200, 200, 50, 50);
  log.addImage(LogImg)
  log.scale = 0.3

  knifeG = createGroup()

  knife1 = createSprite(200,500,20,100)
  knife1.addImage(knifeImg)
  knife1.scale = 0.022
  knife1.rotation = 510
  knife1.mirrorX(-1)
  knifeG.add(knife1)
  
  knife2 = createSprite(200,500,20,100)
  knife2.addImage(knifeImg)
  knife2.scale = 0.022
  knife2.rotation = 510
  knife2.mirrorX(-1)
  knifeG.add(knife2)

  knife3 = createSprite(200,500,20,100)
  knife3.addImage(knifeImg)
  knife3.scale = 0.022
  knife3.rotation = 510
  knife3.mirrorX(-1)
  knifeG.add(knife3)

  knife4 = createSprite(200,500,20,100)
  knife4.addImage(knifeImg)
  knife4.scale = 0.022
  knife4.rotation = 510
  knife4.mirrorX(-1)
  knifeG.add(knife4)

  knife5= createSprite(200,500,20,100)
  knife5.addImage(knifeImg)
  knife5.scale = 0.022
  knife5.rotation = 510
  knife5.mirrorX(-1)
  knifeG.add(knife5)

  for(var i = 0 ; i < knifeOutline ; i++){
    kunai = createSprite(50,25*i+400,5,10)
    kunai.addImage(outlineImg)
    kunai.scale = 0.05
  }
  
}

function draw() {
  background(bgImg); 
  log.rotation=log.rotation+3
  for(var i = 0;i<knifeG;i++){
  if(knifeG.get(i).isTouching(log)){
    knifeG.get(i).velocityY = 0
  }
  }
  
  drawSprites();
}
function mouseReleased() {
  num = num +1
 if(num===1){
   obj = knife1
 }
 if(num===2){
  obj = knife2
}

if(num===3){
  obj = knife3
}

if(num===4){
  obj = knife4
}

if(num===5){
  obj = knife5
}

  if(!obj.isTouching(log)){
    obj.velocityY = -50;
  }
}


  



