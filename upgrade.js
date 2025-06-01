
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('selectedLanguage') || 'en';

  const translations = {
    en: {
      "upgrade-title": "Upgrade your Plan",
      "feature-header": "Feature",
      "ads-feature": "Ads Removed",
      "questions-feature": "Access to Questions",
      "filter-feature": "Topic/Area Filters",
      "stats-feature": "Performance Analytics",
      "pro-feature": "Timed Professional Simulations",
      "badge-popular": "🔥 Most Popular",
      "plan-basic": "Basic",
      "price-basic": "$5.99/mo",
      "plan-adfree": "Ad-Free",
      "price-adfree": "$9.99/mo",
      "plan-focused": "Focused",
      "price-focused": "$15.99/mo",
      "plan-pro": "Pro Simulation",
      "price-pro": "$17.99/mo",
      "back-home": "🏠 Back to Home",
      "footer1": "© 2024 BrainboxMed. All rights reserved.",
      "footer2": "BrainboxMed™ is a registered educational platform. Unauthorized use is prohibited.",
      "footer3": "Privacy Policy",
      "footer4": "Terms of Use",
      "plan-focusedpro": "Focused Pro",
      "price-focusedpro": "$18.99/mo",
      "focusedpro-li5": "🎧 Will not be available during simulation sessions",
      "music-feature": "Music to Study",
      "badge-focusedpro-combo": "⭐ Best Way to Study<br><span style='font-size:0.9em; background-color:#f59e0b; color:#1f2937; padding:2px 6px; border-radius:10px; display:inline-block; margin-top:3px;'><span style='color:black;'>🎧</span> Includes Music</span>",
      "badge-prosim-info": "🎯 Focused on Simulations",
      "prosim-analytics-cell": "✅ <span class='block text-[10px] italic'>(Report at end of each simulation only)</span>",
    },
    pt: {
      "upgrade-title": "Atualize seu Plano",
      "feature-header": "Recurso",
      "ads-feature": "Sem Anúncios",
      "questions-feature": "Acesso às Questões",
      "filter-feature": "Filtros por Tema/Área",
      "stats-feature": "Estatísticas de Desempenho",
      "pro-feature": "Simulados Profissionais com Tempo",
      "badge-popular": "🔥 Mais Popular",
      "plan-basic": "Básico",
      "price-basic": "R$5,99/mês",
      "plan-adfree": "Sem Anúncios",
      "price-adfree": "R$9,99/mês",
      "plan-focused": "Focado",
      "price-focused": "R$15,99/mês",
      "plan-pro": "Simulação Pro",
      "price-pro": "R$17,99/mês",
      "back-home": "🏠 Voltar para Início",
      "footer1": "© 2024 BrainboxMed. Todos os direitos reservados.",
      "footer2": "BrainboxMed™ é uma plataforma educacional registrada. Uso não autorizado é proibido.",
      "footer3": "Política de Privacidade",
      "footer4": "Termos de Uso",
      "plan-focusedpro": "Foco Pro",
      "price-focusedpro": "R$18,99/mês",
      "focusedpro-li5": "🎧 Não estará disponível durante as simulações",
      "music-feature": "Música para Estudar",
      "badge-focusedpro-combo": "⭐ Melhor Forma de Estudar<br><span style='font-size:0.9em; background-color:#f59e0b; color:#1f2937; padding:2px 6px; border-radius:10px; display:inline-block; margin-top:3px;'><span style='color:black;'>🎧</span> Inclui Música</span>",
      "badge-prosim-info": "🎯 Focado em Simulações",
      "prosim-analytics-cell": "✅ <span class='block text-[10px] italic'>(Relatório apenas ao final de cada simulação)</span>",
    },
    es: {
      "upgrade-title": "Mejora tu Plan",
      "feature-header": "Funcionalidad",
      "ads-feature": "Sin Anuncios",
      "questions-feature": "Acceso a Preguntas",
      "filter-feature": "Filtros por Tema/Área",
      "stats-feature": "Estadísticas de Rendimiento",
      "pro-feature": "Simulacros Profesionales con Tiempo",
      "badge-popular": "🔥 Más Popular",
      "plan-basic": "Básico",
      "price-basic": "$5.99/mes",
      "plan-adfree": "Sin Anuncios",
      "price-adfree": "$9.99/mes",
      "plan-focused": "Enfocado",
      "price-focused": "$15.99/mes",
      "plan-pro": "Simulación Pro",
      "price-pro": "$17.99/mes",
      "back-home": "🏠 Volver al Inicio",
      "footer1": "© 2024 BrainboxMed. Todos los derechos reservados.",
      "footer2": "BrainboxMed™ es una plataforma educativa registrada. Uso no autorizado está prohibido.",
      "footer3": "Política de Privacidad",
      "footer4": "Términos de Uso",
      "plan-focusedpro": "Enfocado Pro",
      "price-focusedpro": "$18.99/mes",
      "focusedpro-li5": "🎧 No estará disponible durante las simulaciones",
      "music-feature": "Música para Estudiar",
      "badge-focusedpro-combo": "⭐ Mejor Forma de Estudiar<br><span style='font-size:0.9em; background-color:#f59e0b; color:#1f2937; padding:2px 6px; border-radius:10px; display:inline-block; margin-top:3px;'><span style='color:black;'>🎧</span> Incluye Música</span>",
      "badge-prosim-info": "🎯 Enfocado en Simulaciones",
      "prosim-analytics-cell": "✅ <span class='block text-[10px] italic'>(Informe solo al final de cada simulación)</span>",
    }
  };

  const t = translations[lang];
  Object.keys(t).forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    if (id === "badge-focusedpro-combo" || id === "prosim-analytics-cell") { // Adicionado "prosim-analytics-cell"
      el.innerHTML = t[id];
    } else if (id.startsWith("price-")) { 
      el.innerHTML = t[id]; 
    } else { 
      el.textContent = t[id];
    }
  }
});
});
