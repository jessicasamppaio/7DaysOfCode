const listaDeCompras = {
    frutas: [],
    laticineos: [],
    congelados: [],
    outros: [],
};

function adicionarItem() {
    const item = prompt('Qual item deseja inserir?');
    const categoria = prompt('A qual categoria esse item pertence? (frutas, laticínios, congelados, doces, outros)').toLowerCase();

    if (categoria in listaDeCompras) {
        listaDeCompras[categoria].push(item);
    } else {
        listaDeCompras.outros.push(item);
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
