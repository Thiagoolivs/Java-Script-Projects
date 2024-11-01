//exercícios funções
//ex1
function saudacao(string){
    console.log("Hello Word!");
}

saudacao();

//ex2
function soma(n1, n2){
    console.log(n1+n2);
}
let num1 = 1;
let num2 = 2;

soma(num1, num2);

//ex3
function parOuImpar(n){
    if(n % 2 == 0){
        console.log("É par!");
    }else{
        console.log("É ímpar!");
    }
}

let num = 5;
parOuImpar(num);

//ex4
function multiplicacao(n1 , n2){
    console.log(n1 * n2);
}

let n1 = 3;
let n2 = 9;

multiplicacao(n1, n2);

//ex5
function celsiusParaFahrenheit(c, f){
    let C = 40;
    let F = C * 1.8 + 32;
    console.log(`${C} Cº é igual a ${F} Fº `);
}

celsiusParaFahrenheit();

//ex6
function calculaMedia([n1,n2,n3]){
    console.log((n1+n2+n3) / 3);
}

let notas = [10, 8, 6];

calculaMedia(notas);

//ex7
function minutosParaSegundos(min){
    let seg = min * 60
    console.log(seg)
}
let minutos = 57;
minutosParaSegundos(minutos);

//ex8
function ehPositivo(n){
    if(n <0){
        console.log("É negativo")
    }else{
        console.log("É positivo")
    }
}

let number = -2
ehPositivo(number)

//ex9
function repetirPalavra(str, n){
    let resultado = "";
    for(let i = 0; i < n; i++) {
        resultado += str + "";
    }
    console.log(resultado);
}

repetirPalavra("Thiago", 5)

//ex10
function calculaAreaRetangulo(b, h){
  console.log(`A área do retângulo é ${b * h}`);
}

let base = 10;
let altura = 15;

calculaAreaRetangulo(base, altura)

//nivel médio
//ex1
function verificarPalindromo(str){
    let str2 = str.split("").reverse().join("");
    if(str === str2){
        console.log("É um palindromo")
    }else{
        console.log("Não é um palindromo")
    }
}
let palindromo =  "radar";

verificarPalindromo(palindromo);

// let palavra = "radaor";
// let invertida = palavra.split("").reverse();
// console.log(invertida)

//ex2
function calculaFatorial(n){
    let resultado = 1;
    for(let i = 1; i <= n; i++){
        resultado *= i;
    }
    return  resultado;
}
let numfat = 6
console.log(`O fatorial de ${numfat} é: ${calculaFatorial(numfat)}`)

//ex3
function filtrarPares(arr){
    let pares = arr.filter(function(n){
        return  n % 2 === 0;
    });  
    return pares;
}
let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(filtrarPares(numeros));

//ex4
function contaVogais(){
    let frase = "Aqui vai uma frase com vogais para contar";
    let vogais = "aeiouAEIOU";
    let contagem = 0;

    for(let i = 0; i < frase.length; i++){
        if(vogais.includes(frase[i].toLowerCase())){
            contagem++;}
        }
console.log(`"${frase}", tem ${contagem} vogais`);
}

contaVogais();
