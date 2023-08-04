function buscaEndereco(cep)
{
    console.log(cep);
}

function buscaCep(event, form){
    event.preventDefault();
    let cep = document.querySelectorAll('[type="text"]')[0].value;
    if(!cep.trim() == "" && !isNaN(cep))
        buscaEndereco(cep);
}