function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return 'Não é possível dividir por zero';
    } else {
        return a / b;
    }
}

function calcular() {
    while (true) {
        const opcao = prompt('\nOpções disponíveis:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair\n\nEscolha a operação desejada (1/2/3/4/5):');

        if (opcao === '5') {
            alert('Até mais!');
            break;
        }

        let num1 = parseFloat(prompt('Digite o primeiro número:'));
        let num2 = parseFloat(prompt('Digite o segundo número:'));

        switch (opcao) {
            case '1':
                alert('Resultado da soma: ' + soma(num1, num2));
                break;
            case '2':
                alert('Resultado da subtração: ' + subtracao(num1, num2));
                break;
            case '3':
                alert('Resultado da multiplicação: ' + multiplicacao(num1, num2));
                break;
            case '4':
                alert('Resultado da divisão: ' + divisao(num1, num2));
                break;
            default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

calcular();
