// focused-pro.js
// Script para o modo Focused Pro, adaptado de focused.js.
// Inclui filtros de área/tópico via URL e usa 'focusedProState' no localStorage.
// Funções do music player (prevTrack, togglePlay, nextTrack, volume) são globais ou em outro script.

console.log("focused-pro.js CARREGADO - Inicializando Quiz Modo Focused Pro...");

// #region --- Variáveis Globais e Configuração ---
const markedQuestions = new Set();
let shownQuestionIds = [];
let currentQuestions = []; // Bloco atual de questões filtradas
let currentIndex = 0;
let userAnswers = {};
let previousWrongIds = [];
let isRevisitingMarkedQuestions = false;
let markedQuestionsToRevisit = [];
let currentRevisitIndex = 0;
const BLOCK_SIZE = 15;

// Filtros da URL (preenchidos em initializeFocusedProQuiz)
let simSelectedAreas = [];
let simSelectedTopics = [];
// #endregion

// #region --- Funções de Utilidade e Estado (Salvar/Carregar/Idioma) ---
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

function saveProgress() {
    if (currentQuestions.length === 0 && currentIndex === 0 && Object.keys(userAnswers).length === 0) {
        console.log("💾 FocusedPro Progresso não salvo: Nenhuma questão carregada ou resposta dada ainda.");
        return;
    }
    
    const state = {
        currentQuestions,
        currentIndex,
        userAnswers,
        markedQuestions: Array.from(markedQuestions),
        previousWrongIds,
        shownQuestionIds,
        savedAreas: simSelectedAreas, 
        savedTopics: simSelectedTopics
    };
    
    localStorage.setItem('focusedProState', JSON.stringify(state));
    console.log("💾 FocusedPro Progresso salvo em focusedProState.");
}

function loadProgress() {
    const stateString = localStorage.getItem('focusedProState');
    if (!stateString) return false;

    try {
        const state = JSON.parse(stateString);
        if (!state) {
            console.warn("❌ focusedProState parseado é nulo ou indefinido.");
            localStorage.removeItem('focusedProState');
            return false;
        }

        if (simSelectedAreas.length === 0 && Array.isArray(state.savedAreas)) {
            simSelectedAreas = state.savedAreas;
        }
        if (simSelectedTopics.length === 0 && Array.isArray(state.savedTopics)) {
            simSelectedTopics = state.savedTopics;
        }

        currentQuestions = state.currentQuestions || [];
        currentIndex = state.currentIndex || 0;
        userAnswers = state.userAnswers || {};
        previousWrongIds = state.previousWrongIds || [];
        shownQuestionIds = state.shownQuestionIds || [];
        
        markedQuestions.clear();
        (state.markedQuestions || []).forEach(id => markedQuestions.add(id));

        if (currentQuestions.length > 0 && currentIndex < currentQuestions.length && currentQuestions[currentIndex]) {
            console.log("✅ Progresso 'focusedProState' restaurado. Áreas:", simSelectedAreas, "Tópicos:", simSelectedTopics);
            return true;
        } else if (currentQuestions.length > 0 && currentQuestions[0]) {
            currentIndex = 0;
            console.log("✅ Progresso 'focusedProState' restaurado (índice ajustado). Áreas:", simSelectedAreas, "Tópicos:", simSelectedTopics);
            return true;
        }
        
        console.warn("❌ Progresso 'focusedProState' carregado, mas dados inválidos. Será ignorado.");
    } catch (error) {
        console.error("Erro ao parsear focusedProState do localStorage:", error);
    }
    
    localStorage.removeItem('focusedProState');
    return false;
}

