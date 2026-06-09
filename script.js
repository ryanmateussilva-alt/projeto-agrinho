document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE ACESSIBILIDADE: TAMANHO DA FONTE ---
    let tamanhoFonteAtual = 100; // Porcentagem original
    const elementoBody = document.body;

    document.getElementById('btn-aumentar').addEventListener('click', () => {
        if (tamanhoFonteAtual < 140) { // Limite máximo para não quebrar o layout
            tamanhoFonteAtual += 10;
            elementoBody.style.fontSize = tamanhoFonteAtual + '%';
        }
    });

    document.getElementById('btn-diminuir').addEventListener('click', () => {
        if (tamanhoFonteAtual > 80) { // Limite mínimo
            tamanhoFonteAtual -= 10;
            elementoBody.style.fontSize = tamanhoFonteAtual + '%';
        }
    });

    // --- LÓGICA DE ACESSIBILIDADE: ALTO CONTRASTE ---
    const btnContraste = document.getElementById('btn-contraste');
    btnContraste.addEventListener('click', () => {
        elementoBody.classList.toggle('alto-contraste');
    });

    // --- LÓGICA DO MINI QUIZ EDUCATIVO ---
    const btnEnviarQuiz = document.getElementById('btn-enviar-quiz');
    const areaResultado = document.getElementById('resultado-quiz');

    btnEnviarQuiz.addEventListener('click', () => {
        const form = document.getElementById('form-quiz');
        
        // Captura as respostas selecionadas
        const r1 = form.elements['p1'].value;
        const r2 = form.elements['p2'].value;
        const r3 = form.elements['p3'].value;

        // Validação se o usuário respondeu todas as perguntas
        if (!r1 || !r2 || !r3) {
            areaResultado.className = "resultado-visivel";
            areaResultado.style.backgroundColor = "#ffebee";
            areaResultado.style.borderColor = "#c62828";
            areaResultado.style.color = "#c62828";
            areaResultado.innerHTML = "<strong>Atenção:</strong> Por favor, responda todas as perguntas antes de enviar.";
            return;
        }

        // Contagem de acertos
        let acertos = 0;
        if (r1 === 'correta') acertos++;
        if (r2 === 'correta') acertos++;
        if (r3 === 'correta') acertos++;

        // Criação da explicação detalhada pedagógica
        let feedbackHTML = `<h3>Você acertou ${acertos} de 3 perguntas!</h3><hr>`;
        
        // Feedback Pergunta 1
        if (r1 === 'correta') {
            feedbackHTML += `<p>✅ <strong>Pergunta 1 (Correta):</strong> Exato! A rotação de culturas quebra a reprodução de pragas específicas e melhora a química natural do solo.</p>`;
        } else {
            feedbackHTML += `<p>❌ <strong>Pergunta 1 (Incorreta):</strong> A resposta certa explicava que a rotação serve para quebrar o ciclo de pragas e proteger o solo através da biodiversidade.</p>`;
        }

        // Feedback Pergunta 2
        if (r2 === 'correta') {
            feedbackHTML += `<p>✅ <strong>Pergunta 2 (Correta):</strong> Perfeito. No MIP, o controle biológico (usar a própria natureza) vem sempre primeiro.</p>`;
        } else {
            feedbackHTML += `<p>❌ <strong>Pergunta 2 (Incorreta):</strong> Lembre-se: O MIP foca no equilíbrio. Defensivos químicos são usados apenas em último caso, nunca como primeira opção.</p>`;
        }

        // Feedback Pergunta 3
        if (r3 === 'correta') {
            feedbackHTML += `<p>✅ <strong>Pergunta 3 (Correta):</strong> Excelente! Integrar floresta, pasto e plantação (ILPF) recupera solos degradados e gera bem-estar animal.</p>`;
        } else {
            feedbackHTML += `<p>❌ <strong>Pergunta 3 (Incorreta):</strong> O erro aqui foi ignorar que o ILPF une as frentes produtivas na mesma área justamente para criar benefícios mútuos e capturar carbono.</p>`;
        }

        // Aplica os estilos normais de sucesso e exibe o painel
        areaResultado.className = "resultado-visivel";
        areaResultado.style.backgroundColor = "#e8f5e9";
        areaResultado.style.borderColor = "#2e7d32";
        areaResultado.style.color = "#1b5e20";
        areaResultado.innerHTML = feedbackHTML;

        // Move o foco para o resultado (ajuda usuários com leitores de tela)
        areaResultado.scrollIntoView({ behavior: 'smooth' });
    });
});

