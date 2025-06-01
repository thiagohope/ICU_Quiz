// user-dashboard.js

console.log("📊 user-dashboard.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("selectedLanguage") || "en";

  const translations = {
    en: {
      logout: "Logout",
      stats_title: "Your Statistics",
      stats_study_hours_label: "Study Hours",
      stats_answered_label: "Questions Answered",
      stats_accuracy_label: "Overall Accuracy",
      stats_correct_label: "Correct",
      stats_incorrect_label: "Incorrect",
      stats_by_area_title: "Performance by Area",
      quiz_controls_title_focused: "Customize Your Study Session",
      start_session_button_text: "Start Session",
    },
    pt: {
      logout: "Sair",
      stats_title: "Suas Estatísticas",
      stats_study_hours_label: "Horas de Estudo",
      stats_answered_label: "Questões Respondidas",
      stats_accuracy_label: "Precisão Geral",
      stats_correct_label: "Corretas",
      stats_incorrect_label: "Incorretas",
      stats_by_area_title: "Desempenho por Área",
      quiz_controls_title_focused: "Personalize sua Sessão de Estudo",
      start_session_button_text: "Começar Sessão",
    },
    es: {
      logout: "Cerrar sesión",
      stats_title: "Tus Estadísticas",
      stats_study_hours_label: "Horas de Estudio",
      stats_answered_label: "Preguntas Respondidas",
      stats_accuracy_label: "Precisión General",
      stats_correct_label: "Correctas",
      stats_incorrect_label: "Incorrectas",
      stats_by_area_title: "Rendimiento por Área",
      quiz_controls_title_focused: "Personaliza tu Sesión de Estudio",
      start_session_button_text: "Iniciar Sesión",
    }
  };

  const t = translations[lang];
  document.getElementById("dashboard_logout_text").textContent = t.logout;

  // Simula dados do usuário
  document.getElementById("user-name-placeholder").textContent = "Dr. Thiago";
  document.getElementById("user-plan-name-placeholder").textContent = "Focused";
  document.getElementById("user-subscription-date-placeholder").textContent = "Feb 2025";

  // Simula estatísticas
  document.getElementById("stats-study-hours").textContent = "124";
  document.getElementById("stats-questions-answered").textContent = "3200";
  document.getElementById("stats-overall-accuracy").textContent = "88%";
  document.getElementById("stats-correct-count").textContent = "2816";
  document.getElementById("stats-incorrect-count").textContent = "384";

  // Atualiza áreas com base em um array
  const areas = [
    { name: "Neurology", percentage: 92 },
    { name: "Cardiology", percentage: 85 },
    { name: "Nephrology", percentage: 78 }
  ];

  const container = document.getElementById("stats-by-area-container");
  container.innerHTML = "";

  areas.forEach((area, index) => {
    const item = document.createElement("div");
    item.className = "specialty-performance-item";
    item.innerHTML = `
      <p class="text-sm font-medium text-gray-700 mb-1" id="area-name-${index}">${area.name}</p>
      <div class="flex items-center">
        <div class="h-4 sm:h-5 bg-gray-200 rounded-full w-full mr-2 flex-grow relative">
          <div class="h-full bg-gray-400 rounded-full" style="width: ${area.percentage}%" id="area-bar-${index}"></div>
        </div>
        <span class="text-sm font-bold text-gray-600 w-12 text-right" id="area-percentage-${index}">${area.percentage}%</span>
      </div>`;
    container.appendChild(item);
  });

  // Logout
  document.getElementById("dashboard-logout-button").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../login.html";
  });
});
