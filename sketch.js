// var dos botões do menu
var xbtnMenu = 150;
var ybtn1Menu = 150;
var ybtn2Menu = 250;
var ybtn3Menu = 350;
var largurabtnMenu = 225;
var alturabtnMenu = 50;
var bordabtnMenu = 10;
var tela = 0;

// var dos botões de voltar para o menu
var xbtnVoltar = 450;
var ybtn2Voltar = 475;
var ybtn3Voltar = 475;
var largurabtnVoltar = 50;
var alturabtnVoltar = 25;
var bordabtnVoltar = 10;

//var dos botões da tela de game over
var xbtnGameOver1 = 350;
var xbtnGameOver2 = 75;
var ybtnGameOver = 450;
var largurabtnGameOver = 75;
var alturabtnGameOver = 25;
var bordabtnGameOver = 10;

// var fonte de letras e sons
var fonteJoker;
var fontePower;
var temapirata;
var gameOversom;
var hitSom;
var vitoriaSom;

// var do personagem
var vetorLuffy = [];
var vetorLuffyAndar = [];
var vetorLuffyAndaresq = [];
var xJogador = -10;
var yJogador = 275;
var cont = 0;
var tempo = 0;

// var dos baús obstaculos
var xR, yR;
var xO = [];
var yO = [];
var quantObs = 6;
var numerosR = [];
var numerosAle = [];
var valorO;
var perguntas = [];
var velocidadeObs = 4;
var mudançaNivel = 0;

//var de colisão
var colisaoBau = 20;
var vidas = 3;
var pontos = 0;

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11;

function preload(){
  
  //personagem parado

  vetorLuffy[0] = loadImage("./personagem/idle_0.png");
  vetorLuffy[1] = loadImage("./personagem/idle_1.png");
  vetorLuffy[2] = loadImage("./personagem/idle_2.png");
  vetorLuffy[3] = loadImage("./personagem/idle_3.png");

  //personagem andando direita

  vetorLuffyAndar[0] = loadImage("./personagem/run_0.png");
  vetorLuffyAndar[1] = loadImage("./personagem/run_1.png");
  vetorLuffyAndar[2] = loadImage("./personagem/run_2.png");
  vetorLuffyAndar[3] = loadImage("./personagem/run_3.png");
  vetorLuffyAndar[4] = loadImage("./personagem/run_4.png");
  vetorLuffyAndar[5] = loadImage("./personagem/run_5.png");

  //personagem andando esquerda

  vetorLuffyAndaresq[0] = loadImage("./personagem/runesq_0.png");
  vetorLuffyAndaresq[1] = loadImage("./personagem/runesq_1.png");
  vetorLuffyAndaresq[2] = loadImage("./personagem/runesq_2.png");
  vetorLuffyAndaresq[3] = loadImage("./personagem/runesq_3.png");
  vetorLuffyAndaresq[4] = loadImage("./personagem/runesq_4.png");
  vetorLuffyAndaresq[5] = loadImage("./personagem/runesq_5.png");

  // Fundos, itens e menu
  img1 = loadImage("./personagem/Sereiaa.png");
  img2 = loadImage("./Itens/Vida.png");
  img3 = loadImage("./Fundo/Fundo_mar.png");
  img4 = loadImage("./Fundo/Luz.jpg");
  img5 = loadImage("./Itens/Bau1.png");
  img7 = loadImage("./Pessoas/Mateus.jpg");
  img8 = loadImage("./Menu/Setas.png");
  img9 = loadImage("./Fundo/Fundo_mariniciar.png");
  img10 = loadImage("./Itens/Moeda.png");
  img11 = loadImage("./Itens/Bau2.png");

  // Fonte de letras

  fonteJoker = loadFont("./Fonteletras/JOKERMAN.TTF");
  fontePower = loadFont("./Fonteletras/pkmnrs.ttf");
  
  temapirata = loadSound("./Sons/pirate_themee.wav");
  gameOversom = loadSound("./Sons/game_over.mp3");
  hitSom = loadSound("./Sons/Hit2.mp3");
  vitoriaSom = loadSound("./Sons/victory.ogg");
}

function estaSobreBtn(ybtnMenu){
  
  return (mouseX > xbtnMenu && mouseX < xbtnMenu + largurabtnMenu && mouseY > ybtnMenu && mouseY < ybtnMenu + alturabtnMenu);
}

