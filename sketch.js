var bg1,bgImg1;
var bg2,bgImg2;
var olivierImg1,olivierImg2,olivierImg3,olivierImg4;
var ocultistaImg, ocultista;
var zumbiDeSangueImg, zumbidesangue;
var amigoImaginárioImg, amigoimaginario;
var coracaoImg;
var borda1,borda2,borda3;
var groupOcultist, groupImaginary, groupBlood;
var morte;
var score = 0;
var coinImg, coin;
var coinGroup;


function preload(){
  
  olivierImg1 = loadImage("assets/OLIVIER1.webp");
  olivierImg2 = loadImage("assets/OLIVIER2.webp");
  olivierImg3 = loadImage("assets/OLIVIER3.webp");
  olivierImg4 = loadImage("assets/OLIVER4.webp");

  morte = loadSound("assets/lose.mp3");

  ocultistaImg = loadImage("assets/OCULTISTA.webp");

  zumbiDeSangueImg = loadImage("assets/ZUMBIDESANGUE.webp");

  amigoImaginárioImg = loadImage("assets/AMIGOIMAGINARIO.webp");

  bgImg1 = loadImage("assets/red.praia.jpg");
  bgImg2 = loadImage("assets/PRAIAred.jpg");
  coracaoImg = loadImage("assets/heart_1.png");
  coinImg = loadImage("assets/goldCoin.png");

}

function setup() {

  
    createCanvas(1200,900);

    //adicionando a imagem de fundo
    //bg1 = createSprite(400,450,800,1200);
    //bg1.addImage(bgImg1);
    //bg1.scale = 0.3;

    bg2 = createSprite(600,500,900,1200)
    bg2.addImage(bgImg2)
    bg2.scale = 0.5

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage("lampiao",olivierImg1);
  player.addImage("morreu",olivierImg4);
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

  groupOcultist = createGroup();
  groupImaginary = createGroup();
  groupBlood = createGroup();
  coinGroup = createGroup();

 
    

}

function draw() {
  background('#43A6BD'); 
  
  ocultist();
  imaginary();
  blood();
  moeda();

  borda1 = createSprite(150,height,50,height+1200)
  player.collide(borda1);
  borda1.visible = false;

  borda2 = createSprite(1050,height,50,height+1200)
  player.collide(borda2);
  borda2.visible = false;

  borda3 = createSprite(0,900,height+1200,50)
  player.collide(borda3);
  borda3.visible = false;
  
  borda4 = createSprite(20,10,height+1200,50)
  player.collide(borda4);
  borda4.visible = false;

  if (groupOcultist.isTouching(player)) {
    //morte.play()
    player.changeImage("morreu");
    player.y = 800
    player.x = 600
  }

  if (groupImaginary.isTouching(player)) {
    //morte.play()
    player.changeImage("morreu");
    player.y = 800
    player.x = 600
  }

  if (groupBlood.isTouching(player)) {
    //morte.play()
    player.changeImage("morreu");
    player.y = 800
    player.x = 600
  }

  

 // ocultista.y = Math.round(random(100,800));
  



  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+30
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }


  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }

  drawSprites();

}

function ocultist(){

  if (frameCount %120 == 0) {
    ocultista = createSprite(200,200,50,50);
    ocultista.addImage(ocultistaImg);
    ocultista.scale = 0.2;
    ocultista.debug = true;
    ocultista.setCollider("rectangle",0,0,300,300);
    ocultista.velocityX = 3;
    ocultista.y = Math.round(random(100,800))
    ocultista.x = Math.round(random(200,900))
    groupOcultist.add(ocultista);

    if (ocultista.x > 1050) {
      ocultista.x = 150;
    }
  }
  
}

function imaginary(){

  if (frameCount %240 == 0) {
    amigoimaginario = createSprite(400,400,50,50);
    amigoimaginario.addImage(amigoImaginárioImg);
    amigoimaginario.scale = 0.9;
    amigoimaginario.debug = true;
    amigoimaginario.setCollider("rectangle",0,0,300,300);
    amigoimaginario.velocityX = 3;
    amigoimaginario.y = Math.round(random(100,800))
    groupImaginary.add(amigoimaginario);
  }
  
}

function blood(){

  if (frameCount %90 == 0) {
    zumbidesangue = createSprite(100,100,50,50);
    zumbidesangue.addImage(zumbiDeSangueImg);
    zumbidesangue.scale = 0.2;
    zumbidesangue.debug = true;
    zumbidesangue.setCollider("rectangle",0,0,300,300);
    zumbidesangue.velocityX = 3;
    zumbidesangue.y = Math.round(random(100,800))
    groupBlood.add(zumbidesangue);
  }
  
}

function moeda(){
  if(frameCount %80 == 0){
    coin = createSprite(100,100,20,20);
    coin.addImage(coinImg);
    coin.scale = 0.08
    coin.velocityY = 3
    coin.x = Math.round(random(100,800))
  }
}
