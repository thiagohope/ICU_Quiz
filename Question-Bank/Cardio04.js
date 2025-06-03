const bancoCardioDificilima = [
{
  id: 401,
  code: "cardio04-q401",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["myocardial infarction", "valvular complications", "cardiogenic shock", "echocardiography", "surgery"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Homem de 68 anos, tabagista e hipertenso, dá entrada com dor torácica súbita e intensa há 4h, irradiada para dorso. ECG com supra de ST em DII, DIII e aVF. Realiza angioplastia com stent na coronária direita. Após 18h, evolui com dispneia súbita, hipotensão (PA 80x60 mmHg), sopro holossistólico apical e estertores. Ecocardiograma mostra insuficiência mitral aguda por flail valvar posterior e PSAP 60 mmHg. Todas as afirmativas abaixo estão corrects, **exceto**:",
    en: "A 68-year-old hypertensive smoker presents with sudden severe chest pain for 4 hours, radiating to the back. ECG shows ST elevation in II, III, and aVF. He undergoes PCI with a stent in the right coronary artery. After 18h, he develops acute dyspnea, hypotension (BP 80/60 mmHg), apical holosystolic murmur, and crackles. Echo shows acute mitral regurgitation from posterior leaflet flail and PASP 60 mmHg. All of the following are correct, **except**:",
    es: "Hombre de 68 años, hipertenso y fumador, presenta dolor torácico súbito e intenso desde hace 4h, irradiado a la espalda. ECG con elevación de ST en II, III y aVF. Se realiza angioplastia con stent en la coronaria derecha. A las 18h, presenta disnea aguda, hipotensión (PA 80/60 mmHg), soplo holosistólico apical y estertores. Eco revela insuficiencia mitral aguda por flail de valva posterior y PSAP 60 mmHg. Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A ruptura de músculo papilar é uma complicação grave e potencialmente letal do infarto inferior.",
        en: "Papillary muscle rupture is a severe and potentially fatal complication of inferior MI.",
        es: "La ruptura del músculo papilar es una complicación grave y potencialmente letal del infarto inferior."
      },
      explanation: {
        pt: "O músculo papilar posteromedial, irrigado pela coronária direita, é mais vulnerável à ruptura no IAM inferior.",
        en: "The posteromedial papillary muscle, supplied by the right coronary artery, is more prone to rupture in inferior MI.",
        es: "El músculo papilar posteromedial, irrigado por la coronaria derecha, es más susceptible a ruptura en IAM inferior."
      }
    },
    {
      text: {
        pt: "A conduta inicial deve incluir diuréticos e vasodilatadores para estabilizar o quadro clínico.",
        en: "Initial management should include diuretics and vasodilators to stabilize the clinical condition.",
        es: "El manejo inicial debe incluir diuréticos y vasodilatadores para estabilizar el cuadro clínico."
      },
      explanation: {
        pt: "**INCORRETA.** Essa é a afirmativa incorrect. A insuficiência mitral aguda por ruptura valvar é uma emergência cirúrgica. Vasodilatadores podem agravar a hipotensão. O tratamento envolve suporte hemodinâmico com inotrópicos e balão intra-aórtico até cirurgia.",
        en: "**INCORRECT.** This is the incorrect option. Acute mitral regurgitation due to papillary rupture is a surgical emergency. Vasodilators may worsen hypotension. Hemodynamic support with inotropes and IABP is needed until surgery.",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. La insuficiencia mitral aguda por ruptura papilar requiere cirugía urgente. Los vasodilatadores pueden empeorar la hipotensión. Se requiere soporte hemodinámico con inotrópicos y balón intraaórtico."
      }
    },
    {
      text: {
        pt: "A ecocardiografia transtorácica pode sugerir o diagnóstico, mas o transesofágico tem maior sensibilidade.",
        en: "Transthoracic echocardiography may suggest the diagnosis, but transesophageal is more sensitive.",
        es: "El ecocardiograma transtorácico puede sugerir el diagnóstico, pero el transesofágico es más sensible."
      },
      explanation: {
        pt: "O ecocardiograma transesofágico tem sensibilidade superior na identificação de ruptura valvar parcial ou flail valvar.",
        en: "Transesophageal echo has higher sensitivity for detecting partial leaflet rupture or flail.",
        es: "El eco transesofágico tiene mayor sensibilidad para detectar ruptura parcial o flail valvular."
      }
    },
    {
      text: {
        pt: "O uso de balão intra-aórtico pode estabilizar o paciente até a cirurgia corretiva.",
        en: "Intra-aortic balloon pump may stabilize the patient until corrective surgery.",
        es: "El balón intraaórtico puede estabilizar al paciente hasta la cirugía correctiva."
      },
      explanation: {
        pt: "O balão aumenta a perfusão coronariana e reduz o regurgitamento mitral, sendo ponte eficaz até cirurgia.",
        en: "The balloon improves coronary perfusion and reduces mitral regurgitation, serving as a bridge to surgery.",
        es: "El balón mejora la perfusión coronaria y reduce la insuficiencia mitral, actuando como puente hacia la cirugía."
      }
    },
    {
      text: {
        pt: "A mortalidade é extremamente alta sem tratamento cirúrgico urgente.",
        en: "Mortality is extremely high without urgent surgical treatment.",
        es: "La mortalidad es extremadamente alta sin tratamiento quirúrgico urgente."
      },
      explanation: {
        pt: "A mortalidade pode ultrapassar 80% sem cirurgia precoce. A abordagem cirúrgica reduz significativamente esse risco.",
        en: "Mortality can exceed 80% without early surgery. Surgical intervention significantly lowers this risk.",
        es: "La mortalidad puede superar el 80% sin cirugía temprana. La intervención quirúrgica reduce significativamente ese riesgo."
      }
    }
   ]
  },
  {
  id: 402,
  code: "cardio04-q402",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["myocardial infarction", "septal rupture", "cardiogenic shock", "echocardiography", "emergency surgery"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 74 anos, diabético e ex-tabagista, apresenta dor torácica anterior há 10 horas e retarda busca por atendimento. ECG com supra de ST em V2-V5. Cateterismo evidencia oclusão da ADA, e a revascularização é realizada. Após 36h, evolui com rebaixamento do nível de consciência, taquicardia (FC 120 bpm), PA 85x55 mmHg, hipofonese de bulhas e estertores difusos. O eco revela shunt esquerda-direita com comunicação interventricular basal e PSAP 70 mmHg. Todas as alternativas abaixo estão corretas, **exceto**:",
    en: "A 74-year-old diabetic ex-smoker presents with anterior chest pain for 10 hours and delays seeking care. ECG shows ST elevation in V2–V5. Cath reveals LAD occlusion and revascularization is performed. After 36h, he develops decreased consciousness, tachycardia (HR 120 bpm), hypotension (BP 85/55 mmHg), muffled heart sounds, and diffuse crackles. Echo reveals a left-to-right shunt with a basal interventricular communication and PASP 70 mmHg. All of the following are correct, **except**:",
    es: "Hombre de 74 años, diabético y exfumador, presenta dolor torácico anterior desde hace 10 horas y retrasa la búsqueda de atención. ECG muestra elevación de ST en V2–V5. El cateterismo revela oclusión de la DA y se realiza revascularización. Después de 36h, desarrolla disminución del nivel de conciencia, taquicardia (FC 120 lpm), PA 85x55 mmHg, ruidos cardíacos apagados y estertores difusos. El ecocardiograma revela cortocircuito izquierda-derecha con comunicación interventricular basal y PSAP 70 mmHg. Todas las siguientes son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A ruptura de septo interventricular é mais comum em infartos extensos e transmurais.",
        en: "Ventricular septal rupture is more common in large transmural infarctions.",
        es: "La ruptura del tabique interventricular es más común en infartos transmurales extensos."
      },
      explanation: {
        pt: "Infartos anteriores extensos aumentam o risco de ruptura septal, especialmente quando há atraso na reperfusão.",
        en: "Large anterior transmural infarctions, especially with delayed reperfusion, increase the risk of septal rupture.",
        es: "Infartos anteriores extensos con reperfusión tardía aumentan el riesgo de ruptura septal."
      }
    },
    {
      text: {
        pt: "O sopro sistólico em foco mitral é um achado típico na ruptura de septo interventricular.",
        en: "A systolic murmur at the mitral focus is typical in ventricular septal rupture.",
        es: "Un soplo sistólico en foco mitral es típico en la ruptura del tabique ventricular."
      },
      explanation: {
        pt: "O sopro da ruptura septal geralmente é mais audível no foco paraesternal esquerdo inferior, e não no mitral. Esta é a alternativa **INCORRETA**.",
        en: "The murmur in septal rupture is usually loudest at the lower left sternal border, not at the mitral area. This is the **INCORRECT** option.",
        es: "El soplo en la ruptura septal suele ser más audible en el borde esternal izquierdo inferior, no en el foco mitral. Esta es la opción **INCORRECTA**."
      }
    },
    {
      text: {
        pt: "A ecocardiografia com Doppler é essencial para confirmar o diagnóstico e quantificar o shunt.",
        en: "Echocardiography with Doppler is essential for confirming the diagnosis and quantifying the shunt.",
        es: "El ecocardiograma con Doppler es esencial para confirmar el diagnóstico y cuantificar el cortocircuito."
      },
      explanation: {
        pt: "O eco com Doppler demonstra o fluxo anômalo entre os ventrículos, sendo crucial para diagnóstico e decisão cirúrgica.",
        en: "Echo with Doppler shows abnormal ventricular flow and is crucial for diagnosis and surgical planning.",
        es: "El Doppler permite visualizar el flujo anómalo entre ventrículos, clave para el diagnóstico y manejo quirúrgico."
      }
    },
    {
      text: {
        pt: "O tratamento definitivo envolve correção cirúrgica, idealmente após estabilização hemodinâmica.",
        en: "Definitive treatment involves surgical repair, ideally after hemodynamic stabilization.",
        es: "El tratamiento definitivo implica reparación quirúrgica, idealmente tras estabilización hemodinámica."
      },
      explanation: {
        pt: "A cirurgia precoce reduz mortalidade, mas idealmente ocorre após suporte com inotrópicos, IABP e manejo intensivo.",
        en: "Early surgery reduces mortality but should follow hemodynamic support with inotropes, IABP, and intensive management.",
        es: "La cirugía precoz reduce la mortalidad, pero debe ir precedida de soporte intensivo e inotrópicos."
      }
    },
    {
      text: {
        pt: "A mortalidade é extremamente elevada sem intervenção cirúrgica urgente.",
        en: "Mortality is extremely high without urgent surgical intervention.",
        es: "La mortalidad es extremadamente alta sin intervención quirúrgica urgente."
      },
      explanation: {
        pt: "A ruptura de septo pós-IAM tem mortalidade >90% sem cirurgia. A intervenção precoce é crítica.",
        en: "Post-MI septal rupture carries >90% mortality without surgery. Early intervention is vital.",
        es: "La ruptura septal post-IAM tiene mortalidad >90% sin cirugía. La intervención precoz es crítica."
      }
    }
  ]
},
{
  id: 403,
  code: "cardio04-q403",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["myocardial infarction", "free wall rupture", "cardiac tamponade", "pericardial effusion", "emergency surgery"],
  level: "very_hard",
  correct: 0,
  question: {
    pt: "Mulher de 77 anos, hipertensa e com antecedente de angina estável, é encontrada inconsciente em casa. Na emergência, apresenta-se bradicárdica (FC 42 bpm), PA 70x50 mmHg, turgência jugular, bulhas apagadas e pulso paradoxal. O ECG revela necrose extensa em parede anterior. O ecocardiograma evidencia grande derrame pericárdico com colapso diastólico do átrio direito. Considerando ruptura de parede livre do VE, todas as afirmativas abaixo são corretas, **exceto**:",
    en: "A 77-year-old hypertensive woman with a history of stable angina is found unconscious at home. In the ED, she is bradycardic (HR 42 bpm), BP 70/50 mmHg, jugular venous distension, muffled heart sounds, and pulsus paradoxus. ECG shows extensive anterior wall necrosis. Echo reveals a large pericardial effusion with right atrial diastolic collapse. Considering left ventricular free wall rupture, all of the following are correct, **except**:",
    es: "Mujer de 77 años, hipertensa y con antecedentes de angina estable, es encontrada inconsciente en su domicilio. En la urgencia, presenta bradicardia (FC 42 lpm), PA 70/50 mmHg, ingurgitación yugular, ruidos cardíacos apagados y pulso paradójico. El ECG muestra necrosis extensa en pared anterior. El ecocardiograma evidencia gran derrame pericárdico con colapso diastólico de la aurícula derecha. Considerando ruptura de pared libre del VI, todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A drenagem pericárdica inicial é sempre a primeira medida, mesmo em suspeita de ruptura cardíaca.",
        en: "Initial pericardial drainage is always the first step, even in suspected cardiac rupture.",
        es: "El drenaje pericárdico inicial es siempre la primera medida, incluso ante sospecha de ruptura cardíaca."
      },
      explanation: {
        pt: "**INCORRETA.** A drenagem pode precipitar colapso hemodinâmico caso não haja correção cirúrgica simultânea. Deve ser considerada apenas em parada iminente ou com suporte cirúrgico imediato.",
        en: "**INCORRECT.** Drainage may trigger hemodynamic collapse if surgical repair is not available. It is reserved for impending arrest or with immediate surgical backup.",
        es: "**INCORRECTA.** El drenaje puede precipitar colapso si no hay reparación quirúrgica inmediata. Solo debe realizarse con soporte quirúrgico disponible."
      }
    },
    {
      text: {
        pt: "A tríade de Beck é sugestiva de tamponamento cardíaco: hipotensão, bulhas apagadas e turgência jugular.",
        en: "Beck’s triad suggests cardiac tamponade: hypotension, muffled heart sounds, and jugular venous distension.",
        es: "La tríada de Beck sugiere taponamiento cardíaco: hipotensión, ruidos apagados y ingurgitación yugular."
      },
      explanation: {
        pt: "Tríade clássica do tamponamento, embora possa estar ausente em apresentações agudas ou subagudas.",
        en: "Classical signs of tamponade, though may be absent in subacute or fulminant presentations.",
        es: "Signos clásicos del taponamiento, aunque pueden faltar en presentaciones fulminantes."
      }
    },
    {
      text: {
        pt: "A ruptura de parede livre ocorre mais frequentemente em mulheres idosas, com infartos anteriores transmural não reperfundidos.",
        en: "Free wall rupture occurs more commonly in elderly women with unreperfused anterior transmural infarctions.",
        es: "La ruptura de pared libre es más común en mujeres mayores con infartos anteriores transmurales no reperfundidos."
      },
      explanation: {
        pt: "Fatores como idade, sexo feminino, ausência de reperfusão e infarto transmural são fortemente associados à ruptura.",
        en: "Advanced age, female sex, lack of reperfusion, and transmural infarct are major risk factors.",
        es: "Edad avanzada, sexo femenino, falta de reperfusión e infarto transmural aumentan el riesgo de ruptura."
      }
    },
    {
      text: {
        pt: "O ecocardiograma é essencial para o diagnóstico, evidenciando derrame pericárdico com sinais de tamponamento.",
        en: "Echocardiography is essential for diagnosis, showing pericardial effusion with signs of tamponade.",
        es: "El ecocardiograma es fundamental para el diagnóstico, mostrando derrame pericárdico con signos de taponamiento."
      },
      explanation: {
        pt: "O eco identifica colapso diastólico de câmaras direitas, derrame e sinais indiretos de ruptura cardíaca.",
        en: "Echo reveals diastolic collapse of right chambers, effusion, and indirect signs of cardiac rupture.",
        es: "El eco detecta colapso diastólico de cavidades derechas, derrame y signos indirectos de ruptura cardíaca."
      }
    },
    {
      text: {
        pt: "A mortalidade é extremamente alta, podendo ultrapassar 90% sem intervenção cirúrgica urgente.",
        en: "Mortality is extremely high, exceeding 90% without urgent surgical intervention.",
        es: "La mortalidad es extremadamente alta, superando el 90% sin intervención quirúrgica urgente."
      },
      explanation: {
        pt: "Sem cirurgia imediata, a sobrevida é quase nula. Mesmo com cirurgia, o prognóstico ainda é reservado.",
        en: "Survival without surgery is nearly zero. Even with repair, prognosis remains guarded.",
        es: "Sin cirugía, la supervivencia es prácticamente nula. Incluso con intervención, el pronóstico es reservado."
      }
    }
  ]
},
{
  id: 404,
  code: "cardio04-q404",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["cardiogenic shock", "ecmo", "myocardial infarction", "advanced support", "multiorgan failure"],
  level: "very_hard",
  correct: 4,
  question: {
    pt: "Homem de 58 anos, previamente hígido, é admitido com IAM extenso anterior. Após angioplastia primária com stent na ADA, evolui com choque cardiogênico refratário a noradrenalina, dobutamina e balão intra-aórtico. Apresenta acidose metabólica grave, lactato 9 mmol/L, diurese <0,3 mL/kg/h e hipoxemia refratária (PaO2/FiO2 <100). Indicado ECMO-VA periférico. Todas as opções abaixo estão corretas, **exceto**:",
    en: "A 58-year-old previously healthy man is admitted with a large anterior MI. After primary PCI with LAD stenting, he develops cardiogenic shock refractory to norepinephrine, dobutamine, and intra-aortic balloon pump. He presents with severe metabolic acidosis, lactate 9 mmol/L, urine output <0.3 mL/kg/h, and refractory hypoxemia (PaO2/FiO2 <100). Peripheral VA-ECMO is initiated. All of the following are correct, **except**:",
    es: "Hombre de 58 años, previamente sano, es admitido por infarto anterior extenso. Tras angioplastia primaria con stent en la DA, desarrolla shock cardiogénico refractario a noradrenalina, dobutamina y balón intraaórtico. Presenta acidosis metabólica severa, lactato 9 mmol/L, diuresis <0,3 mL/kg/h e hipoxemia refractaria (PaO2/FiO2 <100). Se inicia ECMO-VA periférico. Todas las afirmaciones siguientes son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A ECMO-VA pode garantir suporte circulatório e respiratório temporário enquanto se avalia recuperação ou decisão definitiva.",
        en: "VA-ECMO can provide temporary circulatory and respiratory support while awaiting recovery or definitive decision.",
        es: "La ECMO-VA puede proporcionar soporte temporal circulatorio y respiratorio mientras se evalúa recuperación o decisión definitiva."
      },
      explanation: {
        pt: "ECMO-VA é ponte para recuperação, transplante ou suporte de longo prazo, dependendo da reversibilidade do quadro.",
        en: "VA-ECMO serves as bridge to recovery, transplant, or durable support, depending on reversibility.",
        es: "La ECMO-VA actúa como puente a la recuperación, trasplante o soporte duradero, según la reversibilidad."
      }
    },
    {
      text: {
        pt: "A canulação periférica femoral é a forma mais comum de acesso para ECMO-VA emergencial.",
        en: "Peripheral femoral cannulation is the most common access for emergency VA-ECMO.",
        es: "La canulación femoral periférica es la forma más común de acceso para ECMO-VA de emergencia."
      },
      explanation: {
        pt: "É a via mais rápida e factível na maioria dos centros, embora associada a complicações vasculares.",
        en: "It is the fastest and most feasible route in most centers, although vascular complications are common.",
        es: "Es la vía más rápida y factible en la mayoría de centros, aunque presenta complicaciones vasculares."
      }
    },
    {
      text: {
        pt: "A monitorização deve incluir parâmetros de perfusão, oxigenação e sinais de sobrecarga ventricular esquerda.",
        en: "Monitoring should include perfusion, oxygenation, and signs of left ventricular overload.",
        es: "La monitorización debe incluir perfusión, oxigenación y signos de sobrecarga del ventrículo izquierdo."
      },
      explanation: {
        pt: "ECMO-VA pode aumentar pós-carga e induzir dilatação ventricular esquerda, exigindo drenagem ou suporte adicional.",
        en: "VA-ECMO increases afterload and may lead to LV distention, requiring venting or additional support.",
        es: "La ECMO-VA aumenta la poscarga y puede inducir dilatación del VI, requiriendo drenaje o soporte adicional."
      }
    },
    {
      text: {
        pt: "A presença de hiperlactatemia e anúria são marcadores de mau prognóstico sob ECMO-VA.",
        en: "Hyperlactatemia and anuria are poor prognostic markers under VA-ECMO.",
        es: "La hiperlactatemia y la anuria son marcadores de mal pronóstico bajo ECMO-VA."
      },
      explanation: {
        pt: "Indicadores de falência multiorgânica associada, com menor chance de recuperação significativa.",
        en: "Markers of associated multiorgan failure, with lower chance of meaningful recovery.",
        es: "Indicadores de fallo multiorgánico asociado, con menor posibilidad de recuperación significativa."
      }
    },
    {
      text: {
        pt: "O suporte com ECMO-VA elimina completamente a necessidade de ventilação mecânica.",
        en: "VA-ECMO support completely eliminates the need for mechanical ventilation.",
        es: "El soporte con ECMO-VA elimina completamente la necesidad de ventilación mecánica."
      },
      explanation: {
        pt: "**INCORRETA.** A ECMO-VA não substitui integralmente a ventilação. A maioria dos pacientes permanece em ventilação protetora e sedação.",
        en: "**INCORRECT.** VA-ECMO does not replace mechanical ventilation. Most patients remain sedated with protective ventilation.",
        es: "**INCORRECTA.** La ECMO-VA no reemplaza la ventilación. La mayoría requiere ventilación protectora y sedación."
      }
    }
  ]
},
{
  id: 405,
  code: "cardio04-q405",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["heart failure", "acute kidney injury", "renal replacement therapy", "hemodynamics", "multiorgan interaction"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 70 anos, com insuficiência cardíaca crônica (fração de ejeção 25%) e doença coronariana, é admitido com congestão pulmonar, ortopneia e anasarca. Diuréticos em altas doses falham em melhorar diurese. Apresenta creatinina 4,2 mg/dL (prévia 1,7), potássio 6,1 mEq/L e pH 7,21. A hemodiálise intermitente é considerada. Sobre essa situação, todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 70-year-old man with chronic heart failure (ejection fraction 25%) and coronary artery disease is admitted with pulmonary congestion, orthopnea, and anasarca. High-dose diuretics fail to improve urine output. Labs show creatinine 4.2 mg/dL (baseline 1.7), potassium 6.1 mEq/L, and pH 7.21. Intermittent hemodialysis is considered. All of the following statements are correct, **except**:",
    es: "Hombre de 70 años con insuficiencia cardíaca crónica (fracción de eyección 25%) y enfermedad coronaria es admitido con congestión pulmonar, ortopnea y anasarca. Los diuréticos a altas dosis no mejoran la diuresis. Creatinina 4,2 mg/dL (previa 1,7), potasio 6,1 mEq/L y pH 7,21. Se considera hemodiálisis intermitente. Todas las siguientes afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A disfunção renal aguda associada à descompensação cardíaca caracteriza síndrome cardiorrenal tipo 1.",
        en: "Acute kidney injury associated with heart failure decompensation characterizes cardiorenal syndrome type 1.",
        es: "La insuficiencia renal aguda asociada a la descompensación cardíaca se considera síndrome cardiorrenal tipo 1."
      },
      explanation: {
        pt: "Trata-se de disfunção renal aguda precipitada por baixo débito e congestão venosa renal.",
        en: "This is acute renal dysfunction triggered by low cardiac output and renal venous congestion.",
        es: "Se trata de disfunción renal aguda desencadenada por bajo gasto y congestión venosa renal."
      }
    },
    {
      text: {
        pt: "A ultrafiltração pode ser uma alternativa à diálise para alívio da congestão refratária.",
        en: "Ultrafiltration can be an alternative to dialysis for relief of refractory congestion.",
        es: "La ultrafiltración puede ser una alternativa a la diálisis para aliviar la congestión refractaria."
      },
      explanation: {
        pt: "A ultrafiltração permite remoção lenta e contínua de volume, útil em pacientes congestos sem indicações urgentes de diálise.",
        en: "Ultrafiltration allows slow and continuous fluid removal, useful in congested patients without urgent dialysis indications.",
        es: "La ultrafiltración permite la eliminación lenta de volumen, útil en pacientes con congestión sin criterios urgentes de diálisis."
      }
    },
    {
      text: {
        pt: "A hemodiálise intermitente é preferível em pacientes instáveis hemodinamicamente com baixo débito.",
        en: "Intermittent hemodialysis is preferable in hemodynamically unstable patients with low output.",
        es: "La hemodiálisis intermitente es preferible en pacientes inestables hemodinámicamente con bajo gasto."
      },
      explanation: {
        pt: "**INCORRETA.** A hemodiálise intermitente pode piorar instabilidade hemodinâmica. Nestes casos, métodos contínuos (CRRT) ou lentos são preferidos.",
        en: "**INCORRECT.** Intermittent dialysis can worsen hemodynamic instability. Continuous or slow therapies (CRRT) are preferred.",
        es: "**INCORRECTA.** La hemodiálisis intermitente puede empeorar la inestabilidad. Se prefieren terapias continuas o lentas (CRRT)."
      }
    },
    {
      text: {
        pt: "Pacientes com IC descompensada frequentemente apresentam resistência a diuréticos, exigindo estratégias combinadas.",
        en: "Patients with decompensated heart failure often develop diuretic resistance, requiring combined strategies.",
        es: "Los pacientes con IC descompensada suelen tener resistencia a los diuréticos, requiriendo estrategias combinadas."
      },
      explanation: {
        pt: "Associar tiazídicos, aumentar dose ou iniciar infusão contínua são medidas para superar resistência.",
        en: "Thiazide addition, higher doses, or continuous infusion are strategies to overcome resistance.",
        es: "Agregar tiazidas, aumentar la dosis o infusión continua son estrategias para superar la resistencia."
      }
    },
    {
      text: {
        pt: "A avaliação da resposta hemodinâmica à retirada de volume deve ser monitorada atentamente para evitar hipoperfusão.",
        en: "Hemodynamic response to fluid removal should be carefully monitored to avoid hypoperfusion.",
        es: "La respuesta hemodinámica a la eliminación de volumen debe ser monitorizada para evitar hipoperfusión."
      },
      explanation: {
        pt: "Volume excessivo pode manter congestão, mas sua retirada rápida pode precipitar colapso circulatório.",
        en: "Excess fluid may sustain congestion, but rapid removal can lead to circulatory collapse.",
        es: "El volumen excesivo puede mantener la congestión, pero su retirada rápida puede provocar colapso circulatorio."
      }
    }
  ]
},
{
  id: 406,
  code: "cardio04-q406",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["acute pulmonary edema", "hypertensive emergency", "vasodilators", "noninvasive ventilation", "diuretics"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Homem de 63 anos, com história de hipertensão arterial severa e má adesão medicamentosa, é admitido em emergência com dispneia intensa, ortopneia e sudorese. Está taquicárdico (FC 128 bpm), PA 240x130 mmHg, SatO2 82% em ar ambiente, estertores em dois terços inferiores dos pulmões e uso de musculatura acessória. ECG com sobrecarga VE e troponina I levemente elevada. RX de tórax com congestão pulmonar e derrame intersticial. Todas as alternativas abaixo estão corretas, **exceto**:",
    en: "A 63-year-old man with a history of severe hypertension and poor medication adherence presents to the ED with intense dyspnea, orthopnea, and diaphoresis. HR 128 bpm, BP 240/130 mmHg, O2 sat 82% on room air, diffuse crackles in lower two-thirds of lungs, and accessory muscle use. ECG shows LV strain and mildly elevated troponin I. Chest X-ray shows pulmonary congestion and interstitial edema. All of the following are correct, **except**:",
    es: "Hombre de 63 años con antecedente de hipertensión severa y mala adherencia a la medicación, se presenta con disnea intensa, ortopnea y diaforesis. FC 128 lpm, PA 240/130 mmHg, SatO2 82% en aire ambiente, estertores en dos tercios inferiores de los pulmones y uso de músculos accesorios. ECG con sobrecarga de VI y troponina I ligeramente elevada. RX torácico con congestión pulmonar y edema intersticial. Todas las afirmaciones siguientes son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "O uso de vasodilatadores intravenosos, como nitroglicerina, é indicado para reduzir pré e pós-carga rapidamente.",
        en: "IV vasodilators like nitroglycerin are indicated to rapidly reduce preload and afterload.",
        es: "Los vasodilatadores IV como la nitroglicerina están indicados para reducir rápida la precarga y poscarga."
      },
      explanation: {
        pt: "Vasodilatadores são a base do tratamento quando a pressão está muito elevada, aliviando a congestão rapidamente.",
        en: "Vasodilators are the cornerstone when BP is very high, relieving congestion quickly.",
        es: "Los vasodilatadores son esenciales en hipertensión severa para aliviar la congestión rápidamente."
      }
    },
    {
      text: {
        pt: "A ventilação não invasiva com pressão positiva melhora oxigenação e reduz pré-carga.",
        en: "Noninvasive ventilation with positive pressure improves oxygenation and reduces preload.",
        es: "La ventilación no invasiva con presión positiva mejora la oxigenación y reduce la precarga."
      },
      explanation: {
        pt: "CPAP ou BIPAP reduzem trabalho respiratório e redistribuem fluido pulmonar.",
        en: "CPAP or BIPAP reduce respiratory effort and help redistribute pulmonary fluid.",
        es: "El CPAP o BIPAP reducen el trabajo respiratorio y redistribuyen el líquido pulmonar."
      }
    },
    {
      text: {
        pt: "Diuréticos de alça IV, como furosemida, são indicados precocemente para reduzir o volume intravascular.",
        en: "IV loop diuretics like furosemide are indicated early to reduce intravascular volume.",
        es: "Los diuréticos de asa IV como la furosemida están indicados temprano para reducir el volumen intravascular."
      },
      explanation: {
        pt: "Diuréticos atuam mais tardiamente e são úteis, mas seu início precoce é recomendado.",
        en: "Diuretics act later but are useful; early initiation is still recommended.",
        es: "Los diuréticos actúan más tarde pero su inicio temprano es recomendado."
      }
    },
    {
      text: {
        pt: "Betabloqueadores IV devem ser iniciados precocemente para controlar a frequência cardíaca.",
        en: "IV beta-blockers should be started early to control heart rate.",
        es: "Los betabloqueadores IV deben iniciarse temprano para controlar la frecuencia cardíaca."
      },
      explanation: {
        pt: "**INCORRETA.** Betabloqueadores IV estão contraindicados em edema agudo de pulmão, pois reduzem contratilidade e agravam o quadro.",
        en: "**INCORRECT.** IV beta-blockers are contraindicated in acute pulmonary edema as they reduce contractility and may worsen the condition.",
        es: "**INCORRECTA.** Los betabloqueadores IV están contraindicados en edema agudo de pulmón porque reducen la contractilidad y empeoran el cuadro."
      }
    },
    {
      text: {
        pt: "Edema agudo de pulmão por hipertensão grave é uma emergência hipertensiva com risco de morte rápida se não tratada.",
        en: "Acute pulmonary edema from severe hypertension is a hypertensive emergency with rapid fatal risk if untreated.",
        es: "El edema agudo de pulmón por hipertensión severa es una emergencia hipertensiva con riesgo de muerte rápida si no se trata."
      },
      explanation: {
        pt: "A abordagem deve ser imediata para reverter o quadro e evitar parada cardíaca iminente.",
        en: "Immediate intervention is needed to reverse the condition and avoid imminent cardiac arrest.",
        es: "Se requiere intervención inmediata para revertir el cuadro y evitar paro cardíaco inminente."
      }
    }
  ]
},
{
  id: 407,
  code: "cardio04-q407",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["pulmonary embolism", "heart failure", "post-myocardial infarction", "prolonged hospitalization", "differential diagnosis"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Homem de 68 anos, com IAM anterior recente e fração de ejeção de 20%, permanece internado há 14 dias após episódios de edema agudo de pulmão e pneumonia. Encontra-se em ventilação não invasiva, em uso de diuréticos e antibióticos. Subitamente apresenta dessaturação (SpO2 84%), taquicardia (FC 122 bpm), PA 100x65 mmHg e confusão mental. ECG sem novas alterações e troponina persistentemente elevada. D-dímero 2890 ng/mL. Considerando TEP, todas as opções abaixo estão corretas, **exceto**:",
    en: "A 68-year-old man with a recent anterior MI and ejection fraction of 20% remains hospitalized for 14 days after episodes of acute pulmonary edema and pneumonia. He is on noninvasive ventilation, diuretics, and antibiotics. Suddenly, he develops desaturation (SpO2 84%), tachycardia (HR 122 bpm), BP 100/65 mmHg, and confusion. ECG shows no new changes; troponin remains elevated. D-dimer is 2890 ng/mL. Considering PE, all of the following are correct, **except**:",
    es: "Hombre de 68 años con IAM anterior reciente y fracción de eyección del 20% continúa hospitalizado hace 14 días tras episodios de edema agudo de pulmón y neumonía. Está con ventilación no invasiva, diuréticos y antibióticos. Súbitamente desarrolla desaturación (SpO2 84%), taquicardia (FC 122 lpm), PA 100/65 mmHg y confusión. ECG sin nuevos cambios; troponina persistentemente elevada. Dímero-D: 2890 ng/mL. Considerando TEP, todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A tromboembolia pulmonar deve ser considerada mesmo com troponina elevada cronicamente.",
        en: "Pulmonary embolism should be considered even with chronically elevated troponin.",
        es: "La tromboembolia pulmonar debe considerarse incluso con troponina crónicamente elevada."
      },
      explanation: {
        pt: "A troponina elevada é comum na IC grave, mas sua elevação adicional ou alterações clínicas indicam investigação para TEP.",
        en: "Elevated troponin is common in severe HF, but further elevation or clinical change warrants PE investigation.",
        es: "La troponina puede estar elevada en IC, pero cambios clínicos exigen considerar TEP."
      }
    },
    {
      text: {
        pt: "A instabilidade hemodinâmica e a hipoxemia abrupta são compatíveis com TEP em paciente de risco.",
        en: "Abrupt hemodynamic instability and hypoxemia are consistent with PE in a high-risk patient.",
        es: "La inestabilidad hemodinámica y la hipoxemia súbita son compatibles con TEP en paciente de alto riesgo."
      },
      explanation: {
        pt: "O quadro clínico é típico e deve motivar investigação por angiotomografia ou ecocardiograma.",
        en: "This clinical presentation is typical and warrants angio-CT or echocardiographic evaluation.",
        es: "Este cuadro clínico es típico y justifica angiotomografía o ecocardiograma urgente."
      }
    },
    {
      text: {
        pt: "A anticoagulação deve ser iniciada imediatamente se a suspeita clínica for alta e não houver contraindicações.",
        en: "Anticoagulation should be started promptly if clinical suspicion is high and there are no contraindications.",
        es: "Se debe iniciar anticoagulación inmediata si la sospecha clínica es alta y no hay contraindicaciones."
      },
      explanation: {
        pt: "Em casos de alta probabilidade clínica, o tratamento não deve esperar confirmação diagnóstica formal.",
        en: "In high clinical probability, treatment should not await formal diagnostic confirmation.",
        es: "Con alta probabilidad clínica, el tratamiento no debe demorarse esperando confirmación diagnóstica."
      }
    },
    {
      text: {
        pt: "O D-dímero elevado neste contexto é um marcador útil para excluir o diagnóstico de TEP.",
        en: "Elevated D-dimer in this context is a useful marker to rule out PE.",
        es: "El dímero-D elevado en este contexto es útil para descartar el diagnóstico de TEP."
      },
      explanation: {
        pt: "**INCORRETA.** O D-dímero é sensível, mas pouco específico em pacientes internados. Um valor elevado **não exclui**, e sim sugere o diagnóstico.",
        en: "**INCORRECT.** D-dimer is sensitive but non-specific in inpatients. Elevated values **do not rule out**, but rather suggest PE.",
        es: "**INCORRECTA.** El dímero-D es sensible, pero poco específico. Valores altos **no descartan**, sino que sugieren TEP."
      }
    },
    {
      text: {
        pt: "A angiotomografia pulmonar é o exame padrão-ouro para confirmação diagnóstica em pacientes estáveis.",
        en: "Pulmonary CT angiography is the gold standard diagnostic test in stable patients.",
        es: "La angiotomografía pulmonar es el estándar de oro para confirmar diagnóstico en pacientes estables."
      },
      explanation: {
        pt: "Sempre que o paciente tiver condições clínicas e função renal preservada, a angio-TC é o exame de escolha.",
        en: "If the patient is clinically stable and has preserved renal function, CT angiography is preferred.",
        es: "Si el paciente está clínicamente estable y con función renal adecuada, la angio-TC es el examen de elección."
      }
    }
  ]
},
{
  id: 408,
  code: "cardio04-q408",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["septic shock", "echocardiography", "hemodynamic monitoring", "volume responsiveness", "vasoplegia"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Homem de 64 anos, com DPOC e diabetes, é admitido com pneumonia grave e choque séptico. Está em noradrenalina (0,3 mcg/kg/min), saturação de O2 92% em VM, PA 85x52 mmHg. O ecocardiograma mostra ventrículo esquerdo com fração de ejeção preservada, ventrículo direito normal e veia cava inferior colabável >50% com inspiração. Qual das afirmações abaixo está INCORRETA?",
    en: "A 64-year-old man with COPD and diabetes is admitted with severe pneumonia and septic shock. He is on norepinephrine (0.3 mcg/kg/min), O2 sat 92% on mechanical ventilation, BP 85/52 mmHg. Echocardiogram shows preserved left ventricular ejection fraction, normal right ventricle, and a collapsible IVC >50% with inspiration. Which of the following statements is INCORRECT?",
    es: "Hombre de 64 años con EPOC y diabetes es admitido por neumonía grave y shock séptico. Está en noradrenalina (0,3 mcg/kg/min), SatO2 92% en VM, PA 85/52 mmHg. El ecocardiograma muestra fracción de eyección preservada, ventrículo derecho normal y VCI colapsable >50% con inspiración. ¿Cuál de las siguientes afirmaciones es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "A fração de ejeção preservada não exclui disfunção circulatória no choque séptico.",
        en: "Preserved ejection fraction does not exclude circulatory dysfunction in septic shock.",
        es: "La fracción de eyección preservada no excluye disfunción circulatoria en el shock séptico."
      },
      explanation: {
        pt: "Muitos pacientes com choque séptico têm função sistólica preservada mas apresentam vasoplegia ou disfunção diastólica.",
        en: "Many septic shock patients have preserved systolic function but significant vasoplegia or diastolic dysfunction.",
        es: "Muchos pacientes con shock séptico presentan función sistólica preservada, pero disfunción diastólica o vasoplejía."
      }
    },
    {
      text: {
        pt: "A veia cava inferior colabável sugere hipovolemia e pode indicar resposta a volume.",
        en: "A collapsible inferior vena cava suggests hypovolemia and potential fluid responsiveness.",
        es: "Una vena cava inferior colapsable sugiere hipovolemia y posible respuesta a volumen."
      },
      explanation: {
        pt: "**INCORRETA.** Em ventilação mecânica, a VCI colabável perde sensibilidade para prever resposta volêmica. A variação é mais útil em pacientes em respiração espontânea.",
        en: "**INCORRECT.** Under mechanical ventilation, collapsible IVC loses predictive value for fluid responsiveness. It is more reliable in spontaneously breathing patients.",
        es: "**INCORRECTA.** En ventilación mecánica, la colapsabilidad de la VCI pierde sensibilidad para predecir respuesta a fluidos. Es más útil en respiración espontánea."
      }
    },
    {
      text: {
        pt: "O ecocardiograma é útil para diferenciar hipovolemia de disfunção miocárdica séptica.",
        en: "Echocardiography helps differentiate hypovolemia from septic myocardial dysfunction.",
        es: "El ecocardiograma ayuda a diferenciar hipovolemia de disfunción miocárdica séptica."
      },
      explanation: {
        pt: "Permite avaliar volume intracavitário, contratilidade e função diastólica de forma rápida e à beira-leito.",
        en: "It allows bedside evaluation of volume status, contractility, and diastolic function.",
        es: "Permite valorar volumen, contractilidad y función diastólica de forma inmediata."
      }
    },
    {
      text: {
        pt: "A avaliação do ventrículo direito é importante, pois sua disfunção pode limitar a resposta a fluidos.",
        en: "Right ventricular assessment is important as dysfunction may limit fluid responsiveness.",
        es: "La evaluación del ventrículo derecho es clave, ya que su disfunción limita la respuesta a fluidos."
      },
      explanation: {
        pt: "A sobrecarga de volume em um VD disfuncionante pode piorar o débito cardíaco e a perfusão sistêmica.",
        en: "Fluid overload in RV dysfunction can worsen cardiac output and systemic perfusion.",
        es: "La sobrecarga de volumen con disfunción del VD puede empeorar el gasto cardíaco y la perfusión."
      }
    },
    {
      text: {
        pt: "A variação de volume sistólico com manobra de elevação passiva das pernas é mais útil que a VCI no VM.",
        en: "Stroke volume variation with passive leg raising is more useful than IVC in mechanically ventilated patients.",
        es: "La variación del volumen sistólico con elevación pasiva de piernas es más útil que la VCI en VM."
      },
      explanation: {
        pt: "PLR simula um desafio volêmico e, se aumenta o volume sistólico, sugere responsividade real a volume.",
        en: "PLR simulates a fluid challenge; if it increases stroke volume, it suggests true fluid responsiveness.",
        es: "La PLR simula un reto volémico y, si aumenta el volumen sistólico, indica respuesta real a fluidos."
      }
    }
  ]
},
{
  id: 409,
  code: "cardio04-q409",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["cardiogenic shock", "echocardiography", "left ventricular dysfunction", "mechanical support", "hemodynamics"],
  level: "very_hard",
  correct: 0,
  question: {
    pt: "Mulher de 71 anos, com histórico de infarto anterior e fração de ejeção de 30%, é admitida com hipotensão (PA 80x55 mmHg), taquicardia (FC 115 bpm), extremidades frias e lactato 6,5 mmol/L. Está em noradrenalina e dobutamina. O ecocardiograma mostra ventrículo esquerdo dilatado, hipocinesia difusa, VD normal e ausência de derrame pericárdico. Qual das afirmações abaixo está INCORRETA?",
    en: "A 71-year-old woman with prior anterior MI and ejection fraction of 30% is admitted with hypotension (BP 80/55 mmHg), tachycardia (HR 115 bpm), cold extremities, and lactate 6.5 mmol/L. She is on norepinephrine and dobutamine. Echocardiogram shows dilated left ventricle, global hypokinesia, normal RV, and no pericardial effusion. Which statement is INCORRECT?",
    es: "Mujer de 71 años con infarto anterior previo y fracción de eyección del 30% es admitida con hipotensión (PA 80/55 mmHg), taquicardia (FC 115 lpm), extremidades frías y lactato 6,5 mmol/L. Está en noradrenalina y dobutamina. El ecocardiograma muestra VI dilatado, hipocinesia difusa, VD normal y sin derrame pericárdico. ¿Cuál afirmación es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "A ausência de derrame pericárdico afasta a hipótese de tamponamento como causa do choque.",
        en: "Absence of pericardial effusion rules out tamponade as a cause of shock.",
        es: "La ausencia de derrame pericárdico descarta taponamiento como causa del shock."
      },
      explanation: {
        pt: "**INCORRETA.** Embora a ausência de derrame relevante torne o tamponamento improvável, pequenas coleções loculadas ou hematomas compressivos não são excluídos apenas com eco transtorácico.",
        en: "**INCORRECT.** Although significant effusion is unlikely, loculated collections or compressive hematomas may still be missed on transthoracic echo.",
        es: "**INCORRECTA.** Aunque el derrame relevante parece improbable, colecciones loculadas o hematomas pueden pasar desapercibidos con eco transtorácico."
      }
    },
    {
      text: {
        pt: "A hipocinesia difusa com débito baixo confirma disfunção miocárdica como causa do choque.",
        en: "Diffuse hypokinesia with low output confirms myocardial dysfunction as the cause of shock.",
        es: "La hipocinesia difusa con bajo gasto confirma disfunción miocárdica como causa del shock."
      },
      explanation: {
        pt: "A causa cardiogênica do choque é confirmada pela disfunção global e baixo débito.",
        en: "Cardiogenic shock is confirmed by global dysfunction and low output.",
        es: "El shock cardiogénico se confirma por disfunción global y bajo gasto."
      }
    },
    {
      text: {
        pt: "A ecocardiografia ajuda na decisão de suporte mecânico como balão intra-aórtico ou ECMO-VA.",
        en: "Echocardiography guides the decision for mechanical support like IABP or VA-ECMO.",
        es: "El ecocardiograma orienta la decisión de soporte mecánico como balón intraaórtico o ECMO-VA."
      },
      explanation: {
        pt: "O eco permite estimar fração de ejeção, volumes, função diastólica e guiar intervenções de suporte.",
        en: "Echo helps assess ejection fraction, volumes, diastolic function, and guides support decisions.",
        es: "El eco permite evaluar fracción de eyección, volúmenes, función diastólica y guiar soporte."
      }
    },
    {
      text: {
        pt: "A função do ventrículo direito deve ser sempre avaliada, pois impacta na resposta à terapia.",
        en: "Right ventricular function must always be assessed, as it impacts therapeutic response.",
        es: "La función del ventrículo derecho debe ser evaluada siempre, ya que impacta en la respuesta terapéutica."
      },
      explanation: {
        pt: "A falência do VD limita débito e pode agravar congestão sistêmica, mesmo com VE disfuncional.",
        en: "RV failure limits output and worsens congestion even in LV dysfunction.",
        es: "La falla del VD limita el gasto y empeora la congestión sistémica incluso con disfunción del VI."
      }
    },
    {
      text: {
        pt: "A ecocardiografia deve ser seriada em pacientes com instabilidade persistente, para guiar ajustes terapêuticos.",
        en: "Echocardiography should be repeated in persistently unstable patients to guide therapeutic adjustments.",
        es: "El ecocardiograma debe repetirse en pacientes inestables para guiar ajustes terapéuticos."
      },
      explanation: {
        pt: "Alterações rápidas no estado hemodinâmico justificam avaliação contínua do desempenho cardíaco.",
        en: "Rapid hemodynamic changes justify continuous reassessment of cardiac performance.",
        es: "Los cambios rápidos justifican reevaluación continua del desempeño cardíaco."
      }
    }
  ]
},
{
  id: 410,
  code: "cardio04-q410",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["obstructive shock", "echocardiography", "tamponade", "pulmonary embolism", "right ventricular failure"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 59 anos, previamente hígido, é admitido com dor torácica, síncope e hipotensão súbita (PA 70x40 mmHg). ECG mostra taquicardia sinusal e sinais de sobrecarga de ventrículo direito. O eco emergencial revela ventrículo direito dilatado e hipocinético, septo interventricular parado ou com movimento paradoxal, ventrículo esquerdo colabado em diástole. Não há derrame pericárdico. Qual das afirmativas abaixo está INCORRETA?",
    en: "A 59-year-old previously healthy man presents with chest pain, syncope, and sudden hypotension (BP 70/40 mmHg). ECG shows sinus tachycardia and signs of right ventricular overload. Emergency echocardiogram shows a dilated and hypokinetic right ventricle, interventricular septal flattening or paradoxical motion, and collapsed left ventricle during diastole. No pericardial effusion is seen. Which statement is INCORRECT?",
    es: "Hombre de 59 años, previamente sano, se presenta con dolor torácico, síncope e hipotensión súbita (PA 70/40 mmHg). ECG muestra taquicardia sinusal y signos de sobrecarga del ventrículo derecho. El ecocardiograma de urgencia muestra VD dilatado e hipocinético, septo interventricular aplanado o con movimiento paradójico, y VI colapsado en diástole. No se observa derrame pericárdico. ¿Cuál afirmación es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "O achado de septo interventricular parado ou em movimento paradoxal indica sobrecarga de pressão do VD.",
        en: "Septal flattening or paradoxical motion indicates RV pressure overload.",
        es: "El aplanamiento o movimiento paradójico del septo indica sobrecarga de presión del VD."
      },
      explanation: {
        pt: "O sinal do septo parado é típico da hipertensão pulmonar aguda, como no TEP maciço.",
        en: "Septal motion abnormalities are typical of acute pulmonary hypertension, as seen in massive PE.",
        es: "Las alteraciones del septo son típicas de hipertensión pulmonar aguda, como en TEP masivo."
      }
    },
    {
      text: {
        pt: "A ausência de derrame pericárdico torna tamponamento cardíaco improvável.",
        en: "Absence of pericardial effusion makes cardiac tamponade unlikely.",
        es: "La ausencia de derrame pericárdico hace improbable el taponamiento cardíaco."
      },
      explanation: {
        pt: "Tamponamento requer acúmulo significativo de líquido ou sangue pericárdico, geralmente visível ao eco.",
        en: "Tamponade requires significant pericardial fluid or blood, usually visible on echo.",
        es: "El taponamiento requiere líquido o sangre pericárdica significativa, visible en el eco."
      }
    },
    {
      text: {
        pt: "O ventrículo esquerdo colabado em diástole é achado típico de insuficiência mitral aguda.",
        en: "Collapsed left ventricle during diastole is typical of acute mitral regurgitation.",
        es: "El VI colapsado en diástole es típico de insuficiencia mitral aguda."
      },
      explanation: {
        pt: "**INCORRETA.** O colapso do VE em diástole é achado típico de baixo retorno, como em choque obstrutivo. Na insuficiência mitral aguda, o VE geralmente está dilatado com fluxo retrógrado para AE.",
        en: "**INCORRECT.** LV collapse in diastole suggests low preload, as seen in obstructive shock. Acute mitral regurgitation typically shows a dilated LV with backward flow into LA.",
        es: "**INCORRECTA.** El colapso del VI en diástole indica bajo retorno, como en shock obstructivo. En IM aguda, el VI suele estar dilatado con regurgitación hacia la AI."
      }
    },
    {
      text: {
        pt: "O ventrículo direito dilatado com disfunção súbita sugere tromboembolismo pulmonar maciço.",
        en: "A dilated right ventricle with sudden dysfunction suggests massive pulmonary embolism.",
        es: "El VD dilatado con disfunción súbita sugiere embolia pulmonar masiva."
      },
      explanation: {
        pt: "O VD dilatado e hipocinético é achado clássico em TEP grave.",
        en: "Dilated, hypokinetic RV is a classic finding in massive PE.",
        es: "El VD dilatado e hipocinético es un hallazgo típico en TEP masivo."
      }
    },
    {
      text: {
        pt: "A ecocardiografia à beira-leito é essencial na identificação de causas de choque obstrutivo.",
        en: "Bedside echocardiography is essential to identify causes of obstructive shock.",
        es: "El ecocardiograma a pie de cama es esencial para identificar causas de shock obstructivo."
      },
      explanation: {
        pt: "Permite diferenciar tamponamento, TEP, pneumotórax e outras causas de obstrução ao retorno venoso ou ejeção.",
        en: "It helps differentiate tamponade, PE, pneumothorax, and other causes of impaired return or outflow.",
        es: "Permite diferenciar taponamiento, TEP, neumotórax y otras causas de obstrucción al retorno o eyección."
      }
    }
  ]
},
{
  id: 411,
  code: "cardio04-q411",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["hypovolemic shock", "echocardiography", "preload", "volume status", "fluid resuscitation"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Mulher de 49 anos, previamente saudável, é admitida após episódio de sangramento digestivo alto com hematêmese volumosa. Apresenta PA 78x44 mmHg, FC 125 bpm, extremidades frias e rebaixamento do nível de consciência. O ecocardiograma mostra câmaras cardíacas pequenas, ventrículo esquerdo hipercontrátil e VCI fina colabando >75%. Qual das alternativas está INCORRETA?",
    en: "A 49-year-old previously healthy woman is admitted after a large upper GI bleeding episode with hematemesis. BP is 78/44 mmHg, HR 125 bpm, cold extremities, and decreased level of consciousness. Echocardiogram shows small cardiac chambers, hyperdynamic left ventricle, and a thin IVC collapsing >75%. Which of the following statements is INCORRECT?",
    es: "Mujer de 49 años, previamente sana, es admitida tras un episodio de sangrado digestivo alto con hematemesis abundante. PA 78/44 mmHg, FC 125 lpm, extremidades frías y alteración del nivel de conciencia. El ecocardiograma muestra cavidades cardíacas pequeñas, VI hiperdinámico y VCI colapsable >75%. ¿Cuál afirmación es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "A VCI colabável e fina indica hipovolemia grave e necessidade de reposição.",
        en: "A thin, collapsible IVC indicates severe hypovolemia and fluid need.",
        es: "Una VCI colapsable y fina indica hipovolemia grave y necesidad de volumen."
      },
      explanation: {
        pt: "VCI com colapso >50% é marcador de baixa pré-carga e suporte volêmico indicado.",
        en: "IVC collapse >50% suggests low preload and need for fluid resuscitation.",
        es: "VCI con colapso >50% sugiere baja precarga y necesidad de reposición."
      }
    },
    {
      text: {
        pt: "O ventrículo esquerdo hipercontrátil pode ocorrer como compensação ao baixo volume sistólico.",
        en: "Hyperdynamic left ventricle may occur as compensation for low stroke volume.",
        es: "El ventrículo izquierdo hiperdinámico puede ser una compensación al bajo volumen sistólico."
      },
      explanation: {
        pt: "Na hipovolemia, há aumento do tônus simpático e da contratilidade residual.",
        en: "Hypovolemia increases sympathetic tone and residual contractility.",
        es: "La hipovolemia aumenta el tono simpático y la contractilidad residual."
      }
    },
    {
      text: {
        pt: "Câmaras cardíacas pequenas no ecocardiograma são compatíveis com estado hipovolêmico agudo.",
        en: "Small cardiac chambers on echo are consistent with acute hypovolemia.",
        es: "Cavidades cardíacas pequeñas en ecocardiograma son compatibles con hipovolemia aguda."
      },
      explanation: {
        pt: "O colapso de VE e VD é comum na hipovolemia grave, com câmaras pequenas e comprimidas.",
        en: "LV and RV collapse is common in severe hypovolemia, showing small and compressed chambers.",
        es: "El colapso de VI y VD es común en hipovolemia severa, con cavidades pequeñas y comprimidas."
      }
    },
    {
      text: {
        pt: "A presença de ventrículo direito dilatado com pressão sistólica de artéria pulmonar elevada é comum na hipovolemia.",
        en: "A dilated right ventricle with elevated pulmonary artery systolic pressure is common in hypovolemia.",
        es: "Un VD dilatado con presión pulmonar elevada es común en hipovolemia."
      },
      explanation: {
        pt: "**INCORRETA.** VD dilatado e hipertensão pulmonar não são achados típicos da hipovolemia. Pelo contrário, VD colabado e pressão baixa são esperados.",
        en: "**INCORRECT.** RV dilation and pulmonary hypertension are not typical in hypovolemia. Instead, RV collapse and low pressures are expected.",
        es: "**INCORRECTA.** VD dilatado e hipertensión pulmonar no son hallazgos típicos en hipovolemia. Se espera colapso y presiones bajas."
      }
    },
    {
      text: {
        pt: "A ecocardiografia é útil para orientar a velocidade e volume da reposição hídrica.",
        en: "Echocardiography helps guide fluid resuscitation speed and volume.",
        es: "El ecocardiograma ayuda a guiar la velocidad y el volumen de la reposición hídrica."
      },
      explanation: {
        pt: "Alterações dinâmicas podem ser usadas para monitorar a resposta à infusão volêmica.",
        en: "Dynamic changes can be used to monitor response to fluid administration.",
        es: "Los cambios dinámicos permiten monitorear la respuesta a la reposición de líquidos."
      }
    }
  ]
},
{
  id: 412,
  code: "cardio04-q412",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["pacemaker", "heart failure", "atrial fibrillation", "junctional rhythm", "electrophysiology"],
  level: "very_hard",
  correct: 4,
  question: {
    pt: "Homem de 74 anos, com IC sistólica avançada (fração de ejeção 20%) e fibrilação atrial crônica, é admitido por descompensação com PA 85x60 mmHg, FC 38 bpm, congestão pulmonar e lentidão cognitiva. ECG mostra ritmo juncional lento. Está em ventilação não invasiva, com noradrenalina em dose baixa. Qual das seguintes condutas está INCORRETA?",
    en: "A 74-year-old man with advanced systolic heart failure (EF 20%) and chronic atrial fibrillation is admitted with decompensation: BP 85/60 mmHg, HR 38 bpm, pulmonary congestion, and mental slowing. ECG shows slow junctional rhythm. He is on low-dose norepinephrine and noninvasive ventilation. Which of the following actions is INCORRECT?",
    es: "Hombre de 74 años con IC sistólica avanzada (FE 20%) y fibrilación auricular crónica es admitido por descompensación: PA 85/60 mmHg, FC 38 lpm, congestión pulmonar y enlentecimiento mental. ECG muestra ritmo de la unión lento. Está en ventilación no invasiva y noradrenalina a baja dosis. ¿Cuál de las siguientes acciones es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "Ritmo juncional lento em FA com IC grave pode justificar implante de marca-passo.",
        en: "Slow junctional rhythm in AF with severe HF may justify pacemaker implantation.",
        es: "El ritmo de la unión lento en FA con IC grave puede justificar marcapasos."
      },
      explanation: {
        pt: "A frequência extremamente baixa contribui para baixo débito e pode requerer estimulação ventricular.",
        en: "Extremely low HR worsens output and may require ventricular pacing.",
        es: "La FC muy baja reduce el gasto y puede requerir estimulación ventricular."
      }
    },
    {
      text: {
        pt: "A escolha ideal é marca-passo com estimulação biventricular (CRT) em pacientes com dissincronia.",
        en: "Biventricular pacing (CRT) is ideal in patients with dyssynchrony.",
        es: "La estimulación biventricular (TRC) es ideal en pacientes con disincronía."
      },
      explanation: {
        pt: "CRT pode melhorar débito em IC com QRS largo ou dissincronia ecocardiográfica.",
        en: "CRT improves output in HF with wide QRS or echo dyssynchrony.",
        es: "La TRC mejora el gasto en IC con QRS ancho o disincronía ecográfica."
      }
    },
    {
      text: {
        pt: "Ritmo juncional em FA com FC <40 bpm é indicação classe I para marca-passo.",
        en: "AF with junctional rhythm <40 bpm is class I indication for pacing.",
        es: "FA con ritmo de la unión <40 lpm es indicación clase I para marcapasos."
      },
      explanation: {
        pt: "Bradicardia sintomática em FA com escape juncional lento requer marca-passo definitivo.",
        en: "Symptomatic bradycardia in AF with slow junctional escape requires permanent pacing.",
        es: "La bradicardia sintomática en FA con escape lento requiere marcapasos definitivo."
      }
    },
    {
      text: {
        pt: "Em pacientes instáveis, pode-se iniciar estimulação provisória até definição da estratégia definitiva.",
        en: "In unstable patients, temporary pacing may be started until definitive strategy is defined.",
        es: "En pacientes inestables, puede iniciarse marcapasos transitorio hasta definir estrategia definitiva."
      },
      explanation: {
        pt: "Estimulação provisória por via transvenosa ou transcutânea é segura até implante.",
        en: "Temporary pacing (transvenous or transcutaneous) is safe until permanent implant.",
        es: "La estimulación temporal (transvenosa o transcutánea) es segura hasta el implante definitivo."
      }
    },
    {
      text: {
        pt: "A reversão elétrica da FA deve ser tentada antes de decidir por marca-passo em ritmo juncional.",
        en: "Electrical cardioversion of AF should be attempted before deciding on pacing in junctional rhythm.",
        es: "La cardioversión eléctrica de la FA debe intentarse antes de decidir un marcapasos en ritmo de la unión."
      },
      explanation: {
        pt: "**INCORRETA.** Em FA crônica, especialmente com escape juncional lento, a reversão elétrica não está indicada e pode ser deletéria.",
        en: "**INCORRECT.** In chronic AF with slow junctional escape, cardioversion is not indicated and may be harmful.",
        es: "**INCORRECTA.** En FA crónica con escape lento, la cardioversión no está indicada y puede ser perjudicial."
      }
    }
  ]
},
{
  id: 413,
  code: "cardio04-q413",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["intra-aortic balloon pump", "cardiogenic shock", "mechanical support", "myocardial infarction", "perfusion"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Mulher de 66 anos, com IAM anterior complicado por choque cardiogênico e fração de ejeção de 25%, apresenta PA 78x52 mmHg, FC 118 bpm, estertores e extremidades frias. Está em uso de dobutamina e noradrenalina. Indicado balão intra-aórtico (IABP). Sobre esse suporte, qual das afirmativas é INCORRETA?",
    en: "A 66-year-old woman with anterior MI complicated by cardiogenic shock and an ejection fraction of 25% presents with BP 78/52 mmHg, HR 118 bpm, crackles, and cold extremities. She is on dobutamine and norepinephrine. Intra-aortic balloon pump (IABP) is indicated. Which of the following statements is INCORRECT?",
    es: "Mujer de 66 años con IAM anterior complicado por shock cardiogénico y fracción de eyección del 25%, presenta PA 78/52 mmHg, FC 118 lpm, estertores y extremidades frías. Está en dobutamina y noradrenalina. Se indica balón intraaórtico (IABP). ¿Cuál afirmación es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "O IABP deve ser sincronizado com o ECG ou pulso arterial para inflar na diástole e desinflar antes da sístole.",
        en: "IABP must be synchronized with ECG or arterial pulse to inflate in diastole and deflate before systole.",
        es: "El IABP debe sincronizarse con ECG o pulso arterial para inflarse en diástole y desinflarse antes de la sístole."
      },
      explanation: {
        pt: "O balão inflado na diástole melhora a perfusão coronariana; a desinsuflação rápida reduz a pós-carga.",
        en: "Inflation during diastole improves coronary perfusion; rapid deflation reduces afterload.",
        es: "La inflación diastólica mejora la perfusión coronaria; la desinflación rápida reduce la poscarga."
      }
    },
    {
      text: {
        pt: "O balão melhora a perfusão coronariana e reduz a pós-carga do ventrículo esquerdo.",
        en: "The balloon improves coronary perfusion and reduces left ventricular afterload.",
        es: "El balón mejora la perfusión coronaria y reduce la poscarga del ventrículo izquierdo."
      },
      explanation: {
        pt: "A hemodinâmica é otimizada ao melhorar a pressão de perfusão e aliviar o trabalho do VE.",
        en: "Hemodynamics are optimized by improving perfusion pressure and reducing LV workload.",
        es: "Se optimiza la hemodinámica al mejorar la perfusión y aliviar el trabajo del VI."
      }
    },
    {
      text: {
        pt: "O uso do IABP é mais benéfico quando há disfunção predominante do ventrículo esquerdo sem comprometimento do direito.",
        en: "IABP is more beneficial when predominant LV dysfunction exists without RV impairment.",
        es: "El IABP es más beneficioso cuando hay disfunción predominante del VI sin afectación del VD."
      },
      explanation: {
        pt: "O balão atua na aorta, e não melhora diretamente o enchimento do VD; se o VD falha, pode não haver benefício.",
        en: "IABP works in the aorta and doesn’t directly help RV filling; RV failure limits benefit.",
        es: "El balón actúa en la aorta y no mejora directamente el llenado del VD; su falla limita el beneficio."
      }
    },
    {
      text: {
        pt: "O IABP está indicado como ponte para decisão em pacientes com instabilidade refratária ao suporte medicamentoso.",
        en: "IABP is indicated as a bridge to decision in patients with instability refractory to medical support.",
        es: "El IABP está indicado como puente a decisión en pacientes con inestabilidad refractaria al soporte médico."
      },
      explanation: {
        pt: "Pode ser usado como ponte para recuperação, transplante, ECMO ou retirada gradual do suporte.",
        en: "Can be used as bridge to recovery, transplant, ECMO, or weaning.",
        es: "Puede utilizarse como puente a recuperación, trasplante, ECMO o retirada progresiva del soporte."
      }
    },
    {
      text: {
        pt: "Estudos recentes mostram que o uso do IABP aumenta a sobrevida em pacientes com choque cardiogênico pós-IAM.",
        en: "Recent studies show that IABP improves survival in post-MI cardiogenic shock patients.",
        es: "Estudios recientes muestran que el IABP mejora la supervivencia en shock cardiogénico post-IAM."
      },
      explanation: {
        pt: "**INCORRETA.** Estudos como o IABP-SHOCK II não mostraram melhora significativa na mortalidade com IABP em choque cardiogênico pós-IAM, embora possa ser útil em subgrupos.",
        en: "**INCORRECT.** Trials like IABP-SHOCK II showed no significant survival benefit with IABP in post-MI cardiogenic shock, though it may help certain subgroups.",
        es: "**INCORRECTA.** Estudios como IABP-SHOCK II no mostraron mejora significativa en mortalidad con IABP en shock cardiogénico post-IAM, aunque puede ser útil en subgrupos."
      }
    }
  ]
},
{
  id: 414,
  code: "cardio04-q414",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["ecmo", "complications", "critical care", "vascular access", "hemodynamics"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Paciente de 51 anos em ECMO venoarterial periférica por choque cardiogênico apresenta queda progressiva de pressão arterial, distensão abdominal, piora da função hepática e aumento da pressão intra-abdominal. Considerando complicações associadas ao uso de ECMO, todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 51-year-old patient on peripheral venoarterial ECMO for cardiogenic shock develops progressive hypotension, abdominal distension, worsening liver function, and increased intra-abdominal pressure. Regarding complications related to ECMO use, all of the following statements are correct, **except**:",
    es: "Paciente de 51 años en ECMO venoarterial periférica por shock cardiogénico presenta hipotensión progresiva, distensión abdominal, deterioro hepático y aumento de la presión intraabdominal. En relación a las complicaciones de la ECMO, todas las siguientes afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "Síndrome compartimental abdominal pode ocorrer na ECMO por hipoperfusão, distensão venosa e aumento do volume intra-abdominal.",
        en: "Abdominal compartment syndrome may occur during ECMO due to hypoperfusion, venous congestion, and increased intra-abdominal volume.",
        es: "El síndrome compartimental abdominal puede ocurrir durante ECMO por hipoperfusión, congestión venosa y aumento del volumen intraabdominal."
      },
      explanation: {
        pt: "Trata-se de complicação grave, especialmente em pacientes com volemia aumentada e suporte vasopressor.",
        en: "It is a severe complication, especially in patients with fluid overload and vasopressor support.",
        es: "Es una complicación grave, especialmente en pacientes con sobrecarga de volumen y soporte vasopresor."
      }
    },
    {
      text: {
        pt: "A perfusão diferencial pode ocorrer na ECMO VA periférica e levar à hipoxemia cerebral mesmo com boa oxigenação no sangue arterial femoral.",
        en: "Harlequin syndrome may occur in peripheral VA-ECMO, causing cerebral hypoxemia despite good femoral arterial oxygenation.",
        es: "El síndrome de Harlequin puede ocurrir en ECMO VA periférica y causar hipoxemia cerebral a pesar de buena oxigenación femoral."
      },
      explanation: {
        pt: "O sangue desoxigenado do VE pode alcançar cérebro e coronárias se não houver mistura adequada com o fluxo da ECMO.",
        en: "Desaturated blood from the native LV may reach brain and coronaries if not properly mixed with ECMO flow.",
        es: "La sangre desaturada del VI puede alcanzar el cerebro y coronarias si no hay mezcla adecuada con el flujo de ECMO."
      }
    },
    {
      text: {
        pt: "A anticoagulação plena não é obrigatória durante suporte com ECMO, sendo usada apenas em casos de canulação femoral.",
        en: "Full anticoagulation is not mandatory during ECMO support, being reserved only for femoral cannulation cases.",
        es: "La anticoagulación plena no es obligatoria durante ECMO, utilizándose solo en casos de canulación femoral."
      },
      explanation: {
        pt: "**INCORRETA.** A anticoagulação é geralmente necessária para prevenir trombose no circuito, independentemente do tipo de canulação.",
        en: "**INCORRECT.** Anticoagulation is typically needed to prevent circuit thrombosis, regardless of cannulation site.",
        es: "**INCORRECTA.** La anticoagulación suele ser necesaria para prevenir trombosis del circuito, independientemente del sitio de canulación."
      }
    },
    {
      text: {
        pt: "A hemólise pode ser causada por turbulência no circuito, pressões elevadas e posicionamento inadequado dos cateteres.",
        en: "Hemolysis may result from circuit turbulence, high pressures, and catheter malposition.",
        es: "La hemólisis puede deberse a turbulencias en el circuito, presiones elevadas y mala posición de los catéteres."
      },
      explanation: {
        pt: "Marcadores como LDH e hemoglobina livre no plasma devem ser monitorados frequentemente.",
        en: "LDH and plasma free hemoglobin should be frequently monitored.",
        es: "Se deben monitorizar LDH y hemoglobina libre plasmática con frecuencia."
      }
    },
    {
      text: {
        pt: "A isquemia de membro inferior é uma complicação conhecida na canulação femoral e pode exigir reperfusão distal.",
        en: "Limb ischemia is a known complication of femoral cannulation and may require distal reperfusion.",
        es: "La isquemia de miembro inferior es una complicación conocida de la canulación femoral y puede requerir reperfusión distal."
      },
      explanation: {
        pt: "A cânula arterial femoral pode obstruir o fluxo distal, devendo-se usar cateter de perfusão retrógrada.",
        en: "Femoral arterial cannula may obstruct distal flow; retrograde perfusion catheter should be used.",
        es: "La cánula femoral puede obstruir el flujo distal; se recomienda usar catéter de perfusión retrógrada."
      }
    }
  ]
},
{
  id: 415,
  code: "cardio04-q415",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["ecmo", "heparin-induced thrombocytopenia", "anticoagulation", "cardiogenic shock", "stroke"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Homem de 69 anos, com IAM inferior há 6 dias tratado com ICP e uso de aspirina + clopidogrel + enoxaparina, evolui com choque cardiogênico refratário. Tem antecedente de AVC isquêmico há 8 meses. Apresenta plaquetopenia progressiva (plaquetas 42.000) e teste positivo para HIT (ELISA). Está indicado ECMO-VA. Sobre esse cenário, todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 69-year-old man with inferior MI 6 days ago treated with PCI, aspirin, clopidogrel, and enoxaparin develops refractory cardiogenic shock. He has a history of ischemic stroke 8 months ago. Platelets drop progressively to 42,000 and ELISA is positive for HIT. VA-ECMO is indicated. All of the following statements are correct, **except**:",
    es: "Hombre de 69 años con IAM inferior hace 6 días tratado con ICP, aspirina, clopidogrel y enoxaparina, presenta shock cardiogénico refractario. Tiene antecedente de AVC isquémico hace 8 meses. Las plaquetas descienden a 42.000 y el ELISA para HIT es positivo. Está indicada ECMO-VA. Todas las afirmaciones siguientes son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A heparina deve ser imediatamente suspensa e substituída por anticoagulante alternativo.",
        en: "Heparin must be immediately discontinued and replaced with an alternative anticoagulant.",
        es: "La heparina debe suspenderse de inmediato y reemplazarse por un anticoagulante alternativo."
      },
      explanation: {
        pt: "A heparina é contraindicada na HIT confirmada. Argatroban e bivalirudina são alternativas.",
        en: "Heparin is contraindicated in confirmed HIT. Argatroban and bivalirudin are alternatives.",
        es: "La heparina está contraindicada en HIT confirmada. Argatroban y bivalirudina son opciones."
      }
    },
    {
      text: {
        pt: "A ECMO-VA pode ser realizada com anticoagulantes alternativos à heparina, como bivalirudina.",
        en: "VA-ECMO can be performed using non-heparin anticoagulants such as bivalirudin.",
        es: "La ECMO-VA puede realizarse con anticoagulantes alternativos como bivalirudina."
      },
      explanation: {
        pt: "Bivalirudina permite anticoagulação controlada na ECMO sem risco de HIT.",
        en: "Bivalirudin allows controlled anticoagulation in ECMO without HIT risk.",
        es: "La bivalirudina permite anticoagulación en ECMO sin riesgo de HIT."
      }
    },
    {
      text: {
        pt: "O risco trombótico da HIT supera o risco hemorrágico mesmo com plaquetopenia significativa.",
        en: "The thrombotic risk of HIT outweighs the bleeding risk even with significant thrombocytopenia.",
        es: "El riesgo trombótico de la HIT supera el riesgo hemorrágico incluso con trombocitopenia significativa."
      },
      explanation: {
        pt: "HIT é pró-trombótica. Não anticoagular adequadamente pode causar tromboses letais mesmo com plaquetas <50.000.",
        en: "HIT is prothrombotic. Inadequate anticoagulation may lead to fatal thrombosis even at <50,000 platelets.",
        es: "La HIT es protrombótica. No anticoagular adecuadamente puede causar trombosis letales con <50.000 plaquetas."
      }
    },
    {
      text: {
        pt: "A dupla antiagregação deve ser mantida rotineiramente mesmo com HIT em paciente com ICP recente.",
        en: "Dual antiplatelet therapy should be routinely maintained despite HIT in recent PCI patients.",
        es: "La doble antiagregación debe mantenerse rutinariamente a pesar de la HIT en pacientes con ICP reciente."
      },
      explanation: {
        pt: "**INCORRETA.** A dupla antiagregação deve ser cuidadosamente avaliada. O risco hemorrágico pode exigir suspensão ou transição para monoterapia.",
        en: "**INCORRECT.** DAPT must be carefully reassessed. Bleeding risk may warrant suspension or monotherapy.",
        es: "**INCORRECTA.** La doble antiagregación debe reevaluarse cuidadosamente. El riesgo de sangrado puede requerir suspensión o monoterapia."
      }
    },
    {
      text: {
        pt: "A história de AVCi não contraindica ECMO, mas requer vigilância rigorosa quanto à perfusão cerebral.",
        en: "A history of ischemic stroke does not contraindicate ECMO but mandates strict cerebral monitoring.",
        es: "El antecedente de AVC isquémico no contraindica ECMO, pero requiere vigilancia neurológica estricta."
      },
      explanation: {
        pt: "O fluxo retrógrado da ECMO pode alterar a oxigenação cerebral. História de AVC aumenta o risco de novos eventos.",
        en: "Retrograde ECMO flow may impair cerebral oxygenation. Stroke history increases risk of recurrence.",
        es: "El flujo retrógrado de ECMO puede alterar la oxigenación cerebral. Antecedente de AVC eleva el riesgo de recurrencia."
      }
    }
  ]
},
{
  id: 416,
  code: "cardio04-q416",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["lvad", "advanced heart failure", "mechanical circulatory support", "bridge to transplant", "complications"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 58 anos com insuficiência cardíaca avançada (fração de ejeção 15%, NYHA IV) em fila para transplante cardíaco apresenta internações frequentes por congestão refratária, hipotensão e hipoperfusão. Está em suporte inotrópico contínuo. Considera-se implante de LVAD. Todas as afirmações abaixo estão corretas, **exceto**:",
    en: "A 58-year-old man with advanced heart failure (ejection fraction 15%, NYHA IV) awaiting heart transplant has frequent admissions for refractory congestion, hypotension, and hypoperfusion. He is on continuous inotropic support. LVAD implantation is considered. All of the following statements are correct, **except**:",
    es: "Hombre de 58 años con insuficiencia cardíaca avanzada (FE 15%, NYHA IV) en lista de espera para trasplante cardíaco presenta ingresos frecuentes por congestión refractaria, hipotensión e hipoperfusión. Está en soporte inotrópico continuo. Se considera implante de LVAD. Todas las afirmaciones siguientes son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "O LVAD pode ser usado como ponte para transplante, ponte para decisão ou terapia definitiva (destination therapy).",
        en: "LVAD can be used as a bridge to transplant, bridge to decision, or destination therapy.",
        es: "El LVAD puede utilizarse como puente al trasplante, puente a decisión o terapia definitiva."
      },
      explanation: {
        pt: "Essas são as três principais indicações reconhecidas para suporte circulatório com LVAD.",
        en: "These are the three main accepted indications for LVAD support.",
        es: "Estas son las tres indicaciones principales reconocidas para el uso de LVAD."
      }
    },
    {
      text: {
        pt: "O uso de LVAD exige anticoagulação crônica, geralmente com varfarina e antiagregante.",
        en: "LVAD use requires chronic anticoagulation, typically with warfarin and antiplatelet therapy.",
        es: "El uso de LVAD requiere anticoagulación crónica, típicamente con warfarina y antiagregante."
      },
      explanation: {
        pt: "A trombose do rotor ou do circuito é complicação temida; anticoagulação é obrigatória.",
        en: "Pump or circuit thrombosis is a feared complication; anticoagulation is mandatory.",
        es: "La trombosis del rotor o circuito es grave; se requiere anticoagulación."
      }
    },
    {
      text: {
        pt: "O LVAD reduz o risco de infecção, pois substitui o suporte inotrópico contínuo e cateteres vasculares.",
        en: "LVAD reduces infection risk by replacing inotropic support and vascular catheters.",
        es: "El LVAD reduce el riesgo de infección al sustituir soporte inotrópico y catéteres."
      },
      explanation: {
        pt: "**INCORRETA.** Embora reduza certos riscos, o LVAD introduz risco significativo de infecção do driveline e do sistema de bombeamento.",
        en: "**INCORRECT.** Though it reduces some risks, LVAD introduces high risk of driveline and pump infections.",
        es: "**INCORRECTA.** Aunque reduce algunos riesgos, el LVAD conlleva alto riesgo de infección del driveline y la bomba."
      }
    },
    {
      text: {
        pt: "O eco transesofágico pode ser usado para monitorar posicionamento e funcionamento do dispositivo.",
        en: "Transesophageal echo can be used to monitor device positioning and function.",
        es: "El ecocardiograma transesofágico puede utilizarse para monitorizar posición y función del dispositivo."
      },
      explanation: {
        pt: "É útil no intraoperatório e no seguimento de complicações mecânicas ou trombóticas.",
        en: "Useful intraoperatively and for follow-up of mechanical or thrombotic complications.",
        es: "Es útil durante la cirugía y en seguimiento de complicaciones mecánicas o trombóticas."
      }
    },
    {
      text: {
        pt: "O uso de LVAD pode levar a disfunção progressiva do ventrículo direito por desbalanço de enchimento.",
        en: "LVAD use may lead to progressive right ventricular dysfunction due to filling imbalance.",
        es: "El uso de LVAD puede causar disfunción progresiva del VD por desequilibrio de llenado."
      },
      explanation: {
        pt: "Ao reduzir pressões no VE, o aumento do retorno ao VD pode desencadear falência direita em pacientes vulneráveis.",
        en: "By unloading LV, increased preload to RV can trigger failure in vulnerable patients.",
        es: "Al descargar el VI, el retorno al VD aumenta y puede precipitar su falla si es vulnerable."
      }
    }
  ]
},
{
  id: 417,
  code: "cardio04-q417",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["ecmo", "monitoring", "oxygenator", "circuit pressure", "continuous blood pressure"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Paciente em ECMO venoarterial periférica evolui com queda progressiva da saturação pós-oxigenador, aumento da pressão de entrada do oxigenador e elevação discreta de d-dímero. Simultaneamente, observa-se redução da PAM aferida invasivamente. Em relação à monitorização contínua durante ECMO, todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A patient on peripheral VA-ECMO develops progressive decrease in post-oxygenator saturation, increased pre-oxygenator pressure, and mild D-dimer elevation. Simultaneously, invasive MAP readings decrease. Regarding continuous ECMO monitoring, all of the following statements are correct, **except**:",
    es: "Paciente en ECMO VA periférica presenta disminución progresiva de la saturación post-oxigenador, aumento de la presión pre-oxigenador y elevación leve del dímero-D. Simultáneamente, la PAM invasiva disminuye. En cuanto al monitoreo continuo en ECMO, todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A saturação pós-oxigenador é um parâmetro direto da eficiência do oxigenador e deve ser continuamente monitorada.",
        en: "Post-oxygenator saturation is a direct parameter of oxygenator performance and should be continuously monitored.",
        es: "La saturación post-oxigenador es un parámetro directo del rendimiento del oxigenador y debe monitorearse continuamente."
      },
      explanation: {
        pt: "Queda progressiva na saturação sugere falência do oxigenador por trombose ou disfunção da membrana.",
        en: "Progressive drop in saturation suggests oxygenator failure due to thrombosis or membrane dysfunction.",
        es: "La disminución progresiva sugiere fallo del oxigenador por trombosis o disfunción de la membrana."
      }
    },
    {
      text: {
        pt: "A pressão antes do oxigenador reflete resistência no circuito e pode aumentar em obstrução ou falência do oxigenador.",
        en: "Pre-oxygenator pressure reflects circuit resistance and may rise with obstruction or oxygenator failure.",
        es: "La presión pre-oxigenador refleja la resistencia del circuito y puede elevarse ante obstrucción o fallo del oxigenador."
      },
      explanation: {
        pt: "Um aumento progressivo na pressão pré-membrana é um marcador precoce de obstrução ou coagulação no oxigenador.",
        en: "Progressive increase in pre-membrane pressure is an early marker of obstruction or clotting in the oxygenator.",
        es: "El aumento progresivo de la presión pre-membrana indica obstrucción o trombosis del oxigenador."
      }
    },
    {
      text: {
        pt: "A redução da PAM invasiva sempre reflete disfunção do fluxo da ECMO e indica falência do suporte.",
        en: "Reduction in invasive MAP always reflects ECMO flow dysfunction and indicates support failure.",
        es: "La reducción de la PAM invasiva siempre refleja disfunción del flujo de ECMO e indica fallo del soporte."
      },
      explanation: {
        pt: "**INCORRETA.** Queda de PAM pode ter múltiplas causas, incluindo disfunção cardíaca nativa, vasoplegia ou sedação profunda, sem necessariamente indicar falência do suporte da ECMO.",
        en: "**INCORRECT.** MAP drop may result from native heart failure, vasoplegia, or deep sedation, not necessarily ECMO failure.",
        es: "**INCORRECTA.** La disminución de la PAM puede deberse a falla cardíaca, vasoplejía o sedación, no siempre a fallo del ECMO."
      }
    },
    {
      text: {
        pt: "A elevação do d-dímero pode refletir ativação da coagulação e indicar trombose no circuito da ECMO.",
        en: "D-dimer elevation may reflect coagulation activation and indicate thrombosis in the ECMO circuit.",
        es: "La elevación del dímero-D puede reflejar activación de la coagulación e indicar trombosis en el circuito de ECMO."
      },
      explanation: {
        pt: "D-dímero isoladamente não confirma trombose, mas sua elevação com disfunção técnica é altamente sugestiva.",
        en: "D-dimer alone is not diagnostic, but elevation with circuit dysfunction strongly suggests thrombosis.",
        es: "El dímero-D no es diagnóstico por sí solo, pero su elevación con disfunción técnica sugiere trombosis."
      }
    },
    {
      text: {
        pt: "A monitorização de parâmetros do circuito e sinais clínicos deve ser contínua e integrada à avaliação global do paciente.",
        en: "Circuit parameters and clinical signs must be continuously monitored and integrated into overall patient assessment.",
        es: "Los parámetros del circuito y signos clínicos deben monitorearse continuamente e integrarse a la evaluación global del paciente."
      },
      explanation: {
        pt: "Avaliação isolada pode levar a condutas precipitadas; é necessário interpretar o conjunto de achados.",
        en: "Isolated data may be misleading; findings must be interpreted in clinical context.",
        es: "Los datos aislados pueden ser engañosos; deben interpretarse en contexto clínico."
      }
    }
  ]
},
{
  id: 418,
  code: "cardio04-q418",
  areas: ["cardio+icu", "cardio", "icu", "medicine"],
  topic: ["aortic dissection", "shock", "neurological complications", "emergency surgery", "diagnostic approach"],
  level: "very_hard",
  correct: 4,
  question: {
    pt: "Homem de 60 anos, hipertenso, é admitido com dor torácica súbita e intensa, PA 70x48 mmHg, FC 112 bpm e rebaixamento do nível de consciência. O exame físico revela sopro diastólico em foco aórtico e assimetria de pulsos. ECG sem supra de ST. TC com contraste mostra dissecção de aorta ascendente (tipo A) com extensão até a artéria carótida comum direita. Qual das afirmativas abaixo está INCORRETA?",
    en: "A 60-year-old hypertensive man presents with sudden severe chest pain, BP 70/48 mmHg, HR 112 bpm, and decreased consciousness. Physical exam reveals a diastolic murmur in the aortic focus and pulse asymmetry. ECG shows no ST elevation. Contrast CT reveals ascending aortic dissection (type A) extending to the right common carotid artery. Which of the following statements is INCORRECT?",
    es: "Hombre de 60 años, hipertenso, se presenta con dolor torácico súbito e intenso, PA 70/48 mmHg, FC 112 lpm y alteración del nivel de conciencia. Al examen, soplo diastólico en foco aórtico y asimetría de pulsos. ECG sin supra de ST. La TC con contraste muestra disección de aorta ascendente (tipo A) con extensión a carótida común derecha. ¿Cuál de las siguientes afirmaciones es INCORRECTA?"
  },
  options: [
    {
      text: {
        pt: "A dissecção tipo A é uma emergência cirúrgica, mesmo na presença de rebaixamento neurológico.",
        en: "Type A dissection is a surgical emergency, even in the presence of neurological impairment.",
        es: "La disección tipo A es una emergencia quirúrgica, incluso con deterioro neurológico."
      },
      explanation: {
        pt: "A cirurgia precoce pode evitar progressão do AVC e morte por ruptura. Rebaixamento não contraindica cirurgia.",
        en: "Early surgery may prevent stroke progression and death from rupture. Neurological symptoms are not a contraindication.",
        es: "La cirugía temprana puede prevenir progresión del ACV y muerte por ruptura. El déficit neurológico no la contraindica."
      }
    },
    {
      text: {
        pt: "A presença de sopro diastólico sugere insuficiência aórtica aguda secundária à dissecção.",
        en: "A diastolic murmur suggests acute aortic regurgitation due to dissection.",
        es: "Un soplo diastólico sugiere insuficiencia aórtica aguda secundaria a disección."
      },
      explanation: {
        pt: "A insuficiência aórtica ocorre por prolapso da valva ou extensão da dissecção ao anel valvar.",
        en: "AR occurs from valve prolapse or dissection extension to the annulus.",
        es: "La IA ocurre por prolapso valvular o extensión de la disección al anillo."
      }
    },
    {
      text: {
        pt: "O choque pode ser causado por tamponamento cardíaco ou disfunção valvar associada.",
        en: "Shock may result from cardiac tamponade or associated valvular dysfunction.",
        es: "El shock puede deberse a taponamiento cardíaco o disfunción valvular asociada."
      },
      explanation: {
        pt: "A dissecção pode romper no pericárdio ou causar regurgitação grave, levando a colapso circulatório.",
        en: "Dissection may rupture into pericardium or cause severe AR, leading to circulatory collapse.",
        es: "La disección puede romperse al pericardio o causar IA grave, generando colapso."
      }
    },
    {
      text: {
        pt: "A extensão para carótida pode justificar o déficit neurológico inicial e não contraindica cirurgia.",
        en: "Extension to carotid may explain initial neurological deficit and does not contraindicate surgery.",
        es: "La extensión a carótida puede justificar el déficit neurológico inicial y no contraindica cirugía."
      },
      explanation: {
        pt: "A hipoperfusão cerebral pode ser transitória e reversível após correção hemodinâmica e da dissecção.",
        en: "Cerebral hypoperfusion may be transient and reversible after hemodynamic and surgical correction.",
        es: "La hipoperfusión cerebral puede revertirse tras corrección hemodinámica y quirúrgica."
      }
    },
    {
      text: {
        pt: "O tratamento inicial inclui anticoagulação plena para prevenir trombose carotídea.",
        en: "Initial treatment includes full anticoagulation to prevent carotid thrombosis.",
        es: "El tratamiento inicial incluye anticoagulación completa para prevenir trombosis carotídea."
      },
      explanation: {
        pt: "**INCORRETA.** Anticoagulação está contraindicada na dissecção tipo A, pois pode precipitar tamponamento ou sangramento fatal.",
        en: "**INCORRECT.** Anticoagulation is contraindicated in type A dissection as it may trigger tamponade or fatal bleeding.",
        es: "**INCORRECTA.** La anticoagulación está contraindicada en disección tipo A por riesgo de taponamiento o sangrado letal."
      }
    }
  ]
},
{
  "id": 419,
  "code": "cardio04-q419",
  "area": ["cardio+icu", "cardio", "icu", "medicine"],
  "topic": [
    "postoperative care",
    "cardiac surgery",
    "obstructive shock",
    "tamponade",
    "diagnostic reasoning"
  ],
  "level": "very_hard",
  "correct": 2,
  "question": {
    "pt": "Paciente de 64 anos, submetido a cirurgia de revascularização miocárdica há 12 horas, apresenta hipotensão progressiva (PA 82x48 mmHg), taquicardia, sangramento difuso por drenos (oozing) e hipocalcemia. Está em ventilação mecânica, em noradrenalina 0,15 mcg/kg/min e sem evidência de sangramento maciço ou nova isquemia. Diurese 0,2 mL/kg/h. Qual das condutas abaixo é INCORRETA para o cenário clínico?",
    "en": "A 64-year-old patient, 12 hours post-coronary artery bypass grafting, presents with progressive hypotension (BP 82/48 mmHg), tachycardia, diffuse drain bleeding (oozing), and hypocalcemia. He is on mechanical ventilation, norepinephrine 0.15 mcg/kg/min, with no signs of massive bleeding or new ischemia. Urine output is 0.2 mL/kg/h. Which of the following actions is INCORRECT for this clinical scenario?",
    "es": "Paciente de 64 años, 12 horas tras cirugía de revascularización coronaria, presenta hipotensión progresiva (PA 82/48 mmHg), taquicardia, sangrado difuso por drenajes (oozing) e hipocalcemia. Está en ventilación mecánica y noradrenalina 0,15 mcg/kg/min, sin signos de sangrado masivo ni nueva isquemia. Diuresis: 0,2 mL/kg/h. ¿Cuál de las siguientes conductas es INCORRECTA para este escenario clínico?"
  },
  "options": [
    {
      "text": {
        "pt": "A presença de oozing e hipocalcemia pode refletir distúrbios da coagulação e consumo, mas não explica isoladamente o choque.",
        "en": "Oozing and hypocalcemia may reflect coagulopathy and consumption, but do not alone explain the shock.",
        "es": "El oozing y la hipocalcemia pueden reflejar coagulopatía y consumo, pero no explican por sí solos el shock."
      },
      "explanation": {
        "pt": "Oozing é comum no pós-operatório, mas a hemodinâmica deve ser avaliada quanto a causas estruturais de choque.",
        "en": "Oozing is common post-op, but hemodynamics must be assessed for structural causes of shock.",
        "es": "El oozing es común postoperatorio, pero se debe evaluar la hemodinámica por causas estructurales."
      }
    },
    {
      "text": {
        "pt": "A realização de ecocardiograma à beira-leito é essencial para excluir tamponamento cardíaco ou hematoma compressivo.",
        "en": "Bedside echocardiography is essential to exclude cardiac tamponade or compressive hematoma.",
        "es": "El ecocardiograma a pie de cama es esencial para descartar taponamiento o hematoma compresivo."
      },
      "explanation": {
        "pt": "Tamponamento pós-operatório pode ocorrer mesmo com drenos funcionantes e sem sangramento abundante.",
        "en": "Post-op tamponade may occur even with patent drains and no gross bleeding.",
        "es": "El taponamiento postoperatorio puede presentarse incluso con drenajes funcionales y sin sangrado abundante."
      }
    },
    {
      "text": {
        "pt": "O quadro é compatível com choque obstrutivo e deve-se investigar compressão cardíaca subaguda.",
        "en": "The picture is compatible with obstructive shock, and subacute cardiac compression should be investigated.",
        "es": "El cuadro es compatible con shock obstructivo y debe investigarse compresión cardíaca subaguda."
      },
      "explanation": {
        "pt": "Hematomas loculados ou tamponamento com sangramento difuso podem causar compressão progressiva e choque.",
        "en": "Loculated hematomas or tamponade with diffuse oozing can cause progressive compression and shock.",
        "es": "Los hematomas loculados o el taponamiento con oozing difuso pueden causar compresión progresiva y shock."
      }
    },
    {
      "text": {
        "pt": "A reposição agressiva de cálcio deve ser priorizada antes da avaliação estrutural com imagem.",
        "en": "Aggressive calcium replacement should be prioritized before structural imaging assessment.",
        "es": "La reposición agresiva de calcio debe priorizarse antes de la evaluación estructural con imagen."
      },
      "explanation": {
        "pt": "**INCORRETA.** A hipocalcemia deve ser corrigida, mas não é causa primária de choque refratário pós-operatório. Avaliação estrutural com eco é mais urgente.",
        "en": "**INCORRECT.** Hypocalcemia should be corrected, but it is not the primary cause of post-op refractory shock. Structural imaging (echo) is more urgent.",
        "es": "**INCORRECTA.** La hipocalcemia debe corregirse, pero no es la causa principal del shock postoperatorio. La imagen estructural es más urgente."
      }
    },
    {
      "text": {
        "pt": "Mesmo sem sangramento volumoso visível, hematomas mediastinais ou compressivos podem justificar o quadro clínico.",
        "en": "Even without overt bleeding, mediastinal or compressive hematomas may explain the clinical picture.",
        "es": "Aun sin sangrado visible, los hematomas mediastínicos o compresivos pueden explicar el cuadro clínico."
      },
      "explanation": {
        "pt": "Oozing pode coexistir com compressão mecânica; a ausência de sangramento massivo não exclui choque obstrutivo.",
        "en": "Oozing can coexist with mechanical compression; absence of gross bleeding does not exclude obstructive shock.",
        "es": "El oozing puede coexistir con compresión mecánica; la ausencia de sangrado masivo no descarta shock obstructivo."
      }
    }
  ]
},

];

questionBank.addBank(bancoCardioDificilima);
