function buscaTodos(){
    fetch("http://localhost:8080/api/produtos")
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

// TODO - arrumar este método
function limpaTabela(){
    let linhas = document.getElementsByTagName("tr");
    for(let i = 1; i < linhas.length; i++){
        linhas[i].remove();
    }
}