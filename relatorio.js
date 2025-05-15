const reportTexts = {
  "en": {
    "title": "PERFORMANCE REPORT",
    "generated": "Report generated on",
    "performance": "General Performance",
    "score": "Score",
    "correct": "correct",
    "percentage": "Percentage",
    "average": "Expected average",
    "strengths": "Strengths & Weaknesses",
    "domain": "Topic Area",
    "difficulty": "Performance by Difficulty",
    "level": "Level",
    "questions": "Questions",
    "correctAnswers": "% Correct",
    "status": "Status",
    "recommendations": "Targeted Study Plan",
    "pending": "Review Questions",
    "pendingSubtitle": "Click the button below to review all the questions.",
    "viewPending": "View Full Question Report",
    "nonePending": " ",
     "viewFullReport": "View Full Report",
    "restart": "Restart Test",
    "print": "Print Report",
    "strength": "Strength",
    "averagePerf": "Average",
    "weakness": "Weakness",
    "viewPending": "View Questions for Review",
    "pendingTitle": "Questions for Review Report",
    "backToReport": "Back to Main Report",
    "correct": "Correct Answer",
    "incorrect": "Wrong Answer",
    "unanswered": "Not Answered"
  },
  "es": {
    "title": "INFORME DE RENDIMIENTO",
    "generated": "Informe generado el",
    "performance": "Rendimiento General",
    "score": "Puntuación",
    "correct": "correctas",
    "percentage": "Porcentaje",
    "average": "Promedio esperado",
    "strengths": "Fortalezas y Debilidades",
    "domain": "Área Temática",
    "difficulty": "Rendimiento por Dificultad",
    "level": "Nivel",
    "questions": "Preguntas",
    "correctAnswers": "% Correctas",
    "status": "Estado",
    "recommendations": "Plan de Estudio Personalizado",
    "pending": "Revisar Preguntas",
    "pendingSubtitle": "Haz clic en el botón de abajo para ver todas las preguntas.",
    "viewPending": "Ver Informe de Preguntas",
    "nonePending": " ",
    "viewFullReport": "Ver Informe Completo",
    "restart": "Reiniciar Prueba",
    "print": "Imprimir Informe",
    "strength": "Fortaleza",
    "averagePerf": "Promedio",
    "weakness": "Debilidad",
    "viewPending": "Ver Preguntas para Revisión",
    "pendingTitle": "Informe de Preguntas para Revisión",
    "backToReport": "Volver al Informe",
    "correct": "Respuesta Correcta",
    "incorrect": "Respuesta Incorrecta", 
    "unanswered": "No Respondida"
  },
  "pt": {
    "title": "RELATÓRIO DE DESEMPENHO",
    "generated": "Relatório gerado em",
    "performance": "Desempenho Geral",
    "score": "Pontuação",
    "correct": "corretas",
    "percentage": "Percentual",
    "average": "Média esperada",
    "strengths": "Pontos Fortes e Fracos",
    "domain": "Área Temática",
    "difficulty": "Desempenho por Dificuldade",
    "level": "Nível",
    "questions": "Questões",
    "correctAnswers": "% Corretas",
    "status": "Status",
    "recommendations": "Plano de Estudo Personalizado",
    "pending": "Revisar Questões",
    "pendingSubtitle": "Clique no botão abaixo para ver todas as questões.",
    "viewPending": "Ver Relatório de Questões",
    "nonePending": " ",
    "viewFullReport": "Ver Relatório Completo",
    "restart": "Refazer Teste",
    "print": "Imprimir Relatório",
    "strength": "Ponto Forte",
    "averagePerf": "Médio",
    "weakness": "Ponto Fraco",
    "viewPending": "Ver Questões para Revisão",
    "pendingTitle": "Relatório de Questões para Revisão",
    "backToReport": "Voltar ao Relatório",
    "correct": "Resposta Correta",
    "incorrect": "Resposta Incorreta",
    "unanswered": "Não Respondida"
  }
};
function generateUSMLEReportFull(questionario, respostas, pendentes, tempoPorQuestao, idioma = 'pt') {
  const t = reportTexts[idioma];
  
  updateReportLanguage(idioma);
  
  const totalQuestoes = questionario.length;
  const acertos = questionario.filter(q => respostas[q.id] === q.correta).length;
  const percentual = Math.round((acertos / totalQuestoes) * 100);

  document.getElementById('report-title').textContent = t.title;
  document.getElementById('report-date').textContent = `${t.generated} ${new Date().toLocaleDateString(idioma)}`;
  document.getElementById('score-text').textContent = `${t.score}: ${acertos}/${totalQuestoes} ${t.correct}`;
  document.getElementById('percentage').textContent = percentual;
  
  const scoreBar = document.getElementById("score-bar");
  scoreBar.style.width = `${percentual}%`;
  scoreBar.style.background = percentual >= 70
  ? "linear-gradient(to right, #2ecc71, #27ae60)" // verde
  : "linear-gradient(to right, #e74c3c, #c0392b)"; // vermelho

  updateDomainAnalysis(questionario, respostas, idioma);
  updateDifficultyAnalysis(questionario, respostas, idioma);
  updateRecommendations(questionario, respostas, idioma);
  
  // Comentado para evitar exibir "Questions for Review" + undefined
  // addPendingQuestionsLink(pendentes, idioma);

  updatePendingQuestions(questionario, pendentes, respostas, idioma);
  // createFullReportLink(idioma); // Removido link para relatoriofinal.html
  drawDifficultyChart(questionario, respostas);
  const lang = localStorage.getItem("selectedLanguage") || "en";
  drawVoronoiDifficultyChart(questionario, respostas, lang);
  drawSankeyAccuracyChart(questionario, respostas, idioma);
  drawPerformanceChart(questionario, respostas, idioma);
  generateCompactRecommendations(questionario, respostas, idioma);
  generateDifficultyInsights(questionario, respostas, idioma);
}
function updateDomainAnalysis(questions, answers, lang) {
  const dominios = {};
  questions.forEach(q => {
       const categoria = q.area || "undefined";
    if (!dominios[categoria]) {
      dominios[categoria] = { total: 0, acertos: 0 };
    }
    dominios[categoria].total++;
    console.log(`Questão ${q.id} — Correta: ${q.correta}, Respondida: ${answers?.[q.id]}`);
    if (answers?.[q.id] === q.correta) dominios[categoria].acertos++;
  });

  let html = '';
  const dominioLabels = {
  neuro: { pt: "🧠 Neuro", en: "🧠 Neuro", es: "🧠 Neuro" },
  cardio: { pt: "❤️ Cardio", en: "❤️ Cardio", es: "❤️ Cardio" },
  infecto: { pt: "🦠 Infecto", en: "🦠 Infectious", es: "🦠 Infecciosas" },
  respiratorio: { pt: "🫁 Respiratório", en: "🫁 Respiratory", es: "🫁 Respiratorio" },
  renal: { pt: "🩸 Renal", en: "🩸 Renal", es: "🩸 Renal" },
  general: { pt: "📚 Geral", en: "📚 General", es: "📚 General" }
  };
  Object.entries(dominios).forEach(([dominio, dados]) => {
  const percentual = Math.round((dados.acertos / dados.total) * 100);
  const status = percentual >= 70 ? '🟢' :
                 percentual >= 50 ? '🟡' :
                 '🔴';
  html += `
    <tr>
      <td>${dominioLabels[dominio]?.[idioma] || dominio}</td>
      <td style="text-align: center;">${percentual}%</td>
      <td style="text-align: center;">${status}</td>
    </tr>
  `;
});
  document.getElementById('sw-body').innerHTML = html;
}
function updateDifficultyAnalysis(questions, answers, lang) {
  const difficultyStats = {
    facil: { total: 0, correct: 0 },
    moderada: { total: 0, correct: 0 },
    dificil: { total: 0, correct: 0 },
    muito_dificil: { total: 0, correct: 0 }
  };

  questions.forEach(q => {
    difficultyStats[q.nivel].total++;
if (answers[q.id] === q.correta) difficultyStats[q.nivel].correct++;
  });

  let html = '';
  for (const [difficulty, data] of Object.entries(difficultyStats)) {
    if (data.total > 0) {
      const percentual = Math.round((data.correct / data.total) * 100);
      html += `
        <tr>
          <td><span class="dificuldade ${difficulty}">${translateDifficulty(difficulty, lang)}</span></td>
          <td style="text-align: center;">${data.total}</td>
          <td style="text-align: center;">${percentual}%</td>
        </tr>
      `;
    }
  }
  document.getElementById('difficulty-body').innerHTML = html;
}
function translateDifficulty(difficulty, lang) {
  const translations = {
    facil: { en: 'Easy', es: 'Fácil', pt: 'Fácil' },
    moderada: { en: 'Medium', es: 'Moderada', pt: 'Moderada' },
    dificil: { en: 'Hard', es: 'Difícil', pt: 'Difícil' },
    muito_dificil: { en: 'Very Hard', es: 'Muy Difícil', pt: 'Muito Difícil' }
  };
  return translations[difficulty][lang];
}
function updateRecommendations(questions, answers, lang) {
  const t = reportTexts[lang];
  const conteudo = {};
  
  questions.forEach(q => {
    const acertou = answers[q.id] === q.correta;
    if (acertou) return;

    const area = q.area || "Undefined";
    const topicos = Array.isArray(q.topic) ? q.topic : [q.topic || "Geral"];

    if (!conteudo[area]) conteudo[area] = {};
    topicos.forEach(topic => {
      if (!conteudo[area][topic]) conteudo[area][topic] = 0;
      conteudo[area][topic]++;
    });
  });

  const ordenado = Object.entries(conteudo)
    .map(([area, topics]) => {
      const totalErros = Object.values(topics).reduce((a, b) => a + b, 0);
      return { area, topics, totalErros };
    })
    .sort((a, b) => b.totalErros - a.totalErros);

  // ⬇️ MONTA LISTA VISUAL
  let html = "";
  if (ordenado.length === 0) {
    html = `<li style="padding: 12px; color: #999;">${t.nonePending}</li>`;
  } else {
    html = ordenado.map(({ area, topics }) => {
      const topicosHTML = Object.entries(topics)
        .sort(([, a], [, b]) => b - a)
        .map(([topic]) => `<li>${topic}</li>`)
        .join("");
      return `
        <li class="area-block">
          <div class="area-title">🧠 ${area}</div>
          <ul class="topic-list">
            ${topicosHTML}
          </ul>
        </li>
      `;
    }).join("");
  }
  const list = document.getElementById("materials-list");
  if (list) list.innerHTML = html;
  // ⬇️ MONTA INSIGHTS TEXTUAIS
  const insightsEl = document.getElementById("study-insights");
  const insightsList = document.getElementById("study-insights-list");
  if (!insightsEl || !insightsList) return;

  if (ordenado.length === 0) {
    insightsEl.style.display = "none";
    insightsList.innerHTML = "";
    return;
  }
  insightsEl.style.display = "block";
  const insights = ordenado.map(({ area, topics }) => {
    const topicos = Object.entries(topics)
      .sort(([, a], [, b]) => b - a)
      .map(([t]) => t)
      .slice(0, 3)
      .join(", ");

    if (lang === "pt") return `• Maior número de erros em ${area}, especialmente nos tópicos: ${topicos}.`;
    if (lang === "es") return `• Mayor cantidad de errores en ${area}, especialmente en: ${topicos}.`;
    return `• Most errors occurred in ${area}, especially in: ${topicos}.`;
  });
  insightsList.innerHTML = insights.map(i => `<li>${i}</li>`).join("");
}
function drawPerformanceChart(questions, answers, lang = "en") {
  const container = document.getElementById("performance-chart");
  if (!container || !questions?.length) return;

  const translations = {
    en: {
      correct: "Correct",
      incorrect: "Incorrect",
      title: "Top 15 most frequent topics"
    },
    pt: {
      correct: "Corretas",
      incorrect: "Incorretas",
      title: "15 tópicos mais frequentes"
    },
    es: {
      correct: "Correctas",
      incorrect: "Incorrectas",
      title: "15 temas más frecuentes"
    }
  };
  const t = translations[lang] || translations["en"];

  const topicStats = {};
  questions.forEach(q => {
    const topics = Array.isArray(q.topic) ? q.topic : [q.topic || "General"];
    const acertou = answers[q.id] === q.correta;
    topics.forEach(topic => {
      if (!topicStats[topic]) topicStats[topic] = { total: 0, correct: 0 };
      topicStats[topic].total++;
      if (acertou) topicStats[topic].correct++;
    });
  });

  const topTopics = Object.entries(topicStats)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 15);

  let html = `
    <p style="font-weight: bold; color: #555; margin-bottom: 10px; font-size: 14px;">
      📌 ${t.title}
    </p>
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <div style="background-color: #3498db; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">
        ${t.correct}
      </div>
      <div style="background-color: #bdc3c7; color: #333; padding: 4px 10px; border-radius: 4px; font-size: 12px;">
        ${t.incorrect}
      </div>
    </div>
  `;

  topTopics.forEach(([topic, stat]) => {
    const correct = stat.correct;
    const incorrect = stat.total - correct;
    const pctCorrect = Math.round((correct / stat.total) * 100);
    const pctIncorrect = 100 - pctCorrect;

    html += `
      <div style="display: flex; align-items: center; margin-bottom: 12px; font-size: 14px;">
        <div style="flex: 1; font-weight: bold; padding-right: 10px; color: #333;">${topic}</div>
        <div style="flex: 4; position: relative; height: 22px; background: #ecf0f1; overflow: hidden;">
          <div style="width: ${pctCorrect}%; background-color: #3498db; height: 100%; float: left; text-align: center; color: white; font-size: 13px; line-height: 22px;">
            ${pctCorrect > 5 ? `${pctCorrect}%` : ""}
          </div>
          <div style="width: ${pctIncorrect}%; background-color: #bdc3c7; height: 100%; float: left; text-align: center; color: #333; font-size: 13px; line-height: 22px;">
            ${pctIncorrect > 5 ? `${pctIncorrect}%` : ""}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
function generateCompactRecommendations(questions, answers, lang = "en") {
  const container = document.getElementById("study-recommendations");
  if (!container || !questions?.length) return;

  const translations = {
    en: {
      intro: "You should review the following topics:",
      low: "Low performance in",
      and: "and",
      percent: "% correct"
    },
    pt: {
      intro: "Você deve revisar os seguintes tópicos:",
      low: "Desempenho baixo em",
      and: "e",
      percent: "% de acerto"
    },
    es: {
      intro: "Deberías revisar los siguientes temas:",
      low: "Bajo rendimiento en",
      and: "y",
      percent: "% correctas"
    }
  };

  const t = translations[lang] || translations["en"];
  const topicStats = {};

  questions.forEach(q => {
    const topics = Array.isArray(q.topic) ? q.topic : [q.topic || "General"];
    const acertou = answers[q.id] === q.correta;
    topics.forEach(topic => {
      if (!topicStats[topic]) topicStats[topic] = { total: 0, correct: 0 };
      topicStats[topic].total++;
      if (acertou) topicStats[topic].correct++;
    });
  });

  const topTopics = Object.entries(topicStats)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 15);

  const weakTopics = topTopics
    .map(([topic, stat]) => {
      const pct = Math.round((stat.correct / stat.total) * 100);
      return { topic, percent: pct };
    })
    .filter(t => t.percent < 70)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 5);

  let html = `<p><strong>${t.intro}</strong></p><ul style="padding-left: 18px;">`;
  weakTopics.forEach(tk => {
    html += `<li>${t.low} <strong>${tk.topic}</strong> (${tk.percent}${t.percent})</li>`;
  });
  html += "</ul>";

  container.innerHTML = html;
}
function generateDifficultyInsights(questions, answers, lang = "en") {
  const container = document.getElementById("difficulty-body");
  if (!container || !questions?.length) return;

  const labels = {
    en: {
      facil: "Easy",
      moderada: "Moderate",
      dificil: "Hard",
      muito_dificil: "Very Hard"
    },
    pt: {
      facil: "Fácil",
      moderada: "Moderada",
      dificil: "Difícil",
      muito_dificil: "Muito Difícil"
    },
    es: {
      facil: "Fácil",
      moderada: "Moderada",
      dificil: "Difícil",
      muito_dificil: "Muy Difícil"
    }
  };

  const t = labels[lang] || labels.en;

  const stats = {
    facil: { total: 0, correct: 0 },
    moderada: { total: 0, correct: 0 },
    dificil: { total: 0, correct: 0 },
    muito_dificil: { total: 0, correct: 0 }
  };

  questions.forEach(q => {
    const nivel = q.nivel;
    if (!nivel || !stats[nivel]) return;
    stats[nivel].total++;
    if (answers[q.id] === q.correta) stats[nivel].correct++;
  });

  const percentList = Object.entries(stats)
    .filter(([_, s]) => s.total > 0)
    .map(([nivel, s]) => ({
      nivel,
      percent: Math.round((s.correct / s.total) * 100)
    }));

  if (!percentList.length) return;

  percentList.sort((a, b) => b.percent - a.percent);
  const best = percentList[0];
  const worst = percentList[percentList.length - 1];

  const insightsEl = document.createElement("div");
  insightsEl.style.marginTop = "20px";
  insightsEl.style.color = "#555";
  insightsEl.style.fontSize = "14px";
  insightsEl.innerHTML = `
    <p><strong>✅ Best performance:</strong> ${t[best.nivel]} (${best.percent}%)</p>
    <p><strong>❌ Weakest performance:</strong> ${t[worst.nivel]} (${worst.percent}%)</p>
  `;

  container.parentNode.appendChild(insightsEl);
}
function getRecommendation(dominio, lang) {
  const recomendacoes = {
    "Sepsis": {
      en: "Review Surviving Sepsis Campaign guidelines",
      es: "Revisar guías de la Campaña Sobreviviendo a la Sepsis",
      pt: "Revisar diretrizes da Campanha Sobrevivendo à Sepse"
    },
    "Mechanical Ventilation": {
      en: "Practice ventilator management protocols",
      es: "Practicar protocolos de manejo de ventiladores",
      pt: "Praticar protocolos de manejo de ventilação mecânica"
    }
  };
  return recomendacoes[dominio]?.[lang] || reportTexts[lang].nonePending;
}
function addPendingQuestionsLink(pendentes, lang) {
  const t = reportTexts[lang];
  const html = `
    <div class="report-section" style="margin-top: 40px; text-align: center;">
      <h2 style="color: var(--color-primary); font-size: 22px; margin-bottom: 10px;">
        ${t.pending}
      </h2>
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
        ${t.pendingSubtitle}
      </p>
      <button onclick="showPendingQuestions()" style="
        padding: 14px 28px;
        font-size: 17px;
        background-color: var(--color-highlight);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: background 0.3s;
      ">
        📋 ${t.viewPending} (${pendentes.length})
      </button>
    </div>
  `;

  document.getElementById('pending-questions-section').innerHTML = html;
}
function generatePendingQuestionsReport(questionario, pendentes, idioma) {
  const t = reportTexts[idioma];
  let html = '';

  pendentes.forEach((id, index) => {
    const q = questionario.find(question => question.id === id);
    if (!q) return;

    const enunciado = q.enunciado?.[idioma] || q.enunciado;
    const alternativas = q.alternativas?.[idioma] || q.alternativas;
    const explicacao = q.explicacoes?.[idioma] || q.explicacoes;

    html += `
      <div class="pending-question" style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
       <h4 style="margin-bottom: 10px;">${t.pendingTitle} - ${index + 1}</h4>
        <p style="font-weight: bold; color: #333;">${enunciado}</p>
        <div class="options">
          ${alternativas.map((opt, i) => `
            <div class="option ${i === q.correta ? 'correct' : ''}" style="padding: 10px; border: 1px solid #ccc; border-radius: 6px; margin: 6px 0;">
              ${opt}
            </div>
          `).join('')}
        </div>
        <div class="explanation-box ${userAnswers[q.id] === q.correta ? 'correct' : 'incorrect'}">
          <p class="explanation-text" style="color: ${userAnswers[q.id] === q.correta ? '#27ae60' : '#e74c3c'};">
            ${userAnswers[q.id] === q.correta ? '✓' : '✖'} ${explicacao}
          </p>
        </div>
      </div>
    `;
  });

  document.getElementById('pending-questions-container').innerHTML = html || `<p>${t.nonePending}</p>`;
  document.getElementById('pending-report-title').textContent = t.pendingTitle;
  document.getElementById('pending-report-date').textContent = `${t.generated} ${new Date().toLocaleDateString(idioma)}`;
}
function updateReportLanguage(lang) {
  const t = reportTexts[lang];
  const elements = {
    'general-performance-title': t.performance,
    'strengths-title': t.strengths,
    'difficulty-title': t.difficulty,
    'recommendations-title': t.recommendations,
    'restart-btn': t.restart,
    'print-btn': t.print
  };
  
  for (const [id, text] of Object.entries(elements)) {
    document.getElementById(id).textContent = text;
  }
}
function updatePendingQuestions(questions, pending, answers, lang) {
  const t = reportTexts[lang];
  const list = document.getElementById('pending-questions-list');
  list.innerHTML = '';

  pending.forEach(questionId => {
    const q = questions.find(q => q.id === questionId);
    if (!q) return;

    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correta;
    const hasAnswer = typeof userAnswer !== 'undefined';

    const questionHTML = `
      <li style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h4 style="color: #333; margin: 0;">${q.enunciado[lang]}</h4>
          <span class="dificuldade ${q.dificuldade}">
            ${translateDifficulty(q.dificuldade, lang)}
          </span>
        </div>

        <div class="options">
          ${q.alternativas[lang].map((option, index) => {
            let icon = '';
            let style = '';
            
            if (index === q.correta) {
              icon = '<span class="status-icon correct-status">✓</span>';
              style = 'border-color: #27ae60; background-color: #e6f2ff;';
            }
            
            if (hasAnswer && index === userAnswer) {
              icon = isCorrect 
                ? '<span class="status-icon correct-status">✓</span>' 
                : '<span class="status-icon incorrect-status">✖</span>';
              style = isCorrect 
                ? 'border-color: #27ae60; background-color: #e6f2ff;' 
                : 'border-color: #e74c3c; background-color: #f8d7da;';
            }

            return `
              <div class="option" style="${style} padding: 12px; margin: 8px 0; border-radius: 6px; position: relative;">
                ${icon}
                ${option}
              </div>
            `;
          }).join('')}
        </div>

        <div class="explanation-box ${isCorrect ? 'correct' : 'incorrect'}">
          <strong>${t.explanation}:</strong>
          <p class="explanation-text">${q.explicacoes[lang]}</p>
          <div class="question-status ${isCorrect ? 'correct-status' : 'incorrect-status'}">
            ${isCorrect ? '✓ ' : '✖ '}${isCorrect ? t.correct : t.incorrect}
          </div>
        </div>
      </li>
    `;
    
    list.insertAdjacentHTML('beforeend', questionHTML);
  });

  if (pending.length === 0) {
    list.innerHTML = `<li>${t.nonePending}</li>`;
  }
}
window.showPendingQuestions = function() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('pending-report-screen').style.display = 'block';
  const allQuestionIds = questionarioAtual.map(q => q.id);
  generatePendingQuestionsReport(questionarioAtual, allQuestionIds, selectedLanguage);
};
// função createFullReportLink removida conforme desativação do link para relatoriofinal.html
function generateDetailedReport(questions, answers, pending, lang) {
  const t = reportTexts[lang];
  const container = document.getElementById('full-report-questions');
  let html = '';
  
  // Atualizar stats rápidos
  const correct = questions.filter(q => answers[q.id] === q.correta).length;
  const incorrect = questions.filter(q => answers[q.id] !== undefined && answers[q.id] !== q.correta).length;
  const unanswered = questions.length - (correct + incorrect);
  
  document.getElementById('total-correct').textContent = correct;
  document.getElementById('total-incorrect').textContent = incorrect;
  document.getElementById('total-pending').textContent = pending.length;
  
  // Gerar lista de questões
  questions.forEach((q, index) => {
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correta;
    const hasAnswer = typeof userAnswer !== 'undefined';
    
    html += `
      <div class="question-item">
        <div class="question-header">
          <span class="dificuldade ${q.dificuldade}">
            ${translateDifficulty(q.dificuldade, lang)}
          </span>
          <span class="question-status ${hasAnswer ? (isCorrect ? 'status-correct' : 'status-incorrect') : ''}">
            ${hasAnswer ? (isCorrect ? t.correct : t.incorrect) : t.unanswered}
          </span>
        </div>
        
        <h3 class="question-text">${q.enunciado[lang]}</h3>
        
        <div class="options">
          ${q.alternativas[lang].map((opt, i) => `
            <div class="option ${i === q.correta ? 'correct' : ''} ${hasAnswer && i === userAnswer ? 'user-answer' : ''}">
              ${opt}
              ${i === q.correta ? '<span class="correct-icon">✓</span>' : ''}
              ${hasAnswer && i === userAnswer && !isCorrect ? '<span class="incorrect-icon">✖</span>' : ''}
            </div>
          `).join('')}
        </div>
        
        ${hasAnswer ? `
          <div class="explanation-panel">
            <h4>${t.explanation}:</h4>
            <p>${q.explicacoes[lang]}</p>
          </div>
        ` : ''}
      </div>
    `;
  });
  
  container.innerHTML = html;
}
function showFullReport() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('full-report-screen').style.display = 'block';
generateDetailedReport(window.questionarioAtual, window.userAnswers, window.pendingQuestions, window.selectedLanguage);
}
function drawDifficultyChart(questions, answers) {
  console.log('🎯 Dados recebidos para gráfico de dificuldade:', questions, answers);
  const lang = localStorage.getItem('selectedLanguage') || 'pt';
  const stats = {
    facil: { acertos: 0, erros: 0 },
    moderada: { acertos: 0, erros: 0 },
    dificil: { acertos: 0, erros: 0 },
    muito_dificil: { acertos: 0, erros: 0 }
  };

  questions.forEach(q => {
    const acertou = answers[q.id] === q.correta;
    if (acertou) stats[q.nivel].acertos++;
    else stats[q.nivel].erros++;
  });
  
const canvas = document.getElementById('chart-dificuldade');
if (!canvas) {
  console.warn("⚠️ Canvas 'chart-dificuldade' não encontrado.");
  return;
}
canvas.style.display = 'block'; // exibe o canvas apenas se necessário
canvas.height = 400; // garante altura
const ctx = canvas.getContext('2d');

  const translatedLabels = [
    translateDifficulty('facil', lang),
    translateDifficulty('moderada', lang),
    translateDifficulty('dificil', lang),
    translateDifficulty('muito_dificil', lang)
  ];
  if (window.graficoDificuldade) {
  window.graficoDificuldade.destroy();
  }
  window.graficoDificuldade = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: translatedLabels,

      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Desempenho por Nível de Dificuldade'
        }
      },
      scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true }
      }
    }
  });
}
