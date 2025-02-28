//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    let nomesAmigos = document.getElementById("amigo").value;
    if (nomesAmigos.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    listaAmigos.push(nomesAmigos);
    document.getElementById("amigo").value = "";
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function selecionarAmigoAleatorio() {
    if (listaAmigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}


