const listaDeCompras = {
    frutas: [],
    laticineos: [],
    congelados: [],
    outros: [],
};

function adicionarItem() {
    const item = prompt('Qual item deseja inserir?');
    const categoria = prompt('A qual categoria esse item pertence? (frutas, laticínios, congelados, outros)').toLowerCase();

    if (categoria in listaDeCompras) {
        listaDeCompras[categoria].push(item);
    } else {
        listaDeCompras.outros.push(item);
    }
}

function removerItem(){
    let itensLista = '';
    for (const categoria in listaDeCompras){
        listaDeCompras[categoria].forEach(item =>{
            itensLista += item + '\n'
        })
    }

    const itemRemocao = prompt('Itens da lista: \n' + itensLista + '\nQual item deseja remover?')
    let encontrado = false;
    for (const categoria in listaDeCompras){
        const index = listaDeCompras[categoria].indexOf(itemRemocao)
        if (index !== -1) {
            listaDeCompras[categoria].splice(index, 1);
            alert('Item removido: ' + itemParaRemover);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert('Não foi possível encontrar o item dentro da lista!');
    }
}

let adicionarMaisItens = true;
while (adicionarMaisItens) {
    adicionarItem(); 

    const resposta = prompt('Deseja adicionar mais itens à lista? Responda com sim ou não');
    if (resposta.toLowerCase() === 'não' || resposta.toLowerCase() === 'nao') {
        adicionarMaisItens = false;
    } else if (resposta.toLowerCase() !== 'sim') {
        alert('Resposta inválida. Por favor, responda com sim ou não para continuar.');
    }
}

const body = document.querySelector('body');
        for (const categoria in listaDeCompras) {
            if (listaDeCompras[categoria].length > 0) {
                const divCategoria = document.createElement('div');
                divCategoria.classList.add('categoria');
                divCategoria.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1) + ': ';
                
                const ulItens = document.createElement('ul');
                listaDeCompras[categoria].forEach(item => {
                    const liItem = document.createElement('li');
                    liItem.textContent = item;
                    ulItens.appendChild(liItem);
                });
                
                divCategoria.appendChild(ulItens);
                body.appendChild(divCategoria);
            }
        }
