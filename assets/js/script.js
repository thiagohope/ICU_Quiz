 
  document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem('selectedLanguage') || 'en';

    const legalMessages = {
      en: "© 2025 BrainboxMed. All rights reserved. Content protected. Reproduction prohibited without permission.",
      pt: "© 2025 BrainboxMed. Todos os direitos reservados. Conteúdo protegido. Reprodução proibida sem autorização.",
      es: "© 2025 BrainboxMed. Todos los derechos reservados. Contenido protegido. Reproducción prohibida sin autorización."
    };

    const warningEl = document.getElementById("legal-warning");
    if (warningEl) {
      warningEl.textContent = legalMessages[language] || legalMessages["en"];
    }
  });
 

    // Variáveis globais
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedLanguage = 'en';
    let currentMode = 'study';
    let pendingQuestions = [];
    let examDuration = 60;
    let timeLeft = examDuration * 60;
    let timerInterval;
    let userAnswers = {};
    let questionarioAtual = [];
    let questionsSinceLastFeedback = 0;
    let showFeedback = false;
    let questoesMarcadasParaRevisao = [];


  // Dicionário de tradução dos níveis de dificuldade
// Mapeia os valores internos ('nivel') para seus equivalentes multilíngues
// Usado para exibir "Fácil", "Moderada", etc., conforme o idioma selecionado
  const nivelDictionary = {
  facil: { pt: "Fácil", en: "Easy", es: "Fácil" },
  moderada: { pt: "Moderada", en: "Moderate", es: "Moderada" },
  dificil: { pt: "Difícil", en: "Hard", es: "Difícil" },
  muito_dificil: { pt: "Muito Difícil", en: "Very Hard", es: "Muy Difícil" }
  };

 // Textos multilíngues
    const translations = {
      "en": {
        "question": "Question",
        "of": "of",
        "previous": "Previous",
        "next": "Next",
        "mark": "Mark for Review",
        "unmark": "✅ Marked",
        "explanation": "Explanation",
        "correct": "Correct!",
        "incorrect": "Incorrect!",
        "timeLeft": "Time Left",
        "easy": "Easy",
        "medium": "Medium",
        "hard": "Hard",
        "very_hard": "Very Hard",
        "startQuiz": "Start Quiz",
        "settings": "Settings",
        "studyMode": "Study Mode",
        "examMode": "Exam Mode",
        "score": "Score",
        "viewFullReport": "View Full Report",
        "questionsForReview": "Questions for Review"
      },
      "es": {
        "question": "Pregunta",
        "of": "de",
        "previous": "Anterior",
        "next": "Siguiente",
        "mark": "Marcar para Revisión",
        "unmark": "✅ Marcada",
        "explanation": "Explicación",
        "correct": "¡Correcto!",
        "incorrect": "¡Incorrecto!",
        "timeLeft": "Tiempo Restante",
        "easy": "Fácil",
        "medium": "Moderada",
        "hard": "Difícil",
        "very_hard": "Muy Difícil",
        "startQuiz": "Iniciar Quiz",
        "settings": "Configuración",
        "studyMode": "Modo Estudio",
        "examMode": "Modo Simulado",
        "score": "Puntuación",
        "viewFullReport": "Ver Informe Completo",
        "questionsForReview": "Preguntas para Revisión" 
      },
      "pt": {
        "question": "Questão",
        "of": "de",
        "previous": "Anterior",
        "next": "Próxima",
        "mark": "Marcar Pendente",
        "unmark": "✅ Marcada",
        "explanation": "Explicação",
        "correct": "Correto!",
        "incorrect": "Incorreto!",
        "timeLeft": "Tempo Restante",
        "easy": "Fácil",
        "medium": "Moderada",
        "hard": "Difícil",
        "very_hard": "Muito Difícil",
        "startQuiz": "Iniciar Quiz",
        "settings": "Configurações",
        "studyMode": "Modo Estudo",
        "examMode": "Modo Simulado",
        "score": "Pontuação",
        "viewFullReport": "Ver Relatório Completo", 
        "questionsForReview": "Questões para Revisão"
      }
    };

    // Função para traduzir dificuldade
    function translateDifficulty(difficulty, lang) {
      const difficultyTranslations = {
        "facil": {
          "en": "Easy",
          "es": "Fácil",
          "pt": "Fácil"
        },
        "moderada": {
          "en": "Medium",
          "es": "Moderada",
          "pt": "Moderada"
        },
        "dificil": {
          "en": "Hard",
          "es": "Difícil",
          "pt": "Difícil"
        },
        "muito_dificil": {
          "en": "Very Hard",
          "es": "Muy Difícil",
          "pt": "Muito Difícil"
        }
      };
      
      return difficultyTranslations[difficulty]?.[lang] || difficulty;
    }

    // Função para gerar questionário
    function gerarQuestionario(modo) {
      return bancoQuestoes.gerarQuestionario(modo === 'exam' ? 'simulado' : 'estudo');
    }

    // Inicialização
    document.addEventListener('DOMContentLoaded', () => {
  updateUI();

  if (localStorage.getItem('autoStartStudyMode') === 'true') {
    localStorage.removeItem('autoStartStudyMode');
    currentMode = 'study';
    startQuiz();
  }
});

    // Funções de Modo
    function setMode(mode) {
      currentMode = mode;
      document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(mode === 'study' ? 'Study' : 'Exam'));
      });
      document.getElementById('exam-settings').style.display = 
        mode === 'exam' ? 'block' : 'none';
      updateUI();
    }

    // Funções de Configuração
    function showConfig() {
      document.getElementById('home-screen').style.display = 'none';
      document.getElementById("question-container").style.display = 'block';
      document.getElementById('config-screen').style.display = 'block';
      document.getElementById('language-selector').value = selectedLanguage;
    }

    function hideConfig() {
      document.getElementById('config-screen').style.display = 'none';
      document.getElementById('home-screen').style.display = 'block';
    }

    function saveConfig() {
      selectedLanguage = document.getElementById('language-selector').value;
      updateUI();
      hideConfig();
      
      // Se estiver na tela de resultados, atualize o relatório
      if (document.getElementById('result-screen').style.display === 'block') {
        generateUSMLEReport();
      }
    }

    // Funções do Quiz
    function startQuiz() {
    console.log('🟡 Start Quiz acionado');
      if (currentMode === 'study' && localStorage.getItem('questionarioAtual') && localStorage.getItem('userAnswers')) {
  // Restauração do progresso salvo
  questionarioAtual = JSON.parse(localStorage.getItem('questionarioAtual'));
  userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
  currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
  console.log("📦 Progresso restaurado do modo estudo.");
} else {
  // Novo questionário
  const totalQuestoes = 10;

// 1. Captura os níveis selecionados
const dificuldadesSelecionadas = Array.from(document.querySelectorAll('.difficulty-filter:checked'))
  .map(el => el.value);

// 2. Filtra o banco de questões conforme as dificuldades
const todasQuestoes = bancoQuestoes.bancosExternos;
const questoesFiltradas = todasQuestoes.filter(q => dificuldadesSelecionadas.includes(q.nivel));

// 3. Embaralha e seleciona 10
const questoesSelecionadas = questoesFiltradas.sort(() => Math.random() - 0.5).slice(0, totalQuestoes);

// 4. Atribui ao questionário atual
questionarioAtual = questoesSelecionadas;
  userAnswers = {};
  currentQuestionIndex = 0;
}
console.log('📘 Questões carregadas:', questionarioAtual);
      currentQuestionIndex = 0;
      score = 0;
      pendingQuestions = [];
      userAnswers = {};
      questionsSinceLastFeedback = 0;
      showFeedback = false;

      if (currentMode === 'exam') {
        examDuration = parseInt(document.getElementById('exam-time').value);
        timeLeft = examDuration * 60;
        startTimer();
      }
      
      document.getElementById('home-screen').style.display = 'none';
      document.getElementById('question-container').style.display = 'block';
      document.getElementById('timer-container').style.display = 
        currentMode === 'exam' ? 'block' : 'none';
      
      showCurrentQuestion();
      document.getElementById("question-container").style.setProperty("display", "block", "important");

    }

    function startTimer() {
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          finishQuiz();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.getElementById('timer').textContent = 
        `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function showCurrentQuestion() {
      const question = questionarioAtual[currentQuestionIndex];
      console.log('🟢 Exibindo questão', currentQuestionIndex, question);
      console.log('🌐 Idioma selecionado:', selectedLanguage);
      console.log('📄 Enunciado da questão:', question.pergunta[selectedLanguage]);
      console.log('📦 Alternativas:', question.alternativas[selectedLanguage]);
      const t = translations[selectedLanguage];
      questionarioAtual[currentQuestionIndex].tempoStart = Date.now();
      // Atualizar progresso
      updateProgress();
      
      // Mostrar questão
      document.getElementById('question-text').innerHTML = `
        ${t.question} ${currentQuestionIndex + 1} ${t.of} ${questionarioAtual.length}:
        ${question.pergunta?.[selectedLanguage] || ""}
        <span class="dificuldade ${question.nivel}">
        ${nivelDictionary[question.nivel]?.[selectedLanguage] || ""}
        </span>
      `;
      
      // Mostrar opções
      const optionsContainer = document.getElementById('options-container');
      optionsContainer.innerHTML = '';
      
       question.alternativas.forEach((option, index) => {
        const textoTraduzido = option.texto?.[selectedLanguage] || ""
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = textoTraduzido;
        optionElement.onclick = () => selectOption(index);
        
        // Restaurar seleção se já respondida
        if (userAnswers[question.id] !== undefined && userAnswers[question.id] === index) {
          optionElement.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionElement);
      });
      
      // Configurar botões
      document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
      document.getElementById('next-btn').disabled = userAnswers[question.id] === undefined && currentMode === 'exam';
      document.getElementById('mark-btn').textContent = 
      questoesMarcadasParaRevisao.includes(question.id) ? t.unmark : t.mark;
      
      // Mostrar explicação se aplicável
      document.getElementById('explanation').style.display = 'none';

      // Atualiza o texto do botão Mark for Review conforme o estado atual
      const idAtual = questionarioAtual[currentQuestionIndex].id;
     if (questoesMarcadasParaRevisao.includes(idAtual)) {
     document.getElementById("mark-btn").innerText = "✅ Marked";
     } else {
     document.getElementById("mark-btn").innerText = "Mark for Review";
     }
}

    function updateProgress() {
      const progress = ((currentQuestionIndex + 1) / questionarioAtual.length) * 100;
      document.getElementById('quiz-progress').style.width = `${progress}%`;
      
      const t = translations[selectedLanguage];
      document.getElementById('progress-text').textContent = 
        `${t.question} ${currentQuestionIndex + 1} ${t.of} ${questionarioAtual.length}`;
      document.getElementById('progress-text').style.display = 'block';
    }

    function selectOption(index) {
      const question = questionarioAtual[currentQuestionIndex];
      const options = document.querySelectorAll('.option');
      
      // Remover seleção anterior
      options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
      
      // Marcar seleção atual
      options[index].classList.add('selected');
      userAnswers[question.id] = index;
      if (currentMode === 'study') {
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
}
      question.tempo = question.tempo || 0;
      question.tempo = (question.tempoStart) ? (Date.now() - question.tempoStart) / 1000 : 0;
      // No modo estudo, mostrar feedback após 10 questões
      if (currentMode === 'study') {
  questionsSinceLastFeedback++;

  // Só mostra feedback imediato se não for a última questão
  const isLastQuestion = currentQuestionIndex === questionarioAtual.length - 1;

  if (questionsSinceLastFeedback >= 10 && !isLastQuestion) {
    showFeedbackImmediately();
    questionsSinceLastFeedback = 0;
  }
  }

      
      // No modo simulado, habilitar próximo
      if (currentMode === 'exam') {
        document.getElementById('next-btn').disabled = false;
      }
    }

    function showFeedbackImmediately() {
      const question = questionarioAtual[currentQuestionIndex];
      const options = document.querySelectorAll('.option');
      const t = translations[selectedLanguage];
      
      options.forEach((option, index) => {
        if (index === question.correta) {
          option.classList.add('correct');
        } else if (index === userAnswers[question.id] && index !== question.correta) {
          option.classList.add('incorrect');
        }
      });
      
      document.getElementById('explanation-text').textContent = 
        question.explicacoes[selectedLanguage];
      document.getElementById('explanation').style.display = 'block';
      
      // Feedback visual já é exibido nos elementos da interface (sem alert).
    }

  function togglePending() {
  const id = questionarioAtual[currentQuestionIndex].id;
  const index = questoesMarcadasParaRevisao.indexOf(id);
  if (index === -1) {
    questoesMarcadasParaRevisao.push(id);
    document.getElementById("mark-btn").innerText = "✅ Marked";
  } else {
    questoesMarcadasParaRevisao.splice(index, 1);
    document.getElementById("mark-btn").innerText = "Mark for Review";
  }
  }


  function nextQuestion() {
  // Verificar resposta no modo simulado
  if (currentMode === 'exam') {
  const question = questionarioAtual[currentQuestionIndex];
  if (userAnswers[question.id] === question.correta) {
    score++;
  }
  }
      
      // Avançar ou finalizar
      if (currentQuestionIndex < questionarioAtual.length - 1) {
        currentQuestionIndex++;
        showCurrentQuestion();
      } else {
  if (questoesMarcadasParaRevisao.length > 0) {
    const idsAtuais = questionarioAtual.map(q => q.id);
    const revisoes = questionarioAtual.filter(q => questoesMarcadasParaRevisao.includes(q.id));
    const revisoesFiltradas = revisoes.filter(q => !idsAtuais.includes(q.id));
    questionarioAtual = questionarioAtual.concat(revisoesFiltradas);
    questoesMarcadasParaRevisao = [];
    currentQuestionIndex++;
    showCurrentQuestion();
  } else {
    finishQuiz();
  }
}
}

    function prevQuestion() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();
      }
    }

   function finishQuiz() {
  clearInterval(timerInterval);
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  if (currentMode === 'study') {
  localStorage.removeItem('questionarioAtual');
  localStorage.removeItem('userAnswers');
  localStorage.removeItem('currentQuestionIndex');
}
  // Salvar dados no localStorage para uso no review.html
  localStorage.setItem('questionarioAtual', JSON.stringify(questionarioAtual));
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  localStorage.setItem('selectedLanguage', selectedLanguage);
  // Adicionar para funcionamento do relatoriofinal.html
  localStorage.setItem('acumuladoQuestoes', JSON.stringify(questionarioAtual));
  localStorage.setItem('acumuladoRespostas', JSON.stringify(userAnswers));
  // Gerar relatório
  generateUSMLEReport();
  }

 function generateUSMLEReport() {
  // 1. Dados básicos
  const totalQuestions = questionarioAtual.length;
  const correctAnswers = questionarioAtual.filter(q => 
    userAnswers[q.id] === q.correta
  ).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Gerar relatório completo
  generateUSMLEReportFull(
    questionarioAtual,
    userAnswers,
    pendingQuestions,
    Array(totalQuestions).fill(30), // tempo médio fictício de 30s por questão
    selectedLanguage
  );

  drawPerformanceChart(questionarioAtual, userAnswers, selectedLanguage);
  drawDifficultyChart(questionarioAtual, userAnswers);
  drawVoronoiDifficultyChart(questionarioAtual, userAnswers, selectedLanguage);
  generateVoronoiTopicDetails(questionarioAtual, userAnswers, selectedLanguage);



  const t = translations[selectedLanguage]; // Obter traduções do idioma atual
  const linkEl = document.getElementById('full-report-link');
  if (linkEl) {
  linkEl.textContent = t.viewFullReport;
}
}

    function updateUI() {
      const t = translations[selectedLanguage];
   
      // Atualizar textos na tela inicial
      document.querySelector('.mode-btn.active').textContent = 
        currentMode === 'study' ? t.studyMode : t.examMode;
      document.querySelector('.mode-btn:not(.active)').textContent = 
        currentMode === 'study' ? t.examMode : t.studyMode;
      
      // Atualizar botões
      document.querySelector('button[onclick="startQuiz()"]').textContent = t.startQuiz;

     const difficultyLabels = {
     "facil": t.easy,
     "moderada": t.medium,
     "dificil": t.hard,
     "muito_dificil": t.very_hard
     };

     document.querySelectorAll('.difficulty-filter').forEach(el => {
     const label = el.parentElement;
     label.childNodes[1].textContent = " " + (difficultyLabels[el.value] || el.value);
     });

     document.querySelector('button[onclick="showConfig()"]').textContent = t.settings;

      if (document.getElementById('result-screen').style.display === 'block') {
        updateReportLanguage(selectedLanguage);

     document.getElementById('pending-title').textContent = `▌ ${t.questionsForReview}`;
     const btnFinalReport = document.getElementById('final-report-btn');
     if (btnFinalReport) {
     btnFinalReport.textContent =
     selectedLanguage === 'pt' ? '📊 Ver Relatório Final' :
     selectedLanguage === 'es' ? '📊 Ver Informe Final' :
     '📊 View Final Report';
     }
    }
      }
    function restartQuiz() {
      document.getElementById('result-screen').style.display = 'none';
      startQuiz();
    }

    function endExam() {
      finishQuiz();
    }
    function showFullReport() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('full-report-screen').style.display = 'block';
  generateDetailedReport(questionarioAtual, userAnswers, pendingQuestions, selectedLanguage);
}

    function backToMainReport() {
      document.getElementById('full-report-screen').style.display = 'none';
      document.getElementById('result-screen').style.display = 'block';
    }
  

    function confirmReturnHome() {
  const lang = selectedLanguage || 'en';

  const confirmMessages = {
    en: "If you return to the home page, your answers will be lost. Are you sure?",
    pt: "Caso retorne à página inicial, suas respostas serão perdidas. Tem certeza?",
    es: "Si regresa a la página principal, sus respuestas se perderán. ¿Está seguro?"
  };

  if (confirm(confirmMessages[lang])) {
    // Limpa estados salvos
    localStorage.removeItem('questionarioAtual');
    localStorage.removeItem('userAnswers');

    // Oculta todas as seções de resultado e volta à tela inicial
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('full-report-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
  }
}

  console.log('bancoQuestoes está definido?', typeof bancoQuestoes !== 'undefined');
  document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("selectedLanguage") || "en";

    const descriptions = {
      en: "BrainboxMed is an interactive multilingual medical quiz platform to train, review, and master Intensive Care Medicine.",
      pt: "O BrainboxMed é uma plataforma interativa multilíngue de simulado médico para treinar, revisar e dominar a Medicina Intensiva.",
      es: "BrainboxMed es una plataforma interactiva multilingüe de simulación médica para entrenar, repasar y dominar la medicina intensiva."
    };

    const ogDescriptions = {
      en: "Interactive and multilingual quizzes to master critical care. Dynamic, and evidence-based.",
      pt: "Simulados interativos e multilíngues para dominar a medicina intensiva. Dinâmico e baseado em evidências.",
      es: "Simulaciones interactivas y multilingües para dominar la medicina intensiva. Dinámico y basado en evidencia."
    };

    const metaDesc = document.getElementById("meta-desc");
    const metaOgDesc = document.getElementById("meta-og-desc");

    if (metaDesc) metaDesc.setAttribute("content", descriptions[lang] || descriptions["en"]);
    if (metaOgDesc) metaOgDesc.setAttribute("content", ogDescriptions[lang] || ogDescriptions["en"]);
  });