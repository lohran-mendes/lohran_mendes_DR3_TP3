// Exibição de Valor ao Perder Foco no Campo de Texto

// Crie no arquivo HTML um formulário e nele um campo de texto. Quando o campo de entrada perder o foco, exiba o valor digitado em um parágrafo abaixo do campo de texto.
const texto = document.getElementById("texto");
console.log(texto);
texto.addEventListener("blur", () => {
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }
  const novoParagrafo = document.createElement("p");
  novoParagrafo.innerText = texto.value;
  document.body.appendChild(novoParagrafo);
});
