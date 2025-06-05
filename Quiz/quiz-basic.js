// quiz-basic.js
console.log("quiz-basic.js LOADED - Initializing quiz logic.");
const markedQuestions = new Set(); // 🔖 Armazena as questões marcadas para revisão
let questionHistory = []; // 📚 Histórico de navegação entre as questões
// Variáveis Globais para o Quiz (serão expandidas depois)
let shownQuestionIds = [];     // IDs das últimas 300 questões exibidas
let currentQuestions = [];     // Bloco atual de 15 questões
let currentIndex = 0;          // Índice da questão atual
let userAnswers = {};          // Respostas do usuário
let previousWrongIds = [];     // IDs das erradas do bloco anterior
let isRevisitingMarkedQuestions = false; // Nova flag de estado
let markedQuestionsToRevisit = [];       // Lista de objetos de questão para revisitar
let currentRevisitIndex = 0;             // Índice para navegar em markedQuestionsToRevisit
let currentQuestionObject = null;
let questionsAnsweredInBlock = 0;
const BLOCK_SIZE = 15;

// --- Funções do Quiz ---
function getCurrentLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en';
}

// Funções
function getTranslations() {
  const lang = getCurrentLanguage();   
  const t = {
    // Chaves para botões de navegação e marcação
    "markForReview": { en: "Mark for Review", pt: "Marcar para revisão", es: "Marcar para revisar" },
    "unmarkReview": { en: "Unmark Review", pt: "Desmarcar revisão", es: "Desmarcar revisión" },
    "previousButton": { en: "Previous", pt: "Anterior", es: "Anterior" },
    "nextButton": { en: "Next", pt: "Próxima", es: "Siguiente" },
    "returnToQuizButton": { en: "➕ Next Block", pt: "➕ Próximo Bloco", es: "➕ Siguiente Bloque" },
    "logout_button_text_content": { en: "Logout", pt: "Sair", es: "Cerrar Sesión" },
    "logout_confirm_message": { en: "Your progress will be saved. Are you sure you want to logout and go to the login page?", pt: "Seu progresso será salvo. Tem certeza que deseja sair e ir para a página de login?", es: "Tu progreso se guardará. ¿Estás seguro de que quieres cerrar sesión e ir a la página de inicio de sesión?" },
    "legal-notice-text": { en: "© 2025 BrainboxMed. All rights reserved. This content is for educational purposes only and does not replace professional medical advice.", pt: "© 2025 BrainboxMed. Todos os direitos reservados. Este conteúdo é apenas para fins educacionais e não substitui o aconselhamento médico profissional.", es: "© 2025 BrainboxMed. Todos los derechos reservados. Este contenido es solo para fines educativos y no reemplaza el asesoramiento médico profesional." },
    "go_dashboard_text_basic": { en: "Dashboard", pt: "Painel", es: "Panel" },
    // Chaves para alertas e mensagens de erro
    "selectOptionPrompt": { en: "Please select an option before proceeding.", pt: "Por favor, selecione uma opção antes de prosseguir.", es: "Por favor, seleccione una opción antes de continuar." },
    "error_processing_question": { en: "An error occurred while processing the current question. Please try reloading or contact support.", pt: "Ocorreu um erro ao processar a questão atual. Tente recarregar ou contate o suporte.", es: "Ocurrió un error al procesar la pregunta actual. Intente recargar o contacte al soporte."},
    "error_rendering_question": { en: "Error rendering question.", pt: "Erro ao renderizar questão.", es: "Error al renderizar la pregunta." },
    "error_no_questions_found": { en: "No questions found in the database.", pt: "Nenhuma questão encontrada no banco de dados.", es: "No se encontraron preguntas en la base de datos."},
    "error_question_bank_not_loaded": { en: "Question bank not loaded or empty.", pt: "Banco de questões não carregado ou vazio.", es: "Banco de preguntas no cargado o vacío."},
    "error_loading_questions": { en: "Error loading questions.", pt: "Erro ao carregar as questões.", es: "Error al cargar las preguntas."},
    "advertisement_placeholder_text": { en: "Advertisement", pt: "Publicidade", es: "Publicidad" },
    "go_dashboard_text_basic": { en: "Dashboard", pt: "Painel", es: "Panel" },
    "confirm_exit_to_dashboard": { en: "Your current progress will be saved. Are you sure you want to return to the Dashboard?", pt: "Seu progresso atual será salvo. Tem certeza que deseja retornar ao Painel?", es: "Tu progreso actual se guardará. ¿Estás seguro de que quieres volver al Panel?"},
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

let simSelectedAreas = [];

function initializeQuizBasic() {
    console.log("Initializing Quiz Basic...");
    const urlParams = new URLSearchParams(window.location.search);
    const areasParam = urlParams.get('areas');
    const newSessionParam = urlParams.get('new'); // Ler o novo parâmetro 'new'
    // Define simSelectedAreas com base no parâmetro 'areas'
    if (areasParam) {
        const singleArea = areasParam.trim().toLowerCase();
        if (singleArea) {
            simSelectedAreas = [singleArea];
        } else {
            simSelectedAreas = []; // Parâmetro 'areas' estava presente mas vazio
        }
        console.log("Quiz Basic: Area parameter found in URL:", singleArea);
    } else {
        simSelectedAreas = []; // Default se nenhum parâmetro 'areas' for passado
        console.log("Quiz Basic: No area parameter found initially in URL.");
    }
    console.log("Quiz Basic - Initial selected areas based on URL:", simSelectedAreas);

    // Decide se é uma nova sessão ou se deve tentar continuar
    if (newSessionParam === 'true' || areasParam) {
        // É uma nova sessão se 'new=true' OU se 'areas' foi especificado na URL
        console.log("Quiz Basic: Starting a new session (new=true or areas specified). Clearing previous state.");
        localStorage.removeItem('quizBasicState'); // Limpa o estado anterior
        prepareNextBlock(); // Prepara um novo bloco (usará simSelectedAreas se definido)
    } else {
        // Não é 'new=true' nem 'areas' na URL - Tenta continuar uma sessão existente
        console.log("Quiz Basic: Attempting to continue a previous session.");
        if (loadProgress()) { // Tenta carregar o progresso
            console.log("Quiz Basic: Progress loaded successfully. Rendering current question.");
            // Verifica se os dados carregados são válidos antes de renderizar
            if (
                Array.isArray(currentQuestions) &&
                currentQuestions.length > 0 &&
                Number.isInteger(currentIndex) &&
                currentIndex >= 0 &&
                currentIndex < currentQuestions.length &&
                typeof currentQuestions[currentIndex] === 'object' &&
                currentQuestions[currentIndex] !== null
            ) {
                renderQuestion(currentQuestions[currentIndex]);
            } else {
                console.warn("Quiz Basic: Progress loaded, but question data is invalid. Starting new block.");
                localStorage.removeItem('quizBasicState'); // Limpa estado inválido
                simSelectedAreas = []; // Reseta áreas para um novo quiz genérico
                prepareNextBlock();
            }
        } else {
            // Nenhum progresso para carregar, inicia um novo quiz genérico (sem filtro de área)
            console.log("Quiz Basic: No progress to load. Starting a new generic session.");
            simSelectedAreas = []; // Garante que não há filtro de área para um novo quiz genérico
            prepareNextBlock();
        }
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

  // Validação inicial robusta da questão e do container
  if (!quizContainer || !question || typeof question.id === 'undefined') {   
    console.error("Error rendering question: container, question object, or question.id is invalid.", "Question:", question);
    displayQuizError(translate("error_rendering_question"));
    return;   
  }

  console.log("🧪 container found?", quizContainer);    ('en')
  console.log("📄 question received:", question, "isRevisitingMarkedQuestions:", isRevisitingMarkedQuestions);    ('en')

  let questionLabelText;
  let prevButtonDisabled;

  // Adapta o rótulo da questão e o estado do botão "Previous" para o modo de revisão de marcadas
  if (isRevisitingMarkedQuestions) {
    questionLabelText = translate("revisitingMarkedLabel")
                          .replace("${num}", currentRevisitIndex + 1)
                          .replace("${total}", markedQuestionsToRevisit.length);
    prevButtonDisabled = currentRevisitIndex === 0;
  } else {
    questionLabelText = translate("question_label_placeholder").replace('X/Y', `${currentIndex + 1}/${currentQuestions.length}`);   
    prevButtonDisabled = currentIndex === 0;   
  }

  // Determina o texto do nível de dificuldade
  const difficultyMap = {   
    pt: { easy: "Fácil", moderate: "Moderada", hard: "Difícil", very_hard: "Muito Difícil" },
    en: { easy: "Easy", moderate: "Moderate", hard: "Hard", very_hard: "Very Hard" },
    es: { easy: "Fácil", moderate: "Moderada", hard: "Difícil", very_hard: "Muy Difícil" }
  };
  // Acesso ao question.level, normalizando para minúsculas caso haja variação nos dados.
  const levelKey = question.level ? question.level.toLowerCase().replace(/\s+/g, '_') : 'unknown';
  const difficultyText = (difficultyMap[lang] && difficultyMap[lang][levelKey]) || question.level || 'N/A';
  // HTML das opções (sua versão que estava funcionando visualmente para seleção)
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
const adPlaceholderVisual = `<div class="ad-placeholder-content text-xs text-gray-400 p-2">${translate("advertisement_placeholder_text")}</div>`;

  quizContainer.innerHTML = `
      <div class="bg-white p-6 rounded-xl shadow-md">
        ${adPlaceholderVisual}
      </div>

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
        <div id="ad-slot-question-bottom" class="my-6 text-center bg-gray-100 min-h-[60px] flex items-center justify-center border border-dashed border-gray-300">
            ${adPlaceholderVisual}
        </div>
         
      <div class="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button type="button" id="mark-btn" onclick="toggleMark(${question.id})" class="mb-3 sm:mb-0">
          {/* O conteúdo e classes serão definidos por updateMarkButton */}
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

     try {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        (adsbygoogle = window.adsbygoogle || []).push({});
        console.log("AdSense push executed for new ad slots.");
        } else {
        console.warn("AdSense script not fully loaded, cannot push ad requests.");
        }
        } catch (e) {
        console.error("Error pushing to AdSense:", e);
      }
  updateMarkButton(question.id);
  
  console.log("📦 Question rendered successfully:", question.id);

  // Adicionar listeners aos inputs de rádio
  const radios = document.querySelectorAll(`input[type="radio"][name="question_${question.id}"]`);   
  radios.forEach(radio => {   
    radio.addEventListener('change', (event) => {   
      userAnswers[question.id] = parseInt(event.target.value);   
      saveProgress();   
      console.log("✅ Option selected:", event.target.value, "for question ID:", question.id);
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
}

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
  console.log("DOM da página quiz-basic.html carregado. Preparando para iniciar o quiz...");

    const translate = getTranslations(); // Obtém a função de tradução deste ficheiro

  // --- TRADUÇÕES DE TEXTOS ESTÁTICOS DA PÁGINA
  const goDashboardButtonTextEl = document.getElementById("go_dashboard_text_basic");
  if (goDashboardButtonTextEl) {
  goDashboardButtonTextEl.textContent = translate("go_dashboard_text_basic") || "Dashboard"; 
  }
  const logoutTextSpan = document.getElementById("dashboard_logout_text");
  if (logoutTextSpan) {
  logoutTextSpan.textContent = translate("logout_button_text_content") || "Logout";
  }
  const legalNoticeEl = document.getElementById("legal-notice-text");
  if (legalNoticeEl) {
        // A chave "legal-notice-text" deve existir no getTranslations()
        legalNoticeEl.textContent = translate("legal-notice-text");
  }
  // FIM DA DEFINIÇÃO DA TRADUÇÃO DE TEXTOS ESTÁTICOS ---

// --- BOTÃO PARA VOLTAR AO DASHBOARD (NOVO) ---
const goDashboardButton = document.getElementById('go-basic-dashboard-button');
if (goDashboardButton) {
    goDashboardButton.addEventListener('click', () => {
        const translate = getTranslations(); // Obter a função de tradução
        // Use a chave de tradução apropriada. Se criou uma nova, use-a aqui.
        const confirmMessage = translate("confirm_exit_to_dashboard"); 

        if (confirm(confirmMessage)) { // Mostrar o pop-up de confirmação
            console.log("Quiz Basic: User confirmed exit. Saving progress and returning to Dashboard-Basic.html");
            saveProgress(); // Salva o progresso atual
            localStorage.setItem('cameFromBasicQuiz', 'true'); // Sinaliza para o dashboard
            let targetDashboard = "../Dashboard/Dashboard-Basic.html";
            window.location.href = targetDashboard;
        } else {
            console.log("Quiz Basic: User cancelled exit to Dashboard.");
            // Nenhuma ação é necessária se o usuário cancelar
        }
    });
} else {
    console.warn("Botão 'go-basic-dashboard-button' não encontrado no quiz-basic.html.");
}
// --- FIM DO BOTÃO DASHBOARD ---
// --- BOTÃO DE LOGOUT
const logoutButton = document.getElementById('dashboard-logout-button'); // ID do BOTÃO
  if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const confirmMessage = translate("logout_confirm_message"); // Chave deve existir no getTranslations()
            if (confirm(confirmMessage)) {
                console.log("Quiz Basic Logout: Salvando progresso, limpando dados e redirecionando...");
                saveProgress(); // Salva o progresso antes de sair
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                localStorage.removeItem('quizBasicState'); // Chave específica deste quiz
                localStorage.removeItem('proSimulationState');
                localStorage.removeItem('focusedProState');
                localStorage.removeItem('focusedState');
                localStorage.removeItem('quizAdFreeState');
                window.location.href = '../login.html';
            } else {
                console.log("Logout cancelado pelo usuário.");
            }
        });
  }
  else {console.error("Quiz-Basic: Botão 'dashboard-logout-button' não encontrado.");}
  // FIM DO BOTÃO DE LOGOUT ---
  // --- INICIALIZAÇÃO DO QUIZ
  // (Sua lógica existente com waitForQuestionBankAndStart chamando initializeQuizBasic)
  function waitForQuestionBankAndStart() {
    console.log("Função waitForQuestionBankAndStart: Verificando se o questionBank está pronto...");
    if (
      typeof questionBank !== 'undefined' &&
      questionBank.externalBanks &&
      Array.isArray(questionBank.externalBanks) &&
      typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function'
    ) {
      console.log("questionBank parece definido. Aguardando um instante para ter certeza que está populado...");
      setTimeout(() => {
        if (questionBank.externalBanks.length > 0) {
          console.log("Banco de questões populado. Inicializando o quiz do Basic...");
          initializeQuizBasic();
        } else {
          console.error("ERRO: Banco de questões está vazio mesmo após espera.");
          displayQuizError("Erro ao carregar as questões.");
        }
      }, 500);
    } else {
      console.log("Aguardando definição do questionBank. Tentando novamente em 300ms.");
      setTimeout(waitForQuestionBankAndStart, 300);
    }
  }
 
  waitForQuestionBankAndStart();
});
// FIM DA INICIALIZAÇÃO DO QUIZ ---
function showReviewMode() {
  const translate = getTranslations();
  const container = document.getElementById('quiz-container');
  const lang = getCurrentLanguage();

  if (!container) {
    console.error("❌ quiz-container not found.");
    return;
  }

  // Usar translate para o título do review
  container.innerHTML = `<h2 class="text-xl font-bold text-center mb-6">🔁 ${translate("blockReviewTitle")}</h2>`;

  currentQuestions.forEach((q, i) => {
    const userAnswer = userAnswers[q.id];
    const isCorrect = userAnswer === q.correct;
    
    let explanationToDisplay = translate("explanation_not_available_default"); // Chave de tradução para fallback
    // Acessando a explicação da opção correta
    if (q.options && Array.isArray(q.options) && q.options[q.correct] && 
        typeof q.options[q.correct] === 'object' && q.options[q.correct].explanation) {
      explanationToDisplay = q.options[q.correct].explanation[lang] || 
                             q.options[q.correct].explanation['en'] || 
                             translate("explanation_not_available_default");
    }

    const optionsHTML = q.options.map((opt, idx) => {
      const optText = getOptionText(opt, lang); getOptionText
      const isRight = idx === q.correct;
      const isChosen = idx === userAnswer;

      let optionClasses = "relative p-3 mb-2 rounded-md border text-sm ";
      let indicatorHtml = "";

      // Lógica de classes e indicadores (como no demo-quiz.js [7] ou adaptada)
      if (isRight) {
        optionClasses += "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-300 ring-offset-1 font-medium";
        indicatorHtml = `<span class="absolute top-1 right-1 text-xs font-bold text-blue-600">✔️ ${translate("Correct")}</span>`;
      } else if (isChosen && !isRight) {
        optionClasses += "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-300 ring-offset-1 font-medium";
        indicatorHtml = `<span class="absolute top-1 right-1 text-xs font-bold text-red-600">❌ ${translate("YourAnswer")}</span>`;
      } else {
        optionClasses += "bg-white border-gray-300 text-gray-700";
      }
      
      return `<div class="${optionClasses}"><p class="pr-16">${optText}</p> ${indicatorHtml}</div>`;
    }).join('');

    const questionText = (q.question && q.question[lang]) || (q.question && q.question['en']) || translate("Question_text_not_available");

    container.innerHTML += `
      <div class="border rounded-lg p-4 mb-4 ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}">
        <p class="font-semibold mb-2">Q${i + 1}: ${questionText}</p>
        <div class="space-y-2">${optionsHTML}</div>
        <p class="text-sm text-gray-600 italic mt-3">🧠 ${explanationToDisplay}</p>
      </div>`;
  });

  // Usar translate para o botão de continuar
  container.innerHTML += `
    <div class="text-center mt-8">
      <button id="resume-quiz-btn" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
        ${translate("returnToQuizButton")}
      </button>
    </div>
  `;

  document.getElementById('resume-quiz-btn').addEventListener('click', () => {
    // Para quiz-basic.js (quiz infinito), sempre preparamos o próximo bloco.
    // A lógica de coletar previousWrongIds deve ser feita ANTES de chamar prepareNextBlock
    // e ANTES de userAnswers ser limpo.
    
    previousWrongIds = []; // Limpa para o novo cálculo do bloco que acabou
    currentQuestions.forEach(q_prev => {
        if (userAnswers[q_prev.id] !== undefined && userAnswers[q_prev.id] !== q_prev.correct) {
            if (!previousWrongIds.includes(q_prev.id)) {
                previousWrongIds.push(q_prev.id);
            }
        }
    });
    console.log("Previous wrong IDs collected before next block:", previousWrongIds);

    prepareNextBlock();
  });
}

function prepareNextBlock() {
    let newBlockQuestions = [];
  console.log("🎯 Preparing new block of questions...");
  console.log("Current value of BLOCK_SIZE:", BLOCK_SIZE);
  console.log("Total questions in bank at start:", questionBank.getAllQuestions().length);
  console.log("Shown question IDs before this block:", shownQuestionIds.length, JSON.stringify(shownQuestionIds));
  console.log("Previous wrong IDs to prioritize:", previousWrongIds.length, JSON.stringify(previousWrongIds));
  console.log("Length of newBlockQuestions BEFORE slice:", newBlockQuestions.length);

      // --- FILTRAR QUESTÕES PELA ÁREA SELECIONADA ---
    let allRelevantQuestions = questionBank.getAllQuestions(); // Começa com todas as questões

    if (simSelectedAreas && simSelectedAreas.length > 0) { // simSelectedAreas é definido em initializeQuizBasic
        console.log("Filtering questions by selected areas:", simSelectedAreas);
        allRelevantQuestions = allRelevantQuestions.filter(q => {
            const questionAreas = q.areas || q.area || []; // Lida com 'areas' ou 'area'
            const areasToTest = Array.isArray(questionAreas) ? questionAreas : [questionAreas]; // Garante que é um array
            if (areasToTest.length === 0) return false; // Questão precisa ter uma área
            
            return areasToTest.some(singleQuestionArea => 
                simSelectedAreas.includes(String(singleQuestionArea).toLowerCase().trim())
            );
          });
        console.log(`Found ${allRelevantQuestions.length} questions for areas: ${simSelectedAreas.join(', ')}`);
    } else {
        console.log("No specific areas selected for Quiz Basic, using all available questions for the block.");
    }

    if (allRelevantQuestions.length === 0) {
        const translate = getTranslations();
        console.error("Quiz Basic ERROR: No questions found for the selected criteria (areas).");
        displayQuizError(translate("error_no_questions_found"));
        currentQuestions = []; // Garante que currentQuestions está vazio
        return; // Interrompe se não houver questões relevantes
    }
    // --- FIM DO FILTRO DE ÁREA ---

  const questionsToExclude = [...shownQuestionIds, ...previousWrongIds.filter(id => shownQuestionIds.includes(id))]; // Não mostrar imediatamente o que já foi mostrado ou o que errou e já foi mostrado

  // Tenta preencher com questões "novas" (não vistas recentemente) e que não são erros recentes já mostrados
    let availableNewQuestions = allRelevantQuestions.filter(q => !questionsToExclude.includes(q.id));
    console.log("Available NEW questions (after area filter and exclusion):", availableNewQuestions.length);

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
    
    let questionsToRecycle = questionBank.shuffleArray([...allRelevantQuestions]);


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

      if (currentQuestions.length === 0 && allRelevantQuestions.length > 0) {
        // Se há questões relevantes, mas não conseguimos formar um bloco (ex: todas já vistas)
        // Poderia tentar reciclar de allRelevantQuestions sem o filtro de questionsToExclude
        // ou simplesmente mostrar o erro como abaixo.
        const translate = getTranslations();
        console.error("ERROR: Could not form a new block from relevant questions. Resetting or try different filters.");
        displayQuizError(translate("error_no_questions_found"));
        return;
    } else if (currentQuestions.length === 0) { // Se allRelevantQuestions já era 0
        // O erro já foi tratado acima
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
  localStorage.setItem('quizBasicState', JSON.stringify(state));
  console.log("💾 Progress saved.");
}

function loadProgress() {
  const state = JSON.parse(localStorage.getItem('quizBasicState'));
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
