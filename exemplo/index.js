const prompt = require("prompt-sync")();

let curso = prompt("Qual o nome do seu curso?");
console.log("Curso: " + curso);

let fase = prompt("Informe a fase:");
console.log("Fase: " + fase);

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log("Par: " + i);
    }
    else{
        console.log("Ímpar: " + i);
    }
}