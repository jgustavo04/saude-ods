const perguntas = [
    {
      pergunta: "Quantos litros de água devemos beber por dia?",
      opcoes: ["1 litro", "2 litros", "4 litros"],
      correta: 1,
      explicacao: "O ideal é consumir cerca de 2 litros de água por dia para manter o corpo bem hidratado."
    },
    {
      pergunta: "Quantas vezes devemos escovar os dentes por dia?",
      opcoes: ["1 vez", "2 vezes", "3 vezes"],
      correta: 2,
      explicacao: "Devemos escovar os dentes pelo menos 3 vezes ao dia: após o café, almoço e jantar."
    },
    {
      pergunta: "Qual é o tempo mínimo recomendado para lavar as mãos?",
      opcoes: ["5 segundos", "20 segundos", "1 minuto"],
      correta: 1,
      explicacao: "O tempo mínimo para lavar as mãos efetivamente é de 20 segundos com água e sabão."
    },
    {
        pergunta: "Palmeiras Tem Mundial ?",
        opcoes: ["sim ?", "nâo", "Talvez"],
        correta: 1,
        explicacao: "chelsea é pai do palmeiras."
      }
  ];

  let perguntaAtual = 0;

  function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Remover classe active de todos os botões
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    // Mostrar seção selecionada
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(`btn-${sectionId}`).classList.add('active');
  }

  function responder(resultado, resposta) {
    const el = document.getElementById('resposta');
    const proximaBtn = document.getElementById('proxima-btn');
    
    if (resultado === 'certo') {
      el.innerHTML = `
        <div style="background: rgba(76, 175, 80, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #4CAF50;">
          <strong>✅ Correto!</strong><br>
          ${perguntas[perguntaAtual].explicacao}
        </div>
      `;
    } else {
      el.innerHTML = `
        <div style="background: rgba(255, 107, 107, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #FF6B6B;">
          <strong>❌ Incorreto!</strong><br>
          A resposta correta é: <strong>${perguntas[perguntaAtual].opcoes[perguntas[perguntaAtual].correta]}</strong><br>
          ${perguntas[perguntaAtual].explicacao}
        </div>
      `;
    }
    
    // Desabilitar botões do quiz atual
    const buttons = document.querySelectorAll('.quiz-btn');
    buttons.forEach(btn => btn.disabled = true);
    
    proximaBtn.style.display = 'inline-block';
  }

  function proximaPergunta() {
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    const pergunta = perguntas[perguntaAtual];
    
    document.getElementById('quiz-content').innerHTML = `
      <p><strong>Pergunta:</strong> ${pergunta.pergunta}</p>
      <div class="quiz-buttons">
        ${pergunta.opcoes.map((opcao, index) => 
          `<button class="quiz-btn" onclick="responder('${index === pergunta.correta ? 'certo' : 'errado'}', '${opcao}')">${opcao}</button>`
        ).join('')}
      </div>
    `;
    
    document.getElementById('resposta').innerHTML = '';
    document.getElementById('proxima-btn').style.display = 'none';
  }

  // Inicializar com a primeira seção ativa
  document.addEventListener('DOMContentLoaded', function() {
    showSection('saude');

    // Lógica para o formulário de feedback
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      
      // Simula o envio do feedback
      feedbackMessage.innerHTML = '<span style="color: #2E7D32;">✅ Agradecemos seu feedback!</span>';
      feedbackForm.reset(); // Limpa o formulário
      
      // Oculta a mensagem após 5 segundos
      setTimeout(() => {
        feedbackMessage.innerHTML = '';
      }, 5000);
    });
  });