// performance-report.js
const ENABLE_AI_SUGGESTIONS = false;

/**
 * Main entry point: Waits for the full HTML to load.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Performance Report JS Loaded");
    window.scrollTo(0, 0);
    initializeReportPage();
});

/**
 * Main function that orchestrates the report rendering.
 * Reads the 'mode' from the URL to decide which report experience to show.
 */
function initializeReportPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    console.log(`Report mode detected: ${mode}`);

    const translate = getPerformanceReportTranslations(getCurrentLanguage());
    applyStaticHeaderAndFooterTranslations(translate);

    const mainContainer = document.querySelector('main');
    if (!mainContainer) {
        console.error("Main container element not found in HTML!");
        return;
    }

    // This switch directs the user to the correct report experience based on the mode.
    switch (mode) {
        case 'focused':
        case 'focused_pro':
            renderSimpleReport(mainContainer, translate);
            break;

        case 'advanced':
        case 'mock': // 'simulation' mode is treated as 'mock'
            // We will rename 'renderMockReport' to 'renderDetailedReport' in a future step
            renderDetailedReport(mainContainer, translate, mode);
            break;

        default:
            // Default behavior loads the detailed report, assuming a standard mock exam.
            console.warn("No specific mode found, loading default detailed report.");
            // We will rename 'renderMockReport' to 'renderDetailedReport' in a future step
            renderDetailedReport(mainContainer, translate, 'mock');
            break;
    }
}

/**
 * Renders a simplified report for 'focused' and 'focused_pro' users.
 * @param {HTMLElement} mainContainer - The main container to inject the HTML into.
 * @param {Function} translate - The translation function.
 */
function renderSimpleReport(mainContainer, translate) {
    console.log("Rendering Simple Report for 'focused' users...");
    mainContainer.innerHTML = ""; // Clear the main container first

    const resultString = localStorage.getItem('lastMockExamResult');
    if (!resultString) {
        mainContainer.innerHTML = `<p class="text-red-500 p-8 text-center">No result data found to display a report.</p>`;
        return;
    }

    try {
        const resultData = JSON.parse(resultString);
        const accuracy = resultData.accuracy !== undefined ? `${resultData.accuracy}%` : 'N/A';
        const correctAnswers = resultData.correctAnswers || 0;
        const answeredQuestions = resultData.answeredQuestions || 0;
        let timeTakenFormatted = 'N/A';
        if (resultData.timeTakenInSeconds !== undefined) {
            const minutes = Math.floor(resultData.timeTakenInSeconds / 60);
            const seconds = resultData.timeTakenInSeconds % 60;
            timeTakenFormatted = `${minutes} min ${seconds} sec`;
        }

        mainContainer.innerHTML = `
            <header class="mb-8 pt-4 text-center">
                <h1 class="text-2xl sm:text-3xl font-bold text-purple-700">${translate('focused_study_report')}</h1>
            </header>

            <section class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
                <h2 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">${translate('session_summary')}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-lg">
                    <p><strong>${translate('label_accuracy')}</strong> <span class="text-2xl font-bold text-purple-700">${accuracy}</span></p>
                    <p><strong>${translate('label_score')}</strong> ${correctAnswers} / ${answeredQuestions}</p>
                    <p><strong>${translate('label_time_taken')}</strong> ${timeTakenFormatted}</p>
                </div>
            </section>
        `;

    } catch (error) {
        console.error("Error rendering simple report:", error);
        mainContainer.innerHTML = `<p class="text-red-500 p-8 text-center">Error loading report data.</p>`;
    }
}

// IMPORTANT: You will need to rename your 'renderMockReport' function to 'renderDetailedReport'
// for the code above to work perfectly. We can do that in the next step.

/**
 * Renders the full, detailed report for 'advanced' and 'mock' users.
 * @param {HTMLElement} mainContainer - The main container element.
 * @param {Function} translate - The translation function.
 * @param {string} mode - The current report mode.
 */