function estaSobreVoltar(ybtnVoltar){
  
  return (mouseX > xbtnVoltar && mouseX < xbtnVoltar + largurabtnVoltar && mouseY > ybtnVoltar && mouseY < ybtnVoltar + alturabtnVoltar);
}

function estaSobreGameOver(xbtnGameOver){
  
 return (mouseX > xbtnGameOver && mouseX < xbtnGameOver + largurabtnGameOver && mouseY > ybtnGameOver && mouseY < ybtnGameOver + alturabtnGameOver);
    
}

function balaodeFala(){
  fill(0, 204, 255);
  rect(20, 25, 270, 50, 10, 15);
  ellipse(75, 95, 10, 10);
  ellipse(55, 85, 10, 10);
  
}

function bauObstaculo(xO, yO, valor){
  
  image(img5, xO , yO, 100, 100);
  textSize(20);
  text(valor, xO + 25, yO + 68);
  
}

function menu() {
  background(0, 102, 204);
  image(img3, 0, 0, 500, 500);
  
  // animação personagem
  tempo++;
  image(vetorLuffy[cont % 4], 360, 370, 200, 150);
  if (tempo > 12) {
    cont++;
    tempo = 0;
  }

  image(img5, -25, 400, 150, 150);
  image(img10, 100, 75, 50, 50);
  image(img10, 370, 35, 50, 50);
  fill(204, 255, 255);
  rect(125, 50, 270, 55);
  textSize(50);
  textFont(fonteJoker);
  fill(51, 51, 153);
  text("SEA HUNT", 133, 100);
  strokeWeight(3);

  //botão 1(Iniciar)

  if (estaSobreBtn(ybtn1Menu)) {
    fill(0, 204, 255);
  } else {
    fill(0, 204, 255);
  }
  rect(xbtnMenu, ybtn1Menu, largurabtnMenu, alturabtnMenu, bordabtnMenu, 15);

  if (estaSobreBtn(ybtn1Menu)) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  textSize(45);
  textFont(fonteJoker);
  text("INICIAR", xbtnMenu + 22, ybtn1Menu + 45);

  //botão 2(Instruções)

  if (estaSobreBtn(ybtn2Menu)) {
    fill(0, 204, 255);
  } else {
    fill(0, 204, 255);
  }

  rect(xbtnMenu, ybtn2Menu, largurabtnMenu, alturabtnMenu, bordabtnMenu, 15);

  if (estaSobreBtn(ybtn2Menu)){
    fill(255, 255, 0);
  } else {
    fill(255);
  }

  textSize(33);
  textFont(fonteJoker);
  text("INSTRUÇÕES", xbtnMenu + 8, ybtn2Menu + 42);

  //botão 3(Créditos)

  if (estaSobreBtn(ybtn3Menu)){
    fill(0, 204, 255);
  } else {
    fill(0, 204, 255);
  }

  rect(xbtnMenu, ybtn3Menu, largurabtnMenu, alturabtnMenu, bordabtnMenu, 15);

  if (estaSobreBtn(ybtn3Menu)){
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  
  textSize(40);
  textFont(fonteJoker);
  text("CRÉDITOS", xbtnMenu + 15, ybtn3Menu + 45);

  //Mouse elipse

  fill(255, 50, 0);
  ellipse(mouseX, mouseY, 10, 10);
}

function fases(){
  //fases
  background(220);
  image(img9, 0, 0, 500, 500);
  balaodeFala();
  textFont(fonteJoker);
  textSize(22);
  fill(255);
  text(perguntas[mudançaNivel], 25, 60);
  
  //vidas
  fill(0, 204, 255);
  rect(395, 25, 100, 50, 10, 15);
  fill(255)
  image(img2, 400, 30, 40, 40);
  textFont(fonteJoker);
  textSize(40)
  text(vidas, 450, 65);
  
  //pontuação 
  fill(0, 204, 255);
  rect(347, 80, 150, 50, 10, 15);
  fill(255)
  image(img10, 355, 80, 50, 50);
  textFont(fonteJoker);
  textSize(40)
  text(pontos, 405, 120);
  
  
  //personagem sereia
  image(img1, 50, 100, 80, 80);
  
  //baus obstaculos
  
  for(i = 0; i < quantObs; i++){
    bauObstaculo(xO[i], yO[i], numerosAle[i]);
    yO[i] = yO[i] + velocidadeObs;
    if(yO[i] > 500){
      xO[i] = random(420);
      yO[i] = random(-100, -500);
    }
    
    //colisão com as respostas erradas
    if(dist(xO[i], yO[i], xJogador, yJogador) < colisaoBau){
      hitSom.play();
      pontos = pontos - 5;
      for(j = 0; j < quantObs; j++){
        yO[j] = random(-100, -500);  
        xR = random(420);
        yR = random(-100, -500);
      }
      
      vidas = vidas - 1
      if(vidas === 0){
        vidas = 3;
        pontos = 0;
        xJogador = -10;
        yJogador = 275;
        temapirata.stop();
        gameOversom.loop();
        tela = 4;
        
      }
    }
  }
  
  bauObstaculo(xR, yR, numerosR[mudançaNivel]);
  yR= yR + velocidadeObs;
  if(yR > 500){
    xR = random(420);
    yR = random(-100, -500);
  }
  
  //colisão com as respostas certas
  if(dist(xR, yR, xJogador, yJogador) < colisaoBau){
    console.log("Bateu");
    mudançaNivel = mudançaNivel + 1;
    pontos = pontos + 10
    for(l = 0; l < quantObs; l++){
      yO[l] = random(-100, -500);  
      xR = random(420);
      yR = random(-100, -500);
      xJogador = -10;
      yJogador = 275;
      valorO = parseInt( random(200) );
      while(valorO === numerosR[l] ){
        valorO = random(200);
      }
      numerosAle[l] = valorO; 
    }
    
    if(mudançaNivel > 9){
      temapirata.stop();
      vitoriaSom.loop();
      tela = 5;
    }
  }
  
  
  //animação luffy

  if (!keyIsPressed) {
    estadoJogador = 0;
  }

  // Escolhe a imagem do jogado
  if (estadoJogador == 1) {
    // esquerda
    imageAtualJogador = vetorLuffyAndaresq[cont % 6];
  } else if (estadoJogador == 2) {
    // direita
    imageAtualJogador = vetorLuffyAndar[cont % 6];
  } else {
    // parado
    imageAtualJogador = vetorLuffy[cont % 4];

    luffyParado();
  }

  // personagem Luffy

  image(imageAtualJogador, xJogador, yJogador, 125, 125);

  //movimento do personagem}

  if (keyIsDown(RIGHT_ARROW)) {
    estadoJogador = 2;
    if (xJogador < 420) {
      xJogador += 5;
    }
    movimentoLuffy();
  }

  if (keyIsDown(UP_ARROW)) {
    if (yJogador > 200) {
      yJogador -= 5
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (yJogador < 390) {
      yJogador += 5;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    estadoJogador = 1;
    if (xJogador > -50) {
      xJogador -= 5;
    }

    movimentoLuffy();
  }

}

function instruções() {
  //tela instruções
  background(220);
  image(img3, 0, 0, 500, 500);
  fill(153, 204, 255);
  rect(115, 47, 290, 60, 50);
  fill(153, 204, 255);
  rect(80, 120, 350, 350, 30);
  textSize(15);
  textFont(fontePower);
  fill(0, 0, 128);
  text("Ahoy, marujo!! Ajude Luffy, o Pirata dos sete mares, a", 100, 150);
  text("encontrar os seus baús do tesouro que foram roubados e  ", 86, 170);
  text("jogados dentro do fundo do mar pelo terrível Pirata Bar-  ", 85, 190);
  text("ba Negra. Usando as setas do teclado, guie Luffy pelas ", 86, 210);
  text("profundezas do oceano e leve-o até os seus baús, mas cui- ", 86, 230);
  text("dado, pois o Barba Negra lançou uma maldição sobre eles, e ", 86, 250);
  text("para conseguir pegá-los, você deve verificar quais deles  ", 86, 270);
  text("são reais, olhando para as operações matemáticas marca-", 86, 290);
  text("das neles. Ouça com atenção o canto das sereias, elas te", 86, 310);
  text("dirão a resposta que procuras para encontrar o baú ver-", 86, 330);
  text("dadeiro. Boa sorte e boa caçada!", 86, 350);
  textSize(42);
  textFont(fonteJoker);
  fill(0, 0, 128);
  text("INSTRUÇÕES", 125, 95);
  image(img8, 155, 355, 190, 105);

  //botão Instruções(Voltar)

  if (estaSobreVoltar(ybtn2Voltar)) {
    fill(0, 204, 255);
  } else {
    fill(150);
  }
  rect(xbtnVoltar,ybtn2Voltar,largurabtnVoltar,alturabtnVoltar, bordabtnVoltar,15);
  textSize(15);
  textFont(fontePower);

  if (estaSobreVoltar(ybtn2Voltar)) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  text("VOLTAR", xbtnVoltar + 5, ybtn2Voltar + 20);

  //Mouse elipse

  fill(255, 50, 0);
  ellipse(mouseX, mouseY, 10, 10);
}

function créditos() {
  //tela créditos
  background(220);
  image(img3, 0, 0, 500, 500);
  image(img7, 25, 130, 150, 150);
  fill(0, 0, 128);
  rect(155, 47, 230, 60, 30);
  rect(190, 130, 300, 150, 30);
  textSize(42);
  textFont(fonteJoker);
  fill(255, 204, 0);
  text("CRÉDITOS", 165, 100);
  textSize(25);
  text("MATEUS ARAUJO", 240, 165);
  textFont(fontePower);
  textSize(15);
  fill(255);
  text("Função: Programador", 280, 185);
  textSize(13);
  text("    Estudante de Ciências e Tecnologia,  na  Universidade", 200, 210);
  text("Federal do Rio Grande do Norte.", 270, 230);

  //botão Créditos(Voltar)

  if (estaSobreVoltar(ybtn3Voltar)) {
    fill(0, 51, 102);
  } else {
    fill(150);
  }
  rect(
    xbtnVoltar,
    ybtn3Voltar,
    largurabtnVoltar,
    alturabtnVoltar,
    bordabtnVoltar,
    15
  );
  textSize(15);
  textFont(fontePower);

  if (estaSobreVoltar(ybtn3Voltar)) {
    fill(255, 255, 0);
  } else {
    fill(255);
  }
  text("VOLTAR", xbtnVoltar + 5, ybtn3Voltar + 20);

  //Mouse elipse

  fill(255, 50, 0);
  ellipse(mouseX, mouseY, 10, 10);
}

function morteLuffy(){
  background(0);
  textSize(60);
  textFont(fonteJoker);
  fill(204,0,0);
  text("GAME OVER", 65, 100);
  textSize(20);
  textFont(fonteJoker);
  fill(255);
  text("LUFFY PERDEU TODAS AS VIDAS", 85, 130);
  image(img4, 100, 150, 300, 300);
  
  //animação personagem
  tempo++;
  image(vetorLuffy[cont % 4], 165, 290, 200, 150);
  if (tempo > 12) {
    cont++;
    tempo = 0;
  }
  
  //botão voltar para o menu
  if (estaSobreGameOver(xbtnGameOver1)) {
    fill(255);
  } else {
    fill(255);
  }
  rect(xbtnGameOver1,ybtnGameOver,largurabtnGameOver,alturabtnGameOver, bordabtnGameOver,15);
  textSize(15);
  textFont(fontePower);

  if (estaSobreGameOver(xbtnGameOver1)) {
    fill(204, 0, 0);
  } else {
    fill(0);
  }
  textFont(fontePower)
  textSize(19)
  text("MENU", xbtnGameOver1 + 20, ybtnGameOver + 20);
  
  
  //botão voltar para o jogo
  if (estaSobreGameOver(xbtnGameOver2)) {
    fill(255);
  } else {
    fill(255);
  }
  rect(xbtnGameOver2,ybtnGameOver,largurabtnGameOver,alturabtnGameOver, bordabtnGameOver,15);
  textSize(15);
  textFont(fontePower);

  if (estaSobreGameOver(xbtnGameOver2)) {
    fill(204, 0, 0);
  } else {
    fill(0);
  }
  textFont(fontePower)
  textSize(15)
  text("CONTINUAR", xbtnGameOver2 + 8, ybtnGameOver + 20);
  
}

function voceGanhou(){
  image(img3, 0, 0, 500, 500);
  fill(0, 0, 153);
  rect(35, 40, 440, 120);
  textSize(54);
  textFont(fonteJoker);
  fill(255,224,18);
  text("VOCÊ GANHOU", 45, 100);
  textSize(17);
  textFont(fonteJoker);
  fill(255);
  text("PARABÉNS!! VOCÊ AJUDOU LUFFY A RECUPERAR", 40, 130);
  text("TODOS OS BAÚS PERDIDOS.", 140, 150);
  fill(0, 0, 153);
  rect(135, 180, 250, 25);
  fill(255);
  text("PONTUAÇÃO TOTAL:" + " " + pontos, 150, 200);
  fill(0, 0, 153);
  rect(50, 230, 415, 25);
  fill(255);
  text("PRESSIONE ESC PARA VOLTAR PARA O MENU", 60, 250);
  
  //animação luffy
  tempo++;
  image(vetorLuffy[cont % 4], 170, 330, 225, 175);
  if (tempo > 12) {
    cont++;
    tempo = 0;
  }
  
  image(img5, 300 , 370, 150, 150);
  image(img11, 80 , 360, 160, 160);
  
}

function luffyParado() {
  tempo++;
  if (tempo > 12) {
    tempo = 0;
    cont++;

    if (cont > 6) {
      cont = 0;
    }
  }
}

function movimentoLuffy() {
  tempo++;
  if (tempo > 3) {
    tempo = 0;
    cont++;

    if (cont > 6) {
      cont = 0;
    }
  }
}

function setup(){
  createCanvas(500, 500);

  //sistema de sorteio de números
  xR = random(420);
  yR = random(-100, -500);
  
  for(i = 0; i < quantObs; i++){
    xO[i] = random(500);
    yO[i] = random(-100, -500);
    valorO = parseInt( random(200) );
    while(valorO === numerosR[0] ){
      valorO = random(200);
    }
    numerosAle[i] = valorO; 
    
  }
  
  //sistema de perguntas e respostas
  perguntas[0] = "100 + 25 = ?"; 
  numerosR[0] = 125; 
  perguntas[1] = "100 - 84 / 4 = ?"; 
  numerosR[1] = 79; 
  perguntas[2] = "(50 * 5) - (1000/10) = ?"; 
  numerosR[2] = 150; 
  perguntas[3] = "50 / 5 + 70 - 3 * 5 = ?"; 
  numerosR[3] = 65; 
  perguntas[4] = "(30-12) * (395-393) = ?"; 
  numerosR[4] = 36; 
  perguntas[5] = "75 / 5 * 5 + 25 = ?"; 
  numerosR[5] = 100; 
  perguntas[6] = "0,5 / 4 * 1600 = ?"; 
  numerosR[6] = 200; 
  perguntas[7] = "559-459 + 300*1/4 = ?"; 
  numerosR[7] = 175; 
  perguntas[8] = "1/4 * 1/5 * 20 = ?"; 
  numerosR[8] = 1; 
  perguntas[9] = "5000/ 10/2 / 5/10 = ?"; 
  numerosR[9] = 5; 
  
}
    
function draw(){
  if (tela === 0){
    menu();
  }

  if (tela === 1){
    fases();
  }

  if (tela === 2){
    instruções();
  }

  if (tela === 3){
    créditos();
  }
  
  if(tela === 4){
    morteLuffy();
  }
  
  if(tela === 5){
    voceGanhou();
  }
}

function mouseClicked() {
  if (tela === 0) {
    if (estaSobreBtn(ybtn1Menu)){
      console.log("clicou no iniciar");
      temapirata.loop()
      tela = 1;
    }

    if (estaSobreBtn(ybtn2Menu)){
      console.log("clicou nas intruções");
      tela = 2;
    }

    if (estaSobreBtn(ybtn3Menu)){
      console.log("clicou nos créditos");
      tela = 3;
    }
  }

  if (tela === 2){
    if (estaSobreVoltar(ybtn2Voltar)) {
      console.log("clicou no voltar 2");
      tela = 0;
    }
  }

  if (tela === 3){
    if (estaSobreVoltar(ybtn3Voltar)){
      console.log("clicou no voltar 3");
      tela = 0;
    }
  }
  
  if(tela === 4){
    if (estaSobreGameOver(xbtnGameOver1)){
      console.log("clicou no Menu");
      mudançaNivel = 0;
      gameOversom.stop();
      tela = 0;
    }
    
    if(estaSobreGameOver(xbtnGameOver2)){
      console.log("clicou no Continuar");
      gameOversom.stop();
      mudançaNivel = 0;
      temapirata.loop();
      tela = 1;
    }
  } 
}

function keyPressed() {
  if (tela === 1|| tela === 5) {
    if (keyCode === ESCAPE) {
      console.log("Clicou no esc");
      temapirata.stop();
      vitoriaSom.stop();
      mudançaNivel = 0;
      vidas = 3;
      pontos = 0;
      xJogador = -10;
      yJogador = 275;
      tela = 0;
    }
  }
  
  if (tela === 2 || tela === 3){
    
    if (keyCode === ESCAPE) {
      console.log("Clicou no esc");
      tela = 0;
    }
  }
}
