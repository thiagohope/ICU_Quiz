// Question-Bank/banco-questoes.js

const questionBank = {
  externalBanks: [],
  easy: [],
  moderate: [],
  hard: [],
  very_hard: [],

  // Add external questions and categorize by difficulty
  addBank: function (questions) {
    this.externalBanks.push(...questions);
    for (const q of questions) {
      if (this[q.level]) {
        this[q.level].push(q);
      }
    }
  },

  // Shuffle helper
  shuffleArray: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  // Shuffle options and update correct index
  shuffleOptionsAndUpdateCorrect: function (question) {
  const correctOption = question.options[question.correct]; // salva o objeto inteiro multilíngue
  for (let i = question.options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
  }
  question.correct = question.options.findIndex(opt =>
    JSON.stringify(opt) === JSON.stringify(correctOption)
  );
},

  getAllQuestions: function () {
    return this.externalBanks ? [].concat(...this.externalBanks) : [];
  },

      getQuestionById: function(id) {
        return this.getAllQuestions().find(q => q.id === id);
    },

  // Smart quiz generator
  generateQuiz: function (mode, numberOfQuestions, areaFilters = []) {
    if (!numberOfQuestions) numberOfQuestions = mode === 'exam' ? 50 : 10; [4]
    console.log(`Generating quiz: mode=${mode}, numQuestions=${numberOfQuestions}, areas=${areaFilters.join(',')}`);

    let allQuestionsGenerated = [];
    let excludedIds = [];
    let pendingQuestionIds = [];
    
    try {
      const accumulated = JSON.parse(localStorage.getItem('accumulatedQuestions')) || [];
      excludedIds = accumulated.slice(-150).map(q => q.id);
      const answers = JSON.parse(localStorage.getItem('accumulatedAnswers')) || {};
      const wrongIds = accumulated.filter(q => typeof q === 'object' && q.id && answers[q.id] !== q.correct).map(q => q.id);
      pendingQuestionIds = Array.from(new Set(wrongIds));
    } catch (e) {
      console.error("Error reading from localStorage for generateQuiz:", e);
      excludedIds = [];
      pendingQuestionIds = [];
    }

    // Obter o pool base de questões, já filtrado por área se necessário
    let basePool = this.getAllQuestions();
    if (areaFilters && areaFilters.length > 0 && !areaFilters.includes('all') && !areaFilters.includes('All Areas')) {
      console.log("Applying area filters:", areaFilters);
      basePool = basePool.filter(q => 
        q.area && Array.isArray(q.area) && q.area.some(a => areaFilters.includes(a.toLowerCase()))
      );
      console.log("Base pool size after area filter:", basePool.length);
    }

    // Adicionar questões pendentes (erradas) do basePool filtrado
    const pendingActualQuestions = [];
    if (basePool && basePool.length > 0) {
        pendingQuestionIds.forEach(id => {
            const q = basePool.find(question => question.id === id);
            if (q && !allQuestionsGenerated.some(existing => existing.id === q.id)) {
                pendingActualQuestions.push(q);
            }
        });
    }
    this.shuffleArray(pendingActualQuestions);
    allQuestionsGenerated.push(...pendingActualQuestions.slice(0, numberOfQuestions));
    console.log(`After pending questions: ${allQuestionsGenerated.length}/${numberOfQuestions}`);

    // Preencher com questões por proporção de dificuldade do basePool filtrado, se necessário
    if (allQuestionsGenerated.length < numberOfQuestions && basePool && basePool.length > 0) {
      const proportions = { easy: 0.20, moderate: 0.25, hard: 0.25, very_hard: 0.30 };
      
      for (const [level, share] of Object.entries(proportions)) {
        if (allQuestionsGenerated.length >= numberOfQuestions) break;
        
        const amountToSelect = Math.round(share * (numberOfQuestions - allQuestionsGenerated.length)); //Calcula o que falta proporcionalmente
        if (amountToSelect <= 0) continue;

        const potentialQuestionsFromLevel = basePool.filter(q => //Filtra do basePool
          q.level === level &&
          !excludedIds.includes(q.id) && //Ainda respeita os excluídos gerais da sessão
          !allQuestionsGenerated.some(existing => existing.id === q.id) //E o que já foi pego para este quiz
        );
        this.shuffleArray(potentialQuestionsFromLevel);
        allQuestionsGenerated.push(...potentialQuestionsFromLevel.slice(0, amountToSelect));
      }
      console.log(`After proportional fill: ${allQuestionsGenerated.length}/${numberOfQuestions}`);
    }

    // Remover excesso (se a seleção por proporção/pendentes passou do limite)
    while (allQuestionsGenerated.length > numberOfQuestions) {
      allQuestionsGenerated.pop();
    }

    // Preenchimento de Emergência: Se ainda faltarem questões, recicla do basePool (questões que batem com o filtro de área)
    if (allQuestionsGenerated.length < numberOfQuestions && basePool && basePool.length > 0) {
      console.log(`generateQuiz: Emergency fill. Needed: ${numberOfQuestions - allQuestionsGenerated.length}. Recycling from area-filtered pool (${basePool.length} available).`);
      let questionsToRecycleFrom = this.shuffleArray([...basePool]); // Recicla do pool já filtrado por área
      let emergencyFillIndex = 0;
      while (allQuestionsGenerated.length < numberOfQuestions && questionsToRecycleFrom.length > 0) {
        allQuestionsGenerated.push(questionsToRecycleFrom[emergencyFillIndex % questionsToRecycleFrom.length]);
        emergencyFillIndex++;
      }
      console.log(`After emergency fill: ${allQuestionsGenerated.length}/${numberOfQuestions}`);
    }
    
    // Se mesmo após tudo isso não atingiu o número (ex: filtros de área resultaram em menos questões que o solicitado)
    // A lista terá o máximo possível dentro dos filtros.
    if (allQuestionsGenerated.length < numberOfQuestions && allQuestionsGenerated.length > 0) {
        console.warn(`Could only generate ${allQuestionsGenerated.length} questions out of ${numberOfQuestions} requested with the current filters.`);
    } else if (allQuestionsGenerated.length === 0 && this.getAllQuestions().length > 0) {
        console.warn(`No questions matched the specified filters. Consider broadening selection or checking filter values.`);
        // Opcional: retornar um array vazio ou um conjunto padrão de questões não filtradas.
        // Por ora, retornará vazio, e o JS do quiz tratará isso.
    }

    // Embaralha as opções de todas as questões selecionadas
    allQuestionsGenerated.forEach(q => {
      if (q && q.options) {
          this.shuffleOptionsAndUpdateCorrect(q);
      } else if (q) {
        console.warn("Question object or its options are invalid during generateQuiz shuffle. ID:", q.id);
      }
    });

    return this.shuffleArray(allQuestionsGenerated);
  }
};

window.questionBank = questionBank;