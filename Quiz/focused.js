// focused.js
console.log("focused.js LOADED - Initializing Focused Mode Quiz...");

// #region --- Variáveis Globais e Configuração ---
const markedQuestions = new Set();
// let questionHistory = []; // Mantido para possível uso futuro, mas não usado ativamente
let shownQuestionIds = [];
let currentQuestions = []; // Bloco atual de questões filtradas
let currentIndex = 0;
let userAnswers = {};
let previousWrongIds = [];
let isRevisitingMarkedQuestions = false;
let markedQuestionsToRevisit = [];
let currentRevisitIndex = 0;
const BLOCK_SIZE = 15;

// Filtros da URL (preenchidos em initializeFocusedQuiz)
let simSelectedAreas = [];
let simSelectedTopics = [];
// #endregion

// #region --- Funções de Utilidade e Estado (Save/Load/Lang) ---
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

function saveProgress() {
    // Evitar salvar um estado completamente vazio, a menos que já haja respostas (ex: usuário voltou ao dashboard e saiu)
    if (currentQuestions.length === 0 && currentIndex === 0 && Object.keys(userAnswers).length === 0) {
        console.log("💾 Progress save skipped: No questions loaded or answers given yet in this block.");
        return;
    }
    
    const state = {
        currentQuestions,
        currentIndex,
        userAnswers,
        markedQuestions: Array.from(markedQuestions),
        previousWrongIds,
        shownQuestionIds,
        savedAreas: simSelectedAreas, // Salva os filtros ativos para este estado
        savedTopics: simSelectedTopics
    };
    
    localStorage.setItem('focusedState', JSON.stringify(state));
    console.log("💾 Progress saved to focusedState.");
}

function loadProgress() {
    const stateString = localStorage.getItem('focusedState');
    if (!stateString) return false;

    try {
        const state = JSON.parse(stateString);
        if (!state) {
            console.warn("❌ Parsed focusedState is null or undefined.");
            localStorage.removeItem('focusedState'); // Limpa estado inválido
            return false;
        }

        // Se simSelectedAreas/Topics ainda não foram definidos pela URL atual (ex: vindo de "Continuar Sessão")
        // use os que foram salvos com o estado.
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

        // Validação do estado carregado
        if (currentQuestions.length > 0 && currentIndex < currentQuestions.length && currentQuestions[currentIndex]) {
            console.log("✅ Progresso 'focusedState' restaurado. Áreas:", simSelectedAreas, "Tópicos:", simSelectedTopics);
            return true;
        } else if (currentQuestions.length > 0 && currentQuestions[0]) { // Se o índice estava ruim, mas há questões
            currentIndex = 0; // Reseta para a primeira do bloco salvo
            console.log("✅ Progresso 'focusedState' restaurado (índice ajustado). Áreas:", simSelectedAreas, "Tópicos:", simSelectedTopics);
            return true;
        }
        
        console.warn("❌ Progresso 'focusedState' carregado, mas dados inválidos ou bloco de questões vazio. Será ignorado.");
    } catch (error) {
        console.error("Error parsing focusedState from localStorage:", error);
    }
    
    localStorage.removeItem('focusedState'); // Limpa estado inválido ou corrupto
    return false;
}

