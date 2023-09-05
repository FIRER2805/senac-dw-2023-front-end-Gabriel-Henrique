async function buscaTodos()
{
    let produtosRaw = await fetch("http://localhost:8080/api/produtos");
    return await produtosRaw.json();
}

async function montaTabela()
{
    let tabela = document.getElementById("tabela");
    let produtos = await buscaTodos();
    console.log(produtos);
    produtos.forEach(produto => {
        let registro = document.createElement("td");
        registro.innerHTML(produto.nome);
        tabela.appendChild(registro);
    });
}