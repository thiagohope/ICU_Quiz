 
 let selectedLanguage = localStorage.getItem("selectedLanguage") || "en";

function generateSpecialtyCheckboxes(bank, lang = "en") {
  const container = document.getElementById("specialty-checkboxes");
  if (!container) return;

  const allAreas = new Set();
  bank.forEach(q => {
    (Array.isArray(q.area) ? q.area : [q.area]).forEach(a => allAreas.add(a));
  });

  const areaLabels = {
    neuro: { pt: "Neuro", en: "Neuro", es: "Neuro" },
    cardio: { pt: "Cardio", en: "Cardio", es: "Cardio" },
    infecto: { pt: "Infecto", en: "Infectious", es: "Infecciosas" },
    respiratorio: { pt: "Respiratório", en: "Respiratory", es: "Respiratorio" },
    renal: { pt: "Renal", en: "Renal", es: "Renal" },
    icu: { pt: "UTI", en: "ICU", es: "UCI" }
  };

  container.innerHTML = "";
  allAreas.forEach(area => {
    const label = document.createElement("label");
    label.setAttribute("id", "label-" + area);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "specialty-filter";
    checkbox.value = area;
    checkbox.checked = true;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + (areaLabels[area]?.[lang] || area)));
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });
 }

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
    let questionsMarkedForReview = [];
    let questionQueue = [];
    let score = 0;
    let currentMode = 'study';
    let pendingQuestions = [];
    let examDuration = 60;
    let timeLeft = examDuration * 60;
    let timerInterval;
    let userAnswers = {};
    let currentQuestionnaire = [];
    let questionsSinceLastFeedback = 0;
    let showFeedback = false;


  // Dicionário de tradução dos níveis de dificuldade