function getTranslations() {
    const lang = getCurrentLanguage();   
    const t = {
        // --- OBJETO DE TRADUÇÕES COMPLETO ---
        "markForReview": { en: "Mark for Review", pt: "Marcar para revisão", es: "Marcar para revisar" },
        "unmarkReview": { en: "Unmark Review", pt: "Desmarcar revisão", es: "Desmarcar revisión" },
        "previousButton": { en: "Previous", pt: "Anterior", es: "Anterior" },
        "nextButton": { en: "Next", pt: "Próxima", es: "Siguiente" },
        "returnToQuizButton": { en: "➕ Next Block", pt: "➕ Próximo Bloco", es: "➕ Siguiente Bloque" },
        "selectOptionPrompt": { en: "Please select an option before proceeding.", pt: "Por favor, selecione uma opção antes de prosseguir.", es: "Por favor, seleccione una opción antes de continuar." },
        "error_processing_question": { en: "An error occurred processing the question. Please try reloading.", pt: "Ocorreu um erro ao processar a questão. Tente recarregar.", es: "Ocurrió un error procesando la pregunta. Intente recargar."},
        "error_rendering_question": { en: "Error rendering question.", pt: "Erro ao renderizar questão.", es: "Error al renderizar la pregunta." },
        "error_no_questions_found": { en: "No questions found for the selected criteria.", pt: "Nenhuma questão encontrada para os critérios selecionados.", es: "No se encontraron preguntas para los criterios seleccionados."},
        "error_question_bank_not_loaded": { en: "Question bank not loaded or empty.", pt: "Banco de questões não carregado ou vazio.", es: "Banco de preguntas no cargado o vacío."},
        "difficulty_easy": { en: "Easy", pt: "Fácil", es: "Fácil" },
        "difficulty_moderate": { en: "Moderate", pt: "Moderada", es: "Moderada" },
        "difficulty_hard": { en: "Hard", pt: "Difícil", es: "Difícil" },
        "difficulty_very_hard": { en: "Very Hard", pt: "Muito Difícil", es: "Muy Difícil" },
        "difficulty_unknown": { en: "Unknown Difficulty", pt: "Dificuldade Desconhecida", es: "Dificultad Desconocida" },
        "question_label_placeholder": { en: "Question ${x}/${y}", pt: "Questão ${x}/${y}", es: "Pregunta ${x}/${y}" },
        "revisitingMarkedLabel": { en: "Revisiting Marked ${num}/${total}", pt: "Revisando Marcada ${num}/${total}", es: "Revisando Marcada ${num}/${total}" },
        "blockReviewTitle": { en: "Block Review", pt: "Revisão do Bloco", es: "Revisión del Bloque" },
        "Question_text_not_available": { en: "Question text not available", pt: "Texto da questão não disponível", es: "Texto de la pregunta no disponible"},
        "option_text_not_available": { en: "[No text for this option]", pt: "[Sem texto para esta opção]", es: "[Sin texto para esta opción]" },
        "explanation_not_available_default": { en: "Explanation not available", pt: "Explicação não disponível", es: "Explicación no disponible"},
        "Correct": { en: "Correct", pt: "Correta", es: "Correcta" },
        "YourAnswer": { en: "Your Answer", pt: "Sua Resposta", es: "Tu Respuesta" },
        "go_dashboard_text": { en: "Dashboard", pt: "Painel", es: "Panel" },
        "dashboard_logout_text": { en: "Logout", pt: "Sair", es: "Cerrar Sesión" },
        "confirm_exit_to_dashboard": { en: "Your current progress will be saved. Are you sure you want to return to the Dashboard?", pt: "Seu progresso atual será salvo. Tem certeza que deseja retornar ao Painel?", es: "Tu progreso actual se guardará. ¿Estás seguro de que quieres volver al Panel?"},
        "confirm_logout_quiz_lose_progress": { en: "Your current quiz progress will be lost. Are you sure you want to logout?", pt: "O progresso atual do seu quiz será perdido. Tem certeza que deseja sair?", es: "El progreso actual de tu cuestionario se perderá. ¿Estás seguro de que quieres cerrar sesión?" },
        "legal-notice-text": { en: "© 2025 BrainboxMed. All rights reserved. This content is for educational purposes only and does not replace professional medical advice.", pt: "© 2025 BrainboxMed. Todos os direitos reservados. Este conteúdo é apenas para fins educacionais e não substitui o aconselhamento médico profissional.", es: "© 2025 BrainboxMed. Todos los derechos reservados. Este contenido es solo para fines educativos y no reemplaza el asesoramiento médico profesional." },
        "error_prefix_text": { en: "Error:", pt: "Erro:", es: "Error:" },
        "report_title": { en: "Performance Report", pt: "Relatório de Performance", es: "Informe de Rendimiento" },
        "report_correct_label": { en: "Correct", pt: "Acertos", es: "Aciertos" },
        "report_of_label": { en: "of", pt: "de", es: "de" },
        "report_restart_button": { en: "Restart Quiz", pt: "Recomeçar Quiz", es: "Reiniciar Quiz" },
        "error_try_different_filters": { en: "Please try different filter criteria from the dashboard.", pt: "Por favor, tente critérios de filtro diferentes no painel.", es: "Por favor, intente con diferentes criterios de filtro desde el panel." },
        "all_questions_answered_for_criteria_title": { en: "Criteria Exhausted", pt: "Critérios Esgotados", es: "Criterios Agotados" },
        "all_questions_answered_for_criteria_message": { en: "You have answered all available questions for the current selection. Please review your answers or select different criteria from the dashboard.", pt: "Você respondeu a todas as questões disponíveis para a seleção atual. Por favor, revise suas respostas ou selecione critérios diferentes no painel.", es: "Has respondido a todas las preguntas disponibles para la selección actual. Por favor, revisa tus respuestas o selecciona diferentes criterios desde el panel." },
    };
    
    return (key, replacements = {}) => {
        let text = t[key]?.[lang] || t[key]?.['en'] || key; // Fallback para a chave se não encontrar tradução
        for (const [placeholder, value] of Object.entries(replacements)) {
            text = text.replace(new RegExp(`\\$\\{${placeholder}\\}`, 'g'), String(value)); // Garante que o valor é string
        }
        return text;
    };
}
const translate = getTranslations(); // Inicializa a função de tradução globalmente
// #endregion

