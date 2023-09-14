import { Produto } from "./interfaces/Produto";
import { ProdutoSeletor } from "./interfaces/ProdutoSeletor";

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

function montaTabela(produtos : Array<Produto>){
    limpaTabela();
    const tabela = document.getElementsByTagName("tbody")[0];
    for(let i = 0; i < produtos.length; i++){
        let tr : Element = document.createElement("tr");
        montaLinha(tr, produtos[i]);
        tabela.appendChild(tr);
    }
}
/**
 * Cria uma linha na tabela com informações de um produto
 * @method
 * @param {Element} elementoPai
 * @param {Produto} produto 
 */
function montaLinha(elementoPai : Element, produto : Produto){
    // criando os elementos
    let tdId = document.createElement("td");
    let tdNome = document.createElement("td");
    let tdValor = document.createElement("td");
    let tdPeso = document.createElement("td");
    let tdDataCadastro = document.createElement("td");

    // pegando todos os valores que precisamos do json
    let {id, nome, valor, peso, dataCadastro} : Produto = produto;

    // preenchendo os elementos com as informações
    tdId.innerHTML = String(id);
    tdNome.innerHTML = String(nome);
    tdValor.innerHTML = String(valor);
    tdPeso.innerHTML = String(peso);
    tdDataCadastro.innerHTML = String(dataCadastro);

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
 * @returns {ProdutoSeletor}
 */
function montaBody(){
    let inputs : NodeListOf<HTMLInputElement> = document.querySelectorAll(".form-control");
    let parametros : ProdutoSeletor = {
    nome : inputs[0].value,
    pesoMaximo : inputs[1].value,
    pesoInicial : inputs[2].value,
    valorMaximo : inputs[3].value,
    dataCadastroInicial: inputs[4].value,
    dataCadastroMaximo: inputs[5].value,
    cnpjFabricante: inputs[6].value
    };
    return parametros;
}

/**
 * Limpa a tabela
 * @method
 * @todo Arrumar este método
*/
function limpaTabela(){
    let body : HTMLElement = document.getElementsByTagName("tbody")[0];
    while(body.firstChild){
        body.lastChild?.remove();
    }
}