function renderDetailedReport(mainContainer, translate, mode) {
    console.log(`Rendering Detailed Report in '${mode}' mode...`);

    // The suggestions section is now added conditionally via JavaScript
    mainContainer.innerHTML = `
        <header class="mb-8 pt-4 text-center">
            <h1 class="text-2xl sm:text-3xl font-bold text-purple-700" data-i18n="performance_report_main_title">${translate('performance_report_main_title')}</h1>
            <p id="report-user-info" class="text-gray-600 mt-2"></p>
        </header>
        <section id="overall-summary-section" class="mb-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-4" data-i18n="overall_summary_title">${translate('overall_summary_title')}</h2>
            <div id="overall-summary-content"></div>
        </section>
        <section id="history-section" class="mb-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200"></section>
        
        <div id="suggestions-placeholder"></div>

        <section id="question-review-section" class="mt-6">
             <h2 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-4 bg-white p-6 rounded-t-xl shadow-lg border-b-0">${translate('question_review_title')}</h2>
             <div id="question-review-content" class="bg-white p-6 rounded-b-xl shadow-lg"></div>
        </section>
    `;

    // (Aqui entraria a lógica que você já tem para popular UserInfo, OverallSummary, etc.)
    // ...

    renderHistoryCharts(translate);
    
    const resultData = JSON.parse(localStorage.getItem('lastMockExamResult') || '{}');
    if(resultData.questions) {
        renderQuestionReview(resultData, translate);
    }
    
    // --- FEATURE FLAG LOGIC ---
    // Only render the suggestions section if the flag is true.
    if (ENABLE_AI_SUGGESTIONS) {
        const suggestionsPlaceholder = document.getElementById('suggestions-placeholder');
        if (suggestionsPlaceholder) {
            // Inject the container HTML for the suggestions
            suggestionsPlaceholder.innerHTML = `
                <section class="suggestions-card">
                    <h2 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-2">${translate('study_suggestions_title')}</h2>
                    <div id="study-suggestions-content">
                        <p class="text-gray-500">Analyzing performance...</p>
                    </div>
                </section>
            `;
            // Call the function to populate it
            renderStudySuggestions(translate);
        }
    }
}

/**
 * Renderiza o layout para o relatório dos modos Focused.
 * @param {HTMLElement} mainContainer - O container principal onde o conteúdo será inserido.
 * @param {Function} translate - A função de tradução.
 */
function renderFocusedReport(mainContainer, translate) {
    console.log("Rendering Focused Report...");
    
    // Conteúdo placeholder para o modo focado.
    mainContainer.innerHTML = `
        <header class="mb-8 pt-4 text-center">
            <h1 class="text-2xl sm:text-3xl font-bold text-purple-700">${translate('performance_report_main_title')}</h1>
            <p class="text-gray-600 mt-2">Modo: Estudo Focado</p>
        </header>
        <div class="p-6 bg-white rounded-lg shadow">
            <h2 class="text-2xl font-bold text-purple-700 mb-4">Seu Desempenho Histórico</h2>
            <p>Em breve: Suas estatísticas de estudo cumulativas, com performance por área de conhecimento.</p>
        </div>
    `;
    // No futuro, chamaremos uma função `loadFocusedData()` aqui.
}

/**
 * LÓGICA ORIGINAL DO SEU ARQUIVO (renomeada para ser específica do Mock Exam)
 * Carrega os dados do 'lastMockExamResult' do localStorage e popula o DOM.
 * @param {Function} translate - A função de tradução.
 */
