// cep tesdado: 88095750
const INPUTS_ENDERECO = "form.endereco input";

async function buscaEndereco()
{
    let url = `https://viacep.com.br/ws/${buscaCep()}/json/`;
    let json = await fetch(url)
        .then(resposta => resposta.json())
        .catch(() => alert("cep inexistente"));
    mostraEndereco(json);
}

function buscaCep(){
    let cep = document.querySelector("input#cepTXT").value;
    if(!cep.trim() == "" && !isNaN(cep))
        return cep;
}

function mostraEndereco(json){
    let campos = document.querySelectorAll(INPUTS_ENDERECO);
    campos[0].value = json.logradouro;
    campos[1].value = json.bairro;
    campos[2].value = json.localidade;
    campos[3].value = json.uf;
}

function limpaCampos(){
    document.getElementById("cepTXT").value = "";
    let campos = document.querySelectorAll(INPUTS_ENDERECO);
    for(let elemento of campos){
        elemento.value = "";
    }
}