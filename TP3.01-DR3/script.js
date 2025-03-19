// Caixa Interativa com Hover e Clique

// Crie no arquivo HTML a exibição de uma caixa colorida que muda de cor quando o mouse passa sobre ela (hover) e que exiba uma mensagem quando o mouse é clicado dentro dessa mesma caixa.

const box = document.createElement("div");

box.classList.add("box");
box.style.marginTop = "15px";
box.style.height = "200px";
box.style.width = "200px";
box.style.cursor = "pointer";

box.addEventListener("click", () => {
  alert("A caixa foi clicada!");
});

document.body.appendChild(box);
