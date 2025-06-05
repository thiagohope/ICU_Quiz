// performance-report.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Performance Report JS Loaded");
    window.scrollTo(0, 0); // Rola para o topo ao carregar

    // --- Initialize Internationalization (i18n) ---
    const currentLang = getCurrentLanguage();
    const translate = getPerformanceReportTranslations(currentLang);
    applyStaticTranslations(translate);

    // --- DOM Elements (example, add more as needed) ---
    const backToDashboardButton = document.getElementById('back-to-dashboard-button');
    const reportUserInfoP = document.getElementById('report-user-info');
    const overallSummaryContentDiv = document.getElementById('overall-summary-content');
    // const areaAnalysisContentDiv = document.getElementById('area-analysis-content'); // For future use
    // const questionReviewContentDiv = document.getElementById('question-review-content'); // For future use
    const currentYearSpan = document.getElementById('current-year');

    // --- Update dynamic content like current year ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Event Listeners ---
    if (backToDashboardButton) {
        backToDashboardButton.addEventListener('click', () => {
            // Ajuste o caminho conforme necessário para voltar ao dashboard principal de simulados
            window.location.href = '../Dashboard/Dashboard-Simulation.html';
        });
    }

    // --- Load Report Data ---
    loadReportData();

}); // End of DOMContentLoaded

/**
 * Retrieves the selected language from localStorage or defaults to 'en'.
 * @returns {string} The current language code.
 */
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

/**
 * Returns the translation function for the performance report page.
 * @param {string} lang - The current language code.
 * @returns {function(string): string} A function that takes a key and returns the translated string.
 */
