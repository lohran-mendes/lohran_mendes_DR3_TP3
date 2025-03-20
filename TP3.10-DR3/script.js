// Formulário de Quiz com Soma de Pontuação

// Crie no arquivo html um formulário, contendo três questões de múltipla escolha usando radio button, cada pergunta/questão deverá ter 4 respostas para o usuário escolher sua opção. Crie também um botão que ao ser apertado, verifique os campos marcados e a cada resposta correta, some 1 à pontuação total. Exiba a pontuação em um alerta.

const form = document.querySelector("form");
let nota = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const primeiraQuestao = document.querySelector(
    'input[name="primeiraQuestao"]:checked'
  );
  const segundaQuestao = document.querySelector(
    'input[name="segundaQuestao"]:checked'
  );
  const terceiraQuestao = document.querySelector(
    'input[name="terceiraQuestao"]:checked'
  );
  if (primeiraQuestao && primeiraQuestao.value === "C") {
    nota++;
  }
  if (segundaQuestao && segundaQuestao.value === "B") {
    nota++;
  }
  if (terceiraQuestao && terceiraQuestao.value === "C") {
    nota++;
  }
  alert(`A sua pontuação total é ${nota} de um total de 3!`);
  nota = 0;
  form.reset();
});
