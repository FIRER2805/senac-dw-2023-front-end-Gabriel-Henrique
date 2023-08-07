// cep tesdado: 88095750
async function buscaEndereco()
{
    let url = `https://viacep.com.br/ws/${buscaCep()}/json/`;
    let json = await fetch(url)
        .then(resposta => resposta.json())
        .catch(erro => alert("cep inexistente"));
    mostraEndereco(json);
}

function buscaCep(){
    let cep = document.querySelectorAll('[type="text"]')[0].value;
    if(!cep.trim() == "" && !isNaN(cep))
        return cep;
}

function mostraEndereco(json){
    let campos = document.getElementById("endereco").children;
    campos[0].innerHTML = `Rua: ${json.logradouro}`;
    campos[1].innerHTML = `Bairro: ${json.bairro}`;
    campos[2].innerHTML = `Cidade: ${json.localidade}`;
    campos[3].innerHTML = `Estado: ${json.uf}`;
}

function limpaCampos(){
    document.getElementById("cepTXT").value = "";
    let campos = document.getElementById("endereco").children;
    for(let elemento of campos){
        elemento.innerHTML = "";
    }
}