function getTranslations() {
    const lang = getCurrentLanguage();   
    const t = {
        // Traduções de interação do Quiz
        "markForReview": { en: "Mark for Review", pt: "Marcar para revisão", es: "Marcar para revisar" },
        "unmarkReview": { en: "Unmark Review", pt: "Desmarcar revisão", es: "Desmarcar revisión" },
        "previousButton": { en: "Previous", pt: "Anterior", es: "Anterior" },
        "nextButton": { en: "Next", pt: "Próxima", es: "Siguiente" },
        "returnToQuizButton": { en: "➕ Next Block", pt: "➕ Próximo Bloco", es: "➕ Siguiente Bloque" },
        "selectOptionPrompt": { en: "Please select an option before proceeding.", pt: "Por favor, selecione uma opção antes de prosseguir.", es: "Por favor, seleccione una opción antes de continuar." },
        
        // Mensagens de Erro
        "error_processing_question": { en: "An error occurred processing the question. Please try reloading.", pt: "Ocorreu um erro ao processar a questão. Tente recarregar.", es: "Ocurrió un error procesando la pregunta. Intente recargar."},
        "error_rendering_question": { en: "Error rendering question.", pt: "Erro ao renderizar questão.", es: "Error al renderizar la pregunta." },
        "error_no_questions_found": { en: "No questions found for the selected criteria.", pt: "Nenhuma questão encontrada para os critérios selecionados.", es: "No se encontraron preguntas para los criterios seleccionados."},
        "error_question_bank_not_loaded": { en: "Question bank not loaded or empty.", pt: "Banco de questões não carregado ou vazio.", es: "Banco de preguntas no cargado o vacío."},
        "error_try_different_filters": { en: "Please try different filter criteria from the dashboard.", pt: "Por favor, tente critérios de filtro diferentes no painel.", es: "Por favor, intente con diferentes criterios de filtro desde el panel." },
        "all_questions_answered_for_criteria_title": { en: "Criteria Exhausted", pt: "Critérios Esgotados", es: "Criterios Agotados" },
        "all_questions_answered_for_criteria_message": { en: "You have answered all available questions for the current selection. Please review your answers or select different criteria from the dashboard.", pt: "Você respondeu a todas as questões disponíveis para a seleção atual. Por favor, revise suas respostas ou selecione critérios diferentes no painel.", es: "Has respondido a todas las preguntas disponibles para la selección actual. Por favor, revisa tus respuestas o selecciona diferentes criterios desde el panel." },
        "error_prefix_text": { en: "Error:", pt: "Erro:", es: "Error:" },

        // Níveis de Dificuldade
        "difficulty_easy": { en: "Easy", pt: "Fácil", es: "Fácil" },
        "difficulty_moderate": { en: "Moderate", pt: "Moderada", es: "Moderada" },
        "difficulty_hard": { en: "Hard", pt: "Difícil", es: "Difícil" },
        "difficulty_very_hard": { en: "Very Hard", pt: "Muito Difícil", es: "Muy Difícil" },
        "difficulty_unknown": { en: "Unknown Difficulty", pt: "Dificuldade Desconhecida", es: "Dificultad Desconocida" },
        
        // UI de Questão e Revisão
        "question_label_placeholder": { en: "Question ${x}/${y}", pt: "Questão ${x}/${y}", es: "Pregunta ${x}/${y}" },
        "revisitingMarkedLabel": { en: "Revisiting Marked ${num}/${total}", pt: "Revisando Marcada ${num}/${total}", es: "Revisando Marcada ${num}/${total}" },
        "blockReviewTitle": { en: "Block Review", pt: "Revisão do Bloco", es: "Revisión del Bloque" },
        "Question_text_not_available": { en: "Question text not available", pt: "Texto da questão não disponível", es: "Texto de la pregunta no disponible"},
        "option_text_not_available": { en: "[No text for this option]", pt: "[Sem texto para esta opção]", es: "[Sin texto para esta opción]" },
        "explanation_not_available_default": { en: "Explanation not available", pt: "Explicação não disponível", es: "Explicación no disponible"},
        "Correct": { en: "Correct", pt: "Correta", es: "Correcta" },
        "YourAnswer": { en: "Your Answer", pt: "Sua Resposta", es: "Tu Respuesta" },

        // Chaves movidas do script inline do focused-pro.html
        "go_dashboard_text_content": { en: "Dashboard", pt: "Painel", es: "Panel" },
        "quiz_logout_text_content": { en: "Logout", pt: "Sair", es: "Cerrar Sesión" },
        "confirm_exit_to_dashboard_pro": { en: "Your current quiz progress will be saved. Are you sure you want to return to the Dashboard?", pt: "Seu progresso atual do quiz será salvo. Tem certeza que deseja retornar ao Painel?", es: "Tu progreso actual del cuestionario se guardará. ¿Estás seguro de que quieres volver al Panel?"},
        "confirm_logout_quiz_lose_progress_pro": { en: "Your current quiz progress will be lost. Are you sure you want to logout and go to the login page?", pt: "O progresso atual do seu quiz será perdido. Tem certeza que deseja sair e ir para a página de login?", es: "El progreso actual de tu cuestionario se perderá. ¿Estás seguro de que quieres cerrar sesión e ir a la página de inicio de sesión?" },
        "legal_notice_text_content": { en: "© 2025 BrainboxMed. All rights reserved. This content is for educational purposes only and does not replace professional medical advice.", pt: "© 2025 BrainboxMed. Todos os direitos reservados. Este conteúdo é apenas para fins educacionais e não substitui o aconselhamento médico profissional.", es: "© 2025 BrainboxMed. Todos los derechos reservados. Este contenido es solo para fines educativos y no reemplaza el asesoramiento médico profesional." },
        "music_player_label_content": { en: "🎧 Study Music", pt: "🎧 Música para Estudo", es: "🎧 Música para Estudiar" }
    };
    
    return (key, replacements = {}) => {
        let text = t[key]?.[lang] || t[key]?.['en'] || key;
        for (const [placeholder, value] of Object.entries(replacements)) {
            text = text.replace(new RegExp(`\\$\\{${placeholder}\\}`, 'g'), String(value));
        }
        return text;
    };
}
const translate = getTranslations(); // Inicializa a função de tradução globalmente
// #endregion

