const bancoPneumoDificilima = [
{
  "id": 901,
  "code": "pneumo04-q901",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topic": ["oxygen_therapy", "community_acquired_pneumonia", "hiflow", "niv", "respiratory_failure"],
  "level": "muito_dificil",
  "correct": 2,
  "question": {
    "pt": "Homem de 72 anos, hipertenso e ex-tabagista, é admitido na UTI por quadro de pneumonia da comunidade grave. Apresenta febre, taquidispneia, confusão leve e SpO₂ de 88% com máscara de reservatório a 15 L/min. Gasometria: pH 7,45, PaCO₂ 34 mmHg, PaO₂ 58 mmHg. PCR elevada, procalcitonina limítrofe. Radiografia mostra infiltrado extenso em base direita e opacificação incipiente na esquerda. O painel viral está pendente. Qual das seguintes estratégias iniciais de suporte ventilatório é a menos adequada neste momento?",
    "en": "A 72-year-old man with hypertension and a history of smoking is admitted to the ICU with severe community-acquired pneumonia. He has fever, tachypnea, mild confusion, and SpO₂ of 88% on a non-rebreather mask at 15 L/min. ABG: pH 7.45, PaCO₂ 34 mmHg, PaO₂ 58 mmHg. CRP is elevated, procalcitonin is borderline. Chest X-ray shows extensive right basal infiltrate and early left-sided opacification. Viral panel is pending. Which of the following initial oxygenation strategies is the *least appropriate* at this time?",
    "es": "Hombre de 72 años, hipertenso y exfumador, ingresa a UCI por neumonía adquirida en la comunidad grave. Presenta fiebre, taquipnea, confusión leve y una SpO₂ de 88% con mascarilla de reservorio a 15 L/min. GSA: pH 7,45, PaCO₂ 34 mmHg, PaO₂ 58 mmHg. PCR elevada, procalcitonina limítrofe. La radiografía muestra infiltrado extenso en la base derecha y opacificación incipiente en la izquierda. El panel viral está pendiente. ¿Cuál de las siguientes estrategias de oxigenación inicial es la *menos adecuada* en este momento?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar cateter nasal de alto fluxo com FiO₂ 1.0 e monitorização contínua",
        "en": "Start high-flow nasal cannula with FiO₂ 1.0 and continuous monitoring",
        "es": "Iniciar cánula nasal de alto flujo con FiO₂ 1.0 y monitoreo continuo"
      },
      "explanation": {
        "pt": "A cânula nasal de alto fluxo (CNAF) é recomendada como estratégia inicial em pacientes com hipoxemia moderada a grave sem hipercapnia, conforme demonstrado no FLORALI trial. Permite titulação de FiO₂, lavagem de espaço morto e melhor tolerância do que VNI, especialmente em pneumonias.",
        "en": "High-flow nasal cannula (HFNC) is recommended for moderate-to-severe hypoxemia without hypercapnia, as demonstrated in the FLORALI trial. It provides adjustable FiO₂, dead space washout, and better tolerance than NIV in pneumonia.",
        "es": "La cánula nasal de alto flujo está recomendada para hipoxemia sin hipercapnia, como mostró el estudio FLORALI. Mejora la oxigenación con mayor tolerancia."
      }
    },
    {
      "text": {
        "pt": "Considerar intubação orotraqueal precoce diante da gravidade clínica",
        "en": "Consider early orotracheal intubation given clinical severity",
        "es": "Considerar intubación orotraqueal precoz dada la gravedad clínica"
      },
      "explanation": {
        "pt": "A intubação precoce é uma conduta segura em pacientes com sinais de falência respiratória iminente. Embora a gasometria esteja preservada, a taquipneia e confusão podem evoluir rapidamente. As diretrizes da ATS/IDSA recomendam avaliação dinâmica do esforço e da tendência clínica.",
        "en": "Early intubation is justified when clinical deterioration is expected. Despite preserved gas exchange, tachypnea and confusion suggest risk. ATS/IDSA guidelines support dynamic assessment.",
        "es": "La intubación precoz puede ser adecuada si se espera deterioro. La ATS/IDSA recomienda evaluación clínica continua."
      }
    },
    {
      "text": {
        "pt": "Iniciar ventilação não invasiva com máscara facial em modo BIPAP",
        "en": "Initiate noninvasive ventilation using face mask in BIPAP mode",
        "es": "Iniciar ventilación no invasiva con máscara facial en modo BIPAP"
      },
      "explanation": {
        "pt": "A VNI em BIPAP não é recomendada como primeira linha em pneumonia hipoxêmica, especialmente sem hipercapnia. Estudos (FLORALI, LUNG SAFE) mostraram maior falha e risco de atraso na intubação. A VNI pode ser usada em pacientes com DPOC ou congestão associada, o que não é o caso aqui.",
        "en": "BIPAP is not first-line in hypoxemic pneumonia without hypercapnia. Studies (FLORALI, LUNG SAFE) showed higher failure and delayed intubation risk. It may be appropriate in COPD or cardiogenic edema, which is not present here.",
        "es": "El modo BIPAP no es primera opción en neumonía hipoxémica sin hipercapnia. Hay mayor riesgo de falla y retraso en la intubación."
      }
    },
    {
      "text": {
        "pt": "Manter máscara com reservatório e reavaliar em 30 minutos",
        "en": "Maintain non-rebreather mask and reassess in 30 minutes",
        "es": "Mantener mascarilla de reservorio y reevaluar en 30 minutos"
      },
      "explanation": {
        "pt": "Embora simples, a manutenção da máscara de reservatório é razoável em transição para outras estratégias. No entanto, esse paciente apresenta hipoxemia refratária (SpO₂ < 90% com FiO₂ máxima), o que sugere que uma abordagem mais avançada deve ser iniciada imediatamente.",
        "en": "Maintaining a reservoir mask is acceptable for transition, but this patient has refractory hypoxemia, suggesting escalation is needed.",
        "es": "La mascarilla de reservorio es transición útil, pero la hipoxemia sugiere necesidad de escalar soporte."
      }
    },
    {
      "text": {
        "pt": "Aplicar posição prona voluntária com vigilância da saturação",
        "en": "Apply awake prone positioning with saturation monitoring",
        "es": "Aplicar posición prona despierta con monitoreo de saturación"
      },
      "explanation": {
        "pt": "A pronação em vigília demonstrou benefício em pacientes com hipoxemia grave durante a pandemia de COVID-19, principalmente com CNAF. Sua eficácia depende da tolerância e vigilância. Pode ser adjuvante útil, mas não substitui estratégia principal de oxigenação.",
        "en": "Awake prone positioning showed benefit during COVID-19 in severe hypoxemia, especially with HFNC. It is useful as an adjunct but not a replacement for primary oxygenation strategy.",
        "es": "La pronación despierta es útil como adyuvante, especialmente con alto flujo, pero no reemplaza soporte ventilatorio principal."
      }
    }
  ]
},
{
  "id": 902,
  "code": "pneumo04-q902",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topic": ["ards", "compliance", "mechanical_ventilation", "recruitment", "peep"],
  "level": "muito_dificil",
  "correct": 4,
  "question": {
    "pt": "Paciente de 58 anos, sexo masculino, internado na UTI com pancreatite aguda grave, evolui com necessidade de ventilação mecânica por hipoxemia refratária (PaO₂/FiO₂ = 102 com PEEP 8 cmH₂O). Radiografia de tórax mostra infiltrados bilaterais difusos. A complacência estática do sistema respiratório é de 42 mL/cmH₂O. Não há sinais de sobrecarga hídrica ou infecção respiratória. Diante da hipótese de SDRA de origem extrapulmonar, qual das abordagens abaixo é menos apropriada neste momento?",
    "en": "A 58-year-old man with severe acute pancreatitis is admitted to the ICU and develops refractory hypoxemia requiring mechanical ventilation (PaO₂/FiO₂ = 102 on PEEP 8 cmH₂O). Chest X-ray shows bilateral infiltrates. Static respiratory system compliance is 42 mL/cmH₂O. There is no evidence of fluid overload or respiratory infection. Given the suspected extrapulmonary ARDS, which of the following approaches is least appropriate at this time?",
    "es": "Paciente masculino de 58 años, ingresado en UCI por pancreatitis aguda grave, evoluciona con hipoxemia refractaria que requiere ventilación mecánica (PaO₂/FiO₂ = 102 con PEEP 8 cmH₂O). La radiografía de tórax muestra infiltrados bilaterales. La complacencia estática es de 42 mL/cmH₂O. No hay signos de sobrecarga de volumen ni infección respiratoria. Ante la sospecha de SDRA extrapulmonar, ¿cuál de las siguientes estrategias es la menos adecuada en este momento?"
  },
  "options": [
    {
      "text": {
        "pt": "Aplicar estratégia protetora com Vt de 6 mL/kg de peso ideal",
        "en": "Apply protective ventilation with 6 mL/kg ideal body weight",
        "es": "Aplicar ventilación protectora con 6 mL/kg de peso ideal"
      },
      "explanation": {
        "pt": "A ventilação protetora com baixo volume corrente permanece o pilar do manejo do SDRA, independentemente da origem (pulmonar ou extrapulmonar), conforme diretrizes da ARDSnet e atualizações da ESICM 2023.",
        "en": "Low tidal volume ventilation remains the cornerstone in ARDS management, regardless of etiology, per ARDSnet and ESICM 2023 guidelines.",
        "es": "La ventilación con volumen corriente bajo sigue siendo esencial en SDRA, según ARDSnet y directrices ESICM 2023."
      }
    },
    {
      "text": {
        "pt": "Monitorar driving pressure e manter abaixo de 15 cmH₂O",
        "en": "Monitor driving pressure and keep it below 15 cmH₂O",
        "es": "Monitorizar la presión de conducción y mantenerla por debajo de 15 cmH₂O"
      },
      "explanation": {
        "pt": "A driving pressure (∆P = Pplat - PEEP) correlaciona-se com mortalidade no SDRA. Estudos observacionais sugerem limiar de segurança < 15 cmH₂O.",
        "en": "Driving pressure correlates with mortality in ARDS. Observational studies suggest a safety threshold < 15 cmH₂O.",
        "es": "La presión de conducción se relaciona con la mortalidad en SDRA. Umbral sugerido: < 15 cmH₂O."
      }
    },
    {
      "text": {
        "pt": "Evitar manobras de recrutamento sistemáticas sem resposta monitorada",
        "en": "Avoid systematic recruitment maneuvers without monitored response",
        "es": "Evitar maniobras de reclutamiento sistemáticas sin respuesta monitorizada"
      },
      "explanation": {
        "pt": "Manobras de recrutamento em SDRA extrapulmonar devem ser individualizadas. Estudos como o ART trial (NEJM 2017) mostraram risco aumentado quando aplicadas de forma rotineira.",
        "en": "Recruitment maneuvers in extrapulmonary ARDS should be individualized. ART trial (NEJM 2017) showed increased risk when used routinely.",
        "es": "Las maniobras de reclutamiento deben individualizarse. El estudio ART mostró mayor riesgo con uso rutinario."
      }
    },
    {
      "text": {
        "pt": "Titular PEEP com base em resposta de oxigenação e complacência",
        "en": "Titrate PEEP based on oxygenation response and compliance",
        "es": "Titular la PEEP según respuesta de oxigenación y complacencia"
      },
      "explanation": {
        "pt": "A resposta individual à PEEP deve guiar seu ajuste. PEEP excessiva em pulmões com boa complacência pode levar à hiperinsuflação e comprometimento hemodinâmico. Protocolos baseados em titulação são preferíveis ao uso fixo.",
        "en": "PEEP adjustment should be guided by individual response. Excessive PEEP in lungs with good compliance can cause hyperinflation and hemodynamic issues.",
        "es": "La PEEP debe ajustarse según la respuesta. PEEP alta en pulmones complacientes puede causar hiperinsuflación y efectos hemodinámicos adversos."
      }
    },
    {
      "text": {
        "pt": "Aplicar PEEP elevada de forma empírica com base em tabela ARDSnet",
        "en": "Apply high PEEP empirically based on ARDSnet table",
        "es": "Aplicar PEEP alta de forma empírica según la tabla ARDSnet"
      },
      "explanation": {
        "pt": "Embora as tabelas ARDSnet forneçam orientação, seu uso empírico em SDRA extrapulmonar com alta complacência pode ser prejudicial. Pulmões menos colapsados respondem mal a PEEP elevada, com risco de hiperinsuflação. Gattinoni et al. propõem abordagem fenotípica nesses casos (fenótipo L).",
        "en": "While ARDSnet tables offer guidance, empirical high PEEP in extrapulmonary ARDS with preserved compliance may be harmful. Less collapsed lungs may not benefit and risk hyperinflation. Gattinoni et al. suggest phenotype-based approaches (phenotype L).",
        "es": "Las tablas ARDSnet orientan, pero PEEP alta empírica puede ser dañina en SDRA extrapulmonar. Gattinoni propone enfoque fenotípico (tipo L)."
      }
    }
  ]
},
{
  "id": 903,
  "code": "pneumo04-q903",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topic": ["tension_pneumothorax", "trauma", "ultrasound", "emergency", "chest_drain"],
  "level": "muito_dificil",
  "correct": 3,
  "question": {
    "pt": "Homem de 35 anos é admitido no pronto-socorro após acidente automobilístico. Está consciente, porém com taquidispneia intensa, uso de musculatura acessória e SpO₂ de 84% em máscara não reinalante. Hipotenso (PA 80/50 mmHg), turgência jugular visível e ausência de murmúrio vesicular à direita. A radiografia portátil está sendo solicitada. Ultrassom torácico à beira-leito revela ausência de deslizamento pleural (“lung sliding”) e presença do sinal do código de barras no modo M. Quais das condutas abaixo é a mais inadequada frente à hipótese clínica?",
    "en": "A 35-year-old man presents to the emergency department after a car crash. He is conscious but has severe tachypnea, use of accessory muscles, and SpO₂ of 84% on a non-rebreather mask. Blood pressure is 80/50 mmHg, with visible jugular distension and absent breath sounds on the right. A portable chest X-ray is being requested. Bedside thoracic ultrasound reveals absent lung sliding and barcode sign in M-mode. Which of the following actions is most inappropriate in the context of the clinical suspicion?",
    "es": "Hombre de 35 años ingresa al servicio de urgencias tras accidente de tráfico. Está consciente, pero con taquipnea intensa, uso de músculos accesorios y SpO₂ de 84% con mascarilla no reinhalante. PA 80/50 mmHg, distensión yugular visible y ausencia de murmullo vesicular derecho. Se solicita RX portátil. El ultrasonido torácico muestra ausencia de deslizamiento pleural y señal de código de barras en modo M. ¿Cuál de las siguientes conductas es la más inapropiada ante esta sospecha clínica?"
  },
  "options": [
    {
      "text": {
        "pt": "Realizar toracocentese imediata com agulha em 2º EIC, linha hemiclavicular direita",
        "en": "Perform immediate needle decompression in 2nd ICS, right midclavicular line",
        "es": "Realizar descompresión con aguja inmediata en 2º EIC, línea medio clavicular derecha"
      },
      "explanation": {
        "pt": "O pneumotórax hipertensivo é uma emergência clínica. O tratamento deve preceder a confirmação radiológica. A toracocentese imediata com agulha é recomendada pelas diretrizes do ATLS (2023) como conduta de salvamento.",
        "en": "Tension pneumothorax is a clinical emergency. Treatment should not wait for imaging. Needle decompression is the recommended lifesaving maneuver per ATLS (2023).",
        "es": "El neumotórax hipertensivo es una emergencia clínica. El tratamiento no debe esperar a la imagen. La descompresión con aguja es el tratamiento inmediato recomendado."
      }
    },
    {
      "text": {
        "pt": "Interpretar o achado ultrassonográfico como sugestivo de pneumotórax",
        "en": "Interpret the ultrasound finding as suggestive of pneumothorax",
        "es": "Interpretar el hallazgo ecográfico como sugestivo de neumotórax"
      },
      "explanation": {
        "pt": "O sinal do código de barras em M-mode e a ausência de deslizamento pleural no ultrassom são achados clássicos de pneumotórax. A sensibilidade do ultrassom supera a da radiografia em trauma torácico.",
        "en": "The barcode sign and absent pleural sliding on ultrasound are classic pneumothorax findings. Ultrasound is more sensitive than X-ray in trauma.",
        "es": "El signo de código de barras y la ausencia de deslizamiento pleural son hallazgos clásicos en neumotórax. El ultrasonido es más sensible que la radiografía en trauma torácico."
      }
    },
    {
      "text": {
        "pt": "Aguardar radiografia portátil para confirmar o diagnóstico antes de qualquer intervenção",
        "en": "Wait for portable chest X-ray to confirm the diagnosis before any intervention",
        "es": "Esperar la radiografía portátil para confirmar el diagnóstico antes de intervenir"
      },
      "explanation": {
        "pt": "Esperar a radiografia em um paciente instável com sinais clínicos e ultrassonográficos típicos de pneumotórax hipertensivo é conduta inadequada. O atraso na descompressão pode levar a parada cardiorrespiratória. Diretrizes como ATLS, SCCM e EAST reforçam o diagnóstico clínico prioritário nesse cenário.",
        "en": "Waiting for a chest X-ray in an unstable patient with classic signs of tension pneumothorax is inappropriate. Delay in decompression can lead to cardiac arrest. ATLS and SCCM guidelines emphasize clinical diagnosis.",
        "es": "Esperar la radiografía en un paciente inestable con hallazgos clásicos es inadecuado. El retraso puede llevar a paro. ATLS y SCCM recomiendan actuar clínicamente."
      }
    },
    {
      "text": {
        "pt": "Inserir drenagem torácica em selo d’água após toracocentese de alívio",
        "en": "Insert chest tube with water seal after initial needle decompression",
        "es": "Colocar drenaje torácico con sello de agua tras descompresión inicial"
      },
      "explanation": {
        "pt": "Após toracocentese de alívio, deve-se proceder à drenagem definitiva com selo d’água. Essa abordagem é padrão após estabilização inicial do quadro agudo.",
        "en": "Following needle decompression, definitive tube thoracostomy with water seal is standard care once patient is stabilized.",
        "es": "Tras la descompresión, el drenaje definitivo con sello de agua es parte del manejo estándar."
      }
    },
    {
      "text": {
        "pt": "Avaliar lateralidade do pneumotórax pelo desvio traqueal",
        "en": "Assess pneumothorax laterality by tracheal deviation",
        "es": "Evaluar lateralidad del neumotórax por desviación traqueal"
      },
      "explanation": {
        "pt": "O desvio traqueal é um sinal tardio e pouco sensível de pneumotórax hipertensivo. Sua ausência não exclui o diagnóstico. Deve-se priorizar achados clínicos e ultrassonográficos.",
        "en": "Tracheal deviation is a late and insensitive sign of tension pneumothorax. Absence does not rule out diagnosis. Clinical and ultrasound findings should be prioritized.",
        "es": "La desviación traqueal es un signo tardío y poco sensible. Su ausencia no descarta el diagnóstico."
      }
    }
  ]
},
{
  "id": 904,
  "code": "pneumo04-q904",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topic": ["bronchoscopy", "hemoptysis", "airway_management", "icu_procedures", "pulmonary_bleeding"],
  "level": "muito_dificil",
  "correct": 1,
  "question": {
    "pt": "Homem de 67 anos, com DPOC e uso crônico de anticoagulação oral por FA, apresenta hemoptise volumosa (cerca de 250 mL em 24h) e queda de saturação para 86% com cateter nasal de 3 L/min. É entubado e admitido na UTI. Após estabilização, é realizada broncoscopia flexível que mostra sangramento difuso no brônquio principal esquerdo, sem ponto de sangramento evidente. Não há evidências de neoplasia ou corpo estranho. O sangramento permanece ativo e moderado após aspiração. Qual das condutas abaixo é mais questionável neste momento?",
    "en": "A 67-year-old man with COPD and chronic anticoagulation for atrial fibrillation presents with large-volume hemoptysis (≈250 mL over 24h) and oxygen saturation of 86% on nasal cannula. He is intubated and admitted to the ICU. Flexible bronchoscopy shows diffuse bleeding in the left main bronchus, with no clear source. No evidence of tumor or foreign body. Bleeding persists moderately after suctioning. Which of the following is the most questionable approach at this point?",
    "es": "Hombre de 67 años con EPOC y anticoagulación crónica por FA presenta hemoptisis masiva (≈250 mL en 24h) y saturación de 86% con cánula nasal. Es intubado e ingresado a la UCI. La broncoscopia flexible revela sangrado difuso en el bronquio principal izquierdo, sin foco claro. No hay evidencia de tumor ni cuerpo extraño. El sangrado persiste moderadamente tras aspiración. ¿Cuál de las siguientes estrategias es la más cuestionable en este contexto?"
  },
  "options": [
    {
      "text": {
        "pt": "Instilar grandes volumes de soro fisiológico aquecido para tentar visualizar o foco do sangramento",
        "en": "Instill large volumes of warmed saline to try to visualize the bleeding source",
        "es": "Instilar grandes volúmenes de suero salino tibio para intentar visualizar el foco del sangrado"
      },
      "explanation": {
        "pt": "Instilar grandes volumes pode piorar o sangramento e promover inundação do pulmão contralateral, além de dificultar a visualização subsequente. A maioria das diretrizes, incluindo ACCP e BTS, contraindica essa abordagem quando o foco não é claro.",
        "en": "Instilling large volumes may worsen bleeding and flood the contralateral lung, hindering further visualization. ACCP and BTS guidelines discourage this approach when the bleeding site is unclear.",
        "es": "Instilar grandes volúmenes puede agravar el sangrado y comprometer el pulmón contralateral. Las guías ACCP y BTS desaconsejan esta técnica sin foco definido."
      }
    },
    {
      "text": {
        "pt": "Realizar tamponamento seletivo com balonete em brônquio principal esquerdo",
        "en": "Perform selective tamponade with a balloon catheter in the left main bronchus",
        "es": "Realizar taponamiento selectivo con balón en el bronquio principal izquierdo"
      },
      "explanation": {
        "pt": "O tamponamento com balonete (como balão Fogarty ou balão de broncoscopia) é indicado em sangramento ativo unilateral quando o foco aproximado é conhecido. Pode proteger o pulmão contralateral e permitir hemostasia local.",
        "en": "Balloon tamponade is appropriate in active unilateral bleeding when the approximate source is known. It can protect the contralateral lung and aid in local control.",
        "es": "El taponamiento con balón está indicado en sangrado unilateral activo. Protege el pulmón contralateral y ayuda al control hemostático."
      }
    },
    {
      "text": {
        "pt": "Iniciar instilação de adrenalina diluída sob visualização direta",
        "en": "Instill diluted epinephrine under direct visualization",
        "es": "Instilar epinefrina diluida bajo visión directa"
      },
      "explanation": {
        "pt": "A adrenalina diluída (1:10.000 ou 1:20.000) pode reduzir sangramento local em hemoptises difusas ou com foco incerto. Deve ser feita com cuidado, observando resposta hemodinâmica.",
        "en": "Diluted epinephrine (1:10,000 or 1:20,000) can reduce local bleeding in diffuse hemoptysis. Should be done cautiously with hemodynamic monitoring.",
        "es": "La epinefrina diluida puede reducir el sangrado en hemoptisis difusa. Debe aplicarse con precaución y monitoreo hemodinámico."
      }
    },
    {
      "text": {
        "pt": "Manter o paciente em decúbito lateral com pulmão sangrante para baixo",
        "en": "Place patient in lateral decubitus with bleeding lung down",
        "es": "Colocar al paciente en decúbito lateral con el pulmón sangrante hacia abajo"
      },
      "explanation": {
        "pt": "Essa medida protege o pulmão contralateral da aspiração sanguínea. É uma conduta inicial importante até o controle definitivo.",
        "en": "This measure protects the contralateral lung from blood aspiration. It's a key initial intervention.",
        "es": "Protege al pulmón sano de aspiración. Es una intervención inicial crítica."
      }
    },
    {
      "text": {
        "pt": "Avaliar necessidade de broncoscópio rígido se o sangramento persistir",
        "en": "Consider rigid bronchoscopy if bleeding persists",
        "es": "Considerar broncoscopia rígida si el sangrado persiste"
      },
      "explanation": {
        "pt": "A broncoscopia rígida permite maior controle hemostático, sucção eficaz e passagem de dispositivos terapêuticos. É preferível à flexível em casos graves e refratários.",
        "en": "Rigid bronchoscopy allows better hemostasis, suctioning, and therapeutic interventions. Preferred over flexible in severe cases.",
        "es": "La broncoscopia rígida permite mejor control y manejo terapéutico. Se prefiere en casos graves."
      }
    }
  ]
},
{
  "id": 905,
  "code": "pneumo04-q905",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topic": ["hemoptysis", "lung_cancer", "interventional_radiology", "airway_management", "icu_oncology"],
  "level": "muito_dificil",
  "correct": 2,
  "question": {
    "pt": "Paciente masculino de 61 anos, tabagista com diagnóstico recente de carcinoma epidermoide de pulmão central à esquerda, apresenta hemoptise volumosa súbita com queda de SpO₂ para 81% em máscara de alta concentração. Está intubado e em ventilação mecânica. A broncoscopia mostra sangramento ativo no brônquio fonte esquerdo, com tecido friável e distorção da arquitetura local. Foi tentada instilação de vasoconstritores sem sucesso. Considerando o contexto clínico e oncológico, qual das condutas abaixo representa a abordagem mais controversa neste cenário?",
    "en": "A 61-year-old male smoker with a recent diagnosis of central squamous cell carcinoma of the left lung presents with sudden massive hemoptysis and SpO₂ dropping to 81% on a non-rebreather mask. He is intubated and mechanically ventilated. Bronchoscopy shows active bleeding from the left main bronchus, with friable tumor tissue and distorted local anatomy. Vasoconstrictor instillation has failed. Considering this clinical and oncologic context, which of the following approaches is the most controversial?",
    "es": "Hombre de 61 años, fumador, con diagnóstico reciente de carcinoma escamoso pulmonar central izquierdo presenta hemoptisis masiva repentina y SpO₂ de 81% con mascarilla de alta concentración. Está intubado y con ventilación mecánica. La broncoscopia revela sangrado activo en el bronquio principal izquierdo, con tejido tumoral friable y anatomía distorsionada. Falló la instilación de vasoconstrictores. En este contexto clínico y oncológico, ¿cuál de las siguientes conductas es la más controvertida?"
  },
  "options": [
    {
      "text": {
        "pt": "Manter o paciente em decúbito lateral com o lado sangrante voltado para baixo",
        "en": "Place the patient in lateral decubitus with the bleeding side down",
        "es": "Colocar al paciente en decúbito lateral con el lado sangrante hacia abajo"
      },
      "explanation": {
        "pt": "Essa posição protege o pulmão contralateral da aspiração sanguínea, sendo uma medida padrão em casos de hemoptise maciça unilateral, conforme recomendado em diretrizes de cuidados críticos.",
        "en": "This position protects the contralateral lung from blood aspiration and is standard in massive unilateral hemoptysis according to critical care guidelines.",
        "es": "Esta posición protege al pulmón contralateral de la aspiración sanguínea y es estándar en casos de hemoptisis masiva unilateral."
      }
    },
    {
      "text": {
        "pt": "Indicar cirurgia pulmonar de urgência com lobectomia hemostática",
        "en": "Indicate urgent pulmonary surgery with hemostatic lobectomy",
        "es": "Indicar cirugía pulmonar urgente con lobectomía hemostática"
      },
      "explanation": {
        "pt": "A cirurgia pulmonar de emergência em pacientes com sangramento ativo por tumor central é altamente controversa. O risco de mortalidade é elevado, especialmente sem estabilização prévia. Diretrizes como BTS e ACCP recomendam priorizar embolização sempre que possível, reservando cirurgia para casos refratários com estabilidade relativa.",
        "en": "Urgent lung surgery in patients with active bleeding from central tumors is highly controversial. Mortality risk is high, especially without prior stabilization. Guidelines (BTS, ACCP) recommend embolization first, reserving surgery for select, relatively stable cases.",
        "es": "La cirugía pulmonar urgente en tumores centrales sangrantes es altamente controvertida. El riesgo quirúrgico es muy alto. Las guías (BTS, ACCP) recomiendan embolización como primera línea."
      }
    },
    {
      "text": {
        "pt": "Solicitar arteriografia e embolização da artéria brônquica",
        "en": "Request bronchial artery embolization",
        "es": "Solicitar embolización de arteria bronquial"
      },
      "explanation": {
        "pt": "A embolização da artéria brônquica é o tratamento preferencial em casos de hemoptise maciça de origem tumoral, mesmo sem foco exato visualizado. Estudos demonstram taxas de controle >70% com complicações aceitáveis. Pode ser repetida se necessário.",
        "en": "Bronchial artery embolization is the preferred treatment in massive tumor-related hemoptysis, even when no precise bleeding site is seen. Control rates exceed 70% with acceptable complication rates. Can be repeated if needed.",
        "es": "La embolización de la arteria bronquial es el tratamiento preferido en hemoptisis tumoral. Tiene alta tasa de éxito y puede repetirse si recurre el sangrado."
      }
    },
    {
      "text": {
        "pt": "Considerar uso de broncoscópio rígido com laser ou crioterapia",
        "en": "Consider rigid bronchoscopy with laser or cryotherapy",
        "es": "Considerar broncoscopia rígida con láser o crioterapia"
      },
      "explanation": {
        "pt": "O uso do broncoscópio rígido associado a técnicas térmicas pode ser útil na hemostasia paliativa em neoplasias centrais, especialmente em sangramentos persistentes. Deve ser realizado por equipe experiente em ambiente controlado.",
        "en": "Rigid bronchoscopy with thermal therapies can aid in palliative hemostasis for central tumors, especially in persistent bleeding. Requires experienced operators in controlled settings.",
        "es": "La broncoscopia rígida con terapias térmicas puede ser útil en hemoptisis neoplásica central persistente. Requiere equipo experto."
      }
    },
    {
      "text": {
        "pt": "Suspender anticoagulação imediatamente e corrigir INR com plasma fresco ou vitamina K",
        "en": "Immediately discontinue anticoagulation and correct INR with FFP or vitamin K",
        "es": "Suspender anticoagulación de inmediato y corregir INR con plasma fresco o vitamina K"
      },
      "explanation": {
        "pt": "A correção da coagulopatia é essencial em pacientes com hemoptise, especialmente se estiverem em uso de anticoagulantes. Deve-se corrigir o INR com plasma fresco, protrombina complexa ou vitamina K, conforme o agente em uso.",
        "en": "Coagulopathy correction is essential in hemoptysis, particularly in anticoagulated patients. INR correction with FFP, prothrombin complex, or vitamin K is appropriate depending on the anticoagulant used.",
        "es": "La corrección de la coagulopatía es fundamental. Se debe ajustar el INR con plasma fresco, complejo protrombínico o vitamina K, según el anticoagulante."
      }
    }
  ]
},

];

questionBank.addBank(bancoPneumoDificilima);
