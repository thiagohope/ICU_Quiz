// demo-quiz.js
console.log("demo-quiz.js LOADED - Initializing quiz logic.");
let currentIndex = 0;
let userAnswers = {}; // { questionId: selectedOption }
let markedForReview = new Set(); // Armazena IDs de perguntas marcadas para revisão
let answeredQuestions = new Set(); // Armazena IDs de perguntas respondidas
let justReviewed = false; // Flag para controlar o fluxo após o modo de revisão

// Função para obter o idioma atual de forma centralizada
function getCurrentLanguage() {
  return localStorage.getItem("selectedLanguage") || "en";
}

// Função para exibir notificações 
function showNotification(message, type = "info") {
  const notificationArea = document.getElementById("notification-area");
  if (!notificationArea) {
    console.warn("Área de notificação (notification-area) não encontrada. Usando console.log para: " + message);
    return;
  }

  const notification = document.createElement("div");
  notification.className = `p-3 mb-4 rounded-md text-sm shadow-md ${
    type === "success" ? "bg-green-100 text-green-700 border border-green-300" : 
    type === "error" ? "bg-red-100 text-red-700 border border-red-300" : 
    "bg-blue-100 text-blue-700 border border-blue-300" // info
  }`;
  notification.textContent = message;
  
  notificationArea.innerHTML = ''; 
  notificationArea.appendChild(notification);

  setTimeout(() => {
    if (notificationArea.contains(notification)) {
        notificationArea.removeChild(notification);
    }
  }, 3000);
}


// Objeto de traduções da interface
function getTranslations() {
  const lang = getCurrentLanguage();
  const t = {
    "Question": { en: "Question", pt: "Questão", es: "Pregunta" },
    "Next": { en: "Next", pt: "Próxima", es: "Siguiente" },
    "Previous": { en: "Previous", pt: "Anterior", es: "Anterior" },
    "Mark for Review": { en: "Mark for Review", pt: "Marcar para revisão", es: "Marcar para revisar" },
    "Unmark Review": { en: "Unmark Review", pt: "Desmarcar revisão", es: "Desmarcar revisión" },
    "Review": { en: "Review", pt: "Revisão", es: "Revisión" },
    "Questions": { en: "Questions", pt: "Questões", es: "Preguntas" },
    "Continue": { en: "Continue", pt: "Continuar", es: "Continuar" },
    "Final Results": { en: "Final Results", pt: "Resultado Final", es: "Resultados Finales" },
    "Correct": { en: "Correct", pt: "Corretas", es: "Correctas" },
    "Incorrect": { en: "Incorrect", pt: "Incorretas", es: "Incorrectas" },
    "Unanswered": { en: "Unanswered", pt: "Não respondidas", es: "Sin responder" },
    "Your Score": { en: "Your Score", pt: "Seu Desempenho", es: "Tu Puntaje" },
    "Explanation": { en: "Explanation", pt: "Explicação", es: "Explicación" },
    "Try Full Access": { en: "Try Full Access", pt: "Experimente o Acesso Completo", es: "Prueba el Acceso Completo" },
    "Unlock premium features like detailed analytics, topic filters, music and simulations.": {
      en: "Unlock premium features like detailed analytics, topic filters, music and simulations.",
      pt: "Desbloqueie recursos premium como análises detalhadas, filtros por tema, música e simulações.",
      es: "Desbloquea funciones premium como analíticas detalladas, filtros por tema, música y simulaciones."
    },
    "Please select an answer or mark for review.": { 
      en: "Please select an answer or mark for review.",
      pt: "Selecione uma resposta ou marque para revisão.",
      es: "Seleccione una respuesta o márquela para revisión."
    },
    "Marked for review": {
        en: "Marked for review",
        pt: "Marcada para revisão",
        es: "Marcada para revisar"
    },
    "Unmarked for review": {
        en: "Unmarked for review",
        pt: "Revisão desmarcada",
        es: "Revisión desmarcada"
    }
  };
  return (term) => t[term]?.[lang] || term; 
}

// Função para obter a tradução da etiqueta de dificuldade
function getDifficultyLabel(level) {
  const lang = getCurrentLanguage();
  const labels = {
    easy: { en: "Easy", pt: "Fácil", es: "Fácil" },
    moderate: { en: "Moderate", pt: "Moderada", es: "Moderada" },
    hard: { en: "Hard", pt: "Difícil", es: "Difícil" },
    very_hard: { en: "Very Hard", pt: "Muito Difícil", es: "Muy Difícil" }
  };
  return labels[level]?.[lang] || level;
}

