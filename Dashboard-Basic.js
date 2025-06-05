// Dashboard-Basic.js (Versão Focada e Limpa)
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-Basic: DOM carregado e página rolada para o topo.");

    //#region --- Elementos do DOM ---
    const startButton = document.getElementById('start-session-button-basic');
    const areaSelector = document.getElementById('basic-area-selector'); // ID do seu <select> no HTML
    const logoutButton = document.getElementById('dashboard-logout-button');
    const logoutTextSpan = document.getElementById("dashboard_logout_text"); // Span para o texto do botão logout
    const continueSessionButton = document.getElementById('continue-session-button-basic');
    //#endregion
    // #region --- TRADUÇÕES E TEXTOS ESTÁTICOS (mínimo necessário para este dashboard) ---
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const staticDashboardTexts = {
        en: {
            "dashboard_logout_text": "Logout",
            "logout_confirm_message": "Are you sure you want to logout and go to the login page?",
            "select_an_area_prompt": "-- Select a Specialty --",
            "no_areas_available": "No specialties available",
            "error_loading_areas": "Error loading specialties",
            "areas_unavailable": "Specialties unavailable",
            "please_select_area_alert": "Please select a specialty to continue.",
            "continue_session_button_text": "Continue Previous Session",
            "configure_your_quiz_title": "Configure Your Quiz",
            "choose_specialty_label": "Choose Specialty:",
            "loading_areas_option": "-- Loading Areas... --",
            "select_area_prompt_dashboard": "Select the area you wish to study.",
            "start_session_button_text": "Start Session",
            "confirm_overwrite_progress": "Starting a new session will erase any unsaved Basic quiz progress. Are you sure you want to continue?",
            "cardio": "Cardiology",
            "neuro": "Neurology",
            "pneumo": "Pulmonology",
            "pneumo+icu": "Pulmonology-ICU",
            "icu": "Intensive Care Unit",
            "cardio+icu": "Cardiology-ICU",
            "neuro+icu": "Neurology-ICU",
            "vent": "Mechanical Ventilation",
            "nephro": "Nephrology",
            "nephro+icu": "Nephrology-ICU",
            "rrt": "Renal Replacement Therapy - RRT - Dialysis",
        },
        pt: {
            "dashboard_logout_text": "Sair",
            "logout_confirm_message": "Tem certeza que deseja sair e ir para a página de login?",
            "select_an_area_prompt": "-- Selecione uma Especialidade --",
            "no_areas_available": "Nenhuma especialidade disponível",
            "error_loading_areas": "Erro ao carregar especialidades",
            "areas_unavailable": "Especialidades indisponíveis",
            "please_select_area_alert": "Por favor, selecione uma especialidade para continuar.",
            "continue_session_button_text": "Continuar Sessão Anterior",
            "configure_your_quiz_title": "Configure Seu Quiz",
            "choose_specialty_label": "Escolha a Especialidade:",
            "loading_areas_option": "-- Carregando Áreas... --",
            "select_area_prompt_dashboard": "Selecione a área que deseja estudar.",
            "start_session_button_text": "Iniciar Sessão",
            "confirm_overwrite_progress": "Iniciar uma nova sessão apagará qualquer progresso não salvo do quiz Basic. Tem certeza que deseja continuar?",
            "cardio": "Cardiologia",
            "neuro": "Neurologia",
            "pneumo": "Pneumologia",
            "pneumo+icu": "UTI-Pneumologia",
            "icu": "UTI",
            "cardio+icu": "UTI-Cardiologia",
            "neuro+icu": "UTI-Neurologia",
            "vent": "Ventilação Mecânica",
            "nephro": "Nefrologia",
            "nephro+icu": "Nefrologia-UTI",
            "rrt": "Terapia Renal Substitutiva - TRS - Diálise",
        },
        es: {
            "dashboard_logout_text": "Cerrar Sesión",
            "logout_confirm_message": "¿Estás seguro de que quieres cerrar sesión e ir a la página de inicio de sesión?",
            "select_an_area_prompt": "-- Seleccione una Especialidad --",
            "no_areas_available": "No hay especialidades disponibles",
            "error_loading_areas": "Error al cargar especialidades",
            "areas_unavailable": "Especialidades no disponibles",
            "please_select_area_alert": "Por favor, seleccione una especialidad para continuar.",
            "continue_session_button_text": "Continuar Sesión Anterior",
            "configure_your_quiz_title": "Configura Tu Cuestionario",
            "choose_specialty_label": "Elige Especialidad:",
            "loading_areas_option": "-- Cargando Áreas... --",
            "select_area_prompt_dashboard": "Selecciona el área que deseas estudiar.",
            "start_session_button_text": "Iniciar Sesión",
            "confirm_overwrite_progress": "Iniciar una nueva sesión borrará cualquier progreso no guardado del cuestionario Basic. ¿Estás seguro de que quieres continuar?",
            "cardio": "Cardiología",
            "neuro": "Neurología",
            "pneumo": "Neumología",
            "pneumo+icu": "UCI Neumología",
            "icu": "UCI",
            "cardio+icu": "UCI Cardiología",
            "neuro+icu": "UCI Neurología",
            "vent": "Ventilación Mecánica",
            "nephro": "Nefrología",
            "nephro+icu": "Nefrología-ICU",
            "rrt": "Terapia de Reemplazo Renal - TRR - Diálisis",
        }
    };
    const s_t = staticDashboardTexts[currentLang] || staticDashboardTexts['en'];

    // Aplicar tradução ao texto do botão de logout (já existente no seu código)
    if (logoutTextSpan && s_t["dashboard_logout_text"]) {
        logoutTextSpan.textContent = s_t["dashboard_logout_text"];
    }
    // --- Traduções a outros elementos estáticos da seção de configuração (OPCIONAL) ---
    const configureQuizTitle = document.querySelector('#quiz-launch-controls-basic h2'); // Seleciona o h2 dentro da seção
    if (configureQuizTitle && s_t["configure_your_quiz_title"]) {
        configureQuizTitle.textContent = s_t["configure_your_quiz_title"];
    }
    const chooseSpecialtyLabel = document.querySelector('label[for="basic-area-selector"]');
    if (chooseSpecialtyLabel && s_t["choose_specialty_label"]) {
        chooseSpecialtyLabel.textContent = s_t["choose_specialty_label"];
    }
    // Para o parágrafo abaixo do select:
    const selectAreaPromptDashboard = document.querySelector('#quiz-launch-controls-basic .space-y-6 > div:nth-of-type(1) p.text-xs');
    if (selectAreaPromptDashboard && s_t["select_area_prompt_dashboard"]) {
        selectAreaPromptDashboard.textContent = s_t["select_area_prompt_dashboard"];
    }
    // Para o texto do botão "Start Session"
    const startButtonTextSpan = startButton ? startButton.querySelector('span') : null;
    if (startButtonTextSpan && s_t["start_session_button_text"]) {
        startButtonTextSpan.textContent = s_t["start_session_button_text"];
    }
    // --- Fim das traduções opcionais ---
    // #endregion
    // #region ---INÍCIO DA LÓGICA PARA O BOTÃO CONTINUE SESSION
    if (continueSessionButton) {
        const cameFromBasicQuiz = localStorage.getItem('cameFromBasicQuiz'); // Chave específica para o quiz Basic
        if (cameFromBasicQuiz === 'true') {
            console.log("Dashboard-Basic: Sinalizador 'cameFromBasicQuiz' encontrado. Exibindo botão 'Continue Session'.");
            continueSessionButton.style.display = 'block'; // Torna o botão visível

            const continueButtonTextSpan = continueSessionButton.querySelector('span');
            if (continueButtonTextSpan && s_t["continue_session_button_text"]) {
                continueButtonTextSpan.textContent = s_t["continue_session_button_text"];
            }

            continueSessionButton.addEventListener('click', () => {
                console.log("Dashboard-Basic: Botão 'Continue Session' clicado. Redirecionando para o quiz Basic.");
                window.location.href = '../Quiz/quiz-basic.html'; // Redireciona para o quiz Basic
            });

            localStorage.removeItem('cameFromBasicQuiz'); // Remove o sinalizador
        }
        else {
            console.log("Dashboard-Basic: Sinalizador 'cameFromBasicQuiz' não encontrado. Botão 'Continue Session' permanece oculto.");
            continueSessionButton.style.display = 'none';
        }
    }
    else {
    console.warn("Dashboard-Basic: Botão 'continue-session-button-basic' não encontrado no DOM.");
    }
    // #endregion FIM DA LÓGICA PARA O BOTÃO "CONTINUE SESSION" (BASIC) ---
    // #region --- LÓGICA PARA POPULAR O SELETOR DE ÁREA ---
    function populateAreaSelector() {
        if (!areaSelector) { //
            console.error("Dashboard-Basic: Elemento 'basic-area-selector' não encontrado no HTML."); //
            if (startButton) startButton.disabled = true; //
            return; //
        }

        if (typeof questionBank !== 'undefined' && questionBank.getAllQuestions) { //
            try {
                const allQuestions = questionBank.getAllQuestions(); //
                // Extrai os códigos de área, converte para minúsculas, remove duplicados e ordena
                let allAreaEntries = allQuestions.flatMap(q => {
                    const areasFromQ = q.areas || q.area || []; // Pega q.areas, ou q.area, ou um array vazio
                    return Array.isArray(areasFromQ) ? areasFromQ : [areasFromQ]; // Garante que é sempre um array para flatMap
                });
                let areaCodes = [...new Set(allAreaEntries.map(a => String(a).toLowerCase().trim()).filter(a => a))].sort();
                console.log("Códigos de área extraídos:", areaCodes); // Adicione este log para depuração

                areaSelector.innerHTML = ''; // Limpa opções

                if (areaCodes.length === 0) { //
                    areaSelector.options.add(new Option(s_t["no_areas_available"], "")); //
                    if (startButton) startButton.disabled = true; //
                } else {
                    areaSelector.options.add(new Option(s_t["select_an_area_prompt"], "")); // Opção placeholder
                    areaCodes.forEach(areaCode => { //
                        const displayName = s_t[areaCode.toLowerCase()] || (areaCode.charAt(0).toUpperCase() + areaCode.slice(1)); //
                        
                        areaSelector.options.add(new Option(displayName, areaCode)); // Texto é o displayName, valor é o areaCode
                    });
                    if (startButton) startButton.disabled = false; // Habilita se houver áreas
                }
                console.log("Dashboard-Basic: Seletor de áreas populado."); //
            } catch (e) {
                console.error("Dashboard-Basic: Erro ao popular o seletor de áreas:", e); //
                if (areaSelector) areaSelector.options.add(new Option(s_t["error_loading_areas"], "")); //
                if (startButton) startButton.disabled = true; //
            }
        } else {
            console.warn("Dashboard-Basic: questionBank não está pronto ou não definido."); //
            if (areaSelector) areaSelector.options.add(new Option(s_t["areas_unavailable"], "")); //
            if (startButton) startButton.disabled = true; //
        }
    }

    // Chama populateAreaSelector após um timeout para dar tempo ao questionBank
    setTimeout(() => {
        populateAreaSelector();
    }, 1000);
    // #endregion
    // #region--- LÓGICA DO BOTÃO START SESSION ---
    if (startButton && areaSelector) {
    startButton.addEventListener('click', () => {
        const selectedArea = areaSelector.value;

        if (!selectedArea) {
            alert(s_t["please_select_area_alert"]);
            return;
        }

        // --- INÍCIO DA MODIFICAÇÃO: VERIFICAR PROGRESSO EXISTENTE (BASIC) ---
        const existingBasicProgress = localStorage.getItem('quizBasicState'); // Chave específica do Basic Quiz
        let proceedToStartNew = true; 

        if (existingBasicProgress) { 
            const confirmOverwriteMessage = s_t["confirm_overwrite_basic_progress"]; // Usar a nova chave de tradução
            if (!confirm(confirmOverwriteMessage)) { 
                proceedToStartNew = false; 
                console.log("Dashboard-Basic: User cancelled starting a new session to avoid overwriting Basic quiz progress.");
            }
        }

        if (proceedToStartNew) { 
        // --- FIM DA MODIFICAÇÃO ---
            let quizUrl = `../Quiz/quiz-basic.html?new=true&areas=${encodeURIComponent(selectedArea)}`;
            console.log("Dashboard-Basic: Redirecionando para Quiz Basic com URL:", quizUrl);
            window.location.href = quizUrl;
        }
    });
} else {
    let errorMsg = "Dashboard-Basic: Erro! Elementos essenciais não encontrados: ";
    // Certifique-se que a constante startButton foi definida corretamente no topo do arquivo com:
    // const startButton = document.getElementById('start-session-button-basic');
    if (!startButton) errorMsg += "'start-session-button-basic' "; 
    if (!areaSelector) errorMsg += "'basic-area-selector' "; 
    console.error(errorMsg.trim());
}
    //#endregion
    // #region --- LÓGICA DE LOGOUT ---
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const confirmMessage = s_t.logout_confirm_message;

            if (confirm(confirmMessage)) {
                console.log("Logout: Limpando dados do usuário e redirecionando...");
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                localStorage.removeItem('proSimulationState');
                localStorage.removeItem('focusedProState');
                localStorage.removeItem('focusedState');
                localStorage.removeItem('quizBasicState');
                localStorage.removeItem('quizAdFreeState');
                window.location.href = '../login.html'; // Ajuste este caminho se necessário
            } else {
                console.log("Logout cancelado pelo usuário.");
            }
        });
    } else {
        console.error("Dashboard-Basic: Botão 'dashboard-logout-button' não encontrado.");
    }
    // #endregion
});