mostraHoras();

setInterval(mostraHoras, 1000);

function mostraHoras(){
    const date = new Date();
    let hora = formataCampo(date.getHours());
    let minuto = formataCampo(date.getMinutes());
    let segundo = formataCampo(date.getSeconds());
    document.getElementById("relogio").innerHTML = `${hora} : ${minuto} : ${segundo}`;
}

function formataCampo(campo){
    return campo.toLocaleString("pt-BR",{minimumIntegerDigits: 2});
}