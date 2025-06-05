// simulation.js
console.log("simulation.js LOADED - Initializing Mock Exam logic. Version: 20250605_B (Corrected)");

const SIM_STATE_KEY = 'simState';

// --- Constantes Globais ---
const markedQuestions = new Set();

// --- Variáveis de Estado Globais do Quiz ---
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
// shownQuestionIds e previousWrongIds não parecem ser usados no código fornecido,
// mas mantidos caso sejam para funcionalidades futuras.
let shownQuestionIds = [];
let previousWrongIds = [];
let isRevisitingMarkedQuestions = false;
let markedQuestionsToRevisit = [];
let currentRevisitIndex = 0;

// --- Variáveis Globais Específicas da Simulação ---
let simDurationSeconds = 0;
let simNumQuestions = 50; // Default
let simSelectedAreas = [];

function getCurrentLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en';
}

function getMockExamTranslations() {
  const lang = getCurrentLanguage();
  const t = {
    en: {
      "page_title_mock_exam": "Mock Exam - BrainboxMed™",
      "main_title_mock_exam": "Mock Exam",
      "mock_exam_subtitle": "Test your knowledge under exam conditions.",
      "simulation_logout_text": "Logout",
      "logout_confirm_message_simulation": "Are you sure you want to exit? Your current simulation progress will be lost and performance will not be recorded.",
      "legal_notice_text_simulation": "© 2025 BrainboxMed. All rights reserved. This content is for educational and simulation purposes only.",
      "markForReview": "Mark for Review", "unmarkReview": "Unmark Review",
      "previousButton": "Previous", "nextButton": "Next",
      "finalize_simulation_button_text": "Finalize Mock Exam",
      "selectOptionPrompt": "Please select an option before proceeding.",
      "error_processing_question": "An error occurred while processing the question.",
      "error_rendering_question": "Error rendering question.",
      "error_no_questions_found": "No questions found for the selected criteria for this mock exam.",
      "error_question_bank_not_loaded": "Question bank not loaded or empty.",
      "difficulty_easy": "Easy", "difficulty_moderate": "Moderate", "difficulty_hard": "Hard", "difficulty_very_hard": "Very Hard", "difficulty_unknown": "Unknown",
      "question_label_placeholder": "Question ${current}/${total}",
      "revisitingMarkedLabel": "Revisiting Marked ${num}/${total}",
      "blockReviewTitle": "Mock Exam Review",
      "Correct": "Correct", "YourAnswer": "Your Answer", "Explanation": "Explanation",
      "explanation_not_available_default": "Explanation not available",
      "Question_text_not_available": "Question text not available",
      "option_text_not_available": "[Option text not available]",
      "timer_start_button_text": "Start Timer", "timer_pause_button_text": "Pause Timer", "timer_resume_button_text": "Resume Timer",
      "time_up_message_title": "Time's Up!", "time_up_message_body": "Your mock exam data is being finalized. Proceeding to results...",
      "simulation_finished_title": "Mock Exam Finished!",
      "simulation_finished_body": "Your mock exam performance has been recorded. You will now be redirected."
    },
    pt: {
      "page_title_mock_exam": "Simulado (Mock Exam) - BrainboxMed™",
      "main_title_mock_exam": "Simulado (Mock Exam)",
      "mock_exam_subtitle": "Teste seus conhecimentos em condições de prova.",
      "simulation_logout_text": "Sair",
      "logout_confirm_message_simulation": "Tem certeza que deseja sair? O progresso da sua simulação atual será perdido e sua performance não será registrada.",
      "legal_notice_text_simulation": "© 2025 BrainboxMed. Todos os direitos reservados. Este conteúdo é para fins educacionais e de simulação.",
      "markForReview": "Marcar para revisão", "unmarkReview": "Desmarcar revisão",
      "previousButton": "Anterior", "nextButton": "Próxima",
      "finalize_simulation_button_text": "Finalizar Simulado",
      "selectOptionPrompt": "Por favor, selecione uma opção antes de prosseguir.",
      "error_processing_question": "Ocorreu um erro ao processar a questão.",
      "error_rendering_question": "Erro ao renderizar questão.",
      "error_no_questions_found": "Nenhuma questão encontrada para os critérios selecionados para este simulado.",
      "error_question_bank_not_loaded": "Banco de questões não carregado ou vazio.",
      "difficulty_easy": "Fácil", "difficulty_moderate": "Moderada", "difficulty_hard": "Difícil", "difficulty_very_hard": "Muito Difícil", "difficulty_unknown": "Desconhecida",
      "question_label_placeholder": "Questão ${current}/${total}",
      "revisitingMarkedLabel": "Revisando Marcada ${num}/${total}",
      "blockReviewTitle": "Revisão do Simulado",
      "Correct": "Correta", "YourAnswer": "Sua Resposta", "Explanation": "Explicação",
      "explanation_not_available_default": "Explicação não disponível",
      "Question_text_not_available": "Texto da questão não disponível",
      "option_text_not_available": "[Texto da opção não disponível]",
      "timer_start_button_text": "Iniciar Cronômetro", "timer_pause_button_text": "Pausar Cronômetro", "timer_resume_button_text": "Retomar Cronômetro",
      "time_up_message_title": "Tempo Esgotado!", "time_up_message_body": "Os dados do seu simulado estão sendo finalizados. Prosseguindo para os resultados...",
      "simulation_finished_title": "Simulado Finalizado!",
      "simulation_finished_body": "Sua performance no simulado foi registrada. Você será redirecionado."
    },
    es: {
      "page_title_mock_exam": "Simulacro de Examen - BrainboxMed™",
      "main_title_mock_exam": "Simulacro de Examen",
      "mock_exam_subtitle": "Pon a prueba tus conocimientos en condiciones de examen.",
      "simulation_logout_text": "Cerrar Sesión",
      "logout_confirm_message_simulation": "¿Estás seguro de que quieres salir? El progreso de tu simulación actual se perderá y tu rendimiento no será registrado.",
      "legal_notice_text_simulation": "© 2025 BrainboxMed. Todos los derechos reservados. Este contenido es para fines educativos y de simulación.",
      "markForReview": "Marcar para revisar", "unmarkReview": "Desmarcar revisión",
      "previousButton": "Anterior", "nextButton": "Siguiente",
      "finalize_simulation_button_text": "Finalizar Simulacro",
      "selectOptionPrompt": "Por favor, seleccione una opción antes de continuar.",
      "error_processing_question": "Ocurrió un error al procesar la pregunta.",
      "error_rendering_question": "Error al renderizar la pregunta.",
      "error_no_questions_found": "No se encontraron preguntas para los criterios seleccionados para este simulacro.",
      "error_question_bank_not_loaded": "Banco de preguntas no cargado o vacío.",
      "difficulty_easy": "Fácil", "difficulty_moderate": "Moderada", "difficulty_hard": "Difícil", "difficulty_very_hard": "Muy Difícil", "difficulty_unknown": "Desconocida",
      "question_label_placeholder": "Pregunta ${current}/${total}",
      "revisitingMarkedLabel": "Revisando Marcada ${num}/${total}",
      "blockReviewTitle": "Revisión del Simulacro",
      "Correct": "Correcta", "YourAnswer": "Tu Respuesta", "Explanation": "Explicación",
      "explanation_not_available_default": "Explicación no disponible",
      "Question_text_not_available": "Texto de la pregunta no disponible",
      "option_text_not_available": "[Texto de opción no disponible]",
      "timer_start_button_text": "Iniciar Cronómetro", "timer_pause_button_text": "Pausar Cronómetro", "timer_resume_button_text": "Reanudar Cronómetro",
      "time_up_message_title": "¡Tiempo Terminado!", "time_up_message_body": "Los datos de tu simulacro se están finalizando. Procediendo a los resultados...",
      "simulation_finished_title": "¡Simulacro Finalizado!",
      "simulation_finished_body": "Tu rendimiento en el simulacro ha sido registrado. Serás redirigido."
    }
  };
  return (key, params = {}) => {
    // CORREÇÃO AQUI: Acessa o bloco de idioma primeiro, depois a chave.
    const langBlock = t[lang] || t['en']; // Fallback para inglês
    let text = (langBlock && langBlock[key]) || key; // Se a chave não existir no bloco, retorna a própria chave

    for (const param in params) {
        text = text.replace(new RegExp(`\\$\\{${param}\\}`, 'g'), String(params[param]));
    }
    return text;
  };
}
const translateSim = getMockExamTranslations();

