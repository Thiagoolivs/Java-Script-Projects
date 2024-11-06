let usuario = {
    nome: "Jhonny",
    time: "Flamengo"
}


let mensagemDeBoasVindas = "Bem-vindo, torcedor do Fluminense";
let mensagemDeBoasVindas1 = "Bem-vindo, torcedor do Flamengo";
let mensagemDeBoasVindas2 = "Bem-vindo, torcedor do Vasco";
let mensagemDeBoasVindas3 = "Bem-vindo, torcedor do Corinthians";
let mensagemDeBoasVindas4 = "Bem-vindo, torcedor do Cruzeiro";
let mensagemDeBoasVindasGeral = "Bem-vindo, amante do esporte!"


switch (usuario.time){
    case "Fluminense":
        console.log(mensagemDeBoasVindas);
        break;
    case "Flamengo":
        console.log(mensagemDeBoasVindas1);
        break;
    case "Vasco":
        console.log(mensagemDeBoasVindas2)
        break;
    case "Corinthians":
        console.log(mensagemDeBoasVindas3);
        break;
    case "Cruzeiro":
        console.log(mensagemDeBoasVindas5);
        break;
    default:
        console.log(mensagemDeBoasVindasGeral)
}