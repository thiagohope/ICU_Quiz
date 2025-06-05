// Dashboard-Advanced.js
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-Advanced: DOM carregado e página rolada para o topo.");

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
            "confirm_overwrite_progress": "Starting a new session will erase any unsaved Advanced quiz progress. Are you sure you want to continue?",
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
            "confirm_overwrite_progress": "Iniciar uma nova sessão apagará qualquer progresso não salvo do quiz Advanced. Tem certeza que deseja continuar?",
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
            "confirm_overwrite_progress": "Iniciar una nueva sesión borrará cualquier progreso no guardado del cuestionario Advanced. ¿Estás seguro de que quieres continuar?",
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

    // Aplicar traduções estáticas (ex: texto do botão de logout)
    const logoutTextSpan = document.getElementById("dashboard_logout_text");
    if (logoutTextSpan) logoutTextSpan.textContent = s_t["dashboard_logout_text"];

    // ... (código para aplicar outras traduções estáticas, se houver) ...

    // --- LÓGICA DOS BOTÕES DE NAVEGAÇÃO ---
    const focusedProButton = document.getElementById('start-focused-pro-mode-button');
    const simulationButton = document.getElementById('start-simulation-mode-button');

    if (focusedProButton) {
        focusedProButton.addEventListener('click', () => {
            console.log("Redirecionando para Dashboard-FocusedPro.html");
            window.location.href = 'Dashboard-Focused-Pro.html'; // Ajuste o caminho se necessário
        });
    } else {
        console.error("Dashboard-Advanced: Botão 'start-focused-pro-mode-button' não encontrado.");
    }

    if (simulationButton) {
        simulationButton.addEventListener('click', () => {
            console.log("Redirecionando para Dashboard-Pro.html");
            window.location.href = 'Dashboard-Pro.html'; // Ajuste o caminho se necessário
        });
    } else {
        console.error("Dashboard-Advanced: Botão 'start-simulation-mode-button' não encontrado.");
    }

    // --- LÓGICA DE LOGOUT ---
    const logoutButton = document.getElementById('dashboard-logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const confirmMessage = s_t.logout_confirm_message; // Usa s_t definido no topo do script

            if (confirm(confirmMessage)) {
                console.log("Logout: Limpando dados do usuário e redirecionando..."); // VERIFIQUE ESTE LOG
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                localStorage.removeItem('focusedProState');
                localStorage.removeItem('quizBasicState');
                localStorage.removeItem('quizAdFreeState');
                localStorage.removeItem('proSimulationState');
                // Adicione quaisquer outras chaves de localStorage que precisem ser limpas no logout
                window.location.href = '../login.html'; // Ajuste o caminho para sua página de login
            } else {
                console.log("Logout cancelado pelo usuário.");
            }
        });
    } else {
        console.error("Dashboard-Advanced: Botão 'dashboard-logout-button' não encontrado.");
    }
}); // Fim do DOMContentLoaded