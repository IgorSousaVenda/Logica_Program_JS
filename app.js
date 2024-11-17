alert("Bem vindo ao Jogo Adivinha o numero!");
let mensagemDeBoasVindas = 'Boas vindas ao App';
alert('mensagemDeBoasVindas');
let numeroSecreto = 6;
let valorUser = prompt("Digite um numero de 0 á 10");

if (valorUser == numeroSecreto)
{
    console.log(" Acertou, parabéns \n", numeroSecreto, "é o valor secreto");
}
else if (valorUser > numeroSecreto)
{
    console.log(" Errado! \n Dica: Número Menor");
}
else 
{
        console.log(" Errado! \n Dica: Número Maior");
}