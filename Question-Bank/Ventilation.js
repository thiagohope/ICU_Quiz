const bancoVentilation = [
  {
    "id": 501,
    "code": "pneumo01-q501",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 2,
    "question": {
      "pt": "Qual dos modos ventilatórios a seguir permite ao paciente iniciar os próprios ciclos respiratórios, com suporte parcial do ventilador?",
      "en": "Which of the following ventilation modes allows the patient to initiate their own breaths, with partial support from the ventilator?",
      "es": "¿Cuál de los siguientes modos ventilatorios permite al paciente iniciar sus propias respiraciones, con soporte parcial del ventilador?"
    },
    "options": [
      {
        "text": {
          "pt": "VCV (Ventilação controlada por volume)",
          "en": "VCV (Volume-Controlled Ventilation)",
          "es": "VCV (Ventilación controlada por volumen)"
        },
        "explanation": {
          "pt": "Modo totalmente controlado onde o ventilador determina volume, fluxo e tempo inspiratório. Não permite que o paciente inicie ciclos respiratórios espontâneos.",
          "en": "Fully controlled mode where ventilator determines volume, flow, and inspiratory time. Patient cannot initiate spontaneous breaths.",
          "es": "Modo totalmente controlado donde el ventilador determina volumen, flujo y tiempo inspiratorio. No permite ciclos espontáneos iniciados por el paciente."
        }
      },
      {
        "text": {
          "pt": "PCV (Ventilação controlada por pressão)",
          "en": "PCV (Pressure-Controlled Ventilation)",
          "es": "PCV (Ventilación controlada por presión)"
        },
        "explanation": {
          "pt": "Embora controlada por pressão, é um modo mandatório onde o ventilador inicia e controla cada ciclo. Não permite respirações espontâneas iniciadas pelo paciente.",
          "en": "Though pressure-controlled, it's a mandatory mode where ventilator initiates and controls each breath. Does not allow patient-initiated spontaneous breaths.",
          "es": "Aunque controlada por presión, es un modo mandatorio donde el ventilador inicia y controla cada ciclo. No permite respiraciones espontáneas iniciadas por el paciente."
        }
      },
      {
        "text": {
          "pt": "PSV (Ventilação com suporte de pressão)",
          "en": "PSV (Pressure Support Ventilation)",
          "es": "PSV (Ventilación con soporte de presión)"
        },
        "explanation": {
          "pt": "Permite que o paciente inicie as próprias inspirações enquanto recebe suporte de pressão ajustável para cada ciclo. Combina esforço espontâneo com suporte ventilatório parcial.",
          "en": "Allows patient to initiate inspirations while receiving adjustable pressure support for each breath. Combines spontaneous effort with partial ventilatory support.",
          "es": "Permite que el paciente inicie sus propias inspiraciones recibiendo soporte de presión ajustable en cada ciclo. Combina esfuerzo espontáneo con soporte ventilatorio parcial."
        }
      },
      {
        "text": {
          "pt": "SIMV sem gatilho inspiratório",
          "en": "SIMV without inspiratory trigger",
          "es": "SIMV sin disparo inspiratorio"
        },
        "explanation": {
          "pt": "Versão sem gatilho transforma o SIMV em modo totalmente controlado. O paciente não pode iniciar respirações espontâneas sem o mecanismo de disparo.",
          "en": "Without inspiratory trigger, SIMV operates as a fully controlled mode. Patient cannot initiate spontaneous breaths without trigger mechanism.",
          "es": "Sin disparo inspiratorio, el SIMV funciona como modo totalmente controlado. El paciente no puede iniciar respiraciones espontáneas sin el mecanismo de activación."
        }
      },
      {
        "text": {
          "pt": "APRV com bloqueio neuromuscular",
          "en": "APRV with neuromuscular blockade",
          "es": "APRV con bloqueo neuromuscular"
        },
        "explanation": {
          "pt": "O bloqueio neuromuscular paralisa a musculatura respiratória, tornando impossível qualquer esforço espontâneo, mesmo em modos que normalmente permitiriam respiração assistida.",
          "en": "Neuromuscular blockade paralyzes respiratory muscles, making any spontaneous breathing effort impossible, even in modes that would normally allow assisted ventilation.",
          "es": "El bloqueo neuromuscular paraliza la musculatura respiratoria, haciendo imposible cualquier esfuerzo espontáneo, incluso en modos que normalmente permitirían ventilación asistida."
        }
      }
    ]
  },
  {
    "id": 502,
    "code": "pneumo01-q502",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 0,
    "question": {
      "pt": "Qual dos parâmetros abaixo é diretamente ajustado para controlar a ventilação (eliminação de CO₂)?",
      "en": "Which of the parameters below is directly adjusted to control ventilation (CO₂ elimination)?",
      "es": "¿Cuál de los siguientes parámetros se ajusta directamente para controlar la ventilación (eliminación de CO₂)?"
    },
    "options": [
      { 
        "text": { "pt": "Volume corrente (Vt)", "en": "Tidal volume (Vt)", "es": "Volumen corriente (Vt)" },
        "explanation": { 
          "pt": "Esta é a resposta correta. O volume minuto, determinado pela multiplicação do Volume Corrente (Vt) pela Frequência Respiratória (FR), é o principal fator que influencia a ventilação alveolar. Ajustes no Vt alteram diretamente o volume de gás que participa das trocas gasosas a cada ciclo respiratório, impactando a eliminação de CO₂.",
          "en": "This is the correct answer. Minute ventilation, determined by multiplying Tidal Volume (Vt) by Respiratory Rate (RR), is the primary factor influencing alveolar ventilation. Adjustments to Vt directly alter the volume of gas participating in gas exchange with each respiratory cycle, impacting CO₂ elimination.",
          "es": "Esta es la respuesta correcta. La ventilación minuto, determinada por la multiplicación del Volumen Corriente (Vt) por la Frecuencia Respiratoria (FR), es el principal factor que influye en la ventilación alveolar. Los ajustes en el Vt alteran directamente el volumen de gas que participa en el intercambio gaseoso en cada ciclo respiratorio, impactando la eliminación de CO₂."
        }
      },
      { 
        "text": { "pt": "PEEP", "en": "PEEP", "es": "PEEP" },
        "explanation": {
          "pt": "A PEEP (Pressão Expiratória Final Positiva) tem como objetivo principal melhorar a oxigenação através do recrutamento de alvéolos e da prevenção do seu colapso ao final da expiração. Embora possa influenciar a mecânica pulmonar, ela não é um parâmetro primariamente ajustado para controlar a eliminação de CO₂.",
          "en": "PEEP (Positive End-Expiratory Pressure) primarily aims to improve oxygenation by recruiting alveoli and preventing their collapse at the end of expiration. While it can influence lung mechanics, it is not a parameter primarily adjusted to control CO₂ elimination.",
          "es": "La PEEP (Presión Positiva al Final de la Espiración) tiene como objetivo principal mejorar la oxigenación mediante el reclutamiento de alvéolos y la prevención de su colapso al final de la espiración. Aunque puede influir en la mecánica pulmonar, no es un parámetro que se ajuste primariamente para controlar la eliminación de CO₂."
        }
      },
      { 
        "text": { "pt": "Fração inspirada de oxigênio (FiO₂)", "en": "Fraction of inspired oxygen (FiO₂)", "es": "Fracción inspirada de oxígeno (FiO₂)" },
        "explanation": {
          "pt": "A FiO₂ é o parâmetro ajustado para controlar a oxigenação, ou seja, a quantidade de oxigênio que chega aos alvéolos e, consequentemente, a pressão parcial de oxigênio no sangue arterial (PaO₂). Ela não tem efeito direto sobre a ventilação (eliminação de CO₂).",
          "en": "FiO₂ is the parameter adjusted to control oxygenation, i.e., the amount of oxygen reaching the alveoli and consequently the partial pressure of oxygen in arterial blood (PaO₂). It has no direct effect on ventilation (CO₂ elimination).",
          "es": "La FiO₂ es el parámetro que se ajusta para controlar la oxigenación, es decir, la cantidad de oxígeno que llega a los alvéolos y, consecuentemente, la presión parcial de oxígeno en la sangre arterial (PaO₂). No tiene un efecto directo sobre la ventilación (eliminación de CO₂)."
        }
      },
      { 
        "text": { "pt": "Pressão de platô", "en": "Plateau pressure", "es": "Presión de meseta" },
        "explanation": {
          "pt": "A pressão de platô é uma medida da pressão alveolar ao final de uma inspiração (com pausa inspiratória) e é usada para avaliar o risco de lesão pulmonar induzida pela ventilação (barotrauma). Embora seja um parâmetro importante a ser monitorado, não é um ajuste feito para controlar a eliminação de CO₂.",
          "en": "Plateau pressure is a measure of alveolar pressure at the end of inspiration (with an inspiratory hold) and is used to assess the risk of ventilator-induced lung injury (barotrauma). While an important parameter to monitor, it is not an adjustment made to control CO₂ elimination.",
          "es": "La presión de meseta es una medida de la presión alveolar al final de una inspiración (con una pausa inspiratoria) y se utiliza para evaluar el riesgo de lesión pulmonar inducida por la ventilación (barotrauma). Aunque es un parámetro importante a monitorear, no es un ajuste que se realice para controlar la eliminación de CO₂."
        }
      },
      { 
        "text": { "pt": "Tempo inspiratório", "en": "Inspiratory time", "es": "Tiempo inspiratorio" },
        "explanation": {
          "pt": "O tempo inspiratório influencia a distribuição do gás inspirado e a relação entre o tempo inspiratório e expiratório (relação I:E). Alterações podem afetar o conforto do paciente, a pressão média das vias aéreas e, indiretamente, a oxigenação ou o aprisionamento aéreo, mas não é o controle primário da eliminação de CO₂.",
          "en": "Inspiratory time influences the distribution of inspired gas and the ratio of inspiratory to expiratory time (I:E ratio). Changes can affect patient comfort, mean airway pressure, and indirectly, oxygenation or air trapping, but it is not the primary control for CO₂ elimination.",
          "es": "El tiempo inspiratorio influye en la distribución del gas inspirado y la relación entre el tiempo inspiratorio y espiratorio (relación I:E). Los cambios pueden afectar la comodidad del paciente, la presión media de las vías respiratorias e, indirectamente, la oxigenación o el atrapamiento aéreo, pero no es el control primario de la eliminación de CO₂."
        }
      }
    ]
  },
  {
    "id": 503,
    "code": "pneumo01-q503",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 3,
    "question": {
      "pt": "Qual dos seguintes parâmetros deve ser monitorado para evitar barotrauma durante a ventilação mecânica?",
      "en": "Which of the following parameters should be monitored to avoid barotrauma during mechanical ventilation?",
      "es": "¿Cuál de los siguientes parámetros debe ser monitoreado para evitar barotrauma durante la ventilación mecánica?"
    },
    "options": [
      {
        "text": {
          "pt": "Frequência respiratória",
          "en": "Respiratory rate",
          "es": "Frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Não é o parâmetro primário para avaliação de risco de barotrauma.",
          "en": "Not the primary parameter for barotrauma risk assessment.",
          "es": "No es el parámetro principal para evaluar riesgo de barotrauma."
        }
      },
      {
        "text": {
          "pt": "FiO₂",
          "en": "FiO₂",
          "es": "FiO₂"
        },
        "explanation": {
          "pt": "Relacionado à toxicidade do oxigênio, não diretamente ao barotrauma.",
          "en": "Related to oxygen toxicity, not directly to barotrauma.",
          "es": "Relacionado con toxicidad por oxígeno, no directamente con barotrauma."
        }
      },
      {
        "text": {
          "pt": "Volume minuto",
          "en": "Minute volume",
          "es": "Volumen minuto"
        },
        "explanation": {
          "pt": "Volume total ventilado, menos sensível que a pressão de platô para risco de barotrauma.",
          "en": "Total ventilated volume, less sensitive than plateau pressure for barotrauma risk.",
          "es": "Volumen total ventilado, menos sensible que la presión de meseta para riesgo de barotrauma."
        }
      },
      {
        "text": {
          "pt": "Pressão de platô",
          "en": "Plateau pressure",
          "es": "Presión de meseta"
        },
        "explanation": {
          "pt": "Melhor parâmetro para estimar risco de barotrauma. Deve ser mantida abaixo de 30 cmH₂O.",
          "en": "Best parameter to estimate barotrauma risk. Should be kept below 30 cmH₂O.",
          "es": "Mejor parámetro para estimar riesgo de barotrauma. Debe mantenerse bajo 30 cmH₂O."
        }
      },
      {
        "text": {
          "pt": "Tempo inspiratório",
          "en": "Inspiratory time",
          "es": "Tiempo inspiratorio"
        },
        "explanation": {
          "pt": "Pode influenciar pressões, mas não é o parâmetro primário de monitoramento.",
          "en": "May influence pressures but not the primary monitoring parameter.",
          "es": "Puede influir en presiones pero no es el parámetro principal de monitoreo."
        }
      }
    ]
  },
  {
    "id": 504,
    "code": "pneumo01-q504",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 4,
    "question": {
      "pt": "Qual das seguintes indicações justifica o início imediato de ventilação mecânica invasiva?",
      "en": "Which of the following indications justifies immediate initiation of invasive mechanical ventilation?",
      "es": "¿Cuál de las siguientes indicaciones justifica el inicio inmediato de ventilación mecánica invasiva?"
    },
    "options": [
      {
        "text": {
          "pt": "PaO₂ de 72 mmHg em ar ambiente",
          "en": "PaO₂ of 72 mmHg on room air",
          "es": "PaO₂ de 72 mmHg en aire ambiente"
        },
        "explanation": {
          "pt": "Oxigenação aceitável, não justifica ventilação invasiva imediata.",
          "en": "Acceptable oxygenation, does not justify immediate invasive ventilation.",
          "es": "Oxigenación aceptable, no justifica ventilación invasiva inmediata."
        }
      },
      {
        "text": {
          "pt": "Frequência respiratória de 24 irpm",
          "en": "Respiratory rate of 24 bpm",
          "es": "Frecuencia respiratoria de 24 rpm"
        },
        "explanation": {
          "pt": "Taquipneia isolada pode ser compensatória e não indica falência iminente.",
          "en": "Isolated tachypnea may be compensatory and does not indicate imminent failure.",
          "es": "La taquipnea aislada puede ser compensatoria y no indica falla inminente."
        }
      },
      {
        "text": {
          "pt": "PaCO₂ de 44 mmHg",
          "en": "PaCO₂ of 44 mmHg",
          "es": "PaCO₂ de 44 mmHg"
        },
        "explanation": {
          "pt": "Valor dentro da normalidade, não indica necessidade de ventilação.",
          "en": "Normal value, does not indicate need for ventilation.",
          "es": "Valor normal, no indica necesidad de ventilación."
        }
      },
      {
        "text": {
          "pt": "Uso de oxigênio suplementar a 2 L/min",
          "en": "Use of 2 L/min supplemental oxygen",
          "es": "Uso de oxígeno suplementario a 2 L/min"
        },
        "explanation": {
          "pt": "Suporte de oxigênio leve, não justifica intubação.",
          "en": "Mild oxygen support, does not justify intubation.",
          "es": "Soporte de oxígeno leve, no justifica intubación."
        }
      },
      {
        "text": {
          "pt": "Rebaixamento do nível de consciência com sinais de fadiga respiratória",
          "en": "Decreased consciousness with signs of respiratory fatigue",
          "es": "Disminución del nivel de conciencia con signos de fatiga respiratoria"
        },
        "explanation": {
          "pt": "Indica falência ventilatória iminente, sendo critério para intubação.",
          "en": "Indicates impending ventilatory failure, a criterion for intubation.",
          "es": "Indica falla ventilatoria inminente, criterio para intubación."
        }
      }
    ]
  },
  {
    "id": 505,
    "code": "pneumo01-q505",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 2,
    "question": {
      "pt": "Durante a ventilação com VCV, o volume corrente está diretamente relacionado a qual parâmetro?",
      "en": "During VCV ventilation, the tidal volume is directly related to which parameter?",
      "es": "Durante la ventilación con VCV, ¿con qué parámetro se relaciona directamente el volumen corriente?"
    },
    "options": [
      {
        "text": {
          "pt": "PEEP",
          "en": "PEEP",
          "es": "PEEP"
        },
        "explanation": {
          "pt": "A PEEP afeta a pressão média, mas não determina diretamente o volume corrente.",
          "en": "PEEP affects mean pressure but does not directly determine tidal volume.",
          "es": "La PEEP afecta la presión media pero no determina directamente el volumen corriente."
        }
      },
      {
        "text": {
          "pt": "Tempo inspiratório",
          "en": "Inspiratory time",
          "es": "Tiempo inspiratorio"
        },
        "explanation": {
          "pt": "O tempo inspiratório controla a duração, mas não o volume entregue.",
          "en": "Inspiratory time controls duration but not delivered volume.",
          "es": "El tiempo inspiratorio controla la duración pero no el volumen entregado."
        }
      },
      {
        "text": {
          "pt": "Complacência do sistema respiratório",
          "en": "Respiratory system compliance",
          "es": "Complacencia del sistema respiratorio"
        },
        "explanation": {
          "pt": "Em VCV, o volume é pré-ajustado, mas a pressão necessária depende da complacência.",
          "en": "In VCV, volume is preset but required pressure depends on compliance.",
          "es": "En VCV, el volumen está preajustado pero la presión requerida depende de la complacencia."
        }
      },
      {
        "text": {
          "pt": "Frequência respiratória",
          "en": "Respiratory rate",
          "es": "Frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Controla o volume minuto, não o volume corrente individual.",
          "en": "Controls minute volume, not individual tidal volume.",
          "es": "Controla el volumen minuto, no el volumen corriente individual."
        }
      },
      {
        "text": {
          "pt": "FiO₂",
          "en": "FiO₂",
          "es": "FiO₂"
        },
        "explanation": {
          "pt": "Relacionado à oxigenação, não ao volume corrente.",
          "en": "Related to oxygenation, not tidal volume.",
          "es": "Relacionado con oxigenación, no con volumen corriente."
        }
      }
    ]
  },
  {
    "id": 506,
    "code": "pneumo01-q506",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 1,
    "question": {
      "pt": "Em relação à FiO₂, qual é o objetivo na ventilação mecânica de pacientes críticos?",
      "en": "Regarding FiO₂, what is the goal during mechanical ventilation in critically ill patients?",
      "es": "Respecto a la FiO₂, ¿cuál es el objetivo durante la ventilación mecánica en pacientes críticos?"
    },
    "options": [
      {
        "text": {
          "pt": "Manter FiO₂ acima de 80% continuamente",
          "en": "Maintain FiO₂ above 80% continuously",
          "es": "Mantener FiO₂ por encima del 80% continuamente"
        },
        "explanation": {
          "pt": "FiO₂ elevada aumenta risco de toxicidade pulmonar e deve ser evitada.",
          "en": "High FiO₂ increases risk of pulmonary toxicity and should be avoided.",
          "es": "FiO₂ elevada aumenta riesgo de toxicidad pulmonar y debe evitarse."
        }
      },
      {
        "text": {
          "pt": "Utilizar a menor FiO₂ possível para manter SatO₂ ≥ 92%",
          "en": "Use the lowest FiO₂ possible to maintain SpO₂ ≥ 92%",
          "es": "Usar la menor FiO₂ posible para mantener una SpO₂ ≥ 92%"
        },
        "explanation": {
          "pt": "Objetivo é minimizar risco de toxicidade por oxigênio mantendo oxigenação adequada.",
          "en": "Goal is to minimize oxygen toxicity risk while maintaining adequate oxygenation.",
          "es": "Objetivo es minimizar riesgo de toxicidad por oxígeno manteniendo oxigenación adecuada."
        }
      },
      {
        "text": {
          "pt": "Manter a FiO₂ fixa em 100% nas primeiras 24h",
          "en": "Keep FiO₂ fixed at 100% during the first 24h",
          "es": "Mantener FiO₂ fija al 100% durante las primeras 24h"
        },
        "explanation": {
          "pt": "Hiperóxia prolongada causa dano pulmonar e deve ser evitada.",
          "en": "Prolonged hyperoxia causes lung damage and should be avoided.",
          "es": "La hiperoxia prolongada causa daño pulmonar y debe evitarse."
        }
      },
      {
        "text": {
          "pt": "Usar sempre FiO₂ de 60% como padrão",
          "en": "Always use FiO₂ of 60% as a standard",
          "es": "Usar siempre una FiO₂ de 60% como estándar"
        },
        "explanation": {
          "pt": "FiO₂ deve ser individualizada conforme necessidade, não fixa.",
          "en": "FiO₂ should be individualized based on need, not fixed.",
          "es": "La FiO₂ debe individualizarse según necesidad, no ser fija."
        }
      },
      {
        "text": {
          "pt": "Ajustar a FiO₂ de acordo com a pressão de platô",
          "en": "Adjust FiO₂ according to plateau pressure",
          "es": "Ajustar la FiO₂ según la presión de meseta"
        },
        "explanation": {
          "pt": "Pressão de platô não tem relação direta com ajuste de FiO₂.",
          "en": "Plateau pressure is not directly related to FiO₂ adjustment.",
          "es": "La presión de meseta no tiene relación directa con ajuste de FiO₂."
        }
      }
    ]
  },
  {
    "id": 507,
    "code": "pneumo01-q507",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 0,
    "question": {
      "pt": "Qual é a principal complicação associada à hiperinsuflação dinâmica em pacientes em ventilação mecânica?",
      "en": "What is the main complication associated with dynamic hyperinflation in mechanically ventilated patients?",
      "es": "¿Cuál es la principal complicación asociada con la hiperinsuflación dinámica en pacientes ventilados mecánicamente?"
    },
    "options": [
      {
        "text": {
          "pt": "Hipotensão arterial",
          "en": "Arterial hypotension",
          "es": "Hipotensión arterial"
        },
        "explanation": {
          "pt": "A hiperinsuflação aumenta pressão intratorácica, reduzindo retorno venoso e débito cardíaco.",
          "en": "Hyperinflation increases intrathoracic pressure, reducing venous return and cardiac output.",
          "es": "La hiperinsuflación aumenta presión intratorácica, reduciendo retorno venoso y gasto cardíaco."
        }
      },
      {
        "text": {
          "pt": "Hipertensão intracraniana",
          "en": "Intracranial hypertension",
          "es": "Hipertensión intracraneal"
        },
        "explanation": {
          "pt": "Complicação menos comum, não diretamente relacionada à hiperinsuflação.",
          "en": "Less common complication, not directly related to hyperinflation.",
          "es": "Complicación menos común, no relacionada directamente con hiperinsuflación."
        }
      },
      {
        "text": {
          "pt": "Hiponatremia",
          "en": "Hyponatremia",
          "es": "Hiponatremia"
        },
        "explanation": {
          "pt": "Distúrbio eletrolítico não associado à hiperinsuflação dinâmica.",
          "en": "Electrolyte disorder not associated with dynamic hyperinflation.",
          "es": "Trastorno electrolítico no asociado a hiperinsuflación dinámica."
        }
      },
      {
        "text": {
          "pt": "Bradipneia",
          "en": "Bradypnea",
          "es": "Bradipnea"
        },
        "explanation": {
          "pt": "A hiperinsuflação geralmente causa taquipneia, não bradipneia.",
          "en": "Hyperinflation typically causes tachypnea, not bradypnea.",
          "es": "La hiperinsuflación generalmente causa taquipnea, no bradipnea."
        }
      },
      {
        "text": {
          "pt": "Hipertermia",
          "en": "Hyperthermia",
          "es": "Hipertermia"
        },
        "explanation": {
          "pt": "Não é complicação direta da hiperinsuflação dinâmica.",
          "en": "Not a direct complication of dynamic hyperinflation.",
          "es": "No es complicación directa de hiperinsuflación dinámica."
        }
      }
    ]
  },
  {
    "id": 508,
    "code": "pneumo01-q508",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 2,
    "question": {
      "pt": "Qual parâmetro ventilatório é mais útil para avaliar a complacência estática do pulmão?",
      "en": "Which ventilatory parameter is most useful to assess static lung compliance?",
      "es": "¿Qué parámetro ventilatorio es más útil para evaluar la complacencia pulmonar estática?"
    },
    "options": [
      {
        "text": {
          "pt": "PEEP",
          "en": "PEEP",
          "es": "PEEP"
        },
        "explanation": {
          "pt": "Pressão expiratória final positiva, não reflete complacência estática.",
          "en": "Positive end-expiratory pressure, does not reflect static compliance.",
          "es": "Presión espiratoria final positiva, no refleja complacencia estática."
        }
      },
      {
        "text": {
          "pt": "Pressão de pico",
          "en": "Peak pressure",
          "es": "Presión pico"
        },
        "explanation": {
          "pt": "Inclui resistência das vias aéreas, não é medida pura da complacência.",
          "en": "Includes airway resistance, not a pure measure of compliance.",
          "es": "Incluye resistencia de vías aéreas, no es medida pura de complacencia."
        }
      },
      {
        "text": {
          "pt": "Pressão de platô",
          "en": "Plateau pressure",
          "es": "Presión de meseta"
        },
        "explanation": {
          "pt": "Reflete pressão alveolar durante pausa inspiratória, essencial para cálculo da complacência estática.",
          "en": "Reflects alveolar pressure during inspiratory pause, essential for static compliance calculation.",
          "es": "Refleja presión alveolar durante pausa inspiratoria, esencial para cálculo de complacencia estática."
        }
      },
      {
        "text": {
          "pt": "Volume minuto",
          "en": "Minute volume",
          "es": "Volumen minuto"
        },
        "explanation": {
          "pt": "Volume total por minuto, não relacionado à complacência estática.",
          "en": "Total volume per minute, not related to static compliance.",
          "es": "Volumen total por minuto, no relacionado con complacencia estática."
        }
      },
      {
        "text": {
          "pt": "Frequência respiratória",
          "en": "Respiratory rate",
          "es": "Frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Não utilizada no cálculo direto da complacência.",
          "en": "Not used in direct compliance calculation.",
          "es": "No se utiliza en cálculo directo de complacencia."
        }
      }
    ]
  },
  {
    "id": 509,
    "code": "pneumo01-q509",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 4,
    "question": {
      "pt": "Qual dos seguintes ajustes ventilatórios pode ajudar a corrigir uma acidose respiratória?",
      "en": "Which of the following ventilator adjustments can help correct respiratory acidosis?",
      "es": "¿Cuál de los siguientes ajustes del ventilador puede ayudar a corregir una acidosis respiratoria?"
    },
    "options": [
      {
        "text": {
          "pt": "Reduzir a PEEP",
          "en": "Decrease PEEP",
          "es": "Disminuir la PEEP"
        },
        "explanation": {
          "pt": "Reduzir PEEP pode piorar oxigenação sem corrigir hipercapnia.",
          "en": "Reducing PEEP may worsen oxygenation without correcting hypercapnia.",
          "es": "Reducir PEEP puede empeorar oxigenación sin corregir hipercapnia."
        }
      },
      {
        "text": {
          "pt": "Diminuir a FiO₂",
          "en": "Reduce FiO₂",
          "es": "Reducir FiO₂"
        },
        "explanation": {
          "pt": "Ajuste de FiO₂ não afeta diretamente a eliminação de CO₂.",
          "en": "FiO₂ adjustment does not directly affect CO₂ elimination.",
          "es": "Ajuste de FiO₂ no afecta directamente eliminación de CO₂."
        }
      },
      {
        "text": {
          "pt": "Aumentar a PEEP",
          "en": "Increase PEEP",
          "es": "Aumentar la PEEP"
        },
        "explanation": {
          "pt": "Melhora oxigenação, mas não corrige diretamente acidose respiratória.",
          "en": "Improves oxygenation but does not directly correct respiratory acidosis.",
          "es": "Mejora oxigenación pero no corrige directamente acidosis respiratoria."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente",
          "en": "Reduce tidal volume",
          "es": "Reducir volumen corriente"
        },
        "explanation": {
          "pt": "Reduzir Vt pode piorar a hipercapnia em vez de corrigi-la.",
          "en": "Reducing Vt may worsen hypercapnia rather than correct it.",
          "es": "Reducir Vt puede empeorar hipercapnia en lugar de corregirla."
        }
      },
      {
        "text": {
          "pt": "Aumentar a frequência respiratória",
          "en": "Increase respiratory rate",
          "es": "Aumentar la frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Aumenta ventilação minuto e eliminação de CO₂, corrigindo acidose respiratória.",
          "en": "Increases minute ventilation and CO₂ elimination, correcting respiratory acidosis.",
          "es": "Aumenta ventilación minuto y eliminación de CO₂, corrigiendo acidosis respiratoria."
        }
      }
    ]
  },
  {
    "id": 510,
    "code": "pneumo01-q510",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "easy",
    "correct": 3,
    "question": {
      "pt": "Qual das opções abaixo representa um exemplo de assincronia entre o paciente e o ventilador?",
      "en": "Which of the following options represents an example of patient-ventilator asynchrony?",
      "es": "¿Cuál de las siguientes opciones representa un ejemplo de asincronía paciente-ventilador?"
    },
    "options": [
      {
        "text": {
          "pt": "Pressão de platô > 30 cmH₂O",
          "en": "Plateau pressure > 30 cmH₂O",
          "es": "Presión de meseta > 30 cmH₂O"
        },
        "explanation": {
          "pt": "Indicador de risco de barotrauma, não de assincronia.",
          "en": "Indicator of barotrauma risk, not asynchrony.",
          "es": "Indicador de riesgo de barotrauma, no de asincronía."
        }
      },
      {
        "text": {
          "pt": "FiO₂ mantida acima de 60%",
          "en": "FiO₂ maintained above 60%",
          "es": "FiO₂ mantenida por encima del 60%"
        },
        "explanation": {
          "pt": "Configuração de oxigenação, não relacionada a assincronia.",
          "en": "Oxygenation setting, not related to asynchrony.",
          "es": "Configuración de oxigenación, no relacionada con asincronía."
        }
      },
      {
        "text": {
          "pt": "PEEP ajustada para melhorar a oxigenação",
          "en": "PEEP adjusted to improve oxygenation",
          "es": "PEEP ajustada para mejorar la oxigenación"
        },
        "explanation": {
          "pt": "Manobra terapêutica padrão, não caracteriza assincronia.",
          "en": "Standard therapeutic maneuver, not characteristic of asynchrony.",
          "es": "Maniobra terapéutica estándar, no caracteriza asincronía."
        }
      },
      {
        "text": {
          "pt": "Esforço inspiratório não detectado pelo ventilador",
          "en": "Inspiratory effort not detected by the ventilator",
          "es": "Esfuerzo inspiratorio no detectado por el ventilador"
        },
        "explanation": {
          "pt": "Exemplo clássico de assincronia do tipo 'trigger ineficaz'.",
          "en": "Classic example of 'ineffective trigger' asynchrony.",
          "es": "Ejemplo clásico de asincronía por 'disparo inefectivo'."
        }
      },
      {
        "text": {
          "pt": "Ventilação com volume corrente de 6 ml/kg",
          "en": "Ventilation with tidal volume of 6 ml/kg",
          "es": "Ventilación con volumen corriente de 6 ml/kg"
        },
        "explanation": {
          "pt": "Estratégia protetora padrão, não indica assincronia.",
          "en": "Standard protective strategy, not indicative of asynchrony.",
          "es": "Estrategia protectora estándar, no indica asincronía."
        }
      }
    ]
  },
  {
    "id": 511,
    "code": "pneumo01-q511",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 4,
    "question": {
      "pt": "Paciente de 76 anos, com DPOC GOLD 4, é admitido por exacerbação e apresenta hipercapnia (PaCO₂: 78 mmHg, pH: 7,28). Está em VNI com IPAP 18 cmH₂O e EPAP 5 cmH₂O. Após 1 hora, persiste hipoventilação. Qual o próximo ajuste mais adequado?",
      "en": "A 76-year-old patient with GOLD 4 COPD is admitted for exacerbation and presents with hypercapnia (PaCO₂: 78 mmHg, pH: 7.28). On NIV with IPAP 18 cmH₂O and EPAP 5 cmH₂O. After 1 hour, hypoventilation persists. What is the most appropriate next adjustment?",
      "es": "Paciente de 76 años con EPOC GOLD 4 es admitido por exacerbación y presenta hipercapnia (PaCO₂: 78 mmHg, pH: 7,28). Está en VNI con IPAP 18 cmH₂O y EPAP 5 cmH₂O. Tras 1 hora, persiste la hipoventilación. ¿Cuál es el ajuste más adecuado?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar a EPAP para 8 cmH₂O",
          "en": "Increase EPAP to 8 cmH₂O",
          "es": "Aumentar EPAP a 8 cmH₂O"
        },
        "explanation": {
          "pt": "Aumentar EPAP sem ajustar IPAP reduz a pressão de suporte (IPAP-EPAP), diminuindo a ventilação alveolar e piorando a hipercapnia. Em DPOC, EPAP alta pode aumentar trabalho respiratório sem benefício ventilatório.",
          "en": "Increasing EPAP without adjusting IPAP reduces pressure support (IPAP-EPAP), decreasing alveolar ventilation and worsening hypercapnia. In COPD, high EPAP may increase work of breathing without ventilatory benefit.",
          "es": "Aumentar la EPAP sin ajustar la IPAP reduce el soporte de presión (IPAP-EPAP), disminuyendo la ventilación alveolar y empeorando la hipercapnia. En EPOC, EPAP alta puede aumentar el trabajo respiratorio sin beneficio ventilatorio."
        }
      },
      {
        "text": {
          "pt": "Reduzir a IPAP para 14 cmH₂O",
          "en": "Reduce IPAP to 14 cmH₂O",
          "es": "Reducir IPAP a 14 cmH₂O"
        },
        "explanation": {
          "pt": "Reduzir IPAP diminui a pressão de suporte, reduzindo a ventilação minuto e piorando a eliminação de CO₂. Contraproducente na correção de acidose respiratória.",
          "en": "Reducing IPAP decreases pressure support, reducing minute ventilation and worsening CO₂ elimination. Counterproductive for correcting respiratory acidosis.",
          "es": "Reducir la IPAP disminuye el soporte de presión, reduciendo la ventilación minuto y empeorando la eliminación de CO₂. Contraproducente para corregir acidosis respiratoria."
        }
      },
      {
        "text": {
          "pt": "Trocar para VCV invasivo",
          "en": "Switch to invasive VCV",
          "es": "Cambiar a VCV invasivo"
        },
        "explanation": {
          "pt": "VNI é primeira escolha para exacerbação de DPOC. Troca precoce para ventilação invasiva aumenta risco de pneumonia associada à ventilação e desmame difícil.",
          "en": "NIV is first-line for COPD exacerbation. Early switch to invasive ventilation increases risk of ventilator-associated pneumonia and difficult weaning.",
          "es": "VNI es primera elección en exacerbación de EPOC. Cambio precoz a ventilación invasiva aumenta riesgo de neumonía asociada al ventilador y destete difícil."
        }
      },
      {
        "text": {
          "pt": "Ajustar FiO₂ para 100%",
          "en": "Adjust FiO₂ to 100%",
          "es": "Ajustar FiO₂ al 100%"
        },
        "explanation": {
          "pt": "Hiperóxia em DPOC pode causar depressão ventilatória e piorar hipercapnia. Não trata causa da hipoventilação e aumenta risco de toxicidade por oxigênio.",
          "en": "Hyperoxia in COPD may cause ventilatory depression and worsen hypercapnia. Does not address hypoventilation cause and increases oxygen toxicity risk.",
          "es": "Hiperoxia en EPOC puede causar depresión ventilatoria y empeorar hipercapnia. No aborda causa de hipoventilación y aumenta riesgo de toxicidad por oxígeno."
        }
      },
      {
        "text": {
          "pt": "Aumentar a IPAP para 22 cmH₂O",
          "en": "Increase IPAP to 22 cmH₂O",
          "es": "Aumentar IPAP a 22 cmH₂O"
        },
        "explanation": {
          "pt": "Aumento de IPAP eleva a pressão de suporte (IPAP-EPAP), melhorando ventilação alveolar e eliminação de CO₂. Estratégia fundamental para correção de hipoventilação em DPOC sob VNI.",
          "en": "Increasing IPAP raises pressure support (IPAP-EPAP), improving alveolar ventilation and CO₂ elimination. Key strategy for correcting hypoventilation in COPD on NIV.",
          "es": "Aumentar la IPAP incrementa el soporte de presión (IPAP-EPAP), mejorando ventilación alveolar y eliminación de CO₂. Estrategia fundamental para corregir hipoventilación en EPOC bajo VNI."
        }
      }
    ]
  },
  {
    "id": 512,
    "code": "pneumo01-q512",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 0,
    "question": {
      "pt": "Paciente de 55 anos, previamente hígido, vítima de politrauma, encontra-se em ventilação mecânica no modo VCV. Está com FiO₂ 60%, Vt 500 ml, FR 18, PEEP 5 cmH₂O. Apresenta saturação de 87% e uso de musculatura acessória. Qual ajuste ventilatório deve ser priorizado?",
      "en": "A 55-year-old previously healthy patient, victim of polytrauma, is on mechanical ventilation in VCV mode. Settings: FiO₂ 60%, Vt 500 ml, RR 18, PEEP 5 cmH₂O. The patient shows 87% SpO₂ and use of accessory muscles. What ventilatory adjustment should be prioritized?",
      "es": "Paciente de 55 años, previamente sano, víctima de politrauma, se encuentra en ventilación mecánica en modo VCV. Configuración: FiO₂ 60%, Vt 500 ml, FR 18, PEEP 5 cmH₂O. Presenta saturación del 87% y uso de músculos accesorios. ¿Qué ajuste ventilatorio se debe priorizar?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar a PEEP",
          "en": "Increase PEEP",
          "es": "Aumentar la PEEP"
        },
        "explanation": {
          "pt": "Prioriza recrutamento alveolar em atelectasias por trauma. Melhora relação V/Q, reduz shunt intrapulmonar e aumenta capacidade residual funcional sem risco de hiperóxia.",
          "en": "Prioritizes alveolar recruitment in trauma-related atelectasis. Improves V/Q matching, reduces intrapulmonary shunt and increases FRC without hyperoxia risk.",
          "es": "Prioriza reclutamiento alveolar en atelectasias por trauma. Mejora relación V/Q, reduce shunt intrapulmonar y aumenta capacidad residual funcional sin riesgo de hiperoxia."
        }
      },
      {
        "text": {
          "pt": "Reduzir a FiO₂",
          "en": "Reduce FiO₂",
          "es": "Reducir la FiO₂"
        },
        "explanation": {
          "pt": "Contraindicado em hipoxemia grave. Redução de FiO₂ pioraria oxigenação sem tratar causa subjacente de atelectasia/edema.",
          "en": "Contraindicated in severe hypoxemia. Reducing FiO₂ would worsen oxygenation without addressing underlying atelectasis/edema.",
          "es": "Contraindicado en hipoxemia grave. Reducir FiO₂ empeoraría oxigenación sin tratar causa subyacente de atelectasia/edema."
        }
      },
      {
        "text": {
          "pt": "Reduzir a frequência respiratória",
          "en": "Reduce respiratory rate",
          "es": "Reducir la frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Diminuiria ventilação minuto, podendo causar hipercapnia. Não melhora oxigenação em contexto de baixa complacência pulmonar.",
          "en": "Would decrease minute ventilation, potentially causing hypercapnia. Does not improve oxygenation in low lung compliance context.",
          "es": "Disminuiría ventilación minuto, pudiendo causar hipercapnia. No mejora oxigenación en contexto de baja compliancia pulmonar."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente",
          "en": "Reduce tidal volume",
          "es": "Reducir el volumen corriente"
        },
        "explanation": {
          "pt": "Volume já é adequado (500ml ≈ 7ml/kg). Redução adicional não melhora oxigenação e pode prejudicar ventilação alveolar.",
          "en": "Volume is already adequate (500ml ≈ 7ml/kg). Further reduction doesn't improve oxygenation and may impair alveolar ventilation.",
          "es": "Volumen ya es adecuado (500ml ≈ 7ml/kg). Reducción adicional no mejora oxigenación y puede perjudicar ventilación alveolar."
        }
      },
      {
        "text": {
          "pt": "Trocar para PCV com PEEP 0",
          "en": "Switch to PCV with zero PEEP",
          "es": "Cambiar a PCV con PEEP cero"
        },
        "explanation": {
          "pt": "PEEP zero é contraindicada em hipoxemia aguda. Causaria colapso alveolar e piora da oxigenação, especialmente em lesão pulmonar aguda.",
          "en": "Zero PEEP contraindicated in acute hypoxemia. Would cause alveolar collapse and worsen oxygenation, especially in acute lung injury.",
          "es": "PEEP cero está contraindicada en hipoxemia aguda. Causaría colapso alveolar y empeoramiento de oxigenación, especialmente en lesión pulmonar aguda."
        }
      }
    ]
  },
  {
    "id": 513,
    "code": "pneumo01-q513",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 1,
    "question": {
      "pt": "Paciente de 42 anos, sem comorbidades, evolui com SDRA moderada (PaO₂/FiO₂ = 160) após pneumonia por influenza. Está sedado, em VCV, com Vt 500 ml (aprox. 8 ml/kg), PEEP 6 cmH₂O e FiO₂ 60%. Gasometria mostra pH 7,35 e PaO₂ 68 mmHg. Qual ajuste é mais indicado?",
      "en": "A 42-year-old patient with no comorbidities develops moderate ARDS (PaO₂/FiO₂ = 160) after influenza pneumonia. On sedation and VCV: Vt 500 ml (~8 ml/kg), PEEP 6 cmH₂O, FiO₂ 60%. ABG: pH 7.35, PaO₂ 68 mmHg. What is the most appropriate adjustment?",
      "es": "Paciente de 42 años, sin comorbilidades, desarrolla SDRA moderado (PaO₂/FiO₂ = 160) tras neumonía por influenza. Sedado y en VCV: Vt 500 ml (~8 ml/kg), PEEP 6 cmH₂O, FiO₂ 60%. GSA: pH 7,35, PaO₂ 68 mmHg. ¿Cuál es el ajuste más apropiado?"
    },
    "options": [
      {
        "text": {
          "pt": "Reduzir a PEEP para 5 cmH₂O",
          "en": "Reduce PEEP to 5 cmH₂O",
          "es": "Reducir PEEP a 5 cmH₂O"
        },
        "explanation": {
          "pt": "Reduzir PEEP em SDRA piora recrutamento alveolar, aumenta colapso de unidades dependentes e reduz oxigenação. Contraindicado em PaO₂/FiO₂ < 200.",
          "en": "Reducing PEEP in ARDS worsens alveolar recruitment, increases collapse of dependent units and reduces oxygenation. Contraindicated in PaO₂/FiO₂ < 200.",
          "es": "Reducir PEEP en SDRA empeora reclutamiento alveolar, aumenta colapso de unidades dependientes y reduce oxigenación. Contraindicado en PaO₂/FiO₂ < 200."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente para 6 ml/kg",
          "en": "Reduce tidal volume to 6 ml/kg",
          "es": "Reducir volumen corriente a 6 ml/kg"
        },
        "explanation": {
          "pt": "Volume corrente de 8 ml/kg excede recomendação para SDRA (6 ml/kg peso ideal). Redução previne volutrauma e lesão pulmonar induzida por ventilador.",
          "en": "Tidal volume of 8 ml/kg exceeds ARDS recommendation (6 ml/kg ideal weight). Reduction prevents volutrauma and ventilator-induced lung injury.",
          "es": "Volumen corriente de 8 ml/kg excede recomendación para SDRA (6 ml/kg peso ideal). Reducción previene volutrauma y lesión pulmonar inducida por ventilador."
        }
      },
      {
        "text": {
          "pt": "Aumentar a frequência respiratória",
          "en": "Increase respiratory rate",
          "es": "Aumentar la frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Não indicado sem hipercapnia. FR atual mantém pH normal. Aumento desnecessário pode causar auto-PEEP e reduzir débito cardíaco.",
          "en": "Not indicated without hypercapnia. Current RR maintains normal pH. Unnecessary increase may cause auto-PEEP and reduce cardiac output.",
          "es": "No indicado sin hipercapnia. FR actual mantiene pH normal. Aumento innecesario puede causar auto-PEEP y reducir gasto cardíaco."
        }
      },
      {
        "text": {
          "pt": "Aumentar a FiO₂ para 100%",
          "en": "Increase FiO₂ to 100%",
          "es": "Aumentar FiO₂ al 100%"
        },
        "explanation": {
          "pt": "Hiperóxia prolongada causa toxicidade pulmonar e atelectasia por absorção. Prioriza-se otimizar PEEP antes de aumentar FiO₂ > 60% em SDRA.",
          "en": "Prolonged hyperoxia causes pulmonary toxicity and absorption atelectasis. Optimizing PEEP takes priority over increasing FiO₂ > 60% in ARDS.",
          "es": "Hiperoxia prolongada causa toxicidad pulmonar y atelectasia por absorción. Prioriza optimizar PEEP antes de aumentar FiO₂ > 60% en SDRA."
        }
      },
      {
        "text": {
          "pt": "Trocar para modo espontâneo",
          "en": "Switch to spontaneous mode",
          "es": "Cambiar a modo espontáneo"
        },
        "explanation": {
          "pt": "Contraindicado em SDRA moderado/grave com hipoxemia. Paciente sedado não tem capacidade para ventilação espontânea efetiva.",
          "en": "Contraindicated in moderate/severe ARDS with hypoxemia. Sedated patient lacks capacity for effective spontaneous ventilation.",
          "es": "Contraindicado en SDRA moderado/grave con hipoxemia. Paciente sedado no tiene capacidad para ventilación espontánea efectiva."
        }
      }
    ]
  },
  {
    "id": 514,
    "code": "pneumo01-q514",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 3,
    "question": {
      "pt": "Homem de 68 anos, com insuficiência respiratória aguda por sepse pulmonar, encontra-se em ventilação mecânica no modo VCV: Vt 420 ml (6 ml/kg), FR 18, PEEP 8, FiO₂ 50%. Está profundamente sedado. Gasometria arterial: pH 7,22, PaCO₂ 65 mmHg. Qual ajuste é mais apropriado neste momento?",
      "en": "A 68-year-old man with acute respiratory failure due to pulmonary sepsis is on mechanical ventilation (VCV): Vt 420 ml (6 ml/kg), RR 18, PEEP 8, FiO₂ 50%. He is deeply sedated. Arterial blood gas: pH 7.22, PaCO₂ 65 mmHg. What is the most appropriate adjustment?",
      "es": "Hombre de 68 años con insuficiencia respiratoria aguda por sepsis pulmonar está en ventilación mecánica (VCV): Vt 420 ml (6 ml/kg), FR 18, PEEP 8, FiO₂ 50%. Está profundamente sedado. GSA: pH 7,22, PaCO₂ 65 mmHg. ¿Cuál es el ajuste más apropiado?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar a PEEP para 12",
          "en": "Increase PEEP to 12",
          "es": "Aumentar PEEP a 12"
        },
        "explanation": {
          "pt": "PEEP alta não corrige hipercapnia. Pode até reduzir débito cardíaco e piorar ventilação em zonas não dependentes. Oxigenação já adequada (FiO₂ 50%).",
          "en": "High PEEP doesn't correct hypercapnia. May reduce cardiac output and worsen ventilation in non-dependent zones. Oxygenation already adequate (FiO₂ 50%).",
          "es": "PEEP alta no corrige hipercapnia. Puede reducir gasto cardíaco y empeorar ventilación en zonas no dependientes. Oxigenación ya adecuada (FiO₂ 50%)."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente para 5 ml/kg",
          "en": "Reduce tidal volume to 5 ml/kg",
          "es": "Reducir volumen corriente a 5 ml/kg"
        },
        "explanation": {
          "pt": "Volume já é protetor (6 ml/kg). Redução adicional aumentaria hipercapnia e acidose sem benefício comprovado nesta situação.",
          "en": "Volume already protective (6 ml/kg). Further reduction would increase hypercapnia and acidosis without proven benefit in this scenario.",
          "es": "Volumen ya protector (6 ml/kg). Reducción adicional aumentaría hipercapnia y acidosis sin beneficio comprobado en esta situación."
        }
      },
      {
        "text": {
          "pt": "Aumentar a FiO₂ para 100%",
          "en": "Increase FiO₂ to 100%",
          "es": "Aumentar FiO₂ al 100%"
        },
        "explanation": {
          "pt": "Hiperóxia não corrige acidose respiratória. PaO₂ não relatada como baixa, e FiO₂ 50% sugere oxigenação adequada. Risco de toxicidade.",
          "en": "Hyperoxia doesn't correct respiratory acidosis. PaO₂ not reported as low, and FiO₂ 50% suggests adequate oxygenation. Toxicity risk.",
          "es": "Hiperoxia no corrige acidosis respiratoria. PaO₂ no reportada como baja, y FiO₂ 50% sugiere oxigenación adecuada. Riesgo de toxicidad."
        }
      },
      {
        "text": {
          "pt": "Aumentar a frequência respiratória para 24",
          "en": "Increase respiratory rate to 24",
          "es": "Aumentar la frecuencia respiratoria a 24"
        },
        "explanation": {
          "pt": "Aumento da FR eleva ventilação minuto, corrigindo hipercapnia e acidose respiratória. Volume corrente já otimizado, sendo estratégia segura.",
          "en": "Increasing RR elevates minute ventilation, correcting hypercapnia and respiratory acidosis. Tidal volume already optimized, making it a safe strategy.",
          "es": "Aumentar la FR eleva ventilación minuto, corrigiendo hipercapnia y acidosis respiratoria. Volumen corriente ya optimizado, siendo estrategia segura."
        }
      },
      {
        "text": {
          "pt": "Iniciar ventilação espontânea",
          "en": "Start spontaneous ventilation",
          "es": "Iniciar ventilación espontánea"
        },
        "explanation": {
          "pt": "Contraindicado em paciente profundamente sedado e com acidose respiratória. Exige esforço respiratório que paciente não pode fornecer atualmente.",
          "en": "Contraindicated in deeply sedated patient with respiratory acidosis. Requires respiratory effort patient cannot currently provide.",
          "es": "Contraindicado en paciente profundamente sedado y con acidosis respiratoria. Exige esfuerzo respiratorio que paciente no puede proveer actualmente."
        }
      }
    ]
  },
  {
    "id": 515,
    "code": "pneumo01-q515",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 2,
    "question": {
      "pt": "Paciente de 33 anos, asmática grave, evolui com necessidade de intubação e ventilação mecânica. Está em VCV com Vt 400 ml, FR 20, PEEP 5, tempo inspiratório curto. Apresenta hipercapnia progressiva, aumento de pressão de pico e queda de pressão arterial. Qual medida deve ser priorizada?",
      "en": "A 33-year-old woman with severe asthma requires intubation and mechanical ventilation. She is on VCV: Vt 400 ml, RR 20, PEEP 5, short inspiratory time. She develops progressive hypercapnia, increasing peak pressures, and hypotension. What should be prioritized?",
      "es": "Paciente de 33 años con asma grave requiere intubación y ventilación mecánica. Está en VCV: Vt 400 ml, FR 20, PEEP 5, tiempo inspiratorio corto. Desarrolla hipercapnia progresiva, aumento de presión pico y hipotensión. ¿Qué medida debe priorizarse?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar a PEEP para 10 cmH₂O",
          "en": "Increase PEEP to 10 cmH₂O",
          "es": "Aumentar PEEP a 10 cmH₂O"
        },
        "explanation": {
          "pt": "PEEP alta em asma grave pode aumentar hiperinsuflação dinâmica e piorar auto-PEEP. Contraindicado pois aumenta pressão intratorácica e compromete hemodinâmica.",
          "en": "High PEEP in severe asthma may increase dynamic hyperinflation and worsen auto-PEEP. Contraindicated as it raises intrathoracic pressure and compromises hemodynamics.",
          "es": "PEEP alta en asma grave puede aumentar hiperinsuflación dinámica y empeorar auto-PEEP. Contraindicado pues aumenta presión intratorácica y compromete hemodinámica."
        }
      },
      {
        "text": {
          "pt": "Iniciar manobras de recrutamento alveolar",
          "en": "Start alveolar recruitment maneuvers",
          "es": "Iniciar maniobras de reclutamiento alveolar"
        },
        "explanation": {
          "pt": "Contraindicadas em asma. Podem aumentar hiperinsuflação e risco de barotrauma. Não há perda de recrutamento significativa na asma aguda.",
          "en": "Contraindicated in asthma. May increase hyperinflation and barotrauma risk. No significant recruitment loss in acute asthma.",
          "es": "Contraindicadas en asma. Pueden aumentar hiperinsuflación y riesgo de barotrauma. No hay pérdida significativa de reclutamiento en asma aguda."
        }
      },
      {
        "text": {
          "pt": "Reduzir a frequência respiratória e prolongar tempo expiratório",
          "en": "Reduce respiratory rate and prolong expiratory time",
          "es": "Reducir frecuencia respiratoria y prolongar el tiempo espiratorio"
        },
        "explanation": {
          "pt": "Reduz FR e aumenta tempo expiratório para permitir esvaziamento pulmonar completo. Diminui auto-PEEP, hiperinsuflação dinâmica e melhora hemodinâmica.",
          "en": "Reduces RR and prolongs expiratory time to allow complete lung emptying. Decreases auto-PEEP, dynamic hyperinflation and improves hemodynamics.",
          "es": "Reduce FR y aumenta tiempo espiratorio para permitir vaciamiento pulmonar completo. Disminuye auto-PEEP, hiperinsuflación dinámica y mejora hemodinámica."
        }
      },
      {
        "text": {
          "pt": "Trocar para ventilação com pressão controlada",
          "en": "Switch to pressure-controlled ventilation",
          "es": "Cambiar a ventilación controlada por presión"
        },
        "explanation": {
          "pt": "Não resolve problema fundamental de aprisionamento aéreo. PCV pode até dificultar controle de volumes em vias aéreas obstruídas.",
          "en": "Doesn't solve fundamental air trapping issue. PCV may even hinder volume control in obstructed airways.",
          "es": "No resuelve problema fundamental de atrapamiento aéreo. PCV puede dificultar control de volúmenes en vías aéreas obstruidas."
        }
      },
      {
        "text": {
          "pt": "Administrar furosemida IV",
          "en": "Administer IV furosemide",
          "es": "Administrar furosemida IV"
        },
        "explanation": {
          "pt": "Diurético não trata causa primária (broncoespasmo e aprisionamento aéreo). Piora hipotensão e não melhora mecânica ventilatória.",
          "en": "Diuretic doesn't address primary cause (bronchospasm and air trapping). Worsens hypotension and doesn't improve ventilatory mechanics.",
          "es": "Diurético no trata causa primaria (broncoespasmo y atrapamiento aéreo). Empeora hipotensión y no mejora mecánica ventilatoria."
        }
      }
    ]
  },
  {
    "id": 516,
    "code": "pneumo01-q516",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 1,
    "question": {
      "pt": "Mulher de 72 anos, tabagista ativa, com DPOC GOLD 3, foi intubada por acidose respiratória aguda. Está em VCV: Vt 420 ml, FR 20, PEEP 5, FiO₂ 40%. Evolui com distensão torácica, hipercapnia persistente e queda progressiva da PA. Qual ajuste ventilatório deve ser priorizado?",
      "en": "A 72-year-old female, active smoker, with GOLD 3 COPD, was intubated due to acute respiratory acidosis. On VCV: Vt 420 ml, RR 20, PEEP 5, FiO₂ 40%. She develops chest hyperinflation, persistent hypercapnia, and progressive hypotension. What ventilator adjustment should be prioritized?",
      "es": "Mujer de 72 años, fumadora activa, con EPOC GOLD 3, fue intubada por acidosis respiratoria aguda. Está en VCV: Vt 420 ml, FR 20, PEEP 5, FiO₂ 40%. Evoluciona con distensión torácica, hipercapnia persistente y caída progresiva de la PA. ¿Qué ajuste ventilatorio debe priorizarse?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar a PEEP para 10 cmH₂O",
          "en": "Increase PEEP to 10 cmH₂O",
          "es": "Aumentar PEEP a 10 cmH₂O"
        },
        "explanation": {
          "pt": "PEEP externa elevada pode aumentar auto-PEEP em DPOC, exacerbando hiperinsuflação dinâmica e comprometendo retorno venoso.",
          "en": "High extrinsic PEEP may increase auto-PEEP in COPD, exacerbating dynamic hyperinflation and compromising venous return.",
          "es": "PEEP externa elevada puede aumentar auto-PEEP en EPOC, exacerbando hiperinsuflación dinámica y comprometiendo retorno venoso."
        }
      },
      {
        "text": {
          "pt": "Reduzir a frequência respiratória e prolongar o tempo expiratório",
          "en": "Reduce respiratory rate and prolong expiratory time",
          "es": "Reducir la frecuencia respiratoria y prolongar el tiempo espiratorio"
        },
        "explanation": {
          "pt": "Permite esvaziamento alveolar completo entre ciclos, reduzindo auto-PEEP e aprisionamento aéreo. Melhora hipercapnia e hemodinâmica em pacientes com DPOC.",
          "en": "Allows complete alveolar emptying between cycles, reducing auto-PEEP and air trapping. Improves hypercapnia and hemodynamics in COPD patients.",
          "es": "Permite vaciamiento alveolar completo entre ciclos, reduciendo auto-PEEP y atrapamiento aéreo. Mejora hipercapnia y hemodinámica en pacientes con EPOC."
        }
      },
      {
        "text": {
          "pt": "Aumentar o volume corrente para 500 ml",
          "en": "Increase tidal volume to 500 ml",
          "es": "Aumentar el volumen corriente a 500 ml"
        },
        "explanation": {
          "pt": "Aumentaria hiperinsuflação e auto-PEEP. Volume já adequado para peso ideal. Contraproducente na correção de hipercapnia.",
          "en": "Would increase hyperinflation and auto-PEEP. Volume already adequate for ideal weight. Counterproductive for hypercapnia correction.",
          "es": "Aumentaría hiperinsuflación y auto-PEEP. Volumen ya adecuado para peso ideal. Contraproducente para corrección de hipercapnia."
        }
      },
      {
        "text": {
          "pt": "Aumentar a FiO₂ para 100%",
          "en": "Increase FiO₂ to 100%",
          "es": "Aumentar FiO₂ al 100%"
        },
        "explanation": {
          "pt": "Não corrige hipercapnia ou auto-PEEP. Hiperóxia pode causar depressão ventilatória em DPOC. Saturação não é problema primário.",
          "en": "Doesn't correct hypercapnia or auto-PEEP. Hyperoxia may cause ventilatory depression in COPD. Saturation not primary issue.",
          "es": "No corrige hipercapnia o auto-PEEP. Hiperoxia puede causar depresión ventilatoria en EPOC. Saturación no es problema primario."
        }
      },
      {
        "text": {
          "pt": "Iniciar pronação imediata",
          "en": "Start immediate pronation",
          "es": "Iniciar pronación inmediata"
        },
        "explanation": {
          "pt": "Não indicada para DPOC sem SDRA associado. Não trata obstrução ao fluxo aéreo ou aprisionamento aéreo, causas primárias do quadro.",
          "en": "Not indicated for COPD without associated ARDS. Doesn't address airflow obstruction or air trapping, primary causes of condition.",
          "es": "No indicada para EPOC sin SDRA asociado. No trata obstrucción al flujo aéreo o atrapamiento aéreo, causas primarias del cuadro."
        }
      }
    ]
  },
  {
    "id": 517,
    "code": "pneumo01-q517",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 0,
    "question": {
      "pt": "Homem de 59 anos, com diagnóstico de Guillain-Barré, está intubado e sedado, em ventilação assisto-controlada por pressão. Apresenta boa mecânica respiratória, mas com episódios de assincronia e queda da saturação ao tentar reduzir a sedação. Qual estratégia é mais indicada?",
      "en": "A 59-year-old man with Guillain-Barré syndrome is intubated and sedated, on pressure assist-control ventilation. He has good respiratory mechanics but shows asynchrony and desaturation during sedation weaning. What is the most appropriate strategy?",
      "es": "Hombre de 59 años con síndrome de Guillain-Barré, intubado y sedado, en ventilación asistida-controlada por presión. Tiene buena mecánica respiratoria pero presenta asincronía y desaturación al intentar reducir la sedación. ¿Cuál es la estrategia más indicada?"
    },
    "options": [
      {
        "text": {
          "pt": "Ajustar sensibilidade e suporte de pressão para sincronizar melhor os ciclos",
          "en": "Adjust trigger sensitivity and pressure support for better cycle synchronization",
          "es": "Ajustar sensibilidad del disparo y soporte de presión para mejorar la sincronización de los ciclos"
        },
        "explanation": {
          "pt": "Assincronia em pacientes neuromusculares geralmente decorre de disparo ineficaz ou ciclagem inadequada. Ajuste fino de sensibilidade e suporte melhora interação paciente-ventilador.",
          "en": "Asynchrony in neuromuscular patients often results from ineffective triggering or inadequate cycling. Fine-tuning sensitivity and support improves patient-ventilator interaction.",
          "es": "Asincronía en pacientes neuromusculares generalmente deriva de disparo inefectivo o ciclado inadecuado. Ajuste fino de sensibilidad y soporte mejora interacción paciente-ventilador."
        }
      },
      {
        "text": {
          "pt": "Aumentar FiO₂ para 100% durante todo o dia",
          "en": "Increase FiO₂ to 100% all day",
          "es": "Aumentar FiO₂ al 100% todo el día"
        },
        "explanation": {
          "pt": "Hiperóxia prolongada causa toxicidade pulmonar e atelectasia por absorção. Não trata causa da assincronia e mascara problemas ventilatórios.",
          "en": "Prolonged hyperoxia causes pulmonary toxicity and absorption atelectasis. Doesn't address asynchrony cause and masks ventilatory issues.",
          "es": "Hiperoxia prolongada causa toxicidad pulmonar y atelectasia por absorción. No trata causa de asincronía y enmascara problemas ventilatorios."
        }
      },
      {
        "text": {
          "pt": "Manter bloqueio neuromuscular contínuo por 48 horas",
          "en": "Maintain continuous neuromuscular blockade for 48 hours",
          "es": "Mantener bloqueo neuromuscular continuo por 48 horas"
        },
        "explanation": {
          "pt": "Contraindicado em pacientes neuromusculares. Pode causar miopatia prolongada e atrasar recuperação, além de mascarar sinais neurológicos.",
          "en": "Contraindicated in neuromuscular patients. May cause prolonged myopathy and delay recovery, also masking neurological signs.",
          "es": "Contraindicado en pacientes neuromusculares. Puede causar miopatía prolongada y retrasar recuperación, además de enmascarar signos neurológicos."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente para 4 ml/kg",
          "en": "Reduce tidal volume to 4 ml/kg",
          "es": "Reducir volumen corriente a 4 ml/kg"
        },
        "explanation": {
          "pt": "Volume reduzido não é necessário sem lesão pulmonar. Pode aumentar trabalho respiratório e piorar assincronia em pacientes com fraqueza muscular.",
          "en": "Reduced volume not needed without lung injury. May increase work of breathing and worsen asynchrony in muscle weakness patients.",
          "es": "Volumen reducido no es necesario sin lesión pulmonar. Puede aumentar trabajo respiratorio y empeorar asincronía en pacientes con debilidad muscular."
        }
      },
      {
        "text": {
          "pt": "Trocar para modo SIMV com PEEP 0",
          "en": "Switch to SIMV mode with zero PEEP",
          "es": "Cambiar a modo SIMV con PEEP cero"
        },
        "explanation": {
          "pt": "SIMV pode aumentar trabalho respiratório em pacientes neuromusculares. PEEP zero prejudica oxigenação e não melhora assincronia.",
          "en": "SIMV may increase work of breathing in neuromuscular patients. Zero PEEP impairs oxygenation and doesn't improve asynchrony.",
          "es": "SIMV puede aumentar trabajo respiratorio en pacientes neuromusculares. PEEP cero perjudica oxigenación y no mejora asincronía."
        }
      }
    ]
  },
  {
    "id": 518,
    "code": "pneumo01-q518",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 3,
    "question": {
      "pt": "Homem de 60 anos, IMC 42 kg/m², no pós-operatório imediato de cirurgia abdominal, encontra-se em ventilação mecânica invasiva. Está em VCV com Vt calculado pelo peso real (700 ml), FR 14, PEEP 5 e FiO₂ 40%. Evolui com distensão abdominal, hipoxemia e aumento da pressão de platô. Qual é o ajuste mais indicado?",
      "en": "A 60-year-old man, BMI 42 kg/m², is in the immediate postoperative period after abdominal surgery, on invasive mechanical ventilation. He is on VCV with Vt based on actual weight (700 ml), RR 14, PEEP 5, and FiO₂ 40%. He develops abdominal distension, hypoxemia, and rising plateau pressures. What is the most appropriate adjustment?",
      "es": "Hombre de 60 años, IMC 42 kg/m², en el postoperatorio inmediato de cirugía abdominal, se encuentra en ventilación mecánica invasiva. Está en VCV con Vt basado en peso real (700 ml), FR 14, PEEP 5 y FiO₂ 40%. Presenta distensión abdominal, hipoxemia y aumento de la presión de meseta. ¿Cuál es el ajuste más indicado?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar a PEEP para 10 cmH₂O",
          "en": "Increase PEEP to 10 cmH₂O",
          "es": "Aumentar la PEEP a 10 cmH₂O"
        },
        "explanation": {
          "pt": "PEEP elevada pode aumentar pressão intra-abdominal e reduzir complacência em obesos. Risco de hiperinsuflação e barotrauma com pressões já elevadas.",
          "en": "High PEEP may increase intra-abdominal pressure and reduce compliance in obese patients. Risk of hyperinflation and barotrauma with already elevated pressures.",
          "es": "PEEP elevada puede aumentar presión intraabdominal y reducir compliancia en obesos. Riesgo de hiperinsuflación y barotrauma con presiones ya elevadas."
        }
      },
      {
        "text": {
          "pt": "Aumentar a frequência respiratória para 20 irpm",
          "en": "Increase respiratory rate to 20 bpm",
          "es": "Aumentar la FR a 20 rpm"
        },
        "explanation": {
          "pt": "Aumento da FR pode piorar hiperinsuflação e auto-PEEP em contexto de baixa complacência. Não trata causa primária do aumento de pressões.",
          "en": "Increasing RR may worsen hyperinflation and auto-PEEP in low compliance context. Doesn't address primary cause of rising pressures.",
          "es": "Aumentar FR puede empeorar hiperinsuflación y auto-PEEP en contexto de baja compliancia. No trata causa primaria del aumento de presiones."
        }
      },
      {
        "text": {
          "pt": "Reduzir a FiO₂ para 30%",
          "en": "Reduce FiO₂ to 30%",
          "es": "Reducir FiO₂ a 30%"
        },
        "explanation": {
          "pt": "Contraindicado em hipoxemia. Reduzir oxigenação sem melhorar mecânica ventilatória pode causar dessaturação grave.",
          "en": "Contraindicated in hypoxemia. Reducing oxygenation without improving ventilatory mechanics may cause severe desaturation.",
          "es": "Contraindicado en hipoxemia. Reducir oxigenación sin mejorar mecánica ventilatoria puede causar desaturación grave."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente com base no peso ideal",
          "en": "Reduce tidal volume based on ideal body weight",
          "es": "Reducir el volumen corriente según peso ideal"
        },
        "explanation": {
          "pt": "Em obesos, Vt deve ser calculado pelo peso ideal (≈6 ml/kg). Volume atual (baseado em peso real) causa hiperinsuflação, aumentando pressão de platô e risco de barotrauma.",
          "en": "In obese patients, Vt should be based on ideal body weight (≈6 ml/kg). Current volume (actual weight-based) causes hyperinflation, raising plateau pressure and barotrauma risk.",
          "es": "En obesos, Vt debe calcularse por peso ideal (≈6 ml/kg). Volumen actual (basado en peso real) causa hiperinsuflación, aumentando presión de meseta y riesgo de barotrauma."
        }
      },
      {
        "text": {
          "pt": "Trocar para modo espontâneo imediatamente",
          "en": "Switch to spontaneous mode immediately",
          "es": "Cambiar a modo espontáneo inmediatamente"
        },
        "explanation": {
          "pt": "Contraindicado em pós-operatório imediato com distensão abdominal e hipoxemia. Paciente não tem condições para ventilação espontânea efetiva.",
          "en": "Contraindicated in immediate postoperative period with abdominal distension and hypoxemia. Patient not fit for effective spontaneous ventilation.",
          "es": "Contraindicado en postoperatorio inmediato con distensión abdominal e hipoxemia. Paciente no tiene condiciones para ventilación espontánea efectiva."
        }
      }
    ]
  },
  {
    "id": 519,
    "code": "pneumo01-q519",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 0,
    "question": {
      "pt": "Paciente de 45 anos com SDRA grave (PaO₂/FiO₂ = 80) evolui com hipoxemia refratária apesar de FiO₂ 100%, PEEP 14 cmH₂O, Vt 6 ml/kg e sedação contínua. Está em VCV. Qual intervenção ventilatória deve ser considerada como estratégia de resgate?",
      "en": "A 45-year-old patient with severe ARDS (PaO₂/FiO₂ = 80) develops refractory hypoxemia despite FiO₂ 100%, PEEP 14 cmH₂O, Vt 6 ml/kg, and continuous sedation. On VCV. What ventilatory intervention should be considered as a rescue strategy?",
      "es": "Paciente de 45 años con SDRA grave (PaO₂/FiO₂ = 80) presenta hipoxemia refractaria a pesar de FiO₂ al 100%, PEEP 14 cmH₂O, Vt 6 ml/kg y sedación continua. Está en VCV. ¿Qué intervención ventilatoria debe considerarse como estrategia de rescate?"
    },
    "options": [
      {
        "text": {
          "pt": "Ventilação em posição prona",
          "en": "Ventilation in prone position",
          "es": "Ventilación en posición prona"
        },
        "explanation": {
          "pt": "Posição prona melhora homogeneidade ventilatória, reduz shunt intrapulmonar e melhora relação V/Q. Estratégia de resgate comprovada para hipoxemia refratária em SDRA grave.",
          "en": "Prone positioning improves ventilation homogeneity, reduces intrapulmonary shunt and enhances V/Q matching. Proven rescue strategy for refractory hypoxemia in severe ARDS.",
          "es": "Posición prona mejora homogeneidad ventilatoria, reduce shunt intrapulmonar y mejora relación V/Q. Estrategia de rescate comprobada para hipoxemia refractaria en SDRA grave."
        }
      },
      {
        "text": {
          "pt": "Reduzir PEEP para 5 cmH₂O",
          "en": "Reduce PEEP to 5 cmH₂O",
          "es": "Reducir PEEP a 5 cmH₂O"
        },
        "explanation": {
          "pt": "Reduzir PEEP em SDRA grave causaria desrecrutamento alveolar maciço, piorando ainda mais a oxigenação e aumentando lesão pulmonar.",
          "en": "Reducing PEEP in severe ARDS would cause massive alveolar derecruitment, further worsening oxygenation and increasing lung injury.",
          "es": "Reducir PEEP en SDRA grave causaría desreclutamiento alveolar masivo, empeorando aún más la oxigenación y aumentando lesión pulmonar."
        }
      },
      {
        "text": {
          "pt": "Aumentar volume corrente para 8 ml/kg",
          "en": "Increase tidal volume to 8 ml/kg",
          "es": "Aumentar volumen corriente a 8 ml/kg"
        },
        "explanation": {
          "pt": "Aumento de Vt acima de 6 ml/kg causa volutrauma e lesão pulmonar induzida por ventilador. Contraindicado em SDRA por aumentar mortalidade.",
          "en": "Increasing Vt above 6 ml/kg causes volutrauma and ventilator-induced lung injury. Contraindicated in ARDS as it increases mortality.",
          "es": "Aumentar Vt sobre 6 ml/kg causa volutrauma y lesión pulmonar inducida por ventilador. Contraindicado en SDRA por aumentar mortalidad."
        }
      },
      {
        "text": {
          "pt": "Iniciar ventilação espontânea",
          "en": "Initiate spontaneous ventilation",
          "es": "Iniciar ventilación espontánea"
        },
        "explanation": {
          "pt": "Contraindicado em SDRA grave com hipoxemia refratária. Esforço inspiratório aumentado pode causar lesão por estresse e piorar edema pulmonar.",
          "en": "Contraindicated in severe ARDS with refractory hypoxemia. Increased inspiratory effort may cause stress injury and worsen pulmonary edema.",
          "es": "Contraindicado en SDRA grave con hipoxemia refractaria. Esfuerzo inspiratorio aumentado puede causar lesión por estrés y empeorar edema pulmonar."
        }
      },
      {
        "text": {
          "pt": "Manter posição supina com PEEP maior que 20",
          "en": "Maintain supine position with PEEP over 20",
          "es": "Mantener posición supina con PEEP mayor de 20"
        },
        "explanation": {
          "pt": "PEEP muito alta (>15 cmH₂O) aumenta risco de barotrauma e hipotensão sem benefício adicional comprovado. Posição supina mantém desequilíbrio V/Q.",
          "en": "Very high PEEP (>15 cmH₂O) increases barotrauma and hypotension risk without proven additional benefit. Supine position maintains V/Q mismatch.",
          "es": "PEEP muy alta (>15 cmH₂O) aumenta riesgo de barotrauma e hipotensión sin beneficio adicional comprobado. Posición supina mantiene desequilibrio V/Q."
        }
      }
    ]
  },
  {
    "id": 520,
    "code": "pneumo01-q520",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "moderate",
    "correct": 4,
    "question": {
      "pt": "Paciente de 30 anos com trauma torácico fechado (fraturas múltiplas de costelas e contusão pulmonar à direita) encontra-se em VM invasiva, modo VCV: Vt 500 ml, FR 20, PEEP 8, FiO₂ 60%. Evolui com aumento da pressão de pico, hipoxemia e subcutâneo cervical. Qual a conduta prioritária?",
      "en": "A 30-year-old patient with blunt chest trauma (multiple rib fractures and right lung contusion) is on invasive MV, VCV mode: Vt 500 ml, RR 20, PEEP 8, FiO₂ 60%. Develops rising peak pressure, hypoxemia, and cervical subcutaneous emphysema. What is the priority action?",
      "es": "Paciente de 30 años con trauma torácico cerrado (múltiples fracturas costales y contusión pulmonar derecha) en VM invasiva, modo VCV: Vt 500 ml, FR 20, PEEP 8, FiO₂ 60%. Presenta aumento de la presión pico, hipoxemia y enfisema subcutáneo cervical. ¿Cuál es la conducta prioritaria?"
    },
    "options": [
      {
        "text": {
          "pt": "Reduzir a PEEP para 5 cmH₂O",
          "en": "Reduce PEEP to 5 cmH₂O",
          "es": "Reducir PEEP a 5 cmH₂O"
        },
        "explanation": {
          "pt": "Reduzir PEEP pode piorar oxigenação em contusão pulmonar e não resolve pneumotórax hipertensivo. Pode até aumentar gradiente de pressão para vazamento aéreo.",
          "en": "Reducing PEEP may worsen oxygenation in pulmonary contusion and doesn't resolve tension pneumothorax. May even increase pressure gradient for air leak.",
          "es": "Reducir PEEP puede empeorar oxigenación en contusión pulmonar y no resuelve neumotórax hipertensivo. Puede incluso aumentar gradiente de presión para fuga aérea."
        }
      },
      {
        "text": {
          "pt": "Iniciar bloqueio neuromuscular contínuo",
          "en": "Start continuous neuromuscular blockade",
          "es": "Iniciar bloqueo neuromuscular continuo"
        },
        "explanation": {
          "pt": "Não trata causa mecânica do aumento de pressões. Em pneumotórax hipertensivo, pode mascarar piora clínica e atrasar diagnóstico.",
          "en": "Doesn't address mechanical cause of rising pressures. In tension pneumothorax, may mask clinical deterioration and delay diagnosis.",
          "es": "No trata causa mecánica del aumento de presiones. En neumotórax hipertensivo, puede enmascarar deterioro clínico y retrasar diagnóstico."
        }
      },
      {
        "text": {
          "pt": "Aumentar o volume corrente para 600 ml",
          "en": "Increase tidal volume to 600 ml",
          "es": "Aumentar volumen corriente a 600 ml"
        },
        "explanation": {
          "pt": "Aumento de Vt pode expandir pneumotórax e piorar hipertensão intratorácica. Contraindicado em suspeita de barotrauma.",
          "en": "Increasing Vt may expand pneumothorax and worsen intrathoracic hypertension. Contraindicated in suspected barotrauma.",
          "es": "Aumentar Vt puede expandir neumotórax y empeorar hipertensión intratorácica. Contraindicado en sospecha de barotrauma."
        }
      },
      {
        "text": {
          "pt": "Trocar para ventilação espontânea",
          "en": "Switch to spontaneous ventilation",
          "es": "Cambiar a ventilación espontánea"
        },
        "explanation": {
          "pt": "Contraindicado em trauma torácico instável com fraturas múltiplas. Esforço inspiratório pode aumentar vazamento aéreo e piorar pneumotórax.",
          "en": "Contraindicated in unstable chest trauma with multiple fractures. Inspiratory effort may increase air leak and worsen pneumothorax.",
          "es": "Contraindicado en trauma torácico inestable con fracturas múltiples. Esfuerzo inspiratorio puede aumentar fuga aérea y empeorar neumotórax."
        }
      },
      {
        "text": {
          "pt": "Investigar e tratar pneumotórax hipertensivo",
          "en": "Investigate and treat tension pneumothorax",
          "es": "Investigar y tratar neumotórax hipertensivo"
        },
        "explanation": {
          "pt": "Tríade clássica (aumento de pressão de pico, hipoxemia e enfisema subcutâneo) indica pneumotórax hipertensivo. Emergência que requer descompressão imediata antes de confirmação por imagem.",
          "en": "Classic triad (rising peak pressure, hypoxemia and subcutaneous emphysema) indicates tension pneumothorax. Emergency requiring immediate decompression before imaging confirmation.",
          "es": "Tríada clásica (aumento de presión pico, hipoxemia y enfisema subcutáneo) indica neumotórax hipertensivo. Emergencia que requiere descompresión inmediata antes de confirmación por imagen."
        }
      }
    ]
  },
  {
    "id": 521,
    "code": "pneumo01-q521",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "hard",
    "correct": 2,
    "question": {
      "pt": "Homem de 58 anos, em ventilação mecânica por pneumonia grave, apresenta melhora clínica e hemodinâmica após 6 dias de suporte. Está acordado, obedecendo comandos, sem sedação, com Vt 450 ml, FR 18, PEEP 5, FiO₂ 35%, SpO₂ 96% e índice de respiração rápida superficial (FR/Vt) = 85. Sobre critérios para extubação, assinale a alternativa INCORRETA:",
      "en": "A 58-year-old man, on mechanical ventilation for severe pneumonia, shows clinical and hemodynamic improvement after 6 days of support. He is awake, obeying commands, off sedation, on Vt 450 ml, RR 18, PEEP 5, FiO₂ 35%, SpO₂ 96%, and RSBI (RR/Vt) = 85. Regarding extubation criteria, mark the INCORRECT statement:",
      "es": "Hombre de 58 años en ventilación mecánica por neumonía grave, presenta mejoría clínica y hemodinámica tras 6 días de soporte. Está despierto, obedece órdenes, sin sedación, Vt 450 ml, FR 18, PEEP 5, FiO₂ 35%, SpO₂ 96% y índice FR/Vt = 85. En relación a los criterios de extubación, señale la alternativa INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A ausência de sedação contínua é um pré-requisito importante para considerar extubação",
          "en": "Absence of continuous sedation is an important prerequisite for considering extubation",
          "es": "La ausencia de sedación continua es un requisito importante para considerar la extubación"
        },
        "explanation": {
          "pt": "Esta opção é correta e NÃO é a resposta solicitada (a questão pede a INCORRETA). Ausência de sedação é pré-requisito essencial para avaliação de extubação.",
          "en": "This statement is correct and is NOT the requested answer (the question asks for the INCORRECT one). Absence of sedation is essential for extubation assessment.",
          "es": "Esta afirmación es correcta y NO es la respuesta solicitada (la pregunta pide la INCORRECTA). Ausencia de sedación es requisito esencial para evaluación de extubación."
        }
      },
      {
        "text": {
          "pt": "O índice FR/Vt menor que 105 sugere alta probabilidade de sucesso na extubação",
          "en": "An RSBI below 105 suggests a high likelihood of successful extubation",
          "es": "Un índice FR/Vt menor de 105 sugiere alta probabilidad de éxito en la extubación"
        },
        "explanation": {
          "pt": "Esta opção é correta e NÃO é a resposta solicitada. RSBI < 105 é preditor de sucesso na extubação.",
          "en": "This statement is correct and is NOT the requested answer. RSBI < 105 predicts extubation success.",
          "es": "Esta afirmación es correcta y NO es la respuesta solicitada. Índice FR/Vt < 105 predice éxito de extubación."
        }
      },
      {
        "text": {
          "pt": "FiO₂ idealmente deve estar acima de 60% no momento da extubação",
          "en": "FiO₂ should ideally be above 60% at the time of extubation",
          "es": "La FiO₂ debe estar idealmente por encima del 60% al momento de la extubación"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). FiO₂ > 60% indica dependência de oxigênio alto, CONTRAINDICANDO extubação. O ideal é FiO₂ ≤ 40-50%.",
          "en": "INCORRECT statement (requested). FiO₂ > 60% indicates high oxygen dependence, CONTRAINDICATING extubation. Ideal is FiO₂ ≤ 40-50%.",
          "es": "Afirmación INCORRECTA (solicitada). FiO₂ > 60% indica alta dependencia de oxígeno, CONTRAINDICANDO extubación. Lo ideal es FiO₂ ≤ 40-50%."
        }
      },
      {
        "text": {
          "pt": "A presença de nível de consciência adequado e comando motor é favorável",
          "en": "Presence of appropriate consciousness level and motor command is favorable",
          "es": "La presencia de conciencia adecuada y obediencia motora es favorable"
        },
        "explanation": {
          "pt": "Esta opção é correta e NÃO é a resposta solicitada. Estado neurológico preservado é critério essencial para extubação.",
          "en": "This statement is correct and is NOT the requested answer. Preserved neurological status is essential for extubation.",
          "es": "Esta afirmación es correcta y NO es la respuesta solicitada. Estado neurológico preservado es criterio esencial para extubación."
        }
      },
      {
        "text": {
          "pt": "A estabilidade hemodinâmica sem uso de drogas vasoativas em dose alta favorece a extubação",
          "en": "Hemodynamic stability without high-dose vasopressors favors extubation",
          "es": "La estabilidad hemodinámica sin vasopresores a dosis altas favorece la extubación"
        },
        "explanation": {
          "pt": "Esta opção é correta e NÃO é a resposta solicitada. Estabilidade hemodinâmica é pré-requisito para extubação segura.",
          "en": "This statement is correct and is NOT the requested answer. Hemodynamic stability is required for safe extubation.",
          "es": "Esta afirmación es correcta y NO es la respuesta solicitada. Estabilidad hemodinámica es requisito para extubación segura."
        }
      }
    ]
  },
  {
    "id": 522,
    "code": "pneumo01-q522",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation"],
    "level": "hard",
    "correct": 3,
    "question": {
      "pt": "Paciente de 64 anos com DPOC é admitido na UTI por insuficiência respiratória aguda. Está em ventilação mecânica invasiva, modo VCV, com Vt 480 ml, FR 18, PEEP 8. Apresenta distensão torácica, aumento progressivo da pressão de pico, e queda da pressão arterial. Assinale a alternativa INCORRETA sobre o manejo da auto-PEEP:",
      "en": "A 64-year-old patient with COPD is admitted to the ICU with acute respiratory failure. He is on invasive mechanical ventilation (VCV mode) with Vt 480 ml, RR 18, PEEP 8. He develops chest distension, rising peak pressure, and arterial hypotension. Mark the INCORRECT statement regarding the management of auto-PEEP:",
      "es": "Paciente de 64 años con EPOC es admitido a la UCI por insuficiencia respiratoria aguda. Está en ventilación mecánica invasiva (modo VCV) con Vt 480 ml, FR 18, PEEP 8. Desarrolla distensión torácica, aumento de la presión pico y hipotensión. Señale la afirmación INCORRECTA sobre el manejo de la auto-PEEP:"
    },
    "options": [
      {
        "text": {
          "pt": "Reduzir a frequência respiratória ajuda a aumentar o tempo expiratório",
          "en": "Reducing respiratory rate helps increase expiratory time",
          "es": "Reducir la FR ayuda a aumentar el tiempo espiratorio"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Reduzir FR aumenta tempo expiratório, permitindo esvaziamento pulmonar em DPOC.",
          "en": "This statement is CORRECT. Reducing RR increases expiratory time, allowing lung emptying in COPD.",
          "es": "Esta afirmación es CORRECTA. Reducir FR aumenta tiempo espiratorio, permitiendo vaciamiento pulmonar en EPOC."
        }
      },
      {
        "text": {
          "pt": "Diminuir o volume corrente pode reduzir a hiperinsuflação",
          "en": "Reducing tidal volume can decrease hyperinflation",
          "es": "Reducir el Vt puede disminuir la hiperinsuflación"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Reduzir Vt diminui volume aprisionado, reduzindo auto-PEEP em obstrução.",
          "en": "This statement is CORRECT. Reducing Vt decreases trapped volume, lowering auto-PEEP in obstruction.",
          "es": "Esta afirmación es CORRECTA. Reducir Vt disminuye volumen atrapado, reduciendo auto-PEEP en obstrucción."
        }
      },
      {
        "text": {
          "pt": "Aumentar o fluxo inspiratório pode ajudar a liberar mais tempo para a expiração",
          "en": "Increasing inspiratory flow may help allocate more time for expiration",
          "es": "Aumentar el flujo inspiratorio puede ayudar a liberar más tiempo para la espiración"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Fluxo inspiratório ↑ encurta tempo inspiratório, liberando mais tempo para expiração.",
          "en": "This statement is CORRECT. Higher inspiratory flow shortens inspiration time, allowing longer expiration.",
          "es": "Esta afirmación es CORRECTA. Flujo inspiratorio ↑ acorta tiempo inspiratorio, liberando más tiempo para espiración."
        }
      },
      {
        "text": {
          "pt": "Aumentar a PEEP externa sempre elimina a auto-PEEP",
          "en": "Increasing external PEEP always eliminates auto-PEEP",
          "es": "Aumentar la PEEP externa siempre elimina la auto-PEEP"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). PEEP externa NÃO elimina auto-PEEP; pode até piorar hiperinsuflação se > 85% da auto-PEEP.",
          "en": "INCORRECT statement (requested). External PEEP does NOT eliminate auto-PEEP; may worsen hyperinflation if > 85% of auto-PEEP.",
          "es": "Afirmación INCORRECTA (solicitada). PEEP externa NO elimina auto-PEEP; puede empeorar hiperinsuflación si > 85% de auto-PEEP."
        }
      },
      {
        "text": {
          "pt": "Monitorar a pressão de platô é útil para diferenciar causas de pressão de pico elevada",
          "en": "Monitoring plateau pressure is useful to differentiate causes of high peak pressure",
          "es": "Monitorear la presión de meseta es útil para diferenciar causas de presión pico elevada"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Diferença entre pressão de pico e platô ajuda a identificar resistência vs. complacência.",
          "en": "This statement is CORRECT. Peak-plateau pressure difference identifies resistance vs. compliance issues.",
          "es": "Esta afirmación es CORRECTA. Diferencia presión pico-meseta identifica problemas de resistencia vs. compliance."
        }
      }
    ]
  },
  {
    "id": 523,
    "code": "pneumo01-q523",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "ARDS"],
    "level": "hard",
    "correct": 1,
    "question": {
      "pt": "Paciente de 37 anos, previamente saudável, internado por SDRA leve secundária a leptospirose. Está em ventilação mecânica com Vt 6 ml/kg, FR 30, PEEP 10, FiO₂ 40%. Gasometria mostra pH 7,52, PaCO₂ 26 mmHg, PaO₂ 80 mmHg. Está sedado, sem esforço ventilatório. Sobre a conduta ventilatória, assinale a alternativa INCORRETA:",
      "en": "A 37-year-old previously healthy patient was admitted with mild ARDS due to leptospirosis. On mechanical ventilation: Vt 6 ml/kg, RR 30, PEEP 10, FiO₂ 40%. ABG shows pH 7.52, PaCO₂ 26 mmHg, PaO₂ 80 mmHg. The patient is sedated and not initiating breaths. Regarding ventilatory management, mark the INCORRECT option:",
      "es": "Paciente de 37 años, previamente sano, internado por SDRA leve secundaria a leptospirosis. En ventilación mecánica: Vt 6 ml/kg, FR 30, PEEP 10, FiO₂ 40%. GSA muestra pH 7,52, PaCO₂ 26 mmHg, PaO₂ 80 mmHg. Está sedado y no realiza esfuerzos. Sobre el manejo ventilatorio, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A hiperventilação passiva pode causar alcalose respiratória mesmo com volume protetor",
          "en": "Passive hyperventilation can cause respiratory alkalosis even with protective volumes",
          "es": "La hiperventilación pasiva puede causar alcalosis respiratoria incluso con volúmenes protectores"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. FR elevada causa hiperventilação passiva e alcalose, independente do Vt.",
          "en": "This statement is CORRECT. High RR causes passive hyperventilation and alkalosis, regardless of Vt.",
          "es": "Esta afirmación es CORRECTA. FR elevada causa hiperventilación pasiva y alcalosis, independiente del Vt."
        }
      },
      {
        "text": {
          "pt": "A frequência respiratória deve ser aumentada para corrigir a hipoxemia",
          "en": "Respiratory rate should be increased to correct hypoxemia",
          "es": "Se debe aumentar la frecuencia respiratoria para corregir la hipoxemia"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Aumentar FR pioraria alcalose sem melhorar oxigenação (PaO₂ já adequada).",
          "en": "INCORRECT statement (requested). Increasing RR would worsen alkalosis without improving oxygenation (PaO₂ is adequate).",
          "es": "Afirmación INCORRECTA (solicitada). Aumentar FR empeoraría alcalosis sin mejorar oxigenación (PaO₂ ya adecuada)."
        }
      },
      {
        "text": {
          "pt": "A estratégia protetora deve ser mantida mesmo na presença de alcalose leve",
          "en": "Protective ventilation strategy should be maintained even with mild alkalosis",
          "es": "La estrategia de ventilación protectora debe mantenerse incluso ante alcalosis leve"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Ventilação protetora tem prioridade; alcalose leve é menos danosa que Vt alto.",
          "en": "This statement is CORRECT. Protective ventilation takes priority; mild alkalosis is less harmful than high Vt.",
          "es": "Esta afirmación es CORRECTA. Ventilación protectora es prioritaria; alcalosis leve es menos dañina que Vt alto."
        }
      },
      {
        "text": {
          "pt": "Sedação excessiva pode contribuir para hiperventilação passiva quando FR é fixada",
          "en": "Excessive sedation can contribute to passive hyperventilation when RR is fixed",
          "es": "La sedación excesiva puede contribuir a hiperventilación pasiva cuando la FR es fija"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Sedação excessiva impede esforços espontâneos, mantendo hiperventilação passiva.",
          "en": "This statement is CORRECT. Excessive sedation prevents spontaneous efforts, sustaining passive hyperventilation.",
          "es": "Esta afirmación es CORRECTA. Sedación excesiva impide esfuerzos espontáneos, manteniendo hiperventilación pasiva."
        }
      },
      {
        "text": {
          "pt": "A ventilação mecânica deve priorizar volume corrente baixo e pressões seguras",
          "en": "Mechanical ventilation should prioritize low tidal volume and safe pressures",
          "es": "La ventilación mecánica debe priorizar volumen corriente bajo y presiones seguras"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Princípio fundamental no manejo de SDRA (estratégia protetora).",
          "en": "This statement is CORRECT. Fundamental principle in ARDS management (protective strategy).",
          "es": "Esta afirmación es CORRECTA. Principio fundamental en manejo de SDRA (estrategia protectora)."
        }
      }
    ]
  },
  {
    "id": 524,
    "code": "pneumo01-q524",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "ARDS", "pregnancy"],
    "level": "hard",
    "correct": 4,
    "question": {
      "pt": "Gestante de 31 anos, 29 semanas, com SDRA secundária a pneumonia, está em VM no modo VCV com Vt 6 ml/kg, FR 24, PEEP 10, FiO₂ 60%. SpO₂ estável em 93%. Gasometria: pH 7,44, PaCO₂ 30 mmHg, PaO₂ 75 mmHg. Assinale a alternativa INCORRETA quanto ao manejo ventilatório na gestação:",
      "en": "A 31-year-old pregnant woman (29 weeks) with ARDS due to pneumonia is on MV (VCV): Vt 6 ml/kg, RR 24, PEEP 10, FiO₂ 60%. SpO₂ stable at 93%. ABG: pH 7.44, PaCO₂ 30 mmHg, PaO₂ 75 mmHg. Mark the INCORRECT statement regarding ventilatory management in pregnancy:",
      "es": "Gestante de 31 años, 29 semanas, con SDRA secundaria a neumonía, en VM (VCV): Vt 6 ml/kg, FR 24, PEEP 10, FiO₂ 60%. SpO₂ estable en 93%. GSA: pH 7,44, PaCO₂ 30 mmHg, PaO₂ 75 mmHg. Señale la afirmación INCORRECTA sobre el manejo ventilatorio en el embarazo:"
    },
    "options": [
      {
        "text": {
          "pt": "O volume corrente deve ser mantido em 6 ml/kg de peso ideal",
          "en": "Tidal volume should be maintained at 6 ml/kg of ideal body weight",
          "es": "El volumen corriente debe mantenerse en 6 ml/kg de peso ideal"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Estratégia de volume protetor aplica-se igualmente a gestantes com SDRA.",
          "en": "This statement is CORRECT. Protective tidal volume strategy applies equally to pregnant ARDS patients.",
          "es": "Esta afirmación es CORRECTA. Estrategia de volumen protector aplica igual en gestantes con SDRA."
        }
      },
      {
        "text": {
          "pt": "A PaCO₂ normal na gestante é mais baixa que em não gestantes",
          "en": "Normal PaCO₂ in pregnant women is lower than in non-pregnant individuals",
          "es": "La PaCO₂ normal en gestantes es más baja que en no gestantes"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Hiperventilação fisiológica reduz PaCO₂ para 28-32 mmHg na gestação.",
          "en": "This statement is CORRECT. Physiological hyperventilation lowers PaCO₂ to 28-32 mmHg in pregnancy.",
          "es": "Esta afirmación es CORRECTA. Hiperventilación fisiológica reduce PaCO₂ a 28-32 mmHg en embarazo."
        }
      },
      {
        "text": {
          "pt": "SpO₂ entre 92–95% é aceitável durante a ventilação da gestante com SDRA",
          "en": "SpO₂ between 92–95% is acceptable during ventilation of pregnant patients with ARDS",
          "es": "Una SpO₂ entre 92–95% es aceptable en la ventilación de gestantes con SDRA"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. Saturações > 92% são seguras para oxigenação fetal adequada.",
          "en": "This statement is CORRECT. Saturations > 92% are safe for fetal oxygenation.",
          "es": "Esta afirmación es CORRECTA. Saturación > 92% es segura para oxigenación fetal."
        }
      },
      {
        "text": {
          "pt": "A PaO₂ deve ser mantida > 70 mmHg para segurança fetal",
          "en": "PaO₂ should be maintained > 70 mmHg for fetal safety",
          "es": "La PaO₂ debe mantenerse > 70 mmHg por seguridad fetal"
        },
        "explanation": {
          "pt": "Esta opção está CORRETA. PaO₂ > 70 mmHg previne hipóxia fetal em gestações > 24 semanas.",
          "en": "This statement is CORRECT. PaO₂ > 70 mmHg prevents fetal hypoxia in pregnancies > 24 weeks.",
          "es": "Esta afirmación es CORRECTA. PaO₂ > 70 mmHg previene hipoxia fetal en embarazos > 24 semanas."
        }
      },
      {
        "text": {
          "pt": "A meta de PaCO₂ deve ser ≥ 40 mmHg para garantir ventilação fetal adequada",
          "en": "Target PaCO₂ should be ≥ 40 mmHg to ensure adequate fetal ventilation",
          "es": "La meta de PaCO₂ debe ser ≥ 40 mmHg para garantizar ventilación fetal adecuada"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Meta de PaCO₂ ≥ 40 mmHg causaria acidose respiratória materna e fetal (PaCO₂ fisiológica na gestação: 28-32 mmHg).",
          "en": "INCORRECT statement (requested). Target PaCO₂ ≥ 40 mmHg would cause maternal/fetal respiratory acidosis (physiological PaCO₂ in pregnancy: 28-32 mmHg).",
          "es": "Afirmación INCORRECTA (solicitada). Objetivo PaCO₂ ≥ 40 mmHg causaría acidosis respiratoria materna/fetal (PaCO₂ fisiológica en embarazo: 28-32 mmHg)."
        }
      }
    ]
  },
  {
    "id": 525,
    "code": "pneumo01-q525",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "post-arrest"],
    "level": "hard",
    "correct": 4,
    "question": {
      "pt": "Homem de 67 anos é admitido na UTI após parada cardiorrespiratória revertida com 12 minutos de RCP. Está em VM (VCV): Vt 6 ml/kg, FR 18, PEEP 5, FiO₂ 100%. Após 1 hora, apresenta PaO₂ 240 mmHg, PaCO₂ 38 mmHg, pH 7,40, sem sedação profunda. Sobre a estratégia ventilatória no pós-PCR, assinale a alternativa INCORRETA:",
      "en": "A 67-year-old man is admitted to the ICU after a cardiac arrest reversed with 12 minutes of CPR. He is on MV (VCV): Vt 6 ml/kg, RR 18, PEEP 5, FiO₂ 100%. After 1 hour: PaO₂ 240 mmHg, PaCO₂ 38 mmHg, pH 7.40, no deep sedation. Regarding post-arrest ventilation strategy, mark the INCORRECT option:",
      "es": "Hombre de 67 años es admitido en la UCI tras paro cardiorrespiratorio revertido con 12 minutos de RCP. Está en VM (VCV): Vt 6 ml/kg, FR 18, PEEP 5, FiO₂ 100%. Después de 1 hora: PaO₂ 240 mmHg, PaCO₂ 38 mmHg, pH 7,40, sin sedación profunda. En relación a la estrategia ventilatoria post-paro, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "FiO₂ deve ser reduzida assim que possível para evitar hiperóxia",
          "en": "FiO₂ should be reduced as soon as possible to avoid hyperoxia",
          "es": "La FiO₂ debe reducirse lo antes posible para evitar hiperoxia"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Reduzir FiO₂ previne dano oxidativo e melhora desfechos.",
          "en": "This statement is correct. Reducing FiO₂ prevents oxidative damage and improves outcomes.",
          "es": "Esta afirmación es correcta. Reducir FiO₂ previene daño oxidativo y mejora resultados."
        }
      },
      {
        "text": {
          "pt": "Hiperóxia (PaO₂ > 200 mmHg) pode estar associada a maior dano neurológico",
          "en": "Hyperoxia (PaO₂ > 200 mmHg) may be associated with increased neurological injury",
          "es": "La hiperoxia (PaO₂ > 200 mmHg) puede asociarse a mayor daño neurológico"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Hiperóxia pós-PCR correlaciona-se com pior prognóstico neurológico.",
          "en": "This statement is correct. Post-arrest hyperoxia correlates with worse neurological prognosis.",
          "es": "Esta afirmación es correcta. Hiperoxia post-paro se correlaciona con peor pronóstico neurológico."
        }
      },
      {
        "text": {
          "pt": "A ventilação protetora deve ser mantida mesmo na ausência de lesão pulmonar",
          "en": "Protective ventilation should be maintained even without lung injury",
          "es": "La ventilación protectora debe mantenerse incluso sin lesión pulmonar"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Estratégias protetoras reduzem risco de LPAV mesmo em pulmões sadios.",
          "en": "This statement is correct. Protective strategies reduce VILI risk even in healthy lungs.",
          "es": "Esta afirmación es correcta. Estrategias protectoras reducen riesgo de LPAI incluso en pulmones sanos."
        }
      },
      {
        "text": {
          "pt": "A normocapnia deve ser mantida entre 35–45 mmHg, evitando tanto hipo quanto hipercapnia",
          "en": "Normocapnia should be maintained between 35–45 mmHg, avoiding both hypo- and hypercapnia",
          "es": "Se debe mantener normocapnia entre 35–45 mmHg, evitando tanto hipo como hipercapnia"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Alterações na PaCO₂ podem comprometer perfusão cerebral.",
          "en": "This statement is correct. PaCO₂ fluctuations may impair cerebral perfusion.",
          "es": "Esta afirmación es correcta. Fluctuaciones de PaCO₂ pueden comprometer perfusión cerebral."
        }
      },
      {
        "text": {
          "pt": "A hiperóxia transitória no pós-PCR é desejável para garantir oferta cerebral de O₂",
          "en": "Transient hyperoxia in the post-arrest period is desirable to ensure cerebral oxygen delivery",
          "es": "La hiperoxia transitoria en el post-paro es deseable para garantizar oxigenación cerebral"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Hiperóxia (PaO₂ > 200 mmHg) aumenta estresse oxidativo e mortalidade. FiO₂ deve ser titulada para SpO₂ 94–98%.",
          "en": "INCORRECT statement (requested). Hyperoxia (PaO₂ > 200 mmHg) increases oxidative stress and mortality. FiO₂ should be titrated to SpO₂ 94–98%.",
          "es": "Afirmación INCORRECTA (solicitada). Hiperoxia (PaO₂ > 200 mmHg) incrementa estrés oxidativo y mortalidad. FiO₂ debe titularse a SpO₂ 94–98%."
        }
      }
    ]
  },
  {
    "id": 526,
    "code": "pneumo01-q526",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "neuro"],
    "level": "hard",
    "correct": 0,
    "question": {
      "pt": "Homem de 29 anos é admitido após TCE grave, Glasgow 6, com sinais de hipertensão intracraniana. Está em VM (VCV): Vt 6 ml/kg, FR 18, PEEP 10, FiO₂ 40%. Gasometria: pH 7,36, PaCO₂ 42, PaO₂ 88. Pressão de platô: 24. PIC monitorada: 26 mmHg. Assinale a alternativa INCORRETA quanto ao manejo ventilatório no TCE grave:",
      "en": "A 29-year-old man is admitted after severe TBI (GCS 6), with signs of intracranial hypertension. On MV (VCV): Vt 6 ml/kg, RR 18, PEEP 10, FiO₂ 40%. ABG: pH 7.36, PaCO₂ 42, PaO₂ 88. Plateau pressure: 24. ICP monitored: 26 mmHg. Mark the INCORRECT statement regarding ventilatory management in severe TBI:",
      "es": "Hombre de 29 años es admitido tras TCE grave (Glasgow 6), con signos de hipertensión intracraneal. Está en VM (VCV): Vt 6 ml/kg, FR 18, PEEP 10, FiO₂ 40%. GSA: pH 7,36, PaCO₂ 42, PaO₂ 88. Presión de meseta: 24. PIC monitorizada: 26 mmHg. Señale la afirmación INCORRECTA sobre el manejo ventilatorio en TCE grave:"
    },
    "options": [
      {
        "text": {
          "pt": "PEEP alta é sempre segura no TCE, mesmo com PIC elevada",
          "en": "High PEEP is always safe in TBI, even with elevated ICP",
          "es": "La PEEP alta siempre es segura en TCE, incluso con PIC elevada"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). PEEP elevada pode comprometer retorno venoso cerebral e aumentar PIC. Seu uso deve ser individualizado e monitorizado.",
          "en": "INCORRECT statement (requested). High PEEP may impair cerebral venous return and increase ICP. Its use must be individualized and monitored.",
          "es": "Afirmación INCORRECTA (solicitada). PEEP alta puede comprometer retorno venoso cerebral y aumentar PIC. Su uso debe individualizarse y monitorizarse."
        }
      },
      {
        "text": {
          "pt": "O alvo de PaCO₂ deve ser 35–40 mmHg, evitando hipocapnia excessiva",
          "en": "Target PaCO₂ should be 35–40 mmHg, avoiding excessive hypocapnia",
          "es": "La PaCO₂ objetivo debe ser 35–40 mmHg, evitando hipocapnia excesiva"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Hipocapnia excessiva causa vasoconstrição cerebral e isquemia.",
          "en": "This statement is correct. Excessive hypocapnia causes cerebral vasoconstriction and ischemia.",
          "es": "Esta afirmación es correcta. Hipocapnia excesiva causa vasoconstricción cerebral e isquemia."
        }
      },
      {
        "text": {
          "pt": "O volume corrente deve seguir estratégia protetora, mesmo sem lesão pulmonar",
          "en": "Tidal volume should follow protective strategy, even without lung injury",
          "es": "El volumen corriente debe seguir estrategia protectora, incluso sin lesión pulmonar"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Ventilação protetora previne LPAV e complicações secundárias.",
          "en": "This statement is correct. Protective ventilation prevents VILI and secondary complications.",
          "es": "Esta afirmación es correcta. Ventilación protectora previene LPAI y complicaciones secundarias."
        }
      },
      {
        "text": {
          "pt": "A pressão de platô deve ser monitorada e mantida < 30 cmH₂O",
          "en": "Plateau pressure should be monitored and kept < 30 cmH₂O",
          "es": "La presión de meseta debe ser monitorizada y mantenida < 30 cmH₂O"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Pressões > 30 cmH₂O aumentam risco de barotrauma.",
          "en": "This statement is correct. Pressures > 30 cmH₂O increase barotrauma risk.",
          "es": "Esta afirmación es correcta. Presiones > 30 cmH₂O aumentan riesgo de barotrauma."
        }
      },
      {
        "text": {
          "pt": "A oxigenação deve ser mantida com PaO₂ > 80 mmHg",
          "en": "Oxygenation should be maintained with PaO₂ > 80 mmHg",
          "es": "La oxigenación debe mantenerse con PaO₂ > 80 mmHg"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Hipóxia cerebral deve ser evitada em pacientes neurocríticos.",
          "en": "This statement is correct. Cerebral hypoxia must be avoided in neurocritical patients.",
          "es": "Esta afirmación es correcta. Hipoxia cerebral debe evitarse en pacientes neurocríticos."
        }
      }
    ]
  },
  {
    "id": 527,
    "code": "pneumo01-q527",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "ARDS"],
    "level": "hard",
    "correct": 3,
    "question": {
      "pt": "Paciente de 52 anos com SDRA por aspiração gástrica. PaO₂/FiO₂ = 120 com PEEP 12 e FiO₂ 60%. Está em VM: Vt 6 ml/kg, FR 28, PEEP 12, FiO₂ 60%. Pressão de platô = 31 cmH₂O, driving pressure = 19 cmH₂O. Sobre a ventilação neste paciente, assinale a alternativa INCORRETA:",
      "en": "A 52-year-old patient with ARDS due to gastric aspiration. PaO₂/FiO₂ = 120 with PEEP 12 and FiO₂ 60%. On MV: Vt 6 ml/kg, RR 28, PEEP 12, FiO₂ 60%. Plateau pressure = 31 cmH₂O, driving pressure = 19 cmH₂O. Regarding ventilation in this patient, mark the INCORRECT option:",
      "es": "Paciente de 52 años con SDRA por aspiración gástrica. PaO₂/FiO₂ = 120 con PEEP 12 y FiO₂ 60%. En VM: Vt 6 ml/kg, FR 28, PEEP 12, FiO₂ 60%. Presión de meseta = 31 cmH₂O, presión de conducción = 19 cmH₂O. En relación a la ventilación en este paciente, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A driving pressure elevada está associada a pior prognóstico",
          "en": "Elevated driving pressure is associated with worse outcomes",
          "es": "La presión de conducción elevada se asocia a peor pronóstico"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. ΔP > 15 cmH₂O correlaciona-se com maior mortalidade.",
          "en": "This statement is correct. ΔP > 15 cmH₂O correlates with higher mortality.",
          "es": "Esta afirmación es correcta. ΔP > 15 cmH₂O se correlaciona con mayor mortalidad."
        }
      },
      {
        "text": {
          "pt": "A pressão de platô > 30 cmH₂O sugere risco aumentado de volutrauma",
          "en": "Plateau pressure > 30 cmH₂O suggests increased risk of volutrauma",
          "es": "Presión de meseta > 30 cmH₂O sugiere mayor riesgo de volutrauma"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Pressão de platô deve ser mantida ≤ 30 cmH₂O.",
          "en": "This statement is correct. Plateau pressure should be kept ≤ 30 cmH₂O.",
          "es": "Esta afirmación es correcta. Presión de meseta debe mantenerse ≤ 30 cmH₂O."
        }
      },
      {
        "text": {
          "pt": "A estratégia de Vt 6 ml/kg de peso ideal deve ser mantida",
          "en": "The strategy of 6 ml/kg ideal body weight should be maintained",
          "es": "La estrategia de 6 ml/kg de peso ideal debe mantenerse"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Volume corrente baixo é padrão-ouro em SDRA.",
          "en": "This statement is correct. Low tidal volume is standard-of-care in ARDS.",
          "es": "Esta afirmación es correcta. Volumen corriente bajo es estándar en SDRA."
        }
      },
      {
        "text": {
          "pt": "Não é necessário nenhum ajuste, pois o paciente está dentro dos parâmetros ideais",
          "en": "No adjustment is needed, as the patient is within ideal parameters",
          "es": "No se requiere ajuste, ya que el paciente está dentro de parámetros ideales"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Pressão de platô (31 > 30) e driving pressure (19 > 15) indicam necessidade de ajustes (ex: reduzir Vt ou otimizar PEEP).",
          "en": "INCORRECT statement (requested). Plateau pressure (31 > 30) and driving pressure (19 > 15) indicate need for adjustments (e.g., reduce Vt or optimize PEEP).",
          "es": "Afirmación INCORRECTA (solicitada). Presión meseta (31 > 30) y presión conducción (19 > 15) indican necesidad de ajustes (ej. reducir Vt u optimizar PEEP)."
        }
      },
      {
        "text": {
          "pt": "Considerar manobra de recrutamento alveolar com precaução e monitorização",
          "en": "Consider alveolar recruitment maneuver with caution and monitoring",
          "es": "Considerar maniobra de reclutamiento alveolar con precaución y monitorización"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Manobras de recrutamento podem melhorar oxigenação em SDRA grave.",
          "en": "This statement is correct. Recruitment maneuvers may improve oxygenation in severe ARDS.",
          "es": "Esta afirmación es correcta. Maniobras de reclutamiento pueden mejorar oxigenación en SDRA grave."
        }
      }
    ]
  },
  {
    "id": 528,
    "code": "pneumo01-q528",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "ecmo"],
    "level": "hard",
    "correct": 2,
    "question": {
      "pt": "Paciente de 40 anos com SDRA grave refratária é colocado em ECMO veno-venosa após falha de ventilação convencional. Está em VM: Vt 4 ml/kg, FR 10, PEEP 10, FiO₂ 30%. Gasometria: pH 7,40, PaCO₂ 45, PaO₂ 62. ECMO com boa drenagem e fluxo adequado. Sobre a estratégia ventilatória durante ECMO-VV, assinale a alternativa INCORRETA:",
      "en": "A 40-year-old patient with refractory severe ARDS is placed on veno-venous ECMO after failure of conventional ventilation. On MV: Vt 4 ml/kg, RR 10, PEEP 10, FiO₂ 30%. ABG: pH 7.40, PaCO₂ 45, PaO₂ 62. ECMO showing good drainage and adequate flow. Regarding ventilatory strategy during VV-ECMO, mark the INCORRECT option:",
      "es": "Paciente de 40 años con SDRA grave refractario es colocado en ECMO veno-venosa tras fracaso de la ventilación convencional. Está en VM: Vt 4 ml/kg, FR 10, PEEP 10, FiO₂ 30%. GSA: pH 7,40, PaCO₂ 45, PaO₂ 62. ECMO con buen drenaje y flujo adecuado. Sobre la estrategia ventilatoria durante ECMO-VV, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A ventilação mecânica deve ser ajustada para minimizar lesão pulmonar associada ao ventilador",
          "en": "Mechanical ventilation should be adjusted to minimize ventilator-induced lung injury",
          "es": "La ventilación mecánica debe ajustarse para minimizar el daño pulmonar inducido por el ventilador"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Estratégia ultraprotetora é essencial durante ECMO.",
          "en": "This statement is correct. Ultraprotective strategy is essential during ECMO.",
          "es": "Esta afirmación es correcta. Estrategia ultraprotectora es esencial durante ECMO."
        }
      },
      {
        "text": {
          "pt": "O volume corrente pode ser ainda mais reduzido (< 4 ml/kg) se houver troca eficaz de CO₂ pela ECMO",
          "en": "Tidal volume can be further reduced (< 4 ml/kg) if CO₂ removal is effective via ECMO",
          "es": "El volumen corriente puede reducirse aún más (< 4 ml/kg) si la eliminación de CO₂ es eficaz mediante ECMO"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Vt pode chegar a 2-3 ml/kg com remoção adequada de CO₂ pela ECMO.",
          "en": "This statement is correct. Vt can be reduced to 2-3 ml/kg with adequate CO₂ removal by ECMO.",
          "es": "Esta afirmación es correcta. Vt puede reducirse a 2-3 ml/kg con adecuada eliminación de CO₂ por ECMO."
        }
      },
      {
        "text": {
          "pt": "O objetivo é manter PaO₂ entre 90 e 100 mmHg durante ECMO-VV",
          "en": "The goal is to maintain PaO₂ between 90 and 100 mmHg during VV-ECMO",
          "es": "El objetivo es mantener la PaO₂ entre 90 y 100 mmHg durante ECMO-VV"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Alvos de PaO₂ são mais baixos (≥ 55-60 mmHg) durante ECMO-VV. Valores > 90 mmHg podem exigir parâmetros prejudiciais.",
          "en": "INCORRECT statement (requested). PaO₂ targets are lower (≥ 55-60 mmHg) during VV-ECMO. Values > 90 mmHg may require harmful settings.",
          "es": "Afirmación INCORRECTA (solicitada). Objetivos de PaO₂ son más bajos (≥ 55-60 mmHg) en ECMO-VV. Valores > 90 mmHg pueden requerir parámetros perjudiciales."
        }
      },
      {
        "text": {
          "pt": "Mesmo durante ECMO, a PEEP deve ser mantida para prevenir atelectrauma",
          "en": "Even during ECMO, PEEP should be maintained to prevent atelectrauma",
          "es": "Incluso durante ECMO, debe mantenerse la PEEP para prevenir atelectrauma"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. PEEP adequada previne colapso alveolar e lesão cíclica.",
          "en": "This statement is correct. Adequate PEEP prevents alveolar collapse and cyclic injury.",
          "es": "Esta afirmación es correcta. PEEP adecuada previene colapso alveolar y daño cíclico."
        }
      },
      {
        "text": {
          "pt": "A frequência respiratória pode ser reduzida para permitir estratégia ultraprotetora",
          "en": "Respiratory rate may be reduced to allow ultraprotective strategy",
          "es": "La frecuencia respiratoria puede reducirse para permitir estrategia ultraprotectora"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. FR reduzida minimiza estresse mecânico e permite repouso pulmonar.",
          "en": "This statement is correct. Reduced RR minimizes mechanical stress and allows lung rest.",
          "es": "Esta afirmación es correcta. FR reducida minimiza estrés mecánico y permite reposo pulmonar."
        }
      }
    ]
  },
  {
    "id": 529,
    "code": "pneumo01-q529",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "inhalation injury", "burns"],
    "level": "hard",
    "correct": 4,
    "question": {
      "pt": "Paciente de 36 anos, vítima de incêndio em ambiente fechado, apresenta queimaduras de face, rouquidão, taquipneia e crepitações inspiratórias. Após intubação, é colocado em VM: VCV, Vt 6 ml/kg, FR 20, PEEP 8, FiO₂ 100%. Apresenta hipoxemia grave e hipersecreção brônquica. Sobre a ventilação em queimaduras inalatórias, assinale a alternativa INCORRETA:",
      "en": "A 36-year-old patient, victim of a closed-space fire, presents with facial burns, hoarseness, tachypnea, and inspiratory crackles. After intubation, placed on MV: VCV, Vt 6 ml/kg, RR 20, PEEP 8, FiO₂ 100%. He has severe hypoxemia and excessive bronchial secretions. Regarding ventilation in inhalation injury, mark the INCORRECT statement:",
      "es": "Paciente de 36 años, víctima de incendio en espacio cerrado, presenta quemaduras faciales, disfonía, taquipnea y crepitantes inspiratorios. Intubado y en VM: VCV, Vt 6 ml/kg, FR 20, PEEP 8, FiO₂ 100%. Presenta hipoxemia grave y hipersecreción bronquial. En relación a la ventilación en lesión por inhalación, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A intubação precoce é indicada mesmo sem sinais evidentes de obstrução",
          "en": "Early intubation is indicated even without overt obstruction signs",
          "es": "La intubación precoz está indicada incluso sin signos evidentes de obstrucción"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Edema de via aérea pode progredir rapidamente em lesão inalatória.",
          "en": "This statement is correct. Airway edema may progress rapidly in inhalation injury.",
          "es": "Esta afirmación es correcta. Edema de vía aérea puede progresar rápidamente en lesión inhalatoria."
        }
      },
      {
        "text": {
          "pt": "O uso de broncoscopia pode auxiliar na remoção de debris e na avaliação de lesões térmicas",
          "en": "Bronchoscopy can help remove debris and assess thermal injury",
          "es": "La broncoscopia puede ayudar a remover detritos y evaluar daño térmico"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Broncoscopia é padrão-ouro para diagnóstico e remoção de partículas.",
          "en": "This statement is correct. Bronchoscopy is gold standard for diagnosis and particle removal.",
          "es": "Esta afirmación es correcta. Broncoscopia es estándar de oro para diagnóstico y remoción de partículas."
        }
      },
      {
        "text": {
          "pt": "É comum haver hipersecreção e formação de plugs de fibrina, exigindo aspiração frequente",
          "en": "Hypersecretion and fibrin plug formation are common, requiring frequent suctioning",
          "es": "La hipersecreción y los tapones de fibrina son comunes, requiriendo aspiración frecuente"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Deposição de fibrina e necrose epitelial são características.",
          "en": "This statement is correct. Fibrin deposition and epithelial necrosis are hallmarks.",
          "es": "Esta afirmación es correcta. Depósito de fibrina y necrosis epitelial son características."
        }
      },
      {
        "text": {
          "pt": "Ventilação com Vt de 6 ml/kg deve ser mantida, com pressões seguras e PEEP adequada",
          "en": "Ventilation with 6 ml/kg tidal volume should be maintained, with safe pressures and appropriate PEEP",
          "es": "Se debe mantener ventilación con Vt de 6 ml/kg, con presiones seguras y PEEP adecuada"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Estratégia protetora aplica-se mesmo em lesão inalatória.",
          "en": "This statement is correct. Protective strategy applies even in inhalation injury.",
          "es": "Esta afirmación es correcta. Estrategia protectora aplica incluso en lesión inhalatoria."
        }
      },
      {
        "text": {
          "pt": "A FiO₂ deve ser titulada para manter PaO₂ < 60 mmHg visando reduzir estresse oxidativo",
          "en": "FiO₂ should be titrated to keep PaO₂ < 60 mmHg to reduce oxidative stress",
          "es": "La FiO₂ debe titularse para mantener PaO₂ < 60 mmHg con el fin de reducir estrés oxidativo"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Hipóxia (PaO₂ < 60 mmHg) não é aceitável. Oxigenação deve manter SpO₂ ≥ 92% ou PaO₂ ≥ 60-70 mmHg.",
          "en": "INCORRECT statement (requested). Hypoxia (PaO₂ < 60 mmHg) is unacceptable. Oxygenation should maintain SpO₂ ≥ 92% or PaO₂ ≥ 60-70 mmHg.",
          "es": "Afirmación INCORRECTA (solicitada). Hipoxia (PaO₂ < 60 mmHg) no es aceptable. Oxigenación debe mantener SpO₂ ≥ 92% o PaO₂ ≥ 60-70 mmHg."
        }
      }
    ]
  },
  {
    "id": 530,
    "code": "pneumo01-q530",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "abdominal compartment syndrome"],
    "level": "hard",
    "correct": 1,
    "question": {
      "pt": "Paciente de 62 anos, obeso (IMC 38), séptico por perfuração intestinal, encontra-se sedado, em VM: VCV, Vt 6 ml/kg, PEEP 10, FR 24, FiO₂ 50%. Evolui com aumento progressivo da pressão de pico e platô, hipoxemia, oligoúria e distensão abdominal. Pressão intra-abdominal (PIA) medida em 24 mmHg. Sobre a ventilação na síndrome compartimental abdominal, assinale a alternativa INCORRETA:",
      "en": "A 62-year-old obese patient (BMI 38) with sepsis due to bowel perforation is sedated on MV: VCV, Vt 6 ml/kg, PEEP 10, RR 24, FiO₂ 50%. He develops rising peak and plateau pressures, hypoxemia, oliguria, and abdominal distension. Intra-abdominal pressure (IAP) is 24 mmHg. Regarding ventilation in abdominal compartment syndrome, mark the INCORRECT option:",
      "es": "Paciente de 62 años, obeso (IMC 38), con sepsis por perforación intestinal, se encuentra sedado en VM: VCV, Vt 6 ml/kg, PEEP 10, FR 24, FiO₂ 50%. Evoluciona con aumento progresivo de presiones pico y meseta, hipoxemia, oliguria y distensión abdominal. Presión intraabdominal (PIA) = 24 mmHg. Sobre la ventilación en síndrome compartimental abdominal, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A SCA eleva a pressão de platô devido à redução da complacência da parede abdominal e torácica",
          "en": "ACS raises plateau pressure due to reduced abdominal and thoracic compliance",
          "es": "El SCA eleva la presión de meseta por reducción de la complacencia abdominal y torácica"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. O aumento da pressão intra-abdominal reduz a complacência torácica, elevando a pressão de platô.",
          "en": "This statement is correct. Elevated intra-abdominal pressure reduces thoracic compliance, increasing plateau pressure.",
          "es": "Esta afirmación es correcta. El aumento de presión intraabdominal reduce la complacencia torácica, elevando la presión de meseta."
        }
      },
      {
        "text": {
          "pt": "A PEEP deve sempre ser aumentada proporcionalmente à pressão intra-abdominal para evitar atelectasia",
          "en": "PEEP should always be increased proportionally to IAP to avoid atelectasis",
          "es": "La PEEP debe aumentarse siempre proporcionalmente a la PIA para evitar atelectasia"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Não há recomendação universal para aumento proporcional da PEEP à PIA, pois pode agravar pressões torácicas e comprometer hemodinâmica.",
          "en": "INCORRECT statement (requested). No universal recommendation exists for proportional PEEP increase to IAP, as it may worsen thoracic pressures and hemodynamics.",
          "es": "Afirmación INCORRECTA (solicitada). No existe recomendación universal para aumentar la PEEP proporcionalmente a la PIA, ya que puede empeorar presiones torácicas y hemodinamia."
        }
      },
      {
        "text": {
          "pt": "A PIA ≥ 20 mmHg com disfunção orgânica define síndrome compartimental abdominal",
          "en": "IAP ≥ 20 mmHg with organ dysfunction defines abdominal compartment syndrome",
          "es": "Una PIA ≥ 20 mmHg con disfunción orgánica define síndrome compartimental abdominal"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Consenso internacional define SCA como PIA ≥ 20 mmHg com disfunção orgânica.",
          "en": "This statement is correct. International consensus defines ACS as IAP ≥ 20 mmHg with organ dysfunction.",
          "es": "Esta afirmación es correcta. El consenso internacional define SCA como PIA ≥ 20 mmHg con disfunción orgánica."
        }
      },
      {
        "text": {
          "pt": "A descompressão cirúrgica pode ser necessária nos casos refratários",
          "en": "Surgical decompression may be necessary in refractory cases",
          "es": "La descompresión quirúrgica puede ser necesaria en casos refractarios"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. A descompressão é indicada quando medidas conservadoras falham.",
          "en": "This statement is correct. Decompression is indicated when conservative measures fail.",
          "es": "Esta afirmación es correcta. La descompresión está indicada cuando fallan medidas conservadoras."
        }
      },
      {
        "text": {
          "pt": "Monitorar complacência pulmonar e pressão de platô ajuda a ajustar a ventilação com segurança",
          "en": "Monitoring lung compliance and plateau pressure helps safely adjust ventilation",
          "es": "Monitorear la complacencia pulmonar y la presión de meseta ayuda a ajustar la ventilación de forma segura"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Parâmetros mecânicos orientam otimização ventilatória.",
          "en": "This statement is correct. Mechanical parameters guide ventilatory optimization.",
          "es": "Esta afirmación es correcta. Los parámetros mecánicos guían la optimización ventilatoria."
        }
      }
    ]
  },
  {
    "id": 531,
    "code": "pneumo01-q531",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "ARDS", "COPD", "barotrauma"],
    "level": "very_hard",
    "correct": 3,
    "question": {
      "pt": "Homem de 71 anos, ex-tabagista com DPOC GOLD III, é internado por COVID-19 com SDRA moderada-grave. Após intubação e início de ventilação protetora, apresenta pneumomediastino e enfisema subcutâneo importante. Está em VCV, PEEP 12, Vt 6 ml/kg, FR 24, FiO₂ 70%. Qual conduta ventilatória abaixo está INCORRETA?",
      "en": "A 71-year-old man, ex-smoker with GOLD III COPD, is admitted for COVID-19 with moderate-to-severe ARDS. After intubation and initiation of protective ventilation, he develops pneumomediastinum and significant subcutaneous emphysema. He is on VCV, PEEP 12, Vt 6 ml/kg, RR 24, FiO₂ 70%. Which ventilatory management below is INCORRECT?",
      "es": "Hombre de 71 años, exfumador con EPOC GOLD III, ingresa por COVID-19 con SDRA moderada a grave. Tras intubación e inicio de ventilación protectora, presenta neumomediastino y enfisema subcutáneo importante. Está en VCV, PEEP 12, Vt 6 ml/kg, FR 24, FiO₂ 70%. ¿Cuál de las siguientes conductas ventilatorias es INCORRECTA?"
    },
    "options": [
      {
        "text": {
          "pt": "Avaliar complacência e pressão de platô para ajuste fino da ventilação protetora",
          "en": "Assess compliance and plateau pressure for fine-tuning protective ventilation",
          "es": "Evaluar la complacencia y presión de meseta para ajustar la ventilación protectora"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Monitorização contínua é essencial para segurança ventilatória.",
          "en": "This statement is correct. Continuous monitoring is essential for ventilatory safety.",
          "es": "Esta afirmación es correcta. La monitorización continua es esencial para seguridad ventilatoria."
        }
      },
      {
        "text": {
          "pt": "Considerar redução de PEEP se houver sinais de hiperinsuflação dinâmica",
          "en": "Consider reducing PEEP if signs of dynamic hyperinflation are present",
          "es": "Considerar reducir la PEEP si hay signos de hiperinsuflación dinámica"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Redução de PEEP pode mitigar barotrauma em DPOC com auto-PEEP.",
          "en": "This statement is correct. PEEP reduction may mitigate barotrauma in COPD with auto-PEEP.",
          "es": "Esta afirmación es correcta. Reducir PEEP puede mitigar barotrauma en EPOC con auto-PEEP."
        }
      },
      {
        "text": {
          "pt": "Ventilar com frequência respiratória mais baixa pode reduzir hiperinsuflação e barotrauma",
          "en": "Ventilating with a lower respiratory rate can reduce hyperinflation and barotrauma",
          "es": "Ventilar con frecuencia respiratoria más baja puede reducir la hiperinsuflación y el barotrauma"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Menor FR diminui aprisionamento aéreo em pacientes obstrutivos.",
          "en": "This statement is correct. Lower RR reduces air trapping in obstructive patients.",
          "es": "Esta afirmación es correcta. Menor FR reduce atrapamiento aéreo en pacientes obstructivos."
        }
      },
      {
        "text": {
          "pt": "Aumentar PEEP para >15 cmH₂O é recomendado para manter a recrutabilidade alveolar",
          "en": "Increasing PEEP above 15 cmH₂O is recommended to maintain alveolar recruitability",
          "es": "Aumentar la PEEP por encima de 15 cmH₂O está recomendado para mantener la reclutabilidad alveolar"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). PEEP >15 cmH₂O pode agravar hiperinsuflação e barotrauma em DPOC com enfisema subcutâneo pré-existente.",
          "en": "INCORRECT statement (requested). PEEP >15 cmH₂O may worsen hyperinflation and barotrauma in COPD with pre-existing subcutaneous emphysema.",
          "es": "Afirmación INCORRECTA (solicitada). PEEP >15 cmH₂O puede agravar hiperinsuflación y barotrauma en EPOC con enfisema subcutáneo preexistente."
        }
      },
      {
        "text": {
          "pt": "Evitar manobras de recrutamento alveolar devido ao risco de piorar o barotrauma",
          "en": "Avoid alveolar recruitment maneuvers due to risk of worsening barotrauma",
          "es": "Evitar maniobras de reclutamiento alveolar por riesgo de empeorar el barotrauma"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Manobras de recrutamento são contraindicadas em barotrauma estabelecido.",
          "en": "This statement is correct. Recruitment maneuvers are contraindicated in established barotrauma.",
          "es": "Esta afirmación es correcta. Las maniobras de reclutamiento están contraindicadas en barotrauma establecido."
        }
      }
    ]
  },
  {
    "id": 532,
    "code": "pneumo01-q532",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "pulmonary embolism", "DAH", "ARDS"],
    "level": "very_hard",
    "correct": 2,
    "question": {
      "pt": "Mulher de 59 anos com adenocarcinoma pulmonar metastático é admitida com hipoxemia grave, hemoptise volumosa e hipotensão. Angiotomografia revela tromboembolismo pulmonar bilateral e infiltrado difuso compatível com hemorragia alveolar difusa. Iniciada VM protetora: Vt 6 ml/kg, PEEP 10, FiO₂ 100%, FR 30. Sobre a abordagem ventilatória inicial, qual alternativa está INCORRETA?",
      "en": "A 59-year-old woman with metastatic lung adenocarcinoma presents with severe hypoxemia, massive hemoptysis, and hypotension. CT angiography shows bilateral pulmonary embolism and diffuse infiltrates compatible with diffuse alveolar hemorrhage. Protective mechanical ventilation is started: Vt 6 ml/kg, PEEP 10, FiO₂ 100%, RR 30. Regarding the initial ventilatory approach, which option is INCORRECT?",
      "es": "Mujer de 59 años con adenocarcinoma pulmonar metastásico presenta hipoxemia grave, hemoptisis masiva e hipotensión. La angio-TC muestra embolia pulmonar bilateral e infiltrados difusos compatibles con hemorragia alveolar difusa. Se inicia VM protectora: Vt 6 ml/kg, PEEP 10, FiO₂ 100%, FR 30. Sobre el enfoque ventilatorio inicial, ¿cuál opción es INCORRECTA?"
    },
    "options": [
      {
        "text": {
          "pt": "Manter volume corrente baixo e monitorar complacência dinâmica",
          "en": "Maintain low tidal volume and monitor dynamic compliance",
          "es": "Mantener volumen corriente bajo y monitorizar la complacencia dinámica"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Volumes correntes baixos são padrão em SDRA com hemorragia alveolar.",
          "en": "This statement is correct. Low tidal volumes are standard in ARDS with alveolar hemorrhage.",
          "es": "Esta afirmación es correcta. Volúmenes corrientes bajos son estándar en SDRA con hemorragia alveolar."
        }
      },
      {
        "text": {
          "pt": "Utilizar PEEP ≥ 10 cmH₂O é sempre seguro para prevenir atelectasia em hemorragia alveolar",
          "en": "Using PEEP ≥10 cmH₂O is always safe to prevent atelectasis in alveolar hemorrhage",
          "es": "Usar PEEP ≥10 cmH₂O siempre es seguro para prevenir atelectasias en hemorragia alveolar"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). PEEP elevada pode aumentar sangramento em hemorragia alveolar ativa e requer individualização rigorosa.",
          "en": "INCORRECT statement (requested). High PEEP may increase bleeding in active alveolar hemorrhage and requires rigorous individualization.",
          "es": "Afirmación INCORRECTA (solicitada). PEEP elevada puede aumentar el sangrado en hemorragia alveolar activa y requiere individualización rigurosa."
        }
      },
      {
        "text": {
          "pt": "Avaliar necessidade de broncoscopia para controle de sangramento e higiene brônquica",
          "en": "Consider bronchoscopy for bleeding control and airway hygiene",
          "es": "Evaluar la necesidad de broncoscopia para controlar el sangrado e higiene bronquial"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Broncoscopia é crucial para diagnóstico e controle de hemorragia.",
          "en": "This statement is correct. Bronchoscopy is crucial for diagnosis and hemorrhage control.",
          "es": "Esta afirmación es correcta. La broncoscopia es crucial para diagnóstico y control de hemorragia."
        }
      },
      {
        "text": {
          "pt": "Evitar hiperventilação e alcalose que possam prejudicar a perfusão coronariana",
          "en": "Avoid hyperventilation and alkalosis that may impair coronary perfusion",
          "es": "Evitar hiperventilación y alcalosis que puedan perjudicar la perfusión coronaria"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Alcalose pode exacerbar arritmias em contexto de hipóxia/hemorragia.",
          "en": "This statement is correct. Alkalosis may exacerbate arrhythmias in hypoxic/hemorrhagic contexts.",
          "es": "Esta afirmación es correcta. La alcalosis puede exacerbar arritmias en contextos hipóxicos/hemorrágicos."
        }
      },
      {
        "text": {
          "pt": "Avaliar troca para ventilação controlada por pressão se houver baixa complacência",
          "en": "Consider switching to pressure-controlled ventilation if low compliance is present",
          "es": "Considerar cambiar a ventilación controlada por presión si hay baja complacencia"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Modo controlado por pressão pode melhorar distribuição de gases em complacência reduzida.",
          "en": "This statement is correct. Pressure-controlled mode may improve gas distribution in low compliance.",
          "es": "Esta afirmación es correcta. El modo controlado por presión puede mejorar distribución de gases con baja complacencia."
        }
      }
    ]
  },
  {
    "id": 533,
    "code": "pneumo01-q533",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "ARDS", "hepatic encephalopathy", "acidosis"],
    "level": "very_hard",
    "correct": 4,
    "question": {
      "pt": "Homem de 53 anos com cirrose Child C é admitido em coma (GCS 5) com SDRA grave (PaO₂/FiO₂ = 90), acidose metabólica (pH 7.10, HCO₃⁻ 12), e hiperamonemia grave. Está em VCV: Vt 6 ml/kg, PEEP 12, FR 35, FiO₂ 100%. Apresenta sinais de auto-PEEP e pressões elevadas. Qual estratégia ventilatória abaixo é a MENOS apropriada neste contexto clínico?",
      "en": "A 53-year-old man with Child C cirrhosis is admitted in coma (GCS 5) with severe ARDS (PaO₂/FiO₂ = 90), metabolic acidosis (pH 7.10, HCO₃⁻ 12), and severe hyperammonemia. On VCV: Vt 6 ml/kg, PEEP 12, RR 35, FiO₂ 100%. Shows auto-PEEP and high airway pressures. Which ventilatory strategy is LEAST appropriate in this clinical context?",
      "es": "Hombre de 53 años con cirrosis Child C ingresa en coma (GCS 5) con SDRA grave (PaO₂/FiO₂ = 90), acidosis metabólica (pH 7.10, HCO₃⁻ 12) e hiperamonemia grave. En VCV: Vt 6 ml/kg, PEEP 12, FR 35, FiO₂ 100%. Presenta auto-PEEP y presiones elevadas. ¿Qué estrategia ventilatoria es MENOS apropiada en este contexto clínico?"
    },
    "options": [
      {
        "text": {
          "pt": "Evitar hipoventilação permissiva devido à acidose e encefalopatia",
          "en": "Avoid permissive hypoventilation due to acidosis and encephalopathy",
          "es": "Evitar hipoventilación permisiva debido a la acidosis y encefalopatía"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Controle rigoroso de CO₂ é necessário em encefalopatia hepática.",
          "en": "This statement is correct. Tight CO₂ control is required in hepatic encephalopathy.",
          "es": "Esta afirmación es correcta. Control estricto de CO₂ es necesario en encefalopatía hepática."
        }
      },
      {
        "text": {
          "pt": "Utilizar capnografia contínua e monitorar pH arterial em série",
          "en": "Use continuous capnography and serial arterial pH monitoring",
          "es": "Utilizar capnografía continua y monitorización seriada del pH arterial"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Monitorização contínua otimiza equilíbrio ácido-base.",
          "en": "This statement is correct. Continuous monitoring optimizes acid-base balance.",
          "es": "Esta afirmación es correcta. La monitorización continua optimiza el equilibrio ácido-base."
        }
      },
      {
        "text": {
          "pt": "Considerar sedação profunda para evitar esforço inspiratório excessivo",
          "en": "Consider deep sedation to avoid excessive inspiratory effort",
          "es": "Considerar sedación profunda para evitar esfuerzo inspiratorio excesivo"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Sedação reduz trabalho respiratório e consumo de oxigênio.",
          "en": "This statement is correct. Sedation reduces work of breathing and oxygen consumption.",
          "es": "Esta afirmación es correcta. La sedación reduce trabajo respiratorio y consumo de oxígeno."
        }
      },
      {
        "text": {
          "pt": "Avaliar se terapia de substituição renal está indicada para correção de acidose",
          "en": "Evaluate need for renal replacement therapy to correct acidosis",
          "es": "Evaluar si la terapia de reemplazo renal está indicada para corregir la acidosis"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. TRR corrige acidose e hiperamonemia em falência hepática.",
          "en": "This statement is correct. RRT corrects acidosis and hyperammonemia in liver failure.",
          "es": "Esta afirmación es correcta. TRR corrige acidosis e hiperamonemia en fallo hepático."
        }
      },
      {
        "text": {
          "pt": "Aumentar ainda mais a frequência respiratória para compensar acidose metabólica",
          "en": "Further increase respiratory rate to compensate metabolic acidosis",
          "es": "Aumentar aún más la frecuencia respiratoria para compensar la acidosis metabólica"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). FR >35/min agrava auto-PEEP, barotrauma e instabilidade hemodinâmica em pacientes com pressões elevadas prévias.",
          "en": "INCORRECT statement (requested). RR >35/min worsens auto-PEEP, barotrauma, and hemodynamic instability in patients with pre-existing high pressures.",
          "es": "Afirmación INCORRECTA (solicitada). FR >35/min agrava auto-PEEP, barotrauma e inestabilidad hemodinámica en pacientes con presiones elevadas previas."
        }
      }
    ]
  },
  {
    "id": 534,
    "code": "pneumo01-q534",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "abdominal compartment syndrome", "ARDS"],
    "level": "very_hard",
    "correct": 1,
    "question": {
      "pt": "Homem de 67 anos, pós-operatório de laparotomia por perfuração de cólon, evolui com distensão abdominal progressiva, oligúria, PIP > 38 cmH₂O e hipoxemia refratária sob ventilação protetora (Vt 6 ml/kg, PEEP 10, FiO₂ 100%). A pressão intra-abdominal medida por via vesical é de 28 mmHg. Qual conduta está INCORRETA frente a este cenário?",
      "en": "A 67-year-old man, post-laparotomy for colon perforation, develops progressive abdominal distension, oliguria, PIP >38 cmH₂O, and refractory hypoxemia under protective ventilation (Vt 6 ml/kg, PEEP 10, FiO₂ 100%). Intra-abdominal pressure measured via bladder is 28 mmHg. Which approach is INCORRECT in this scenario?",
      "es": "Hombre de 67 años, post-laparotomía por perforación de colon, presenta distensión abdominal progresiva, oliguria, PIP >38 cmH₂O e hipoxemia refractaria bajo ventilación protectora (Vt 6 ml/kg, PEEP 10, FiO₂ 100%). La presión intraabdominal medida por vía vesical es de 28 mmHg. ¿Qué conducta es INCORRECTA ante este escenario?"
    },
    "options": [
      {
        "text": {
          "pt": "Reduzir PEEP se houver evidência de hiperdistensão alveolar",
          "en": "Reduce PEEP if alveolar overdistension is suspected",
          "es": "Reducir PEEP si se sospecha sobredistensión alveolar"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Reduzir PEEP em SCA grave pode piorar atelectasia e hipoxemia; o foco deve ser descompressão abdominal.",
          "en": "INCORRECT statement (requested). Reducing PEEP in severe ACS may worsen atelectasis and hypoxemia; focus should be abdominal decompression.",
          "es": "Afirmación INCORRECTA (solicitada). Reducir PEEP en SCA grave puede empeorar atelectasia e hipoxemia; el enfoque debe ser descompresión abdominal."
        }
      },
      {
        "text": {
          "pt": "Elevar ainda mais a PEEP para contrabalançar pressão intra-abdominal",
          "en": "Further increase PEEP to counterbalance intra-abdominal pressure",
          "es": "Aumentar aún más la PEEP para contrarrestar la presión intraabdominal"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Em casos selecionados, PEEP elevada pode melhorar recrutamento sob alta PIA.",
          "en": "This statement is correct. In selected cases, high PEEP may improve recruitment under elevated IAP.",
          "es": "Esta afirmación es correcta. En casos seleccionados, PEEP elevada puede mejorar reclutamiento bajo alta PIA."
        }
      },
      {
        "text": {
          "pt": "Considerar descompressão abdominal cirúrgica de urgência",
          "en": "Consider emergency surgical abdominal decompression",
          "es": "Considerar descompresión quirúrgica abdominal urgente"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Descompressão é padrão-ouro para SCA refratária com PIA >25 mmHg.",
          "en": "This statement is correct. Decompression is gold standard for refractory ACS with IAP >25 mmHg.",
          "es": "Esta afirmación es correcta. La descompresión es estándar de oro para SCA refractaria con PIA >25 mmHg."
        }
      },
      {
        "text": {
          "pt": "Avaliar perfusão renal e necessidade de suporte vasopressor",
          "en": "Assess renal perfusion and need for vasopressor support",
          "es": "Evaluar la perfusión renal y la necesidad de soporte vasopresor"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Otimização hemodinâmica é essencial na SCA.",
          "en": "This statement is correct. Hemodynamic optimization is essential in ACS.",
          "es": "Esta afirmación es correcta. La optimización hemodinámica es esencial en SCA."
        }
      },
      {
        "text": {
          "pt": "Monitorar complacência respiratória e curva pressão-volume",
          "en": "Monitor respiratory compliance and pressure-volume curve",
          "es": "Monitorizar la complacencia respiratoria y la curva presión-volumen"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Curvas P-V identificam zonas de recrutamento/hiperdistensão.",
          "en": "This statement is correct. P-V curves identify recruitment/hyperinflation zones.",
          "es": "Esta afirmación es correcta. Las curvas P-V identifican zonas de reclutamiento/hiperinsuflación."
        }
      }
    ]
  },
  {
    "id": 535,
    "code": "pneumo01-q535",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "obesity", "ARDS", "atelectasis"],
    "level": "very_hard",
    "correct": 3,
    "question": {
      "pt": "Mulher de 62 anos, IMC 48 kg/m², é admitida com pneumonia grave e necessidade de VM. Apresenta PIP 40 cmH₂O, pressão de platô 28 cmH₂O, complacência reduzida e hipoxemia persistente. Está em ventilação controlada, decúbito dorsal. Qual conduta a seguir é MENOS apropriada para otimizar a oxigenação e mecânica ventilatória nesta paciente?",
      "en": "A 62-year-old woman, BMI 48 kg/m², is admitted with severe pneumonia requiring MV. She presents with PIP 40 cmH₂O, plateau pressure 28 cmH₂O, reduced compliance, and persistent hypoxemia. She is on controlled ventilation, in supine position. Which of the following strategies is LEAST appropriate to optimize oxygenation and ventilatory mechanics in this patient?",
      "es": "Mujer de 62 años, IMC 48 kg/m², es admitida con neumonía grave y necesita VM. Presenta PIP 40 cmH₂O, presión plateau de 28 cmH₂O, complacencia reducida e hipoxemia persistente. Está en ventilación controlada, en posición supina. ¿Cuál de las siguientes conductas es MENOS apropiada para optimizar la oxigenación y la mecánica ventilatoria en esta paciente?"
    },
    "options": [
      {
        "text": {
          "pt": "Avaliar uso de posição prona para melhorar a relação V/Q",
          "en": "Consider prone positioning to improve V/Q matching",
          "es": "Considerar posición prona para mejorar la relación V/Q"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Posição prona melhora oxigenação em obesos com SDRA.",
          "en": "This statement is correct. Prone positioning improves oxygenation in obese ARDS patients.",
          "es": "Esta afirmación es correcta. La posición prona mejora oxigenación en obesos con SDRA."
        }
      },
      {
        "text": {
          "pt": "Utilizar Vt baseado no peso predito, não peso real",
          "en": "Use tidal volume based on predicted, not actual body weight",
          "es": "Usar volumen corriente basado en peso predicho, no peso real"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Vt deve ser calculado pelo peso ideal para evitar VILI.",
          "en": "This statement is correct. Vt should be based on ideal weight to avoid VILI.",
          "es": "Esta afirmación es correcta. Vt debe basarse en peso ideal para evitar VILI."
        }
      },
      {
        "text": {
          "pt": "Realizar manobra de recrutamento alveolar com monitoramento hemodinâmico",
          "en": "Perform alveolar recruitment maneuver with hemodynamic monitoring",
          "es": "Realizar maniobra de reclutamiento alveolar con monitoreo hemodinámico"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Manobras de recrutamento são de risco em obesidade grave devido à alta PEEP necessária e instabilidade hemodinâmica.",
          "en": "INCORRECT statement (requested). Recruitment maneuvers are risky in severe obesity due to high required PEEP and hemodynamic instability.",
          "es": "Afirmación INCORRECTA (solicitada). Maniobras de reclutamiento son riesgosas en obesidad grave por alta PEEP requerida e inestabilidad hemodinámica."
        }
      },
      {
        "text": {
          "pt": "Reduzir a PEEP para evitar barotrauma em obesos",
          "en": "Lower PEEP to avoid barotrauma in obese patients",
          "es": "Reducir la PEEP para evitar barotrauma en pacientes obesos"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. PEEP reduzida pode ser necessária se houver hiperdistensão.",
          "en": "This statement is correct. Lower PEEP may be needed if overdistension occurs.",
          "es": "Esta afirmación es correcta. PEEP reducida puede ser necesaria si hay sobredistensión."
        }
      },
      {
        "text": {
          "pt": "Avaliar complacência estática e necessidade de suporte muscular",
          "en": "Evaluate static compliance and need for muscle support",
          "es": "Evaluar la complacencia estática y la necesidad de soporte muscular"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Complacência estática orienta estratégias protetoras.",
          "en": "This statement is correct. Static compliance guides protective strategies.",
          "es": "Esta afirmación es correcta. La complacencia estática guía estrategias protectoras."
        }
      }
    ]
  },
  {
    "id": 536,
    "code": "pneumo01-q536",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "pulmonary hypertension", "RV dysfunction"],
    "level": "very_hard",
    "correct": 2,
    "question": {
      "pt": "Homem de 55 anos, com diagnóstico de hipertensão pulmonar grave secundária à fibrose pulmonar, evolui com insuficiência respiratória aguda e necessidade de VM invasiva. Durante a ventilação controlada, apresenta queda abrupta da pressão arterial e sinais de disfunção de VD. Qual das condutas abaixo está INCORRETA para o manejo inicial desse paciente?",
      "en": "A 55-year-old man with severe pulmonary hypertension secondary to pulmonary fibrosis develops acute respiratory failure and requires invasive MV. During controlled ventilation, he develops sudden hypotension and signs of RV dysfunction. Which of the following is INCORRECT for initial management of this patient?",
      "es": "Hombre de 55 años con hipertensión pulmonar grave secundaria a fibrosis pulmonar desarrolla insuficiencia respiratoria aguda y requiere VM invasiva. Durante la ventilación controlada, presenta hipotensión súbita y signos de disfunción de VD. ¿Cuál de las siguientes conductas es INCORRECTA para el manejo inicial de este paciente?"
    },
    "options": [
      {
        "text": {
          "pt": "Minimizar o tempo inspiratório e manter hipercapnia permissiva moderada",
          "en": "Minimize inspiratory time and allow moderate permissive hypercapnia",
          "es": "Minimizar el tiempo inspiratorio y permitir hipercapnia permisiva moderada"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Tempo inspiratório curto reduz pós-carga do VD; hipercapnia moderada é tolerada.",
          "en": "This statement is correct. Short inspiratory time reduces RV afterload; moderate hypercapnia is tolerated.",
          "es": "Esta afirmación es correcta. Tiempo inspiratorio corto reduce poscarga del VD; hipercapnia moderada es tolerada."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente para 4-6 ml/kg de peso predito",
          "en": "Reduce tidal volume to 4–6 ml/kg of predicted body weight",
          "es": "Reducir el volumen corriente a 4–6 ml/kg de peso predicho"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Vt reduzido previne hiperdistensão e falência de VD.",
          "en": "This statement is correct. Low Vt prevents overdistension and RV failure.",
          "es": "Esta afirmación es correcta. Vt reducido previene sobredistensión y fallo del VD."
        }
      },
      {
        "text": {
          "pt": "Aumentar a PEEP agressivamente para manter a oxigenação",
          "en": "Aggressively increase PEEP to maintain oxygenation",
          "es": "Aumentar agresivamente la PEEP para mantener la oxigenación"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). PEEP elevada aumenta pós-carga do VD e reduz débito cardíaco em hipertensão pulmonar.",
          "en": "INCORRECT statement (requested). High PEEP increases RV afterload and reduces cardiac output in pulmonary hypertension.",
          "es": "Afirmación INCORRECTA (solicitada). PEEP elevada aumenta poscarga del VD y reduce gasto cardíaco en hipertensión pulmonar."
        }
      },
      {
        "text": {
          "pt": "Utilizar vasopressores e suporte inotrópico se necessário",
          "en": "Use vasopressors and inotropic support if needed",
          "es": "Usar vasopresores y soporte inotrópico si es necesario"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Suporte hemodinâmico é essencial na disfunção de VD.",
          "en": "This statement is correct. Hemodynamic support is essential in RV dysfunction.",
          "es": "Esta afirmación es correcta. Soporte hemodinámico es esencial en disfunción del VD."
        }
      },
      {
        "text": {
          "pt": "Avaliar ecocardiograficamente função de VD e volume diastólico",
          "en": "Evaluate RV function and diastolic volume via echocardiography",
          "es": "Evaluar la función del VD y el volumen diastólico por ecocardiografía"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Ecocardiografia guia terapia voltada ao VD.",
          "en": "This statement is correct. Echocardiography guides RV-targeted therapy.",
          "es": "Esta afirmación es correcta. La ecocardiografía guía terapia dirigida al VD."
        }
      }
    ]
  },
  {
    "id": 537,
    "code": "pneumo01-q537",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "metabolic acidosis", "DKA", "lactic acidosis"],
    "level": "very_hard",
    "correct": 1,
    "question": {
      "pt": "Paciente de 28 anos com cetoacidose diabética grave apresenta rebaixamento do nível de consciência (pH 6,98, bicarbonato 6 mEq/L, pCO₂ 20 mmHg). A equipe decide por intubação orotraqueal. Qual das condutas abaixo é INCORRETA no manejo ventilatório inicial desse paciente?",
      "en": "A 28-year-old patient with severe diabetic ketoacidosis presents with reduced consciousness (pH 6.98, bicarbonate 6 mEq/L, pCO₂ 20 mmHg). The team decides to proceed with orotracheal intubation. Which of the following is INCORRECT in the initial ventilatory management of this patient?",
      "es": "Paciente de 28 años con cetoacidosis diabética grave presenta disminución del nivel de consciencia (pH 6.98, bicarbonato 6 mEq/L, pCO₂ 20 mmHg). El equipo decide realizar intubación orotraqueal. ¿Cuál de las siguientes conductas es INCORRECTA en el manejo ventilatorio inicial de este paciente?"
    },
    "options": [
      {
        "text": {
          "pt": "Tentar manter a mesma taxa de ventilação minuto que o paciente tinha antes da intubação",
          "en": "Attempt to maintain the same minute ventilation as before intubation",
          "es": "Intentar mantener la misma ventilación minuto que el paciente tenía antes de la intubación"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Ventilação minuto pré-intubação (FR 30-40) é insustentável após intubação e causa hiperventilação iatrogênica com alcalose.",
          "en": "INCORRECT statement (requested). Pre-intubation minute ventilation (RR 30-40) is unsustainable post-intubation and causes iatrogenic hyperventilation/alkalosis.",
          "es": "Afirmación INCORRECTA (solicitada). Ventilación minuto pre-intubación (FR 30-40) es insostenible post-intubación y causa hiperventilación/alkalosis iatrogénica."
        }
      },
      {
        "text": {
          "pt": "Programar ventilação com frequência respiratória inicial de 12 rpm e Vt de 6 ml/kg",
          "en": "Set initial ventilation with RR of 12 bpm and Vt of 6 ml/kg",
          "es": "Configurar ventilación inicial con FR de 12 rpm y Vt de 6 ml/kg"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Parâmetros conservadores previnem alcalose respiratória.",
          "en": "This statement is correct. Conservative parameters prevent respiratory alkalosis.",
          "es": "Esta afirmación es correcta. Parámetros conservadores previenen alcalosis respiratoria."
        }
      },
      {
        "text": {
          "pt": "Monitorar pH e pCO₂ seriados nas primeiras horas",
          "en": "Monitor serial pH and pCO₂ in the first few hours",
          "es": "Monitorear pH y pCO₂ seriados durante las primeras horas"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Monitorização frequente evita flutuações perigosas de pH.",
          "en": "This statement is correct. Frequent monitoring prevents dangerous pH fluctuations.",
          "es": "Esta afirmación es correcta. Monitorización frecuente evita fluctuaciones peligrosas de pH."
        }
      },
      {
        "text": {
          "pt": "Avaliar necessidade de suporte vasopressor e reposição de volume",
          "en": "Evaluate need for vasopressor support and volume resuscitation",
          "es": "Evaluar necesidad de soporte vasopresor y reposición de volumen"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Reposição volêmica é pedra angular da terapia em CAD.",
          "en": "This statement is correct. Volume resuscitation is cornerstone therapy in DKA.",
          "es": "Esta afirmación es correcta. Reposición de volumen es pilar terapéutico en CAD."
        }
      },
      {
        "text": {
          "pt": "Considerar VM não-invasiva apenas em pacientes conscientes e cooperativos",
          "en": "Consider noninvasive MV only in conscious and cooperative patients",
          "es": "Considerar VM no invasiva solo en pacientes conscientes y cooperativos"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. VMNI é contraindicada em depressão de consciência.",
          "en": "This statement is correct. NIV is contraindicated in depressed consciousness.",
          "es": "Esta afirmación es correcta. VMNI está contraindicada en depresión de consciencia."
        }
      }
    ]
  },
  {
    "id": 538,
    "code": "pneumo01-q538",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "asynchrony", "COPD"],
    "level": "very_hard",
    "correct": 2,
    "question": {
      "pt": "Homem de 74 anos com DPOC grave é admitido na UTI por exacerbação com acidose respiratória. Está sob VM em modo assistido-controlado (VCV). Apresenta sinais de assincronia inspiratória: esforço visível sem disparo do ventilador, aumento de trabalho respiratório e uso de musculatura acessória. Qual das condutas abaixo é INCORRETA nesse contexto?",
      "en": "A 74-year-old man with severe COPD is admitted to the ICU with an exacerbation and respiratory acidosis. He's on assist-control MV (VCV). There are signs of inspiratory asynchrony: visible effort without triggering, increased work of breathing, and accessory muscle use. Which of the following is INCORRECT in this context?",
      "es": "Hombre de 74 años con EPOC grave es admitido en UCI por exacerbación con acidosis respiratoria. Está en VM en modo asistido-controlado (VCV). Presenta signos de asincronía inspiratoria: esfuerzo visible sin disparo del ventilador, aumento del trabajo respiratorio y uso de músculos accesorios. ¿Cuál de las siguientes conductas es INCORRECTA en este contexto?"
    },
    "options": [
      {
        "text": {
          "pt": "Avaliar e corrigir a auto-PEEP com ajuste da PEEP externa",
          "en": "Assess and correct auto-PEEP by adjusting external PEEP",
          "es": "Evaluar y corregir la auto-PEEP ajustando la PEEP externa"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Auto-PEEP é causa comum de assincronia em DPOC.",
          "en": "This statement is correct. Auto-PEEP is a common cause of asynchrony in COPD.",
          "es": "Esta afirmación es correcta. Auto-PEEP es causa común de asincronía en EPOC."
        }
      },
      {
        "text": {
          "pt": "Aumentar o tempo inspiratório e o volume corrente",
          "en": "Increase inspiratory time and tidal volume",
          "es": "Aumentar el tiempo inspiratorio y el volumen corriente"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Aumento de Ti e Vt agrava aprisionamento aéreo e hiperinsuflação dinâmica em DPOC.",
          "en": "INCORRECT statement (requested). Increasing Ti and Vt worsens air trapping and dynamic hyperinflation in COPD.",
          "es": "Afirmación INCORRECTA (solicitada). Aumentar Ti y Vt agrava atrapamiento aéreo e hiperinsuflación dinámica en EPOC."
        }
      },
      {
        "text": {
          "pt": "Reduzir a frequência respiratória programada",
          "en": "Reduce the set respiratory rate",
          "es": "Reducir la frecuencia respiratoria programada"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Menor FR programada permite tempo expiratório adequado.",
          "en": "This statement is correct. Lower set RR allows adequate expiratory time.",
          "es": "Esta afirmación es correcta. Menor FR programada permite tiempo espiratorio adecuado."
        }
      },
      {
        "text": {
          "pt": "Avaliar sensibilidade do disparo (trigger) e ajustar para fluxo ou pressão",
          "en": "Assess trigger sensitivity and adjust to flow or pressure mode",
          "es": "Evaluar sensibilidad del disparo y ajustar a modo de flujo o presión"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Disparo de fluxo melhora sincronia em pacientes obstrutivos.",
          "en": "This statement is correct. Flow triggering improves synchrony in obstructive patients.",
          "es": "Esta afirmación es correcta. Disparo por flujo mejora sincronía en pacientes obstructivos."
        }
      },
      {
        "text": {
          "pt": "Considerar mudança para modo assistido com suporte pressórico (PSV)",
          "en": "Consider switching to pressure support ventilation (PSV) mode",
          "es": "Considerar cambio a modo de soporte de presión (PSV)"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. PSV reduz trabalho respiratório e melhora conforto.",
          "en": "This statement is correct. PSV reduces work of breathing and improves comfort.",
          "es": "Esta afirmación es correcta. PSV reduce trabajo respiratorio y mejora confort."
        }
      }
    ]
  },
  {
    "id": 539,
    "code": "pneumo01-q539",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "asynchrony", "neurocritical care"],
    "level": "very_hard",
    "correct": 4,
    "question": {
      "pt": "Mulher de 45 anos no pós-operatório de clipagem de aneurisma cerebral, sedada com RASS -2, encontra-se sob ventilação assistida-controlada. Observa-se, no monitor, padrões repetidos de ciclo duplo (duas incursões ventilatórias consecutivas para um único esforço inspiratório). Qual das abordagens abaixo é INCORRETA para manejo dessa assincronia?",
      "en": "A 45-year-old woman, post-op from cerebral aneurysm clipping, sedated with RASS -2, is on assist-control ventilation. The monitor shows repeated double cycling (two consecutive breaths for one inspiratory effort). Which of the following is INCORRECT in managing this asynchrony?",
      "es": "Mujer de 45 años en postoperatorio de clipaje de aneurisma cerebral, sedada con RASS -2, se encuentra bajo ventilación asistida-controlada. Se observa en el monitor patrón repetido de ciclos dobles (dos respiraciones consecutivas por un solo esfuerzo). ¿Cuál de las siguientes conductas es INCORRECTA en el manejo de esta asincronía?"
    },
    "options": [
      {
        "text": {
          "pt": "Avaliar se o tempo inspiratório está curto em relação à demanda do paciente",
          "en": "Assess if inspiratory time is too short for the patient's demand",
          "es": "Evaluar si el tiempo inspiratorio es demasiado corto para la demanda del paciente"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Ciclo duplo frequentemente reflete tempo inspiratório inadequado.",
          "en": "This statement is correct. Double cycling often reflects inadequate inspiratory time.",
          "es": "Esta afirmación es correcta. Ciclo doble frecuentemente refleja tiempo inspiratorio inadecuado."
        }
      },
      {
        "text": {
          "pt": "Reduzir o volume corrente e aumentar o tempo inspiratório",
          "en": "Reduce tidal volume and increase inspiratory time",
          "es": "Reducir volumen corriente y aumentar el tiempo inspiratorio"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Ajustes de Vt e Ti restauram sincronia paciente-ventilador.",
          "en": "This statement is correct. Vt and Ti adjustments restore patient-ventilator synchrony.",
          "es": "Esta afirmación es correcta. Ajustes de Vt y Ti restauran sincronía paciente-ventilador."
        }
      },
      {
        "text": {
          "pt": "Ajustar o nível de sedação e analgesia conforme o padrão de esforço",
          "en": "Adjust sedation and analgesia according to effort pattern",
          "es": "Ajustar sedación y analgesia según el patrón de esfuerzo"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Sedação adequada reduz esforço inspiratório descoordenado.",
          "en": "This statement is correct. Proper sedation reduces discoordinated inspiratory effort.",
          "es": "Esta afirmación es correcta. Sedación adecuada reduce esfuerzo inspiratorio descoordinado."
        }
      },
      {
        "text": {
          "pt": "Monitorar assincronia com capnografia e curva de fluxo/pressão",
          "en": "Monitor asynchrony with capnography and flow/pressure curves",
          "es": "Monitorear la asincronía con capnografía y curvas de flujo/presión"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Ferramentas gráficas identificam padrões de assincronia.",
          "en": "This statement is correct. Graphic tools identify asynchrony patterns.",
          "es": "Esta afirmación es correcta. Herramientas gráficas identifican patrones de asincronía."
        }
      },
      {
        "text": {
          "pt": "Aumentar o volume corrente e a sensibilidade do trigger para evitar ciclos duplos",
          "en": "Increase tidal volume and trigger sensitivity to prevent double cycling",
          "es": "Aumentar el volumen corriente y la sensibilidad del disparo para evitar ciclos dobles"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Aumentar Vt e sensibilidade pode exacerbar ciclos duplos ao prolongar o tempo inspiratório neural.",
          "en": "INCORRECT statement (requested). Increasing Vt and sensitivity may exacerbate double cycling by prolonging neural inspiratory time.",
          "es": "Afirmación INCORRECTA (solicitada). Aumentar Vt y sensibilidad puede exacerbar ciclos dobles al prolongar el tiempo inspiratorio neural."
        }
      }
    ]
  },
  {
    "id": 540,
    "code": "pneumo01-q540",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["ventilation", "asynchrony", "ARDS"],
    "level": "very_hard",
    "correct": 3,
    "question": {
      "pt": "Paciente de 60 anos, com SDRA grave secundária a pneumonia viral, encontra-se em ventilação mecânica protetora (VCV, Vt 6 ml/kg, FR 30, PEEP 12, FiO₂ 70%). Apesar do uso de bloqueador neuromuscular por 24h e posterior sedação contínua (RASS -4), apresenta episódios frequentes de assincronia tipo disparo ineficaz e esforço reverso (reverse triggering). Assinale a conduta INCORRETA nesse contexto.",
      "en": "A 60-year-old patient with severe ARDS due to viral pneumonia is on protective mechanical ventilation (VCV, Vt 6 ml/kg, RR 30, PEEP 12, FiO₂ 70%). Despite 24h of neuromuscular blockade followed by continuous sedation (RASS -4), frequent ineffective triggering and reverse triggering are observed. Mark the INCORRECT management option.",
      "es": "Paciente de 60 años con SDRA grave secundaria a neumonía viral está en ventilación mecánica protectora (VCV, Vt 6 ml/kg, FR 30, PEEP 12, FiO₂ 70%). A pesar del bloqueo neuromuscular por 24h y sedación continua posterior (RASS -4), presenta asincronías frecuentes tipo disparo ineficaz y esfuerzo inverso (reverse triggering). Señale la opción de manejo INCORRECTA."
    },
    "options": [
      {
        "text": {
          "pt": "Reavaliar a profundidade da sedação e ajustar o alvo de RASS",
          "en": "Reassess sedation depth and adjust RASS target",
          "es": "Reevaluar la profundidad de la sedación y ajustar el objetivo de RASS"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Sedação inadequada é causa comum de assincronia.",
          "en": "This statement is correct. Inadequate sedation is a common cause of asynchrony.",
          "es": "Esta afirmación es correcta. Sedación inadecuada es causa común de asincronía."
        }
      },
      {
        "text": {
          "pt": "Realizar pausa expiratória e manobras de análise do esforço neural (p. ex., EAdi, p0.1)",
          "en": "Perform expiratory pause and analyze neural effort (e.g., EAdi, p0.1)",
          "es": "Realizar pausa espiratoria y analizar el esfuerzo neural (por ejemplo, EAdi, p0.1)"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Monitorização do esforço neural identifica dissincronias residuais.",
          "en": "This statement is correct. Neural effort monitoring identifies residual asynchronies.",
          "es": "Esta afirmación es correcta. Monitoreo del esfuerzo neural identifica disincronías residuales."
        }
      },
      {
        "text": {
          "pt": "Considerar reinício do bloqueio neuromuscular se persistirem assincronias graves",
          "en": "Consider restarting neuromuscular blockade if severe asynchrony persists",
          "es": "Considerar reiniciar el bloqueo neuromuscular si persiste la asincronía grave"
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA (solicitada). Bloqueio neuromuscular contínuo aumenta risco de miopatia e não resolve reverse triggering.",
          "en": "INCORRECT statement (requested). Continuous neuromuscular blockade increases myopathy risk and doesn't resolve reverse triggering.",
          "es": "Afirmación INCORRECTA (solicitada). Bloqueo neuromuscular continuo aumenta riesgo de miopatía y no resuelve reverse triggering."
        }
      },
      {
        "text": {
          "pt": "Reduzir a frequência respiratória programada para facilitar o controle neural",
          "en": "Reduce set respiratory rate to facilitate neural control",
          "es": "Reducir la frecuencia respiratoria programada para facilitar el control neural"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Menor FR programada pode reduzir competição entre tempo neural e mecânico.",
          "en": "This statement is correct. Lower set RR may reduce competition between neural and mechanical timing.",
          "es": "Esta afirmación es correcta. Menor FR programada puede reducir competencia entre tiempo neural y mecánico."
        }
      },
      {
        "text": {
          "pt": "Investigar dissociação entre tempo neural e tempo mecânico como causa de assincronia",
          "en": "Investigate dissociation between neural and mechanical timing as the cause of asynchrony",
          "es": "Investigar la disociación entre el tiempo neural y el tiempo mecánico como causa de la asincronía"
        },
        "explanation": {
          "pt": "Esta afirmação está correta. Dessincronia tempo neural-mecânico é mecanismo chave no reverse triggering.",
          "en": "This statement is correct. Neural-mechanical timing dyssynchrony is a key mechanism in reverse triggering.",
          "es": "Esta afirmación es correcta. Disincronía tiempo neural-mecánico es mecanismo clave en reverse triggering."
        }
      }
    ]
  },
