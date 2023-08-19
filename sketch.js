var cat, ground, jumpBlock;
var smallFish, decorationBlock1, decorationBlock2, decorationBlock3, decorationBlock4, bigFish, evilBlock;
var catWalkIMG1,catWalkIMG2, catAttackIMG2, evilBlockIMG1, evilBlockIMG2,evilBlockIMG3,backgroundIMG, backgroundIMG2, backgroundIMG3, backgroundIMG4, backgroundIMG5, backgroundIMG6, smallFishIMG, decorationBlock1IMG, decorationBlock2IMG, decorationBlock3IMG, decorationBlock4IMG, bigFishIMG;
var edges;
var andar = 1; //Andar para todas as entidates
var BlLevel = 1; //Andar do Jogador
var health = 5; // Vida do Jogador
var enemyDied = false; //Se o Inimigo já morreu (Falso)
var diedCount = 0; //Contagem de quantas vezes os inimigos morreram
var Ehealth = 3; //Vida do Inimigo
var andarLimite = 4; //Limite de andares
var questActivated = true; //Missão Ativa ou Desativa
var questFinished = false; //Missão Concluida ou Não
var quest2Finished = false; //Missão Peixe Grande Concluida ou Não
var quest2Activated = false; //Missão do Peixe Grande Ativa Sim ou Não
var Victory = false; //Vitória

function preload(){
  catWalkIMG1 = loadAnimation("catrightparty.png"); //Gato parado pra esquerda
catWalkIMG2 = loadAnimation("catleftparty.png"); //Gato parado pra direita
catAttackIMG2 = loadAnimation("catleftparty.png", "catattackparty.png", "catleftparty.png"); //Animação de ataque

//catWalkIMG1 = loadAnimation("catright.png"); //Gato parado pra esquerda
//catWalkIMG2 = loadAnimation("catleft.png"); //Gato parado pra direita
//catAttackIMG2 = loadAnimation("catleft.png", "catattack.png", "catleft.png"); //Animação de ataque
evilBlockIMG1 = loadAnimation("doge.png"); //Imagem de Inimigo (cão)
evilBlockIMG2 = loadAnimation("doge2.png"); //Imagem de Inimigo porém esqueci de virar
evilBlockIMG3 = loadAnimation("Shibalien.png"); // Imagem de Inimigo mais forte
smallFishIMG = loadAnimation("smallfish.png"); //Imagem de gato de missão (gato peixe pequeno)
decorationBlock1IMG = loadAnimation("balloons.png"); //Imagem de decoração (gato do esporte)
decorationBlock2IMG = loadAnimation("boloniver.png"); //Imagem de decoração (porco de esporte)
decorationBlock3IMG = loadAnimation("balloons.png"); //Imagem de decoração (árvore) 
decorationBlock4IMG = loadAnimation("gift.webp"); //Imagem de decoração (presente perto da árvore) 
bigFishIMG = loadAnimation("Fish2.png"); //Imagem do Pai do Lil Fish (peixe)
//Imagem de fundos
backgroundIMG = loadImage("background.webp");
backgroundIMG2 = loadImage("background1.webp");
backgroundIMG3 = loadImage("background2.webp");
backgroundIMG4 = loadImage("background3.webp");
backgroundIMG5 = loadImage("background4.webp");
backgroundIMG6 = loadImage("background5.webp");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();
  smallFish = createSprite(windowWidth / 1.2, windowHeight / 1.5 , width / 11, height / 5);
  smallFish.addAnimation("idleTalk", smallFishIMG);

  decorationBlock1 = createSprite(windowWidth / 1.3, windowHeight / 2.2, width / 11, height / 5);
  decorationBlock1.addAnimation("idleDeco1", decorationBlock1IMG);
  decorationBlock1.scale = 0.7;

  decorationBlock3 = createSprite(windowWidth / 3.9, windowHeight / 2.9, width / 11, height / 5);
  decorationBlock3.addAnimation("idleDeco3", decorationBlock3IMG);
  decorationBlock3.scale = 0.7;

  decorationBlock2 = createSprite(windowWidth / 2, windowHeight / 2.6 , width / 11, height / 5);
  decorationBlock2.addAnimation("idleDeco2", decorationBlock2IMG);
  decorationBlock2.scale = 0.95;

  decorationBlock4 = createSprite(500,250,50,50);
  decorationBlock4.addAnimation("idleDeco4", decorationBlock4IMG);
  decorationBlock4.scale = 0.7

  bigFish = createSprite(100,250,50,50);
  bigFish.addAnimation("idleDeco5", bigFishIMG);

  evilBlock = createSprite(700, 200, 50, 50);
  evilBlock.addAnimation("idle", evilBlockIMG2);
  evilBlock.addAnimation("idle2", evilBlockIMG3);
  evilBlock.addAnimation("testAnim", smallFishIMG);
  cat = createSprite(width / 10, windowHeight / 1.2, windowWidth / 11, windowHeight / 5);
  cat.addAnimation("idle1", catWalkIMG1);
  cat.addAnimation("idle2", catWalkIMG2);
  cat.addAnimation("attack", catAttackIMG2);
  cat.scale = 0.9

  ground = createSprite(windowWidth / 2, windowHeight / 1.1, width, height / 3.5);
  ground.visible = false;
  jumpBlock = createSprite(windowWidth / 2, windowHeight / 1.4, windowWidth, 20);
  jumpBlock.visible = false;
}

