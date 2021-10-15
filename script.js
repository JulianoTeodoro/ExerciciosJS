////const nome = prompt(`Digite seu nome:`);
//document.body.innerHTML += `Seu nome é: ${nome}<br />`;
//document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
///document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
//document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')}<br />`;
//document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('a')}<br />`;
//document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(length - 2)}<br />`;
//document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
//document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
//document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
//
let number = 10.25;
//number = number.toString();
//let isso = number + 'Ola';
//alert (isso);

let num1 = Math.floor(number);
let num2 = Math.ceil(number);
let num3 = Math.round(number);

console.log (num1);
console.log (num2);
console.log(num3);
console.log(Math.round(Math.random()));
console.log(Math.max(1,2,3,4,5,6,7,8));
console.log(Math.pow(4, 2));

let numero = prompt('Digite um numero');
numero = Number(numero);
console.log(typeof(numero));
const numerotitulo = document.getElementById("numero-titulo");
const numer = document.getElementById("num");
numer.innerHTML = numero;
numerotitulo.innerHTML = numero;

let raiz = document.getElementById("raizquadrada");
let inteiro = document.getElementById("inteiro");
let nan = document.getElementById("nan");
let baixo = document.getElementById("baixo");
let cima = document.getElementById("cima");
let duascasas = document.getElementById("duascasas");


raiz.innerHTML = numero ** 0.5;
inteiro.innerHTML = Number.isInteger(numero);
nan.innerHTML = Number.isNaN(numero);
baixo.innerHTML = Math.floor(numero);
cima.innerHTML = Math.ceil(numero);
duascasas.innerHTML = Number(numero).toFixed(2);
