// pro-simulation.js
console.log("pro-simulation.js LOADED - Initializing Pro Simulation logic.");

// --- Constantes Globais ---
const markedQuestions = new Set();

// --- Variáveis de Estado Globais do Quiz ---
let questionHistory = [];
let shownQuestionIds = [];
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let previousWrongIds = [];
let isRevisitingMarkedQuestions = false;
let markedQuestionsToRevisit = [];
let currentRevisitIndex = 0;     
let currentQuestionObject = null;
let questionsAnsweredInBlock = 0;

// --- Variáveis Globais Específicas da Simulação ---
let simDurationSeconds = 0;
let simNumQuestions = 50;
let simSelectedAreas = []; 

// Funções
function getCurrentLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en';
}

function getTranslations() {
  const lang = getCurrentLanguage();   
  const t = {
    // Chaves para botões de navegação e marcação
    "markForReview": { en: "Mark for Review", pt: "Marcar para revisão", es: "Marcar para revisar" },
    "unmarkReview": { en: "Unmark Review", pt: "Desmarcar revisão", es: "Desmarcar revisión" },
    "previousButton": { en: "Previous", pt: "Anterior", es: "Anterior" },
    "nextButton": { en: "Next", pt: "Próxima", es: "Siguiente" },
    "returnToQuizButton": { en: "➕ Next Block", pt: "➕ Próximo Bloco", es: "➕ Siguiente Bloque" }, // Usado em showReviewMode

    // Chaves para alertas e mensagens de erro
    "selectOptionPrompt": { en: "Please select an option before proceeding.", pt: "Por favor, selecione uma opção antes de prosseguir.", es: "Por favor, seleccione una opción antes de continuar." },
    "error_processing_question": { en: "An error occurred while processing the current question. Please try reloading or contact support.", pt: "Ocorreu um erro ao processar a questão atual. Tente recarregar ou contate o suporte.", es: "Ocurrió un error al procesar la pregunta actual. Intente recargar o contacte al soporte."},
    "error_rendering_question": { en: "Error rendering question.", pt: "Erro ao renderizar questão.", es: "Error al renderizar la pregunta." },
    "error_no_questions_found": { en: "No questions found in the database.", pt: "Nenhuma questão encontrada no banco de dados.", es: "No se encontraron preguntas en la base de datos."},
    "error_question_bank_not_loaded": { en: "Question bank not loaded or empty.", pt: "Banco de questões não carregado ou vazio.", es: "Banco de preguntas no cargado o vacío."},
    "error_loading_questions": { en: "Error loading questions.", pt: "Erro ao carregar as questões.", es: "Error al cargar las preguntas."},

    // Chaves para níveis de dificuldade (IMPORTANTE: use "very_hard" se seus dados usam "very_hard")
    "difficulty_easy": { en: "Easy", pt: "Fácil", es: "Fácil" },
    "difficulty_moderate": { en: "Moderate", pt: "Moderada", es: "Moderada" }, // A chave no seu arquivo estava "moderado", deve ser "moderate" se o dado for "moderate"
    "difficulty_hard": { en: "Hard", pt: "Difícil", es: "Difícil" },
    "difficulty_very_hard": { en: "Very Hard", pt: "Muito Difícil", es: "Muy Difícil" }, // Alterado de "difficulty_muito_dificil" para "difficulty_very_hard"

    // Chaves para a interface do quiz e revisão
    "question_label_placeholder": { en: "Question X/Y", pt: "Questão X/Y", es: "Pregunta X/Y" },
    "revisitingMarkedLabel": { en: "Revisiting Marked ${num}/${total}", pt: "Revisando Marcada ${num}/${total}", es: "Revisando Marcada ${num}/${total}" },
    "blockReviewTitle": { en: "Block Review", pt: "Revisão do Bloco", es: "Revisión del Bloque" },
    "markedQuestionsReviewTitle": { en: "Review Your Marked Questions", pt: "Revise Suas Questões Marcadas", es: "Revise Sus Preguntas Marcadas" },
    "unmarkButtonText": { en: "Unmark this question", pt: "Desmarcar esta questão", es: "Desmarcar esta pregunta" },
    "Unmarked": { en: "Unmarked", pt: "Desmarcada", es: "Desmarcada" },
    "No_marked_questions_to_review_in_this_block": { en: "No marked questions to review in this block.", pt: "Nenhuma questão marcada para revisar neste bloco.", es: "No hay preguntas marcadas para revisar en este bloque." },
    "Question_text_not_available": { en: "Question text not available", pt: "Texto da questão não disponível", es: "Texto de la pregunta no disponible"},
    "explanation_not_available_default": { en: "Explanation not available", pt: "Explicação não disponível", es: "Explicación no disponible"},
    
    // Chaves genéricas de revisão (se ainda não existirem de forma mais específica)
    "Question": { en: "Question", pt: "Questão", es: "Pregunta" },
    "Correct": { en: "Correct", pt: "Correta", es: "Correcta" }, // Para indicar a resposta correta
    "YourAnswer": { en: "Your Answer", pt: "Sua Resposta", es: "Tu Respuesta" },
    "Explanation": { en: "Explanation", pt: "Explicação", es: "Explicación" },

    // Dentro do objeto t na função getTranslations()
    "timer_start_button_text": { en: "Start Timer", pt: "Iniciar Cronômetro", es: "Iniciar Cronómetro" },
    "timer_pause_button_text": { en: "Pause Timer", pt: "Pausar Cronômetro", es: "Pausar Cronómetro" },
    "timer_resume_button_text": { en: "Resume Timer", pt: "Retomar Cronômetro", es: "Reanudar Cronómetro" },
    "time_up_message_title": {en: "Time's Up!", pt: "Tempo Esgotado!", es: "¡Tiempo Terminado!"}, // Corrigido para ¡Tiempo Terminado!
    "time_up_message_body": {en: "Your data is being saved. The quiz will proceed to the review page.", pt: "Seus dados estão sendo salvos. O quiz prosseguirá para a página de revisão.", es: "Tus datos se están guardando. El quiz procederá a la página de revisión."}

  };

  // Retorna uma função que busca a tradução
  return (key) => {
    if (t[key] && t[key][lang]) {
      return t[key][lang];
    }
    console.warn(`Translation key not found for "${key}" in language "${lang}". Using key as fallback.`);
    return key; // Retorna a própria chave como fallback
  };
}

