// Mensagem inicial (pode usar como commit)
console.log("Bem-vindo ao Portal de Tecnologia!");

// Botão de interação
function mostrarMensagem() {
    alert("Obrigado por visitar nosso Portal de Tecnologia!");
}

// Lista dinâmica de tendências
function adicionarItem() {
    const lista = document.getElementById("lista");

    const item = document.createElement("li");
    item.textContent = "Nova tendência: Inteligência Artificial";

    lista.appendChild(item);
}
