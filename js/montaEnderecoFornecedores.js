import { buscaEndereco } from "./buscaEndereco";

function pegaCep(){
    let cep = document.getElementById("cep").value;
    return cep;
}

function montaEndereco(event){
    event.preventdefault();
    buscaEndereco(pegaCep()).then(endereco => {
        document.getElementById().innerHTML = endereco.localidade;
        document.getElementById().innerHTML = endereco.uf;
    });
}