var issImg , spaceImg , spaceCraftImg1 , spaceCraftImg2 , spaceCraftImg3 , spaceCraftImg4;
var iss , spaceCraft ;

 
var hasDock = false


function preload(){
  issImg = loadImage('iss.png')

  spaceImg = loadImage('spacebg.jpg')
  spaceCraftImg1= loadImage('spaceCraft1.png')
spaceCraftImg2 = loadImage('spaceCraft2.png')
spaceCraftImg3 = loadImage('spaceCraft3.png')
spaceCraftImg4 = loadImage('spaceCraft4.png')
}


function setup() {

  createCanvas(800,400);
 iss =  createSprite(400, 200, 50, 50);
 spaceCraft = createSprite(400,280,60,50);
 

 iss.addImage(issImg)
 issImg.scale = 0.15

 spaceCraft.addImage(spaceCraftImg1)
 spaceCraft.scale = 0.20
 

}

function draw() {
  background(spaceImg); 
  spaceCraft.addImage(spaceCraftImg1)
  if(!hasDock){
    spaceCraft.x = spaceCraft.x+random(-1,1)

    if (keyDown('UP_ARROW')){
      spaceCraft.y =  spaceCraft.y-5
    }
    if (keyDown('DOWN_ARROW')){
    //  spaceCraft.y =  spaceCraft.y+5
      spaceCraft.addImage(spaceCraftImg1)
    }
    if(keyDown('LEFT_ARROW')){
      spaceCraft.addImage(spaceCraftImg3)
      spaceCraft.x = spaceCraft.x-5
    }
    if(keyDown('RIGHT_ARROW')){
      spaceCraft.addImage(spaceCraftImg4)
      spaceCraft.x = spaceCraft.x+5
    }
  }

  if(spaceCraft.y<= iss.y+70 &&
    spaceCraft.x<= iss.x-10)
    {
      hasDock = true
      fill('white')
      textSize(25)
      text(" Docking Sucessful",200,300)
  }
  drawSprites();
}