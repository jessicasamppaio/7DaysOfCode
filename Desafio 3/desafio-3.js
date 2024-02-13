let area = prompt('Qual area deseja seguir, back-end ou front-end?');

if(area === 'front-end'){
let framework = prompt('Você deseja aprender React ou Vue?')
let especializacao = prompt('Deseja se especializar em front-end ou se tornar full-stack?')
if(especializacao === 'front-end'){
document.body.innerHTML = 'Você escolher se especializar em front-end.';
}else{
    document.body.innerHTML = 'Opção não reconhecida.'
}
}else if (area === 'back-end'){
    let linguagem = prompt('Você deseja aprender C# ou Java?');
    if(especializacao === 'back=end'){
        document.body.innerHTML = 'Você escolher se especializar em back-end.';
    }else if (especializacao === 'full-stack'){
        document.body;innerHTML = 'Você escolhjeu se tornar full-stack'
    }else {
        document.body.innerHTML = 'Opção não reconhecida.'
        
    }
}