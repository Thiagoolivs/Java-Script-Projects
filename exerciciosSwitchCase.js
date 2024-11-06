//exercícios switch case
//ex1

let aluno = {
    nome: "Thiago",
    curso: "Dev"
}

let mensagemSenai1 = `Olá ${aluno.nome}, o curso de Dev tem a duração de 2 anos, e a carga horária de aproximadamente 1200 horas!`
let mensagemSenai2 = `Olá ${aluno.nome}, está cursando Logística!`
let mensagemSenai3 = `Olá ${aluno.nome}, está cursando Administração!`
let mensagemGenerica = `Olá ${aluno.nome}!`

switch(aluno.curso){
    case "Desenvolvimento de sistemas":
    case "Dev":
        console.log(mensagemSenai1);
        break;
    case "Logística":
        console.log(mensagemSenai2);
        break;
    case "Administração":
    case "Adm":
        console.log(mensagemSenai3);
        break;
    default:
        console.log(mensagemGenerica);    
}

//ex2
let num1 = 6;
let num2 = 0;
let operacao = "/";

switch(operacao) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("Operação inválida");
  }

//ex3
let etaria = {
    idade: 90
}

let mInf = "Faixa-etária: Infantil"
let mAdol = "Faixa-etária: Adolescente"
let mAdult= "Faixa-etária: Adulto"
let mIdos = "Faixa-etária: Idoso"

switch(true){
    case (etaria.idade <= 12):
        console.log(mInf)
        break;
    case  (etaria.idade >= 13 && etaria.idade <= 17):
        console.log(mAdol)
        break;
    case (etaria.idade  >= 18 && etaria.idade <= 59):
        console.log(mAdult)
        break;
    case (etaria.idade >= 60):
        console.log(mIdos)
        break;
    default:
        console.log("Idade inválida")
}

//ex4
let notas = 6.5;


let Insuf = "Insuficiente:("
let Regul = "Regular!"
let Bom= "Bom!"
let Excele = "Excelente!"

switch(true){
    case (notas < 5):
        console.log(Insuf)
        break;
    case (notas >= 5 && notas <= 6.9):
        console.log(Regul)
        break;
    case (notas  >= 7 && notas <= 8.9):
        console.log(Bom)
        break;
    case (notas >= 9):
        console.log(Excele)
        break;
    default:
        console.log("Nota inválida")
}

//ex5
let numSem = "7";

switch(numSem){
    case "1":
        console.log("Domingo")
        break;
    case "2":
        console.log("Segunda")
        break;
    case "3":
        console.log("Terça")
        break;
    case "4":
        console.log("Quarta")
        break;
    case "5":
        console.log("Quinta")
        break;
    case "6":
        console.log("Sexta")
        break;
    case "7":
        console.log("Sábado")
        break;
    default:
        console.log("Dia da semana inválido")
}

//ex6
let eventos = ["Festa junina", "Semana da tecnologia", "Feira de profissões"]
let evento = eventos[0];
switch(evento){
    case "Semana da tecnologia":
        console.log("Semana da tecnologia ocorrerá em 10/08/24")
        break;
    case "Festa junina":
        console.log("Festa junina ocorrerá em 20/06/24")
        break;
    case "Feira de profissões":
        console.log("Feira de profissões ocorrerá em 15/09/24")
        break;
    default:
        console.log("Evento não encontrado")
}

//ex7