// #region --- Configuração de Elementos Estáticos da Página e Listeners da Barra Superior ---
function setupStaticElementsAndListeners() {
    // Aplica traduções aos elementos estáticos
    const goDashboardTextEl = document.getElementById('go_dashboard_text');
    if (goDashboardTextEl) goDashboardTextEl.textContent = translate("go_dashboard_text_content");

    const quizLogoutTextEl = document.getElementById('quiz_logout_text');
    if (quizLogoutTextEl) quizLogoutTextEl.textContent = translate("quiz_logout_text_content");
    
    const legalNoticeEl = document.getElementById('legal-notice-text');
    if (legalNoticeEl) legalNoticeEl.textContent = translate("legal_notice_text_content");

    const musicPlayerLabelEl = document.getElementById("music-player-label");
    if (musicPlayerLabelEl) musicPlayerLabelEl.textContent = translate("music_player_label_content");

    // Listener do Botão "Ir para Dashboard"
    const goDashboardBtn = document.getElementById('go-dashboard-button');
    if (goDashboardBtn) {
        goDashboardBtn.addEventListener('click', () => {
            if (typeof saveProgress === 'function') { // saveProgress é definida neste arquivo
                if (confirm(translate("confirm_exit_to_dashboard_pro"))) {
                    saveProgress(); // Salva progresso
                    localStorage.setItem('cameFromFocusedProQuiz', 'true'); // Define flag
                    window.location.href = '../Dashboard/Dashboard-Focused-Pro.html';
                }
            } else {
                if (confirm(translate("confirm_exit_to_dashboard_pro").replace("will be saved.", "might not be saved."))) {
                    localStorage.setItem('cameFromFocusedProQuiz', 'true');
                    window.location.href = '../Dashboard/Dashboard-Focused-Pro.html';
                }
                console.warn('Função saveProgress não encontrada durante navegação para dashboard. Progresso pode não ter sido salvo.');
            }
        });
    } else {
        console.warn("Botão Ir para Dashboard (go-dashboard-button) não encontrado.");
    }

    // Listener do Botão "Logout" (na página do Quiz)
    const quizLogoutBtn = document.getElementById('quiz-logout-button');
    if (quizLogoutBtn) {
        quizLogoutBtn.addEventListener('click', () => {
            if (confirm(translate("confirm_logout_quiz_lose_progress_pro"))) {
                console.log("Focused Pro Quiz Logout: Limpando autenticação e PROGRESSO DO QUIZ FOCADO PRO, depois redirecionando.");
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                localStorage.removeItem('focusedProState'); // Progresso do quiz Focused Pro é APAGADO
                localStorage.removeItem('quizBasicState');
                localStorage.removeItem('focusedState'); // Limpa também o estado do focused não-pro
                window.location.href = '../login.html';
            }
        });
    } else {
        console.warn("Botão Logout do Quiz (quiz-logout-button) não encontrado.");
    }
}
// #endregion

// #region --- Funções de Atualização da UI (Botão Marcar) ---
function updateMarkButton(questionId) {
    const markBtn = document.getElementById("mark-btn");
    if (!markBtn) return;

    const isMarked = markedQuestions.has(questionId);
    const buttonText = translate(isMarked ? "unmarkReview" : "markForReview");
    markBtn.innerHTML = `🔖 ${buttonText}`; 

    const baseClasses = "text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 transition-colors";
    if (isMarked) {
        markBtn.className = `${baseClasses} text-red-600 hover:underline`;
    } else {
        markBtn.className = `${baseClasses} text-yellow-600 hover:underline`;
    }
}

function toggleMark(questionId) { // Chamada pelo atributo onclick no template da questão
    if (markedQuestions.has(questionId)) {
        markedQuestions.delete(questionId);
    } else {
        markedQuestions.add(questionId);
    }
    saveProgress(); 
    updateMarkButton(questionId);
}
// #endregion

