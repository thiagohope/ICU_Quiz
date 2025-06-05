const bancoNeuromoderate = [
{
  id: 201,
  code: "neuro02-q201",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["intracranial hypertension", "neuromonitoring", "head trauma", "ct scan", "emergency"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Um homem de 24 anos é admitido após acidente de moto com TCE grave. Encontra-se comatoso (Glasgow 6), pupilas isocóricas e reativas. TC de crânio mostra contusão frontal, sem desvio de linha média. A pressão intracraniana (PIC) é de 26 mmHg. Qual das condutas abaixo é mais adequada neste momento?",
    en: "A 24-year-old man is admitted after a motorcycle crash with severe TBI. He is comatose (Glasgow 6), pupils are equal and reactive. CT shows frontal contusion with no midline shift. Intracranial pressure (ICP) is 26 mmHg. What is the most appropriate next step?",
    es: "Un hombre de 24 años es admitido tras un accidente de moto con TCE grave. Está en coma (Glasgow 6), pupilas isocóricas y reactivas. La TC muestra contusión frontal sin desplazamiento de la línea media. La presión intracraneal (PIC) es de 26 mmHg. ¿Cuál es la conducta más adecuada en este momento?"
  },
  options: [
    {
      text: {
        pt: "Administrar solução salina hipotônica",
        en: "Administer hypotonic saline",
        es: "Administrar solución salina hipotónica"
      },
      explanation: {
        pt: "Soluções hipotônicas pioram o edema cerebral e devem ser evitadas.",
        en: "Hypotonic solutions worsen cerebral edema and should be avoided.",
        es: "Las soluciones hipotónicas empeoran el edema cerebral y deben evitarse."
      }
    },
    {
      text: {
        pt: "Iniciar infusão de solução salina hipertônica ou manitol",
        en: "Start hypertonic saline or mannitol infusion",
        es: "Iniciar infusión de solución salina hipertónica o manitol"
      },
      explanation: {
        pt: "Com PIC > 22 mmHg, deve-se iniciar medidas para reduzir a pressão intracraniana, como salina hipertônica ou manitol.",
        en: "With ICP > 22 mmHg, hyperosmolar therapy like hypertonic saline or mannitol should be initiated.",
        es: "Con PIC > 22 mmHg, se debe iniciar tratamiento hiperosmolar como salina hipertónica o manitol."
      }
    },
    {
      text: {
        pt: "Realizar craniotomia descompressiva de urgência",
        en: "Perform emergency decompressive craniotomy",
        es: "Realizar craniectomía descompresiva urgente"
      },
      explanation: {
        pt: "A craniotomia não é indicada neste momento sem sinais de hérnia ou desvio de linha média.",
        en: "Decompressive craniotomy is not yet indicated without signs of herniation or midline shift.",
        es: "La craniectomía aún no está indicada sin signos de hernia o desplazamiento de línea media."
      }
    },
    {
      text: {
        pt: "Reduzir PaCO₂ para < 25 mmHg com hiperventilação sustentada",
        en: "Lower PaCO₂ to < 25 mmHg with sustained hyperventilation",
        es: "Reducir PaCO₂ por debajo de 25 mmHg con hiperventilación sostenida"
      },
      explanation: {
        pt: "Hiperventilação sustentada pode causar vasoconstrição e isquemia cerebral.",
        en: "Sustained hyperventilation may cause vasoconstriction and cerebral ischemia.",
        es: "La hiperventilación sostenida puede causar vasoconstricción e isquemia cerebral."
      }
    }
  ]
},
{
  id: 202,
  code: "neuro02-q202",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["intracranial hypertension", "tiered therapy", "neurocritical care", "sedation", "osmotherapy"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Paciente de 52 anos com TCE grave permanece com PIC persistentemente > 25 mmHg por mais de 30 minutos, apesar de sedação otimizada, cabeceira elevada, e infusão de salina hipertônica. Apresenta sinais de rebaixamento neurológico progressivo. Qual é o próximo passo mais indicado no tratamento escalonado da hipertensão intracraniana?",
    en: "A 52-year-old patient with severe TBI has sustained ICP > 25 mmHg for over 30 minutes despite optimized sedation, head elevation, and hypertonic saline. He shows progressive neurological deterioration. What is the most appropriate next step in the stepwise management of intracranial hypertension?",
    es: "Un paciente de 52 años con TCE grave mantiene PIC > 25 mmHg durante más de 30 minutos a pesar de sedación optimizada, cabecera elevada e infusión de salina hipertónica. Presenta deterioro neurológico progresivo. ¿Cuál es el siguiente paso más apropiado en el manejo escalonado de la hipertensión intracraneal?"
  },
  options: [
    {
      text: {
        pt: "Iniciar hiperventilação profilática com PaCO₂ < 30 mmHg por tempo indefinido",
        en: "Initiate prophylactic hyperventilation with PaCO₂ < 30 mmHg indefinitely",
        es: "Iniciar hiperventilación profiláctica con PaCO₂ < 30 mmHg indefinidamente"
      },
      explanation: {
        pt: "Hiperventilação só deve ser usada como medida transitória, não profilática contínua.",
        en: "Hyperventilation should be used transiently, not as ongoing prophylaxis.",
        es: "La hiperventilación debe usarse transitoriamente, no como profilaxis continua."
      }
    },
    {
      text: {
        pt: "Iniciar bloqueio neuromuscular e manter normocapnia",
        en: "Start neuromuscular blockade and maintain normocapnia",
        es: "Iniciar bloqueo neuromuscular y mantener normocapnia"
      },
      explanation: {
        pt: "Bloqueio neuromuscular pode ser útil, mas não é o próximo passo primário isolado.",
        en: "Neuromuscular blockade can help, but it's not the primary next step alone.",
        es: "El bloqueo neuromuscular puede ayudar, pero no es el siguiente paso principal por sí solo."
      }
    },
    {
      text: {
        pt: "Aumentar ainda mais a dose de salina hipertônica ou manitol indefinidamente",
        en: "Further increase hypertonic saline or mannitol dose indefinitely",
        es: "Aumentar aún más la dosis de salina hipertónica o manitol indefinidamente"
      },
      explanation: {
        pt: "Dose excessiva pode causar hipernatremia e insuficiência renal; exige avaliação contínua.",
        en: "Excess dosing may cause hypernatremia and renal dysfunction; continuous reassessment is needed.",
        es: "Dosis excesivas pueden causar hipernatremia y disfunción renal; requiere reevaluación constante."
      }
    },
    {
      text: {
        pt: "Considerar craniectomia descompressiva",
        en: "Consider decompressive craniectomy",
        es: "Considerar craniectomía descompresiva"
      },
      explanation: {
        pt: "É uma das opções indicadas quando medidas clínicas falham e há deterioração neurológica.",
        en: "It is indicated when clinical measures fail and neurological worsening occurs.",
        es: "Está indicada cuando fallan las medidas clínicas y hay deterioro neurológico."
      }
    }
  ]
},
{
  id: 203,
  code: "neuro02-q203",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["jugular bulb", "brain oxygenation", "neuromonitoring", "svjO2", "neurocritical care"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente em coma após TCE grave está sendo monitorado com cateter no bulbo jugular direito. O valor de SvjO₂ (saturação venosa jugular) encontra-se persistentemente < 50%. Qual a interpretação mais provável?",
    en: "A comatose patient after severe TBI is being monitored with a right jugular bulb catheter. The jugular venous oxygen saturation (SvjO₂) is persistently < 50%. What is the most likely interpretation?",
    es: "Un paciente en coma tras TCE grave está monitorizado con catéter en el bulbo yugular derecho. La saturación venosa yugular (SvjO₂) se mantiene < 50%. ¿Cuál es la interpretación más probable?"
  },
  options: [
    {
      text: {
        pt: "Consumo cerebral de oxigênio aumentado ou perfusão cerebral inadequada",
        en: "Increased cerebral oxygen consumption or inadequate cerebral perfusion",
        es: "Consumo cerebral de oxígeno aumentado o perfusión cerebral inadecuada"
      },
      explanation: {
        pt: "Valores baixos de SvjO₂ refletem desbalanço entre oferta e consumo, indicando possível hipoperfusão.",
        en: "Low SvjO₂ reflects mismatch between supply and demand, possibly due to hypoperfusion.",
        es: "SvjO₂ baja indica desequilibrio entre oferta y demanda, posiblemente por hipoperfusión."
      }
    },
    {
      text: {
        pt: "Hiperventilação com hipocapnia e vasoconstrição compensatória",
        en: "Hyperventilation with hypocapnia and compensatory vasoconstriction",
        es: "Hiperventilación con hipocapnia y vasoconstricción compensatoria"
      },
      explanation: {
        pt: "Pode contribuir, mas o dado isolado de SvjO₂ < 50% sugere diretamente hipoperfusão/hipóxia.",
        en: "May contribute, but isolated SvjO₂ < 50% directly suggests hypoperfusion/hypoxia.",
        es: "Puede contribuir, pero SvjO₂ < 50% sugiere hipoperfusión/hipoxia."
      }
    },
    {
      text: {
        pt: "Oxigenação cerebral adequada com fluxo aumentado",
        en: "Adequate cerebral oxygenation with increased flow",
        es: "Oxigenación cerebral adecuada con flujo aumentado"
      },
      explanation: {
        pt: "Essa situação levaria a valores de SvjO₂ normais ou aumentados, não reduzidos.",
        en: "This would lead to normal or elevated SvjO₂, not decreased values.",
        es: "Esto llevaría a SvjO₂ normal o elevada, no reducida."
      }
    },
    {
      text: {
        pt: "Indicador precoce de morte encefálica",
        en: "Early indicator of brain death",
        es: "Indicador precoz de muerte encefálica"
      },
      explanation: {
        pt: "Na morte encefálica, espera-se SvjO₂ elevada (por ausência de consumo cerebral).",
        en: "In brain death, SvjO₂ is typically high due to absent cerebral oxygen consumption.",
        es: "En muerte encefálica, SvjO₂ suele estar elevada por ausencia de consumo cerebral."
      }
    }
  ]
},
{
  id: 204,
  code: "neuro02-q204",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["malignant stroke", "middle cerebral artery", "mass effect", "neuroimaging", "surgical management"],
  level: "moderate",
  correct: 2,
  question: {
    pt: "Paciente de 63 anos, previamente hígido, é admitido com hemiplegia esquerda súbita. TC inicial sem alterações. Após 24h, nova TC mostra infarto extenso em território da ACM direita com desvio de linha média e compressão do ventrículo lateral. Qual conduta deve ser considerada com base nesse achado?",
    en: "A 63-year-old previously healthy patient is admitted with sudden left hemiplegia. Initial CT is unremarkable. After 24h, repeat CT shows a large right MCA infarct with midline shift and lateral ventricle compression. What should be considered based on this finding?",
    es: "Un paciente de 63 años previamente sano ingresa con hemiplejía izquierda súbita. La TC inicial es normal. A las 24h, una nueva TC muestra infarto extenso en territorio de la ACM derecha con desviación de la línea media y compresión del ventrículo lateral. ¿Qué debe considerarse ante este hallazgo?"
  },
  options: [
    {
      text: {
        pt: "Iniciar anticoagulação plena para prevenir extensão do infarto",
        en: "Start full anticoagulation to prevent infarct extension",
        es: "Iniciar anticoagulación plena para prevenir extensión del infarto"
      },
      explanation: {
        pt: "Anticoagulação está contraindicada na fase aguda de infartos extensos com risco hemorrágico.",
        en: "Anticoagulation is contraindicated in acute large infarcts due to hemorrhagic risk.",
        es: "La anticoagulación está contraindicada en infartos extensos agudos por riesgo hemorrágico."
      }
    },
    {
      text: {
        pt: "Administrar manitol e repetir TC apenas se houver piora clínica",
        en: "Administer mannitol and repeat CT only if clinical worsening occurs",
        es: "Administrar manitol y repetir TC solo si hay deterioro clínico"
      },
      explanation: {
        pt: "A imagem já mostra sinais de gravidade que justificam intervenção precoce.",
        en: "Imaging already shows severe findings requiring early intervention.",
        es: "La imagen ya muestra hallazgos graves que justifican intervención precoz."
      }
    },
    {
      text: {
        pt: "Encaminhar para avaliação neurocirúrgica para craniectomia descompressiva",
        en: "Refer for neurosurgical evaluation for decompressive craniectomy",
        es: "Derivar a neurocirugía para craniectomía descompresiva"
      },
      explanation: {
        pt: "Em AVC maligno com desvio de linha média, craniectomia precoce pode salvar vidas e melhorar prognóstico.",
        en: "In malignant MCA stroke with midline shift, early craniectomy can be lifesaving and improve outcomes.",
        es: "En ictus maligno con desviación de línea media, la craniectomía precoz puede salvar vidas y mejorar el pronóstico."
      }
    },
    {
      text: {
        pt: "Iniciar trombólise intravenosa com alteplase",
        en: "Initiate intravenous thrombolysis with alteplase",
        es: "Iniciar trombólisis intravenosa con alteplasa"
      },
      explanation: {
        pt: "Após 24h do início dos sintomas, trombólise está contraindicada.",
        en: "After 24h of symptom onset, thrombolysis is contraindicated.",
        es: "Tras 24h del inicio de síntomas, la trombólisis está contraindicada."
      }
    }
  ]
},
{
  id: 205,
  code: "neuro02-q205",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["ischemic stroke", "thrombolysis", "alteplase", "contraindications", "time window"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente de 71 anos apresenta início súbito de disartria e hemiparesia direita há 1h30. É levado à emergência, com Glasgow 15 e NIHSS 8. TC de crânio sem hemorragia ou hipodensidades extensas. Qual é a conduta mais apropriada neste momento?",
    en: "A 71-year-old presents with sudden onset of dysarthria and right-sided hemiparesis for 1.5 hours. In the ED, GCS is 15 and NIHSS 8. CT scan shows no hemorrhage or large hypodensities. What is the most appropriate next step?",
    es: "Un paciente de 71 años presenta disartria y hemiparesia derecha de inicio súbito hace 1,5 horas. En urgencias, GCS 15 y NIHSS 8. La TC craneal no muestra hemorragia ni hipodensidades extensas. ¿Cuál es la conducta más apropiada?"
  },
  options: [
    {
      text: {
        pt: "Iniciar trombólise com alteplase intravenosa",
        en: "Initiate intravenous thrombolysis with alteplase",
        es: "Iniciar trombólisis intravenosa con alteplasa"
      },
      explanation: {
        pt: "O paciente preenche critérios clínicos e radiológicos para trombólise dentro da janela terapêutica (até 4h30).",
        en: "The patient meets clinical and radiological criteria for thrombolysis within the 4.5-hour window.",
        es: "El paciente cumple criterios clínicos y radiológicos para trombólisis dentro de la ventana terapéutica (4,5 h)."
      }
    },
    {
      text: {
        pt: "Observar em unidade neurológica por 24 horas antes de intervir",
        en: "Observe in a neurological unit for 24 hours before intervening",
        es: "Observar en unidad neurológica durante 24 horas antes de intervenir"
      },
      explanation: {
        pt: "A observação isolada atrasa o tratamento e reduz as chances de recuperação funcional.",
        en: "Observation alone delays treatment and reduces chances of functional recovery.",
        es: "La observación aislada retrasa el tratamiento y reduce las probabilidades de recuperación funcional."
      }
    },
    {
      text: {
        pt: "Administrar AAS e repetir TC em 6h",
        en: "Administer aspirin and repeat CT in 6h",
        es: "Administrar AAS y repetir TC en 6h"
      },
      explanation: {
        pt: "AAS é indicado se trombólise for contraindicada. Aqui, o paciente é candidato à trombólise.",
        en: "Aspirin is used when thrombolysis is contraindicated. This patient is eligible.",
        es: "El AAS se usa si la trombólisis está contraindicada. Este paciente es candidato."
      }
    },
    {
      text: {
        pt: "Encaminhar diretamente para craniotomia exploratória",
        en: "Refer directly for exploratory craniotomy",
        es: "Derivar directamente a craneotomía exploratoria"
      },
      explanation: {
        pt: "Não há indicação cirúrgica neste momento em AVC isquêmico sem complicações.",
        en: "There is no surgical indication at this stage in uncomplicated ischemic stroke.",
        es: "No hay indicación quirúrgica en este momento en un ictus isquémico no complicado."
      }
    }
  ]
},
{
  id: 206,
  code: "neuro02-q206",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["prolonged seizure", "status epilepticus", "anticonvulsants", "emergency", "neurology"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Paciente de 39 anos é admitido após 12 minutos de atividade convulsiva generalizada contínua. Já foram administradas duas doses de midazolam intramuscular pela equipe pré-hospitalar. Na emergência, continua convulsionando. Qual a melhor próxima conduta?",
    en: "A 39-year-old patient is admitted after 12 minutes of continuous generalized convulsions. Two doses of intramuscular midazolam were given by EMS. He is still seizing in the ED. What is the best next step?",
    es: "Un paciente de 39 años es admitido tras 12 minutos de convulsiones generalizadas continuas. Recibió dos dosis de midazolam intramuscular por el equipo de emergencia. Sigue convulsionando. ¿Cuál es la mejor próxima conducta?"
  },
  options: [
    {
      text: {
        pt: "Administrar terceira dose de midazolam intramuscular",
        en: "Administer a third dose of intramuscular midazolam",
        es: "Administrar una tercera dosis de midazolam intramuscular"
      },
      explanation: {
        pt: "Após falha das benzodiazepinas de resgate, deve-se avançar para anticonvulsivante de segunda linha.",
        en: "After rescue benzodiazepine failure, move to second-line anticonvulsants.",
        es: "Tras falla de benzodiacepinas de rescate, avanzar a anticonvulsivos de segunda línea."
      }
    },
    {
      text: {
        pt: "Iniciar infusão intravenosa de fenitoína ou levetiracetam",
        en: "Start intravenous phenytoin or levetiracetam infusion",
        es: "Iniciar infusión intravenosa de fenitoína o levetiracetam"
      },
      explanation: {
        pt: "Essa é a conduta adequada após falha das benzodiazepinas em status epilepticus estabelecido.",
        en: "This is appropriate after benzodiazepine failure in established status epilepticus.",
        es: "Es la conducta adecuada tras fallo de benzodiacepinas en estatus epiléptico establecido."
      }
    },
    {
      text: {
        pt: "Observar mais 10 minutos antes de intervir",
        en: "Observe another 10 minutes before intervening",
        es: "Observar 10 minutos más antes de intervenir"
      },
      explanation: {
        pt: "Aguardar agrava risco de lesão neuronal e complicações metabólicas.",
        en: "Waiting increases risk of neuronal injury and metabolic complications.",
        es: "Esperar agrava el riesgo de daño neuronal y complicaciones metabólicas."
      }
    },
    {
      text: {
        pt: "Intubar imediatamente e iniciar anestesia com propofol",
        en: "Intubate immediately and start anesthesia with propofol",
        es: "Intubar inmediatamente e iniciar anestesia con propofol"
      },
      explanation: {
        pt: "Indicado em status refratário, após falha da segunda linha — não como passo imediato aqui.",
        en: "Indicated in refractory status, after second-line failure — not immediately here.",
        es: "Indicado en estatus refractario tras fallo de segunda línea — no de inmediato aquí."
      }
    }
  ]
},
{
  id: 207,
  code: "neuro02-q207",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["multimodal monitoring", "pbto2", "intracranial pressure", "neurocritical care", "cerebral hypoxia"],
  level: "moderate",
  correct: 2,
  question: {
    pt: "Paciente com TCE grave evolui estável hemodinamicamente, com PIC mantida < 20 mmHg nas últimas 6h. No entanto, os valores de pbtO₂ se mantêm < 15 mmHg de forma sustentada. Qual a interpretação mais provável dessa discordância?",
    en: "A patient with severe TBI remains hemodynamically stable, with ICP < 20 mmHg over the past 6 hours. However, pbtO₂ levels persistently remain < 15 mmHg. What is the most likely interpretation of this discrepancy?",
    es: "Un paciente con TCE grave permanece estable, con PIC < 20 mmHg durante las últimas 6 horas. Sin embargo, los valores de pbtO₂ siguen < 15 mmHg de forma persistente. ¿Cuál es la interpretación más probable de esta discrepancia?"
  },
  options: [
    {
      text: {
        pt: "Monitor de pbtO₂ está provavelmente mal posicionado",
        en: "pbtO₂ probe is probably malpositioned",
        es: "La sonda de pbtO₂ probablemente está mal posicionada"
      },
      explanation: {
        pt: "Embora possível, não é a explicação mais comum para queda sustentada em paciente sem alterações técnicas.",
        en: "Although possible, it's not the most common cause for sustained drop without technical issues.",
        es: "Aunque posible, no es la causa más común de caída persistente sin problemas técnicos."
      }
    },
    {
      text: {
        pt: "Perfusão cerebral global está preservada",
        en: "Global cerebral perfusion is preserved",
        es: "La perfusión cerebral global está preservada"
      },
      explanation: {
        pt: "A pbtO₂ baixa indica hipóxia regional, o que contradiz boa perfusão global.",
        en: "Low pbtO₂ indicates regional hypoxia, contradicting preserved global perfusion.",
        es: "El pbtO₂ bajo indica hipoxia regional, lo cual contradice buena perfusión global."
      }
    },
    {
      text: {
        pt: "Pode haver hipoperfusão regional cerebral não detectada pela PIC",
        en: "There may be regional cerebral hypoperfusion not detected by ICP",
        es: "Puede haber hipoperfusión cerebral regional no detectada por la PIC"
      },
      explanation: {
        pt: "A PIC reflete pressão global, mas a pbtO₂ detecta hipóxia focal, sugerindo possível isquemia regional.",
        en: "ICP reflects global pressure; pbtO₂ detects focal hypoxia, suggesting regional ischemia.",
        es: "La PIC refleja presión global; el pbtO₂ detecta hipoxia focal, lo que sugiere isquemia regional."
      }
    },
    {
      text: {
        pt: "Valores baixos de pbtO₂ são aceitáveis se a PIC estiver normal",
        en: "Low pbtO₂ values are acceptable if ICP is normal",
        es: "Valores bajos de pbtO₂ son aceptables si la PIC es normal"
      },
      explanation: {
        pt: "pbtO₂ < 20 mmHg é considerado anormal, independentemente da PIC.",
        en: "pbtO₂ < 20 mmHg is considered abnormal, regardless of ICP.",
        es: "pbtO₂ < 20 mmHg se considera anormal, independientemente de la PIC."
      }
    }
  ]
},
{
  id: 208,
  code: "neuro02-q208",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["intracerebral hemorrhage", "blood pressure", "surgery indication", "emergency", "neuroimaging"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Paciente de 68 anos é admitido com rebaixamento do nível de consciência súbito. Pressão arterial: 220/110 mmHg. TC revela hematoma intracerebral espontâneo em putâmen direito, medindo 4,2 cm, sem desvio de linha média. Está com pupilas isocóricas e Glasgow 10. Qual a conduta inicial mais apropriada?",
    en: "A 68-year-old patient is admitted with sudden decreased consciousness. Blood pressure: 220/110 mmHg. CT shows a spontaneous intracerebral hematoma in the right putamen, 4.2 cm, without midline shift. Pupils are equal and reactive. GCS is 10. What is the most appropriate initial management?",
    es: "Un paciente de 68 años es admitido con disminución súbita del level de conciencia. Presión arterial: 220/110 mmHg. La TC muestra hematoma intracerebral espontáneo en el putamen derecho, de 4,2 cm, sin desviación de línea media. Pupilas isocóricas, GCS 10. ¿Cuál es la conducta inicial más apropiada?"
  },
  options: [
    {
      text: {
        pt: "Indicar craniotomia imediata",
        en: "Indicate immediate craniotomy",
        es: "Indicar craneotomía inmediata"
      },
      explanation: {
        pt: "Cirurgia imediata não é indicada sem sinais de hérnia, desvio ou deterioração progressiva.",
        en: "Immediate surgery is not indicated without herniation, shift, or clinical worsening.",
        es: "La cirugía inmediata no está indicada sin signos de hernia, desviación o deterioro progresivo."
      }
    },
    {
      text: {
        pt: "Iniciar controle pressórico com alvo de PAS < 140 mmHg",
        en: "Initiate BP control targeting SBP < 140 mmHg",
        es: "Iniciar control de presión con objetivo de PAS < 140 mmHg"
      },
      explanation: {
        pt: "Estudos como ATACH-2 e INTERACT II sustentam benefício do controle intensivo com PAS < 140 mmHg.",
        en: "Trials like ATACH-2 and INTERACT II support intensive BP lowering to SBP < 140 mmHg.",
        es: "Estudios como ATACH-2 e INTERACT II respaldan el control intensivo a PAS < 140 mmHg."
      }
    },
    {
      text: {
        pt: "Administrar trombolítico venoso para prevenir AVC isquêmico",
        en: "Administer IV thrombolytic to prevent ischemic stroke",
        es: "Administrar trombolítico intravenoso para prevenir ictus isquémico"
      },
      explanation: {
        pt: "Trombolíticos são contraindicados em hemorragia intracerebral.",
        en: "Thrombolytics are contraindicated in intracerebral hemorrhage.",
        es: "Los trombolíticos están contraindicados en hemorragia intracerebral."
      }
    },
    {
      text: {
        pt: "Manter pressão elevada para garantir perfusão cerebral",
        en: "Maintain high pressure to ensure cerebral perfusion",
        es: "Mantener presión elevada para asegurar perfusión cerebral"
      },
      explanation: {
        pt: "Pressão excessiva aumenta risco de expansão hematoma e piora desfecho.",
        en: "Excessive pressure increases risk of hematoma expansion and worsens outcome.",
        es: "La presión elevada aumenta el riesgo de expansión del hematoma y empeora el pronóstico."
      }
    }
  ]
},
{
  id: 209,
  code: "neuro02-q209",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["mannitol", "intracranial hypertension", "osmotherapy", "renal function", "contraindications"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Homem de 58 anos com TCE grave apresenta PIC de 28 mmHg e sinais de herniação incipiente. A equipe considera uso de manitol EV. Ele tem creatinina de 2,8 mg/dL e osmolaridade plasmática de 330 mOsm/kg. Qual é a conduta mais segura?",
    en: "A 58-year-old man with severe TBI has ICP of 28 mmHg and early signs of herniation. IV mannitol is considered. He has a creatinine of 2.8 mg/dL and plasma osmolality of 330 mOsm/kg. What is the safest next step?",
    es: "Un hombre de 58 años con TCE grave presenta PIC de 28 mmHg y signos iniciales de herniación. Se considera manitol IV. Tiene creatinina de 2,8 mg/dL y osmolalidad plasmática de 330 mOsm/kg. ¿Cuál es la conducta más segura?"
  },
  options: [
    {
      text: {
        pt: "Administrar bolus de manitol 1 g/kg imediatamente",
        en: "Administer 1 g/kg mannitol bolus immediately",
        es: "Administrar bolo de manitol 1 g/kg de inmediato"
      },
      explanation: {
        pt: "Apesar da urgência, manitol em paciente com insuficiência renal e osmolaridade elevada pode agravar disfunção.",
        en: "Despite urgency, mannitol in renal dysfunction with high osmolality may worsen the condition.",
        es: "Pese a la urgencia, el manitol en disfunción renal y osmolalidad alta puede empeorar la condición."
      }
    },
    {
      text: {
        pt: "Trocar manitol por glicose hipertônica a 50%",
        en: "Replace mannitol with 50% hypertonic glucose",
        es: "Reemplazar manitol con glucosa hipertónica al 50%"
      },
      explanation: {
        pt: "Glicose hipertônica não é alternativa reconhecida para controle da PIC.",
        en: "Hypertonic glucose is not a standard alternative for ICP control.",
        es: "La glucosa hipertónica no es una alternativa estándar para controlar la PIC."
      }
    },
    {
      text: {
        pt: "Administrar diurético de alça e manter manitol",
        en: "Administer loop diuretic and continue mannitol",
        es: "Administrar diurético de asa y mantener manitol"
      },
      explanation: {
        pt: "Furosemida pode potencializar manitol, mas não resolve o risco da osmolaridade já elevada.",
        en: "Loop diuretics may potentiate mannitol, but do not mitigate risk of high osmolality.",
        es: "Los diuréticos de asa potencian el manitol, pero no eliminan el riesgo de hiperosmolalidad."
      }
    },
    {
      text: {
        pt: "Evitar manitol e considerar salina hipertônica",
        en: "Avoid mannitol and consider hypertonic saline",
        es: "Evitar manitol y considerar solución salina hipertónica"
      },
      explanation: {
        pt: "Salina hipertônica é preferível em disfunção renal e osmolaridade elevada.",
        en: "Hypertonic saline is preferred in renal dysfunction and high serum osmolality.",
        es: "La salina hipertónica se prefiere en disfunción renal y osmolalidad elevada."
      }
    }
  ]
},
{
  id: 210,
  code: "neuro02-q210",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["transcranial doppler", "vasospasm", "saeh", "mca velocity", "monitoring limitations"],
  level: "moderate",
  correct: 2,
  question: {
    pt: "Paciente de 49 anos está no 5º dia após hemorragia subaracnóidea aneurismática. Apresenta leve rebaixamento do nível de consciência. Doppler transcraniano mostra velocidade média de 160 cm/s na ACM direita e índice de Lindegaard > 3. Qual a interpretação e conduta mais adequada?",
    en: "A 49-year-old patient is on day 5 after aneurysmal subarachnoid hemorrhage. He shows mild decreased consciousness. Transcranial Doppler reveals mean MCA velocity of 160 cm/s on the right and Lindegaard index > 3. What is the best interpretation and management?",
    es: "Un paciente de 49 años se encuentra en el día 5 tras hemorragia subaracnoidea aneurismática. Presenta leve deterioro del level de conciencia. El Doppler transcraneal muestra velocidad media de 160 cm/s en la ACM derecha e índice de Lindegaard > 3. ¿Cuál es la mejor interpretación y conducta?"
  },
  options: [
    {
      text: {
        pt: "Descartar vasoespasmo, pois as velocidades estão abaixo do limiar",
        en: "Rule out vasospasm, as velocities are below threshold",
        es: "Descartar vasoespasmo, ya que las velocidades están por debajo del umbral"
      },
      explanation: {
        pt: "Velocidades acima de 120–130 cm/s, especialmente com índice > 3, sugerem vasoespasmo significativo.",
        en: "Velocities > 120–130 cm/s with Lindegaard index > 3 suggest significant vasospasm.",
        es: "Velocidades > 120–130 cm/s con índice de Lindegaard > 3 sugieren vasoespasmo significativo."
      }
    },
    {
      text: {
        pt: "Interpretar como hiperemia cerebral benigna",
        en: "Interpret as benign cerebral hyperemia",
        es: "Interpretar como hiperemia cerebral benigna"
      },
      explanation: {
        pt: "Hiperemia cursa com índice de Lindegaard baixo (< 3), o que não é o caso aqui.",
        en: "Hyperemia shows low Lindegaard index (< 3), which is not the case here.",
        es: "La hiperemia cursa con índice de Lindegaard bajo (< 3), lo que no ocurre aquí."
      }
    },
    {
      text: {
        pt: "Diagnóstico compatível com vasoespasmo e necessidade de monitoramento e/ou intervenção",
        en: "Findings consistent with vasospasm requiring monitoring and/or intervention",
        es: "Hallazgos compatibles con vasoespasmo que requieren monitoreo y/o intervención"
      },
      explanation: {
        pt: "Velocidade > 120–150 cm/s e índice > 3 confirmam vasoespasmo; indica necessidade de vigilância e possível terapia.",
        en: "Velocity > 120–150 cm/s and index > 3 confirm vasospasm; warrants monitoring and possible treatment.",
        es: "Velocidad > 120–150 cm/s e índice > 3 confirman vasoespasmo; se requiere seguimiento y posible tratamiento."
      }
    },
    {
      text: {
        pt: "Método não é confiável e deve ser abandonado em favor de nova angioTC",
        en: "Method is unreliable and should be abandoned in favor of repeat CTA",
        es: "El método no es confiable y debe abandonarse en favor de una nueva angioTC"
      },
      explanation: {
        pt: "TCD é método válido, especialmente para seguimento; angioTC pode ser complementar, mas não substitui.",
        en: "TCD is valid for monitoring; CTA may complement but not replace it entirely.",
        es: "El DTC es válido para seguimiento; la angioTC puede complementar pero no lo sustituye por completo."
      }
    }
  ]
},
{
  id: 211,
  code: "neuro02-q211",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["meningitis", "critical care", "antibiotics", "lumbar puncture", "neuroinfection"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente de 46 anos, internado na UTI após trauma cranioencefálico fechado, apresenta febre, rigidez de nuca e rebaixamento do nível de consciência no 7º dia de internação. Suspeita-se de meningite. Qual a conduta inicial mais apropriada?",
    en: "A 46-year-old ICU patient, post-closed head trauma, develops fever, neck stiffness, and decreased consciousness on day 7. Meningitis is suspected. What is the most appropriate initial step?",
    es: "Un paciente de 46 años en UCI tras traumatismo craneal cerrado presenta fiebre, rigidez de nuca y deterioro de la conciencia en el día 7. Se sospecha meningitis. ¿Cuál es la conducta inicial más apropiada?"
  },
  options: [
    {
      text: {
        pt: "Iniciar antibióticos empíricos imediatamente antes da punção lombar",
        en: "Start empirical antibiotics immediately before lumbar puncture",
        es: "Iniciar antibióticos empíricos inmediatamente antes de la punción lumbar"
      },
      explanation: {
        pt: "Em pacientes com sinais de hipertensão intracraniana ou rebaixamento de consciência, antibióticos devem ser iniciados antes da punção.",
        en: "In patients with signs of elevated ICP or altered consciousness, antibiotics should be started before LP.",
        es: "En pacientes con signos de hipertensión intracraneal o conciencia alterada, los antibióticos deben iniciarse antes de la PL."
      }
    },
    {
      text: {
        pt: "Aguardar TC de crânio e depois iniciar antibióticos",
        en: "Wait for brain CT then start antibiotics",
        es: "Esperar TC cerebral y luego iniciar antibióticos"
      },
      explanation: {
        pt: "Atrasar antibióticos em meningite é prejudicial; TC pode preceder punção, mas antibióticos não devem ser adiados.",
        en: "Delaying antibiotics in meningitis is harmful; CT may precede LP, but antibiotics must not be delayed.",
        es: "Retrasar antibióticos en meningitis es perjudicial; la TC puede preceder la PL, pero no debe retrasarse el tratamiento."
      }
    },
    {
      text: {
        pt: "Realizar punção lombar imediatamente",
        en: "Perform immediate lumbar puncture",
        es: "Realizar punción lumbar inmediata"
      },
      explanation: {
        pt: "Punção sem TC em paciente com rebaixamento é arriscada e contraindicada.",
        en: "LP without prior CT in altered consciousness is risky and contraindicated.",
        es: "La PL sin TC previa en alteración de conciencia es riesgosa y está contraindicada."
      }
    },
    {
      text: {
        pt: "Solicitar PCR para Listeria monocytogenes como exame inicial",
        en: "Request PCR for Listeria monocytogenes as first test",
        es: "Solicitar PCR para Listeria monocytogenes como prueba inicial"
      },
      explanation: {
        pt: "A PCR pode ser útil, mas não substitui início empírico rápido do tratamento.",
        en: "PCR may help, but does not replace prompt empirical therapy.",
        es: "La PCR puede ser útil, pero no reemplaza el inicio empírico del tratamiento."
      }
    }
  ]
},
{
  id: 211,
  code: "neuro02-q211",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["meningitis", "nosocomial infection", "empirical therapy", "antibiotics", "treatment duration"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Paciente com TCE grave desenvolve febre, rigidez de nuca e alteração do sensorium no 8º dia de internação. LCR colhido mostra pleocitose, proteína elevada e cultura pendente. Qual a melhor conduta inicial quanto à terapia empírica e tempo de antibiótico?",
    en: "A patient with severe TBI develops fever, neck stiffness, and altered sensorium on day 8 of ICU stay. CSF shows pleocytosis, elevated protein, and pending culture. What is the best initial approach for empirical therapy and antibiotic duration?",
    es: "Un paciente con TCE grave desarrolla fiebre, rigidez de nuca y alteración del sensorio en el día 8 de UCI. El LCR muestra pleocitosis, proteínas elevadas y cultivo pendiente. ¿Cuál es la mejor conducta inicial con respecto a terapia empírica y duración del antibiótico?"
  },
  options: [
    {
      text: {
        pt: "Ceftriaxona e ampicilina por 14 dias",
        en: "Ceftriaxone and ampicillin for 14 days",
        es: "Ceftriaxona y ampicilina durante 14 días"
      },
      explanation: {
        pt: "Esquema indicado em meningite comunitária, mas insuficiente para germes hospitalares.",
        en: "This is for community-acquired meningitis and inadequate for nosocomial pathogens.",
        es: "Esquema para meningitis comunitaria; insuficiente frente a gérmenes nosocomiales."
      }
    },
    {
      text: {
        pt: "Vancomicina e meropenem por no mínimo 14 dias",
        en: "Vancomycin and meropenem for at least 14 days",
        es: "Vancomicina y meropenem por al menos 14 días"
      },
      explanation: {
        pt: "Cobre germes multirresistentes como *Pseudomonas* e *Staphylococcus*; duração mínima de 14 dias é padrão.",
        en: "Covers MDR pathogens like *Pseudomonas* and *Staphylococcus*; 14 days minimum is standard.",
        es: "Cubre patógenos multirresistentes como *Pseudomonas* y *Staphylococcus*; mínimo 14 días es estándar."
      }
    },
    {
      text: {
        pt: "Cefepime em monoterapia por 7 dias",
        en: "Cefepime monotherapy for 7 days",
        es: "Cefepima en monoterapia durante 7 días"
      },
      explanation: {
        pt: "Não cobre adequadamente Gram positivos como *Staphylococcus coagulase negativa*.",
        en: "Does not sufficiently cover Gram-positives like *coagulase-negative Staphylococcus*.",
        es: "No cubre suficientemente Gram positivos como *Staphylococcus coagulasa negativa*."
      }
    },
    {
      text: {
        pt: "Suspender antibiótico até resultado da cultura",
        en: "Hold antibiotics until culture result",
        es: "Suspender antibiótico hasta el resultado del cultivo"
      },
      explanation: {
        pt: "Contraindicado diante de sinais clínicos e LCR sugestivo de infecção.",
        en: "Contraindicated given clinical signs and suggestive CSF findings.",
        es: "Contraindicado ante signos clínicos y LCR sugestivo de infección."
      }
    }
  ]
},
{
  id: 212,
  code: "neuro02-q212",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["ventriculitis", "external ventricular drain", "csf infection", "intraventricular antibiotics", "device management"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Homem de 46 anos com hemorragia subaracnóidea é portador de DVE há 9 dias. Evolui com febre persistente, rebaixamento neurológico e LCR com leucócitos > 1000/mm³, proteína elevada e glicose < 10 mg/dL. A cultura está positiva para *Acinetobacter baumannii*. Qual a conduta mais adequada?",
    en: "A 46-year-old man with subarachnoid hemorrhage has had an EVD in place for 9 days. He develops persistent fever, neurological worsening, and CSF with > 1000 WBCs/mm³, high protein and glucose < 10 mg/dL. Culture is positive for *Acinetobacter baumannii*. What is the best next step?",
    es: "Un hombre de 46 años con hemorragia subaracnoidea lleva una DVE hace 9 días. Presenta fiebre persistente, deterioro neurológico y LCR con >1000 leucocitos/mm³, proteínas elevadas y glucosa < 10 mg/dL. El cultivo es positivo para *Acinetobacter baumannii*. ¿Cuál es la conducta más adecuada?"
  },
  options: [
    {
      text: {
        pt: "Manter DVE atual e iniciar ceftriaxona intravenosa",
        en: "Keep current EVD and start intravenous ceftriaxone",
        es: "Mantener DVE actual e iniciar ceftriaxona intravenosa"
      },
      explanation: {
        pt: "Ceftriaxona é ineficaz contra *Acinetobacter*; DVE deve ser trocada.",
        en: "Ceftriaxone is ineffective against *Acinetobacter*; EVD should be replaced.",
        es: "La ceftriaxona es ineficaz contra *Acinetobacter*; se debe cambiar la DVE."
      }
    },
    {
      text: {
        pt: "Manter DVE e iniciar meropenem intravenoso",
        en: "Keep current EVD and start intravenous meropenem",
        es: "Mantener DVE e iniciar meropenem intravenoso"
      },
      explanation: {
        pt: "Sem troca da DVE e sem antibiótico intraventricular, tratamento é menos efetivo.",
        en: "Without EVD exchange and intraventricular therapy, treatment is less effective.",
        es: "Sin cambio de DVE ni terapia intraventricular, el tratamiento es menos efectivo."
      }
    },
    {
      text: {
        pt: "Retirar DVE e observar antes de tratar",
        en: "Remove EVD and observe before treating",
        es: "Retirar DVE y observar antes de tratar"
      },
      explanation: {
        pt: "Infecção grave com cultura positiva exige tratamento imediato, não apenas observação.",
        en: "Serious infection with positive culture requires immediate treatment, not just observation.",
        es: "Infección grave con cultivo positivo requiere tratamiento inmediato, no solo observación."
      }
    },
    {
      text: {
        pt: "Trocar DVE, iniciar meropenem IV e considerar colistina intraventricular",
        en: "Replace EVD, start IV meropenem and consider intraventricular colistin",
        es: "Cambiar DVE, iniciar meropenem IV y considerar colistina intraventricular"
      },
      explanation: {
        pt: "Conduta padrão para ventriculite grave por germes resistentes: troca do dispositivo e antibiótico combinado sistêmico e intraventricular.",
        en: "Standard approach for severe ventriculitis by resistant pathogens: device change and combined IV + intraventricular antibiotics.",
        es: "Conducta estándar para ventriculitis grave por gérmenes resistentes: cambio de dispositivo y antibiótico sistémico + intraventricular."
      }
    }
  ]
},
{
  id: 213,
  code: "neuro02-q213",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["evd", "vp shunt", "hydrocephalus", "csf drainage", "shunt complications"],
  level: "moderate",
  correct: 2,
  question: {
    pt: "Mulher de 61 anos apresenta hidrocefalia aguda obstrutiva após hemorragia intraventricular. É submetida a derivação ventricular externa (DVE) com boa resposta. Após 12 dias, o débito permanece elevado e não há previsão de retirada. Qual das options abaixo é mais apropriada?",
    en: "A 61-year-old woman develops acute obstructive hydrocephalus after intraventricular hemorrhage. An external ventricular drain (EVD) is placed with good response. After 12 days, CSF output remains high with no plan to discontinue. What is the most appropriate next step?",
    es: "Una mujer de 61 años presenta hidrocefalia obstructiva aguda tras hemorragia intraventricular. Se coloca una DVE con buena respuesta. Tras 12 días, el débito sigue alto y no hay previsión de retiro. ¿Cuál es el paso más adecuado?"
  },
  options: [
    {
      text: {
        pt: "Retirar DVE imediatamente para evitar infecção",
        en: "Remove EVD immediately to avoid infection",
        es: "Retirar la DVE de inmediato para evitar infección"
      },
      explanation: {
        pt: "Retirada abrupta sem resolução da hidrocefalia pode levar à deterioração neurológica.",
        en: "Abrupt removal without resolution of hydrocephalus may cause neurological decline.",
        es: "La retirada abrupta sin resolución de la hidrocefalia puede provocar deterioro neurológico."
      }
    },
    {
      text: {
        pt: "Manter DVE por tempo indeterminado sob antibiótico profilático",
        en: "Maintain EVD indefinitely under prophylactic antibiotics",
        es: "Mantener DVE indefinidamente con antibióticos profilácticos"
      },
      explanation: {
        pt: "DVE prolongada aumenta risco de ventriculite; não é solução definitiva.",
        en: "Prolonged EVD increases ventriculitis risk; not a definitive solution.",
        es: "DVE prolongada aumenta el riesgo de ventriculitis; no es solución definitiva."
      }
    },
    {
      text: {
        pt: "Indicar derivação ventrículo-peritoneal definitiva",
        en: "Indicate definitive ventriculoperitoneal (VP) shunt",
        es: "Indicar derivación ventrículo-peritoneal definitiva"
      },
      explanation: {
        pt: "DVP é indicada quando necessidade de derivação persiste após >7–10 dias de DVE.",
        en: "VP shunt is indicated when CSF diversion is still needed after >7–10 days of EVD.",
        es: "La DVP está indicada si se requiere derivación tras >7–10 días de DVE."
      }
    },
    {
      text: {
        pt: "Reduzir lentamente a drenagem da DVE até débito zerado",
        en: "Gradually taper EVD drainage to zero",
        es: "Reducir gradualmente el drenaje de la DVE hasta cero"
      },
      explanation: {
        pt: "Essa tentativa é válida em pacientes com melhora clínica e sinais de resolução, o que não é o caso aqui.",
        en: "This strategy applies to improving patients with signs of resolution, not applicable here.",
        es: "Estrategia válida si hay mejoría y resolución, lo que no ocurre en este caso."
      }
    }
  ]
},
{
  id: 214,
  code: "neuro02-q214",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["microdialysis", "lactate pyruvate ratio", "cerebral metabolism", "ischemia", "brain monitoring"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Paciente com TCE grave está em monitorização multimodal, incluindo microdiálise cerebral. Nas últimas horas, apresenta aumento progressivo da relação lactato/piruvato (> 40) e redução da glicose cerebral local (< 0,8 mmol/L), com PIC e PPC dentro de metas. Qual interpretação é mais provável?",
    en: "A patient with severe TBI is undergoing multimodal monitoring, including cerebral microdialysis. In recent hours, the lactate/pyruvate ratio increases (> 40) and local brain glucose drops (< 0.8 mmol/L), while ICP and CPP remain within target. What is the most likely interpretation?",
    es: "Un paciente con TCE grave está bajo monitoreo multimodal, incluida microdiálisis cerebral. En las últimas horas, la relación lactato/piruvato aumenta (> 40) y la glucosa cerebral local disminuye (< 0,8 mmol/L), mientras que la PIC y PPC están dentro de los objetivos. ¿Cuál es la interpretación más probable?"
  },
  options: [
    {
      text: {
        pt: "Monitor está mal posicionado ou apresenta artefato",
        en: "Probe is malpositioned or showing artifact",
        es: "El catéter está mal posicionado o con artefacto"
      },
      explanation: {
        pt: "Artefato é possível, mas padrão bioquímico descrito sugere sofrimento celular real.",
        en: "Artifact is possible, but this biochemical pattern suggests real metabolic distress.",
        es: "Es posible artefacto, pero este patrón bioquímico sugiere sufrimiento celular real."
      }
    },
    {
      text: {
        pt: "Hipoxia ou isquemia regional cerebral",
        en: "Regional cerebral hypoxia or ischemia",
        es: "Hipoxia o isquemia cerebral regional"
      },
      explanation: {
        pt: "Alta relação lactato/piruvato associada à hipoglicose cerebral sugere isquemia localizada, mesmo com PIC e PPC normais.",
        en: "Elevated lactate/pyruvate ratio with low local glucose suggests focal ischemia despite normal ICP and CPP.",
        es: "Relación lactato/piruvato alta con glucosa local baja sugiere isquemia focal, incluso con PIC y PPC normales."
      }
    },
    {
      text: {
        pt: "Perfusão cerebral global excessiva",
        en: "Excessive global cerebral perfusion",
        es: "Perfusión cerebral global excesiva"
      },
      explanation: {
        pt: "Perfusão aumentada não causaria esse padrão de hipoglicose e acidose celular.",
        en: "Hyperperfusion does not cause low glucose and anaerobic metabolism pattern.",
        es: "La hiperperfusión no causa hipoglucemia ni este patrón de metabolismo anaeróbico."
      }
    },
    {
      text: {
        pt: "Sinal de melhora metabólica cerebral",
        en: "Sign of cerebral metabolic improvement",
        es: "Signo de mejoría metabólica cerebral"
      },
      explanation: {
        pt: "Padrão descrito é clássico de disfunção mitocondrial ou isquemia, e não de melhora.",
        en: "This pattern is classic for mitochondrial dysfunction or ischemia, not improvement.",
        es: "Este patrón es clásico de disfunción mitocondrial o isquemia, no de mejoría."
      }
    }
  ]
},
{
  id: 215,
  code: "neuro02-q215",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["neuroplasticity", "brain injury", "rehabilitation", "functional recovery", "intensive care"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente de 48 anos em reabilitação após AVC isquêmico extenso no hemisfério esquerdo. Apresenta disartria moderate e hemiparesia direita. Equipe multiprofissional inicia estimulação precoce e fisioterapia intensiva. Qual afirmação abaixo sobre neuroplasticidade está mais correct?",
    en: "A 48-year-old patient is undergoing rehab after a large left hemispheric ischemic stroke. He has moderate dysarthria and right hemiparesis. Early stimulation and intensive physical therapy are initiated. Which statement about neuroplasticity is most accurate?",
    es: "Un paciente de 48 años está en rehabilitación tras un ictus isquémico extenso en el hemisferio izquierdo. Presenta disartria moderate y hemiparesia derecha. Se inicia estimulación temprana y fisioterapia intensiva. ¿Cuál afirmación sobre neuroplasticidad es más correcta?"
  },
  options: [
    {
      text: {
        pt: "Estimulação sensório-motora precoce pode favorecer reorganização funcional pós-lesão",
        en: "Early sensorimotor stimulation may promote functional reorganization after injury",
        es: "La estimulación sensoriomotora precoz puede favorecer la reorganización funcional tras la lesión"
      },
      explanation: {
        pt: "Intervenções precoces ajudam a modular vias remanescentes e potencializam neuroplasticidade adaptativa.",
        en: "Early interventions help modulate remaining pathways and enhance adaptive plasticity.",
        es: "Las intervenciones tempranas ayudan a modular vías residuales y potencian la plasticidad adaptativa."
      }
    },
    {
      text: {
        pt: "A neuroplasticidade depende exclusivamente da integridade do córtex motor primário",
        en: "Neuroplasticity depends exclusively on primary motor cortex integrity",
        es: "La neuroplasticidad depende exclusivamente de la integridad del córtex motor primario"
      },
      explanation: {
        pt: "Áreas secundárias e contralaterais também participam da reorganização funcional.",
        en: "Secondary and contralateral areas also contribute to functional reorganization.",
        es: "Las áreas secundarias y contralaterales también participan en la reorganización funcional."
      }
    },
    {
      text: {
        pt: "Estímulos intensivos após 1 ano não promovem mais ganhos funcionais",
        en: "Intensive stimulation after 1 year no longer promotes functional gains",
        es: "Los estímulos intensivos después de 1 año ya no promueven mejoras funcionales"
      },
      explanation: {
        pt: "Neuroplasticidade pode ocorrer mesmo em fases tardias, embora em menor intensidade.",
        en: "Plasticity may still occur later, though at lower intensity.",
        es: "La plasticidad puede ocurrir incluso en fases tardías, aunque con menor intensidad."
      }
    },
    {
      text: {
        pt: "O uso de sedação contínua favorece plasticidade compensatória",
        en: "Continuous sedation favors compensatory plasticity",
        es: "La sedación continua favorece la plasticidad compensatoria"
      },
      explanation: {
        pt: "Sedação prolongada reduz estímulos e pode limitar reorganização funcional.",
        en: "Prolonged sedation reduces stimuli and may impair reorganization.",
        es: "La sedación prolongada reduce los estímulos y puede limitar la reorganización funcional."
      }
    }
  ]
},
{
  id: 216,
  code: "neuro02-q216",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["status epilepticus", "refractory seizures", "sedation", "neurocritical care", "icu management"],
  level: "moderate",
  correct: 2,
  question: {
    pt: "Paciente de 29 anos com epilepsia estrutural desenvolve status epilepticus generalizado. Após falha de benzodiazepínicos e levetiracetam, recebe fenitoína IV e ainda convulsiona. Está intubado e sedado. Qual é a próxima conduta mais apropriada?",
    en: "A 29-year-old patient with structural epilepsy develops generalized status epilepticus. After failure of benzodiazepines and IV levetiracetam, phenytoin is administered but seizures continue. He is intubated and sedated. What is the most appropriate next step?",
    es: "Un paciente de 29 años con epilepsia estructural desarrolla estatus epiléptico generalizado. Tras falla de benzodiacepinas y levetiracetam, se administra fenitoína IV pero persisten las crisis. Está intubado y sedado. ¿Cuál es el siguiente paso más adecuado?"
  },
  options: [
    {
      text: {
        pt: "Aguardar 30 minutos para nova avaliação clínica",
        en: "Wait 30 minutes for reassessment",
        es: "Esperar 30 minutos para reevaluar"
      },
      explanation: {
        pt: "Em status refratário, atrasos na sedação contínua aumentam o risco de lesão cerebral.",
        en: "In refractory status, delay in continuous sedation increases brain injury risk.",
        es: "En estatus refractario, demorar en la sedación continua aumenta el riesgo de daño cerebral."
      }
    },
    {
      text: {
        pt: "Iniciar nova dose de fenitoína",
        en: "Start another dose of phenytoin",
        es: "Administrar otra dosis de fenitoína"
      },
      explanation: {
        pt: "Repetição de fenitoína sem efeito clínico prévio é de benefício limitado e risco de toxicidade.",
        en: "Repeating phenytoin without prior effect has limited benefit and toxicity risk.",
        es: "Repetir fenitoína sin efecto previo tiene beneficio limitado y riesgo de toxicidad."
      }
    },
    {
      text: {
        pt: "Iniciar sedação contínua com midazolam ou propofol",
        en: "Initiate continuous sedation with midazolam or propofol",
        es: "Iniciar sedación continua con midazolam o propofol"
      },
      explanation: {
        pt: "Status refratário exige anestesia contínua com monitorização por EEG.",
        en: "Refractory status requires continuous anesthesia and EEG monitoring.",
        es: "El estatus refractario requiere anestesia continua y monitoreo por EEG."
      }
    },
    {
      text: {
        pt: "Iniciar hiperventilação terapêutica",
        en: "Start therapeutic hyperventilation",
        es: "Iniciar hiperventilación terapéutica"
      },
      explanation: {
        pt: "Hiperventilação não trata status epilepticus e não é indicada nesse context.",
        en: "Hyperventilation does not treat SE and is not indicated here.",
        es: "La hiperventilación no trata el estatus epiléptico y no está indicada aquí."
      }
    }
  ]
},
{
  id: 217,
  code: "neuro02-q217",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["traumatic brain injury", "subdural hematoma", "surgical criteria", "neurosurgery", "neuroimaging"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Homem de 72 anos é admitido após queda da própria altura com GCS 14. TC de crânio mostra hematoma subdural agudo de 12 mm de espessura e desvio de linha média de 7 mm. Está hemodinamicamente estável, mas sonolento. Qual a conduta mais apropriada?",
    en: "A 72-year-old man is admitted after a fall, GCS 14. Head CT reveals an acute subdural hematoma measuring 12 mm with 7 mm midline shift. He is hemodynamically stable but drowsy. What is the most appropriate management?",
    es: "Un hombre de 72 años ingresa tras una caída, GCS 14. La TC craneal muestra hematoma subdural agudo de 12 mm con desviación de línea media de 7 mm. Está hemodinámicamente estable pero somnoliento. ¿Cuál es la conducta más adecuada?"
  },
  options: [
    {
      text: {
        pt: "Indicar evacuação cirúrgica urgente",
        en: "Indicate urgent surgical evacuation",
        es: "Indicar evacuación quirúrgica urgente"
      },
      explanation: {
        pt: "Hematoma >10 mm e desvio >5 mm são critérios clássicos para intervenção cirúrgica, independentemente do GCS.",
        en: "Hematoma >10 mm and shift >5 mm are classic surgical criteria, regardless of GCS.",
        es: "Hematoma >10 mm y desviación >5 mm son criterios quirúrgicos clásicos, incluso con GCS alto."
      }
    },
    {
      text: {
        pt: "Manter em observação clínica com controle pressórico rigoroso",
        en: "Monitor clinically with strict BP control",
        es: "Observar clínicamente con control estricto de la PA"
      },
      explanation: {
        pt: "Embora importante, não substitui intervenção quando critérios cirúrgicos estão presentes.",
        en: "Important, but does not replace surgery when criteria are met.",
        es: "Importante, pero no sustituye la cirugía cuando se cumplen criterios."
      }
    },
    {
      text: {
        pt: "Alta precoce com vigilância ambulatorial",
        en: "Early discharge with outpatient monitoring",
        es: "Alta temprana con seguimiento ambulatorio"
      },
      explanation: {
        pt: "Contraindicado em hematomas com desvio e sintomas neurológicos.",
        en: "Contraindicated in hematomas with shift and symptoms.",
        es: "Contraindicado en hematomas con desviación y síntomas."
      }
    },
    {
      text: {
        pt: "Administrar anticonvulsivante e repetir TC em 72 horas",
        en: "Start anticonvulsant and repeat CT in 72h",
        es: "Iniciar anticonvulsivo y repetir TC en 72h"
      },
      explanation: {
        pt: "Pode ser complementar, mas não substitui evacuação quando indicada.",
        en: "May complement care but does not replace surgery when indicated.",
        es: "Puede complementar el manejo pero no sustituye la cirugía cuando está indicada."
      }
    }
  ]
},
{
  id: 218,
  code: "neuro02-q218",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["postoperative care", "craniotomy", "neuromonitoring", "sedation", "infection prevention"],
  level: "moderate",
  correct: 1,
  question: {
    pt: "Paciente de 55 anos no pós-operatório imediato de craniotomia para remoção de tumor frontal. Está hemodinamicamente estável, com DVE mantida fechada e sedado com propofol. Qual das estratégias abaixo é mais adequada nas primeiras 24h?",
    en: "A 55-year-old patient is in the immediate postoperative period after craniotomy for frontal tumor removal. Hemodynamically stable, EVD closed, sedated with propofol. Which of the following is most appropriate in the first 24h?",
    es: "Un paciente de 55 años se encuentra en el postoperatorio inmediato tras craneotomía para resección de tumor frontal. Estable hemodinámicamente, DVE cerrada, sedado con propofol. ¿Cuál estrategia es más adecuada en las primeras 24h?"
  },
  options: [
    {
      text: {
        pt: "Manter sedação profunda por 48h e evitar qualquer estímulo",
        en: "Maintain deep sedation for 48h and avoid any stimulation",
        es: "Mantener sedación profunda por 48h y evitar cualquier estímulo"
      },
      explanation: {
        pt: "Sedação prolongada pode atrasar detecção de deterioração neurológica.",
        en: "Prolonged sedation may delay detection of neurological worsening.",
        es: "La sedación prolongada puede retrasar la detección de deterioro neurológico."
      }
    },
    {
      text: {
        pt: "Realizar despertar neurológico precoce com vigilância da PIC e sinais de infecção",
        en: "Perform early neurological awakening with ICP and infection monitoring",
        es: "Realizar despertar neurológico precoz con monitoreo de PIC e infección"
      },
      explanation: {
        pt: "Despertar precoce permite avaliação neurológica; vigilância da PIC e prevenção de infecção são essenciais.",
        en: "Early awakening enables neuro exam; ICP and infection monitoring are essential.",
        es: "El despertar precoz permite evaluación neurológica; monitoreo de PIC e infección es esencial."
      }
    },
    {
      text: {
        pt: "Manter pressão arterial média > 120 mmHg para garantir perfusão",
        en: "Maintain MAP > 120 mmHg to ensure perfusion",
        es: "Mantener PAM > 120 mmHg para asegurar perfusión"
      },
      explanation: {
        pt: "PAM excessiva pode elevar a PIC; ideal é manter perfusão cerebral alvo com PPC adequada.",
        en: "Excessive MAP may increase ICP; better to target adequate CPP.",
        es: "PAM excesiva puede elevar la PIC; lo ideal es asegurar PPC adecuada."
      }
    },
    {
      text: {
        pt: "Iniciar antibioticoterapia empírica de amplo espectro imediatamente",
        en: "Start broad-spectrum empiric antibiotics immediately",
        es: "Iniciar antibióticos empíricos de amplio espectro inmediatamente"
      },
      explanation: {
        pt: "Profilaxia antibiótica cirúrgica deve ser limitada e dirigida; uso empírico imediato sem sinais de infecção é desnecessário.",
        en: "Surgical prophylaxis should be targeted; immediate empiric antibiotics without infection signs is unnecessary.",
        es: "La profilaxis antibiótica quirúrgica debe ser dirigida; uso empírico inmediato sin signos de infección es innecesario."
      }
    }
  ]
},
{
  id: 219,
  code: "neuro02-q219",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["delirium", "prevention", "icu care", "nonpharmacological strategies", "neurology"],
  level: "moderate",
  correct: 0,
  question: {
    pt: "Paciente de 68 anos com AVC hemorrágico está internado há 4 dias em UTI neuro com rebaixamento flutuante da consciência, sono fragmentado e agitação noturna. Qual das medidas abaixo é mais apropriada para prevenção e reversão precoce de delirium?",
    en: "A 68-year-old patient with hemorrhagic stroke is on day 4 of neuro ICU stay, showing fluctuating consciousness, fragmented sleep, and nighttime agitation. Which measure is most appropriate to prevent and reverse early delirium?",
    es: "Un paciente de 68 años con ictus hemorrágico lleva 4 días en UCI neuro, con conciencia fluctuante, sueño fragmentado y agitación nocturna. ¿Qué medida es más adecuada para prevenir y revertir el delirio precoz?"
  },
  options: [
    {
      text: {
        pt: "Estabelecer ciclos claros de sono-vigília, reorientação frequente e mobilização precoce",
        en: "Establish clear sleep-wake cycles, frequent reorientation, and early mobilization",
        es: "Establecer ciclos claros de sueño-vigilia, reorientación frecuente y movilización precoz"
      },
      explanation: {
        pt: "Essas são medidas não farmacológicas de primeira linha e com maior evidência na prevenção do delirium.",
        en: "These are first-line non-pharmacologic strategies with strong evidence in delirium prevention.",
        es: "Son estrategias no farmacológicas de primera línea con buena evidencia para prevenir el delirio."
      }
    },
    {
      text: {
        pt: "Aumentar a sedação com benzodiazepínicos e restringir visitas",
        en: "Increase sedation with benzodiazepines and restrict visits",
        es: "Aumentar sedación con benzodiacepinas y restringir visitas"
      },
      explanation: {
        pt: "Sedação e isolamento social agravam o risco de delirium, especialmente em idosos.",
        en: "Sedation and isolation increase delirium risk, especially in elderly patients.",
        es: "La sedación y el aislamiento aumentan el riesgo de delirio, especialmente en ancianos."
      }
    },
    {
      text: {
        pt: "Manter luz acesa 24h para monitoramento contínuo",
        en: "Keep lights on 24h for continuous monitoring",
        es: "Mantener la luz encendida 24h para monitoreo continuo"
      },
      explanation: {
        pt: "Ambientes com iluminação contínua desregulam o ciclo circadiano e favorecem delirium.",
        en: "Continuous lighting disrupts circadian rhythm and increases delirium risk.",
        es: "La iluminación continua altera el ritmo circadiano y favorece el delirio."
      }
    },
    {
      text: {
        pt: "Administrar haloperidol preventivamente todas as noites",
        en: "Administer haloperidol prophylactically every night",
        es: "Administrar haloperidol profiláctico cada noche"
      },
      explanation: {
        pt: "Não há evidência para uso profilático de antipsicóticos em delirium; pode haver efeitos adversos.",
        en: "No evidence supports prophylactic antipsychotics for delirium; may cause harm.",
        es: "No hay evidencia que respalde antipsicóticos profilácticos; pueden causar daño."
      }
    }
  ]
},
{
  id: 220,
  code: "neuro02-q220",
  areas: ["neuro+icu", "neuro", "icu", "medicine"],
  topics: ["therapeutic hypothermia", "cardiac arrest", "brain protection", "postresuscitation care", "hypothermia complications"],
  level: "moderate",
  correct: 3,
  question: {
    pt: "Paciente de 59 anos com PCR extra-hospitalar por FV é ressuscitado em 8 minutos. Está em coma (Glasgow 3) e hemodinamicamente estável. TC de crânio sem lesões. Qual é a conduta mais adequada em relação à hipotermia terapêutica?",
    en: "A 59-year-old patient suffers an out-of-hospital cardiac arrest due to VF, resuscitated in 8 minutes. He is comatose (GCS 3) and hemodynamically stable. Brain CT is normal. What is the most appropriate approach regarding therapeutic hypothermia?",
    es: "Un paciente de 59 años sufre paro cardíaco extrahospitalario por FV, reanimado en 8 minutos. Está en coma (GCS 3) y estable hemodinámicamente. La TC craneal es normal. ¿Cuál es la conducta más apropiada respecto a la hipotermia terapéutica?"
  },
  options: [
    {
      text: {
        pt: "Indicar hipotermia a 28 °C por 48 horas para máxima proteção cerebral",
        en: "Induce hypothermia to 28 °C for 48 hours for maximal brain protection",
        es: "Inducir hipotermia a 28 °C durante 48 horas para máxima protección cerebral"
      },
      explanation: {
        pt: "Temperaturas tão baixas aumentam risco de arritmias e coagulopatias; não são recomendadas.",
        en: "Such low temperatures increase risk of arrhythmias and coagulopathy; not recommended.",
        es: "Temperaturas tan bajas aumentan el riesgo de arritmias y coagulopatías; no se recomiendan."
      }
    },
    {
      text: {
        pt: "Contraindicada por ausência de lesão cerebral estrutural",
        en: "Contraindicated due to absence of structural brain injury",
        es: "Contraindicada por ausencia de lesión cerebral estructural"
      },
      explanation: {
        pt: "Hipotermia é indicada com base no coma pós-PCR, independentemente de lesão à TC.",
        en: "Hypothermia is indicated for comatose patients post-ROSC, regardless of CT findings.",
        es: "La hipotermia está indicada en pacientes comatosos tras paro, independientemente de la TC."
      }
    },
    {
      text: {
        pt: "Manter temperatura elevada para otimizar perfusão cerebral",
        en: "Maintain elevated temperature to optimize brain perfusion",
        es: "Mantener temperatura elevada para optimizar perfusión cerebral"
      },
      explanation: {
        pt: "Hipotermia (ou normotermia rigorosa) visa reduzir demanda metabólica cerebral, não aumentá-la.",
        en: "Hypothermia (or strict normothermia) aims to reduce cerebral metabolic demand, not increase it.",
        es: "La hipotermia (o normotermia estricta) busca reducir la demanda metabólica cerebral, no aumentarla."
      }
    },
    {
      text: {
        pt: "Iniciar controle de temperatura com alvo entre 32 e 36 °C por 24 horas",
        en: "Initiate temperature control targeting 32–36 °C for 24 hours",
        es: "Iniciar control térmico con objetivo de 32–36 °C durante 24 horas"
      },
      explanation: {
        pt: "Conforme diretrizes atuais (TTM2), manter alvo entre 32–36 °C por 24h melhora desfechos neurológicos.",
        en: "According to current guidelines (TTM2), target 32–36 °C for 24h improves neurological outcomes.",
        es: "Según guías actuales (TTM2), mantener 32–36 °C durante 24h mejora el pronóstico neurológico."
      }
    }
  ]
},

];

questionBank.addBank(bancoNeuromoderate);
