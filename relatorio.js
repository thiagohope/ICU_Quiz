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
    "domain": "Domain",
    "difficulty": "Performance by Difficulty",
    "level": "Level",
    "questions": "Questions",
    "correctAnswers": "% Correct",
    "status": "Status",
    "recommendations": "Study Recommendations",
    "pending": "Questions for Review",
    "nonePending": "No questions marked for review",
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
    "domain": "Dominio",
    "difficulty": "Rendimiento por Dificultad",
    "level": "Nivel",
    "questions": "Preguntas",
    "correctAnswers": "% Correctas",
    "status": "Estado",
    "recommendations": "Recomendaciones de Estudio",
    "pending": "Preguntas para Revisión",
    "nonePending": "No hay preguntas marcadas",
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
    "domain": "Domínio",
    "difficulty": "Desempenho por Dificuldade",
    "level": "Nível",
    "questions": "Questões",
    "correctAnswers": "% Corretas",
    "status": "Status",
    "recommendations": "Recomendações de Estudo",
    "pending": "Questões para Revisão",
    "nonePending": "Nenhuma questão marcada",
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
  document.getElementById('score-bar').style.width = `${percentual}%`;

  updateDomainAnalysis(questionario, respostas, idioma);
  updateDifficultyAnalysis(questionario, respostas, idioma);
   updateRecommendations(questionario, respostas, idioma);
  // Linha abaixo comentada porque o elemento 'pending-questions-section' não existe no HTML
  // addPendingQuestionsLink(pendentes, idioma);
  updatePendingQuestions(questionario, pendentes, respostas, idioma);
  createFullReportLink(idioma);  
  drawDifficultyChart(questionario, respostas);
  drawTempoChart(questionario);
}

function updateDomainAnalysis(questions, answers, lang) {
  const dominios = {};
  questions.forEach(q => {
    const categoria = q.categoria[lang] || q.categoria;
    if (!dominios[categoria]) {
      dominios[categoria] = { total: 0, acertos: 0 };
    }
    dominios[categoria].total++;
    if (answers[q.id] === q.correta) dominios[categoria].acertos++;
  });

  let html = '';
  Object.entries(dominios).forEach(([dominio, dados]) => {
    const percentual = Math.round((dados.acertos / dados.total) * 100);
    const status = percentual >= 75 ? '🟢 ' + reportTexts[lang].strength :
                  percentual >= 50 ? '🟡 ' + reportTexts[lang].averagePerf :
                  '🔴 ' + reportTexts[lang].weakness;
    html += `
      <tr>
        <td>${dominio}</td>
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
    difficultyStats[q.dificuldade].total++;
    if (answers[q.id] === q.correta) difficultyStats[q.dificuldade].correct++;
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
  const dominiosFracos = [];
  const dominios = {};
  
  questions.forEach(q => {
    const categoria = q.categoria[lang] || q.categoria;
    if (!dominios[categoria]) dominios[categoria] = { total: 0, acertos: 0 };
    dominios[categoria].total++;
    if (answers[q.id] === q.correta) dominios[categoria].acertos++;
  });

  for (const [dominio, dados] of Object.entries(dominios)) {
    const percentual = Math.round((dados.acertos / dados.total) * 100);
    if (percentual < 50) dominiosFracos.push(dominio);
  }

  let html = '';
  if (dominiosFracos.length > 0) {
    html = dominiosFracos.map(dominio => `<li><strong>${dominio}:</strong> ${getRecommendation(dominio, lang)}</li>`).join('');
  } else {
    html = `<li>${reportTexts[lang].nonePending}</li>`;
  }
  document.getElementById('materials-list').innerHTML = html;
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
    <div class="report-section">
      <h3>${t.pending}</h3>
      <button class="button" onclick="showPendingQuestions()" style="background-color: #f39c12;">
        ${t.viewPending} (${pendentes.length})
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
        <h4 style="margin-bottom: 10px;">${t.question} ${index + 1}</h4>
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

function createFullReportLink(lang) {
  const t = reportTexts[lang];
  const html = `
    <p class="report-link" onclick="showFullReport()">${t.viewDetailedReport}</p>
    `;
  document.getElementById('full-report-section').innerHTML = html;
}

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
  const lang = localStorage.getItem('selectedLanguage') || 'pt';
  const stats = {
    facil: { acertos: 0, erros: 0 },
    moderada: { acertos: 0, erros: 0 },
    dificil: { acertos: 0, erros: 0 },
    muito_dificil: { acertos: 0, erros: 0 }
  };

  questions.forEach(q => {
    const acertou = answers[q.id] === q.correta;
    if (acertou) stats[q.dificuldade].acertos++;
    else stats[q.dificuldade].erros++;
  });

  const ctx = document.getElementById('chart-dificuldade').getContext('2d');

  const translatedLabels = [
    translateDifficulty('facil', lang),
    translateDifficulty('moderada', lang),
    translateDifficulty('dificil', lang),
    translateDifficulty('muito_dificil', lang)
  ];

  new Chart(ctx, {
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

function drawTempoChart(questions) {
  const lang = localStorage.getItem('selectedLanguage') || 'pt';

  const titles = {
    pt: 'Tempo Gasto por Questão no Simulado',
    en: 'Time Spent per Question in Simulation',
    es: 'Tiempo por Pregunta en el Simulador'
  };

  const labels = {
    pt: 'Tempo por Questão (s)',
    en: 'Time per Question (s)',
    es: 'Tiempo por Pregunta (s)'
  };

  const ctx = document.getElementById('chart-tempo').getContext('2d');

  const tempos = questions.map(q => q.tempo || 0); // campo "tempo" deve existir nas questões
  const questLabels = questions.map((_, i) => `Q${i + 1}`);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: questLabels,
      datasets: [{
        label: labels[lang] || labels.pt,
        data: tempos,
        fill: false,
        borderColor: '#2980b9',
        tension: 0.2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: titles[lang] || titles.pt
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: lang === 'pt' ? 'Segundos' : lang === 'es' ? 'Segundos' : 'Seconds'
          }
        }
      }
    }
  });
}
