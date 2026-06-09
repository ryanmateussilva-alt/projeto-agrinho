// Função para Acessibilidade: Altera o tamanho da fonte
function mudarFonte(delta) {
    const corpo = document.body;
    const estilo = window.getComputedStyle(corpo).getPropertyValue('font-size');
    const tamanhoAtual = parseFloat(estilo);
    corpo.style.fontSize = (tamanhoAtual + delta) + 'px';
  }
  
  // Lógica do Mini Quiz
  function verificarResposta(correto, elemento) {
    const feedback = document.getElementById('feedback');
    if (correto) {
      feedback.innerText = "Correto! 🌱 A tecnologia é aliada da natureza.";
      feedback.style.color = "#27ae60";
      elemento.style.backgroundColor = "#27ae60";
    } else {
      feedback.innerText = "Quase lá! Tente pensar no uso eficiente de recursos.";
      feedback.style.color = "#e74c3c";
      elemento.style.backgroundColor = "#e74c3c";
    }
  }
