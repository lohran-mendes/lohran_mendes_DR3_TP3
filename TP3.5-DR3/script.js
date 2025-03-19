// Formulário com Mensagem de Agradecimento

// Crie no arquivo HTML um formulário que solicite o nome e o e-mail do usuário. Ao enviar o formulário, exiba uma mensagem de agradecimento com as informações fornecidas em um alerta.

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = form.querySelector('div input[type="text"]');
  const email = form.querySelector('div input[type="email"]');

  if (!nome.value.trim().length > 0) {
    return alert("É necessário preencher o nome!");
  } else if (!email.value.trim().length > 0) {
    return alert("É necessário preencher o email!");
  } else alert("Obrigado por enviar as informações!");
  nome.value = "";
  email.value = "";
});