// Mapeia os valores internos ('level') para seus equivalentes multilíngues
// Usado para exibir "Fácil", "Moderada", etc., conforme o idioma selecionado
  const levelDictionary = {
  easy: { pt: "Fácil", en: "Easy", es: "Fácil" },
  moderate: { pt: "Moderada", en: "Moderate", es: "Moderada" },
  hard: { pt: "Difícil", en: "Hard", es: "Difícil" },
  very_hard: { pt: "Muito Difícil", en: "Very Hard", es: "Muy Difícil" }
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
        "questionsForReview": "Questions for Review",
        "Please answer or mark the question before proceeding.": "Please answer or mark the question before proceeding.",
        "Please review and answer all marked questions before finishing.": "Please review and answer all marked questions before finishing."
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
        "questionsForReview": "Preguntas para Revisión",
        "Please answer or mark the question before proceeding.": "Responda o marque la pregunta antes de continuar.",
        "Please review and answer all marked questions before finishing.": "Revise y responda todas las preguntas marcadas antes de finalizar."
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
        "questionsForReview": "Questões para Revisão",
        "Please answer or mark the question before proceeding.": "Responda ou marque a questão antes de continuar.",
        "Please review and answer all marked questions before finishing.": "Revise e responda todas as questões marcadas antes de finalizar."
      }
    };

    function getTranslation(key) {
     const lang = selectedLanguage || "en";
     return translations[lang]?.[key] || key;
    }

    // Função para traduzir dificuldade
    function translateDifficulty(difficulty, lang) {
      const difficultyTranslations = {
        "easy": {
          "en": "Easy",
          "es": "Fácil",
          "pt": "Fácil"
        },
        "moderate": {
          "en": "Medium",
          "es": "Moderada",
          "pt": "Moderada"
        },
        "hard": {
          "en": "Hard",
          "es": "Difícil",
          "pt": "Difícil"
        },
        "very_hard": {
          "en": "Very Hard",
          "es": "Muy Difícil",
          "pt": "Muito Difícil"
        }
      };
      
      return difficultyTranslations[difficulty]?.[lang] || difficulty;
    }

    // Função para gerar questionário
    function generateQuestionnaire(mode) {
  return questionBank.generateQuiz(mode === 'exam' ? 'exam' : 'study');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  generateSpecialtyCheckboxes(questionBank.externalBanks, selectedLanguage);
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
      selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
      updateUI();
      hideConfig();
      
      // Se estiver na tela de resultados, atualize o relatório
      if (document.getElementById('result-screen').style.display === 'block') {
        generateUSMLEReport();
      }
    }

    // Funções do Quiz
  function startQuiz() {
  console.log('🟡 Start Quiz triggered');
  
  if (false && currentMode === 'study' &&
    localStorage.getItem('currentQuestionnaire') &&
    localStorage.getItem('userAnswers')) {
    // Restore saved progress
    currentQuestionnaire = JSON.parse(localStorage.getItem('currentQuestionnaire'));
    userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
    console.log("📦 Progress restored from study mode.");
  } else {
    // New questionnaire
    const totalQuestions = 10;

    // 1. Capture selected difficulty levels
    const selectedDifficulties = Array.from(document.querySelectorAll('.difficulty-filter:checked'))
      .map(el => el.value);

    const selectedSpecialties = Array.from(document.querySelectorAll('.specialty-filter:checked'))
      .map(el => el.value);

    // 2. Filter question bank by selected difficulties and specialties
    const allQuestions = questionBank.externalBanks;
    const specialtyMode = document.getElementById("specialty-mode").value;

    const filteredQuestions = allQuestions.filter(q =>
      selectedDifficulties.includes(q.level) &&
      (specialtyMode === "strict"
        ? selectedSpecialties.every(tag => q.area.includes(tag))
        : selectedSpecialties.some(tag => q.area.includes(tag)))
    );

    // 3. Shuffle and select 10 questions
    const selectedQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions);

    // 4. Assign to current questionnaire
    currentQuestionnaire = selectedQuestions;
    userAnswers = {};
    currentQuestionIndex = 0;
  }

  console.log('📘 Loaded questions:', currentQuestionnaire);
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
  questionQueue = [...currentQuestionnaire]; // now contains the full questions
  currentQuestionIndex = 0;
  showCurrentQuestion();
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
      const question = questionQueue[currentQuestionIndex];
          if (!question) {
          console.warn("❗ Invalid question at index:", currentQuestionIndex);
          return;}
          console.log('🟢 Exibindo questão', currentQuestionIndex, question);
          console.log('🌐 Idioma selecionado:', selectedLanguage);
          console.log('📄 Enunciado da questão:', question.question[selectedLanguage]);
          console.log('📦 Alternativas:', question.options[selectedLanguage]);
      const t = translations[selectedLanguage];
        question.tempoStart = Date.now();
        // Atualizar progresso
        updateProgress();
        // Mostrar questão
        document.getElementById('question-text').innerHTML = `
  ${t.question} ${currentQuestionIndex + 1} ${t.of} ${currentQuestionnaire.length}:
  ${question.question?.[selectedLanguage] || question.question?.en || "[No content]"}
  <span class="difficulty ${question.level}">
  ${levelDictionary[question.level]?.[selectedLanguage] || ""}
  </span>`;

  // Display options
  const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
  const options = question.options || [];
  options.forEach((opt, i) => {
  const optionText = opt.text?.[selectedLanguage] || opt.text?.en || "[No text]";
  const optionElement = document.createElement('div');
  optionElement.className = 'option';
  optionElement.textContent = optionText;
  optionElement.onclick = () => selectOption(i);
  if (userAnswers[question.id] !== undefined && userAnswers[question.id] === i) {
    optionElement.classList.add('selected');
  }
  optionsContainer.appendChild(optionElement);
});



    // Configurar botões
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = userAnswers[question.id] === undefined && currentMode === 'exam';
    updateMarkButtonStyle();
    // Mostrar explicação se aplicável
    document.getElementById('explanation').style.display = 'none';
    // Atualiza o text do botão Mark for Review conforme o estado atual
    updateMarkButtonStyle();
    // Mostra os botões de navegação
    document.getElementById("controls-container").style.display = "flex";}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / currentQuestionnaire.length) * 100;
  document.getElementById('quiz-progress').style.width = `${progress}%`;

  const t = translations[selectedLanguage];
  document.getElementById('progress-text').textContent = 
    `${t.question} ${currentQuestionIndex + 1} ${t.of} ${currentQuestionnaire.length}`;
  document.getElementById('progress-text').style.display = 'block';
}

function selectOption(index) {
  const question = questionQueue[currentQuestionIndex];
  const questionIndex = currentQuestionnaire.findIndex(q => q.id === question.id);

  // Remove if marked for review
  if (questionsMarkedForReview.includes(questionIndex)) {
    questionsMarkedForReview = questionsMarkedForReview.filter(i => i !== questionIndex);
    document.getElementById("mark-btn").innerText = getTranslation("Mark for Review");
    updateMarkButtonStyle();
  }

  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
  options[index].classList.add('selected');

  userAnswers[question.id] = index;

  if (currentMode === 'study') {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }

  if (currentMode === 'study') {
    questionsSinceLastFeedback++;
    const isLastQuestion = currentQuestionIndex === currentQuestionnaire.length - 1;
    if (questionsSinceLastFeedback >= 10 && !isLastQuestion) {
      showFeedbackImmediately();
      questionsSinceLastFeedback = 0;
    }
  }

  if (currentMode === 'exam') {
    document.getElementById('next-btn').disabled = false;
  }
  }
      
  if (currentMode === 'study') {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }

  if (currentMode === 'study') {
    questionsSinceLastFeedback++;
    const isLastQuestion = currentQuestionIndex === currentQuestionnaire.length - 1;
  if (questionsSinceLastFeedback >= 10 && !isLastQuestion) {
    showFeedbackImmediately();
    questionsSinceLastFeedback = 0;
  }
}

  if (currentMode === 'exam') {
    document.getElementById('next-btn').disabled = false;
}

