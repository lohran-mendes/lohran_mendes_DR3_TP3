// Formulário com Mensagem de Seleção e Exibição de Opção Escolhida

// Crie uma página HTML com um formulário, nele crie um campo de seleção (select). Quando o campo de seleção receber foco, exiba uma mensagem "Selecione uma opção". Quando o campo de seleção mudar, exiba a opção escolhida em um elemento "p" abaixo.
const form = document.querySelector("form");
const select = document.querySelector("select");

select.addEventListener("focus", insereResposta);
select.addEventListener("blur", insereResposta);
select.addEventListener("change", () => select.blur());

function insereResposta() {
  const mensagem = document.querySelectorAll(".mensagem");
  if (mensagem.length > 0) {
    mensagem.forEach((m) => m.remove());
  }
  if (document.activeElement === select) {
    const newParagraph = document.createElement("p");
    newParagraph.classList.add("mensagem");
    newParagraph.innerText = "Selecione uma fruta";
    form.insertBefore(newParagraph, select);
  } else {
    const newParagraph = document.createElement("p");
    const valorSelecionado = select.value;
    newParagraph.classList.add("mensagem");
    newParagraph.innerText = `A fruta selecionada é: ${valorSelecionado}`;
    form.appendChild(newParagraph);
    select.blur();
  }
}