// #region --- Lógica Principal do Quiz ---
function initializeFocusedProQuiz() {
    console.log("Inicializando Quiz Modo Focused Pro...");
    const urlParams = new URLSearchParams(window.location.search);
    
    simSelectedAreas = (urlParams.get('areas')?.split(',').map(a => a.trim().toLowerCase()).filter(a => a)) || [];
    simSelectedTopics = (urlParams.get('topics')?.split(',').map(t => t.trim().toLowerCase()).filter(t => t)) || [];
    const newSessionParam = urlParams.get('new');

    console.log("Focused Pro Quiz - Filtros da URL: Áreas:", simSelectedAreas, "Tópicos:", simSelectedTopics, "Nova Sessão:", newSessionParam);

    if (newSessionParam === 'true') {
        console.log("Focused Pro Quiz: 'new=true' detectado. Limpando 'focusedProState' e resetando.");
        localStorage.removeItem('focusedProState');
        resetQuizState();
        prepareNextBlock();
    } else {
        if (loadProgress()) {
            console.log("Focused Pro Quiz: Progresso carregado. Verificando e renderizando.");
            if (currentQuestions.length > 0 && currentIndex < currentQuestions.length && currentQuestions[currentIndex]) {
                if (typeof questionBank !== 'undefined' && questionBank.shuffleOptionsAndUpdateCorrect) {
                    questionBank.shuffleOptionsAndUpdateCorrect(currentQuestions[currentIndex]);
                }
                renderQuestion(currentQuestions[currentIndex]);
            } else {
                console.warn("Focused Pro Quiz: Progresso carregado, mas dados inválidos. Preparando novo bloco.");
                localStorage.removeItem('focusedProState');
                resetQuizState();
                prepareNextBlock();
            }
        } else {
            console.log("Focused Pro Quiz: Nenhum progresso. Resetando e preparando novo bloco.");
            resetQuizState(); 
            prepareNextBlock();
        }
    }
}

function resetQuizState() {
    console.log("Resetando variáveis de estado do quiz Focused Pro.");
    userAnswers = {};
    currentIndex = 0;
    markedQuestions.clear();
    currentQuestions = [];
    isRevisitingMarkedQuestions = false;
    markedQuestionsToRevisit = [];
    currentRevisitIndex = 0;
}

function prepareNextBlock() {
    console.log("🎯 Focused Pro: Preparando novo bloco. Áreas:", simSelectedAreas, "Tópicos:", simSelectedTopics);

    if (typeof questionBank === 'undefined' || !questionBank.getAllQuestions) {
        displayQuizError(translate("error_question_bank_not_loaded"));
        return;
    }

    const allQuestionsFromBank = questionBank.getAllQuestions();
    if (!allQuestionsFromBank || allQuestionsFromBank.length === 0) {
        displayQuizError(translate("error_no_questions_found")); // Erro mais genérico se o banco estiver realmente vazio
        return;
    }
    
    let filteredQuestions = applyFilters(allQuestionsFromBank);

    if (filteredQuestions.length === 0) {
        console.warn("Focused Pro: Filtro inicial resultou em 0 questões para os critérios atuais.");
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
             quizContainer.innerHTML = `<div class="text-center p-8">
                <h2 class="text-xl font-semibold mb-4">${translate("error_no_questions_found")}</h2>
                <p class="text-gray-600">${translate("error_try_different_filters")}</p>
                <button onclick="window.location.href='../Dashboard/Dashboard-Focused-Pro.html'"
                        class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    ${translate("go_dashboard_text_content")}
                </button>
            </div>`;
        }
        currentQuestions = []; // Garante que currentQuestions esteja vazio
        return;
    }

    currentQuestions = selectBlockQuestions(filteredQuestions);

    if (currentQuestions.length === 0) {
        console.log("Focused Pro: Nenhuma questão disponível para o próximo bloco (possivelmente todas mostradas ou erro de seleção).");
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = `<div class="text-center p-8">
                <h2 class="text-xl font-semibold mb-4">${translate("all_questions_answered_for_criteria_title")}</h2>
                <p class="text-gray-600">${translate("all_questions_answered_for_criteria_message")}</p>
                <button onclick="window.location.href='../Dashboard/Dashboard-Focused-Pro.html'"
                        class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                     ${translate("go_dashboard_text_content")}
                </button>
            </div>`;
        }
        return;
    }
    
    currentIndex = 0; 
    renderQuestion(currentQuestions[currentIndex]);
    console.log(`Focused Pro: Bloco preparado com ${currentQuestions.length} questões. ID da primeira Q: ${currentQuestions[0]?.id}`);
}

function applyFilters(questions) {
    let result = [...questions];
    
    if (simSelectedAreas && simSelectedAreas.length > 0) {
        result = result.filter(q => {
            const questionAreas = (q.areas || (q.area ? [q.area] : [])).map(a => String(a).toLowerCase().trim());
            return simSelectedAreas.some(selectedArea => questionAreas.includes(selectedArea));
        });
    }

    if (simSelectedTopics && simSelectedTopics.length > 0) {
        result = result.filter(q => {
            const questionTopics = (q.topics || (q.topic ? [q.topic] : [])).map(t => String(t).toLowerCase().trim());
            return simSelectedTopics.some(selectedTopic => questionTopics.includes(selectedTopic));
        });
    }
    console.log(`Focused Pro: Após todos os filtros: ${result.length} questões.`);
    return result;
}

