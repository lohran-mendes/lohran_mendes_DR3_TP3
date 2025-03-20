// Grupo - Drag Drop 2

// Utilizando a explicação do exercício anterior no CodeSandbox como base, no arquivo script.js crie um programa, que permita:

// Através do click do botão de id criar, você deve criar e adicionar elementos <div class='caixinha'> no elemento div de id novo.
// O novo elemento criado deve possuir uma das classes de cores que estão no arquivo CSS (corVerde, corRoxa, corLaranja ou corVermelha).
// Permitir arrastar os itens criados para os elementos <div class='container'>.
// Permitir arrastar os elementos div de classe caixinha entre os elementos <div class='container'>.
// Link: https://codesandbox.io/p/sandbox/r2p7ww
// Observação: Faça as modificações necessárias no arquivo “index.html” para resolver o exercício.

const containerDeCaixinha = document.querySelector(".container-de-caixinhas");
const containers = document.querySelectorAll("#container > div");
const cores = ["green", "purple", "orange", "red"];

let caixinhas = document.querySelectorAll(".caixinha");
let caixaCriada = 0;
let caixaAtual;

function adicionaEventosCaixinha() {
  caixinhas.forEach((caixa) => {
    caixa.addEventListener("drag", () => {
      caixa.style.opacity = 0.4;
      caixaAtual = caixa;
    });
    caixa.addEventListener("dragend", () => {
      caixa.style.opacity = 1;
    });
  });
}

containers.forEach((container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    container.style.backgroundColor = "rgba(0, 0, 0, 0.15)";
  });
  container.addEventListener("dragleave", (event) => {
    event.preventDefault();
    container.style.backgroundColor = "transparent";
  });
  container.addEventListener("drop", (event) => {
    event.preventDefault();
    container.appendChild(caixaAtual);
    container.style.backgroundColor = "transparent";
  });
});

containerDeCaixinha.addEventListener("dragover", (event) => {
  event.preventDefault();
});

containerDeCaixinha.addEventListener("drop", (event) => {
  event.preventDefault();
  containerDeCaixinha.appendChild(caixaAtual);
});

function novaCaixa() {
  if (caixaCriada >= 4) caixaCriada = 0;
  const caixaNova = document.createElement("div");
  caixaNova.classList.add("caixinha");
  caixaNova.draggable = true;
  caixaNova.style.backgroundColor = cores[caixaCriada++];
  containerDeCaixinha.appendChild(caixaNova);
  caixinhas = document.querySelectorAll(".caixinha");
  adicionaEventosCaixinha();
}
adicionaEventosCaixinha();