function loadMockExamData(translate) {
    console.log("loadMockExamData function called.");
    const overallSummaryContentDiv = document.getElementById('overall-summary-content');
    const reportUserInfoP = document.getElementById('report-user-info');
    const areaAnalysisSection = document.getElementById('area-analysis-section');
    const areaAnalysisContentDiv = document.getElementById('area-analysis-content');
    const levelAnalysisSection = document.getElementById('level-analysis-section');
    const levelAnalysisContentDiv = document.getElementById('level-analysis-content');

    if (!overallSummaryContentDiv) {
        console.error("Critical error: summary content div not found after render. Aborting.");
        return;
    }
    
    overallSummaryContentDiv.innerHTML = `<p class="text-gray-500">${translate("loading_report_data")}</p>`;

    const resultString = localStorage.getItem('lastMockExamResult');

    if (!resultString) {
        console.error("loadMockExamData: No 'lastMockExamResult' found in localStorage.");
        overallSummaryContentDiv.innerHTML = `<p class="text-red-500">Error: No mock exam result found to display.</p>`;
        if (reportUserInfoP) {
            reportUserInfoP.innerHTML = `<p class="text-red-500">N/A</p>`;
        }
        return;
    }

    try {
        const resultData = JSON.parse(resultString);
        console.log("loadMockExamData: 'lastMockExamResult' parsed successfully:", resultData);

        // Popula informações do usuário e do teste
        if (reportUserInfoP) {
            const userDetailsString = localStorage.getItem('userDetails');
            let userName = 'N/A';
            if (userDetailsString) {
                try {
                    const userDetails = JSON.parse(userDetailsString);
                    userName = userDetails.name || userDetails.username || 'User';
                } catch (e) {
                    console.error("loadMockExamData: Error parsing userDetails from localStorage", e);
                }
            }
            let testName = 'General Simulation';
            if (resultData.areas) {
                if (Array.isArray(resultData.areas) && resultData.areas.length > 0) {
                    testName = resultData.areas.join(', ');
                } else if (typeof resultData.areas === 'string') {
                    testName = resultData.areas;
                }
            }
            const completedTimestamp = resultData.timestamp ?
                                       new Date(resultData.timestamp).toLocaleDateString(getCurrentLanguage(), { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) :
                                       'N/A';
            reportUserInfoP.innerHTML = `
                <span class="font-semibold">User:</span> ${userName} | 
                <span class="font-semibold">Test:</span> ${testName} | 
                <span class="font-semibold">Completed on:</span> ${completedTimestamp}
            `;
        }

        // Popula resumo geral do desempenho
        if (overallSummaryContentDiv) {
            const accuracy = resultData.accuracy !== undefined ? `${resultData.accuracy}%` : 'N/A';
            const totalQuestions = resultData.totalQuestions || 'N/A';
            const answeredQuestions = resultData.answeredQuestions || 0;
            const correctAnswers = resultData.correctAnswers || 0;
            const incorrectAnswers = (resultData.incorrectAnswers !== undefined) ? resultData.incorrectAnswers : (answeredQuestions - correctAnswers);
            const allottedMinutes = resultData.durationSettingInMinutes ? `${resultData.durationSettingInMinutes} min` : 'N/A';
            let timeTakenFormatted = 'N/A';
            if (resultData.timeTakenInSeconds !== undefined) {
                const takenMinutes = Math.floor(resultData.timeTakenInSeconds / 60);
                const takenSeconds = resultData.timeTakenInSeconds % 60;
                timeTakenFormatted = `${takenMinutes} min ${takenSeconds} sec`;
            }
            overallSummaryContentDiv.innerHTML = `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    <p><strong>${translate("label_accuracy")}</strong> ${accuracy}</p>
                    <p><strong>${translate("label_total_questions")}</strong> ${totalQuestions}</p>
                    <p><strong>${translate("label_answered_questions")}</strong> ${answeredQuestions}</p>
                    <p><strong>${translate("label_correct_answers")}</strong> ${correctAnswers}</p>
                    <p><strong>${translate("label_incorrect_answers")}</strong> ${incorrectAnswers}</p>
                    <p><strong>${translate("label_allotted_duration")}</strong> ${allottedMinutes}</p>
                    <p><strong>${translate("label_time_taken")}</strong> ${timeTakenFormatted}</p>
                </div>
            `;
        }

        // Calcula estatísticas por área e nível
        const areaStats = {};
        const levelStats = {};
        if (typeof questionBank === 'undefined' || typeof questionBank.getAllQuestions !== 'function') {
            console.error("loadMockExamData: questionBank is not available.");
            if (areaAnalysisSection) areaAnalysisSection.style.display = 'none';
            if (levelAnalysisSection) levelAnalysisSection.style.display = 'none';
        } else {
            const allQuestionsFromBank = questionBank.getAllQuestions();
            if (resultData.questions && Array.isArray(resultData.questions)) {
                resultData.questions.forEach(answeredQuestion => {
                    const fullQuestionData = allQuestionsFromBank.find(q => q.id === answeredQuestion.id);
                    if (fullQuestionData) {
                        const isCorrect = answeredQuestion.isCorrect; // Usando o campo 'isCorrect' já calculado
                        if (fullQuestionData.areas && Array.isArray(fullQuestionData.areas)) {
                            fullQuestionData.areas.forEach(areaName => {
                                const normalizedAreaName = String(areaName).toLowerCase().trim();
                                if (!areaStats[normalizedAreaName]) {
                                    areaStats[normalizedAreaName] = { total: 0, correct: 0, accuracy: 0 };
                                }
                                areaStats[normalizedAreaName].total++;
                                if (isCorrect) {
                                    areaStats[normalizedAreaName].correct++;
                                }
                            });
                        }
                        if (fullQuestionData.level) {
                            const levelName = String(fullQuestionData.level).toLowerCase().trim();
                            if (!levelStats[levelName]) {
                                levelStats[levelName] = { total: 0, correct: 0, accuracy: 0 };
                            }
                            levelStats[levelName].total++;
                            if (isCorrect) {
                                levelStats[levelName].correct++;
                            }
                        }
                    }
                });

                Object.values(areaStats).forEach(stat => {
                    if (stat.total > 0) stat.accuracy = parseFloat(((stat.correct / stat.total) * 100).toFixed(1));
                });
                Object.values(levelStats).forEach(stat => {
                    if (stat.total > 0) stat.accuracy = parseFloat(((stat.correct / stat.total) * 100).toFixed(1));
                });
                
                console.log("loadMockExamData: Calculated Area Stats:", areaStats);
                console.log("loadMockExamData: Calculated Level Stats:", levelStats);

                // Exibe gráfico de performance por área
                if (areaAnalysisSection && areaAnalysisContentDiv && Object.keys(areaStats).length > 0) {
                    areaAnalysisSection.style.display = 'block';
                    areaAnalysisContentDiv.innerHTML = renderPerformanceChart(areaStats, translate, 'area');
                }

                // Exibe gráfico de performance por nível de dificuldade
                if (levelAnalysisSection && levelAnalysisContentDiv && Object.keys(levelStats).length > 0) {
                    levelAnalysisSection.style.display = 'block';
                    levelAnalysisContentDiv.innerHTML = renderPerformanceChart(levelStats, translate, 'level');
                }
            }
        }
    } catch (error) {
        console.error("loadMockExamData: Error processing results:", error);
        if (overallSummaryContentDiv) overallSummaryContentDiv.innerHTML = `<p class="text-red-500">Error: Could not load report data.</p>`;
    }
}

/**
 * Função genérica para criar os gráficos de barras de performance (para Área e Nível).
 * @param {object} stats - O objeto com as estatísticas (areaStats ou levelStats).
 * @param {Function} translate - A função de tradução.
 * @param {string} type - O tipo de gráfico ('area' ou 'level').
 * @returns {string} O HTML do gráfico.
 */
function renderPerformanceChart(stats, translate, type) {
    const BORDERLINE_PERCENTAGE = 70;
    let chartHTML = `<div class="${type}-performance-chart">`;

    // Adiciona legenda apenas para o gráfico de áreas.
    if (type === 'area') {
        chartHTML += `
            <div class="graph-legend">
                <span class="legend-lower">${translate("label_lower_performance")}</span>
                <span class="legend-borderline">${translate("label_borderline_performance")}</span>
                <span class="legend-higher">${translate("label_higher_performance")}</span>
            </div>
        `;
    }

    for (const key in stats) {
        const stat = stats[key];
        const nameTranslated = translate(key);
        let barColor;

        if (stat.accuracy < BORDERLINE_PERCENTAGE - 15) {
            barColor = '#ef4444'; // red-500
        } else if (stat.accuracy > BORDERLINE_PERCENTAGE + 15) {
            barColor = '#22c55e'; // green-500
        } else {
            barColor = '#f59e0b'; // amber-500
        }

        chartHTML += `
            <div class="${type}-row">
                <span class="${type}-name-label">${nameTranslated}</span>
                <div class="bar-graph-container">
                    <div class="performance-actual-bar" style="width: ${stat.accuracy}%; background-color: ${barColor};"></div>
                    ${type === 'area' ? `<div class="borderline-marker-line" style="left: ${BORDERLINE_PERCENTAGE}%;"></div>` : ''}
                </div>
                <span class="${type}-accuracy-value">${stat.accuracy}%</span>
            </div>
        `;
    }
    chartHTML += `</div>`;
    return chartHTML;
}

// --- SEÇÃO DE TRADUÇÃO E UTILITÁRIOS ---

function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

function getPerformanceReportTranslations(lang) {
    const translations = {
        en: {
            "report_title": "Performance Report | BrainboxMed", "back_to_dashboard_text": "Back to Dashboard",
            "performance_report_main_title": "Performance Report", "overall_summary_title": "Overall Summary",
            "area_analysis_title": "Detailed Area Analysis", "question_review_title": "Question Review",
            "label_accuracy": "Accuracy:", "label_total_questions": "Total Questions:", "label_answered_questions": "Answered:",
            "label_correct_answers": "Correct:", "label_incorrect_answers": "Incorrect:",
            "label_allotted_duration": "Allotted Duration:", "label_time_taken": "Time Taken:",
            "label_area_name": "Area", "label_total_short": "Total", "label_correct_short": "Correct", "label_accuracy_short": "Accuracy",
            "loading_report_data": "Loading report data...", "level_analysis_title": "Performance by Difficulty Level",
            "label_level_name": "Level", "label_lower_performance": "Lower", "label_borderline_performance": "Borderline", "label_higher_performance": "Higher",
            "no_area_specific_data_to_display": "No area-specific data to display for the graph.", "no_difficulty_specific_data_to_display": "No difficulty-specific data to display.",
            "easy": "Easy", "moderate": "Moderate", "hard": "Hard", "very_hard": "Very Hard",
            "cardio": "Cardiology", "cardio+icu": "Cardiology-ICU", "icu": "Intensive Care Unit", "medicine": "Medicine",
            "neuro": "Neurology", "neuro+icu": "Neurology-ICU", "pneumo": "Pulmonology", "pneumo+icu": "Pulmonology-ICU",
            "nephro": "Nephrology", "nephro+icu": "Nephrology-ICU", "vent": "Mechanical Ventilation", "rrt": "Renal Replacement Therapy",
            "study_suggestions_title": "Study Suggestions",
            "weak_points_subtitle": "Based on your performance, we suggest reviewing the following topics:",
            "no_weak_points_message": "Great job! No specific weak points were identified in this test. Keep up the excellent work!",
            "focused_study_report": "Focused Study Report",
            "session_summary": "Session Summary",
            "label_score": "Score:"
        },
        pt: {
            "report_title": "Relatório de Performance | BrainboxMed", "back_to_dashboard_text": "Voltar ao Dashboard",
            "performance_report_main_title": "Relatório de Performance", "overall_summary_title": "Resumo Geral",
            "area_analysis_title": "Análise Detalhada por Área", "question_review_title": "Revisão das Questões",
            "label_accuracy": "Precisão:", "label_total_questions": "Total de Questões:", "label_answered_questions": "Respondidas:",
            "label_correct_answers": "Corretas:", "label_incorrect_answers": "Incorretas:",
            "label_allotted_duration": "Duração Prevista:", "label_time_taken": "Tempo Utilizado:",
            "label_area_name": "Área", "label_total_short": "Total", "label_correct_short": "Corretas", "label_accuracy_short": "Precisão",
            "loading_report_data": "Carregando dados do relatório...", "level_analysis_title": "Desempenho por Nível de Dificuldade",
            "label_level_name": "Nível", "label_lower_performance": "Inferior", "label_borderline_performance": "Limítrofe", "label_higher_performance": "Superior",
            "no_area_specific_data_to_display": "Sem dados específicos por área para exibir no gráfico.", "no_difficulty_specific_data_to_display": "Sem dados específicos por dificuldade para exibir.",
            "easy": "Fácil", "moderate": "Médio", "hard": "Difícil", "very_hard": "Muito Difícil",
            "cardio": "Cardiologia", "cardio+icu": "UTI-Cardiologia", "icu": "UTI", "medicine": "Medicina Interna",
            "neuro": "Neurologia", "neuro+icu": "UTI-Neurologia", "pneumo": "Pneumologia", "pneumo+icu": "UTI-Pneumologia",
            "nephro": "Nefrologia", "nephro+icu": "UTI-Nefrologia", "vent": "Ventilação Mecânica", "rrt": "Terapia Renal Substitutiva",
            "study_suggestions_title": "Sugestões de Estudo",
            "weak_points_subtitle": "Com base no seu desempenho, sugerimos revisar os seguintes tópicos:",
            "no_weak_points_message": "Parabéns! Nenhum ponto fraco específico foi identificado neste teste. Continue o excelente trabalho!",
            "focused_study_report": "Relatório de Estudo Focado",
            "session_summary": "Resumo da Sessão",
            "label_score": "Pontuação:"
        },
        es: {
            "report_title": "Informe de Rendimiento | BrainboxMed", "back_to_dashboard_text": "Volver al Panel",
            "performance_report_main_title": "Informe de Rendimiento", "overall_summary_title": "Resumen General",
            "area_analysis_title": "Análisis Detallado por Área", "question_review_title": "Revisión de Preguntas",
            "label_accuracy": "Precisión:", "label_total_questions": "Total de Preguntas:", "label_answered_questions": "Respondidas:",
            "label_correct_answers": "Correctas:", "label_incorrect_answers": "Incorrectas:",
            "label_allotted_duration": "Duración Prevista:", "label_time_taken": "Tiempo Utilizado:",
            "label_area_name": "Área", "label_total_short": "Total", "label_correct_short": "Correctas", "label_accuracy_short": "Precisión",
            "loading_report_data": "Cargando datos del informe...", "level_analysis_title": "Rendimiento por Nivel de Dificultad",
            "label_level_name": "Nivel", "label_lower_performance": "Inferior", "label_borderline_performance": "Límite", "label_higher_performance": "Superior",
            "no_area_specific_data_to_display": "No hay datos específicos por área para mostrar en el gráfico.", "no_difficulty_specific_data_to_display": "No hay datos específicos por dificultad para mostrar.",
            "easy": "Fácil", "moderate": "Medio", "hard": "Difícil", "very_hard": "Muy Difícil",
            "cardio": "Cardiología", "cardio+icu": "UCI-Cardiología", "icu": "Unidad de Cuidados Intensivos", "medicine": "Medicina Interna",
            "neuro": "Neurología", "neuro+icu": "UCI-Neurología", "pneumo": "Neumología", "pneumo+icu": "UCI-Neumología",
            "nephro": "Nefrología", "nephro+icu": "UCI-Nefrología", "vent": "Ventilación Mecánica", "rrt": "Terapia de Reemplazo Renal",
            "study_suggestions_title": "Sugerencias de Estudio",
            "weak_points_subtitle": "Según su rendimiento, le sugerimos que revise los siguientes temas:",
            "no_weak_points_message": "¡Excelente trabajo! No se identificaron puntos débiles específicos en esta prueba. ¡Siga con el excelente trabajo!",
            "focused_study_report": "Informe de Estudio Enfocado",
            "session_summary": "Resumen de la Sesión",
            "label_score": "Puntuación:"
        }
    };
    return (key) => translations[lang]?.[key] || translations['en']?.[key] || key;
}

/**
 * Aplica traduções apenas a elementos que são estáticos e comuns a todos os modos (cabeçalho/rodapé).
 * @param {Function} translate - A função de tradução.
 */
function applyStaticHeaderAndFooterTranslations(translate) {
    document.title = translate("report_title");
    const backButtonSpan = document.querySelector('#back-to-dashboard-button span');
    if (backButtonSpan) backButtonSpan.textContent = translate("back_to_dashboard_text");
    
    // Atualiza o ano no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * Renders history charts, now with interactive elements for the single-test view.
 * This is the corrected version that calculates stats before using them.
 */
function renderHistoryCharts(translate) {
    const history = JSON.parse(localStorage.getItem('mockExamHistory')) || [];
    const historySection = document.getElementById('history-section');
    if (!historySection) {
        console.error("History section could not be found.");
        return;
    }

    if (history.length === 0) {
        // No need to check for historySection again, already did.
        historySection.innerHTML = '<p class="text-gray-500">No simulation history found to display charts.</p>';
        return;
    }

    if (history.length < 2) {
        // --- LOGIC FOR A SINGLE TEST IN HISTORY ---
        console.log("Rendering interactive summary for a single test.");

        // --- THIS IS THE CORRECTED/ADDED BLOCK ---
        const singleTest = history[0];
        const areaStats = {};
        const levelStats = {};

        if (singleTest.questions) {
            singleTest.questions.forEach(q => {
                const qDetails = (typeof questionBank !== 'undefined') ? questionBank.getQuestionById(q.id) : null;
                if (!qDetails) return;

                // Process Areas
                if (qDetails.areas) {
                    qDetails.areas.forEach(area => {
                        const specificArea = area.toLowerCase().trim();
                        if (!areaStats[specificArea]) areaStats[specificArea] = { correct: 0, total: 0 };
                        areaStats[specificArea].total++;
                        if (q.isCorrect) areaStats[specificArea].correct++;
                    });
                }
                
                // Process Difficulty Levels
                if (qDetails.level) {
                    const level = qDetails.level.toLowerCase().trim();
                    if (!levelStats[level]) levelStats[level] = { correct: 0, total: 0 };
                    levelStats[level].total++;
                    if (q.isCorrect) levelStats[level].correct++;
                }
            });
        }
        // --- END OF CORRECTION ---

        historySection.innerHTML = `
            <h2 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">Performance Summary (Last Test)</h2>
            <p class="text-sm text-gray-500 mb-6">Click on a bar to jump to the corresponding questions.</p>
            
            <div class="mb-8">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Performance by Area</h3>
                <div id="area-chart-container"></div>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Performance by Difficulty</h3>
                <div id="difficulty-chart-container"></div>
            </div>
        `;

        const areaChartContainer = document.getElementById('area-chart-container');
        Object.keys(areaStats).forEach(area => {
            const stat = areaStats[area];
            const accuracy = stat.total > 0 ? parseFloat(((stat.correct / stat.total) * 100).toFixed(1)) : 0;
            areaChartContainer.innerHTML += `
                <a href="#question-review-section" class="interactive-chart-bar" data-filter-type="area" data-filter-value="${area}">
                    <span class="bar-label">${translate(area)}</span>
                    <div class="bar-container"><div class="bar-fill" style="width: ${accuracy}%; background-color: #8B5CF6;"></div></div>
                    <span class="bar-value">${accuracy}%</span>
                </a>`;
        });

        const difficultyChartContainer = document.getElementById('difficulty-chart-container');
        Object.keys(levelStats).forEach(level => {
            const stat = levelStats[level];
            const accuracy = stat.total > 0 ? parseFloat(((stat.correct / stat.total) * 100).toFixed(1)) : 0;
            difficultyChartContainer.innerHTML += `
                <a href="#question-review-section" class="interactive-chart-bar" data-filter-type="level" data-filter-value="${level}">
                    <span class="bar-label">${translate(level)}</span>
                    <div class="bar-container"><div class="bar-fill" style="width: ${accuracy}%; background-color: #10B981;"></div></div>
                    <span class="bar-value">${accuracy}%</span>
                </a>`;
        });
        
        setupReportInteractivity();

    } else {
        // --- LOGIC FOR MULTIPLE TESTS IN HISTORY ---
        // (A lógica para múltiplos testes, que já estava funcionando, permanece a mesma)
        console.log("Rendering evolution charts for multiple tests.");
        
        historySection.innerHTML = `
            <h2 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">Your Evolution</h2>
            <div class="mb-8" style="height: 400px; position: relative;">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Performance by Area</h3>
                <canvas id="areaHistoryChart"></canvas>
            </div>
            <div style="height: 300px; position: relative;">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Overall Performance by Difficulty</h3>
                <canvas id="difficultyHistoryChart"></canvas>
            </div>
        `;

        const areaCtx = document.getElementById('areaHistoryChart');
        if (areaCtx) {
            const allSpecificAreas = new Set();
            history.forEach(test => test.questions?.forEach(q => questionBank.getQuestionById(q.id)?.areas?.forEach(area => allSpecificAreas.add(area.toLowerCase().trim()))));
            const chartLabels = history.map((test, index) => `Test ${index + 1}`);
            const colors = ['#8B5CF6', '#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#EC4899', '#78716c', '#f43f5e'];
            let colorIndex = 0;
            const areaDatasets = Array.from(allSpecificAreas).map(area => {
                const dataForArea = history.map(test => {
                    let correct = 0, total = 0;
                    test.questions?.forEach(q => {
                        const qDetails = questionBank.getQuestionById(q.id);
                        if (qDetails?.areas?.map(a => a.toLowerCase().trim()).includes(area)) { total++; if (q.isCorrect) correct++; }
                    });
                    return total > 0 ? parseFloat(((correct / total) * 100).toFixed(1)) : null;
                });
                const color = colors[colorIndex++ % colors.length];
                return { label: translate(area), data: dataForArea, borderColor: color, tension: 0.1, fill: false, spanGaps: true };
            });
            new Chart(areaCtx, { type: 'line', data: { labels: chartLabels, datasets: areaDatasets }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } }, plugins: { legend: { position: 'top', labels: { boxWidth: 20 } } } } });
        }

        const difficultyCtx = document.getElementById('difficultyHistoryChart');
        if (difficultyCtx) {
            const overallLevelStats = {};
            history.forEach(test => {
                test.questions?.forEach(q => {
                    const qDetails = questionBank.getQuestionById(q.id);
                    if (qDetails?.level) {
                        const level = qDetails.level.toLowerCase().trim();
                        if (!overallLevelStats[level]) overallLevelStats[level] = { correct: 0, total: 0 };
                        overallLevelStats[level].total++;
                        if (q.isCorrect) overallLevelStats[level].correct++;
                    }
                });
            });
            const levelLabels = Object.keys(overallLevelStats);
            const levelData = levelLabels.map(level => {
                const stat = overallLevelStats[level];
                return stat.total > 0 ? parseFloat(((stat.correct / stat.total) * 100).toFixed(1)) : 0;
            });
            new Chart(difficultyCtx, { type: 'bar', data: { labels: levelLabels.map(l => translate(l)), datasets: [{ label: 'Overall Accuracy', data: levelData, backgroundColor: ['#22c55e', '#f59e0b', '#ef4444', '#b91c1c'] }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100, title: { display: true, text: 'Accuracy (%)' } } }, plugins: { legend: { display: false } } } });
        }
    }
}