function initializeProSimulationQuiz() {
  console.log("Initializing Pro Simulation Quiz...");

  // A busca direta dos elementos do timer (timerDisplay, timerStartStopButton, timerContainer)
  // e a adição de seus listeners SÃO REMOVIDAS DAQUI.
  // Isso agora será responsabilidade do módulo ProSimulationTimer.

  const urlParams = new URLSearchParams(window.location.search);
  const durationParam = urlParams.get('duration');
  const numQuestionsParam = urlParams.get('num_questions');
  const areasParam = urlParams.get('areas');
  const translate = getTranslations(); // Função getTranslations() ainda está em pro-simulation.js

  // Estas variáveis de simulação permanecem em pro-simulation.js
  simDurationSeconds = (durationParam && !isNaN(parseInt(durationParam))) ? parseInt(durationParam) * 60 : (120 * 60); //
  simNumQuestions = (numQuestionsParam && !isNaN(parseInt(numQuestionsParam))) ? parseInt(numQuestionsParam) : 50; //
  
  if (areasParam) { //
    simSelectedAreas = areasParam.split(',').map(area => area.trim().toLowerCase()).filter(area => area); //
  } else {
    simSelectedAreas = []; //
  }
  
  console.log(`Simulation Params: Duration=${simDurationSeconds/60}min, NumQuestions=${simNumQuestions}, Areas=${simSelectedAreas.join(', ') || 'All'}`);

   // Configurar o cronômetro através do MÓDULO ProSimulationTimer
  if (window.ProSimulationTimer && typeof window.ProSimulationTimer.init === 'function') {
    window.ProSimulationTimer.init({
      durationSeconds: simDurationSeconds,        // Duração vinda dos parâmetros da URL ou default
      displayId: 'timer-display',               // ID do elemento HTML para o display do tempo
      buttonId: 'timer-start-stop-button',      // ID do elemento HTML para o botão start/stop
      containerId: 'simulation-timer-container',  // ID do elemento HTML para o container do timer
      translateFunction: translate,             // Passa a função de tradução
      saveProgressFunction: saveProgress,       // Passa a função saveProgress deste arquivo
      timeUpCallback: () => {                   // Função a ser chamada quando o tempo acabar
          // A função saveProgress já foi chamada dentro do handleTimeUpInternal do módulo timer.
          console.log("Time's up! ProSimulationTimer callback executing showReviewMode."); // Padrão Inglês
          showReviewMode(); // Chama showReviewMode que está neste arquivo (pro-simulation.js)
      } 
    });
    // A lógica de visibilidade inicial do timer (ex: setTimerDisplayVisibility(false))
    // e a configuração inicial do botão (ex: texto "Start Timer")
    // agora são tratadas DENTRO do ProSimulationTimer.init().
  } else {
    console.error("ProSimulationTimer module not loaded or init function not found. Timer will not work."); // Padrão Inglês
    // Você pode querer desabilitar o botão de start/stop do HTML aqui, ou mostrar uma mensagem de erro mais proeminente.
    const TSB = document.getElementById('timer-start-stop-button'); // Tenta pegar o botão para desabilitar
    if (TSB) TSB.disabled = true;
  }
  // --- FIM DA MODIFICAÇÃO PRINCIPAL ---
  
  localStorage.removeItem('proSimulationState'); //
  
  prepareSimulationQuestions(); //
}

