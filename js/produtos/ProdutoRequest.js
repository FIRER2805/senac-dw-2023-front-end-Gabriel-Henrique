function buscaTodos(){
    let init = {
        method:"post",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(montaBody())
    }
    fetch("http://localhost:8080/api/produtos/comFiltro",init)
    .then(produtos => produtos.json())
    .then(produtosJson => montaTabela(produtosJson))
}

function montaTabela(produtos){
    limpaTabela();
    const tabela = document.getElementsByTagName("table")[0];
    for(let i = 0; i < produtos.length; i++){
        let tr = document.createElement("tr");
        montaLinha(tr, produtos[i]);
        tabela.appendChild(tr);
    }
}
/**
 * Cria uma linha na tabela com informações de um produto
 * @method
 * @param {Element} elementoPai
 * @param {produto} produto 
 */
function montaLinha(elementoPai, produto){
    // criando os elementos
    let tdId = document.createElement("td");
    let tdNome = document.createElement("td");
    let tdValor = document.createElement("td");
    let tdPeso = document.createElement("td");
    let tdDataCadastro = document.createElement("td");

    // pegando todos os valores que precisamos do json
    let {id, nome, valor, peso, dataCadastro} = produto;

    // preenchendo os elementos com as informações
    tdId.innerHTML = id;
    tdNome.innerHTML = nome;
    tdValor.innerHTML = valor;
    tdPeso.innerHTML = peso;
    tdDataCadastro.innerHTML = dataCadastro;

    // colocando todos os valores na linha da tabela
    elementoPai.appendChild(tdId);
    elementoPai.appendChild(tdNome);
    elementoPai.appendChild(tdValor);
    elementoPai.appendChild(tdPeso);
    elementoPai.appendChild(tdDataCadastro);
}

/**
 * Pega todos os dados do formulário e monta um objeto com os parametros
 * da requisição para a busca de produtos
 * @function
 * @returns {requestBody}
 */
function montaBody(){
    let inputs = document.querySelectorAll(".form-control");
    let parametros = {nome : inputs[0].value,
    valorMaximo : inputs[1].value,
    pesoInicial : inputs[2].value,
    pesoMaximo : inputs[3].value,
    dataCadastroInicial: inputs[4].value,
    dataCadastroMaximo: inputs[5].value
    };
    return parametros;
}

/**
 * Limpa a tabela
 * @method
 * @todo Arrumar este método
*/
function limpaTabela(){
    let linhas = document.getElementsByTagName("tr");
    for(let i = 1; i < linhas.length; i++){
        linhas[i].remove();
    }
}