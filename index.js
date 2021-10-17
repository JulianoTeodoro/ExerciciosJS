
const alunos = ['Eu' , 'juliano'];
alunos[alunos.length] = 'mar';
alunos.unshift('Mas');
console.log(alunos);
const removido = alunos.shift();
const remove = alunos.pop();
console.log(remove);
console.log(removido);
console.log(alunos);

function criaPessoa(nome, sobrenome, idade){
    const pessoa = {
        nome,
        sobrenome,
        idade,
    
        fala(){
            console.log("Ola mundo");
        },
         
       incrementaIdade(){
        this.idade++;
       }

    };
    return pessoa;
}

const pessoa1 = criaPessoa("Juliano", "Teodoro", 18);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

pessoa1.fala();
