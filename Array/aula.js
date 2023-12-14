/*
const Alunos = ["joão" , "Maria"];
Alunos.push(1);

Alunos[2] = "Eduarda";

const nome = "Maria Eduarda";

for( let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
*/
const notas = [];

notas.push(5);
notas.push(2);
notas.push(9);
notas.push(6);
notas.push(5);
notas.push(12);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + notas;
    
}

const media = soma / notas.length;
console.log(media);