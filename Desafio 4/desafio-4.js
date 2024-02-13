const numeroSecreto = Math.floor(Math.random() * 11);
let chute = "";

for(let contador = 0; contador < 3; contador++){
    chute = prompt('Tente adivinhar um número entre 1 e 10')
if (chute == numeroSecreto){
    alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto}`)
    break;
}else{
    alert('Você errou!')
}
if(contador === 2){
alert(`Número de tentativas esgotado! O número secreto era ${numeroSecreto}`)
}
}