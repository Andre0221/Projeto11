var rua,boy, leftBoundary,rightBoundary;
var ruaImg,boyImg;
var i;


function preload(){
ruaImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

    // Movendo o fundo 
    rua=createSprite(200,200);
    rua.addImage(ruaImg);
    rua.velocityY = 4;
    rua.y=rua.heigth/2;

    //Criando menino que corre 
    
    boy.createSprite(200,40);
    boy.addAnimation(boyImg);
    // Criando Boundary (Limite) esquerdo  
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;


    //Crie Boundary direito 
    rigthBoundary=createSprite(400,0,100,800);
    rigthBoundary.visible = false;
}


function draw() {
background(0);




// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(rigthBoundary);
boy.collide(leftBoundary);
boy.x=Word.mouseX;
 //Reiniciar o fundo
 if(rua.y<0){

rua.y=rua.height/2;

 }




drawSprites();

 

 }