function prepareSimulationQuestions() {
  const translate = getTranslations(); // [1]
  console.log(`Preparing ${simNumQuestions} questions for areas: ${simSelectedAreas.join(', ') || 'All Areas'}`); // Padrão Inglês [1]

  // Usa a função generateQuiz do banco-questoes.js [4], passando os filtros
  currentQuestions = questionBank.generateQuiz('exam', simNumQuestions, simSelectedAreas); // [1, 4]

  if (currentQuestions && currentQuestions.length > 0) {
    console.log(`Successfully generated ${currentQuestions.length} questions for simulation.`); // Padrão Inglês [1]
    currentIndex = 0; // [1]
    userAnswers = {}; // [1]
    markedQuestions.clear(); // [1]
    
    // Para simulações, geralmente o histórico de "já vistas" é da própria simulação
    shownQuestionIds = []; // [1]
    previousWrongIds = []; // [1]
    isRevisitingMarkedQuestions = false; // [1]
    markedQuestionsToRevisit = []; // [1]
    currentRevisitIndex = 0; // [1]
    
    renderQuestion(currentQuestions[currentIndex]); // [1]

    // A lógica de iniciar o cronômetro foi removida daqui.
    // O cronômetro será iniciado:
    // 1. Pelo usuário clicando no botão "Start Timer" (gerenciado pelo módulo pro-simulation-timer.js).
    // 2. Automaticamente ao selecionar a primeira resposta (lógica em renderQuestion que chamará window.ProSimulationTimer.start()).
    // Não há necessidade de chamar toggleTimer() ou window.ProSimulationTimer.start() diretamente aqui
    // se essa não for a intenção de auto-start imediato ao preparar as questões.

  } else {
    console.error("Failed to prepare simulation questions. No questions returned or question bank is empty for the selected criteria."); // Padrão Inglês [1]
    displayQuizError(translate("error_no_questions_found")); // [1]
    
    // Não vamos mais manipular o timerStartStopButton diretamente daqui,
    // pois ele será gerenciado pelo módulo pro-simulation-timer.js.
    // Se a preparação falhar, o usuário verá o erro via displayQuizError.
    // O botão do timer, se já inicializado pelo módulo, pode permanecer como está.
    // O quiz não funcionará de qualquer maneira sem questões.
    // REMOVA: if (timerStartStopButton) timerStartStopButton.disabled = true;
  }
}

function waitForQuestionBankAndStart(startQuizFunction) { // Verifica se o banco de questões está pronto e inicia o quiz
    console.log("waitForQuestionBankAndStart: Checking if questionBank is ready...");
    if (
      typeof questionBank !== 'undefined' &&
      questionBank.externalBanks && Array.isArray(questionBank.externalBanks) &&
      typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function'
    ) {
      console.log("questionBank seems defined. Waiting a moment to ensure it's populated...");
      setTimeout(() => {
        // Verifique se o banco tem questões *após* a carga dos arquivos de questão
        if (questionBank.getAllQuestions().length > 0) {
          console.log("Question bank populated. Initializing quiz...");
          if (typeof startQuizFunction === 'function') {
            startQuizFunction();
          } else {
            console.error("Initialization function not provided to waitForQuestionBankAndStart");
          }
        } else {
          console.error("ERROR: Question bank is empty even after waiting.");
          const translate = getTranslations();
          displayQuizError(translate("error_loading_questions"));
        }
      }, 500); 
    } else {
      console.log("Waiting for questionBank definition. Trying again in 300ms.");
      setTimeout(() => waitForQuestionBankAndStart(startQuizFunction), 300);
    }
}