[
  {
    "id": 541,
    "code": "pneumo01-q541",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["niv"],
    "level": "easy",
    "correct": 2,
    "question": {
      "pt": "Qual das seguintes situações clínicas é uma indicação clássica para o uso de ventilação não invasiva (VNI)?",
      "en": "Which of the following clinical scenarios is a classic indication for the use of non-invasive ventilation (NIV)?",
      "es": "¿Cuál de los siguientes escenarios clínicos es una indicación clásica para el uso de ventilación no invasiva (VNI)?"
    },
    "options": [
      {
        "text": {
          "pt": "Pneumotórax hipertensivo com instabilidade hemodinâmica",
          "en": "Tension pneumothorax with hemodynamic instability",
          "es": "Neumotórax a tensión con inestabilidad hemodinámica"
        },
        "explanation": {
          "pt": "Contraindicação absoluta para VNI. Requer drenagem torácica imediata.",
          "en": "Absolute contraindication for NIV. Requires immediate chest drainage.",
          "es": "Contraindicación absoluta para VNI. Requiere drenaje torácico inmediato."
        }
      },
      {
        "text": {
          "pt": "Paciente em parada cardiorrespiratória",
          "en": "Patient in cardiopulmonary arrest",
          "es": "Paciente en paro cardiorrespiratorio"
        },
        "explanation": {
          "pt": "Contraindicação absoluta. Necessita intubação orotraqueal imediata.",
          "en": "Absolute contraindication. Requires immediate intubation.",
          "es": "Contraindicación absoluta. Requiere intubación orotraqueal inmediata."
        }
      },
      {
        "text": {
          "pt": "Exacerbação aguda de DPOC com retenção de CO₂ e esforço respiratório aumentado",
          "en": "Acute COPD exacerbation with CO₂ retention and increased respiratory effort",
          "es": "Exacerbación aguda de EPOC con retención de CO₂ y aumento del esfuerzo respiratorio"
        },
        "explanation": {
          "pt": "RESPOSTA CORRETA. Indicação clássica com redução de mortalidade e intubação. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426.",
          "en": "CORRECT ANSWER. Gold-standard indication with reduced mortality/intubation. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426.",
          "es": "RESPUESTA CORRECTA. Indicación bien establecida que reduce mortalidad/intubación. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426."
        }
      },
      {
        "text": {
          "pt": "Traumatismo cranioencefálico grave com rebaixamento do nível de consciência",
          "en": "Severe traumatic brain injury with decreased level of consciousness",
          "es": "Traumatismo craneoencefálico grave con disminución del nivel de conciencia"
        },
        "explanation": {
          "pt": "Contraindicação por risco de aspiração e incapacidade de proteger vias aéreas.",
          "en": "Contraindicated due to aspiration risk and inability to protect airway.",
          "es": "Contraindicado por riesgo de aspiración e incapacidad para proteger vía aérea."
        }
      },
      {
        "text": {
          "pt": "Asma refratária com necessidade de intubação orotraqueal imediata",
          "en": "Refractory asthma requiring immediate orotracheal intubation",
          "es": "Asma refractaria que requiere intubación orotraqueal inmediata"
        },
        "explanation": {
          "pt": "VNI geralmente ineficaz; intubação é prioridade.",
          "en": "NIV typically ineffective; intubation is priority.",
          "es": "VNI generalmente ineficaz; la intubación es prioritaria."
        }
      }
    ]
  },
  {
    "id": 542,
    "code": "ventilation-q542",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["niv"],
    "level": "easy",
    "correct": 1,
    "question": {
      "pt": "Qual das seguintes situações clínicas representa uma contraindicação absoluta ao uso de ventilação não invasiva (VNI)?",
      "en": "Which of the following clinical conditions is an absolute contraindication to the use of non-invasive ventilation (NIV)?",
      "es": "¿Cuál de las siguientes condiciones clínicas representa una contraindicación absoluta para el uso de ventilación no invasiva (VNI)?"
    },
    "options": [
      {
        "text": {
          "pt": "Edema agudo de pulmão sem instabilidade hemodinâmica",
          "en": "Acute pulmonary edema without hemodynamic instability",
          "es": "Edema agudo de pulmón sin inestabilidad hemodinámica"
        },
        "explanation": {
          "pt": "Indicação válida para VNI. Melhora oxigenação e reduz pré-carga.",
          "en": "Valid indication for NIV. Improves oxygenation and reduces preload.",
          "es": "Indicación válida para VNI. Mejora oxigenación y reduce precarga."
        }
      },
      {
        "text": {
          "pt": "Comprometimento da consciência com Glasgow < 8 e incapacidade de proteger vias aéreas",
          "en": "Impaired consciousness with Glasgow < 8 and inability to protect the airway",
          "es": "Compromiso de conciencia con Glasgow < 8 e incapacidad para proteger la vía aérea"
        },
        "explanation": {
          "pt": "RESPOSTA CORRETA. Contraindicação absoluta por risco de aspiração. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426.",
          "en": "CORRECT ANSWER. Absolute contraindication due to aspiration risk. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426.",
          "es": "RESPUESTA CORRECTA. Contraindicación absoluta por riesgo de aspiración. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426."
        }
      },
      {
        "text": {
          "pt": "Crise asmática moderada em paciente colaborativo",
          "en": "Moderate asthma exacerbation in a cooperative patient",
          "es": "Exacerbación asmática moderada en paciente colaborativo"
        },
        "explanation": {
          "pt": "Pode ser tentada com monitorização rigorosa, apesar de não ser primeira escolha.",
          "en": "May be attempted under close monitoring though not first-line.",
          "es": "Puede intentarse con monitorización estricta, aunque no es primera elección."
        }
      },
      {
        "text": {
          "pt": "Pós-operatório de cirurgia bariátrica com hipoventilação",
          "en": "Postoperative period after bariatric surgery with hypoventilation",
          "es": "Postoperatorio de cirugía bariátrica con hipoventilación"
        },
        "explanation": {
          "pt": "Indicação válida para prevenção de atelectasias e insuficiência respiratória.",
          "en": "Valid indication for preventing atelectasis and respiratory failure.",
          "es": "Indicación válida para prevenir atelectasias e insuficiencia respiratoria."
        }
      },
      {
        "text": {
          "pt": "Pneumonia em paciente com DPOC estável hemodinamicamente",
          "en": "Pneumonia in a COPD patient who is hemodynamically stable",
          "es": "Neumonía en paciente con EPOC hemodinámicamente estable"
        },
        "explanation": {
          "pt": "Pode ser utilizada com cautela em casos selecionados.",
          "en": "May be used cautiously in selected cases.",
          "es": "Puede utilizarse con precaución en casos seleccionados."
        }
      }
    ]
  },
  {
    "id": 543,
    "code": "ventilation-q543",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["niv"],
    "level": "hard",
    "correct": 2,
    "question": {
      "pt": "Homem de 74 anos, tabagista e portador de DPOC GOLD 4, é admitido com dispneia intensa, uso de musculatura acessória, gasometria com pH 7,26, PaCO₂ 78 mmHg e PaO₂ 52 mmHg em ar ambiente. Iniciado suporte com VNI (modo BiPAP). Sobre o manejo desse paciente, assinale a alternativa INCORRETA:",
      "en": "A 74-year-old man, smoker with GOLD 4 COPD, is admitted with severe dyspnea, use of accessory muscles, ABG showing pH 7.26, PaCO₂ 78 mmHg, and PaO₂ 52 mmHg on room air. NIV (BiPAP mode) is initiated. Regarding the management of this patient, mark the INCORRECT option:",
      "es": "Hombre de 74 años, fumador y con EPOC GOLD 4, es admitido con disnea intensa, uso de músculos accesorios, GSA con pH 7,26, PaCO₂ 78 mmHg y PaO₂ 52 mmHg en aire ambiente. Se inicia VNI (modo BiPAP). En relación al manejo de este paciente, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A monitorização do pH e da PaCO₂ nas primeiras 2 horas de VNI é fundamental para avaliar a resposta.",
          "en": "Monitoring pH and PaCO₂ within the first 2 hours of NIV is crucial to assess response.",
          "es": "La monitorización del pH y PaCO₂ en las primeras 2 horas de VNI es fundamental para evaluar la respuesta."
        },
        "explanation": {
          "pt": "Correto. Avaliação precoce é essencial para detectar falha da VNI.",
          "en": "Correct. Early assessment is essential to detect NIV failure.",
          "es": "Correcto. Evaluación temprana es esencial para detectar fallo de VNI."
        }
      },
      {
        "text": {
          "pt": "A ausência de melhora clínica ou laboratorial após 1 a 2 horas pode indicar falha da VNI.",
          "en": "Lack of clinical or laboratory improvement after 1–2 hours may indicate NIV failure.",
          "es": "La ausencia de mejoría clínica o de laboratorio tras 1–2 horas puede indicar fallo de la VNI."
        },
        "explanation": {
          "pt": "Correto. Sinais de falha exigem reconsideração da intubação.",
          "en": "Correct. Signs of failure require reconsideration of intubation.",
          "es": "Correcto. Signos de fallo exigen reconsiderar intubación."
        }
      },
      {
        "text": {
          "pt": "A VNI está contraindicada nesse caso devido à acidose respiratória grave.",
          "en": "NIV is contraindicated in this case due to severe respiratory acidosis.",
          "es": "La VNI está contraindicada en este caso debido a acidosis respiratoria grave."
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA. Acidose respiratória (pH 7.25-7.35) é indicação clássica para VNI em DPOC. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426.",
          "en": "INCORRECT STATEMENT. Respiratory acidosis (pH 7.25-7.35) is a key NIV indication in COPD. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426.",
          "es": "AFIRMACIÓN INCORRECTA. Acidosis respiratoria (pH 7.25-7.35) es indicación clave de VNI en EPOC. 📚 Rochwerg B et al. Eur Respir J. 2017;50(2):1602426."
        }
      },
      {
        "text": {
          "pt": "O paciente deve ser mantido com máscara facial bem ajustada para garantir a eficácia da VNI.",
          "en": "The patient should be kept on a well-fitted face mask to ensure effective NIV.",
          "es": "El paciente debe mantenerse con mascarilla facial bien ajustada para garantizar la eficacia de la VNI."
        },
        "explanation": {
          "pt": "Correto. Vazamentos comprometem a eficácia da ventilação.",
          "en": "Correct. Air leaks compromise ventilation efficacy.",
          "es": "Correcto. Las fugas comprometen la eficacia de la ventilación."
        }
      },
      {
        "text": {
          "pt": "A VNI pode reduzir a necessidade de intubação e a mortalidade em exacerbações de DPOC.",
          "en": "NIV can reduce intubation needs and mortality in COPD exacerbations.",
          "es": "La VNI puede reducir la necesidad de intubación y la mortalidad en exacerbaciones de EPOC."
        },
        "explanation": {
          "pt": "Correto. Evidência robusta de benefícios em DPOC hipercápnica.",
          "en": "Correct. Strong evidence of benefits in hypercapnic COPD.",
          "es": "Correcto. Evidencia sólida de beneficios en EPOC hipercápnica."
        }
      }
    ]
  },
  {
    "id": 544,
    "code": "ventilation-q544",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["niv"],
    "level": "hard",
    "correct": 3,
    "question": {
      "pt": "Mulher de 68 anos, com histórico de ICC e FEVE de 25%, apresenta dispneia súbita, estertores crepitantes difusos e hipoxemia refratária. Está sudoreica, com PA 85x55 mmHg e SpO₂ 86% em máscara não reinalante. A equipe decide iniciar VNI como ponte até estabilização hemodinâmica. Sobre essa conduta, assinale a alternativa INCORRETA:",
      "en": "A 68-year-old woman with a history of heart failure and LVEF of 25% presents with sudden dyspnea, diffuse crackles, and refractory hypoxemia. She is diaphoretic, BP 85/55 mmHg, SpO₂ 86% on non-rebreather mask. The team initiates NIV as a bridge to hemodynamic stabilization. Regarding this management, select the INCORRECT statement:",
      "es": "Mujer de 68 años con antecedentes de insuficiencia cardíaca y FEVI de 25% presenta disnea súbita, estertores difusos e hipoxemia refractaria. Está diaforética, con TA 85x55 mmHg y SpO₂ 86% en mascarilla de no reinhalación. El equipo inicia VNI como puente hacia estabilización hemodinámica. Sobre esta conducta, señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A VNI pode melhorar rapidamente a troca gasosa e reduzir a pré-carga em pacientes com edema agudo de pulmão.",
          "en": "NIV can rapidly improve gas exchange and reduce preload in patients with acute pulmonary edema.",
          "es": "La VNI puede mejorar rápidamente el intercambio gaseoso y reducir la precarga en pacientes con edema agudo de pulmón."
        },
        "explanation": {
          "pt": "Correto. Mecanismo fisiológico bem estabelecido.",
          "en": "Correct. Well-established physiological mechanism.",
          "es": "Correcto. Mecanismo fisiológico bien establecido."
        }
      },
      {
        "text": {
          "pt": "A aplicação de pressão positiva pode reduzir o trabalho respiratório e melhorar o débito cardíaco.",
          "en": "Positive pressure can reduce respiratory effort and improve cardiac output.",
          "es": "La presión positiva puede reducir el trabajo respiratorio y mejorar el gasto cardíaco."
        },
        "explanation": {
          "pt": "Correto. Benefícios hemodinâmicos em ICC descompensada.",
          "en": "Correct. Hemodynamic benefits in decompensated heart failure.",
          "es": "Correcto. Beneficios hemodinámicos en ICC descompensada."
        }
      },
      {
        "text": {
          "pt": "A VNI deve ser monitorizada de perto, com avaliação hemodinâmica e da resposta respiratória precoce.",
          "en": "NIV must be closely monitored, with early assessment of hemodynamic and respiratory response.",
          "es": "La VNI debe ser monitorizada de cerca, evaluando la respuesta hemodinámica y respiratoria temprana."
        },
        "explanation": {
          "pt": "Correto. Monitorização contínua é mandatória em pacientes instáveis.",
          "en": "Correct. Continuous monitoring is mandatory in unstable patients.",
          "es": "Correcto. Monitorización continua es obligatoria en pacientes inestables."
        }
      },
      {
        "text": {
          "pt": "A presença de hipotensão moderada isoladamente contraindica o uso de VNI.",
          "en": "The presence of isolated moderate hypotension contraindicates the use of NIV.",
          "es": "La presencia de hipotensión moderada aislada contraindica el uso de VNI."
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA. Hipotensão moderada não é contraindicação absoluta; VNI pode melhorar hemodinâmica. 📚 Vital FM et al. Cochrane Database Syst Rev. 2013;(5):CD005351.",
          "en": "INCORRECT STATEMENT. Moderate hypotension isn't an absolute contraindication; NIV may improve hemodynamics. 📚 Vital FM et al. Cochrane Database Syst Rev. 2013;(5):CD005351.",
          "es": "AFIRMACIÓN INCORRECTA. Hipotensión moderada no es contraindicación absoluta; VNI puede mejorar hemodinámica. 📚 Vital FM et al. Cochrane Database Syst Rev. 2013;(5):CD005351."
        }
      },
      {
        "text": {
          "pt": "A VNI é frequentemente eficaz e segura no edema agudo de pulmão, mesmo em pacientes graves.",
          "en": "NIV is often effective and safe in acute pulmonary edema, even in severe patients.",
          "es": "La VNI es frecuentemente eficaz y segura en edema agudo de pulmón, incluso en pacientes graves."
        },
        "explanation": {
          "pt": "Correto. Segurança demonstrada em ensaios clínicos.",
          "en": "Correct. Safety demonstrated in clinical trials.",
          "es": "Correcto. Seguridad demostrada en ensayos clínicos."
        }
      }
    ]
  },
  {
    "id": 545,
    "code": "ventilation-q545",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["niv"],
    "level": "very_hard",
    "correct": 1,
    "question": {
      "pt": "Homem de 59 anos, IMC 47 kg/m², é admitido por sonolência progressiva, dispneia e taquicardia. Gasometria arterial revela pH 7,21, PaCO₂ 82 mmHg, HCO₃⁻ 34 mEq/L e PaO₂ 56 mmHg. Diagnóstico provável de síndrome da hipoventilação da obesidade. Está estável hemodinamicamente e é iniciada VNI. Assinale a alternativa INCORRETA:",
      "en": "A 59-year-old man, BMI 47 kg/m², is admitted with progressive drowsiness, dyspnea, and tachycardia. ABG shows pH 7.21, PaCO₂ 82 mmHg, HCO₃⁻ 34 mEq/L, and PaO₂ 56 mmHg. Probable diagnosis: obesity hypoventilation syndrome. Hemodynamically stable, NIV is initiated. Select the INCORRECT statement:",
      "es": "Hombre de 59 años, IMC 47 kg/m², ingresa con somnolencia progresiva, disnea y taquicardia. GSA: pH 7,21, PaCO₂ 82 mmHg, HCO₃⁻ 34 mEq/L y PaO₂ 56 mmHg. Diagnóstico probable: síndrome de hipoventilación por obesidad. Estable hemodinámicamente, se inicia VNI. Señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "A hipercapnia crônica com compensação metabólica indica adaptação parcial ao distúrbio.",
          "en": "Chronic hypercapnia with metabolic compensation indicates partial adaptation to the disorder.",
          "es": "La hipercapnia crónica con compensación metabólica indica una adaptación parcial al trastorno."
        },
        "explanation": {
          "pt": "Correto. HCO₃⁻ elevado reflete compensação renal crônica.",
          "en": "Correct. Elevated HCO₃⁻ reflects chronic renal compensation.",
          "es": "Correcto. HCO₃⁻ elevado refleja compensación renal crónica."
        }
      },
      {
        "text": {
          "pt": "A VNI está contraindicada em pacientes com pH < 7,25, mesmo que estáveis.",
          "en": "NIV is contraindicated in patients with pH < 7.25, even if stable.",
          "es": "La VNI está contraindicada en pacientes con pH < 7,25, incluso si están estables."
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA. VNI pode ser tentada com pH ≥ 7.20 sob monitorização rigorosa. 📚 Piper AJ, Grunstein RR. Am J Respir Crit Care Med. 2011;183(3):292–298.",
          "en": "INCORRECT STATEMENT. NIV can be attempted at pH ≥ 7.20 under close monitoring. 📚 Piper AJ, Grunstein RR. Am J Respir Crit Care Med. 2011;183(3):292–298.",
          "es": "AFIRMACIÓN INCORRECTA. VNI puede intentarse con pH ≥ 7.20 bajo monitorización estricta. 📚 Piper AJ, Grunstein RR. Am J Respir Crit Care Med. 2011;183(3):292–298."
        }
      },
      {
        "text": {
          "pt": "A VNI pode reduzir o esforço respiratório e melhorar a ventilação alveolar.",
          "en": "NIV can reduce respiratory effort and improve alveolar ventilation.",
          "es": "La VNI puede reducir el esfuerzo respiratorio y mejorar la ventilación alveolar."
        },
        "explanation": {
          "pt": "Correto. Principal mecanismo de ação na síndrome de hipoventilação.",
          "en": "Correct. Primary mechanism of action in hypoventilation syndromes.",
          "es": "Correcto. Mecanismo principal de acción en síndromes de hipoventilación."
        }
      },
      {
        "text": {
          "pt": "A síndrome da hipoventilação da obesidade associa-se frequentemente a apneia do sono.",
          "en": "Obesity hypoventilation syndrome is often associated with sleep apnea.",
          "es": "El síndrome de hipoventilación por obesidad se asocia frecuentemente a apnea del sueño."
        },
        "explanation": {
          "pt": "Correto. >90% dos casos têm SAOS concomitante.",
          "en": "Correct. >90% of cases have concomitant OSA.",
          "es": "Correcto. >90% de los casos tienen SAOS concomitante."
        }
      },
      {
        "text": {
          "pt": "Monitorização gasométrica nas primeiras horas é essencial para avaliar resposta à VNI.",
          "en": "ABG monitoring in the first hours is essential to assess NIV response.",
          "es": "La monitorización de GSA en las primeras horas es esencial para evaluar la respuesta a la VNI."
        },
        "explanation": {
          "pt": "Correto. Avaliação precoce previne falha terapêutica.",
          "en": "Correct. Early assessment prevents therapeutic failure.",
          "es": "Correcto. Evaluación temprana previene fallo terapéutico."
        }
      }
    ]
  },
  {
    "id": 546,
    "code": "ventilation-q546",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["niv"],
    "level": "very_hard",
    "correct": 1,
    "question": {
      "pt": "Homem de 76 anos, ex-tabagista, com DPOC GOLD IV, apresenta dispneia aguda e sonolência. Gasometria: pH 7,30, PaCO₂ 60 mmHg, HCO₃⁻ 30 mEq/L. Iniciada VNI com melhora parcial. Após 1h, piora da dispneia e crepitações subcutâneas no pescoço. Suspeita-se de pneumotórax oculto. Sobre o caso, assinale a alternativa INCORRETA:",
      "en": "A 76-year-old man, former smoker with GOLD IV COPD, presents with acute dyspnea and drowsiness. ABG: pH 7.30, PaCO₂ 60 mmHg, HCO₃⁻ 30 mEq/L. NIV is started with partial improvement. After 1 hour, dyspnea worsens and subcutaneous crepitus is found in the neck. A hidden pneumothorax is suspected. Select the INCORRECT statement:",
      "es": "Hombre de 76 años, exfumador, con EPOC GOLD IV, presenta disnea aguda y somnolencia. GSA: pH 7,30, PaCO₂ 60 mmHg, HCO₃⁻ 30 mEq/L. Se inicia VNI con mejoría parcial. Tras 1h, empeora la disnea y se detectan crepitaciones subcutáneas en el cuello. Se sospecha neumotórax oculto. Señale la opción INCORRECTA:"
    },
    "options": [
      {
        "text": {
          "pt": "Pacientes com DPOC avançado têm risco aumentado de barotrauma durante a VNI.",
          "en": "Patients with advanced COPD have increased risk of barotrauma during NIV.",
          "es": "Los pacientes con EPOC avanzado tienen mayor riesgo de barotrauma durante la VNI."
        },
        "explanation": {
          "pt": "Correto. Enfisema e bolhas aumentam vulnerabilidade.",
          "en": "Correct. Emphysema and bullae increase vulnerability.",
          "es": "Correcto. Enfisema y bullas aumentan vulnerabilidad."
        }
      },
      {
        "text": {
          "pt": "A VNI deve sempre ser mantida, mesmo após o aparecimento de sinais clínicos de pneumotórax oculto.",
          "en": "NIV should always be maintained, even after clinical signs of hidden pneumothorax appear.",
          "es": "La VNI debe mantenerse siempre, incluso tras aparición de signos clínicos de neumotórax oculto."
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA. VNI deve ser interrompida imediatamente sob suspeita de pneumotórax. 📚 Light RW. Pleural Diseases. 6th ed. 2013.",
          "en": "INCORRECT STATEMENT. NIV must be stopped immediately if pneumothorax is suspected. 📚 Light RW. Pleural Diseases. 6th ed. 2013.",
          "es": "AFIRMACIÓN INCORRECTA. VNI debe interrumpirse inmediatamente ante sospecha de neumotórax. 📚 Light RW. Pleural Diseases. 6ª ed. 2013."
        }
      },
      {
        "text": {
          "pt": "Pneumotórax oculto pode não ser evidente na radiografia de tórax inicial, exigindo TC em casos selecionados.",
          "en": "Hidden pneumothorax may not be evident on initial chest X-ray, requiring CT scan in selected cases.",
          "es": "El neumotórax oculto puede no ser evidente en la radiografía inicial, requiriendo TAC en casos seleccionados."
        },
        "explanation": {
          "pt": "Correto. Sensibilidade da radiografia é limitada.",
          "en": "Correct. Chest X-ray sensitivity is limited.",
          "es": "Correcto. La sensibilidad de la radiografía es limitada."
        }
      },
      {
        "text": {
          "pt": "A detecção precoce de enfisema subcutâneo ou instabilidade clínica deve levar à interrupção da VNI e avaliação urgente.",
          "en": "Early detection of subcutaneous emphysema or clinical instability should lead to NIV interruption and urgent evaluation.",
          "es": "La detección precoz de enfisema subcutáneo o inestabilidad clínica debe conducir a la interrupción de la VNI y evaluación urgente."
        },
        "explanation": {
          "pt": "Correto. Sinais de alarme para complicações graves.",
          "en": "Correct. Red flags for serious complications.",
          "es": "Correcto. Signos de alarma para complicaciones graves."
        }
      },
      {
        "text": {
          "pt": "Em casos de dúvida diagnóstica, o pneumotórax pode ser confirmado por ultrassonografia à beira-leito.",
          "en": "In diagnostic uncertainty, pneumothorax may be confirmed by bedside ultrasound.",
          "es": "En casos de duda diagnóstica, el neumotórax puede confirmarse com ecografía a pie de cama."
        },
        "explanation": {
          "pt": "Correto. Método rápido e confiável para diagnóstico.",
          "en": "Correct. Rapid and reliable diagnostic method.",
          "es": "Correcto. Método rápido y fiable para diagnóstico."
        }
      }
    ]
  },
  {
    "id": 547,
    "code": "ventilation-q547",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["recruitment"],
    "level": "easy",
    "correct": 3,
    "question": {
      "pt": "Qual das seguintes afirmativas descreve corretamente o conceito de recrutamento alveolar durante a ventilação mecânica?",
      "en": "Which of the following statements correctly describes the concept of alveolar recruitment during mechanical ventilation?",
      "es": "¿Cuál de las siguientes afirmaciones describe correctamente el concepto de reclutamiento alveolar durante la ventilación mecánica?"
    },
    "options": [
      {
        "text": {
          "pt": "Consiste na redução do volume corrente para evitar barotrauma.",
          "en": "It consists of reducing tidal volume to avoid barotrauma.",
          "es": "Consiste en reducir el volumen corriente para evitar barotrauma."
        },
        "explanation": {
          "pt": "Errado. Descreve ventilação protetora, não recrutamento.",
          "en": "Incorrect. Describes protective ventilation, not recruitment.",
          "es": "Incorrecto. Describe ventilación protectora, no reclutamiento."
        }
      },
      {
        "text": {
          "pt": "Refere-se ao uso de bloqueadores neuromusculares para sedação profunda.",
          "en": "Refers to the use of neuromuscular blockers for deep sedation.",
          "es": "Se refiere al uso de bloqueadores neuromusculares para sedación profunda."
        },
        "explanation": {
          "pt": "Errado. Relaciona-se ao manejo da SDRA grave, não ao recrutamento.",
          "en": "Incorrect. Related to ARDS management, not recruitment.",
          "es": "Incorrecto. Relacionado con manejo de SDRA, no reclutamiento."
        }
      },
      {
        "text": {
          "pt": "É a técnica de substituir o modo volume-controlado por pressão-suporte.",
          "en": "It is the technique of switching from volume control mode to pressure support.",
          "es": "Es la técnica de cambiar del modo volumen controlado a soporte de presión."
        },
        "explanation": {
          "pt": "Errado. Modos ventilatórios não definem recrutamento.",
          "en": "Incorrect. Ventilation modes don't define recruitment.",
          "es": "Incorrecto. Modos ventilatorios no definen reclutamiento."
        }
      },
      {
        "text": {
          "pt": "É o processo de reabertura de unidades alveolares previamente colapsadas por meio de manobras ventilatórias específicas.",
          "en": "It is the process of reopening previously collapsed alveolar units through specific ventilatory maneuvers.",
          "es": "Es el proceso de reapertura de unidades alveolares previamente colapsadas mediante maniobras ventilatorias específicas."
        },
        "explanation": {
          "pt": "RESPOSTA CORRETA. Definição precisa de recrutamento alveolar. 📚 Fan E et al. Am J Respir Crit Care Med. 2017;195(9):1253–63.",
          "en": "CORRECT ANSWER. Precise definition of alveolar recruitment. 📚 Fan E et al. Am J Respir Crit Care Med. 2017;195(9):1253–63.",
          "es": "RESPUESTA CORRECTA. Definición precisa de reclutamiento alveolar. 📚 Fan E et al. Am J Respir Crit Care Med. 2017;195(9):1253–63."
        }
      },
      {
        "text": {
          "pt": "Implica suspender a PEEP por alguns ciclos respiratórios.",
          "en": "It implies suspending PEEP for a few respiratory cycles.",
          "es": "Implica suspender la PEEP durante algunos ciclos respiratorios."
        },
        "explanation": {
          "pt": "Errado. Descreve desrecrutamento, não recrutamento.",
          "en": "Incorrect. Describes derecruitment, not recruitment.",
          "es": "Incorrecto. Describe desreclutamiento, no reclutamiento."
        }
      }
    ]
  },
  {
    "id": 548,
    "code": "ventilation-q548",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["recruitment"],
    "level": "moderate",
    "correct": 0,
    "question": {
      "pt": "Paciente de 63 anos, submetido a cirurgia abdominal superior, evolui no 1º dia pós-operatório com dessaturação e ausculta reduzida na base pulmonar direita. A radiografia mostra opacidade sugestiva de atelectasia. Qual das condutas abaixo é mais apropriada para promover recrutamento alveolar nesse cenário?",
      "en": "A 63-year-old patient, post upper abdominal surgery, presents on the first postoperative day with desaturation and decreased breath sounds in the right lung base. Chest X-ray shows opacity suggestive of atelectasis. Which of the following is the most appropriate strategy to promote alveolar recruitment in this scenario?",
      "es": "Paciente de 63 años, tras cirugía abdominal superior, presenta en el primer día postoperatorio desaturación y ruidos respiratorios disminuidos en la base pulmonar derecha. La radiografía muestra opacidad sugestiva de atelectasia. ¿Cuál de las siguientes es la estrategia más apropiada para promover reclutamiento alveolar en este escenario?"
    },
    "options": [
      {
        "text": {
          "pt": "Aplicar manobra de recrutamento com aumento gradual de PEEP sob vigilância hemodinâmica.",
          "en": "Apply recruitment maneuver with gradual PEEP increase under hemodynamic monitoring.",
          "es": "Aplicar maniobra de reclutamiento con aumento gradual de PEEP bajo monitorización hemodinámica."
        },
        "explanation": {
          "pt": "RESPOSTA CORRETA. Estratégia efetiva para reverter atelectasia pós-operatória. 📚 Duggan M, Kavanagh BP. Anesthesiology. 2005;102(4):838-854.",
          "en": "CORRECT ANSWER. Effective strategy to reverse postoperative atelectasis. 📚 Duggan M, Kavanagh BP. Anesthesiology. 2005;102(4):838-854.",
          "es": "RESPUESTA CORRECTA. Estrategia efectiva para revertir atelectasia postoperatoria. 📚 Duggan M, Kavanagh BP. Anesthesiology. 2005;102(4):838-854."
        }
      },
      {
        "text": {
          "pt": "Suspender ventilação e iniciar oxigenoterapia por máscara de Venturi.",
          "en": "Discontinue ventilation and start oxygen therapy via Venturi mask.",
          "es": "Suspender la ventilación e iniciar oxigenoterapia con máscara de Venturi."
        },
        "explanation": {
          "pt": "Pode agravar atelectasia ao reduzir pressão positiva.",
          "en": "May worsen atelectasis by reducing positive pressure.",
          "es": "Puede agravar atelectasia al reducir presión positiva."
        }
      },
      {
        "text": {
          "pt": "Utilizar ventilação espontânea com FiO₂ de 100% por 6 horas.",
          "en": "Use spontaneous ventilation with 100% FiO₂ for 6 hours.",
          "es": "Utilizar ventilación espontánea con FiO₂ al 100% durante 6 horas."
        },
        "explanation": {
          "pt": "Oxigenação isolada não reverte colapso alveolar.",
          "en": "Oxygenation alone doesn't reverse alveolar collapse.",
          "es": "Oxigenación aislada no revierte colapso alveolar."
        }
      },
      {
        "text": {
          "pt": "Reduzir a PEEP para valores entre 2 e 3 cmH₂O.",
          "en": "Reduce PEEP to values between 2 and 3 cmH₂O.",
          "es": "Reducir la PEEP a valores entre 2 y 3 cmH₂O."
        },
        "explanation": {
          "pt": "Piora o recrutamento ao diminuir pressão de distensão.",
          "en": "Worsens recruitment by reducing distending pressure.",
          "es": "Empeora el reclutamiento al disminuir presión de distensión."
        }
      },
      {
        "text": {
          "pt": "Evitar qualquer intervenção, pois a atelectasia é autolimitada no pós-operatório.",
          "en": "Avoid any intervention as atelectasis is self-limiting postoperatively.",
          "es": "Evitar cualquier intervención, ya que la atelectasia es autolimitada en el postoperatorio."
        },
        "explanation": {
          "pt": "Atelectasia não tratada pode evoluir para pneumonia.",
          "en": "Untreated atelectasis may progress to pneumonia.",
          "es": "La atelectasia no tratada puede evolucionar a neumonía."
        }
      }
    ]
  },
  {
    "id": 549,
    "code": "ventilation-q549",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["recruitment", "ards"],
    "level": "very_hard",
    "correct": 1,
    "question": {
      "pt": "Paciente com 38 anos, previamente hígido, internado por pneumonia grave com necessidade de ventilação mecânica. Após 48h, evolui com PaO₂/FiO₂ de 90 sob PEEP de 15 cmH₂O e pressão de platô de 28 cmH₂O. TC mostra infiltrados difusos. Qual das alternativas a seguir é INCORRETA quanto ao manejo com manobras de recrutamento alveolar neste caso de SDRA grave?",
      "en": "A 38-year-old previously healthy patient is admitted with severe pneumonia requiring mechanical ventilation. After 48 hours, PaO₂/FiO₂ is 90 under PEEP 15 cmH₂O and plateau pressure of 28 cmH₂O. CT shows diffuse infiltrates. Which of the following statements is INCORRECT regarding alveolar recruitment maneuvers in this severe ARDS case?",
      "es": "Paciente de 38 años, previamente sano, ingresado por neumonía grave con necesidad de ventilación mecánica. Tras 48 horas, PaO₂/FiO₂ de 90 con PEEP de 15 cmH₂O y presión plateau de 28 cmH₂O. TC muestra infiltrados difusos. ¿Cuál de las siguientes afirmaciones es INCORRECTA respecto al uso de maniobras de reclutamiento en este caso de SDRA grave?"
    },
    "options": [
      {
        "text": {
          "pt": "Manobras de recrutamento podem ser benéficas, mas devem ser individualizadas e monitoradas cuidadosamente.",
          "en": "Recruitment maneuvers can be beneficial but must be individualized and carefully monitored.",
          "es": "Las maniobras de reclutamiento pueden ser beneficiosas, pero deben individualizarse y monitorizarse cuidadosamente."
        },
        "explanation": {
          "pt": "Correto. Princípio fundamental do manejo de SDRA.",
          "en": "Correct. Fundamental principle of ARDS management.",
          "es": "Correcto. Principio fundamental del manejo de SDRA."
        }
      },
      {
        "text": {
          "pt": "Deve-se utilizar PEEP ≥ 20 cmH₂O e pressão de platô acima de 40 cmH₂O como rotina em todos os casos.",
          "en": "PEEP ≥ 20 cmH₂O and plateau pressure above 40 cmH₂O should routinely be used in all cases.",
          "es": "Se debe utilizar PEEP ≥ 20 cmH₂O y presión plateau por encima de 40 cmH₂O de forma rutinaria en todos los casos."
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA. Pressões elevadas não são padrão universal; risco de barotrauma. 📚 Fan E et al. Am J Respir Crit Care Med. 2017;195(9):1253–63.",
          "en": "INCORRECT STATEMENT. High pressures aren't universal; risk of barotrauma. 📚 Fan E et al. Am J Respir Crit Care Med. 2017;195(9):1253–63.",
          "es": "AFIRMACIÓN INCORRECTA. Presiones elevadas no son estándar universal; riesgo de barotrauma. 📚 Fan E et al. Am J Respir Crit Care Med. 2017;195(9):1253–63."
        }
      },
      {
        "text": {
          "pt": "Há risco de barotrauma com uso agressivo de pressões elevadas.",
          "en": "There is a risk of barotrauma with aggressive use of high pressures.",
          "es": "Existe riesgo de barotrauma con el uso agresivo de presiones elevadas."
        },
        "explanation": {
          "pt": "Correto. Complicação bem documentada em SDRA.",
          "en": "Correct. Well-documented complication in ARDS.",
          "es": "Correcto. Complicación bien documentada en SDRA."
        }
      },
      {
        "text": {
          "pt": "Pacientes com complacência pulmonar muito baixa podem responder de forma limitada.",
          "en": "Patients with very low pulmonary compliance may have limited response.",
          "es": "Los pacientes con compliance pulmonar muy baja pueden tener una respuesta limitada."
        },
        "explanation": {
          "pt": "Correto. Fatores mecânicos influenciam resposta ao recrutamento.",
          "en": "Correct. Mechanical factors influence recruitment response.",
          "es": "Correcto. Factores mecánicos influyen en respuesta al reclutamiento."
        }
      },
      {
        "text": {
          "pt": "A resposta ao recrutamento deve ser avaliada por melhora da oxigenação e estabilidade hemodinâmica.",
          "en": "Response to recruitment should be assessed by improvement in oxygenation and hemodynamic stability.",
          "es": "La respuesta al reclutamiento debe evaluarse por mejoría de la oxigenación y estabilidad hemodinámica."
        },
        "explanation": {
          "pt": "Correto. Parâmetros-chave para avaliação de eficácia.",
          "en": "Correct. Key parameters for efficacy assessment.",
          "es": "Correcto. Parámetros clave para evaluación de eficacia."
        }
      }
    ]
  },
  {
    "id": 550,
    "code": "ventilation-q550",
    "areas": ["pneumo", "pneumo+icu", "icu", "vent", "medicine"],
    "topic": ["recruitment", "asynchrony", "pneumonia", "niv"],
    "level": "very_hard",
    "correct": 4,
    "question": {
      "pt": "Paciente de 64 anos, hipertenso e diabético, é internado por pneumonia grave e colocado inicialmente em VNI. Após 6 horas, apresenta piora da gasometria (PaO₂/FiO₂ < 120) e aumento do trabalho respiratório, sendo intubado. Na ventilação invasiva, evolui com assincronia de esforço (trigger ineficaz), assincronia de ciclagem (ciclagem precoce) e assincronia de fluxo (demanda alta não atendida). Apesar do ajuste dos parâmetros, continua hipoxêmico com colapso alveolar em bases pulmonares à TC. Considera-se manobra de recrutamento, mas o paciente encontra-se em uso de noradrenalina em dose moderada. Qual das alternativas é INCORRETA nesse contexto?",
      "en": "A 64-year-old hypertensive and diabetic patient is admitted with severe pneumonia and initially placed on NIV. After 6 hours, arterial blood gas worsens (PaO₂/FiO₂ < 120) with increased respiratory effort, leading to intubation. Under invasive ventilation, the patient presents effort asynchrony (ineffective trigger), cycling asynchrony (premature cycling), and flow asynchrony (high unmet demand). Despite parameter adjustments, hypoxemia persists with alveolar collapse seen in basal lungs on CT. Recruitment maneuver is considered, but the patient is on moderate-dose norepinephrine. Which of the following is INCORRECT in this context?",
      "es": "Paciente de 64 años, hipertenso y diabético, ingresa por neumonía grave y se inicia con VNI. Tras 6 horas, empeora la gasometría (PaO₂/FiO₂ < 120) con aumento del trabajo respiratorio, siendo intubado. En ventilación invasiva, presenta asincronía de esfuerzo (disparo ineficaz), asincronía de ciclaje (ciclaje precoz) y asincronía de flujo (alta demanda no atendida). A pesar de ajustes ventilatorios, persiste hipoxemia con colapso alveolar en bases pulmonares según TC. Se considera maniobra de reclutamiento, pero el paciente recibe noradrenalina en dosis moderada. ¿Cuál de las siguientes afirmaciones es INCORRECTA en este contexto?"
    },
    "options": [
      {
        "text": {
          "pt": "A presença de assincronias pode contribuir para a hipoxemia persistente e deve ser corrigida antes de considerar recrutamento.",
          "en": "Presence of asynchronies may contribute to persistent hypoxemia and should be corrected before considering recruitment.",
          "es": "La presencia de asincronías puede contribuir a la hipoxemia persistente y debe corregirse antes de considerar reclutamiento."
        },
        "explanation": {
          "pt": "Correto. Prioridade para otimizar ventilação.",
          "en": "Correct. Priority to optimize ventilation.",
          "es": "Correcto. Prioridad para optimizar ventilación."
        }
      },
      {
        "text": {
          "pt": "Recrutamento alveolar pode agravar a instabilidade hemodinâmica, especialmente com PEEP elevada.",
          "en": "Alveolar recruitment may worsen hemodynamic instability, especially with high PEEP.",
          "es": "El reclutamiento alveolar puede agravar la inestabilidad hemodinámica, especialmente con PEEP elevada."
        },
        "explanation": {
          "pt": "Correto. Risco em pacientes sob vasopressores.",
          "en": "Correct. Risk in patients on vasopressors.",
          "es": "Correcto. Riesgo en pacientes con vasopresores."
        }
      },
      {
        "text": {
          "pt": "A utilização de modos assistidos pode atenuar parte das assincronias, se bem ajustados ao esforço do paciente.",
          "en": "Use of assisted modes may reduce asynchronies if well matched to the patient’s effort.",
          "es": "El uso de modos asistidos puede reducir las asincronías si se ajustan bien al esfuerzo del paciente."
        },
        "explanation": {
          "pt": "Correto. Estratégia válida para sincronização.",
          "en": "Correct. Valid strategy for synchronization.",
          "es": "Correcto. Estrategia válida para sincronización."
        }
      },
      {
        "text": {
          "pt": "A monitorização contínua da complacência e da pressão de platô é fundamental para avaliar resposta ao recrutamento.",
          "en": "Continuous monitoring of compliance and plateau pressure is essential to assess recruitment response.",
          "es": "El monitoreo continuo de la compliance y la presión plateau es fundamental para evaluar la respuesta al reclutamiento."
        },
        "explanation": {
          "pt": "Correto. Parâmetros essenciais para segurança.",
          "en": "Correct. Essential parameters for safety.",
          "es": "Correcto. Parámetros esenciales para seguridad."
        }
      },
      {
        "text": {
          "pt": "Manobra de recrutamento deve ser realizada imediatamente, mesmo sem controle das assincronias ou estabilidade hemodinâmica.",
          "en": "Recruitment maneuver should be performed immediately, even without addressing asynchronies or hemodynamic stability.",
          "es": "La maniobra de reclutamiento debe realizarse de inmediato, incluso sin corregir las asincronías o lograr estabilidad hemodinámica."
        },
        "explanation": {
          "pt": "RESPOSTA INCORRETA. Recrutamento exige estabilização prévia. 📚 Thille AW et al. Intensive Care Med. 2006;32:1515–1522.",
          "en": "INCORRECT STATEMENT. Recruitment requires prior stabilization. 📚 Thille AW et al. Intensive Care Med. 2006;32:1515–1522.",
          "es": "AFIRMACIÓN INCORRECTA. Reclutamiento exige estabilización previa. 📚 Thille AW et al. Intensive Care Med. 2006;32:1515–1522."
        }
      }
    ]
  },
]
];
questionBank.addBank(bancoVentilation);