// #region --- Gerenciamento de Estado da UI (Botões do Topo, Botão Marcar) ---
function setupTopBarButtons() {
    const goDashboardButton = document.getElementById('go-dashboard-button');
    const logoutButton = document.getElementById('dashboard-logout-button');
    
    const goDashboardTextSpan = document.getElementById('go_dashboard_text');
    if (goDashboardTextSpan) goDashboardTextSpan.textContent = translate("go_dashboard_text");
    
    const dashboardLogoutTextSpan = document.getElementById('dashboard_logout_text');
    if (dashboardLogoutTextSpan) dashboardLogoutTextSpan.textContent = translate("dashboard_logout_text");

    // Botão Dashboard (Salva progresso do quiz focado)
    if (goDashboardButton) {
        goDashboardButton.addEventListener('click', () => {
            if (confirm(translate("confirm_exit_to_dashboard"))) {
                console.log("Focused Quiz: User confirmed exit to Dashboard. Saving progress.");
                saveProgress();
                localStorage.setItem('cameFromFocusedQuiz', 'true'); 
                window.location.href = '../Dashboard/Dashboard-Focused.html'; 
            }
        });
    }

    // Botão Logout (NA PÁGINA DO QUIZ - Perde o progresso do quiz focado)
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Usar a chave de tradução que indica perda de progresso
            if (confirm(translate("confirm_logout_quiz_lose_progress"))) { 
                console.log("Focused Quiz Logout: Clearing auth and FOCUSED QUIZ PROGRESS, then redirecting.");
                
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                localStorage.removeItem('focusedState'); // Progresso do quiz focado é APAGADO
                
                // Opcional: limpar outros estados de quiz não relacionados
                localStorage.removeItem('quizBasicState');
                localStorage.removeItem('proSimulationState');
                
                window.location.href = '../login.html';
            }
        });
    }
    
    // Tradução do aviso legal no rodapé (movido para cá para ser parte da configuração da UI)
    const legalNoticeEl = document.getElementById("legal-notice-text");
    if (legalNoticeEl) {
        legalNoticeEl.textContent = translate("legal-notice-text");
    }
}

function updateMarkButton(questionId) {
    const markBtn = document.getElementById("mark-btn");
    if (!markBtn) return;

    const isMarked = markedQuestions.has(questionId);
    const buttonText = translate(isMarked ? "unmarkReview" : "markForReview");
    // Se quiser o emoji de volta:
    markBtn.innerHTML = `🔖 ${buttonText}`; 
    // Se preferir sem emoji:
    // markBtn.textContent = buttonText;

    // Ajuste as classes conforme o seu CSS de Tailwind ou customizado
    const baseClasses = "text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"; // Exemplo
    if (isMarked) {
        markBtn.className = `${baseClasses} text-red-600 hover:underline`; // Exemplo
    } else {
        markBtn.className = `${baseClasses} text-yellow-600 hover:underline`; // Exemplo
    }
}

