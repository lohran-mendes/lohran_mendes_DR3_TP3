// Detecção de Letra no Campo de Texto

// Crie no arquivo HTML um formulário com um campo de texto. Quando o usuário digitar a letra "A", exiba uma mensagem dizendo "Você pressionou a letra A". Caso contrário, exiba uma mensagem que diga "Você pressionou uma letra diferente da solicitada"..
const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    alert("Você pressionou a letra A");
    input.value = "";
  } else {
    alert("Você pressionou uma letra diferente da solicitada");
    input.value = "";
  }
});
