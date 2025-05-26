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
    const correctText = question.options[question.correct].texto;
    for (let i = question.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
    }
    const newIndex = question.options.findIndex(opt =>
      JSON.stringify(opt.texto) === JSON.stringify(correctText)
    );
    question.correct = newIndex;
  },

  // Smart quiz generator
  generateQuiz: function (mode, numberOfQuestions) {
  if (!numberOfQuestions) numberOfQuestions = mode === 'exam' ? 50 : 10;
    const allQuestions = [];
  let excluded = [];
  let pending = [];
  try {
    const accumulated = JSON.parse(localStorage.getItem('accumulatedQuestions')) || [];
    excluded = accumulated.slice(-150).map(q => q.id);
    const answers = JSON.parse(localStorage.getItem('accumulatedAnswers')) || {};
    const wrong = accumulated.filter(q => answers[q.id] !== q.correct).map(q => q.id);
    pending = Array.from(new Set(wrong));
  } catch (e) {
    excluded = [];
    pending = [];
  }

    const pendingQuestions = [];
    for (const level of ['easy', 'moderate', 'hard', 'very_hard']) {
      const pool = this[level].filter(q => pending.includes(q.id));
      pendingQuestions.push(...pool);
    }

    this.shuffleArray(pendingQuestions);
    allQuestions.push(...pendingQuestions.slice(0, numberOfQuestions));

    if (allQuestions.length < numberOfQuestions) {
      const proportions = {
        easy: 0.20,
        moderate: 0.25,
        hard: 0.25,
        very_hard: 0.30
      };

      for (const [level, share] of Object.entries(proportions)) {
        const amount = Math.round(share * numberOfQuestions);
        const remaining = this[level].filter(q =>
          !excluded.includes(q.id) &&
          !pending.includes(q.id) &&
          !allQuestions.some(existing => existing.id === q.id)
        );
        this.shuffleArray(remaining);
        allQuestions.push(...remaining.slice(0, amount));
      }

      while (allQuestions.length > numberOfQuestions) allQuestions.pop();
    }

    for (const q of allQuestions) {
      this.shuffleOptionsAndUpdateCorrect(q);
    }

    return this.shuffleArray(allQuestions);
  }
};

window.questionBank = questionBank;