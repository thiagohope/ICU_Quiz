// dashboard-pro.js
document.addEventListener('DOMContentLoaded', () => {
    // Use o ID correto do seu botão no Dashboard-Pro.html
    // Se for "start-session-button" como no seu HTML, use-o aqui.
    const startButton = document.getElementById('start-session-button'); 
    const durationInput = document.getElementById('pro-duration-selector'); 
    const numQuestionsInput = document.getElementById('pro-num-questions-selector');
    const areaSelector = document.getElementById('area-selector-pro');

    // Tentativa de obter a função de tradução (adapte se necessário)
    let translate = (key) => key; // Fallback
    if (typeof getDashboardTranslations === 'function') { // Supondo que você possa ter uma função de tradução no dashboard
        translate = getDashboardTranslations();
    } else if (typeof getTranslations === 'function') { // Ou reusa a do quiz se for global
        translate = getTranslations();
    }

    function populateAreaSelector() {
        if (areaSelector && typeof questionBank !== 'undefined' && questionBank.getAllQuestions) { // [5]
            try {
                const allQuestions = questionBank.getAllQuestions(); // [5]
                let areas = [];
                if (allQuestions && allQuestions.length > 0) {
                    areas = [...new Set(allQuestions.flatMap(q => q.area || []).map(a => String(a).toLowerCase().trim()).filter(a => a))].sort();
                }

                areaSelector.innerHTML = ''; // Limpa opções anteriores

                // Adiciona a opção "All Areas" primeiro, se desejar
                const allAreasText = translate("all_areas_option_text") || "All Areas";
                areaSelector.options.add(new Option(allAreasText, "all")); // "all" como valor especial

                areas.forEach(area => {
                    if (area) {
                        const optionText = area.charAt(0).toUpperCase() + area.slice(1);
                        areaSelector.options.add(new Option(optionText, area));
                    }
                });
                console.log("Dashboard: Area selector populated with areas:", areas); // Inglês
            } catch (e) {
                console.error("Dashboard: Error populating area selector:", e); // Inglês
                areaSelector.options.add(new Option(translate("error_loading_areas") || "Error loading areas", ""));
            }
        } else if (areaSelector) {
            console.warn("Dashboard: questionBank not ready or areaSelector element not found."); // Inglês
            areaSelector.options.add(new Option(translate("areas_unavailable") || "Areas unavailable", ""));
        }
    }

    // Espera um pouco para o questionBank ser populado pelos scripts dos bancos de questões
    // Isso é uma simplificação; uma abordagem mais robusta usaria um callback ou Promise
    // após todos os bancos serem adicionados em banco-questoes.js [5].
    setTimeout(() => {
        if (typeof questionBank !== 'undefined') { // [5]
            populateAreaSelector();
        } else {
            console.error("Dashboard: questionBank is not defined after timeout. Areas cannot be populated."); // Inglês
             if(areaSelector) areaSelector.options.add(new Option("Area list unavailable (bank error)", ""));
        }
    }, 1000); // Aumente o delay se os bancos forem muitos ou grandes

    if (startButton && durationInput && numQuestionsInput && areaSelector) {
        startButton.addEventListener('click', () => {
            const duration = durationInput.value || '120'; 
            const numQuestions = numQuestionsInput.value || '50'; 

            const selectedOptions = Array.from(areaSelector.selectedOptions);
            let selectedAreasValues = selectedOptions.map(option => option.value.trim().toLowerCase());

            // Se "all" está selecionado, ou nada está selecionado, consideramos como todas as áreas
            // (não enviando o parâmetro 'areas' ou enviando 'areas=all' se preferir tratar no backend)
            let areasQueryParam = "";
            if (selectedAreasValues.length > 0 && !selectedAreasValues.includes("all")) {
                areasQueryParam = `&areas=${selectedAreasValues.filter(val => val !== "all").join(',')}`;
            } else if (selectedAreasValues.includes("all") && selectedAreasValues.length === 1) {
                // Opcional: se "all" for uma opção válida para passar para o backend/simulação
                // areasQueryParam = `&areas=all`; 
                // Por agora, se 'all' for selecionado sozinho, ou nada for, não enviaremos o parâmetro 'areas',
                // e pro-simulation.js tratará como "todas as áreas".
                console.log("Dashboard: 'All Areas' selected or no specific area, omitting 'areas' param for full scope."); // Inglês
            } else if (selectedAreasValues.length > 1 && selectedAreasValues.includes("all")) {
                // Se "all" for selecionado junto com outros, ignora "all" e usa os outros
                 areasQueryParam = `&areas=${selectedAreasValues.filter(val => val !== "all").join(',')}`;
            }


            // Ajuste o caminho para pro-simulation.html [1] conforme sua estrutura de pastas
            // Ex: se Dashboard-Pro.html está na raiz e pro-simulation.html [1] em Quiz/
            let quizUrl = `../Quiz/pro-simulation.html?duration=${duration}&num_questions=${numQuestions}`;
            if (areasQueryParam) {
                quizUrl += areasQueryParam;
            }

            console.log("Redirecting to Pro Simulation with URL:", quizUrl); // Inglês
            window.location.href = quizUrl;
        });
    } else {
        console.error("Dashboard: Error! Could not find one or more required elements for Pro Simulation setup on the dashboard page."); // Inglês
    }
});