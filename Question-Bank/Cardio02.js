const bancoCardioModerado = [
{
    id: 201,
    code: "cardio02-q201",
    area: ["cardio", "icu"],
    topic: ["heart failure", "hemodynamics"],
    level: "moderado",
    correct: 3,
    question: {
      pt: "Homem de 67 anos, com história de insuficiência cardíaca com fração de ejeção reduzida (ICFER), é admitido na UTI por desconforto respiratório progressivo e confusão mental. Apresenta PA 85x50 mmHg, FC 110 bpm, extremidades frias e lactato 3,2 mmol/L. Qual a melhor abordagem inicial?",
      en: "A 67-year-old man with known heart failure with reduced ejection fraction (HFrEF) is admitted to the ICU with progressive dyspnea and confusion. BP is 85/50 mmHg, HR 110 bpm, cold extremities, lactate 3.2 mmol/L. What is the best initial management?",
      es: "Hombre de 67 años, con insuficiencia cardíaca con fracción de eyección reducida (ICFER), ingresa a UCI con disnea progresiva y confusión. TA 85x50 mmHg, FC 110 lpm, extremidades frías y lactato 3,2 mmol/L. ¿Cuál es la mejor conducta inicial?"
    },
    options: [
      {
        text: {
          pt: "Administrar diurético em alta dose",
          en: "Administer high-dose diuretics",
          es: "Administrar diurético en alta dosis"
        },
        explanation: {
          pt: "O paciente apresenta perfil frio e úmido com sinais de baixo débito. Diurético isolado pode piorar a perfusão sem suporte inotrópico.",
          en: "The patient shows cold and wet profile with low output. Diuretics alone may worsen perfusion without inotropes.",
          es: "El paciente presenta perfil frío y húmedo con bajo gasto. Diurético solo puede empeorar la perfusión sin inotrópicos."
        }
      },
      {
        text: {
          pt: "Iniciar betabloqueador para controle da FC",
          en: "Start beta-blocker for HR control",
          es: "Iniciar betabloqueador para controlar la FC"
        },
        explanation: {
          pt: "Betabloqueadores devem ser evitados em pacientes com choque ou hipoperfusão, pois podem agravar o quadro.",
          en: "Beta-blockers should be avoided in shock or hypoperfusion, as they can worsen the condition.",
          es: "Los betabloqueadores deben evitarse en shock o hipoperfusión, ya que pueden empeorar el cuadro."
        }
      },
      {
        text: {
          pt: "Reposição volêmica com cristaloides",
          en: "Fluid resuscitation with crystalloids",
          es: "Reposición de volumen con cristaloides"
        },
        explanation: {
          pt: "Reposição volêmica em IC descompensada com congestão pode piorar o edema e não melhora a perfusão.",
          en: "Volume expansion in decompensated HF with congestion may worsen edema and not improve perfusion.",
          es: "La expansión de volumen en IC descompensada con congestión puede empeorar el edema sin mejorar la perfusión."
        }
      },
      {
        text: {
          pt: "Iniciar suporte inotrópico com dobutamina",
          en: "Start inotropic support with dobutamine",
          es: "Iniciar soporte inotrópico con dobutamina"
        },
        explanation: {
          pt: "A dobutamina é o inotrópico de escolha em pacientes com IC descompensada e hipoperfusão, especialmente com hipotensão e sinais de baixo débito.",
          en: "Dobutamine is the inotrope of choice for decompensated HF with hypoperfusion, especially with hypotension and low output signs.",
          es: "La dobutamina es el inotrópico de elección en IC descompensada con hipoperfusión e hipotensión."
        }
      }
    ]
  },
{
    id: 202,
    code: "cardio02-q202",
    area: ["cardio", "icu"],
    topic: ["myocardial infarction", "shock"],
    level: "moderado",
    correct: 0,
    question: {
      pt: "Mulher de 72 anos com antecedentes de hipertensão e dislipidemia é admitida com dor torácica intensa há 2h. ECG mostra supra de ST em parede anterior. Após angioplastia primária bem-sucedida, permanece hipotensa com extremidades frias e estertores bibasais. Qual hipótese deve ser considerada prioritariamente?",
      en: "A 72-year-old woman with hypertension and dyslipidemia presents with 2-hour chest pain. ECG shows anterior ST elevation. After successful primary PCI, she remains hypotensive with cold extremities and bilateral crackles. What is the most likely diagnosis?",
      es: "Mujer de 72 años con hipertensión y dislipidemia presenta dolor torácico de 2h. El ECG muestra elevación del ST anterior. Tras angioplastia exitosa, persiste hipotensa, con extremidades frías y crépitos bilaterales. ¿Cuál es el diagnóstico más probable?"
    },
    options: [
      {
        text: {
          pt: "Choque cardiogênico pós-IAM",
          en: "Cardiogenic shock post-MI",
          es: "Shock cardiogénico post-IAM"
        },
        explanation: {
          pt: "O choque cardiogênico é uma complicação grave e precoce do IAM extenso, caracterizado por sinais de baixo débito, hipotensão e congestão pulmonar.",
          en: "Cardiogenic shock is a serious early complication of extensive MI, with low output signs, hypotension, and pulmonary congestion.",
          es: "El shock cardiogénico es una complicación grave y precoz del IAM extenso, con bajo gasto, hipotensión y congestión pulmonar."
        }
      },
      {
        text: {
          pt: "Infarto do ventrículo direito",
          en: "Right ventricular infarction",
          es: "Infarto del ventrículo derecho"
        },
        explanation: {
          pt: "Infarto de VD cursa com hipotensão e PVC elevada, mas sem congestão pulmonar, o que torna essa hipótese menos provável.",
          en: "RV infarction presents with hypotension and elevated CVP, but usually without pulmonary congestion, making this less likely.",
          es: "El infarto de VD cursa con hipotensión y PVC elevada, pero sin congestión pulmonar, lo que hace menos probable esta hipótesis."
        }
      },
      {
        text: {
          pt: "Ruptura de septo interventricular",
          en: "Interventricular septal rupture",
          es: "Ruptura del tabique interventricular"
        },
        explanation: {
          pt: "Pode ocorrer após IAM, mas geralmente se manifesta com sopro novo e instabilidade hemodinâmica súbita. Deve ser considerada se houver deterioração abrupta.",
          en: "May occur after MI but usually presents with new murmur and sudden hemodynamic collapse. Should be considered if abrupt deterioration occurs.",
          es: "Puede ocurrir tras IAM, pero se presenta con soplo nuevo y colapso hemodinámico súbito. Considerar si hay deterioro brusco."
        }
      },
      {
        text: {
          pt: "Tamponamento cardíaco",
          en: "Cardiac tamponade",
          es: "Taponamiento cardíaco"
        },
        explanation: {
          pt: "Tamponamento se manifesta com pulso paradoxal, abafamento de bulhas e hipofonese, geralmente sem congestão pulmonar.",
          en: "Tamponade shows pulsus paradoxus, muffled heart sounds, and low voltage, usually without pulmonary congestion.",
          es: "El taponamiento presenta pulso paradójico, ruidos apagados y bajo voltaje, generalmente sin congestión pulmonar."
        }
      }
    ]
  },
  {
    id: 203,
    code: "cardio02-q203",
    area: ["cardio", "icu"],
    topic: ["echocardiography", "shock"],
    level: "moderado",
    correct: 2,
    question: {
      pt: "Homem de 59 anos com DPOC é admitido na UTI por dispneia intensa e rebaixamento do nível de consciência. Está hipotenso, taquicárdico e com SpO₂ 86%. O ecocardiograma à beira-leito revela dilatação de VD, septo interventricular abaulado para a esquerda e VE hiperdinâmico. Qual o diagnóstico mais provável?",
      en: "A 59-year-old man with COPD is admitted to the ICU with severe dyspnea and decreased consciousness. He is hypotensive, tachycardic, and has SpO₂ of 86%. Bedside echo shows a dilated RV, septum bowing to the left, and hyperdynamic LV. What is the most likely diagnosis?",
      es: "Hombre de 59 años con EPOC ingresa a UCI por disnea intensa y disminución del estado de conciencia. Está hipotenso, taquicárdico y con SpO₂ de 86%. El ecocardiograma muestra VD dilatado, septo desplazado a la izquierda y VI hiperdinámico. ¿Cuál es el diagnóstico más probable?"
    },
    options: [
      {
        text: {
          pt: "Choque séptico com disfunção biventricular",
          en: "Septic shock with biventricular dysfunction",
          es: "Shock séptico con disfunción biventricular"
        },
        explanation: {
          pt: "O choque séptico pode levar à disfunção biventricular, mas o septo abaulado para a esquerda e o VE hiperdinâmico não são típicos.",
          en: "Septic shock may cause biventricular dysfunction, but septal bowing and hyperdynamic LV are not typical findings.",
          es: "El shock séptico puede generar disfunción biventricular, pero el septo desplazado y VI hiperdinámico no son hallazgos típicos."
        }
      },
      {
        text: {
          pt: "Tamponamento cardíaco",
          en: "Cardiac tamponade",
          es: "Taponamiento cardíaco"
        },
        explanation: {
          pt: "O tamponamento cursa com colapso de câmaras direitas, não dilatação do VD e abaulamento do septo.",
          en: "Tamponade typically shows right chamber collapse, not RV dilation or septal bowing.",
          es: "El taponamiento muestra colapso de cavidades derechas, no dilatación del VD ni desplazamiento del septo."
        }
      },
      {
        text: {
          pt: "Embolia pulmonar maciça",
          en: "Massive pulmonary embolism",
          es: "Embolia pulmonar masiva"
        },
        explanation: {
          pt: "A combinação de dilatação do VD, abaulamento septal e VE hiperdinâmico é sugestiva de sobrecarga aguda do VD por TEP maciço.",
          en: "Dilated RV, septal bowing, and hyperdynamic LV suggest acute RV overload due to massive PE.",
          es: "VD dilatado, septo desplazado y VI hiperdinámico sugieren sobrecarga aguda por TEP masiva."
        }
      },
      {
        text: {
          pt: "Infarto agudo do miocárdio com disfunção de VE",
          en: "Acute myocardial infarction with LV dysfunction",
          es: "Infarto agudo de miocardio con disfunción del VI"
        },
        explanation: {
          pt: "O infarto com disfunção do VE levaria à hipocinesia, não a VE hiperdinâmico.",
          en: "MI with LV dysfunction leads to hypokinesia, not hyperdynamic LV.",
          es: "El IAM con disfunción del VI causa hipocinesia, no hiperdinamismo."
        }
      }
    ]
  },
  {
    id: 204,
    code: "cardio02-q204",
    area: ["cardio", "icu"],
    topic: ["arrhythmias", "atrial fibrillation"],
    level: "moderado",
    correct: 1,
    question: {
      pt: "Homem de 81 anos com fibrilação atrial permanente é internado na UTI por sepse urinária com disfunção renal. Apresenta PA 100x60 mmHg, FC 135 bpm, e sinais de hipoperfusão periférica. Qual a conduta inicial mais adequada em relação à frequência cardíaca?",
      en: "An 81-year-old man with permanent atrial fibrillation is admitted to the ICU with urinary sepsis and renal dysfunction. He has BP 100/60 mmHg, HR 135 bpm, and signs of peripheral hypoperfusion. What is the most appropriate initial management for heart rate?",
      es: "Hombre de 81 años con fibrilación auricular permanente ingresa en UCI por sepsis urinaria y disfunción renal. TA 100x60 mmHg, FC 135 lpm y signos de hipoperfusión periférica. ¿Cuál es la conducta inicial más adecuada respecto a la frecuencia cardíaca?"
    },
    options: [
      {
        text: {
          pt: "Cardioversão elétrica sincronizada",
          en: "Synchronized electrical cardioversion",
          es: "Cardioversión eléctrica sincronizada"
        },
        explanation: {
          pt: "Não é indicada para FA permanente e ausência de instabilidade refratária ou dor torácica.",
          en: "Not indicated for permanent AF without refractory instability or chest pain.",
          es: "No está indicada en FA permanente sin inestabilidad refractaria o dolor torácico."
        }
      },
      {
        text: {
          pt: "Uso de betabloqueador em dose cautelosa",
          en: "Cautious beta-blocker use",
          es: "Uso cauteloso de betabloqueador"
        },
        explanation: {
          pt: "Controle da frequência com betabloqueador de curta ação (como esmolol) pode melhorar a perfusão sem risco de bradicardia grave.",
          en: "Short-acting beta-blockers (e.g., esmolol) may improve perfusion by rate control without causing severe bradycardia.",
          es: "Betabloqueadores de acción corta (como esmolol) pueden mejorar la perfusión sin provocar bradicardia severa."
        }
      },
      {
        text: {
          pt: "Dobutamina para suporte inotrópico imediato",
          en: "Dobutamine for immediate inotropic support",
          es: "Dobutamina para soporte inotrópico inmediato"
        },
        explanation: {
          pt: "Dobutamina pode piorar a taquicardia em FA e não é indicada sem sinais de falência miocárdica aguda.",
          en: "Dobutamine may worsen tachycardia in AF and is not indicated without signs of acute myocardial failure.",
          es: "La dobutamina puede empeorar la taquicardia en FA y no está indicada sin signos de falla miocárdica aguda."
        }
      },
      {
        text: {
          pt: "Amiodarona em bolus seguida de infusão contínua",
          en: "Amiodarone bolus followed by continuous infusion",
          es: "Bolo de amiodarona seguido de infusión continua"
        },
        explanation: {
          pt: "Amiodarona é útil para controle do ritmo, mas não é primeira linha em FA permanente e pode ter risco adicional em disfunção renal.",
          en: "Amiodarone is rhythm control agent, not first-line in permanent AF, and may pose risks in renal dysfunction.",
          es: "La amiodarona es agente de control del ritmo, no de primera línea en FA permanente, y puede ser riesgosa con disfunción renal."
        }
      }
    ]
  },
  {
    id: 205,
    code: "cardio02-q205",
    area: ["cardio", "icu"],
    topic: ["pacemaker", "bradyarrhythmias"],
    level: "moderado",
    correct: 0,
    question: {
      pt: "Paciente de 74 anos apresenta episódios de síncope e bradicardia com FC de 38 bpm. ECG mostra bloqueio atrioventricular total (BAVT) com dissociação AV. Qual é a conduta mais apropriada na fase aguda?",
      en: "A 74-year-old patient presents with episodes of syncope and bradycardia (HR 38 bpm). ECG shows complete atrioventricular block (AV block) with AV dissociation. What is the most appropriate acute management?",
      es: "Paciente de 74 años presenta síncopes y bradicardia (FC 38 lpm). El ECG muestra bloqueo AV completo con disociación AV. ¿Cuál es la conducta más adecuada en fase aguda?"
    },
    options: [
      {
        text: {
          pt: "Implante de marcapasso transvenoso temporário",
          en: "Temporary transvenous pacemaker insertion",
          es: "Implante de marcapasos transvenoso temporal"
        },
        explanation: {
          pt: "Em casos de BAVT sintomático, o marcapasso transvenoso é indicado até decisão definitiva sobre implante permanente.",
          en: "In symptomatic complete AV block, temporary transvenous pacing is indicated until permanent pacemaker placement is decided.",
          es: "En bloqueo AV completo sintomático, se indica marcapasos transvenoso temporal hasta decidir el implante permanente."
        }
      },
      {
        text: {
          pt: "Uso de amiodarona intravenosa",
          en: "Intravenous amiodarone",
          es: "Amiodarona intravenosa"
        },
        explanation: {
          pt: "A amiodarona pode agravar bradiarritmias e é contraindicada em BAVT.",
          en: "Amiodarone may worsen bradyarrhythmias and is contraindicated in complete AV block.",
          es: "La amiodarona puede agravar bradiarritmias y está contraindicada en BAV completo."
        }
      },
      {
        text: {
          pt: "Início de betabloqueador oral",
          en: "Start oral beta-blocker",
          es: "Iniciar betabloqueador oral"
        },
        explanation: {
          pt: "Betabloqueadores estão contraindicados em bradicardia sintomática por bloqueio AV.",
          en: "Beta-blockers are contraindicated in symptomatic bradycardia due to AV block.",
          es: "Los betabloqueadores están contraindicados en bradicardia sintomática por bloqueo AV."
        }
      },
      {
        text: {
          pt: "Infusão de lidocaína contínua",
          en: "Continuous lidocaine infusion",
          es: "Infusión continua de lidocaína"
        },
        explanation: {
          pt: "A lidocaína é indicada para arritmias ventriculares, não para bloqueios AV.",
          en: "Lidocaine is used for ventricular arrhythmias, not AV blocks.",
          es: "La lidocaína se usa para arritmias ventriculares, no para bloqueos AV."
        }
      }
    ]
  },
  {
    id: 206,
    code: "cardio02-q206",
    area: ["cardio", "icu"],
    topic: ["IABP", "mechanical support"],
    level: "moderado",
    correct: 0,
    question: {
      pt: "Paciente de 70 anos com IAM extenso anterior é submetido à angioplastia, mas evolui com choque cardiogênico refratário apesar de dobutamina e noradrenalina. Qual dos seguintes benefícios é atribuído ao uso de balão intra-aórtico (IABP)?",
      en: "A 70-year-old patient with extensive anterior MI undergoes PCI but develops refractory cardiogenic shock despite dobutamine and norepinephrine. Which of the following is a recognized benefit of intra-aortic balloon pump (IABP) use?",
      es: "Paciente de 70 años con IAM extenso anterior es sometido a angioplastia pero evoluciona con shock cardiogénico refractario pese a dobutamina y noradrenalina. ¿Cuál de los siguientes es un beneficio atribuido al uso del balón intraaórtico (IABP)?"
    },
    options: [
      {
        text: {
          pt: "Aumento da perfusão coronariana diastólica",
          en: "Increased diastolic coronary perfusion",
          es: "Aumento de la perfusión coronaria diastólica"
        },
        explanation: {
          pt: "O IABP infla na diástole, elevando a pressão aórtica e favorecendo a perfusão das artérias coronárias.",
          en: "IABP inflates during diastole, raising aortic pressure and improving coronary perfusion.",
          es: "El IABP se infla en diástole, elevando la presión aórtica y mejorando la perfusión coronaria."
        }
      },
      {
        text: {
          pt: "Aumento direto da contratilidade ventricular",
          en: "Direct increase in ventricular contractility",
          es: "Aumento directo de la contractilidad ventricular"
        },
        explanation: {
          pt: "O IABP não tem ação inotrópica direta, mas melhora a hemodinâmica por mecanismos passivos.",
          en: "IABP has no direct inotropic effect but improves hemodynamics through passive mechanisms.",
          es: "El IABP no tiene efecto inotrópico directo, pero mejora la hemodinámica por mecanismos pasivos."
        }
      },
      {
        text: {
          pt: "Redução do volume sistólico final",
          en: "Reduction in end-systolic volume",
          es: "Reducción del volumen telesistólico"
        },
        explanation: {
          pt: "Essa redução pode ocorrer secundariamente à redução da pós-carga, mas não é o principal efeito buscado.",
          en: "This may occur secondarily to afterload reduction but is not the primary target.",
          es: "Esta reducción puede ocurrir secundariamente a la reducción de poscarga, pero no es el objetivo principal."
        }
      },
      {
        text: {
          pt: "Melhora da frequência cardíaca intrínseca",
          en: "Improvement in intrinsic heart rate",
          es: "Mejora de la frecuencia cardíaca intrínseca"
        },
        explanation: {
          pt: "O IABP não afeta a frequência cardíaca diretamente.",
          en: "IABP does not directly influence heart rate.",
          es: "El IABP no influye directamente en la frecuencia cardíaca."
        }
      }
    ]
  },
  {
    id: 207,
    code: "cardio02-q207",
    area: ["cardio", "icu"],
    topic: ["ECMO-VA", "mechanical support"],
    level: "moderado",
    correct: 2,
    question: {
      pt: "Paciente de 58 anos com choque cardiogênico refratário após IAM extenso é indicado para ECMO venoarterial (ECMO-VA). Qual das seguintes características é verdadeira sobre a ECMO-VA neste context?",
      en: "A 58-year-old patient with refractory cardiogenic shock after extensive MI is referred for venoarterial ECMO (ECMO-VA). Which of the following statements is true regarding ECMO-VA in this context?",
      es: "Paciente de 58 años con shock cardiogénico refractario tras IAM extenso es indicado para ECMO venoarterial (ECMO-VA). ¿Cuál de las siguientes afirmaciones es verdadera sobre la ECMO-VA en este context?"
    },
    options: [
      {
        text: {
          pt: "ECMO-VA reduz a necessidade de anticoagulação em comparação com dispositivos de assistência ventricular",
          en: "ECMO-VA reduces the need for anticoagulation compared to ventricular assist devices",
          es: "La ECMO-VA reduce la necesidad de anticoagulación en comparación con los dispositivos de asistencia ventricular"
        },
        explanation: {
          pt: "A ECMO requer anticoagulação contínua devido ao risco de trombose no circuito extracorpóreo.",
          en: "ECMO requires continuous anticoagulation due to the risk of thrombosis in the extracorporeal circuit.",
          es: "La ECMO requiere anticoagulación continua por el riesgo de trombosis en el circuito extracorpóreo."
        }
      },
      {
        text: {
          pt: "ECMO-VA fornece suporte exclusivamente respiratório",
          en: "ECMO-VA provides exclusively respiratory support",
          es: "La ECMO-VA brinda exclusivamente soporte respiratorio"
        },
        explanation: {
          pt: "Esse é o papel da ECMO venovenosa (VV), não da VA. A ECMO-VA oferece suporte hemodinâmico e respiratório.",
          en: "This applies to VV-ECMO, not VA. VA-ECMO provides both hemodynamic and respiratory support.",
          es: "Eso aplica a la ECMO-VV. La ECMO-VA brinda soporte hemodinámico y respiratorio."
        }
      },
      {
        text: {
          pt: "ECMO-VA pode aumentar a pós-carga do ventrículo esquerdo",
          en: "ECMO-VA may increase left ventricular afterload",
          es: "La ECMO-VA puede aumentar la poscarga del ventrículo izquierdo"
        },
        explanation: {
          pt: "Por infundir sangue na aorta, a ECMO-VA pode aumentar a resistência contra a qual o VE precisa ejetar, exigindo estratégias para descarga ventricular.",
          en: "By infusing blood into the aorta, VA-ECMO may increase afterload against which the LV ejects, requiring unloading strategies.",
          es: "Al infundir sangre en la aorta, la ECMO-VA puede aumentar la poscarga del VI, requiriendo estrategias de descarga."
        }
      },
      {
        text: {
          pt: "ECMO-VA é contraindicada em pacientes pós-IAM",
          en: "ECMO-VA is contraindicated in post-MI patients",
          es: "La ECMO-VA está contraindicada en pacientes post-IAM"
        },
        explanation: {
          pt: "Muito pelo contrário: a ECMO-VA é frequentemente indicada em choque cardiogênico pós-IAM refratário.",
          en: "Quite the opposite: VA-ECMO is often indicated in refractory post-MI cardiogenic shock.",
          es: "Al contrario: la ECMO-VA suele indicarse en shock cardiogénico post-IAM refractario."
        }
      }
    ]
  },
  {
    id: 208,
    code: "cardio02-q208",
    area: ["cardio", "icu"],
    topic: ["shock", "hemodynamics"],
    level: "moderado",
    correct: 1,
    question: {
      pt: "Em relação aos tipos de choque circulatório, qual das seguintes afirmações está correct?",
      en: "Regarding the types of circulatory shock, which of the following statements is correct?",
      es: "Respecto a los tipos de shock circulatorio, ¿cuál de las siguientes afirmaciones es correcta?"
    },
    options: [
      {
        text: {
          pt: "Choque séptico cursa com aumento da resistência vascular sistêmica",
          en: "Septic shock is associated with increased systemic vascular resistance",
          es: "El shock séptico se asocia a un aumento de la resistencia vascular sistémica"
        },
        explanation: {
          pt: "Choque séptico cursa com vasodilatação e resistência vascular sistêmica reduzida, especialmente na fase inicial.",
          en: "Septic shock typically presents with vasodilation and reduced systemic vascular resistance, especially in early stages.",
          es: "El shock séptico cursa con vasodilatación y reducción de la resistencia vascular sistémica, especialmente en fases iniciales."
        }
      },
      {
        text: {
          pt: "Choque obstrutivo pode ser causado por embolia pulmonar maciça",
          en: "Obstructive shock can be caused by massive pulmonary embolism",
          es: "El shock obstructivo puede ser causado por embolia pulmonar masiva"
        },
        explanation: {
          pt: "A embolia pulmonar maciça impede o retorno venoso e o enchimento do ventrículo esquerdo, caracterizando choque obstrutivo.",
          en: "Massive pulmonary embolism impairs venous return and left ventricular filling, characterizing obstructive shock.",
          es: "La embolia pulmonar masiva impide el retorno venoso y el llenado del VI, caracterizando shock obstructivo."
        }
      },
      {
        text: {
          pt: "Choque hipovolêmico é tratado prioritariamente com vasopressores",
          en: "Hypovolemic shock is primarily treated with vasopressors",
          es: "El shock hipovolémico se trata prioritariamente con vasopresores"
        },
        explanation: {
          pt: "O tratamento inicial do choque hipovolêmico é a reposição volêmica com cristaloides ou hemocomponentes.",
          en: "Initial treatment for hypovolemic shock involves fluid resuscitation with crystalloids or blood products.",
          es: "El tratamiento inicial del shock hipovolémico implica reposición con cristaloides o hemoderivados."
        }
      },
      {
        text: {
          pt: "Choque cardiogênico cursa com débito cardíaco normal",
          en: "Cardiogenic shock presents with normal cardiac output",
          es: "El shock cardiogénico cursa con gasto cardíaco normal"
        },
        explanation: {
          pt: "Choque cardiogênico caracteriza-se por débito cardíaco reduzido, devido à falência ventricular.",
          en: "Cardiogenic shock is defined by reduced cardiac output due to ventricular failure.",
          es: "El shock cardiogénico se caracteriza por gasto cardíaco reducido debido a fallo ventricular."
        }
      }
    ]
  },
  {
    id: 209,
    code: "cardio02-q209",
    area: ["cardio", "icu"],
    topic: ["electrolyte disorders", "arrhythmias"],
    level: "moderado",
    correct: 2,
    question: {
      pt: "Paciente de 60 anos internado na UTI por sepse abdominal apresenta extrassístoles ventriculares frequentes. O ECG mostra intervalo QT prolongado. O potássio sérico é 3,0 mEq/L e o magnésio é 1,2 mg/dL. Qual a conduta inicial mais adequada?",
      en: "A 60-year-old patient admitted to the ICU for abdominal sepsis presents with frequent ventricular extrasystoles. ECG shows prolonged QT interval. Serum potassium is 3.0 mEq/L and magnesium is 1.2 mg/dL. What is the most appropriate initial management?",
      es: "Paciente de 60 años ingresado en UCI por sepsis abdominal presenta extrasístoles ventriculares frecuentes. El ECG muestra QT prolongado. El potasio sérico es 3,0 mEq/L y el magnesio 1,2 mg/dL. ¿Cuál es la conducta inicial más adecuada?"
    },
    options: [
      {
        text: {
          pt: "Administrar betabloqueador de curta ação",
          en: "Administer short-acting beta-blocker",
          es: "Administrar betabloqueador de acción corta"
        },
        explanation: {
          pt: "Betabloqueadores não corrigem distúrbios eletrolíticos e podem agravar arritmias em hipocalemia e hipomagnesemia.",
          en: "Beta-blockers do not correct electrolyte imbalances and may worsen arrhythmias in hypokalemia and hypomagnesemia.",
          es: "Los betabloqueadores no corrigen trastornos electrolíticos y pueden empeorar arritmias en hipokalemia e hipomagnesemia."
        }
      },
      {
        text: {
          pt: "Iniciar infusão de amiodarona intravenosa",
          en: "Start intravenous amiodarone infusion",
          es: "Iniciar infusión intravenosa de amiodarona"
        },
        explanation: {
          pt: "Amiodarona pode prolongar ainda mais o QT e não é primeira linha em distúrbios eletrolíticos com arritmias.",
          en: "Amiodarone may further prolong QT and is not first-line for electrolyte-related arrhythmias.",
          es: "La amiodarona puede prolongar aún más el QT y no es de primera línea para arritmias por trastornos electrolíticos."
        }
      },
      {
        text: {
          pt: "Corrigir potássio e magnésio imediatamente",
          en: "Correct potassium and magnesium immediately",
          es: "Corregir potasio y magnesio de inmediato"
        },
        explanation: {
          pt: "A correção dos distúrbios eletrolíticos é fundamental para interromper a arritmia e prevenir torsades de pointes.",
          en: "Correcting electrolyte disturbances is key to interrupting arrhythmia and preventing torsades de pointes.",
          es: "Corregir los trastornos electrolíticos es esencial para detener la arritmia y prevenir torsades de pointes."
        }
      },
      {
        text: {
          pt: "Administrar atropina 1 mg intravenoso",
          en: "Administer 1 mg intravenous atropine",
          es: "Administrar 1 mg de atropina intravenosa"
        },
        explanation: {
          pt: "A atropina é indicada para bradiarritmias, não para arritmias ventriculares associadas a distúrbios eletrolíticos.",
          en: "Atropine is used for bradyarrhythmias, not for ventricular arrhythmias related to electrolyte disorders.",
          es: "La atropina se usa para bradiarritmias, no para arritmias ventriculares por trastornos electrolíticos."
        }
      }
    ]
  },
  {
    id: 210,
    code: "cardio02-q210",
    area: ["cardio", "icu"],
    topic: ["anticoagulation", "myocardial infarction"],
    level: "moderado",
    correct: 3,
    question: {
      pt: "Homem de 75 anos com fibrilação atrial paroxística e uso crônico de apixabana é admitido na UTI após IAM com supra de ST tratado com angioplastia e stent farmacológico. Qual conduta é mais adequada em relação à anticoagulação e antiagregação?",
      en: "A 75-year-old man with paroxysmal atrial fibrillation on chronic apixaban is admitted to the ICU after STEMI treated with PCI and drug-eluting stent. What is the most appropriate approach regarding anticoagulation and antiplatelet therapy?",
      es: "Hombre de 75 años con fibrilación auricular paroxística en uso crónico de apixabán ingresa a UCI tras IAMCEST tratado con angioplastia y stent farmacológico. ¿Cuál es la mejor conducta respecto a anticoagulación y antiagregación?"
    },
    options: [
      {
        text: {
          pt: "Suspender anticoagulação e manter dupla antiagregação",
          en: "Stop anticoagulation and keep dual antiplatelet therapy",
          es: "Suspender anticoagulación y mantener doble antiagregación"
        },
        explanation: {
          pt: "Suspender o anticoagulante em paciente com FA aumenta risco tromboembólico. Deve-se avaliar o risco isquêmico e hemorrágico.",
          en: "Stopping anticoagulants in AF patients increases thromboembolic risk. Both ischemic and bleeding risks must be balanced.",
          es: "Suspender anticoagulación en pacientes con FA aumenta el riesgo tromboembólico. Debe evaluarse riesgo isquémico y hemorrágico."
        }
      },
      {
        text: {
          pt: "Trocar apixabana por heparina não fracionada por 14 dias",
          en: "Switch apixaban to unfractionated heparin for 14 days",
          es: "Cambiar apixabán por heparina no fraccionada durante 14 días"
        },
        explanation: {
          pt: "Não há benefício em substituir DOAC por heparina após angioplastia estável, a não ser por necessidade específica (ex: cirurgia).",
          en: "No benefit in switching DOAC to heparin post-PCI unless specific need (e.g., surgery).",
          es: "No hay beneficio en cambiar DOAC por heparina tras angioplastia, salvo indicación específica (ej: cirugía)."
        }
      },
      {
        text: {
          pt: "Manter apenas anticoagulação oral crônica",
          en: "Continue chronic oral anticoagulation only",
          es: "Mantener solo anticoagulación oral crónica"
        },
        explanation: {
          pt: "A anticoagulação isolada não é suficiente no período inicial pós-stent. A antiagregação plaquetária é necessária por tempo determinado.",
          en: "Anticoagulation alone is insufficient early post-stenting. Antiplatelet therapy is needed for a defined period.",
          es: "La anticoagulación sola no es suficiente en el período inicial post-stent. Se requiere antiagregación por tiempo determinado."
        }
      },
      {
        text: {
          pt: "Manter anticoagulação com apixabana e associar antiagregação plaquetária dupla por tempo limitado",
          en: "Continue apixaban and add dual antiplatelet therapy for a limited time",
          es: "Mantener apixabán y agregar doble antiagregación por tiempo limitado"
        },
        explanation: {
          pt: "A estratégia atual recomendada é usar anticoagulação + dupla antiagregação por curto período (até 1 semana) e seguir com anticoagulação + um antiagregante.",
          en: "Current recommendation is anticoagulation + dual antiplatelet for a short period (up to 1 week), then anticoagulation + one antiplatelet.",
          es: "La recomendación actual es anticoagulación + doble antiagregación por corto período (hasta 1 semana), luego anticoagulación + un antiagregante."
        }
      }
    ]
  },
  {
    id: 211,
    code: "cardio02-q211",
    area: ["cardio", "icu"],
    topic: ["pericardiocentesis", "tamponade"],
    level: "moderado",
    correct: 0,
    question: {
      pt: "Homem de 65 anos com neoplasia pulmonar metastática apresenta-se com dispneia progressiva, hipotensão e turgência jugular. ECG mostra baixa voltagem e alternância elétrica. Ecocardiograma revela derrame pericárdico volumoso com colapso diastólico de átrio direito. Qual a conduta imediata?",
      en: "A 65-year-old man with metastatic lung cancer presents with progressive dyspnea, hypotension, and jugular vein distention. ECG shows low voltage and electrical alternans. Echo reveals large pericardial effusion with right atrial diastolic collapse. What is the immediate management?",
      es: "Hombre de 65 años con cáncer pulmonar metastásico se presenta con disnea progresiva, hipotensión y distensión yugular. El ECG muestra bajo voltaje y alternancia eléctrica. El ecocardiograma revela derrame pericárdico importante con colapso diastólico auricular derecho. ¿Cuál es la conducta inmediata?"
    },
    options: [
      {
        text: {
          pt: "Realizar pericardiocentese guiada por imagem",
          en: "Perform image-guided pericardiocentesis",
          es: "Realizar pericardiocentesis guiada por imagen"
        },
        explanation: {
          pt: "A pericardiocentese está indicada de forma emergencial no tamponamento cardíaco com instabilidade hemodinâmica.",
          en: "Pericardiocentesis is urgently indicated in cardiac tamponade with hemodynamic instability.",
          es: "La pericardiocentesis está indicada de forma urgente en taponamiento cardíaco con inestabilidad hemodinámica."
        }
      },
      {
        text: {
          pt: "Administrar furosemida intravenosa",
          en: "Administer intravenous furosemide",
          es: "Administrar furosemida intravenosa"
        },
        explanation: {
          pt: "Diuréticos não tratam tamponamento e podem reduzir ainda mais o débito cardíaco em pacientes com pressão pericárdica elevada.",
          en: "Diuretics do not treat tamponade and may further reduce cardiac output in patients with high pericardial pressure.",
          es: "Los diuréticos no tratan el taponamiento y pueden reducir aún más el gasto cardíaco en pacientes con presión pericárdica elevada."
        }
      },
      {
        text: {
          pt: "Iniciar noradrenalina em bomba de infusão contínua",
          en: "Start continuous norepinephrine infusion",
          es: "Iniciar norepinefrina en infusión continua"
        },
        explanation: {
          pt: "Vasopressores não resolvem a causa mecânica do tamponamento e podem retardar a resolução adequada.",
          en: "Vasopressors do not correct the mechanical cause of tamponade and may delay appropriate resolution.",
          es: "Los vasopresores no resuelven la causa mecánica del taponamiento y pueden demorar la resolución adecuada."
        }
      },
      {
        text: {
          pt: "Observar evolução clínica com monitorização",
          en: "Observe clinical evolution with monitoring",
          es: "Observar evolución clínica con monitorización"
        },
        explanation: {
          pt: "A conduta expectante não é indicada diante de tamponamento cardíaco com repercussão hemodinâmica.",
          en: "Expectant management is not appropriate in hemodynamically significant cardiac tamponade.",
          es: "La conducta expectante no es adecuada ante taponamiento con repercusión hemodinámica."
        }
      }
    ]
  },
  {
  id: 212,
  code: "cardio02-q212",
  area: ["cardio", "icu"],
  topic: ["aortic dissection", "hypertensive emergencies", "chest pain"],
  level: "moderado",
  correct: 0,
  question: {
    pt: "Um paciente de 58 anos, previamente hipertenso, chega ao serviço de emergência com dor torácica súbita e intensa irradiando para as costas. Apresenta PA de 210/110 mmHg e diferença de pulsos entre os membros superiores. A angio-TC revela dissecção aguda de aorta tipo B (DeBakey III). Qual a conduta inicial mais adequada?",
    en: "A 58-year-old patient with a history of hypertension presents to the emergency department with sudden, severe chest pain radiating to the back. Blood pressure is 210/110 mmHg and there is a pulse deficit between the upper limbs. CT angiography confirms an acute type B aortic dissection (DeBakey III). What is the most appropriate initial management?",
    es: "Un paciente de 58 años con antecedentes de hipertensión llega al servicio de urgencias con dolor torácico súbito e intenso que irradia hacia la espalda. La presión arterial es de 210/110 mmHg y hay un déficit de pulso entre los miembros superiores. La angio-TC confirma una disección aórtica tipo B aguda (DeBakey III). ¿Cuál es la conducta inicial más adecuada?"
  },
  options: [
    {
      text: {
        pt: "Controle rigoroso da PA com beta-bloqueadores intravenosos",
        en: "Strict blood pressure control with intravenous beta-blockers",
        es: "Control estricto de la presión arterial con betabloqueantes intravenosos"
      },
      explanation: {
        pt: "A dissecção tipo B não complicada deve ser manejada inicialmente com controle rigoroso da PA e da frequência cardíaca com beta-bloqueadores IV, como labetalol ou esmolol, reduzindo a força de ejeção e o estresse na parede aórtica.",
        en: "Uncomplicated type B dissection should be initially managed with strict BP and heart rate control using IV beta-blockers such as labetalol or esmolol, reducing ejection force and aortic wall stress.",
        es: "La disección tipo B no complicada debe manejarse inicialmente con control estricto de la presión y frecuencia cardíaca usando betabloqueantes IV como labetalol o esmolol, reduciendo la fuerza de eyección y el estrés en la pared aórtica."
      }
    },
    {
      text: {
        pt: "Cirurgia de emergência com colocação de stent aórtico",
        en: "Emergency surgery with aortic stent placement",
        es: "Cirugía de emergencia con colocación de stent aórtico"
      },
      explanation: {
        pt: "A cirurgia ou endoprótese está reservada para casos complicados (dor refratária, isquemia, ruptura iminente). Não é a conduta inicial padrão para casos não complicados.",
        en: "Surgical or endovascular repair is reserved for complicated cases (refractory pain, ischemia, impending rupture). It is not the standard initial approach for uncomplicated cases.",
        es: "La cirugía o el stent se reservan para casos complicados (dolor refractario, isquemia, ruptura inminente). No es el abordaje inicial estándar en casos no complicados."
      }
    },
    {
      text: {
        pt: "Reposição volêmica com cristaloides para normalizar o pulso",
        en: "Fluid resuscitation with crystalloids to normalize pulse",
        es: "Reposición con cristaloides para normalizar el pulso"
      },
      explanation: {
        pt: "Reposição volêmica pode agravar a dissecção e aumentar a pressão intraluminal. Não é indicada como conduta inicial.",
        en: "Fluid resuscitation may worsen the dissection by increasing intraluminal pressure. It is not an initial strategy.",
        es: "La reposición de volumen puede empeorar la disección al aumentar la presión intraluminal. No es estrategia inicial."
      }
    },
    {
      text: {
        pt: "Administração imediata de trombolítico intravenoso",
        en: "Immediate administration of intravenous thrombolytics",
        es: "Administración inmediata de trombolíticos intravenosos"
      },
      explanation: {
        pt: "Trombolíticos são contraindicados em dissecção aórtica e podem causar ruptura catastrófica da aorta.",
        en: "Thrombolytics are contraindicated in aortic dissection and may lead to catastrophic rupture.",
        es: "Los trombolíticos están contraindicados en la disección aórtica y pueden causar ruptura catastrófica."
      }
    }
  ]
 },
{
  id: 213,
  code: "cardio02-q213",
  area: ["cardio", "icu"],
  topic: ["ACLS", "cardiac arrest", "defibrillation"],
  level: "moderado",
  correct: 0,
  question: {
    pt: "Paciente de 60 anos sofre parada cardiorrespiratória no hospital. Monitor mostra fibrilação ventricular. Após início imediato de RCP de alta qualidade, qual a próxima intervenção recomendada?",
    en: "A 60-year-old patient suffers a cardiac arrest in the hospital. The monitor shows ventricular fibrillation. After initiating high-quality CPR, what is the next recommended intervention?",
    es: "Paciente de 60 años sufre un paro cardiorrespiratorio en el hospital. El monitor muestra fibrilación ventricular. Tras iniciar RCP de alta calidad, ¿cuál es la siguiente intervención recomendada?"
  },
  options: [
    {
      text: {
        pt: "Desfibrilação com carga adequada o mais rápido possível",
        en: "Defibrillation with appropriate energy as soon as possible",
        es: "Desfibrilación con energía adecuada lo antes posible"
      },
      explanation: {
        pt: "A desfibrilação precoce é essencial em ritmos chocáveis como FV e TV sem pulso. Deve ser realizada o mais rapidamente possível após o início da RCP.",
        en: "Early defibrillation is critical in shockable rhythms like VF and pulseless VT. It should be performed as soon as possible after starting CPR.",
        es: "La desfibrilación precoz es esencial en ritmos desfibrilables como la FV y la TV sin pulso. Debe realizarse lo antes posible tras iniciar la RCP."
      }
    },
    {
      text: {
        pt: "Administração imediata de adrenalina IV",
        en: "Immediate administration of IV epinephrine",
        es: "Administración inmediata de epinefrina IV"
      },
      explanation: {
        pt: "A adrenalina é administrada após a segunda desfibrilação, não de forma imediata no início do protocolo em FV/TV sem pulso.",
        en: "Epinephrine is administered after the second defibrillation, not immediately at the beginning of the VF/pulseless VT algorithm.",
        es: "La epinefrina se administra después de la segunda desfibrilación, no de forma inmediata al iniciar el protocolo de FV/TV sin pulso."
      }
    },
    {
      text: {
        pt: "Intubação orotraqueal imediata para proteger via aérea",
        en: "Immediate endotracheal intubation to secure airway",
        es: "Intubación orotraqueal inmediata para asegurar la vía aérea"
      },
      explanation: {
        pt: "A prioridade inicial em ritmos chocáveis é RCP e desfibrilação. Intubação não deve atrasar essas medidas.",
        en: "Initial priority in shockable rhythms is CPR and defibrillation. Intubation should not delay these measures.",
        es: "La prioridad inicial en ritmos desfibrilables es RCP y desfibrilación. La intubación no debe retrasar estas medidas."
      }
    },
    {
      text: {
        pt: "Administração de amiodarona antes da primeira desfibrilação",
        en: "Administration of amiodarone before the first defibrillation",
        es: "Administración de amiodarona antes de la primera desfibrilación"
      },
      explanation: {
        pt: "Amiodarona é considerada após a terceira desfibrilação em ritmos refratários, não antes da primeira.",
        en: "Amiodarone is considered after the third shock in refractory rhythms, not before the first defibrillation.",
        es: "La amiodarona se considera tras la tercera desfibrilación en ritmos refractarios, no antes de la primera."
      }
    }
  ]
 },
{
  id: 214,
  code: "cardio02-q214",
  area: ["cardio", "icu"],
  topic: ["ACLS", "cardiac arrest", "PEA", "asystole"],
  level: "moderado",
  correct: 1,
  question: {
    pt: "Homem de 67 anos, internado em UTI por sepse, evolui com parada cardiorrespiratória. Monitor mostra ritmo sem complexos QRS organizados e sem pulso palpável. Qual a conduta correct de acordo com o algoritmo de ACLS?",
    en: "A 67-year-old man in the ICU for sepsis develops cardiac arrest. The monitor shows no organized QRS complexes and no palpable pulse. What is the correct management according to the ACLS algorithm?",
    es: "Hombre de 67 años en UCI por sepsis presenta paro cardiorrespiratorio. El monitor no muestra complejos QRS organizados ni pulso palpable. ¿Cuál es la conducta correcta según el algoritmo ACLS?"
  },
  options: [
    {
      text: {
        pt: "Desfibrilação imediata com carga máxima",
        en: "Immediate defibrillation with maximum energy",
        es: "Desfibrilación inmediata con energía máxima"
      },
      explanation: {
        pt: "A desfibrilação está indicada apenas em ritmos chocáveis como FV ou TV sem pulso. Em assistolia/AESP não há indicação.",
        en: "Defibrillation is indicated only for shockable rhythms like VF or pulseless VT. It is not indicated in asystole/PEA.",
        es: "La desfibrilación está indicada solo en ritmos desfibrilables como FV o TV sin pulso. No se indica en asistolia/PEA."
      }
    },
    {
      text: {
        pt: "Início imediato de RCP e administração de adrenalina a cada 3-5 minutos",
        en: "Immediate CPR and administration of epinephrine every 3–5 minutes",
        es: "Inicio inmediato de RCP y administración de epinefrina cada 3–5 minutos"
      },
      explanation: {
        pt: "O manejo da AESP ou assistolia exige RCP imediata e adrenalina a cada 3–5 minutos, além de investigação das causas reversíveis (5Hs e 5Ts).",
        en: "PEA or asystole requires immediate CPR and epinephrine every 3–5 minutes, plus investigation of reversible causes (5 Hs and 5 Ts).",
        es: "La AESP o asistolia exige RCP inmediata y epinefrina cada 3–5 minutos, además de investigar causas reversibles (5H y 5T)."
      }
    },
    {
      text: {
        pt: "Cardioversão sincronizada com sedação",
        en: "Synchronized cardioversion with sedation",
        es: "Cardioversión sincronizada con sedación"
      },
      explanation: {
        pt: "Cardioversão é indicada em ritmos instáveis com QRS organizados (ex: taquicardia com pulso), não em parada com AESP.",
        en: "Synchronized cardioversion is used for unstable rhythms with organized QRS (e.g., tachycardia with pulse), not in PEA.",
        es: "La cardioversión sincronizada se usa para ritmos inestables con QRS organizado (como taquicardia con pulso), no en AESP."
      }
    },
    {
      text: {
        pt: "Administração precoce de amiodarona e sulfato de magnésio",
        en: "Early administration of amiodarone and magnesium sulfate",
        es: "Administración precoz de amiodarona y sulfato de magnesio"
      },
      explanation: {
        pt: "Esses fármacos são indicados em casos específicos (TV/FV refratárias, torsades de pointes), não na AESP ou assistolia.",
        en: "These drugs are indicated in specific situations (refractory VF/VT, torsades de pointes), not in PEA or asystole.",
        es: "Estos fármacos se indican en situaciones específicas (FV/TV refractaria, torsades de pointes), no en AESP o asistolia."
      }
    }
  ]
 },
{
  id: 213,
  code: "cardio02-q213",
  area: ["cardio", "icu"],
  topic: ["ACLS", "cardiac arrest", "defibrillation"],
  level: "moderado",
  correct: 0,
  question: {
    pt: "Paciente de 60 anos sofre parada cardiorrespiratória no hospital. Monitor mostra fibrilação ventricular. Após início imediato de RCP de alta qualidade, qual a próxima intervenção recomendada?",
    en: "A 60-year-old patient suffers a cardiac arrest in the hospital. The monitor shows ventricular fibrillation. After initiating high-quality CPR, what is the next recommended intervention?",
    es: "Paciente de 60 años sufre un paro cardiorrespiratorio en el hospital. El monitor muestra fibrilación ventricular. Tras iniciar RCP de alta calidad, ¿cuál es la siguiente intervención recomendada?"
  },
  options: [
    {
      text: {
        pt: "Desfibrilação com carga adequada o mais rápido possível",
        en: "Defibrillation with appropriate energy as soon as possible",
        es: "Desfibrilación con energía adecuada lo antes posible"
      },
      explanation: {
        pt: "A desfibrilação precoce é essencial em ritmos chocáveis como FV e TV sem pulso. Deve ser realizada o mais rapidamente possível após o início da RCP.",
        en: "Early defibrillation is critical in shockable rhythms like VF and pulseless VT. It should be performed as soon as possible after starting CPR.",
        es: "La desfibrilación precoz es esencial en ritmos desfibrilables como la FV y la TV sin pulso. Debe realizarse lo antes posible tras iniciar la RCP."
      }
    },
    {
      text: {
        pt: "Administração imediata de adrenalina IV",
        en: "Immediate administration of IV epinephrine",
        es: "Administración inmediata de epinefrina IV"
      },
      explanation: {
        pt: "A adrenalina é administrada após a segunda desfibrilação, não de forma imediata no início do protocolo em FV/TV sem pulso.",
        en: "Epinephrine is administered after the second defibrillation, not immediately at the beginning of the VF/pulseless VT algorithm.",
        es: "La epinefrina se administra después de la segunda desfibrilación, no de forma inmediata al iniciar el protocolo de FV/TV sin pulso."
      }
    },
    {
      text: {
        pt: "Intubação orotraqueal imediata para proteger via aérea",
        en: "Immediate endotracheal intubation to secure airway",
        es: "Intubación orotraqueal inmediata para asegurar la vía aérea"
      },
      explanation: {
        pt: "A prioridade inicial em ritmos chocáveis é RCP e desfibrilação. Intubação não deve atrasar essas medidas.",
        en: "Initial priority in shockable rhythms is CPR and defibrillation. Intubation should not delay these measures.",
        es: "La prioridad inicial en ritmos desfibrilables es RCP y desfibrilación. La intubación no debe retrasar estas medidas."
      }
    },
    {
      text: {
        pt: "Administração de amiodarona antes da primeira desfibrilação",
        en: "Administration of amiodarone before the first defibrillation",
        es: "Administración de amiodarona antes de la primera desfibrilación"
      },
      explanation: {
        pt: "Amiodarona é considerada após a terceira desfibrilação em ritmos refratários, não antes da primeira.",
        en: "Amiodarone is considered after the third shock in refractory rhythms, not before the first defibrillation.",
        es: "La amiodarona se considera tras la tercera desfibrilación en ritmos refractarios, no antes de la primera."
      }
    }
  ]
 },
{
  id: 214,
  code: "cardio02-q214",
  area: ["cardio", "icu"],
  topic: ["ACLS", "cardiac arrest", "PEA", "asystole"],
  level: "moderado",
  correct: 1,
  question: {
    pt: "Homem de 67 anos, internado em UTI por sepse, evolui com parada cardiorrespiratória. Monitor mostra ritmo sem complexos QRS organizados e sem pulso palpável. Qual a conduta correct de acordo com o algoritmo de ACLS?",
    en: "A 67-year-old man in the ICU for sepsis develops cardiac arrest. The monitor shows no organized QRS complexes and no palpable pulse. What is the correct management according to the ACLS algorithm?",
    es: "Hombre de 67 años en UCI por sepsis presenta paro cardiorrespiratorio. El monitor no muestra complejos QRS organizados ni pulso palpable. ¿Cuál es la conducta correcta según el algoritmo ACLS?"
  },
  options: [
    {
      text: {
        pt: "Desfibrilação imediata com carga máxima",
        en: "Immediate defibrillation with maximum energy",
        es: "Desfibrilación inmediata con energía máxima"
      },
      explanation: {
        pt: "A desfibrilação está indicada apenas em ritmos chocáveis como FV ou TV sem pulso. Em assistolia/AESP não há indicação.",
        en: "Defibrillation is indicated only for shockable rhythms like VF or pulseless VT. It is not indicated in asystole/PEA.",
        es: "La desfibrilación está indicada solo en ritmos desfibrilables como FV o TV sin pulso. No se indica en asistolia/PEA."
      }
    },
    {
      text: {
        pt: "Início imediato de RCP e administração de adrenalina a cada 3-5 minutos",
        en: "Immediate CPR and administration of epinephrine every 3–5 minutes",
        es: "Inicio inmediato de RCP y administración de epinefrina cada 3–5 minutos"
      },
      explanation: {
        pt: "O manejo da AESP ou assistolia exige RCP imediata e adrenalina a cada 3–5 minutos, além de investigação das causas reversíveis (5Hs e 5Ts).",
        en: "PEA or asystole requires immediate CPR and epinephrine every 3–5 minutes, plus investigation of reversible causes (5 Hs and 5 Ts).",
        es: "La AESP o asistolia exige RCP inmediata y epinefrina cada 3–5 minutos, además de investigar causas reversibles (5H y 5T)."
      }
    },
    {
      text: {
        pt: "Cardioversão sincronizada com sedação",
        en: "Synchronized cardioversion with sedation",
        es: "Cardioversión sincronizada con sedación"
      },
      explanation: {
        pt: "Cardioversão é indicada em ritmos instáveis com QRS organizados (ex: taquicardia com pulso), não em parada com AESP.",
        en: "Synchronized cardioversion is used for unstable rhythms with organized QRS (e.g., tachycardia with pulse), not in PEA.",
        es: "La cardioversión sincronizada se usa para ritmos inestables con QRS organizado (como taquicardia con pulso), no en AESP."
      }
    },
    {
      text: {
        pt: "Administração precoce de amiodarona e sulfato de magnésio",
        en: "Early administration of amiodarone and magnesium sulfate",
        es: "Administración precoz de amiodarona y sulfato de magnesio"
      },
      explanation: {
        pt: "Esses fármacos são indicados em casos específicos (TV/FV refratárias, torsades de pointes), não na AESP ou assistolia.",
        en: "These drugs are indicated in specific situations (refractory VF/VT, torsades de pointes), not in PEA or asystole.",
        es: "Estos fármacos se indican en situaciones específicas (FV/TV refractaria, torsades de pointes), no en AESP o asistolia."
      }
    }
  ]
 },
{
  id: 215,
  code: "cardio02-q215",
  area: ["cardio", "icu"],
  topic: ["ACLS", "cardiac arrest", "PEA", "asystole"],
  level: "moderado",
  correct: 1,
  question: {
    pt: "Homem de 67 anos, internado em UTI por sepse, evolui com parada cardiorrespiratória. Monitor mostra ritmo sem complexos QRS organizados e sem pulso palpável. Qual a conduta correct de acordo com o algoritmo de ACLS?",
    en: "A 67-year-old man in the ICU for sepsis develops cardiac arrest. The monitor shows no organized QRS complexes and no palpable pulse. What is the correct management according to the ACLS algorithm?",
    es: "Hombre de 67 años en UCI por sepsis presenta paro cardiorrespiratorio. El monitor no muestra complejos QRS organizados ni pulso palpable. ¿Cuál es la conducta correcta según el algoritmo ACLS?"
  },
  options: [
    {
      text: {
        pt: "Desfibrilação imediata com carga máxima",
        en: "Immediate defibrillation with maximum energy",
        es: "Desfibrilación inmediata con energía máxima"
      },
      explanation: {
        pt: "A desfibrilação está indicada apenas em ritmos chocáveis como FV ou TV sem pulso. Em assistolia/AESP não há indicação.",
        en: "Defibrillation is indicated only for shockable rhythms like VF or pulseless VT. It is not indicated in asystole/PEA.",
        es: "La desfibrilación está indicada solo en ritmos desfibrilables como FV o TV sin pulso. No se indica en asistolia/PEA."
      }
    },
    {
      text: {
        pt: "Início imediato de RCP e administração de adrenalina a cada 3-5 minutos",
        en: "Immediate CPR and administration of epinephrine every 3–5 minutes",
        es: "Inicio inmediato de RCP y administración de epinefrina cada 3–5 minutos"
      },
      explanation: {
        pt: "O manejo da AESP ou assistolia exige RCP imediata e adrenalina a cada 3–5 minutos, além de investigação das causas reversíveis (5Hs e 5Ts).",
        en: "PEA or asystole requires immediate CPR and epinephrine every 3–5 minutes, plus investigation of reversible causes (5 Hs and 5 Ts).",
        es: "La AESP o asistolia exige RCP inmediata y epinefrina cada 3–5 minutos, además de investigar causas reversibles (5H y 5T)."
      }
    },
    {
      text: {
        pt: "Cardioversão sincronizada com sedação",
        en: "Synchronized cardioversion with sedation",
        es: "Cardioversión sincronizada con sedación"
      },
      explanation: {
        pt: "Cardioversão é indicada em ritmos instáveis com QRS organizados (ex: taquicardia com pulso), não em parada com AESP.",
        en: "Synchronized cardioversion is used for unstable rhythms with organized QRS (e.g., tachycardia with pulse), not in PEA.",
        es: "La cardioversión sincronizada se usa para ritmos inestables con QRS organizado (como taquicardia con pulso), no en AESP."
      }
    },
    {
      text: {
        pt: "Administração precoce de amiodarona e sulfato de magnésio",
        en: "Early administration of amiodarone and magnesium sulfate",
        es: "Administración precoz de amiodarona y sulfato de magnesio"
      },
      explanation: {
        pt: "Esses fármacos são indicados em casos específicos (TV/FV refratárias, torsades de pointes), não na AESP ou assistolia.",
        en: "These drugs are indicated in specific situations (refractory VF/VT, torsades de pointes), not in PEA or asystole.",
        es: "Estos fármacos se indican en situaciones específicas (FV/TV refractaria, torsades de pointes), no en AESP o asistolia."
      }
    }
  ]
},
{
  id: 216,
  code: "cardio02-q216",
  area: ["cardio", "icu"],
  topic: ["pulmonary embolism", "ACLS", "cardiac arrest", "5Ts"],
  level: "moderado",
  correct: 2,
  question: {
    pt: "Paciente de 48 anos é internado na UTI após cirurgia ortopédica de fêmur. Subitamente, desenvolve parada cardiorrespiratória. O ritmo é AESP. Após início de RCP de alta qualidade e administração de adrenalina, qual causa reversível deve ser fortemente considerada neste caso?",
    en: "A 48-year-old patient is admitted to the ICU after femoral orthopedic surgery. Suddenly, he develops cardiac arrest. The rhythm is PEA. After initiating high-quality CPR and administering epinephrine, which reversible cause should be strongly considered in this case?",
    es: "Paciente de 48 años está internado en UCI tras cirugía ortopédica de fémur. Súbitamente, presenta paro cardiorrespiratorio. El ritmo es AESP. Tras iniciar RCP de calidad y administrar epinefrina, ¿qué causa reversible debe considerarse con mayor probabilidad en este caso?"
  },
  options: [
    {
      text: {
        pt: "Tamponamento cardíaco",
        en: "Cardiac tamponade",
        es: "Taponamiento cardíaco"
      },
      explanation: {
        pt: "Embora seja uma causa de AESP, o context pós-operatório ortopédico favorece outra etiologia mais provável.",
        en: "Although tamponade is a PEA cause, the orthopedic postoperative context makes another etiology more likely.",
        es: "Aunque es una causa de AESP, el context postoperatorio ortopédico sugiere otra etiología más probable."
      }
    },
    {
      text: {
        pt: "Hipovolemia",
        en: "Hypovolemia",
        es: "Hipovolemia"
      },
      explanation: {
        pt: "Hipovolemia deve ser considerada, mas o início súbito e o context sugerem um evento tromboembólico agudo.",
        en: "Hypovolemia should be considered, but sudden onset and context suggest an acute thromboembolic event.",
        es: "Debe considerarse la hipovolemia, pero el inicio súbito y el context sugieren un evento tromboembólico agudo."
      }
    },
    {
      text: {
        pt: "Tromboembolismo pulmonar maciço",
        en: "Massive pulmonary embolism",
        es: "Embolia pulmonar masiva"
      },
      explanation: {
        pt: "TEP é uma causa importante de AESP em pacientes imobilizados ou recém-operados. A suspeita deve ser alta e pode justificar trombólise durante a PCR.",
        en: "PE is a major cause of PEA in immobilized or postoperative patients. High suspicion is warranted and thrombolysis may be considered during CPR.",
        es: "La EP es una causa importante de AESP en pacientes inmovilizados o postoperados. Se debe sospechar y puede justificarse trombólisis durante la RCP."
      }
    },
    {
      text: {
        pt: "Infarto agudo do miocárdio com supra de ST",
        en: "ST-elevation myocardial infarction",
        es: "Infarto agudo de miocardio con elevación del ST"
      },
      explanation: {
        pt: "Embora IAM possa causar PCR, a apresentação súbita após cirurgia ortopédica é mais compatível com TEP.",
        en: "Although MI can cause arrest, sudden presentation after orthopedic surgery is more compatible with PE.",
        es: "Aunque el IAM puede causar paro, la presentación súbita tras cirugía ortopédica es más compatible con EP."
      }
    }
  ]
},
{
  id: 217,
  code: "cardio02-q217",
  area: ["cardio", "icu"],
  topic: ["shock", "hemodynamics", "critical care"],
  level: "moderado",
  correct: 3,
  question: {
    pt: "Paciente de 70 anos, com história de IAM recente, apresenta hipotensão (PA 85/60 mmHg), extremidades frias, estertores em bases pulmonares e tempo de enchimento capilar aumentado. Gasometria com acidose metabólica e lactato elevado. Qual o tipo de choque mais compatível com esse quadro?",
    en: "A 70-year-old patient with recent MI presents with hypotension (BP 85/60 mmHg), cold extremities, bibasilar crackles, and prolonged capillary refill. Blood gas shows metabolic acidosis and elevated lactate. What is the most likely type of shock?",
    es: "Paciente de 70 años, con antecedente de IAM reciente, presenta hipotensión (PA 85/60 mmHg), extremidades frías, crépitos basales y tiempo de llenado capilar prolongado. Gasometría con acidosis metabólica y lactato elevado. ¿Qué tipo de shock es más probable?"
  },
  options: [
    {
      text: {
        pt: "Choque distributivo (séptico)",
        en: "Distributive shock (septic)",
        es: "Shock distributivo (séptico)"
      },
      explanation: {
        pt: "Choque séptico costuma cursar com extremidades quentes na fase inicial e ausência de congestão pulmonar — o que não se aplica aqui.",
        en: "Septic shock usually presents with warm extremities initially and lacks pulmonary congestion — not the case here.",
        es: "El shock séptico suele presentarse con extremidades calientes en fase inicial y sin congestión pulmonar — no aplica aquí."
      }
    },
    {
      text: {
        pt: "Choque hipovolêmico",
        en: "Hypovolemic shock",
        es: "Shock hipovolémico"
      },
      explanation: {
        pt: "Embora possa causar hipotensão e extremidades frias, não justifica congestão pulmonar e estertores — achados típicos de falência de bomba.",
        en: "Though it may cause hypotension and cold extremities, it does not explain pulmonary congestion — a sign of pump failure.",
        es: "Aunque puede causar hipotensión y extremidades frías, no explica la congestión pulmonar — típica de falla de bomba."
      }
    },
    {
      text: {
        pt: "Choque obstrutivo",
        en: "Obstructive shock",
        es: "Shock obstructivo"
      },
      explanation: {
        pt: "Choques obstrutivos (como TEP ou tamponamento) podem cursar com hipotensão, mas raramente há congestão pulmonar significativa.",
        en: "Obstructive shocks (like PE or tamponade) can cause hypotension, but significant pulmonary congestion is uncommon.",
        es: "Los shocks obstructivos (como EP o taponamiento) pueden causar hipotensión, pero rara vez hay congestión pulmonar marcada."
      }
    },
    {
      text: {
        pt: "Choque cardiogênico",
        en: "Cardiogenic shock",
        es: "Shock cardiogénico"
      },
      explanation: {
        pt: "É caracterizado por hipotensão, hipoperfusão (extremidades frias, TEC aumentado) e congestão pulmonar — típicos do caso descrito.",
        en: "Defined by hypotension, hypoperfusion (cold extremities, prolonged capillary refill), and pulmonary congestion — matching this case.",
        es: "Se caracteriza por hipotensión, hipoperfusión (extremidades frías, llenado capilar prolongado) y congestión pulmonar — compatible con el caso."
      }
    }
  ]
},
{
  id: 218,
  code: "cardio02-q218",
  area: ["cardio", "icu"],
  topic: ["cardiac trauma", "blunt chest trauma", "ECG", "echocardiography"],
  level: "moderado",
  correct: 1,
  question: {
    pt: "Homem de 35 anos sofre acidente automobilístico e dá entrada na emergência consciente, com dor torácica e taquicardia. Exame físico mostra crepitações em arcos costais. ECG revela extrassístoles ventriculares frequentes e troponina I discretamente elevada. Qual exame é mais indicado para avaliar lesão cardíaca no context de trauma torácico contuso?",
    en: "A 35-year-old man is admitted after a car accident, alert but complaining of chest pain and tachycardia. Physical exam shows rib crepitus. ECG reveals frequent ventricular ectopy and mildly elevated troponin I. What is the most appropriate test to assess cardiac injury in the context of blunt chest trauma?",
    es: "Hombre de 35 años ingresa tras accidente automovilístico, consciente pero con dolor torácico y taquicardia. El examen físico revela crepitaciones costales. El ECG muestra extrasístoles ventriculares frecuentes y troponina I discretamente elevada. ¿Cuál es el examen más indicado para evaluar lesión cardíaca en el trauma torácico contuso?"
  },
  options: [
    {
      text: {
        pt: "Angiografia coronariana invasiva",
        en: "Invasive coronary angiography",
        es: "Angiografía coronaria invasiva"
      },
      explanation: {
        pt: "Raramente indicada inicialmente em trauma contuso, exceto se houver forte suspeita de dissecção coronariana.",
        en: "Rarely indicated initially in blunt trauma, unless strong suspicion of coronary dissection exists.",
        es: "Raramente se indica inicialmente en trauma contuso, salvo sospecha fuerte de disección coronaria."
      }
    },
    {
      text: {
        pt: "Ecocardiograma transtorácico",
        en: "Transthoracic echocardiography",
        es: "Ecocardiografía transtorácica"
      },
      explanation: {
        pt: "O ecocardiograma transtorácico é o exame inicial mais útil para avaliar função ventricular, derrames pericárdicos e contusões cardíacas após trauma.",
        en: "Transthoracic echocardiography is the most useful initial test to assess ventricular function, pericardial effusion, and cardiac contusion after trauma.",
        es: "La ecocardiografía transtorácica es el examen inicial más útil para evaluar función ventricular, derrames pericárdicos y contusiones cardíacas tras trauma."
      }
    },
    {
      text: {
        pt: "Tomografia de coronárias com contraste",
        en: "Coronary CT angiography",
        es: "Angio-TC de coronarias"
      },
      explanation: {
        pt: "É útil em casos selecionados, mas não é o exame inicial de escolha para avaliação funcional ou estrutural em trauma cardíaco.",
        en: "Useful in selected cases, but not the first-line test for structural or functional assessment in cardiac trauma.",
        es: "Útil en casos seleccionados, pero no es la prueba inicial de elección en trauma cardíaco."
      }
    },
    {
      text: {
        pt: "Cateterismo cardíaco com biópsia endomiocárdica",
        en: "Cardiac catheterization with endomyocardial biopsy",
        es: "Cateterismo cardíaco con biopsia endomiocárdica"
      },
      explanation: {
        pt: "Exame invasivo e não indicado na avaliação inicial de contusão cardíaca. Raramente necessário.",
        en: "Invasive procedure not indicated for initial evaluation of cardiac contusion. Rarely necessary.",
        es: "Procedimiento invasivo que no se indica en la evaluación inicial de contusión cardíaca. Raramente necesario."
      }
    }
  ]
},
{
  id: 219,
  code: "cardio02-q219",
  area: ["cardio", "icu"],
  topic: ["LVAD", "mechanical support", "heart failure", "critical care"],
  level: "moderado",
  correct: 2,
  question: {
    pt: "Homem de 55 anos com miocardiopatia dilatada e fração de ejeção de 15% é internado após implante recente de dispositivo de assistência ventricular esquerda (LVAD). Está consciente, mas sem pulso palpável e pressão arterial inaudível pelo método auscultatório. Qual conduta é mais adequada para avaliação clínica inicial?",
    en: "A 55-year-old man with dilated cardiomyopathy and an ejection fraction of 15% is admitted after recent implantation of a left ventricular assist device (LVAD). He is alert but has no palpable pulse and no auscultatory blood pressure. What is the most appropriate initial clinical assessment?",
    es: "Hombre de 55 años con miocardiopatía dilatada y fracción de eyección del 15% es ingresado tras implante reciente de dispositivo de asistencia ventricular izquierda (LVAD). Está consciente, pero sin pulso palpable ni presión arterial audible. ¿Cuál es la conducta más adecuada para la evaluación clínica inicial?"
  },
  options: [
    {
      text: {
        pt: "Iniciar massagem cardíaca externa imediatamente",
        en: "Immediately begin external chest compressions",
        es: "Iniciar compresiones torácicas externas de inmediato"
      },
      explanation: {
        pt: "Massagem cardíaca só está indicada se o paciente estiver inconsciente e houver suspeita de falência do LVAD. Neste caso, o paciente está estável.",
        en: "Chest compressions are only indicated if the patient is unresponsive and LVAD failure is suspected. In this case, the patient is stable.",
        es: "Las compresiones se indican solo si el paciente está inconsciente y se sospecha falla del LVAD. Aquí, el paciente está estable."
      }
    },
    {
      text: {
        pt: "Interpretar ausência de pulso como parada cardiorrespiratória",
        en: "Interpret lack of pulse as cardiac arrest",
        es: "Interpretar la ausencia de pulso como paro cardíaco"
      },
      explanation: {
        pt: "Pacientes com LVAD contínuo não têm pulso palpável. Ausência de pulso não indica PCR nesse context.",
        en: "Patients with continuous-flow LVADs often lack palpable pulses. Pulse absence does not indicate arrest in this setting.",
        es: "Pacientes con LVAD de flujo continuo no tienen pulso palpable. La ausencia de pulso no indica paro cardíaco en este context."
      }
    },
    {
      text: {
        pt: "Avaliar perfusão tecidual e usar doppler para medir pressão arterial média",
        en: "Assess tissue perfusion and use Doppler to measure mean arterial pressure",
        es: "Evaluar perfusión tisular y usar Doppler para medir presión arterial media"
      },
      explanation: {
        pt: "A perfusão periférica e a PAM por doppler são os melhores parâmetros clínicos em pacientes com LVAD contínuo, que não têm pulso audível nem pressão tradicional.",
        en: "Peripheral perfusion and MAP via Doppler are the best clinical parameters in patients with continuous-flow LVADs who lack audible pulse or conventional BP.",
        es: "La perfusión periférica y la PAM por doppler son los mejores parámetros en pacientes con LVAD de flujo continuo, sin pulso ni PA convencional."
      }
    },
    {
      text: {
        pt: "Solicitar ECG e iniciar protocolo de ACLS imediatamente",
        en: "Order ECG and start ACLS protocol immediately",
        es: "Solicitar ECG e iniciar protocolo ACLS inmediatamente"
      },
      explanation: {
        pt: "O ECG pode ser útil, mas o início do ACLS sem sinais de instabilidade ou inconsciência é inadequado neste context específico.",
        en: "ECG can be helpful, but initiating ACLS without instability or unresponsiveness is inappropriate in this specific context.",
        es: "El ECG puede ser útil, pero iniciar ACLS sin inestabilidad o inconsciencia es inadecuado en este context."
      }
    }
  ]
},
{
  id: 220,
  code: "cardio02-q220",
  area: ["cardio", "icu"],
  topic: ["pacemaker", "CABG", "postoperative care", "bradyarrhythmia"],
  level: "moderado",
  correct: 3,
  question: {
    pt: "Paciente de 68 anos, no segundo dia de pós-operatório de cirurgia de revascularização miocárdica (CABG), apresenta bradicardia (FC 38 bpm), hipotensão, extremidades frias e tonturas. ECG mostra ritmo de escape ventricular. Todos os itens abaixo são condutas corrects, EXCETO:",
    en: "A 68-year-old patient, on postoperative day 2 after CABG, presents with bradycardia (HR 38 bpm), hypotension, cold extremities, and dizziness. ECG shows a ventricular escape rhythm. All of the following are appropriate actions EXCEPT:",
    es: "Paciente de 68 años, en el segundo día postoperatorio de cirugía de revascularización (CABG), presenta bradicardia (FC 38 lpm), hipotensión, extremidades frías y mareos. El ECG muestra ritmo de escape ventricular. Todas las siguientes son conductas apropiadas, EXCEPTO:"
  },
  options: [
    {
      text: {
        pt: "Conectar os fios epicárdicos para iniciar estimulação temporária em VVI",
        en: "Connect epicardial wires and initiate temporary pacing in VVI mode",
        es: "Conectar cables epicárdicos e iniciar estimulación temporal en modo VVI"
      },
      explanation: {
        pt: "É a conduta padrão em bradicardia sintomática com instabilidade no pós-CABG. O modo VVI é adequado nesse context.",
        en: "This is standard in symptomatic bradycardia with instability post-CABG. VVI mode is appropriate here.",
        es: "Es la conducta estándar ante bradicardia sintomática con inestabilidad en post-CABG. Modo VVI adecuado."
      }
    },
    {
      text: {
        pt: "Ajustar a frequência mínima de estimulação para 70-80 bpm conforme sintomas",
        en: "Adjust the pacing rate to 70–80 bpm according to symptoms",
        es: "Ajustar la frecuencia mínima de estimulación a 70–80 lpm según síntomas"
      },
      explanation: {
        pt: "Pacientes sintomáticos se beneficiam de frequência mínima mais alta para melhorar débito cardíaco e perfusão.",
        en: "Symptomatic patients benefit from higher pacing rates to improve cardiac output and perfusion.",
        es: "Pacientes sintomáticos se benefician de frecuencias más altas para mejorar el gasto cardíaco y la perfusión."
      }
    },
    {
      text: {
        pt: "Monitorar eletrólitos séricos e corrigir distúrbios como hipocalemia e hipomagnesemia",
        en: "Monitor serum electrolytes and correct disorders like hypokalemia and hypomagnesemia",
        es: "Monitorizar electrolitos y corregir alteraciones como hipokalemia e hipomagnesemia"
      },
      explanation: {
        pt: "Distúrbios eletrolíticos podem contribuir para disfunção elétrica e falha de captura. Correção é parte essencial do manejo.",
        en: "Electrolyte disturbances can contribute to electrical dysfunction and capture failure. Correction is essential.",
        es: "Alteraciones electrolíticas pueden contribuir a disfunción eléctrica y falla de captura. Su corrección es esencial."
      }
    },
    {
      text: {
        pt: "Indicar implante definitivo de marca-passo de emergência",
        en: "Indicate emergency permanent pacemaker implantation",
        es: "Indicar implante urgente de marcapasos definitivo"
      },
      explanation: {
        pt: "Bradiarritmias pós-CABG costumam ser transitórias. Implante definitivo só é considerado após persistência >5–7 dias.",
        en: "Post-CABG bradyarrhythmias are often transient. Permanent pacing is considered only if persistence >5–7 days.",
        es: "Las bradiarritmias post-CABG suelen ser transitorias. El implante definitivo se considera tras persistencia >5–7 días."
      }
    }
  ]
},
];

questionBank.addBank(bancoCardioModerado);
