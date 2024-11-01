//ex1
let nome = "Thiago"
let maiuscula = nome.toUpperCase()
let minuscula =  nome.toLowerCase()

console.log(maiuscula, minuscula)

//ex2
let a1 = "Berinjela"

function verificarSeTemA(){
    a1.toLowerCase
    if(a1.includes("a")){
    console.log(`A letra "a" da palavra "${a1}", é a letra de número: ${a1.indexOf("a") + 1}`)
    } else {
        console.log("Não tem a")
    }
}

verificarSeTemA(a1)

//ex3
const noticia = "Brasil Campeão de 2002, sendo o Ronaldo o artilheiro da copa."

let inicio = noticia.slice(0, 22)
let fim = noticia.slice(22, 100)

console.log(`início: ${inicio}, fim: ${fim}`)

//ex4
const frase = "Thiago"

console.log(frase.concat(" Coelho"));

//ex5
const frase2 = "eu não sei andar de bicicleta";

console.log(frase2.replace('não sei', 'sei'));

//ex6
const palavra = "Macaco dourado"

let palavraj = palavra.split(" ");

console.log(palavraj.join("-"));

//ex7
let listaSenhas = [1, 2, 3, 4, 5];

listaSenhas.push(6);

console.log("Fila após adicionar os números: ", listaSenhas)

listaSenhas.pop();

console.log("Fila após  remover o número: ", listaSenhas)

//ex8

let listaDeClientes = [];

listaDeClientes.unshift("cliente1");
listaDeClientes.unshift("cliente2");
listaDeClientes.unshift("cliente3");

console.log(listaDeClientes);
console.log(listaDeClientes.reverse())

listaDeClientes.shift();

console.log(listaDeClientes);

//ex9
let listaNumerosInvertidos = [5,4,3,2,1]

console.log(listaNumerosInvertidos.reverse())

//ex10
let precosNormais = [10, 20, 30, 40, 50];

let precosDesconto = precosNormais.map(precosNormais => precosNormais * 0.9);

console.log("O preço sem desconto é: ",  precosNormais);
console.log("O preço com desconto é: ", precosDesconto);

//ex11
let notasAlunos = [10,4,6,7,8,3,9]

let alunosAprovados =  notasAlunos.filter(notasAlunos => notasAlunos >= 7);

console.log(alunosAprovados)

//ex12



















