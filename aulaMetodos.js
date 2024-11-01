// let casa = {
//     sala: 20,
//     cozinha: 10,
//     quarto: 15,
//     banheiro: 5,
// };
// function calcularTamanhoCasaEmM2(
//     tamanhoSala,
//     tamanhoCozinha,
//     tamanhoQuarto,
//     tamanhoBanheiro
// ){
//     const tamanhoTotal = (tamanhoBanheiro + tamanhoQuarto +tamanhoCozinha + tamanhoSala)
//     console.log(`O tamanho total da casa é de ${tamanhoTotal} m²`);
//     return tamanhoTotal;
// }


// calcularTamanhoCasaEmM2(
//     casa.sala,
//     casa.cozinha,
//     casa.quarto,
//     casa.banheiro
// )

let casa = {
    sala: 20,
    cozinha: 10,
    quarto: 15,
    banheiro: 5,

calcularTamanhoCasaEmM2: function (){
    const tamanhoTotal = (this.sala + this.cozinha + this.quarto + this.banheiro)
    console.log(`O tamanho total da casa é de ${tamanhoTotal} m²`)
        return tamanhoTotal;
}}

casa.calcularTamanhoCasaEmM2();

let a = 2.000001;

console.log(a.toFixed())
console.log(a.toFixed(3))
console.log(a.toString())

let b = "Texto da aula de métodos";

console.log(b.charAt(2));
console.log(b.concat(" que eu já dominei totalmente"));
console.log(b.length);
console.log(b.split("aula"));

let c = "10110";
console.log(Number.parseInt(c));
console.log(Number.isNaN(Number.parseInt(b)));

const listaNotas = [
   {nome: "Daniel", nota: 5},
   {nome: "Pedro", nota: 15},
   {nome: "Lucas", nota: 12},
   {nome: "Fabricio", nota: 16},
   {nome:  "Izabelle", nota: 18},
   {nome:  "Nathalia", nota: 20},
   {nome:  "Amanda", nota: 20},
   {nome:  "João", nota: 20},
   {nome:  "Marcus", nota: 12},
   {nome:  "Sergio", nota: 8},
   {nome:  "Diego", nota: 0},
   {nome:  "Rodrigo", nota: 9},
   {nome:  "Messi", nota: 18},
   {nome:  "CR7", nota: 15},
]

const alunosAprovados = listaNotas.filter(function (aluno){
    return aluno.nota >= 12
});

console.log(alunosAprovados);

const alunoQueTiraramZero = listaNotas.find(function (aluno){
    return aluno.nota === 0;
});

console.log(alunoQueTiraramZero);

const ListaNomesAlunosAprovados = listaNotas.map(function (aluno){
    return aluno.nome;
});

console.log(ListaNomesAlunosAprovados);6






