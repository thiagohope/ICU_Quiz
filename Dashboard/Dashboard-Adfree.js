document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-d: DOM carregado e página rolada para o topo.");

    // --- Elementos do DOM ---
    const startButton = document.getElementById('start-session-button-adfree');
    const areaSelector = document.getElementById('basic-area-selector'); // ID do seu <select> no HTML
    const logoutButton = document.getElementById('dashboard-logout-button');
    const logoutTextSpan = document.getElementById("dashboard_logout_text"); // Span para o texto do botão logout
   
    // BOTÃO "CONTINUE SESSION" ---
        const continueSessionButton = document.getElementById('continue-session-button-adfree');

    // --- TRADUÇÕES E TEXTOS ESTÁTICOS (mínimo necessário para este dashboard) ---
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
            "confirm_overwrite_progress": "Starting a new session will erase any unsaved Ad-Free quiz progress. Are you sure you want to continue?",
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
            "confirm_overwrite_progress": "Iniciar uma nova sessão apagará qualquer progresso não salvo do quiz Ad-Free. Tem certeza que deseja continuar?",
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
            "confirm_overwrite_progress": "Iniciar una nueva sesión borrará cualquier progreso no guardado del cuestionario Ad-Free. ¿Estás seguro de que quieres continuar?",
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

    if (logoutTextSpan && s_t["dashboard_logout_text"]) {     // Aplicar tradução ao texto do botão de logout
        logoutTextSpan.textContent = s_t["dashboard_logout_text"];
    }

    // --- INÍCIO DA LÓGICA PARA O BOTÃO CONTINUE SESSION
    if (continueSessionButton) { // Verifica se o botão existe no DOM
        const cameFromQuiz = localStorage.getItem('cameFromAdFreeQuiz');

        if (cameFromQuiz === 'true') {
            console.log("Dashboard-AdFree: Sinalizador 'cameFromAdFreeQuiz' encontrado. Exibindo botão 'Continue Session'.");
            continueSessionButton.style.display = 'block'; // Torna o botão visível

            // Aplica a tradução ao texto do botão "Continue Session"
            const continueButtonTextSpan = continueSessionButton.querySelector('span'); // Se o texto estiver dentro de um span com data-i18n
            if (continueButtonTextSpan && s_t["continue_session_button_text"]) {
                continueButtonTextSpan.textContent = s_t["continue_session_button_text"];
            } else if (s_t["continue_session_button_text"]) { 
                // Se o texto não estiver em um span, mas diretamente no botão e você quiser traduzir
                // (lembre-se que o HTML que sugeri já tem um span com data-i18n)
                // continueSessionButton.childNodes[0].nodeValue = s_t["continue_session_button_text"] + " "; // Pega o texto antes do ícone
            }


            continueSessionButton.addEventListener('click', () => {
                console.log("Dashboard-AdFree: Botão 'Continue Session' clicado. Redirecionando para o quiz.");
                // Não é necessário passar parâmetros de área, pois o quiz deve carregar seu estado salvo
                window.location.href = '../Quiz/quiz-ad-free.html';
            });

            // Remove o sinalizador para que o botão não apareça na próxima vez que o dashboard for carregado diretamente
            localStorage.removeItem('cameFromAdFreeQuiz');
        } else {
            console.log("Dashboard-AdFree: Sinalizador 'cameFromAdFreeQuiz' não encontrado. Botão 'Continue Session' permanece oculto.");
            continueSessionButton.style.display = 'none'; // Garante que está oculto se não veio do quiz
        }
    } else {
        console.warn("Dashboard-AdFree: Botão 'continue-session-button-adfree' não encontrado no DOM.");
    }
    // FIM DA LÓGICA PARA O BOTÃO CONTINUE SESSION ---

    // --- INÍCIO DA LÓGICA PARA POPULAR O SELETOR DE ÁREA
    function populateAreaSelector() {
        if (!areaSelector) { //
            console.error("Dashboard-AdFree: Elemento 'basic-area-selector' não encontrado no HTML."); //
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
                        // ***** LINHA MODIFICADA ABAIXO *****
                        // Obtém o nome de exibição traduzido de s_t; 
                        // se não encontrar (ex: nova área ainda não traduzida), usa o código capitalizado como fallback.
                        const displayName = s_t[areaCode.toLowerCase()] || (areaCode.charAt(0).toUpperCase() + areaCode.slice(1)); //
                        
                        areaSelector.options.add(new Option(displayName, areaCode)); // Texto é o displayName, valor é o areaCode
                    });
                    if (startButton) startButton.disabled = false; // Habilita se houver áreas
                }
                console.log("Dashboard-AdFree: Seletor de áreas populado."); //
            } catch (e) {
                console.error("Dashboard-AdFree: Erro ao popular o seletor de áreas:", e); //
                if (areaSelector) areaSelector.options.add(new Option(s_t["error_loading_areas"], "")); //
                if (startButton) startButton.disabled = true; //
            }
        } else {
            console.warn("Dashboard-AdFree: questionBank não está pronto ou não definido."); //
            if (areaSelector) areaSelector.options.add(new Option(s_t["areas_unavailable"], "")); //
            if (startButton) startButton.disabled = true; //
        }
    }
    setTimeout(() => {     // Chama populateAreaSelector após um timeout para dar tempo ao questionBank
        populateAreaSelector();
    }, 1000);
    // FIM DA LÓGICA PARA POPULAR O SELETOR DE ÁREA ---

    // --- INÍCIO DA LÓGICA DO BOTÃO START SESSION
    if (startButton && areaSelector) {
        startButton.addEventListener('click', () => {
            const selectedArea = areaSelector.value;
            if (!selectedArea) {
                alert(s_t["please_select_area_alert"]);
                return;
            }
            const existingProgress = localStorage.getItem('quizAdFreeState');
            let proceedToStartNew = true; // Assume que pode prosseguir
            if (existingProgress) { // Se existe progresso salvo
                const confirmOverwriteMessage = s_t["confirm_overwrite_progress"];
                if (!confirm(confirmOverwriteMessage)) { // Pergunta ao usuário se quer sobrescrever
                    proceedToStartNew = false; // Usuário cancelou
                    console.log("Dashboard-AdFree: User cancelled starting a new session to avoid overwriting progress.");
                }
            }
            if (proceedToStartNew) { // Se o usuário confirmou ou não havia progresso

                let quizUrl = `../Quiz/quiz-ad-free.html?new=true&areas=${encodeURIComponent(selectedArea)}`;
                console.log("Dashboard-AdFree: Redirecionando para Quiz Ad Free com URL:", quizUrl);
                window.location.href = quizUrl;
            }
        });
    } 
    else {
        let errorMsg = "Dashboard-AdFree: Erro! Elementos essenciais não encontrados: ";
        // Verifique se o ID do startButton em getElementById está correto ('start-session-button-adfree')
        if (!startButton) errorMsg += "'start-session-button-adfree' "; 
        if (!areaSelector) errorMsg += "'basic-area-selector' ";
        console.error(errorMsg.trim());
    }
    // FIM DA LÓGICA DO BOTÃO START SESSION ---

    // --- INÍCIO DA LÓGICA DE LOGOUT
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
        console.error("Dashboard-AdFree: Botão 'dashboard-logout-button' não encontrado.");
    }
    // FIM DA LÓGICA DE LOGOUT ---
});