/**
 * Renders the study suggestions section based on calculated weak points.
 * Contains a placeholder for the future dynamic API call.
 * @param {Function} translate - The translation function.
 */
function renderStudySuggestions(translate) {
    const suggestionsContainer = document.getElementById('study-suggestions-content');
    if (!suggestionsContainer) return;

    const history = JSON.parse(localStorage.getItem('mockExamHistory')) || [];
    const weakPoints = getWeakPoints(history); // Use the new modular function

    if (weakPoints.length === 0) {
        suggestionsContainer.innerHTML = `<p class="text-green-700">${translate('no_weak_points_message')}</p>`;
        return;
    }
    
    suggestionsContainer.innerHTML = `
        <p class="mb-4 text-gray-700">${translate('weak_points_subtitle')}</p>
        <ul id="suggestions-list"></ul>
    `;
    
    const listElement = document.getElementById('suggestions-list');
    
    weakPoints.forEach(topic => {
        const listItem = document.createElement('li');
        listItem.className = 'suggestions-list-item';
        listItem.id = `suggestion-for-${topic.name.replace(/\s/g, '-')}`;
        listItem.innerHTML = `
            <span class="accuracy-badge" style="background-color: #ef4444;">${topic.accuracy}%</span>
            <span class="topic-name">${translate(topic.name)}</span>
            <div class="ml-auto text-gray-400 text-sm">Loading suggestions...</div>
        `;
        listElement.appendChild(listItem);

        // --- DYNAMIC FLOW PLACEHOLDER ---
        // When your backend is ready, you will uncomment and adapt this block.
        /*
        const topicName = topic.name;
        fetch('/api/get-study-suggestions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: topicName })
        })
        .then(response => response.json())
        .then(data => {
            const topicElement = document.getElementById(`suggestion-for-${topicName.replace(/\s/g, '-')}`);
            let linksHTML = '<div class="mt-2 pl-16 text-sm">';
            if (data.suggestions && data.suggestions.length > 0) {
                data.suggestions.forEach(link => {
                    linksHTML += `<a href="${link.url}" target="_blank" class="text-blue-600 hover:underline block">${link.title}</a>`;
                });
            } else {
                linksHTML += `<p class="text-gray-500">No specific suggestions found.</p>`;
            }
            linksHTML += '</div>';
            topicElement.innerHTML += linksHTML; // Append the links
            topicElement.querySelector('.ml-auto').remove(); // Remove "Loading..." text
        })
        .catch(error => {
            console.error('Error fetching study suggestions:', error);
            const topicElement = document.getElementById(`suggestion-for-${topicName.replace(/\s/g, '-')}`);
            topicElement.querySelector('.ml-auto').textContent = 'Could not load.';
        });
        */
        // --- END OF DYNAMIC FLOW PLACEHOLDER ---
    });
}