function saveSimProgress() {
  const stateToSave = {
    currentIndex,
    userAnswers,
    markedQuestions: Array.from(markedQuestions),
    currentQuestions,
    simDurationSecondsOriginal: simDurationSeconds,
    simNumQuestions,
    simSelectedAreas,
    timeRemaining: window.ProSimulationTimer ? window.ProSimulationTimer.getTotalSeconds() : simDurationSeconds
  };
  try {
    localStorage.setItem(SIM_STATE_KEY, JSON.stringify(stateToSave));
  } catch (e) {
    console.error("Error saving simulation state to localStorage:", e);
  }
}

function loadSimProgress() {
  console.log("[DEBUG] loadSimProgress: Iniciando. Verificando 'simDurationSeconds' global inicial:", simDurationSeconds, "(tipo:", typeof simDurationSeconds, ")");
  const savedStateString = localStorage.getItem(SIM_STATE_KEY);

  if (savedStateString) {
    let stateFromFile;
    try {
      stateFromFile = JSON.parse(savedStateString);
      console.log("[DEBUG] loadSimProgress: Estado parseado do localStorage:", stateFromFile);

      currentIndex = stateFromFile.currentIndex || 0;
      userAnswers = stateFromFile.userAnswers || {};
      markedQuestions.clear();
      (stateFromFile.markedQuestions || []).forEach(id => markedQuestions.add(id));
      currentQuestions = stateFromFile.currentQuestions || [];

      // Lógica para simDurationSeconds:
      // Se timeRemaining existir, usa ele. Senão, tenta simDurationSecondsOriginal.
      // Se nada disso existir, mantém o simDurationSeconds global (que seria o default ou de URL params para nova sessão).
      let valueToAssignDuration = simDurationSeconds; // Default to current global
      if (stateFromFile.timeRemaining !== undefined) {
        valueToAssignDuration = stateFromFile.timeRemaining;
      } else if (stateFromFile.simDurationSecondsOriginal !== undefined) {
        valueToAssignDuration = stateFromFile.simDurationSecondsOriginal;
      }
      simDurationSeconds = valueToAssignDuration;
      console.log("[DEBUG] loadSimProgress: 'simDurationSeconds' atribuído. Novo valor:", simDurationSeconds);

      simNumQuestions = stateFromFile.simNumQuestions || simNumQuestions; // Usa global como fallback
      console.log("[DEBUG] loadSimProgress: 'simNumQuestions' atribuído. Novo valor:", simNumQuestions);

      simSelectedAreas = stateFromFile.simSelectedAreas || simSelectedAreas; // Usa global como fallback
      console.log("[DEBUG] loadSimProgress: 'simSelectedAreas' atribuído. Novo valor:", simSelectedAreas);

      if (currentQuestions.length > 0) {
          console.log("[DEBUG] Mock Exam progress successfully loaded. Time remaining:", simDurationSeconds);
          return true;
      } else {
          console.warn("[DEBUG] loadSimProgress: Loaded state but currentQuestions is empty. Treating as new session.");
          localStorage.removeItem(SIM_STATE_KEY); // Clear potentially corrupt state
          return false;
      }
    } catch (e_parse) {
      console.error("[DEBUG] Error em loadSimProgress (ex: JSON.parse ou atribuições):", e_parse);
      localStorage.removeItem(SIM_STATE_KEY); // Limpa estado possivelmente corrompido
    }
  } else {
      console.log("[DEBUG] loadSimProgress: No saved state found for key:", SIM_STATE_KEY);
  }
  return false;
}

