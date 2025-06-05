// Dashboard-FocusedPro.js
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-FocusedPro: DOM carregado.");

    // #region --- Seletores de Elementos DOM ---
    const logoutButton = document.getElementById('dashboard-logout-button');
    const areaSelector = document.getElementById('area-selector-pro');
    const topicSelector = document.getElementById('topic-selector-pro');
    const startSessionButton = document.getElementById('start-session-button-focusedpro');
    const continueSessionButton = document.getElementById('continue-session-button-focusedpro');
    
    const logoutTextSpan = document.getElementById("dashboard_logout_text");
    const quizControlsTitle = document.querySelector('#quiz-launch-controls-pro h2[data-i18n="quiz_controls_title_focused_pro"]');
    const areaSelectorLabel = document.querySelector('label[for="area-selector-pro"]');
    const areaMultiSelectTip = areaSelector ? areaSelector.nextElementSibling : null;
    const topicSelectorLabel = document.querySelector('label[for="topic-selector-pro"]');
    const topicMultiSelectTip = topicSelector ? topicSelector.nextElementSibling : null;
    const startSessionButtonTextSpan = startSessionButton ? startSessionButton.querySelector('span') : null;
    const continueSessionButtonTextSpan = continueSessionButton ? continueSessionButton.querySelector('span') : null;
    // #endregion

    // #region --- Traduções ---
    function getCurrentLanguage() {
        return localStorage.getItem('selectedLanguage') || 'en';
    }

    function getDashboardFocusedProTranslations() {
        const lang = getCurrentLanguage();
        // Objeto de traduções CORRIGIDO para Dashboard-FocusedPro
        const translations = {
            en: {
                "dashboard_logout_text": "Logout",
                "logout_confirm_message": "Your session data (excluding quiz progress) will be cleared. Are you sure you want to logout and go to the login page?",
                "quiz_controls_title_focused_pro": "Customize Your Focused Pro Session",
                "area_selector_label_pro": "Select Area(s)",
                "multi_select_tip_pro": "(Hold Ctrl/Cmd to select multiple)",
                "topic_selector_label_pro": "Select Topic(s) (max 5)",
                "multi_select_tip_topics_pro": "(Hold Ctrl/Cmd to select multiple. Max 5 topics.)",
                "start_session_button_text_focused_pro": "Start New Focused Pro Session",
                "continue_session_button_text_focused_pro": "Continue Previous Session", // Corrigido de "continue_session_button_text"
                "loading_areas_option": "-- Loading Areas... --",
                "loading_topics_option": "-- Select Area(s) to see Topics --",
                "no_areas_available": "No areas available", // Corrigido de "No specialties available"
                "no_topics_available": "No topics available for selected area(s)",
                "error_loading_data": "Error loading data. Please ensure question bank is loaded.", // Nova chave, mas genérica e útil
                "max_topics_selected_alert": "You can select a maximum of 5 topics.",
                "please_select_areas_alert": "Please select at least one area.", // Corrigido de "Please select a specialty to continue."
                "please_select_topics_alert": "Please select at least one topic.", 
                "confirm_overwrite_focused_pro_progress": "Starting a new session with these selections will overwrite your previously saved Focused Pro quiz progress. Are you sure you want to continue?", // Chave específica
                "cardio": "Cardiology",
                "neuro": "Neurology",
                "pneumo": "Pulmonology",
                "icu": "Intensive Care Unit",
                "pneumo+icu": "Pulmonology-ICU",
                "cardio+icu": "Cardiology-ICU",
                "neuro+icu": "Neurology-ICU",
                "vent": "Mechanical Ventilation",
                "medicine": "Medicine",
                "nephro": "Nephrology",
                "nephro+icu": "Nephrology-ICU",
                "rrt": "Renal Replacement Therapy - RRT - Dialysis"
            },
            pt: {
                "dashboard_logout_text": "Sair",
                "logout_confirm_message": "Os dados da sua sessão (exceto o progresso do quiz) serão limpos. Tem certeza que deseja sair e ir para a página de login?",
                "quiz_controls_title_focused_pro": "Personalize Sua Sessão de Estudo Pro",
                "area_selector_label_pro": "Selecione Área(s)",
                "multi_select_tip_pro": "(Segure Ctrl/Cmd para selecionar múltiplos)",
                "topic_selector_label_pro": "Selecione Tópico(s) (máx 5)",
                "multi_select_tip_topics_pro": "(Segure Ctrl/Cmd para selecionar múltiplos. Máx 5 tópicos.)",
                "start_session_button_text_focused_pro": "Iniciar Nova Sessão Pro",
                "continue_session_button_text_focused_pro": "Continuar Sessão Anterior",
                "loading_areas_option": "-- Carregando Áreas... --",
                "loading_topics_option": "-- Selecione Área(s) para ver os Tópicos --",
                "no_areas_available": "Nenhuma área disponível",
                "no_topics_available": "Nenhum tópico disponível para a(s) área(s) selecionada(s)",
                "error_loading_data": "Erro ao carregar dados. Verifique se o banco de questões foi carregado.",
                "max_topics_selected_alert": "Você pode selecionar no máximo 5 tópicos.",
                "please_select_areas_alert": "Por favor, selecione pelo menos uma área.",
                "please_select_topics_alert": "Por favor, selecione pelo menos um tópico.",
                "confirm_overwrite_focused_pro_progress": "Iniciar uma nova sessão com estas seleções substituirá o seu progresso salvo anteriormente no quiz Focado Pro. Tem certeza que deseja continuar?",
                "cardio": "Cardiologia",
                "neuro": "Neurologia",
                "pneumo": "Pneumologia",
                "icu": "UTI",
                "pneumo+icu": "UTI-Pneumologia",
                "cardio+icu": "UTI-Cardiologia",
                "neuro+icu": "UTI-Neurologia",
                "vent": "Ventilação Mecânica",
                "medicine": "Medicina",
                "nephro": "Nefrologia",
                "nephro+icu": "Nefrologia-UTI",
                "rrt": "Terapia Renal Substitutiva - TRS - Diálise"
            },
            es: {
                "dashboard_logout_text": "Cerrar Sesión",
                "logout_confirm_message": "Los datos de tu sesión (excepto el progreso del cuestionario) se borrarán. ¿Estás seguro de que quieres cerrar sesión e ir a la página de inicio de sesión?",
                "quiz_controls_title_focused_pro": "Personaliza Tu Sesión de Estudio Pro",
                "area_selector_label_pro": "Selecciona Área(s)",
                "multi_select_tip_pro": "(Mantén Ctrl/Cmd para seleccionar múltiples)",
                "topic_selector_label_pro": "Selecciona Tema(s) (máx 5)",
                "multi_select_tip_topics_pro": "(Mantén Ctrl/Cmd para seleccionar múltiples. Máx 5 temas.)",
                "start_session_button_text_focused_pro": "Iniciar Nueva Sesión Pro",
                "continue_session_button_text_focused_pro": "Continuar Sesión Anterior",
                "loading_areas_option": "-- Cargando Áreas... --",
                "loading_topics_option": "-- Selecciona Área(s) para ver los Temas --",
                "no_areas_available": "No hay áreas disponibles",
                "no_topics_available": "No hay temas disponibles para el/las área(s) seleccionada(s)",
                "error_loading_data": "Error al cargar datos. Asegúrate de que el banco de preguntas esté cargado.",
                "max_topics_selected_alert": "Puedes seleccionar un máximo de 5 temas.",
                "please_select_areas_alert": "Por favor, selecciona al menos un área.",
                "please_select_topics_alert": "Por favor, selecciona al menos un tema.",
                "confirm_overwrite_focused_pro_progress": "Iniciar una nueva sesión con estas selecciones sobrescribirá tu progreso guardado anteriormente en el cuestionario Enfocado Pro. ¿Estás seguro de que quieres continuar?",
                "cardio": "Cardiología",
                "neuro": "Neurología",
                "pneumo": "Neumología",
                "icu": "UCI",
                "pneumo+icu": "UCI Neumología",
                "cardio+icu": "UCI Cardiología",
                "neuro+icu": "UCI Neurología",
                "vent": "Ventilación Mecánica",
                "medicine": "Medicina",
                "nephro": "Nefrología",
                "nephro+icu": "Nefrología-ICU",
                "rrt": "Terapia de Reemplazo Renal - TRR - Diálisis"
            }
        };
        return (key) => translations[lang]?.[key] || translations['en']?.[key] || key;
    }
    const translate = getDashboardFocusedProTranslations();

    function applyStaticTranslations() {
        if (logoutTextSpan) logoutTextSpan.textContent = translate("dashboard_logout_text");
        if (quizControlsTitle) quizControlsTitle.textContent = translate("quiz_controls_title_focused_pro");
        if (areaSelectorLabel) areaSelectorLabel.textContent = translate("area_selector_label_pro");
        if (areaMultiSelectTip) areaMultiSelectTip.textContent = translate("multi_select_tip_pro");
        if (topicSelectorLabel) topicSelectorLabel.textContent = translate("topic_selector_label_pro");
        if (topicMultiSelectTip) topicMultiSelectTip.textContent = translate("multi_select_tip_topics_pro");
        if (startSessionButtonTextSpan) startSessionButtonTextSpan.textContent = translate("start_session_button_text_focused_pro");
        if (continueSessionButtonTextSpan) continueSessionButtonTextSpan.textContent = translate("continue_session_button_text_focused_pro");
    }
    applyStaticTranslations();
    // #endregion

    // #region --- Lógica de Logout (Preserva focusedProState) ---
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            if (confirm(translate("logout_confirm_message"))) {
                console.log("Dashboard-FocusedPro Logout: Limpando dados de autenticação. Progresso 'focusedProState' será mantido.");
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                // Não apague 'focusedProState' aqui.
                localStorage.removeItem('quizBasicState');
                localStorage.removeItem('focusedState'); // Clear the non-pro version state too if it exists
                // localStorage.removeItem('quizAdFreeState'); // se existir
                window.location.href = '../login.html';
            } else {
                console.log("Logout cancelado pelo usuário.");
            }
        });
    } else {
        console.error("Dashboard-FocusedPro: Botão 'dashboard-logout-button' não encontrado.");
    }
    // #endregion

    // #region --- Lógica do Botão "Continue Previous Session" ---
    if (continueSessionButton) {
        const focusedProQuizProgress = localStorage.getItem('focusedProState');
        if (focusedProQuizProgress) {
            console.log("Dashboard-FocusedPro: Progresso 'focusedProState' encontrado. Exibindo botão 'Continue Session'.");
            continueSessionButton.style.display = 'block';
            continueSessionButton.addEventListener('click', () => {
                console.log("Dashboard-FocusedPro: Botão 'Continue Session' clicado. Redirecionando para resumir quiz Focado Pro.");
                localStorage.removeItem('cameFromFocusedProQuiz'); // Limpa o flag se existir
                window.location.href = '../Quiz/focused-pro.html'; // Não passar 'new=true' nem params de filtro
            });
        } else {
            continueSessionButton.style.display = 'none';
        }
        if (localStorage.getItem('cameFromFocusedProQuiz')) {
             localStorage.removeItem('cameFromFocusedProQuiz');
        }
    } else {
        console.warn("Dashboard-FocusedPro: Botão 'continue-session-button-focusedpro' não encontrado.");
    }
    // #endregion

    // #region --- Lógica para Popular Seletores (Áreas e Tópicos dependentes) ---
    function populateAreaSelector() {
        if (!areaSelector) {
            console.error("Dashboard-FocusedPro: Elemento 'area-selector-pro' não encontrado.");
            return;
        }
        if (typeof questionBank === 'undefined' || !questionBank.getAllQuestions) {
            areaSelector.innerHTML = `<option value="" disabled>${translate("error_loading_data")}</option>`;
            console.error("Dashboard-FocusedPro: questionBank não disponível para popular áreas.");
            return;
        }

        try {
            const allQuestions = questionBank.getAllQuestions();
            let uniqueAreaCodes = new Set();
            allQuestions.forEach(q => {
                const areas = q.areas || (q.area ? [q.area] : []);
                areas.forEach(area => uniqueAreaCodes.add(String(area).toLowerCase().trim()));
            });

            const sortedAreaCodes = Array.from(uniqueAreaCodes).sort();
            areaSelector.innerHTML = '';

            if (sortedAreaCodes.length === 0) {
                areaSelector.innerHTML = `<option value="" disabled>${translate("no_areas_available")}</option>`;
            } else {
                sortedAreaCodes.forEach(areaCode => {
                    const displayName = translate(areaCode) || areaCode.charAt(0).toUpperCase() + areaCode.slice(1);
                    areaSelector.add(new Option(displayName, areaCode));
                });
            }
            console.log("Dashboard-FocusedPro: Seletor de áreas populado.");
            updateTopicSelector();
        } catch (e) {
            console.error("Dashboard-FocusedPro: Erro ao popular seletor de áreas:", e);
            areaSelector.innerHTML = `<option value="" disabled>${translate("error_loading_data")}</option>`;
        }
    }

    function updateTopicSelector() {
        if (!topicSelector || !areaSelector) {
             console.error("Dashboard-FocusedPro: Seletores de tópico ou área não encontrados para atualização.");
            return;
        }
         if (typeof questionBank === 'undefined' || !questionBank.getAllQuestions) {
            topicSelector.innerHTML = `<option value="" disabled>${translate("error_loading_data")}</option>`;
            console.error("Dashboard-FocusedPro: questionBank não disponível para popular tópicos.");
            return;
        }

        const selectedAreaValues = Array.from(areaSelector.selectedOptions).map(opt => opt.value);
        topicSelector.innerHTML = '';

        if (selectedAreaValues.length === 0) {
            topicSelector.innerHTML = `<option value="" disabled>${translate("loading_topics_option")}</option>`;
            return;
        }

        try {
            const allQuestions = questionBank.getAllQuestions();
            let relevantTopics = new Set();

            allQuestions.forEach(q => {
                const questionAreas = (q.areas || (q.area ? [q.area] : [])).map(a => String(a).toLowerCase().trim());
                const hasSelectedArea = selectedAreaValues.some(sa => questionAreas.includes(sa));

                if (hasSelectedArea) {
                    const topics = q.topics || (q.topic ? [q.topic] : []);
                    topics.forEach(topic => relevantTopics.add(String(topic).trim()));
                }
            });

            const sortedTopics = Array.from(relevantTopics).sort();

            if (sortedTopics.length === 0) {
                topicSelector.innerHTML = `<option value="" disabled>${translate("no_topics_available")}</option>`;
            } else {
                sortedTopics.forEach(topicName => {
                    const displayName = topicName.charAt(0).toUpperCase() + topicName.slice(1);
                    topicSelector.add(new Option(displayName, topicName));
                });
            }
            console.log("Dashboard-FocusedPro: Seletor de tópicos atualizado para áreas:", selectedAreaValues.join(', '));
        } catch (e) {
            console.error("Dashboard-FocusedPro: Erro ao atualizar seletor de tópicos:", e);
            topicSelector.innerHTML = `<option value="" disabled>${translate("error_loading_data")}</option>`;
        }
    }

    if (areaSelector) {
        areaSelector.addEventListener('change', updateTopicSelector);
    }

    if (topicSelector) {
        topicSelector.addEventListener('change', () => {
            const selectedOptions = Array.from(topicSelector.selectedOptions);
            if (selectedOptions.length > 5) {
                alert(translate("max_topics_selected_alert"));
                // Optionally, deselect the last added topic or prevent further selection
            }
        });
    }
    
    function initializeSelectors() {
        if (typeof questionBank !== 'undefined' && questionBank.getAllQuestions && questionBank.getAllQuestions().length > 0) {
            populateAreaSelector();
        } else {
            console.warn("Dashboard-FocusedPro: questionBank não está pronto ou está vazio. Tentando em 1s.");
            setTimeout(initializeSelectors, 1000);
        }
    }
    initializeSelectors();
    // #endregion

    // #region --- Lógica do Botão "Start New Session" ---
    if (startSessionButton) {
        startSessionButton.addEventListener('click', () => {
            const selectedAreaValues = Array.from(areaSelector.selectedOptions).map(opt => opt.value);
            let selectedTopicValues = Array.from(topicSelector.selectedOptions).map(opt => opt.value);

            if (selectedAreaValues.length === 0) {
                alert(translate("please_select_areas_alert"));
                return;
            }
            
            if (selectedTopicValues.length > 5) {
                alert(translate("max_topics_selected_alert"));
                selectedTopicValues = selectedTopicValues.slice(0, 5);
                Array.from(topicSelector.options).forEach(opt => {
                    opt.selected = selectedTopicValues.includes(opt.value);
                });
            }
            
            // Opcional: se tópicos são obrigatórios e nenhum foi selecionado
            // if (topicSelector.options.length > 0 && selectedTopicValues.length === 0) {
            //    alert(translate("please_select_topics_alert"));
            //    return;
            // }

            const existingFocusedProProgress = localStorage.getItem('focusedProState');
            let proceedToStartNew = true;

            if (existingFocusedProProgress) {
                if (!confirm(translate("confirm_overwrite_focused_pro_progress"))) {
                    proceedToStartNew = false;
                    console.log("Dashboard-FocusedPro: Usuário cancelou o início para não sobrescrever progresso.");
                }
            }

            if (proceedToStartNew) {
                const areasParam = selectedAreaValues.join(',');
                const topicsParam = selectedTopicValues.join(',');
                
                let quizUrl = `../Quiz/focused-pro.html?new=true&areas=${encodeURIComponent(areasParam)}&topics=${encodeURIComponent(topicsParam)}`;
                
                console.log("Dashboard-FocusedPro: Redirecionando para Quiz Focado Pro:", quizUrl);
                window.location.href = quizUrl;
            }
        });
    } else {
        console.error("Dashboard-FocusedPro: Botão 'start-session-button-focusedpro' não encontrado.");
    }
    // #endregion
});