function getPerformanceReportTranslations(lang) {
    const translations = {
        en: {
            "report_title": "Performance Report | BrainboxMed",
            "back_to_dashboard_text": "Back to Dashboard",
            "performance_report_main_title": "Performance Report",
            "overall_summary_title": "Overall Summary",
            "area_analysis_title": "Detailed Area Analysis",
            "question_review_title": "Question Review",
            "label_accuracy": "Accuracy:",
            "label_total_questions": "Total Questions:",
            "label_answered_questions": "Answered:",
            "label_correct_answers": "Correct:",
            "label_incorrect_answers": "Incorrect:",
            "label_allotted_duration": "Allotted Duration:",
            "label_time_taken": "Time Taken:",
            "label_area_name": "Area",
            "label_total_short": "Total",
            "label_correct_short": "Correct",
            "label_accuracy_short": "Accuracy",
            "loading_report_data": "Loading report data...",
            "level_analysis_title": "Performance by Difficulty Level",
            "label_level_name": "Level",
            "label_lower_performance": "Lower",
            "label_borderline_performance": "Borderline",
            "label_higher_performance": "Higher",
            "no_area_specific_data_to_display": "No area-specific data to display for the graph.",
            "no_difficulty_specific_data_to_display": "No difficulty-specific data to display.",
            "easy": "Easy",
            "moderate": "Moderate",
            "hard": "Hard",
            "very_hard": "Very Hard",
            "cardio": "Cardiology",
            "cardio+icu": "Cardiology-ICU",
            "icu": "Intensive Care Unit",
            "medicine": "Medicine",
            "neuro": "Neurology",
            "neuro+icu": "Neurology-ICU",
            "pneumo": "Pulmonology",
            "pneumo+icu": "Pulmonology-ICU",
            "nephro": "Nephrology",
            "nephro+icu": "Nephrology-ICU",
            "vent": "Mechanical Ventilation",
            "rrt": "Renal Replacement Therapy",

        },
        pt: {
            "report_title": "Relatório de Performance | BrainboxMed",
            "back_to_dashboard_text": "Voltar ao Dashboard",
            "performance_report_main_title": "Relatório de Performance",
            "overall_summary_title": "Resumo Geral",
            "area_analysis_title": "Análise Detalhada por Área",
            "question_review_title": "Revisão das Questões",
            "label_accuracy": "Precisão:",
            "label_total_questions": "Total de Questões:",
            "label_answered_questions": "Respondidas:",
            "label_correct_answers": "Corretas:",
            "label_incorrect_answers": "Incorretas:",
            "label_allotted_duration": "Duração Prevista:",
            "label_time_taken": "Tempo Utilizado:",
            "label_area_name": "Área",
            "label_total_short": "Total",
            "label_correct_short": "Corretas",
            "label_accuracy_short": "Precisão",
            "loading_report_data": "Carregando dados do relatório...",
            "level_analysis_title": "Desempenho por Nível de Dificuldade",
            "label_level_name": "Nível",
            "label_lower_performance": "Inferior",
            "label_borderline_performance": "Limítrofe",
            "label_higher_performance": "Superior",
            "no_area_specific_data_to_display": "Sem dados específicos por área para exibir no gráfico.",
            "no_difficulty_specific_data_to_display": "Sem dados específicos por dificuldade para exibir.",
            "easy": "Fácil",
            "moderate": "Médio",
            "hard": "Difícil",
            "very_hard": "Muito Difícil",
            "cardio": "Cardiologia",
            "cardio+icu": "UTI-Cardiologia",
            "icu": "UTI",
            "medicine": "Medicina Interna",
            "neuro": "Neurologia",
            "neuro+icu": "UTI-Neurologia",
            "pneumo": "Pneumologia",
            "pneumo+icu": "UTI-Pneumologia",
            "nephro": "Nefrologia",
            "nephro+icu": "UTI-Nefrologia",
            "vent": "Ventilação Mecânica",
            "rrt": "Terapia Renal Substitutiva",

        },
        es: {
            "report_title": "Informe de Rendimiento | BrainboxMed",
            "back_to_dashboard_text": "Volver al Panel",
            "performance_report_main_title": "Informe de Rendimiento",
            "overall_summary_title": "Resumen General",
            "area_analysis_title": "Análisis Detallado por Área",
            "question_review_title": "Revisión de Preguntas",
            "label_accuracy": "Precisión:",
            "label_total_questions": "Total de Preguntas:",
            "label_answered_questions": "Respondidas:",
            "label_correct_answers": "Correctas:",
            "label_incorrect_answers": "Incorrectas:",
            "label_allotted_duration": "Duración Prevista:",
            "label_time_taken": "Tiempo Utilizado:",
            "label_area_name": "Área",
            "label_total_short": "Total",
            "label_correct_short": "Correctas",
            "label_accuracy_short": "Precisión",
            "loading_report_data": "Cargando datos del informe...",
            "level_analysis_title": "Rendimiento por Nivel de Dificultad",
            "label_level_name": "Nivel",
            "label_lower_performance": "Inferior",
            "label_borderline_performance": "Límite",
            "label_higher_performance": "Superior",
            "no_area_specific_data_to_display": "No hay datos específicos por área para mostrar en el gráfico.",
            "no_difficulty_specific_data_to_display": "No hay datos específicos por dificultad para mostrar.",
            "easy": "Fácil",
            "moderate": "Medio",
            "hard": "Difícil",
            "very_hard": "Muy Difícil",
            "cardio": "Cardiología",
            "cardio+icu": "UCI-Cardiología",
            "icu": "Unidad de Cuidados Intensivos",
            "medicine": "Medicina Interna",
            "neuro": "Neurología",
            "neuro+icu": "UCI-Neurología",
            "pneumo": "Neumología",
            "pneumo+icu": "UCI-Neumología",
            "nephro": "Nefrología",
            "nephro+icu": "UCI-Nefrología",
            "vent": "Ventilación Mecánica",
            "rrt": "Terapia de Reemplazo Renal",

        }
    };
    return (key) => translations[lang]?.[key] || translations['en']?.[key] || key;
}

/**
 * Applies static translations to the page elements.
 * @param {function(string): string} translate - The translation function.
 */