// Renderiza a pergunta atual no container
function renderQuestion(index) {
  const lang = getCurrentLanguage();
  const translate = getTranslations(); 
  const container = document.getElementById("question-container");
  
  if (!document.getElementById("notification-area") && container) {
    const notificationDiv = document.createElement("div");
    notificationDiv.id = "notification-area";
    notificationDiv.className = "mb-4"; 
    container.parentNode.insertBefore(notificationDiv, container);
  }

  if (!container || !demoQuestionBank || index < 0 || index >= demoQuestionBank.length) {
    console.error("Erro ao renderizar pergunta: container ou dados da pergunta inválidos.");
    container.innerHTML = `<p class='text-red-600 p-4'>${translate("Error loading question data.")}</p>`; // Mensagem de erro traduzível
    return;
  }
  const q = demoQuestionBank[index];

  let featureNotice = "";
  if (q.featurePreview) { 
    switch(q.featurePreview) {
        case "filter_topic":
             featureNotice = `
              <div class="bg-blue-50 text-blue-800 text-sm p-3 rounded-md mb-4 border border-blue-200 shadow">
                🎯 <strong>Filter by Area & Topic</strong> is available with the <em>Focused Plan</em>. (Exemplo com featurePreview)
              </div>`;
            break;
        case "performance_analytics":
            const totalAnsweredForFeature = Object.keys(userAnswers).length; // Renomeado para evitar conflito
            featureNotice = `
              <div class="bg-green-50 text-green-800 text-sm p-3 rounded-md border border-green-200 mb-4 shadow">
                📊 <strong>Performance Analytics</strong> will be available after this quiz in the <em>Focused Plan</em>. (Exemplo com featurePreview)
              </div>`;
            if (totalAnsweredForFeature >= 5) { 
              const progressPercentage = Math.min(100, (totalAnsweredForFeature / 5) * 100); 
              featureNotice += `
                <div class="bg-white border border-gray-200 shadow rounded-md mt-4 p-4">
                  <p class="text-xs text-gray-500 mb-2">Preview - Your current performance</p>
                  <div class="h-2.5 bg-purple-200 rounded-full">
                    <div class="w-[${progressPercentage}%] h-2.5 bg-purple-600 rounded-full transition-all duration-500 ease-out"></div>
                  </div>
                  <p class="text-xs text-gray-400 mt-1 italic">Full analytics available in Focused Plan</p>
                </div>`;
            }
            break;
    }
  }

  const isMarked = markedForReview.has(q.id);
  const markReviewText = isMarked ? translate("Unmark Review") : translate("Mark for Review");
  const markReviewClass = isMarked ? "text-red-600 hover:underline" : "text-yellow-600 hover:underline";

  //Advertisement
  const adPlaceholderVisual = `<div class="ad-placeholder-content text-xs text-gray-400 p-2">${translate("advertisement_placeholder_text")}</div>`;

  let html = `
  ${featureNotice}
  <div id="ad-slot-demo-top" class="my-4 text-center bg-gray-100 min-h-[60px] flex items-center justify-center border border-dashed border-gray-300 overflow-hidden">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1111111111"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    ${adPlaceholderVisual}
  </div>

    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-purple-700">${translate("Question")} ${index + 1} / ${demoQuestionBank.length}</h2>
      <span class="difficulty ${q.level.replace('_', '-')}" id="difficulty-label">${getDifficultyLabel(q.level)}</span>
    </div>
    <p class="mb-6 text-gray-700 font-medium text-base">${q.question[lang]}</p>
    <form id="question-form" class="space-y-3">
  `;

  q.options.forEach((opt, i) => {
    const checked = userAnswers[q.id] === i ? "checked" : "";
    html += `
      <label class="block p-4 rounded-lg border border-gray-300 hover:bg-purple-50 hover:border-purple-400 cursor-pointer transition-colors duration-150 has-[:checked]:bg-purple-50 has-[:checked]:border-purple-500">
        <input type="radio" name="answer" value="${i}" class="mr-3 h-4 w-4 transform scale-125 accent-purple-600 focus:ring-purple-500" ${checked}> 
        <span class="text-gray-800">${opt.text[lang]}</span>
      </label>`;
  });

  html += `
    </form>
    <div id="ad-slot-demo-bottom" class="my-6 text-center bg-gray-100 min-h-[60px] flex items-center justify-center border border-dashed border-gray-300 overflow-hidden">
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="2222222222"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        ${adPlaceholderVisual}
    </div>

    <div class="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
      <button type="button" id="mark-review-btn" class="text-sm font-medium ${markReviewClass} mb-3 sm:mb-0 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
        🔖 ${markReviewText}
      </button>
      <div class="flex gap-x-3">
        <button type="button" id="prev-btn" class="px-6 py-2.5 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" ${index === 0 ? 'disabled' : ''}>
          ⬅️ ${translate("Previous")}
        </button>
        <button type="button" id="next-btn" class="px-6 py-2.5 text-sm font-medium bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:ring-4 focus:ring-purple-300">
          ${translate("Next")} ➡️
        </button>
      </div>
    </div>
    `;

  container.innerHTML = html;

  setTimeout(() => {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.warn("Adsbygoogle failed to load:", e);
  }
}, 100); // pequeno delay para garantir que os <ins> estejam no DOM

  setupFormEventListeners(index);
  window.scrollTo(0, 0);
  console.log("Scrolled to top after rendering question.");

}

