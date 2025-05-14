const bancoNeuroFacil = [
  {
  id: 101,
  codigo: "neuro01-q101",
  area: "neurointensivismo",
  topic: ["coma", "glasgow coma scale"],
  nivel: "facil",
  correta: 0,
  pergunta: {
    pt: "Qual é o valor mínimo possível na Escala de Coma de Glasgow?",
    en: "What is the minimum possible score on the Glasgow Coma Scale?",
    es: "¿Cuál es la puntuación mínima posible en la Escala de Coma de Glasgow?"
  },
  alternativas: [
    {
      texto: {
        pt: "3",
        en: "3",
        es: "3"
      },
      explicacao: {
        pt: "O menor escore é 3, indicando ausência total de resposta ocular, verbal e motora.",
        en: "The lowest score is 3, indicating no eye, verbal or motor response.",
        es: "La puntuación más baja es 3, lo que indica ausencia total de respuesta ocular, verbal y motora."
      }
    },
    {
      texto: {
        pt: "0",
        en: "0",
        es: "0"
      },
      explicacao: {
        pt: "A escala vai de 3 a 15, não inclui 0.",
        en: "The scale ranges from 3 to 15 and does not include 0.",
        es: "La escala va de 3 a 15 y no incluye el 0."
      }
    },
    {
      texto: {
        pt: "1",
        en: "1",
        es: "1"
      },
      explicacao: {
        pt: "1 é o menor valor por item, mas o total mínimo é 3.",
        en: "1 is the minimum per item, but the total minimum is 3.",
        es: "1 es el valor mínimo por ítem, pero el total mínimo es 3."
      }
    },
    {
      texto: {
        pt: "5",
        en: "5",
        es: "5"
      },
      explicacao: {
        pt: "5 é um escore intermediário para resposta verbal.",
        en: "5 is a mid-level score for verbal response.",
        es: "5 es una puntuación intermedia para la respuesta verbal."
      }
    }
  ]
},
{
  id: 102,
  codigo: "neuro01-q102",
  area: "neurointensivismo",
  topic: ["seizure", "first aid"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Qual atitude é apropriada durante uma convulsão tônico-clônica generalizada?",
    en: "What is an appropriate action during a generalized tonic-clonic seizure?",
    es: "¿Qué acción es apropiada durante una convulsión tónico-clónica generalizada?"
  },
  alternativas: [
    {
      texto: {
        pt: "Conter os movimentos da pessoa",
        en: "Restrain the person's movements",
        es: "Restringir los movimientos de la persona"
      },
      explicacao: {
        pt: "Conter movimentos pode causar lesões. Deve-se evitar.",
        en: "Restraining movements can cause injury. It should be avoided.",
        es: "Restringir los movimientos puede causar lesiones. Debe evitarse."
      }
    },
    {
      texto: {
        pt: "Proteger a cabeça da pessoa com algo macio",
        en: "Protect the person's head with something soft",
        es: "Proteger la cabeza de la persona con algo suave"
      },
      explicacao: {
        pt: "Proteger a cabeça ajuda a prevenir traumatismos durante a crise.",
        en: "Protecting the head helps prevent trauma during the seizure.",
        es: "Proteger la cabeza ayuda a prevenir traumatismos durante la crisis."
      }
    },
    {
      texto: {
        pt: "Introduzir um objeto na boca",
        en: "Put an object in their mouth",
        es: "Poner un objeto en la boca"
      },
      explicacao: {
        pt: "Não se deve colocar nada na boca durante uma convulsão.",
        en: "You should never put anything in the mouth during a seizure.",
        es: "Nunca se debe poner nada en la boca durante una convulsión."
      }
    },
    {
      texto: {
        pt: "Dar água imediatamente",
        en: "Give water immediately",
        es: "Dar agua inmediatamente"
      },
      explicacao: {
        pt: "Não é seguro dar líquidos durante uma convulsão.",
        en: "It is not safe to give fluids during a seizure.",
        es: "No es seguro dar líquidos durante una convulsión."
      }
    }
  ]
},
  {
  id: 103,
  codigo: "neuro01-q103",
  area: "neurointensivismo",
  topic: ["reflexes", "brainstem"],
  nivel: "facil",
  correta: 2,
  pergunta: {
    pt: "Qual reflexo avalia integridade do tronco cerebral?",
    en: "Which reflex assesses brainstem integrity?",
    es: "¿Qué reflejo evalúa la integridad del tronco encefálico?"
  },
  alternativas: [
    {
      texto: {
        pt: "Reflexo patelar",
        en: "Patellar reflex",
        es: "Reflejo rotuliano"
      },
      explicacao: {
        pt: "É um reflexo medular, não de tronco cerebral.",
        en: "This is a spinal reflex, not a brainstem one.",
        es: "Es un reflejo medular, no del tronco cerebral."
      }
    },
    {
      texto: {
        pt: "Reflexo plantar",
        en: "Plantar reflex",
        es: "Reflejo plantar"
      },
      explicacao: {
        pt: "Avalia tratos corticoespinhais, não diretamente o tronco.",
        en: "Assesses corticospinal tracts, not the brainstem directly.",
        es: "Evalúa los tractos corticoespinales, no directamente el tronco encefálico."
      }
    },
    {
      texto: {
        pt: "Reflexo óculocefálico",
        en: "Oculocephalic reflex",
        es: "Reflejo óculocefálico"
      },
      explicacao: {
        pt: "Avalia tronco cerebral e conexões entre núcleos cranianos.",
        en: "Assesses brainstem and cranial nerve nucleus integrity.",
        es: "Evalúa la integridad del tronco encefálico y los núcleos de nervios craneales."
      }
    },
    {
      texto: {
        pt: "Reflexo de Babinski",
        en: "Babinski reflex",
        es: "Reflejo de Babinski"
      },
      explicacao: {
        pt: "Está mais relacionado com lesões do trato corticoespinhal.",
        en: "More related to corticospinal tract lesions.",
        es: "Más relacionado con lesiones del tracto corticoespinal."
      }
    }
  ]
},
  {
  id: 104,
  codigo: "neuro01-q104",
  area: "neurointensivismo",
  topic: ["temporal lobe", "seizure", "aura"],
  nivel: "facil",
  correta: 3,
  pergunta: {
    pt: "Qual destes sintomas é mais característico de crises epilépticas originadas no lobo temporal?",
    en: "Which of the following symptoms is most characteristic of temporal lobe seizures?",
    es: "¿Cuál de los siguientes síntomas es más característico de las crisis del lóbulo temporal?"
  },
  alternativas: [
    {
      texto: {
        pt: "Fraqueza em um dos membros",
        en: "Weakness in one limb",
        es: "Debilidad en una extremidad"
      },
      explicacao: {
        pt: "Fraqueza é mais comum em crises motoras do lobo frontal ou em AVCs.",
        en: "Weakness is more typical of frontal lobe seizures or strokes.",
        es: "La debilidad es más típica de crisis del lóbulo frontal o accidentes cerebrovasculares."
      }
    },
    {
      texto: {
        pt: "Movimentos de marcha involuntária",
        en: "Involuntary walking movements",
        es: "Movimientos involuntarios de marcha"
      },
      explicacao: {
        pt: "Esse sintoma ocorre mais com crises do lobo frontal.",
        en: "This occurs more commonly in frontal lobe seizures.",
        es: "Esto ocurre más frecuentemente en crisis del lóbulo frontal."
      }
    },
    {
      texto: {
        pt: "Pupilas dilatadas bilateralmente",
        en: "Bilaterally dilated pupils",
        es: "Pupilas dilatadas bilateralmente"
      },
      explicacao: {
        pt: "Miose ou midríase podem ocorrer em diversas condições, mas não são típicas de crises temporais.",
        en: "Pupil changes occur in various conditions but are not specific to temporal lobe seizures.",
        es: "Los cambios pupilares ocurren en varias condiciones, pero no son específicos de las crisis temporales."
      }
    },
    {
      texto: {
        pt: "Sensação de déjà vu ou alucinações olfativas",
        en: "Déjà vu sensation or olfactory hallucinations",
        es: "Sensación de déjà vu o alucinaciones olfativas"
      },
      explicacao: {
        pt: "São sintomas clássicos de aura temporal e indicam origem no lobo temporal.",
        en: "These are classic aura symptoms that suggest a temporal lobe origin.",
        es: "Son síntomas clásicos del aura que indican origen en el lóbulo temporal."
      }
    }
  ]
},
{
  id: 105,
  codigo: "neuro01-q105",
  area: "neurointensivismo",
  topic: ["cranial nerves", "motor exam", "hypoglossal nerve"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Qual é a principal função do nervo hipoglosso (XII)?",
    en: "What is the primary function of the hypoglossal nerve (XII)?",
    es: "¿Cuál es la función principal del nervio hipogloso (XII)?"
  },
  alternativas: [
    {
      texto: {
        pt: "Sensibilidade da língua",
        en: "Tongue sensation",
        es: "Sensibilidad de la lengua"
      },
      explicacao: {
        pt: "A sensibilidade é mediada pelo nervo lingual, ramo do trigêmeo (V).",
        en: "Sensation is mediated by the lingual nerve, a branch of the trigeminal nerve (V).",
        es: "La sensibilidad es mediada por el nervio lingual, rama del nervio trigémino (V)."
      }
    },
    {
      texto: {
        pt: "Movimentos motores da língua",
        en: "Motor movements of the tongue",
        es: "Movimientos motores de la lengua"
      },
      explicacao: {
        pt: "O nervo hipoglosso é responsável pelos movimentos voluntários da língua.",
        en: "The hypoglossal nerve is responsible for voluntary tongue movements.",
        es: "El nervio hipogloso es responsable de los movimientos voluntarios de la lengua."
      }
    },
    {
      texto: {
        pt: "Movimentação dos músculos da mastigação",
        en: "Mastication muscle control",
        es: "Control de los músculos de la masticación"
      },
      explicacao: {
        pt: "A mastigação é controlada pelo nervo trigêmeo (V).",
        en: "Mastication is controlled by the trigeminal nerve (V).",
        es: "La masticación está controlada por el nervio trigémino (V)."
      }
    },
    {
      texto: {
        pt: "Deglutição e reflexo de vômito",
        en: "Swallowing and gag reflex",
        es: "Deglución y reflejo nauseoso"
      },
      explicacao: {
        pt: "Essas funções são controladas pelos nervos glossofaríngeo (IX) e vago (X).",
        en: "These are controlled by the glossopharyngeal (IX) and vagus (X) nerves.",
        es: "Estas funciones están controladas por los nervios glosofaríngeo (IX) y vago (X)."
      }
    }
  ]
},
{
  id: 106,
  codigo: "neuro01-q106",
  area: "neurointensivismo",
  topic: ["pupils", "brain herniation", "neuro exam"],
  nivel: "facil",
  correta: 2,
  pergunta: {
    pt: "Qual achado pupilar é mais sugestivo de herniação uncal?",
    en: "Which pupillary finding is most suggestive of uncal herniation?",
    es: "¿Qué hallazgo pupilar sugiere más una herniación uncal?"
  },
  alternativas: [
    {
      texto: {
        pt: "Pupilas mióticas bilaterais",
        en: "Bilateral miotic pupils",
        es: "Pupilas mióticas bilaterales"
      },
      explicacao: {
        pt: "Miose bilateral é mais comum em lesões pontinas, não uncal.",
        en: "Bilateral miosis is more common in pontine lesions, not uncal.",
        es: "La miosis bilateral es más común en lesiones pontinas, no uncal."
      }
    },
    {
      texto: {
        pt: "Anisocoria discreta reativa",
        en: "Mild reactive anisocoria",
        es: "Anisocoria leve reactiva"
      },
      explicacao: {
        pt: "Anisocoria leve pode ser benigna ou fisiológica.",
        en: "Mild anisocoria may be benign or physiological.",
        es: "La anisocoria leve puede ser benigna o fisiológica."
      }
    },
    {
      texto: {
        pt: "Midríase unilateral fixa",
        en: "Unilateral fixed mydriasis",
        es: "Midriasis unilateral fija"
      },
      explicacao: {
        pt: "É o achado clássico de compressão do III par por herniação uncal.",
        en: "This is the classic sign of oculomotor compression in uncal herniation.",
        es: "Es el signo clásico de compresión del III par en herniación uncal."
      }
    },
    {
      texto: {
        pt: "Pupilas isocóricas reativas",
        en: "Isocoric reactive pupils",
        es: "Pupilas isocóricas reactivas"
      },
      explicacao: {
        pt: "Pupilas reativas bilaterais são geralmente normais.",
        en: "Bilateral reactive pupils are usually normal.",
        es: "Las pupilas reactivas bilaterales suelen ser normales."
      }
    }
  ]
},
{
  id: 107,
  codigo: "neuro01-q107",
  area: "neurointensivismo",
  topic: ["delirium", "icu care", "neurobehavior", "prevention"],
  nivel: "facil",
  correta: 0,
  pergunta: {
    pt: "Qual das seguintes estratégias ajuda na prevenção do delirium em UTI?",
    en: "Which of the following strategies helps prevent delirium in the ICU?",
    es: "¿Cuál de las siguientes estrategias ayuda a prevenir el delirio en UCI?"
  },
  alternativas: [
    {
      texto: {
        pt: "Evitar uso excessivo de benzodiazepínicos",
        en: "Avoid excessive use of benzodiazepines",
        es: "Evitar el uso excesivo de benzodiacepinas"
      },
      explicacao: {
        pt: "Benzodiazepínicos estão associados ao aumento de risco de delirium.",
        en: "Benzodiazepines are associated with increased delirium risk.",
        es: "Las benzodiacepinas se asocian a mayor riesgo de delirio."
      }
    },
    {
      texto: {
        pt: "Manter o paciente em jejum prolongado",
        en: "Keep the patient fasting for extended periods",
        es: "Mantener al paciente en ayuno prolongado"
      },
      explicacao: {
        pt: "Jejum prolongado não previne delirium e pode agravar o quadro clínico.",
        en: "Prolonged fasting does not prevent delirium and may worsen the condition.",
        es: "El ayuno prolongado no previene el delirio y puede empeorar la condición."
      }
    },
    {
      texto: {
        pt: "Evitar mobilização precoce",
        en: "Avoid early mobilization",
        es: "Evitar la movilización precoz"
      },
      explicacao: {
        pt: "Mobilização precoce é benéfica e ajuda a prevenir delirium.",
        en: "Early mobilization is beneficial and helps prevent delirium.",
        es: "La movilización precoz es beneficiosa y previene el delirio."
      }
    },
    {
      texto: {
        pt: "Reduzir ciclos sono-vigília",
        en: "Reduce sleep-wake cycles",
        es: "Reducir los ciclos sueño-vigilia"
      },
      explicacao: {
        pt: "Manter ciclos sono-vigília regulares é fundamental para prevenir delirium.",
        en: "Maintaining regular sleep-wake cycles is key to preventing delirium.",
        es: "Mantener los ciclos sueño-vigilia regulares es clave para prevenir el delirio."
      }
    }
  ]
},
{
  id: 106,
  codigo: "neuro01-q106",
  area: "neurointensivismo",
  topic: ["doppler", "vasospasm", "monitoring", "saeh", "transcranial doppler"],
  nivel: "facil",
  correta: 3,
  pergunta: {
    pt: "O Doppler Transcraniano (TCD) é especialmente útil na UTI para detectar qual complicação em pacientes com hemorragia subaracnóidea?",
    en: "Transcranial Doppler (TCD) is especially useful in the ICU to detect which complication in patients with subarachnoid hemorrhage?",
    es: "¿Para qué complicación es especialmente útil el Doppler Transcraneal (DTC) en pacientes con hemorragia subaracnoidea?"
  },
  alternativas: [
    {
      texto: {
        pt: "Hidrocefalia obstrutiva",
        en: "Obstructive hydrocephalus",
        es: "Hidrocefalia obstructiva"
      },
      explicacao: {
        pt: "O TCD não é o método ideal para avaliar hidrocefalia.",
        en: "TCD is not the ideal method to assess hydrocephalus.",
        es: "El DTC no es el método ideal para valorar hidrocefalia."
      }
    },
    {
      texto: {
        pt: "Hérnia cerebral",
        en: "Brain herniation",
        es: "Herniación cerebral"
      },
      explicacao: {
        pt: "A herniação é melhor avaliada por exame clínico e tomografia.",
        en: "Herniation is best assessed clinically and with CT imaging.",
        es: "La herniación se evalúa mejor clínicamente y con TC."
      }
    },
    {
      texto: {
        pt: "Crise convulsiva subclínica",
        en: "Subclinical seizure",
        es: "Crisis subclínica"
      },
      explicacao: {
        pt: "EEG contínuo é o exame mais apropriado para detectar crises.",
        en: "Continuous EEG is more appropriate to detect seizures.",
        es: "El EEG continuo es más adecuado para detectar crisis."
      }
    },
    {
      texto: {
        pt: "Vasoespasmo cerebral",
        en: "Cerebral vasospasm",
        es: "Vasoespasmo cerebral"
      },
      explicacao: {
        pt: "O TCD é amplamente utilizado para detectar e monitorar vasoespasmo após HSA.",
        en: "TCD is widely used to detect and monitor vasospasm after SAH.",
        es: "El DTC se usa ampliamente para detectar y monitorear vasoespasmo tras HSA."
      }
    }
  ]
},
{
  id: 107,
  codigo: "neuro01-q107",
  area: "neurointensivismo",
  topic: ["vasospasm", "subarachnoid hemorrhage", "neurocomplications", "cerebral ischemia"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Qual é a complicação tardia mais temida após hemorragia subaracnóidea aneurismática?",
    en: "What is the most feared delayed complication after aneurysmal subarachnoid hemorrhage?",
    es: "¿Cuál es la complicación tardía más temida tras una hemorragia subaracnoidea aneurismática?"
  },
  alternativas: [
    {
      texto: {
        pt: "Hidrocefalia aguda",
        en: "Acute hydrocephalus",
        es: "Hidrocefalia aguda"
      },
      explicacao: {
        pt: "É uma complicação precoce e tratável, mas menos temida que o vasoespasmo tardio.",
        en: "It is an early and treatable complication, but less feared than delayed vasospasm.",
        es: "Es una complicación temprana y tratable, pero menos temida que el vasoespasmo tardío."
      }
    },
    {
      texto: {
        pt: "Vasoespasmo cerebral sintomático",
        en: "Symptomatic cerebral vasospasm",
        es: "Vasoespasmo cerebral sintomático"
      },
      explicacao: {
        pt: "Pode levar a isquemia cerebral retardada, sendo a principal causa de morbidade secundária.",
        en: "It can cause delayed cerebral ischemia and is the main cause of secondary morbidity.",
        es: "Puede causar isquemia cerebral tardía y es la principal causa de morbilidad secundaria."
      }
    },
    {
      texto: {
        pt: "Epilepsia de início tardio",
        en: "Late-onset epilepsy",
        es: "Epilepsia de aparición tardía"
      },
      explicacao: {
        pt: "É uma possibilidade, mas ocorre com menor frequência e impacto agudo.",
        en: "It's a possibility but occurs less frequently and with less acute impact.",
        es: "Es posible, pero ocurre con menor frecuencia y menor impacto agudo."
      }
    },
    {
      texto: {
        pt: "Infecção pulmonar secundária",
        en: "Secondary lung infection",
        es: "Infección pulmonar secundaria"
      },
      explicacao: {
        pt: "Complicações infecciosas são comuns em UTI, mas não específicas da HSA.",
        en: "Infectious complications are common in ICU but not specific to SAH.",
        es: "Las complicaciones infecciosas son comunes en UCI, pero no específicas de la HSA."
      }
    }
  ]
},
{
  id: 108,
  codigo: "neuro01-q108",
  area: "neurointensivismo",
  topic: ["cpp", "intracranial pressure", "head trauma", "critical care", "cerebral autoregulation"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Como se calcula a pressão de perfusão cerebral (PPC)?",
    en: "How is cerebral perfusion pressure (CPP) calculated?",
    es: "¿Cómo se calcula la presión de perfusión cerebral (PPC)?"
  },
  alternativas: [
    {
      texto: {
        pt: "PPC = PAM + PIC",
        en: "CPP = MAP + ICP",
        es: "PPC = PAM + PIC"
      },
      explicacao: {
        pt: "Essa fórmula está incorreta. A PIC deve ser subtraída da PAM.",
        en: "This is incorrect. ICP should be subtracted from MAP.",
        es: "Incorrecta. La PIC se debe restar de la PAM."
      }
    },
    {
      texto: {
        pt: "PPC = PAM - PIC",
        en: "CPP = MAP - ICP",
        es: "PPC = PAM - PIC"
      },
      explicacao: {
        pt: "Essa é a fórmula correta: PPC = pressão arterial média menos pressão intracraniana.",
        en: "This is the correct formula: CPP = mean arterial pressure minus intracranial pressure.",
        es: "Fórmula correcta: PPC = presión arterial media menos presión intracraneal."
      }
    },
    {
      texto: {
        pt: "PPC = PAM x frequência cardíaca",
        en: "CPP = MAP x heart rate",
        es: "PPC = PAM x frecuencia cardíaca"
      },
      explicacao: {
        pt: "Essa fórmula não tem fundamento fisiológico no contexto da PPC.",
        en: "This formula has no physiological basis for CPP.",
        es: "No tiene base fisiológica para PPC."
      }
    },
    {
      texto: {
        pt: "PPC = Pressão arterial sistólica - PIC",
        en: "CPP = Systolic blood pressure - ICP",
        es: "PPC = Presión arterial sistólica - PIC"
      },
      explicacao: {
        pt: "A pressão arterial média (e não a sistólica) deve ser usada na equação.",
        en: "Mean arterial pressure (not systolic) should be used in the equation.",
        es: "Se debe usar la presión arterial media, no la sistólica."
      }
    }
  ]
},
{
  id: 109,
  codigo: "neuro01-q109",
  area: "neurointensivismo",
  topic: ["sedation", "rass", "icu monitoring", "consciousness", "neurointensive care"],
  nivel: "facil",
  correta: 0,
  pergunta: {
    pt: "Na escala RASS, o que significa uma pontuação de -5?",
    en: "In the RASS scale, what does a score of -5 indicate?",
    es: "En la escala RASS, ¿qué indica una puntuación de -5?"
  },
  alternativas: [
    {
      texto: {
        pt: "Paciente não desperta e não responde a estímulos verbais ou físicos",
        en: "Patient does not wake up and does not respond to verbal or physical stimuli",
        es: "El paciente no despierta ni responde a estímulos verbales ni físicos"
      },
      explicacao: {
        pt: "Pontuação -5 corresponde a sedação profunda, sem qualquer resposta a estímulos.",
        en: "-5 corresponds to deep sedation with no response to any stimulus.",
        es: "-5 corresponde a sedación profunda sin respuesta a ningún estímulo."
      }
    },
    {
      texto: {
        pt: "Paciente alerta e calmo",
        en: "Patient is alert and calm",
        es: "Paciente alerta y tranquilo"
      },
      explicacao: {
        pt: "Essa descrição corresponde à pontuação 0 na escala RASS.",
        en: "This corresponds to a RASS score of 0.",
        es: "Esto corresponde a una puntuación de 0 en la escala RASS."
      }
    },
    {
      texto: {
        pt: "Paciente agitado, agressivo e perigoso para si ou para a equipe",
        en: "Patient is agitated, aggressive, and dangerous to self or staff",
        es: "Paciente agitado, agresivo y peligroso para sí mismo o el personal"
      },
      explicacao: {
        pt: "Essa é a definição de RASS +4 (máxima agitação).",
        en: "That describes a RASS score of +4 (maximum agitation).",
        es: "Esto describe una puntuación RASS de +4 (agitación máxima)."
      }
    },
    {
      texto: {
        pt: "Paciente sonolento, mas responde ao ser chamado pelo nome",
        en: "Patient is drowsy but responds when called by name",
        es: "Paciente somnoliento pero responde cuando se le llama por su nombre"
      },
      explicacao: {
        pt: "Essa descrição corresponde a RASS -2.",
        en: "This corresponds to RASS -2.",
        es: "Esto corresponde a RASS -2."
      }
    }
  ]
},
{
  id: 110,
  codigo: "neuro01-q110",
  area: "neurointensivismo",
  topic: ["continuous eeg", "seizure detection", "nonconvulsive seizure", "monitoring", "status epilepticus"],
  nivel: "facil",
  correta: 2,
  pergunta: {
    pt: "Qual é a principal indicação do EEG contínuo (cEEG) em pacientes críticos?",
    en: "What is the main indication for continuous EEG (cEEG) in critically ill patients?",
    es: "¿Cuál es la principal indicación del EEG continuo (cEEG) en pacientes críticos?"
  },
  alternativas: [
    {
      texto: {
        pt: "Monitorar nível de sedação em pacientes com RASS -5",
        en: "Monitor sedation level in patients with RASS -5",
        es: "Monitorizar el nivel de sedación en pacientes con RASS -5"
      },
      explicacao: {
        pt: "O RASS é mais indicado para esse fim, não o EEG contínuo.",
        en: "RASS is more appropriate for this purpose, not cEEG.",
        es: "El RASS es más apropiado para este propósito, no el EEG continuo."
      }
    },
    {
      texto: {
        pt: "Avaliar resposta pupilar a estímulos luminosos",
        en: "Assess pupillary response to light stimuli",
        es: "Evaluar la respuesta pupilar a estímulos luminosos"
      },
      explicacao: {
        pt: "A avaliação pupilar é feita clinicamente ou por pupilometria, não por EEG.",
        en: "Pupillary response is assessed clinically or via pupillometry, not EEG.",
        es: "La respuesta pupilar se evalúa clínicamente o con pupilometría, no con EEG."
      }
    },
    {
      texto: {
        pt: "Detectar crises convulsivas não-convulsivas",
        en: "Detect non-convulsive seizures",
        es: "Detectar crisis no convulsivas"
      },
      explicacao: {
        pt: "O cEEG é fundamental para detectar atividade epiléptica subclínica e status não-convulsivo.",
        en: "cEEG is essential to detect subclinical seizure activity and non-convulsive status epilepticus.",
        es: "El cEEG es esencial para detectar actividad epiléptica subclínica y estatus epiléptico no convulsivo."
      }
    },
    {
      texto: {
        pt: "Avaliar função auditiva em pacientes em coma",
        en: "Evaluate auditory function in comatose patients",
        es: "Evaluar la función auditiva en pacientes en coma"
      },
      explicacao: {
        pt: "Essa função é avaliada por potenciais evocados auditivos, não por EEG contínuo.",
        en: "This is assessed using auditory evoked potentials, not cEEG.",
        es: "Esto se evalúa mediante potenciales evocados auditivos, no por EEG continuo."
      }
    }
  ]
},
{
  id: 111,
  codigo: "neuro01-q111",
  area: "neurointensivismo",
  topic: ["stroke", "neurological deficit", "emergency", "facial droop", "FAST scale"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Qual dos sinais abaixo é mais sugestivo de um AVC isquêmico agudo?",
    en: "Which of the following signs is most suggestive of acute ischemic stroke?",
    es: "¿Cuál de los siguientes signos sugiere más un ictus isquémico agudo?"
  },
  alternativas: [
    {
      texto: {
        pt: "Dor torácica súbita",
        en: "Sudden chest pain",
        es: "Dolor torácico súbito"
      },
      explicacao: {
        pt: "Mais compatível com eventos cardíacos do que neurológicos.",
        en: "More consistent with cardiac events than neurological ones.",
        es: "Más compatible con eventos cardíacos que neurológicos."
      }
    },
    {
      texto: {
        pt: "Assimetria facial e fraqueza súbita em um braço",
        en: "Facial asymmetry and sudden weakness in one arm",
        es: "Asimetría facial y debilidad súbita en un brazo"
      },
      explicacao: {
        pt: "São achados clássicos de AVC isquêmico e fazem parte do protocolo FAST.",
        en: "These are classic signs of ischemic stroke and part of the FAST protocol.",
        es: "Son signos clásicos de ictus isquémico e incluidos en el protocolo FAST."
      }
    },
    {
      texto: {
        pt: "Dor abdominal com náuseas",
        en: "Abdominal pain with nausea",
        es: "Dolor abdominal con náuseas"
      },
      explicacao: {
        pt: "Sugere distúrbios gastrointestinais, não AVC.",
        en: "Suggests gastrointestinal issues, not stroke.",
        es: "Sugiere problemas gastrointestinales, no ictus."
      }
    },
    {
      texto: {
        pt: "Prurido generalizado",
        en: "Generalized itching",
        es: "Prurito generalizado"
      },
      explicacao: {
        pt: "Incompatível com manifestação inicial de AVC isquêmico.",
        en: "Not compatible with initial ischemic stroke presentation.",
        es: "Incompatible con la presentación inicial de un ictus isquémico."
      }
    }
  ]
},
{
  id: 112,
  codigo: "neuro01-q112",
  area: "neurointensivismo",
  topic: ["neurosurgery", "postoperative care", "craniotomy", "neurological deterioration", "neurointensive care"],
  nivel: "facil",
  correta: 2,
  pergunta: {
    pt: "Qual dos achados abaixo requer investigação urgente no pós-operatório imediato de uma craniotomia?",
    en: "Which of the following findings requires urgent investigation in the immediate postoperative period of a craniotomy?",
    es: "¿Cuál de los siguientes hallazgos requiere investigación urgente tras una craneotomía?"
  },
  alternativas: [
    {
      texto: {
        pt: "Febre baixa no primeiro dia",
        en: "Low-grade fever on the first day",
        es: "Fiebre leve en el primer día"
      },
      explicacao: {
        pt: "Febre baixa pode ser resposta inflamatória comum no pós-operatório imediato.",
        en: "Low-grade fever is often a common inflammatory response after surgery.",
        es: "La fiebre leve puede ser una respuesta inflamatoria común en el postoperatorio inmediato."
      }
    },
    {
      texto: {
        pt: "Cefaleia leve e localizada",
        en: "Mild localized headache",
        es: "Cefalea leve y localizada"
      },
      explicacao: {
        pt: "Cefaleia leve é esperada após manipulação craniana.",
        en: "Mild headache is expected after cranial manipulation.",
        es: "La cefalea leve es esperada tras la manipulación craneal."
      }
    },
    {
      texto: {
        pt: "Diminuição abrupta do nível de consciência",
        en: "Abrupt decrease in level of consciousness",
        es: "Disminución abrupta del nivel de conciencia"
      },
      explicacao: {
        pt: "Alteração neurológica súbita pode indicar sangramento ou edema e exige avaliação urgente.",
        en: "Sudden neurological change may suggest bleeding or edema and requires urgent evaluation.",
        es: "El cambio neurológico repentino puede indicar sangrado o edema y requiere evaluación urgente."
      }
    },
    {
      texto: {
        pt: "Edema leve em região da incisão",
        en: "Mild swelling at incision site",
        es: "Edema leve en la zona de la incisión"
      },
      explicacao: {
        pt: "Edema local leve é geralmente benigno no pós-operatório.",
        en: "Mild local swelling is usually benign postoperatively.",
        es: "El edema leve local suele ser benigno en el postoperatorio."
      }
    }
  ]
},
{
  id: 113,
  codigo: "neuro01-q113",
  area: "neurointensivismo",
  topic: ["stroke", "blood pressure", "ischemic stroke", "thrombolysis", "acute management"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Em um paciente com AVC isquêmico agudo **sem indicação de trombólise**, qual o valor de PA sistólica geralmente aceito antes de iniciar controle pressórico?",
    en: "In a patient with acute ischemic stroke **not eligible for thrombolysis**, what systolic blood pressure threshold is generally accepted before initiating blood pressure control?",
    es: "En un paciente con ictus isquémico agudo **sin indicación de trombólisis**, ¿cuál es el umbral de presión arterial sistólica generalmente aceptado antes de iniciar el control?"
  },
  alternativas: [
    {
      texto: {
        pt: "PA sistólica acima de 140 mmHg",
        en: "Systolic BP above 140 mmHg",
        es: "Presión sistólica superior a 140 mmHg"
      },
      explicacao: {
        pt: "Valores até 220 mmHg costumam ser tolerados em pacientes sem indicação de trombólise.",
        en: "Levels up to 220 mmHg are often tolerated in patients not eligible for thrombolysis.",
        es: "Se toleran valores de hasta 220 mmHg en pacientes sin trombólisis."
      }
    },
    {
      texto: {
        pt: "PA sistólica acima de 220 mmHg",
        en: "Systolic BP above 220 mmHg",
        es: "Presión sistólica superior a 220 mmHg"
      },
      explicacao: {
        pt: "Esse é o limiar geralmente aceito para iniciar controle em pacientes que **não** receberão trombólise.",
        en: "This is the generally accepted threshold to begin control in patients **not** undergoing thrombolysis.",
        es: "Este es el umbral generalmente aceptado para iniciar control en pacientes **sin** trombólisis."
      }
    },
    {
      texto: {
        pt: "PA sistólica abaixo de 120 mmHg",
        en: "Systolic BP below 120 mmHg",
        es: "Presión sistólica inferior a 120 mmHg"
      },
      explicacao: {
        pt: "Reduções agressivas podem comprometer a perfusão cerebral.",
        en: "Aggressive lowering can compromise cerebral perfusion.",
        es: "La reducción agresiva puede comprometer la perfusión cerebral."
      }
    },
    {
      texto: {
        pt: "PA diastólica acima de 80 mmHg",
        en: "Diastolic BP above 80 mmHg",
        es: "Presión diastólica superior a 80 mmHg"
      },
      explicacao: {
        pt: "Esse valor não é usado isoladamente como critério para controle no AVC isquêmico.",
        en: "This value is not used alone to guide control in ischemic stroke.",
        es: "Este valor no se usa de forma aislada para guiar el control en ictus isquémico."
      }
    }
  ]
},
{
  id: 114,
  codigo: "neuro01-q114",
  area: "neurointensivismo",
  topic: ["venous thromboembolism", "neurosurgery", "prophylaxis", "anticoagulation", "mechanical prophylaxis"],
  nivel: "facil",
  correta: 0,
  pergunta: {
    pt: "Qual das estratégias abaixo é recomendada para reduzir o risco de trombose venosa em pacientes no pós-operatório de neurocirurgia?",
    en: "Which of the following strategies is recommended to reduce the risk of venous thrombosis in postoperative neurosurgical patients?",
    es: "¿Qué estrategia se recomienda para reducir el riesgo de trombosis venosa en pacientes postoperatorios de neurocirugía?"
  },
  alternativas: [
    {
      texto: {
        pt: "Uso de compressão pneumática intermitente desde o pós-operatório imediato",
        en: "Use of intermittent pneumatic compression from the immediate postoperative period",
        es: "Uso de compresión neumática intermitente desde el postoperatorio inmediato"
      },
      explicacao: {
        pt: "Método seguro e eficaz que pode ser iniciado precocemente, mesmo antes de anticoagulação.",
        en: "Safe and effective method that can be started early, even before anticoagulation.",
        es: "Método seguro y eficaz que puede iniciarse precozmente, incluso antes de anticoagular."
      }
    },
    {
      texto: {
        pt: "Início imediato de heparina plena após cirurgia intracraniana",
        en: "Immediate initiation of full-dose heparin after intracranial surgery",
        es: "Inicio inmediato de heparina plena tras cirugía intracraneal"
      },
      explicacao: {
        pt: "Contraindicado devido ao risco de sangramento intracraniano.",
        en: "Contraindicated due to risk of intracranial bleeding.",
        es: "Contraindicado por el riesgo de sangrado intracraneal."
      }
    },
    {
      texto: {
        pt: "Uso rotineiro de aspirina em altas doses",
        en: "Routine use of high-dose aspirin",
        es: "Uso rutinario de aspirina en dosis altas"
      },
      explicacao: {
        pt: "A aspirina não é primeira escolha na profilaxia venosa nesse contexto.",
        en: "Aspirin is not first-line for venous prophylaxis in this setting.",
        es: "La aspirina no es de primera línea para la profilaxis venosa en este contexto."
      }
    },
    {
      texto: {
        pt: "Evitar qualquer forma de profilaxia nas primeiras 72h",
        en: "Avoid all forms of prophylaxis during the first 72h",
        es: "Evitar toda forma de profilaxis durante las primeras 72h"
      },
      explicacao: {
        pt: "A ausência total de profilaxia aumenta o risco de eventos tromboembólicos precoces.",
        en: "Lack of prophylaxis increases the risk of early thromboembolic events.",
        es: "La ausencia total de profilaxis aumenta el riesgo de eventos tromboembólicos tempranos."
      }
    }
  ]
},
{
  id: 115,
  codigo: "neuro01-q115",
  area: "neurointensivismo",
  topic: ["stroke", "intracerebral hemorrhage", "ischemic stroke", "clinical features", "neurological emergency"],
  nivel: "facil",
  correta: 3,
  pergunta: {
    pt: "Qual característica clínica abaixo é mais sugestiva de um AVC hemorrágico em comparação com um AVC isquêmico?",
    en: "Which clinical feature below is more suggestive of a hemorrhagic stroke compared to an ischemic one?",
    es: "¿Qué característica clínica sugiere más un ictus hemorrágico en comparación con uno isquémico?"
  },
  alternativas: [
    {
      texto: {
        pt: "Déficit neurológico de início insidioso e progressivo",
        en: "Neurological deficit with insidious, progressive onset",
        es: "Déficit neurológico de inicio insidioso y progresivo"
      },
      explicacao: {
        pt: "Quadros isquêmicos podem se instalar de forma mais gradual em alguns casos.",
        en: "Ischemic strokes may sometimes have a more gradual onset.",
        es: "Los ictus isquémicos pueden presentar un inicio más gradual en algunos casos."
      }
    },
    {
      texto: {
        pt: "Afasia isolada em paciente alerta",
        en: "Isolated aphasia in an alert patient",
        es: "Afasia aislada en un paciente alerta"
      },
      explicacao: {
        pt: "Mais típico de AVC isquêmico envolvendo hemisfério dominante.",
        en: "More typical of ischemic stroke involving the dominant hemisphere.",
        es: "Más típico del ictus isquémico del hemisferio dominante."
      }
    },
    {
      texto: {
        pt: "Hemiparesia progressiva ao longo de 24h",
        en: "Progressive hemiparesis over 24h",
        es: "Hemiparesia progresiva durante 24h"
      },
      explicacao: {
        pt: "Esse padrão pode ocorrer em AVC isquêmico em evolução.",
        en: "This pattern may occur in evolving ischemic stroke.",
        es: "Este patrón puede presentarse en un ictus isquémico en evolución."
      }
    },
    {
      texto: {
        pt: "Déficit súbito associado a rebaixamento do nível de consciência e vômitos",
        en: "Sudden deficit associated with decreased consciousness and vomiting",
        es: "Déficit súbito asociado a disminución del nivel de conciencia y vómitos"
      },
      explicacao: {
        pt: "Essa tríade é sugestiva de AVC hemorrágico com aumento da pressão intracraniana.",
        en: "This triad suggests hemorrhagic stroke with raised intracranial pressure.",
        es: "Esta tríada sugiere ictus hemorrágico con hipertensión intracraneal."
      }
    }
  ]
},
{
  id: 116,
  codigo: "neuro01-q116",
  area: "neurointensivismo",
  topic: ["brain death", "neurological exam", "coma", "apnea test", "clinical criteria"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Qual dos achados abaixo é essencial para o diagnóstico clínico de morte encefálica?",
    en: "Which of the following findings is essential for the clinical diagnosis of brain death?",
    es: "¿Cuál de los siguientes hallazgos es esencial para el diagnóstico clínico de muerte encefálica?"
  },
  alternativas: [
    {
      texto: {
        pt: "Presença de reflexo corneano bilateral",
        en: "Presence of bilateral corneal reflex",
        es: "Presencia de reflejo corneal bilateral"
      },
      explicacao: {
        pt: "A presença de reflexos de tronco cerebral exclui morte encefálica.",
        en: "Presence of brainstem reflexes excludes brain death.",
        es: "La presencia de reflejos del tronco encefálico excluye la muerte encefálica."
      }
    },
    {
      texto: {
        pt: "Coma não responsivo com ausência de todos os reflexos de tronco",
        en: "Unresponsive coma with absence of all brainstem reflexes",
        es: "Coma no reactivo con ausencia de todos los reflejos del tronco encefálico"
      },
      explicacao: {
        pt: "É um dos critérios fundamentais para o diagnóstico clínico de morte encefálica.",
        en: "This is a fundamental criterion for clinical brain death diagnosis.",
        es: "Es un criterio fundamental para el diagnóstico clínico de muerte encefálica."
      }
    },
    {
      texto: {
        pt: "Glasgow igual a 3 com resposta motora flexora",
        en: "Glasgow score of 3 with flexor motor response",
        es: "Glasgow de 3 con respuesta motora flexora"
      },
      explicacao: {
        pt: "Resposta motora presente indica função neurológica residual.",
        en: "Motor response indicates residual neurological function.",
        es: "La respuesta motora indica función neurológica residual."
      }
    },
    {
      texto: {
        pt: "Respiração espontânea durante o teste de apneia",
        en: "Spontaneous breathing during apnea test",
        es: "Respiración espontánea durante la prueba de apnea"
      },
      explicacao: {
        pt: "A presença de respiração espontânea invalida o teste de apneia.",
        en: "Spontaneous breathing invalidates the apnea test.",
        es: "La respiración espontánea invalida la prueba de apnea."
      }
    }
  ]
},
{
  id: 117,
  codigo: "neuro01-q117",
  area: "neurointensivismo",
  topic: ["status epilepticus", "seizure", "emergency", "prolonged seizure", "neurology"],
  nivel: "facil",
  correta: 2,
  pergunta: {
    pt: "De acordo com definições atuais, quanto tempo mínimo de atividade convulsiva contínua caracteriza um status epilepticus?",
    en: "According to current definitions, how much continuous seizure activity is required to define status epilepticus?",
    es: "Según las definiciones actuales, ¿cuánto tiempo mínimo de actividad convulsiva continua define un estatus epiléptico?"
  },
  alternativas: [
    {
      texto: {
        pt: "Mais de 1 minuto",
        en: "More than 1 minute",
        es: "Más de 1 minuto"
      },
      explicacao: {
        pt: "Crises únicas podem durar até 1 minuto sem configurar status.",
        en: "Single seizures may last up to 1 minute without being status.",
        es: "Las crisis únicas pueden durar hasta 1 minuto sin ser estatus."
      }
    },
    {
      texto: {
        pt: "Mais de 3 minutos",
        en: "More than 3 minutes",
        es: "Más de 3 minutos"
      },
      explicacao: {
        pt: "Três minutos é limiar impreciso; o consenso é a partir de 5 minutos.",
        en: "Three minutes is not a precise cutoff; consensus uses 5 minutes.",
        es: "Tres minutos no es un punto de corte preciso; el consenso usa 5 minutos."
      }
    },
    {
      texto: {
        pt: "5 minutos ou mais",
        en: "5 minutes or more",
        es: "5 minutos o más"
      },
      explicacao: {
        pt: "Status epilepticus é definido como crise com ≥5 minutos de duração ou crises recorrentes sem recuperação.",
        en: "Status epilepticus is defined as ≥5 minutes of continuous seizure or repeated seizures without recovery.",
        es: "El estatus epiléptico se define como crisis ≥5 minutos o crisis recurrentes sin recuperación."
      }
    },
    {
      texto: {
        pt: "10 minutos ou mais",
        en: "10 minutes or more",
        es: "10 minutos o más"
      },
      explicacao: {
        pt: "Crises prolongadas são graves, mas o ponto de corte para status é ≥5 minutos.",
        en: "Prolonged seizures are serious, but the cutoff for status is ≥5 minutes.",
        es: "Las crisis prolongadas son graves, pero el límite para estatus es ≥5 minutos."
      }
    }
  ]
},
{
  id: 118,
  codigo: "neuro01-q118",
  area: "neurointensivismo",
  topic: ["cerebral autoregulation", "cerebral perfusion", "neurophysiology", "critical care", "intracranial pressure"],
  nivel: "facil",
  correta: 0,
  pergunta: {
    pt: "O que melhor descreve o conceito de autorregulação cerebral?",
    en: "What best describes the concept of cerebral autoregulation?",
    es: "¿Qué describe mejor el concepto de autorregulación cerebral?"
  },
  alternativas: [
    {
      texto: {
        pt: "Capacidade do cérebro de manter fluxo sanguíneo constante apesar de variações moderadas na pressão arterial",
        en: "Brain's ability to maintain constant blood flow despite moderate blood pressure changes",
        es: "Capacidad del cerebro para mantener un flujo sanguíneo constante a pesar de cambios moderados en la presión arterial"
      },
      explicacao: {
        pt: "Esse é o conceito central da autorregulação cerebral fisiológica.",
        en: "This is the core concept of normal cerebral autoregulation.",
        es: "Este es el concepto clave de la autorregulación cerebral fisiológica."
      }
    },
    {
      texto: {
        pt: "Capacidade de alterar o metabolismo cerebral conforme a glicemia",
        en: "Ability to alter cerebral metabolism according to blood glucose",
        es: "Capacidad de modificar el metabolismo cerebral según la glucemia"
      },
      explicacao: {
        pt: "Esse conceito se refere a metabolismo cerebral, não à autorregulação vascular.",
        en: "This refers to cerebral metabolism, not vascular autoregulation.",
        es: "Esto se refiere al metabolismo cerebral, no a la autorregulación vascular."
      }
    },
    {
      texto: {
        pt: "Capacidade do coração de aumentar o débito cardíaco diante de hipóxia cerebral",
        en: "Heart's ability to increase cardiac output during cerebral hypoxia",
        es: "Capacidad del corazón para aumentar el gasto cardíaco durante hipoxia cerebral"
      },
      explicacao: {
        pt: "Esse é um reflexo sistêmico, não autorregulação cerebral local.",
        en: "This is a systemic reflex, not local cerebral autoregulation.",
        es: "Este es un reflejo sistémico, no autorregulación cerebral local."
      }
    },
    {
      texto: {
        pt: "Processo de ventilação mantido espontaneamente mesmo em coma profundo",
        en: "Spontaneous ventilation preserved even in deep coma",
        es: "Ventilación espontánea mantenida incluso en coma profundo"
      },
      explicacao: {
        pt: "Isso envolve centros respiratórios do tronco, não autorregulação vascular.",
        en: "This involves brainstem respiratory centers, not vascular autoregulation.",
        es: "Esto involucra centros respiratorios del tronco, no autorregulación vascular."
      }
    }
  ]
},
{
  id: 119,
  codigo: "neuro01-q119",
  area: "neurointensivismo",
  topic: ["neuroprotection", "traumatic brain injury", "tbi", "critical care", "intracranial hypertension"],
  nivel: "facil",
  correta: 1,
  pergunta: {
    pt: "Qual das seguintes medidas é considerada parte da estratégia de neuroproteção no TCE grave?",
    en: "Which of the following is considered part of the neuroprotective strategy in severe traumatic brain injury?",
    es: "¿Cuál de las siguientes medidas forma parte de la estrategia de neuroprotección en el TCE grave?"
  },
  alternativas: [
    {
      texto: {
        pt: "Hiperventilação rotineira com PaCO₂ < 25 mmHg",
        en: "Routine hyperventilation with PaCO₂ < 25 mmHg",
        es: "Hiperventilación rutinaria con PaCO₂ < 25 mmHg"
      },
      explicacao: {
        pt: "Hiperventilação excessiva pode reduzir o fluxo cerebral e causar isquemia.",
        en: "Excessive hyperventilation may reduce cerebral blood flow and cause ischemia.",
        es: "La hiperventilación excesiva puede reducir el flujo cerebral y causar isquemia."
      }
    },
    {
      texto: {
        pt: "Evitar hipertermia e manter normotermia",
        en: "Avoid hyperthermia and maintain normothermia",
        es: "Evitar la hipertermia y mantener normotermia"
      },
      explicacao: {
        pt: "A normotermia reduz demanda metabólica e risco de lesão neuronal secundária.",
        en: "Normothermia reduces metabolic demand and risk of secondary neuronal injury.",
        es: "La normotermia reduce la demanda metabólica y el riesgo de lesión neuronal secundaria."
      }
    },
    {
      texto: {
        pt: "Permitir hipotensão permissiva para evitar sobrecarga cardíaca",
        en: "Allow permissive hypotension to avoid cardiac overload",
        es: "Permitir hipotensión permisiva para evitar sobrecarga cardíaca"
      },
      explicacao: {
        pt: "A hipotensão agrava a perfusão cerebral e deve ser evitada no TCE.",
        en: "Hypotension worsens cerebral perfusion and should be avoided in TBI.",
        es: "La hipotensión empeora la perfusión cerebral y debe evitarse en el TCE."
      }
    },
    {
      texto: {
        pt: "Administrar solução hipotônica para reduzir PIC",
        en: "Administer hypotonic solution to reduce ICP",
        es: "Administrar solución hipotónica para reducir la PIC"
      },
      explicacao: {
        pt: "Soluções hipotônicas podem piorar o edema cerebral. Usam-se hipertônicas.",
        en: "Hypotonic fluids may worsen cerebral edema. Hypertonic solutions are preferred.",
        es: "Los líquidos hipotónicos pueden empeorar el edema cerebral. Se prefieren hipertónicos."
      }
    }
  ]
},
{
  id: 120,
  codigo: "neuro01-q120",
  area: "neurointensivismo",
  topic: ["pbto2", "brain tissue oxygenation", "monitoring", "cerebral hypoxia", "neurocritical care"],
  nivel: "facil",
  correta: 2,
  pergunta: {
    pt: "Valores persistentemente baixos de pbtO₂ (< 20 mmHg) indicam:",
    en: "Persistently low pbtO₂ values (< 20 mmHg) indicate:",
    es: "Valores persistentemente bajos de pbtO₂ (< 20 mmHg) indican:"
  },
  alternativas: [
    {
      texto: {
        pt: "Função mitocondrial cerebral aumentada",
        en: "Increased cerebral mitochondrial function",
        es: "Mayor función mitocondrial cerebral"
      },
      explicacao: {
        pt: "Baixos valores de pbtO₂ não indicam função aumentada, mas sim déficit de oxigenação.",
        en: "Low pbtO₂ indicates oxygen deficit, not increased mitochondrial function.",
        es: "Valores bajos de pbtO₂ indican déficit de oxígeno, no función mitocondrial aumentada."
      }
    },
    {
      texto: {
        pt: "Pressão intracraniana normal",
        en: "Normal intracranial pressure",
        es: "Presión intracraneal normal"
      },
      explicacao: {
        pt: "Pode haver hipóxia tecidual cerebral mesmo com PIC normal.",
        en: "Cerebral tissue hypoxia can occur even with normal ICP.",
        es: "Puede haber hipoxia cerebral incluso con PIC normal."
      }
    },
    {
      texto: {
        pt: "Hipóxia cerebral tecidual e risco de lesão secundária",
        en: "Cerebral tissue hypoxia and risk of secondary injury",
        es: "Hipoxia cerebral tisular y riesgo de lesión secundaria"
      },
      explicacao: {
        pt: "pbtO₂ < 20 mmHg sugere oxigenação inadequada e risco de lesão cerebral.",
        en: "pbtO₂ < 20 mmHg suggests inadequate oxygenation and risk of brain injury.",
        es: "pbtO₂ < 20 mmHg sugiere oxigenación inadecuada y riesgo de daño cerebral."
      }
    },
    {
      texto: {
        pt: "Melhora da autorregulação cerebral",
        en: "Improved cerebral autoregulation",
        es: "Mejoría de la autorregulación cerebral"
      },
      explicacao: {
        pt: "Baixo pbtO₂ não se associa com melhora de autorregulação, mas sim disfunção perfusional.",
        en: "Low pbtO₂ is not associated with improved autoregulation but with perfusion dysfunction.",
        es: "El pbtO₂ bajo no se asocia a mejor autorregulación sino a disfunción perfusional."
      }
    }
  ]
},

];

bancoQuestoes.adicionarBanco(bancoNeuroFacil);
