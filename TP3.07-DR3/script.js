// Exibição de Letra Pressionada no Campo de Texto

// Crie no arquivo HTML um campo de texto e um elemento "p". Cada vez que o usuário pressionar uma tecla, exiba a letra pressionada em um parágrafo abaixo do campo.
const campoTexto = document.createElement("input");
campoTexto.type = "text";
const letraDigitada = document.createElement("p");

document.body.appendChild(campoTexto);
document.body.appendChild(letraDigitada);

campoTexto.addEventListener("keydown", (event) => {
  letraDigitada.innerText = event.key;
});