function showFeedbackImmediately() {
  const question = currentQuestionnaire[currentQuestionIndex];
  const options = document.querySelectorAll('.option');
  const t = translations[selectedLanguage];

  options.forEach((option, index) => {
    if (index === question.correct) {
      option.classList.add('correct');
    } else if (index === userAnswers[question.id] && index !== question.correct) {
      option.classList.add('incorrect');
    }
  });

  document.getElementById('explanation-text').textContent =
    question.explanations?.[selectedLanguage] || question.explanations?.en || "[No explanation available]";
  document.getElementById('explanation').style.display = 'block';
}

      
      // Feedback visual já é exibido nos elementos da interface (sem alert).
    

  function togglePending() {
  const currentQuestion = questionQueue[currentQuestionIndex];
  const questionIndex = currentQuestionnaire.findIndex(q => q.id === currentQuestion.id);
  if (!currentQuestion) return;

  const alreadyPending = questionsMarkedForReview.includes(questionIndex);

  if (alreadyPending) {
    questionsMarkedForReview = questionsMarkedForReview.filter(i => i !== questionIndex);
    document.getElementById("mark-btn").innerText = getTranslation("Mark for Review");
  } else {
    questionsMarkedForReview.push(questionIndex);
    if (!questionQueue.includes(currentQuestion)) {
      questionQueue.push(currentQuestion);
    }
    document.getElementById("mark-btn").innerText = getTranslation("Unmark Review");
  }

  updateMarkButtonStyle();
}

function updateMarkButtonStyle() {
  const question = questionQueue[currentQuestionIndex];
  const markBtn = document.getElementById("mark-btn");
  if (!markBtn) return;

  const index = currentQuestionnaire.findIndex(q => q.id === question.id);

  if (questionsMarkedForReview.includes(index)) {
    markBtn.classList.add("marked");
    markBtn.innerText = getTranslation("unmark");
  } else {
    markBtn.classList.remove("marked");
    markBtn.innerText = getTranslation("mark");
  }
}

 function nextQuestion() {
  const currentQuestion = questionQueue[currentQuestionIndex];
  if (!currentQuestion || !currentQuestion.options) {
    console.error("❌ Questão ou options ausentes!", currentQuestion);
    return;
  }

  const answered = userAnswers[currentQuestion.id] !== undefined;
  const isMarkedForReview = questionsMarkedForReview.includes(currentQuestionIndex);

  if (!answered && !isMarkedForReview) {
    alert(getTranslation("Please answer or mark the question before proceeding."));
    return;
  }

  if (pendingQuestions.includes(currentQuestion.id)) {
    if (answered || isMarkedForReview) {
      pendingQuestions = pendingQuestions.filter(id => id !== currentQuestion.id);
    } else {
      alert("⚠️ You must answer the question before proceeding.");
      return;
    }
  }
    // ➡️ Avança ou finaliza
if (currentQuestionIndex < questionQueue.length - 1) {
  currentQuestionIndex++;
  showCurrentQuestion();
} else {
  if (pendingQuestions.length > 0) {
    questionQueue = questionQueue.filter(q => pendingQuestions.includes(q.id));
    currentQuestionIndex = 0;
    pendingQuestions = [];
    showCurrentQuestion();
  } else {
    finishQuiz();
  }
}}

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();}
  }

  function finishQuiz() {
  // Check if there are still unanswered marked questions
  const unansweredPending = questionsMarkedForReview.filter(index => {
    const qid = currentQuestionnaire[index]?.id;
    return userAnswers[qid] === undefined;
  });

  if (currentQuestionnaire?.length > 0) {
  drawPerformanceChart(currentQuestionnaire, userAnswers, selectedLanguage);
  drawDifficultyChart(currentQuestionnaire, userAnswers);
  drawVoronoiDifficultyChart(currentQuestionnaire, userAnswers, selectedLanguage);
  drawSankeyAccuracyChart(currentQuestionnaire, userAnswers, selectedLanguage);
}
  if (unansweredPending.length > 0) {
    alert(getTranslation("Please review and answer all marked questions before finishing."));
      // Mantém apenas as marcadas não respondidas
    const unansweredQuestions = unansweredPending.map(index => currentQuestionnaire[index]);
      // Redefine fila exclusivamente com essas
    questionQueue = [...unansweredQuestions];
    currentQuestionIndex = 0;
      // Limpa pendências anteriores
    pendingQuestions = unansweredQuestions.map(q => q.id);
    showCurrentQuestion();
    return;
  }

  clearInterval(timerInterval);
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';

  if (currentMode === 'study') {
    localStorage.removeItem('currentQuestionnaire');
    localStorage.removeItem('userAnswers');
    localStorage.removeItem('currentQuestionIndex');
  }

  localStorage.setItem('currentQuestionnaire', JSON.stringify(currentQuestionnaire));
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  localStorage.setItem('selectedLanguage', selectedLanguage);
  localStorage.setItem('accumulatedQuestions', JSON.stringify(currentQuestionnaire));
  localStorage.setItem('accumulatedAnswers', JSON.stringify(userAnswers));

  // Store pending questions for the report
  pendingQuestions = questionsMarkedForReview.map(i => currentQuestionnaire[i].id);
  generateUSMLEReport();
}