function applySimStaticTranslations() {
    console.log("Attempting to apply static translations...");
    document.title = translateSim("page_title_mock_exam");
    const mainTitleEl = document.getElementById("main-title");
    if (mainTitleEl) mainTitleEl.textContent = translateSim("main_title_mock_exam");

    const subtitleEl = document.getElementById("sub-title");
    if (subtitleEl) subtitleEl.textContent = translateSim("mock_exam_subtitle");

    const logoutTextSpan = document.getElementById("simulation_logout_text");
    if (logoutTextSpan) logoutTextSpan.textContent = translateSim("simulation_logout_text");

    const legalNoticeEl = document.getElementById("legal-notice-text");
    if (legalNoticeEl) legalNoticeEl.textContent = translateSim("legal_notice_text_simulation");
    console.log("applySimStaticTranslations finished.");
}

function setupSimLogoutButton() {
    const logoutBtn = document.getElementById('simulation-logout-button');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (window.ProSimulationTimer && typeof window.ProSimulationTimer.isRunning === 'function' && window.ProSimulationTimer.isRunning()) {
                window.ProSimulationTimer.pause(); // Pausa o timer se estiver rodando
            }
            if (confirm(translateSim("logout_confirm_message_simulation"))) {
                localStorage.removeItem(SIM_STATE_KEY);
                console.log("User exited Mock Exam. Performance not saved.");
                window.location.href = '../login.html'; // Ajuste o caminho se necessário
            } else {
                // Se o usuário cancelar, e o timer estava rodando, pode ser desejável retomá-lo
                // Isso depende da UX desejada. Por ora, ele permanece pausado.
            }
        });
    } else {
        console.error("Logout button 'simulation-logout-button' not found for setup.");
    }
}

