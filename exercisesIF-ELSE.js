//exercícios IF-ELSE
//ex1
let notasAluno1 = [10, 6, 5, 6, 7, 8];

let calculaMedia = notasAluno1.reduce((acumulador, nota) => acumulador + nota, 0) / notasAluno1.length

if(calculaMedia >= 6){
    console.log(`A média do aluno é  ${calculaMedia}, logo o aluno foi aprovado.`);
} else{
    console.log(`A média do aluno é ${calculaMedia}, logo o aluno está de recuperação`);
}

//ex2
let possivelAluno = {
    nome: "João",
    idade: 18,
}
if(possivelAluno.idade >= 16){
    console.log(`${possivelAluno.nome} pode se inscrever!`)
}  else{
    console.log(`${possivelAluno.nome} não tem idade suficiente para se inscrever!`)
}

//ex3
let materialDidatico = 95

if (materialDidatico > 50){
    console.log(`O material didático custa ${materialDidatico}, porém com desconto sairá por ${materialDidatico * 0.9}`)
} else{
    console.log(`O material didático custa ${materialDidatico}`)
}
//ex4
let presençaAluno = 80

if(presençaAluno >= 75){
    console.log(`O aluno tem ${presençaAluno}% de presença, logo está aprovado`)
} else {
    console.log(`O aluno tem ${presençaAluno}% de presença, portanto, está reprovado`)
}

//ex5
let alunoT = {
    nome: "Pietro",
    turno: "Manhã"
}

if(alunoT.nome === "Thiago" && alunoT.turno === "Manhã"){
    console.log(`Bom dia ${alunoT.nome}! Você está no turno da ${alunoT.turno}`)
} else if (alunoT.nome === "Thiago" && alunoT.turno === "Tarde"){
    console.log(`Boa tarde ${alunoT.nome}! Você está no turno da ${alunoT.turno}`)
} else if (alunoT.nome === "Thiago" && alunoT.turno === "Noite"){
    console.log(`Boa noite ${alunoT.nome}! Você está no turno da`)
} else{
    console.log(`Olá ${alunoT.nome}! Seu turno ainda está indefinido`)
}

//ex6
let notasAlunx = [6, 3, 7];
let mediaAlunx1 = notasAlunx.reduce((acumulador, nota) => acumulador + nota, 0) / notasAlunx.length
let mediaAlunx = mediaAlunx1.toFixed(2);
if(mediaAlunx >= 6){
    console.log(`A média do aluno é ${mediaAlunx}, logo o aluno está aprovado`)
} else if(mediaAlunx > 4 &&  mediaAlunx < 6){
    console.log(`A média do aluno é ${mediaAlunx}, logo o aluno precisará fazer recuperação`)
} else {
    console.log(`A média do aluno é ${mediaAlunx}, logo o aluno está reprovado`)
}

//ex7
let equipamentosLaboratorio = [
    {equipamento: "Mouse", quantidade: 12},
    {equipamento: "Computador", quantidade: 8},
    {equipamento: "Impressora", quantidade: 2},
    {equipamento: "Carregadores", quantidade: 12},
    {equipamento: "Puffs", quantidade: 2}
]

equipamentosLaboratorio.forEach(item => {if(item.quantidade < 10){
    console.log(`Repor estoque de ${item.equipamento}`)
}else{
    console.log(`Estoque suficiente de ${item.equipamento}`)
}})

//ex8
let alunos = [
    {nome: "João", nota: 7.5},
    {nome: "Maria", nota: 8.5},
    {nome: "Pedro", nota: 5},
]

alunos.forEach(item => {if(item.nota >= 8){
    console.log(`${item.nome} teve um desempenho Excelente!`)
} else if(item.nota >= 6  && item.nota <= 7.9){
    console.log(`${item.nome} teve um desempenho Bom!`)
} else{
    console.log(`${item.nome} precisa Melhorar!`)
}})

//ex9
let alunoM = "Matriculado"
let curso = 399
let cursoComDesconto = 399 * 0.8
let cursoComDesconto1 = cursoComDesconto.toFixed(2);

if(alunoM === "Matriculado"){
    console.log(`O curso custa R$399, mas para alunos sai por R$${cursoComDesconto1}`)
}else{
    console.log(`O curso custa R$399`)
}

//ex10













