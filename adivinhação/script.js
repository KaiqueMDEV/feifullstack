function checar(){
    x = parseInt(document.getElementById("number").value)
    if (x == 61){
        document.getElementById("resposta").style.backgroundColor = "green";
        document.getElementById("resposta").style.height = "auto"
        document.getElementById("resposta").innerHTML = "Correto!";

    } else if (x < 61) {
        document.getElementById("resposta").style.backgroundColor = "red";
        document.getElementById("resposta").innerHTML = "Maior!";
    } else if (x > 61) {
        document.getElementById("resposta").style.backgroundColor = "red";
        document.getElementById("resposta").innerHTML = "Menor!";
    }
} 

function gerar(){
    num = Math.floor(Math.random() * 99) + 1;
    document.getElementById("number").value = num;
}

