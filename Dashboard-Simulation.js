// Dashboard-Simulation.js
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-Simulation.js: DOM carregado.");

    const startButton = document.getElementById('start-simulation-button'); 
    const durationInput = document.getElementById('sim-duration-selector'); 
    const numQuestionsInput = document.getElementById('sim-num-questions-selector');
    const areaSelector = document.getElementById('sim-area-selector');
    const logoutButton = document.getElementById('dashboard-logout-button');

    const lastResultsSection = document.getElementById('last-mock-exam-results-section');
    const lastResultsDetailsDiv = document.getElementById('last-mock-exam-details');
    const reviewLastMockExamBtn = document.getElementById('review-last-mock-exam-btn');
    const advancedNavSection = document.getElementById('advanced-user-nav-section');
    const goToFocusedProBtn = document.getElementById('go-to-focused-pro-dashboard-btn');

    function getCurrentLanguage() {
        return localStorage.getItem('selectedLanguage') || 'en';
    }

    function getDashboardSimTranslations() {
        const lang = getCurrentLanguage();
        const translations = {
            en: {
                "dashboard_sim_main_title": "Mock Exam Dashboard",
                "dashboard_logout_text": "Logout",
                "logout_confirm_message_dashboard": "Are you sure you want to logout?",
                "configure_new_mock_exam_title": "Configure New Mock Exam",
                "sim_duration_label": "Duration (minutes):",
                "sim_duration_tip": "(e.g., 60 for 1h, 120 for 2h)",
                "sim_num_questions_label": "Number of Questions:",
                "sim_num_questions_tip": "(Typically 50-100)",
                "sim_area_selector_label": "Select Area(s) for Mock Exam:",
                "sim_multi_select_tip": "(Hold Ctrl/Cmd to select multiple, or select 'All Areas')",
                "start_simulation_button_text": "Start Mock Exam 🚀",
                "all_areas_option_text": "All Areas (Comprehensive)",
                "error_loading_areas": "Error loading areas",
                "areas_unavailable": "Areas unavailable",
                "last_mock_exam_results_title": "Last Mock Exam Result",
                "no_last_result": "No recent mock exam result found in this session.",
                "performance_total_qs": "Total Questions:",
                "performance_answered": "Answered:",
                "performance_correct": "Correct:",
                "performance_accuracy": "Accuracy:",
                "performance_duration_set": "Duration Set:",
                "performance_time_taken": "Time Taken:",
                "performance_areas_tested": "Areas Tested:",
                "performance_timestamp": "Completed:",
                "review_last_mock_exam_button": "Review Questions",
                "go_to_focused_pro_dashboard_text": "Access Focused Pro Study 🎯",
                "mock_exam_history_title": "Mock Exam History",
                "historical_results_placeholder_text": "[Your historical performance in Mock Exams will appear here - future feature]",
                 // Adicionando traduções para as áreas que podem vir do questionBank
                "cardio": "Cardiology", "neuro": "Neurology", "pneumo": "Pulmonology", "icu": "Intensive Care Unit",
                "pneumo+icu": "Pulmonology-ICU", "cardio+icu": "Cardiology-ICU", "neuro+icu": "Neurology-ICU",
                "vent": "Mechanical Ventilation", "medicine": "Medicine", "nephro": "Nephrology",
                "nephro+icu": "Nephrology-ICU", "rrt": "Renal Replacement Therapy - RRT - Dialysis", "dialysis": "Dialysis" // Adicionei dialysis se for uma área
            },
            pt: {
                "dashboard_sim_main_title": "Dashboard do Simulado",
                "dashboard_logout_text": "Sair",
                "logout_confirm_message_dashboard": "Tem certeza que deseja sair?",
                "configure_new_mock_exam_title": "Configurar Novo Simulado",
                "sim_duration_label": "Duração (minutos):",
                "sim_duration_tip": "(Ex: 60 para 1h, 120 para 2h)",
                "sim_num_questions_label": "Número de Questões:",
                "sim_num_questions_tip": "(Tipicamente 50-100)",
                "sim_area_selector_label": "Selecione Área(s) para o Simulado:",
                "sim_multi_select_tip": "(Segure Ctrl/Cmd para selecionar múltiplas, ou selecione 'Todas as Áreas')",
                "start_simulation_button_text": "Iniciar Simulado 🚀",
                "all_areas_option_text": "Todas as Áreas (Completo)",
                "error_loading_areas": "Erro ao carregar áreas",
                "areas_unavailable": "Áreas indisponíveis",
                "last_mock_exam_results_title": "Resultado do Último Simulado",
                "no_last_result": "Nenhum resultado de simulado recente encontrado nesta sessão.",
                "performance_total_qs": "Total de Questões:",
                "performance_answered": "Respondidas:",
                "performance_correct": "Corretas:",
                "performance_accuracy": "Precisão:",
                "performance_duration_set": "Duração Definida:",
                "performance_time_taken": "Tempo Utilizado:",
                "performance_areas_tested": "Áreas Testadas:",
                "performance_timestamp": "Concluído em:",
                "review_last_mock_exam_button": "Revisar Questões",
                "go_to_focused_pro_dashboard_text": "Acessar Estudo Focado Pro 🎯",
                "mock_exam_history_title": "Histórico de Simulados",
                "historical_results_placeholder_text": "[Seu histórico de performance em Simulados aparecerá aqui - funcionalidade futura]",
                "cardio": "Cardiologia", "neuro": "Neurologia", "pneumo": "Pneumologia", "icu": "UTI",
                "pneumo+icu": "UTI-Pneumologia", "cardio+icu": "UTI-Cardiologia", "neuro+icu": "UTI-Neurologia",
                "vent": "Ventilação Mecânica", "medicine": "Medicina", "nephro": "Nefrologia",
                "nephro+icu": "Nefrologia-UTI", "rrt": "Terapia Renal Substitutiva - TRS - Diálise", "dialysis": "Diálise"
            },
            es: {
                "dashboard_sim_main_title": "Panel de Simulacro",
                "dashboard_logout_text": "Cerrar Sesión",
                "logout_confirm_message_dashboard": "¿Estás seguro de que quieres cerrar sesión?",
                "configure_new_mock_exam_title": "Configurar Nuevo Simulacro",
                "sim_duration_label": "Duración (minutos):",
                "sim_duration_tip": "(Ej: 60 para 1h, 120 para 2h)",
                "sim_num_questions_label": "Número de Preguntas:",
                "sim_num_questions_tip": "(Típicamente 50-100)",
                "sim_area_selector_label": "Selecciona Área(s) para el Simulacro:",
                "sim_multi_select_tip": "(Mantén Ctrl/Cmd para seleccionar múltiples, o selecciona 'Todas las Áreas')",
                "start_simulation_button_text": "Iniciar Simulacro 🚀",
                "all_areas_option_text": "Todas las Áreas (Completo)",
                "error_loading_areas": "Error al cargar áreas",
                "areas_unavailable": "Áreas no disponibles",
                "last_mock_exam_results_title": "Resultado del Último Simulacro",
                "no_last_result": "No se encontró ningún resultado de simulacro reciente en esta sesión.",
                "performance_total_qs": "Total de Preguntas:",
                "performance_answered": "Respondidas:",
                "performance_correct": "Correctas:",
                "performance_accuracy": "Precisión:",
                "performance_duration_set": "Duración Establecida:",
                "performance_time_taken": "Tiempo Utilizado:",
                "performance_areas_tested": "Áreas Evaluadas:",
                "performance_timestamp": "Completado el:",
                "review_last_mock_exam_button": "Revisar Preguntas",
                "go_to_focused_pro_dashboard_text": "Acceder a Estudio Enfocado Pro 🎯",
                "mock_exam_history_title": "Historial de Simulacros",
                "historical_results_placeholder_text": "[Tu historial de rendimiento en Simulacros aparecerá aquí - funcionalidad futura]",
                "cardio": "Cardiología", "neuro": "Neurología", "pneumo": "Neumología", "icu": "UCI",
                "pneumo+icu": "UCI Neumología", "cardio+icu": "UCI Cardiología", "neuro+icu": "UCI Neurología",
                "vent": "Ventilación Mecánica", "medicine": "Medicina", "nephro": "Nefrología",
                "nephro+icu": "Nefrología-ICU", "rrt": "Terapia de Reemplazo Renal - TRR - Diálisis", "dialysis": "Diálisis"
            }
        };
        return (key) => translations[lang]?.[key] || translations['en']?.[key] || key;
    }
    const translateDashboardSim = getDashboardSimTranslations();

    function applyDashboardSimStaticTranslations() {
        document.title = translateDashboardSim("dashboard_sim_main_title");
        const mainTitle = document.getElementById("user-welcome-message");
        if(mainTitle) mainTitle.textContent = translateDashboardSim("dashboard_sim_main_title");
        
        const logoutTextS = document.getElementById("dashboard_logout_text");
        if(logoutTextS) logoutTextS.textContent = translateDashboardSim("dashboard_logout_text");

        const configTitle = document.querySelector('#mock-exam-launch-controls h2[data-i18n="configure_new_mock_exam_title"]');
        if(configTitle) configTitle.textContent = translateDashboardSim("configure_new_mock_exam_title");
        
        const durationLabel = document.querySelector('label[for="sim-duration-selector"]');
        if(durationLabel) durationLabel.textContent = translateDashboardSim("sim_duration_label");
        const durationTip = durationLabel ? durationLabel.closest('div').querySelector('p[data-i18n="sim_duration_tip"]') : null;
        if(durationTip) durationTip.textContent = translateDashboardSim("sim_duration_tip");

        const numQLabel = document.querySelector('label[for="sim-num-questions-selector"]');
        if(numQLabel) numQLabel.textContent = translateDashboardSim("sim_num_questions_label");
        const numQTip = numQLabel ? numQLabel.closest('div').querySelector('p[data-i18n="sim_num_questions_tip"]') : null;
        if(numQTip) numQTip.textContent = translateDashboardSim("sim_num_questions_tip");

        const areaLabel = document.querySelector('label[for="sim-area-selector"]');
        if(areaLabel) areaLabel.textContent = translateDashboardSim("sim_area_selector_label");
        const areaTip = areaLabel ? areaLabel.closest('div').querySelector('p[data-i18n="sim_multi_select_tip"]') : null;
        if(areaTip) areaTip.textContent = translateDashboardSim("sim_multi_select_tip");

        const startButtonSpan = startButton ? startButton.querySelector('span') : null;
        if(startButtonSpan) startButtonSpan.textContent = translateDashboardSim("start_simulation_button_text");
        
        const lastResultsTitleEl = document.querySelector('#last-mock-exam-results-section h2[data-i18n="last_mock_exam_results_title"]');
        if(lastResultsTitleEl) lastResultsTitleEl.textContent = translateDashboardSim("last_mock_exam_results_title");

        if(reviewLastMockExamBtn) reviewLastMockExamBtn.textContent = translateDashboardSim("review_last_mock_exam_button");
        
        const goToFocusedProBtnSpan = goToFocusedProBtn ? goToFocusedProBtn.querySelector('span') : null;
        if(goToFocusedProBtnSpan) goToFocusedProBtnSpan.textContent = translateDashboardSim("go_to_focused_pro_dashboard_text");

        const historyTitleEl = document.querySelector('#mock-exam-history-section h2[data-i18n="mock_exam_history_title"]');
        if(historyTitleEl) historyTitleEl.textContent = translateDashboardSim("mock_exam_history_title");
        const historyPlaceholderEl = document.querySelector('#historical-results-placeholder p[data-i18n="historical_results_placeholder_text"]');
        if(historyPlaceholderEl) historyPlaceholderEl.textContent = translateDashboardSim("historical_results_placeholder_text");
    }
    
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            if (confirm(translateDashboardSim("logout_confirm_message_dashboard"))) {
                localStorage.clear(); // Limpa tudo ao sair do dashboard principal do simulado
                window.location.href = '../login.html';
            }
        });
    }

    function populateSimAreaSelector() {
        if (areaSelector && typeof questionBank !== 'undefined' && questionBank.getAllQuestions) {
            try {
                const allQuestions = questionBank.getAllQuestions();
                let areas = new Set();
                allQuestions.forEach(q => (q.areas || [q.area]).forEach(a => { if(a) areas.add(String(a).toLowerCase().trim())}));
                
                const sortedAreas = Array.from(areas).sort();
                areaSelector.innerHTML = ''; 
                areaSelector.options.add(new Option(translateDashboardSim("all_areas_option_text"), "all"));

                sortedAreas.forEach(areaCode => {
                    const displayName = translateDashboardSim(areaCode) || areaCode.charAt(0).toUpperCase() + areaCode.slice(1);
                    areaSelector.options.add(new Option(displayName, areaCode));
                });
            } catch (e) {
                console.error("Dashboard-Simulation: Error populating area selector:", e);
                areaSelector.options.add(new Option(translateDashboardSim("error_loading_areas"), ""));
            }
        } else if (areaSelector) {
            areaSelector.options.add(new Option(translateDashboardSim("areas_unavailable"), ""));
        }
    }

    function displayLastMockExamResult() {
        const resultString = localStorage.getItem('lastMockExamResult');
        if (resultString && lastResultsSection && lastResultsDetailsDiv) {
            try {
                const result = JSON.parse(resultString);
                const timeTakenInSeconds = result.timeTakenInSeconds || 0;
                const minutes = Math.floor(timeTakenInSeconds / 60);
                const seconds = timeTakenInSeconds % 60;

                lastResultsDetailsDiv.innerHTML = `
                    <p><strong>${translateDashboardSim("performance_total_qs")}</strong> ${result.totalQuestions || 'N/A'}</p>
                    <p><strong>${translateDashboardSim("performance_answered")}</strong> ${result.answeredQuestions || 'N/A'}</p>
                    <p><strong>${translateDashboardSim("performance_correct")}</strong> ${result.correctAnswers || 'N/A'}</p>
                    <p><strong>${translateDashboardSim("performance_accuracy")}</strong> ${result.accuracy !== undefined ? result.accuracy + '%' : 'N/A'}</p>
                    <p><strong>${translateDashboardSim("performance_areas_tested")}</strong> ${result.areas || 'N/A'}</p>
                    <p><strong>${translateDashboardSim("performance_duration_set")}</strong> ${result.durationSettingInMinutes || 'N/A'} min</p>
                    <p><strong>${translateDashboardSim("performance_time_taken")}</strong> ${minutes} min ${seconds} seg</p>
                    <p><strong>${translateDashboardSim("performance_timestamp")}</strong> ${result.timestamp ? new Date(result.timestamp).toLocaleString() : 'N/A'}</p>
                `;
                lastResultsSection.style.display = 'block';
                if(reviewLastMockExamBtn) {
                    reviewLastMockExamBtn.style.display = 'inline-block'; // Mostrar botão
                    reviewLastMockExamBtn.onclick = () => {
                        localStorage.setItem('reviewMockExamData', JSON.stringify(result.questions));
                        // Idealmente, redirecionar para uma página de revisão dedicada
                        // window.location.href = '../Quiz/mock-exam-review.html'; 
                        alert("Funcionalidade de revisão detalhada do Mock Exam (ver questões) ainda a ser implementada.");
                    };
                }

            } catch (e) {
                console.error("Erro ao carregar resultado do último Mock Exam:", e);
                lastResultsDetailsDiv.innerHTML = `<p>${translateDashboardSim("no_last_result")}</p>`;
                lastResultsSection.style.display = 'block';
                if(reviewLastMockExamBtn) reviewLastMockExamBtn.style.display = 'none';
            }
        } else if (lastResultsDetailsDiv) {
            lastResultsDetailsDiv.innerHTML = `<p>${translateDashboardSim("no_last_result")}</p>`;
            lastResultsSection.style.display = 'block'; // Mostra a seção mesmo que não haja resultado, para a mensagem
            if(reviewLastMockExamBtn) reviewLastMockExamBtn.style.display = 'none';
        }
    }
    
    const userTier = localStorage.getItem('userTier');
    if (userTier === 'advanced' && advancedNavSection && goToFocusedProBtn) {
        advancedNavSection.style.display = 'block'; 
        goToFocusedProBtn.addEventListener('click', () => {
            window.location.href = '../Dashboard/Dashboard-FocusedPro.html';
        });
    }

    setTimeout(() => {
        if (typeof questionBank !== 'undefined' && questionBank.getAllQuestions) { // Verifica se getAllQuestions existe
            populateSimAreaSelector();
        } else {
            console.error("Dashboard-Simulation: questionBank or getAllQuestions is not defined. Areas cannot be populated.");
            if(areaSelector) areaSelector.options.add(new Option(translateDashboardSim("areas_unavailable"), ""));
        }
    }, 500); 

    if (startButton && durationInput && numQuestionsInput && areaSelector) {
        startButton.addEventListener('click', () => {
            const duration = durationInput.value || '120'; 
            const numQuestions = numQuestionsInput.value || '50'; 
            const selectedOptions = Array.from(areaSelector.selectedOptions);
            let selectedAreasValues = selectedOptions.map(option => option.value.trim().toLowerCase());
            let areasQueryParam = "";

            if (selectedAreasValues.length > 0 && !(selectedAreasValues.length === 1 && selectedAreasValues[0] === "all")) {
                areasQueryParam = `&areas=${selectedAreasValues.filter(val => val !== "all").join(',')}`;
            }
            
            let quizUrl = `../Quiz/simulation.html?duration=${duration}&num_questions=${numQuestions}${areasQueryParam}`;
            console.log("Redirecionando para Mock Exam:", quizUrl);
            window.location.href = quizUrl;
        });
    } else {
        console.error("Dashboard-Simulation: Erro! Elementos necessários para configuração do Mock Exam não encontrados.");
    }

    applyDashboardSimStaticTranslations();
    displayLastMockExamResult(); 
});