function applyStaticTranslations(translate) {
    document.title = translate("report_title");
    const backButtonSpan = document.querySelector('#back-to-dashboard-button span');
    if (backButtonSpan) backButtonSpan.textContent = translate("back_to_dashboard_text");
    const mainTitle = document.querySelector('h1[data-i18n="performance_report_main_title"]');
    if (mainTitle) mainTitle.textContent = translate("performance_report_main_title");
    const overallSummaryTitle = document.querySelector('#overall-summary-section h2[data-i18n="overall_summary_title"]');
    if (overallSummaryTitle) overallSummaryTitle.textContent = translate("overall_summary_title");
    const areaAnalysisTitle = document.querySelector('#area-analysis-section h2[data-i18n="area_analysis_title"]');
    if (areaAnalysisTitle) areaAnalysisTitle.textContent = translate("area_analysis_title");
    const questionReviewTitle = document.querySelector('#question-review-section h2[data-i18n="question_review_title"]');
    if (questionReviewTitle) questionReviewTitle.textContent = translate("question_review_title");
    const levelAnalysisTitle = document.querySelector('#level-analysis-section h2[data-i18n="level_analysis_title"]');
    if (levelAnalysisTitle) levelAnalysisTitle.textContent = translate("level_analysis_title");
}
function loadReportData() {
    console.log("loadReportData function called.");
    const overallSummaryContentDiv = document.getElementById('overall-summary-content');
    const reportUserInfoP = document.getElementById('report-user-info');
    const areaAnalysisSection = document.getElementById('area-analysis-section');
    const areaAnalysisContentDiv = document.getElementById('area-analysis-content');
    const levelAnalysisSection = document.getElementById('level-analysis-section');
    const levelAnalysisContentDiv = document.getElementById('level-analysis-content');
    const translate = getPerformanceReportTranslations(getCurrentLanguage());

    // Limpa o conteúdo anterior e mostra mensagem de carregamento
    if (reportUserInfoP) reportUserInfoP.innerHTML = "";
    if (overallSummaryContentDiv) {
        overallSummaryContentDiv.innerHTML = `<p class="text-gray-500">${translate("loading_report_data")}</p>`;
    }
    if (areaAnalysisContentDiv) areaAnalysisContentDiv.innerHTML = "";
    if (areaAnalysisSection) areaAnalysisSection.style.display = 'none';
    if (levelAnalysisContentDiv) levelAnalysisContentDiv.innerHTML = "";
    if (levelAnalysisSection) levelAnalysisSection.style.display = 'none';

    const resultString = localStorage.getItem('lastMockExamResult');

    if (!resultString) {
        console.error("loadReportData: No 'lastMockExamResult' found in localStorage.");
        if (overallSummaryContentDiv) {
            overallSummaryContentDiv.innerHTML = `<p class="text-red-500">Error: No mock exam result found to display.</p>`;
        }
        if (reportUserInfoP) {
            reportUserInfoP.innerHTML = `<p class="text-red-500">N/A</p>`;
        }
        return;
    }

    try {
        const resultData = JSON.parse(resultString);
        console.log("loadReportData: 'lastMockExamResult' parsed successfully:", resultData);

        // Popula informações do usuário e do teste (Passo 3.2)
        if (reportUserInfoP) {
            const userDetailsString = localStorage.getItem('userDetails');
            let userName = 'N/A';
            if (userDetailsString) {
                try {
                    const userDetails = JSON.parse(userDetailsString);
                    userName = userDetails.name || userDetails.username || 'User';
                } catch (e) {
                    console.error("loadReportData: Error parsing userDetails from localStorage", e);
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

        // Popula resumo geral do desempenho (Passo 3.3.2)
        if (overallSummaryContentDiv) {
            const accuracy = resultData.accuracy !== undefined ? `${resultData.accuracy}%` : 'N/A';
            const totalQuestions = resultData.totalQuestions || 'N/A';
            const answeredQuestions = resultData.answeredQuestions || 0;
            const correctAnswers = resultData.correctAnswers || 0;
            let incorrectAnswers = 'N/A';
            if (resultData.incorrectAnswers !== undefined) {
                incorrectAnswers = resultData.incorrectAnswers;
            } else if (resultData.answeredQuestions !== undefined && resultData.correctAnswers !== undefined) {
                incorrectAnswers = answeredQuestions - correctAnswers;
            }
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

        // Calcula estatísticas por área e nível (Passo 4.2.2 e 4.4)
        const areaStats = {};
        const levelStats = {};
        if (typeof questionBank === 'undefined' || typeof questionBank.getAllQuestions !== 'function') {
            console.error("loadReportData: questionBank is not available or getAllQuestions is not a function...");
            if (areaAnalysisSection) areaAnalysisSection.style.display = 'none';
            if (levelAnalysisSection) levelAnalysisSection.style.display = 'none';
        } else {
            const allQuestionsFromBank = questionBank.getAllQuestions();
            if (resultData.questions && Array.isArray(resultData.questions)) {
                resultData.questions.forEach(answeredQuestion => {
                    const fullQuestionData = allQuestionsFromBank.find(q => q.id === answeredQuestion.id);
                    if (fullQuestionData) {
                        const isCorrect = answeredQuestion.userAnswerIndex === answeredQuestion.correctOptionIndex;
                        if (fullQuestionData.areas && Array.isArray(fullQuestionData.areas)) {
                            fullQuestionData.areas.forEach(areaName => {
                                const normalizedAreaName = String(areaName).toLowerCase().trim();
                                if (!areaStats[normalizedAreaName]) {
                                    areaStats[normalizedAreaName] = { total: 0, correct: 0, accuracy: 0, originalName: areaName };
                                }
                                areaStats[normalizedAreaName].total++;
                                if (isCorrect) {
                                    areaStats[normalizedAreaName].correct++;
                                }
                            });
                        } else {
                            if (fullQuestionData && (!fullQuestionData.areas || !Array.isArray(fullQuestionData.areas))) {
                                console.warn(`loadReportData: 'areas' property missing or not an array for question ID ${answeredQuestion.id}`);
                            }
                        }
                        if (fullQuestionData.level) {
                            const levelName = String(fullQuestionData.level).toLowerCase().trim();
                            if (!levelStats[levelName]) {
                                levelStats[levelName] = { total: 0, correct: 0, accuracy: 0, originalName: fullQuestionData.level };
                            }
                            levelStats[levelName].total++;
                            if (isCorrect) {
                                levelStats[levelName].correct++;
                            }
                        } else {
                            console.warn(`loadReportData: 'level' property missing for question ID ${answeredQuestion.id}`);
                        }
                    } else {
                        console.warn(`loadReportData: Could not find full data for question ID ${answeredQuestion.id} in questionBank.`);
                    }
                });

                for (const area in areaStats) {
                    if (areaStats[area].total > 0) {
                        areaStats[area].accuracy = parseFloat(((areaStats[area].correct / areaStats[area].total) * 100).toFixed(1));
                    }
                }
                for (const level in levelStats) {
                    if (levelStats[level].total > 0) {
                        levelStats[level].accuracy = parseFloat(((levelStats[level].correct / levelStats[level].total) * 100).toFixed(1));
                    }
                }
                console.log("loadReportData: Calculated Area Statistics:", areaStats);
                console.log("loadReportData: Calculated Level Statistics:", levelStats);

                // Exibe gráfico de performance por área (Passo 4.6.2)
                if (areaAnalysisSection && areaAnalysisContentDiv) {
                    if (Object.keys(areaStats).length > 0) {
                        areaAnalysisSection.style.display = 'block';
                        areaAnalysisContentDiv.innerHTML = ''; 
                        const chartContainer = document.createElement('div');
                        chartContainer.className = 'area-performance-chart';
                        const BORDERLINE_PERCENTAGE = 70;
                        const legendDiv = document.createElement('div');
                        legendDiv.className = 'graph-legend';
                        legendDiv.innerHTML = `
                            <span class="legend-lower">${translate("label_lower_performance")}</span>
                            <span class="legend-borderline">${translate("label_borderline_performance")}</span>
                            <span class="legend-higher">${translate("label_higher_performance")}</span>
                        `;
                        chartContainer.appendChild(legendDiv);
                        for (const areaKey in areaStats) {
                            const stat = areaStats[areaKey];
                            const areaNameTranslated = translate(areaKey);
                            const rowDiv = document.createElement('div');
                            rowDiv.className = 'area-row';
                            const nameLabelSpan = document.createElement('span');
                            nameLabelSpan.className = 'area-name-label';
                            nameLabelSpan.textContent = areaNameTranslated;
                            const barGraphContainerDiv = document.createElement('div');
                            barGraphContainerDiv.className = 'bar-graph-container';
                            const performanceBarDiv = document.createElement('div');
                            performanceBarDiv.className = 'performance-actual-bar';
                            performanceBarDiv.style.width = `${stat.accuracy}%`;
                            if (stat.accuracy < BORDERLINE_PERCENTAGE - 15) {
                                performanceBarDiv.style.backgroundColor = '#ef4444'; // red-500
                            } else if (stat.accuracy > BORDERLINE_PERCENTAGE + 15) {
                                performanceBarDiv.style.backgroundColor = '#22c55e'; // green-500
                            } else {
                                performanceBarDiv.style.backgroundColor = '#f59e0b'; // amber-500
                            }
                            const borderlineMarkerDiv = document.createElement('div');
                            borderlineMarkerDiv.className = 'borderline-marker-line';
                            borderlineMarkerDiv.style.left = `${BORDERLINE_PERCENTAGE}%`;
                            barGraphContainerDiv.appendChild(performanceBarDiv);
                            barGraphContainerDiv.appendChild(borderlineMarkerDiv);
                            const accuracyValueSpan = document.createElement('span');
                            accuracyValueSpan.className = 'area-accuracy-value';
                            accuracyValueSpan.textContent = `${stat.accuracy}%`;
                            rowDiv.appendChild(nameLabelSpan);
                            rowDiv.appendChild(barGraphContainerDiv);
                            rowDiv.appendChild(accuracyValueSpan);
                            chartContainer.appendChild(rowDiv);
                        }
                        areaAnalysisContentDiv.appendChild(chartContainer);
                    } else {
                        areaAnalysisContentDiv.innerHTML = `<p class="text-gray-500">${translate("no_area_specific_data_to_display")}</p>`;
                        if (areaAnalysisSection) areaAnalysisSection.style.display = 'block';
                    }
                } else {
                    console.error("loadReportData: Could not find 'area-analysis-section' or 'area-analysis-content' divs for graph.");
                }

                // --- SUBSTITUIÇÃO DO BLOCO DE EXIBIÇÃO DE levelStats ---
                // O bloco antigo que exibia levelStats como lista foi REMOVIDO.
                // NOVO CÓDIGO PARA GERAR O GRÁFICO DE NÍVEIS DE DIFICULDADE (Passo 4.7.2):
                if (levelAnalysisSection && levelAnalysisContentDiv) {
                    if (Object.keys(levelStats).length > 0) {
                        levelAnalysisSection.style.display = 'block';
                        levelAnalysisContentDiv.innerHTML = ''; // Limpa conteúdo anterior

                        const levelChartContainer = document.createElement('div');
                        levelChartContainer.className = 'level-performance-chart'; // CSS do Passo 4.7.1

                        // Define uma ordem desejada para os níveis (opcional, mas bom para consistência)
                        const desiredLevelOrder = ['easy', 'medium', 'hard']; // Adicione outros níveis se houver
                        const levelsToDisplay = desiredLevelOrder.filter(levelKey => levelStats[levelKey]);
                        
                        // Adicione quaisquer outros níveis que possam existir e não estão na ordem desejada
                        for (const levelKey in levelStats) {
                            if (!desiredLevelOrder.includes(levelKey)) {
                                levelsToDisplay.push(levelKey);
                            }
                        }


                        levelsToDisplay.forEach(levelKey => {
                            const stat = levelStats[levelKey];
                            const levelNameTranslated = translate(levelKey); // Traduz o nome do nível

                            const rowDiv = document.createElement('div');
                            rowDiv.className = 'level-row'; // CSS do Passo 4.7.1

                            const nameLabelSpan = document.createElement('span');
                            nameLabelSpan.className = 'level-name-label'; // CSS do Passo 4.7.1
                            nameLabelSpan.textContent = levelNameTranslated;

                            const barContainerDiv = document.createElement('div');
                            barContainerDiv.className = 'level-bar-container'; // CSS do Passo 4.7.1

                            const accuracyBarDiv = document.createElement('div');
                            accuracyBarDiv.className = 'level-accuracy-bar'; // CSS do Passo 4.7.1
                            accuracyBarDiv.style.width = `${stat.accuracy}%`;
                            // Adiciona o texto da acurácia dentro da barra (opcional)
                            // Se a barra for muito pequena, o texto pode não caber bem.
                            // accuracyBarDiv.textContent = `${stat.accuracy}%`; 

                            barContainerDiv.appendChild(accuracyBarDiv);

                            const accuracyValueSpan = document.createElement('span');
                            accuracyValueSpan.className = 'level-accuracy-value-outside'; // CSS do Passo 4.7.1
                            accuracyValueSpan.textContent = `${stat.accuracy}%`;
                            
                            rowDiv.appendChild(nameLabelSpan);
                            rowDiv.appendChild(barContainerDiv);
                            rowDiv.appendChild(accuracyValueSpan); // Adiciona valor fora da barra

                            levelChartContainer.appendChild(rowDiv);
                        });
                        levelAnalysisContentDiv.appendChild(levelChartContainer);

                    } else {
                        levelAnalysisContentDiv.innerHTML = `<p class="text-gray-500">${translate("no_difficulty_specific_data_to_display")}</p>`; // Nova chave de tradução
                        if (levelAnalysisSection) levelAnalysisSection.style.display = 'block';
                    }
                } else {
                    console.error("loadReportData: Could not find 'level-analysis-section' or 'level-analysis-content' divs for difficulty graph.");
                }
                // --- FIM DA SUBSTITUIÇÃO ---

            } else {
                console.error("loadReportData: resultData.questions is missing or not an array.");
                if (areaAnalysisSection) areaAnalysisSection.style.display = 'none';
                if (levelAnalysisSection) levelAnalysisSection.style.display = 'none';
            }
        } // Fim do else (onde questionBank foi encontrado)

    } catch (error) {
        console.error("loadReportData: Error processing results:", error);
        if (overallSummaryContentDiv) {
            overallSummaryContentDiv.innerHTML = `<p class="text-red-500">Error: Could not load report data.</p>`;
        }
        if (reportUserInfoP) {
            reportUserInfoP.innerHTML = `<p class="text-red-500">Error loading data</p>`;
        }
        if (areaAnalysisSection) areaAnalysisSection.style.display = 'none';
        if (levelAnalysisSection) levelAnalysisSection.style.display = 'none';
    }
}