function toggleMark(questionId) { // Chamada pelo onclick do botão
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
function initializeFocusedQuiz() {
    console.log("Initializing Focused Mode Quiz...");
    const urlParams = new URLSearchParams(window.location.search);
    
    simSelectedAreas = urlParams.get('areas')?.split(',').map(a => a.trim().toLowerCase()).filter(a => a) || [];
    simSelectedTopics = urlParams.get('topics')?.split(',').map(t => t.trim().toLowerCase()).filter(t => t) || [];
    const newSessionParam = urlParams.get('new');

    console.log("Focused Quiz - Filters from URL: Areas:", simSelectedAreas, "Topics:", simSelectedTopics, "New Session:", newSessionParam);

    if (newSessionParam === 'true') {
        console.log("Focused Quiz: 'new=true' ou parâmetros de filtro detectados. Limpando 'focusedState' e resetando estado do quiz.");
        localStorage.removeItem('focusedState');
        resetQuizState(); // Reseta variáveis globais do quiz
        prepareNextBlock();
    } else {
        if (loadProgress()) { // Tenta carregar. loadProgress agora define simSelectedAreas/Topics se vierem do estado.
            console.log("Focused Quiz: Progresso carregado. Verificando e renderizando questão atual.");
            if (currentQuestions.length > 0 && currentIndex < currentQuestions.length && currentQuestions[currentIndex]) {
                // Embaralhar opções da questão carregada (se ainda não estiverem, ou re-embaralhar)
                if (typeof questionBank !== 'undefined' && questionBank.shuffleOptionsAndUpdateCorrect) {
                    questionBank.shuffleOptionsAndUpdateCorrect(currentQuestions[currentIndex]);
                }
                renderQuestion(currentQuestions[currentIndex]);
            } else {
                console.warn("Focused Quiz: Progresso carregado, mas dados da questão atual inválidos. Preparando novo bloco.");
                localStorage.removeItem('focusedState'); // Limpa estado possivelmente corrompido
                resetQuizState();
                prepareNextBlock();
            }
        } else {
            console.log("Focused Quiz: Nenhum progresso para carregar. Resetando estado e preparando novo bloco.");
            resetQuizState(); // Garante um estado limpo
            prepareNextBlock();
        }
    }
}

function resetQuizState() {
    console.log("Resetting quiz state variables.");
    userAnswers = {};
    currentIndex = 0;
    // shownQuestionIds = []; // Não resetar shownQuestionIds aqui, pois ele é um histórico mais longo para evitar repetições gerais
    // previousWrongIds = []; // Não resetar previousWrongIds aqui, pois ele acumula entre blocos. É limpo seletivamente.
    markedQuestions.clear();
    currentQuestions = []; // Limpa o bloco de questões atual
    isRevisitingMarkedQuestions = false;
    markedQuestionsToRevisit = [];
    currentRevisitIndex = 0;
}

function prepareNextBlock() {
    console.log("🎯 Preparing new block. Areas:", simSelectedAreas, "Topics:", simSelectedTopics);

    if (typeof questionBank === 'undefined' || !questionBank.getAllQuestions) {
        displayQuizError(translate("error_question_bank_not_loaded"));
        return;
    }

    const allQuestionsFromBank = questionBank.getAllQuestions();
    if (!allQuestionsFromBank || allQuestionsFromBank.length === 0) {
        displayQuizError(translate("error_no_questions_found"));
        return;
    }
    
    let filteredQuestions = applyFilters(allQuestionsFromBank);

    if (filteredQuestions.length === 0) { // Se o filtro inicial não retornar nada
        console.warn("Initial filter resulted in 0 questions.");
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
             quizContainer.innerHTML = `<div class="text-center p-8">
                <h2 class="text-xl font-semibold mb-4">${translate("error_no_questions_found")}</h2>
                <p class="text-gray-600">${translate("error_try_different_filters")}</p>
                <button onclick="window.location.href='../Dashboard/Dashboard-Focused.html'"
                        class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    ${translate("go_dashboard_text")}
                </button>
            </div>`;
        }
        currentQuestions = [];
        return;
    }

    // A função selectBlockQuestions agora lida com a lógica de tamanho do bloco
    currentQuestions = selectBlockQuestions(filteredQuestions);

    if (currentQuestions.length === 0) {
        // Isso significa que, mesmo havendo questões filtradas, selectBlockQuestions não conseguiu formar um bloco
        // (ex: todas as questões do pequeno conjunto já foram respondidas e a lógica de repetição as excluiu,
        // ou algum outro erro na seleção).
        console.log("No questions available for the next block under current criteria (possibly all shown or selection error).");
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            // Novas chaves de tradução para esta mensagem específica
            quizContainer.innerHTML = `<div class="text-center p-8">
                <h2 class="text-xl font-semibold mb-4">${translate("all_questions_answered_for_criteria_title")}</h2>
                <p class="text-gray-600">${translate("all_questions_answered_for_criteria_message")}</p>
                <button onclick="window.location.href='../Dashboard/Dashboard-Focused.html'"
                        class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    ${translate("go_dashboard_text")}
                </button>
            </div>`;
        }
        return; // Para o fluxo aqui
    }
    
    // currentIndex já deve ter sido resetado para 0 por resetQuizState() antes de chamar prepareNextBlock (via showReviewMode)
    // mas podemos garantir aqui se esta função for chamada de outros lugares no futuro.
    currentIndex = 0; 

    renderQuestion(currentQuestions[currentIndex]);
    console.log(`Block prepared with ${currentQuestions.length} questions. First Q ID: ${currentQuestions[0]?.id}`);
}