// Configura os event listeners para o formulário da pergunta atual
function setupFormEventListeners(index) {
  const form = document.getElementById("question-form");
  const nextButton = document.getElementById("next-btn"); 
  const prevButton = document.getElementById("prev-btn");
  const markReviewButton = document.getElementById("mark-review-btn");
  const translate = getTranslations();

  const q = demoQuestionBank[index];

  if (!form || !nextButton || !prevButton || !markReviewButton) {
    console.error("Erro ao configurar listeners: um ou mais elementos do formulário não encontrados.");
    return;
  }

  const handleSubmit = () => {
    const selectedOption = form.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption && !markedForReview.has(q.id)) {
      showNotification(translate("Please select an answer or mark for review."), "error");
      return;
    }

    if (selectedOption) {
      userAnswers[q.id] = parseInt(selectedOption.value);
      answeredQuestions.add(q.id); 
    }
    moveToNextQuestion();
  };

  nextButton.addEventListener("click", handleSubmit);

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentIndex);
    }
  });
  // prevButton.disabled = index === 0; // Re-enabled/disabled in renderQuestion

  markReviewButton.addEventListener("click", () => {
    if (markedForReview.has(q.id)) {
        markedForReview.delete(q.id);
        showNotification(translate("Unmarked for review"), "info");
    } else {
        markedForReview.add(q.id);
        showNotification(translate("Marked for review") + " ✅", "success");
    }
    const isMarked = markedForReview.has(q.id);
    markReviewButton.innerHTML = `🔖 ${isMarked ? translate("Unmark Review") : translate("Mark for Review")}`; // Use innerHTML for emoji
    markReviewButton.className = `text-sm font-medium mb-3 sm:mb-0 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors ${isMarked ? "text-red-600 hover:underline" : "text-yellow-600 hover:underline"}`;
  });
}

// Move para a próxima pergunta ou estado do quiz
function moveToNextQuestion() {
  const totalQuestions = demoQuestionBank.length;
  const answeredCount = answeredQuestions.size;

  // Condição para mostrar revisão a cada 10 perguntas respondidas
  // E também se não acabou de sair de uma revisão (evita loop)
  // E se ainda há perguntas pela frente
  if (answeredCount > 0 && (answeredCount % 10 === 0) && !justReviewed && answeredCount < totalQuestions) {
    showReviewMode();
    return;
  }
  
  justReviewed = false; // Reseta a flag aqui, após a checagem da revisão

  // Lógica para encontrar a próxima pergunta não respondida
  let nextQuestionFound = false;
  for (let i = currentIndex + 1; i < totalQuestions; i++) {
    if (!answeredQuestions.has(demoQuestionBank[i].id) || markedForReview.has(demoQuestionBank[i].id)) { // Prioriza não respondidas ou marcadas
      currentIndex = i;
      renderQuestion(currentIndex);
      nextQuestionFound = true;
      return;
    }
  }
   // Se não encontrou para a frente, tenta do início
  if (!nextQuestionFound) {
    for (let i = 0; i < totalQuestions; i++) {
        if (!answeredQuestions.has(demoQuestionBank[i].id) || markedForReview.has(demoQuestionBank[i].id)) {
            currentIndex = i;
            renderQuestion(currentIndex);
            nextQuestionFound = true;
            return;
        }
    }
  }
  
  // Se todas as perguntas foram respondidas ou não há mais para onde ir
  if (answeredCount === totalQuestions || !nextQuestionFound) {
    showFinalAnalytics();
  }
}

