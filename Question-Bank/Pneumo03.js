const bancoPneumoDificil = [
{
  "id": 801,
  "code": "pneumo03-q801",
  "area": ["pneumo+icu", "pneumo", "icu"],
  "topic": ["oxygen_therapy", "covid19", "respiratory_failure", "hfno", "intubation_timing"],
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
  "area": ["pneumo+icu", "pneumo", "icu"],
  "topic": ["interstitial_lung_disease", "oxygen_therapy", "fibrosis", "exercise", "hypoxemia"],
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
  "area": ["pneumo+icu", "pneumo", "icu"],
  "topic": ["bronchoscopy", "diagnostic_tools", "hypoxemia", "icu_procedures"],
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

];
questionBank.addBank(bancoPneumoDificil);