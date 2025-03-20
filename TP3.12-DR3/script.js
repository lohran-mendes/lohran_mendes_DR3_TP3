// Grupo - Drag Drop 1

// Utilizando a explicação do CodeSandbox como base, no arquivo script.js crie um programa, que permita:

// Mover os elementos div de classe “caixinha” para os elementos <div class='container'>
// Arrastar os elementos div de classe “caixinha” entre os elementos <div class='container'>
// Link: https://codesandbox.io/p/sandbox/2n7w43
// Observação: Faça as modificações necessárias no arquivo “index.html” para resolver o exercício.

const containers = document.querySelectorAll(".container");
const caixinha = document.querySelector(".caixinha");

containers.forEach((container) => {
  caixinha.addEventListener("drag", () => {
    caixinha.style.backgroundColor = "rgba(255, 0, 0, 0.445)";
  });
  caixinha.addEventListener("dragend", () => {
    caixinha.style.backgroundColor = "red";
  });
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    container.style.backgroundColor = "rgb(0, 0, 122)";
  });
  container.addEventListener("dragleave", (event) => {
    event.preventDefault();
    container.style.backgroundColor = "blue";
  });
  container.addEventListener("drop", (event) => {
    event.preventDefault();
    container.appendChild(caixinha);
  });
});