function initializeMockExam() {
  console.log("Initializing Mock Exam (initializeMockExam function)...");

  applySimStaticTranslations(); // Aplicar traduções estáticas no início
  setupSimLogoutButton();       // Configurar botão de logout

  const urlParams = new URLSearchParams(window.location.search);
  const initialDurationParam = urlParams.get('duration');
  const initialNumQuestionsParam = urlParams.get('num_questions');
  const initialAreasParam = urlParams.get('areas');

  const defaultDurationMinutes = 120;
  const defaultNumQuestions = 50;

  // Redefinir simDurationSeconds para o default antes de tentar carregar,
  // para que o fallback em loadSimProgress funcione corretamente para novas sessões.
  simDurationSeconds = defaultDurationMinutes * 60;
  simNumQuestions = defaultNumQuestions;
  simSelectedAreas = [];

  let isNewSession = !loadSimProgress() || currentQuestions.length === 0;

  if (isNewSession) {
    console.log("Starting new Mock Exam session from URL params or defaults.");
    localStorage.removeItem(SIM_STATE_KEY); // Garante que não há estado antigo
    currentIndex = 0;
    userAnswers = {};
    markedQuestions.clear();

    simDurationSeconds = (initialDurationParam && !isNaN(parseInt(initialDurationParam)))
                         ? parseInt(initialDurationParam) * 60
                         : defaultDurationMinutes * 60;
    simNumQuestions = (initialNumQuestionsParam && !isNaN(parseInt(initialNumQuestionsParam)))
                       ? parseInt(initialNumQuestionsParam)
                       : defaultNumQuestions;
    if (initialAreasParam && initialAreasParam.trim() !== "") {
      simSelectedAreas = initialAreasParam.split(',').map(area => area.trim().toLowerCase()).filter(area => area);
    } else {
      simSelectedAreas = []; // Default para todas as áreas se não especificado ou vazio
    }

    if (typeof questionBank !== 'undefined' && typeof questionBank.generateQuiz === 'function') {
        currentQuestions = questionBank.generateQuiz('exam', simNumQuestions, simSelectedAreas);
    } else {
        console.error("questionBank.generateQuiz is not a function or questionBank is undefined!");
        currentQuestions = [];
        displaySimError(translateSim("error_question_bank_not_loaded"));
        return;
    }

    if (currentQuestions.length === 0) {
        console.error("Generated 0 questions for the mock exam. Check generateQuiz logic and area selection.");
        displaySimError(translateSim("error_no_questions_found"));
        return; // Não prosseguir se não houver questões
    }
    saveSimProgress(); // Salva o estado inicial da nova sessão
  } else {
    console.log("Continuing previous Mock Exam session. Loaded time remaining:", simDurationSeconds);
    // Garantir que os parâmetros da sessão carregada (num perguntas, areas) sejam mantidos
    // simNumQuestions e simSelectedAreas já foram atualizados por loadSimProgress
  }

  console.log(`Mock Exam Active Params: Duration=${simDurationSeconds/60}min, NumQuestions=${currentQuestions.length}, Areas=${simSelectedAreas.join(', ') || 'All'}`);

  if (currentQuestions && currentQuestions.length > 0) {
    if (window.ProSimulationTimer && typeof window.ProSimulationTimer.init === 'function') {
        console.log("Initializing ProSimulationTimer with duration:", simDurationSeconds);
        window.ProSimulationTimer.init({
            durationSeconds: simDurationSeconds,
            displayId: 'timer-display',
            buttonId: 'timer-start-stop-button',
            containerId: 'simulation-timer-container',
            translateFunction: translateSim,
            saveProgressFunction: saveSimProgress, // Passa a função de salvar progresso
            timeUpCallback: () => {
                console.log("Timer timeUpCallback: Finalizing simulation.");
                finalizeSimulation(true); // Passa true para indicar que foi por tempo esgotado
            }
        });
    } else {
        console.error("ProSimulationTimer module not loaded or init function not found.");
        const timerButton = document.getElementById('timer-start-stop-button');
        if (timerButton) timerButton.disabled = true; // Desabilita se o timer não puder ser iniciado
    }
    renderQuestion(currentQuestions[currentIndex]);
  } else {
    console.error("No questions available for the mock exam after initialization attempt.");
    // displaySimError já foi chamado se currentQuestions.length === 0 em nova sessão
    const timerButton = document.getElementById('timer-start-stop-button');
    if (timerButton) {
        timerButton.textContent = translateSim("timer_start_button_text"); // Tenta traduzir o texto
        timerButton.disabled = true;
    }
  }
}

