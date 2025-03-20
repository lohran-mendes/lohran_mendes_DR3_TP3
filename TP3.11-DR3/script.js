// Formulário com Aceitação de Termos e Condições

// Crie no arquivo html um formulário e nele crie um título e um parágrafo, simulando um campo obrigatório que deve ser lido e aceito. Para isso, crie um campo de “checkbox”, um botão e faça com que esse form só seja enviado se o usuário marcar o checkbox, aceitando assim os “termos e condições”. Mostre um alerta ao usuário se puder ou não enviar o form.
const form = document.querySelector("form");
const termoLido = document.querySelector("#termoLido");
const termoAceito = document.querySelector("#termoAceito");

termoAceito.addEventListener("click", () => {
  if (!termoLido.checked) {
    alert("É necessário ler os termos antes de aceita-los.");
    termoAceito.checked = false;
  }
});

form.addEventListener("submit", (event) => {
  if (termoAceito.checked && termoLido.checked) {
    alert("Os termos foram aceitos!");
  } else {
    event.preventDefault();
    alert("É necessário aceitar todos os termos antes de enviar!");
  }
});