function draw() {
  if (andar == 1){
    background(backgroundIMG);
    smallFish.visible = false;
    decorationBlock1.visible = true;
    decorationBlock2.visible = true;
    decorationBlock3.visible = true;
    decorationBlock4.visible = false;
    bigFish.visible = false;
    evilBlock.visible = false;
  }
  if (andar == 2){
    background(backgroundIMG2);
    if(cat.isTouching(edges[0])) {
      cat.position.x = windowWidth
      andar = andar-1
      BlLevel = BlLevel-1
      
    }
    smallFish.visible = true;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = false;
    evilBlock.visible = false;
  }
  if (andar == 3){
    background(backgroundIMG2);
    if(cat.isTouching(edges[0])) {
      cat.position.x = windowWidth
      andar = andar-1
      BlLevel = BlLevel-1
    }
    smallFish.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = false;
    evilBlock.visible = false;
  }
  if (andar == 4){
    background(backgroundIMG3);
    if(cat.isTouching(edges[0])) {
      cat.position.x = windowWidth
      andar = andar-1
      BlLevel = BlLevel-1
    }
    smallFish.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = false;
    
    if(enemyDied == false && evilBlock.visible !== true){
      //evilBlock.visible = true;
    }
    else if(Ehealth == 0){
     // evilBlock.visible = false;
    }
  }
  if(andar == 4 && evilBlock.position.x == 10000000000){
    evilBlock.position.x = windowWidth;
    Ehealth = 3;
    enemyDied = false;
  }
  if(andar == 7 && evilBlock.position.x == 10000000000){
    evilBlock.position.x = windowWidth;
    Ehealth = 3;
    enemyDied = false;
  }
  if(andar == 5){
    background(backgroundIMG5);
    smallFish.visible = true;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = true;
    evilBlock.visible = false;
  }
  if(andar == 6){
    background(backgroundIMG5);
    if(cat.isTouching(edges[0])) {
      cat.position.x = windowWidth
      andar = andar-1
      BlLevel = BlLevel-1
    }
    smallFish.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = false;
    evilBlock.visible = false
  }
  if(andar == 7){
    background(backgroundIMG6);
    if(cat.isTouching(edges[0])) {
      cat.position.x = windowWidth
      andar = andar-1
      BlLevel = BlLevel-1
    }
    smallFish.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = false;
  }
  if(andar == 8){
    background(backgroundIMG6);
    if(cat.isTouching(edges[0])) {
      cat.position.x = windowWidth
      andar = andar-1
      BlLevel = BlLevel-1
    }
    smallFish.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    bigFish.visible = false;
  }
  drawSprites();
  enemySpawn();
  cat.collide(ground);
  evilBlock.collide(ground);
  cat.collide(edges[0]);
  cat.collide(edges[1]);
  
  cat.velocityY = cat.velocityY + 0.75; //Gravidade
  evilBlock.velocityY = evilBlock.velocityY + 0.75; //Gravidade do Inimigo
  if(keyDown("Left_Arrow")) { //Mover para esquerda
    cat.changeAnimation("idle2")
    cat.position.x = cat.position.x-10
  }
  if(keyDown("Right_Arrow")) { //Mover para direita
    cat.changeAnimation("idle1")
    cat.position.x = cat.position.x+10
  }
  if(keyDown("space")){ //Pular
    if(cat.isTouching(jumpBlock)){
      cat.velocityY = -10; 
    }
  }
  if(keyDown("E") && cat.isTouching(smallFish) && andar == 2 && questActivated == false) { //Começar
   questActivated == true;
  }
  if(keyDown("E") && cat.isTouching(smallFish) && andar == 2 && questFinished == true) { //Teletransporte
    andar = andar+3;
    BlLevel = BlLevel+3;
    andarLimite = andarLimite+4;
  }
  if(keyDown("E")&& cat.isTouching(bigFish)&& BlLevel == 5 && questFinished == true){ //Quest Terminada
    questFinished = false;
    questActivated = false;
    quest2Activated = true;
    diedCount = diedCount-5
  }
  if(keyDown("E")&& cat.isTouching(bigFish)&& BlLevel == 5 && quest2Finished == true){ //Quest Terminada
Victory == true;
  }
  if(keyDown("Q")&& BlLevel == 4){ //Ataque
    if(cat.isTouching(evilBlock)){
      if(!Ehealth == 0){
        cat.changeAnimation("attack");
        setInterval(() => {
          Ehealth = Ehealth-0.5;
        }, "3000")
      }
      else {
        Ehealth = Ehealth + 3
      }
    }
  }
  if(keyDown("Q")&& BlLevel == 7){ //Ataque
    if(cat.isTouching(evilBlock)){
      if(!Ehealth == 0){
        cat.changeAnimation("attack");
        setInterval(() => {
          Ehealth = Ehealth-0.25;
        }, "3000")
      }
      else {

        Ehealth = Ehealth + 3
      }
    }
  }
  textSize(20);
  if (questActivated == true) { //Sistema de Quest
    if(diedCount < 5){
      fill("White")
    }
    else if(diedCount == 5) {
      fill("Green")
      stroke("DarkGreen")
      questFinished = true;
    }
  text("Objetivo: Mate 5 Doges",20,40);
  textSize(30)
  text(diedCount+"/5",100,80);
  }
  textSize(20);
 if(quest2Activated == true){
    if(diedCount < 10){
      questFinished = false;
      fill("White")
    }
    else if(diedCount == 10) {
      fill("Green")
      stroke(5)
      quest2Finished = true;
    }
    text("Objetivo: Mate 10 Aliens Doges",20,40);
    textSize(30)
    text(diedCount+"/10",100,80);
  }
  textSize(30);
  if (diedCount == 10){
    fill("Green")
    text("Parábens Você Ganhou",250,200);
  }

  if(Ehealth == 0 && enemyDied == false){
    enemyDied = true;
    evilBlock.visible = false;
    evilBlock.position.x = 10000000000;
    if(diedCount < 5 && questActivated == true){
      diedCount = diedCount+1;
    }
    if(diedCount < 10 && quest2Activated == true){
      diedCount = diedCount+1;
    }
    
  }
  if(health < 0.1){
    cat.position.y = 1000;
    health = 0;
  }
  if(evilBlock.isTouching(edges[0])){
    evilBlock.position.x = 700;
  }
  if(cat.isTouching(edges[1])) {
    if(andar !== andarLimite){
      cat.position.x = 100
      andar = andar+1
      BlLevel = BlLevel+1
    }

  }
  textSize(20);
fill("White");
stroke(0);
text("Pressione E para pegar Missões com Peixes",windowWidth / 1.45,windowHeight / 15);
text("Segure Q perto de Doges para atacar os Doges",windowWidth / 1.49,windowHeight / 10);
textSize(25);
text("Feliz aniversário Deise! Pra aproveitar essa data eu refiz esse joguinho!!",windowWidth / 4.25,windowHeight / 1.1);
}
function enemySpawn(){
  if(BlLevel == 4){
    evilBlock.position.x = evilBlock.position.x-5;
    evilBlock.visible = true;
  }
  if(BlLevel == 7){
    evilBlock.position.x = evilBlock.position.x-7;
    evilBlock.visible = true;
    evilBlock.changeAnimation("idle2");
    evilBlock.scale = 1;
  }
}