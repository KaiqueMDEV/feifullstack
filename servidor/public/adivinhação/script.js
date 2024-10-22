num = Math.floor(Math.random() * 99) + 1;

function checar(){
    x = parseInt(document.getElementById("number").value)
    if (x == num){
        document.getElementById("resposta").style.backgroundColor = "green";
        document.getElementById("resposta").style.height = "auto"
        document.getElementById("resposta").innerHTML = "Correto!";

    } else if (x < num) {
        document.getElementById("resposta").style.backgroundColor = "red";
        document.getElementById("resposta").innerHTML = "Maior!";
    } else if (x > num) {
        document.getElementById("resposta").style.backgroundColor = "red";
        document.getElementById("resposta").innerHTML = "Menor!";
    }
} 

function gerar(){
    num = Math.floor(Math.random() * 99) + 1;
}

