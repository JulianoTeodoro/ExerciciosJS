let str = "Juliano";
function saudacao(string){
    console.log(`Bom dia ${string}`);
}
saudacao(str);

saudacao("Levir");

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));

const raiza =  (n) => n ** 0.5;

console.log(raiza(16));