// Mostra o modo de revisão para um bloco de perguntas
function showReviewMode() {
  const lang = getCurrentLanguage();
  const translate = getTranslations();
  const container = document.getElementById("question-container");

  // Determina o bloco de perguntas para revisão (as últimas 10 respondidas ou todas desde o início se menos de 10)
  const answeredCount = answeredQuestions.size;
  const blockStart = Math.max(0, answeredCount - 10); // Começa das últimas 10 respondidas
  
  // Pega os IDs das perguntas respondidas, ordena pela ordem original do banco de questões
  // e depois pega o slice relevante para a revisão.
  const answeredQuestionIds = Array.from(answeredQuestions);
  const questionsForReviewBlock = demoQuestionBank.filter(q => answeredQuestionIds.includes(q.id))
                                          .sort((a,b) => demoQuestionBank.findIndex(item => item.id === a.id) - demoQuestionBank.findIndex(item => item.id === b.id))
                                          .slice(blockStart, answeredCount);


  if (questionsForReviewBlock.length === 0) {
    console.warn("Nenhuma pergunta para revisar neste bloco.");
    continueAfterReview(); // Simplesmente continua se não houver nada para revisar
    return;
  }
  
  const firstQuestionNumberOfBlock = demoQuestionBank.findIndex(q => q.id === questionsForReviewBlock[0].id) + 1;
  const lastQuestionNumberOfBlock = demoQuestionBank.findIndex(q => q.id === questionsForReviewBlock[questionsForReviewBlock.length - 1].id) + 1;


  let html = `<div class="p-6 bg-white shadow-xl rounded-xl">
    <h2 class="text-2xl font-bold text-purple-700 mb-8 text-center">${translate("Review")}: ${translate("Questions")} ${firstQuestionNumberOfBlock}–${lastQuestionNumberOfBlock}</h2>`;

  questionsForReviewBlock.forEach((q) => {
    const originalQuestionIndex = demoQuestionBank.findIndex(item => item.id === q.id); // Para obter o número correto da pergunta
    const questionNumber = originalQuestionIndex + 1;
    const userAnswerIndex = userAnswers[q.id]; // Resposta do utilizador para esta pergunta q.id
    const isAnswered = userAnswerIndex !== undefined;
    
    html += `<div class="mb-8 p-5 border border-gray-200 rounded-lg shadow-md bg-gray-50/50">
      <p class="font-semibold text-gray-800 mb-1 text-lg">${translate("Question")} ${questionNumber}</p>
      <p class="text-gray-700 mb-5 text-base">${q.question[lang]}</p>`;

    q.options.forEach((opt, i) => {
      const isThisOptionCorrect = q.correct === i;
      const isThisOptionSelectedByPlayer = userAnswerIndex === i;

      let optionClasses = "relative p-3 mb-2 rounded-md border text-sm transition-all duration-150 "; // Adicionado 'relative' para o pseudo-elemento
      let indicatorHtml = "";

      if (isThisOptionCorrect) {
        // Quadrado azul translúcido para a correta
        optionClasses += "border-blue-500 bg-blue-50 ring-2 ring-blue-300 ring-offset-1 ";
        indicatorHtml = `<span class="absolute top-1 right-1 text-xs font-bold text-blue-600">✔️ ${translate("Correct")}</span>`; 
      } else if (isThisOptionSelectedByPlayer && !isThisOptionCorrect) {
        // Quadrado vermelho translúcido para a selecionada incorreta
        optionClasses += "border-red-500 bg-red-50 ring-2 ring-red-300 ring-offset-1 ";
         indicatorHtml = `<span class="absolute top-1 right-1 text-xs font-bold text-red-600">❌ ${translate("Your Answer")}</span>`;
      } else {
        optionClasses += "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
      }
      
      html += `<div class="${optionClasses}">
                <p class="pr-16">${opt.text[lang]}</p> ${indicatorHtml}
              </div>`;
    });

    // Explicação sempre visível na revisão
    if (q.options[q.correct] && q.options[q.correct].explanation && q.options[q.correct].explanation[lang]) {
        html += `<div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
                    <strong class="font-semibold">${translate("Explanation")}:</strong> ${q.options[q.correct].explanation[lang]}
                 </div>`;
    }
    html += `</div>`; // Fecha o div da pergunta
  });

  html += `<div class="text-center mt-10">
    <button id="continue-quiz-btn" class="bg-purple-600 text-white px-10 py-3 rounded-lg hover:bg-purple-700 transition-colors text-base font-semibold shadow-md focus:ring-4 focus:ring-purple-300">
      ✅ ${translate("Continue")}
    </button>
  </div></div>`; // Fecha o div principal da revisão

  container.innerHTML = html;
  document.getElementById("continue-quiz-btn").addEventListener("click", continueAfterReview);
}

