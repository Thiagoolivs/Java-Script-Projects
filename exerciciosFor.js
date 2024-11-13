//ex1

let listaDeAlunos = ["Thiago", "João", "Vinicius", "Murilo", "Gabriel"];

for (let i = 0; i < listaDeAlunos.length; i++){
    console.log(listaDeAlunos[i]);
}

//ex2
const prompt = require (`prompt-sync`)();

let numero = parseInt(prompt("Digite um número: "));

for(let i = 0; i <= 10; i++){
    let resultado = numero * i; 
    console.log(`${numero} x ${i} = ${resultado}`);
}

//ex3
const promptt = require (`prompt-sync`)();
let notinhas = [];

for (let i = 0; i < 5; i++){
    let nota = parseFloat(promptt("Digite a nota: "));
    notinhas.push(nota);
    let media = notinhas.reduce((a, b) => a + b, 0);
    console.log(`A média de ${notinhas} é ${media / notinhas.length}`);
}

