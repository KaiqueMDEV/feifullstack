//let nome = prompt("Insira o seu nome: ");
//let idade = parseInt(prompt("Insira a sua idade: "));
//let ano = 2024;

//let nascimento = ano - idade;

//let resposta = "Olá, " + nome + ". Seu ano de nascimento é: " + nascimento;

//document.getElementById("resp").innerHTML = resposta;

function soma(a, b){
    let c = a + b;
    return c;
}
function mult(a, b){
    let c = a * b;
    return c;
}

//let x = parseInt(prompt("Insira o primeiro valor: "))
//let y = parseInt(prompt("Insira o segundo valor: "))
//document.getElementById("resp1").innerHTML = soma(x, y)

function ex2(){
    numero = document.getElementById("i1").value;
    document.getElementById("resp2").innerHTML = mult(numero, 3);
}

function ex3(){
    let numero1 = parseInt(document.getElementById("ex3_num1").value);
    let numero2 = parseInt(document.getElementById("ex3_num2").value);
    document.getElementById("resp3").innerHTML = soma(numero1, numero2);
}

function ex4(){
    let numero1 = parseInt(document.getElementById("ex4_num1").value);
    let numero2 = parseInt(document.getElementById("ex4_num2").value);
    if(numero1 < 0 || numero2 < 0 ){
        document.getElementById("resp4").innerHTML = soma(numero1, numero2);
    }else{
        document.getElementById("resp4").innerHTML = mult(numero1, numero2);
    }
}