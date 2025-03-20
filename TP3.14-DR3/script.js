// Grupo - Event Listener 1

// No arquivo script.js, siga as etapas abaixo:
// Adicione um event listener de keydown, ao elemento <input id=“texto”>.
// Verifique se o usuário apertou a tecla Enter enquanto está com o input selecionado. Caso tenha apertado a tecla, o conteúdo do elemento <input> será copiado para o span de id "nome". Após isso limpe o conteúdo do elemento <input>.
// Link: https://codesandbox.io/p/sandbox/5dhfcy
// Observações:

// Não faça as alterações manualmente no arquivo index.html.
// Utilize o DOM para resolver o exercício.
// Utilize o `textContent`, para alterar o `conteúdo` do elemento <span>.
const input = document.querySelector("#texto");
const nome = document.querySelector("#nome");
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    nome.textContent = input.value;
    input.value = "";
  }
});
