
const alunos = ['Eu' , 'juliano'];
alunos[alunos.length] = 'mar';
alunos.unshift('Mas');
console.log(alunos);
const removido = alunos.shift();
const remove = alunos.pop();
console.log(remove);
console.log(removido);
console.log(alunos);
