const bancoNephroFacil = [
  {
    id: 601,
    code: "nephro01-q01",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["acute kidney injury", "kdigo"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual das seguintes condições é um critério comum para diagnóstico de lesão renal aguda (LRA)?",
      en: "Which of the following is a common criterion for diagnosing acute kidney injury (AKI)?",
      es: "¿Cuál de las siguientes es un criterio común para el diagnóstico de lesión renal aguda (LRA)?"
    },
    options: [
      {
        text: {
          pt: "Aumento da creatinina sérica ≥ 0,3 mg/dL em 48 horas",
          en: "Serum creatinine increase ≥ 0.3 mg/dL within 48 hours",
          es: "Aumento de creatinina sérica ≥ 0.3 mg/dL en 48 horas"
        },
        explanation: {
          pt: "Critério do KDIGO para LRA: aumento ≥ 0,3 mg/dL em 48h ou ≥ 1,5x em 7 dias.",
          en: "KDIGO criteria for AKI includes creatinine increase ≥ 0.3 mg/dL in 48h or ≥ 1.5x in 7 days.",
          es: "Criterio KDIGO: aumento de creatinina ≥ 0.3 mg/dL en 48h o ≥ 1.5x en 7 días."
        }
      },
      {
        text: {
          pt: "Redução da creatinina sérica ≥ 0,5 mg/dL em 24 horas",
          en: "Serum creatinine decrease ≥ 0.5 mg/dL in 24 hours",
          es: "Disminución de creatinina ≥ 0.5 mg/dL en 24 horas"
        },
        explanation: {
          pt: "Redução da creatinina não é critério diagnóstico de LRA.",
          en: "Creatinine decrease is not a diagnostic criterion for AKI.",
          es: "La disminución de creatinina no es un criterio diagnóstico para LRA."
        }
      },
      {
        text: {
          pt: "Clareamento de ureia aumentado",
          en: "Increased urea clearance",
          es: "Aumento del aclaramiento de urea"
        },
        explanation: {
          pt: "A uremia geralmente se acumula na LRA, não aumenta o clareamento.",
          en: "Urea clearance typically decreases in AKI, not increases.",
          es: "El aclaramiento de urea generalmente disminuye en LRA."
        }
      },
      {
        text: {
          pt: "Hipocalemia persistente",
          en: "Persistent hypokalemia",
          es: "Hipocalemia persistente"
        },
        explanation: {
          pt: "Hipercalemia é mais comum em LRA devido à excreção reduzida.",
          en: "Hyperkalemia is more common in AKI due to impaired excretion.",
          es: "La hiperpotasemia es más común en LRA por excreción reducida."
        }
      }
    ]
  },
  {
    id: 602,
    code: "nephro01-q02",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["renal replacement therapy"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual das opções abaixo é uma indicação clássica para iniciar terapia renal substitutiva em pacientes com insuficiência renal aguda?",
      en: "Which of the following is a classic indication to initiate renal replacement therapy in acute kidney injury?",
      es: "¿Cuál de las siguientes es una indicación clásica para iniciar terapia de reemplazo renal en lesión renal aguda?"
    },
    options: [
      {
        text: {
          pt: "Creatinina > 3,0 mg/dL isoladamente",
          en: "Creatinine > 3.0 mg/dL alone",
          es: "Creatinina > 3.0 mg/dL de forma aislada"
        },
        explanation: {
          pt: "Creatinina elevada isoladamente não é suficiente para indicar diálise.",
          en: "Elevated creatinine alone is not sufficient to indicate dialysis.",
          es: "Creatinina elevada por sí sola no indica diálisis."
        }
      },
      {
        text: {
          pt: "Hipercalemia refratária",
          en: "Refractory hyperkalemia",
          es: "Hipercalemia refractaria"
        },
        explanation: {
          pt: "Hipercalemia refratária é uma das principais indicações para diálise.",
          en: "Refractory hyperkalemia is a key indication for dialysis.",
          es: "La hipercalemia refractaria es una indicación clásica para diálisis."
        }
      },
      {
        text: {
          pt: "Urina espumosa",
          en: "Frothy urine",
          es: "Orina espumosa"
        },
        explanation: {
          pt: "Urina espumosa pode indicar proteinúria, mas não é critério para diálise.",
          en: "Frothy urine may suggest proteinuria but is not a dialysis indication.",
          es: "La orina espumosa puede sugerir proteinuria, pero no indica diálisis."
        }
      },
      {
        text: {
          pt: "Proteinúria leve",
          en: "Mild proteinuria",
          es: "Proteinuria leve"
        },
        explanation: {
          pt: "Proteinúria leve não exige terapia renal substitutiva.",
          en: "Mild proteinuria does not require renal replacement therapy.",
          es: "La proteinuria leve no requiere diálisis."
        }
      }
    ]
  },
  {
    id: 603,
    code: "nephro01-q03",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["electrolyte disorders"],
    level: "easy",
    correct: 3,
    question: {
      pt: "Qual distúrbio eletrolítico é mais frequentemente associado à insuficiência renal aguda?",
      en: "Which electrolyte disorder is most frequently associated with acute kidney injury?",
      es: "¿Qué trastorno electrolítico se asocia más frecuentemente a la lesión renal aguda?"
    },
    options: [
      {
        text: {
          pt: "Hiponatremia dilucional",
          en: "Dilutional hyponatremia",
          es: "Hiponatremia por dilución"
        },
        explanation: {
          pt: "Pode ocorrer, mas não é o mais característico da LRA.",
          en: "May occur but is not the most characteristic in AKI.",
          es: "Puede ocurrir, pero no es el más típico en LRA."
        }
      },
      {
        text: {
          pt: "Hipocalcemia crônica",
          en: "Chronic hypocalcemia",
          es: "Hipocalcemia crónica"
        },
        explanation: {
          pt: "Hipocalcemia crônica é mais comum em doença renal crônica do que em LRA.",
          en: "Chronic hypocalcemia is more typical of chronic kidney disease than AKI.",
          es: "La hipocalcemia crónica es más típica de enfermedad renal crónica que de LRA."
        }
      },
      {
        text: {
          pt: "Hipomagnesemia leve",
          en: "Mild hypomagnesemia",
          es: "Hipomagnesemia leve"
        },
        explanation: {
          pt: "Distúrbio menos comum na insuficiência renal aguda.",
          en: "Less common disturbance in acute kidney injury.",
          es: "Trastorno menos común en la insuficiencia renal aguda."
        }
      },
      {
        text: {
          pt: "Hipercalemia",
          en: "Hyperkalemia",
          es: "Hipercalemia"
        },
        explanation: {
          pt: "Hipercalemia é o distúrbio mais comum e perigoso na LRA, devido à excreção reduzida de potássio.",
          en: "Hyperkalemia is the most common and dangerous disorder in AKI due to impaired potassium excretion.",
          es: "La hipercalemia es el trastorno más común y peligroso en LRA por excreción reducida de potasio."
        }
      }
    ]
  },
  {
    id: 604,
    code: "nephro01-q04",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["fluid management"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Qual das seguintes soluções é considerada isotônica e comumente utilizada na reposição volêmica em pacientes com LRA?",
      en: "Which of the following solutions is considered isotonic and commonly used for volume resuscitation in AKI?",
      es: "¿Cuál de las siguientes soluciones es considerada isotónica y comúnmente usada para la reposición de volumen en LRA?"
    },
    options: [
      {
        text: {
          pt: "Soro glicosado 5%",
          en: "5% dextrose solution",
          es: "Solución glucosada al 5%"
        },
        explanation: {
          pt: "O soro glicosado é hipotônico após metabolização da glicose e não é ideal para reposição volêmica.",
          en: "5% dextrose becomes hypotonic after glucose metabolism, not ideal for resuscitation.",
          es: "La glucosa al 5% se vuelve hipotónica después del metabolismo y no es ideal para reposición."
        }
      },
      {
        text: {
          pt: "Solução hipertônica de NaCl 3%",
          en: "3% hypertonic saline",
          es: "Solución salina hipertónica al 3%"
        },
        explanation: {
          pt: "Salina hipertônica é reservada para hiponatremia grave, não para reposição volêmica habitual.",
          en: "Hypertonic saline is for severe hyponatremia, not routine volume resuscitation.",
          es: "La salina hipertónica se reserva para hiponatremia grave."
        }
      },
      {
        text: {
          pt: "Soro fisiológico 0,9%",
          en: "0.9% normal saline",
          es: "Solución salina normal al 0,9%"
        },
        explanation: {
          pt: "O soro fisiológico é isotônico e amplamente utilizado na expansão volêmica na LRA.",
          en: "Normal saline is isotonic and widely used for volume resuscitation in AKI.",
          es: "La salina normal es isotónica y se usa comúnmente en la reposición de volumen en LRA."
        }
      },
      {
        text: {
          pt: "Solução de glicose a 10%",
          en: "10% dextrose solution",
          es: "Solución glucosada al 10%"
        },
        explanation: {
          pt: "Não é usada para expansão volêmica. Utilizada mais para hipoglicemia ou nutrição parenteral.",
          en: "Not used for volume expansion. Used more in hypoglycemia or parenteral nutrition.",
          es: "No se usa para reposición. Se usa más en hipoglucemia o nutrición parenteral."
        }
      }
    ]
  },
  {
    id: 605,
    code: "nephro01-q05",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["acute kidney injury"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Entre as causas abaixo, qual é considerada uma causa pré-renal de lesão renal aguda?",
      en: "Which of the following is considered a prerenal cause of acute kidney injury?",
      es: "¿Cuál de las siguientes se considera una causa prerrenal de lesión renal aguda?"
    },
    options: [
      {
        text: {
          pt: "Hipovolemia por vômitos persistentes",
          en: "Hypovolemia due to persistent vomiting",
          es: "Hipovolemia por vómitos persistentes"
        },
        explanation: {
          pt: "Perda de volume extracelular é uma causa clássica de LRA pré-renal.",
          en: "Extracellular volume loss is a classic cause of prerenal AKI.",
          es: "La pérdida de volumen extracelular es causa clásica de LRA prerrenal."
        }
      },
      {
        text: {
          pt: "Nefrite intersticial aguda",
          en: "Acute interstitial nephritis",
          es: "Nefritis intersticial aguda"
        },
        explanation: {
          pt: "É uma causa renal (intrínseca) de LRA, geralmente imunomediada.",
          en: "This is an intrinsic renal cause, usually immune-mediated.",
          es: "Es una causa renal intrínseca, generalmente inmunomediada."
        }
      },
      {
        text: {
          pt: "Necrose tubular aguda por contraste iodado",
          en: "Contrast-induced acute tubular necrosis",
          es: "Necrosis tubular aguda inducida por contraste"
        },
        explanation: {
          pt: "Trata-se de causa renal (tóxica) e não pré-renal.",
          en: "This is a toxic intrinsic renal cause, not prerenal.",
          es: "Es una causa renal intrínseca (tóxica), no prerrenal."
        }
      },
      {
        text: {
          pt: "Obstrução ureteral bilateral",
          en: "Bilateral ureteral obstruction",
          es: "Obstrucción ureteral bilateral"
        },
        explanation: {
          pt: "Obstrução é uma causa pós-renal de lesão renal aguda.",
          en: "Obstruction is a postrenal cause of AKI.",
          es: "La obstrucción es una causa posrenal de LRA."
        }
      }
    ]
  },
  {
    id: 606,
    code: "nephro01-q06",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["fluid management"],
    level: "easy",
    correct: 2,
    question: {
      pt: "No contexto de reposição volêmica em paciente com função renal preservada, qual dos seguintes sinais indica possível sobrecarga hídrica?",
      en: "In a patient with preserved renal function, which of the following signs suggests possible fluid overload?",
      es: "En un paciente con función renal preservada, ¿cuál de los siguientes signos sugiere sobrecarga hídrica?"
    },
    options: [
      {
        text: {
          pt: "Pele seca e mucosas ressecadas",
          en: "Dry skin and mucous membranes",
          es: "Piel seca y mucosas resecas"
        },
        explanation: {
          pt: "Esses são sinais de hipovolemia, não de sobrecarga.",
          en: "These indicate hypovolemia, not overload.",
          es: "Indican hipovolemia, no sobrecarga."
        }
      },
      {
        text: {
          pt: "Hipotensão arterial mantida",
          en: "Persistent arterial hypotension",
          es: "Hipotensión arterial persistente"
        },
        explanation: {
          pt: "Pode indicar hipovolemia ou choque distributivo, não sobrecarga.",
          en: "May indicate hypovolemia or distributive shock, not overload.",
          es: "Puede indicar hipovolemia o shock distributivo, no sobrecarga."
        }
      },
      {
        text: {
          pt: "Estertores crepitantes e turgência jugular",
          en: "Crackles and jugular venous distension",
          es: "Estertores y distensión yugular"
        },
        explanation: {
          pt: "Estes são sinais clássicos de congestão pulmonar e sobrecarga hídrica.",
          en: "These are classic signs of pulmonary congestion and fluid overload.",
          es: "Son signos clásicos de congestión pulmonar y sobrecarga de líquidos."
        }
      },
      {
        text: {
          pt: "Redução da diurese e peso corporal estável",
          en: "Reduced urine output and stable weight",
          es: "Reducción de diuresis y peso corporal estable"
        },
        explanation: {
          pt: "Pode sugerir início de disfunção renal, mas não confirma sobrecarga hídrica.",
          en: "May suggest early renal dysfunction, not necessarily overload.",
          es: "Puede sugerir disfunción renal, pero no confirma sobrecarga."
        }
      }
    ]
  },
  {
    id: 607,
    code: "nephro01-q07",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["renal replacement therapy"],
    level: "easy",
    correct: 3,
    question: {
      pt: "Qual das seguintes modalidades de terapia renal substitutiva é mais comumente utilizada em UTI para pacientes instáveis?",
      en: "Which renal replacement therapy modality is most commonly used in ICU for unstable patients?",
      es: "¿Qué modalidad de terapia de reemplazo renal se usa más comúnmente en UCI para pacientes inestables?"
    },
    options: [
      {
        text: {
          pt: "Diálise peritoneal ambulatorial contínua (CAPD)",
          en: "Continuous ambulatory peritoneal dialysis (CAPD)",
          es: "Diálisis peritoneal ambulatoria continua (CAPD)"
        },
        explanation: {
          pt: "CAPD é usada fora do ambiente intensivo e em pacientes estáveis.",
          en: "CAPD is used outside ICU in stable patients.",
          es: "CAPD se usa fuera de la UCI en pacientes estables."
        }
      },
      {
        text: {
          pt: "Hemodiálise intermitente convencional",
          en: "Conventional intermittent hemodialysis",
          es: "Hemodiálisis intermitente convencional"
        },
        explanation: {
          pt: "Pode causar instabilidade hemodinâmica em pacientes críticos.",
          en: "Can cause hemodynamic instability in critically ill patients.",
          es: "Puede causar inestabilidad hemodinámica en pacientes críticos."
        }
      },
      {
        text: {
          pt: "Terapia de substituição com albumina",
          en: "Albumin replacement therapy",
          es: "Terapia de reemplazo con albúmina"
        },
        explanation: {
          pt: "Albumina pode ser usada como expansor, mas não é uma forma de diálise.",
          en: "Albumin is a volume expander, not a dialysis modality.",
          es: "La albúmina es un expansor de volumen, no una modalidad de diálisis."
        }
      },
      {
        text: {
          pt: "Terapia contínua lenta (CRRT)",
          en: "Continuous renal replacement therapy (CRRT)",
          es: "Terapia de reemplazo renal continua (CRRT)"
        },
        explanation: {
          pt: "CRRT é a modalidade preferida em pacientes críticos instáveis hemodinamicamente.",
          en: "CRRT is the preferred modality for hemodynamically unstable ICU patients.",
          es: "CRRT es la modalidad preferida para pacientes inestables en UCI."
        }
      }
    ]
  },
  {
    id: 608,
    code: "nephro01-q08",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["electrolyte disorders"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual achado eletrocardiográfico é sugestivo de hipercalemia grave?",
      en: "Which ECG finding is suggestive of severe hyperkalemia?",
      es: "¿Qué hallazgo en el ECG sugiere hipercalemia grave?"
    },
    options: [
      {
        text: {
          pt: "Ondas T apiculadas",
          en: "Peaked T waves",
          es: "Ondas T picudas"
        },
        explanation: {
          pt: "Ondas T apiculadas são achado precoce e sugestivo de hipercalemia.",
          en: "Peaked T waves are an early and classic sign of hyperkalemia.",
          es: "Ondas T picudas son un signo clásico y precoz de hipercalemia."
        }
      },
      {
        text: {
          pt: "Intervalo QT prolongado",
          en: "Prolonged QT interval",
          es: "Intervalo QT prolongado"
        },
        explanation: {
          pt: "QT prolongado é mais comum na hipocalcemia.",
          en: "Prolonged QT is more typical of hypocalcemia.",
          es: "El QT prolongado es más típico de hipocalcemia."
        }
      },
      {
        text: {
          pt: "Ondas U proeminentes",
          en: "Prominent U waves",
          es: "Ondas U prominentes"
        },
        explanation: {
          pt: "Ondas U estão mais associadas à hipocalemia.",
          en: "U waves are more associated with hypokalemia.",
          es: "Las ondas U se asocian a hipocalemia."
        }
      },
      {
        text: {
          pt: "Elevação do segmento ST",
          en: "ST segment elevation",
          es: "Elevación del segmento ST"
        },
        explanation: {
          pt: "Elevação do ST é característica de infarto, não de hipercalemia.",
          en: "ST elevation suggests myocardial infarction, not hyperkalemia.",
          es: "La elevación del ST sugiere infarto, no hipercalemia."
        }
      }
    ]
  },
  {
    id: 609,
    code: "nephro01-q09",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["acute kidney injury"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Qual das opções abaixo é esperada na urina de um paciente com LRA pré-renal?",
      en: "Which of the following is expected in the urine of a patient with prerenal AKI?",
      es: "¿Cuál de las siguientes se espera en la orina de un paciente con LRA prerrenal?"
    },
    options: [
      {
        text: {
          pt: "Cilindros granulosos pigmentares",
          en: "Pigmented granular casts",
          es: "Cilindros granulares pigmentados"
        },
        explanation: {
          pt: "São típicos de necrose tubular aguda (renal), não LRA pré-renal.",
          en: "Typical of acute tubular necrosis, not prerenal AKI.",
          es: "Típicos de necrosis tubular aguda, no de LRA prerrenal."
        }
      },
      {
        text: {
          pt: "Piúria intensa e eosinofilos",
          en: "Intense pyuria and eosinophils",
          es: "Piuria intensa y eosinófilos"
        },
        explanation: {
          pt: "Sugerem nefrite intersticial aguda.",
          en: "Suggest acute interstitial nephritis.",
          es: "Sugiere nefritis intersticial aguda."
        }
      },
      {
        text: {
          pt: "Urina concentrada com alta osmolaridade",
          en: "Concentrated urine with high osmolality",
          es: "Orina concentrada con alta osmolaridad"
        },
        explanation: {
          pt: "É achado típico da resposta renal preservada em LRA pré-renal.",
          en: "Typical finding of preserved renal response in prerenal AKI.",
          es: "Hallazgo típico de función renal preservada en LRA prerrenal."
        }
      },
      {
        text: {
          pt: "Proteinúria nefrótica",
          en: "Nephrotic-range proteinuria",
          es: "Proteinuria en rango nefrótico"
        },
        explanation: {
          pt: "Proteinúria maciça indica glomerulopatias, não LRA pré-renal.",
          en: "Massive proteinuria suggests glomerular disease, not prerenal AKI.",
          es: "Proteinuria masiva sugiere enfermedad glomerular, no LRA prerrenal."
        }
      }
    ]
  },
  {
    id: 610,
    code: "nephro01-q10",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["renal replacement therapy"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual é uma complicação frequente durante a diálise em pacientes críticos?",
      en: "Which is a common complication during dialysis in critically ill patients?",
      es: "¿Cuál es una complicación frecuente durante la diálisis en pacientes críticos?"
    },
    options: [
      {
        text: {
          pt: "Hipervolemia aguda",
          en: "Acute hypervolemia",
          es: "Hipervolemia aguda"
        },
        explanation: {
          pt: "A diálise remove volume; hipervolemia é rara durante o procedimento.",
          en: "Dialysis removes volume; acute hypervolemia is rare during it.",
          es: "La diálisis elimina volumen; la hipervolemia es rara durante el procedimiento."
        }
      },
      {
        text: {
          pt: "Hipotensão intradialítica",
          en: "Intradialytic hypotension",
          es: "Hipotensión intradialítica"
        },
        explanation: {
          pt: "Hipotensão durante a diálise é comum, especialmente em pacientes sépticos ou instáveis.",
          en: "Hypotension during dialysis is common, especially in septic or unstable patients.",
          es: "La hipotensión durante la diálisis es común, especialmente en pacientes sépticos o inestables."
        }
      },
      {
        text: {
          pt: "Hipernatremia sintomática",
          en: "Symptomatic hypernatremia",
          es: "Hipernatremia sintomática"
        },
        explanation: {
          pt: "Hipernatremia não é uma complicação habitual da diálise.",
          en: "Hypernatremia is not a typical complication of dialysis.",
          es: "La hipernatremia no es una complicación típica de la diálisis."
        }
      },
      {
        text: {
          pt: "Pneumotórax espontâneo",
          en: "Spontaneous pneumothorax",
          es: "Neumotórax espontáneo"
        },
        explanation: {
          pt: "Raro e não relacionado diretamente à diálise.",
          en: "Rare and not directly related to dialysis.",
          es: "Raro y no relacionado directamente con la diálisis."
        }
      }
    ]
  },
];

questionBank.addBank(bancoNephroFacil);