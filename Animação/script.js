let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}

let bola = {
    x:0,
    y:0,
    raio: 30,
    img: new Image(),
    desenha: function(){
        this.img.src = "ball.png"
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();  
    let x_mouse = evento.clientX - rect.left -30;
    let y_mouse = evento.clientY - rect.top -30;
    if (x_mouse >= 240){
        x_mouse = 240
    }else if (x_mouse <=0){
        x_mouse = 0
    }
    if (y_mouse >= 240){
        y_mouse = 240
    }else if (y_mouse <=0){
        y_mouse = 0
    }
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;
})


