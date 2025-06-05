const bancoCardioFacil = [
 {
    id: 501,
    code: "cardio01-q01",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["hemodynamics"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual das seguintes pressões representa melhor a pré-carga do ventrículo esquerdo em um paciente estável?",
      en: "Which of the following pressures best represents the left ventricular preload in a stable patient?",
      es: "¿Cuál de las siguientes presiones representa mejor la precarga del ventrículo izquierdo en un paciente estable?"
    },
    options: [
      {
        text: {
          pt: "Pressão capilar pulmonar (PCP)",
          en: "Pulmonary capillary wedge pressure (PCWP)",
          es: "Presión capilar pulmonar (PCP)"
        },
        explanation: {
          pt: "A PCP é usada como estimativa indireta da pressão de enchimento do átrio esquerdo e, portanto, da pré-carga do ventrículo esquerdo.",
          en: "PCWP is used as an indirect estimate of left atrial filling pressure and hence left ventricular preload.",
          es: "La PCP se utiliza como una estimación indirecta de la presión de llenado de la aurícula izquierda y, por tanto, de la precarga del ventrículo izquierdo."
        }
      },
      {
        text: {
          pt: "Pressão venosa central (PVC)",
          en: "Central venous pressure (CVP)",
          es: "Presión venosa central (PVC)"
        },
        explanation: {
          pt: "A PVC reflete a pressão de enchimento do ventrículo direito, não do esquerdo. Pode ser influenciada por muitos fatores.",
          en: "CVP reflects right ventricular preload, not left. It is influenced by multiple variables.",
          es: "La PVC refleja la precarga del ventrículo derecho, no del izquierdo. Está influenciada por múltiples factores."
        }
      },
      {
        text: {
          pt: "Pressão arterial média (PAM)",
          en: "Mean arterial pressure (MAP)",
          es: "Presión arterial media (PAM)"
        },
        explanation: {
          pt: "A PAM está mais relacionada à pós-carga e à perfusão sistêmica do que à pré-carga ventricular.",
          en: "MAP is more related to afterload and systemic perfusion than to ventricular preload.",
          es: "La PAM se relaciona más con la poscarga y la perfusión sistémica que con la precarga ventricular."
        }
      },
      {
        text: {
          pt: "Pressão de pulso",
          en: "Pulse pressure",
          es: "Presión de pulso"
        },
        explanation: {
          pt: "A pressão de pulso reflete a diferença entre sistólica e diastólica e está mais associada à complacência arterial.",
          en: "Pulse pressure reflects the difference between systolic and diastolic pressure and is associated with arterial compliance.",
          es: "La presión de pulso refleja la diferencia entre presión sistólica y diastólica, asociada a la complacencia arterial."
        }
      }
    ]
  },
  {
    id: 502,
    code: "cardio01-q02",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["circulatory shock"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual dos seguintes sinais clínicos é mais sugestivo de choque circulatório hipovolêmico?",
      en: "Which of the following clinical signs is most suggestive of hypovolemic shock?",
      es: "¿Cuál de los siguientes signos clínicos sugiere más un shock hipovolémico?"
    },
    options: [
      {
        text: {
          pt: "Pressão de pulso aumentada",
          en: "Increased pulse pressure",
          es: "Presión de pulso aumentada"
        },
        explanation: {
          pt: "Choque hipovolêmico geralmente reduz a pressão de pulso devido à queda na pressão sistólica.",
          en: "Hypovolemic shock typically narrows pulse pressure due to falling systolic pressure.",
          es: "El shock hipovolémico típicamente reduce la presión de pulso por caída de la presión sistólica."
        }
      },
      {
        text: {
          pt: "Extremidades frias e tempo de enchimento capilar prolongado",
          en: "Cold extremities and prolonged capillary refill time",
          es: "Extremidades frías y tiempo de llenado capilar prolongado"
        },
        explanation: {
          pt: "São sinais clássicos de má perfusão em choque hipovolêmico e outros tipos de choque com baixo débito.",
          en: "Classic signs of poor perfusion in hypovolemic and other low-output shock types.",
          es: "Signos clásicos de mala perfusión en shock hipovolémico y otros tipos de bajo gasto."
        }
      },
      {
        text: {
          pt: "Sopro holossistólico em foco mitral",
          en: "Holosystolic murmur at mitral focus",
          es: "Soplo holosistólico en foco mitral"
        },
        explanation: {
          pt: "Sugere regurgitação mitral, não diretamente associado ao diagnóstico de choque hipovolêmico.",
          en: "Suggests mitral regurgitation, not directly related to hypovolemic shock diagnosis.",
          es: "Sugiere insuficiencia mitral, no se asocia directamente a shock hipovolémico."
        }
      },
      {
        text: {
          pt: "Edema periférico bilateral",
          en: "Bilateral peripheral edema",
          es: "Edema periférico bilateral"
        },
        explanation: {
          pt: "O edema é mais comum em insuficiência cardíaca crônica ou hepática, não em choque hipovolêmico agudo.",
          en: "Edema is more typical of chronic heart failure or liver disease, not acute hypovolemic shock.",
          es: "El edema es más típico de insuficiencia cardíaca crónica o hepática, no de shock hipovolémico agudo."
        }
      }
    ]
  },
  {
    id: 503,
    code: "cardio01-q03",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["ACLS"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Durante uma parada cardiorrespiratória em ritmo de FV/TV sem pulso, qual é o primeiro passo após confirmar ausência de pulso e iniciar RCP?",
      en: "During a cardiac arrest with pulseless VF/VT, what is the first step after confirming pulselessness and starting CPR?",
      es: "Durante un paro cardíaco con FV/TV sin pulso, ¿cuál es el primer paso tras confirmar ausencia de pulso e iniciar RCP?"
    },
    options: [
      {
        text: {
          pt: "Administrar adrenalina 1 mg IV",
          en: "Administer epinephrine 1 mg IV",
          es: "Administrar epinefrina 1 mg IV"
        },
        explanation: {
          pt: "A adrenalina é recomendada após o segundo choque, não como primeiro passo em FV/TV sem pulso.",
          en: "Epinephrine is recommended after the second shock, not as the first step in VF/VT.",
          es: "La epinefrina se recomienda tras el segundo choque, no como primer paso en FV/TV sin pulso."
        }
      },
      {
        text: {
          pt: "Intubar imediatamente o paciente",
          en: "Immediately intubate the patient",
          es: "Intubar inmediatamente al paciente"
        },
        explanation: {
          pt: "A intubação pode ser postergada enquanto se realizam compressões e desfibrilação prioritária.",
          en: "Intubation can be deferred while focusing on compressions and defibrillation.",
          es: "La intubación puede diferirse mientras se realizan compresiones y desfibrilación."
        }
      },
      {
        text: {
          pt: "Realizar desfibrilação o mais rápido possível",
          en: "Deliver defibrillation as soon as possible",
          es: "Realizar desfibrilación lo antes posible"
        },
        explanation: {
          pt: "A desfibrilação precoce é a medida mais eficaz para FV/TV sem pulso e deve ser priorizada.",
          en: "Early defibrillation is the most effective measure for pulseless VF/VT and should be prioritized.",
          es: "La desfibrilación temprana es la medida más eficaz para FV/TV sin pulso y debe priorizarse."
        }
      },
      {
        text: {
          pt: "Administrar amiodarona 300 mg IV",
          en: "Administer amiodarone 300 mg IV",
          es: "Administrar amiodarona 300 mg IV"
        },
        explanation: {
          pt: "A amiodarona é usada após o terceiro choque em FV/TV sem pulso persistente.",
          en: "Amiodarone is used after the third shock in persistent VF/VT.",
          es: "La amiodarona se utiliza tras el tercer choque en FV/TV persistente."
        }
      }
    ]
  },
  {
    id: 504,
    code: "cardio01-q04",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["vascular access"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual é a principal complicação imediata da punção da artéria femoral para acesso arterial?",
      en: "What is the main immediate complication of femoral artery puncture for arterial access?",
      es: "¿Cuál es la principal complicación inmediata de la punción de la arteria femoral para acceso arterial?"
    },
    options: [
      {
        text: {
          pt: "Hematoma local",
          en: "Local hematoma",
          es: "Hematoma local"
        },
        explanation: {
          pt: "O hematoma é a complicação mais comum e ocorre devido à punção inadvertida ou má compressão após o procedimento.",
          en: "Hematoma is the most common complication, often due to inadvertent puncture or poor post-procedural compression.",
          es: "El hematoma es la complicación más común, generalmente por punción inadvertida o mala compresión posterior."
        }
      },
      {
        text: {
          pt: "Infecção local imediata",
          en: "Immediate local infection",
          es: "Infección local inmediata"
        },
        explanation: {
          pt: "Infecções costumam ocorrer mais tardiamente e não são a principal preocupação imediata.",
          en: "Infections usually occur later and are not the main immediate concern.",
          es: "Las infecciones suelen aparecer más tarde y no son la principal preocupación inmediata."
        }
      },
      {
        text: {
          pt: "Trombose venosa profunda",
          en: "Deep vein thrombosis",
          es: "Trombosis venosa profunda"
        },
        explanation: {
          pt: "A TVP é mais associada a punções venosas, não arteriais.",
          en: "DVT is more associated with venous punctures, not arterial.",
          es: "La TVP se asocia más a punciones venosas que arteriales."
        }
      },
      {
        text: {
          pt: "Pneumotórax",
          en: "Pneumothorax",
          es: "Neumotórax"
        },
        explanation: {
          pt: "Pneumotórax é uma complicação mais comum da punção subclávia ou jugular.",
          en: "Pneumothorax is more commonly associated with subclavian or jugular puncture.",
          es: "El neumotórax es más frecuente con punción subclavia o yugular."
        }
      }
    ]
  },
  {
    id: 505,
    code: "cardio01-q05",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["echocardiography"],
    level: "easy",
    correct: 3,
    question: {
      pt: "Qual das seguintes estruturas cardíacas é melhor visualizada na janela paraesternal longitudinal do ecocardiograma transtorácico?",
      en: "Which of the following cardiac structures is best visualized in the parasternal long-axis transthoracic echo view?",
      es: "¿Cuál de las siguientes estructuras cardíacas se visualiza mejor en la ventana paraesternal longitudinal del ecocardiograma transtorácico?"
    },
    options: [
      {
        text: {
          pt: "Veia cava inferior",
          en: "Inferior vena cava",
          es: "Vena cava inferior"
        },
        explanation: {
          pt: "A VCI é melhor vista na janela subcostal ou subxifoide, não na paraesternal.",
          en: "The IVC is better seen in the subcostal or subxiphoid window, not parasternal.",
          es: "La VCI se observa mejor en la ventana subcostal o subxifoidea, no paraesternal."
        }
      },
      {
        text: {
          pt: "Átrio direito",
          en: "Right atrium",
          es: "Aurícula derecha"
        },
        explanation: {
          pt: "O átrio direito é parcialmente visto em outras janelas, mas não é o foco da paraesternal longitudinal.",
          en: "Right atrium is partially visible in other views but not the focus of the parasternal long-axis view.",
          es: "La aurícula derecha se visualiza parcialmente en otras vistas, pero no es el objetivo de la paraesternal longitudinal."
        }
      },
      {
        text: {
          pt: "Valva tricúspide",
          en: "Tricuspid valve",
          es: "Válvula tricúspide"
        },
        explanation: {
          pt: "A tricúspide é melhor avaliada na janela apical ou subcostal.",
          en: "Tricuspid valve is better assessed in apical or subcostal views.",
          es: "La tricúspide se evalúa mejor en vistas apicales o subcostales."
        }
      },
      {
        text: {
          pt: "Ventrículo esquerdo",
          en: "Left ventricle",
          es: "Ventrículo izquierdo"
        },
        explanation: {
          pt: "A janela paraesternal longitudinal é ideal para avaliação anatômica e funcional do ventrículo esquerdo.",
          en: "The parasternal long-axis view is ideal for anatomical and functional assessment of the left ventricle.",
          es: "La vista paraesternal longitudinal es ideal para evaluar la anatomía y función del ventrículo izquierdo."
        }
      }
    ]
  },
  {
    id: 506,
    code: "cardio01-q06",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["pacemaker"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual das seguintes indicações é considerada válida para implante de marcapasso definitivo?",
      en: "Which of the following is a valid indication for permanent pacemaker implantation?",
      es: "¿Cuál de las siguientes es una indicación válida para el implante de marcapasos definitivo?"
    },
    options: [
      {
        text: {
          pt: "Fibrilação atrial com resposta ventricular rápida",
          en: "Atrial fibrillation with rapid ventricular response",
          es: "Fibrilación auricular con respuesta ventricular rápida"
        },
        explanation: {
          pt: "Essa condição normalmente requer controle da frequência, não marcapasso.",
          en: "This condition usually requires rate control, not pacemaker implantation.",
          es: "Esta condición normalmente requiere control de la frecuencia, no implante de marcapasos."
        }
      },
      {
        text: {
          pt: "Bloqueio atrioventricular de 3º grau sintomático",
          en: "Symptomatic third-degree atrioventricular block",
          es: "Bloqueo auriculoventricular de tercer grado sintomático"
        },
        explanation: {
          pt: "Bloqueio AV completo com sintomas é indicação clássica de marcapasso definitivo.",
          en: "Complete AV block with symptoms is a classic indication for permanent pacemaker.",
          es: "El bloqueo AV completo sintomático es una indicación clásica de marcapasos definitivo."
        }
      },
      {
        text: {
          pt: "Taquicardia ventricular sustentada",
          en: "Sustained ventricular tachycardia",
          es: "Taquicardia ventricular sostenida"
        },
        explanation: {
          pt: "Essa arritmia geralmente indica CDI (cardioversor desfibrilador implantável), não marcapasso.",
          en: "This arrhythmia usually calls for ICD, not a pacemaker.",
          es: "Esta arritmia suele requerir un DAI, no un marcapasos."
        }
      },
      {
        text: {
          pt: "Síndrome de pré-excitação assintomática",
          en: "Asymptomatic pre-excitation syndrome",
          es: "Síndrome de preexcitación asintomática"
        },
        explanation: {
          pt: "Assintomáticos com pré-excitação não são indicados para implante de marcapasso.",
          en: "Asymptomatic pre-excitation is not an indication for pacemaker implantation.",
          es: "La preexcitación asintomática no indica marcapasos."
        }
      }
    ]
  },
  {
    id: 507,
    code: "cardio01-q07",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["IABP"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual é o principal efeito hemodinâmico do balão intra-aórtico (IABP) quando inflado no momento correto?",
      en: "What is the main hemodynamic effect of the intra-aortic balloon pump (IABP) when properly timed?",
      es: "¿Cuál es el principal efecto hemodinámico del balón intraaórtico (IABP) cuando se infla en el momento adecuado?"
    },
    options: [
      {
        text: {
          pt: "Aumento da perfusão coronariana durante a diástole",
          en: "Increased coronary perfusion during diastole",
          es: "Aumento de la perfusión coronaria durante la diástole"
        },
        explanation: {
          pt: "O IABP infla na diástole, aumentando a pressão de perfusão coronariana e melhorando a oxigenação miocárdica.",
          en: "The IABP inflates during diastole, boosting coronary perfusion pressure and myocardial oxygenation.",
          es: "El IABP se infla durante la diástole, aumentando la presión de perfusión coronaria y mejorando la oxigenación miocárdica."
        }
      },
      {
        text: {
          pt: "Aumento da pós-carga ventricular esquerda",
          en: "Increased left ventricular afterload",
          es: "Aumento de la poscarga ventricular izquierda"
        },
        explanation: {
          pt: "Na verdade, o IABP reduz a pós-carga ao desinflar no início da sístole.",
          en: "In fact, the IABP reduces afterload by deflating at the beginning of systole.",
          es: "De hecho, el IABP reduce la poscarga al desinflarse al inicio de la sístole."
        }
      },
      {
        text: {
          pt: "Diminuição do volume sistólico",
          en: "Decreased stroke volume",
          es: "Disminución del volumen sistólico"
        },
        explanation: {
          pt: "O IABP visa aumentar o débito cardíaco, não reduzi-lo.",
          en: "IABP aims to increase cardiac output, not reduce it.",
          es: "El IABP busca aumentar el gasto cardíaco, no reducirlo."
        }
      },
      {
        text: {
          pt: "Aumento da frequência cardíaca",
          en: "Increased heart rate",
          es: "Aumento de la frecuencia cardíaca"
        },
        explanation: {
          pt: "O IABP não tem efeito direto sobre a frequência cardíaca.",
          en: "IABP has no direct effect on heart rate.",
          es: "El IABP no tiene efecto directo sobre la frecuencia cardíaca."
        }
      }
    ]
  },
  {
    id: 508,
    code: "cardio01-q08",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["ECMO-VA"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Qual das opções abaixo descreve correctmente uma característica típica da ECMO venoarterial (ECMO-VA)?",
      en: "Which of the following best describes a typical characteristic of venoarterial ECMO (ECMO-VA)?",
      es: "¿Cuál de las siguientes describe mejor una característica típica de la ECMO venoarterial (ECMO-VA)?"
    },
    options: [
      {
        text: {
          pt: "Utiliza apenas uma cânula venosa para circulação",
          en: "Uses only a venous cannula for circulation",
          es: "Utiliza solo una cánula venosa para la circulación"
        },
        explanation: {
          pt: "Esse é o modelo da ECMO venovenosa (ECMO-VV), não ECMO-VA.",
          en: "That describes venovenous ECMO, not ECMO-VA.",
          es: "Eso corresponde a la ECMO venovenosa, no a la ECMO-VA."
        }
      },
      {
        text: {
          pt: "É indicada exclusivamente para suporte pulmonar em insuficiência respiratória",
          en: "Indicated solely for pulmonary support in respiratory failure",
          es: "Indicada solo para soporte pulmonar en insuficiencia respiratoria"
        },
        explanation: {
          pt: "Essa é a indicação da ECMO-VV. A ECMO-VA é usada para suporte hemodinâmico e pulmonar.",
          en: "That's VV ECMO. VA ECMO supports both cardiac and pulmonary function.",
          es: "Eso aplica a ECMO-VV. ECMO-VA da soporte hemodinámico y pulmonar."
        }
      },
      {
        text: {
          pt: "Proporciona suporte circulatório e pulmonar simultaneamente",
          en: "Provides both circulatory and pulmonary support",
          es: "Proporciona soporte circulatorio y pulmonar simultáneamente"
        },
        explanation: {
          pt: "A ECMO-VA retira o sangue venoso, oxigena e o devolve à artéria, assumindo parte da função cardíaca e pulmonar.",
          en: "VA ECMO draws venous blood, oxygenates it, and returns it to the artery, supporting both heart and lungs.",
          es: "La ECMO-VA extrae sangre venosa, la oxigena y la devuelve a la arteria, apoyando corazón y pulmones."
        }
      },
      {
        text: {
          pt: "É indicada apenas após falha de dispositivos de assistência ventricular esquerda",
          en: "Indicated only after failure of left ventricular assist devices",
          es: "Indicada solo tras fallo de dispositivos de asistencia ventricular izquierda"
        },
        explanation: {
          pt: "A ECMO-VA pode ser indicada primariamente em choque cardiogênico, sem necessidade de falha prévia de LVAD.",
          en: "VA ECMO can be a first-line option in cardiogenic shock, not requiring prior LVAD failure.",
          es: "La ECMO-VA puede indicarse como primera línea en shock cardiogénico, sin fallo previo de DVI."
        }
      }
    ]
  },
  {
    id: 509,
    code: "cardio01-q09",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["LVAD"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual das seguintes afirmações é verdadeira sobre dispositivos de assistência ventricular esquerda (LVAD)?",
      en: "Which of the following statements is true regarding left ventricular assist devices (LVADs)?",
      es: "¿Cuál de las siguientes afirmaciones es verdadera sobre los dispositivos de asistencia ventricular izquierda (LVAD)?"
    },
    options: [
      {
        text: {
          pt: "O LVAD é indicado apenas em pacientes com infarto agudo do miocárdio com supra de ST",
          en: "LVAD is indicated only in patients with ST-elevation myocardial infarction",
          es: "El LVAD está indicado solo en pacientes con infarto agudo de miocardio con elevación del ST"
        },
        explanation: {
          pt: "A indicação de LVAD não se restringe ao IAM. É mais comum em insuficiência cardíaca avançada.",
          en: "LVADs are not limited to STEMI; they are mostly used in advanced heart failure.",
          es: "Los LVAD no están limitados al IAM con elevación del ST; se usan comúnmente en insuficiencia cardíaca avanzada."
        }
      },
      {
        text: {
          pt: "Pacientes com LVAD podem não ter pulso arterial palpável devido ao fluxo contínuo do dispositivo",
          en: "Patients with LVAD may not have a palpable arterial pulse due to continuous flow",
          es: "Los pacientes con LVAD pueden no tener pulso arterial palpable debido al flujo continuo"
        },
        explanation: {
          pt: "LVADs modernos geram fluxo contínuo, o que pode abolir o pulso arterial. É preciso usar Doppler ou monitorização alternativa.",
          en: "Modern LVADs create continuous flow, often eliminating palpable pulse. Doppler or alternative monitoring is required.",
          es: "Los LVAD modernos generan flujo continuo, a menudo sin pulso palpable. Se necesita Doppler u otro método."
        }
      },
      {
        text: {
          pt: "O uso de LVAD dispensa totalmente anticoagulação",
          en: "LVAD use eliminates the need for anticoagulation",
          es: "El uso de LVAD elimina la necesidad de anticoagulación"
        },
        explanation: {
          pt: "Pacientes com LVAD necessitam de anticoagulação devido ao risco de trombose do dispositivo.",
          en: "Patients with LVAD require anticoagulation due to risk of device thrombosis.",
          es: "Los pacientes con LVAD necesitan anticoagulación por riesgo de trombosis del dispositivo."
        }
      },
      {
        text: {
          pt: "LVADs são usados exclusivamente como ponte para transplante cardíaco",
          en: "LVADs are used exclusively as a bridge to heart transplantation",
          es: "Los LVAD se usan exclusivamente como puente al trasplante cardíaco"
        },
        explanation: {
          pt: "Além de ponte para transplante, o LVAD também é usado como terapia de destino em pacientes intransplantáveis.",
          en: "Besides bridge to transplant, LVADs are used as destination therapy in non-transplant candidates.",
          es: "Además de puente al trasplante, los LVAD se usan como terapia de destino en pacientes no candidatos a trasplante."
        }
      }
    ]
  },
  {
    id: 510,
    code: "cardio01-q10",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["arrhythmias"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual é a arritmia mais frequentemente associada a morte súbita em adultos com cardiopatia estrutural?",
      en: "What is the arrhythmia most frequently associated with sudden death in adults with structural heart disease?",
      es: "¿Cuál es la arritmia más frecuentemente asociada a muerte súbita en adultos con cardiopatía estructural?"
    },
    options: [
      {
        text: {
          pt: "Taquicardia ventricular",
          en: "Ventricular tachycardia",
          es: "Taquicardia ventricular"
        },
        explanation: {
          pt: "A taquicardia ventricular é a principal arritmia associada à morte súbita, especialmente em pacientes com disfunção ventricular esquerda.",
          en: "Ventricular tachycardia is the main arrhythmia associated with sudden death, especially in patients with left ventricular dysfunction.",
          es: "La taquicardia ventricular es la arritmia principal asociada a muerte súbita, especialmente en pacientes con disfunción del ventrículo izquierdo."
        }
      },
      {
        text: {
          pt: "Fibrilação atrial",
          en: "Atrial fibrillation",
          es: "Fibrilación auricular"
        },
        explanation: {
          pt: "A FA aumenta risco de AVC, mas não é a principal causa de morte súbita.",
          en: "AF increases stroke risk but is not the leading cause of sudden death.",
          es: "La FA incrementa el riesgo de ACV, pero no es causa principal de muerte súbita."
        }
      },
      {
        text: {
          pt: "Bradicardia sinusal",
          en: "Sinus bradycardia",
          es: "Bradicardia sinusal"
        },
        explanation: {
          pt: "Bradicardia sinusal raramente está associada à morte súbita em pacientes com coração estruturalmente comprometido.",
          en: "Sinus bradycardia is rarely associated with sudden death in structural heart disease.",
          es: "La bradicardia sinusal rara vez se asocia a muerte súbita en cardiopatías estructurales."
        }
      },
      {
        text: {
          pt: "Flutter atrial",
          en: "Atrial flutter",
          es: "Flutter auricular"
        },
        explanation: {
          pt: "O flutter atrial tem perfil semelhante ao da fibrilação atrial, sem forte associação com morte súbita.",
          en: "Atrial flutter has a profile similar to AF, with no strong link to sudden death.",
          es: "El flutter auricular tiene un perfil similar a la FA, sin asociación fuerte con muerte súbita."
        }
      }
    ]
  },
  {
    id: 511,
    code: "cardio01-q11",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["myocardial infarction"],
    level: "easy",
    correct: 3,
    question: {
      pt: "Qual dos seguintes sintomas é mais clássico no infarto agudo do miocárdio com supra de ST?",
      en: "Which of the following symptoms is most classically associated with ST-elevation myocardial infarction (STEMI)?",
      es: "¿Cuál de los siguientes síntomas es más clásico en el infarto agudo de miocardio con elevación del ST (IAMCEST)?"
    },
    options: [
      {
        text: {
          pt: "Dispneia súbita isolada",
          en: "Isolated sudden dyspnea",
          es: "Disnea súbita aislada"
        },
        explanation: {
          pt: "Embora possa ocorrer, é mais comum em pacientes idosos ou com IAM atípico.",
          en: "While possible, it is more common in elderly or atypical MI presentations.",
          es: "Aunque puede presentarse, es más común en ancianos o IAM atípicos."
        }
      },
      {
        text: {
          pt: "Palpitações isoladas",
          en: "Isolated palpitations",
          es: "Palpitaciones aisladas"
        },
        explanation: {
          pt: "Palpitações não são sintomas clássicos de IAM com supra de ST.",
          en: "Palpitations are not classic symptoms of STEMI.",
          es: "Las palpitaciones no son síntomas clásicos del IAMCEST."
        }
      },
      {
        text: {
          pt: "Febre baixa e persistente",
          en: "Low-grade persistent fever",
          es: "Fiebre baja y persistente"
        },
        explanation: {
          pt: "Febre pode ocorrer secundariamente, mas não é manifestação inicial típica.",
          en: "Fever may appear secondarily, but it's not a typical initial manifestation.",
          es: "La fiebre puede aparecer secundariamente, pero no es manifestación típica inicial."
        }
      },
      {
        text: {
          pt: "Dor torácica em aperto irradiando para o braço esquerdo",
          en: "Crushing chest pain radiating to the left arm",
          es: "Dolor torácico opresivo irradiado al brazo izquierdo"
        },
        explanation: {
          pt: "Este é o sintoma clássico mais comum associado ao IAM com supra de ST.",
          en: "This is the most commonly recognized classic symptom of STEMI.",
          es: "Este es el síntoma clásico más comúnmente asociado al IAMCEST."
        }
      }
    ]
  },
  {
    id: 512,
    code: "cardio01-q12",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["pulmonary embolism"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Qual dos achados clínicos abaixo é mais sugestivo de tromboembolismo pulmonar (TEP) agudo?",
      en: "Which of the following clinical findings is most suggestive of acute pulmonary embolism (PE)?",
      es: "¿Cuál de los siguientes hallazgos clínicos sugiere más un tromboembolismo pulmonar (TEP) agudo?"
    },
    options: [
      {
        text: {
          pt: "Bradicardia sinusal persistente",
          en: "Persistent sinus bradycardia",
          es: "Bradicardia sinusal persistente"
        },
        explanation: {
          pt: "A bradicardia não é achado típico em TEP agudo.",
          en: "Bradycardia is not a typical finding in acute PE.",
          es: "La bradicardia no es un hallazgo típico en TEP agudo."
        }
      },
      {
        text: {
          pt: "Estalido protossistólico no ápice",
          en: "Early systolic click at the apex",
          es: "Chasquido protosistólico en el ápex"
        },
        explanation: {
          pt: "Este achado é mais comum em prolapso de valva mitral.",
          en: "This is more common in mitral valve prolapse.",
          es: "Este hallazgo es más común en prolapso de válvula mitral."
        }
      },
      {
        text: {
          pt: "Dispneia súbita com dor torácica e taquicardia",
          en: "Sudden dyspnea with chest pain and tachycardia",
          es: "Disnea súbita con dolor torácico y taquicardia"
        },
        explanation: {
          pt: "Essa tríade é característica de apresentação clínica do TEP agudo.",
          en: "This triad is a characteristic clinical presentation of acute PE.",
          es: "Esta tríada es característica de la presentación clínica del TEP agudo."
        }
      },
      {
        text: {
          pt: "Sopro diastólico em foco aórtico",
          en: "Diastolic murmur at the aortic area",
          es: "Soplo diastólico en foco aórtico"
        },
        explanation: {
          pt: "Sopros diastólicos aórticos estão associados a insuficiência aórtica, não a TEP.",
          en: "Diastolic aortic murmurs are associated with aortic insufficiency, not PE.",
          es: "Los soplos diastólicos aórticos se asocian a insuficiencia aórtica, no al TEP."
        }
      }
    ]
  },
  {
    id: 513,
    code: "cardio01-q13",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["hemodynamics"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual dos parâmetros abaixo é mais diretamente influenciado pelo volume intravascular em um paciente estável?",
      en: "Which of the following parameters is most directly influenced by intravascular volume in a stable patient?",
      es: "¿Cuál de los siguientes parámetros está más directamente influenciado por el volumen intravascular en un paciente estable?"
    },
    options: [
      {
        text: {
          pt: "Pressão arterial média (PAM)",
          en: "Mean arterial pressure (MAP)",
          es: "Presión arterial media (PAM)"
        },
        explanation: {
          pt: "A PAM também depende do tônus vascular periférico e da contratilidade cardíaca, não apenas do volume.",
          en: "MAP also depends on vascular tone and cardiac contractility, not only volume.",
          es: "La PAM también depende del tono vascular y la contractilidad, no solo del volumen."
        }
      },
      {
        text: {
          pt: "Pressão venosa central (PVC)",
          en: "Central venous pressure (CVP)",
          es: "Presión venosa central (PVC)"
        },
        explanation: {
          pt: "A PVC reflete diretamente a pressão no sistema venoso e pode indicar alterações no volume intravascular.",
          en: "CVP directly reflects venous system pressure and can indicate changes in intravascular volume.",
          es: "La PVC refleja directamente la presión del sistema venoso y puede indicar cambios en el volumen intravascular."
        }
      },
      {
        text: {
          pt: "Fração de ejeção do ventrículo esquerdo",
          en: "Left ventricular ejection fraction",
          es: "Fracción de eyección del ventrículo izquierdo"
        },
        explanation: {
          pt: "A fração de ejeção depende da contratilidade miocárdica, não diretamente do volume venoso.",
          en: "Ejection fraction depends on myocardial contractility, not directly on venous volume.",
          es: "La fracción de eyección depende de la contractilidad miocárdica, no directamente del volumen venoso."
        }
      },
      {
        text: {
          pt: "Índice de resistência vascular sistêmica",
          en: "Systemic vascular resistance index",
          es: "Índice de resistencia vascular sistémica"
        },
        explanation: {
          pt: "Este índice é mais influenciado pelo tônus vascular do que pelo volume intravascular.",
          en: "This index is more influenced by vascular tone than by volume.",
          es: "Este índice está más influenciado por el tono vascular que por el volumen."
        }
      }
    ]
  },
  {
    id: 514,
    code: "cardio01-q14",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["hemodynamics"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Nos dispositivos de termodiluição transpulmonar (como PiCCO ou VolumeView), qual das variáveis abaixo é diretamente medida e usada para calcular o índice de volume intratorácico?",
      en: "In transpulmonary thermodilution devices (such as PiCCO or VolumeView), which of the following variables is directly measured and used to calculate the intrathoracic volume index?",
      es: "En los dispositivos de termodilución transpulmonar (como PiCCO o VolumeView), ¿cuál de las siguientes variables se mide directamente y se utiliza para calcular el índice de volumen intratorácico?"
    },
    options: [
      {
        text: {
          pt: "Pressão de oclusão da artéria pulmonar",
          en: "Pulmonary artery occlusion pressure",
          es: "Presión de oclusión de la arteria pulmonar"
        },
        explanation: {
          pt: "Essa é medida por cateter de Swan-Ganz e não faz parte da termodiluição transpulmonar.",
          en: "This is measured by a Swan-Ganz catheter and is not part of transpulmonary thermodilution.",
          es: "Esto se mide con un catéter de Swan-Ganz y no forma parte de la termodilución transpulmonar."
        }
      },
      {
        text: {
          pt: "Tempo médio de trânsito térmico",
          en: "Mean transit time",
          es: "Tiempo medio de tránsito térmico"
        },
        explanation: {
          pt: "Essa variável é medida diretamente e é essencial para o cálculo de volumes intratorácicos como ITTV e GEDV.",
          en: "This variable is directly measured and is essential for calculating intrathoracic volumes such as ITTV and GEDV.",
          es: "Esta variable se mide directamente y es esencial para calcular volúmenes intratorácicos como ITTV y GEDV."
        }
      },
      {
        text: {
          pt: "Índice de resistência vascular sistêmica",
          en: "Systemic vascular resistance index",
          es: "Índice de resistencia vascular sistémica"
        },
        explanation: {
          pt: "Esse índice é calculado indiretamente a partir de outros parâmetros, incluindo débito cardíaco e pressão arterial.",
          en: "This index is indirectly calculated from other parameters, including cardiac output and arterial pressure.",
          es: "Este índice se calcula indirectamente a partir de otros parámetros, como el gasto cardíaco y la presión arterial."
        }
      },
      {
        text: {
          pt: "Índice cardíaco derivado por bioimpedância",
          en: "Cardiac index derived by bioimpedance",
          es: "Índice cardíaco derivado por bioimpedancia"
        },
        explanation: {
          pt: "Esse método é alternativo e não faz parte da termodiluição transpulmonar.",
          en: "This method is alternative and not part of transpulmonary thermodilution.",
          es: "Este método es alternativo y no forma parte de la termodilución transpulmonar."
        }
      }
    ]
  },
  {
    id: 515,
    code: "cardio01-q15",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["myocardial infarction"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Qual das seguintes intervenções é prioridade nas primeiras horas do infarto agudo do miocárdio com supra de ST (IAMCSST)?",
      en: "Which of the following interventions is a priority within the first hours of ST-elevation myocardial infarction (STEMI)?",
      es: "¿Cuál de las siguientes intervenciones es prioritaria en las primeras horas del infarto agudo de miocardio con elevación del ST (IAMCEST)?"
    },
    options: [
      {
        text: {
          pt: "Administração de betabloqueador oral imediatamente",
          en: "Immediate oral beta-blocker administration",
          es: "Administración inmediata de betabloqueador oral"
        },
        explanation: {
          pt: "Betabloqueadores são úteis, mas seu uso precoce depende da estabilidade hemodinâmica do paciente.",
          en: "Beta-blockers are helpful, but early use depends on the patient's hemodynamic stability.",
          es: "Los betabloqueadores son útiles, pero su uso precoz depende de la estabilidad hemodinámica."
        }
      },
      {
        text: {
          pt: "Anticoagulação com heparina de baixo peso molecular como primeira medida",
          en: "Anticoagulation with low molecular weight heparin as first measure",
          es: "Anticoagulación con heparina de bajo peso molecular como primera medida"
        },
        explanation: {
          pt: "Anticoagulação é importante, mas não substitui a reperfusão urgente.",
          en: "Anticoagulation is important, but it does not replace urgent reperfusion.",
          es: "La anticoagulación es importante, pero no reemplaza la reperfusión urgente."
        }
      },
      {
        text: {
          pt: "Reperfusão coronariana imediata, preferencialmente por angioplastia",
          en: "Immediate coronary reperfusion, preferably by angioplasty",
          es: "Reperfusión coronaria inmediata, preferiblemente por angioplastia"
        },
        explanation: {
          pt: "A angioplastia primária é a estratégia de escolha para reperfusão nas primeiras horas do IAMCSST, quando disponível.",
          en: "Primary angioplasty is the reperfusion strategy of choice in early STEMI when available.",
          es: "La angioplastia primaria es la estrategia de reperfusión preferida en IAMCEST temprano, si está disponible."
        }
      },
      {
        text: {
          pt: "Reposição volêmica com cristaloide isotônico",
          en: "Isotonic crystalloid fluid resuscitation",
          es: "Reposición de volumen con cristaloides isotónicos"
        },
        explanation: {
          pt: "A reposição volêmica não é prioridade no IAM, a menos que o paciente apresente hipotensão ou choque.",
          en: "Fluid resuscitation is not a priority in MI unless the patient is hypotensive or in shock.",
          es: "La reposición de volumen no es prioritaria en IAM salvo hipotensión o shock."
        }
      }
    ]
  },
   {
    id: 516,
    code: "cardio01-q16",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["arrhythmias"],
    level: "easy",
    correct: 1,
    question: {
      pt: "Qual das seguintes arritmias exige cardioversão elétrica imediata em um paciente instável?",
      en: "Which of the following arrhythmias requires immediate electrical cardioversion in an unstable patient?",
      es: "¿Cuál de las siguientes arritmias requiere cardioversión eléctrica inmediata en un paciente inestable?"
    },
    options: [
      {
        text: {
          pt: "Fibrilação atrial assintomática com frequência controlada",
          en: "Asymptomatic atrial fibrillation with controlled rate",
          es: "Fibrilación auricular asintomática con frecuencia controlada"
        },
        explanation: {
          pt: "Fibrilação atrial assintomática e controlada pode ser manejada clinicamente sem necessidade de cardioversão imediata.",
          en: "Asymptomatic and rate-controlled AF can be managed medically without immediate cardioversion.",
          es: "La FA asintomática y controlada puede tratarse médicamente sin necesidad de cardioversión inmediata."
        }
      },
      {
        text: {
          pt: "Taquicardia ventricular com instabilidade hemodinâmica",
          en: "Ventricular tachycardia with hemodynamic instability",
          es: "Taquicardia ventricular con inestabilidad hemodinámica"
        },
        explanation: {
          pt: "TV instável requer cardioversão elétrica imediata, conforme diretrizes ACLS.",
          en: "Unstable VT requires immediate synchronized cardioversion according to ACLS guidelines.",
          es: "La TV inestable requiere cardioversión inmediata según las guías ACLS."
        }
      },
      {
        text: {
          pt: "Bradicardia sinusal com pressão arterial normal",
          en: "Sinus bradycardia with normal blood pressure",
          es: "Bradicardia sinusal con presión arterial normal"
        },
        explanation: {
          pt: "Bradicardia sem instabilidade hemodinâmica não exige cardioversão elétrica.",
          en: "Bradycardia without hemodynamic compromise doesn't require electrical cardioversion.",
          es: "La bradicardia sin inestabilidad hemodinámica no requiere cardioversión eléctrica."
        }
      },
      {
        text: {
          pt: "Flutter atrial com resposta ventricular de 90 bpm",
          en: "Atrial flutter with ventricular response of 90 bpm",
          es: "Flutter auricular con respuesta ventricular de 90 lpm"
        },
        explanation: {
          pt: "O flutter com frequência controlada e estabilidade clínica pode ser manejado com antiarrítmicos ou ablação eletiva.",
          en: "Flutter with controlled rate and clinical stability can be managed with antiarrhythmics or elective ablation.",
          es: "El flutter con frecuencia controlada y estabilidad puede tratarse con antiarrítmicos o ablación electiva."
        }
      }
    ]
  },
   {
    id: 517,
    code: "cardio01-q17",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["hypertensive emergencies"],
    level: "easy",
    correct: 3,
    question: {
      pt: "Qual das seguintes situações caracteriza uma emergência hipertensiva?",
      en: "Which of the following situations characterizes a hypertensive emergency?",
      es: "¿Cuál de las siguientes situaciones caracteriza una emergencia hipertensiva?"
    },
    options: [
      {
        text: {
          pt: "Pressão arterial sistólica ≥ 180 mmHg sem sintomas",
          en: "Systolic blood pressure ≥ 180 mmHg without symptoms",
          es: "Presión arterial sistólica ≥ 180 mmHg sin síntomas"
        },
        explanation: {
          pt: "Esse achado isolado caracteriza uma urgência hipertensiva, não emergência.",
          en: "This isolated finding characterizes a hypertensive urgency, not emergency.",
          es: "Este hallazgo aislado caracteriza una urgencia hipertensiva, no una emergencia."
        }
      },
      {
        text: {
          pt: "Pressão diastólica ≥ 110 mmHg com cefaleia leve",
          en: "Diastolic pressure ≥ 110 mmHg with mild headache",
          es: "Presión diastólica ≥ 110 mmHg con cefalea leve"
        },
        explanation: {
          pt: "Cefaleia leve não indica dano a órgão-alvo e não configura emergência.",
          en: "Mild headache does not imply target organ damage and is not an emergency.",
          es: "La cefalea leve no indica daño a órgano blanco y no configura emergencia."
        }
      },
      {
        text: {
          pt: "Elevação gradual da pressão arterial em diabético sem sintomas",
          en: "Gradual blood pressure elevation in an asymptomatic diabetic",
          es: "Elevación gradual de la presión arterial en diabético asintomático"
        },
        explanation: {
          pt: "Sem sintomas ou lesão aguda de órgão-alvo, trata-se de urgência hipertensiva ou mesmo pressão não controlada.",
          en: "Without symptoms or acute target organ injury, this is hypertensive urgency or uncontrolled pressure.",
          es: "Sin síntomas ni lesión aguda a órgano blanco, es una urgencia hipertensiva o presión no controlada."
        }
      },
      {
        text: {
          pt: "Pressão arterial elevada com edema agudo de pulmão",
          en: "Elevated blood pressure with acute pulmonary edema",
          es: "Presión arterial elevada con edema agudo de pulmón"
        },
        explanation: {
          pt: "A presença de disfunção aguda de órgão-alvo (neste caso, pulmonar/cardiovascular) caracteriza uma emergência hipertensiva.",
          en: "The presence of acute target organ damage (here, pulmonary/cardiovascular) defines a hypertensive emergency.",
          es: "La presencia de daño agudo a órgano blanco (en este caso, pulmonar/cardiovascular) caracteriza una emergencia hipertensiva."
        }
      }
    ]
  },
  {
    id: 518,
    code: "cardio01-q18",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["anticoagulation"],
    level: "easy",
    correct: 0,
    question: {
      pt: "Qual das seguintes condições é uma indicação clássica para anticoagulação crônica com varfarina?",
      en: "Which of the following conditions is a classic indication for chronic anticoagulation with warfarin?",
      es: "¿Cuál de las siguientes condiciones es una indicación clásica para anticoagulación crónica con warfarina?"
    },
    options: [
      {
        text: {
          pt: "Fibrilação atrial com escore CHA₂DS₂-VASc elevado",
          en: "Atrial fibrillation with high CHA₂DS₂-VASc score",
          es: "Fibrilación auricular con puntuación CHA₂DS₂-VASc alta"
        },
        explanation: {
          pt: "A fibrilação atrial com risco tromboembólico elevado é uma das principais indicações para anticoagulação crônica.",
          en: "Atrial fibrillation with high thromboembolic risk is a major indication for chronic anticoagulation.",
          es: "La fibrilación auricular con alto riesgo tromboembólico es una de las principales indicaciones de anticoagulación crónica."
        }
      },
      {
        text: {
          pt: "Hipertensão arterial sistêmica controlada",
          en: "Well-controlled systemic hypertension",
          es: "Hipertensión arterial sistémica controlada"
        },
        explanation: {
          pt: "A hipertensão, isoladamente, não é indicação para anticoagulação.",
          en: "Hypertension alone is not an indication for anticoagulation.",
          es: "La hipertensión aislada no es una indicación para anticoagulación."
        }
      },
      {
        text: {
          pt: "Infarto agudo do miocárdio sem complicações",
          en: "Uncomplicated acute myocardial infarction",
          es: "Infarto agudo de miocardio sin complicaciones"
        },
        explanation: {
          pt: "Após IAM sem trombo mural ou FA, não há necessidade rotineira de anticoagulação.",
          en: "In MI without mural thrombus or AF, anticoagulation is not routinely indicated.",
          es: "En IAM sin trombo mural ni FA, no se indica anticoagulación rutinaria."
        }
      },
      {
        text: {
          pt: "Dislipidemia em prevenção primária",
          en: "Dyslipidemia in primary prevention",
          es: "Dislipidemia en prevención primaria"
        },
        explanation: {
          pt: "Dislipidemia não é indicação para anticoagulação. O tratamento foca em estatinas e estilo de vida.",
          en: "Dyslipidemia is not an indication for anticoagulation. Focus is on statins and lifestyle.",
          es: "La dislipidemia no es indicación para anticoagulación. El enfoque es en estatinas y estilo de vida."
        }
      }
    ]
  },
  {
    id: 519,
    code: "cardio01-q19",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["echocardiography"],
    level: "easy",
    correct: 2,
    question: {
      pt: "Em um ecocardiograma transtorácico, qual das seguintes janelas permite melhor avaliação da contratilidade global do ventrículo esquerdo?",
      en: "In a transthoracic echocardiogram, which of the following views best assesses global left ventricular contractility?",
      es: "En un ecocardiograma transtorácico, ¿cuál de las siguientes ventanas permite mejor evaluación de la contractilidad global del ventrículo izquierdo?"
    },
    options: [
      {
        text: {
          pt: "Subcostal",
          en: "Subcostal",
          es: "Subcostal"
        },
        explanation: {
          pt: "A janela subcostal é útil em casos com janela torácica ruim, mas tem limitações para avaliação segmentar detalhada.",
          en: "The subcostal view is useful in poor thoracic windows but limited for detailed segmental analysis.",
          es: "La vista subcostal es útil en ventanas torácicas deficientes, pero limitada para análisis segmentario detallado."
        }
      },
      {
        text: {
          pt: "Paraesternal eixo curto",
          en: "Parasternal short axis",
          es: "Paraesternal eje corto"
        },
        explanation: {
          pt: "Boa para avaliação segmentar, mas não fornece visão abrangente da função global como a janela apical.",
          en: "Good for segmental evaluation but does not provide a full overview of global function like apical view.",
          es: "Buena para evaluación segmentaria pero no ofrece una visión global como la vista apical."
        }
      },
      {
        text: {
          pt: "Apical de quatro câmaras",
          en: "Apical four-chamber",
          es: "Apical de cuatro cámaras"
        },
        explanation: {
          pt: "A vista apical permite avaliação direta da contração das paredes laterais, septais e função global do VE.",
          en: "The apical view allows direct assessment of lateral, septal walls and global LV function.",
          es: "La vista apical permite evaluar directamente las paredes laterales, septales y la función global del VI."
        }
      },
      {
        text: {
          pt: "Supraternal",
          en: "Suprasternal",
          es: "Suprasternal"
        },
        explanation: {
          pt: "Vista utilizada principalmente para avaliar a aorta e não a função ventricular.",
          en: "Used primarily to evaluate the aorta, not ventricular function.",
          es: "Se utiliza principalmente para evaluar la aorta, no la función ventricular."
        }
      }
    ]
  },
  {
    id: 520,
    code: "cardio01-q20",
    areas: ["cardio+icu", "cardio", "icu", "medicine"],
    topics: ["hemodynamics", "shock"],
    level: "easy",
    correct: 3,
    question: {
      pt: "Em relação aos diferentes tipos de choque, qual das options abaixo está INCORRETA?",
      en: "Regarding the different types of shock, which of the following statements is INCORRECT?",
      es: "En relación con los diferentes tipos de shock, ¿cuál de las siguientes afirmaciones es INCORRECTA?"
    },
    options: [
      {
        text: {
          pt: "O choque hipovolêmico geralmente cursa com pressão venosa central (PVC) baixa",
          en: "Hypovolemic shock typically presents with low central venous pressure (CVP)",
          es: "El shock hipovolémico típicamente se presenta con presión venosa central (PVC) baja"
        },
        explanation: {
          pt: "Na hipovolemia, a PVC cai por redução do retorno venoso.",
          en: "In hypovolemia, CVP drops due to reduced venous return.",
          es: "En hipovolemia, la PVC disminuye por el retorno venoso reducido."
        }
      },
      {
        text: {
          pt: "O choque obstrutivo pode ocorrer por tamponamento cardíaco",
          en: "Obstructive shock can occur due to cardiac tamponade",
          es: "El shock obstructivo puede deberse a taponamiento cardíaco"
        },
        explanation: {
          pt: "Tamponamento limita o enchimento ventricular e leva a choque obstrutivo.",
          en: "Tamponade limits ventricular filling, leading to obstructive shock.",
          es: "El taponamiento limita el llenado ventricular y genera shock obstructivo."
        }
      },
      {
        text: {
          pt: "O choque cardiogênico cursa com aumento da pressão capilar pulmonar",
          en: "Cardiogenic shock presents with elevated pulmonary capillary pressure",
          es: "El shock cardiogénico se presenta con presión capilar pulmonar elevada"
        },
        explanation: {
          pt: "A falência do ventrículo esquerdo aumenta a PCP pela congestão retrógrada.",
          en: "Left ventricular failure increases PCWP due to backward congestion.",
          es: "La falla del ventrículo izquierdo eleva la PCP por congestión retrógrada."
        }
      },
      {
        text: {
          pt: "O choque distributivo cursa com aumento da resistência vascular sistêmica",
          en: "Distributive shock presents with increased systemic vascular resistance",
          es: "El shock distributivo se presenta con aumento de la resistencia vascular sistémica"
        },
        explanation: {
          pt: "INCORRETA. O choque distributivo, como o séptico, cursa com vasodilatação e resistência vascular reduzida.",
          en: "INCORRECT. Distributive shock, such as septic shock, presents with vasodilation and reduced vascular resistance.",
          es: "INCORRECTA. El shock distributivo, como el séptico, cursa con vasodilatación y resistencia vascular reducida."
        }
      }
    ]
  },
];

questionBank.addBank(bancoCardioFacil);