function renderQuestion(question) {
  const quizContainer = document.getElementById('quiz-container');
  const lang = getCurrentLanguage();

  if (!quizContainer) {
    console.error("Error rendering question: quizContainer not found.");
    displaySimError("Error interno: quizContainer não encontrado."); // Usar chave de tradução se existir
    return;
  }
  if (!question || typeof question.id === 'undefined') {
    console.error("Error rendering question: question object or question.id is invalid.", "Question:", question);
    displaySimError(translateSim("error_rendering_question"));
    return;
  }

  // Embaralhar opções se a função existir no questionBank
  if (typeof questionBank !== 'undefined' && typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function') {
      questionBank.shuffleOptionsAndUpdateCorrect(question);
  }

  let questionLabelText;
  let prevButtonDisabled;
  const totalNumOfQuestionsInExam = currentQuestions.length;

  if (isRevisitingMarkedQuestions) {
    const currentNumReview = currentRevisitIndex + 1;
    const totalMarked = markedQuestionsToRevisit.length;
    questionLabelText = translateSim("revisitingMarkedLabel", {num: currentNumReview, total: totalMarked});
    prevButtonDisabled = currentRevisitIndex === 0;
  } else {
    const currentNum = currentIndex + 1;
    questionLabelText = translateSim("question_label_placeholder", {current: currentNum, total: totalNumOfQuestionsInExam});
    prevButtonDisabled = currentIndex === 0;
  }

  const difficultyKey = question.level ? String(question.level).toLowerCase().replace(/\s+/g, '_') : 'unknown';
  const difficultyText = translateSim(`difficulty_${difficultyKey}`);
  const difficultyBadgeClasses =
        difficultyKey === 'easy' ? 'bg-green-100 text-green-700' :
        difficultyKey === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
        difficultyKey === 'hard' ? 'bg-red-100 text-red-700' :
        difficultyKey === 'very_hard' ? 'bg-purple-100 text-purple-700' :
        'bg-gray-100 text-gray-700';

  const optionsHTML = (Array.isArray(question.options) ? question.options : []).map((opt, index) => {
      const textoOpt = (opt.text && (opt.text[lang] || opt.text['en'])) || translateSim("option_text_not_available");
      const isChecked = userAnswers[question.id] === index;
      return `
      <div class="flex items-center option-container py-1">
        <input type="radio" name="question_${question.id}" value="${index}"
                id="q${question.id}_opt${index}" ${isChecked ? 'checked' : ''}
                class="peer h-4 w-4 transform scale-125 accent-purple-600 focus:ring-purple-500 focus:ring-offset-0 focus:ring-2">
        <label for="q${question.id}_opt${index}"
                class="ml-3 block flex-1 text-gray-800 bg-white border border-gray-300 rounded-lg p-4 cursor-pointer
                        hover:border-purple-400 hover:bg-purple-50 transition-colors duration-150
                        peer-checked:border-purple-500 peer-checked:bg-purple-50 peer-checked:shadow-md">
          ${textoOpt}
        </label>
      </div>`;
  }).join('');

  const questionText = (question.question && (question.question[lang] || question.question['en'])) || translateSim("Question_text_not_available");

   quizContainer.innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-purple-700">${questionLabelText}</h2>
        <span class="text-xs font-bold px-2 py-1 rounded-full ${difficultyBadgeClasses}">${difficultyText}</span>
      </div>
      <div class="text-gray-800 mb-6 text-base prose max-w-none">${questionText}</div>
      <form id="question-form" class="space-y-3">${optionsHTML}</form>
      <div class="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button type="button" id="mark-btn" onclick="toggleSimMark('${question.id}')" class="mb-3 sm:mb-0">
          {/* Content set by updateSimMarkButton */}
        </button>
        <div class="flex gap-x-3">
          <button type="button" onclick="handleSimPreviousQuestionClick()" id="prev-btn"
                  class="px-6 py-2.5 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  ${prevButtonDisabled ? 'disabled' : ''}>
            ⬅️ ${translateSim("previousButton")}
          </button>
          <button type="button" onclick="handleSimNextQuestionClick()" id="next-btn"
                  class="px-6 py-2.5 text-sm font-medium bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:ring-4 focus:ring-purple-300">
            ${currentIndex === totalNumOfQuestionsInExam - 1 && !isRevisitingMarkedQuestions ? translateSim("finalize_simulation_button_text") : translateSim("nextButton")} ➡️
          </button>
        </div>
      </div>
    </div>`;

  updateSimMarkButton(question.id);

  const radios = document.querySelectorAll(`input[type="radio"][name="question_${question.id}"]`);
  radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
      userAnswers[question.id] = parseInt(event.target.value);
      saveSimProgress();
      // Auto-start timer on first answer if not already running
      if (window.ProSimulationTimer &&
          typeof window.ProSimulationTimer.isRunning === 'function' &&
          !window.ProSimulationTimer.isRunning() &&
          typeof window.ProSimulationTimer.getTotalSeconds === 'function' &&
          window.ProSimulationTimer.getTotalSeconds() > 0) {
        console.log("Timer auto-starting on first answer selection via module.");
        window.ProSimulationTimer.start();
      }
    });
  });
  window.scrollTo(0, 0); // Scroll to top after rendering new question
}

function updateSimMarkButton(questionId) {
  const markBtn = document.getElementById("mark-btn");
  if (!markBtn) return;
  const isMarked = markedQuestions.has(String(questionId)); // Ensure ID is string for Set consistency if needed
  markBtn.innerHTML = `🔖 ${translateSim(isMarked ? "unmarkReview" : "markForReview")}`;
  markBtn.className = `text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 transition-colors ${isMarked ? 'text-red-600 hover:underline' : 'text-yellow-600 hover:underline'}`;
}

function toggleSimMark(questionId) {
  const strQuestionId = String(questionId); // Ensure consistency if IDs are sometimes numbers
  if (markedQuestions.has(strQuestionId)) {
    markedQuestions.delete(strQuestionId);
  } else {
    markedQuestions.add(strQuestionId);
  }
  saveSimProgress();
  updateSimMarkButton(strQuestionId);
}

function handleSimPreviousQuestionClick() {
  if (isRevisitingMarkedQuestions) {
    if (currentRevisitIndex > 0) {
      currentRevisitIndex--;
      renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
    }
  } else {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentQuestions[currentIndex]);
    }
  }
}

function handleSimNextQuestionClick() {
  const currentQObject = isRevisitingMarkedQuestions ? markedQuestionsToRevisit[currentRevisitIndex] : currentQuestions[currentIndex];
  if (!currentQObject || typeof currentQObject.id === 'undefined') {
    console.error("NextClick: Current question object is invalid.");
    return;
  }
  if (!document.querySelector(`input[name="question_${currentQObject.id}"]:checked`)) {
    alert(translateSim("selectOptionPrompt"));
    return;
  }

  if (isRevisitingMarkedQuestions) {
    currentRevisitIndex++;
    if (currentRevisitIndex < markedQuestionsToRevisit.length) {
      renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
    } else {
      isRevisitingMarkedQuestions = false; // Finished revisiting
      finalizeSimulation(false); // Finalize after review
    }
  } else { // Navigating regular questions
    if (currentIndex < currentQuestions.length - 1) {
      currentIndex++;
      renderQuestion(currentQuestions[currentIndex]);
    } else { // Reached the end of regular questions
      markedQuestionsToRevisit = currentQuestions.filter(q => markedQuestions.has(String(q.id)));
      if (markedQuestionsToRevisit.length > 0) {
        isRevisitingMarkedQuestions = true;
        currentRevisitIndex = 0;
        console.log("End of regular questions. Starting review of marked questions.");
        renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
      } else {
        finalizeSimulation(false); // No marked questions to review, finalize directly
      }
    }
  }
}

function finalizeSimulation(timedOut = false) {
    console.log("Finalizing Mock Exam. Timed out: ", timedOut);
    if (window.ProSimulationTimer && typeof window.ProSimulationTimer.pause === 'function') {
        window.ProSimulationTimer.pause();
    }

    let correctAnswers = 0;
    let totalAnswered = 0;
    currentQuestions.forEach(q => {
        if (q && userAnswers.hasOwnProperty(String(q.id))) { // Ensure q exists and use string ID
            totalAnswered++;
            if (userAnswers[String(q.id)] === q.correct) {
                correctAnswers++;
            }
        }
    });
    const accuracy = totalAnswered > 0 ? (correctAnswers / totalAnswered) * 100 : 0;

    // Safely parse loadedState or use an empty object
    let loadedState = {};
    try {
        const savedStateString = localStorage.getItem(SIM_STATE_KEY);
        if (savedStateString) {
            loadedState = JSON.parse(savedStateString);
        }
    } catch (e) {
        console.error("Error parsing SIM_STATE_KEY for finalizeSimulation:", e);
    }

    const originalDurationForCalc = loadedState.simDurationSecondsOriginal || simDurationSeconds;
    const timeElapsed = window.ProSimulationTimer ? (originalDurationForCalc - Math.max(0, window.ProSimulationTimer.getTotalSeconds())) : originalDurationForCalc;

    const performanceData = {
        totalQuestions: currentQuestions.length,
        answeredQuestions: totalAnswered,
        correctAnswers: correctAnswers,
        accuracy: parseFloat(accuracy.toFixed(2)),
        areas: (Array.isArray(simSelectedAreas) ? simSelectedAreas.join(', ') : '') || 'All',
        durationSettingInMinutes: originalDurationForCalc / 60,
        timeTakenInSeconds: Math.max(0, timeElapsed), // Use timeElapsed
        timestamp: new Date().toISOString(),
        questions: currentQuestions.map(q => q ? { // Add null check for q
            id: q.id,
            questionText: q.question, // Assuming question object has text directly or localized map
            options: Array.isArray(q.options) ? q.options.map(opt => ({text: opt.text, explanation: opt.explanation})) : [],
            correctOptionIndex: q.correct,
            userAnswerIndex: userAnswers[String(q.id)],
            isMarked: markedQuestions.has(String(q.id)),
            isCorrect: userAnswers[String(q.id)] === q.correct
        } : null).filter(q => q !== null) // Filter out any nulls if questions were bad
    };

    console.log("Mock Exam Performance:", performanceData);
    try {
        localStorage.setItem('lastMockExamResult', JSON.stringify(performanceData));
    } catch (e) {
        console.error("Error saving lastMockExamResult to localStorage:", e);
    }

    localStorage.removeItem(SIM_STATE_KEY); // CRITICAL: Remove state BEFORE alert
    console.log("SIM_STATE_KEY removed by finalizeSimulation.");

    const messageBody = timedOut ? translateSim("time_up_message_body") : translateSim("simulation_finished_body");
    const title = timedOut ? translateSim("time_up_message_title") : translateSim("simulation_finished_title");

    alert(title + "\n" + messageBody);

    window.location.href = `../Dashboard/Dashboard-Simulation.html?from=sim&result=latest`;
}

function displaySimError(messageKeyOrMessage) {
  const container = document.getElementById('quiz-container');
  // Tenta traduzir se for uma chave, senão usa a mensagem diretamente.
  const translatedMessage = translateSim(messageKeyOrMessage) === messageKeyOrMessage
                            ? messageKeyOrMessage // Se não houve tradução, é uma mensagem literal
                            : translateSim(messageKeyOrMessage); // Senão, é o resultado da tradução

  if (container) {
    container.innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mt-4" role="alert"><strong>${translateSim("error_processing_question")}:</strong> ${translatedMessage}</div>`;
  }
  console.error("Mock Exam Error:", translatedMessage);
}