// Chamada após o utilizador clicar em "Continuar" no modo de revisão
function continueAfterReview() {
  justReviewed = true;
  // Tenta encontrar a próxima pergunta não respondida, começando do início
  let nextUnansweredFound = false;
  for (let i = 0; i < demoQuestionBank.length; i++) {
    if (!answeredQuestions.has(demoQuestionBank[i].id)) {
      currentIndex = i;
      renderQuestion(currentIndex);
      nextUnansweredFound = true;
      return;
    }
  }
  // Se todas foram respondidas, vai para os resultados finais
  if (!nextUnansweredFound) {
    showFinalAnalytics();
  }
}

// Mostra a análise final do quiz
function showFinalAnalytics() {
  const lang = getCurrentLanguage();
  const translate = getTranslations();
  const container = document.getElementById("question-container");
  const total = demoQuestionBank.length;
  let correctCount = 0;
  let incorrectCount = 0;
  
  demoQuestionBank.forEach(q => {
    const userAnswer = userAnswers[q.id];
    if (userAnswer !== undefined) { 
      if (userAnswer === q.correct) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
  });
  const unansweredCount = total - (correctCount + incorrectCount);
  const scorePercentage = total > 0 ? (correctCount / total) * 100 : 0;

  let html = `
    <div class="p-6 md:p-8 bg-white shadow-xl rounded-xl text-center">
      <h2 class="text-3xl font-bold text-purple-700 mb-8">${translate("Final Results")}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg mb-10">
        <div class="p-4 bg-green-50 rounded-lg border border-green-200"><span class="font-semibold text-green-700">${correctCount}</span> ${translate("Correct")} ✅</div>
        <div class="p-4 bg-red-50 rounded-lg border border-red-200"><span class="font-semibold text-red-700">${incorrectCount}</span> ${translate("Incorrect")} ❌</div>
        <div class="p-4 bg-gray-100 rounded-lg border border-gray-200"><span class="font-semibold text-gray-700">${unansweredCount}</span> ${translate("Unanswered")} ⏳</div>
      </div>
      <div class="mb-10">
        <p class="text-gray-800 font-semibold text-xl mb-2">${translate("Your Score")}:</p>
        <div class="w-full h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div class="h-5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-700 ease-out flex items-center justify-center text-white text-sm font-medium" style="width: ${scorePercentage.toFixed(2)}%">
             ${scorePercentage.toFixed(0)}%
          </div>
        </div>
      </div>
      <div class="bg-yellow-50 p-6 border border-yellow-300 rounded-xl shadow-md">
        <p class="text-yellow-800 font-semibold text-xl mb-3">✨ ${translate("Try Full Access")}</p>
        <p class="text-sm text-yellow-700 mb-5">${translate("Unlock premium features like detailed analytics, topic filters, music and simulations.")}</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-3">
          <a href="plan-focused.html" class="w-full sm:w-auto bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow hover:shadow-md">🎯 Focused</a>
          <a href="plan-focusedpro.html" class="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow hover:shadow-md">🎵 Focused Pro</a>
          <a href="plan-pro.html" class="w-full sm:w-auto bg-gray-700 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium shadow hover:shadow-md">⏱️ Pro Simulation</a>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

// Inicializa o quiz quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  console.log("Scrolled to top after rendering question.");

  if (typeof demoQuestionBank !== 'undefined' && demoQuestionBank && demoQuestionBank.length > 0) {
    renderQuestion(currentIndex);
  } else {
    const container = document.getElementById("question-container");
    const translate = getTranslations(); // Para traduzir a mensagem de erro
    if (container) {
        container.innerHTML = `<p class='text-red-500 p-4'>${translate("Error: Question bank not found or empty.")}</p>`;
    }
    console.error("Banco de questões (demoQuestionBank) não está definido ou está vazio.");
  }
});
