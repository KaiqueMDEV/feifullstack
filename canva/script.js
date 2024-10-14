let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');




function square(x, y, w, h, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h);
    ctx.closePath();
}

function line(x1, y1, x2, y2, c) {
    ctx.beginPath()
    ctx.strokeStyle = c
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function circle(x, y, r, c, sc) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.strokeStyle = sc;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

}

function arch(x, y, r, ea, c) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(x, y, r, 1 * Math.PI, ea);
    ctx.stroke();
}

function arch2(x, y, r, sa, c) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(x, y, r, sa, 0 * Math.PI);
    ctx.stroke();
}
function text(texto, x, y) {
    ctx.font = "20px Arial";
    ctx.fillText(texto, x, y);
}
text('Canvas', 115, 50)

square(0, 0, 50, 50, 'blue')
square(250, 0, 50, 50, 'red')


arch(150, 150, 80, -2.35, 'green')
arch2(150, 150, 80, 5.5, 'green')
arch(150, 300, 80, -1.56, 'green')
arch2(150, 300, 60, -1.56, 'green')

square(0, 240, 30, 30, 'yellow')
square(0, 270, 30, 30, 'yellow')
square(30, 270, 30, 30, 'yellow')

square(270, 270, 30, 30, 'black')
square(270, 240, 30, 30, 'black')
square(240, 270, 30, 30, 'black')

square(0, 120, 30, 30, 'cyan')
square(0, 150, 30, 30, 'cyan')
square(270, 135, 30, 30, 'cyan')

square(110, 150, 40, 40, 'red')

line(150, 150, 150, 300, 'green')

line(0, 150, 300, 150, 'green')

line(0, 0, 150, 150, 'blue')
line(300, 0, 150, 150, 'red')

circle(150, 110, 15, 'cyan', 'blue')
circle(70, 220, 15, 'yellow', 'green')
circle(220, 220, 15, 'yellow', 'green')

circle(150, 300, 40, 'cyan', 'green')

arch(150, 150, 60, 0, 'green')


line(0, 0, 0, 300)
line(0, 0, 300, 0)
line(300, 0, 300, 300)
line(300, 300, 0, 300)