function fetchAndDisplayFirstQuestion() { // Busca e exibe a primeira questão do quiz
    if (typeof questionBank !== 'undefined' && questionBank.externalBanks && questionBank.externalBanks.length > 0) {
        const allQuestions = [].concat(...questionBank.externalBanks);
    if (allQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      currentQuestionObject = allQuestions[randomIndex];
      
      // Embaralha as opções desta questão específica
      questionBank.shuffleOptionsAndUpdateCorrect(currentQuestionObject); // Usa a função do banco-questoes.js
      
      renderQuestion(currentQuestionObject);
    } else {
      displayQuizError("Nenhuma questão encontrada no banco de dados.");
    }
  } else {
    displayQuizError("Banco de questões não carregado ou vazio.");
  }
}

function getOptionText(opt, lang = 'en') { // Função para obter o texto da opção com fallback
  if (opt && typeof opt === 'object') {
    if (opt.text && typeof opt.text === 'object') {
      return opt.text[lang] || opt.text.en || '[no text]';
    }
  }
  return '[no text]';
}

function markForReview(questionId) { // Função para marcar uma questão para revisão
  markedQuestions.add(questionId);
  saveProgress(); // saveProgress() já deve estar definida
  updateMarkButton(questionId); // Atualiza o visual do botão
  console.log(`Question ${questionId} marked for review.`);
  }

function unmarkQuestion(questionId) { // Função para desmarcar uma questão para revisão
  markedQuestions.delete(questionId);
  saveProgress(); // saveProgress() já deve estar definida
  updateMarkButton(questionId); // Atualiza o visual do botão
  console.log(`Question ${questionId} unmarked for review.`);
 }

function updateMarkButton(questionId) { // Função para alternar entre marcar e desmarcar uma questão
  const markBtn = document.getElementById("mark-btn");
  const translate = getTranslations(); // Chama a função que agora existe
  
  if (!markBtn) {
    // console.warn('"mark-btn" não encontrado no DOM para updateMarkButton');
    return; // Adicionado para evitar erro se o botão não existir temporariamente durante o render
  }

  const isMarked = markedQuestions.has(questionId);
  const buttonTextKey = isMarked ? "unmarkReview" : "markForReview";
  const buttonText = translate(buttonTextKey);
  const emoji = "🔖 ";

  markBtn.innerHTML = emoji + buttonText; // innerHTML para o emoji

  const baseClasses = "text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 transition-colors";
  if (isMarked) {
    markBtn.className = `${baseClasses} text-red-600 hover:underline`;
  } else {
    markBtn.className = `${baseClasses} text-yellow-600 hover:underline`;
  }
}

function toggleMark(questionId) { // Função para alternar o estado de marcação de uma questão
  if (markedQuestions.has(questionId)) {
    unmarkQuestion(questionId);
  } else {
    markForReview(questionId);
  }
}

