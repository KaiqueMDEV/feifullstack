let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    retangulo2.x = x_mouse
    retangulo2.y = y_mouse
})

document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    tecla = evento.key;
    if(tecla == "ArrowUp"){
        retangulo.y -= 2;
    }if(tecla == "ArrowDown"){
        retangulo.y += 2;
    }if(tecla == "ArrowRight"){
        retangulo.x += 2;
    }if(tecla == "ArrowLeft"){
        retangulo.x -= 2;
    }

} )

let retangulo = {
    x: 0,
    y: 10,
    largura: 50,
    altura: 50,
    cor_linha: "blue",
    cor_preenchimento: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 20,
    y: 20,
    largura: 70,
    altura: 30,
    cor_linha: "black",
    cor_preenchimento: "white",
        desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    retangulo.desenha();
    requestAnimationFrame(animacao)
}
function animacao2(){
    ctx.clearRect(0,0,400,400)
    retangulo2.desenha();
    requestAnimationFrame(animacao)
}

animacao();
animacao2();