function selectBlockQuestions(filteredQs) {
    let questionsForBlock;

    if (!filteredQs || filteredQs.length === 0) {
        return [];
    }

    const lookback = Math.max(filteredQs.length, 100); // Aumentar lookback para mais variedade
    let uniqueAvailableQs = filteredQs.filter(q => !shownQuestionIds.slice(-lookback).includes(q.id));

    if (uniqueAvailableQs.length < BLOCK_SIZE && filteredQs.length > uniqueAvailableQs.length) {
        // Se não houver questões "novas" suficientes, recicla das mais antigas não mostradas recentemente
        // Isso ajuda a evitar a situação de "critérios esgotados" muito rapidamente se o filtro for restritivo
        const olderRecyclable = filteredQs.filter(q => !uniqueAvailableQs.some(uq => uq.id === q.id) && !shownQuestionIds.slice(-50).includes(q.id)); // Exemplo: não vistas nas últimas 50
        uniqueAvailableQs.push(...questionBank.shuffleArray(olderRecyclable));
        uniqueAvailableQs = Array.from(new Set(uniqueAvailableQs.map(q => q.id))).map(id => uniqueAvailableQs.find(q => q.id === id)); // Remove duplicatas
    }


    if (uniqueAvailableQs.length === 0 && filteredQs.length > 0) {
        // Se NENHUMA questão única estiver disponível (todas foram vistas recentemente),
        // mas AINDA HÁ questões filtradas, recicla todas as filtradas para evitar parar o quiz.
        console.warn("Todas as questões filtradas foram vistas recentemente. Reciclando o conjunto filtrado para este bloco.");
        uniqueAvailableQs = questionBank.shuffleArray([...filteredQs]); // Recicla todas as filtradas, embaralhadas
         // Limpa uma porção mais antiga do shownQuestionIds para permitir que essas questões reapareçam mais cedo se necessário no futuro
        if (shownQuestionIds.length > BLOCK_SIZE * 2) {
            shownQuestionIds.splice(0, BLOCK_SIZE); 
        }
    }


    if (uniqueAvailableQs.length <= BLOCK_SIZE) {
        questionsForBlock = questionBank.shuffleArray([...uniqueAvailableQs]);
    } else {
        questionsForBlock = [];
        let availableForSelection = [...uniqueAvailableQs];

        let wrongRelevant = previousWrongIds
            .map(id => availableForSelection.find(q => q && q.id === id))
            .filter(q => q);

        const countForWrong = Math.min(wrongRelevant.length, Math.floor(BLOCK_SIZE * 0.2)); // Max 20% do bloco para erradas
        questionsForBlock.push(...questionBank.shuffleArray(wrongRelevant).slice(0, countForWrong));
        availableForSelection = availableForSelection.filter(q => !questionsForBlock.some(nbq => nbq.id === q.id));
        
        if (availableForSelection.length > 0 && questionsForBlock.length < BLOCK_SIZE) {
            const difficultyProportions = { easy: 0.2, moderate: 0.3, hard: 0.3, very_hard: 0.2 };
            let neededForProportionFill = BLOCK_SIZE - questionsForBlock.length;

            Object.entries(difficultyProportions).forEach(([level, fraction]) => {
                if (neededForProportionFill <= 0) return;
                const targetCountForLevel = Math.max(0, Math.round(fraction * (BLOCK_SIZE - countForWrong)));
                const subsetForLevel = availableForSelection.filter(q => q.level === level);
                const takeFromSubset = Math.min(subsetForLevel.length, targetCountForLevel, neededForProportionFill);
                
                if (takeFromSubset > 0) {
                    const questionsToAdd = questionBank.shuffleArray(subsetForLevel).slice(0, takeFromSubset);
                    questionsForBlock.push(...questionsToAdd);
                    neededForProportionFill -= takeFromSubset;
                    availableForSelection = availableForSelection.filter(q => !questionsToAdd.some(addedQ => addedQ.id === q.id));
                }
            });
        }
        
        if (questionsForBlock.length < BLOCK_SIZE && availableForSelection.length > 0) {
            questionsForBlock.push(...questionBank.shuffleArray(availableForSelection).slice(0, BLOCK_SIZE - questionsForBlock.length));
        }

        // Se ainda faltar, preencher aleatoriamente do que sobrou das filtradas (reciclagem forçada)
        if (questionsForBlock.length < BLOCK_SIZE) {
            let emergencyPool = filteredQs.filter(q => !questionsForBlock.some(nbq => nbq.id === q.id));
            if (emergencyPool.length === 0 && filteredQs.length > 0) emergencyPool = filteredQs; // Usa todas se o filtro anterior esvaziou

            questionsForBlock.push(...questionBank.shuffleArray(emergencyPool).slice(0, BLOCK_SIZE - questionsForBlock.length));
             // Remove duplicatas que podem ter sido introduzidas pelo preenchimento de emergência
            questionsForBlock = Array.from(new Set(questionsForBlock.map(q => q.id))).map(id => questionsForBlock.find(q => q.id === id || filteredQs.find(fq => fq.id === id) ));
        }
        questionsForBlock = questionsForBlock.slice(0, BLOCK_SIZE); // Garante o tamanho do bloco
    }

    questionsForBlock.forEach(q => {
        if (q && q.options && typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function') {
            questionBank.shuffleOptionsAndUpdateCorrect(q);
        } else if (q) {
            console.warn("Focused Pro: Objeto da questão ou suas opções são inválidos para embaralhar. ID:", q.id);
        }
        if (q && !shownQuestionIds.includes(q.id)) { // Adiciona ao histórico geral apenas se não estiver lá
            shownQuestionIds.push(q.id);
        }
    });

    // Limita o histórico geral de questões mostradas para evitar consumo excessivo de memória
    if (shownQuestionIds.length > 300) { 
        shownQuestionIds = shownQuestionIds.slice(-300);
    }
    
    return questionsForBlock;
}
// #endregion

