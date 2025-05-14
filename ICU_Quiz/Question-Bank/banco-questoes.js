// Question-Bank/banco-questoes.js

const bancoQuestoes = {
  bancosExternos: [],
  facil: [],
  moderada: [],
  dificil: [],
  muito_dificil: [],

  // Adiciona questões e classifica por nível
  adicionarBanco: function (questoes) {
    this.bancosExternos.push(...questoes);
    for (const q of questoes) {
      if (this[q.nivel]) {
        this[q.nivel].push(q);
      }
    }
  },

 // Função auxiliar para embaralhar
embaralharArray: function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
},

// Embaralha alternativas de uma questão e atualiza o índice da correta
embaralharAlternativasEAtualizarCorreta: function (questao) {
  const alternativaCorretaTexto = questao.alternativas[questao.correta].texto;

  // Embaralhar
  for (let i = questao.alternativas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questao.alternativas[i], questao.alternativas[j]] = [questao.alternativas[j], questao.alternativas[i]];
  }

  // Encontrar o novo índice da correta
  const novoIndice = questao.alternativas.findIndex(alt =>
    JSON.stringify(alt.texto) === JSON.stringify(alternativaCorretaTexto)
  );
  questao.correta = novoIndice;
},

  // Função inteligente para gerar questionário
  gerarQuestionario: function (modo, qtdQuestoes) {
    if (!qtdQuestoes) qtdQuestoes = modo === 'simulado' ? 50 : 10;
    const todasQuestoes = [];

    // Recuperar listas anteriores
    let excluidas = [];
    let pendentes = [];
    try {
      const acumuladas = JSON.parse(localStorage.getItem('acumuladoQuestoes')) || [];
      excluidas = acumuladas.slice(-150).map(q => q.id);

      const respostas = JSON.parse(localStorage.getItem('acumuladoRespostas')) || {};
      const erradas = acumuladas.filter(q => respostas[q.id] !== q.correta).map(q => q.id);
      pendentes = Array.from(new Set(erradas));
    } catch (e) {
      excluidas = [];
      pendentes = [];
    }

    // Puxar questões pendentes primeiro
    const pendentesQuestoes = [];
    for (const nivel of ['facil', 'moderada', 'dificil', 'muito_dificil']) {
      const pool = this[nivel].filter(q => pendentes.includes(q.id));
      pendentesQuestoes.push(...pool);
    }

    this.embaralharArray(pendentesQuestoes);
    todasQuestoes.push(...pendentesQuestoes.slice(0, qtdQuestoes));

    // Se não preencher tudo com pendentes, completa com novas (excluindo últimas 150 e as pendentes)
    if (todasQuestoes.length < qtdQuestoes) {
      const proporcao = {
        facil: 0.20,
        moderada: 0.25,
        dificil: 0.25,
        muito_dificil: 0.30
      };

      for (const [nivel, proporcaoNivel] of Object.entries(proporcao)) {
        const quantidade = Math.round(proporcaoNivel * qtdQuestoes);
        const restantes = this[nivel].filter(q =>
          !excluidas.includes(q.id) &&
          !pendentes.includes(q.id) &&
          !todasQuestoes.some(existing => existing.id === q.id)
        );
        this.embaralharArray(restantes);
        todasQuestoes.push(...restantes.slice(0, quantidade));
      }

      while (todasQuestoes.length > qtdQuestoes) todasQuestoes.pop();
    }

// Embaralhar alternativas de cada questão individualmente
for (const q of todasQuestoes) {
  this.embaralharAlternativasEAtualizarCorreta(q);
}

return this.embaralharArray(todasQuestoes); // embaralha ordem das questões
  }
};

// Disponibiliza no escopo global
window.bancoQuestoes = bancoQuestoes;
