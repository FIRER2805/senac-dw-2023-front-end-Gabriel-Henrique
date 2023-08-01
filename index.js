const prompt = require("prompt-sync")();
let cep = prompt("Informe o cep: ");

async function buscarCep(cep){
    let options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    const promiseConsultaCep = await fetch("https://viacep.com.br/ws/${cep}/json/");

    return await promiseConsultaCep.json();
}

buscarCep(cep);