// #region --- Renderização da Questão e Opções ---
function renderQuestion(question) {
    const quizContainer = document.getElementById('quiz-container');
    if (!question || !quizContainer) {
        displayQuizError(translate("error_rendering_question"));
        console.error("Focused Pro RenderQuestion: Objeto da questão ou quizContainer inválido.", question, quizContainer);
        return;
    }

    const { labelText, prevDisabled } = getQuestionMetadata();
    const difficultyText = getDifficultyText(question.level);
    const optionsHTML = generateOptionsHTML(question);
    const questionActualText = getQuestionText(question);

    const levelKey = question.level ? String(question.level).toLowerCase().replace(/\s+/g, '_') : 'unknown';
    const difficultyBadgeClasses = 
        levelKey === 'easy' ? 'bg-green-100 text-green-700' :
        levelKey === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
        levelKey === 'hard' ? 'bg-red-100 text-red-700' :
        levelKey === 'very_hard' ? 'bg-purple-100 text-purple-700' : 
        'bg-gray-100 text-gray-700';

    quizContainer.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold text-purple-700">${labelText}</h2>
                <span class="text-xs font-bold px-2 py-1 rounded-full ${difficultyBadgeClasses}">
                    ${difficultyText}
                </span>
            </div>
            <p class="text-gray-800 mb-6 text-base">${questionActualText}</p>
            <form id="question-form" class="space-y-3">${optionsHTML}</form>
            <div class="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button type="button" id="mark-btn" onclick="toggleMark(${question.id})" class="mb-3 sm:mb-0">
                    {/* Conteúdo definido por updateMarkButton */}
                </button>
                <div class="flex gap-x-3">
                    <button type="button" onclick="handlePreviousQuestionClick()" id="prev-btn" 
                            class="px-6 py-2.5 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            ${prevDisabled ? 'disabled' : ''}>
                        ⬅️ ${translate("previousButton")}
                    </button>
                    <button type="button" onclick="handleNextQuestionClick()" id="next-btn" 
                            class="px-6 py-2.5 text-sm font-medium bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:ring-4 focus:ring-purple-300">
                        ${translate("nextButton")} ➡️
                    </button>
                </div>
            </div>
        </div>`;
    
    setupOptionEventListeners(question.id);
    updateMarkButton(question.id);
    window.scrollTo(0, 0);
    console.log(`📦 Focused Pro: Questão ${question.id} renderizada.`);
}

function getQuestionMetadata() {
    if (isRevisitingMarkedQuestions) {
        return {
            labelText: translate("revisitingMarkedLabel", {
                num: currentRevisitIndex + 1,
                total: markedQuestionsToRevisit.length
            }),
            prevDisabled: currentRevisitIndex === 0
        };
    }
    return {
        labelText: translate("question_label_placeholder", {
            x: currentIndex + 1,
            y: currentQuestions.length
        }),
        prevDisabled: currentIndex === 0
    };
}

function getDifficultyText(level) {
    const levelKey = level ? String(level).toLowerCase().replace(/\s+/g, '_') : 'unknown';
    const translatedText = translate(`difficulty_${levelKey}`);
    return (translatedText !== `difficulty_${levelKey}`) ? translatedText : (level || translate('difficulty_unknown'));
}

function getQuestionText(question) {
    if (!question || !question.question) return translate("Question_text_not_available");
    const lang = getCurrentLanguage();
    return question.question[lang] || question.question['en'] || translate("Question_text_not_available");
}

function generateOptionsHTML(question) {
    if (!question || !Array.isArray(question.options)) return '';
    const lang = getCurrentLanguage();
    return question.options.map((opt, index) => {
        const isChecked = userAnswers[question.id] === index;
        const optionText = (opt && opt.text) ? (opt.text[lang] || opt.text['en'] || translate("option_text_not_available")) : translate("option_text_not_available");
        return `
            <div class="flex items-center option-container py-1">
                <input type="radio" name="question_${question.id}" value="${index}" 
                        id="q${question.id}_opt${index}" ${isChecked ? 'checked' : ''}
                        class="peer h-4 w-4 transform scale-125 accent-purple-600 focus:ring-purple-500 focus:ring-offset-0 focus:ring-2">
                <label for="q${question.id}_opt${index}" 
                        class="ml-3 block flex-1 text-gray-800 bg-white border border-gray-300 rounded-lg p-4 cursor-pointer 
                                hover:border-purple-400 hover:bg-purple-50 transition-colors duration-150
                                peer-checked:border-purple-500 peer-checked:bg-purple-50">
                    ${optionText}
                </label>
            </div>`;
    }).join('');
}

function setupOptionEventListeners(questionId) {
    document.querySelectorAll(`input[type="radio"][name="question_${questionId}"]`).forEach(radio => {
        radio.addEventListener('change', (event) => {
            userAnswers[questionId] = parseInt(event.target.value);
            saveProgress();
            console.log(`✅ Focused Pro: Opção selecionada para Q ${questionId}:`, event.target.value);
        });
    });
}

function displayQuizError(messageKeyOrText) {
    const container = document.getElementById('quiz-container');
    const errorPrefix = translate("error_prefix_text");
    const message = (translate(messageKeyOrText) !== messageKeyOrText) ? translate(messageKeyOrText) : messageKeyOrText;

    if (container) {
        container.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mt-4" role="alert">
                <strong class="font-bold">⚠️ ${errorPrefix}</strong> 
                <span class="block sm:inline">${message}</span>
            </div>`;
    } else {
        console.error(`${errorPrefix} ${message} (Quiz container não encontrado).`);
    }
    console.error(`❌ Focused Pro: ${errorPrefix} ${message}`);
}
// #endregion