/**
 * A reusable function to calculate weak points from the entire test history.
 * This can be called from any page (report, dashboard, etc.).
 * @param {Array} history - The mockExamHistory array.
 * @returns {Array} An array of objects representing weak points, sorted by lowest accuracy.
 */
function getWeakPoints(history) {
    if (!history || history.length === 0) {
        return [];
    }
    
    const WEAK_POINT_THRESHOLD = 70; // Accuracy below 70%
    const overallAreaStats = {};

    history.forEach(test => {
        if (!test.questions) return;
        test.questions.forEach(q => {
            const qDetails = (typeof questionBank !== 'undefined') ? questionBank.getQuestionById(q.id) : null;
            if (qDetails && qDetails.areas) {
                qDetails.areas.forEach(area => {
                    const specificArea = area.toLowerCase().trim();
                    if (!overallAreaStats[specificArea]) {
                        overallAreaStats[specificArea] = { correct: 0, total: 0 };
                    }
                    overallAreaStats[specificArea].total++;
                    if (q.isCorrect) {
                        overallAreaStats[specificArea].correct++;
                    }
                });
            }
        });
    });

    return Object.keys(overallAreaStats)
        .map(key => {
            const stat = overallAreaStats[key];
            const accuracy = (stat.total > 0) ? parseFloat(((stat.correct / stat.total) * 100).toFixed(1)) : 0;
            return { name: key, accuracy, ...stat };
        })
        .filter(area => area.accuracy < WEAK_POINT_THRESHOLD && area.total > 0)
        .sort((a, b) => a.accuracy - b.accuracy);
}

