export async function buscaEndereco(cep)
{
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let json = await fetch(url)
        .then(resposta => resposta.json())
        .catch(() => alert("cep inexistente"));
    return json;
}