// #region --- Navegação entre Questões ---
function handleNextQuestionClick() {
    const currentQ = getCurrentQuestionObject();
    if (!currentQ || !validateOptionSelection(currentQ.id)) {
        if(!currentQ) console.error("Focused Pro handleNextQuestionClick: currentQ é indefinido.");
        return;
    }

    if (isRevisitingMarkedQuestions) {
        handleMarkedQuestionNavigation();
    } else {
        handleRegularQuestionNavigation();
    }
}

function getCurrentQuestionObject() {
    return isRevisitingMarkedQuestions 
        ? markedQuestionsToRevisit[currentRevisitIndex] 
        : currentQuestions[currentIndex];
}

function validateOptionSelection(questionId) {
    if (!document.querySelector(`input[type="radio"][name="question_${questionId}"]:checked`)) {
        alert(translate("selectOptionPrompt"));
        return false;
    }
    return true;
}

function handleMarkedQuestionNavigation() {
    currentRevisitIndex++;
    if (currentRevisitIndex < markedQuestionsToRevisit.length) {
        renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
    } else {
        isRevisitingMarkedQuestions = false;
        console.log("Focused Pro: Revisão de marcadas concluída. Prosseguindo para revisão do bloco.");
        showReviewMode();
    }
}

function handleRegularQuestionNavigation() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        renderQuestion(currentQuestions[currentIndex]);
    } else {
        startMarkedQuestionsReview();
    }
}

function startMarkedQuestionsReview() {
    markedQuestionsToRevisit = currentQuestions.filter(q => q && markedQuestions.has(q.id));
    
    if (markedQuestionsToRevisit.length > 0) {
        isRevisitingMarkedQuestions = true;
        currentRevisitIndex = 0;
        console.log("Focused Pro: Bloco finalizado. Iniciando revisão de marcadas:", markedQuestionsToRevisit.map(q => q.id));
        renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
    } else {
        console.log("Focused Pro: Bloco finalizado. Nenhuma questão marcada. Prosseguindo para revisão do bloco.");
        showReviewMode();
    }
}

