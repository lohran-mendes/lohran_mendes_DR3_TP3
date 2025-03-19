// Formulário Estilizado com Validação de Campos Obrigatórios

// Crie um arquivo HTML que contenha um formulário estilizado com CSS. O formulário deve ter campos para nome, e-mail e uma mensagem. Estilize os campos para que tenham bordas arredondadas e mudem de cor ao receber foco, faça também a validação de todos os campos do formulário, fazendo-os obrigatórios para o envio.

const entradas = document.querySelectorAll(".entrada");
const form = document.querySelector("form");

entradas.forEach((entrada) => {
  entrada.addEventListener("focus", (event) => {
    event.target.classList.add("foco");
  });
  entrada.addEventListener("blur", (event) => {
    event.target.classList.remove("foco");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validacao();
});

function validacao() {
  const nome = entradas[0].value;
  const email = entradas[1].value;
  const texto = entradas[2].value;

  if (nome.trim().length === 0) {
    return alert("É necessário preencher o campo de nome");
  } else if (email.trim().length === 0) {
    return alert("É necessário preencher o campo de email");
  } else if (texto.trim().length === 0) {
    return alert("É necessário preencher o campo de texto");
  } else {
    alert("Formulário enviado!");
    entradas[0].value = "";
    entradas[1].value = "";
    entradas[2].value = "";
  }
}