function applyFilters(questions) {
    let result = [...questions]; // Começa com todas as questões do banco
    
    // Filtrar por ÁREA(s) - LÓGICA "OU" ("OR")
    if (simSelectedAreas && simSelectedAreas.length > 0) {
        result = result.filter(q => {
            const questionAreas = (q.areas || (q.area ? [q.area] : [])).map(a => String(a).toLowerCase().trim());
            return simSelectedAreas.some(selectedArea => questionAreas.includes(selectedArea));
        });
    }

    // Filtrar por TÓPICO(s)
    if (simSelectedTopics && simSelectedTopics.length > 0) {
        result = result.filter(q => {
            const questionTopics = (q.topics || (q.topic ? [q.topic] : [])).map(t => String(t).toLowerCase().trim());
            return simSelectedTopics.some(selectedTopic => questionTopics.includes(selectedTopic));
        });
    }
    console.log(`After all filters: ${result.length} questions.`);
    return result;
}

function selectBlockQuestions(filteredQs) {
    let questionsForBlock;

    if (!filteredQs || filteredQs.length === 0) {
        return []; // Retorna um array vazio se não houver questões filtradas
    }

    // Tenta pegar questões não mostradas nas últimas 'X' interações, onde X é um pouco maior que o tamanho do conjunto filtrado para permitir algum ciclo.
    const lookback = Math.max(filteredQs.length, 10); // Evitar repetir as últimas N questões já mostradas
    let uniqueAvailableQs = filteredQs.filter(q => !shownQuestionIds.slice(-lookback).includes(q.id));

    if (filteredQs.length <= BLOCK_SIZE) {
        // O conjunto filtrado já é pequeno ou igual ao tamanho do bloco desejado.
        if (uniqueAvailableQs.length > 0) {
            // Há questões "novas" (não vistas recentemente) neste pequeno conjunto.
            questionsForBlock = questionBank.shuffleArray([...uniqueAvailableQs]);
            console.log(`Small set: Using ${questionsForBlock.length} unique available questions.`);
        } else {
            // Todas as questões neste pequeno conjunto já foram vistas recentemente.
            // Permite reciclar todas as questões do conjunto filtrado para "treinar".
            console.log("Small set: All questions seen recently. Recycling all filtered questions for drilling.");
            questionsForBlock = []; // Alterado para retornar vazio se não houver "novas" e o conjunto for pequeno
                                    // Isso força a mensagem "Criteria Exhausted" se o filtro for muito restritivo
                                    // e todas as poucas questões já tiverem sido vistas recentemente.
                                    // Se preferir reciclar sempre, mesmo em conjuntos pequenos:
                                    // questionsForBlock = questionBank.shuffleArray([...filteredQs]);
        }
        // O tamanho do bloco será o número de questões em questionsForBlock (<= filteredQs.length)
    } else {
        // O conjunto filtrado é maior que BLOCK_SIZE. Aplicar lógica de seleção mais complexa.
        // Esta parte é semelhante à lógica anterior para preencher um bloco de tamanho BLOCK_SIZE.
        questionsForBlock = [];
        let availableForSelection = [...uniqueAvailableQs]; // Começa com as "novas"

        // 1. Priorizar questões erradas anteriormente
        let wrongRelevant = previousWrongIds
            .map(id => availableForSelection.find(q => q && q.id === id)) // Busca em availableForSelection
            .filter(q => q); // Remove nulos

        const countForWrong = Math.min(wrongRelevant.length, Math.floor(BLOCK_SIZE * 0.2));
        questionsForBlock.push(...questionBank.shuffleArray(wrongRelevant).slice(0, countForWrong));
        availableForSelection = availableForSelection.filter(q => !questionsForBlock.some(nbq => nbq.id === q.id));

        // 2. Tentar manter proporções de dificuldade para o restante
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
        
        // 3. Se ainda faltar, preencher com o restante das disponíveis "novas"
        if (questionsForBlock.length < BLOCK_SIZE && availableForSelection.length > 0) {
            questionsForBlock.push(...questionBank.shuffleArray(availableForSelection).slice(0, BLOCK_SIZE - questionsForBlock.length));
        }

        // 4. Se mesmo assim faltar (improvável se filteredQs > BLOCK_SIZE e availableForSelection era grande),
        //    reciclar de TODAS as filtradas para garantir BLOCK_SIZE, se possível.
        if (questionsForBlock.length < BLOCK_SIZE) {
            console.log("Recycling from all filtered questions to complete the BLOCK_SIZE.");
            let emergencyPool = filteredQs.filter(q => !questionsForBlock.some(nbq => nbq.id === q.id)); // Pega as que ainda não estão no bloco
            if (emergencyPool.length === 0 && filteredQs.length > 0) { // Se todas as filtradas já estão (improvável) ou pool vazio
                emergencyPool = filteredQs; // Usa todas as filtradas para ter de onde tirar
            }
            questionsForBlock.push(...questionBank.shuffleArray(emergencyPool).slice(0, BLOCK_SIZE - questionsForBlock.length));
             // Remove duplicatas que podem ter sido introduzidas pelo preenchimento de emergência
            questionsForBlock = Array.from(new Set(questionsForBlock.map(q => q.id)))
                                .map(id => questionsForBlock.find(q => q.id === id) || filteredQs.find(fq => fq.id === id) )
                                .filter(q => q); // Garante que não haja nulos se filteredQs não tiver o ID
        }
        questionsForBlock = questionsForBlock.slice(0, BLOCK_SIZE); // Garante o tamanho máximo do bloco
    }

    // Processamento final para o bloco selecionado
    questionsForBlock.forEach(q => {
        if (q && q.options && typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function') {
            questionBank.shuffleOptionsAndUpdateCorrect(q);
        } else if (q) {
            console.warn("Question object or its options are invalid for shuffle. ID:", q.id);
        } else {
            console.error("Invalid question found in questionsForBlock during shuffle preparation:", q);
        }
        // Adicionar ao histórico geral de questões mostradas, se ainda não estiver lá (ou se a lógica de repetição permitir)
        if (q && !shownQuestionIds.includes(q.id)) { // Adiciona somente se não estiver no histórico geral
            shownQuestionIds.push(q.id);
        }
    });

    // Limitar o histórico geral de questões mostradas
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
        console.error("RenderQuestion: Question object or quizContainer not found.", question, quizContainer);
        return;
    }

    const { labelText, prevDisabled } = getQuestionMetadata(); // Não precisa passar 'question', usa globais
    const difficultyText = getDifficultyText(question.level);
    const optionsHTML = generateOptionsHTML(question);
    const questionActualText = getQuestionText(question);

    // Aplicar classes de dificuldade dinamicamente se necessário
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
    updateMarkButton(question.id); // Atualiza o texto do botão de marcar/desmarcar
    window.scrollTo(0, 0);
    console.log(`📦 Question ${question.id} rendered successfully.`);
}

