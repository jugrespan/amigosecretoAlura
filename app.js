//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//função para adicionar pessoas
function adicionarAmigo() {
    let amigoNome =  document.querySelector("#amigo").value;
    if (amigoNome === "") {
        alert("Por favor insira um nome");
        return 
    }
    amigos.push(amigoNome);
    document.querySelector("#amigo").value = "";
}



