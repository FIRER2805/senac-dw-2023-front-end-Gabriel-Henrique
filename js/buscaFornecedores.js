const URL = "localhost:8080/api/fornecedores"
async function buscaFornecedores(){
    let raw = await fetch(URL)
    let fornecedoresJson = await raw.json();
    return fornecedoresJson;
}

async function montaTabela(){
    let endereco = await buscaFornecedores();
    let {id, nome, cnpj, cidade, cep, uf} = endereco;
    let tabela = document.getElementById("tabelaFornecedores");
    let tbody = document.createElement("tbody");
    for(let i = 0; i < endereco.length; i++){
        let linha = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdCnpj = document.createElement("td");
        let tdCidade = document.createElement("td");
        let tdCep = document.createElement("td");
        let tdUf = document.createElement("td");
        tdId.innerHTML = id;
        tdNome.innerHTML = nome;
        tdCnpj.innerHTML = cnpj;
        tdCidade.innerHTML = cidade;
        tdCep.innerHTML = cep;
        tdUf.innerHTML = uf;
        linha.appendChild(tdId);
        linha.appendChild(tdNome);
        linha.appendChild(tdCnpj);
        linha.appendChild(tdCep);
        linha.appendChild(tdCidade);
        linha.appendChild(tdUf);
        tbody.appendChild(linha);
    }
    document.getElementById("id").appendChild(tbody);
}