function handlePreviousQuestionClick() {
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
// #endregion

// #region --- Modos de Revisão e Relatório Final ---
function showReviewMode() {
    const container = document.getElementById('quiz-container');
    if (!container) {
        console.error("❌ Focused Pro: quiz-container não encontrado para showReviewMode.");
        return;
    }

    container.innerHTML = `<h2 class="text-xl font-bold text-center mb-6">🔁 ${translate("blockReviewTitle")}</h2>`;
    
    currentQuestions.forEach((q, i) => {
        if (q) {
            container.innerHTML += createReviewItemHTML(q, i);
        } else {
            console.warn (`Focused Pro: Pulando questão indefinida no índice ${i} em showReviewMode.`);
        }
    });
    
    container.innerHTML += `
        <div class="text-center mt-8">
            <button id="resume-quiz-btn-pro" 
                    class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                ${translate("returnToQuizButton")}
            </button>
        </div>`;
    
    const resumeBtn = document.getElementById('resume-quiz-btn-pro');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            const wrongIdsFromThisBlock = currentQuestions
                .filter(cq => cq && userAnswers[cq.id] !== undefined && userAnswers[cq.id] !== cq.correct)
                .map(cq => cq.id);

            wrongIdsFromThisBlock.forEach(id => {
                if (!previousWrongIds.includes(id)) {
                    previousWrongIds.push(id);
                }
            });
            // previousWrongIds = previousWrongIds.slice(-50); // Limite opcional

            resetQuizState(); // Reseta para o próximo bloco
            prepareNextBlock();
        });
    } else {
        console.error("Focused Pro: Botão 'resume-quiz-btn-pro' não encontrado.");
    }
}

function createReviewItemHTML(question, index) {
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correct;
    const explanation = getExplanationText(question);
    const questionActualText = getQuestionText(question);
    const lang = getCurrentLanguage();

    const reviewOptionsHTML = (question.options || []).map((opt, idx) => {
        const optText = (opt && opt.text) ? (opt.text[lang] || opt.text['en'] || translate("option_text_not_available")) : translate("option_text_not_available");
        const isRightAnswer = idx === question.correct;
        const isChosenAnswer = idx === userAnswer;

        let optionClasses = "relative p-3 mb-2 rounded-md border text-sm ";
        let indicatorHtml = "";

        if (isRightAnswer) {
            optionClasses += "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-300 ring-offset-1 font-medium";
            indicatorHtml = `<span class="absolute top-1 right-1 text-xs font-bold text-blue-600">✔️ ${translate("Correct")}</span>`;
        } else if (isChosenAnswer && !isRightAnswer) {
            optionClasses += "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-300 ring-offset-1 font-medium";
            indicatorHtml = `<span class="absolute top-1 right-1 text-xs font-bold text-red-600">❌ ${translate("YourAnswer")}</span>`;
        } else {
            optionClasses += "bg-white border-gray-300 text-gray-700";
        }
      
        return `<div class="${optionClasses}"><p class="pr-16">${String.fromCharCode(65 + idx)}. ${optText}</p> ${indicatorHtml}</div>`;
    }).join('');

    return `
        <div class="border rounded-lg p-4 mb-4 ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}">
            <p class="font-semibold mb-2">Q${index + 1}: ${questionActualText}</p>
            <div class="space-y-2">${reviewOptionsHTML}</div>
            <p class="text-sm text-gray-600 italic mt-3">🧠 ${explanation}</p>
        </div>`;
}

function getExplanationText(question) {
    if (!question || !Array.isArray(question.options) || typeof question.correct !== 'number') {
        return translate("explanation_not_available_default");
    }
    const lang = getCurrentLanguage();
    const correctOption = question.options[question.correct];
    
    if (correctOption && correctOption.explanation) {
        return correctOption.explanation[lang] || 
               correctOption.explanation['en'] || 
               translate("explanation_not_available_default");
    }
    return translate("explanation_not_available_default");
}
// #endregion

// #region --- Inicialização do Evento DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("DOM da página focused-pro.html carregado.");
    
    setupStaticElementsAndListeners(); // Configura textos estáticos e listeners da barra superior
    
    const initQuizWithRetry = () => {
        if (typeof questionBank !== 'undefined' && 
            typeof questionBank.getAllQuestions === 'function' &&
            typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function' &&
            questionBank.getAllQuestions().length > 0) {
            
            console.log("Focused Pro: Banco de questões pronto. Inicializando quiz...");
            initializeFocusedProQuiz();
        } else {
            console.log("Focused Pro: Aguardando questionBank. Tentando novamente em 300ms.");
            setTimeout(initQuizWithRetry, 300);
        }
    };
    
    initQuizWithRetry();
});
// #endregion