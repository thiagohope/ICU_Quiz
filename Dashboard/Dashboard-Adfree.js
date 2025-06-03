document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-d: DOM carregado e página rolada para o topo.");

    // --- Elementos do DOM ---
    const startButton = document.getElementById('start-session-button');
    const areaSelector = document.getElementById('basic-area-selector'); // ID do seu <select> no HTML
    const logoutButton = document.getElementById('dashboard-logout-button');
    const logoutTextSpan = document.getElementById("dashboard_logout_text"); // Span para o texto do botão logout

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
            "cardio": "Cardiology",
            "neuro": "Neurology",
            "pneumo": "Pulmonology",
            "pneumo+icu": "Pulmonology-ICU",
            "icu": "Intensive Care Unit",
            "cardio+icu": "Cardiology-ICU",
            "neuro+icu": "Neurology-ICU",
            "vent": "Mechanical Ventilation",
        },
        pt: {
            "dashboard_logout_text": "Sair",
            "logout_confirm_message": "Tem certeza que deseja sair e ir para a página de login?",
            "select_an_area_prompt": "-- Selecione uma Especialidade --",
            "no_areas_available": "Nenhuma especialidade disponível",
            "error_loading_areas": "Erro ao carregar especialidades",
            "areas_unavailable": "Especialidades indisponíveis",
            "please_select_area_alert": "Por favor, selecione uma especialidade para continuar.",
            "cardio": "Cardiologia",
            "neuro": "Neurologia",
            "pneumo": "Pneumologia",
            "pneumo+icu": "UTI-Pneumologia",
            "icu": "UTI",
            "cardio+icu": "UTI-Cardiologia",
            "neuro+icu": "UTI-Neurologia",
            "vent": "Ventilação Mecânica",
        },
        es: {
            "dashboard_logout_text": "Cerrar Sesión",
            "logout_confirm_message": "¿Estás seguro de que quieres cerrar sesión e ir a la página de inicio de sesión?",
            "select_an_area_prompt": "-- Seleccione una Especialidad --",
            "no_areas_available": "No hay especialidades disponibles",
            "error_loading_areas": "Error al cargar especialidades",
            "areas_unavailable": "Especialidades no disponibles",
            "please_select_area_alert": "Por favor, seleccione una especialidad para continuar.",
            "cardio": "Cardiología",
            "neuro": "Neurología",
            "pneumo": "Neumología",
            "pneumo+icu": "UCI Neumología",
            "icu": "UCI",
            "cardio+icu": "UCI Cardiología",
            "neuro+icu": "UCI Neurología",
            "vent": "Ventilación Mecánica",
        }
    };
    const s_t = staticDashboardTexts[currentLang] || staticDashboardTexts['en'];

    // Aplicar tradução ao texto do botão de logout
    if (logoutTextSpan && s_t["dashboard_logout_text"]) {
        logoutTextSpan.textContent = s_t["dashboard_logout_text"];
    }

    // --- LÓGICA PARA POPULAR O SELETOR DE ÁREA ---
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

    // Chama populateAreaSelector após um timeout para dar tempo ao questionBank
    setTimeout(() => {
        populateAreaSelector();
    }, 1000);


    // --- LÓGICA DO BOTÃO START SESSION ---
    if (startButton && areaSelector) { // Verifica se ambos existem
        startButton.addEventListener('click', () => {
            const selectedArea = areaSelector.value;

            if (!selectedArea) { // Se o valor for "" (da opção placeholder)
                alert(s_t["please_select_area_alert"]);
                return; // Não continua se nenhuma área válida for selecionada
            }

            let quizUrl = `../Quiz/quiz-ad-free.html?areas=${encodeURIComponent(selectedArea)}`; // Passa a área selecionada

            console.log("Dashboard-AdFree: Redirecionando para Quiz Ad Free com URL:", quizUrl);
            window.location.href = quizUrl;
        });
    } else {
        let errorMsg = "Dashboard-AdFree: Erro! Elementos essenciais não encontrados: ";
        if (!startButton) errorMsg += "'start-session-button' ";
        if (!areaSelector) errorMsg += "'basic-area-selector' "; // Informa se o seletor de área não foi encontrado
        console.error(errorMsg.trim());
    }

    // --- LÓGICA DE LOGOUT ---
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
});