function getQuestionMetadata() { // Modificada para não precisar de 'question' como parâmetro
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
            y: currentQuestions.length // Usa currentQuestions.length para o total do bloco atual
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
        // Classes CSS copiadas da sua versão anterior de renderQuestion para manter o estilo
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
            saveProgress(); // Salva progresso a cada resposta
            console.log(`✅ Option selected for Q ${questionId}:`, event.target.value);
        });
    });
}

function displayQuizError(messageKeyOrText) { // Pode receber chave ou texto já traduzido
    const container = document.getElementById('quiz-container');
    const errorPrefix = translate("error_prefix_text");
    // Tenta traduzir messageKeyOrText; se já for traduzido, usa como está.
    const message = (translate(messageKeyOrText) !== messageKeyOrText) ? translate(messageKeyOrText) : messageKeyOrText;

    if (container) {
        container.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mt-4" role="alert">
                <strong class="font-bold">⚠️ ${errorPrefix}</strong> 
                <span class="block sm:inline">${message}</span>
            </div>`;
    } else {
        console.error(`${errorPrefix} ${message} (Quiz container not found).`);
    }
    console.error(`❌ ${errorPrefix} ${message}`);
}
// #endregion

// #region --- Navegação entre Questões ---
function handleNextQuestionClick() {
    const currentQ = getCurrentQuestionObject(); // Renomeado para evitar conflito com a variável global currentQuestions
    if (!currentQ || !validateOptionSelection(currentQ.id)) {
         if(!currentQ) console.error("handleNextQuestionClick: currentQ is undefined.");
        return;
    }

    if (isRevisitingMarkedQuestions) {
        handleMarkedQuestionNavigation();
    } else {
        handleRegularQuestionNavigation();
    }
}

function getCurrentQuestionObject() { // Renomeado de getCurrentQuestion para evitar confusão
    return isRevisitingMarkedQuestions 
        ? markedQuestionsToRevisit[currentRevisitIndex] 
        : currentQuestions[currentIndex];
}

function validateOptionSelection(questionId) { // Recebe questionId
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
        // markedQuestionsToRevisit = []; // Não precisa limpar aqui, é resetado antes de popular
        // currentRevisitIndex = 0;
        console.log("Finished revisiting marked questions. Proceeding to full block review.");
        showReviewMode();
    }
}

function handleRegularQuestionNavigation() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        renderQuestion(currentQuestions[currentIndex]);
    } else {
        // Fim do bloco regular, verificar se há questões marcadas para revisitar
        startMarkedQuestionsReview();
    }
}

function startMarkedQuestionsReview() {
    // Popula markedQuestionsToRevisit apenas com questões do bloco ATUAL que estão marcadas
    markedQuestionsToRevisit = currentQuestions.filter(q => q && markedQuestions.has(q.id));
    
    if (markedQuestionsToRevisit.length > 0) {
        isRevisitingMarkedQuestions = true;
        currentRevisitIndex = 0; // Reseta o índice para a revisão das marcadas
        console.log("Block ended. Starting revisit of marked questions:", markedQuestionsToRevisit.map(q => q.id));
        renderQuestion(markedQuestionsToRevisit[currentRevisitIndex]);
    } else {
        console.log("Block ended. No marked questions in this block to revisit. Proceeding to full block review.");
        showReviewMode(); // Vai direto para a revisão do bloco se não houver marcadas
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
        console.error("❌ quiz-container não encontrado para showReviewMode.");
        return;
    }

    container.innerHTML = `<h2 class="text-xl font-bold text-center mb-6">🔁 ${translate("blockReviewTitle")}</h2>`;
    
    currentQuestions.forEach((q, i) => {
        if (q) { // Checagem para garantir que q não é undefined
            container.innerHTML += createReviewItemHTML(q, i);
        } else {
            console.warn (`Skipping undefined question at index ${i} in showReviewMode.`);
        }
    });
    
    container.innerHTML += `
        <div class="text-center mt-8">
            <button id="resume-quiz-btn" 
                    class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                ➕ ${translate("returnToQuizButton")}
            </button>
        </div>`;
    
    const resumeBtn = document.getElementById('resume-quiz-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            // Coletar IDs das questões erradas ANTES de limpar userAnswers ou preparar novo bloco
            const wrongIdsFromThisBlock = currentQuestions
                .filter(cq => cq && userAnswers[cq.id] !== undefined && userAnswers[cq.id] !== cq.correct)
                .map(cq => cq.id);

            wrongIdsFromThisBlock.forEach(id => {
                if (!previousWrongIds.includes(id)) {
                    previousWrongIds.push(id);
                }
            });
            // previousWrongIds = previousWrongIds.slice(-50); // Opcional: Limitar

            resetQuizState(); // Limpa userAnswers, currentIndex, etc. para o próximo bloco
            
            // A lógica de showFinalReport foi removida daqui, assumindo quiz infinito
            // Se precisar de showFinalReport, a condição deve ser verificada aqui.
            prepareNextBlock();
        });
    } else {
        console.error("Botão 'resume-quiz-btn' não encontrado após renderizar showReviewMode.");
    }
}

function createReviewItemHTML(question, index) {
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correct;
    const explanation = getExplanationText(question); // Usa a função helper
    const questionActualText = getQuestionText(question); // Usa a função helper
    
    // Usando a estrutura HTML mais detalhada para opções de revisão, similar ao quiz-basic.js
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
// generateReviewOptionsHTML foi incorporada em createReviewItemHTML para simplificar

function showFinalReport() { // Mantida caso você decida usá-la
    const lang = getCurrentLanguage();
    const container = document.getElementById('quiz-container');
    if (!container) {
        console.error("❌ quiz-container não encontrado para showFinalReport.");
        return;
    }

    container.innerHTML = `<h2 class="text-2xl font-bold text-center mb-6">📊 ${translate("report_title")}</h2>`;

    const totalsByLevel = { easy: 0, moderate: 0, hard: 0, very_hard: 0 };
    const correctByLevel = { easy: 0, moderate: 0, hard: 0, very_hard: 0 };

    // Para o relatório final, precisamos iterar sobre TODAS as questões respondidas,
    // não apenas as do último bloco. O 'userAnswers' global contém todas as respostas da sessão.
    // Para isso, precisamos do questionBank para obter os detalhes de cada questão respondida.
    if (typeof questionBank === 'undefined' || !questionBank.getQuestionById) {
        container.innerHTML += `<p>${translate("error_processing_report")}</p>`; // Adicionar "error_processing_report" às traduções
        return;
    }

    Object.entries(userAnswers).forEach(([questionId, userAnswer]) => {
        const question = questionBank.getQuestionById(parseInt(questionId));
        if (question && question.level) {
            const levelKey = String(question.level).toLowerCase().replace(/\s+/g, '_');
            if (totalsByLevel.hasOwnProperty(levelKey)) {
                totalsByLevel[levelKey]++;
                if (userAnswer === question.correct) {
                    correctByLevel[levelKey]++;
                }
            }
        }
    });
  
    const levelKeysForReport = ['easy', 'moderate', 'hard', 'very_hard'];
    container.innerHTML += `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${levelKeysForReport.map(levelKey => {
                const totalForLevel = totalsByLevel[levelKey] || 0;
                const correctForLevel = correctByLevel[levelKey] || 0;
                const percent = totalForLevel > 0 ? correctForLevel / totalForLevel : 0;
                const levelDisplayName = translate(`difficulty_${levelKey}`);

                return `
                    <div class="border p-4 rounded-lg ${percent >= 0.6 ? 'bg-green-50' : (totalForLevel > 0 ? 'bg-red-50' : 'bg-gray-50')}">
                        <h3 class="text-lg font-semibold">${levelDisplayName}</h3>
                        <p class="text-sm">
                            ${translate("report_correct_label")}: ${correctForLevel} ${translate("report_of_label")} ${totalForLevel}
                        </p>
                    </div>`;
            }).join('')}
        </div>
        <div class="text-center mt-8">
            <button onclick="location.reload()" 
                    class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                🔁 ${translate("report_restart_button")}
            </button>
        </div>`;
}
// #endregion

// #region --- Inicialização do Evento DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("DOM da página focused.html carregado.");
    
    setupTopBarButtons(); // Configura botões e traduz aviso legal
    
    const initQuizWithRetry = () => {
        if (typeof questionBank !== 'undefined' && 
            typeof questionBank.getAllQuestions === 'function' &&
            typeof questionBank.shuffleOptionsAndUpdateCorrect === 'function' && // Checa todas as funções necessárias
            questionBank.getAllQuestions().length > 0) {
            
            console.log("Banco de questões populado e funções prontas. Inicializando o quiz Focado...");
            initializeFocusedQuiz();
        } else {
            console.log("Aguardando questionBank completo. Tentando novamente em 300ms.");
            setTimeout(initQuizWithRetry, 300);
        }
    };
    
    initQuizWithRetry();
});
// #endregion