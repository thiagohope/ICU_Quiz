const bancoPneumoDificilima = [
{
  "id": 901,
  "code": "pneumo04-q901",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["oxygen_therapy", "community_acquired_pneumonia", "hiflow", "niv", "respiratory_failure"],
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
  "topics": ["ards", "compliance", "mechanical_ventilation", "recruitment", "peep"],
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
  "topics": ["tension_pneumothorax", "trauma", "ultrasound", "emergency", "chest_drain"],
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
  "topics": ["bronchoscopy", "hemoptysis", "airway_management", "icu_procedures", "pulmonary_bleeding"],
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
  "topics": ["hemoptysis", "lung_cancer", "interventional_radiology", "airway_management", "icu_oncology"],
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
{
  "id": 906,
  "code": "pneumo04-q906",
 "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["staphylococcus_aureus", "pneumonia", "antibiotic_resistance", "icu_infection", "microbiology"],
  "level": "muito_dificil",
  "correct": 3,
  "question": {
    "pt": "Mulher de 36 anos, previamente hígida, é internada na UTI com pneumonia grave após quadro gripal. Apresenta febre, hemoptise, dessaturação progressiva e infiltrado cavitário no lobo superior direito. O escarro induzido é positivo para *Staphylococcus aureus* sensível à meticilina pela PCR rápida multiplex (target mecA negativo), e a cultura posterior mostra crescimento com MIC de vancomicina = 2 µg/mL. A paciente está com instabilidade hemodinâmica e em ventilação invasiva. Qual das seguintes abordagens terapêuticas é menos indicada neste momento?",
    "en": "A 36-year-old previously healthy woman is admitted to the ICU with severe pneumonia following a flu-like illness. She presents with fever, hemoptysis, progressive hypoxia, and a cavitary infiltrate in the right upper lobe. Sputum PCR rapidly identifies *Staphylococcus aureus* as methicillin-sensitive (mecA-negative), and subsequent culture confirms growth with a vancomycin MIC of 2 µg/mL. The patient is hemodynamically unstable and mechanically ventilated. Which of the following treatment approaches is least appropriate at this point?",
    "es": "Mujer de 36 años, previamente sana, es ingresada en la UCI por neumonía grave tras un cuadro gripal. Presenta fiebre, hemoptisis, hipoxemia progresiva e infiltrado cavitado en el lóbulo superior derecho. El esputo inducido es positivo para *Staphylococcus aureus* sensible a meticilina (PCR negativa para mecA), y el cultivo posterior muestra un MIC para vancomicina de 2 µg/mL. La paciente está inestable hemodinámicamente y en ventilación mecánica. ¿Cuál de las siguientes estrategias terapéuticas es la menos adecuada?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar ceftarolina em dose alta ajustada para função renal",
        "en": "Start high-dose ceftaroline adjusted for renal function",
        "es": "Iniciar ceftarolina en dosis altas ajustadas a la función renal"
      },
      "explanation": {
        "pt": "Ceftarolina tem alta afinidade por PBP2a e cobertura eficaz contra S. aureus, incluindo cepas produtoras de PVL. É recomendada em pneumonias necrosantes graves. A ESCMID e o IDSA apoiam seu uso em casos refratários ou com MIC de vancomicina limítrofe.",
        "en": "Ceftaroline has high affinity for PBP2a and is effective against S. aureus, including PVL-producing strains. Recommended in necrotizing pneumonia. ESCMID and IDSA endorse its use when vancomycin MIC is borderline.",
        "es": "Ceftarolina tiene alta afinidad por PBP2a y buena actividad frente a S. aureus productor de PVL. Recomendado por ESCMID e IDSA para neumonías graves con MIC límite a vancomicina."
      }
    },
    {
      "text": {
        "pt": "Optar por linezolida intravenosa como primeira linha",
        "en": "Use intravenous linezolid as first-line therapy",
        "es": "Utilizar linezolid intravenoso como primera línea"
      },
      "explanation": {
        "pt": "Linezolida é eficaz contra S. aureus sensível e resistente, com boa penetração pulmonar e efeito antitoxina. Estudos como o ZEPHyR demonstram vantagens clínicas sobre vancomicina em pneumonia por S. aureus grave.",
        "en": "Linezolid is effective against both MSSA and MRSA, has good pulmonary penetration, and suppresses toxin production. Studies like ZEPHyR show clinical advantage over vancomycin in severe pneumonia.",
        "es": "Linezolid es eficaz contra SARM y SASM, con buena penetración pulmonar y efecto antitoxina. Estudios como ZEPHyR lo favorecen frente a vancomicina."
      }
    },
    {
      "text": {
        "pt": "Avaliar a presença de PVL e considerar imunoglobulina intravenosa adjuvante",
        "en": "Assess PVL production and consider adjunctive intravenous immunoglobulin",
        "es": "Evaluar la producción de PVL y considerar inmunoglobulina intravenosa como adyuvante"
      },
      "explanation": {
        "pt": "A presença de leucocidina de Panton-Valentine (PVL) está associada a necrose pulmonar e choque séptico. A imunoglobulina intravenosa pode ser considerada como adjuvante imunomodulador em casos graves.",
        "en": "PVL production is linked to necrotizing pneumonia and septic shock. IVIG may be considered as an adjunct in severe cases to neutralize toxin effects.",
        "es": "La producción de PVL se asocia a neumonía necrosante. La inmunoglobulina IV puede ser útil como adyuvante en casos graves."
      }
    },
    {
      "text": {
        "pt": "Manter vancomicina enquanto MIC estiver abaixo de 4 µg/mL",
        "en": "Continue vancomycin as long as MIC is below 4 µg/mL",
        "es": "Mantener vancomicina mientras el MIC esté por debajo de 4 µg/mL"
      },
      "explanation": {
        "pt": "Embora o ponto de corte da vancomicina para S. aureus seja ≤ 2 µg/mL, diversos estudos demonstram pior desfecho clínico com MICs de 2. A eficácia pulmonar da vancomicina é limitada, e o IDSA recomenda considerar alternativas se MIC = 2.",
        "en": "While vancomycin breakpoint is ≤2 µg/mL, clinical outcomes worsen at MIC 2. Vancomycin has limited pulmonary penetration; IDSA recommends alternatives if MIC is 2.",
        "es": "Aunque el punto de corte de vancomicina es ≤2 µg/mL, se asocian peores desenlaces clínicos. IDSA recomienda cambiar si MIC es 2."
      }
    },
    {
      "text": {
        "pt": "Adicionar cobertura empírica para anaeróbios com metronidazol",
        "en": "Add empirical anaerobic coverage with metronidazole",
        "es": "Agregar cobertura empírica para anaerobios con metronidazol"
      },
      "explanation": {
        "pt": "A pneumonia necrosante pós-influenza com foco lobar cavitário e cultura positiva para S. aureus não justifica cobertura para anaeróbios, a menos que haja evidência clara de aspiração. O uso indiscriminado de metronidazol pode atrasar a antibioticoterapia direcionada.",
        "en": "Necrotizing pneumonia with confirmed S. aureus does not justify anaerobic coverage unless aspiration is suspected. Empirical metronidazole may delay targeted therapy.",
        "es": "En neumonía necrosante por S. aureus, no se justifica cubrir anaerobios sin sospecha clara de aspiración. El metronidazol puede desviar el tratamiento dirigido."
      }
    }
  ]
},
{
  "id": 907,
  "code": "pneumo04-q907",
 "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["lung_ultrasound", "ARDS", "pulmonary_edema", "differential_diagnosis", "POCUS"],
  "level": "muito_dificil",
  "correct": 1,
  "question": {
    "pt": "Homem de 68 anos, hipertenso e diabético, é admitido na UTI com insuficiência respiratória aguda, SpO₂ 84% em máscara com reservatório, taquipneia e ausculta com murmúrio diminuído difusamente. Ele é rapidamente avaliado com POCUS pulmonar, que revela padrão bilateral de linhas B difusas com linha pleural regular e deslizante (lung sliding preservado), sem consolidações. Não há derrames pleurais. A ecocardiografia mostra VE hipertrofiado com disfunção diastólica. Com base nas evidências atuais e nas recomendações do International Lung Ultrasound Consensus, qual das alternativas abaixo é a interpretação **menos compatível** com esse achado?",
    "en": "A 68-year-old man with hypertension and diabetes is admitted to the ICU with acute respiratory failure, SpO₂ 84% on a non-rebreather mask, tachypnea, and diffusely decreased breath sounds. Lung POCUS reveals a bilateral diffuse B-line pattern with regular, sliding pleural lines and no consolidations or effusions. Echocardiography shows a hypertrophied LV with diastolic dysfunction. According to current evidence and the International Lung Ultrasound Consensus, which of the following interpretations is **least consistent** with these findings?",
    "es": "Hombre de 68 años, hipertenso y diabético, ingresa en la UCI con insuficiencia respiratoria aguda, SpO₂ 84% con mascarilla con reservorio, taquipnea y murmullo disminuido difuso. El POCUS pulmonar muestra patrón bilateral difuso de líneas B con línea pleural regular y móvil (lung sliding preservado), sin consolidaciones ni derrames. La ecocardiografía muestra VI hipertrofiado con disfunción diastólica. Según la evidencia actual y el Consenso Internacional de Ecografía Pulmonar, ¿cuál de las siguientes interpretaciones es la **menos coherente** con estos hallazgos?"
  },
  "options": [
    {
      "text": {
        "pt": "O padrão sugere edema pulmonar cardiogênico, com distribuição simétrica de B-lines e linha pleural preservada",
        "en": "The pattern suggests cardiogenic pulmonary edema, with symmetric B-lines and preserved pleural line",
        "es": "El patrón sugiere edema pulmonar cardiogénico, con líneas B simétricas y línea pleural preservada"
      },
      "explanation": {
        "pt": "O padrão típico de edema cardiogênico no POCUS inclui linhas B bilaterais difusas, distribuição simétrica e linha pleural regular e móvel. A ausência de consolidações reforça o diagnóstico. Essa interpretação é compatível com os achados.",
        "en": "Typical cardiogenic edema on POCUS presents with diffuse bilateral B-lines, symmetric distribution, and a smooth, sliding pleural line. Absence of consolidations supports this. This interpretation is consistent.",
        "es": "El edema cardiogénico típico en POCUS muestra líneas B difusas bilaterales, distribución simétrica y línea pleural regular y móvil. La ausencia de consolidaciones lo respalda. Es coherente."
      }
    },
    {
      "text": {
        "pt": "O diagnóstico mais provável é congestão pulmonar com base cardiogênica, sem sinais sugestivos de SDRA",
        "en": "The most likely diagnosis is cardiogenic pulmonary congestion, without features suggestive of ARDS",
        "es": "El diagnóstico más probable es congestión pulmonar cardiogénica, sin hallazgos sugerentes de SDRA"
      },
      "explanation": {
        "pt": "Na SDRA, espera-se encontrar consolidações subpleurais, linha pleural irregular e padrão assimétrico de B-lines, o que não é o caso aqui. Portanto, o diagnóstico de congestão cardiogênica é o mais provável.",
        "en": "ARDS typically shows subpleural consolidations, irregular pleural line, and asymmetrical B-lines, absent in this case. Hence, cardiogenic congestion is more likely.",
        "es": "En SDRA es típico encontrar consolidaciones subpleurales, línea pleural irregular y patrón asimétrico de líneas B. No se observan en este caso. Lo más probable es congestión cardiogénica."
      }
    },
    {
      "text": {
        "pt": "O padrão é sugestivo de consolidação alveolar com origem infecciosa bilateral",
        "en": "The pattern suggests bilateral alveolar consolidation of infectious origin",
        "es": "El patrón sugiere consolidación alveolar bilateral de origen infeccioso"
      },
      "explanation": {
        "pt": "Consolidações infecciosas costumam apresentar áreas hiperecogênicas com sinal de hepatização, broncogramas aéreos e linha pleural irregular, o que não foi observado. Esta opção contradiz os achados descritos.",
        "en": "Infectious consolidations typically present as hyperechoic areas with hepatization, air bronchograms, and irregular pleural lines — not seen here. This contradicts the described findings.",
        "es": "Las consolidaciones infecciosas suelen mostrar hepatización, broncogramas aéreos y línea pleural irregular, lo cual no se observó. Esta opción contradice los hallazgos."
      }
    },
    {
      "text": {
        "pt": "A ausência de consolidações subpleurais sugere padrão de congestão intersticial e não de lesão alveolar difusa",
        "en": "Absence of subpleural consolidations suggests interstitial congestion rather than diffuse alveolar injury",
        "es": "La ausencia de consolidaciones subpleurales sugiere congestión intersticial más que daño alveolar difuso"
      },
      "explanation": {
        "pt": "Na SDRA, consolidado subpleural é característico. A ausência dele, associada à linha pleural regular e B-lines difusas, aponta para congestão intersticial. Interpretação correta.",
        "en": "In ARDS, subpleural consolidation is typical. Its absence, along with preserved pleural line and diffuse B-lines, points toward interstitial congestion. This is a correct interpretation.",
        "es": "En el SDRA, las consolidaciones subpleurales son típicas. Su ausencia indica congestión intersticial. Interpretación correcta."
      }
    },
    {
      "text": {
        "pt": "A avaliação do padrão de linhas B deve ser complementada por análise do deslizamento pleural",
        "en": "B-line patterns must be interpreted in conjunction with pleural sliding",
        "es": "El patrón de líneas B debe evaluarse junto con el deslizamiento pleural"
      },
      "explanation": {
        "pt": "A análise do lung sliding é essencial para diferenciar padrões de congestão, fibrose e pneumotórax. Sua preservação sugere ausência de atelectasia importante ou pneumotórax.",
        "en": "Pleural sliding is essential to differentiate congestion, fibrosis, or pneumothorax. Its preservation rules out severe atelectasis or pneumothorax.",
        "es": "El deslizamiento pleural ayuda a distinguir congestión, fibrosis y neumotórax. Su presencia descarta atelectasia grave o neumotórax."
      }
    }
  ]
},
{
  "id": 908,
  "code": "pneumo04-q908",
 "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["diaphragm_ultrasound", "weaning", "extubation", "icu_monitoring", "mechanical_ventilation"],
  "level": "muito_dificil",
  "correct": 4,
  "question": {
    "pt": "Homem de 73 anos, internado por pneumonia e sepse respiratória, está há 10 dias em ventilação mecânica. Após estabilização clínica, sedação suspensa e melhora laboratorial, ele inicia protocolo de desmame. Em ventilação espontânea com suporte mínimo, é submetido a avaliação de ultrassom diafragmático, que mostra excursão de 0,8 cm bilateralmente e fração de espessamento (DTF) de 15% à direita e 13% à esquerda. O índice f/VT está em 85. Qual das abordagens abaixo é mais consistente com a evidência atual sobre predição de sucesso da extubação?",
    "en": "A 73-year-old man, hospitalized for pneumonia and respiratory sepsis, has been mechanically ventilated for 10 days. After clinical stabilization and cessation of sedation, he starts weaning. While on minimal support, diaphragm ultrasound shows bilateral excursion of 0.8 cm and thickening fraction (DTF) of 15% on the right and 13% on the left. His rapid shallow breathing index (f/VT) is 85. According to current evidence, which of the following approaches best reflects extubation readiness?",
    "es": "Hombre de 73 años, hospitalizado por neumonía y sepsis respiratoria, lleva 10 días con ventilación mecánica. Tras estabilización clínica y suspensión de sedación, inicia el destete. En soporte mínimo, la ecografía diafragmática muestra excursión bilateral de 0.8 cm y fracción de engrosamiento (DTF) de 15% derecha y 13% izquierda. Su índice f/VT es 85. ¿Cuál de los siguientes enfoques refleja mejor la preparación para la extubación según la evidencia actual?"
  },
  "options": [
    {
      "text": {
        "pt": "Extubar imediatamente, pois o f/VT é < 105 e indica bom prognóstico",
        "en": "Proceed to extubation, since f/VT < 105 indicates good prognosis",
        "es": "Extubar inmediatamente, ya que el f/VT < 105 indica buen pronóstico"
      },
      "explanation": {
        "pt": "Embora o índice f/VT esteja dentro do limite clássico, estudos recentes mostram que valores limítrofes de DTF e excursão diafragmática < 1 cm estão associados a maior risco de falência de extubação. A avaliação diafragmática deve complementar os índices convencionais.",
        "en": "Although f/VT is acceptable, recent studies show that low DTF and excursion (<1 cm) are associated with extubation failure. Diaphragmatic assessment is essential beyond classic indices.",
        "es": "Aunque el f/VT está dentro del rango aceptable, DTF y excursión bajos (<1 cm) se asocian a mayor fracaso de extubación. Es clave integrar la ecografía diafragmática."
      }
    },
    {
      "text": {
        "pt": "Avaliar somente o volume corrente e PaO₂/FiO₂, pois o ultrassom diafragmático tem baixa sensibilidade",
        "en": "Assess tidal volume and PaO₂/FiO₂ only, as diaphragm ultrasound has low sensitivity",
        "es": "Evaluar solo volumen corriente y PaO₂/FiO₂, ya que la ecografía diafragmática tiene baja sensibilidad"
      },
      "explanation": {
        "pt": "A ultrassonografia diafragmática demonstrou boa acurácia em estudos como o de Ferrari et al. e Jaber et al., com DTF > 30% e excursão > 1 cm associados ao sucesso de extubação. Ignorá-la reduz o valor preditivo da avaliação.",
        "en": "Diaphragm ultrasound has shown high accuracy in studies (Ferrari, Jaber), with DTF >30% and excursion >1 cm predicting success. Ignoring it reduces predictive strength.",
        "es": "La ecografía diafragmática tiene buena precisión según Ferrari y Jaber. DTF >30% y excursión >1 cm predicen éxito. Ignorarla limita el pronóstico."
      }
    },
    {
      "text": {
        "pt": "A excursão diafragmática é adequada para extubação se > 0,4 cm em qualquer lado",
        "en": "Diaphragm excursion is adequate if >0.4 cm on either side",
        "es": "La excursión diafragmática es adecuada si >0.4 cm en cualquier lado"
      },
      "explanation": {
        "pt": "Excursões <1.0 cm têm sido associadas a maior risco de falência. Valores >1.0 cm (idealmente 1.1 a 1.5 cm) são mais preditivos de sucesso. O limiar de 0.4 cm é usado apenas para detectar movimentação, não para predizer desmame.",
        "en": "Excursions <1.0 cm are linked to failure. Values >1.0–1.5 cm are more predictive of success. The 0.4 cm cutoff is for detecting motion, not for predicting outcome.",
        "es": "Excursiones <1.0 cm se asocian a fallos. Valores >1.0 cm predicen mejor el éxito. El corte de 0.4 cm detecta movimiento, no pronóstico."
      }
    },
    {
      "text": {
        "pt": "Adiar a extubação e investigar fraqueza diafragmática, pois tanto DTF quanto excursão estão abaixo dos limiares preditivos",
        "en": "Postpone extubation and investigate diaphragmatic weakness, since both DTF and excursion are below predictive thresholds",
        "es": "Posponer extubación e investigar debilidad diafragmática, ya que tanto DTF como excursión están por debajo de los umbrales predictivos"
      },
      "explanation": {
        "pt": "DTF < 20% e excursão < 1 cm indicam provável disfunção diafragmática, especialmente em pacientes idosos, sépticos ou em ventilação prolongada. Estudos (Jaber et al., 2018) reforçam o papel da USG como ferramenta sensível na decisão de extubação.",
        "en": "DTF <20% and excursion <1 cm strongly suggest diaphragm dysfunction, especially in elderly or prolonged MV. Studies (Jaber et al., 2018) support US as a sensitive tool for extubation readiness.",
        "es": "DTF <20% y excursión <1 cm indican probable disfunción diafragmática. Estudios como Jaber et al. apoyan el uso de US para guiar la extubación."
      }
    },
    {
      "text": {
        "pt": "Extubar se o paciente tolerar teste espontâneo por 30 minutos, independentemente da USG",
        "en": "Extubate if the patient tolerates 30-minute spontaneous breathing trial, regardless of ultrasound",
        "es": "Extubar si tolera prueba espontánea de 30 minutos, independientemente de la ecografía"
      },
      "explanation": {
        "pt": "O teste espontâneo é fundamental, mas falhas precoces podem ser prevenidas com avaliação adicional por ultrassonografia, que se mostra útil em pacientes com risco de disfunção muscular ventilatória. A USG complementa, mas não substitui, o julgamento clínico.",
        "en": "Spontaneous breathing trial is essential, but ultrasound adds value in detecting early failure risk. It complements, not replaces, clinical judgment.",
        "es": "La prueba espontánea es clave, pero la ecografía ayuda a identificar riesgo de fallo precoz. Complementa el juicio clínico."
      }
    }
  ]
},
  {
    "id": 909,
    "code": "pneumo04-q909",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["ECCO2R", "ARDS", "hypercapnia", "ventilation", "extracorporeal_support"],
    "level": "muito_dificil",
    "correct": 3,
    "question": {
      "pt": "Homem de 61 anos com DPOC grave e história de múltiplas internações é admitido por pneumonia e desenvolve insuficiência respiratória aguda hipercápnica. Após tentativa de ventilação não invasiva sem sucesso, evolui com PaCO₂ de 98 mmHg e pH 7,12 sob ventilação invasiva protetora. Dada a dificuldade em manter volume corrente adequado sem agravar a hipercapnia, considera-se uso de ECCO₂R. Qual das alternativas abaixo reflete melhor as indicações e limitações dessa técnica, segundo consensos atuais (ERS 2023, ELSO)?",
      "en": "A 61-year-old man with severe COPD and multiple prior admissions is hospitalized for pneumonia and develops acute hypercapnic respiratory failure. After failed non-invasive ventilation, he presents with a PaCO₂ of 98 mmHg and pH 7.12 under protective invasive ventilation. Due to difficulty achieving adequate tidal volume without worsening hypercapnia, ECCO₂R is considered. Which of the following best reflects the current indications and limitations of this technique (ERS 2023, ELSO)?",
      "es": "Hombre de 61 años con EPOC grave e internaciones previas múltiples es hospitalizado por neumonía y desarrolla insuficiencia respiratoria hipercápnica aguda. Tras falla de la ventilación no invasiva, presenta PaCO₂ de 98 mmHg y pH 7,12 bajo ventilación invasiva protectora. Ante la dificultad para alcanzar un volumen corriente adecuado sin agravar la hipercapnia, se considera ECCO₂R. ¿Cuál de las siguientes alternativas refleja mejor las indicaciones y limitaciones actuales de esta técnica (ERS 2023, ELSO)?"
    },
    "options": [
      {
        "text": {
          "pt": "A técnica está indicada apenas como ponte para ECMO-VV em pacientes com falência refratária à ventilação convencional",
          "en": "The technique is only indicated as a bridge to VV-ECMO in patients with refractory failure to conventional ventilation",
          "es": "La técnica solo está indicada como puente a ECMO-VV en pacientes con fracaso refractario a la ventilación convencional"
        },
        "explanation": {
          "pt": "Embora ECCO₂R possa ser utilizada em pacientes em transição para ECMO-VV, seu papel principal hoje é permitir ventilação protetora extrema em hipercapnia grave, mesmo sem critérios formais para ECMO. O uso como ponte exclusiva para ECMO não representa sua principal indicação segundo ERS 2023.",
          "en": "Although ECCO₂R may be used as a bridge to ECMO-VV, its primary role is to allow ultra-protective ventilation in severe hypercapnia even without formal ECMO criteria. Its exclusive use as a bridge is not the main indication per ERS 2023.",
          "es": "Aunque ECCO₂R puede usarse como puente a ECMO-VV, su rol principal es permitir ventilación ultraprotetora en hipercapnia grave incluso sin criterios formales para ECMO. No es su indicación principal según ERS 2023."
        }
      },
      {
        "text": {
          "pt": "ECCO₂R está indicada para todos os pacientes com PaCO₂ > 60 mmHg e acidose metabólica associada",
          "en": "ECCO₂R is indicated for all patients with PaCO₂ > 60 mmHg and associated metabolic acidosis",
          "es": "ECCO₂R está indicada para todos los pacientes con PaCO₂ > 60 mmHg y acidosis metabólica asociada"
        },
        "explanation": {
          "pt": "O uso de ECCO₂R deve ser reservado para hipercapnia refratária grave com acidose respiratória persistente. Acidose mista ou compensada, ou hipercapnia leve a moderada, não são indicações absolutas. A seleção deve considerar gravidade, benefício esperado e riscos do procedimento.",
          "en": "ECCO₂R should be reserved for severe refractory hypercapnia with persistent respiratory acidosis. Mixed or compensated acidosis or mild-moderate hypercapnia are not absolute indications. Patient selection is key.",
          "es": "ECCO₂R debe reservarse para hipercapnia grave y refractaria con acidosis respiratoria persistente. Acidosis mixta o hipercapnia leve-moderada no son indicaciones absolutas. La selección es fundamental."
        }
      },
      {
        "text": {
          "pt": "Não há benefício clínico demonstrado em nenhuma população, e seu uso deve ser evitado",
          "en": "No clinical benefit has been demonstrated in any population, and its use should be avoided",
          "es": "No se ha demostrado beneficio clínico en ninguna población y su uso debe evitarse"
        },
        "explanation": {
          "pt": "Estudos como SUPERNOVA e experiências observacionais sugerem melhora na acidose e ventilação com ECCO₂R em pacientes selecionados. Ainda não há benefício comprovado em mortalidade, mas seu uso é considerado viável e seguro em centros experientes para suporte adjuvante.",
          "en": "Studies like SUPERNOVA and observational data suggest improvement in acidosis and ventilation with ECCO₂R in selected patients. Mortality benefit is not confirmed, but the technique is viable and safe in expert centers.",
          "es": "Estudios como SUPERNOVA y datos observacionales sugieren mejora en la acidosis y ventilación con ECCO₂R en pacientes seleccionados. No se ha confirmado beneficio en mortalidad, pero es viable y segura en centros especializados."
        }
      },
      {
        "text": {
          "pt": "A técnica é indicada para pacientes com hipercapnia refratária, permitindo ventilação protetora ultraconservadora",
          "en": "The technique is indicated for patients with refractory hypercapnia, enabling ultra-protective ventilation",
          "es": "La técnica está indicada en pacientes con hipercapnia refractaria, permitiendo ventilación ultraprotetora"
        },
        "explanation": {
          "pt": "ECCO₂R (remoção extracorpórea de CO₂) é uma abordagem inovadora voltada ao controle da hipercapnia grave quando os parâmetros ventilatórios convencionais se tornam limitantes. Permite redução segura do volume corrente para níveis <4 mL/kg de peso ideal. Recomendada em guidelines da European Respiratory Society (ERS 2023) e da Extracorporeal Life Support Organization (ELSO) para casos selecionados, principalmente DPOC ou ARDS com acidose refratária. Seu uso requer anticoagulação e cuidado com sangramentos, tromboses e limitações técnicas.",
          "en": "ECCO₂R is an innovative approach for controlling severe hypercapnia when conventional ventilator settings become limiting. It enables safe tidal volume reduction to <4 mL/kg predicted body weight. Recommended by ERS 2023 and ELSO for selected cases, particularly COPD or ARDS with refractory acidosis. Requires anticoagulation and careful monitoring for bleeding and technical complications.",
          "es": "ECCO₂R es un enfoque innovador para controlar hipercapnia severa cuando los parámetros ventilatorios convencionales son insuficientes. Permite reducción segura del volumen corriente a <4 mL/kg de peso ideal. Recomendado por ERS 2023 y ELSO en casos seleccionados, especialmente en EPOC o SDRA con acidosis refractaria. Requiere anticoagulación y vigilancia estrecha por complicaciones técnicas y sangrado."
        }
      }
    ]
  },
{
    "id": 910,
    "code": "pneumo04-q910",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["empyema", "pleural_drainage", "ultrasound", "CT_scan", "interventional_radiology"],
    "level": "muito_dificil",
    "correct": 2,
    "question": {
      "pt": "Mulher de 68 anos, diabética e hipertensa, está internada por pneumonia com derrame pleural à esquerda. Após 72 horas de antibióticoterapia empírica, permanece febril, com leucocitose e PCR elevada. A ultrassonografia torácica evidencia septações finas no líquido pleural, e a tomografia revela coleção loculada no espaço pleural posterior. Qual das abordagens a seguir é mais apropriada, considerando evidências atuais (BTS, American Thoracic Society, Fleischner Society)?",
      "en": "A 68-year-old woman with diabetes and hypertension is hospitalized for pneumonia with a left-sided pleural effusion. After 72 hours of empirical antibiotics, she remains febrile with leukocytosis and elevated CRP. Thoracic ultrasound reveals thin septations in the pleural fluid, and CT shows a loculated collection in the posterior pleural space. Which of the following approaches is most appropriate according to current evidence (BTS, American Thoracic Society, Fleischner Society)?",
      "es": "Mujer de 68 años, diabética e hipertensa, está hospitalizada por neumonía con derrame pleural izquierdo. Tras 72 horas de antibióticos empíricos, sigue febril, con leucocitosis y PCR elevada. La ecografía torácica muestra septaciones finas y la TC revela colección loculada en el espacio pleural posterior. ¿Cuál de los siguientes enfoques es más apropiado según la evidencia actual (BTS, American Thoracic Society, Fleischner Society)?"
    },
    "options": [
      {
        "text": {
          "pt": "Aumentar espectro antimicrobiano e observar resposta clínica",
          "en": "Broaden antibiotic coverage and monitor clinical response",
          "es": "Ampliar el espectro antibiótico y observar la respuesta clínica"
        },
        "explanation": {
          "pt": "Embora o ajuste antibiótico seja importante, a presença de loculações indica fase fibrinopurulenta do empiema, que raramente responde apenas à terapia médica. O atraso na drenagem pode levar à organização fibrótica e necessidade cirúrgica.",
          "en": "Although antibiotic adjustment is relevant, the presence of loculations indicates the fibrinopurulent stage of empyema, which rarely responds to medical therapy alone. Delay in drainage may lead to fibrotic organization requiring surgery.",
          "es": "Aunque el ajuste antibiótico es relevante, la presencia de loculaciones indica una fase fibrinopurulenta del empiema, que rara vez responde solo al tratamiento médico. El retraso en el drenaje puede llevar a organización fibrótica."
        }
      },
      {
        "text": {
          "pt": "Realizar punção torácica diagnóstica e repetir imagem em 72 horas",
          "en": "Perform diagnostic thoracentesis and repeat imaging in 72 hours",
          "es": "Realizar toracocentesis diagnóstica y repetir imagen en 72 horas"
        },
        "explanation": {
          "pt": "A punção pode ser útil, mas não substitui a drenagem quando há septações e sinais de loculação. A estratégia expectante com imagem seriada não é indicada na fase fibrinopurulenta estabelecida.",
          "en": "Thoracentesis may be helpful, but it does not replace drainage in the presence of septations and loculations. Expectant management with serial imaging is not indicated in the fibrinopurulent phase.",
          "es": "La toracocentesis puede ser útil, pero no sustituye al drenaje cuando hay septaciones y loculaciones. El manejo expectante con imágenes seriadas no está indicado en esta fase."
        }
      },
      {
        "text": {
          "pt": "Indicar drenagem pleural guiada por imagem com possível instilação de fibrinolíticos",
          "en": "Indicate image-guided pleural drainage with possible fibrinolytic instillation",
          "es": "Indicar drenaje pleural guiado por imagen con posible instilación de fibrinolíticos"
        },
        "explanation": {
          "pt": "O tratamento de empiema loculado requer drenagem ativa. A abordagem guiada por imagem (ultrassom ou TC) melhora a precisão e segurança. A instilação de alteplase e DNase mostrou benefício em estudos como MIST-2, com maior resolução do quadro e menor necessidade de cirurgia.",
          "en": "Treatment of loculated empyema requires active drainage. Image-guided approaches (ultrasound or CT) improve accuracy and safety. Intrapleural alteplase and DNase, as in the MIST-2 trial, improve resolution and reduce surgical needs.",
          "es": "El tratamiento del empiema loculado requiere drenaje activo. El abordaje guiado por imagen mejora precisión y seguridad. El uso intrapleural de alteplasa y DNase (estudio MIST-2) mejora la resolución y reduce la necesidad quirúrgica."
        }
      },
      {
        "text": {
          "pt": "Encaminhar para decorticação cirúrgica precoce",
          "en": "Refer for early surgical decortication",
          "es": "Derivar para decorticación quirúrgica precoz"
        },
        "explanation": {
          "pt": "A cirurgia precoce pode ser considerada em falhas de drenagem ou empiema organizado. No entanto, em pacientes sem instabilidade, o manejo inicial com drenagem e fibrinolíticos é preferido, evitando intervenções maiores.",
          "en": "Early surgery may be considered in drainage failure or organized empyema. However, in stable patients, initial management with drainage and fibrinolytics is preferred to avoid major interventions.",
          "es": "La cirugía precoz puede considerarse en fallas de drenaje o empiema organizado. Pero en pacientes estables, el manejo inicial con drenaje y fibrinolíticos es preferido para evitar intervenciones mayores."
        }
      }
    ]
  },
  {
    "id": 911,
    "code": "pneumo04-q911",
    "areas": ["pneumo+icu", "pneumo", "icu", "vent", "medicine"],
    "topics": ["guillain_barre", "weaning", "extubation", "respiratory_muscles", "neuromuscular_failure"],
    "level": "muito_dificil",
    "correct": 0,
    "question": {
      "pt": "Homem de 43 anos, previamente hígido, foi admitido na UTI com diagnóstico de síndrome de Guillain-Barré. Evoluiu com tetraparesia flácida e insuficiência respiratória, sendo intubado no terceiro dia de internação. Após 10 dias de suporte ventilatório, apresenta melhora progressiva da força muscular (MRC > 3 em todos os membros), sem sinais de disautonomia e com capacidade vital forçada (CVF) de 22 mL/kg. Gasometria arterial em ar ambiente mostra PaO₂ de 78 mmHg e PaCO₂ de 39 mmHg. Qual das estratégias abaixo é mais apropriada neste momento?",
      "en": "A 43-year-old previously healthy man was admitted to the ICU with Guillain-Barré syndrome. He developed flaccid tetraparesis and respiratory failure, requiring intubation on day 3. After 10 days of mechanical ventilation, he shows progressive improvement in muscle strength (MRC > 3 in all limbs), no dysautonomia, and forced vital capacity (FVC) of 22 mL/kg. Arterial blood gas on room air shows PaO₂ of 78 mmHg and PaCO₂ of 39 mmHg. What is the most appropriate strategy at this point?",
      "es": "Hombre de 43 años previamente sano es ingresado en UCI con diagnóstico de síndrome de Guillain-Barré. Evoluciona con tetraparesia flácida e insuficiencia respiratoria, siendo intubado al tercer día. Tras 10 días de ventilación mecánica, presenta mejoría progresiva de la fuerza muscular (MRC > 3 en todos los miembros), sin disautonomía y capacidad vital forzada (CVF) de 22 mL/kg. Gasometría en aire ambiente: PaO₂ de 78 mmHg y PaCO₂ de 39 mmHg. ¿Cuál es la estrategia más apropiada en este momento?"
    },
    "options": [
      {
        "text": {
          "pt": "Realizar extubação após prova ventilatória espontânea bem-sucedida",
          "en": "Proceed with extubation after successful spontaneous breathing trial",
          "es": "Realizar extubación tras prueba respiratoria espontánea exitosa"
        },
        "explanation": {
          "pt": "A presença de força muscular adequada, estabilidade autonômica e CVF > 20 mL/kg são critérios importantes para considerar extubação em pacientes neuromusculares. A realização de prova ventilatória espontânea bem-sucedida reforça a decisão. Estudos observacionais sugerem que extubação precoce segura é possível mesmo sem recuperação completa da força, desde que critérios respiratórios sejam atendidos (Guidelines ERS/ATS de desmame e cuidados neuromusculares).",
          "en": "Adequate muscle strength, autonomic stability, and FVC > 20 mL/kg are important criteria for extubation in neuromuscular patients. A successful spontaneous breathing trial supports the decision. Observational studies suggest safe early extubation is feasible without full motor recovery, provided respiratory criteria are met (ERS/ATS weaning guidelines).",
          "es": "La fuerza muscular adecuada, estabilidad autonómica y CVF > 20 mL/kg son criterios clave para considerar extubación en pacientes neuromusculares. Una prueba respiratoria espontánea exitosa refuerza esta decisión. Estudios observacionales sugieren que la extubación precoz segura es posible sin recuperación motora completa, si se cumplen criterios respiratorios (guías ERS/ATS de destete)."
        }
      },
      {
        "text": {
          "pt": "Manter ventilação invasiva até recuperação total da força muscular (MRC 5)",
          "en": "Maintain invasive ventilation until full muscle strength recovery (MRC 5)",
          "es": "Mantener ventilación invasiva hasta recuperación total de la fuerza muscular (MRC 5)"
        },
        "explanation": {
          "pt": "Não é necessário aguardar MRC 5 para extubação em pacientes com GBS. A ventilação prolongada aumenta risco de complicações como pneumonia associada à ventilação mecânica e fraqueza adquirida na UTI. A decisão deve se basear em critérios respiratórios e estabilidade clínica, não apenas força total.",
          "en": "Waiting for MRC 5 is not required for extubation in GBS patients. Prolonged ventilation increases the risk of complications such as VAP and ICU-acquired weakness. Extubation decisions should be based on respiratory and clinical stability rather than complete motor recovery.",
          "es": "Esperar a MRC 5 no es necesario para extubar en pacientes con GBS. La ventilación prolongada incrementa el riesgo de complicaciones como NAV y debilidad adquirida en UCI. La decisión debe basarse en criterios respiratorios y estabilidad clínica."
        }
      },
      {
        "text": {
          "pt": "Indicar traqueostomia precoce por risco de insuficiência respiratória crônica",
          "en": "Indicate early tracheostomy due to risk of chronic respiratory failure",
          "es": "Indicar traqueostomía precoz por riesgo de insuficiencia respiratoria crónica"
        },
        "explanation": {
          "pt": "Traqueostomia precoce está indicada em pacientes com previsão de ventilação > 14 dias sem perspectiva de extubação. Neste caso, o paciente já apresenta melhora clínica com bons parâmetros para desmame, tornando a traqueostomia desnecessária neste momento.",
          "en": "Early tracheostomy is indicated for patients expected to need >14 days of ventilation without signs of readiness for weaning. In this case, the patient has favorable clinical and ventilatory parameters, making tracheostomy unnecessary at this point.",
          "es": "La traqueostomía precoz se indica cuando se espera ventilación >14 días sin signos de destete. En este caso, el paciente presenta parámetros favorables, por lo que no está indicada por el momento."
        }
      },
      {
        "text": {
          "pt": "Realizar traqueostomia por falha iminente de desmame ventilatório",
          "en": "Perform tracheostomy due to imminent weaning failure",
          "es": "Realizar traqueostomía por fallo inminente del destete"
        },
        "explanation": {
          "pt": "Não há sinais objetivos de falha iminente de desmame. O paciente preenche critérios favoráveis e deve ser submetido a prova ventilatória. A traqueostomia nesse momento é precipitada e não respaldada por guidelines.",
          "en": "There are no objective signs of imminent weaning failure. The patient meets favorable criteria and should undergo a spontaneous breathing trial. Performing tracheostomy at this point is premature and not supported by guidelines.",
          "es": "No hay señales objetivas de fallo inminente del destete. El paciente cumple criterios favorables y debe probar respiración espontánea. La traqueostomía ahora es precipitada y no respaldada por guías."
        }
      }
    ]
  },
   {
    "id": 912,
    "code": "pneumo04-q912",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["COPD", "exacerbation", "ventilatory_support", "acidosis", "clinical_decision"],
    "level": "muito_dificil",
    "correct": 1,
    "question": {
      "pt": "Paciente de 74 anos com diagnóstico de DPOC GOLD IV, ex-tabagista, dá entrada na UTI com dispneia intensa, uso de musculatura acessória, confusão mental e hipoxemia refratária à oxigenioterapia de baixo fluxo. Gasometria arterial revela pH 7,22, PaCO₂ de 78 mmHg e PaO₂ de 58 mmHg com FiO₂ de 35%. Apresenta PA 135/80 mmHg, FC 110 bpm e SatO₂ 87%. Qual conduta inicial é mais indicada, considerando as evidências mais robustas?",
      "en": "A 74-year-old patient with GOLD IV COPD and history of smoking presents to the ICU with severe dyspnea, use of accessory muscles, mental confusion, and hypoxemia despite low-flow oxygen. Arterial blood gas shows pH 7.22, PaCO₂ 78 mmHg, and PaO₂ 58 mmHg on 35% FiO₂. Blood pressure is 135/80 mmHg, HR 110 bpm, and SpO₂ 87%. What is the most appropriate initial management based on current evidence?",
      "es": "Paciente de 74 años con EPOC GOLD IV, exfumador, es ingresado en UCI con disnea intensa, uso de músculos accesorios, confusión mental e hipoxemia a pesar de oxígeno de bajo flujo. Gasometría: pH 7,22, PaCO₂ 78 mmHg, PaO₂ 58 mmHg con FiO₂ 35%. PA 135/80 mmHg, FC 110 lpm y SpO₂ 87%. ¿Cuál es la conducta inicial más apropiada según la evidencia actual?"
    },
    "options": [
      {
        "text": {
          "pt": "Instituir ventilação invasiva de imediato",
          "en": "Immediately initiate invasive mechanical ventilation",
          "es": "Iniciar ventilación mecánica invasiva de inmediato"
        },
        "explanation": {
          "pt": "Embora o paciente apresente acidose e rebaixamento do sensório, ele está hemodinamicamente estável e sem sinais de falência ventilatória iminente. A VNI deve ser tentada inicialmente, conforme diretrizes GOLD e ATS/ERS, com bons resultados mesmo em pacientes levemente encefalopatas.",
          "en": "Despite acidosis and mental confusion, the patient is hemodynamically stable and without imminent ventilatory failure. Noninvasive ventilation should be tried first, according to GOLD and ATS/ERS guidelines, often effective even in mildly encephalopathic patients.",
          "es": "A pesar de la acidosis y confusión mental, el paciente está hemodinámicamente estable y sin signos de falla ventilatoria inminente. Se debe intentar primero la VNI, según guías GOLD y ATS/ERS."
        }
      },
      {
        "text": {
          "pt": "Iniciar ventilação não invasiva com monitorização intensiva",
          "en": "Start noninvasive ventilation with close monitoring",
          "es": "Iniciar ventilación no invasiva con monitorización intensiva"
        },
        "explanation": {
          "pt": "VNI é a estratégia de escolha em exacerbações graves de DPOC com acidose respiratória e hipercapnia. Estudos como o trial de Brochard e recomendações da ERS/ATS confirmam eficácia mesmo em pacientes levemente encefalopatas, desde que sem instabilidade hemodinâmica ou risco iminente de aspiração.",
          "en": "NIV is the preferred strategy in severe COPD exacerbations with respiratory acidosis and hypercapnia. Trials like Brochard’s and ERS/ATS guidelines confirm its effectiveness, even in mildly encephalopathic patients, as long as there’s no hemodynamic instability or aspiration risk.",
          "es": "La VNI es la estrategia preferida en exacerbaciones graves de EPOC con acidosis respiratoria. Estudios como el de Brochard y guías ERS/ATS respaldan su uso incluso en pacientes con encefalopatía leve, siempre que estén estables."
        }
      },
      {
        "text": {
          "pt": "Aumentar FiO₂ para 100% por máscara com reservatório",
          "en": "Increase FiO₂ to 100% via reservoir mask",
          "es": "Aumentar FiO₂ al 100% con mascarilla con reservorio"
        },
        "explanation": {
          "pt": "A administração de O₂ em altas concentrações pode suprimir o drive ventilatório em pacientes com hipercapnia crônica. O alvo deve ser SatO₂ entre 88-92%, conforme recomendações GOLD e BTS.",
          "en": "Administering high-concentration O₂ may suppress ventilatory drive in chronically hypercapnic patients. Target SpO₂ should be 88–92%, as per GOLD and BTS recommendations.",
          "es": "El O₂ en altas concentraciones puede suprimir el impulso ventilatorio en pacientes hipercápnicos crónicos. El objetivo es una SatO₂ de 88–92% según las recomendaciones GOLD y BTS."
        }
      },
      {
        "text": {
          "pt": "Administrar sedação leve e observar evolução",
          "en": "Administer light sedation and observe evolution",
          "es": "Administrar sedación leve y observar evolución"
        },
        "explanation": {
          "pt": "A sedação pode agravar a hipoventilação e precipitar necessidade de intubação. Não é indicada como primeira abordagem em casos de exacerbação aguda com hipercapnia.",
          "en": "Sedation may worsen hypoventilation and precipitate intubation. It is not indicated as a first-line approach in acute hypercapnic exacerbation.",
          "es": "La sedación puede empeorar la hipoventilación y llevar a intubación. No está indicada como primera medida en estas situaciones."
        }
      }
    ]
  },
  {
    "id": 913,
    "code": "pneumo04-q913",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["burn_injury", "restrictive_ventilation", "chest_wall", "mechanical_ventilation", "airway_management"],
    "level": "muito_dificil",
    "correct": 3,
    "question": {
      "pt": "Homem de 56 anos, previamente saudável, é admitido na UTI após explosão com queimaduras térmicas de 38% da superfície corporal total, incluindo parede torácica anterior e abdome superior. Ao exame, encontra-se intubado, ventilado com pressão de platô de 34 cmH₂O, driving pressure de 18 cmH₂O e complacência estática de 22 mL/cmH₂O. SatO₂ estável em 92% com FiO₂ de 50%, PaCO₂ de 54 mmHg e pH 7,29. Apresenta hipoxemia leve, mas padrão respiratório visivelmente restritivo. Qual das estratégias abaixo é mais indicada como próxima medida?",
      "en": "A 56-year-old previously healthy man is admitted to the ICU after an explosion, with thermal burns affecting 38% of total body surface area, including the anterior chest and upper abdomen. He is intubated and ventilated with plateau pressure of 34 cmH₂O, driving pressure of 18 cmH₂O, and static compliance of 22 mL/cmH₂O. His SpO₂ is 92% on 50% FiO₂, PaCO₂ 54 mmHg, and pH 7.29. Despite mild hypoxemia, his respiratory pattern is severely restricted. What is the most appropriate next step?",
      "es": "Hombre de 56 años previamente sano es ingresado en UCI tras explosión con quemaduras térmicas en el 38% de la superficie corporal total, incluyendo tórax anterior y abdomen superior. Está intubado, con ventilación: presión plateau 34 cmH₂O, driving pressure 18 cmH₂O, complacencia estática 22 mL/cmH₂O. SatO₂ 92% con FiO₂ 50%, PaCO₂ 54 mmHg, pH 7,29. A pesar de hipoxemia leve, el patrón ventilatorio es restrictivo. ¿Cuál es la mejor medida siguiente?"
    },
    "options": [
      {
        "text": {
          "pt": "Reduzir o volume corrente para 4 mL/kg e aumentar a frequência respiratória",
          "en": "Reduce tidal volume to 4 mL/kg and increase respiratory rate",
          "es": "Reducir volumen corriente a 4 mL/kg y aumentar frecuencia respiratoria"
        },
        "explanation": {
          "pt": "Embora estratégia protetora seja importante, volumes muito baixos podem piorar hipercapnia em padrão restritivo. Volume corrente atual provavelmente já está ajustado a 6 mL/kg, e não há benefício comprovado em 4 mL/kg nesse contexto específico.",
          "en": "Although protective strategies are key, very low tidal volumes may worsen hypercapnia in restrictive settings. Current settings likely already use 6 mL/kg, and there's no proven benefit of 4 mL/kg in this scenario.",
          "es": "Aunque la estrategia protectora es clave, volúmenes muy bajos pueden empeorar la hipercapnia en patrón restrictivo. Probablemente ya se usa 6 mL/kg, y no hay beneficio probado en 4 mL/kg aquí."
        }
      },
      {
        "text": {
          "pt": "Iniciar bloqueio neuromuscular contínuo para reduzir a driving pressure",
          "en": "Start continuous neuromuscular blockade to reduce driving pressure",
          "es": "Iniciar bloqueo neuromuscular continuo para reducir la driving pressure"
        },
        "explanation": {
          "pt": "Bloqueadores neuromusculares podem reduzir driving pressure em casos de asincronia, mas devem ser usados com cautela. Neste paciente, a driving pressure elevada decorre principalmente da complacência reduzida pela queimadura, e não de esforço respiratório excessivo.",
          "en": "Neuromuscular blockers may reduce driving pressure in asynchrony, but must be used cautiously. In this case, high driving pressure is mainly due to reduced compliance from chest burns, not excessive respiratory effort.",
          "es": "Los bloqueadores neuromusculares pueden reducir la driving pressure si hay asincronía, pero deben usarse con cautela. Aquí, la presión elevada se debe principalmente a la baja complacencia por la quemadura torácica."
        }
      },
      {
        "text": {
          "pt": "Aumentar a PEEP para melhorar a complacência do sistema respiratório",
          "en": "Increase PEEP to improve respiratory system compliance",
          "es": "Aumentar PEEP para mejorar la complacencia del sistema respiratorio"
        },
        "explanation": {
          "pt": "Complacência reduzida por restrição mecânica externa não responde bem a aumento de PEEP. Isso pode elevar ainda mais a pressão de platô e agravar a barotrauma, sem ganho ventilatório proporcional.",
          "en": "Compliance reduced due to external mechanical restriction does not improve with increased PEEP. It may worsen plateau pressures and barotrauma without significant benefit.",
          "es": "La baja complacencia por restricción externa no mejora con más PEEP, y puede elevar aún más la presión plateau y causar barotrauma."
        }
      },
      {
        "text": {
          "pt": "Realizar escarotomia torácica bilateral para aliviar restrição ventilatória",
          "en": "Perform bilateral thoracic escharotomy to relieve ventilatory restriction",
          "es": "Realizar escarotomía torácica bilateral para aliviar la restricción ventilatoria"
        },
        "explanation": {
          "pt": "Em queimaduras extensas de parede torácica, a rigidez da crosta (eschar) pode causar restrição ventilatória grave. Escarotomia é indicada quando há sinais de insuficiência ventilatória e complacência muito reduzida, mesmo com parâmetros gasométricos ainda compensados. Diretrizes da ABA (American Burn Association) recomendam avaliação precoce nesse contexto.",
          "en": "In extensive chest wall burns, eschar rigidity may cause severe ventilatory restriction. Escharotomy is indicated when ventilatory insufficiency and markedly reduced compliance are present, even with compensated gas exchange. ABA guidelines recommend early assessment in such cases.",
          "es": "En quemaduras extensas del tórax, la rigidez de la escara puede restringir gravemente la ventilación. La escarotomía está indicada con insuficiencia ventilatoria y complacencia muy baja, incluso con gases compensados. Guías de la ABA recomiendan evaluar precozmente."
        }
      }
    ]
  },
    {
    "id": 914,
    "code": "pneumo04-q914",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["ards", "ecmo", "ecco2r", "refractory_hypoxemia", "mechanical_ventilation"],
    "level": "muito_dificil",
    "correct": 2,
    "question": {
      "pt": "Homem de 52 anos com SDRA grave secundária a pneumonia viral é ventilado em volume corrente de 6 mL/kg, PEEP de 14 cmH₂O, FiO₂ de 100%, pressão de platô de 32 cmH₂O e driving pressure de 17. Apesar do uso de bloqueador neuromuscular e posição prona por 16 horas, persiste com PaO₂/FiO₂ de 68 mmHg, pH 7,19 e PaCO₂ de 92 mmHg. A equipe discute estratégias extracorpóreas. Qual das alternativas representa a melhor indicação neste cenário?",
      "en": "A 52-year-old man with severe ARDS due to viral pneumonia is on mechanical ventilation: 6 mL/kg tidal volume, PEEP 14 cmH₂O, FiO₂ 100%, plateau pressure 32 cmH₂O, and driving pressure 17. Despite neuromuscular blockade and 16 hours of prone positioning, he remains with PaO₂/FiO₂ of 68 mmHg, pH 7.19, and PaCO₂ 92 mmHg. The team considers extracorporeal strategies. Which option is the most appropriate at this stage?",
      "es": "Hombre de 52 años con SDRA grave por neumonía viral está en VM: volumen corriente 6 mL/kg, PEEP 14 cmH₂O, FiO₂ 100%, presión plateau 32 cmH₂O, driving pressure 17. A pesar de bloqueo neuromuscular y posición prona por 16 horas, permanece con PaO₂/FiO₂ 68 mmHg, pH 7,19, PaCO₂ 92 mmHg. El equipo considera estrategias extracorpóreas. ¿Cuál es la más apropiada en este momento?"
    },
    "options": [
      {
        "text": {
          "pt": "Iniciar ECMO-VA para suporte respiratório e hemodinâmico",
          "en": "Start VA-ECMO for respiratory and hemodynamic support",
          "es": "Iniciar ECMO-VA para soporte respiratorio y hemodinámico"
        },
        "explanation": {
          "pt": "O paciente não apresenta instabilidade hemodinâmica ou disfunção miocárdica. ECMO-VA é reservada para suporte circulatório, como em choque cardiogênico ou falência biventricular.",
          "en": "The patient shows no hemodynamic instability or cardiac dysfunction. VA-ECMO is reserved for circulatory support, such as cardiogenic shock or biventricular failure.",
          "es": "El paciente no presenta inestabilidad hemodinámica ni disfunción cardíaca. ECMO-VA se reserva para soporte circulatorio."
        }
      },
      {
        "text": {
          "pt": "Indicar ECCO₂R para controle da hipercapnia e acidose",
          "en": "Indicate ECCO₂R for control of hypercapnia and acidosis",
          "es": "Indicar ECCO₂R para controlar hipercapnia y acidosis"
        },
        "explanation": {
          "pt": "ECCO₂R pode ser útil em hipercapnia isolada, mas neste cenário com hipoxemia grave (PaO₂/FiO₂ < 80) e falha de medidas convencionais, a indicação preferencial é ECMO-VV, que trata hipoxemia e hipercapnia de forma eficaz.",
          "en": "ECCO₂R is useful in isolated hypercapnia, but with PaO₂/FiO₂ < 80 and failure of conventional measures, VV-ECMO is preferred for both oxygenation and CO₂ removal.",
          "es": "ECCO₂R es útil en hipercapnia aislada, pero en este caso con PaO₂/FiO₂ < 80 y fracaso de medidas convencionales, se prefiere ECMO-VV."
        }
      },
      {
        "text": {
          "pt": "Iniciar ECMO-VV como suporte pulmonar total",
          "en": "Start VV-ECMO as full pulmonary support",
          "es": "Iniciar ECMO-VV como soporte pulmonar total"
        },
        "explanation": {
          "pt": "ECMO-VV é indicada em SDRA grave refratária após falha de medidas como ventilação protetora, bloqueio neuromuscular e pronação. O paciente apresenta critérios do EOLIA trial e recomendações da ELSO para início de suporte extracorpóreo.",
          "en": "VV-ECMO is indicated in severe refractory ARDS after failure of lung-protective ventilation, neuromuscular blockade, and proning. The patient meets EOLIA trial and ELSO criteria for extracorporeal support.",
          "es": "ECMO-VV está indicada en SDRA grave refractario tras fallo de estrategias convencionales. El paciente cumple criterios del estudio EOLIA y de la ELSO."
        }
      },
      {
        "text": {
          "pt": "Reduzir PEEP e manter oxigenação permissiva",
          "en": "Reduce PEEP and maintain permissive oxygenation",
          "es": "Reducir PEEP y mantener oxigenación permisiva"
        },
        "explanation": {
          "pt": "Reduzir PEEP neste contexto pode piorar a oxigenação e aumentar o risco de colapso alveolar. Oxigenação permissiva só é considerada viável em casos não refratários. Aqui, ECMO-VV é indicada.",
          "en": "Lowering PEEP may worsen oxygenation and increase alveolar collapse risk. Permissive oxygenation is not appropriate in refractory cases like this. VV-ECMO is indicated.",
          "es": "Reducir PEEP puede empeorar la oxigenación y aumentar colapso alveolar. La oxigenación permisiva no es adecuada aquí. Se indica ECMO-VV."
        }
      }
    ]
  },
  {
    "id": 915,
    "code": "pneumo04-q915",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["airway_management", "trauma", "facial_trauma", "emergency", "intubation"],
    "level": "muito_dificil",
    "correct": 0,
    "question": {
      "pt": "Homem de 33 anos é vítima de acidente automobilístico e chega ao pronto-socorro com rebaixamento do nível de consciência (Glasgow 7), fratura evidente de face e mandíbula com sangramento ativo e crepitação, além de trauma torácico fechado. Está hipoxêmico (SatO₂ 88% em O₂ por máscara não reinalante), taquipneico e com dificuldade progressiva para manter via aérea pérvia. Qual das estratégias abaixo representa a conduta mais adequada para manejo da via aérea neste cenário?",
      "en": "A 33-year-old man is brought to the emergency department after a car accident. He presents with decreased consciousness (Glasgow 7), evident facial and mandibular fractures with active bleeding and crepitus, along with blunt thoracic trauma. He is hypoxemic (SpO₂ 88% on non-rebreather mask), tachypneic, and struggling to maintain airway patency. What is the most appropriate airway management strategy in this scenario?",
      "es": "Un hombre de 33 años llega al servicio de urgencias tras accidente automovilístico. Presenta Glasgow 7, fracturas faciales y mandibulares evidentes con sangrado activo y crepitación, además de trauma torácico cerrado. Está hipoxémico (SatO₂ 88% con mascarilla de no reinhalación), taquipneico y con dificultad creciente para mantener la vía aérea. ¿Cuál es la mejor estrategia para el manejo de la vía aérea en este caso?"
    },
    "options": [
      {
        "text": {
          "pt": "Realizar cricotireoidotomia cirúrgica imediata",
          "en": "Perform immediate surgical cricothyrotomy",
          "es": "Realizar cricotiroidotomía quirúrgica inmediata"
        },
        "explanation": {
          "pt": "Em trauma facial grave com sangramento ativo e instabilidade anatômica, a intubação orotraqueal pode ser extremamente difícil ou impossível. A cricotireoidotomia cirúrgica é indicada como abordagem definitiva e rápida em situações de via aérea difícil com risco iminente de falência respiratória. Guias como ATLS e EAST reforçam essa conduta como salvadora de vidas nestes casos.",
          "en": "In severe facial trauma with active bleeding and disrupted anatomy, orotracheal intubation may be extremely difficult or impossible. Surgical cricothyrotomy is indicated as a definitive and rapid approach in impending airway failure. ATLS and EAST guidelines support this as a life-saving intervention.",
          "es": "En trauma facial grave con sangrado activo y anatomía distorsionada, la intubación orotraqueal puede ser muy difícil o imposible. La cricotiroidotomía quirúrgica está indicada como abordaje definitivo y rápido ante fallo inminente de la vía aérea. Guías como ATLS y EAST respaldan esta conducta."
        }
      },
      {
        "text": {
          "pt": "Iniciar sequência rápida de intubação com videolaringoscópio",
          "en": "Initiate rapid sequence intubation with videolaryngoscope",
          "es": "Iniciar intubación de secuencia rápida con videolaringoscopio"
        },
        "explanation": {
          "pt": "Apesar do videolaringoscópio ser útil em muitas vias aéreas difíceis, neste caso com fraturas instáveis e sangramento, a visualização pode estar comprometida. Tentar RSI pode atrasar a resolução e falhar em manter via aérea adequada.",
          "en": "Although videolaryngoscopy helps in many difficult airways, in this case of unstable fractures and bleeding, visualization may be impaired. Attempting RSI might delay resolution and fail to secure the airway.",
          "es": "Aunque el videolaringoscopio es útil en muchas vías aéreas difíciles, en este caso con fracturas inestables y sangrado, la visualización puede estar comprometida. Intentar RSI puede retrasar y fallar."
        }
      },
      {
        "text": {
          "pt": "Tentar intubação nasotraqueal com sedação leve e oxigenação apneica",
          "en": "Attempt nasotracheal intubation with light sedation and apneic oxygenation",
          "es": "Intentar intubación nasotraqueal con sedación leve y oxigenación apneica"
        },
        "explanation": {
          "pt": "A intubação nasotraqueal está contraindicada em fraturas faciais e de base de crânio, pelo risco de lesão intracraniana. Além disso, é demorada e pouco eficaz em casos com risco iminente de perda da via aérea.",
          "en": "Nasotracheal intubation is contraindicated in facial and skull base fractures due to risk of intracranial injury. It's also slow and ineffective in imminent airway failure.",
          "es": "La intubación nasotraqueal está contraindicada en fracturas faciales y de base craneal por riesgo de lesión intracraneal. También es lenta e ineficaz en casos de pérdida inminente de vía aérea."
        }
      },
      {
        "text": {
          "pt": "Manter máscara com O₂ e aguardar estabilização para avaliação da via aérea por equipe especializada",
          "en": "Maintain oxygen mask and wait for airway evaluation by specialized team",
          "es": "Mantener mascarilla con oxígeno y esperar evaluación de vía aérea por equipo especializado"
        },
        "explanation": {
          "pt": "Em casos de deterioração progressiva e instabilidade da via aérea, aguardar avaliação pode resultar em parada respiratória. Medidas definitivas devem ser tomadas prontamente.",
          "en": "In cases of progressive deterioration and airway instability, waiting may result in respiratory arrest. Definitive measures must be taken promptly.",
          "es": "En casos de deterioro progresivo e inestabilidad de la vía aérea, esperar puede resultar en paro respiratorio. Se deben tomar medidas definitivas de inmediato."
        }
      }
    ]
  },
    {
    "id": 916,
    "code": "pneumo04-q916",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["difficult_airway", "retrograde_intubation", "emergency", "airway_management", "critical_care"],
    "level": "muito_dificil",
    "correct": 1,
    "question": {
      "pt": "Homem de 58 anos com câncer de laringe em tratamento paliativo apresenta hipoxemia grave (SpO₂ 82% com máscara de O₂) e confusão mental progressiva. Apresenta traços de estridor, múltiplas tentativas de intubação com laringoscópio direto sem sucesso, e indisponibilidade de videolaringoscópio. A equipe considera estratégias para via aérea difícil. Qual é o papel da intubação retrógrada neste contexto?",
      "en": "A 58-year-old man with laryngeal cancer under palliative care presents with severe hypoxemia (SpO₂ 82% on O₂ mask) and progressive confusion. He has stridor, multiple failed direct laryngoscopy attempts, and no videolaryngoscope available. The team considers difficult airway strategies. What is the role of retrograde intubation in this context?",
      "es": "Un hombre de 58 años con cáncer de laringe en cuidados paliativos presenta hipoxemia grave (SatO₂ 82% con máscara de O₂) y confusión progresiva. Tiene estridor, múltiples intentos fallidos de laringoscopía directa, y no hay videolaringoscopio disponible. El equipo considera estrategias de vía aérea difícil. ¿Cuál es el papel de la intubación retrógrada en este contexto?"
    },
    "options": [
      {
        "text": {
          "pt": "Contraindicada por risco de hemorragia e obstrução tumoral",
          "en": "Contraindicated due to risk of bleeding and tumor obstruction",
          "es": "Contraindicada por riesgo de sangrado y obstrucción tumoral"
        },
        "explanation": {
          "pt": "Embora a obstrução parcial por tumor aumente a dificuldade técnica, a intubação retrógrada não é absolutamente contraindicada e pode ser uma via salvadora se a anatomia permitir acesso percutâneo e o tumor não estiver totalmente obstruindo a laringe.",
          "en": "Although partial tumor obstruction increases technical difficulty, retrograde intubation is not absolutely contraindicated and may be life-saving if percutaneous access is feasible and the tumor doesn't fully obstruct the larynx.",
          "es": "Aunque la obstrucción parcial por tumor aumenta la dificultad técnica, la intubación retrógrada no está absolutamente contraindicada y puede ser una vía salvadora si el acceso percutáneo es factible."
        }
      },
      {
        "text": {
          "pt": "É uma alternativa válida na ausência de videolaringoscópio e com fracasso da intubação convencional",
          "en": "A valid alternative when videolaryngoscope is unavailable and direct laryngoscopy fails",
          "es": "Alternativa válida cuando no hay videolaringoscopio y falla la laringoscopía directa"
        },
        "explanation": {
          "pt": "A intubação retrógrada é uma técnica estabelecida para manejo de via aérea difícil quando outras abordagens falham ou não estão disponíveis. Pode ser realizada com agulha percutânea cricotireóidea e passagem de fio-guia até a cavidade oral, seguida de passagem do tubo orotraqueal. É descrita em guidelines da DAS (Difficult Airway Society) e pode ser salvadora em contextos limitados.",
          "en": "Retrograde intubation is an established technique for managing difficult airways when other methods fail or are unavailable. It involves cricothyroid puncture and guidewire passage to the oropharynx, followed by tube advancement. Described in DAS guidelines, it can be life-saving in limited-resource settings.",
          "es": "La intubación retrógrada es una técnica establecida en el manejo de vías aéreas difíciles cuando otros métodos fallan. Implica punción cricotiroidea, paso de guía hasta la orofaringe y avance del tubo. Está descrita en guías como la de la DAS."
        }
      },
      {
        "text": {
          "pt": "Deve ser realizada somente em sala cirúrgica com anestesia geral",
          "en": "Should only be performed in an operating room under general anesthesia",
          "es": "Debe realizarse solo en quirófano bajo anestesia general"
        },
        "explanation": {
          "pt": "Embora seja preferível realizar em ambiente controlado, a intubação retrógrada pode e deve ser considerada em situações emergenciais à beira-leito quando há risco iminente de falência da via aérea.",
          "en": "While ideally performed in a controlled setting, retrograde intubation can and should be considered at the bedside in emergencies with imminent airway failure.",
          "es": "Aunque lo ideal es realizarla en un entorno controlado, la intubación retrógrada puede y debe considerarse en emergencias junto a la cama."
        }
      },
      {
        "text": {
          "pt": "É preferida à cricotireoidotomia cirúrgica em qualquer cenário de via aérea difícil",
          "en": "Preferred over surgical cricothyrotomy in all difficult airway situations",
          "es": "Preferida sobre cricotiroidotomía quirúrgica en todas las vías aéreas difíciles"
        },
        "explanation": {
          "pt": "A cricotireoidotomia cirúrgica continua sendo indicada em falha ventilatória com colapso iminente. A intubação retrógrada é uma alternativa quando há tempo e estabilidade relativa para manobra menos invasiva.",
          "en": "Surgical cricothyrotomy remains indicated in ventilation failure with imminent collapse. Retrograde intubation is an alternative when there's time and relative stability for a less invasive maneuver.",
          "es": "La cricotiroidotomía quirúrgica sigue indicada en fallo ventilatorio con colapso inminente. La intubación retrógrada es alternativa en situaciones más estables."
        }
      }
    ]
  },
  {
    "id": 917,
    "code": "pneumo04-q917",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["viral_pneumonia", "bacterial_superinfection", "fungal_infection", "ARDS", "critical_illness"],
    "level": "muito_dificil",
    "correct": 3,
    "question": {
      "pt": "Mulher de 54 anos, previamente saudável, foi internada com pneumonia viral confirmada por PCR positivo para Influenza A, evoluindo com febre persistente, infiltrado alveolar bilateral e hipoxemia progressiva. Após 5 dias, apresentou piora clínica com secreção purulenta, leucocitose e instabilidade hemodinâmica. Culturas de escarro e BAL revelaram Streptococcus pneumoniae sensível e, posteriormente, crescimento de Aspergillus fumigatus. Apesar da antibioticoterapia, desenvolve SDRA grave, necessitando ventilação protetora e pronação. Qual das condutas abaixo está mais alinhada com as recomendações baseadas em evidência neste cenário?",
      "en": "A 54-year-old previously healthy woman was admitted with viral pneumonia confirmed by positive PCR for Influenza A, evolving with persistent fever, bilateral alveolar infiltrates, and worsening hypoxemia. After 5 days, she developed clinical deterioration with purulent secretions, leukocytosis, and hemodynamic instability. Sputum and BAL cultures revealed susceptible Streptococcus pneumoniae and later growth of Aspergillus fumigatus. Despite antibiotics, she develops severe ARDS requiring protective ventilation and proning. Which of the following approaches is most evidence-based in this scenario?",
      "es": "Mujer de 54 años, previamente sana, es ingresada con neumonía viral confirmada por PCR positivo para Influenza A, evolucionando con fiebre persistente, infiltrados alveolares bilaterales e hipoxemia progresiva. Después de 5 días, presenta deterioro clínico con secreciones purulentas, leucocitosis e inestabilidad hemodinámica. Cultivos de esputo y BAL revelan Streptococcus pneumoniae sensible y posteriormente crecimiento de Aspergillus fumigatus. A pesar de antibióticos, desarrolla SDRA grave, requiriendo ventilación protectora y pronación. ¿Cuál de las siguientes conductas está más basada en evidencia en este escenario?"
    },
    "options": [
      {
        "text": {
          "pt": "Manter antibiótico empírico de amplo espectro e monitorar apenas",
          "en": "Maintain broad-spectrum empirical antibiotics and monitor only",
          "es": "Mantener antibiótico empírico de amplio espectro y solo observar"
        },
        "explanation": {
          "pt": "Dada a detecção de Aspergillus e o quadro de SDRA grave, a simples observação não é adequada. A infecção fúngica invasiva exige intervenção específica precoce.",
          "en": "Given Aspergillus detection and severe ARDS, observation alone is inappropriate. Invasive fungal infection requires early targeted intervention.",
          "es": "Dada la detección de Aspergillus y el SDRA grave, la observación sin tratamiento no es adecuada. Las infecciones fúngicas invasivas requieren intervención precoz."
        }
      },
      {
        "text": {
          "pt": "Suspender antibióticos e iniciar antifúngico isoladamente",
          "en": "Stop antibiotics and initiate antifungal therapy only",
          "es": "Suspender antibióticos e iniciar solo antifúngicos"
        },
        "explanation": {
          "pt": "Suspender antibióticos em um quadro com coinfecção bacteriana documentada, instabilidade hemodinâmica e secreção purulenta seria uma conduta arriscada. Coinfecção mista exige tratamento combinado.",
          "en": "Stopping antibiotics in a patient with documented bacterial coinfection and hemodynamic instability would be risky. Mixed infections require combined treatment.",
          "es": "Suspender antibióticos en una coinfección bacteriana documentada e inestabilidad hemodinámica es arriesgado. Requiere tratamiento combinado."
        }
      },
      {
        "text": {
          "pt": "Iniciar dexametasona em dose alta para tratar SDRA viral",
          "en": "Start high-dose dexamethasone to treat viral ARDS",
          "es": "Iniciar dexametasona en dosis altas para tratar SDRA viral"
        },
        "explanation": {
          "pt": "Embora os corticosteroides possam ter papel na SDRA viral e coinfecção fúngica, o uso em dose alta pode aumentar risco de piora da infecção fúngica invasiva. O balanço benefício-risco deve ser cautelosamente avaliado.",
          "en": "While corticosteroids may have a role in viral ARDS, high doses may worsen invasive fungal infections. Benefit-risk balance must be considered carefully.",
          "es": "Aunque los corticosteroides pueden tener papel en el SDRA viral, las dosis altas pueden agravar infecciones fúngicas invasivas. Se debe evaluar cuidadosamente el riesgo-beneficio."
        }
      },
      {
        "text": {
          "pt": "Manter antibioticoterapia dirigida e iniciar antifúngico ativo contra Aspergillus",
          "en": "Maintain targeted antibiotics and initiate antifungal active against Aspergillus",
          "es": "Mantener antibióticos dirigidos e iniciar antifúngico activo contra Aspergillus"
        },
        "explanation": {
          "pt": "Diante da coinfecção documentada por Streptococcus pneumoniae e Aspergillus fumigatus, e com quadro de SDRA grave, a conduta mais apropriada é manter antibioticoterapia dirigida e iniciar antifúngico como voriconazol ou isavuconazol. Essa abordagem é respaldada por diretrizes da ESCMID e ATS/IDSA.",
          "en": "With documented coinfection by Streptococcus pneumoniae and Aspergillus fumigatus in severe ARDS, the best approach is to maintain targeted antibiotics and add antifungal therapy like voriconazole or isavuconazole. This is supported by ESCMID and ATS/IDSA guidelines.",
          "es": "Con coinfección documentada por Streptococcus pneumoniae y Aspergillus fumigatus en un cuadro de SDRA grave, lo indicado es mantener antibióticos dirigidos y añadir antifúngicos como voriconazol o isavuconazol. Respaldado por guías de ESCMID y ATS/IDSA."
        }
      }
    ]
  },
  {
    "id": 918,
    "code": "pneumo04-q918",
    "areas": ["pneumo+icu", "pneumo", "icu", "vent", "medicine"],
    "topics": ["atelectasis", "mechanical_ventilation", "bronchoscopy", "airway_obstruction", "critical_care"],
    "level": "muito_dificil",
    "correct": 2,
    "question": {
      "pt": "Homem de 67 anos, intubado há 4 dias por pneumonia, apresenta piora da oxigenação (PaO₂/FiO₂ 120), hipercapnia leve e aumento da pressão de platô (Pplat 33 cmH₂O). A ausculta revela murmúrio vesicular abolido na base direita. Radiografia de tórax mostra opacificação homogênea no lobo inferior direito. A equipe suspeita de atelectasia lobar extensa por rolha de secreção. Qual conduta inicial é mais apropriada?",
      "en": "A 67-year-old man, intubated for 4 days due to pneumonia, develops worsening oxygenation (PaO₂/FiO₂ 120), mild hypercapnia, and elevated plateau pressure (Pplat 33 cmH₂O). Auscultation reveals absent breath sounds at the right base. Chest X-ray shows homogeneous opacity in the right lower lobe. The team suspects lobar atelectasis due to mucus plug. What is the most appropriate initial management?",
      "es": "Hombre de 67 años, intubado hace 4 días por neumonía, presenta empeoramiento de la oxigenación (PaO₂/FiO₂ 120), hipercapnia leve y presión plateau elevada (Pplat 33 cmH₂O). La auscultación revela abolición del murmullo vesicular en la base derecha. La radiografía torácica muestra opacidad homogénea en el lóbulo inferior derecho. El equipo sospecha atelectasia lobar extensa por tapón mucoso. ¿Cuál es la conducta inicial más adecuada?"
    },
    "options": [
      {
        "text": {
          "pt": "Realizar manobra de recrutamento alveolar com PEEP máxima",
          "en": "Perform alveolar recruitment maneuver with maximal PEEP",
          "es": "Realizar maniobra de reclutamiento alveolar con PEEP máxima"
        },
        "explanation": {
          "pt": "Manobras agressivas de recrutamento em obstruções por rolha mucosa podem aumentar risco de barotrauma e não resolvem a obstrução mecânica. A prioridade é remover o tampão.",
          "en": "Aggressive recruitment maneuvers in mucus plug obstruction may increase barotrauma risk and do not address the mechanical blockage. Priority is to remove the plug.",
          "es": "Las maniobras de reclutamiento agresivas en obstrucciones por tapón mucoso pueden aumentar el riesgo de barotrauma y no resuelven la obstrucción mecánica. La prioridad es remover el tapón."
        }
      },
      {
        "text": {
          "pt": "Iniciar ventilação oscilatória de alta frequência",
          "en": "Initiate high-frequency oscillatory ventilation",
          "es": "Iniciar ventilación oscilatoria de alta frecuencia"
        },
        "explanation": {
          "pt": "HFOV não é a primeira linha no manejo de atelectasia por rolha mucosa e seu uso tem diminuído nos últimos guidelines. Deve ser reservado para hipoxemia refratária após falhas convencionais.",
          "en": "HFOV is not first-line for mucus plug-induced atelectasis and its use has declined in recent guidelines. Reserved for refractory hypoxemia after conventional failure.",
          "es": "La HFOV no es primera línea para atelectasia por tapón mucoso y su uso ha disminuido en guías recientes. Se reserva para hipoxemia refractaria."
        }
      },
      {
        "text": {
          "pt": "Realizar broncoscopia com aspiração de secreções",
          "en": "Perform bronchoscopy with secretion suctioning",
          "es": "Realizar broncoscopía con aspiración de secreciones"
        },
        "explanation": {
          "pt": "A broncoscopia é a medida mais eficaz para remover rolhas de secreção causadoras de atelectasia. Permite visualização direta e desobstrução imediata das vias aéreas. Guias da ATS e ERS recomendam essa abordagem em casos com atelectasia persistente e deterioração gasométrica.",
          "en": "Bronchoscopy is the most effective measure to remove mucus plugs causing atelectasis. It allows direct visualization and immediate airway clearance. ATS and ERS guidelines recommend it in cases of persistent atelectasis with worsening gas exchange.",
          "es": "La broncoscopía es la medida más eficaz para remover tapones mucosos que causan atelectasia. Permite visualización directa y desobstrucción inmediata. Las guías de ATS y ERS la recomiendan en estos casos."
        }
      },
      {
        "text": {
          "pt": "Manter suporte ventilatório e repetir radiografia após 24h",
          "en": "Maintain ventilatory support and repeat X-ray after 24h",
          "es": "Mantener soporte ventilatorio y repetir radiografía en 24h"
        },
        "explanation": {
          "pt": "A conduta expectante pode atrasar o tratamento eficaz da obstrução, levando à piora hipoxêmica e risco de infecções. Em atelectasias extensas com alteração gasométrica, a intervenção é prioritária.",
          "en": "Expectant management may delay effective treatment of obstruction, leading to hypoxemia and infection risk. In extensive atelectasis with gas exchange worsening, intervention is prioritized.",
          "es": "La conducta expectante puede retrasar el tratamiento efectivo de la obstrucción, aumentando hipoxemia y riesgo infeccioso. En atelectasias extensas con deterioro gasométrico, se prioriza la intervención."
        }
      }
    ]
  },
{
    "id": 919,
    "code": "pneumo04-q919",
   "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
    "topics": ["tracheostomy", "airway_management", "critical_care", "subacute_complications"],
    "level": "muito_dificil",
    "correct": 3,
    "question": {
      "pt": "Homem de 71 anos, internado há 21 dias por AVC isquêmico extenso e pneumonia associada à ventilação mecânica, evolui com dificuldade de desmame ventilatório e picos de agitação ao tentar interrupção da sedação. Está traqueostomizado há 6 dias por técnica percutânea com broncoscopia. Nas últimas 48h, apresenta saída de secreção espessa ao redor do sítio, pequeno enfisema subcutâneo e discreta queda da saturação ao movimentar-se no leito. Qual das condutas abaixo é a mais adequada neste momento?",
      "en": "A 71-year-old man, hospitalized for 21 days due to large ischemic stroke and ventilator-associated pneumonia, has failed weaning attempts and exhibits agitation during sedation interruption. He underwent percutaneous tracheostomy with bronchoscopy 6 days ago. In the past 48h, he presents thick secretions around the stoma, mild subcutaneous emphysema, and transient desaturation upon movement. What is the most appropriate management now?",
      "es": "Hombre de 71 años, hospitalizado hace 21 días por un ACV isquémico extenso y neumonía asociada a VM, presenta fallas en el destete y agitación al suspender la sedación. Se realizó traqueostomía percutánea hace 6 días con broncoscopía. En las últimas 48h presenta secreciones espesas en el estoma, enfisema subcutáneo leve y caída transitoria de saturación al moverse. ¿Cuál es la conducta más adecuada en este momento?"
    },
    "options": [
      {
        "text": {
          "pt": "Retirar a cânula de traqueostomia e ocluir o orifício com curativo compressivo",
          "en": "Remove the tracheostomy cannula and close the stoma with pressure dressing",
          "es": "Retirar la cánula de traqueostomía y ocluir el estoma con apósito compresivo"
        },
        "explanation": {
          "pt": "A retirada precoce da cânula pode precipitar insuficiência respiratória e não trata complicações como fístula traqueocutânea ou rotura traqueal, especialmente com enfisema subcutâneo presente.",
          "en": "Early cannula removal may precipitate respiratory failure and does not address complications like tracheocutaneous fistula or tracheal tear, especially in the presence of subcutaneous emphysema.",
          "es": "La retirada precoz de la cánula puede provocar insuficiencia respiratoria y no trata complicaciones como fístula traqueocutánea o rotura traqueal, especialmente con enfisema subcutáneo."
        }
      },
      {
        "text": {
          "pt": "Realizar tomografia de pescoço e tórax com contraste",
          "en": "Perform contrast-enhanced CT scan of neck and chest",
          "es": "Realizar tomografía de cuello y tórax con contraste"
        },
        "explanation": {
          "pt": "A TC pode ajudar no diagnóstico de complicações como abscessos, rotura traqueal ou fístulas, mas o uso de contraste pode não ser essencial e o transporte do paciente pode representar risco adicional nesta fase.",
          "en": "CT may assist in diagnosing complications such as abscesses, tracheal rupture, or fistulas, but contrast may not be essential and transport can pose additional risk at this stage.",
          "es": "La TC puede ayudar a diagnosticar complicaciones como abscesos, rotura traqueal o fístulas, pero el contraste puede no ser esencial y el traslado representa riesgo adicional."
        }
      },
      {
        "text": {
          "pt": "Substituir a cânula por uma com balonete de maior pressão",
          "en": "Replace the cannula with one with a higher-pressure cuff",
          "es": "Reemplazar la cánula por una con balón de mayor presión"
        },
        "explanation": {
          "pt": "Aumentar a pressão do balonete sem diagnóstico preciso pode agravar lesões traqueais ou perfurações. Esta medida não é indicada como conduta inicial.",
          "en": "Increasing cuff pressure without a precise diagnosis may worsen tracheal injury or perforations. This is not recommended as an initial step.",
          "es": "Aumentar la presión del balón sin diagnóstico puede empeorar lesiones traqueales. No es indicado como primera medida."
        }
      },
      {
        "text": {
          "pt": "Realizar broncoscopia à beira-leito para avaliação da integridade traqueal",
          "en": "Perform bedside bronchoscopy to assess tracheal integrity",
          "es": "Realizar broncoscopía junto a la cama para evaluar la integridad traqueal"
        },
        "explanation": {
          "pt": "A broncoscopia imediata permite avaliar complicações como fístulas, rotura traqueal ou sangramento. É recomendada em pacientes com sinais subagudos como enfisema e piora respiratória discreta após traqueostomia. Guias da ATS e sociedades europeias reforçam seu uso precoce neste cenário.",
          "en": "Immediate bronchoscopy allows evaluation of complications such as fistula, tracheal rupture, or bleeding. It is recommended in patients with subacute signs like emphysema and mild respiratory worsening after tracheostomy. ATS and European guidelines support early use in this setting.",
          "es": "La broncoscopía inmediata permite evaluar complicaciones como fístulas, rotura traqueal o sangrado. Está indicada en pacientes con signos subagudos como enfisema y deterioro respiratorio leve tras traqueostomía."
        }
      }
    ]
  },
  {
  "id": 920,
  "code": "pneumo04-q920",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["interstitial_lung_disease", "mechanical_ventilation", "ARDS", "fibrosis", "ECMO"],
  "level": "muito_dificil",
  "correct": 0,
  "question": {
    "pt": "Paciente de 61 anos com fibrose pulmonar idiopática (FPI) conhecida, em uso de nintedanibe, é admitido na UTI por desconforto respiratório progressivo e queda de saturação refratária (SpO₂ 84% com máscara de O₂). TC mostra vidro fosco bilateral sobreposto às áreas de fibrose basal, sem sinais claros de infecção ou tromboembolismo. Após 24h de ventilação mecânica protetora, Pplat 28 cmH₂O, driving pressure 16 cmH₂O, PaO₂/FiO₂ = 88. Apesar da pronação e bloqueio neuromuscular, a oxigenação continua precária. A família recusa ECMO por motivos religiosos. Qual das condutas a seguir é mais fundamentada para este cenário?",
    "en": "A 61-year-old patient with known idiopathic pulmonary fibrosis (IPF) on nintedanib is admitted to the ICU with progressive respiratory distress and refractory hypoxemia (SpO₂ 84% on O₂ mask). CT scan shows bilateral ground-glass opacities overlying basal fibrosis, with no signs of infection or thromboembolism. After 24h of lung-protective ventilation (Pplat 28 cmH₂O, driving pressure 16 cmH₂O, PaO₂/FiO₂ = 88), oxygenation remains poor despite pronation and neuromuscular blockade. The family refuses ECMO for religious reasons. Which of the following approaches is most evidence-based in this setting?",
    "es": "Paciente de 61 años con fibrosis pulmonar idiopática (FPI) conocida, en tratamiento con nintedanib, es ingresado en UCI por disnea progresiva e hipoxemia refractaria (SatO₂ 84% con oxígeno). La TC muestra vidrio deslustrado bilateral sobre fibrosis basal, sin signos de infección o tromboembolismo. Tras 24h de VM protectora (Pplat 28 cmH₂O, driving pressure 16 cmH₂O, PaO₂/FiO₂ = 88), la oxigenación sigue siendo precaria pese a pronación y relajación neuromuscular. La familia rechaza ECMO por motivos religiosos. ¿Cuál es la conducta más fundamentada en este contexto?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar corticoides em pulsoterapia com metilprednisolona 1g/dia por 3 dias",
        "en": "Start pulse-dose corticosteroids with methylprednisolone 1g/day for 3 days",
        "es": "Iniciar corticoides en pulsoterapia con metilprednisolona 1g/día por 3 días"
      },
      "explanation": {
        "pt": "Em casos de exacerbação aguda da FPI, mesmo sem evidência infecciosa, o uso de metilprednisolona em pulsos é frequentemente adotado com base em consenso de especialistas e estudos observacionais, embora a evidência de benefício seja limitada. Diretrizes da ATS/JRS/ALAT (2022) consideram esta estratégia razoável em exacerbações não infecciosas refratárias.",
        "en": "In acute exacerbations of IPF, even without infection, pulse-dose methylprednisolone is frequently used based on expert consensus and observational data, though evidence is limited. ATS/JRS/ALAT guidelines (2022) consider this a reasonable strategy in non-infectious refractory cases.",
        "es": "En exacerbaciones agudas de FPI sin evidencia de infección, se utiliza metilprednisolona en pulsos basada en consenso experto y datos observacionales. Las guías ATS/JRS/ALAT (2022) lo consideran razonable en casos refractarios no infecciosos."
      }
    },
    {
      "text": {
        "pt": "Manter suporte ventilatório atual e introduzir vasodilatadores pulmonares inalatórios",
        "en": "Maintain current ventilatory support and initiate inhaled pulmonary vasodilators",
        "es": "Mantener el soporte ventilatorio actual e iniciar vasodilatadores pulmonares inhalados"
      },
      "explanation": {
        "pt": "Embora vasodilatadores inalatórios como óxido nítrico ou epoprostenol possam melhorar temporariamente a oxigenação, eles não impactam na mortalidade e têm uso limitado em SDRA sobreposta à fibrose. Diretrizes da SCCM/ESICM não recomendam seu uso rotineiro nesse perfil.",
        "en": "Although inhaled vasodilators like nitric oxide or epoprostenol may transiently improve oxygenation, they have no mortality benefit and are not routinely recommended in ARDS over fibrotic lungs. SCCM/ESICM guidelines advise against their routine use.",
        "es": "Aunque los vasodilatadores inhalados como el óxido nítrico pueden mejorar transitoriamente la oxigenación, no reducen la mortalidad y no se recomiendan de forma rutinaria en SDRA con fibrosis. Guías de SCCM/ESICM desaconsejan su uso sistemático."
      }
    },
    {
      "text": {
        "pt": "Aumentar o volume corrente para 8 mL/kg para melhorar a complacência",
        "en": "Increase tidal volume to 8 mL/kg to improve compliance",
        "es": "Aumentar volumen corriente a 8 mL/kg para mejorar la complacencia"
      },
      "explanation": {
        "pt": "O aumento de volume corrente em pulmões com complacência baixa eleva o risco de barotrauma e está associado a maior mortalidade em SDRA, conforme demonstrado no estudo ARDSNet (2000) e reafirmado nas diretrizes da ATS/ESICM (2017).",
        "en": "Raising tidal volumes in low-compliance lungs increases barotrauma risk and is associated with higher mortality in ARDS, as shown in the ARDSNet trial (2000) and reaffirmed in ATS/ESICM guidelines (2017).",
        "es": "Aumentar volumen corriente en pulmones con baja complacencia eleva el riesgo de barotrauma y se asocia a mayor mortalidad en SDRA, según ARDSNet (2000) y guías ATS/ESICM (2017)."
      }
    },
    {
      "text": {
        "pt": "Descontinuar ventilação invasiva e optar por sedação paliativa",
        "en": "Discontinue invasive ventilation and proceed to palliative sedation",
        "es": "Suspender ventilación invasiva y optar por sedación paliativa"
      },
      "explanation": {
        "pt": "Embora o prognóstico da FPI com exacerbação aguda seja reservado, a decisão por cuidados paliativos deve ser individualizada e baseada em discussão multidisciplinar. A presença de medidas ainda em curso e ausência de falência multiorgânica não sustentam a suspensão imediata da ventilação.",
        "en": "While prognosis in acute IPF exacerbation is poor, palliative care decisions must be individualized. Ongoing treatments and absence of multi-organ failure do not justify immediate withdrawal of ventilatory support.",
        "es": "Aunque el pronóstico de la FPI exacerbada es reservado, la decisión de cuidados paliativos debe individualizarse. La ausencia de fallo multiorgánico no justifica el retiro inmediato del soporte ventilatorio."
      }
    }
  ]
},
];

questionBank.addBank(bancoPneumoDificilima);