function generateUSMLEReport() {
  const questions = JSON.parse(localStorage.getItem('accumulatedQuestions')) || [];
  const answers = JSON.parse(localStorage.getItem('accumulatedAnswers')) || {};
  const pending = questions.filter(q => answers[q.id] === undefined).map(q => q.id);
  const avgTime = Array(questions.length).fill(30);
  const lang = localStorage.getItem('selectedLanguage') || 'en';
  generateUSMLEReportFull(questions, answers, pending, avgTime, lang);
}
if (currentQuestionnaire?.length > 0) {
  drawPerformanceChart(currentQuestionnaire, userAnswers, selectedLanguage);
  drawDifficultyChart(currentQuestionnaire, userAnswers);
  drawVoronoiDifficultyChart(currentQuestionnaire, userAnswers, selectedLanguage);
  drawSankeyAccuracyChart(currentQuestionnaire, userAnswers, selectedLanguage);
}

const t = translations[selectedLanguage]; // Get translations for the current language
const linkEl = document.getElementById('full-report-link');
if (linkEl) {
  linkEl.textContent = t.viewFullReport;
}
  function updateUI() {
    const t = translations[selectedLanguage];
    // Atualizar texts na tela inicial
      document.querySelector('.mode-btn.active').textContent = 
      currentMode === 'study' ? t.studyMode : t.examMode;
      document.querySelector('.mode-btn:not(.active)').textContent = 
      currentMode === 'study' ? t.examMode : t.studyMode;
    // Atualizar botões
      document.querySelector('button[onclick="startQuiz()"]').textContent = t.startQuiz;

    const difficultyLabels = {
     "easy": t.easy,
     "moderate": t.medium,
     "hard": t.hard,
     "very hard": t.very_hard};
      document.querySelectorAll('.difficulty-filter').forEach(el => {
    const label = el.parentElement;
     label.childNodes[1].textContent = " " + (difficultyLabels[el.value] || el.value);
     });
      document.querySelector('button[onclick="showConfig()"]').textContent = t.settings;
      if (document.getElementById('result-screen').style.display === 'block') {
      updateReportLanguage(selectedLanguage);
    const pendingTitle = document.getElementById('pending-title');
     if (pendingTitle) pendingTitle.textContent = `▌ ${t.questionsForReview}`;
    const btnFinalReport = document.getElementById('final-report-btn');
     if (btnFinalReport) {
     btnFinalReport.textContent =
     selectedLanguage === 'pt' ? '📊 Ver Relatório Final' :
     selectedLanguage === 'es' ? '📊 Ver Informe Final' :
     '📊 View Final Report';}
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
    generateDetailedReport(currentQuestionnaire, userAnswers, pendingQuestions, selectedLanguage);
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
    es: "Si regresa a la página principal, sus respuestas se perderán. ¿Está seguro?"};
    if (confirm(confirmMessages[lang])) {
   // Limpa estados salvos
    localStorage.removeItem('questionarioAtual');
    localStorage.removeItem('userAnswers');
    localStorage.removeItem('accumulatedQuestions');
    localStorage.removeItem('accumulatedAnswers');
   // Oculta todas as seções de resultado e volta à tela inicial
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('full-report-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';}
  }

  console.log('questionBank is defined?', typeof questionBank !== 'undefined');
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
  // 🔁 Expor funções para que o HTML (onclick) consiga acessá-las
window.startQuiz = startQuiz;
window.showConfig = showConfig;
window.saveConfig = saveConfig;
window.hideConfig = hideConfig;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.togglePending = togglePending;
window.restartQuiz = restartQuiz;
window.confirmReturnHome = confirmReturnHome;
window.endExam = endExam;
window.showFullReport = showFullReport;
window.setMode = setMode;
window.backToMainReport = backToMainReport;
window.generateUSMLEReport = generateUSMLEReport;
