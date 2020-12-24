const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector(`#${campo}`)){
            document.querySelector(`#${campo}`).value = result[campo];
        }
    }
}

// blur representa que o campo deixou de ser focado
cep.addEventListener("blur",(e)=>{
    // remove o "-" do campo cep
    let search = cep.value.replace("-","");
    // uma permisão para usar a api
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    // url da api + o valor do cep , a permissao
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    // .then() é o que o programa deve fazer caso o resultado seja positivo
    .then(response=>{response.json()    // response.json() converte a resposta da api para um json
        .then(data => showData(data))}) // chama a funcao showData e envia o resultado para ela
    .catch(e => console.log("Deu erro: " + e.message)); // .catch() é o que o programa deve fazer caso o resultado seja negativo
    console.log(cep.value);
});