function waitForQuestionBankAndStart(startQuizFunction) {
    console.log("waitForQuestionBankAndStart: Checking dependencies...");
    const checkInterval = 300; // ms
    const maxAttempts = 20; // Total wait time = 300ms * 20 = 6 seconds
    let attempts = 0;

    function check() {
        attempts++;
        if (typeof questionBank !== 'undefined' &&
            typeof questionBank.getAllQuestions === 'function' &&
            typeof questionBank.generateQuiz === 'function') {

            console.log("questionBank object seems available with necessary methods.");
            // Adicionar um pequeno delay para garantir que os bancos individuais foram carregados
            setTimeout(() => {
                if (questionBank.getAllQuestions().length > 0) {
                    console.log("Question bank populated. Initializing quiz...");
                    startQuizFunction();
                } else {
                    console.error("ERROR: Question bank is empty even after questionBank object is available.");
                    displaySimError(translateSim("error_question_bank_not_loaded"));
                }
            }, 500); // Pequeno delay para bancos de questões carregarem seus arrays
        } else {
            if (attempts < maxAttempts) {
                console.warn(`Waiting for questionBank (attempt ${attempts}/${maxAttempts}). Trying again in ${checkInterval}ms.`);
                console.log("Current status: questionBank defined?", typeof questionBank !== 'undefined',
                            "getAllQuestions exists?", typeof questionBank?.getAllQuestions === 'function',
                            "generateQuiz exists?", typeof questionBank?.generateQuiz === 'function');
                setTimeout(check, checkInterval);
            } else {
                console.error("ERROR: questionBank did not become available after maximum attempts.");
                displaySimError(translateSim("error_question_bank_not_loaded"));
            }
        }
    }
    check(); // Start the first check
}

// Listener para DOMContentLoaded - essencial para iniciar o simulado
document.addEventListener('DOMContentLoaded', () => {
    console.log("TESTE: CALLBACK DO DOMContentLoaded INICIOU!");
    window.scrollTo(0, 0);
    console.log("Mock Exam (simulation.html) DOM loaded. Preparing to start quiz...");
    waitForQuestionBankAndStart(initializeMockExam);
});

// Se a funcionalidade de 'languageChanged' for necessária, adicione o listener aqui,
// similar ao DOMContentLoaded, garantindo que não há erros de sintaxe.
// Exemplo:
/*
window.addEventListener('languageChanged', () => {
  console.log("Idioma alterado dinamicamente. Reaplicando traduções...");
  applySimStaticTranslations();

  if (currentQuestions && currentQuestions.length > 0 && currentIndex < currentQuestions.length) {
    const currentQ = isRevisitingMarkedQuestions
                     ? markedQuestionsToRevisit[currentRevisitIndex]
                     : currentQuestions[currentIndex];
    if (currentQ) {
      renderQuestion(currentQ);
    }
  } else {
    console.warn("languageChanged: No current question to re-render or invalid state.");
  }
});
*/