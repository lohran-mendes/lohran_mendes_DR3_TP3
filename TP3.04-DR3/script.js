// Drag-and-Drop de Imagem para Caixa

// Crie no arquivo HTML uma imagem e uma caixa e faça com que o usuário possa arrastar a imagem até ficar sobre a caixa, e quando a imagem for solta na caixa, exiba a imagem dentro da caixa.

const arrastavel = document.getElementById("arrastavel");
const zonaFinal = document.getElementById("zonaFinal");
const zonaInicial = document.getElementById("zonaInicial");
let arrastado;

// drag é ativado continuamente enquanto estou arrastando um elemento, é necessário ter o draggable = 'true'
// arrastavel.addEventListener("drag", () => console.log("arrastando"));

// dragstart é ativado apenas uma vez quando eu inicio o evento de arrastar
arrastavel.addEventListener("dragstart", (event) => {
  arrastado = event.target;
  event.target.classList.add("arrastando");
});

// dragend é ativado apenas uma vez quando eu termino o evento de arrastar
arrastavel.addEventListener("dragend", (event) => {
  event.target.classList.remove("arrastando");
});

// dragover é ativado continuamente enquanto estou arrastando um elemento em cima deste, tenho que ativar o preventDefault para previnir que ele faça o comportamento padrão de ativar o dragleave ao soltar, como se eu tivesse saindo de cima do elemento e soltando ele. faço isso para conseguir ativar o drop
zonaFinal.addEventListener("dragover", (event) => {
  event.preventDefault();
  // console.log("Arrastando em cima de mim!");
});

zonaInicial.addEventListener("dragover", (event) => {
  event.preventDefault();
  // console.log("Arrastando em cima de mim!");
});

// dragenter é ativado apenas uma vez quando eu arrasto um elemento para cima deste, quando entro nele
zonaFinal.addEventListener("dragenter", (event) => {
  // console.log("entrando em cima de mim!");
  event.target.classList.add("arrastaEmCima");
});

// dragleave é ativado apenas uma vez quando eu arrasto um elemento para fora deste, quando saio dele
zonaFinal.addEventListener("dragleave", (event) => {
  // console.log("saindo de cima de mim!");
  event.target.classList.remove("arrastaEmCima");
});

zonaFinal.addEventListener("drop", (event) => {
  // Impedir ação padrão (abrir como link para alguns elementos)
  event.preventDefault();

  if (event.target.classList.contains("zonaArrastavel")) {
    event.target.classList.remove("arrastaEmCima");
    event.target.appendChild(arrastado);
  }
});

zonaInicial.addEventListener("drop", (event) => {
  // Impedir ação padrão (abrir como link para alguns elementos)
  event.preventDefault();

  if (event.target.classList.contains("zonaArrastavel")) {
    event.target.classList.remove("arrastaEmCima");
    event.target.appendChild(arrastado);
  }
});

//Não utilizei inteligência artificial, os comentários e os exemplos de uso são de autoria minha que fiz os rascunhos para melhor entendimento do evento de drag, usei o https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event como fonte de estudo.