/**
 * Renders the detailed question-by-question review section,
 * now with data-attributes for filtering.
 * @param {object} resultData - The parsed data from lastMockExamResult.
 * @param {Function} translate - The translation function.
 */
function renderQuestionReview(resultData, translate) {
    const reviewContentDiv = document.getElementById('question-review-content');
    // ... (início da função)

    resultData.questions.forEach((answeredQuestion, index) => {
        const questionDetails = (typeof questionBank !== 'undefined') ? questionBank.getQuestionById(answeredQuestion.id) : null;
        if (!questionDetails) return;

        // ... (criação de isCorrect, optionsHTML, explanationHTML) ...

        const questionElement = document.createElement('div');
        questionElement.className = 'question-review-item';
        
        // --- MODIFIED: Use the sanitizer ---
        if (questionDetails.areas) {
            questionDetails.areas.forEach(area => {
                const sanitizedArea = sanitizeForDataAttr(area); // Sanitize the name
                questionElement.setAttribute(`data-area-${sanitizedArea}`, 'true');
            });
        }
        if (questionDetails.level) {
            const sanitizedLevel = sanitizeForDataAttr(questionDetails.level); // Sanitize the name
            questionElement.setAttribute(`data-level-${sanitizedLevel}`, 'true');
        }
        // --- End of MODIFICATION ---

        // ... (resto da função para criar o innerHTML) ...
    });
}

