const bancoPneumoFacil = [ 

  {
    id: 601,
    code: "PneumoFacil-q601",
    area: ["pneumo"],
    topic: ["oxygen_therapy"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual dos seguintes dispositivos fornece oxigênio com a menor fração inspirada de oxigênio (FiO₂) em condições padrão?",
      en: "Which of the following devices delivers oxygen with the lowest inspired oxygen fraction (FiO₂) under standard conditions?",
      es: "¿Cuál de los siguientes dispositivos administra oxígeno con la fracción inspirada de oxígeno (FiO₂) más baja en condiciones estándar?"
    },
    options: [
      {
        text: {
          pt: "Máscara com reservatório",
          en: "Reservoir mask",
          es: "Mascarilla con reservorio"
        },
        explanation: {
          pt: "A máscara com reservatório fornece altas FiO₂, geralmente superiores a 60%.",
          en: "The reservoir mask delivers high FiO₂, typically over 60%.",
          es: "La mascarilla con reservorio proporciona altas FiO₂, normalmente superiores al 60%."
        }
      },
      {
        text: {
          pt: "Cânula nasal",
          en: "Nasal cannula",
          es: "Cánula nasal"
        },
        explanation: {
          pt: "A cânula nasal fornece as menores FiO₂s entre os dispositivos listados, geralmente entre 24% e 40%, dependendo do fluxo e do padrão respiratório do paciente. É adequada para oxigenioterapia de baixo fluxo.",
          en: "The nasal cannula delivers the lowest FiO₂ among the listed devices, typically between 24% and 40%, depending on flow and patient's respiratory pattern. It is suitable for low-flow oxygen therapy.",
          es: "La cánula nasal proporciona la FiO₂ más baja entre los dispositivos mencionados, generalmente entre 24% y 40%, según el flujo y el patrón respiratorio del paciente. Es adecuada para oxigenoterapia de bajo flujo."
        }
      },
      {
        text: {
          pt: "Venturi com 60%",
          en: "Venturi mask with 60%",
          es: "Mascarilla de Venturi con 60%"
        },
        explanation: {
          pt: "Máscaras de Venturi fornecem FiO₂s controladas, mas 60% ainda é mais alto que a cânula nasal.",
          en: "Venturi masks provide controlled FiO₂s, but 60% is still higher than the nasal cannula.",
          es: "Las mascarillas de Venturi ofrecen FiO₂s controladas, pero 60% sigue siendo más alto que la cánula nasal."
        }
      },
      {
        text: {
          pt: "CPAP com FiO₂ de 1.0",
          en: "CPAP with FiO₂ of 1.0",
          es: "CPAP con FiO₂ de 1.0"
        },
        explanation: {
          pt: "CPAP com FiO₂ de 1.0 oferece oxigenação máxima, não mínima.",
          en: "CPAP with FiO₂ of 1.0 delivers maximum oxygenation, not minimal.",
          es: "El CPAP con FiO₂ de 1.0 proporciona oxigenación máxima, no mínima."
        }
      },
      {
        text: {
          pt: "Máscara não reinalante",
          en: "Non-rebreather mask",
          es: "Mascarilla no reinhalante"
        },
        explanation: {
          pt: "A máscara não reinalante pode fornecer FiO₂ próximas de 100%.",
          en: "Non-rebreather masks can deliver FiO₂ close to 100%.",
          es: "Las mascarillas no reinhalantes pueden proporcionar FiO₂ cercanas al 100%."
        }
      }
    ]
  },
  {
    id: 602,
    code: "pneumo01-q602",
    area: ["pneumo"],
    topic: ["thoracentesis"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual é o local anatômico mais seguro para realização da punção pleural em um paciente sentado?",
      en: "What is the safest anatomical site for thoracentesis in a seated patient?",
      es: "¿Cuál es el sitio anatómico más seguro para una toracocentesis en un paciente sentado?"
    },
    options: [
      {
        text: {
          pt: "Acima da borda superior da costela inferior, na linha escapular média",
          en: "Above the upper border of the lower rib, at the midscapular line",
          es: "Por encima del borde superior de la costilla inferior, en la línea escapular media"
        },
        explanation: {
          pt: "Evita lesão do feixe vásculo-nervoso intercostal. Local preferido com paciente sentado.",
          en: "Avoids injury to the intercostal neurovascular bundle. Preferred site in seated patients.",
          es: "Evita lesión del paquete vásculonervioso intercostal. Sitio preferido en pacientes sentados."
        }
      },
      {
        text: {
          pt: "Abaixo da borda inferior da costela superior, na linha axilar anterior",
          en: "Below the lower edge of the upper rib, at the anterior axillary line",
          es: "Por debajo del borde inferior de la costilla superior, en la línea axilar anterior"
        },
        explanation: {
          pt: "Essa localização aumenta o risco de lesão do feixe vásculo-nervoso.",
          en: "This location increases risk of neurovascular bundle injury.",
          es: "Esta localización aumenta el riesgo de lesión del paquete vásculonervioso."
        }
      },
      {
        text: {
          pt: "Sobre a costela, na linha hemiclavicular",
          en: "Directly on the rib, at the midclavicular line",
          es: "Directamente sobre la costilla, en la línea hemiclavicular"
        },
        explanation: {
          pt: "Inserções sobre a costela são perigosas devido ao trajeto do feixe vásculo-nervoso.",
          en: "Inserting on the rib is dangerous due to neurovascular bundle location.",
          es: "Insertar sobre la costilla es peligroso por la ubicación del paquete vásculonervioso."
        }
      },
      {
        text: {
          pt: "Na borda inferior da escápula, com o paciente em decúbito",
          en: "At the lower border of the scapula, with the patient supine",
          es: "En el borde inferior de la escápula, con el paciente en decúbito"
        },
        explanation: {
          pt: "Essa posição não é adequada para drenagem por gravidade em pacientes sentados.",
          en: "This position is not ideal for gravity-assisted drainage in seated patients.",
          es: "Esta posición no es ideal para el drenaje asistido por gravedad en pacientes sentados."
        }
      },
      {
        text: {
          pt: "Entre o 4º e 5º espaço intercostal na linha média clavicular",
          en: "Between the 4th and 5th intercostal space in the midclavicular line",
          es: "Entre el 4º y 5º espacio intercostal en la línea medio clavicular"
        },
        explanation: {
          pt: "Este local é geralmente usado para toracostomia, não punção pleural.",
          en: "This site is commonly used for thoracostomy, not thoracentesis.",
          es: "Este sitio se usa comúnmente para toracostomía, no toracocentesis."
        }
      }
    ]
  },
 {
  "id": 603,
  "code": "pneumo01-q603",
  "area": ["pneumo"],
  "topic": ["bronchoscopy"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Qual das seguintes situações representa uma indicação diagnóstica clássica para broncoscopia flexível?",
    "en": "Which of the following is a classic diagnostic indication for flexible bronchoscopy?",
    "es": "¿Cuál de las siguientes es una indicación diagnóstica clásica para broncoscopia flexible?"
  },
  "options": [
    {
      "text": {
        "pt": "Remoção de corpo estranho em via aérea superior",
        "en": "Removal of foreign body in the upper airway",
        "es": "Extracción de cuerpo extraño en la vía aérea superior"
      },
      "explanation": {
        "pt": "Essa é uma indicação terapêutica, geralmente com broncoscopia rígida.",
        "en": "This is a therapeutic indication, usually with rigid bronchoscopy.",
        "es": "Es una indicación terapéutica, generalmente con broncoscopia rígida."
      }
    },
    {
      "text": {
        "pt": "Ventilação mecânica prolongada com hipoxemia",
        "en": "Prolonged mechanical ventilation with hypoxemia",
        "es": "Ventilación mecánica prolongada con hipoxemia"
      },
      "explanation": {
        "pt": "Pode ser uma indicação relativa, mas não é uma indicação diagnóstica clássica.",
        "en": "It may be a relative indication but is not a classic diagnostic one.",
        "es": "Puede ser una indicación relativa, pero no es una indicación diagnóstica clásica."
      }
    },
    {
      "text": {
        "pt": "Hemoptise de causa indeterminada",
        "en": "Hemoptysis of undetermined cause",
        "es": "Hemoptisis de causa no determinada"
      },
      "explanation": {
        "pt": "Hemoptise sem causa clara é uma indicação comum para broncoscopia diagnóstica.",
        "en": "Hemoptysis of unclear cause is a common diagnostic indication for bronchoscopy.",
        "es": "La hemoptisis sin causa clara es una indicación común para broncoscopia diagnóstica."
      }
    },
    {
      "text": {
        "pt": "Colocação de tubo traqueal por via nasal",
        "en": "Placement of tracheal tube via nasal route",
        "es": "Colocación de tubo traqueal por vía nasal"
      },
      "explanation": {
        "pt": "Esse é um procedimento terapêutico com suporte visual, não diagnóstico.",
        "en": "This is a therapeutic procedure with visual guidance, not diagnostic.",
        "es": "Es un procedimiento terapéutico con guía visual, no diagnóstico."
      }
    },
    {
      "text": {
        "pt": "Parada respiratória em ambiente extra-hospitalar",
        "en": "Respiratory arrest in out-of-hospital setting",
        "es": "Paro respiratorio en entorno extrahospitalario"
      },
      "explanation": {
        "pt": "Não é uma situação em que a broncoscopia diagnóstica seja indicada.",
        "en": "Bronchoscopy is not indicated as a diagnostic tool in this scenario.",
        "es": "La broncoscopia no está indicada como herramienta diagnóstica en este caso."
      }
    }
  ]
},
{
  "id": 604,
  "code": "pneumo01-q604",
  "area": ["pneumo"],
  "topic": ["respiratory_physiology"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "O gradiente alveolo-arterial de oxigênio (A–a) aumentado está mais comumente associado a qual dos seguintes mecanismos de hipoxemia?",
    "en": "An increased alveolar-arterial (A–a) oxygen gradient is most commonly associated with which of the following mechanisms of hypoxemia?",
    "es": "¿Un gradiente alveolo-arterial (A–a) de oxígeno aumentado se asocia más comúnmente a cuál de los siguientes mecanismos de hipoxemia?"
  },
  "options": [
    {
      "text": {
        "pt": "Hipoventilação pura",
        "en": "Pure hypoventilation",
        "es": "Hipoventilación pura"
      },
      "explanation": {
        "pt": "A hipoventilação pura geralmente mantém um gradiente A–a normal.",
        "en": "Pure hypoventilation usually presents with a normal A–a gradient.",
        "es": "La hipoventilación pura suele tener un gradiente A–a normal."
      }
    },
    {
      "text": {
        "pt": "Altitude elevada",
        "en": "High altitude",
        "es": "Altitud elevada"
      },
      "explanation": {
        "pt": "Em altitudes elevadas, a hipoxemia decorre de menor pressão atmosférica, mas o gradiente A–a geralmente se mantém normal.",
        "en": "At high altitude, hypoxemia is due to low atmospheric pressure, with a normal A–a gradient.",
        "es": "A gran altitud, la hipoxemia se debe a menor presión atmosférica y el gradiente A–a suele ser normal."
      }
    },
    {
      "text": {
        "pt": "Hipercapnia aguda",
        "en": "Acute hypercapnia",
        "es": "Hipercapnia aguda"
      },
      "explanation": {
        "pt": "A hipercapnia por si só não altera significativamente o gradiente A–a.",
        "en": "Hypercapnia alone does not significantly affect the A–a gradient.",
        "es": "La hipercapnia por sí sola no afecta significativamente el gradiente A–a."
      }
    },
    {
      "text": {
        "pt": "Shunt intrapulmonar",
        "en": "Intrapulmonary shunt",
        "es": "Shunt intrapulmonar"
      },
      "explanation": {
        "pt": "O shunt intrapulmonar impede a oxigenação de parte do sangue, gerando gradiente A–a aumentado.",
        "en": "Intrapulmonary shunt prevents oxygenation of part of the blood, leading to increased A–a gradient.",
        "es": "El shunt intrapulmonar impide la oxigenación de parte de la sangre, generando un gradiente A–a aumentado."
      }
    },
    {
      "text": {
        "pt": "Ventilação voluntária reduzida",
        "en": "Reduced voluntary ventilation",
        "es": "Ventilación voluntaria reducida"
      },
      "explanation": {
        "pt": "Leva à hipoventilação, mas com gradiente A–a geralmente preservado.",
        "en": "Causes hypoventilation, but A–a gradient is usually preserved.",
        "es": "Provoca hipoventilación, pero el gradiente A–a suele estar preservado."
      }
    }
  ]
},
{
  "id": 605,
  "code": "pneumo01-q605",
  "area": ["pneumo"],
  "topic": ["respiratory_physiology"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual é o volume corrente médio esperado em um adulto saudável em respiração espontânea?",
    "en": "What is the average tidal volume expected in a healthy adult during spontaneous breathing?",
    "es": "¿Cuál es el volumen corriente promedio esperado en un adulto sano durante la respiración espontánea?"
  },
  "options": [
    {
      "text": {
        "pt": "100 mL",
        "en": "100 mL",
        "es": "100 mL"
      },
      "explanation": {
        "pt": "Muito abaixo do valor fisiológico esperado.",
        "en": "Far below the expected physiological value.",
        "es": "Muy por debajo del valor fisiológico esperado."
      }
    },
    {
      "text": {
        "pt": "500 mL",
        "en": "500 mL",
        "es": "500 mL"
      },
      "explanation": {
        "pt": "O volume corrente médio em adultos é cerca de 6–8 mL/kg, o que equivale a cerca de 500 mL para um adulto médio.",
        "en": "Average tidal volume in adults is around 6–8 mL/kg, which is about 500 mL for an average adult.",
        "es": "El volumen corriente promedio en adultos es de 6–8 mL/kg, es decir, unos 500 mL en un adulto promedio."
      }
    },
    {
      "text": {
        "pt": "1000 mL",
        "en": "1000 mL",
        "es": "1000 mL"
      },
      "explanation": {
        "pt": "Acima do volume corrente normal, corresponde mais a uma inspiração forçada.",
        "en": "Above the normal tidal volume, more like a forced inspiration.",
        "es": "Por encima del volumen corriente normal, más parecido a una inspiración forzada."
      }
    },
    {
      "text": {
        "pt": "2000 mL",
        "en": "2000 mL",
        "es": "2000 mL"
      },
      "explanation": {
        "pt": "Volume excessivamente alto para ventilação fisiológica normal.",
        "en": "Excessively high volume for normal physiological ventilation.",
        "es": "Volumen excesivamente alto para una ventilación fisiológica normal."
      }
    },
    {
      "text": {
        "pt": "50 mL",
        "en": "50 mL",
        "es": "50 mL"
      },
      "explanation": {
        "pt": "Muito inferior ao valor fisiológico. Equivale a espaço morto anatômico.",
        "en": "Far below physiological values. Close to anatomical dead space.",
        "es": "Muy por debajo del valor fisiológico. Equivale al espacio muerto anatómico."
      }
    }
  ]
},
{
  "id": 606,
  "code": "pneumo01-q606",
  "area": ["pneumo"],
  "topic": ["bronchoscopy"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Qual é a complicação mais comum da broncoscopia flexível com sedação leve?",
    "en": "What is the most common complication of flexible bronchoscopy with light sedation?",
    "es": "¿Cuál es la complicación más común de la broncoscopia flexible con sedación leve?"
  },
  "options": [
    {
      "text": {
        "pt": "Tosse",
        "en": "Cough",
        "es": "Tos"
      },
      "explanation": {
        "pt": "A tosse é a complicação mais comum, geralmente autolimitada e manejável com sedação adequada.",
        "en": "Cough is the most common complication, usually self-limited and manageable with sedation.",
        "es": "La tos es la complicación más común, normalmente autolimitada y manejable con sedación adecuada."
      }
    },
    {
      "text": {
        "pt": "Pneumotórax",
        "en": "Pneumothorax",
        "es": "Neumotórax"
      },
      "explanation": {
        "pt": "Raro em broncoscopia diagnóstica simples. Mais comum após biópsias transbrônquicas.",
        "en": "Rare in simple diagnostic bronchoscopy. More common after transbronchial biopsies.",
        "es": "Raro en broncoscopia diagnóstica simple. Más común tras biopsias transbronquiales."
      }
    },
    {
      "text": {
        "pt": "Infecção pulmonar",
        "en": "Pulmonary infection",
        "es": "Infección pulmonar"
      },
      "explanation": {
        "pt": "Complicação possível, mas muito rara em exames com técnica asséptica.",
        "en": "Possible complication, but very rare with proper aseptic technique.",
        "es": "Complicación posible, pero muy rara con técnica aséptica adecuada."
      }
    },
    {
      "text": {
        "pt": "Broncoespasmo grave",
        "en": "Severe bronchospasm",
        "es": "Broncoespasmo grave"
      },
      "explanation": {
        "pt": "Evento raro, mais comum em pacientes asmáticos sem pré-medicação adequada.",
        "en": "Rare event, more likely in asthmatic patients without adequate premedication.",
        "es": "Evento raro, más probable en pacientes asmáticos sin premedicación adecuada."
      }
    },
    {
      "text": {
        "pt": "Sangramento maciço",
        "en": "Massive bleeding",
        "es": "Sangrado masivo"
      },
      "explanation": {
        "pt": "Complicação temida, mas muito rara em broncoscopia diagnóstica não invasiva.",
        "en": "A feared complication, but very rare in non-invasive diagnostic bronchoscopy.",
        "es": "Una complicación temida, pero muy rara en broncoscopia diagnóstica no invasiva."
      }
    }
  ]
},
{
  "id": 607,
  "code": "pneumo01-q607",
  "area": ["pneumo"],
  "topic": ["lung_ultrasound"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "No ultrassom pulmonar, o achado do 'sinal do deslizamento pleural' indica:",
    "en": "In lung ultrasound, the presence of 'lung sliding' indicates:",
    "es": "En la ecografía pulmonar, la presencia del 'deslizamiento pleural' indica:"
  },
  "options": [
    {
      "text": {
        "pt": "Ausência de pneumotórax naquele ponto",
        "en": "Absence of pneumothorax at that point",
        "es": "Ausencia de neumotórax en ese punto"
      },
      "explanation": {
        "pt": "O sinal do deslizamento pleural reflete o movimento normal entre as pleuras, o que exclui pneumotórax naquele local.",
        "en": "Lung sliding reflects normal pleural movement, ruling out pneumothorax at that site.",
        "es": "El deslizamiento pleural refleja el movimiento pleural normal, lo que descarta neumotórax en ese punto."
      }
    },
    {
      "text": {
        "pt": "Presença de consolidação pulmonar",
        "en": "Presence of lung consolidation",
        "es": "Presencia de consolidación pulmonar"
      },
      "explanation": {
        "pt": "A consolidação pode reduzir ou abolir o deslizamento, mas não o confirma.",
        "en": "Consolidation may reduce sliding, but does not confirm it.",
        "es": "La consolidación puede reducir el deslizamiento, pero no lo confirma."
      }
    },
    {
      "text": {
        "pt": "Derrame pleural volumoso",
        "en": "Large pleural effusion",
        "es": "Derrame pleural voluminoso"
      },
      "explanation": {
        "pt": "Derrames volumosos costumam abolir o sinal do deslizamento.",
        "en": "Large effusions usually abolish lung sliding.",
        "es": "Los derrames grandes suelen abolir el deslizamiento pleural."
      }
    },
    {
      "text": {
        "pt": "Edema pulmonar difuso",
        "en": "Diffuse pulmonary edema",
        "es": "Edema pulmonar difuso"
      },
      "explanation": {
        "pt": "O edema pode coexistir com o deslizamento, mas não o determina diretamente.",
        "en": "Edema may coexist with sliding but does not directly determine it.",
        "es": "El edema puede coexistir con el deslizamiento, pero no lo determina directamente."
      }
    },
    {
      "text": {
        "pt": "Atelectasia lobar completa",
        "en": "Complete lobar atelectasis",
        "es": "Atelectasia lobar completa"
      },
      "explanation": {
        "pt": "Pode haver redução ou ausência do deslizamento pleural na atelectasia, não presença.",
        "en": "Sliding may be reduced or absent in atelectasis, not present.",
        "es": "El deslizamiento suele estar reducido o ausente en la atelectasia."
      }
    }
  ]
},
{
  "id": 608,
  "code": "pneumo01-q608",
  "area": ["pneumo"],
  "topic": ["lung_ultrasound"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "A presença de múltiplas linhas B bilaterais e difusas no ultrassom pulmonar é sugestiva de:",
    "en": "The presence of multiple bilateral and diffuse B-lines on lung ultrasound suggests:",
    "es": "La presencia de múltiples líneas B bilaterales y difusas en la ecografía pulmonar sugiere:"
  },
  "options": [
    {
      "text": {
        "pt": "Pneumotórax",
        "en": "Pneumothorax",
        "es": "Neumotórax"
      },
      "explanation": {
        "pt": "No pneumotórax, não há linhas B, e sim ausência de deslizamento e presença do sinal do ponto pulmonar.",
        "en": "In pneumothorax, B-lines are absent. Lung sliding and lung point are key signs.",
        "es": "En el neumotórax no hay líneas B, sino ausencia de deslizamiento y presencia del punto pulmonar."
      }
    },
    {
      "text": {
        "pt": "Derrame pleural simples",
        "en": "Simple pleural effusion",
        "es": "Derrame pleural simple"
      },
      "explanation": {
        "pt": "Derrames pleurais aparecem como áreas anecoicas entre as pleuras, não com linhas B.",
        "en": "Pleural effusions appear as anechoic areas, not as B-lines.",
        "es": "Los derrames pleurales se ven como áreas anecoicas, no con líneas B."
      }
    },
    {
      "text": {
        "pt": "Consolidação pulmonar basal",
        "en": "Basal lung consolidation",
        "es": "Consolidación pulmonar basal"
      },
      "explanation": {
        "pt": "Consolidações geralmente apresentam hepatização e broncograma aéreo, não linhas B difusas.",
        "en": "Consolidations usually show tissue-like pattern and air bronchograms, not diffuse B-lines.",
        "es": "Las consolidaciones suelen mostrar patrón hepático y broncograma aéreo, no líneas B difusas."
      }
    },
    {
      "text": {
        "pt": "Edema pulmonar intersticial",
        "en": "Interstitial pulmonary edema",
        "es": "Edema pulmonar intersticial"
      },
      "explanation": {
        "pt": "Linhas B difusas e bilaterais indicam aumento de fluido intersticial, como no edema pulmonar.",
        "en": "Diffuse bilateral B-lines indicate increased interstitial fluid, as in pulmonary edema.",
        "es": "Las líneas B bilaterales y difusas indican aumento de fluido intersticial, como en edema pulmonar."
      }
    },
    {
      "text": {
        "pt": "Fibrose pulmonar crônica",
        "en": "Chronic pulmonary fibrosis",
        "es": "Fibrosis pulmonar crónica"
      },
      "explanation": {
        "pt": "A fibrose pode gerar linhas B, mas geralmente não são difusas nem simétricas como no edema.",
        "en": "Fibrosis may show B-lines, but they are usually not diffuse or symmetrical like in edema.",
        "es": "La fibrosis puede mostrar líneas B, pero no suelen ser difusas ni simétricas como en el edema."
      }
    }
  ]
},
{
  "id": 609,
  "code": "pneumo01-q609",
  "area": ["pneumo"],
  "topic": ["asthma"],
  "level": "easy",
  "correct": 4,
  "question": {
    "pt": "Qual dos seguintes achados clínicos em um paciente asmático indica potencial risco de parada respiratória iminente?",
    "en": "Which of the following clinical findings in an asthmatic patient suggests impending respiratory arrest?",
    "es": "¿Cuál de los siguientes hallazgos clínicos en un paciente asmático indica riesgo inminente de paro respiratorio?"
  },
  "options": [
    {
      "text": {
        "pt": "Sibilos difusos audíveis sem estetoscópio",
        "en": "Diffuse wheezing audible without stethoscope",
        "es": "Sibilancias difusas audibles sin estetoscopio"
      },
      "explanation": {
        "pt": "Embora grave, ainda indica fluxo aéreo presente.",
        "en": "Though severe, still indicates presence of airflow.",
        "es": "Aunque grave, aún indica flujo aéreo presente."
      }
    },
    {
      "text": {
        "pt": "Taquipneia com uso de musculatura acessória",
        "en": "Tachypnea with accessory muscle use",
        "es": "Taquipnea con uso de musculatura accesoria"
      },
      "explanation": {
        "pt": "É um sinal de esforço respiratório, mas não indica falência iminente.",
        "en": "It shows respiratory effort but not necessarily imminent failure.",
        "es": "Muestra esfuerzo respiratorio pero no implica falla inminente."
      }
    },
    {
      "text": {
        "pt": "Pulso paradoxal de 12 mmHg",
        "en": "Pulsus paradoxus of 12 mmHg",
        "es": "Pulso paradójico de 12 mmHg"
      },
      "explanation": {
        "pt": "Comum em asma grave, mas não define risco imediato de parada.",
        "en": "Common in severe asthma but not a sign of imminent arrest.",
        "es": "Frecuente en asma grave, pero no indica paro inminente."
      }
    },
    {
      "text": {
        "pt": "Diminuição dos sibilos com redução do nível de consciência",
        "en": "Decreased wheezing with reduced level of consciousness",
        "es": "Disminución de las sibilancias con nivel de conciencia reducido"
      },
      "explanation": {
        "pt": "A diminuição dos sibilos com rebaixamento do sensório é um sinal gravíssimo, pois pode indicar esgotamento respiratório e iminência de parada.",
        "en": "Wheezing reduction with altered consciousness is a grave sign, suggesting respiratory muscle fatigue and impending arrest.",
        "es": "Disminución de sibilancias con alteración del sensorio indica fatiga respiratoria y riesgo de paro inminente."
      }
    },
    {
      "text": {
        "pt": "SatO₂ de 93% com FiO₂ de 40%",
        "en": "SpO₂ of 93% on 40% FiO₂",
        "es": "SatO₂ de 93% con FiO₂ de 40%"
      },
      "explanation": {
        "pt": "Embora hipoxemia moderada, não é indicativo de parada iminente por si só.",
        "en": "Moderate hypoxemia, but not an independent marker of imminent arrest.",
        "es": "Hipoxemia moderada, pero no implica riesgo inmediato de paro."
      }
    }
  ]
},
{
  "id": 610,
  "code": "pneumo01-q610",
  "area": ["pneumo"],
  "topic": ["copd"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Qual critério espirométrico confirma o diagnóstico de DPOC após broncodilatador?",
    "en": "Which spirometric criterion confirms the diagnosis of COPD after bronchodilator?",
    "es": "¿Qué criterio espirométrico confirma el diagnóstico de EPOC después del broncodilatador?"
  },
  "options": [
    {
      "text": {
        "pt": "VEF1 maior que 80% do previsto",
        "en": "FEV1 greater than 80% of predicted",
        "es": "FEV1 mayor del 80% del previsto"
      },
      "explanation": {
        "pt": "VEF1 isoladamente não confirma obstrução se a relação VEF1/CVF estiver normal.",
        "en": "FEV1 alone does not confirm obstruction if FEV1/FVC ratio is normal.",
        "es": "El FEV1 por sí solo no confirma obstrucción si la relación FEV1/FVC es normal."
      }
    },
    {
      "text": {
        "pt": "CVF menor que 70% do previsto",
        "en": "FVC less than 70% of predicted",
        "es": "FVC menor del 70% del previsto"
      },
      "explanation": {
        "pt": "CVF pode estar reduzida por outras causas e não define obstrução.",
        "en": "FVC may be reduced for various reasons and does not define obstruction.",
        "es": "La FVC puede estar reducida por otras causas y no define obstrucción."
      }
    },
    {
      "text": {
        "pt": "Relação VEF1/CVF menor que 0,70 pós-broncodilatador",
        "en": "Post-bronchodilator FEV1/FVC ratio less than 0.70",
        "es": "Relación FEV1/FVC post-broncodilatador menor de 0,70"
      },
      "explanation": {
        "pt": "Este é o critério diagnóstico aceito para DPOC segundo GOLD: obstrução persistente ao fluxo aéreo após broncodilatador.",
        "en": "This is the GOLD-defined diagnostic criterion: persistent airflow obstruction post-bronchodilator.",
        "es": "Este es el criterio diagnóstico según GOLD: obstrucción persistente tras broncodilatador."
      }
    },
    {
      "text": {
        "pt": "VEF1 aumentado após broncodilatador",
        "en": "Increased FEV1 after bronchodilator",
        "es": "Aumento del FEV1 tras broncodilatador"
      },
      "explanation": {
        "pt": "Melhora do VEF1 não exclui DPOC se a obstrução persistir.",
        "en": "FEV1 improvement does not exclude COPD if obstruction persists.",
        "es": "La mejoría del FEV1 no excluye EPOC si persiste la obstrucción."
      }
    },
    {
      "text": {
        "pt": "Presença de sibilos em ausculta",
        "en": "Presence of wheezing on auscultation",
        "es": "Presencia de sibilancias en la auscultación"
      },
      "explanation": {
        "pt": "Sibilos são inespecíficos e não definem diagnóstico espirométrico.",
        "en": "Wheezing is nonspecific and does not define spirometric diagnosis.",
        "es": "Las sibilancias son inespecíficas y no definen diagnóstico espirométrico."
      }
    }
  ]
},
{
  "id": 611,
  "code": "pneumo01-q611",
  "area": ["pneumo"],
  "topic": ["ards"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "De acordo com a nova definição global de SDRA (2023), qual valor de relação PaO₂/FiO₂ indica SDRA leve em pacientes sob oxigenoterapia de alto fluxo nasal (HFNO) com fluxo ≥30 L/min?",
    "en": "According to the new global definition of ARDS (2023), what PaO₂/FiO₂ ratio indicates mild ARDS in patients receiving high-flow nasal oxygen (HFNO) at ≥30 L/min?",
    "es": "Según la nueva definición global de SDRA (2023), ¿qué relación PaO₂/FiO₂ indica SDRA leve en pacientes con oxigenoterapia nasal de alto flujo (HFNO) a ≥30 L/min?"
  },
  "options": [
    {
      "text": {
        "pt": "> 300 mmHg",
        "en": "> 300 mmHg",
        "es": "> 300 mmHg"
      },
      "explanation": {
        "pt": "Valores acima de 300 mmHg não configuram SDRA.",
        "en": "Values above 300 mmHg do not define ARDS.",
        "es": "Valores superiores a 300 mmHg no definen SDRA."
      }
    },
    {
      "text": {
        "pt": "Entre 200 e 300 mmHg",
        "en": "Between 200 and 300 mmHg",
        "es": "Entre 200 y 300 mmHg"
      },
      "explanation": {
        "pt": "A nova definição global de SDRA (2023) permite o diagnóstico de SDRA leve com PaO₂/FiO₂ entre 200–300 mmHg em pacientes sob HFNO ≥30 L/min, mesmo sem ventilação invasiva ou não invasiva.",
        "en": "The new global definition of ARDS (2023) allows the diagnosis of mild ARDS with PaO₂/FiO₂ between 200–300 mmHg in patients receiving HFNO ≥30 L/min, even without invasive or non-invasive ventilation.",
        "es": "La nueva definición global de SDRA (2023) permite el diagnóstico de SDRA leve con PaO₂/FiO₂ entre 200–300 mmHg en pacientes con HFNO ≥30 L/min, incluso sin ventilación invasiva o no invasiva."
      }
    },
    {
      "text": {
        "pt": "Entre 100 e 200 mmHg",
        "en": "Between 100 and 200 mmHg",
        "es": "Entre 100 y 200 mmHg"
      },
      "explanation": {
        "pt": "Esse intervalo caracteriza SDRA moderada.",
        "en": "This range indicates moderate ARDS.",
        "es": "Este rango indica SDRA moderada."
      }
    },
    {
      "text": {
        "pt": "< 100 mmHg",
        "en": "< 100 mmHg",
        "es": "< 100 mmHg"
      },
      "explanation": {
        "pt": "Relação PaO₂/FiO₂ < 100 mmHg define SDRA grave.",
        "en": "PaO₂/FiO₂ < 100 mmHg defines severe ARDS.",
        "es": "Relación PaO₂/FiO₂ < 100 mmHg define SDRA grave."
      }
    },
    {
      "text": {
        "pt": "Não depende de PaO₂/FiO₂",
        "en": "It does not depend on PaO₂/FiO₂",
        "es": "No depende de PaO₂/FiO₂"
      },
      "explanation": {
        "pt": "A relação PaO₂/FiO₂ continua sendo essencial na definição da SDRA, mesmo na nova proposta.",
        "en": "PaO₂/FiO₂ remains essential in the definition of ARDS, even in the new proposal.",
        "es": "La relación PaO₂/FiO₂ sigue siendo esencial en la definición de SDRA, incluso en la nueva propuesta."
      }
    }
  ]
},
{
  "id": 612,
  "code": "pneumo01-q612",
  "area": ["pneumo"],
  "topic": ["ards"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Qual das seguintes é uma característica fisiopatológica central da SDRA?",
    "en": "Which of the following is a key pathophysiological feature of ARDS?",
    "es": "¿Cuál de las siguientes es una característica fisiopatológica clave del SDRA?"
  },
  "options": [
    {
      "text": {
        "pt": "Aumento da permeabilidade alveolocapilar",
        "en": "Increased alveolar-capillary permeability",
        "es": "Aumento de la permeabilidad alveolocapilar"
      },
      "explanation": {
        "pt": "Esse aumento leva ao acúmulo de edema pulmonar não cardiogênico — marca registrada da SDRA.",
        "en": "This leads to non-cardiogenic pulmonary edema — a hallmark of ARDS.",
        "es": "Esto produce edema pulmonar no cardiogénico, característico del SDRA."
      }
    },
    {
      "text": {
        "pt": "Edema pulmonar com pressão capilar elevada",
        "en": "Pulmonary edema with high capillary pressure",
        "es": "Edema pulmonar con presión capilar elevada"
      },
      "explanation": {
        "pt": "Isso caracteriza edema cardiogênico, não SDRA.",
        "en": "This is typical of cardiogenic edema, not ARDS.",
        "es": "Esto es típico de edema cardiogénico, no del SDRA."
      }
    },
    {
      "text": {
        "pt": "Resposta à diurese agressiva",
        "en": "Response to aggressive diuresis",
        "es": "Respuesta a la diuresis agresiva"
      },
      "explanation": {
        "pt": "A SDRA não responde significativamente à diurese, pois não é um quadro de sobrecarga hídrica primária.",
        "en": "ARDS does not typically improve with diuresis since it's not caused by volume overload.",
        "es": "El SDRA no mejora con diuresis ya que no es por sobrecarga de volumen."
      }
    },
    {
      "text": {
        "pt": "Ausência de infiltrado pulmonar bilateral",
        "en": "Absence of bilateral pulmonary infiltrates",
        "es": "Ausencia de infiltrados pulmonares bilaterales"
      },
      "explanation": {
        "pt": "A SDRA é caracterizada justamente pela presença de infiltrados bilaterais.",
        "en": "ARDS is defined by the presence of bilateral infiltrates.",
        "es": "El SDRA se caracteriza por infiltrados pulmonares bilaterales."
      }
    },
    {
      "text": {
        "pt": "Melhora rápida com oxigenoterapia de baixo fluxo",
        "en": "Rapid improvement with low-flow oxygen therapy",
        "es": "Mejoría rápida con oxigenoterapia de bajo flujo"
      },
      "explanation": {
        "pt": "A SDRA exige geralmente suporte avançado e não melhora com baixo fluxo.",
        "en": "ARDS usually requires advanced support and does not improve with low-flow oxygen.",
        "es": "El SDRA suele requerir soporte avanzado y no mejora con oxígeno de bajo flujo."
      }
    }
  ]
},
{
  "id": 613,
  "code": "pneumo01-q613",
  "area": ["pneumo"],
  "topic": ["ards"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "De acordo com a nova definição global de SDRA (2023), em quais circunstâncias é aceitável utilizar a relação SpO₂/FiO₂ em vez de PaO₂/FiO₂ para diagnóstico?",
    "en": "According to the 2023 global definition of ARDS, under which circumstances is it acceptable to use the SpO₂/FiO₂ ratio instead of PaO₂/FiO₂ for diagnosis?",
    "es": "Según la definición global de SDRA de 2023, ¿en qué circunstancias es aceptable usar la relación SpO₂/FiO₂ en lugar de PaO₂/FiO₂ para el diagnóstico?"
  },
  "options": [
    {
      "text": {
        "pt": "Apenas em pacientes intubados",
        "en": "Only in intubated patients",
        "es": "Solo en pacientes intubados"
      },
      "explanation": {
        "pt": "O uso de SpO₂/FiO₂ não se restringe a pacientes intubados.",
        "en": "Use of SpO₂/FiO₂ is not limited to intubated patients.",
        "es": "El uso de SpO₂/FiO₂ no se limita a pacientes intubados."
      }
    },
    {
      "text": {
        "pt": "Nunca deve ser utilizada, pois não é validada",
        "en": "Should never be used, as it is not validated",
        "es": "Nunca debe usarse, ya que no está validada"
      },
      "explanation": {
        "pt": "Estudos validaram o uso da relação SpO₂/FiO₂ como alternativa prática em locais com recursos limitados.",
        "en": "Studies have validated SpO₂/FiO₂ as a practical alternative in low-resource settings.",
        "es": "Estudios han validado SpO₂/FiO₂ como alternativa práctica en entornos con recursos limitados."
      }
    },
    {
      "text": {
        "pt": "Quando a gasometria arterial não estiver disponível",
        "en": "When arterial blood gas is not available",
        "es": "Cuando no se dispone de gasometría arterial"
      },
      "explanation": {
        "pt": "A nova definição permite o uso de SpO₂/FiO₂ (usualmente <315) como substituto de PaO₂/FiO₂, especialmente em ambientes com acesso limitado à gasometria.",
        "en": "The new definition allows using SpO₂/FiO₂ (typically <315) when ABG is unavailable, especially in resource-limited settings.",
        "es": "La nueva definición permite usar SpO₂/FiO₂ (típicamente <315) cuando no se dispone de gasometría arterial."
      }
    },
    {
      "text": {
        "pt": "Apenas em crianças e neonatos",
        "en": "Only in children and neonates",
        "es": "Solo en niños y recién nacidos"
      },
      "explanation": {
        "pt": "A recomendação é aplicável a adultos e pediatria; não se restringe à faixa etária neonatal.",
        "en": "This is applicable to adults and pediatrics; it is not restricted to neonates.",
        "es": "Es aplicable a adultos y pediatría; no se restringe a neonatos."
      }
    },
    {
      "text": {
        "pt": "Somente se o paciente estiver sob ECMO",
        "en": "Only if the patient is on ECMO",
        "es": "Solo si el paciente está en ECMO"
      },
      "explanation": {
        "pt": "ECMO não é requisito para utilização do critério SpO₂/FiO₂.",
        "en": "ECMO is not a requirement for SpO₂/FiO₂ usage.",
        "es": "La ECMO no es requisito para usar SpO₂/FiO₂."
      }
    }
  ]
},
{
  "id": 614,
  "code": "pneumo01-q614",
  "area": ["pneumo"],
  "topic": ["ards"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Segundo a definição global de SDRA (ATS, 2023), um valor de SpO₂/FiO₂ abaixo de qual ponto indica provável SDRA moderada ou grave?",
    "en": "According to the global ARDS definition (ATS, 2023), a SpO₂/FiO₂ ratio below which value suggests likely moderate or severe ARDS?",
    "es": "Según la definición global de SDRA (ATS, 2023), ¿un valor de SpO₂/FiO₂ por debajo de cuál punto sugiere SDRA moderado o grave?"
  },
  "options": [
    {
      "text": {
        "pt": "400",
        "en": "400",
        "es": "400"
      },
      "explanation": {
        "pt": "Valores de SpO₂/FiO₂ acima de 315 geralmente excluem SDRA.",
        "en": "SpO₂/FiO₂ values above 315 usually rule out ARDS.",
        "es": "Valores de SpO₂/FiO₂ por encima de 315 suelen descartar SDRA."
      }
    },
    {
      "text": {
        "pt": "350",
        "en": "350",
        "es": "350"
      },
      "explanation": {
        "pt": "Ainda está acima do ponto de corte típico para SDRA leve (< 315).",
        "en": "Still above the typical cutoff for mild ARDS (< 315).",
        "es": "Todavía por encima del umbral típico para SDRA leve (< 315)."
      }
    },
    {
      "text": {
        "pt": "315",
        "en": "315",
        "es": "315"
      },
      "explanation": {
        "pt": "É o ponto de corte mínimo para SDRA leve. Valores abaixo disso sugerem SDRA, mas não necessariamente moderada ou grave.",
        "en": "This is the minimum cutoff for mild ARDS. Values below suggest ARDS but not necessarily moderate or severe.",
        "es": "Este es el umbral mínimo para SDRA leve. Valores menores sugieren SDRA, pero no necesariamente moderado o grave."
      }
    },
    {
      "text": {
        "pt": "235",
        "en": "235",
        "es": "235"
      },
      "explanation": {
        "pt": "Valores de SpO₂/FiO₂ abaixo de 235 correlacionam-se com PaO₂/FiO₂ < 200, o que sugere SDRA moderada ou grave. Essa equivalência foi validada por estudos clínicos e reconhecida pela definição da ATS (2023).\n\n📚 **Fonte**: ARDS Definition Task Force. *Am J Respir Crit Care Med* 2023; 208(1): 67–79. DOI: [10.1164/rccm.202303-0558WS](https://doi.org/10.1164/rccm.202303-0558WS)",
        "en": "SpO₂/FiO₂ values below 235 correlate with PaO₂/FiO₂ < 200, which indicates moderate or severe ARDS. This equivalence is supported by clinical validation and recognized in the 2023 ATS definition.\n\n📚 **Source**: ARDS Definition Task Force. *Am J Respir Crit Care Med* 2023; 208(1): 67–79. DOI: [10.1164/rccm.202303-0558WS](https://doi.org/10.1164/rccm.202303-0558WS)",
        "es": "Valores de SpO₂/FiO₂ por debajo de 235 se correlacionan con PaO₂/FiO₂ < 200, lo que indica SDRA moderado o grave. Esta equivalencia ha sido validada clínicamente y reconocida por la ATS 2023.\n\n📚 **Fuente**: ARDS Definition Task Force. *Am J Respir Crit Care Med* 2023; 208(1): 67–79. DOI: [10.1164/rccm.202303-0558WS](https://doi.org/10.1164/rccm.202303-0558WS)"
      }
    },
    {
      "text": {
        "pt": "200",
        "en": "200",
        "es": "200"
      },
      "explanation": {
        "pt": "É um ponto de corte possível, mas valores um pouco acima de 200 (como 235) já indicam SDRA moderada.",
        "en": "It is a possible cutoff, but slightly higher values like 235 already indicate moderate ARDS.",
        "es": "Es un umbral posible, pero valores algo superiores como 235 ya indican SDRA moderado."
      }
    }
  ]
},
{
  "id": 615,
  "code": "pneumo01-q615",
  "area": ["pneumo"],
  "topic": ["near_drowning"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Qual é a principal causa de morte em vítimas de quase-afogamento que chegam vivas ao hospital?",
    "en": "What is the main cause of death in near-drowning victims who arrive alive at the hospital?",
    "es": "¿Cuál es la principal causa de muerte en víctimas de casi ahogamiento que llegan vivas al hospital?"
  },
  "options": [
    {
      "text": {
        "pt": "SDRA (síndrome do desconforto respiratório agudo)",
        "en": "ARDS (acute respiratory distress syndrome)",
        "es": "SDRA (síndrome de dificultad respiratoria aguda)"
      },
      "explanation": {
        "pt": "A aspiração de líquido, com lesão alveolocapilar e edema pulmonar, pode evoluir para SDRA — principal causa de óbito hospitalar em vítimas de quase-afogamento.",
        "en": "Aspiration of fluid causes alveolar damage and pulmonary edema, often leading to ARDS — the main hospital cause of death in near-drowning.",
        "es": "La aspiración de líquido daña los alvéolos y produce edema pulmonar, lo que a menudo lleva a SDRA — la principal causa hospitalaria de muerte en casi ahogamiento."
      }
    },
    {
      "text": {
        "pt": "Infecção pulmonar precoce",
        "en": "Early pulmonary infection",
        "es": "Infección pulmonar temprana"
      },
      "explanation": {
        "pt": "Infecções podem ocorrer, mas não são a principal causa imediata de morte.",
        "en": "Infections may occur but are not the main immediate cause of death.",
        "es": "Las infecciones pueden ocurrir, pero no son la causa inmediata principal de muerte."
      }
    },
    {
      "text": {
        "pt": "Hipotermia profunda",
        "en": "Profound hypothermia",
        "es": "Hipotermia profunda"
      },
      "explanation": {
        "pt": "A hipotermia pode ser grave, mas geralmente é tratável e não é a principal causa de morte hospitalar.",
        "en": "Hypothermia may be severe, but it is usually manageable and not the main cause of hospital death.",
        "es": "La hipotermia puede ser grave, pero generalmente es tratable y no la principal causa de muerte hospitalaria."
      }
    },
    {
      "text": {
        "pt": "Aspiração de areia ou corpo estranho",
        "en": "Aspiration of sand or foreign body",
        "es": "Aspiración de arena o cuerpo extraño"
      },
      "explanation": {
        "pt": "Aspiração de sólidos é menos comum e raramente letal por si só.",
        "en": "Aspiration of solids is less common and rarely lethal by itself.",
        "es": "La aspiración de sólidos es menos común y rara vez letal por sí sola."
      }
    },
    {
      "text": {
        "pt": "Traumatismo cranioencefálico associado",
        "en": "Associated traumatic brain injury",
        "es": "Traumatismo craneoencefálico asociado"
      },
      "explanation": {
        "pt": "Pode ocorrer em quedas, mas não é o mecanismo primário típico de morte no quase-afogamento.",
        "en": "May occur with falls, but not the primary mechanism of death in typical near-drowning.",
        "es": "Puede ocurrir con caídas, pero no es la causa primaria típica de muerte en casi ahogamiento."
      }
    }
  ]
},
{
  "id": 616,
  "code": "pneumo01-q616",
  "area": ["pneumo"],
  "topic": ["acute_respiratory_failure"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Qual das seguintes situações representa uma indicação clara para intubação orotraqueal em paciente com insuficiência respiratória aguda (IRpA)?",
    "en": "Which of the following is a clear indication for endotracheal intubation in a patient with acute respiratory failure (ARF)?",
    "es": "¿Cuál de las siguientes es una indicación clara de intubación orotraqueal en un paciente con insuficiencia respiratoria aguda (IRA)?"
  },
  "options": [
    {
      "text": {
        "pt": "Paciente com PaO₂ de 75 mmHg em máscara de Venturi a 40% de FiO₂",
        "en": "Patient with PaO₂ of 75 mmHg on Venturi mask with 40% FiO₂",
        "es": "Paciente con PaO₂ de 75 mmHg en mascarilla de Venturi con FiO₂ al 40%"
      },
      "explanation": {
        "pt": "Hipoxemia leve que pode ser manejada com suporte não invasivo.",
        "en": "Mild hypoxemia that can be managed with non-invasive support.",
        "es": "Hipoxemia leve que puede manejarse con soporte no invasivo."
      }
    },
    {
      "text": {
        "pt": "Paciente ansioso com FR de 28 rpm e SatO₂ de 94% em máscara",
        "en": "Anxious patient with RR of 28 bpm and SpO₂ of 94% on mask",
        "es": "Paciente ansioso con FR de 28 rpm y SatO₂ de 94% con mascarilla"
      },
      "explanation": {
        "pt": "Taquipneia isolada em paciente estável não é critério absoluto de intubação.",
        "en": "Isolated tachypnea in a stable patient is not an absolute indication.",
        "es": "Taquipnea aislada en paciente estable no es indicación absoluta."
      }
    },
    {
      "text": {
        "pt": "Paciente com infecção respiratória viral leve em ar ambiente",
        "en": "Patient with mild viral respiratory infection on room air",
        "es": "Paciente con infección respiratoria viral leve en aire ambiente"
      },
      "explanation": {
        "pt": "Sem insuficiência respiratória ou alteração gasométrica significativa.",
        "en": "No respiratory failure or significant gasometric alteration.",
        "es": "Sin insuficiencia respiratoria ni alteración gasométrica relevante."
      }
    },
    {
      "text": {
        "pt": "Paciente com rebaixamento do sensório (Glasgow 7) e PaCO₂ de 65 mmHg com pH 7,22",
        "en": "Patient with decreased consciousness (Glasgow 7) and PaCO₂ of 65 mmHg with pH 7.22",
        "es": "Paciente con disminución del sensorio (Glasgow 7) y PaCO₂ de 65 mmHg con pH 7.22"
      },
      "explanation": {
        "pt": "Alteração do nível de consciência e hipercapnia acidótica configuram indicação clássica de intubação por falência ventilatória e risco de aspiração.\n\n📚 **Fonte**: AHA Guidelines 2020; UpToDate – 'Indications for emergency intubation in adults'.",
        "en": "Depressed mental status and acidotic hypercapnia are classic indications for intubation due to ventilatory failure and aspiration risk.\n\n📚 **Source**: AHA Guidelines 2020; UpToDate – 'Indications for emergency intubation in adults'.",
        "es": "Disminución del sensorio e hipercapnia con acidosis son indicaciones clásicas de intubación por falla ventilatoria y riesgo de aspiración.\n\n📚 **Fuente**: Guías AHA 2020; UpToDate – 'Indications for emergency intubation in adults'."
      }
    },
    {
      "text": {
        "pt": "Paciente com tosse produtiva, FR de 20 rpm e boa oxigenação",
        "en": "Patient with productive cough, RR of 20 bpm and good oxygenation",
        "es": "Paciente con tos productiva, FR de 20 rpm y buena oxigenación"
      },
      "explanation": {
        "pt": "Sem sinais de falência respiratória; observação clínica é suficiente.",
        "en": "No signs of respiratory failure; clinical observation is enough.",
        "es": "Sin signos de falla respiratoria; observación clínica es suficiente."
      }
    }
  ]
},
{
  "id": 617,
  "code": "pneumo01-q617",
  "area": ["pneumo"],
  "topic": ["ecmo_vv"],
  "level": "easy",
  "correct": 4,
  "question": {
    "pt": "Qual das seguintes situações clínicas representa uma indicação clássica para suporte com ECMO veno-venosa (ECMO-VV)?",
    "en": "Which of the following clinical scenarios is a classic indication for veno-venous ECMO (VV-ECMO) support?",
    "es": "¿Cuál de los siguientes escenarios clínicos representa una indicación clásica para soporte con ECMO veno-venosa (ECMO-VV)?"
  },
  "options": [
    {
      "text": {
        "pt": "Choque séptico refratário com necessidade de noradrenalina > 1 mcg/kg/min",
        "en": "Refractory septic shock requiring norepinephrine > 1 mcg/kg/min",
        "es": "Shock séptico refractario con noradrenalina > 1 mcg/kg/min"
      },
      "explanation": {
        "pt": "Essa é uma indicação potencial para ECMO veno-arterial (VA), não veno-venosa.",
        "en": "This is a potential indication for veno-arterial ECMO, not veno-venous.",
        "es": "Es una posible indicación de ECMO veno-arterial, no veno-venosa."
      }
    },
    {
      "text": {
        "pt": "IAM com disfunção ventricular esquerda e instabilidade elétrica",
        "en": "Myocardial infarction with left ventricular dysfunction and electrical instability",
        "es": "IAM con disfunción ventricular izquierda e inestabilidad eléctrica"
      },
      "explanation": {
        "pt": "Indicação típica de ECMO-VA, por falência circulatória primária.",
        "en": "Typical indication for VA-ECMO due to primary circulatory failure.",
        "es": "Indicación típica para ECMO-VA por falla circulatoria primaria."
      }
    },
    {
      "text": {
        "pt": "PCR traumático com múltiplas fraturas torácicas",
        "en": "Traumatic cardiac arrest with multiple thoracic fractures",
        "es": "Paro cardíaco traumático con múltiples fracturas torácicas"
      },
      "explanation": {
        "pt": "ECMO pode ser contraindicada devido ao risco de sangramento massivo.",
        "en": "ECMO may be contraindicated due to risk of massive bleeding.",
        "es": "ECMO puede estar contraindicada por el alto riesgo de hemorragia."
      }
    },
    {
      "text": {
        "pt": "Embolia pulmonar maciça com instabilidade hemodinâmica",
        "en": "Massive pulmonary embolism with hemodynamic instability",
        "es": "Embolia pulmonar masiva con inestabilidad hemodinámica"
      },
      "explanation": {
        "pt": "Caso indicado, seria suporte VA, não VV.",
        "en": "If indicated, this would require VA support, not VV.",
        "es": "Si se indica, sería con ECMO-VA, no VV."
      }
    },
    {
      "text": {
        "pt": "SDRA grave refratária com PaO₂/FiO₂ < 80 por mais de 6 horas apesar de ventilação protetora",
        "en": "Severe refractory ARDS with PaO₂/FiO₂ < 80 for more than 6 hours despite protective ventilation",
        "es": "SDRA grave refractario con PaO₂/FiO₂ < 80 durante más de 6 horas pese a ventilación protectora"
      },
      "explanation": {
        "pt": "Essa é a principal indicação de ECMO-VV: hipoxemia refratária à estratégia convencional em SDRA grave.\n\n📚 **Fonte**: ELSO Guidelines for Adult Respiratory Failure (2021).",
        "en": "This is the main indication for VV-ECMO: refractory hypoxemia in severe ARDS despite protective strategies.\n\n📚 **Source**: ELSO Guidelines for Adult Respiratory Failure (2021).",
        "es": "Esta es la principal indicación para ECMO-VV: hipoxemia refractaria en SDRA grave pese a medidas convencionales.\n\n📚 **Fuente**: Guías ELSO para fallo respiratorio adulto (2021)."
      }
    }
  ]
},
{
  "id": 619,
  "code": "pneumo01-q619",
  "area": ["pneumo"],
  "topic": ["pneumonia"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual das seguintes características diferencia pneumonia adquirida na comunidade (PAC) de pneumonia associada ao ambiente hospitalar?",
    "en": "Which of the following characteristics differentiates community-acquired pneumonia (CAP) from hospital-acquired pneumonia (HAP)?",
    "es": "¿Cuál de las siguientes características diferencia la neumonía adquirida en la comunidad (NAC) de la neumonía asociada al hospital (NAH)?"
  },
  "options": [
    {
      "text": {
        "pt": "Presença de febre e estertores inspiratórios",
        "en": "Presence of fever and inspiratory crackles",
        "es": "Presencia de fiebre y estertores inspiratorios"
      },
      "explanation": {
        "pt": "Pode ocorrer em qualquer tipo de pneumonia e não diferencia etiologia ou origem.",
        "en": "Can occur in any pneumonia type; does not differentiate etiology or origin.",
        "es": "Puede presentarse en cualquier tipo de neumonía; no diferencia la etiología."
      }
    },
    {
      "text": {
        "pt": "Início dos sintomas após 48 horas de internação hospitalar",
        "en": "Onset of symptoms after 48 hours of hospital admission",
        "es": "Inicio de síntomas después de 48 horas de hospitalización"
      },
      "explanation": {
        "pt": "Essa é a definição clássica de pneumonia nosocomial (hospitalar), diferente da PAC que se inicia fora do hospital ou nas primeiras 48h.\n\n📚 **Fonte**: IDSA/ATS HAP/VAP Guidelines (2016).",
        "en": "This is the classic definition of hospital-acquired pneumonia, unlike CAP which begins before or within the first 48h of hospitalization.\n\n📚 **Source**: IDSA/ATS HAP/VAP Guidelines (2016).",
        "es": "Esta es la definición clásica de neumonía hospitalaria, a diferencia de NAC que empieza fuera o en las primeras 48h de internación.\n\n📚 **Fuente**: Guías IDSA/ATS HAP/VAP (2016)."
      }
    },
    {
      "text": {
        "pt": "Infiltrado pulmonar localizado em lobo inferior direito",
        "en": "Pulmonary infiltrate localized in right lower lobe",
        "es": "Infiltrado pulmonar localizado en lóbulo inferior derecho"
      },
      "explanation": {
        "pt": "A localização do infiltrado não distingue PAC de pneumonia hospitalar.",
        "en": "Lobar location does not differentiate CAP from HAP.",
        "es": "La localización del infiltrado no diferencia NAC de NAH."
      }
    },
    {
      "text": {
        "pt": "Resposta inflamatória sistêmica com leucocitose",
        "en": "Systemic inflammatory response with leukocytosis",
        "es": "Respuesta inflamatoria sistémica con leucocitosis"
      },
      "explanation": {
        "pt": "Comum em ambas as formas; não define o contexto de aquisição.",
        "en": "Common to both forms; does not define acquisition setting.",
        "es": "Común en ambas formas; no define el contexto de adquisición."
      }
    },
    {
      "text": {
        "pt": "Presença de tosse, expectoração e dispneia",
        "en": "Presence of cough, sputum, and dyspnea",
        "es": "Presencia de tos, expectoración y disnea"
      },
      "explanation": {
        "pt": "Sintomas comuns em qualquer pneumonia; não distingue PAC de hospitalar.",
        "en": "Common symptoms in any pneumonia; does not distinguish CAP from HAP.",
        "es": "Síntomas comunes en cualquier neumonía; no distingue NAC de NAH."
      }
    }
  ]
},
{
  "id": 620,
  "code": "pneumo01-q620",
  "area": ["pneumo"],
  "topic": ["airway_management", "tracheostomy"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Sobre a traqueostomia percutânea realizada à beira do leito em pacientes em ventilação mecânica prolongada, qual das afirmações a seguir é verdadeira?",
    "en": "Regarding percutaneous tracheostomy performed at the bedside in patients under prolonged mechanical ventilation, which of the following statements is true?",
    "es": "Respecto a la traqueostomía percutánea realizada junto a la cama en pacientes con ventilación mecánica prolongada, ¿cuál de las siguientes afirmaciones es verdadera?"
  },
  "options": [
    {
      "text": {
        "pt": "Sempre requer retirada da sedação para permitir participação do paciente",
        "en": "Always requires sedation withdrawal to allow patient participation",
        "es": "Siempre requiere suspender la sedación para permitir participación del paciente"
      },
      "explanation": {
        "pt": "Ao contrário, o procedimento é feito sob sedação profunda e analgesia, frequentemente com bloqueio neuromuscular.",
        "en": "On the contrary, the procedure is performed under deep sedation and analgesia, often with neuromuscular blockade.",
        "es": "Al contrario, el procedimiento se realiza bajo sedación profunda y analgesia, a menudo con bloqueo neuromuscular."
      }
    },
    {
      "text": {
        "pt": "É contraindicado em pacientes com coagulopatia leve",
        "en": "It is contraindicated in patients with mild coagulopathy",
        "es": "Está contraindicada en pacientes con coagulopatía leve"
      },
      "explanation": {
        "pt": "Coagulopatia leve geralmente não contraindica a traqueostomia percutânea, que pode ser realizada com cuidado e correção parcial.",
        "en": "Mild coagulopathy does not usually contraindicate percutaneous tracheostomy, which can be done with caution and partial correction.",
        "es": "Una coagulopatía leve no suele contraindicar la traqueostomía percutánea, que puede realizarse con precaución."
      }
    },
    {
      "text": {
        "pt": "É indicada a partir do 1º dia de ventilação mecânica em pacientes com lesão cerebral grave",
        "en": "It is indicated from day 1 of mechanical ventilation in patients with severe brain injury",
        "es": "Está indicada desde el primer día de ventilación mecánica en pacientes con lesión cerebral grave"
      },
      "explanation": {
        "pt": "A maioria dos protocolos considera traqueostomia a partir de 7–10 dias de ventilação mecânica, a depender do prognóstico.",
        "en": "Most protocols consider tracheostomy after 7–10 days of mechanical ventilation, depending on prognosis.",
        "es": "La mayoría de los protocolos considera la traqueostomía después de 7–10 días de ventilación mecánica."
      }
    },
    {
      "text": {
        "pt": "Pode ser guiada por broncoscopia para reduzir risco de complicações",
        "en": "May be guided by bronchoscopy to reduce risk of complications",
        "es": "Puede ser guiada por broncoscopia para reducir el riesgo de complicaciones"
      },
      "explanation": {
        "pt": "A broncoscopia durante a traqueostomia percutânea permite visualização direta da punção traqueal e evita lesão de estruturas adjacentes.",
        "en": "Bronchoscopy during percutaneous tracheostomy enables direct visualization of tracheal puncture and avoids injury to adjacent structures.",
        "es": "La broncoscopia durante la traqueostomía percutánea permite visualización directa de la punción traqueal y evita lesiones."
      }
    },
    {
      "text": {
        "pt": "Sempre requer transferência para centro cirúrgico com anestesia geral",
        "en": "Always requires transfer to the operating room with general anesthesia",
        "es": "Siempre requiere traslado al quirófano con anestesia general"
      },
      "explanation": {
        "pt": "A principal vantagem da técnica percutânea é poder ser feita à beira do leito, com sedação e analgesia, sem necessidade de centro cirúrgico.",
        "en": "The main advantage of the percutaneous technique is that it can be done at bedside with sedation and analgesia, without needing an operating room.",
        "es": "La principal ventaja de la técnica percutánea es poder realizarse junto a la cama, sin necesidad de quirófano."
      }
    }
  ]
},
{
  "id": 621,
  "code": "pneumo01-q621",
  "area": ["pneumo"],
  "topic": ["airway_management", "tracheostomy"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Durante a realização de traqueostomia percutânea em UTI, o uso de broncoscopia é:",
    "en": "During percutaneous tracheostomy in the ICU, the use of bronchoscopy is:",
    "es": "Durante la traqueostomía percutánea en la UCI, el uso de broncoscopia es:"
  },
  "options": [
    {
      "text": {
        "pt": "Obrigatório, conforme diretriz da ATS",
        "en": "Mandatory, according to ATS guidelines",
        "es": "Obligatorio, según las guías de la ATS"
      },
      "explanation": {
        "pt": "As diretrizes atuais não consideram o uso da broncoscopia obrigatório, mas recomendam em determinadas circunstâncias.",
        "en": "Current guidelines do not consider bronchoscopy mandatory but recommend it under specific conditions.",
        "es": "Las guías actuales no consideran la broncoscopia obligatoria, pero la recomiendan en ciertas situaciones."
      }
    },
    {
      "text": {
        "pt": "Recomendado em muitos casos, mas não obrigatório",
        "en": "Recommended in many cases, but not mandatory",
        "es": "Recomendado en muchos casos, pero no obligatorio"
      },
      "explanation": {
        "pt": "A broncoscopia pode reduzir complicações como perfuração de parede posterior, mas sua utilização deve ser ponderada conforme experiência da equipe, anatomia do paciente e recursos disponíveis. Referência: Tornari et al. *Intensive Care Med*, 2022.",
        "en": "Bronchoscopy may reduce complications like posterior wall perforation, but its use should be individualized based on team expertise, patient anatomy, and available resources. Reference: Tornari et al. *Intensive Care Med*, 2022.",
        "es": "La broncoscopia puede reducir complicaciones como la perforación de la pared posterior, pero su uso debe individualizarse según la experiencia del equipo, la anatomía del paciente y los recursos disponibles. Referencia: Tornari et al. *Intensive Care Med*, 2022."
      }
    },
    {
      "text": {
        "pt": "Contraindicado devido ao risco de hipercapnia",
        "en": "Contraindicated due to risk of hypercapnia",
        "es": "Contraindicado debido al riesgo de hipercapnia"
      },
      "explanation": {
        "pt": "Embora possa causar retenção de CO₂ se mal manejada, a broncoscopia não é contraindicada. Monitoramento ventilatório adequado mitiga esse risco.",
        "en": "While it may cause CO₂ retention if mismanaged, bronchoscopy is not contraindicated. Adequate ventilatory monitoring mitigates this risk.",
        "es": "Aunque puede causar retención de CO₂ si se maneja mal, la broncoscopia no está contraindicada. El monitoreo ventilatorio adecuado mitiga este riesgo."
      }
    },
    {
      "text": {
        "pt": "Indicado apenas em pacientes com anatomia de pescoço difícil",
        "en": "Indicated only in patients with difficult neck anatomy",
        "es": "Indicado solo en pacientes con anatomía cervical difícil"
      },
      "explanation": {
        "pt": "Apesar de especialmente útil nesses casos, a broncoscopia também pode ser benéfica em pacientes com anatomia normal, por oferecer segurança adicional.",
        "en": "Although especially helpful in these cases, bronchoscopy may also be beneficial in patients with normal anatomy by providing additional safety.",
        "es": "Aunque especialmente útil en estos casos, la broncoscopia también puede ser beneficiosa en pacientes con anatomía normal."
      }
    },
    {
      "text": {
        "pt": "Nunca deve ser usada junto com ultrassom por aumentar o tempo do procedimento",
        "en": "Should never be used with ultrasound as it increases procedure time",
        "es": "Nunca debe usarse junto con ecografía porque aumenta el tiempo del procedimiento"
      },
      "explanation": {
        "pt": "Broncoscopia e ultrassom podem ser complementares, aumentando a segurança em casos complexos, apesar de possível leve aumento do tempo.",
        "en": "Bronchoscopy and ultrasound can be complementary, increasing safety in complex cases, despite a potential small increase in time.",
        "es": "La broncoscopia y la ecografía pueden ser complementarias, aumentando la seguridad en casos complejos."
      }
    }
  ]
},


];
questionBank.addBank(bancoPneumoFacil);