function renderQuestion(question) {
  const quizContainer = document.getElementById('quiz-container');  
  const lang = getCurrentLanguage();
  const translate = getTranslations();

  if (!quizContainer || !question || typeof question.id === 'undefined') { 
    console.error("Error rendering question: container, question object, or question.id is invalid.", "Question:", question);
    displayQuizError(translate("error_rendering_question"));
    return; 
  }

  console.log("🧪 container found?", quizContainer); 
  console.log("📄 question received:", question, "isRevisitingMarkedQuestions:", isRevisitingMarkedQuestions); 

 // Dentro da sua função renderQuestion no pro-simulation.js [27, 28, 29, 30, 31, 32]
// ... (const quizContainer, lang, translate são definidos antes) ...

  let questionLabelText;
  let prevButtonDisabled;

  if (isRevisitingMarkedQuestions) { // [27, 28, 29, 30, 31, 32]
    const currentNumReview = currentRevisitIndex + 1; // [27, 28, 29, 30, 31, 32]
    const totalMarked = markedQuestionsToRevisit.length; // [27, 28, 29, 30, 31, 32]
    
   
    let labelTemplate = translate("revisitingMarkedLabel"); // [27, 28, 29, 30, 31, 32]

    // Cria a string para o número atual, já com o span, se desejar o span aqui
    const numWithSpan = `<span class="math-inline">${currentNumReview}</span>`;
    
    labelTemplate = labelTemplate.replace("${num}", numWithSpan);
    labelTemplate = labelTemplate.replace("${total}", totalMarked);
    
    questionLabelText = labelTemplate;
    prevButtonDisabled = currentRevisitIndex === 0; // [27, 28, 29, 30, 31, 32]
  } else {
    const currentNum = currentIndex + 1; // [27, 28, 29, 30, 31, 32]
    // Usa simNumQuestions como fallback se currentQuestions ainda não estiver totalmente populado
    // ou se currentQuestions se referir a um subconjunto menor que o total da simulação.
    const totalNum = currentQuestions.length || simNumQuestions; // [27, 28, 29, 30, 31, 32] 
    
    // Cria a string de substituição com o span para o número atual
    const replacementString = `<span class="math-inline">${currentNum}</span>/${totalNum}`;
    
    questionLabelText = translate("question_label_placeholder").replace('X/Y', replacementString); // [27, 28, 29, 30, 31, 32]
    prevButtonDisabled = currentIndex === 0; // [27, 28, 29, 30, 31, 32]
  }

// ... (o restante da sua função renderQuestion continua aqui, usando questionLabelText e prevButtonDisabled) ...
  // Determina o texto do nível de dificuldade
  const difficultyMap = {
    pt: { easy: "Fácil", moderate: "Moderada", hard: "Difícil", very_hard: "Muito Difícil" },
    en: { easy: "Easy", moderate: "Moderate", hard: "Hard", very_hard: "Very Hard" },
    es: { easy: "Fácil", moderate: "Moderada", hard: "Difícil", very_hard: "Muy Difícil" }
  };
  const levelKey = question.level ? question.level.toLowerCase().replace(/\s+/g, '_') : 'unknown';
  const difficultyText = (difficultyMap[lang] && difficultyMap[lang][levelKey]) || question.level || 'N/A';

  const optionsHTML = (Array.isArray(question.options) ? question.options : []).map((opt, index) => {  
      const texto = getOptionText(opt, lang);
      const isChecked = userAnswers[question.id] === index;  
      return `
      <div class="flex items-center option-container py-1">
        <input type="radio" name="question_${question.id}" value="${index}" 
                id="q${question.id}_opt${index}" ${isChecked ? 'checked' : ''}
                class="peer h-4 w-4 transform scale-125 accent-purple-600 focus:ring-purple-500 focus:ring-offset-0 focus:ring-2">
        <label for="q${question.id}_opt${index}" 
                class="ml-3 block flex-1 text-gray-800 bg-white border border-gray-300 rounded-lg p-4 cursor-pointer 
                        hover:border-purple-400 hover:bg-purple-50 transition-colors duration-150
                        peer-checked:border-purple-500 peer-checked:bg-purple-50">
          ${texto}
        </label>
      </div>
     `; 
  }).join('');

   quizContainer.innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-purple-700">${questionLabelText}</h2>
        <span class="text-xs font-bold px-2 py-1 rounded-full 
          ${levelKey === 'easy' ? 'bg-green-100 text-green-700' :
            levelKey === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
            levelKey === 'hard' ? 'bg-red-100 text-red-700' :
            levelKey === 'very_hard' ? 'bg-purple-100 text-purple-700' : 
            'bg-gray-100 text-gray-700'}">
          ${difficultyText}
        </span>
      </div>

      <p class="text-gray-800 mb-6 text-base">
        ${(question.question && question.question[lang]) || (question.question && question.question['en']) || translate("Question_text_not_available")}
      </p>
      <form id="question-form" class="space-y-3">
          ${optionsHTML}
      </form>
            
      <div class="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button type="button" id="mark-btn" onclick="toggleMark(${question.id})" class="mb-3 sm:mb-0">
          {/* O conteúdo e classes serão definidos por updateMarkButton [1] */}
        </button>
        <div class="flex gap-x-3">
          <button type="button" onclick="handlePreviousQuestionClick()" id="prev-btn" 
                  class="px-6 py-2.5 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg 
                         hover:bg-gray-300 transition-colors 
                         disabled:opacity-50 disabled:cursor-not-allowed"
                  ${prevButtonDisabled ? 'disabled' : ''}>
            ⬅️ ${translate("previousButton")}
          </button>
          <button type="button" onclick="handleNextQuestionClick()" id="next-btn" 
                  class="px-6 py-2.5 text-sm font-medium bg-purple-600 text-white rounded-lg 
                         hover:bg-purple-700 transition-colors focus:ring-4 focus:ring-purple-300">
            ${translate("nextButton")} ➡️
          </button>
        </div>
      </div>
    </div>`;

  updateMarkButton(question.id);
  
  console.log("📦 Question rendered successfully:", question.id);

  // Adicionar listeners aos inputs de rádio
  const radios = document.querySelectorAll(`input[type="radio"][name="question_${question.id}"]`);  
  radios.forEach(radio => {  
    radio.addEventListener('change', (event) => {  
      userAnswers[question.id] = parseInt(event.target.value);  
      saveProgress();  
      console.log("✅ Option selected:", event.target.value, "for question ID:", question.id);

      // Lógica para iniciar o timer se ainda não estiver rodando (adaptada para o módulo no futuro)
      // Se o módulo ProSimulationTimer existir e tiver os métodos isRunning e start:
      if (window.ProSimulationTimer && 
          typeof window.ProSimulationTimer.isRunning === 'function' &&
          !window.ProSimulationTimer.isRunning() && 
          typeof window.ProSimulationTimer.getTotalSeconds === 'function' &&
          window.ProSimulationTimer.getTotalSeconds() > 0) {
        console.log("Timer auto-starting on first answer selection via module."); // Inglês
        window.ProSimulationTimer.start(); 
      } 
      // Se o módulo AINDA NÃO EXISTE e toggleTimer, timerRunning, totalSeconds são globais:
      // else if (!timerRunning && totalSeconds > 0) { 
      //   console.log("Timer auto-starting on first answer selection (direct).");
      //   toggleTimer(); 
      // }
    });
  });
  window.scrollTo(0, 0);
  console.log("Scrolled to top after rendering question.");

}
 
function displayQuizError(message) { // Função para exibir um erro no quiz
  const container = document.getElementById('quiz-container');
  
  if (container) {
    container.innerHTML = `
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mt-4" role="alert">
        <strong class="font-bold">⚠️ Error:</strong>
        <span class="block sm:inline">${message}</span>
      </div>
    `;
  } else {
    console.error("⚠️ Container não encontrado para exibir o erro.");
  }

  console.error("❌", message);
}

function handleNextQuestionClick() { // Lógica para avançar para a próxima questão
  let currentQuestionForValidation;
  let questionIdForValidation;
  const translate = getTranslations();

  if (isRevisitingMarkedQuestions) {
    currentQuestionForValidation = markedQuestionsToRevisit[currentRevisitIndex];
  } else {
    currentQuestionForValidation = currentQuestions[currentIndex];   
  }

  // Validação da questão atual
  if (!currentQuestionForValidation || typeof currentQuestionForValidation.id === 'undefined') {
    console.error("Critical error: Current question object or its ID is undefined in handleNextQuestionClick.");
    displayQuizError(translate("error_processing_question"));
    return;
  }
  questionIdForValidation = currentQuestionForValidation.id;

  const selected = document.querySelector(`input[name="question_${questionIdForValidation}"]:checked`);   
  if (!selected) {   
    alert(translate("selectOptionPrompt"));
    return;   
  }
  
  if (isRevisitingMarkedQuestions) {
    currentRevisitIndex++;
    if (currentRevisitIndex < markedQuestionsToRevisit.length) {
      renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
    } else {
      isRevisitingMarkedQuestions = false;
      markedQuestionsToRevisit = [];
      currentRevisitIndex = 0;
      console.log("Finished revisiting marked questions. Proceeding to full block review.");
      showReviewMode();
    }
  } else {
    if (currentIndex < currentQuestions.length - 1) {   
      currentIndex++;   
      renderQuestion(currentQuestions[currentIndex]);   
    } else {
      const markedInThisBlock = currentQuestions.filter(q => q && typeof q.id !== 'undefined' && markedQuestions.has(q.id));   
      if (markedInThisBlock.length > 0) {
        isRevisitingMarkedQuestions = true;
        markedQuestionsToRevisit = markedInThisBlock;
        currentRevisitIndex = 0;
        console.log("Block ended. Starting revisit of marked questions:", markedQuestionsToRevisit.map(q => q.id));
        renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
      } else {
        console.log("Block ended. No marked questions to revisit. Proceeding to full block review.");
        showReviewMode();
      }
    }
  }
}368

function handlePreviousQuestionClick() { // Lógica para voltar à questão anterior
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

function fetchAndDisplayNextQuestion() { // Função para buscar e exibir a próxima questão
  console.log("🔄 Carregando próxima questão...");
  fetchAndDisplayFirstQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
  console.log("Scrolled to top after rendering question.");

  console.log("Pro Simulation HTML DOM loaded. Preparing to start quiz..."); 

  waitForQuestionBankAndStart(initializeProSimulationQuiz) 
});

function showReviewMode() { // Função para exibir o modo de revisão do bloco
  const translate = getTranslations();
  const container = document.getElementById('quiz-container');
  const lang = localStorage.getItem('selectedLanguage') || 'en';

  if (!container) {
    console.error("❌ quiz-container não encontrado.");
    return;
  }

  container.innerHTML = `<h2 class="text-xl font-bold text-center mb-6">🔁 ${translate("blockReviewTitle")}</h2>`;   

  currentQuestions.forEach((q, i) => {
    const userAnswer = userAnswers[q.id];
    const isCorrect = userAnswer === q.correct;
    let explanationToDisplay = "Explanation not available";
      if (q.options && Array.isArray(q.options) && q.options[q.correct] !== undefined && q.options[q.correct] !== null && typeof q.options[q.correct] === 'object' && q.options[q.correct].explanation) {
        explanationToDisplay = q.options[q.correct].explanation[lang] || q.options[q.correct].explanation['en'] || "Explanation (EN fallback) not found or text for this language is missing.";
      }
    const options = q.options.map((opt, idx) => {
    const optText = getOptionText(opt, lang);      
    const isRight = idx === q.correct;
    const isChosen = idx === userAnswer;

      return `
        <li class="${isRight ? 'text-green-700 font-bold' : isChosen ? 'text-red-700' : 'text-gray-700'}">
          ${String.fromCharCode(65 + idx)}. ${optText}
        </li>`;
    }).join('');

    const questionText = (q.question && q.question[lang]) || (q.question && q.question['en']) || 'Question not available';

    container.innerHTML += `
      <div class="border rounded-lg p-4 mb-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}">
        <p class="font-semibold mb-2">Q${i + 1}: ${questionText}</p>
        <ul class="mb-2 space-y-1">${options}</ul>
        <p class="text-sm text-gray-600 italic">🧠 ${explanationToDisplay}</p>
      </div>`;
  });

  container.innerHTML += `
    <div class="text-center mt-8">
      <button id="resume-quiz-btn" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
        ${lang === 'pt' ? '➕ Voltar ao Quiz' : lang === 'es' ? '➕ Volver al Quiz' : '➕ Return to Quiz'}
      </button>
    </div>
  `;

  document.getElementById('resume-quiz-btn').addEventListener('click', () => {
    if (Object.keys(userAnswers).length >= 45) {
      showFinalReport();
    } else {
      prepareNextBlock();
    }
  });
}

function prepareNextBlock() {
  console.log("🎯 Preparing new block of questions...");
  console.log("Current value of BLOCK_SIZE:", BLOCK_SIZE);
  console.log("Total questions in bank at start:", questionBank.getAllQuestions().length);
  console.log("Shown question IDs before this block:", shownQuestionIds.length, JSON.stringify(shownQuestionIds));
  console.log("Previous wrong IDs to prioritize:", previousWrongIds.length, JSON.stringify(previousWrongIds));
  console.log("Length of newBlockQuestions BEFORE slice:", newBlockQuestions.length);
  let newBlockQuestions = [];
  const questionsToExclude = [...shownQuestionIds, ...previousWrongIds.filter(id => shownQuestionIds.includes(id))]; // Não mostrar imediatamente o que já foi mostrado ou o que errou e já foi mostrado

  // Tenta preencher com questões "novas" (não vistas recentemente) e que não são erros recentes já mostrados
  let availableNewQuestions = questionBank.getAllQuestions().filter(q => !questionsToExclude.includes(q.id));
  console.log("Available NEW questions (not in shown/recent_wrong):", availableNewQuestions.length);

  // Tenta manter proporções de dificuldade para questões novas
  if (availableNewQuestions.length > 0) {
     const difficultyProportions = { easy: 0.2, moderate: 0.2, hard: 0.3, very_hard: 0.3 };
     let tempSelectedByProportion = [];
     Object.entries(difficultyProportions).forEach(([level, fraction]) => {
         const countForLevel = Math.round(fraction * BLOCK_SIZE);
         const subset = availableNewQuestions.filter(q => q.level === level);
         tempSelectedByProportion.push(...questionBank.shuffleArray([...subset]).slice(0, countForLevel));
     });
     newBlockQuestions.push(...questionBank.shuffleArray(tempSelectedByProportion));
     // Remove duplicatas caso a seleção por proporção pegue as mesmas questões
     newBlockQuestions = Array.from(new Set(newBlockQuestions.map(q => q.id))).map(id => newBlockQuestions.find(q => q.id === id));
  }
     console.log("New block after proportional fill (unique IDs):", newBlockQuestions.length, newBlockQuestions.map(q=>q.id));

  // Se não houver questões novas suficientes, ou para completar o bloco, preenche com questões já vistas (modo "infinito")
  if (newBlockQuestions.length < BLOCK_SIZE) {
    console.log("Not enough new questions. Re-showing questions (infinite mode).");
    
    let questionsToRecycle = questionBank.getAllQuestions();
    questionsToRecycle = questionBank.shuffleArray([...questionsToRecycle]);

    let neededToFill = BLOCK_SIZE - newBlockQuestions.length;
    for (const q of questionsToRecycle) {
      if (neededToFill <= 0) break;
      // Adiciona mesmo que já esteja em newBlockQuestions se for para completar o tamanho,
      // ou adicione uma lógica para evitar duplicatas DENTRO do mesmo bloco, se preferir.
      // Para garantir variedade, vamos tentar não duplicar no mesmo bloco se possível.
      if (!newBlockQuestions.some(nbq => nbq.id === q.id)) {
          newBlockQuestions.push(q);
          neededToFill--;
      }
    }
    console.log("New block after first recycling pass (unique from all):", newBlockQuestions.length, newBlockQuestions.map(q=>q.id));
    // Se mesmo assim faltar (banco pequeno), permite repetições para atingir BLOCK_SIZE
    let emergencyFillIndex = 0;
    while (newBlockQuestions.length < BLOCK_SIZE && questionBank.getAllQuestions().length > 0) {
        newBlockQuestions.push(questionsToRecycle[emergencyFillIndex % questionsToRecycle.length]);
        emergencyFillIndex++;
    }
     console.log("New block after emergency fill (may have duplicates in block):", newBlockQuestions.length, newBlockQuestions.map(q=>q.id)); // NOVO LOG
  }

  currentQuestions = newBlockQuestions.slice(0, BLOCK_SIZE);
  console.log("Length of currentQuestions AFTER slice:", currentQuestions.length);

  if (currentQuestions.length > 0 && currentQuestions[currentIndex]) {
    renderQuestion(currentQuestions[currentIndex]);
  } else {
  }
  if (currentQuestions.length === 0) {
    const translate = getTranslations();
    console.error("ERROR: No questions could be selected for the block. Question bank might be empty.");
    displayQuizError(translate("error_no_questions_found"));
    return;
  }

  // Embaralha as opções de TODAS as questões no bloco CADA VEZ que um bloco é preparado.
  currentQuestions.forEach(q => {
    if (q && q.options && typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function') {
      questionBank.shuffleOptionsAndUpdateCorrect(q);
    } else if (q) {
      console.warn("Question object or its options are invalid, cannot shuffle. ID:", q.id);
    }
  });

  // Atualiza o histórico e reseta os controles para o novo bloco
  const newQuestionIds = currentQuestions.map(q => q.id);
  // Adiciona apenas IDs que não estão nos últimos 100 para tentar evitar repetição muito imediata
  newQuestionIds.forEach(id => {
     if(!shownQuestionIds.slice(-150).includes(id)) { // Evita adicionar se já foi mostrado muito recentemente
         shownQuestionIds.push(id);
     }
  });
  shownQuestionIds = shownQuestionIds.slice(-100); // Mantém o histórico das últimas 100 questões únicas mostradas
                                                // Para um modo "verdadeiramente infinito" e com mais repetição, você poderia limpar shownQuestionIds
                                                // ou ter uma lógica diferente aqui. Manter os últimos 150 ainda tenta dar alguma variedade.

  currentIndex = 0;
  userAnswers = {};
  // previousWrongIds deve ser populado com base nas respostas do bloco que ACABOU de ser concluído.
  // Esta lógica deve ser movida para ANTES de userAnswers ser resetado, idealmente ao sair de showReviewMode.
  // Por agora, vamos assumir que previousWrongIds é gerenciado externamente a esta função imediata.
  // previousWrongIds = []; // Comentado por enquanto, pois a população dele é complexa aqui

  renderQuestion(currentQuestions[currentIndex]);
}

function saveProgress() {
  const state = {
    currentQuestions,
    currentIndex,
    userAnswers,
    markedQuestions: Array.from(markedQuestions),
    questionHistory,
    previousWrongIds,
    shownQuestionIds
  };
  localStorage.setItem('focusedProState', JSON.stringify(state));
  console.log("💾 Progress saved.");
}

function loadProgress() {
  const state = JSON.parse(localStorage.getItem('focusedProState'));
  if (!state) return false;

  currentQuestions = state.currentQuestions;
  currentIndex = state.currentIndex;
  userAnswers = state.userAnswers;
  markedQuestions.clear();
  state.markedQuestions.forEach(id => markedQuestions.add(id));
  questionHistory = state.questionHistory;
  previousWrongIds = state.previousWrongIds;
  shownQuestionIds = state.shownQuestionIds;

  console.log("✅ Progresso restaurado com sucesso.");
  return true;
}
