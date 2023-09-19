function pegaCep(){
    let cep = document.getElementById("cep").value;
    return cep;
}

function montaEndereco(){
    buscaEndereco(pegaCep()).then(endereco => {
        console.log(endereco);
        let cidade = document.getElementById("cidade");
        let uf = document.getElementById("uf");
        cidade.disabled = false;
        uf.disabled = false;
        cidade.value = endereco.localidade;
        uf.value = endereco.uf;
    });
}