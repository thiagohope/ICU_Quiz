const bancoCardioDificil = [
{
  id: 301,
  code: "cardio03-q301",
  area: ["cardio+icu", "cardio"],
  topic: ["myocardial infarction", "cardiogenic shock", "mechanical support", "ecmo", "iabp"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Homem de 68 anos é admitido com IAM anterior extenso, evoluindo para choque cardiogênico refratário apesar de reperfusão bem-sucedida. Está em suporte com noradrenalina e dobutamina. Considera-se suporte mecânico circulatório. Sobre o manejo, assinale a **afirmativa incorrect**:",
    en: "A 68-year-old man is admitted with a large anterior MI and progresses to refractory cardiogenic shock despite successful reperfusion. He is on norepinephrine and dobutamine. Mechanical circulatory support is being considered. Regarding management, select the **incorrect** statement:",
    es: "Un hombre de 68 años es ingresado por infarto anterior extenso y evoluciona con shock cardiogénico refractario pese a reperfusión exitosa. Está en soporte con noradrenalina y dobutamina. Se considera soporte circulatorio mecánico. Sobre el manejo, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "O balão intraaórtico (IABP) pode melhorar a perfusão coronariana e reduzir a pós-carga em casos selecionados.",
        en: "Intra-aortic balloon pump (IABP) may improve coronary perfusion and reduce afterload in selected cases.",
        es: "El balón intraaórtico (IABP) puede mejorar la perfusión coronaria y reducir la poscarga en casos seleccionados."
      },
      explanation: {
        pt: "Embora seu uso rotineiro seja questionado após o estudo IABP-SHOCK II, ainda pode ser útil em casos específicos.",
        en: "Despite controversial routine use after IABP-SHOCK II, it may still benefit selected patients.",
        es: "Aunque su uso rutinario es controvertido tras IABP-SHOCK II, puede ser útil en ciertos pacientes."
      }
    },
    {
      text: {
        pt: "A ECMO-VA deve ser evitada na presença de disfunção biventricular e hipoperfusão sistêmica grave.",
        en: "VA-ECMO should be avoided in cases of biventricular dysfunction and severe systemic hypoperfusion.",
        es: "La ECMO-VA debe evitarse en disfunción biventricular y perfusión sistémica grave."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. ECMO-VA é frequentemente indicada justamente nesses cenários extremos.",
        en: "This is the incorrect statement. VA-ECMO is often indicated precisely in such critical cases.",
        es: "Esta es la afirmación incorrecta. La ECMO-VA suele indicarse en estos contexts extremos."
      }
    },
    {
      text: {
        pt: "O uso precoce de suporte mecânico pode melhorar prognóstico em pacientes selecionados com choque refratário.",
        en: "Early mechanical support may improve prognosis in selected patients with refractory shock.",
        es: "El uso precoz de soporte mecánico puede mejorar el pronóstico en pacientes con shock refractario."
      },
      explanation: {
        pt: "Intervenção precoce pode prevenir falência multiorgânica irreversível.",
        en: "Early intervention may prevent irreversible multiorgan failure.",
        es: "La intervención precoz puede evitar falla multiorgánica irreversible."
      }
    },
    {
      text: {
        pt: "Avaliação ecocardiográfica contínua é essencial para orientar o tipo e momento do suporte.",
        en: "Ongoing echocardiographic assessment is essential to guide support type and timing.",
        es: "La evaluación ecocardiográfica continua es clave para guiar el tipo y momento del soporte."
      },
      explanation: {
        pt: "Eco à beira-leito ajuda a avaliar função biventricular, enchimento e resposta ao suporte.",
        en: "Bedside echo helps assess biventricular function, filling, and support response.",
        es: "El eco a pie de cama permite valorar función biventricular, llenado y respuesta al soporte."
      }
    },
    {
      text: {
        pt: "Marcadores como lactato e SVO₂ são úteis para monitorar a eficácia da reperfusão e suporte.",
        en: "Markers such as lactate and SVO₂ help monitor reperfusion and support efficacy.",
        es: "Marcadores como lactato y SVO₂ ayudan a monitorear la eficacia de la reperfusión y el soporte."
      },
      explanation: {
        pt: "São parâmetros dinâmicos que refletem perfusão tecidual e podem orientar ajustes.",
        en: "They reflect tissue perfusion and can guide support adjustments.",
        es: "Reflejan la perfusión tisular y guían ajustes en el soporte."
      }
    }
  ]
},
{
  id: 302,
  code: "cardio03-q302",
  area: ["cardio+icu", "cardio"],
  topic: ["ecmo", "impella", "cardiogenic shock", "mechanical support", "lv unloading"],
  level: "hard",
  correct: 4,
  question: {
    pt: "Paciente de 59 anos com infarto extenso e fração de ejeção de 20% evolui com choque cardiogênico refratário. Está em dobutamina e noradrenalina. Considera-se ECMO-VA ou Impella. Sobre as opções de suporte mecânico, assinale a **afirmativa incorrect**:",
    en: "A 59-year-old patient with extensive MI and LVEF of 20% develops refractory cardiogenic shock. On dobutamine and norepinephrine. ECMO-VA or Impella is being considered. Regarding mechanical support, select the **incorrect** statement:",
    es: "Un paciente de 59 años con infarto extenso y FEVI de 20% presenta shock cardiogénico refractario. En dobutamina y noradrenalina. Se considera ECMO-VA o Impella. Sobre el soporte mecánico, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A ECMO-VA oferece suporte circulatório e respiratório simultâneo.",
        en: "VA-ECMO provides both circulatory and respiratory support.",
        es: "La ECMO-VA proporciona soporte circulatorio y respiratorio simultáneamente."
      },
      explanation: {
        pt: "A oxigenação extracorpórea venoarterial substitui a função pulmonar e cardíaca temporariamente.",
        en: "VA-ECMO temporarily replaces both cardiac and pulmonary function.",
        es: "La ECMO-VA sustituye temporalmente las funciones cardíaca y pulmonar."
      }
    },
    {
      text: {
        pt: "O Impella reduz a pós-carga e descomprime o ventrículo esquerdo, promovendo recuperação miocárdica.",
        en: "Impella reduces afterload and unloads the left ventricle, supporting myocardial recovery.",
        es: "El Impella reduce la poscarga y descomprime el ventrículo izquierdo, favoreciendo la recuperación."
      },
      explanation: {
        pt: "É uma bomba axial que aspira sangue do VE para a aorta, aliviando a pressão intracavitária.",
        en: "It is an axial pump that moves blood from LV to aorta, relieving intracavitary pressure.",
        es: "Es una bomba axial que mueve sangre del VI a la aorta, reduciendo la presión intracavitaria."
      }
    },
    {
      text: {
        pt: "A combinação ECMO-VA + Impella pode ser usada em casos com aumento da pós-carga e falência ventricular esquerda persistente.",
        en: "ECMO-VA + Impella combination may be used in cases with increased afterload and persistent LV failure.",
        es: "La combinación ECMO-VA + Impella puede utilizarse en casos de poscarga aumentada y falla del VI persistente."
      },
      explanation: {
        pt: "A associação visa minimizar os efeitos adversos da ECMO sobre a pressão no VE.",
        en: "The combo aims to reduce ECMO-induced LV overload.",
        es: "Busca reducir la sobrecarga del VI inducida por la ECMO."
      }
    },
    {
      text: {
        pt: "Impella é preferido quando há insuficiência respiratória grave associada ao choque.",
        en: "Impella is preferred when severe respiratory failure accompanies shock.",
        es: "El Impella es preferido cuando hay insuficiencia respiratoria severa junto al shock."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Nesses casos, ECMO-VA é a melhor opção por fornecer suporte pulmonar.",
        en: "This is the incorrect statement. In such cases, VA-ECMO is preferred for pulmonary support.",
        es: "Esta es la afirmación incorrecta. En estos casos, se prefiere ECMO-VA por su soporte pulmonar."
      }
    },
    {
      text: {
        pt: "A escolha entre ECMO e Impella depende da fisiopatologia predominante, suporte respiratório necessário e experiência institucional.",
        en: "The choice between ECMO and Impella depends on predominant physiology, respiratory needs, and institutional expertise.",
        es: "La elección entre ECMO e Impella depende de la fisiopatología predominante, soporte respiratorio y experiencia del centro."
      },
      explanation: {
        pt: "Não há algoritmo único; decisão é individualizada e baseada em critérios clínicos e estruturais.",
        en: "No single algorithm exists; decision is tailored to clinical and structural criteria.",
        es: "No hay algoritmo único; la decisión debe individualizarse según criterios clínicos y estructurales."
      }
    }
  ]
},
{
  id: 303,
  code: "cardio03-q303",
  area: ["cardio+icu", "cardio"],
  topic: ["aortic dissection", "type a", "hypertension", "emergency surgery", "imaging"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Homem de 64 anos, hipertenso, é admitido com dor torácica transfixante e síncope. Está taquicárdico, PA 90x55 mmHg. ECG sem alterações isquêmicas. AngioTC revela dissecção aórtica tipo A com tamponamento cardíaco. Assinale a **afirmativa incorrect** sobre o manejo inicial:",
    en: "A 64-year-old hypertensive man presents with tearing chest pain and syncope. He is tachycardic, BP 90x55 mmHg. ECG shows no ischemic changes. CT angiography reveals type A aortic dissection with cardiac tamponade. Select the **incorrect** statement regarding initial management:",
    es: "Un hombre de 64 años, hipertenso, ingresa con dolor torácico desgarrador y síncope. Está taquicárdico, PA 90x55 mmHg. El ECG no muestra cambios isquémicos. La angioTC revela disección aórtica tipo A con taponamiento cardíaco. Señale la afirmación **incorrecta** sobre el manejo inicial:"
  },
  options: [
    {
      text: {
        pt: "Dissecções tipo A com tamponamento cardíaco requerem intervenção cirúrgica emergente.",
        en: "Type A dissections with cardiac tamponade require emergent surgical intervention.",
        es: "Las disecciones tipo A con taponamiento requieren intervención quirúrgica urgente."
      },
      explanation: {
        pt: "A cirurgia imediata é a única chance de sobrevida nesses casos.",
        en: "Immediate surgery is the only chance for survival in such cases.",
        es: "La cirugía inmediata es la única opción de supervivencia en estos casos."
      }
    },
    {
      text: {
        pt: "A drenagem pericárdica deve ser realizada antes da cirurgia para estabilizar o paciente.",
        en: "Pericardial drainage should be done prior to surgery to stabilize the patient.",
        es: "El drenaje pericárdico debe realizarse antes de la cirugía para estabilizar al paciente."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. A drenagem pericárdica em dissecção pode agravar o quadro e precipitar colapso.",
        en: "This is the incorrect statement. Pericardial drainage may worsen the condition and precipitate collapse.",
        es: "Esta es la afirmación incorrecta. El drenaje puede empeorar el cuadro y precipitar el colapso."
      }
    },
    {
      text: {
        pt: "O controle da pressão arterial deve ser feito com beta-bloqueadores intravenosos se possível.",
        en: "Blood pressure control should ideally be with IV beta-blockers.",
        es: "El control de la presión debe hacerse preferiblemente con betabloqueantes intravenosos."
      },
      explanation: {
        pt: "Reduzem a força de ejeção ventricular e o estresse parietal, diminuindo risco de progressão.",
        en: "They reduce ventricular force and wall stress, lowering the risk of progression.",
        es: "Reducen la fuerza ventricular y el estrés parietal, disminuyendo el riesgo de progresión."
      }
    },
    {
      text: {
        pt: "O diagnóstico precoce com angioTC é fundamental para direcionar a conduta cirúrgica.",
        en: "Early diagnosis with CT angiography is crucial for surgical planning.",
        es: "El diagnóstico temprano con angioTC es clave para la planificación quirúrgica."
      },
      explanation: {
        pt: "Permite confirmar o tipo de dissecção, presença de complicações e extensão anatômica.",
        en: "Allows confirmation of type, complications, and anatomical extent.",
        es: "Permite confirmar el tipo, complicaciones y extensión anatómica."
      }
    },
    {
      text: {
        pt: "A hipotensão nesse context pode indicar ruptura iminente e exige ação rápida.",
        en: "Hypotension in this context may signal imminent rupture and demands urgent action.",
        es: "La hipotensión en este context puede indicar ruptura inminente y requiere acción urgente."
      },
      explanation: {
        pt: "Queda pressórica com tamponamento sugere instabilidade hemodinâmica crítica.",
        en: "Hypotension with tamponade indicates critical hemodynamic instability.",
        es: "La hipotensión con taponamiento indica inestabilidad hemodinámica crítica."
      }
    }
  ]
},
{
  id: 304,
  code: "cardio03-q304",
  area: ["cardio+icu", "cardio"],
  topic: ["hypertensive emergency", "pulmonary edema", "acute heart failure", "iv antihypertensives", "organ damage"],
  level: "hard",
  correct: 3,
  question: {
    pt: "Mulher de 72 anos com histórico de hipertensão mal controlada apresenta dispneia súbita, estertores difusos e PA 240x130 mmHg. SatO₂ 88% em ar ambiente. Radiografia mostra congestão pulmonar e ECG sem isquemia aguda. Sobre a abordagem da crise hipertensiva com edema agudo de pulmão, assinale a **afirmativa incorrect**:",
    en: "A 72-year-old woman with poorly controlled hypertension presents with sudden dyspnea, diffuse crackles, and BP 240x130 mmHg. SpO₂ is 88% on room air. Chest X-ray shows pulmonary congestion, ECG shows no acute ischemia. Regarding management of hypertensive crisis with pulmonary edema, select the **incorrect** statement:",
    es: "Una mujer de 72 años con hipertensión mal controlada presenta disnea súbita, crepitantes difusos y PA de 240x130 mmHg. SatO₂ 88% en aire ambiente. La radiografía muestra congestión pulmonar y el ECG sin isquemia aguda. Sobre el manejo de la crisis hipertensiva con edema agudo de pulmón, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "O uso de vasodilatadores intravenosos de ação rápida está indicado para reduzir a pós-carga.",
        en: "Rapid-acting IV vasodilators are indicated to reduce afterload.",
        es: "Están indicados vasodilatadores IV de acción rápida para reducir la poscarga."
      },
      explanation: {
        pt: "Nitroprussiato ou nitroglicerina são agentes eficazes na redução da pressão e melhora do edema.",
        en: "Nitroprusside or nitroglycerin are effective in lowering pressure and relieving edema.",
        es: "Nitroprusiato o nitroglicerina son eficaces para bajar la presión y aliviar el edema."
      }
    },
    {
      text: {
        pt: "Diuréticos devem ser administrados precocemente para reduzir congestão pulmonar.",
        en: "Diuretics should be given early to reduce pulmonary congestion.",
        es: "Los diuréticos deben administrarse precozmente para reducir la congestión pulmonar."
      },
      explanation: {
        pt: "Furosemida IV é geralmente usada, mesmo com função renal limítrofe.",
        en: "IV furosemide is commonly used even in borderline renal function.",
        es: "Se usa furosemida IV incluso con función renal límite."
      }
    },
    {
      text: {
        pt: "A redução pressórica deve ser agressiva, visando PA normal em menos de 1 hora.",
        en: "BP reduction should be aggressive, aiming for normal BP within 1 hour.",
        es: "La reducción de la presión debe ser agresiva, buscando valores normales en menos de una hora."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. A PA deve ser reduzida em 20–25% na primeira hora, evitando hipoperfusão.",
        en: "This is the incorrect statement. BP should be lowered by 20–25% in the first hour to avoid hypoperfusion.",
        es: "Esta es la afirmación incorrecta. La PA debe reducirse un 20–25% en la primera hora para evitar hipoperfusión."
      }
    },
    {
      text: {
        pt: "O uso de CPAP ou ventilação não invasiva pode ser benéfico para aliviar a dispneia e melhorar trocas gasosas.",
        en: "CPAP or noninvasive ventilation can help relieve dyspnea and improve gas exchange.",
        es: "El CPAP o la ventilación no invasiva pueden aliviar la disnea y mejorar el intercambio gaseoso."
      },
      explanation: {
        pt: "Reduz pré-carga, melhora oxigenação e pode evitar intubação.",
        en: "Reduces preload, improves oxygenation, and may avoid intubation.",
        es: "Reduce la precarga, mejora la oxigenación y puede evitar intubación."
      }
    },
    {
      text: {
        pt: "É fundamental descartar causas secundárias como feocromocitoma ou glomerulonefrite rapidamente.",
        en: "It's crucial to promptly rule out secondary causes like pheochromocytoma or glomerulonephritis.",
        es: "Es crucial descartar rápidamente causas secundarias como feocromocitoma o glomerulonefritis."
      },
      explanation: {
        pt: "Causas secundárias exigem conduta específica e devem ser pesquisadas.",
        en: "Secondary causes require specific management and should be investigated.",
        es: "Las causas secundarias requieren manejo específico y deben investigarse."
      }
    }
  ]
},
{
  id: 305,
  code: "cardio03-q305",
  area: ["cardio+icu", "cardio"],
  topic: ["atrial fibrillation", "anticoagulation", "critical care", "bleeding risk", "decision-making"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Paciente de 78 anos, em UTI por sepse pulmonar, evolui com FA de início recente. Tem HAS, diabetes, creatinina 2,4 mg/dL e plaquetas 42.000/mm³. Apresenta sangramento digestivo alto recente, em uso de vasopressores. Sobre anticoagulação nessa situação, assinale a **afirmativa incorrect**:",
    en: "A 78-year-old patient in ICU for pulmonary sepsis develops new-onset atrial fibrillation. Comorbidities: hypertension, diabetes, creatinine 2.4 mg/dL, platelets 42,000/mm³, recent upper GI bleeding, on vasopressors. Regarding anticoagulation, select the **incorrect** statement:",
    es: "Un paciente de 78 años en UCI por sepsis pulmonar presenta FA de inicio reciente. Tiene HTA, diabetes, creatinina 2,4 mg/dL, plaquetas 42.000/mm³, sangrado digestivo alto reciente y uso de vasopresores. Sobre la anticoagulación en este caso, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A anticoagulação plena com heparina deve ser iniciada imediatamente para reduzir risco tromboembólico.",
        en: "Full-dose anticoagulation with heparin should be initiated immediately to reduce thromboembolic risk.",
        es: "Debe iniciarse anticoagulación completa con heparina de forma inmediata para reducir el riesgo tromboembólico."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Risco hemorrágico extremo contraindica anticoagulação plena imediata.",
        en: "This is the incorrect statement. Extreme bleeding risk contraindicates full anticoagulation initially.",
        es: "Esta es la afirmación incorrecta. Riesgo hemorrágico extremo contraindica anticoagulación plena inmediata."
      }
    },
    {
      text: {
        pt: "A plaquetopenia <50.000/mm³ é contraindicação relativa à anticoagulação terapêutica.",
        en: "Platelets <50,000/mm³ are a relative contraindication to therapeutic anticoagulation.",
        es: "Plaquetas <50.000/mm³ son una contraindicación relativa para anticoagulación terapéutica."
      },
      explanation: {
        pt: "O risco de sangramento é elevado com plaquetas muito baixas, especialmente em pacientes críticos.",
        en: "Bleeding risk is high with low platelets, especially in critical patients.",
        es: "El riesgo de sangrado es alto con plaquetas bajas, especialmente en críticos."
      }
    },
    {
      text: {
        pt: "A decisão deve considerar escore CHA₂DS₂-VASc e HAS-BLED, mas também fatores clínicos agudos.",
        en: "Decision should consider CHA₂DS₂-VASc and HAS-BLED scores, plus acute clinical factors.",
        es: "La decisión debe considerar CHA₂DS₂-VASc, HAS-BLED y factores clínicos agudos."
      },
      explanation: {
        pt: "Escalas ajudam, mas julgamento clínico é essencial em situações instáveis.",
        en: "Scores help, but clinical judgment is essential in unstable scenarios.",
        es: "Las escalas ayudan, pero el juicio clínico es clave en situaciones inestables."
      }
    },
    {
      text: {
        pt: "Pode-se optar por não anticoagular no momento, com reavaliação seriada conforme estabilização clínica.",
        en: "Non-anticoagulation may be chosen initially, with serial reassessment as the patient stabilizes.",
        es: "Puede optarse por no anticoagular inicialmente, con reevaluación progresiva al estabilizarse."
      },
      explanation: {
        pt: "Conduta expectante é válida quando o risco de sangramento supera o risco trombótico imediato.",
        en: "Expectant management is valid when bleeding risk exceeds thrombotic risk.",
        es: "Manejo expectante es válido si el riesgo de sangrado supera el trombótico."
      }
    },
    {
      text: {
        pt: "A reversão da FA não é prioridade em paciente instável com alto risco hemorrágico.",
        en: "Restoring sinus rhythm is not a priority in unstable patients with high bleeding risk.",
        es: "Revertir la FA no es prioritario en pacientes inestables con alto riesgo hemorrágico."
      },
      explanation: {
        pt: "Controle da frequência e estabilidade hemodinâmica são prioritários em pacientes críticos.",
        en: "Rate control and hemodynamic stability are top priorities in ICU settings.",
        es: "El control de frecuencia y la estabilidad hemodinámica son prioritarios en la UCI."
      }
    }
  ]
},
{
  id: 306,
  code: "cardio03-q306",
  area: ["cardio+icu", "cardio"],
  topic: ["pocus", "echocardiography", "hemodynamic instability", "icu", "shock"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Homem de 61 anos em UTI por choque circulatório recebe suporte com norepinefrina e está em VM. Apresenta PA 80x50 mmHg, lactato 4,2 mmol/L e diurese 10 mL/h. Ecocardiografia point-of-care (POCUS) é realizada. Sobre o uso do POCUS na avaliação de instabilidade hemodinâmica, assinale a **afirmativa incorrect**:",
    en: "A 61-year-old ICU patient with circulatory shock is on norepinephrine and mechanical ventilation. BP is 80x50 mmHg, lactate 4.2 mmol/L, urine output 10 mL/h. Point-of-care echocardiography (POCUS) is performed. Regarding POCUS use in hemodynamic instability, select the **incorrect** statement:",
    es: "Un paciente de 61 años en UCI con shock circulatorio está con noradrenalina y ventilación mecánica. PA 80x50 mmHg, lactato 4,2 mmol/L, diuresis 10 mL/h. Se realiza ecocardiografía POCUS. Sobre su uso en inestabilidad hemodinámica, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A ecocardiografia POCUS permite diferenciar causas de choque (hipovolêmico, cardiogênico, obstrutivo, distributivo).",
        en: "POCUS allows differentiation of shock types (hypovolemic, cardiogenic, obstructive, distributive).",
        es: "El POCUS permite diferenciar tipos de shock (hipovolémico, cardiogénico, obstructivo, distributivo)."
      },
      explanation: {
        pt: "É uma das principais aplicações clínicas do POCUS em pacientes instáveis.",
        en: "This is one of the key clinical uses of POCUS in unstable patients.",
        es: "Es uno de los principales usos clínicos del POCUS en pacientes inestables."
      }
    },
    {
      text: {
        pt: "A visualização do colapso da veia cava inferior pode sugerir hipovolemia.",
        en: "Collapsed inferior vena cava on POCUS may suggest hypovolemia.",
        es: "La vena cava inferior colapsada en POCUS puede sugerir hipovolemia."
      },
      explanation: {
        pt: "A IVC colapsada sugere baixa pressão de enchimento e volume intravascular reduzido.",
        en: "Collapsed IVC suggests low filling pressure and reduced intravascular volume.",
        es: "La IVC colapsada indica presión de llenado baja y volumen intravascular reducido."
      }
    },
    {
      text: {
        pt: "A disfunção ventricular direita pode ser identificada e sugerir embolia pulmonar maciça.",
        en: "Right ventricular dysfunction may be identified and suggest massive pulmonary embolism.",
        es: "La disfunción del ventrículo derecho puede identificarse y sugerir embolia pulmonar masiva."
      },
      explanation: {
        pt: "Dilatação e hipocinesia do VD são achados sugestivos de embolia pulmonar aguda.",
        en: "RV dilation and hypokinesia are suggestive findings of acute PE.",
        es: "La dilatación y la hipocinesia del VD sugieren TEP aguda."
      }
    },
    {
      text: {
        pt: "A janela subcostal pode ser útil quando janelas torácicas são limitadas por ventilação mecânica.",
        en: "The subcostal window is useful when thoracic views are limited due to mechanical ventilation.",
        es: "La ventana subcostal es útil si las vistas torácicas están limitadas por la ventilación mecánica."
      },
      explanation: {
        pt: "A subcostal é uma das janelas mais acessíveis em pacientes intubados.",
        en: "Subcostal view is among the most accessible in intubated patients.",
        es: "La vista subcostal es una de las más accesibles en pacientes intubados."
      }
    },
    {
      text: {
        pt: "A análise hemodinâmica por POCUS substitui completamente a monitorização invasiva em pacientes críticos.",
        en: "Hemodynamic analysis via POCUS completely replaces invasive monitoring in critical patients.",
        es: "El análisis hemodinámico por POCUS reemplaza por completo la monitorización invasiva en críticos."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. POCUS complementa, mas **não substitui totalmente** métodos invasivos em casos complexos.",
        en: "This is the incorrect statement. POCUS complements but **does not replace** invasive monitoring in complex cases.",
        es: "Esta es la afirmación incorrecta. El POCUS complementa, pero **no reemplaza totalmente** la monitorización invasiva."
      }
    }
  ]
},
{
  id: 307,
  code: "cardio03-q307",
  area: ["cardio+icu", "cardio"],
  topic: ["temporary pacemaker", "weaning test", "postoperative care", "capture", "dependency"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Paciente de 67 anos no 3º dia pós-operatório de cirurgia valvar está em uso de marca-passo provisório transvenoso por BAVT transitório. Está hemodinamicamente estável. A equipe decide realizar teste de desmame do marca-passo provisório. Qual das etapas abaixo está **incorrect**?",
    en: "A 67-year-old patient on postoperative day 3 after valve surgery is on temporary transvenous pacing for transient complete AV block. He is hemodynamically stable. The team decides to perform a weaning test. Which of the following steps is **incorrect**?",
    es: "Un paciente de 67 años en el día 3 postoperatorio de cirugía valvular está con marcapasos transvenoso por bloqueo AV completo transitorio. Está estable. El equipo decide realizar la prueba de desmame. ¿Cuál de los siguientes pasos es **incorrecto**?"
  },
  options: [
    {
      text: {
        pt: "Reduzir gradualmente a frequência do marca-passo para 40 bpm e observar presença de ritmo intrínseco.",
        en: "Gradually reduce the pacemaker rate to 40 bpm and observe for intrinsic rhythm.",
        es: "Reducir progresivamente la frecuencia del marcapasos a 40 lpm y observar ritmo intrínseco."
      },
      explanation: {
        pt: "Essa é a conduta padrão para avaliar se há autonomia elétrica.",
        en: "This is standard practice to evaluate electrical autonomy.",
        es: "Es la práctica estándar para evaluar autonomía eléctrica."
      }
    },
    {
      text: {
        pt: "Realizar o teste com monitorização contínua de ECG, oximetria e desfibrilador à beira-leito.",
        en: "Perform the test under continuous ECG and oximetry monitoring with bedside defibrillator available.",
        es: "Realizar la prueba con monitoreo continuo de ECG y oxímetro, con desfibrilador al lado."
      },
      explanation: {
        pt: "É essencial garantir segurança e rápida intervenção caso ocorra instabilidade.",
        en: "It's crucial to ensure safety and immediate intervention if instability occurs.",
        es: "Es esencial garantizar seguridad e intervención rápida si hay inestabilidad."
      }
    },
    {
      text: {
        pt: "Suspender completamente o marca-passo provisório por 10 minutos sem monitorização, para avaliar autonomia.",
        en: "Fully suspend temporary pacing for 10 minutes without monitoring to assess autonomy.",
        es: "Suspender completamente el marcapasos temporal por 10 minutos sin monitorización para evaluar autonomía."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Suspensão abrupta e sem monitorização pode causar colapso hemodinâmico.",
        en: "This is the incorrect statement. Abrupt withdrawal without monitoring may cause hemodynamic collapse.",
        es: "Esta es la afirmación incorrecta. La suspensión abrupta sin monitoreo puede causar colapso hemodinámico."
      }
    },
    {
      text: {
        pt: "Observar se surgem QRS espontâneos acima da frequência programada, indicando recuperação da condução.",
        en: "Observe for spontaneous QRS complexes above the set pacing rate, indicating conduction recovery.",
        es: "Observar complejos QRS espontáneos por encima de la frecuencia programada indica recuperación de conducción."
      },
      explanation: {
        pt: "Essa é a evidência prática de que o paciente pode não precisar mais do marca-passo.",
        en: "This is practical evidence the patient may no longer need pacing.",
        es: "Es una evidencia práctica de que el paciente podría no requerir más el marcapasos."
      }
    },
    {
      text: {
        pt: "Reprogramar o gerador provisório para a frequência anterior ao final do teste, se necessário.",
        en: "Reset the temporary generator to previous pacing rate at the end of the test if needed.",
        es: "Reprogramar el generador temporal a la frecuencia previa al terminar la prueba si es necesario."
      },
      explanation: {
        pt: "Restaura suporte em caso de falha do ritmo intrínseco ou instabilidade.",
        en: "Restores support in case of intrinsic rhythm failure or instability.",
        es: "Restaura el soporte si falla el ritmo intrínseco o hay inestabilidad."
      }
    }
  ]
},
{
  id: 308,
  code: "cardio03-q308",
  area: ["cardio+icu", "cardio"],
  topic: ["iabp", "mechanical support", "cardiogenic shock", "timing", "contraindications"],
  level: "hard",
  correct: 4,
  question: {
    pt: "Homem de 66 anos com infarto anterior extenso evolui com choque cardiogênico refratário. O uso de balão intra-aórtico (IABP) é considerado como suporte temporário. Sobre o uso do IABP, assinale a **afirmativa incorrect**:",
    en: "A 66-year-old man with extensive anterior MI develops refractory cardiogenic shock. Intra-aortic balloon pump (IABP) is considered as temporary support. Regarding IABP use, select the **incorrect** statement:",
    es: "Un hombre de 66 años con infarto anterior extenso evoluciona con shock cardiogénico refractario. Se considera el uso de balón intraaórtico (IABP) como soporte temporal. Sobre su uso, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "O IABP atua inflando na diástole e esvaziando na sístole, melhorando a perfusão coronariana e reduzindo a pós-carga.",
        en: "IABP inflates in diastole and deflates in systole, enhancing coronary perfusion and reducing afterload.",
        es: "El IABP se infla en diástole y se desinfla en sístole, mejorando la perfusión coronaria y reduciendo la poscarga."
      },
      explanation: {
        pt: "Esse é o mecanismo fisiológico clássico do IABP.",
        en: "This is the classic physiological mechanism of IABP.",
        es: "Este es el mecanismo fisiológico clásico del IABP."
      }
    },
    {
      text: {
        pt: "A sincronia adequada com o ECG ou pressão arterial é essencial para o funcionamento eficaz do IABP.",
        en: "Proper synchronization with ECG or arterial pressure is essential for effective IABP function.",
        es: "La sincronización adecuada con el ECG o presión arterial es esencial para el funcionamiento eficaz del IABP."
      },
      explanation: {
        pt: "Erros de sincronização reduzem ou anulam o benefício hemodinâmico.",
        en: "Synchronization errors diminish or nullify hemodynamic benefit.",
        es: "Los errores de sincronización disminuyen o anulan el beneficio hemodinámico."
      }
    },
    {
      text: {
        pt: "O IABP pode ser utilizado como ponte para decisão, transplante ou suporte mais avançado como ECMO.",
        en: "IABP can be used as a bridge to decision, transplantation, or advanced support like ECMO.",
        es: "El IABP puede usarse como puente para decisiones, trasplante o soporte avanzado como ECMO."
      },
      explanation: {
        pt: "É frequentemente usado como suporte inicial de menor complexidade.",
        en: "Often used as initial, lower-complexity support.",
        es: "Frecuentemente se usa como soporte inicial de menor complejidad."
      }
    },
    {
      text: {
        pt: "O IABP está indicado como suporte primário em choque séptico com disfunção ventricular direita isolada.",
        en: "IABP is indicated as primary support in septic shock with isolated right ventricular dysfunction.",
        es: "El IABP está indicado como soporte primario en shock séptico con disfunción ventricular derecha aislada."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. O IABP **não tem benefício** comprovado em disfunção isolada de VD nem em choque séptico.",
        en: "This is the incorrect statement. IABP **has no proven benefit** in isolated RV failure or septic shock.",
        es: "Esta es la afirmación incorrecta. El IABP **no tiene beneficio probado** en falla del VD aislada ni en shock séptico."
      }
    },
    {
      text: {
        pt: "Contraindicações ao uso do IABP incluem dissecção aórtica e insuficiência aórtica moderate a grave.",
        en: "Contraindications for IABP include aortic dissection and moderate-to-severe aortic insufficiency.",
        es: "Las contraindicaciones del IABP incluyen disección aórtica e insuficiencia aórtica moderate a severa."
      },
      explanation: {
        pt: "Essas condições podem ser agravadas pelo uso do balão intra-aórtico.",
        en: "These conditions may worsen with intra-aortic balloon usage.",
        es: "Estas condiciones pueden empeorar con el uso del balón intraaórtico."
      }
    }
  ]
},
{
  id: 309,
  code: "cardio03-q309",
  area: ["cardio+icu", "cardio"],
  topic: ["ecmo", "cardiogenic shock", "hypoxemia", "inotropes", "mechanical support"],
  level: "hard",
  correct: 3,
  question: {
    pt: "Paciente de 53 anos com infarto extenso e insuficiência cardíaca aguda grave apresenta choque cardiogênico profundo, SatO₂ 84% com FiO₂ 100%, em dobutamina e noradrenalina. Considera-se suporte extracorpóreo (ECMO-VA). Sobre essa decisão, assinale a **afirmativa incorrect**:",
    en: "A 53-year-old patient with extensive MI and severe acute heart failure develops profound cardiogenic shock, SpO₂ 84% on 100% FiO₂, on dobutamine and norepinephrine. VA-ECMO is being considered. Which of the following statements is **incorrect**?",
    es: "Un paciente de 53 años con infarto extenso e insuficiencia cardíaca aguda grave presenta shock cardiogénico profundo, SatO₂ 84% con FiO₂ 100%, en dobutamina y noradrenalina. Se considera ECMO-VA. ¿Cuál de las siguientes afirmaciones es **incorrecta**?"
  },
  options: [
    {
      text: {
        pt: "A ECMO-VA oferece suporte circulatório e respiratório simultaneamente, sendo útil em choque com hipoxemia refratária.",
        en: "VA-ECMO provides simultaneous circulatory and respiratory support, useful in shock with refractory hypoxemia.",
        es: "La ECMO-VA ofrece soporte circulatorio y respiratorio simultáneo, útil en shock con hipoxemia refractaria."
      },
      explanation: {
        pt: "É indicada quando há disfunção biventricular associada à falência respiratória.",
        en: "Indicated in biventricular and respiratory failure.",
        es: "Indicada cuando hay falla biventricular con insuficiencia respiratoria."
      }
    },
    {
      text: {
        pt: "Altas doses de inotrópicos podem piorar consumo miocárdico de oxigênio e precipitar arritmias.",
        en: "High inotrope doses may worsen myocardial oxygen consumption and precipitate arrhythmias.",
        es: "Altas dosis de inotrópicos pueden aumentar el consumo de oxígeno y provocar arritmias."
      },
      explanation: {
        pt: "O uso isolado de inotrópicos tem risco de toxicidade e falência progressiva.",
        en: "Inotropes alone carry risk of toxicity and progressive failure.",
        es: "El uso exclusivo de inotrópicos conlleva riesgo de toxicidad y empeoramiento progresivo."
      }
    },
    {
      text: {
        pt: "A ECMO-VA é contraindicada se a função respiratória estiver preservada e não houver necessidade de suporte circulatório.",
        en: "VA-ECMO is contraindicated if respiratory function is preserved and no circulatory support is needed.",
        es: "La ECMO-VA está contraindicada si la función respiratoria está preservada y no se requiere soporte circulatorio."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. ECMO-VA é indicada justamente quando há **necessidade de suporte** – sua ausência é que contraindica.",
        en: "This is the incorrect statement. VA-ECMO is indicated when support is needed – its absence is a contraindication.",
        es: "Esta es la afirmación incorrecta. La ECMO-VA está indicada cuando **se necesita soporte**, no al revés."
      }
    },
    {
      text: {
        pt: "A instalação precoce de ECMO-VA pode prevenir falência multiorgânica em pacientes com choque profundo e hipoperfusão crítica.",
        en: "Early VA-ECMO initiation may prevent multiorgan failure in patients with profound shock and critical hypoperfusion.",
        es: "La instalación precoz de ECMO-VA puede prevenir fallo multiorgánico en pacientes con shock profundo e hipoperfusión crítica."
      },
      explanation: {
        pt: "Intervenção precoce tem melhor prognóstico que uso tardio em falência orgânica estabelecida.",
        en: "Early intervention has better outcomes than late use in established organ failure.",
        es: "La intervención temprana tiene mejor pronóstico que su uso tardío."
      }
    },
    {
      text: {
        pt: "A escolha entre ECMO-VA, Impella e IABP deve considerar parâmetros hemodinâmicos, trocas gasosas e viabilidade institucional.",
        en: "Choosing between VA-ECMO, Impella, and IABP requires assessing hemodynamics, gas exchange, and institutional capability.",
        es: "La elección entre ECMO-VA, Impella e IABP debe considerar parámetros hemodinámicos, gases y viabilidad institucional."
      },
      explanation: {
        pt: "A decisão é complexa e deve ser individualizada conforme estrutura e perfil do paciente.",
        en: "Decision must be individualized based on structure and patient profile.",
        es: "La decisión debe individualizarse según context y perfil del paciente."
      }
    }
  ]
},
{
  id: 310,
  code: "cardio03-q310",
  area: ["cardio+icu", "cardio"],
  topic: ["myocardial infarction", "cardiogenic shock", "revascularization", "culprit lesion", "multi-vessel disease"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Homem de 71 anos é admitido com IAM com supra de ST em parede anterior e evolui com choque cardiogênico. Coronariografia mostra lesão crítica em DA e lesões significativas em CX e CD. É levado à angioplastia primária com stent em DA. Sobre a estratégia de revascularização em pacientes com doença multiarterial e choque, assinale a **afirmativa incorrect**:",
    en: "A 71-year-old man is admitted with anterior STEMI and develops cardiogenic shock. Coronary angiography reveals critical LAD lesion and significant disease in LCx and RCA. Undergoes primary PCI with stent to LAD. Regarding revascularization strategy in multi-vessel disease and shock, select the **incorrect** statement:",
    es: "Un hombre de 71 años es ingresado por IAM con elevación de ST anterior y evoluciona con shock cardiogénico. La coronariografía muestra lesión crítica en DA y enfermedad significativa en CX y CD. Se realiza angioplastia primaria en DA. Sobre la revascularización en enfermedad multivaso y shock, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A angioplastia da artéria culpada é preferida inicialmente, com possível reavaliação das demais lesões após estabilização.",
        en: "Culprit-lesion PCI is preferred initially, with other lesions reassessed after stabilization.",
        es: "La angioplastia de la arteria culpable es preferida inicialmente, con reevaluación posterior de otras lesiones."
      },
      explanation: {
        pt: "Revascularização restrita inicialmente é a conduta recomendada em choque segundo diretrizes.",
        en: "Limited initial revascularization is guideline-recommended in shock.",
        es: "La revascularización limitada inicial es recomendada por guías en shock."
      }
    },
    {
      text: {
        pt: "A revascularização completa imediata em pacientes com choque está associada a pior desfecho em alguns estudos.",
        en: "Immediate complete revascularization in shock is associated with worse outcomes in some trials.",
        es: "La revascularización completa inmediata en shock se ha asociado a peores desenlaces en algunos estudios."
      },
      explanation: {
        pt: "Estudos como CULPRIT-SHOCK mostraram risco maior com revascularização extensa imediata.",
        en: "CULPRIT-SHOCK trial showed higher risk with immediate full revascularization.",
        es: "CULPRIT-SHOCK demostró mayor riesgo con revascularización completa inmediata."
      }
    },
    {
      text: {
        pt: "A decisão sobre revascularização completa pode ser revista em reavaliação hemodinâmica ou por imagem.",
        en: "Complete revascularization may be reconsidered after hemodynamic or imaging reassessment.",
        es: "La decisión de revascularización completa puede reconsiderarse tras reevaluación hemodinámica o por imagen."
      },
      explanation: {
        pt: "Decisões podem ser baseadas em reserva fracionada de fluxo ou dados clínicos subsequentes.",
        en: "Decisions may be based on FFR or subsequent clinical/imaging data.",
        es: "Puede decidirse según FFR o datos clínicos e imagen posteriores."
      }
    },
    {
      text: {
        pt: "A revascularização da artéria culpada deve ser adiada até estabilização hemodinâmica completa.",
        en: "Culprit-vessel PCI should be postponed until full hemodynamic stabilization.",
        es: "La angioplastia de la arteria culpable debe posponerse hasta la estabilización hemodinámica completa."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. A revascularização **imediata da culpada** é prioritária e pode salvar vidas.",
        en: "This is the incorrect statement. **Immediate culprit-vessel PCI** is life-saving and prioritized.",
        es: "Esta es la afirmación incorrecta. La **angioplastia inmediata de la culpable** es prioritaria y salva vidas."
      }
    },
    {
      text: {
        pt: "A presença de doença multiarterial não contraindica angioplastia primária urgente da lesão culpada.",
        en: "Multi-vessel disease does not contraindicate urgent primary PCI of the culprit lesion.",
        es: "La enfermedad multivaso no contraindica la angioplastia primaria urgente de la lesión culpable."
      },
      explanation: {
        pt: "Mesmo em doença extensa, a abordagem inicial deve focar na culpada.",
        en: "Even with extensive disease, initial focus is on the culprit.",
        es: "Incluso con enfermedad extensa, el enfoque inicial es la culpable."
      }
    }
  ]
},
{
  id: 311,
  code: "cardio03-q311",
  area: ["cardio+icu", "cardio"],
  topic: ["massive pulmonary embolism", "thrombectomy", "shock", "contraindications to thrombolysis", "ecmo"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Paciente de 63 anos, previamente hígido, é admitido em UTI com dispneia súbita, síncope e choque. SatO₂ 84%, PA 75x50 mmHg, lactato 5,2 mmol/L. AngioTC mostra tromboembolismo pulmonar bilateral com dilatação de VD. Considera-se trombectomia. Sobre essa decisão terapêutica, assinale a **afirmativa incorrect**:",
    en: "A 63-year-old previously healthy patient is admitted to the ICU with sudden dyspnea, syncope, and shock. SpO₂ 84%, BP 75x50 mmHg, lactate 5.2 mmol/L. CT angiography reveals bilateral pulmonary embolism with RV dilation. Thrombectomy is considered. Which of the following statements is **incorrect**?",
    es: "Un paciente de 63 años previamente sano es ingresado en UCI con disnea súbita, síncope y shock. SatO₂ 84%, PA 75x50 mmHg, lactato 5.2 mmol/L. AngioTC revela tromboembolismo pulmonar bilateral con dilatación del VD. Se considera trombectomía. ¿Cuál de las siguientes afirmaciones es **incorrecta**?"
  },
  options: [
    {
      text: {
        pt: "O TEP maciço com instabilidade hemodinâmica é uma das principais indicações para trombólise ou trombectomia.",
        en: "Massive PE with hemodynamic instability is a main indication for thrombolysis or thrombectomy.",
        es: "El TEP masivo con inestabilidad hemodinámica es una de las principales indicaciones para trombólisis o trombectomía."
      },
      explanation: {
        pt: "A instabilidade hemodinâmica define o TEP como maciço, e exige reperfusão imediata.",
        en: "Hemodynamic instability defines massive PE, requiring urgent reperfusion.",
        es: "La inestabilidad hemodinámica define el TEP masivo y requiere reperfusión urgente."
      }
    },
    {
      text: {
        pt: "A presença de choque contraindica qualquer terapia de reperfusão mecânica por risco de instabilidade adicional.",
        en: "Shock is a contraindication to mechanical reperfusion therapy due to risk of further instability.",
        es: "El shock contraindica cualquier terapia de reperfusión mecánica por riesgo de mayor inestabilidad."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. O choque **é a principal indicação** de trombólise ou trombectomia.",
        en: "This is the incorrect statement. Shock **is a key indication** for thrombolysis or thrombectomy.",
        es: "Esta es la afirmación incorrecta. El shock **es una indicación clave** para trombólisis o trombectomía."
      }
    },
    {
      text: {
        pt: "A trombectomia está indicada quando há contraindicação absoluta à trombólise e o paciente permanece instável.",
        en: "Thrombectomy is indicated when thrombolysis is absolutely contraindicated and the patient remains unstable.",
        es: "La trombectomía está indicada cuando la trombólisis está absolutamente contraindicada y el paciente sigue inestable."
      },
      explanation: {
        pt: "Exemplo clássico: sangramento ativo ou pós-operatório recente impede trombólise.",
        en: "Typical example: active bleeding or recent surgery prevents thrombolysis.",
        es: "Ejemplo clásico: sangrado activo o cirugía reciente impide trombólisis."
      }
    },
    {
      text: {
        pt: "A ECMO pode ser utilizada como suporte temporário à reperfusão em pacientes em colapso circulatório por TEP.",
        en: "ECMO may be used as bridge support for reperfusion in patients with circulatory collapse due to PE.",
        es: "La ECMO puede usarse como puente a la reperfusión en pacientes con colapso circulatorio por TEP."
      },
      explanation: {
        pt: "Pode estabilizar o paciente para permitir trombólise ou trombectomia planejada.",
        en: "Can stabilize the patient to allow planned reperfusion therapy.",
        es: "Puede estabilizar al paciente para permitir reperfusión programada."
      }
    },
    {
      text: {
        pt: "A escolha entre trombólise, trombectomia cirúrgica ou percutânea depende de disponibilidade local e perfil de risco.",
        en: "Choice between thrombolysis, surgical or catheter thrombectomy depends on local resources and risk profile.",
        es: "La elección entre trombólisis, trombectomía quirúrgica o percutánea depende de recursos y perfil del paciente."
      },
      explanation: {
        pt: "A individualização da conduta é essencial, conforme tempo, contraindicações e expertise.",
        en: "Management must be individualized based on timing, contraindications, and expertise.",
        es: "La conducta debe individualizarse según tiempo, contraindicaciones y experiencia local."
      }
    }
  ]
},
{
  id: 312,
  code: "cardio03-q312",
  area: ["cardio+icu", "cardio"],
  topic: ["hemodynamic monitoring", "picco", "shock", "fluid responsiveness", "transpulmonary thermodilution"],
  level: "hard",
  correct: 3,
  question: {
    pt: "Paciente de 68 anos com choque circulatório refratário é submetido à monitorização hemodinâmica com PiCCO. Apresenta pressão arterial média de 58 mmHg, índice cardíaco 2,0 L/min/m², SVRI aumentado e EVLW elevado. Sobre a utilização do PiCCO, assinale a **afirmativa incorrect**:",
    en: "A 68-year-old patient with refractory circulatory shock undergoes hemodynamic monitoring with PiCCO. MAP is 58 mmHg, cardiac index 2.0 L/min/m², SVRI is elevated, and EVLW is high. Regarding PiCCO use, select the **incorrect** statement:",
    es: "Un paciente de 68 años con shock circulatorio refractario es monitorizado hemodinámicamente con PiCCO. PAM 58 mmHg, índice cardíaco 2.0 L/min/m², SVRI elevado y EVLW alto. Sobre el uso del PiCCO, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "O PiCCO permite estimar o volume sistólico e o índice cardíaco por análise do contorno de pulso calibrada por termodiluição transpulmonar.",
        en: "PiCCO estimates stroke volume and cardiac index via pulse contour analysis calibrated by transpulmonary thermodilution.",
        es: "El PiCCO estima el volumen sistólico e índice cardíaco mediante análisis de contorno de pulso calibrado por termodilución transpulmonar."
      },
      explanation: {
        pt: "Essa é a base do método PiCCO, combinando precisão com monitorização contínua.",
        en: "This is the core of PiCCO, combining accuracy with continuous monitoring.",
        es: "Es el fundamento del PiCCO, combinando precisión y monitoreo continuo."
      }
    },
    {
      text: {
        pt: "A quantificação do EVLW (extravasamento pulmonar) pode ajudar a diferenciar edema cardiogênico de lesão de permeabilidade pulmonar.",
        en: "EVLW quantification helps differentiate cardiogenic edema from pulmonary permeability injury.",
        es: "La cuantificación de EVLW ayuda a diferenciar edema cardiogénico de lesión de permeabilidad pulmonar."
      },
      explanation: {
        pt: "O EVLW elevado com ITBV normal pode indicar lesão pulmonar tipo SDRA.",
        en: "High EVLW with normal ITBV suggests ARDS-like lung injury.",
        es: "EVLW elevado con ITBV normal sugiere lesión pulmonar tipo SDRA."
      }
    },
    {
      text: {
        pt: "O PiCCO não permite estimar pré-carga ou volume intratorácico, sendo útil apenas para débito cardíaco.",
        en: "PiCCO does not estimate preload or intrathoracic volume; it is useful only for cardiac output.",
        es: "El PiCCO no estima precarga ni volumen intratorácico, sólo sirve para el gasto cardíaco."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. O PiCCO fornece estimativas de **pré-carga (ITBV)**, além do débito cardíaco.",
        en: "This is the incorrect statement. PiCCO does estimate **preload (ITBV)** along with cardiac output.",
        es: "Esta es la afirmación incorrecta. El PiCCO sí estima la **precarga (ITBV)** además del gasto cardíaco."
      }
    },
    {
      text: {
        pt: "A análise dinâmica de variações da pressão de pulso (PPV) e variação de volume sistólico (SVV) pelo PiCCO pode predizer responsividade volêmica em pacientes ventilados.",
        en: "Dynamic analysis of pulse pressure variation (PPV) and stroke volume variation (SVV) via PiCCO can predict fluid responsiveness in ventilated patients.",
        es: "El análisis dinámico de PPV y SVV por PiCCO puede predecir respuesta a volumen en pacientes ventilados."
      },
      explanation: {
        pt: "SVV e PPV são úteis especialmente com ritmo sinusal e VM controlada.",
        en: "SVV and PPV are useful particularly with sinus rhythm and controlled ventilation.",
        es: "SVV y PPV son útiles especialmente con ritmo sinusal y VM controlada."
      }
    },
    {
      text: {
        pt: "A monitorização com PiCCO pode orientar tanto a ressuscitação volêmica quanto o uso de vasopressores e inotrópicos.",
        en: "PiCCO monitoring can guide both fluid resuscitation and the use of vasopressors and inotropes.",
        es: "El monitoreo con PiCCO puede guiar tanto la reanimación con fluidos como el uso de vasopresores e inotrópicos."
      },
      explanation: {
        pt: "Permite avaliação mais precisa da hemodinâmica em tempo real.",
        en: "Allows more precise real-time hemodynamic assessment.",
        es: "Permite una evaluación hemodinámica más precisa en tiempo real."
      }
    }
  ]
},
{
  id: 313,
  code: "cardio03-q313",
  area: ["cardio+icu", "cardio"],
  topic: ["ventricular arrhythmia", "vf", "tv", "refractory", "advanced management"],
  level: "hard",
  correct: 4,
  question: {
    pt: "Paciente de 60 anos com IAM prévio e fração de ejeção de 28% apresenta múltimos episódios de taquicardia ventricular sustentada e fibrilação ventricular em UTI, mesmo com uso de amiodarona, betabloqueador e correção hidroeletrolítica. Sobre o manejo das arritmias ventriculares refratárias, assinale a **afirmativa incorrect**:",
    en: "A 60-year-old patient with prior MI and LVEF 28% presents with multiple episodes of sustained VT and VF in ICU, despite amiodarone, beta-blockers, and corrected electrolytes. Regarding management of refractory ventricular arrhythmias, select the **incorrect** statement:",
    es: "Un paciente de 60 años con IAM previo y FEVI de 28% presenta múltiples episodios de TV sostenida y FV en UCI, a pesar de amiodarona, betabloqueantes y corrección de electrolitos. Sobre el manejo de arritmias ventriculares refractarias, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A sedação profunda pode reduzir gatilhos adrenérgicos e ajudar no controle da arritmia refratária.",
        en: "Deep sedation can reduce adrenergic triggers and assist in refractory arrhythmia control.",
        es: "La sedación profunda puede reducir los disparadores adrenérgicos y ayudar a controlar la arritmia refractaria."
      },
      explanation: {
        pt: "Sedação pode interromper tempestade elétrica e estabilizar o paciente.",
        en: "Sedation can suppress electrical storm and stabilize the patient.",
        es: "La sedación puede suprimir la tormenta eléctrica y estabilizar al paciente."
      }
    },
    {
      text: {
        pt: "Terapias de ablação por cateter podem ser indicadas em centros especializados para controle da arritmia refratária.",
        en: "Catheter ablation may be indicated at specialized centers to control refractory arrhythmia.",
        es: "La ablación por catéter puede estar indicada en centros especializados para controlar la arritmia refractaria."
      },
      explanation: {
        pt: "Ablação reduz recorrência e pode melhorar sobrevida em casos selecionados.",
        en: "Ablation reduces recurrence and may improve survival in selected cases.",
        es: "La ablación reduce recurrencia y puede mejorar la supervivencia en casos seleccionados."
      }
    },
    {
      text: {
        pt: "O uso de suporte circulatório mecânico, como ECMO-VA, pode ser necessário em casos com instabilidade grave e falha terapêutica.",
        en: "Mechanical support like VA-ECMO may be required in severe instability with therapy failure.",
        es: "El soporte mecánico como ECMO-VA puede ser necesario en casos de inestabilidad severa con falla terapéutica."
      },
      explanation: {
        pt: "ECMO permite suporte temporário até controle do foco arritmogênico ou recuperação.",
        en: "ECMO allows temporary support until arrhythmia control or recovery.",
        es: "La ECMO permite soporte temporal hasta el control o recuperación del foco arritmogénico."
      }
    },
    {
      text: {
        pt: "O uso de lidocaína deve ser evitado em todos os casos, pois aumenta a mortalidade em pacientes com arritmias ventriculares.",
        en: "Lidocaine should always be avoided as it increases mortality in patients with ventricular arrhythmias.",
        es: "La lidocaína debe evitarse siempre porque aumenta la mortalidad en arritmias ventriculares."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. A lidocaína pode ser útil em casos refratários, especialmente no context isquêmico.",
        en: "This is the incorrect statement. Lidocaine may be useful in refractory cases, especially ischemic ones.",
        es: "Esta es la afirmación incorrecta. La lidocaína puede ser útil en casos refractarios, especialmente isquémicos."
      }
    },
    {
      text: {
        pt: "A otimização do balanço autonômico, com betabloqueadores intravenosos, pode ajudar a suprimir a tempestade elétrica.",
        en: "Autonomic modulation using IV beta-blockers can help suppress electrical storm.",
        es: "La modulación autonómica con betabloqueantes IV puede ayudar a suprimir la tormenta eléctrica."
      },
      explanation: {
        pt: "Betabloqueadores intravenosos como esmolol são usados para controlar hiperatividade simpática.",
        en: "IV beta-blockers like esmolol are used to control sympathetic hyperactivity.",
        es: "Betabloqueantes IV como el esmolol se usan para controlar la hiperactividad simpática."
      }
    }
  ]
},
{
  id: 315,
  code: "cardio03-q315",
  area: ["cardio+icu", "cardio"],
  topic: ["shock", "tamponade", "differential diagnosis", "pocus", "emergency"],
  level: "hard",
  correct: 4,
  question: {
    pt: "Homem de 62 anos, internado há 3 dias após cirurgia cardíaca, apresenta-se subitamente com hipotensão (PA 78x50 mmHg), taquicardia, turgência jugular e diminuição dos murmúrios cardíacos. Pulso paradoxal de 16 mmHg é identificado. SatO₂: 92% em máscara não reinalante. Qual das afirmações abaixo é **incorrect** frente a esse quadro clínico?",
    en: "A 62-year-old man, hospitalized 3 days after cardiac surgery, develops sudden hypotension (BP 78x50 mmHg), tachycardia, jugular venous distension, and muffled heart sounds. Pulsus paradoxus of 16 mmHg is noted. SpO₂: 92% on non-rebreather mask. Which of the following statements is **incorrect** for this clinical scenario?",
    es: "Un hombre de 62 años, hospitalizado 3 días después de cirugía cardíaca, presenta hipotensión súbita (PA 78x50 mmHg), taquicardia, distensión yugular y ruidos cardíacos apagados. Se identifica pulso paradójico de 16 mmHg. SatO₂: 92% con máscara de no reinhalación. ¿Cuál de las siguientes afirmaciones es **incorrecta** en este cuadro clínico?"
  },
  options: [
    {
      text: {
        pt: "A embolia pulmonar maciça deve ser considerada em pacientes com taquicardia, hipotensão e hipoxemia súbita, especialmente com fatores de risco tromboembólicos.",
        en: "Massive pulmonary embolism should be considered in patients with sudden tachycardia, hypotension, and hypoxemia, especially with thromboembolic risk factors.",
        es: "El tromboembolismo pulmonar masivo debe considerarse en pacientes con taquicardia, hipotensión e hipoxemia súbita, especialmente con factores de riesgo tromboembólico."
      },
      explanation: {
        pt: "PE maciça é diagnóstico diferencial importante, especialmente na ausência de sinais pericárdicos.",
        en: "Massive PE is a key differential diagnosis, especially when pericardial signs are absent.",
        es: "El TEP masivo es un diagnóstico diferencial importante si no hay signos pericárdicos."
      }
    },
    {
      text: {
        pt: "O pneumotórax hipertensivo deve ser excluído diante de hipotensão, desvio de traqueia e hipersonoridade unilateral.",
        en: "Tension pneumothorax should be excluded in cases of hypotension, tracheal deviation, and unilateral hyperresonance.",
        es: "El neumotórax hipertensivo debe descartarse ante hipotensión, desviación traqueal e hiperresonancia unilateral."
      },
      explanation: {
        pt: "É um diagnóstico de emergência com apresentação semelhante, mas com sinais torácicos auscultatórios claros.",
        en: "It’s an emergency diagnosis with similar presentation but clear chest auscultation findings.",
        es: "Es un diagnóstico de emergencia con presentación similar pero hallazgos torácicos evidentes."
      }
    },
    {
      text: {
        pt: "A realização de ecocardiograma point-of-care é essencial para diferenciar causas de choque e confirmar suspeita de tamponamento.",
        en: "Point-of-care echocardiography is essential to differentiate shock causes and confirm tamponade suspicion.",
        es: "La ecocardiografía a pie de cama es esencial para diferenciar causas de shock y confirmar sospecha de taponamiento."
      },
      explanation: {
        pt: "O POCUS permite diagnóstico rápido e direto do tamponamento cardíaco.",
        en: "POCUS allows rapid and direct diagnosis of cardiac tamponade.",
        es: "El POCUS permite diagnóstico rápido y directo del taponamiento cardíaco."
      }
    },
    {
      text: {
        pt: "A administração de grande volume de fluidos intravenosos é recomendada como tratamento definitivo em casos de choque com pulsos paradoxais.",
        en: "Large volume IV fluid administration is the definitive treatment in shock with pulsus paradoxus.",
        es: "La administración de grandes volúmenes de líquidos IV es el tratamiento definitivo en shock con pulso paradójico."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Em tamponamento, o tratamento definitivo é a drenagem pericárdica, e fluidos são apenas medida temporária.",
        en: "This is the incorrect statement. In tamponade, definitive treatment is pericardial drainage; fluids are only temporary.",
        es: "Esta es la afirmación incorrecta. En taponamiento, el tratamiento definitivo es el drenaje pericárdico; los líquidos son temporales."
      }
    },
    {
      text: {
        pt: "A tríade de Beck — hipotensão, bulhas abafadas e turgência jugular — sugere tamponamento cardíaco agudo.",
        en: "Beck's triad — hypotension, muffled heart sounds, and jugular venous distension — suggests acute cardiac tamponade.",
        es: "La tríada de Beck — hipotensión, ruidos cardíacos apagados y distensión yugular — sugiere taponamiento cardíaco agudo."
      },
      explanation: {
        pt: "A tríade clássica está presente em muitos casos de tamponamento subagudo e deve levantar forte suspeita clínica.",
        en: "The classic triad is common in subacute tamponade and should raise strong clinical suspicion.",
        es: "La tríada clásica es frecuente en taponamiento subagudo y debe generar alta sospecha clínica."
      }
    }
  ]
},
{
  id: 316,
  code: "cardio03-q316",
  area: ["cardio+icu", "cardio"],
  topic: ["myocarditis", "acute coronary syndrome", "troponin", "echocardiography", "mri"],
  level: "hard",
  correct: 3,
  question: {
    pt: "Homem de 29 anos, previamente saudável, procura atendimento com dor torácica intensa iniciada há 2h. Está pálido, sudorético e taquicárdico. ECG mostra infra de ST difuso e troponina I muito elevada. Ecocardiograma mostra disfunção sistólica biventricular global. Sobre os possíveis diagnósticos e condutas, assinale a **afirmativa incorrect**:",
    en: "A 29-year-old previously healthy man presents with severe chest pain for 2 hours. He is pale, sweaty, and tachycardic. ECG shows diffuse ST depression and troponin I is markedly elevated. Echocardiogram shows global biventricular systolic dysfunction. Regarding differential diagnosis and management, select the **incorrect** statement:",
    es: "Un hombre de 29 años previamente sano consulta por dolor torácico intenso desde hace 2 horas. Está pálido, sudoroso y taquicárdico. El ECG muestra infradeslevel de ST difuso y la troponina I está muy elevada. El ecocardiograma muestra disfunción sistólica biventricular global. Sobre el diagnóstico diferencial y la conducta, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A elevação difusa da troponina pode ocorrer tanto no infarto quanto na miocardite.",
        en: "Diffuse troponin elevation may occur in both infarction and myocarditis.",
        es: "La elevación difusa de troponina puede ocurrir tanto en infarto como en miocarditis."
      },
      explanation: {
        pt: "A lesão miocárdica por inflamação viral ou hipóxia isquêmica pode elevar biomarcadores de forma semelhante.",
        en: "Myocardial injury from viral inflammation or ischemia can similarly raise biomarkers.",
        es: "La lesión miocárdica por inflamación viral o isquemia puede elevar biomarcadores de forma similar."
      }
    },
    {
      text: {
        pt: "A disfunção biventricular global no eco favorece o diagnóstico de miocardite fulminante.",
        en: "Global biventricular dysfunction on echo favors the diagnosis of fulminant myocarditis.",
        es: "La disfunción biventricular global en ecocardiograma favorece el diagnóstico de miocarditis fulminante."
      },
      explanation: {
        pt: "O infarto geralmente cursa com disfunção segmentar, enquanto a miocardite é difusa.",
        en: "Infarction usually causes segmental dysfunction, while myocarditis is diffuse.",
        es: "El infarto suele causar disfunción segmentaria; la miocarditis es difusa."
      }
    },
    {
      text: {
        pt: "A angiografia coronária deve ser evitada para não agravar a inflamação miocárdica.",
        en: "Coronary angiography should be avoided to prevent aggravating myocardial inflammation.",
        es: "La angiografía coronaria debe evitarse para no agravar la inflamación miocárdica."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Em caso de dúvida, a angiografia é essencial para excluir coronariopatia obstrutiva.",
        en: "This is the incorrect statement. In doubtful cases, angiography is essential to rule out obstructive CAD.",
        es: "Esta es la afirmación incorrecta. En casos dudosos, la angiografía es esencial para descartar enfermedad coronaria."
      }
    },
    {
      text: {
        pt: "A ressonância cardíaca pode diferenciar miocardite de infarto, mostrando realce tardio não isquêmico.",
        en: "Cardiac MRI may distinguish myocarditis from infarction via non-ischemic late gadolinium enhancement.",
        es: "La resonancia cardíaca puede diferenciar miocarditis de infarto mostrando realce tardío no isquémico."
      },
      explanation: {
        pt: "A distribuição subepicárdica ou mesocárdica favorece miocardite; subendocárdica favorece infarto.",
        en: "Subepicardial or mid-myocardial patterns favor myocarditis; subendocardial favors infarction.",
        es: "El patrón subepicárdico o mesocárdico sugiere miocarditis; subendocárdico sugiere infarto."
      }
    },
    {
      text: {
        pt: "O suporte com inotrópicos e ventilação pode ser necessário em ambos os diagnósticos, dependendo da instabilidade clínica.",
        en: "Inotropic and ventilatory support may be needed in both diagnoses, depending on clinical instability.",
        es: "El soporte con inotrópicos y ventilación puede ser necesario en ambos diagnósticos según la inestabilidad."
      },
      explanation: {
        pt: "Ambos podem cursar com choque cardiogênico e requerer cuidados intensivos.",
        en: "Both may cause cardiogenic shock requiring intensive support.",
        es: "Ambos pueden evolucionar con shock cardiogénico y necesitar cuidados intensivos."
      }
    }
  ]
},
{
  id: 317,
  code: "cardio03-q317",
  area: ["cardio+icu", "cardio"],
  topic: ["atrial fibrillation", "anticoagulation", "critical care", "bleeding risk", "clinical decision"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Homem de 74 anos, com sepse abdominal em UTI, desenvolve fibrilação atrial de início recente. Está em uso de vasopressores, com plaquetas de 49.000/mm³ e sangramento digestivo leve nas últimas 24h. Sobre anticoagulação nessa situação, assinale a **afirmativa incorrect**:",
    en: "A 74-year-old man with abdominal sepsis in the ICU develops new-onset atrial fibrillation. He is on vasopressors, has platelets at 49,000/mm³, and had minor GI bleeding in the last 24h. Regarding anticoagulation in this scenario, select the **incorrect** statement:",
    es: "Un hombre de 74 años con sepsis abdominal en UCI presenta fibrilación auricular de reciente inicio. Está con vasopresores, plaquetas en 49.000/mm³ y sangrado digestivo leve en las últimas 24h. Sobre anticoagulación en este escenario, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "A fibrilação atrial em pacientes críticos pode ser transitória e sua anticoagulação deve ser reavaliada conforme evolução clínica.",
        en: "Atrial fibrillation in critical patients may be transient and anticoagulation should be reassessed as clinical status evolves.",
        es: "La fibrilación auricular en pacientes críticos puede ser transitoria y la anticoagulación debe reevaluarse según la evolución."
      },
      explanation: {
        pt: "Nem toda FA de início recente em UTI exige anticoagulação definitiva.",
        en: "Not all ICU-onset AF requires permanent anticoagulation.",
        es: "No toda FA de inicio en UCI requiere anticoagulación definitiva."
      }
    },
    {
      text: {
        pt: "A presença de sangramento leve não influencia a decisão de anticoagular em context de FA com alto risco tromboembólico.",
        en: "Minor bleeding should not influence the decision to anticoagulate in AF with high thromboembolic risk.",
        es: "El sangrado leve no debe influir en la decisión de anticoagular en FA con alto riesgo tromboembólico."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Todo sangramento ativo **influencia sim** a decisão, exigindo cautela ou adiamento.",
        en: "This is the incorrect statement. Any active bleeding **does** influence the decision and warrants caution or delay.",
        es: "Esta es la afirmación incorrecta. Todo sangrado activo **influye** y requiere precaución o aplazamiento."
      }
    },
    {
      text: {
        pt: "Escores como CHA₂DS₂-VASc e HAS-BLED ajudam na decisão, mas devem ser usados com cautela em pacientes críticos.",
        en: "Scores like CHA₂DS₂-VASc and HAS-BLED help guide decisions, but should be used cautiously in critically ill patients.",
        es: "Los scores CHA₂DS₂-VASc y HAS-BLED ayudan en la decisión, pero deben usarse con precaución en críticos."
      },
      explanation: {
        pt: "Esses escores foram validados em populações ambulatoriais e têm limitações na UTI.",
        en: "These scores were validated in outpatients and have limitations in ICU settings.",
        es: "Estos scores se validaron en ambulatorios y tienen limitaciones en UCI."
      }
    },
    {
      text: {
        pt: "Conduta expectante com reavaliação diária pode ser apropriada em pacientes instáveis e com risco hemorrágico elevado.",
        en: "Expectant management with daily reassessment may be appropriate in unstable patients with high bleeding risk.",
        es: "La conducta expectante con reevaluación diaria puede ser apropiada en pacientes inestables y con alto riesgo hemorrágico."
      },
      explanation: {
        pt: "É razoável aguardar estabilização antes de iniciar anticoagulação plena.",
        en: "Reasonable to await stabilization before initiating full anticoagulation.",
        es: "Es razonable esperar estabilización antes de anticoagular completamente."
      }
    },
    {
      text: {
        pt: "A anticoagulação profilática para TEV não deve ser confundida com anticoagulação terapêutica da FA.",
        en: "Prophylactic anticoagulation for VTE should not be confused with therapeutic anticoagulation for AF.",
        es: "La anticoagulación profiláctica para TEV no debe confundirse con la terapéutica para FA."
      },
      explanation: {
        pt: "São estratégias distintas com doses, objetivos e riscos diferentes.",
        en: "These are distinct strategies with different doses, goals, and risks.",
        es: "Son estrategias distintas con diferentes dosis, objetivos y riesgos."
      }
    }
  ]
},
{
  id: 318,
  code: "cardio03-q318",
  area: ["cardio+icu", "cardio"],
  topic: ["echocardiography", "shock", "pocus", "cardiac function", "decision-making"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Paciente de 55 anos, em ventilação mecânica por pneumonia grave, apresenta instabilidade hemodinâmica. Realiza-se ecocardiograma à beira-leito com janela subcostal, que mostra: ventrículo esquerdo hiperdinâmico, colapso da veia cava inferior na inspiração e ventrículo direito normal. Sobre a interpretação e conduta, assinale a **afirmativa incorrect**:",
    en: "A 55-year-old patient on mechanical ventilation for severe pneumonia develops hemodynamic instability. Bedside echo (subcostal view) shows: hyperdynamic left ventricle, collapsing inferior vena cava on inspiration, and normal right ventricle. Regarding interpretation and management, select the **incorrect** statement:",
    es: "Un paciente de 55 años en ventilación mecánica por neumonía grave presenta inestabilidad hemodinámica. El ecocardiograma a pie de cama (ventana subcostal) muestra: ventrículo izquierdo hiperdinámico, colapso de la vena cava inferior en inspiración y ventrículo derecho normal. Sobre la interpretación y conducta, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "O padrão hiperdinâmico do VE pode estar associado a vasodilatação intensa como na sepse.",
        en: "Hyperdynamic LV pattern may be seen in intense vasodilation such as in sepsis.",
        es: "El patrón hiperdinámico del VI puede verse en vasodilatación intensa como en sepsis."
      },
      explanation: {
        pt: "Choque distributivo pode causar aumento da contratilidade compensatória do VE.",
        en: "Distributive shock may lead to compensatory LV hypercontractility.",
        es: "El shock distributivo puede inducir hipercinesia compensatoria del VI."
      }
    },
    {
      text: {
        pt: "O colapso da VCI na inspiração indica aumento da pressão venosa central e sugere hipervolemia.",
        en: "IVC collapse with inspiration indicates elevated central venous pressure and suggests hypervolemia.",
        es: "El colapso de la VCI con inspiración indica presión venosa central elevada y sugiere hipervolemia."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. O colapso da VCI indica **baixa** pressão venosa central, sugerindo hipovolemia.",
        en: "This is the incorrect statement. IVC collapse suggests **low** central venous pressure, indicating hypovolemia.",
        es: "Esta es la afirmación incorrecta. El colapso de la VCI sugiere **baja** PVC, lo que indica hipovolemia."
      }
    },
    {
      text: {
        pt: "A ausência de disfunção de VD torna embolia pulmonar maciça menos provável neste momento.",
        en: "Absence of RV dysfunction makes massive pulmonary embolism less likely at this time.",
        es: "La ausencia de disfunción del VD hace menos probable un TEP masivo en este momento."
      },
      explanation: {
        pt: "A embolia pulmonar costuma causar dilatação e disfunção do VD em quadros graves.",
        en: "Massive PE usually causes RV dilation and dysfunction in severe cases.",
        es: "El TEP masivo suele causar dilatación y disfunción del VD en casos graves."
      }
    },
    {
      text: {
        pt: "A janela subcostal é uma das mais úteis em pacientes sob ventilação mecânica e sedação profunda.",
        en: "The subcostal window is one of the most useful in mechanically ventilated, deeply sedated patients.",
        es: "La ventana subcostal es una de las más útiles en pacientes con VM y sedación profunda."
      },
      explanation: {
        pt: "Facilita o acesso em decúbito dorsal, comum na UTI.",
        en: "Facilitates access in supine position, common in ICU settings.",
        es: "Facilita el acceso en decúbito supino, común en UCI."
      }
    },
    {
      text: {
        pt: "Achados de hipocontratilidade difusa ou colapso de câmaras direitas deveriam modificar a conduta e indicar investigação adicional imediata.",
        en: "Findings of global hypocontractility or chamber collapse should alter management and prompt immediate further investigation.",
        es: "Los hallazgos de hipocontractilidad difusa o colapso de cámaras deben cambiar la conducta e indicar evaluación urgente."
      },
      explanation: {
        pt: "Tais achados indicam disfunção grave e requerem abordagem direcionada.",
        en: "These findings suggest severe dysfunction and require targeted management.",
        es: "Estos hallazgos indican disfunción grave y requieren abordaje específico."
      }
    }
  ]
},
{
  id: 319,
  code: "cardio03-q319",
  area: ["cardio+icu", "cardio"],
  topic: ["fluid responsiveness", "ivc", "svv", "ppv", "mechanical ventilation"],
  level: "hard",
  correct: 4,
  question: {
    pt: "Paciente de 70 anos, sob ventilação mecânica controlada, encontra-se hipotenso com débito urinário <0,3 mL/kg/h. Monitorização hemodinâmica mostra variação de volume sistólico (SVV) de 17% e colapso respiratório da VCI >50%. Sobre a avaliação da responsividade volêmica nesse cenário, assinale a **afirmativa incorrect**:",
    en: "A 70-year-old patient on controlled mechanical ventilation is hypotensive with urine output <0.3 mL/kg/h. Hemodynamic monitoring shows stroke volume variation (SVV) of 17% and respiratory IVC collapse >50%. Regarding fluid responsiveness assessment in this setting, select the **incorrect** statement:",
    es: "Un paciente de 70 años en ventilación mecánica controlada presenta hipotensión y diuresis <0.3 mL/kg/h. El monitoreo hemodinámico muestra una variación del volumen sistólico (SVV) del 17% y colapso respiratorio de la VCI >50%. Sobre la evaluación de la respuesta a volumen en este context, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "Valores elevados de SVV (>13%) sugerem que o paciente pode responder à reposição volêmica.",
        en: "Elevated SVV values (>13%) suggest the patient may respond to fluid resuscitation.",
        es: "Valores elevados de SVV (>13%) sugieren que el paciente puede responder a volumen."
      },
      explanation: {
        pt: "SVV é preditor confiável em ventilação controlada e ritmo sinusal.",
        en: "SVV is a reliable predictor in controlled ventilation with sinus rhythm.",
        es: "SVV es un predictor confiable con ventilación controlada y ritmo sinusal."
      }
    },
    {
      text: {
        pt: "O colapso inspiratório da VCI >50% pode indicar hipovolemia em pacientes sob ventilação espontânea.",
        en: "Inspiratory IVC collapse >50% may suggest hypovolemia in spontaneously breathing patients.",
        es: "El colapso inspiratorio de la VCI >50% puede indicar hipovolemia en pacientes con respiración espontánea."
      },
      explanation: {
        pt: "VCI colapsável em inspiração está relacionada a baixa pressão de enchimento.",
        en: "Collapsible IVC during inspiration is associated with low filling pressures.",
        es: "VCI colapsable en inspiración se relaciona con baja presión de llenado."
      }
    },
    {
      text: {
        pt: "O uso de PPV e SVV como preditores exige ventilação controlada, ritmo sinusal e ausência de esforço inspiratório ativo.",
        en: "PPV and SVV as predictors require controlled ventilation, sinus rhythm, and absence of active inspiratory effort.",
        es: "El uso de PPV y SVV como predictores requiere ventilación controlada, ritmo sinusal y sin esfuerzo inspiratorio activo."
      },
      explanation: {
        pt: "Fatores como arritmias ou respiração espontânea limitam a acurácia desses índices.",
        en: "Factors like arrhythmias or spontaneous breathing limit the accuracy of these indices.",
        es: "Factores como arritmias o respiración espontánea limitan su precisión."
      }
    },
    {
      text: {
        pt: "SVV e PPV são confiáveis mesmo em pacientes em ventilação espontânea e ritmo irregular.",
        en: "SVV and PPV are reliable even in spontaneously breathing patients with irregular rhythm.",
        es: "SVV y PPV son confiables incluso en pacientes con respiración espontánea y ritmo irregular."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. Nessas condições, esses parâmetros **não são confiáveis**.",
        en: "This is the incorrect statement. Under these conditions, these parameters are **not reliable**.",
        es: "Esta es la afirmación incorrecta. En esas condiciones, estos parámetros **no son confiables**."
      }
    },
    {
      text: {
        pt: "Testes dinâmicos, como elevação passiva das pernas, podem complementar a avaliação da responsividade volêmica.",
        en: "Dynamic tests such as passive leg raise can complement fluid responsiveness assessment.",
        es: "Pruebas dinámicas como la elevación pasiva de piernas pueden complementar la evaluación de respuesta a volumen."
      },
      explanation: {
        pt: "Esse teste simula bolus volêmico autólogo e é útil mesmo em respiração espontânea.",
        en: "This test mimics an autologous fluid challenge and is useful even in spontaneous breathing.",
        es: "Esta prueba simula un bolo de volumen autólogo y es útil incluso con respiración espontánea."
      }
    }
  ]
},
{
  id: 320,
  code: "cardio03-q320",
  area: ["cardio+icu", "cardio"],
  topic: ["obstructive shock", "tamponade", "massive PE", "tension pneumothorax", "clinical reasoning"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Homem de 58 anos com DPOC e FA crônica é admitido em UTI com hipotensão (PA 80x50 mmHg), taquicardia, turgência jugular, extremidades frias e MV abolido à direita. ECG mostra taquicardia com QRS estreito. Sobre causas de choque obstrutivo, assinale a **afirmativa incorrect**:",
    en: "A 58-year-old man with COPD and chronic AF is admitted to ICU with hypotension (BP 80x50 mmHg), tachycardia, jugular venous distension, cold extremities, and absent breath sounds on the right. ECG shows narrow-complex tachycardia. Regarding causes of obstructive shock, select the **incorrect** statement:",
    es: "Un hombre de 58 años con EPOC y FA crónica ingresa en UCI con hipotensión (PA 80x50 mmHg), taquicardia, distensión yugular, extremidades frías y abolición del murmullo vesicular derecho. El ECG muestra taquicardia de QRS estrecho. Sobre causas de shock obstructivo, señale la afirmación **incorrecta**:"
  },
  options: [
    {
      text: {
        pt: "O pneumotórax hipertensivo pode causar choque obstrutivo com ausência de murmúrio vesicular e desvio traqueal.",
        en: "Tension pneumothorax may cause obstructive shock with absent breath sounds and tracheal deviation.",
        es: "El neumotórax hipertensivo puede causar shock obstructivo con abolición de ruidos respiratorios y desviación traqueal."
      },
      explanation: {
        pt: "Achados clínicos e gasosos ajudam na identificação rápida da urgência.",
        en: "Clinical and gas findings help in rapid emergency identification.",
        es: "Los hallazgos clínicos y de gases ayudan en la identificación rápida de la urgencia."
      }
    },
    {
      text: {
        pt: "A hipotensão associada à ausência de estertores e aumento do murmúrio vesicular bilateral sugere tamponamento cardíaco.",
        en: "Hypotension with absence of crackles and increased bilateral breath sounds suggests cardiac tamponade.",
        es: "La hipotensión sin estertores y aumento bilateral de ruidos respiratorios sugiere taponamiento cardíaco."
      },
      explanation: {
        pt: "Essa é a afirmativa incorrect. No tamponamento, os **murmúrios estão geralmente reduzidos**, não aumentados.",
        en: "This is the incorrect statement. In tamponade, **breath sounds are usually diminished**, not increased.",
        es: "Esta es la afirmación incorrecta. En taponamiento, los **ruidos respiratorios suelen estar disminuidos**."
      }
    },
    {
      text: {
        pt: "A embolia pulmonar maciça deve ser considerada quando há disfunção súbita do VD, hipoxemia e instabilidade sem congestão pulmonar evidente.",
        en: "Massive pulmonary embolism should be considered with sudden RV dysfunction, hypoxemia, and instability without overt pulmonary congestion.",
        es: "Debe considerarse el TEP masivo ante disfunción súbita del VD, hipoxemia e inestabilidad sin congestión pulmonar evidente."
      },
      explanation: {
        pt: "Achados ecográficos e gasométricos podem guiar a suspeita.",
        en: "Echo and gas findings help guide suspicion.",
        es: "Hallazgos ecográficos y gasométricos orientan la sospecha."
      }
    },
    {
      text: {
        pt: "O ecocardiograma à beira-leito pode ajudar a diferenciar tamponamento, TEP e disfunção miocárdica em minutos.",
        en: "Bedside echo can help differentiate tamponade, PE, and myocardial dysfunction within minutes.",
        es: "El ecocardiograma a pie de cama puede diferenciar taponamiento, TEP y disfunción en minutos."
      },
      explanation: {
        pt: "É ferramenta-chave na abordagem rápida do choque obstrutivo.",
        en: "It’s a key tool in the rapid evaluation of obstructive shock.",
        es: "Es una herramienta clave para evaluar el shock obstructivo rápidamente."
      }
    },
    {
      text: {
        pt: "Choque obstrutivo cursa com baixa pré-carga efetiva, débito cardíaco reduzido e resistência vascular sistêmica aumentada.",
        en: "Obstructive shock presents with low effective preload, reduced cardiac output, and increased systemic vascular resistance.",
        es: "El shock obstructivo cursa con precarga efectiva baja, gasto cardíaco reducido y resistencia vascular aumentada."
      },
      explanation: {
        pt: "São características fisiopatológicas típicas desse tipo de choque.",
        en: "These are typical pathophysiological features of this type of shock.",
        es: "Son características fisiopatológicas típicas de este tipo de shock."
      }
    }
  ]
},

];

questionBank.addBank(bancoCardioDificil);
