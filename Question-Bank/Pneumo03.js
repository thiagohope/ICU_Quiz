const bancoPneumoDificil = [
{
  "id": 801,
  "code": "pneumo03-q801",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["oxygen_therapy", "covid19", "respiratory_failure", "hfno", "intubation_timing"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Mulher de 61 anos, sem comorbidades, é internada em UTI por insuficiência respiratória hipoxêmica secundária à COVID-19. Apresenta-se taquipneica, com FR 32 irpm, SpO₂ de 89% com máscara de reservatório a 15 L/min. Iniciado oxigênio de alto fluxo nasal (HFNO) com FiO₂ de 100% e fluxo de 60 L/min, com melhora transitória da SpO₂ para 94%. Após 2 horas, mantém FR 35 irpm, uso de musculatura acessória e queda progressiva de nível de consciência. Qual das condutas abaixo reflete melhor a evidência atual em relação ao uso de HFNO em pacientes com COVID-19?",
    "en": "A 61-year-old woman with no comorbidities is admitted to the ICU for hypoxemic respiratory failure due to COVID-19. She is tachypneic (RR 32 bpm), with SpO₂ of 89% on a non-rebreather mask at 15 L/min. High-flow nasal oxygen (HFNO) is started with FiO₂ 100% and flow 60 L/min, leading to transient improvement in SpO₂ to 94%. After 2 hours, she remains with RR 35 bpm, accessory muscle use, and progressive decline in mental status. Which of the following best reflects current evidence regarding HFNO use in COVID-19?",
    "es": "Mujer de 61 años sin comorbilidades es ingresada a la UCI por insuficiencia respiratoria hipoxémica por COVID-19. Está taquipneica (FR 32 rpm), con SpO₂ del 89% con mascarilla con reservorio a 15 L/min. Se inicia oxígeno nasal de alto flujo (HFNO) con FiO₂ 100% y flujo de 60 L/min, mejorando transitoriamente la SpO₂ a 94%. Tras 2 horas, persiste con FR 35 rpm, uso de músculos accesorios y disminución progresiva del nivel de conciencia. ¿Cuál de las siguientes conductas refleja mejor la evidencia actual sobre HFNO en COVID-19?"
  },
  "options": [
    {
      "text": {
        "pt": "Manter HFNO e aguardar nova reavaliação em 6 horas",
        "en": "Continue HFNO and reassess in 6 hours",
        "es": "Mantener HFNO y reevaluar en 6 horas"
      },
      "explanation": {
        "pt": "A deterioração neurológica e respiratória sugere falência da oxigenioterapia não invasiva. A espera prolongada pode aumentar a mortalidade por intubação tardia, conforme estudos como o *PRONCOVID* e diretrizes da *Surviving Sepsis Campaign*.",
        "en": "Neurological and respiratory deterioration suggests noninvasive oxygen failure. Delayed intubation has been linked to worse outcomes in trials like *PRONCOVID* and *Surviving Sepsis Campaign* guidelines.",
        "es": "El deterioro neurológico y respiratorio indica fracaso de la oxigenoterapia no invasiva. La intubación retrasada se asocia a mayor mortalidad según estudios como *PRONCOVID* y las guías de *Surviving Sepsis Campaign*."
      }
    },
    {
      "text": {
        "pt": "Iniciar ventilação não invasiva (VNI) com pressão positiva em dois níveis",
        "en": "Initiate noninvasive ventilation (NIV) with bilevel pressure support",
        "es": "Iniciar ventilación no invasiva (VNI) con soporte de presión en dos niveles"
      },
      "explanation": {
        "pt": "A VNI tem eficácia limitada em hipóxia refratária grave por COVID-19 e pode atrasar intubação. Diretrizes da *ERS/ATS 2021* sugerem que VNI só deve ser considerada quando há contraindicação temporária à intubação ou em centros com experiência estrita.",
        "en": "NIV has limited efficacy in severe refractory hypoxemia due to COVID-19 and may delay intubation. *ERS/ATS 2021* guidelines suggest NIV only in select patients with temporary contraindications to intubation.",
        "es": "La VNI tiene eficacia limitada en hipoxemia grave por COVID-19 y puede retrasar la intubación. Las guías *ERS/ATS 2021* la recomiendan solo en casos seleccionados."
      }
    },
    {
      "text": {
        "pt": "Aplicar pronação consciente com manutenção de HFNO",
        "en": "Apply awake prone positioning while continuing HFNO",
        "es": "Realizar pronación despierta mientras se mantiene HFNO"
      },
      "explanation": {
        "pt": "Apesar de benéfica em fases iniciais, a pronação acordada não deve ser usada isoladamente quando há sinais de falência respiratória iminente, como queda de consciência e esforço ventilatório extremo. Segundo metanálise publicada no *Lancet Respir Med* (2022), os benefícios se perdem em pacientes instáveis.",
        "en": "While beneficial in early phases, awake proning should not delay intubation when signs of imminent respiratory failure emerge. According to a *Lancet Respir Med* (2022) meta-analysis, its benefit is lost in unstable patients.",
        "es": "Aunque es útil en fases tempranas, la pronación despierta no debe retrasar la intubación ante signos de fallo respiratorio. Según metaanálisis en *Lancet Respir Med* (2022), su eficacia disminuye en pacientes inestables."
      }
    },
    {
      "text": {
        "pt": "Interromper HFNO e proceder com intubação orotraqueal imediata",
        "en": "Discontinue HFNO and proceed with immediate orotracheal intubation",
        "es": "Suspender HFNO y realizar intubación orotraqueal inmediata"
      },
      "explanation": {
        "pt": "A presença de taquipneia, rebaixamento do nível de consciência e falência progressiva com sinais de esforço ventilatório são critérios clássicos de falha de oxigenioterapia não invasiva. Diretrizes da *WHO* (2023), *ERS*, *Surviving Sepsis Campaign* e *NIH COVID-19 Treatment Guidelines* recomendam fortemente intubação precoce nesses cenários para evitar colapso ventilatório e facilitar manejo com pressão positiva invasiva.",
        "en": "Tachypnea, declining consciousness, and worsening work of breathing are classic signs of noninvasive oxygen failure. *WHO (2023)*, *ERS*, *Surviving Sepsis Campaign*, and *NIH COVID-19 Guidelines* recommend early intubation to prevent collapse and optimize ventilatory support.",
        "es": "La taquipnea, deterioro del estado mental y esfuerzo respiratorio creciente indican fallo de oxigenoterapia. Las guías de la *OMS (2023)*, *ERS* y *NIH COVID-19* recomiendan intubación precoz en estos casos."
      }
    },
    {
      "text": {
        "pt": "Associar corticoide em dose elevada e manter HFNO",
        "en": "Add high-dose corticosteroids and continue HFNO",
        "es": "Añadir corticoides en dosis altas y mantener HFNO"
      },
      "explanation": {
        "pt": "Corticoides sistêmicos (como dexametasona 6 mg/dia) são padrão para pacientes com COVID-19 hipoxêmicos, mas sua ação é lenta. Não alteram a necessidade de suporte ventilatório imediato. O RECOVERY Trial não demonstrou benefício adicional de doses elevadas.",
        "en": "Systemic corticosteroids (e.g., dexamethasone 6 mg/day) are standard in hypoxemic COVID-19 patients but act slowly. They don't change immediate ventilation needs. RECOVERY Trial showed no benefit from higher doses.",
        "es": "Los corticoides sistémicos son estándar en COVID-19 con hipoxemia, pero su efecto es lento. No evitan el soporte ventilatorio inmediato. El ensayo RECOVERY no demostró beneficio de dosis elevadas."
      }
    }
  ]
},
{
  "id": 802,
  "code": "pneumo03-q802",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["interstitial_lung_disease", "oxygen_therapy", "fibrosis", "exercise", "hypoxemia"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Homem de 70 anos com fibrose pulmonar idiopática (FPI) em estágio avançado é admitido na UTI por dessaturação progressiva. Apresenta SpO₂ de 86% em repouso, que cai para 79% com movimentação mínima. Já faz uso domiciliar de oxigenoterapia contínua a 3 L/min. No momento, encontra-se em repouso, eupneico, com FR 22 irpm e sem sinais de esforço. Considerando a evidência atual, qual estratégia de oxigenoterapia está mais associada à melhora funcional e prognóstica em pacientes com FPI avançada?",
    "en": "A 70-year-old man with advanced idiopathic pulmonary fibrosis (IPF) is admitted to the ICU for progressive desaturation. His resting SpO₂ is 86%, dropping to 79% with minimal activity. He is already on continuous home oxygen at 3 L/min. Currently at rest, he is eupneic, RR 22 bpm, and shows no respiratory distress. Based on current evidence, which oxygenation strategy is most associated with functional and prognostic benefit in advanced IPF?",
    "es": "Hombre de 70 años con fibrosis pulmonar idiopática (FPI) avanzada es admitido en UCI por desaturación progresiva. Presenta SpO₂ de 86% en reposo, que cae a 79% con mínima actividad. Ya usa oxigenoterapia domiciliaria continua a 3 L/min. Actualmente en reposo, está eupneico, FR 22 rpm y sin signos de esfuerzo. Según la evidencia actual, ¿qué estrategia de oxigenación se asocia más a beneficios funcionales y pronósticos en FPI avanzada?"
  },
  "options": [
    {
      "text": {
        "pt": "Prescrever oxigenoterapia suplementar também durante o esforço e movimentação",
        "en": "Prescribe supplemental oxygen also during exertion and movement",
        "es": "Prescribir oxígeno suplementario también durante el esfuerzo y movimiento"
      },
      "explanation": {
        "pt": "Em pacientes com fibrose pulmonar, a hipoxemia induzida pelo exercício está associada a maior mortalidade e declínio funcional. Estudos observacionais e metanálises recentes sugerem que o uso de oxigênio durante o esforço melhora a tolerância à atividade, qualidade de vida e possivelmente o prognóstico. Diretrizes da ATS/ERS (2022) apoiam o uso de oxigenoterapia ambulatorial em casos de dessaturação ao esforço.",
        "en": "In IPF patients, exertional desaturation is associated with worse survival and functional decline. Recent meta-analyses and ATS/ERS (2022) guidelines support ambulatory oxygen use for improving activity tolerance and potentially prognosis.",
        "es": "En pacientes con FPI, la desaturación con el esfuerzo se asocia a mayor mortalidad. Metaanálisis recientes y las guías ATS/ERS (2022) recomiendan el uso de oxígeno durante la actividad para mejorar la tolerancia y posiblemente el pronóstico."
      }
    },
    {
      "text": {
        "pt": "Aumentar o fluxo de oxigênio em repouso até atingir SpO₂ > 96%",
        "en": "Increase resting oxygen flow to reach SpO₂ > 96%",
        "es": "Aumentar el flujo de oxígeno en reposo para alcanzar SpO₂ > 96%"
      },
      "explanation": {
        "pt": "Manter SpO₂ acima de 96% não está associado a benefícios adicionais e pode aumentar o risco de toxicidade ou hiperóxia, especialmente em doenças intersticiais. O alvo recomendado é manter SpO₂ entre 88-92% em repouso.",
        "en": "Maintaining SpO₂ > 96% is not associated with better outcomes and may increase risks of oxygen toxicity. The recommended target is 88–92% at rest.",
        "es": "Mantener SpO₂ > 96% no mejora el pronóstico y puede causar toxicidad. El objetivo es 88–92% en reposo."
      }
    },
    {
      "text": {
        "pt": "Utilizar apenas oxigenoterapia noturna, quando ocorre maior hipoxemia",
        "en": "Use oxygen therapy only at night, when hypoxemia worsens",
        "es": "Utilizar oxígeno solo por la noche, cuando hay más hipoxemia"
      },
      "explanation": {
        "pt": "A hipoxemia noturna isolada pode ser tratada com oxigênio, mas nos casos em que há dessaturação ao esforço, restringir o uso ao período noturno é inadequado.",
        "en": "Nighttime hypoxemia alone may benefit from oxygen, but in cases with exertional desaturation, restricting oxygen to nighttime is insufficient.",
        "es": "La hipoxemia nocturna puede requerir oxígeno, pero si hay desaturación con el esfuerzo, limitarlo a la noche no es adecuado."
      }
    },
    {
      "text": {
        "pt": "Suspender oxigenoterapia em repouso se paciente estiver assintomático",
        "en": "Discontinue resting oxygen if patient is asymptomatic",
        "es": "Suspender oxígeno en reposo si el paciente está asintomático"
      },
      "explanation": {
        "pt": "Mesmo em ausência de sintomas subjetivos, a hipoxemia crônica contribui para hipertensão pulmonar e piora funcional. A descontinuação não é recomendada se SpO₂ < 88%, como mostrado em estudos longitudinais com pacientes com FPI avançada.",
        "en": "Even in asymptomatic patients, chronic hypoxemia worsens pulmonary hypertension and function. Discontinuation is not recommended when SpO₂ < 88%, as shown in longitudinal IPF studies.",
        "es": "La hipoxemia crónica empeora la hipertensión pulmonar y la función. No debe suspenderse el oxígeno si la SpO₂ es < 88%."
      }
    },
    {
      "text": {
        "pt": "Adicionar ventilação não invasiva à noite para otimizar a oxigenação",
        "en": "Add noninvasive ventilation at night to optimize oxygenation",
        "es": "Añadir ventilación no invasiva nocturna para optimizar la oxigenación"
      },
      "explanation": {
        "pt": "A VNI é indicada em distúrbios ventilatórios (ex: DPOC, doença neuromuscular), mas não está indicada rotineiramente em FPI sem hipercapnia. Estudos como o INSIGHT-IPF não mostraram benefício nesse contexto.",
        "en": "NIV is indicated for ventilatory disorders like COPD, but not routinely in IPF without hypercapnia. Trials like INSIGHT-IPF showed no benefit in this context.",
        "es": "La VNI se indica en trastornos ventilatorios como EPOC, pero no se recomienda en FPI sin hipercapnia. El ensayo INSIGHT-IPF no mostró beneficio."
      }
    }
  ]
},
{
  "id": 803,
  "code": "pneumo03-q803",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["bronchoscopy", "diagnostic_tools", "hypoxemia", "icu_procedures"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Homem de 66 anos, tabagista com DPOC e hipertensão pulmonar leve, está em ventilação mecânica por insuficiência respiratória hipoxêmica há 5 dias. O quadro foi inicialmente atribuído à pneumonia comunitária, com uso de antibiótico empírico. Apesar de melhora parcial no Rx de tórax, persiste febre diária, secreção purulenta espessa e novo infiltrado em lobo superior direito. A saturação se mantém em 91% com FiO₂ de 80%. Gasometria mostra PaO₂ de 58 mmHg, PaCO₂ de 48 mmHg e pH de 7.35. A equipe considera a realização de broncoscopia. Qual das condutas abaixo está mais alinhada com a prática baseada em evidências nesse cenário?",
    "en": "A 66-year-old man, smoker with COPD and mild pulmonary hypertension, is on mechanical ventilation due to hypoxemic respiratory failure for 5 days. Initially treated for community-acquired pneumonia with empiric antibiotics. Despite partial improvement on chest X-ray, he continues to have daily fever, thick purulent secretions, and a new upper right lobe infiltrate. SpO₂ remains at 91% on FiO₂ 80%. ABG: PaO₂ 58 mmHg, PaCO₂ 48 mmHg, pH 7.35. The team is considering bronchoscopy. Which of the following strategies best aligns with evidence-based practice in this context?",
    "es": "Hombre de 66 años, fumador con EPOC e hipertensión pulmonar leve, está en ventilación mecánica por insuficiencia respiratoria hipoxémica desde hace 5 días. Fue tratado inicialmente como neumonía adquirida en la comunidad. A pesar de mejoría parcial en la Rx de tórax, persiste con fiebre diaria, secreción purulenta densa y un nuevo infiltrado en el lóbulo superior derecho. Saturación 91% con FiO₂ 80%. GSA: PaO₂ 58 mmHg, PaCO₂ 48 mmHg, pH 7.35. El equipo considera una broncoscopia. ¿Cuál de las siguientes estrategias está más alineada con la práctica basada en evidencia?"
  },
  "options": [
    {
      "text": {
        "pt": "Adiar a broncoscopia e realizar aspirado traqueal para nova cultura",
        "en": "Delay bronchoscopy and perform tracheal aspirate for new cultures",
        "es": "Retrasar la broncoscopia y realizar aspirado traqueal para nuevos cultivos"
      },
      "explanation": {
        "pt": "O aspirado traqueal é menos invasivo e pode ser útil em muitos casos, mas quando há falha clínica e achado radiológico novo, a broncoscopia com lavado broncoalveolar (LBA) pode aumentar o rendimento diagnóstico. Estudos observacionais sugerem que postergar o diagnóstico em infecções resistentes pode comprometer desfechos.",
        "en": "Tracheal aspirate is less invasive but may yield suboptimal results when clinical failure and new radiologic infiltrates are present. BAL via bronchoscopy increases diagnostic yield, particularly when resistant organisms are suspected.",
        "es": "El aspirado traqueal es menos invasivo pero puede tener bajo rendimiento diagnóstico ante falla clínica e infiltrados nuevos. El LBA mejora la identificación microbiológica."
      }
    },
    {
      "text": {
        "pt": "Realizar broncoscopia com LBA, mantendo ventilação controlada e monitoramento estreito",
        "en": "Perform bronchoscopy with BAL under controlled ventilation and close monitoring",
        "es": "Realizar broncoscopia con LBA bajo ventilación controlada y monitoreo estrecho"
      },
      "explanation": {
        "pt": "A broncoscopia é indicada em casos de piora clínica sem diagnóstico claro ou falha de antibiótico empírico, conforme recomendado pela ATS/IDSA (2023) e ERS. O LBA permite identificação de patógenos resistentes, especialmente em pacientes com ventilação prolongada. O procedimento deve ser realizado com ajustes ventilatórios apropriados, idealmente com sedação leve e monitoramento de hemodinâmica e oxigenação. Estudos sugerem que, mesmo com PaO₂/FiO₂ < 150, o risco pode ser controlado com técnica adequada.",
        "en": "Bronchoscopy with BAL is appropriate in cases of clinical worsening without clear diagnosis. ATS/IDSA and ERS recommend it to increase pathogen detection, especially for multidrug-resistant organisms. Proper ventilatory settings and close monitoring reduce risks even in moderate hypoxemia.",
        "es": "La broncoscopia con LBA está indicada en casos de deterioro clínico con diagnóstico incierto. Las guías ATS/IDSA y ERS recomiendan su uso bajo monitoreo estricto, incluso en pacientes hipoxémicos."
      }
    },
    {
      "text": {
        "pt": "Evitar broncoscopia por risco elevado de dessaturação e realizar TC de tórax primeiro",
        "en": "Avoid bronchoscopy due to high desaturation risk and obtain chest CT first",
        "es": "Evitar la broncoscopia por riesgo de desaturación y solicitar TC de tórax primero"
      },
      "explanation": {
        "pt": "Embora a TC possa fornecer informações úteis, ela não substitui a amostra microbiológica em paciente em VM com possível pneumonia nosocomial. Além disso, a realização de TC em paciente grave exige transporte, que pode ser mais arriscado do que a broncoscopia à beira-leito.",
        "en": "While CT can provide anatomical insights, it doesn't replace microbiological sampling. Transporting critically ill patients for CT may carry more risk than bedside bronchoscopy.",
        "es": "La TC puede aportar datos, pero no reemplaza la necesidad de muestras microbiológicas. El transporte del paciente crítico representa un riesgo adicional."
      }
    },
    {
      "text": {
        "pt": "Realizar broncoscopia com biópsia transbrônquica para esclarecer o infiltrado",
        "en": "Perform bronchoscopy with transbronchial biopsy to clarify the infiltrate",
        "es": "Realizar broncoscopia con biopsia transbronquial para aclarar el infiltrado"
      },
      "explanation": {
        "pt": "A biópsia transbrônquica não é recomendada de rotina em pacientes com infecção suspeita e risco de sangramento, especialmente sob VM. O risco de pneumotórax e sangramento é elevado em DPOC e hipertensão pulmonar.",
        "en": "Transbronchial biopsy carries high bleeding and pneumothorax risk, particularly in mechanically ventilated patients with COPD and pulmonary hypertension. It's not recommended routinely in this setting.",
        "es": "La biopsia transbronquial tiene riesgo elevado de sangrado y neumotórax en pacientes con EPOC e hipertensión pulmonar. No se recomienda en estos casos."
      }
    },
    {
      "text": {
        "pt": "Indicar toracocentese guiada por imagem antes de considerar broncoscopia",
        "en": "Perform image-guided thoracentesis before considering bronchoscopy",
        "es": "Realizar toracocentesis guiada por imagen antes de considerar broncoscopia"
      },
      "explanation": {
        "pt": "Não há derrame pleural relevante descrito no caso. A toracocentese não está indicada em ausência de líquido pleural significativo. Essa abordagem pode atrasar o diagnóstico correto.",
        "en": "No pleural effusion is reported. Thoracentesis is not indicated without fluid. It would delay appropriate diagnostic intervention.",
        "es": "No se describe derrame pleural. La toracocentesis no está indicada y puede retrasar el diagnóstico adecuado."
      }
    }
  ]
},
{
  "id": 804,
  "code": "pneumo03-q804",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["pocus", "lung_ultrasound", "ards", "pneumonia", "differential_diagnosis"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Mulher de 54 anos, previamente hígida, é admitida na UTI com insuficiência respiratória hipoxêmica grave após 7 dias de sintomas gripais. Está em ventilação mecânica, com PaO₂/FiO₂ de 110. A radiografia de tórax mostra infiltrados bilaterais difusos. A equipe realiza ultrassom pulmonar à beira-leito, que revela: linhas B difusas em ambos os pulmões, áreas de consolidação subpleural posterior bilateral e ausência de deslizamento pleural. Não há derrame pleural. Considerando o uso de POCUS no diagnóstico diferencial entre SDRA e pneumonia, qual das interpretações abaixo é mais compatível com os achados?",
    "en": "A 54-year-old previously healthy woman is admitted to the ICU with severe hypoxemic respiratory failure after 7 days of flu-like symptoms. She is on mechanical ventilation, with PaO₂/FiO₂ of 110. Chest X-ray shows diffuse bilateral infiltrates. Bedside lung ultrasound reveals: diffuse B-lines in both lungs, posterior bilateral subpleural consolidations, and absence of pleural sliding. No pleural effusion is seen. Based on lung ultrasound for differentiating ARDS and pneumonia, which interpretation best fits these findings?",
    "es": "Mujer de 54 años, previamente sana, es ingresada en UCI con insuficiencia respiratoria hipoxémica grave tras 7 días de síntomas gripales. Está en VM con PaO₂/FiO₂ de 110. La Rx de tórax muestra infiltrados bilaterales difusos. El ultrasonido pulmonar a pie de cama revela: líneas B difusas en ambos pulmones, consolidaciones subpleurales posteriores bilaterales y ausencia de deslizamiento pleural. No hay derrame pleural. Según el uso de POCUS para diferenciar SDRA y neumonía, ¿cuál interpretación se ajusta mejor a estos hallazgos?"
  },
  "options": [
    {
      "text": {
        "pt": "O padrão focal das linhas B e consolidações posteriores indica provável pneumonia lobar",
        "en": "The focal B-line pattern and posterior consolidations suggest lobar pneumonia",
        "es": "El patrón focal de líneas B y consolidaciones posteriores sugiere neumonía lobar"
      },
      "explanation": {
        "pt": "Padrão focal de linhas B é mais típico de pneumonia localizada. No entanto, o caso descreve padrão difuso com envolvimento bilateral simétrico, menos típico de infecção lobar.",
        "en": "Focal B-lines are more characteristic of localized pneumonia, while the described findings indicate a diffuse process.",
        "es": "Las líneas B focales son más típicas de neumonía localizada. El caso muestra un patrón difuso bilateral."
      }
    },
    {
      "text": {
        "pt": "A presença de deslizamento pleural favorece SDRA em vez de pneumonia",
        "en": "Presence of pleural sliding favors ARDS over pneumonia",
        "es": "La presencia de deslizamiento pleural favorece SDRA sobre neumonía"
      },
      "explanation": {
        "pt": "O caso descreve ausência de deslizamento pleural, o que pode ocorrer tanto em SDRA quanto em pneumonia extensa. O deslizamento pleural preservado tende a favorecer SDRA precoce, mas sua ausência não exclui nenhum diagnóstico.",
        "en": "Pleural sliding, when preserved, favors early ARDS. Its absence may be seen in either pneumonia or advanced ARDS.",
        "es": "El deslizamiento pleural ausente puede encontrarse tanto en SDRA como en neumonía extensa. No es discriminativo isoladamente."
      }
    },
    {
      "text": {
        "pt": "O achado de consolidações subpleurais bilaterais é altamente específico para pneumonia",
        "en": "Bilateral subpleural consolidations are highly specific for pneumonia",
        "es": "Las consolidaciones subpleurales bilaterales son altamente específicas para neumonía"
      },
      "explanation": {
        "pt": "Consolidações subpleurais também ocorrem em SDRA, especialmente na fase exsudativa. Embora comuns na pneumonia, elas não são exclusivas. Padrões bilaterais e difusos apontam mais fortemente para SDRA.",
        "en": "Subpleural consolidations can appear in ARDS, especially in the exudative phase. Though common in pneumonia, they are not exclusive.",
        "es": "Las consolidaciones subpleurales pueden aparecer también en SDRA. No son exclusivas de neumonía."
      }
    },
    {
      "text": {
        "pt": "Padrão bilateral de linhas B difusas com consolidações simétricas favorece SDRA",
        "en": "Bilateral diffuse B-lines with symmetric consolidations favor ARDS",
        "es": "Líneas B difusas bilaterales con consolidaciones simétricas favorecen SDRA"
      },
      "explanation": {
        "pt": "O padrão descrito é clássico da fase precoce da SDRA: linhas B difusas bilaterais, consolidações subpleurais simétricas e ausência de derrame. Diretrizes da European Society of Intensive Care Medicine (2023) e estudos como Lichtenstein et al. reforçam o valor diagnóstico desse padrão. A pneumonia costuma apresentar achados assimétricos ou focais.",
        "en": "The described pattern is classic for early ARDS: diffuse bilateral B-lines, symmetric subpleural consolidations, and no effusion. ESICM guidelines and studies by Lichtenstein et al. support this diagnostic pattern. Pneumonia often has focal or asymmetric findings.",
        "es": "El patrón es típico de SDRA: líneas B difusas bilaterales y consolidaciones subpleurales simétricas. La neumonía suele ser focal o asimétrica."
      }
    },
    {
      "text": {
        "pt": "A ausência de derrame pleural praticamente exclui pneumonia",
        "en": "Absence of pleural effusion practically excludes pneumonia",
        "es": "La ausencia de derrame pleural prácticamente excluye neumonía"
      },
      "explanation": {
        "pt": "Derrame pleural pode estar presente em pneumonia, mas sua ausência não exclui o diagnóstico. Muitos casos de pneumonia não evoluem com derrame.",
        "en": "Pleural effusion may occur in pneumonia, but its absence does not exclude it. Many pneumonia cases have no effusion.",
        "es": "La ausencia de derrame no excluye neumonía. Muchos casos no lo presentan."
      }
    }
  ]
},
{
  "id": 805,
  "code": "pneumo03-q805",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["diaphragm_ultrasound", "weaning", "mechanical_ventilation", "icu_monitoring"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Homem de 73 anos, com DPOC GOLD 3 e fraqueza muscular generalizada, encontra-se sob ventilação mecânica há 7 dias por exacerbação com hipercapnia. Após melhora clínica e hemodinâmica, a equipe inicia tentativa de desmame. Durante o teste de respiração espontânea (T-piece), o paciente permanece eupneico, mas com discreta fadiga após 20 minutos. A ecografia diafragmática mostra excursão de 7 mm à direita e fração de espessamento (DTF) de 21% durante inspiração profunda. Qual é a melhor interpretação e conduta neste momento?",
    "en": "A 73-year-old man with GOLD 3 COPD and generalized muscle weakness is on mechanical ventilation for 7 days due to hypercapnic exacerbation. After clinical and hemodynamic improvement, weaning is initiated. During the spontaneous breathing trial (T-piece), he remains eupneic but shows slight fatigue after 20 minutes. Diaphragm ultrasound shows a right excursion of 7 mm and thickening fraction (DTF) of 21% on deep inspiration. What is the best interpretation and next step?",
    "es": "Hombre de 73 años con EPOC GOLD 3 y debilidad muscular generalizada se encuentra en ventilación mecánica desde hace 7 días por exacerbación hipercápnica. Tras mejoría clínica y hemodinámica, se inicia el destete. Durante la prueba de respiración espontánea (T-piece), permanece eupneico pero con discreta fatiga tras 20 minutos. La ecografía diafragmática muestra excursión derecha de 7 mm y fracción de engrosamiento (DTF) de 21% en inspiración profunda. ¿Cuál es la mejor interpretación y conducta a seguir?"
  },
  "options": [
    {
      "text": {
        "pt": "A excursão reduzida e DTF < 30% indicam disfunção diafragmática com risco de falha no desmame. Deve-se suspender o teste e ajustar suporte ventilatório.",
        "en": "Reduced excursion and DTF < 30% indicate diaphragmatic dysfunction and high risk of weaning failure. The test should be stopped and ventilatory support adjusted.",
        "es": "La excursión reducida y DTF < 30% indican disfunción diafragmática con alto riesgo de fallo en el destete. Debe suspenderse la prueba y ajustar el soporte."
      },
      "explanation": {
        "pt": "Segundo estudos prospectivos (e.g., Ferrari et al., 2020; DiNino et al., 2014) e as diretrizes da ERS (2022), valores de DTF < 30% ou excursão diafragmática < 1 cm são associados a alta probabilidade de falha no desmame. Nestes casos, a interrupção do teste e reavaliação são indicadas. A ultrassonografia permite antecipar sinais de fadiga antes de parâmetros clínicos clássicos.",
        "en": "According to prospective studies and ERS 2022 guidelines, DTF < 30% and excursion < 1 cm are predictive of weaning failure. Early test interruption is advisable in such cases. Ultrasound offers early fatigue detection before clinical signs.",
        "es": "Estudios prospectivos y guías ERS 2022 señalan que DTF < 30% y excursión < 1 cm se asocian con fallo en el destete. Se recomienda interrumpir la prueba y ajustar el soporte."
      }
    },
    {
      "text": {
        "pt": "Os achados ultrassonográficos são normais; deve-se prosseguir com extubação imediata.",
        "en": "Ultrasound findings are normal; immediate extubation is indicated.",
        "es": "Los hallazgos ecográficos son normales; se debe proceder a extubación inmediata."
      },
      "explanation": {
        "pt": "A excursão < 1 cm e DTF < 30% não são considerados normais. Valores normais incluem excursão > 1.1–1.3 cm e DTF > 30–36%. O risco de falha permanece elevado, especialmente em pacientes com DPOC e fadiga precoce.",
        "en": "Excursion < 1 cm and DTF < 30% are not normal. Typical thresholds are excursion > 1.1–1.3 cm and DTF > 30–36%. Extubation would be premature.",
        "es": "Excursión < 1 cm y DTF < 30% no son normales. Extubar sería prematuro."
      }
    },
    {
      "text": {
        "pt": "Deve-se iniciar ventilação não invasiva imediatamente após a extubação, como estratégia preventiva.",
        "en": "Noninvasive ventilation should be started immediately after extubation as a preventive strategy.",
        "es": "Se debe iniciar ventilación no invasiva inmediatamente tras la extubación como estrategia preventiva."
      },
      "explanation": {
        "pt": "Embora a VNI pós-extubação seja recomendada em alguns pacientes com DPOC, a presença de sinais objetivos de fadiga diafragmática indica que o paciente ainda não está pronto para extubação. Extubar apenas para iniciar VNI não é prática recomendada neste contexto.",
        "en": "Although NIV is beneficial post-extubation in selected COPD cases, clear signs of diaphragmatic dysfunction suggest the patient is not ready for extubation.",
        "es": "Aunque la VNI es útil tras extubación en ciertos EPOC, aquí hay signos de disfunción diafragmática activa."
      }
    },
    {
      "text": {
        "pt": "Deve-se repetir o teste por mais 30 minutos, pois os achados ultrassonográficos ainda não contraindicam a extubação.",
        "en": "The test should be extended by 30 minutes, as ultrasound findings do not yet contraindicate extubation.",
        "es": "Debe prolongarse la prueba 30 minutos, ya que los hallazgos no contraindican la extubación."
      },
      "explanation": {
        "pt": "Estender o teste pode agravar a fadiga diafragmática em paciente já limite. A ultrassonografia permite decisões precoces e pode evitar falência tardia. As diretrizes recomendam cautela com testes prolongados na presença de disfunção mecânica do diafragma.",
        "en": "Prolonging the test can worsen diaphragm fatigue. Guidelines advise caution with extended trials when diaphragmatic dysfunction is detected.",
        "es": "Prolongar la prueba puede agravar la fatiga. Las guías aconsejan precaución en estos casos."
      }
    },
    {
      "text": {
        "pt": "A DTF inferior a 50% é normal em pacientes com DPOC e não influencia o desfecho do desmame.",
        "en": "DTF below 50% is normal in COPD patients and does not affect weaning outcome.",
        "es": "Una DTF inferior al 50% es normal en pacientes EPOC y no afecta el éxito del destete."
      },
      "explanation": {
        "pt": "Estudos como Zambon et al. (2017) e Umbrello et al. (2020) mostram que DTF < 30% está associada a falência no desmame, mesmo em DPOC. Não é verdade que DTF < 50% seja neutra no prognóstico.",
        "en": "Multiple studies show that DTF < 30% predicts failure even in COPD. It's not correct to assume DTF < 50% is neutral.",
        "es": "La DTF < 30% predice fallo incluso en EPOC. No es neutra clínicamente."
      }
    }
  ]
},
{
  "id": 806,
  "code": "pneumo03-q806",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["ards", "steroids", "meduri_protocol", "refractory_hypoxemia"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Homem de 62 anos, previamente saudável, desenvolve SDRA grave após pneumonia viral. Após 7 dias de ventilação mecânica com estratégia protetora, pronação e bloqueio neuromuscular, permanece com PaO₂/FiO₂ de 75, compliance estático de 24 mL/cmH₂O e dímero-D elevado. A TC de tórax mostra opacidades em vidro fosco e áreas de consolidação dependente. A equipe considera o uso de corticosteroides. Qual das abordagens abaixo melhor reflete as evidências atuais sobre o protocolo de Meduri em SDRA?",
    "en": "A 62-year-old previously healthy man develops severe ARDS following viral pneumonia. After 7 days on protective mechanical ventilation, pronation, and neuromuscular blockade, his PaO₂/FiO₂ remains at 75, with a static compliance of 24 mL/cmH₂O and elevated D-dimer. Chest CT shows ground-glass opacities and dependent consolidations. The team considers corticosteroid therapy. Which approach best reflects current evidence regarding the Meduri protocol in ARDS?",
    "es": "Un hombre de 62 años previamente sano desarrolla SDRA grave tras una neumonía viral. Tras 7 días en ventilación mecánica protectora, pronación y bloqueo neuromuscular, su PaO₂/FiO₂ se mantiene en 75, con compliance estática de 24 mL/cmH₂O y dímero-D elevado. La TC torácica muestra opacidades en vidrio deslustrado y consolidaciones dependientes. El equipo considera el uso de corticoides. ¿Cuál enfoque refleja mejor la evidencia actual sobre el protocolo de Meduri en SDRA?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar metilprednisolona 1 mg/kg/dia por 14 dias, com redução progressiva após melhora clínica e gasométrica",
        "en": "Start methylprednisolone 1 mg/kg/day for 14 days, with gradual taper after clinical and gasometric improvement",
        "es": "Iniciar metilprednisolona 1 mg/kg/día por 14 días, con reducción progresiva tras mejoría clínica y gasométrica"
      },
      "explanation": {
        "pt": "O protocolo de Meduri propõe o uso precoce de metilprednisolona (1 mg/kg/dia) por até 14 dias em pacientes com SDRA persistente após a fase inflamatória inicial. Revisões sistemáticas e meta-análises (Ruan et al., 2021; Meduri et al., Chest 2007) sugerem melhora em tempo de VM, resolução de infiltrados e mortalidade em casos selecionados. Deve-se monitorar cuidadosamente glicemia, infecções e risco de miopatia.",
        "en": "The Meduri protocol supports early methylprednisolone (1 mg/kg/day) for up to 14 days in persistent ARDS. Meta-analyses show benefits in ventilation duration, infiltrate resolution, and mortality in selected patients.",
        "es": "El protocolo de Meduri indica metilprednisolona 1 mg/kg/día hasta 14 días en SDRA persistente. Meta-análisis sugieren beneficios en duración de la VM y mortalidad en pacientes seleccionados."
      }
    },
    {
      "text": {
        "pt": "Corticosteroides estão contraindicados após 7 dias de início da SDRA devido ao risco de fibrose pulmonar acelerada",
        "en": "Corticosteroids are contraindicated after 7 days of ARDS onset due to the risk of accelerated lung fibrosis",
        "es": "Los corticosteroides están contraindicados tras 7 días de SDRA por riesgo de fibrosis pulmonar acelerada"
      },
      "explanation": {
        "pt": "Embora o uso tardio de corticoides seja mais controverso, estudos como o Meduri trial (Chest 2007) e revisões recentes (Annane et al., 2017) não mostram aumento da fibrose quando há reversibilidade. O uso tardio pode ser benéfico em casos de SDRA prolongada e inflamação persistente.",
        "en": "Late steroid use remains controversial but is not absolutely contraindicated. Studies do not confirm fibrosis acceleration when used in persistent inflammation.",
        "es": "El uso tardío es controvertido pero no contraindicado. No se ha demostrado aumento significativo de fibrosis con uso controlado."
      }
    },
    {
      "text": {
        "pt": "Recomenda-se hidrocortisona em infusão contínua como padrão no tratamento da SDRA refratária",
        "en": "Continuous hydrocortisone infusion is the standard treatment for refractory ARDS",
        "es": "La infusión continua de hidrocortisona es el tratamiento estándar para SDRA refractaria"
      },
      "explanation": {
        "pt": "Hidrocortisona é preferida em choque refratário e sepse, mas não é o agente preferencial nos protocolos de SDRA, onde a metilprednisolona é mais estudada. A escolha depende do fenótipo clínico (hipoinflamatório vs hiperinflamatório).",
        "en": "Hydrocortisone is used in shock/sepsis, but methylprednisolone is preferred in ARDS protocols. Choice depends on inflammatory phenotype.",
        "es": "La hidrocortisona se usa en shock séptico. En SDRA se prefiere metilprednisolona según el protocolo de Meduri."
      }
    },
    {
      "text": {
        "pt": "Apenas SDRA associada à COVID-19 justifica o uso de esteroides após a primeira semana",
        "en": "Only COVID-19-associated ARDS justifies steroid use beyond the first week",
        "es": "Solo el SDRA asociado a COVID-19 justifica el uso de esteroides tras la primera semana"
      },
      "explanation": {
        "pt": "A recomendação de uso de dexametasona em COVID-19 (RECOVERY trial) foi estendida a SDRA de outras etiologias com padrão inflamatório persistente, embora com menor nível de evidência. O protocolo de Meduri se aplica a SDRA não-COVID também.",
        "en": "While COVID-19 popularized steroid use (RECOVERY trial), evidence supports their role in non-COVID ARDS with persistent inflammation.",
        "es": "Aunque se hizo popular en COVID-19, los corticoides también tienen indicación en SDRA no COVID con inflamación persistente."
      }
    },
    {
      "text": {
        "pt": "Esteroides devem ser evitados devido ao risco aumentado de pneumotórax em pacientes com compliance pulmonar reduzida",
        "en": "Steroids should be avoided due to increased risk of pneumothorax in patients with low pulmonary compliance",
        "es": "Se deben evitar los esteroides por riesgo aumentado de neumotórax en pacientes con baja compliance pulmonar"
      },
      "explanation": {
        "pt": "O risco de pneumotórax está mais relacionado à estratégia ventilatória do que ao uso de esteroides. Não há evidência robusta ligando corticoides a aumento de barotrauma em SDRA.",
        "en": "Pneumothorax risk is more linked to ventilation strategy than steroid use. No strong evidence links steroids to barotrauma.",
        "es": "El riesgo de neumotórax depende más de la ventilación que del uso de esteroides."
      }
    }
  ]
},
{
  "id": 807,
  "code": "pneumo03-q807",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["ards", "prone_positioning", "peep_titration", "neuromuscular_blockade", "refractory_hypoxemia"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Mulher de 49 anos, previamente hígida, é internada na UTI com SDRA grave (PaO₂/FiO₂ = 68, compliance estática 18 mL/cmH₂O, infiltrados bilaterais difusos). Recebe ventilação protetora (6 mL/kg de peso ideal) com PEEP 10 e FiO₂ 0,9. Após 2 horas, continua hipoxêmica (PaO₂ = 60 mmHg), sem instabilidade hemodinâmica. A equipe discute o próximo passo com base no algoritmo de tratamento da SDRA severa. Qual conduta está mais alinhada com as recomendações atuais?",
    "en": "A 49-year-old previously healthy woman is admitted to the ICU with severe ARDS (PaO₂/FiO₂ = 68, static compliance 18 mL/cmH₂O, bilateral diffuse infiltrates). She is on protective ventilation (6 mL/kg IBW), with PEEP 10 and FiO₂ 0.9. After 2 hours, she remains hypoxemic (PaO₂ = 60 mmHg), without hemodynamic instability. Based on the current ARDS treatment algorithm, what is the most appropriate next step?",
    "es": "Una mujer de 49 años previamente sana es ingresada en la UCI con SDRA grave (PaO₂/FiO₂ = 68, compliance estática 18 mL/cmH₂O, infiltrados bilaterales difusos). Se encuentra en ventilación protectora (6 mL/kg de peso ideal), con PEEP 10 y FiO₂ 0.9. Tras 2 horas, sigue hipoxémica (PaO₂ = 60 mmHg), sin inestabilidad hemodinámica. Según el algoritmo actual de tratamiento de SDRA grave, ¿cuál es el siguiente paso más apropiado?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar infusão contínua de corticoides para reduzir a resposta inflamatória alveolar",
        "en": "Start continuous corticosteroid infusion to reduce alveolar inflammation",
        "es": "Iniciar infusión continua de corticoides para reducir la inflamación alveolar"
      },
      "explanation": {
        "pt": "O uso de corticoides pode ser considerado, mas não é o próximo passo prioritário frente à hipoxemia refratária sem outras medidas já aplicadas, como pronação. Além disso, sua indicação depende da fase e fenótipo do paciente.",
        "en": "Steroids may be considered, but are not the immediate next step in refractory hypoxemia without having applied measures like proning.",
        "es": "Los corticoides pueden considerarse, pero no son el siguiente paso prioritario sin haber intentado decúbito prono."
      }
    },
    {
      "text": {
        "pt": "Aumentar o volume corrente para 8 mL/kg visando melhor recrutamento alveolar",
        "en": "Increase tidal volume to 8 mL/kg to improve alveolar recruitment",
        "es": "Aumentar el volumen corriente a 8 mL/kg para mejorar el reclutamiento alveolar"
      },
      "explanation": {
        "pt": "Volumes correntes elevados aumentam o risco de volutrauma e estão contraindicados na SDRA. A ventilação protetora deve ser mantida.",
        "en": "High tidal volumes increase risk of volutrauma and are contraindicated in ARDS. Protective ventilation should be maintained.",
        "es": "Volúmenes corrientes elevados aumentan el riesgo de volutrauma y están contraindicados en SDRA."
      }
    },
    {
      "text": {
        "pt": "Iniciar bloqueador neuromuscular contínuo por 48 horas para reduzir asincronia e consumo de oxigênio",
        "en": "Start continuous neuromuscular blockade for 48 hours to reduce asynchrony and oxygen consumption",
        "es": "Iniciar bloqueo neuromuscular continuo por 48 horas para reducir asincronía y consumo de oxígeno"
      },
      "explanation": {
        "pt": "O uso de bloqueadores neuromusculares pode ser indicado como adjuvante, mas preferencialmente após falha da posição prona. Estudos como o ACURASYS mostraram benefício modesto. Pronação deve preceder.",
        "en": "NMBA can be used adjunctively, but proning should be attempted first. ACURASYS showed only modest benefit.",
        "es": "El bloqueo neuromuscular puede usarse como complemento, pero la posición prono es prioritaria."
      }
    },
    {
      "text": {
        "pt": "Colocar o paciente em posição prona por pelo menos 16 horas",
        "en": "Place the patient in prone position for at least 16 hours",
        "es": "Colocar al paciente en posición prono por al menos 16 horas"
      },
      "explanation": {
        "pt": "A posição prona é a intervenção mais eficaz para melhorar a oxigenação e reduzir mortalidade na SDRA grave, conforme o estudo PROSEVA. Deve ser iniciada precocemente quando PaO₂/FiO₂ < 150, idealmente < 100.",
        "en": "Prone positioning is the most effective intervention for improving oxygenation and reducing mortality in severe ARDS, as shown in PROSEVA. It should be started early when PaO₂/FiO₂ < 150.",
        "es": "La posición prono es la intervención más efectiva para mejorar la oxigenación en SDRA grave, como demostró el estudio PROSEVA."
      }
    },
    {
      "text": {
        "pt": "Iniciar ECMO-VA para suporte ventilatório e hemodinâmico",
        "en": "Start VA-ECMO for respiratory and hemodynamic support",
        "es": "Iniciar ECMO-VA para soporte respiratorio y hemodinámico"
      },
      "explanation": {
        "pt": "ECMO venoarterial é indicada em choque refratário, o que não está presente neste caso. O suporte ventilatório com ECMO-VV pode ser considerado posteriormente, após tentativa de pronação e outras medidas.",
        "en": "VA-ECMO is for circulatory collapse. VV-ECMO may be considered later after other steps like proning have failed.",
        "es": "La ECMO-VA se indica en colapso circulatorio, no en hipoxemia aislada."
      }
    }
  ]
},
{
  "id": 808,
  "code": "pneumo03-q808",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["tension_pneumothorax", "pocus", "thoracostomy", "emergency_airway", "ultrasound"],
  "level": "hard",
  "correct": 2,
  "question": {
    "pt": "Um homem de 36 anos, previamente hígido, é admitido na UTI após acidente automobilístico. Está sob ventilação mecânica e apresenta súbita dessaturação, hipotensão (PA 75/40 mmHg), taquicardia e distensão jugular. A ausculta revela murmúrio vesicular ausente à direita. A ultrassonografia pulmonar à beira-leito mostra ausência do 'lung sliding' e presença do 'sinal do código de barras' no modo M. Qual é a conduta mais adequada neste momento, e como deve ser conduzido o tratamento definitivo?",
    "en": "A 36-year-old previously healthy man is admitted to the ICU after a car accident. He is on mechanical ventilation and suddenly desaturates, becomes hypotensive (BP 75/40 mmHg), tachycardic, with jugular distension. Lung auscultation reveals absent breath sounds on the right. Bedside lung ultrasound shows absent lung sliding and barcode sign in M-mode. What is the most appropriate management now, and how should definitive treatment proceed?",
    "es": "Un hombre de 36 años previamente sano es ingresado en la UCI tras un accidente automovilístico. Está en ventilación mecánica y presenta desaturación súbita, hipotensión (PA 75/40 mmHg), taquicardia y distensión yugular. La auscultación revela murmullo vesicular ausente en el lado derecho. La ecografía pulmonar muestra ausencia de 'lung sliding' y el 'signo del código de barras' en modo M. ¿Cuál es la conducta más adecuada en este momento y cómo debe manejarse el tratamiento definitivo?"
  },
  "options": [
    {
      "text": {
        "pt": "Solicitar radiografia de tórax portátil e confirmar diagnóstico antes de qualquer intervenção",
        "en": "Order portable chest X-ray and confirm diagnosis before any intervention",
        "es": "Solicitar radiografía de tórax portátil y confirmar diagnóstico antes de intervenir"
      },
      "explanation": {
        "pt": "A radiografia leva tempo e não deve atrasar o tratamento do pneumotórax hipertensivo, cuja suspeita clínica e ultrassonográfica já indicam descompressão imediata.",
        "en": "Chest X-ray takes time and should not delay treatment of tension pneumothorax, which is clinically and sonographically suspected.",
        "es": "La radiografía lleva tiempo y no debe retrasar el tratamiento de neumotórax hipertensivo clínicamente sospechado."
      }
    },
    {
      "text": {
        "pt": "Realizar toracocentese imediata no 2º espaço intercostal na linha médio-clavicular, seguida por drenagem no 5º espaço intercostal na linha axilar anterior",
        "en": "Perform immediate needle decompression at the 2nd intercostal space midclavicular line, followed by chest tube placement at the 5th intercostal space anterior axillary line",
        "es": "Realizar descompresión inmediata con aguja en el 2º espacio intercostal en la línea medio clavicular, seguida de drenaje torácico en el 5º espacio intercostal línea axilar anterior"
      },
      "explanation": {
        "pt": "O tratamento do pneumotórax hipertensivo é clínico e imediato. A toracocentese alivia a pressão intratorácica e deve ser seguida por drenagem definitiva com tubo no 5º EIC. O uso do US com ausência de lung sliding e sinal do código de barras tem sensibilidade >90%. As diretrizes do ATLS e ESICM apoiam essa sequência de condutas.",
        "en": "Tension pneumothorax is a clinical emergency. Needle decompression relieves pressure and must be followed by definitive tube thoracostomy. POCUS signs like absent lung sliding and barcode sign have >90% sensitivity. ATLS and ESICM recommend this stepwise approach.",
        "es": "El neumotórax hipertensivo requiere descompresión inmediata seguida de drenaje definitivo. La ecografía con ausencia de lung sliding y signo de código de barras tiene alta sensibilidad. Guías ATLS y ESICM apoyan esta secuencia."
      }
    },
    {
      "text": {
        "pt": "Iniciar ventilação com pressão positiva contínua (CPAP) e avaliar resposta clínica",
        "en": "Initiate continuous positive airway pressure (CPAP) and assess clinical response",
        "es": "Iniciar presión positiva continua (CPAP) y evaluar la respuesta clínica"
      },
      "explanation": {
        "pt": "CPAP pode agravar o pneumotórax hipertensivo ao aumentar a pressão intratorácica. Está contraindicado até descompressão completa.",
        "en": "CPAP may worsen tension pneumothorax by increasing intrathoracic pressure. It is contraindicated until decompression.",
        "es": "El CPAP puede empeorar el neumotórax hipertensivo y está contraindicado antes de la descompresión."
      }
    },
    {
      "text": {
        "pt": "Intubar imediatamente com bloqueio neuromuscular e realizar hiperventilação",
        "en": "Immediately intubate with neuromuscular blockade and perform hyperventilation",
        "es": "Intubar inmediatamente con bloqueo neuromuscular y realizar hiperventilación"
      },
      "explanation": {
        "pt": "Intubação não trata a causa e pode piorar a situação se não houver descompressão prévia. A prioridade é aliviar o pneumotórax.",
        "en": "Intubation does not resolve the cause and may worsen the situation unless decompression is performed first.",
        "es": "La intubación no resuelve la causa y puede empeorar la condición si no se realiza la descompresión primero."
      }
    },
    {
      "text": {
        "pt": "Iniciar noradrenalina para manter a pressão arterial até a chegada da cirurgia torácica",
        "en": "Start norepinephrine to maintain blood pressure until thoracic surgery arrives",
        "es": "Iniciar noradrenalina para mantener la presión arterial hasta que llegue cirugía torácica"
      },
      "explanation": {
        "pt": "Uso isolado de vasopressor não trata o problema mecânico da hipertensão intratorácica. Pode atrasar intervenção essencial.",
        "en": "Vasopressors alone do not address the mechanical problem. Delaying decompression can be fatal.",
        "es": "Los vasopresores no tratan el problema mecánico subyacente y pueden retrasar la intervención que salva vidas."
      }
    }
  ]
},
{
  "id": 809,
  "code": "pneumo03-q809",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["interstitial_lung_disease", "fibrosis", "oxygen_therapy", "hypoxemia", "lung_transplant"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Homem de 72 anos com diagnóstico prévio de fibrose pulmonar idiopática evolui com piora progressiva da dispneia e dessaturação aos mínimos esforços. A gasometria arterial em repouso revela PaO₂ de 56 mmHg em ar ambiente. O teste de caminhada de 6 minutos é interrompido precocemente por dessaturação (SpO₂ mínima de 82%). Está em uso de pirfenidona e broncodilatadores, sem melhora. Considerando as estratégias indicadas para pacientes com doença pulmonar intersticial avançada e hipoxemia refratária, qual é a conduta mais apropriada neste momento?",
    "en": "A 72-year-old man with known idiopathic pulmonary fibrosis presents with progressive dyspnea and desaturation on minimal exertion. Arterial blood gas on room air shows PaO₂ of 56 mmHg. The 6-minute walk test is interrupted early due to desaturation (SpO₂ drops to 82%). He is on pirfenidone and bronchodilators with no improvement. Considering management of advanced interstitial lung disease with refractory hypoxemia, what is the most appropriate next step?",
    "es": "Un hombre de 72 años con diagnóstico de fibrosis pulmonar idiopática presenta disnea progresiva y desaturación con esfuerzos mínimos. La gasometría arterial en aire ambiente muestra PaO₂ de 56 mmHg. La caminata de 6 minutos se interrumpe precozmente por desaturación (SpO₂ mínima de 82%). Está en tratamiento con pirfenidona y broncodilatadores sin mejoría. ¿Cuál es la conducta más adecuada en este momento según las recomendaciones para EPI avanzada con hipoxemia refractaria?"
  },
  "options": [
    {
      "text": {
        "pt": "Prescrever oxigenioterapia domiciliar contínua com fluxo ajustado para manter SpO₂ acima de 90%, inclusive durante esforço",
        "en": "Prescribe continuous home oxygen therapy with flow adjusted to maintain SpO₂ above 90%, including during exertion",
        "es": "Prescribir oxigenoterapia domiciliaria continua con flujo ajustado para mantener SpO₂ por encima del 90%, incluso durante esfuerzo"
      },
      "explanation": {
        "pt": "Oxigenoterapia contínua é recomendada quando PaO₂ < 55–60 mmHg ou SpO₂ < 88%, especialmente em pacientes com dessaturação ao esforço. Estudos como o AmbOx trial reforçam a melhora sintomática, embora não altere sobrevida. Deve-se titular o fluxo também para atividade física e considerar encaminhamento para transplante pulmonar.",
        "en": "Continuous oxygen therapy is indicated when PaO₂ < 55–60 mmHg or SpO₂ < 88%, especially with exertional desaturation. Trials like AmbOx support symptom improvement. Referral for lung transplant should also be considered.",
        "es": "La oxigenoterapia continua está indicada con PaO₂ < 55–60 mmHg o SpO₂ < 88%, especialmente con desaturación al esfuerzo. Estudios como AmbOx respaldan mejora sintomática. Debe considerarse trasplante pulmonar."
      }
    },
    {
      "text": {
        "pt": "Iniciar VNI noturna com CPAP em todos os pacientes com dessaturação persistente",
        "en": "Initiate nocturnal CPAP in all patients with persistent desaturation",
        "es": "Iniciar CPAP nocturno en todos los pacientes con desaturación persistente"
      },
      "explanation": {
        "pt": "CPAP é reservado para casos com apneia obstrutiva do sono comprovada ou hipoventilação. Não é rotina na fibrose com dessaturação isolada. O benefício da VNI na EPI é controverso, exceto em exacerbações agudas ou falência respiratória.",
        "en": "CPAP is reserved for diagnosed OSA or hypoventilation. It's not routinely indicated in ILD with isolated desaturation.",
        "es": "El CPAP se usa en SAOS o hipoventilación comprobada, no de forma sistemática en EPI con desaturación."
      }
    },
    {
      "text": {
        "pt": "Solicitar biópsia pulmonar cirúrgica para avaliar possível componente tratável de pneumonia em organização",
        "en": "Request surgical lung biopsy to assess for a treatable organizing pneumonia component",
        "es": "Solicitar biopsia pulmonar quirúrgica para evaluar componente tratable de neumonía organizada"
      },
      "explanation": {
        "pt": "A biópsia cirúrgica tem riscos elevados em pacientes com doença avançada e não está indicada quando já se tem diagnóstico estabelecido. Pneumonia em organização é improvável neste contexto clínico crônico e progressivo.",
        "en": "Surgical biopsy carries high risk in advanced disease and is not indicated with established IPF diagnosis. Organizing pneumonia is unlikely here.",
        "es": "La biopsia quirúrgica tiene alto riesgo en EPI avanzada. La neumonía organizada no es probable en este caso."
      }
    },
    {
      "text": {
        "pt": "Trocar a pirfenidona por nintedanibe, que apresenta superioridade comprovada em casos refratários",
        "en": "Switch from pirfenidone to nintedanib, which shows superior efficacy in refractory cases",
        "es": "Cambiar de pirfenidona a nintedanib, que muestra superioridad en casos refractarios"
      },
      "explanation": {
        "pt": "Ambos antifibróticos têm eficácia semelhante em retardar a progressão da doença. A troca não é garantida de trazer benefício clínico adicional em curto prazo. O foco deve ser no suporte e avaliação para transplante.",
        "en": "Both antifibrotics show similar efficacy. Switching does not guarantee additional benefit. Focus should be on supportive care and transplant evaluation.",
        "es": "Ambos antifibróticos son eficaces y su intercambio no garantiza beneficio adicional. Se debe enfocar en el soporte y considerar trasplante."
      }
    },
    {
      "text": {
        "pt": "Indicar ventilação mecânica eletiva para otimizar a troca gasosa e prevenir dessaturações graves",
        "en": "Electively initiate mechanical ventilation to optimize gas exchange and prevent severe desaturations",
        "es": "Indicar ventilación mecánica electiva para optimizar el intercambio gaseoso y prevenir desaturaciones"
      },
      "explanation": {
        "pt": "Ventilação invasiva é reservada para casos de falência respiratória aguda. Na fibrose pulmonar avançada, está associada a alta mortalidade e não é indicada de forma eletiva.",
        "en": "Mechanical ventilation is reserved for acute failure. In advanced pulmonary fibrosis, it's associated with poor outcomes and not used electively.",
        "es": "La ventilación invasiva se reserva para fallos agudos y no se indica electivamente en fibrosis avanzada."
      }
    }
  ]
},
{
  "id": 810,
  "code": "pneumo03-q810",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["cystic_fibrosis", "mechanical_ventilation", "air_trapping", "dynamic_hyperinflation", "auto_peep"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Paciente de 28 anos com diagnóstico de fibrose cística e exacerbação respiratória grave evolui com insuficiência respiratória aguda hipercápnica e necessidade de intubação orotraqueal. Apresenta grande quantidade de secreções e sinais de aprisionamento aéreo na curva fluxo-tempo do ventilador. Considerando as estratégias ventilatórias recomendadas para pacientes com fibrose cística em ventilação invasiva, qual das condutas abaixo é mais adequada?",
    "en": "A 28-year-old patient with cystic fibrosis and severe respiratory exacerbation develops acute hypercapnic respiratory failure requiring orotracheal intubation. There is significant airway secretion and evidence of air trapping on the ventilator flow-time curve. Considering recommended ventilatory strategies for patients with cystic fibrosis on invasive ventilation, which of the following is most appropriate?",
    "es": "Paciente de 28 años con diagnóstico de fibrosis quística y exacerbación respiratoria grave evoluciona con insuficiencia respiratoria aguda hipercápnica, requiriendo intubación orotraqueal. Presenta abundantes secreciones y atrapamiento aéreo en la curva flujo-tiempo del ventilador. ¿Cuál de las siguientes estrategias ventilatorias es la más adecuada según las recomendaciones para fibrosis quística?"
  },
  "options": [
    {
      "text": {
        "pt": "Usar modo controlado por volume com frequência respiratória alta e I:E de 1:1 para otimizar a ventilação alveolar",
        "en": "Use volume-controlled mode with high respiratory rate and I:E ratio of 1:1 to optimize alveolar ventilation",
        "es": "Usar modo controlado por volumen con frecuencia alta y relación I:E de 1:1 para optimizar la ventilación alveolar"
      },
      "explanation": {
        "pt": "Frequências altas e relação I:E reduzida levam à hiperinsuflação dinâmica. Pacientes com fibrose cística exigem tempo expiratório prolongado para evitar auto-PEEP.",
        "en": "High rates and short expiratory times promote dynamic hyperinflation. CF patients need prolonged expiratory time to prevent auto-PEEP.",
        "es": "Frecuencias altas y tiempo espiratorio corto favorecen la hiperinsuflación. Se debe prolongar el tiempo espiratorio."
      }
    },
    {
      "text": {
        "pt": "Reduzir a PEEP ao mínimo possível para evitar barotrauma, mesmo que com piora do V/Q",
        "en": "Minimize PEEP as much as possible to avoid barotrauma, even if V/Q mismatch worsens",
        "es": "Reducir la PEEP al mínimo posible para evitar barotrauma, aunque empeore el V/Q"
      },
      "explanation": {
        "pt": "Reduzir a PEEP excessivamente pode causar colapso alveolar e aumento de shunt. Uma PEEP moderada, abaixo da auto-PEEP, pode auxiliar na prevenção do colapso sem agravar hiperinsuflação.",
        "en": "Excessive PEEP reduction may cause alveolar collapse and worsen shunt. Moderate PEEP below auto-PEEP can help prevent collapse without worsening hyperinflation.",
        "es": "Reducir demasiado la PEEP puede causar colapso alveolar. Una PEEP moderada puede ayudar a prevenirlo sin empeorar la hiperinsuflación."
      }
    },
    {
      "text": {
        "pt": "Manter capnografia ETCO₂ < 25 mmHg como meta de eliminação de CO₂",
        "en": "Target ETCO₂ < 25 mmHg as a goal for CO₂ elimination",
        "es": "Mantener ETCO₂ < 25 mmHg como objetivo de eliminación de CO₂"
      },
      "explanation": {
        "pt": "Baixos valores de ETCO₂ não são objetivos em pacientes obstrutivos. O alvo deve ser a melhora clínica e gasométrica, respeitando permissiva hipercapnia se necessário.",
        "en": "Low ETCO₂ is not the goal in obstructive patients. The target is clinical and blood gas improvement, accepting permissive hypercapnia if needed.",
        "es": "ETCO₂ bajo no es el objetivo en pacientes obstructivos. Se acepta hipercapnia permisiva si hay mejora clínica y gasométrica."
      }
    },
    {
      "text": {
        "pt": "Utilizar baixos volumes corrente (~6 mL/kg), frequência respiratória baixa e tempo expiratório prolongado para evitar hiperinsuflação dinâmica",
        "en": "Use low tidal volumes (~6 mL/kg), low respiratory rate, and prolonged expiratory time to avoid dynamic hyperinflation",
        "es": "Usar bajo volumen corriente (~6 mL/kg), baja frecuencia y tiempo espiratorio prolongado para evitar hiperinsuflación"
      },
      "explanation": {
        "pt": "Essa é a estratégia mais segura em pacientes obstrutivos com risco de hiperinsuflação dinâmica, como na fibrose cística. Prioriza tempo expiratório longo, baixa FR e volumes protetores, reduzindo risco de barotrauma e auto-PEEP.",
        "en": "This is the safest approach in obstructive patients at risk of dynamic hyperinflation, prioritizing prolonged expiration, low RR, and protective tidal volumes to avoid barotrauma and auto-PEEP.",
        "es": "Esta es la estrategia más segura en pacientes obstructivos, priorizando espiración prolongada, baja frecuencia y volumen protector."
      }
    },
    {
      "text": {
        "pt": "Aumentar o fluxo inspiratório para manter a relação I:E próxima de 2:1",
        "en": "Increase inspiratory flow to maintain I:E ratio close to 2:1",
        "es": "Aumentar el flujo inspiratorio para mantener relación I:E cercana a 2:1"
      },
      "explanation": {
        "pt": "Relações I:E invertidas (como 2:1) são reservadas para hipoxemia grave com colapso alveolar e não são indicadas em doenças obstrutivas. Nessas, o tempo expiratório deve ser maior.",
        "en": "Inverse I:E ratios (e.g., 2:1) are used in severe hypoxemia with alveolar collapse, not in obstructive disease. Expiratory time should be prolonged.",
        "es": "Relaciones I:E invertidas son para hipoxemia grave, no en enfermedad obstructiva. Se debe prolongar el tiempo espiratorio."
      }
    }
  ]
},
{
  "id": 811,
  "code": "pneumo03-q811",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["aspiration_pneumonia", "elderly", "stroke", "antibiotics", "airway_management"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Paciente de 79 anos, acamado por sequela de AVC isquêmico há 2 anos, é admitido na UTI após episódio presenciado de engasgo alimentar seguido de tosse, queda de saturação e taquipneia. Está confuso, com FR 32 irpm, PA 140x80 mmHg, SpO₂ 86% em ar ambiente. A ausculta revela estertores em base direita. Radiografia de tórax mostra infiltrado alveolar no lobo inferior direito. Qual das condutas iniciais abaixo é mais adequada, considerando as diretrizes atuais?",
    "en": "A 79-year-old patient bedridden due to a stroke 2 years ago is admitted to the ICU after a witnessed choking episode while eating, followed by coughing, desaturation, and tachypnea. He is confused, RR 32, BP 140/80 mmHg, and SpO₂ 86% on room air. Lung auscultation reveals crackles at the right base. Chest X-ray shows alveolar infiltrate in the right lower lobe. Based on current guidelines, what is the most appropriate initial management?",
    "es": "Paciente de 79 años, encamado por secuelas de un ACV isquémico hace 2 años, es admitido en la UCI tras episodio de atragantamiento alimentario con tos, desaturación y taquipnea. Está confuso, FR 32, PA 140/80 mmHg, SpO₂ 86% en aire ambiente. La auscultación muestra crepitantes en la base derecha. La radiografía torácica revela infiltrado alveolar en el lóbulo inferior derecho. ¿Cuál es la conducta inicial más apropiada según guías actuales?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar VNI com oxigenoterapia de alto fluxo e observar por 24h antes de iniciar antibióticos",
        "en": "Start noninvasive ventilation with high-flow oxygen and observe for 24h before initiating antibiotics",
        "es": "Iniciar VNI con oxigenoterapia de alto flujo y observar durante 24h antes de comenzar antibióticos"
      },
      "explanation": {
        "pt": "Embora a broncoaspiração isolada possa não exigir antibióticos, o quadro clínico (confusão, taquipneia, infiltrado e dessaturação) indica pneumonia aspirativa. A VNI isolada pode atrasar a proteção de via aérea em pacientes com risco de deterioração neurológica.",
        "en": "Although isolated aspiration may not always require antibiotics, the clinical picture here suggests aspiration pneumonia. VNI may delay airway protection in neurologically impaired patients.",
        "es": "Aunque la aspiración aislada no siempre requiere antibióticos, este caso indica neumonía aspirativa. La VNI podría retrasar la protección de la vía aérea."
      }
    },
    {
      "text": {
        "pt": "Iniciar antibiótico empírico para anaeróbios e gram-negativos, associar oxigenoterapia e considerar intubação orotraqueal precoce",
        "en": "Start empirical antibiotics targeting anaerobes and gram-negatives, provide oxygen therapy, and consider early orotracheal intubation",
        "es": "Iniciar antibióticos empíricos para anaerobios y gramnegativos, oxigenoterapia y considerar intubación orotraqueal precoz"
      },
      "explanation": {
        "pt": "Este é um caso típico de pneumonia aspirativa em paciente com risco neurológico. A presença de infiltrado e sinais de instabilidade justifica início de antibióticos (ex: ampicilina-sulbactam, piperacilina-tazobactam ou ceftriaxona com metronidazol). A intubação precoce deve ser considerada para proteção da via aérea. Estudos como os do ATS/IDSA e ERS reforçam a abordagem combinada.",
        "en": "This is a classic case of aspiration pneumonia in a neurologically impaired patient. Antibiotics targeting anaerobes and gram-negatives are warranted. Early intubation may be needed to protect the airway. Guidelines from ATS/IDSA and ERS support this approach.",
        "es": "Es un caso típico de neumonía aspirativa con deterioro neurológico. Se justifica antibiótico empírico y protección temprana de vía aérea según guías de ATS/IDSA y ERS."
      }
    },
    {
      "text": {
        "pt": "Realizar apenas broncoscopia diagnóstica e aspirar secreções antes de decidir por tratamento",
        "en": "Perform diagnostic bronchoscopy and suction secretions before deciding treatment",
        "es": "Realizar broncoscopia diagnóstica y aspiración de secreciones antes de decidir tratamiento"
      },
      "explanation": {
        "pt": "A broncoscopia não é a abordagem inicial para pneumonia aspirativa, sendo indicada apenas em falhas de tratamento ou suspeita de obstrução.",
        "en": "Bronchoscopy is not first-line in aspiration pneumonia, reserved for treatment failure or obstruction suspicion.",
        "es": "La broncoscopia no es inicial en neumonía aspirativa, se reserva para fracaso terapéutico o sospecha de obstrucción."
      }
    },
    {
      "text": {
        "pt": "Observar o paciente por 24h com oxigenoterapia e dieta suspensa, repetindo radiografia após esse período",
        "en": "Observe the patient for 24h with oxygen therapy and suspended diet, repeat chest X-ray afterward",
        "es": "Observar durante 24h con oxigenoterapia y dieta suspendida, repitiendo radiografía luego"
      },
      "explanation": {
        "pt": "A observação pode ser segura em casos leves e assintomáticos. Neste caso, há instabilidade clínica e sinais radiológicos de pneumonia, sendo necessária conduta ativa.",
        "en": "Observation may be safe in mild, asymptomatic cases. This case requires active management due to clinical instability.",
        "es": "La observación puede ser segura en casos leves. Aquí hay inestabilidad clínica, requiere manejo activo."
      }
    },
    {
      "text": {
        "pt": "Iniciar corticoides sistêmicos para reduzir inflamação e prevenir progressão para SDRA",
        "en": "Start systemic corticosteroids to reduce inflammation and prevent ARDS",
        "es": "Iniciar corticoides sistémicos para reducir inflamación y prevenir SDRA"
      },
      "explanation": {
        "pt": "Não há evidência para uso de corticoides em pneumonia aspirativa fora de contexto de exacerbações específicas (como DPOC ou SDRA). O uso rotineiro pode aumentar o risco de infecção secundária.",
        "en": "There is no evidence supporting corticosteroids in aspiration pneumonia outside specific contexts like COPD or ARDS. Routine use may increase secondary infection risk.",
        "es": "No hay evidencia para corticoides en neumonía aspirativa fuera de DPOC o SDRA. Su uso puede aumentar infecciones."
      }
    }
  ]
},
{
  "id": 812,
  "code": "pneumo03-q812",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["extubation", "neurological_disorders", "weaning", "airway_protection", "dysphagia"],
  "level": "hard",
  "correct": 2,
  "question": {
    "pt": "Homem de 67 anos, acamado por sequela de AVC extenso há 8 meses, está internado por infecção pulmonar associada à broncoaspiração. Após 7 dias de ventilação mecânica e melhora clínica evidente, está em ar ambiente pelo ventilador com SpO₂ 96%, sem febre, e Rx de tórax mostra resolução do infiltrado. Apesar disso, segue sonolento, com reflexo de tosse fraco e incapacidade de comandar movimentos de língua. Qual dos critérios abaixo deve ser considerado mais importante antes de uma tentativa de extubação neste perfil clínico?",
    "en": "A 67-year-old man, bedridden due to extensive stroke 8 months ago, is hospitalized for aspiration pneumonia. After 7 days of mechanical ventilation and significant clinical improvement, he is now on room air via the ventilator with SpO₂ 96%, afebrile, and chest X-ray shows resolution of infiltrates. However, he remains somnolent, with weak cough reflex and inability to control tongue movement. Which of the following should be considered the most important criterion before attempting extubation in this context?",
    "es": "Hombre de 67 años, encamado por secuelas de ACV extenso hace 8 meses, internado por neumonía aspirativa. Tras 7 días de ventilación mecánica y mejoría clínica, respira aire ambiente por el ventilador con SpO₂ 96%, afebril, y la radiografía muestra resolución del infiltrado. Sin embargo, sigue somnoliento, con reflejo de tos débil e incapacidad de mover la lengua. ¿Cuál es el criterio más importante antes de intentar la extubación en este contexto?"
  },
  "options": [
    {
      "text": {
        "pt": "Pressão inspiratória máxima (PIM) inferior a –20 cmH₂O e relação FR/Vt < 105",
        "en": "Maximal inspiratory pressure (MIP) below –20 cmH₂O and RR/Vt ratio < 105",
        "es": "Presión inspiratoria máxima (PIM) inferior a –20 cmH₂O y FR/Vt < 105"
      },
      "explanation": {
        "pt": "Critérios mecânicos são úteis na avaliação de desmame, mas não garantem proteção de via aérea, especialmente em pacientes neurológicos.",
        "en": "Mechanical parameters help assess weaning readiness but do not guarantee airway protection, especially in neurologically impaired patients.",
        "es": "Parámetros mecánicos ayudan al destete, pero no aseguran protección de vía aérea en pacientes neurológicos."
      }
    },
    {
      "text": {
        "pt": "Ausência de secreção traqueal visível nas últimas 24h",
        "en": "Absence of visible tracheal secretions in the last 24 hours",
        "es": "Ausencia de secreciones traqueales visibles en las últimas 24 horas"
      },
      "explanation": {
        "pt": "A produção de secreção isoladamente não contraindica extubação. O essencial é a capacidade de expectoração e proteção da via aérea.",
        "en": "Secretion presence alone does not contraindicate extubation. Airway protection and clearance ability are key.",
        "es": "La presencia de secreciones no contraindica por sí sola la extubación. Es clave la capacidad de protección de vía aérea."
      }
    },
    {
      "text": {
        "pt": "Avaliação de proteção de via aérea com reflexo de tosse e deglutição eficaz",
        "en": "Assessment of airway protection with effective cough and swallowing reflexes",
        "es": "Evaluación de la protección de la vía aérea con reflejos de tos y deglución eficaces"
      },
      "explanation": {
        "pt": "Nos pacientes neurológicos crônicos, a integridade dos reflexos de proteção (tosse, deglutição) é o principal determinante de sucesso da extubação. A falha em avaliar isso leva a reintubação precoce, aspiração e aumento de mortalidade. Diretrizes da ERS e AAN reforçam sua importância em neurologia crítica.",
        "en": "In chronic neurological patients, airway protection reflexes (cough, swallow) are key predictors of extubation success. ERS and AAN guidelines emphasize this as essential.",
        "es": "En pacientes neurológicos crónicos, los reflejos de protección (tos, deglución) predicen el éxito de la extubación. Las guías de ERS y AAN lo destacan."
      }
    },
    {
      "text": {
        "pt": "Realização de prova de respiração espontânea (SBT) com tubo T por 2h sem desconforto",
        "en": "Conduct a spontaneous breathing trial (SBT) via T-tube for 2h without discomfort",
        "es": "Realizar prueba de respiración espontánea (SBT) con tubo T durante 2h sin disconfort"
      },
      "explanation": {
        "pt": "O sucesso da prova de respiração espontânea (SBT) é necessário, mas insuficiente em pacientes com risco neurológico e disfunção bulbar. A avaliação da via aérea deve ser integrada ao processo de decisão.",
        "en": "SBT success is required but insufficient in neurologically impaired patients with bulbar dysfunction. Airway protection must also be assessed.",
        "es": "El éxito del SBT es necesario pero insuficiente en pacientes neurológicos con disfunción bulbar. Es clave evaluar la protección de vía aérea."
      }
    },
    {
      "text": {
        "pt": "Nível de consciência com GCS > 9 como indicador de capacidade ventilatória voluntária",
        "en": "Consciousness level with GCS > 9 as indicator of voluntary ventilatory capacity",
        "es": "Nivel de conciencia con GCS > 9 como indicador de capacidad ventilatoria voluntaria"
      },
      "explanation": {
        "pt": "O nível de consciência é um fator prognóstico, mas não substitui a avaliação objetiva da via aérea em pacientes neurológicos. Mesmo pacientes com GCS > 9 podem ter disfagia e reflexos abolidos.",
        "en": "Consciousness helps predict outcomes, but does not replace objective airway protection assessment. Even GCS > 9 patients may lack safe reflexes.",
        "es": "El nivel de conciencia ayuda en el pronóstico, pero no sustituye la evaluación objetiva de la vía aérea."
      }
    }
  ]
},
{
  "id": 813,
  "code": "pneumo03-q813",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["ecmo", "vv_ecmo", "ards", "hypoxemia", "eolia_trial"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Homem de 36 anos, previamente hígido, está internado há 3 dias em UTI com diagnóstico de SDRA grave secundário a pneumonia viral. Recebe ventilação protetora com volume corrente de 6 mL/kg, PEEP ajustada por titulação e pronação contínua por 16 horas. Apesar disso, mantém PaO₂/FiO₂ < 65 mmHg por mais de 6 horas e driving pressure de 18 cmH₂O. Hemodinâmica estável, função renal preservada. A equipe considera indicar ECMO veno-venosa. Com base nas evidências mais recentes e nas diretrizes da ELSO, qual das seguintes afirmações é mais apropriada?",
    "en": "A 36-year-old previously healthy man has been in the ICU for 3 days with severe ARDS due to viral pneumonia. He is on lung-protective ventilation (6 mL/kg), PEEP titration, and prone positioning for 16 hours. Despite that, his PaO₂/FiO₂ remains < 65 mmHg for over 6 hours and driving pressure is 18 cmH₂O. Hemodynamically stable, renal function preserved. The team considers veno-venous ECMO. According to recent evidence and ELSO guidelines, which statement is most appropriate?",
    "es": "Hombre de 36 años, previamente sano, lleva 3 días en la UCI con SDRA grave por neumonía viral. Está en ventilación protectora (6 mL/kg), PEEP titulada y decúbito prono por 16 horas. A pesar de ello, mantiene PaO₂/FiO₂ < 65 mmHg durante más de 6 horas y presión de conducción de 18 cmH₂O. Hemodinámicamente estable, función renal preservada. El equipo considera ECMO veno-venosa. Según la evidencia reciente y las guías de ELSO, ¿cuál es la afirmación más apropiada?"
  },
  "options": [
    {
      "text": {
        "pt": "O paciente atende aos critérios clássicos para ECMO-vv, e a instituição precoce pode reduzir mortalidade em centros experientes",
        "en": "The patient meets classic criteria for VV-ECMO, and early initiation may reduce mortality in experienced centers",
        "es": "El paciente cumple con los criterios clásicos para ECMO-VV y su inicio precoz puede reducir la mortalidad en centros experimentados"
      },
      "explanation": {
        "pt": "Critérios como PaO₂/FiO₂ < 80 por mais de 6 horas, após medidas otimizadas (pronação, ventilação protetora, PEEP adequada), são indicações de ECMO-vv segundo ELSO. Estudos como o EOLIA Trial demonstraram benefício potencial em serviços de alta expertise, com menor mortalidade em subgrupos de hipoxemia profunda.",
        "en": "PaO₂/FiO₂ < 80 for more than 6 hours despite optimized measures (proning, protective ventilation, proper PEEP) are indications for VV-ECMO per ELSO. The EOLIA Trial showed potential mortality benefit in centers with high expertise.",
        "es": "PaO₂/FiO₂ < 80 durante más de 6 horas con medidas optimizadas indica ECMO-VV según ELSO. El estudio EOLIA mostró beneficio en centros experimentados."
      }
    },
    {
      "text": {
        "pt": "A ECMO-vv está indicada apenas após falência da ventilação com pressão de platô acima de 35 cmH₂O",
        "en": "VV-ECMO is indicated only after failure of ventilation with plateau pressure > 35 cmH₂O",
        "es": "La ECMO-VV solo está indicada tras fallo ventilatorio con presión plateau > 35 cmH₂O"
      },
      "explanation": {
        "pt": "Pressões de platô elevadas são preocupantes, mas não são o único critério. A hipoxemia refratária é uma das principais indicações de ECMO-vv, mesmo com pressão de platô ainda controlada.",
        "en": "High plateau pressure is worrisome, but not the only criterion. Refractory hypoxemia alone can indicate ECMO even with plateau pressure within range.",
        "es": "Presión plateau alta preocupa, pero la hipoxemia refractaria ya es indicación por sí misma de ECMO-VV."
      }
    },
    {
      "text": {
        "pt": "A presença de driving pressure < 20 cmH₂O contraindica ECMO por indicar complacência preservada",
        "en": "Driving pressure < 20 cmH₂O contraindicates ECMO as it suggests preserved compliance",
        "es": "Presión de conducción < 20 cmH₂O contraindica ECMO por indicar buena distensibilidad"
      },
      "explanation": {
        "pt": "Driving pressure elevada (> 15 cmH₂O) é associada a maior mortalidade, mas valores abaixo de 20 cmH₂O não excluem indicação de ECMO se a hipoxemia for refratária.",
        "en": "High driving pressure (> 15 cmH₂O) is associated with mortality, but values < 20 cmH₂O do not exclude ECMO in refractory hypoxemia.",
        "es": "Presión de conducción < 20 cmH₂O no excluye ECMO si la hipoxemia es refractaria."
      }
    },
    {
      "text": {
        "pt": "A ECMO-vv está contraindicada por risco aumentado de sangramento em pacientes com pneumonia viral",
        "en": "VV-ECMO is contraindicated due to increased bleeding risk in viral pneumonia",
        "es": "La ECMO-VV está contraindicada por riesgo elevado de sangrado en neumonía viral"
      },
      "explanation": {
        "pt": "Embora haja risco de sangramento, especialmente com anticoagulação, a pneumonia viral não é contraindicação formal. ECMO-vv é frequentemente usada em COVID-19 e influenza grave com bons resultados em centros habilitados.",
        "en": "Despite bleeding risks, viral pneumonia is not a formal contraindication. ECMO is often used in severe COVID-19 or influenza with success in capable centers.",
        "es": "Pese al riesgo hemorrágico, la neumonía viral no contraindica ECMO-VV. Se usa con frecuencia en COVID-19 grave."
      }
    },
    {
      "text": {
        "pt": "O suporte com ECMO-vv está reservado a casos com choque refratário e necessidade de vasopressores em dose alta",
        "en": "VV-ECMO is reserved for cases with refractory shock and high-dose vasopressors",
        "es": "La ECMO-VV se reserva para casos con shock refractario y vasopresores en altas dosis"
      },
      "explanation": {
        "pt": "Casos com choque e falência circulatória indicam ECMO-VA, não ECMO-vv. A modalidade veno-venosa é usada em falência respiratória isolada com hipoxemia grave.",
        "en": "Refractory shock suggests need for VA-ECMO, not VV. VV-ECMO is for isolated respiratory failure.",
        "es": "Shock refractario sugiere ECMO-VA. ECMO-VV es para insuficiencia respiratoria aislada."
      }
    }
  ]
},
{
  "id": 814,
  "code": "pneumo03-q814",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["ecmo", "vv_ecmo", "weaning", "lung_recovery", "liberation_ecmo"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Paciente de 45 anos está em ECMO veno-venosa há 9 dias por SDRA grave secundária a influenza, com melhora clínica progressiva. Nos últimos dias, apresenta PaO₂ de 82 mmHg com FiO₂ de 0,4 e PEEP de 10 cmH₂O, sem sinais de esforço respiratório. A complacência pulmonar aumentou, e a pressão de platô está abaixo de 26 cmH₂O. A equipe considera a decanulação. Com base nas evidências mais recentes, qual das opções abaixo melhor descreve os critérios fisiológicos apropriados para esse momento?",
    "en": "A 45-year-old patient has been on VV-ECMO for 9 days due to severe ARDS from influenza, showing progressive clinical improvement. Over the past days, PaO₂ is 82 mmHg with FiO₂ 0.4 and PEEP 10 cmH₂O, without respiratory distress. Lung compliance has improved and plateau pressure is under 26 cmH₂O. The team is considering decannulation. Based on recent evidence, which of the following best describes appropriate physiological criteria for this step?",
    "es": "Paciente de 45 años lleva 9 días en ECMO-VV por SDRA grave por influenza, con mejoría clínica progresiva. En los últimos días presenta PaO₂ de 82 mmHg con FiO₂ 0,4 y PEEP de 10 cmH₂O, sin disnea. La complacencia pulmonar mejoró y la presión plateau está por debajo de 26 cmH₂O. El equipo considera la decanulación. Según la evidencia reciente, ¿cuál es la mejor descripción de los criterios fisiológicos apropiados para esta etapa?"
  },
  "options": [
    {
      "text": {
        "pt": "Redução da ventilação minuto para menos de 4 L/min sem alterações gasométricas",
        "en": "Reduction in minute ventilation to less than 4 L/min without gas exchange deterioration",
        "es": "Reducción de la ventilación minuto por debajo de 4 L/min sin deterioro de gases"
      },
      "explanation": {
        "pt": "Embora seja desejável uma ventilação protetora leve, o volume minuto isoladamente não define prontidão para decanulação. Avaliação completa de trocas gasosas e complacência é necessária.",
        "en": "While low minute ventilation is desirable, it alone does not define readiness. Gas exchange and compliance must also be considered.",
        "es": "Una ventilación minuto baja es deseable, pero no suficiente para definir decanulación. Se requiere evaluación integral."
      }
    },
    {
      "text": {
        "pt": "Capacidade de manter PaO₂ > 60 mmHg com FiO₂ ≤ 0,5, PEEP ≤ 10 cmH₂O e estabilidade hemodinâmica, associada à recuperação pulmonar evidente",
        "en": "Ability to maintain PaO₂ > 60 mmHg with FiO₂ ≤ 0.5, PEEP ≤ 10 cmH₂O, and hemodynamic stability, with evident pulmonary recovery",
        "es": "Capacidad de mantener PaO₂ > 60 mmHg con FiO₂ ≤ 0,5, PEEP ≤ 10 cmH₂O y estabilidad hemodinámica, con recuperación pulmonar evidente"
      },
      "explanation": {
        "pt": "Esses critérios são amplamente aceitos pela ELSO e validados por estudos como o LIFEGARDS. Indicam recuperação suficiente para considerar o desmame e a decanulação da ECMO-vv. O ensaio de oclusão também pode ser realizado para confirmação.",
        "en": "These criteria are widely accepted by ELSO and validated by studies like LIFEGARDS. They indicate sufficient recovery for weaning and VV-ECMO decannulation. A sweep-off trial may be used to confirm.",
        "es": "Estos criterios son aceptados por la ELSO y respaldados por estudios como LIFEGARDS. Indican recuperación suficiente para retirar la ECMO-VV."
      }
    },
    {
      "text": {
        "pt": "A reversão completa da causa base, com radiografia de tórax normalizada, é obrigatória antes da retirada da ECMO",
        "en": "Complete resolution of the underlying cause and normal chest X-ray are mandatory before ECMO withdrawal",
        "es": "La reversión completa de la causa y radiografía normalizada son obligatorias antes de retirar ECMO"
      },
      "explanation": {
        "pt": "A imagem pode permanecer alterada mesmo com função pulmonar suficiente para retirada do suporte. O mais importante é a função fisiológica, não a imagem radiológica.",
        "en": "Imaging may remain abnormal despite adequate lung function. Physiologic readiness is more relevant than radiological resolution.",
        "es": "Las imágenes pueden seguir alteradas aunque la función sea suficiente. Lo fisiológico tiene prioridad sobre lo radiológico."
      }
    },
    {
      "text": {
        "pt": "Nível de saturação venosa central (ScvO₂) acima de 80% com aumento progressivo de PaCO₂ sem acidose",
        "en": "Central venous saturation (ScvO₂) above 80% with progressive PaCO₂ rise without acidosis",
        "es": "Saturación venosa central (ScvO₂) > 80% con aumento progresivo de PaCO₂ sin acidosis"
      },
      "explanation": {
        "pt": "ScvO₂ não é um marcador específico de recuperação pulmonar. O aumento progressivo de CO₂ mesmo sem acidose pode indicar falência ventilatória, não prontidão para decanulação.",
        "en": "ScvO₂ is not a specific marker of lung recovery. Rising CO₂ may suggest ventilatory failure rather than readiness.",
        "es": "La ScvO₂ no es marcador fiable de recuperación pulmonar. El aumento de CO₂ puede indicar fallo ventilatorio."
      }
    },
    {
      "text": {
        "pt": "Pressão de platô abaixo de 30 cmH₂O com complacência estática menor que 20 mL/cmH₂O por 48h",
        "en": "Plateau pressure under 30 cmH₂O with static compliance < 20 mL/cmH₂O for 48h",
        "es": "Presión plateau < 30 cmH₂O con complacencia < 20 mL/cmH₂O por 48h"
      },
      "explanation": {
        "pt": "Complacência muito baixa indica que o pulmão ainda está rígido e mal recrutado. Decanulação nesse contexto pode ser precipitada, mesmo com pressão de platô tolerável.",
        "en": "Very low compliance suggests lungs remain stiff and under-recruited. Decannulating in this setting may be premature.",
        "es": "Complacencia muy baja sugiere pulmón aún rígido. Retirar ECMO en este contexto puede ser precoz."
      }
    }
  ]
},
{
  "id": 815,
  "code": "pneumo03-q815",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["ecmo", "anticoagulation", "bleeding", "vv_ecmo", "heparin"],
  "level": "hard",
  "correct": 4,
  "question": {
    "pt": "Paciente de 52 anos com SDRA grave por COVID-19 está em ECMO-vv há 5 dias, com boa evolução respiratória. Subitamente, apresenta sangramento digestivo alto e queda de hemoglobina. A anticoagulação em uso é heparina não fracionada com alvo de aPTT 1,5–2x controle. A equipe decide ajustar o manejo. Com base nas diretrizes mais recentes da ELSO e estudos atuais, qual a conduta mais adequada?",
    "en": "A 52-year-old patient with severe ARDS from COVID-19 has been on VV-ECMO for 5 days with good respiratory progress. Suddenly, upper GI bleeding occurs, and hemoglobin drops. The patient is on unfractionated heparin with a target aPTT of 1.5–2x control. The team decides to adjust management. According to the most recent ELSO guidelines and current studies, what is the most appropriate approach?",
    "es": "Un paciente de 52 años con SDRA grave por COVID-19 lleva 5 días en ECMO-VV con buena evolución respiratoria. Súbitamente presenta sangrado digestivo alto y caída de hemoglobina. Está en heparina no fraccionada con objetivo de TTPa 1,5–2x. Según las guías actuales de ELSO y estudios recientes, ¿cuál es la mejor conducta?"
  },
  "options": [
    {
      "text": {
        "pt": "Suspender a ECMO imediatamente por contraindicação absoluta ao suporte extracorpóreo",
        "en": "Immediately discontinue ECMO due to absolute contraindication from active bleeding",
        "es": "Suspender ECMO de inmediato por contraindicación absoluta debido al sangrado activo"
      },
      "explanation": {
        "pt": "Sangramento ativo não é contraindicação absoluta à ECMO. A decisão depende do equilíbrio risco-benefício, e a suspensão abrupta pode ser deletéria em pacientes dependentes de oxigenação extracorpórea.",
        "en": "Active bleeding is not an absolute contraindication. Sudden ECMO discontinuation may harm patients still dependent on extracorporeal support.",
        "es": "El sangrado activo no es contraindicación absoluta. Suspender abruptamente ECMO puede perjudicar a pacientes aún dependientes."
      }
    },
    {
      "text": {
        "pt": "Trocar heparina por anticoagulação plena com enoxaparina",
        "en": "Switch to full anticoagulation with enoxaparin",
        "es": "Cambiar a anticoagulación plena con enoxaparina"
      },
      "explanation": {
        "pt": "A enoxaparina é mais difícil de controlar em caso de sangramento. Em contexto de hemorragia ativa, o uso de heparina de curta meia-vida é mais seguro e manejável.",
        "en": "Enoxaparin has a longer half-life and is harder to reverse. In active bleeding, UFH offers more control.",
        "es": "La enoxaparina tiene vida media larga y es menos manejable en sangrado. La heparina no fraccionada es preferible."
      }
    },
    {
      "text": {
        "pt": "Manter anticoagulação atual, pois os eventos hemorrágicos são autolimitados na maioria dos casos",
        "en": "Maintain current anticoagulation as bleeding events are mostly self-limited",
        "es": "Mantener anticoagulación actual, ya que el sangrado suele ser autolimitado"
      },
      "explanation": {
        "pt": "Persistir com a anticoagulação plena em sangramento ativo pode agravar o quadro e aumentar mortalidade. Intervenções devem ser individualizadas.",
        "en": "Continuing full anticoagulation during active bleeding can worsen prognosis. Individualized intervention is needed.",
        "es": "Mantener anticoagulación plena puede agravar el sangrado. Se requiere manejo individualizado."
      }
    },
    {
      "text": {
        "pt": "Suspender temporariamente a heparina e monitorar ativamente sinais de trombose do circuito, reiniciando com dose reduzida após controle clínico",
        "en": "Temporarily stop heparin and closely monitor for circuit thrombosis, restarting at reduced dose after stabilization",
        "es": "Suspender heparina temporalmente y vigilar trombosis del circuito, reiniciando con dosis reducida tras estabilización"
      },
      "explanation": {
        "pt": "As diretrizes da ELSO recomendam que em sangramentos graves pode-se interromper temporariamente a heparina, com monitoramento rigoroso do circuito e reinício posterior. Estudos como o RELACT ECMO reforçam essa estratégia em centros experientes.",
        "en": "ELSO guidelines support temporary heparin suspension in major bleeding, with strict circuit monitoring. Studies like RELACT ECMO support this strategy in experienced centers.",
        "es": "Las guías ELSO permiten suspender heparina en sangrados graves, con vigilancia del circuito. Estudios como RELACT ECMO lo respaldan."
      }
    },
    {
      "text": {
        "pt": "Iniciar tratamento com protamina para reverter heparina, mantendo ECMO sem anticoagulação por tempo indefinido",
        "en": "Start protamine to reverse heparin and keep ECMO running without anticoagulation indefinitely",
        "es": "Administrar protamina y mantener ECMO sin anticoagulación indefinidamente"
      },
      "explanation": {
        "pt": "A reversão com protamina pode ser usada pontualmente. Contudo, manter ECMO sem anticoagulação por tempo indefinido aumenta risco de trombose de oxigenador, especialmente em circuitos com alto tempo de residência sanguínea.",
        "en": "Protamine reversal is a temporary strategy. Indefinite ECMO without anticoagulation raises thrombosis risk, especially in long circuit residence times.",
        "es": "La protamina es estrategia temporal. ECMO sin anticoagulación aumenta riesgo de trombosis."
      }
    }
  ]
},
{
  "id": 816,
  "code": "pneumo03-q816",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["drowning", "aspiration", "pneumonia", "ards", "mechanical_ventilation"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Homem de 35 anos é resgatado após quase-afogamento em lagoa de água doce. Apresentava tosse intensa e confusão ao resgate. Na chegada à UTI, está eupneico em máscara de reservatório, com SpO₂ 93%, ausculta com estertores bilaterais, e radiografia de tórax com infiltrado difuso. Não há febre ou leucocitose. Qual a conduta inicial mais apropriada?",
    "en": "A 35-year-old man is rescued after near-drowning in a freshwater lake. He had intense coughing and confusion during rescue. In the ICU, he is eupneic on a non-rebreather mask with SpO₂ 93%, bilateral crackles on auscultation, and chest X-ray shows diffuse infiltrates. No fever or leukocytosis is present. What is the most appropriate initial management?",
    "es": "Hombre de 35 años es rescatado tras un casi-ahogamiento en un lago de agua dulce. Presentaba tos intensa y confusión durante el rescate. En la UCI, está eupneico con mascarilla de reservorio y SpO₂ 93%, crepitantes bilaterales y radiografía con infiltrados difusos. No presenta fiebre ni leucocitosis. ¿Cuál es la conducta inicial más apropiada?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar antibiótico empírico com piperacilina-tazobactam",
        "en": "Start empirical antibiotic therapy with piperacillin-tazobactam",
        "es": "Iniciar antibióticos empíricos con piperacilina-tazobactam"
      },
      "explanation": {
        "pt": "Antibióticos não são recomendados rotineiramente em casos de afogamento sem sinais infecciosos. A aspiração é química e auto-limitada na maioria dos casos.",
        "en": "Empirical antibiotics are not routinely recommended in drowning without signs of infection. Aspiration is mostly chemical and self-limited.",
        "es": "Los antibióticos no están recomendados de forma rutinaria en ahogamiento sin signos de infección."
      }
    },
    {
      "text": {
        "pt": "Indicar intubação orotraqueal imediata",
        "en": "Proceed with immediate orotracheal intubation",
        "es": "Proceder con intubación orotraqueal inmediata"
      },
      "explanation": {
        "pt": "A intubação está indicada apenas se houver insuficiência respiratória progressiva, rebaixamento de consciência ou instabilidade. Este paciente apresenta estabilidade relativa.",
        "en": "Intubation is reserved for progressive respiratory failure, altered consciousness, or hemodynamic instability. This patient is relatively stable.",
        "es": "La intubación se indica si hay insuficiencia respiratoria, alteración del sensorio o inestabilidad."
      }
    },
    {
      "text": {
        "pt": "Realizar broncoscopia precoce para lavagem das vias aéreas",
        "en": "Perform early bronchoscopy to wash the airways",
        "es": "Realizar broncoscopia precoz para lavado de vías aéreas"
      },
      "explanation": {
        "pt": "A broncoscopia é raramente indicada em afogamento e pode causar mais danos. A aspiração líquida difusa não é removível mecanicamente.",
        "en": "Bronchoscopy is rarely indicated in drowning and may be harmful. Diffuse liquid aspiration cannot be mechanically removed.",
        "es": "La broncoscopia rara vez está indicada en ahogamiento y puede causar daño adicional."
      }
    },
    {
      "text": {
        "pt": "Monitorar e manter suporte ventilatório não invasivo se necessário",
        "en": "Monitor and maintain noninvasive ventilatory support if needed",
        "es": "Monitorear y mantener soporte ventilatorio no invasivo si es necesario"
      },
      "explanation": {
        "pt": "Em pacientes estáveis com oxigenação limítrofe e sem sinais de infecção, a monitorização com suporte mínimo é preferida. A evolução para SDRA deve ser monitorada, e medidas invasivas tomadas apenas quando necessário.",
        "en": "For stable patients with borderline oxygenation and no infection, monitoring with minimal support is preferred. Progression to ARDS should be monitored closely.",
        "es": "En pacientes estables, el soporte mínimo con vigilancia es adecuado. Monitorizar evolución a SDRA."
      }
    },
    {
      "text": {
        "pt": "Iniciar corticoterapia para reduzir resposta inflamatória alveolar",
        "en": "Start corticosteroids to reduce alveolar inflammatory response",
        "es": "Iniciar corticosteroides para reducir la respuesta inflamatoria alveolar"
      },
      "explanation": {
        "pt": "Estudos não mostram benefício com corticosteroides em afogamento. Podem, inclusive, aumentar risco de infecção secundária.",
        "en": "Corticosteroids have not shown benefit in drowning. They may increase risk of secondary infection.",
        "es": "Los corticosteroides no han mostrado beneficio y pueden aumentar el riesgo infeccioso."
      }
    }
  ]
},
{
  "id": 817,
  "code": "pneumo03-q817",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["asthma", "severe_asthma", "mechanical_ventilation", "icu_asthma", "refractory"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Mulher de 28 anos, com histórico de asma grave, é admitida na UTI após falha de tratamento inicial em pronto-socorro. Recebeu múltiplas doses de beta-agonista, corticosteroide EV e sulfato de magnésio, mas continua com taquipneia, uso de musculatura acessória e hipoxemia (SpO₂ 88% com máscara de reservatório). Gasometria mostra pH 7,28, PaCO₂ 55 mmHg. Está ansiosa, mas responsiva. Qual a próxima conduta mais adequada?",
    "en": "A 28-year-old woman with a history of severe asthma is admitted to the ICU after failure of initial treatment in the emergency department. She received multiple doses of beta-agonists, IV corticosteroids, and magnesium sulfate, but remains tachypneic, using accessory muscles, and hypoxemic (SpO₂ 88% on non-rebreather mask). ABG shows pH 7.28, PaCO₂ 55 mmHg. She is anxious but responsive. What is the most appropriate next step?",
    "es": "Una mujer de 28 años con asma grave es admitida en la UCI tras fracaso del tratamiento inicial en urgencias. Recibió múltiples dosis de beta-agonistas, corticoide IV y sulfato de magnesio, pero permanece taquipneica, con uso de músculos accesorios y hipoxemia (SpO₂ 88% con mascarilla de reservorio). La gasometría muestra pH 7,28, PaCO₂ 55 mmHg. Está ansiosa pero consciente. ¿Cuál es la mejor conducta a seguir?"
  },
  "options": [
    {
      "text": {
        "pt": "Intubação orotraqueal imediata com sedação profunda",
        "en": "Immediate orotracheal intubation with deep sedation",
        "es": "Intubación orotraqueal inmediata con sedación profunda"
      },
      "explanation": {
        "pt": "A intubação deve ser evitada se possível, devido ao risco de barotrauma e parada respiratória na indução. Deve ser reservada para rebaixamento de consciência ou falência ventilatória iminente.",
        "en": "Intubation should be avoided if possible due to high risk of barotrauma and peri-intubation arrest. Reserved for altered mental status or impending failure.",
        "es": "La intubación debe evitarse si es posible, por el alto riesgo de barotrauma y paro respiratorio. Solo en caso de fallo inminente."
      }
    },
    {
      "text": {
        "pt": "Iniciar antibiótico empírico de amplo espectro",
        "en": "Start broad-spectrum empirical antibiotics",
        "es": "Iniciar antibióticos empíricos de amplio espectro"
      },
      "explanation": {
        "pt": "Não há evidência de infecção ativa. O uso de antibióticos deve ser reservado para casos com suspeita clínica clara de infecção pulmonar ou febre.",
        "en": "No signs of active infection. Antibiotics should be reserved for cases with strong clinical suspicion of pneumonia or fever.",
        "es": "Sin evidencia de infección activa. Los antibióticos se reservan para casos con fiebre o sospecha clínica clara."
      }
    },
    {
      "text": {
        "pt": "Ventilação não invasiva com pressão de suporte inicial baixa",
        "en": "Initiate noninvasive ventilation with low support pressures",
        "es": "Iniciar ventilación no invasiva con presiones bajas"
      },
      "explanation": {
        "pt": "A VNI tem papel limitado na asma aguda grave e pode atrasar intubação necessária. Deve ser usada com extrema cautela, apenas se o paciente tolerar bem e sem sinais de falência.",
        "en": "NIV has limited role in severe asthma and may delay needed intubation. Use cautiously only in well-tolerated cases without failure signs.",
        "es": "La VNI tiene rol limitado en asma grave y puede retrasar intubación necesaria. Usar con mucha precaución."
      }
    },
    {
      "text": {
        "pt": "Adicionar cetamina EV e monitorar de perto a mecânica respiratória",
        "en": "Add IV ketamine and closely monitor respiratory mechanics",
        "es": "Administrar ketamina IV y vigilar de cerca la mecánica respiratoria"
      },
      "explanation": {
        "pt": "A cetamina tem efeito broncodilatador, reduz ansiedade e pode evitar intubação em asma refratária. É opção recomendada por diretrizes (GINA, ATS) em contextos críticos. A monitorização deve ser contínua.",
        "en": "Ketamine has bronchodilator effect, reduces anxiety, and may prevent intubation in refractory asthma. Recommended by GINA and ATS in critical cases. Continuous monitoring is essential.",
        "es": "La ketamina tiene efecto broncodilatador, reduce ansiedad y puede evitar intubación. Recomendado por GINA y ATS."
      }
    },
    {
      "text": {
        "pt": "Iniciar salbutamol subcutâneo em vez do aerossol",
        "en": "Start subcutaneous salbutamol instead of aerosol",
        "es": "Iniciar salbutamol subcutáneo en lugar de aerosol"
      },
      "explanation": {
        "pt": "O salbutamol subcutâneo é menos eficaz e não é primeira escolha em crises graves. Preferem-se beta-agonistas inalados contínuos ou por nebulização.",
        "en": "Subcutaneous salbutamol is less effective and not first-line in severe exacerbations. Continuous inhaled beta-agonists are preferred.",
        "es": "El salbutamol subcutáneo es menos eficaz. Se prefieren beta-agonistas inhalados continuos."
      }
    }
  ]
},
{
  "id": 818,
  "code": "pneumo03-q818",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["ards", "hypercapnia", "ecc02r", "ventilation", "ecmo-alternative"],
  "level": "hard",
  "correct": 2,
  "question": {
    "pt": "Homem de 57 anos com SDRA grave por pneumonia viral está em ventilação protetora com volume corrente de 4 mL/kg e driving pressure de 15 cmH₂O. Apesar disso, mantém hipercapnia progressiva (PaCO₂ 95 mmHg, pH 7,12) e não apresenta sinais de hipoxemia refratária. Qual das condutas abaixo é mais respaldada pela literatura atual como próxima etapa?",
    "en": "A 57-year-old man with severe ARDS due to viral pneumonia is on protective ventilation (tidal volume 4 mL/kg, driving pressure 15 cmH₂O). Despite this, he develops progressive hypercapnia (PaCO₂ 95 mmHg, pH 7.12) without signs of refractory hypoxemia. According to current evidence, what is the most appropriate next step?",
    "es": "Un hombre de 57 años con SDRA grave por neumonía viral está con ventilación protectora (volumen corriente 4 mL/kg, presión de conducción 15 cmH₂O). A pesar de ello, desarrolla hipercapnia progresiva (PaCO₂ 95 mmHg, pH 7,12) sin hipoxemia refractaria. Según la evidencia actual, ¿cuál es el siguiente paso más apropiado?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar ECMO veno-venosa imediatamente",
        "en": "Immediately initiate VV-ECMO",
        "es": "Iniciar ECMO veno-venosa de inmediato"
      },
      "explanation": {
        "pt": "A ECMO-vv está indicada principalmente em casos de hipoxemia refratária. Este paciente apresenta ventilação protetora com oxigenação preservada, sendo candidato mais adequado ao ECCO₂R.",
        "en": "VV-ECMO is primarily indicated in refractory hypoxemia. With preserved oxygenation, ECCO₂R is a better fit.",
        "es": "La ECMO-vv se indica principalmente en hipoxemia refractaria. Aquí, el ECCO₂R es más adecuado."
      }
    },
    {
      "text": {
        "pt": "Aumentar o volume corrente para 8 mL/kg para reduzir a PaCO₂",
        "en": "Increase tidal volume to 8 mL/kg to reduce PaCO₂",
        "es": "Aumentar el volumen corriente a 8 mL/kg para reducir PaCO₂"
      },
      "explanation": {
        "pt": "Elevar o volume corrente compromete a estratégia protetora e aumenta risco de lesão pulmonar. Deve-se manter a ventilação ultraprotetora e considerar suporte extracorpóreo.",
        "en": "Raising tidal volume violates protective ventilation and increases lung injury risk. Maintain ultraprotective settings and consider extracorporeal support.",
        "es": "Aumentar el volumen corriente rompe la estrategia protectora. Es mejor mantenerla y considerar soporte extracorpóreo."
      }
    },
    {
      "text": {
        "pt": "Considerar uso de ECCO₂R para permitir ventilação ultraprotetora mantendo controle da PaCO₂",
        "en": "Consider ECCO₂R to allow ultraprotective ventilation while controlling PaCO₂",
        "es": "Considerar ECCO₂R para permitir ventilación ultraprotectora controlando PaCO₂"
      },
      "explanation": {
        "pt": "O ECCO₂R permite remoção seletiva de CO₂ com fluxos sanguíneos menores que a ECMO, reduzindo risco e complexidade. É recomendado em SDRA com hipercapnia grave e sem hipoxemia refratária, como reforçado pelos estudos SUPERNOVA e REST Trial, além de consenso ELSO (2023).",
        "en": "ECCO₂R enables selective CO₂ removal using lower blood flows than ECMO, reducing risks. It's recommended in ARDS with severe hypercapnia and preserved oxygenation, as shown in SUPERNOVA and REST Trial, and ELSO 2023 consensus.",
        "es": "El ECCO₂R permite eliminar CO₂ con menor flujo que ECMO. Está indicado en SDRA con hipercapnia severa sin hipoxemia, como se ve en los estudios SUPERNOVA y REST y la guía ELSO 2023."
      }
    },
    {
      "text": {
        "pt": "Iniciar bicarbonato de sódio EV para tamponar a acidose",
        "en": "Start IV sodium bicarbonate to buffer the acidosis",
        "es": "Administrar bicarbonato sódico IV para tamponar la acidosis"
      },
      "explanation": {
        "pt": "O bicarbonato sódico pode piorar a hipercapnia ao aumentar produção de CO₂. Seu uso deve ser criterioso e restrito a acidose com disfunção hemodinâmica grave.",
        "en": "IV bicarbonate may worsen hypercapnia by generating CO₂. Reserved for severe hemodynamic compromise.",
        "es": "El bicarbonato puede aumentar el CO₂ y agravar la hipercapnia. Solo en compromiso hemodinámico severo."
      }
    },
    {
      "text": {
        "pt": "Manter a estratégia atual e tolerar pH até 7,00 (permissive hypercapnia)",
        "en": "Maintain current strategy and tolerate pH down to 7.00 (permissive hypercapnia)",
        "es": "Mantener estrategia actual y tolerar pH hasta 7,00 (hipercapnia permisiva)"
      },
      "explanation": {
        "pt": "A hipercapnia permissiva tem limite. Valores de pH abaixo de 7,15 aumentam mortalidade e justificam intervenções como ECCO₂R, conforme estudos recentes e metanálises de ventilação protetora.",
        "en": "Permissive hypercapnia has limits. pH below 7.15 increases mortality and justifies interventions like ECCO₂R, based on meta-analyses and recent studies.",
        "es": "La hipercapnia permisiva tiene límites. pH < 7,15 justifica ECCO₂R según evidencia actual."
      }
    }
  ]
},
{
  "id": 819,
  "code": "pneumo03-q819",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["tracheostomy", "bleeding", "fibrosis", "pneumonia", "bronchoscopy"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Homem de 69 anos com fibrose pulmonar avançada e pneumonia em uso de ventilação mecânica é submetido a traqueostomia percutânea após 14 dias de intubação. Após 30 minutos, apresenta sangramento contínuo pelo sítio de traqueostomia, sem queda de pressão arterial, mas com acúmulo progressivo de sangue na cânula e SpO₂ em queda. Qual das condutas abaixo é a mais adequada neste momento?",
    "en": "A 69-year-old man with advanced pulmonary fibrosis and pneumonia on mechanical ventilation undergoes percutaneous tracheostomy after 14 days of intubation. Within 30 minutes, continuous bleeding is noted from the tracheostomy site, without hypotension, but blood accumulates in the cannula and SpO₂ is dropping. What is the most appropriate management at this point?",
    "es": "Hombre de 69 años con fibrosis pulmonar avanzada y neumonía bajo ventilación mecánica se somete a traqueostomía percutánea tras 14 días de intubación. A los 30 minutos, presenta sangrado continuo por el sitio de traqueostomía, sin hipotensión, pero con sangre en la cánula y descenso de SpO₂. ¿Cuál es la conducta más adecuada en este momento?"
  },
  "options": [
    {
      "text": {
        "pt": "Realizar broncoscopia imediata para localizar e tamponar o sangramento",
        "en": "Perform immediate bronchoscopy to localize and tamponade the bleeding",
        "es": "Realizar broncoscopia inmediata para localizar y contener el sangrado"
      },
      "explanation": {
        "pt": "A broncoscopia permite visualização direta do sangramento, sua origem, e manobras terapêuticas como tamponamento seletivo com balão ou compressão com o próprio broncoscópio. É a conduta preferencial em sangramento significativo sem instabilidade grave, especialmente em pacientes com risco anatômico aumentado, como fibrose pulmonar. Referência: Heffner JE et al., *Chest*, 2023; ATS/ERS 2022 guidelines.",
        "en": "Bronchoscopy provides direct visualization and allows selective tamponade or compression. It is the preferred approach for non-catastrophic bleeding, particularly in patients with distorted anatomy such as fibrosis. Reference: Heffner JE et al., *Chest*, 2023; ATS/ERS 2022.",
        "es": "La broncoscopia permite visualización directa y control terapéutico. Es preferida en hemorragias significativas sin colapso hemodinámico. Referencia: Heffner JE et al., *Chest*, 2023; ATS/ERS 2022."
      }
    },
    {
      "text": {
        "pt": "Retirar a cânula e comprimir externamente o local com gaze",
        "en": "Remove the cannula and apply external compression with gauze",
        "es": "Retirar la cánula y comprimir externamente con gasa"
      },
      "explanation": {
        "pt": "A retirada da cânula pode causar perda da via aérea em pacientes dependentes de ventilação, especialmente com fibrose pulmonar e complacência baixa. Compressão externa isolada é insuficiente para controlar sangramento traqueal profundo.",
        "en": "Removing the cannula risks airway loss in ventilator-dependent patients, especially with low compliance. External compression alone is usually ineffective.",
        "es": "Retirar la cánula puede causar pérdida de vía aérea. La compresión externa suele ser insuficiente en estos casos."
      }
    },
    {
      "text": {
        "pt": "Iniciar vasopressores para compensar possível choque iminente",
        "en": "Start vasopressors to compensate for possible impending shock",
        "es": "Iniciar vasopresores para compensar posible shock inminente"
      },
      "explanation": {
        "pt": "O paciente ainda está hemodinamicamente estável. Vasopressores devem ser reservados para choque instalado. A prioridade agora é controlar o sangramento e preservar a via aérea.",
        "en": "The patient is still stable. Vasopressors are reserved for established shock. Airway preservation and bleeding control come first.",
        "es": "El paciente aún está estable. La prioridad es mantener la vía aérea y controlar el sangrado."
      }
    },
    {
      "text": {
        "pt": "Interromper ventilação mecânica e reintubar por via oral imediatamente",
        "en": "Stop mechanical ventilation and reintubate via oral route immediately",
        "es": "Suspender ventilación y reintubar por vía oral de inmediato"
      },
      "explanation": {
        "pt": "A reintubação oral imediata só está indicada se houver falência respiratória ou perda do acesso traqueal. Enquanto a via aérea está mantida e sangramento acessível, a broncoscopia é mais segura e eficaz.",
        "en": "Oral reintubation is indicated if there's airway failure or cannula displacement. With current access and manageable bleeding, bronchoscopy is safer.",
        "es": "La reintubación oral es necesaria solo si se pierde el acceso o hay fallo respiratorio. La broncoscopia es más segura en este contexto."
      }
    },
    {
      "text": {
        "pt": "Administrar ácido tranexâmico intravenoso e observar",
        "en": "Administer IV tranexamic acid and observe",
        "es": "Administrar ácido tranexámico IV y observar"
      },
      "explanation": {
        "pt": "O ácido tranexâmico pode ser útil como adjuvante, mas não substitui a necessidade de abordagem diagnóstica ativa. Observar sem intervenção endoscópica pode atrasar medidas eficazes.",
        "en": "Tranexamic acid may help, but does not replace the need for active endoscopic assessment. Observation alone may delay effective action.",
        "es": "El ácido tranexámico es coadyuvante, pero no sustituye la evaluación endoscópica urgente."
      }
    }
  ]
},
{
  "id": 820,
  "code": "pneumo03-q820",
  "areas": ["pneumo+icu", "pneumo", "icu", "medicine"],
  "topics": ["tracheostomy", "pocus", "ultrasound", "neck_assessment", "icu_procedures"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Homem de 61 anos, com obesidade grau II e sepse pulmonar em ventilação mecânica há 12 dias, será submetido a traqueostomia percutânea na UTI. O paciente apresenta pescoço curto, ingurgitamento jugular e múltiplas punções venosas prévias. O que justifica a realização de ultrassonografia cervical prévia ao procedimento?",
    "en": "A 61-year-old man with grade II obesity and pulmonary sepsis on mechanical ventilation for 12 days is scheduled for percutaneous tracheostomy in the ICU. He has a short neck, jugular engorgement, and multiple prior venous punctures. What justifies the use of pre-procedural neck ultrasound?",
    "es": "Hombre de 61 años con obesidad grado II y sepsis pulmonar en ventilación mecánica por 12 días será sometido a traqueostomía percutánea en la UCI. Tiene cuello corto, ingurgitación yugular y múltiples punciones venosas previas. ¿Qué justifica el uso de ecografía cervical antes del procedimiento?"
  },
  "options": [
    {
      "text": {
        "pt": "Identificar vasos anômalos e desvio da traqueia, reduzindo risco de sangramento",
        "en": "Identify abnormal vessels and tracheal deviation, reducing bleeding risk",
        "es": "Identificar vasos anómalos y desviación traqueal, reduciendo el riesgo de sangrado"
      },
      "explanation": {
        "pt": "O uso de ultrassonografia cervical antes da traqueostomia é recomendado em pacientes com anatomia desfavorável ou risco vascular. Pode identificar vasos ectópicos, desvio traqueal ou tireoide aumentada, reduzindo complicações hemorrágicas. Estudos recentes (Crit Care Med 2023, CHEST 2022) reforçam sua utilidade para segurança.",
        "en": "Pre-tracheostomy neck ultrasound is recommended in patients with unfavorable anatomy or vascular risk. It helps detect ectopic vessels, tracheal deviation, or thyroid enlargement, minimizing hemorrhagic complications. Recent studies (Crit Care Med 2023, CHEST 2022) support its safety role.",
        "es": "La ecografía cervical previa está recomendada en pacientes con anatomía difícil o riesgo vascular. Detecta vasos ectópicos, desviación traqueal o bocio, y reduce complicaciones. Apoyado por estudios actuales (Crit Care Med 2023, CHEST 2022)."
      }
    },
    {
      "text": {
        "pt": "Avaliar o volume da musculatura esternocleidomastoidea",
        "en": "Assess the volume of sternocleidomastoid muscles",
        "es": "Evaluar el volumen de los músculos esternocleidomastoideos"
      },
      "explanation": {
        "pt": "A avaliação da musculatura cervical não é objetivo primário da US antes da traqueostomia. O foco é vascularização, desvio e estruturas mediastinais.",
        "en": "Muscle assessment is not the primary aim of ultrasound in this context. Focus is on vascular and airway structures.",
        "es": "Evaluar los músculos no es el objetivo principal de la ecografía antes de la traqueostomía."
      }
    },
    {
      "text": {
        "pt": "Confirmar presença de corpos estranhos ou calcificações traqueais",
        "en": "Confirm presence of foreign bodies or tracheal calcifications",
        "es": "Confirmar cuerpos extraños o calcificaciones traqueales"
      },
      "explanation": {
        "pt": "Esses achados são raros e geralmente não são o foco da avaliação com US. A TC seria mais sensível nesses casos.",
        "en": "These findings are rare and not the focus of ultrasound. CT would be more sensitive.",
        "es": "Estos hallazgos son raros y la TC es más útil que la ecografía en estos casos."
      }
    },
    {
      "text": {
        "pt": "Evitar uso de anestesia local antes do procedimento",
        "en": "Avoid local anesthesia before the procedure",
        "es": "Evitar el uso de anestesia local antes del procedimiento"
      },
      "explanation": {
        "pt": "O uso de anestesia local não está contraindicado e não é relacionado à indicação de US. Pelo contrário, é usualmente necessária para conforto do paciente.",
        "en": "Local anesthesia is not contraindicated and is unrelated to ultrasound indication. It is usually required for patient comfort.",
        "es": "La anestesia local no está contraindicada y no tiene relación con la ecografía. Es necesaria para el confort."
      }
    },
    {
      "text": {
        "pt": "Verificar se há calcificação aórtica com risco de fístula",
        "en": "Check for aortic calcification with risk of fistula",
        "es": "Evaluar calcificación aórtica con riesgo de fístula"
      },
      "explanation": {
        "pt": "A avaliação de calcificação aórtica requer exames de imagem mais profundos, como tomografia. O ultrassom cervical tem papel limitado nessa análise.",
        "en": "Aortic calcification is better assessed by CT. Neck ultrasound has limited ability in that regard.",
        "es": "La ecografía cervical no es útil para evaluar calcificaciones aórticas. Se prefiere TC."
      }
    }
  ]
},

];
questionBank.addBank(bancoPneumoDificil);