/**
 * Sets up click listeners for the interactive chart bars.
 */
function setupReportInteractivity() {
    const interactiveBars = document.querySelectorAll('.interactive-chart-bar');
    const allQuestions = document.querySelectorAll('.question-review-item');

    interactiveBars.forEach(bar => {
        bar.addEventListener('click', function(event) {
            event.preventDefault();

            const filterType = this.dataset.filterType; // 'area' or 'level'
            const filterValue = this.dataset.filterValue;
            const targetSelector = `[data-${filterType}-${filterValue}="true"]`;

            // Remove previous highlights
            allQuestions.forEach(q => q.classList.remove('highlight'));

            // Find the first matching question
            const firstMatch = document.querySelector(targetSelector);
            if (firstMatch) {
                // Scroll to the review section
                const reviewSection = document.getElementById('question-review-section');
                if (reviewSection) {
                    reviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                // Highlight all matching questions
                const matchingQuestions = document.querySelectorAll(targetSelector);
                matchingQuestions.forEach(q => q.classList.add('highlight'));
            }
        });
    });
}

/**
 * Sanitizes a string to be used safely in a data attribute name.
 * Replaces non-alphanumeric characters with a hyphen.
 * @param {string} str - The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeForDataAttr(str) {
    if (!str) return '';
    // Replaces any character that is not a letter or number with a hyphen
    return str.toLowerCase().trim().replace(/[^a-z0-9]/g, '-');
}