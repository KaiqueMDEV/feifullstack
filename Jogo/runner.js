const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// Quadro
let boardWidth = 500;
let boardHeight = 100;

// Player
let playerWidth = 18;
let playerHeight = 32;
let playerX = 50;
let playerY = 69;  // Posição do jogador (ajustada para visibilidade)
let playerImg;

let player = {
    x: playerX,
    y: playerY,
    width: playerWidth,
    height: playerHeight
}

// Obstáculo
let obstacleArray = [];

let obstacle1Width = 18;
let obstacle2Width = 36;
let obstacle3Width = 70;

let obstacleHeight = 32;
let obstacleX = 530;
let obstacleY = 69;

let obstacle1Img = new Image();
obstacle1Img.src = "./img/obstacle1.png";

let obstacle2Img = new Image();
obstacle2Img.src = "./img/obstacle2.png";

let obstacle3Img = new Image();
obstacle3Img.src = "./img/obstacle3.png";

//Pontos
let pointArray = [];
let pointHeight = 32;
let pointWidth = 32;
let pointY = 10;
let pointX = 600;
let pointImg = new Image();
pointImg.src = "./img/pointImg.png"

//fisicas
let velocityX = -8; // velocidade de obstáculos
let velocityY = 0;
let gravity = 0.4;

//mecanicas do jogo
let gameOver = false;
let distancia = 0;
let pontos = 0;




canvas.height = boardHeight;
canvas.width = boardWidth;

// Desenho do jogador
playerImg = new Image();
playerImg.src = "./img/playerImg.png";

// Espera o carregamento da imagem do jogador para iniciar a animação
playerImg.onload = function() {

    // Agora que a imagem está carregada, podemos calcular a largura e altura dos sprites
    let cols = 11;  // Número de colunas no spritesheet
    let rows = 1;   // Número de linhas no spritesheet
    let spriteWidth = playerImg.width / cols;  // Calcula a largura de cada sprite
    let spriteHeight = playerImg.height / rows;  // Calcula a altura de cada sprite

    // Passa a imagem carregada para a função de animação
    loadImages(spriteWidth, spriteHeight);
};

// Variáveis de controle da animação
let totalFrames = 11;  // Total de frames no spritesheet (11 colunas)
let currentFrame = 0;   // Começar a animação no primeiro frame
let srcX = 0;  // Posição do frame atual no eixo X (dentro da imagem)
let srcY = 0;  // Posição do frame atual no eixo Y (sempre 0 para esse spritesheet)
let animacaoCompleta = 0;
let animacaoTerminada = false;

setInterval(placeObstacle, 1000); // gerar obstáculos a cada 1 segundo
setInterval(placePoints, 10000); // gerar pontos a cada 10 segundos
document.addEventListener("keydown", movePlayer); // ao pressionar teclas

function animate(spriteWidth, spriteHeight) {
    if (gameOver) return;
    console.log(pontos)

    requestAnimationFrame(() => animate(spriteWidth, spriteHeight));

    // Preencher o fundo do canvas com uma cor para ajudar a visualizar
    ctx.fillStyle = "lightblue";  // Definir uma cor de fundo para o canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // Desenha o fundo

    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpa o conteúdo anterior

    // Atualiza a animação se necessário
    if (currentFrame >= totalFrames) {
        currentFrame = 0;  // Reseta para o primeiro frame
    }

    // Calcula a posição do sprite atual
    srcX = currentFrame * spriteWidth;  // Calcula a posição do sprite no eixo X

    // Player
    velocityY += gravity; // Aplica a gravidade
    player.y = Math.min(player.y + velocityY, playerY)
    ctx.drawImage(playerImg, srcX, srcY, spriteWidth, spriteHeight, player.x, player.y, spriteWidth, spriteHeight);

    // Controla a animação
    animacaoCompleta++;

    if (animacaoCompleta > 11) {
        currentFrame++;  // Avança para o próximo frame
        animacaoCompleta = 5; // Mantém a velocidade da animação
        animacaoTerminada = true;
    }

    if (animacaoTerminada) {
        if (currentFrame < 3) {
            currentFrame = 3;  // Começa a animação a partir do 4º frame
        }
    }

    // Obstáculo
    for (let i = 0; i < obstacleArray.length; i++) {
        let obstacle = obstacleArray[i];
        obstacle.x += velocityX;
        ctx.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

    
        if(detectaColisao(player, obstacle)) {
            gameOver = true
            playerImg.src = "./img/playerImg-rip.png"
            playerImg.onload = function() {
                ctx.drawImage(playerImg, player.x, player.y, 34, 32);
            }
        }
        }

    for (let i = 0; i < pointArray.length; i++) {
        let point = pointArray[i];
        point.x += velocityX;
        ctx.drawImage(point.img, point.x, point.y, point.width, point.height);

        if(detectaColisao(player, point)) {
            pontos++
            pointArray = [];
            velocityX = velocityX - (pontos)
        }
    }
    if (pontos === 0){
        const corpo = document.getElementById("corpo")
        corpo.style.backgroundColor = "White";
    }else if (pontos === 1){
        const corpo = document.getElementById("corpo")
        corpo.style.backgroundColor = "Red";
    }
    

    //Distancia
    ctx.font="15px Arial";
    ctx.fillStyle="black";
    distancia++;
    ctx.fillText(distancia + " metros", 5, 15);
        
    console.log(distancia, "metros")
    
    }

let numOfImages = 1;
function loadImages(spriteWidth, spriteHeight) {
    if (--numOfImages > 0) return;
    animate(spriteWidth, spriteHeight); // Inicia a animação após carregar as imagens
}

function movePlayer(e) {
    if (gameOver) return;

    if ((e.code == "Space" || e.code == "ArrowUp") && player.y == playerY) {
        velocityY = -7; // pulo

    }
}

function placePoints(){

    let point = {
        img: pointImg,
        x: pointX,
        y: pointY,
        width: 32,
        height: 32
    };   

    pointArray.push(point);

    if(pointArray.length > 5){
        pointArray.shift();
    }


}
              

function placeObstacle() {
    if (gameOver) return;

    let obstacle = {
        img: null,
        x: obstacleX,
        y: obstacleY,
        width: null,
        height: obstacleHeight
    };
    

    let placeObstacleChance = Math.random();

    if (placeObstacleChance > .99) {
        obstacle.img = obstacle3Img;
        obstacle.width = obstacle3Width;
        obstacleArray.push(obstacle);

    } else if (placeObstacleChance > .77) {
        obstacle.img = obstacle2Img;
        obstacle.width = obstacle2Width;
        obstacleArray.push(obstacle);

    } else if (placeObstacleChance > .50) {
        obstacle.img = obstacle1Img;
        obstacle.width = obstacle1Width;
        obstacleArray.push(obstacle);
    }

    if (obstacleArray.length > 5) {
        obstacleArray.shift(); // Remove excesso de obstáculos
    }
}

function detectaColisao(a, b) {
    return a.x < b.x + b.width //Canto esquerdo superior do A não alcança o topo direito superior do B
     && a.x + a.width > b.x //Canto direito superior do A não alcança o topo esquerdo superior do B 
     && a.y < b.y + b.height //Canto esquerdo superior do A não alcança o canto esquerdo inferior do B
     && a.y + a.height > b.y;  //Canto direito inferior do A não alcança o canto direito inferior do B
}
