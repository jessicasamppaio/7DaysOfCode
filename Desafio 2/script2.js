const nome = prompt('Qual seu nome?');
const idade = prompt('Qual sua idade?');
const linguagem = prompt('Qual linguagem de programação você está aprendendo?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

function perguntaExtra(linguagem) {
    const adicional = prompt(`Você gosta de estudar ${linguagem}? Digite 1 se SIM e 2 se NÃO.`);
    if (adicional === '1') {
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    } else if (adicional === '2') {
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    } else {
        alert('Opção inválida. Digite 1 para SIM ou 2 para NÃO.');
    }
}

perguntaExtra(linguagem);