  const demoQuestionBank = [

    {
    id: 1,
    code: "demo-q01",
    area: ["icu", "general"],
    topic: ["vital signs"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual é o valor normal da pressão arterial média (PAM) geralmente aceito em pacientes críticos?",
      en: "What is the commonly accepted normal value for mean arterial pressure (MAP) in critically ill patients?",
      es: "¿Cuál es el valor normal comúnmente aceptado para la presión arterial media (PAM) en pacientes críticos?"
    },
    options: [
      {
        text: { pt: "50 mmHg", en: "50 mmHg", es: "50 mmHg" },
        explanation: {
          pt: "50 mmHg é muito baixo para garantir perfusão adequada em órgãos vitais.",
          en: "50 mmHg is too low to ensure adequate organ perfusion.",
          es: "50 mmHg es demasiado bajo para asegurar una perfusión adecuada."
        }
      },
      {
        text: { pt: "65 mmHg", en: "65 mmHg", es: "65 mmHg" },
        explanation: {
          pt: "65 mmHg é o valor mínimo comumente aceito para perfusão adequada.",
          en: "65 mmHg is the minimum value commonly accepted for adequate perfusion.",
          es: "65 mmHg es el valor mínimo comúnmente aceptado para una perfusión adecuada."
        }
      },
      {
        text: { pt: "80 mmHg", en: "80 mmHg", es: "80 mmHg" },
        explanation: {
          pt: "80 mmHg é aceitável, mas o limiar mínimo padrão é 65 mmHg.",
          en: "80 mmHg is acceptable, but the standard threshold is 65 mmHg.",
          es: "80 mmHg es aceptable, pero el umbral estándar es 65 mmHg."
        }
      },
      {
        text: { pt: "90 mmHg", en: "90 mmHg", es: "90 mmHg" },
        explanation: {
          pt: "Valores acima de 90 mmHg são frequentemente buscados em choque séptico refratário, mas não são exigidos para todos.",
          en: "Values above 90 mmHg may be targeted in refractory septic shock, but not required for all patients.",
          es: "Valores por encima de 90 mmHg pueden buscarse en shock séptico refractario, pero no en todos los casos."
        }
      }
    ]
  },
  {
    id: 2,
    code: "demo-q02",
    area: ["icu", "infection"],
    topic: ["antibiotics"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Qual é o tempo ideal para início de antibióticos em sepse grave?",
      en: "What is the ideal time to start antibiotics in severe sepsis?",
      es: "¿Cuál es el tiempo ideal para iniciar antibióticos en sepsis grave?"
    },
    options: [
      {
        text: { pt: "Até 6 horas após o diagnóstico", en: "Within 6 hours after diagnosis", es: "Dentro de 6 horas tras el diagnóstico" },
        explanation: {
          pt: "Iniciar após 6 horas está associado a maior mortalidade.",
          en: "Starting after 6 hours is associated with higher mortality.",
          es: "Iniciar después de 6 horas se asocia con mayor mortalidad."
        }
      },
      {
        text: { pt: "Após estabilização hemodinâmica", en: "After hemodynamic stabilization", es: "Después de la estabilización hemodinámica" },
        explanation: {
          pt: "Antibióticos devem ser iniciados imediatamente, mesmo antes da estabilização completa.",
          en: "Antibiotics should be started immediately, even before full stabilization.",
          es: "Los antibióticos deben iniciarse de inmediato, incluso antes de la estabilización completa."
        }
      },
      {
        text: { pt: "Na primeira hora do reconhecimento", en: "Within the first hour of recognition", es: "Dentro de la primera hora del reconocimiento" },
        explanation: {
          pt: "É o padrão ouro segundo diretrizes internacionais (Surviving Sepsis Campaign).",
          en: "This is the gold standard per international guidelines (Surviving Sepsis Campaign).",
          es: "Es el estándar de oro según guías internacionales (Campaña Sobreviviendo a la Sepsis)."
        }
      },
      {
        text: { pt: "Após resultado de culturas", en: "After culture results", es: "Después del resultado de cultivos" },
        explanation: {
          pt: "Esperar resultado de culturas atrasa tratamento e aumenta a mortalidade.",
          en: "Waiting for culture results delays treatment and increases mortality.",
          es: "Esperar resultados de cultivos retrasa el tratamiento y aumenta la mortalidad."
        }
      }
    ]
  },
 {
  id: 3,
  code: "demo-q03",
  area: ["icu", "neuro"],
  topic: ["glasgow"],
  level: "easy",
  correct: 0,
  question: {
    pt: "Qual é a menor pontuação possível na escala de coma de Glasgow?",
    en: "What is the lowest possible score on the Glasgow Coma Scale?",
    es: "¿Cuál es la puntuación más baja posible en la escala de coma de Glasgow?"
  },
  options: [
    { text: { pt: "3", en: "3", es: "3" }, explanation: { pt: "A pontuação mínima é 1 para olhos, 1 para fala e 1 para resposta motora.", en: "The minimum score is 1 for eyes, 1 for verbal, and 1 for motor response.", es: "La puntuación mínima es 1 para ojos, 1 para verbal y 1 para respuesta motora." } },
    { text: { pt: "0", en: "0", es: "0" }, explanation: { pt: "A escala começa em 3, não inclui 0.", en: "The scale starts at 3 and does not include 0.", es: "La escala comienza en 3 y no incluye 0." } },
    { text: { pt: "1", en: "1", es: "1" }, explanation: { pt: "Cada componente pode ter nota mínima 1, mas a soma mínima é 3.", en: "Each component may score 1, but total minimum is 3.", es: "Cada componente puede obtener 1, pero el total mínimo es 3." } },
    { text: { pt: "2", en: "2", es: "2" }, explanation: { pt: "A soma 2 não é possível na escala.", en: "A total score of 2 is not possible.", es: "Una puntuación total de 2 no es posible." } }
  ]
},
{
  id: 4,
  code: "demo-q04",
  area: ["icu", "respiratory"],
  topic: ["mechanical ventilation"],
  level: "easy",
  correct: 2,
  question: {
    pt: "Qual modo ventilatório é mais comumente usado na intubação inicial em UTI?",
    en: "Which ventilator mode is most commonly used for initial intubation in the ICU?",
    es: "¿Qué modo ventilatorio se usa más comúnmente para la intubación inicial en UCI?"
  },
  options: [
    { text: { pt: "CPAP", en: "CPAP", es: "CPAP" }, explanation: { pt: "CPAP não fornece suporte ventilatório completo em pacientes inconscientes.", en: "CPAP does not provide full ventilatory support in unconscious patients.", es: "El CPAP no proporciona soporte ventilatorio total en pacientes inconscientes." } },
    { text: { pt: "SIMV", en: "SIMV", es: "SIMV" }, explanation: { pt: "SIMV é usado em desmame, não na fase aguda de intubação.", en: "SIMV is typically used during weaning, not at initial intubation.", es: "SIMV se utiliza más en el destete que en la intubación inicial." } },
    { text: { pt: "VCV/AC", en: "VCV/AC", es: "VCV/AC" }, explanation: { pt: "Volume controlado (VCV/AC) é o modo mais utilizado no início da ventilação invasiva.", en: "Volume-controlled (VCV/AC) is the most commonly used mode at ventilation start.", es: "El modo controlado por volumen (VCV/AC) es el más común al iniciar ventilación." } },
    { text: { pt: "PSV", en: "PSV", es: "PSV" }, explanation: { pt: "PSV exige esforço respiratório e não é usado na indução da ventilação invasiva.", en: "PSV requires spontaneous effort and is not used in initial ventilator settings.", es: "El PSV requiere esfuerzo respiratorio y no se usa al inicio." } }
  ]
},
{
  id: 5,
  code: "demo-q05",
  area: ["icu", "metabolic"],
  topic: ["acid-base"],
  level: "easy",
  correct: 1,
  question: {
    pt: "Qual é o distúrbio ácido-básico típico em paciente com DPOC descompensado?",
    en: "What is the typical acid-base disorder in a patient with decompensated COPD?",
    es: "¿Cuál es el trastorno ácido-base típico en un paciente con EPOC descompensado?"
  },
  options: [
    { text: { pt: "Alcalose respiratória", en: "Respiratory alkalosis", es: "Alcalosis respiratoria" }, explanation: { pt: "Não é esperado em DPOC descompensado. Pode ocorrer em hiperventilação.", en: "Not typical in COPD exacerbation; more common in hyperventilation.", es: "No es típico del EPOC descompensado, ocurre en hiperventilación." } },
    { text: { pt: "Acidose respiratória", en: "Respiratory acidosis", es: "Acidosis respiratoria" }, explanation: { pt: "Ocorre por retenção de CO₂ devido à hipoventilação crônica.", en: "Occurs due to CO₂ retention from chronic hypoventilation.", es: "Ocurre por retención de CO₂ debido a hipoventilación crónica." } },
    { text: { pt: "Acidose metabólica", en: "Metabolic acidosis", es: "Acidosis metabólica" }, explanation: { pt: "Mais comum em choque ou disfunção renal, não diretamente ligada à DPOC.", en: "More common in shock or renal failure, not specific to COPD.", es: "Más común en shock o fallo renal, no específico del EPOC." } },
    { text: { pt: "Alcalose metabólica", en: "Metabolic alkalosis", es: "Alcalosis metabólica" }, explanation: { pt: "Pode ocorrer como compensação crônica, mas não no quadro agudo.", en: "May occur as chronic compensation, not in acute setting.", es: "Puede ocurrir como compensación crónica, no en el contexto agudo." } }
  ]
},
{
  id: 6,
  code: "demo-q06",
  area: ["icu", "infection"],
  topic: ["infection control"],
  level: "easy",
  correct: 0,
  question: {
    pt: "Qual precaução adicional deve ser adotada para paciente com Clostridioides difficile?",
    en: "What additional precaution should be adopted for a patient with Clostridioides difficile?",
    es: "¿Qué precaución adicional se debe adoptar con un paciente con Clostridioides difficile?"
  },
  options: [
    { text: { pt: "Precaução por contato com lavagem de mãos com água e sabão", en: "Contact precaution with handwashing using soap and water", es: "Precaución de contacto con lavado de manos con agua y jabón" }, explanation: { pt: "Esporos não são eliminados com álcool gel. Água e sabão são obrigatórios.", en: "Spores are not removed with alcohol gel. Soap and water are required.", es: "Los esporos no se eliminan con alcohol. Es obligatorio usar agua y jabón." } },
    { text: { pt: "Precaução respiratória tipo N95", en: "Respiratory precaution with N95 mask", es: "Precaución respiratoria con mascarilla N95" }, explanation: { pt: "Inadequada. C. difficile é transmitido por via fecal-oral, não respiratória.", en: "Not appropriate. C. difficile is transmitted via fecal-oral route, not respiratory.", es: "Inadecuado. El C. difficile se transmite por vía fecal-oral, no respiratoria." } },
    { text: { pt: "Precaução gotículas padrão", en: "Standard droplet precautions", es: "Precaución estándar por gotículas" }, explanation: { pt: "Droplet precautions não são indicadas para enteropatógenos.", en: "Droplet precautions are not appropriate for enteric infections.", es: "No se indican precauciones por gotículas en infecciones entéricas." } },
    { text: { pt: "Isolamento aéreo", en: "Airborne isolation", es: "Aislamiento aéreo" }, explanation: { pt: "Desnecessário. C. difficile não é transmitido por aerossóis.", en: "Unnecessary. C. difficile is not airborne-transmitted.", es: "Innecesario. El C. difficile no se transmite por el aire." } }
  ]
},
{
  id: 7,
  code: "demo-q07",
  area: ["icu", "renal"],
  topic: ["AKI"],
  level: "easy",
  correct: 1,
  question: {
    pt: "Qual dos seguintes critérios define lesão renal aguda (LRA) segundo KDIGO?",
    en: "Which of the following criteria defines acute kidney injury (AKI) per KDIGO?",
    es: "¿Cuál de los siguientes criterios define lesión renal aguda (LRA) según KDIGO?"
  },
  options: [
    { text: { pt: "Creatinina > 1,0 mg/dL", en: "Creatinine > 1.0 mg/dL", es: "Creatinina > 1.0 mg/dL" }, explanation: { pt: "O valor absoluto não define LRA. É necessário aumento relativo ou redução do débito urinário.", en: "Absolute value does not define AKI; change over time or urine output matters.", es: "El valor absoluto no define LRA; importa el cambio temporal o la diuresis." } },
    { text: { pt: "Aumento de creatinina ≥ 0,3 mg/dL em 48h", en: "Creatinine increase ≥ 0.3 mg/dL in 48h", es: "Aumento de creatinina ≥ 0.3 mg/dL en 48h" }, explanation: { pt: "É critério diagnóstico KDIGO para LRA.", en: "This is a KDIGO diagnostic criterion for AKI.", es: "Este es un criterio diagnóstico KDIGO para LRA." } },
    { text: { pt: "Taxa de filtração glomerular < 60", en: "GFR < 60", es: "TFG < 60" }, explanation: { pt: "Reflete doença renal crônica, não aguda.", en: "Indicates chronic, not acute, kidney disease.", es: "Refleja enfermedad renal crónica, no aguda." } },
    { text: { pt: "Excreção fracionada de sódio < 1%", en: "FeNa < 1%", es: "Fracción excretada de sodio < 1%" }, explanation: { pt: "Pode indicar hipoperfusão, mas não é critério diagnóstico formal para LRA.", en: "Suggests hypoperfusion but not a formal AKI diagnostic criterion.", es: "Sugiere hipoperfusión pero no es un criterio diagnóstico de LRA." } }
  ]
},
{
  id: 8,
  code: "demo-q08",
  area: ["icu", "sedation"],
  topic: ["sedation scales"],
  level: "easy",
  correct: 2,
  question: {
    pt: "Qual escala é comumente utilizada para monitorar o nível de sedação em pacientes de UTI?",
    en: "Which scale is commonly used to monitor sedation level in ICU patients?",
    es: "¿Qué escala se usa comúnmente para monitorizar el nivel de sedación en pacientes de UCI?"
  },
  options: [
    {
      text: { pt: "Glasgow", en: "Glasgow", es: "Glasgow" },
      explanation: {
        pt: "A escala de Glasgow avalia coma e resposta neurológica, não sedação.",
        en: "Glasgow scale evaluates coma and neurological response, not sedation.",
        es: "La escala de Glasgow evalúa el coma y la respuesta neurológica, no la sedación."
      }
    },
    {
      text: { pt: "Apache II", en: "Apache II", es: "Apache II" },
      explanation: {
        pt: "Apache II é uma escala de gravidade geral, não para sedação.",
        en: "Apache II is a general severity score, not a sedation scale.",
        es: "Apache II es una escala de gravedad, no para sedación."
      }
    },
    {
      text: { pt: "RASS", en: "RASS", es: "RASS" },
      explanation: {
        pt: "O RASS é a escala mais usada para monitorar sedação e agitação.",
        en: "RASS is the most widely used scale to monitor sedation and agitation.",
        es: "RASS es la escala más usada para monitorear sedación y agitación."
      }
    },
    {
      text: { pt: "SAPS 3", en: "SAPS 3", es: "SAPS 3" },
      explanation: {
        pt: "SAPS 3 é uma escala prognóstica, não usada para sedação.",
        en: "SAPS 3 is a prognostic scoring system, not used for sedation.",
        es: "SAPS 3 es una escala pronóstica, no se usa para sedación."
      }
    }
  ]
},
{
  id: 9,
  code: "demo-q09",
  area: ["icu", "endocrinology"],
  topic: ["glycemic control"],
  level: "easy",
  correct: 1,
  question: {
    pt: "Qual é o alvo glicêmico recomendado em pacientes críticos não diabéticos em UTI?",
    en: "What is the recommended glycemic target in non-diabetic ICU patients?",
    es: "¿Cuál es el objetivo glucémico recomendado en pacientes no diabéticos en UCI?"
  },
  options: [
    {
      text: { pt: "40–80 mg/dL", en: "40–80 mg/dL", es: "40–80 mg/dL" },
      explanation: {
        pt: "Esse valor é muito baixo e aumenta o risco de hipoglicemia severa.",
        en: "This range is too low and increases risk of severe hypoglycemia.",
        es: "Este valor es demasiado bajo y aumenta el riesgo de hipoglucemia."
      }
    },
    {
      text: { pt: "140–180 mg/dL", en: "140–180 mg/dL", es: "140–180 mg/dL" },
      explanation: {
        pt: "É o intervalo alvo recomendado pelas principais diretrizes para pacientes críticos.",
        en: "This is the recommended target range by major guidelines for critically ill patients.",
        es: "Este es el rango objetivo recomendado por las guías para pacientes críticos."
      }
    },
    {
      text: { pt: "200–250 mg/dL", en: "200–250 mg/dL", es: "200–250 mg/dL" },
      explanation: {
        pt: "Valores elevados estão associados a piores desfechos.",
        en: "Higher glucose values are associated with worse outcomes.",
        es: "Los valores altos de glucosa se asocian con peores desenlaces."
      }
    },
    {
      text: { pt: "Até 300 mg/dL se assintomático", en: "Up to 300 mg/dL if asymptomatic", es: "Hasta 300 mg/dL si está asintomático" },
      explanation: {
        pt: "Não recomendado. Mesmo sem sintomas, hiperglicemia deve ser tratada.",
        en: "Not recommended. Hyperglycemia should be treated even if asymptomatic.",
        es: "No recomendado. La hiperglucemia debe tratarse incluso si es asintomática."
      }
    }
  ]
},
{
  id: 10,
  code: "demo-q10",
  area: ["icu", "hematology"],
  topic: ["transfusion"],
  level: "easy",
  correct: 2,
  question: {
    pt: "Qual é o nível de hemoglobina mais comumente usado como limiar para transfusão em pacientes estáveis na UTI?",
    en: "What hemoglobin level is most commonly used as a transfusion threshold in stable ICU patients?",
    es: "¿Cuál es el nivel de hemoglobina más usado como umbral de transfusión en pacientes estables en UCI?"
  },
  options: [
    {
      text: { pt: "11 g/dL", en: "11 g/dL", es: "11 g/dL" },
      explanation: {
        pt: "Esse valor é conservador demais e não se alinha às recomendações atuais.",
        en: "This is too conservative and not aligned with current recommendations.",
        es: "Este valor es demasiado conservador y no se alinea con las recomendaciones actuales."
      }
    },
    {
      text: { pt: "10 g/dL", en: "10 g/dL", es: "10 g/dL" },
      explanation: {
        pt: "Foi usado no passado, mas hoje o limiar é mais restritivo.",
        en: "Used in the past, but current threshold is more restrictive.",
        es: "Se usaba en el pasado, pero ahora el umbral es más restrictivo."
      }
    },
    {
      text: { pt: "7 g/dL", en: "7 g/dL", es: "7 g/dL" },
      explanation: {
        pt: "Este é o valor recomendado por diretrizes para pacientes estáveis.",
        en: "This is the guideline-recommended threshold for stable patients.",
        es: "Este es el umbral recomendado por las guías para pacientes estables."
      }
    },
    {
      text: { pt: "5 g/dL", en: "5 g/dL", es: "5 g/dL" },
      explanation: {
        pt: "Muito baixo e associado a risco aumentado de hipoxemia tecidual.",
        en: "Too low and associated with increased risk of tissue hypoxia.",
        es: "Demasiado bajo y asociado con riesgo de hipoxia tisular."
      }
    }
  ]
},
{
  id: 11,
  code: "demo-q11",
  area: ["icu", "neuro"],
  topic: ["coma", "brain death"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Em suspeita de morte encefálica, qual reflexo deve obrigatoriamente estar ausente para se prosseguir com o protocolo?",
    en: "In suspected brain death, which reflex must be absent to proceed with the protocol?",
    es: "En sospecha de muerte cerebral, ¿qué reflejo debe estar ausente para continuar con el protocolo?"
  },
  options: [
    {
      text: { pt: "Reflexo oculocefálico", en: "Oculocephalic reflex", es: "Reflejo oculocefálico" },
      explanation: {
        pt: "A ausência do reflexo oculocefálico indica ausência de atividade troncoencefálica.",
        en: "Absence of the oculocephalic reflex indicates brainstem areflexia.",
        es: "La ausencia del reflejo oculocefálico indica arreflexia del tronco encefálico."
      }
    },
    {
      text: { pt: "Reflexo patelar", en: "Patellar reflex", es: "Reflejo patelar" },
      explanation: {
        pt: "Pode estar presente em morte encefálica, pois é medular.",
        en: "May persist in brain death because it is spinal.",
        es: "Puede estar presente en muerte cerebral porque es espinal."
      }
    },
    {
      text: { pt: "Reflexo cutâneo plantar", en: "Plantar reflex", es: "Reflejo plantar" },
      explanation: {
        pt: "Também é de origem espinal e pode ser preservado.",
        en: "Also spinal in origin and may be preserved.",
        es: "También de origen espinal y puede estar presente."
      }
    },
    {
      text: { pt: "Reflexo corneano unilateral", en: "Unilateral corneal reflex", es: "Reflejo corneal unilateral" },
      explanation: {
        pt: "O protocolo exige ausência bilateral. Unilateral não é suficiente.",
        en: "Protocol requires bilateral absence; unilateral is insufficient.",
        es: "El protocolo exige ausencia bilateral; unilateral no basta."
      }
    }
  ]
},
{
  id: 12,
  code: "demo-q12",
  area: ["icu", "infection"],
  topic: ["ventilator-associated pneumonia"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Qual das seguintes medidas é mais efetiva para prevenir pneumonia associada à ventilação mecânica (PAV)?",
    en: "Which of the following is most effective in preventing ventilator-associated pneumonia (VAP)?",
    es: "¿Cuál de las siguientes es más eficaz para prevenir la neumonía asociada a la ventilación mecánica (NAV)?"
  },
  options: [
    {
      text: { pt: "Técnica asséptica na punção arterial", en: "Aseptic technique during arterial puncture", es: "Técnica aséptica en punción arterial" },
      explanation: {
        pt: "Importante para evitar infecção local, mas não impacta diretamente PAV.",
        en: "Important to prevent local infection but not directly related to VAP.",
        es: "Importante para evitar infección local, pero no afecta directamente la NAV."
      }
    },
    {
      text: { pt: "Rotina de antibiótico empírico prolongado", en: "Prolonged empirical antibiotic use", es: "Uso prolongado de antibióticos empíricos" },
      explanation: {
        pt: "Pode aumentar resistência bacteriana e não previne PAV.",
        en: "May promote resistance and does not prevent VAP.",
        es: "Puede generar resistencia y no previene la NAV."
      }
    },
    {
      text: { pt: "Uso contínuo de bloqueador neuromuscular", en: "Continuous use of neuromuscular blockers", es: "Uso continuo de bloqueadores neuromusculares" },
      explanation: {
        pt: "Prolonga imobilização e risco de PAV.",
        en: "Prolongs immobility and increases VAP risk.",
        es: "Prolonga la inmovilidad y aumenta el riesgo de NAV."
      }
    },
    {
      text: { pt: "Elevação da cabeceira ≥ 30º", en: "Head of bed elevation ≥ 30º", es: "Elevación de cabecera ≥ 30º" },
      explanation: {
        pt: "Reduz microaspiração e é recomendação de primeira linha para prevenção de PAV.",
        en: "Reduces microaspiration and is a first-line prevention strategy for VAP.",
        es: "Reduce la microaspiración y es estrategia de primera línea contra la NAV."
      }
    }
  ]
},
{
  id: 13,
  code: "demo-q13",
  area: ["icu", "hemodynamics"],
  topic: ["shock"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente com sepse grave, PAM 55 mmHg e lactato 4.2. Qual primeira intervenção após volume adequado?",
    en: "Septic patient, MAP 55 mmHg and lactate 4.2. What is the first step after adequate fluid resuscitation?",
    es: "Paciente séptico, PAM 55 mmHg y lactato 4.2. ¿Cuál es el primer paso tras la reposición hídrica adecuada?"
  },
  options: [
    {
      text: { pt: "Iniciar vasopressor", en: "Start vasopressor", es: "Iniciar vasopresor" },
      explanation: {
        pt: "Vasopressor (como noradrenalina) deve ser iniciado se PAM < 65 após volume.",
        en: "Vasopressors (e.g. norepinephrine) are indicated if MAP < 65 after fluids.",
        es: "Los vasopresores se indican si la PAM sigue < 65 tras líquidos."
      }
    },
    {
      text: { pt: "Administrar bicarbonato IV", en: "Administer IV bicarbonate", es: "Administrar bicarbonato IV" },
      explanation: {
        pt: "Bicarbonato não é primeira linha; depende do pH e causa da acidose.",
        en: "Bicarbonate is not first-line; it depends on pH and cause of acidosis.",
        es: "El bicarbonato no es de primera línea; depende del pH y la causa."
      }
    },
    {
      text: { pt: "Iniciar corticosteroide imediato", en: "Start corticosteroids immediately", es: "Iniciar corticoides inmediatamente" },
      explanation: {
        pt: "Usados em choque refratário. Não é primeira medida.",
        en: "Used in refractory shock. Not a first step.",
        es: "Se usa en shock refractario. No es el primer paso."
      }
    },
    {
      text: { pt: "Repetir antibiótico de amplo espectro", en: "Repeat broad-spectrum antibiotics", es: "Repetir antibióticos de amplio espectro" },
      explanation: {
        pt: "Repetição antibiótica sem indicação específica não é útil nesse momento.",
        en: "Repeating antibiotics without indication is not effective here.",
        es: "Repetir antibióticos sin indicación no ayuda en este caso."
      }
    }
  ]
},
{
  id: 14,
  code: "demo-q14",
  area: ["icu", "renal"],
  topic: ["RRT indication"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Qual das seguintes indicações é clássica para início de terapia renal substitutiva (TRS) na UTI?",
    en: "Which of the following is a classic indication for initiating renal replacement therapy (RRT) in ICU?",
    es: "¿Cuál de las siguientes es una indicación clásica para iniciar terapia de reemplazo renal (TRR) en UCI?"
  },
  options: [
    {
      text: { pt: "Creatinina > 2,0 mg/dL", en: "Creatinine > 2.0 mg/dL", es: "Creatinina > 2.0 mg/dL" },
      explanation: {
        pt: "Valor absoluto não é critério isolado para diálise.",
        en: "Absolute value is not a sole indication for dialysis.",
        es: "El valor absoluto no es criterio exclusivo para diálisis."
      }
    },
    {
      text: { pt: "Oligúria por 6 horas", en: "Oliguria for 6 hours", es: "Oliguria por 6 horas" },
      explanation: {
        pt: "Critério de LRA, mas não suficiente isoladamente para iniciar TRS.",
        en: "AKI criterion, but not always sufficient alone for RRT.",
        es: "Criterio de LRA, pero no suficiente por sí solo para TRR."
      }
    },
    {
      text: { pt: "Anúria com 12 horas de evolução", en: "Anuria for 12 hours", es: "Anuria durante 12 horas" },
      explanation: {
        pt: "Indicação relativa. Depende de volume, eletrólitos, e sobrecarga.",
        en: "Relative indication. Depends on volume and electrolyte status.",
        es: "Indicación relativa. Depende del volumen y electrolitos."
      }
    },
    {
      text: { pt: "Hipercalemia refratária a tratamento clínico", en: "Refractory hyperkalemia", es: "Hipercalemia refractaria al tratamiento" },
      explanation: {
        pt: "É uma das indicações clássicas e absolutas para início de TRS.",
        en: "A classic absolute indication for RRT initiation.",
        es: "Indicación clásica absoluta para iniciar TRR."
      }
    }
  ]
},
{
  id: 15,
  code: "demo-q15",
  area: ["icu", "cardiology"],
  topic: ["troponin"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Qual é o principal uso da troponina I em pacientes críticos?",
    en: "What is the main use of troponin I in critically ill patients?",
    es: "¿Cuál es el principal uso de la troponina I en pacientes críticos?"
  },
  options: [
    {
      text: { pt: "Avaliar função renal", en: "Evaluate renal function", es: "Evaluar función renal" },
      explanation: {
        pt: "Troponina não é marcador renal.",
        en: "Troponin is not a marker of kidney function.",
        es: "La troponina no es un marcador renal."
      }
    },
    {
      text: { pt: "Diagnosticar lesão miocárdica", en: "Diagnose myocardial injury", es: "Diagnosticar lesión miocárdica" },
      explanation: {
        pt: "Troponina I é marcador sensível e específico para dano cardíaco.",
        en: "Troponin I is a sensitive and specific marker for cardiac injury.",
        es: "La troponina I es un marcador sensible y específico de daño cardíaco."
      }
    },
    {
      text: { pt: "Determinar risco de sepse grave", en: "Determine risk of severe sepsis", es: "Determinar riesgo de sepsis grave" },
      explanation: {
        pt: "Pode se elevar em sepse, mas não é marcador específico.",
        en: "Can rise in sepsis, but not a specific marker.",
        es: "Puede elevarse en sepsis, pero no es específico."
      }
    },
    {
      text: { pt: "Avaliar função hepática", en: "Evaluate liver function", es: "Evaluar función hepática" },
      explanation: {
        pt: "Não tem relação com função hepática.",
        en: "Not related to liver function.",
        es: "No tiene relación con la función hepática."
      }
    }
  ]
},
{
  id: 16,
  code: "demo-q16",
  area: ["icu", "cardiology"],
  topic: ["tachyarrhythmias"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Qual é a conduta inicial em paciente instável com taquicardia supraventricular?",
    en: "What is the initial management in an unstable patient with supraventricular tachycardia (SVT)?",
    es: "¿Cuál es la conducta inicial en un paciente inestable con taquicardia supraventricular?"
  },
  options: [
    {
      text: { pt: "Adenosina em bolus", en: "IV adenosine", es: "Adenosina en bolo" },
      explanation: {
        pt: "Usada em pacientes estáveis. Instabilidade requer cardioversão elétrica.",
        en: "Used in stable patients. Electrical cardioversion is needed in unstable cases.",
        es: "Se usa en pacientes estables. La cardioversión eléctrica es necesaria en inestables."
      }
    },
    {
      text: { pt: "Amiodarona lenta", en: "Slow amiodarone", es: "Amiodarona lenta" },
      explanation: {
        pt: "Opção para controle químico, mas não é primeira linha em instabilidade.",
        en: "Used for chemical control but not first-line in instability.",
        es: "Se usa como control químico pero no es primera opción en inestabilidad."
      }
    },
    {
      text: { pt: "Beta-bloqueador oral", en: "Oral beta-blocker", es: "Betabloqueador oral" },
      explanation: {
        pt: "Inadequado em urgência hemodinâmica.",
        en: "Inappropriate in hemodynamic emergency.",
        es: "Inadecuado en emergencia hemodinámica."
      }
    },
    {
      text: { pt: "Cardioversão elétrica sincronizada", en: "Synchronized electrical cardioversion", es: "Cardioversión eléctrica sincronizada" },
      explanation: {
        pt: "É o tratamento de escolha em instabilidade com taquiarritmias.",
        en: "It is the treatment of choice for hemodynamically unstable tachyarrhythmias.",
        es: "Es el tratamiento de elección en taquiarritmias con inestabilidad."
      }
    }
  ]
},
{
  id: 17,
  code: "demo-q17",
  area: ["icu", "coagulation"],
  topic: ["anticoagulation"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente com TEV recente, internado na UTI, inicia sangramento gastrointestinal. Qual a primeira conduta?",
    en: "ICU patient with recent VTE develops gastrointestinal bleeding. What is the first step?",
    es: "Paciente en UCI con TEV reciente presenta sangrado gastrointestinal. ¿Cuál es el primer paso?"
  },
  options: [
    {
      text: { pt: "Suspender anticoagulação", en: "Suspend anticoagulation", es: "Suspender anticoagulación" },
      explanation: {
        pt: "Interromper anticoagulante é a primeira medida até estabilizar o sangramento.",
        en: "Halting anticoagulation is the first measure until bleeding is stabilized.",
        es: "Suspender anticoagulante es la primera medida hasta controlar el sangrado."
      }
    },
    {
      text: { pt: "Administrar plasma fresco", en: "Administer FFP", es: "Administrar plasma fresco" },
      explanation: {
        pt: "Pode ser útil, mas deve-se primeiro suspender o agente causador.",
        en: "May be helpful, but the causative agent should be stopped first.",
        es: "Puede ayudar, pero debe suspenderse primero el agente causal."
      }
    },
    {
      text: { pt: "Iniciar bomba de omeprazol", en: "Start omeprazole pump", es: "Iniciar bomba de omeprazol" },
      explanation: {
        pt: "Útil na hemorragia digestiva, mas não resolve anticoagulação ativa.",
        en: "Useful in GI bleeding, but doesn’t stop active anticoagulation.",
        es: "Útil en sangrado GI, pero no detiene la anticoagulación activa."
      }
    },
    {
      text: { pt: "Trocar por anticoagulante oral", en: "Switch to oral anticoagulant", es: "Cambiar a anticoagulante oral" },
      explanation: {
        pt: "Inadequado em sangramento ativo.",
        en: "Inappropriate during active bleeding.",
        es: "Inadecuado durante sangrado activo."
      }
    }
  ]
},
{
  id: 18,
  code: "demo-q18",
  area: ["icu", "endocrinology"],
  topic: ["diabetic ketoacidosis"],
  level: "moderate",
  correct: 2,
  question: {
    pt: "Qual das condutas abaixo é mandatória no tratamento da cetoacidose diabética (CAD)?",
    en: "Which of the following is mandatory in diabetic ketoacidosis (DKA) treatment?",
    es: "¿Cuál de las siguientes es obligatoria en el tratamiento de la cetoacidosis diabética (CAD)?"
  },
  options: [
    {
      text: { pt: "Restrição hídrica rigorosa", en: "Strict fluid restriction", es: "Restricción hídrica estricta" },
      explanation: {
        pt: "O oposto é necessário: reposição volêmica agressiva inicial.",
        en: "The opposite is required: aggressive initial fluid resuscitation.",
        es: "Lo contrario es necesario: reposición hídrica agresiva al inicio."
      }
    },
    {
      text: { pt: "Correção imediata do potássio com diuréticos", en: "Immediate potassium correction with diuretics", es: "Corrección inmediata del potasio con diuréticos" },
      explanation: {
        pt: "Diuréticos não são indicados. Correção depende do valor do potássio.",
        en: "Diuretics are not indicated. Correction depends on serum potassium.",
        es: "No se indican diuréticos. Depende del valor del potasio sérico."
      }
    },
    {
      text: { pt: "Infusão contínua de insulina regular", en: "Continuous IV infusion of regular insulin", es: "Infusión continua de insulina regular" },
      explanation: {
        pt: "É o tratamento padrão após início de reposição volêmica.",
        en: "It is the standard treatment after fluid resuscitation begins.",
        es: "Es el tratamiento estándar tras iniciar la reposición hídrica."
      }
    },
    {
      text: { pt: "Correção do bicarbonato sempre que pH < 7,3", en: "Bicarbonate correction if pH < 7.3", es: "Corregir bicarbonato si pH < 7.3" },
      explanation: {
        pt: "Bicarbonato só é indicado se pH < 6,9.",
        en: "Bicarbonate is only indicated if pH < 6.9.",
        es: "Bicarbonato sólo se indica si el pH < 6.9."
      }
    }
  ]
},
{
  id: 19,
  code: "demo-q19",
  area: ["icu", "neurology"],
  topic: ["intracranial hypertension"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Qual dos seguintes sinais clínicos é mais sugestivo de hipertensão intracraniana aguda?",
    en: "Which of the following clinical signs is most suggestive of acute intracranial hypertension?",
    es: "¿Cuál de los siguientes signos clínicos sugiere más una hipertensión intracraneal aguda?"
  },
  options: [
    {
      text: { pt: "Reflexo patelar exaltado", en: "Exaggerated patellar reflex", es: "Reflejo rotuliano exaltado" },
      explanation: {
        pt: "Pode ocorrer em vários contextos neurológicos e não é específico.",
        en: "May occur in various neurological conditions and is nonspecific.",
        es: "Puede ocurrir en varias condiciones neurológicas y no es específico."
      }
    },
    {
      text: { pt: "Pupilas assimétricas e bradicardia", en: "Asymmetric pupils and bradycardia", es: "Pupilas asimétricas y bradicardia" },
      explanation: {
        pt: "Clássico de herniação cerebral iminente e HIC aguda.",
        en: "Classic for impending brain herniation and acute ICH.",
        es: "Clásico en herniación cerebral inminente e HIC aguda."
      }
    },
    {
      text: { pt: "Hipotermia e miose bilateral", en: "Hypothermia and bilateral miosis", es: "Hipotermia y miosis bilateral" },
      explanation: {
        pt: "Pode ocorrer em intoxicações ou disfunções hipotalâmicas.",
        en: "May occur in intoxication or hypothalamic dysfunction.",
        es: "Puede ocurrir en intoxicaciones o disfunción hipotalámica."
      }
    },
    {
      text: { pt: "Reflexo oculocefálico preservado", en: "Preserved oculocephalic reflex", es: "Reflejo oculocefálico preservado" },
      explanation: {
        pt: "Reflexo presente sugere função troncoencefálica preservada.",
        en: "Presence of this reflex suggests intact brainstem.",
        es: "Reflejo presente indica tronco encefálico preservado."
      }
    }
  ]
},
{
  id: 20,
  code: "demo-q20",
  area: ["icu", "cardiology"],
  topic: ["pulmonary embolism"],
  level: "hard",
  correct: 3,
  question: {
    pt: "Paciente em UTI com instabilidade hemodinâmica subita e TEP maciço. Qual a conduta mais indicada?",
    en: "ICU patient with sudden hemodynamic instability and massive PE. What is the best next step?",
    es: "Paciente en UCI con inestabilidad hemodinámica súbita y TEP masivo. ¿Cuál es la mejor conducta?"
  },
  options: [
    {
      text: { pt: "Oxigenoterapia de alto fluxo", en: "High-flow oxygen therapy", es: "Oxigenoterapia de alto flujo" },
      explanation: {
        pt: "Importante como suporte, mas não trata a causa.",
        en: "Supportive only; does not treat the cause.",
        es: "Solo soporte, no trata la causa."
      }
    },
    {
      text: { pt: "Iniciar heparina subcutânea", en: "Start subcutaneous heparin", es: "Heparina subcutánea" },
      explanation: {
        pt: "Forma inadequada em instabilidade hemodinâmica.",
        en: "Inappropriate route in hemodynamic instability.",
        es: "Inadecuado en inestabilidad hemodinámica."
      }
    },
    {
      text: { pt: "Solicitar angiotomografia torácica", en: "Order CT pulmonary angiogram", es: "Solicitar angiotomografía pulmonar" },
      explanation: {
        pt: "Diagnóstico deve ser clínico + ecocardiográfico em choque.",
        en: "Diagnosis in shock should be clinical + echocardiographic.",
        es: "El diagnóstico en shock debe ser clínico + ecocardiografía."
      }
    },
    {
      text: { pt: "Trombólise sistêmica imediata", en: "Immediate systemic thrombolysis", es: "Trombólisis sistémica inmediata" },
      explanation: {
        pt: "É o tratamento de escolha em TEP maciço com instabilidade.",
        en: "Treatment of choice for massive PE with instability.",
        es: "Tratamiento de elección en TEP masivo con inestabilidad."
      }
    }
  ]
},
{
  id: 21,
  code: "demo-q21",
  area: ["icu", "infectious"],
  topic: ["meningitis"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Homem imunossuprimido, febre e rigidez de nuca. Qual a próxima conduta após coleta de sangue?",
    en: "Immunosuppressed man, fever, neck stiffness. What’s the next step after blood collection?",
    es: "Hombre inmunosuprimido, fiebre y rigidez de nuca. ¿Próximo paso tras la toma de sangre?"
  },
  options: [
    {
      text: { pt: "Tomografia de crânio de urgência", en: "Urgent head CT", es: "TC cerebral urgente" },
      explanation: {
        pt: "Importante, mas não deve atrasar antibiótico.",
        en: "Important but must not delay antibiotics.",
        es: "Importante, pero no debe retrasar antibióticos."
      }
    },
    {
      text: { pt: "Iniciar antibiótico empírico imediato", en: "Start immediate empirical antibiotics", es: "Iniciar antibióticos empíricos de inmediato" },
      explanation: {
        pt: "Indicado logo após coleta de culturas, antes mesmo da TC.",
        en: "Indicated immediately after cultures, even before CT.",
        es: "Indicados justo tras cultivos, antes de la TC."
      }
    },
    {
      text: { pt: "Punção lombar com urgência", en: "Urgent lumbar puncture", es: "Punción lumbar urgente" },
      explanation: {
        pt: "Contraindicada antes de TC em pacientes com risco de hipertensão intracraniana.",
        en: "Contraindicated before CT in high-risk patients.",
        es: "Contraindicada antes de TC en pacientes de alto riesgo."
      }
    },
    {
      text: { pt: "Repetir hemograma", en: "Repeat CBC", es: "Repetir hemograma" },
      explanation: {
        pt: "Sem impacto imediato na conduta.",
        en: "Does not change urgent management.",
        es: "No cambia la conducta inmediata."
      }
    }
  ]
},
{
  id: 22,
  code: "demo-q22",
  area: ["icu", "pharmacology"],
  topic: ["vasopressors"],
  level: "hard",
  correct: 0,
  question: {
    pt: "Qual é o vasopressor de primeira escolha na maioria dos casos de choque séptico?",
    en: "What is the first-line vasopressor in most cases of septic shock?",
    es: "¿Cuál es el vasopresor de primera elección en la mayoría de los casos de shock séptico?"
  },
  options: [
    {
      text: { pt: "Noradrenalina", en: "Norepinephrine", es: "Noradrenalina" },
      explanation: {
        pt: "É o vasopressor padrão ouro para choque séptico.",
        en: "Gold standard vasopressor for septic shock.",
        es: "Vasopresor de elección en shock séptico."
      }
    },
    {
      text: { pt: "Dopamina", en: "Dopamine", es: "Dopamina" },
      explanation: {
        pt: "Mais efeitos colaterais e maior mortalidade em estudos.",
        en: "Higher side effects and mortality in studies.",
        es: "Más efectos adversos y mayor mortalidad."
      }
    },
    {
      text: { pt: "Vasopressina", en: "Vasopressin", es: "Vasopresina" },
      explanation: {
        pt: "Pode ser adicionado à noradrenalina como agente secundário.",
        en: "Used as adjunct to norepinephrine.",
        es: "Se usa como coadyuvante a la noradrenalina."
      }
    },
    {
      text: { pt: "Adrenalina", en: "Epinephrine", es: "Adrenalina" },
      explanation: {
        pt: "Usada em última linha ou anafilaxia.",
        en: "Reserved for anaphylaxis or rescue.",
        es: "Reservada para anafilaxia o rescate."
      }
    }
  ]
},
{
  id: 23,
  code: "demo-q23",
  area: ["icu", "renal"],
  topic: ["electrolytes"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Paciente em uso de inibidor da ECA desenvolve fraqueza muscular e ECG com ondas T apiculadas. Qual o achado laboratorial esperado?",
    en: "Patient on ACE inhibitor develops muscle weakness and peaked T waves. What lab finding is expected?",
    es: "Paciente en IECA desarrolla debilidad y ondas T picudas. ¿Qué hallazgo se espera?"
  },
  options: [
    {
      text: { pt: "Hipocalcemia", en: "Hypocalcemia", es: "Hipocalcemia" },
      explanation: {
        pt: "Pode causar fraqueza, mas não provoca T apiculada.",
        en: "Can cause weakness, but not peaked T waves.",
        es: "Puede causar debilidad, pero no ondas T picudas."
      }
    },
    {
      text: { pt: "Hiponatremia", en: "Hyponatremia", es: "Hiponatremia" },
      explanation: {
        pt: "Não explica as alterações eletrocardiográficas.",
        en: "Does not explain ECG changes.",
        es: "No explica los cambios en el ECG."
      }
    },
    {
      text: { pt: "Hipercalemia", en: "Hyperkalemia", es: "Hipercalemia" },
      explanation: {
        pt: "Clássico: T apiculada + fraqueza = potássio elevado.",
        en: "Classic: peaked T + weakness = high potassium.",
        es: "Clásico: T picuda + debilidad = potasio elevado."
      }
    },
    {
      text: { pt: "Hipomagnesemia", en: "Hypomagnesemia", es: "Hipomagnesemia" },
      explanation: {
        pt: "Pode causar arritmia, mas não T apiculada.",
        en: "May cause arrhythmia, but not peaked T.",
        es: "Puede causar arritmia, pero no T picuda."
      }
    }
  ]
},
{
  id: 24,
  code: "demo-q24",
  area: ["icu", "hemodynamics"],
  topic: ["shock types"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Em qual tipo de choque há aumento de PVC com baixo DC e pulmões normais na ausculta?",
    en: "In which type of shock is CVP increased, CO decreased, and lungs are clear?",
    es: "¿En qué tipo de shock hay PVC alta, GC bajo y pulmones limpios?"
  },
  options: [
    {
      text: { pt: "Choque séptico", en: "Septic shock", es: "Shock séptico" },
      explanation: {
        pt: "PVC tende a ser baixo; pulmões podem estar congestionados se refratário.",
        en: "CVP tends to be low; lungs may have findings if refractory.",
        es: "PVC suele ser baja; puede haber congestión pulmonar si es refractario."
      }
    },
    {
      text: { pt: "Choque obstrutivo (ex: TEP)", en: "Obstructive shock (e.g., PE)", es: "Shock obstructivo (ej: TEP)" },
      explanation: {
        pt: "PVC elevada, DC baixo e sem congestão pulmonar é típico.",
        en: "High CVP, low CO, and clear lungs are typical.",
        es: "PVC alta, GC bajo y pulmones limpios son característicos."
      }
    },
    {
      text: { pt: "Choque cardiogênico", en: "Cardiogenic shock", es: "Shock cardiogénico" },
      explanation: {
        pt: "Pode ter PVC elevada, mas geralmente há congestão pulmonar.",
        en: "CVP may be high, but lungs usually show congestion.",
        es: "PVC alta, pero suele haber congestión pulmonar."
      }
    },
    {
      text: { pt: "Choque distributivo", en: "Distributive shock", es: "Shock distributivo" },
      explanation: {
        pt: "Geralmente PVC e DC estão normais ou aumentados inicialmente.",
        en: "Typically, CVP and CO are normal or high initially.",
        es: "PVC y GC suelen estar normales o elevados al inicio."
      }
    }
  ]
},
{
  id: 25,
  code: "demo-q25",
  area: ["icu", "infectious"],
  topic: ["antibiotic stewardship"],
  level: "hard",
  correct: 0,
  question: {
    pt: "Qual medida é fundamental para programas eficazes de stewardship antimicrobiano?",
    en: "Which measure is fundamental for effective antimicrobial stewardship programs?",
    es: "¿Qué medida es fundamental para programas eficaces de uso racional de antimicrobianos?"
  },
  options: [
    {
      text: { pt: "Revisão diária de antibioticoterapia com descalonamento", en: "Daily antibiotic review with de-escalation", es: "Revisión diaria de antibióticos con desescalada" },
      explanation: {
        pt: "Permite otimização da terapia e redução de resistência.",
        en: "Allows therapy optimization and resistance reduction.",
        es: "Permite optimizar la terapia y reducir resistencia."
      }
    },
    {
      text: { pt: "Uso empírico por tempo indeterminado", en: "Indefinite empirical use", es: "Uso empírico indefinido" },
      explanation: {
        pt: "Aumenta risco de resistência e efeitos adversos.",
        en: "Increases risk of resistance and adverse events.",
        es: "Aumenta el riesgo de resistencia y efectos adversos."
      }
    },
    {
      text: { pt: "Antibiótico universal por protocolo fixo", en: "Universal antibiotic via fixed protocol", es: "Antibiótico universal según protocolo fijo" },
      explanation: {
        pt: "Não individualiza tratamento nem segue cultura.",
        en: "Does not individualize therapy or follow cultures.",
        es: "No individualiza tratamiento ni sigue cultivos."
      }
    },
    {
      text: { pt: "Evitar culturas antes de iniciar antibiótico", en: "Avoid cultures before antibiotics", es: "Evitar cultivos antes del antibiótico" },
      explanation: {
        pt: "Culturas devem ser feitas antes da primeira dose sempre que possível.",
        en: "Cultures should be taken before the first dose when feasible.",
        es: "Los cultivos deben tomarse antes de la primera dosis siempre que sea posible."
      }
    }
  ]
},
{
  id: 26,
  code: "demo-q26",
  area: ["icu", "renal", "electrolytes"],
  topic: ["hypernatremia", "diabetes insipidus"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Paciente em UTI com hipernatremia grave (Na+ 166 mEq/L), osmolaridade urinária de 120 mOsm/kg e diurese elevada. Qual o diagnóstico mais provável?",
    en: "ICU patient with severe hypernatremia (Na+ 166 mEq/L), urine osmolality 120 mOsm/kg, and high urine output. What is the most likely diagnosis?",
    es: "Paciente en UCI con hipernatremia severa (Na+ 166 mEq/L), osmolaridad urinaria 120 mOsm/kg y diuresis elevada. ¿Cuál es el diagnóstico más probable?"
  },
  options: [
    {
      text: {
        pt: "Síndrome de secreção inapropriada de ADH (SIADH)",
        en: "Syndrome of inappropriate ADH secretion (SIADH)",
        es: "Síndrome de secreción inadecuada de ADH (SIADH)"
      },
      explanation: {
        pt: "SIADH cursa com hiponatremia e urina concentrada.",
        en: "SIADH presents with hyponatremia and concentrated urine.",
        es: "SIADH cursa con hiponatremia y orina concentrada."
      }
    },
    {
      text: {
        pt: "Hipocalcemia sintomática",
        en: "Symptomatic hypocalcemia",
        es: "Hipocalcemia sintomática"
      },
      explanation: {
        pt: "Hipocalcemia não causa hipernatremia ou diurese intensa.",
        en: "Hypocalcemia does not cause hypernatremia or high diuresis.",
        es: "La hipocalcemia no causa hipernatremia ni diuresis elevada."
      }
    },
    {
      text: {
        pt: "Diabetes insipidus central",
        en: "Central diabetes insipidus",
        es: "Diabetes insípida central"
      },
      explanation: {
        pt: "Caracteriza-se por urina diluída (osm < 300) e diurese alta em quadro de hipernatremia.",
        en: "Characterized by dilute urine (osm < 300) and high output with hypernatremia.",
        es: "Caracterizada por orina diluida (osm < 300) y diuresis alta con hipernatremia."
      }
    },
    {
      text: {
        pt: "Insuficiência adrenal",
        en: "Adrenal insufficiency",
        es: "Insuficiencia suprarrenal"
      },
      explanation: {
        pt: "Costuma cursar com hiponatremia, não hipernatremia.",
        en: "Usually presents with hyponatremia, not hypernatremia.",
        es: "Suele cursar con hiponatremia, no hipernatremia."
      }
    }
  ]
},
{
  id: 27,
  code: "demo-q27",
  area: ["icu", "hepatology", "neuro"],
  topic: ["acute liver failure", "encephalopathy", "coagulopathy"],
  level: "very_hard",
  correct: 0,
  question: {
    pt: "Paciente de 32 anos, sem comorbidades, apresenta confusão súbita, INR 4,3, bilirrubina total 11 mg/dL e AST/ALT > 2000. Qual é a conduta prioritária na UTI?",
    en: "A 32-year-old previously healthy patient presents with acute confusion, INR 4.3, total bilirubin 11 mg/dL and AST/ALT > 2000. What is the priority management in the ICU?",
    es: "Paciente de 32 años sin antecedentes presenta confusión aguda, INR 4,3, bilirrubina total 11 mg/dL y AST/ALT > 2000. ¿Cuál es la conducta prioritaria en UCI?"
  },
  options: [
    {
      text: {
        pt: "Avaliação imediata para transplante hepático urgente",
        en: "Immediate evaluation for urgent liver transplantation",
        es: "Evaluación inmediata para trasplante hepático urgente"
      },
      explanation: {
        pt: "Quadro compatível com falência hepática aguda, critério de King’s College. Transplante é vital.",
        en: "Compatible with acute liver failure, King’s College criteria. Transplant is life-saving.",
        es: "Cuadro compatible con falla hepática aguda. Criterios de King’s College. El trasplante es vital."
      }
    },
    {
      text: {
        pt: "Reposição empírica de vitamina K e observar",
        en: "Empirical vitamin K and observation",
        es: "Vitamina K empírica y observación"
      },
      explanation: {
        pt: "Não é suficiente em falência hepática grave. INR alto reflete disfunção, não carência.",
        en: "Not enough in severe hepatic failure. INR reflects dysfunction, not deficiency.",
        es: "Insuficiente en falla hepática grave. El INR refleja disfunción, no deficiencia."
      }
    },
    {
      text: {
        pt: "Plasma fresco para normalizar INR",
        en: "Fresh frozen plasma to normalize INR",
        es: "Plasma fresco para normalizar INR"
      },
      explanation: {
        pt: "Não indicado de rotina se não houver sangramento. Pode mascarar critério prognóstico.",
        en: "Not routinely indicated unless bleeding. May mask prognostic indicators.",
        es: "No se indica si no hay sangrado. Puede ocultar criterios pronósticos."
      }
    },
    {
      text: {
        pt: "Ressuscitação com bicarbonato e manitol",
        en: "Resuscitation with bicarbonate and mannitol",
        es: "Reanimación con bicarbonato y manitol"
      },
      explanation: {
        pt: "Manitol pode ser útil para HIC, mas não substitui avaliação para transplante.",
        en: "Mannitol may help with ICP, but does not replace transplant evaluation.",
        es: "El manitol puede ayudar en HIC, pero no sustituye evaluación de trasplante."
      }
    }
  ]
},
{
  id: 28,
  code: "demo-q28",
  area: ["icu", "surgery", "infection"],
  topic: ["surgical site infection", "antibiotics", "sepsis"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Paciente pós-operatório imediato de colectomia evolui com febre, distensão abdominal e leucocitose. Hemoculturas negativas. Qual a melhor conduta inicial?",
    en: "Postoperative colectomy patient develops fever, abdominal distension and leukocytosis. Blood cultures are negative. What is the best initial approach?",
    es: "Paciente postoperado de colectomía presenta fiebre, distensión abdominal y leucocitosis. Hemocultivos negativos. ¿Cuál es la mejor conducta inicial?"
  },
  options: [
    {
      text: {
        pt: "Aguardar 24h e repetir exames laboratoriais",
        en: "Wait 24h and repeat labs",
        es: "Esperar 24h y repetir exámenes"
      },
      explanation: {
        pt: "Atrasar o diagnóstico em paciente séptico pós-operatório pode ser fatal.",
        en: "Delaying diagnosis in postoperative sepsis is high-risk.",
        es: "Retrasar diagnóstico en sepsis postoperatoria es peligroso."
      }
    },
    {
      text: {
        pt: "Ampliar antibiótico empírico e manter observação",
        en: "Broaden empirical antibiotics and monitor",
        es: "Ampliar antibiótico empírico y observar"
      },
      explanation: {
        pt: "Sem fonte definida, antibiótico pode mascarar foco cirúrgico.",
        en: "May mask surgical source without solving it.",
        es: "Puede enmascarar foco quirúrgico sin resolverlo."
      }
    },
    {
      text: {
        pt: "Solicitar TC de abdome para avaliar complicações cirúrgicas",
        en: "Order abdominal CT to evaluate surgical complications",
        es: "Solicitar TC abdominal para evaluar complicaciones"
      },
      explanation: {
        pt: "Imagem precoce é essencial para diagnóstico de complicações como abscesso ou deiscência.",
        en: "Early imaging is crucial to diagnose abscess or anastomotic leak.",
        es: "La imagen precoz es clave para detectar absceso o fuga anastomótica."
      }
    },
    {
      text: {
        pt: "Trocar antibiótico baseado na PCT sérica",
        en: "Change antibiotic based on serum PCT",
        es: "Cambiar antibiótico según PCT"
      },
      explanation: {
        pt: "PCT isolada não guia conduta cirúrgica.",
        en: "PCT alone does not guide surgical management.",
        es: "La PCT sola no define la conducta quirúrgica."
      }
    }
  ]
},
{
  id: 29,
  code: "demo-q29",
  area: ["icu", "neuro", "monitoring"],
  topic: ["multimodal", "tbi", "cerebral oxygenation"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Em paciente com TCE grave sob sedação e PtiO2 monitorada, valores persistentemente baixos (<20 mmHg) indicam necessidade de:",
    en: "In a sedated patient with severe TBI and low PtiO2 (<20 mmHg), the next best step is:",
    es: "En paciente con TCE grave sedado y PtiO2 < 20 mmHg, el próximo paso es:"
  },
  options: [
    {
      text: {
        pt: "Suspender sedação e realizar tomografia",
        en: "Stop sedation and order CT scan",
        es: "Suspender sedación y solicitar TC"
      },
      explanation: {
        pt: "Risco de HIC e rebote de pressão. Sedação deve ser mantida com avaliação dirigida.",
        en: "Risk of ICP rebound. Sedation should be maintained with directed assessment.",
        es: "Riesgo de HIC de rebote. Mantener sedación con evaluación dirigida."
      }
    },
    {
      text: {
        pt: "Avaliar pressão de perfusão cerebral (PPC) e otimizar PAM",
        en: "Evaluate CPP and optimize MAP",
        es: "Evaluar PPC y optimizar PAM"
      },
      explanation: {
        pt: "O PtiO2 baixo pode refletir hipoperfusão cerebral. Aumentar PPC pode melhorar oxigenação tecidual.",
        en: "Low PtiO2 may reflect cerebral hypoperfusion. Increasing CPP can improve tissue oxygenation.",
        es: "PtiO2 bajo sugiere hipoperfusión cerebral. Aumentar PPC puede mejorar oxigenación."
      }
    },
    {
      text: {
        pt: "Reduzir PaCO2 com hiperventilação prolongada",
        en: "Reduce PaCO2 with prolonged hyperventilation",
        es: "Reducir PaCO2 con hiperventilación prolongada"
      },
      explanation: {
        pt: "Hiperventilação prolongada reduz fluxo cerebral. Pode agravar hipóxia tecidual.",
        en: "Prolonged hyperventilation reduces CBF and may worsen tissue hypoxia.",
        es: "La hiperventilación prolongada reduce el flujo cerebral y puede empeorar la hipoxia."
      }
    },
    {
      text: {
        pt: "Iniciar plasma fresco para elevar conteúdo de oxigênio",
        en: "Start fresh frozen plasma to raise oxygen content",
        es: "Administrar plasma fresco para elevar el contenido de oxígeno"
      },
      explanation: {
        pt: "Não tem impacto direto na PtiO2. Aumentar PPC é mais eficaz.",
        en: "No direct impact on PtiO2. Optimizing CPP is more effective.",
        es: "No impacta directamente en PtiO2. Optimizar PPC es más eficaz."
      }
    }
  ]
},
{
  id: 30,
  code: "demo-q30",
  area: ["icu", "multisystem"],
  topic: ["shock", "trauma", "bleeding"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Homem de 43 anos, politraumatizado, hipotenso e taquicárdico, com distensão abdominal progressiva. Quais são os próximos passos imediatos mais adequados?",
    en: "A 43-year-old polytrauma patient is hypotensive and tachycardic, with progressive abdominal distension. What are the most appropriate immediate next steps?",
    es: "Hombre de 43 años politraumatizado, hipotenso y taquicárdico, con distensión abdominal progresiva. ¿Cuál es la mejor conducta inmediata?"
  },
  options: [
    {
      text: {
        pt: "CT de abdome contrastado e dose plena de heparina",
        en: "Contrast-enhanced abdominal CT and full-dose heparin",
        es: "TC abdominal con contraste y heparina en dosis plena"
      },
      explanation: {
        pt: "Inadequado em instabilidade hemodinâmica. CT não é indicado antes de estabilização.",
        en: "Inappropriate in hemodynamic instability. CT is not indicated before stabilization.",
        es: "Inadecuado en inestabilidad. TC no se indica antes de estabilizar."
      }
    },
    {
      text: {
        pt: "Tomografia cerebral para excluir TCE",
        en: "Brain CT to rule out head trauma",
        es: "TC craneal para descartar TCE"
      },
      explanation: {
        pt: "Importante, mas não é prioridade em choque abdominal evidente.",
        en: "Important, but not priority in clear abdominal shock.",
        es: "Importante, pero no prioritario si hay choque abdominal evidente."
      }
    },
    {
      text: {
        pt: "Reposição agressiva com cristaloide + dexametasona",
        en: "Aggressive fluid resuscitation + dexamethasone",
        es: "Reposición agresiva con cristaloide + dexametasona"
      },
      explanation: {
        pt: "Dexametasona não tem papel aqui. Cristaloide pode ajudar, mas cirurgia é prioritária.",
        en: "Dexamethasone has no role. Fluids help, but surgery is priority.",
        es: "La dexametasona no tiene rol. Líquidos ayudan, pero cirugía es prioridad."
      }
    },
    {
      text: {
        pt: "Cirurgia imediata com protocolo de transfusão maciça",
        en: "Immediate surgery with massive transfusion protocol",
        es: "Cirugía inmediata con protocolo de transfusión masiva"
      },
      explanation: {
        pt: "Choque hemorrágico abdominal com distensão exige abordagem cirúrgica urgente.",
        en: "Abdominal hemorrhagic shock with distension requires urgent surgical approach.",
        es: "Shock hemorrágico abdominal con distensión requiere cirugía urgente."
      }
    }
  ]
},
];