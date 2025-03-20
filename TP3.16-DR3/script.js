// Grupo - Event Listener 3

// No arquivo script.js, siga as etapas abaixo:

// Adicione um event listener de click, no elemento <ul id=“lista”>
// Ao clicar neste elemento <ul>, mude:
// O conteúdo do elemento <li> de texto Acre, para o texto Amapá.
// Sua cor de fundo para azul.
// Link: https://codesandbox.io/p/sandbox/v2g6jr
// Observações:

// Não faça as alterações manualmente no arquivo index.html.
// Utilize o DOM para resolver o exercício.
// Utilize o “innerText”, para alterar o `conteúdo` do elemento <span>.
// Assim que terminar, salve todos os links para os exercícios realizados em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR3_TP3.PDF” e poste como resposta a este TP.

const lista = document.querySelector("#lista");

lista.addEventListener("click", () => {
  const lis = document.querySelectorAll("li");
  const acre = Array.from(lis).filter(
    (li) => li.innerText.toLowerCase() === "acre"
  );
  acre.forEach((resultado) => {
    resultado.innerText = "Amapá";
    resultado.style.width = "min-content";
    resultado.style.backgroundColor = "rgba(10, 211, 194, 0.493)";
  });
});
