const bancoNephroDificil = [
  {
    id: 701,
    code: "nephro03-q701",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["renal failure", "volume overload", "sepsis"],
    level: "hard",
    correct: 2,
    question: {
      pt: "Paciente de 67 anos, com sepse pulmonar e LRA estágio 2 pelo KDIGO, apresenta oligúria persistente apesar de reposição volêmica adequada e PAM > 65 mmHg. Qual a conduta mais adequada?",
      en: "A 67-year-old patient with pulmonary sepsis and stage 2 AKI (KDIGO) shows persistent oliguria despite adequate resuscitation and MAP > 65 mmHg. What is the most appropriate next step?",
      es: "Paciente de 67 años con sepsis pulmonar y LRA estadio 2 (KDIGO), presenta oliguria persistente pese a volumen adecuado y PAM > 65 mmHg. ¿Cuál es la mejor conducta?"
    },
    options: [
      { text: { pt: "Iniciar inotrópico", en: "Start inotrope", es: "Iniciar inotrópico" },
        explanation: {
          pt: "Inotrópico não melhora desfechos em LRA com PAM adequada (KDIGO, 2012).",
          en: "No benefit shown from inotropes when MAP is adequate (KDIGO, 2012).",
          es: "No mejora desenlaces con PAM adecuada (KDIGO, 2012)."
        }
      },
      { text: { pt: "Furosemida em alta dose", en: "High-dose furosemide", es: "Furosemida en alta dosis" },
        explanation: {
          pt: "Pode converter para LRA não oligúrica, mas não altera mortalidade.",
          en: "May convert to non-oliguric AKI but does not affect mortality.",
          es: "Convierte a LRA no oligúrica sin cambiar mortalidad."
        }
      },
      { text: { pt: "Considerar início de RRT", en: "Consider initiating RRT", es: "Considerar iniciar TRR" },
        explanation: {
          pt: "Indicação em casos refratários à terapia conservadora — KDIGO e SCCM (2023).",
          en: "Indicated when conservative measures fail — KDIGO & SCCM (2023).",
          es: "Indicada cuando falla el manejo conservador — KDIGO & SCCM (2023)."
        }
      },
      { text: { pt: "Solução hipertônica", en: "Hypertonic solution", es: "Solución hipertónica" },
        explanation: {
          pt: "Sem benefício em ausência de hiponatremia sintomática.",
          en: "Not useful without symptomatic hyponatremia.",
          es: "Inútil si no hay hiponatremia sintomática."
        }
      }
    ]
  },
  {
    id: 702,
    code: "nephro03-q702",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["electrolytes", "potassium", "arrhythmias"],
    level: "hard",
    correct: 1,
    question: {
      pt: "Homem de 59 anos com LRA em ventilação mecânica desenvolve hipercalemia grave (K+ 7,2 mEq/L) e ECG com ondas T apiculadas. Após estabilização inicial com gluconato de cálcio, qual deve ser a prioridade terapêutica?",
      en: "A 59-year-old man with AKI on mechanical ventilation develops severe hyperkalemia (K+ 7.2 mEq/L) and peaked T waves on ECG. After initial calcium gluconate, what is the next priority?",
      es: "Hombre de 59 años con LRA en VM desarrolla hipercalemia grave (K+ 7.2) y ECG con ondas T picudas. Tras gluconato de calcio, ¿cuál es la prioridad?"
    },
    options: [
      {
        text: { pt: "Repetir gluconato de cálcio", en: "Repeat calcium gluconate", es: "Repetir gluconato de calcio" },
        explanation: {
          pt: "Pode ser repetido se alterações persistirem, mas não substitui medidas de remoção do potássio.",
          en: "Can be repeated, but not a substitute for potassium elimination.",
          es: "Se puede repetir, pero no reemplaza eliminar potasio."
        }
      },
      {
        text: { pt: "Insulina regular com glicose EV", en: "IV regular insulin with glucose", es: "Insulina regular IV con glucosa" },
        explanation: {
          pt: "É intervenção padrão para mover potássio para intracelular rapidamente (UpToDate, 2024).",
          en: "Standard intervention to shift potassium intracellularly (UpToDate, 2024).",
          es: "Intervención estándar para desplazar potasio al intracelular (UpToDate, 2024)."
        }
      },
      {
        text: { pt: "Furosemida em bolus", en: "IV furosemide", es: "Furosemida IV" },
        explanation: {
          pt: "Útil em hipercalemia com hipervolemia, mas menos eficaz de forma isolada.",
          en: "May help with volume overload, but less effective alone.",
          es: "Útil con sobrecarga de volumen, pero poco eficaz sola."
        }
      },
      {
        text: { pt: "Iniciar CRRT imediatamente", en: "Immediate CRRT", es: "CRRT inmediata" },
        explanation: {
          pt: "Indicado se refratário ou instável hemodinamicamente, mas pode aguardar estabilização inicial.",
          en: "Used in refractory or unstable cases, but not immediate priority.",
          es: "Para casos refractarios o inestables, no es la prioridad inmediata."
        }
      }
    ]
  },
  {
    id: 703,
    code: "nephro03-q703",
    areas: ["nephro", "nephro+icu", "icu", "medicine", "rrt"],
    topics: ["rrt", "hemodynamics", "ultrafiltration"],
    level: "hard",
    correct: 3,
    question: {
      pt: "Paciente com choque séptico em RRT contínua apresenta hipotensão persistente durante a ultrafiltração. Qual das seguintes estratégias é mais adequada para reduzir esse efeito colateral?",
      en: "A patient with septic shock on CRRT presents persistent hypotension during ultrafiltration. Which of the following strategies is most appropriate to mitigate this effect?",
      es: "Paciente con shock séptico en TRR continua presenta hipotensión durante ultrafiltración. ¿Qué estrategia es más adecuada?"
    },
    options: [
      {
        text: { pt: "Aumentar dose de vasopressor", en: "Increase vasopressor dose", es: "Aumentar dosis de vasopresores" },
        explanation: {
          pt: "Pode ser necessário, mas não aborda a causa hemodinâmica da ultrafiltração.",
          en: "May be needed but doesn’t address the ultrafiltration-related cause.",
          es: "Puede ser útil, pero no aborda la causa relacionada con ultrafiltración."
        }
      },
      {
        text: { pt: "Trocar para hemodiálise intermitente", en: "Switch to intermittent hemodialysis", es: "Cambiar a hemodiálisis intermitente" },
        explanation: {
          pt: "Contraindicado em instabilidade hemodinâmica (KDIGO 2012).",
          en: "Contraindicated in hemodynamic instability (KDIGO 2012).",
          es: "Contraindicado en inestabilidad hemodinámica (KDIGO 2012)."
        }
      },
      {
        text: { pt: "Reduzir fluxo do dialisato", en: "Reduce dialysate flow", es: "Reducir flujo de dialisato" },
        explanation: {
          pt: "Pode impactar clearance, mas não resolve hipotensão associada à ultrafiltração.",
          en: "Affects clearance, not ultrafiltration-related hypotension.",
          es: "Impacta el clearance, no la hipotensión por ultrafiltración."
        }
      },
      {
        text: { pt: "Diminuir taxa de ultrafiltração e avaliar reposição volêmica", en: "Reduce ultrafiltration rate and assess volume replacement", es: "Reducir tasa de ultrafiltración y evaluar reposición de volumen" },
        explanation: {
          pt: "Conduta recomendada segundo SCCM e KDIGO para mitigar instabilidade hemodinâmica (SCCM 2023).",
          en: "Recommended by SCCM and KDIGO to address hemodynamic instability (SCCM 2023).",
          es: "Recomendado por SCCM y KDIGO ante inestabilidad hemodinámica (SCCM 2023)."
        }
      }
    ]
  },
  {
    id: 704,
    code: "nephro03-q704",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["contrast nephropathy", "preventive strategies"],
    level: "hard",
    correct: 0,
    question: {
      pt: "Paciente de 82 anos com IAM e histórico de LRA prévia necessita angioplastia urgente. Qual medida abaixo tem melhor evidência para reduzir o risco de nefropatia induzida por contraste?",
      en: "An 82-year-old with STEMI and prior AKI requires urgent PCI. Which measure has best evidence to reduce contrast-induced nephropathy?",
      es: "Paciente de 82 años con IAM y LRA previa requiere angioplastia. ¿Cuál medida tiene mayor evidencia contra nefropatía por contraste?"
    },
    options: [
      {
        text: { pt: "Hidratação isotônica antes e após contraste", en: "Isotonic hydration before and after contrast", es: "Hidratación isotónica antes y después del contraste" },
        explanation: {
          pt: "Principal medida comprovada (KDIGO, 2012; ESUR, 2021).",
          en: "Main proven strategy (KDIGO 2012; ESUR 2021).",
          es: "Estrategia principal comprobada (KDIGO 2012; ESUR 2021)."
        }
      },
      {
        text: { pt: "Alcalinização com bicarbonato isolado", en: "Isolated bicarbonate infusion", es: "Bicarbonato solo" },
        explanation: {
          pt: "Pode ser usado, mas sem superioridade comprovada sobre soro fisiológico.",
          en: "May be used but not superior to saline.",
          es: "Puede usarse, pero no es superior al suero fisiológico."
        }
      },
      {
        text: { pt: "Uso profilático de N-acetilcisteína oral", en: "Prophylactic oral NAC", es: "NAC oral profiláctica" },
        explanation: {
          pt: "Estudos recentes não mostram benefício claro (ACT Trial, 2011).",
          en: "Recent trials show no clear benefit (ACT Trial, 2011).",
          es: "Ensayos recientes no muestran beneficio claro (ACT Trial, 2011)."
        }
      },
      {
        text: { pt: "Furosemida para eliminar contraste rapidamente", en: "Furosemide to rapidly excrete contrast", es: "Furosemida para eliminar contraste" },
        explanation: {
          pt: "Pode causar desidratação e piorar função renal.",
          en: "May cause dehydration and worsen renal function.",
          es: "Puede causar deshidratación y empeorar función renal."
        }
      }
    ]
  },
  {
    id: 705,
    code: "nephro03-q705",
    areas: ["nephro", "nephro+icu", "icu", "medicine", "rrt"],
    topics: ["crrt", "metabolic acidosis", "renal replacement therapy"],
    level: "hard",
    correct: 0,
    question: {
      pt: "Homem de 48 anos, com choque séptico por peritonite, encontra-se em ventilação mecânica, em uso de norepinefrina, com pH 7,12, bicarbonato 12 mEq/L e lactato 6 mmol/L. Apresenta anúria há 12h e sobrecarga hídrica progressiva. Foi iniciado CRRT em modo CVVHDF. Após 6h de terapia, pH permanece 7,15 e bicarbonato 13. Qual das alternativas abaixo representa a conduta mais apropriada?",
      en: "A 48-year-old man with septic shock from peritonitis is on mechanical ventilation and norepinephrine, with pH 7.12, bicarbonate 12 mEq/L, and lactate 6 mmol/L. He is anuric for 12h with progressive fluid overload. CRRT (CVVHDF) was started. After 6h, pH remains 7.15 and bicarbonate 13. What is the most appropriate management?",
      es: "Hombre de 48 años con shock séptico por peritonitis, en ventilación mecánica y norepinefrina, pH 7,12, bicarbonato 12 mEq/L y lactato 6 mmol/L. Anúrico por 12h, con sobrecarga hídrica progresiva. Se inició TRRC (CVVHDF). Tras 6h, pH sigue en 7,15 y bicarbonato 13. ¿Cuál es la conducta más apropiada?"
    },
    options: [
      {
        text: {
          pt: "Reavaliar prescrição da CRRT, com aumento da taxa de depuração e solução de reposição com bicarbonato",
          en: "Reassess CRRT prescription, increasing clearance and using bicarbonate-based replacement fluid",
          es: "Reevaluar prescripción de TRRC, aumentar depuración y usar solución con bicarbonato"
        },
        explanation: {
          pt: "Em acidose metabólica refratária à CRRT inicial, a otimização da taxa de depuração (e.g. >30 mL/kg/h) e uso de soluções tamponadas com bicarbonato é recomendada (KDIGO, 2012; Bellomo et al., Intensive Care Med 2017).",
          en: "For refractory metabolic acidosis during initial CRRT, KDIGO and Bellomo et al. recommend increasing clearance and bicarbonate-buffered fluids.",
          es: "En acidosis metabólica refractaria a TRRC inicial, se recomienda aumentar depuración y usar fluidos con bicarbonato (KDIGO, Bellomo et al.)."
        }
      },
      {
        text: {
          pt: "Iniciar bicarbonato de sódio em bolo EV de 250 mL",
          en: "Give 250 mL IV bolus of sodium bicarbonate",
          es: "Administrar bolo de 250 mL de bicarbonato sódico IV"
        },
        explanation: {
          pt: "Embora possível, o uso isolado de bicarbonato em bolus não é sustentável e pode causar sobrecarga volêmica.",
          en: "Bolus bicarbonate offers temporary correction and may worsen fluid overload.",
          es: "El bolo de bicarbonato corrige temporalmente y puede empeorar la sobrecarga hídrica."
        }
      },
      {
        text: {
          pt: "Suspender CRRT e iniciar diálise intermitente para melhor correção da acidose",
          en: "Switch to intermittent dialysis for better acidosis control",
          es: "Cambiar a diálisis intermitente para mejor control de la acidosis"
        },
        explanation: {
          pt: "A diálise intermitente não é recomendada em pacientes instáveis em choque. CRRT é a escolha preferida.",
          en: "Intermittent dialysis is not recommended in hemodynamically unstable patients.",
          es: "La diálisis intermitente no se recomienda en pacientes inestables."
        }
      },
      {
        text: {
          pt: "Manter prescrição atual e repetir gasometria em 12h",
          en: "Maintain current prescription and recheck ABG in 12h",
          es: "Mantener prescripción actual y repetir gasometría en 12h"
        },
        explanation: {
          pt: "A persistência de acidose grave em paciente séptico e anúrico requer intervenção precoce, não observação passiva.",
          en: "Severe acidosis in a septic, anuric patient warrants early intervention, not passive observation.",
          es: "La acidosis grave en paciente anúrico requiere intervención temprana."
        }
      }
    ]
  },
    {
    id: 706,
    code: "nephro03-q706",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["covid-19", "acute kidney injury", "endotheliopathy", "coagulopathy"],
    level: "hard",
    correct: 3,
    question: {
      pt: "Paciente de 62 anos, hipertenso e obeso, internado por pneumonia grave por COVID-19, encontra-se em ventilação mecânica com PEEP 10 cmH₂O e uso de norepinefrina 0,3 mcg/kg/min. Após 5 dias, evolui com aumento de creatinina (1,1 → 2,5 mg/dL), proteinúria leve e hematúria microscópica. Não há sinais de obstrução nem uso recente de contraste. D-dímero elevado (4900 ng/mL), ferritina 2100, plaquetas 140 mil. Qual o principal mecanismo envolvido na injúria renal desse paciente?",
      en: "A 62-year-old hypertensive and obese patient admitted for severe COVID-19 pneumonia is on mechanical ventilation (PEEP 10 cmH₂O) and norepinephrine at 0.3 mcg/kg/min. On day 5, he develops rising creatinine (1.1 → 2.5 mg/dL), mild proteinuria and microscopic hematuria. No obstruction or recent contrast use. D-dimer is 4900 ng/mL, ferritin 2100, platelets 140k. What is the most likely mechanism of kidney injury in this patient?",
      es: "Paciente de 62 años, hipertenso y obeso, hospitalizado por neumonía grave por COVID-19, en VM con PEEP 10 cmH₂O y norepinefrina 0,3 mcg/kg/min. Al día 5 presenta creatinina en ascenso (1,1 → 2,5 mg/dL), proteinuria leve y hematuria microscópica. Sin uso de contraste ni obstrucción. Dímero-D 4900 ng/mL, ferritina 2100, plaquetas 140 mil. ¿Cuál es el principal mecanismo de lesión renal?"
    },
    options: [
      {
        text: {
          pt: "Rabdomiólise induzida por imobilização prolongada",
          en: "Rhabdomyolysis due to prolonged immobilization",
          es: "Rabdomiólisis por inmovilización prolongada"
        },
        explanation: {
          pt: "Rabdomiólise cursa com elevação de CPK e urina escura, o que não está descrito no caso.",
          en: "Rhabdomyolysis usually involves high CPK and dark urine, which are not present here.",
          es: "La rabdomiólisis suele presentar CPK alta y orina oscura, lo cual no está presente."
        }
      },
      {
        text: {
          pt: "Hipovolemia relativa associada à PEEP elevada",
          en: "Relative hypovolemia due to high PEEP",
          es: "Hipovolemia relativa por PEEP elevada"
        },
        explanation: {
          pt: "Pode contribuir, mas não explica achados como hematúria e marcadores inflamatórios elevados.",
          en: "May contribute, but doesn't explain hematuria and inflammatory markers.",
          es: "Puede contribuir, pero no explica la hematuria ni los marcadores inflamatorios."
        }
      },
      {
        text: {
          pt: "Nefrite túbulo-intersticial viral direta por SARS-CoV-2",
          en: "Direct tubulointerstitial nephritis by SARS-CoV-2",
          es: "Nefritis túbulo-intersticial directa por SARS-CoV-2"
        },
        explanation: {
          pt: "Embora possível, o envolvimento viral direto é raro e não é o principal mecanismo na maioria dos pacientes graves.",
          en: "Possible, but direct viral kidney involvement is rare in critically ill patients.",
          es: "Es posible, pero el daño renal viral directo es raro en pacientes graves."
        }
      },
      {
        text: {
          pt: "Microangiopatia trombótica e endotelite associada à COVID-19",
          en: "COVID-19-associated thrombotic microangiopathy and endotheliitis",
          es: "Microangiopatía trombótica y endotelitis asociadas a COVID-19"
        },
        explanation: {
          pt: "Estudos post-mortem demonstraram deposição de fibrina, lesão endotelial e microtrombos como principais achados na LRA por COVID-19 (Su et al., Kidney Int. 2020; Ronco et al., Nat Rev Nephrol 2021).",
          en: "Autopsy studies have shown fibrin deposition, endothelial injury, and microthrombi as key findings in COVID-19 AKI (Su et al., Kidney Int. 2020; Ronco et al., Nat Rev Nephrol 2021).",
          es: "Estudios post mortem muestran trombos, daño endotelial y fibrina en LRA por COVID-19 (Su et al., Kidney Int. 2020; Ronco et al., Nat Rev Nephrol 2021)."
        }
      }
    ]
  },
{
  id: 707,
  code: "nephro03-q707",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "pneumo", "pneumo+icu"],
  topics: ["metabolic acidosis"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Homem de 56 anos com história de etilismo crônico é admitido com confusão mental, taquipneia, hálito cetônico e dor abdominal difusa. Gasometria: pH 7,12, HCO₃⁻ 10 mEq/L, PaCO₂ 22 mmHg, ânion gap 25. Glicemia 160 mg/dL. Qual é o diagnóstico mais provável e a conduta inicial indicada?",
    en: "A 56-year-old man with chronic alcoholism is admitted with confusion, tachypnea, fruity breath, and diffuse abdominal pain. ABG: pH 7.12, HCO₃⁻ 10 mEq/L, PaCO₂ 22 mmHg, anion gap 25. Glucose 160 mg/dL. What is the most likely diagnosis and initial management?",
    es: "Hombre de 56 años con alcoholismo crónico se presenta con confusión, taquipnea, aliento cetónico y dolor abdominal difuso. GSA: pH 7,12, HCO₃⁻ 10, PaCO₂ 22 mmHg, anión gap 25. Glucosa 160 mg/dL. ¿Cuál es el diagnóstico más probable y manejo inicial?"
  },
  options: [
    {
      text: {
        pt: "Cetoacidose diabética; iniciar insulina em bomba contínua",
        en: "Diabetic ketoacidosis; start continuous insulin infusion",
        es: "Cetoacidosis diabética; iniciar insulina continua"
      },
      explanation: {
        pt: "A glicemia está apenas levemente elevada e o contexto clínico favorece cetoacidose alcoólica.",
        en: "Glucose is only mildly elevated and the context favors alcoholic ketoacidosis.",
        es: "La glucosa está moderadamente elevada y el cuadro es más compatible con cetoacidosis alcohólica."
      }
    },
    {
      text: {
        pt: "Acidose tubular renal tipo 1; iniciar reposição de bicarbonato",
        en: "Type 1 renal tubular acidosis; begin bicarbonate replacement",
        es: "Acidosis tubular renal tipo 1; iniciar bicarbonato"
      },
      explanation: {
        pt: "ATR tipo 1 cursa com anion gap normal e não explica o quadro clínico.",
        en: "RTA type 1 shows normal anion gap and doesn’t match this clinical picture.",
        es: "La ATR tipo 1 cursa con anión gap normal y no coincide con el caso."
      }
    },
    {
      text: {
        pt: "Cetoacidose alcoólica; iniciar glicose EV e tiamina antes de solução com insulina",
        en: "Alcoholic ketoacidosis; begin IV glucose and thiamine before insulin",
        es: "Cetoacidosis alcohólica; iniciar glucosa IV y tiamina antes de insulina"
      },
      explanation: {
        pt: "A cetoacidose alcoólica deve ser tratada com glicose para inibir cetogênese e tiamina para prevenir encefalopatia de Wernicke (UpToDate, 2024).",
        en: "Alcoholic ketoacidosis is managed with glucose to suppress ketogenesis and thiamine to prevent Wernicke’s (UpToDate, 2024).",
        es: "La cetoacidosis alcohólica se trata con glucosa y tiamina para evitar Wernicke (UpToDate, 2024)."
      }
    },
    {
      text: {
        pt: "Lactato elevado por sepse abdominal; iniciar norepinefrina e antibióticos",
        en: "Elevated lactate from abdominal sepsis; start norepinephrine and antibiotics",
        es: "Lactato elevado por sepsis abdominal; iniciar norepinefrina y antibióticos"
      },
      explanation: {
        pt: "Sepse é possível, mas não explica hálito cetônico, padrão respiratório ou anion gap típico.",
        en: "Sepsis is possible, but does not explain ketotic breath and typical anion gap.",
        es: "La sepsis es posible, pero no explica el aliento cetónico ni el anión gap."
      }
    }
  ]
},
{
  id: 708,
  code: "nephro03-q708",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "pneumo", "pneumo+icu"],
  topics: ["metabolic alkalosis"],
  level: "hard",
  correct: 1,
  question: {
    pt: "Mulher de 72 anos, com antecedente de doença de Parkinson, é admitida com fraqueza muscular progressiva, sonolência e episódios de vômito há 4 dias. Ao exame: PA 90x60 mmHg, FC 110 bpm, tempo de enchimento capilar 4s. Gasometria: pH 7,51, HCO₃⁻ 36 mEq/L, PaCO₂ 48 mmHg. Cloro sérico: 84 mEq/L, potássio: 2,9 mEq/L. Qual é o diagnóstico mais provável e a abordagem inicial correta?",
    en: "A 72-year-old woman with Parkinson’s disease is admitted with progressive muscle weakness, drowsiness, and vomiting for 4 days. Vitals: BP 90/60 mmHg, HR 110 bpm, capillary refill 4s. ABG: pH 7.51, HCO₃⁻ 36 mEq/L, PaCO₂ 48 mmHg. Chloride: 84 mEq/L, potassium: 2.9 mEq/L. What is the most likely diagnosis and appropriate initial management?",
    es: "Mujer de 72 años con enfermedad de Parkinson, ingresa con debilidad progresiva, somnolencia y vómitos hace 4 días. PA 90/60 mmHg, FC 110 lpm, llenado capilar 4s. GSA: pH 7,51, HCO₃⁻ 36, PaCO₂ 48. Cloro: 84, potasio: 2,9. ¿Cuál es el diagnóstico más probable y el manejo adecuado?"
  },
  options: [
    {
      text: {
        pt: "Alcalose metabólica hipocalêmica; iniciar diálise venosa contínua com solução ácida",
        en: "Hypokalemic metabolic alkalosis; start continuous venovenous dialysis with acid solution",
        es: "Alcalosis metabólica hipocalémica; iniciar TRRC con solución ácida"
      },
      explanation: {
        pt: "A paciente não está em sobrecarga volêmica ou em falência renal; diálise não é indicada.",
        en: "The patient is not volume overloaded or in renal failure; dialysis not indicated.",
        es: "No hay sobrecarga ni falla renal; la diálisis no está indicada."
      }
    },
    {
      text: {
        pt: "Alcalose metabólica por perdas gástricas e contração volêmica; iniciar hidratação com SF 0,9% e reposição de potássio",
        en: "Metabolic alkalosis due to gastric losses and volume contraction; start 0.9% saline and potassium",
        es: "Alcalosis metabólica por pérdidas gástricas y contracción de volumen; iniciar suero salino y potasio"
      },
      explanation: {
        pt: "Trata-se de alcalose por vômitos com hipocloremia e hipocalemia. A hidratação com SF 0,9% restaura volume e cloro, e a reposição de K⁺ corrige distúrbios eletrolíticos (Kraut & Madias, N Engl J Med, 2014).",
        en: "This is alkalosis from vomiting with hypochloremia and hypokalemia. Saline corrects volume and chloride, potassium corrects electrolytes (Kraut & Madias, NEJM 2014).",
        es: "Alcalosis por vómitos con hipocloremia e hipocalemia. El suero corrige volumen y cloro, y el potasio el desequilibrio (Kraut & Madias, NEJM 2014)."
      }
    },
    {
      text: {
        pt: "Alcalose respiratória compensada; observar e repetir gasometria",
        en: "Compensated respiratory alkalosis; observe and recheck ABG",
        es: "Alcalosis respiratoria compensada; observar y repetir GSA"
      },
      explanation: {
        pt: "A alcalose é primariamente metabólica, com retenção de CO₂ compensatória. Diagnóstico incorreto.",
        en: "This is a primary metabolic alkalosis with respiratory compensation. Diagnosis incorrect.",
        es: "Es una alcalosis metabólica primaria con compensación respiratoria. Diagnóstico erróneo."
      }
    },
    {
      text: {
        pt: "Alcalose mista com hipocalcemia; iniciar gluconato de cálcio EV",
        en: "Mixed alkalosis with hypocalcemia; start IV calcium gluconate",
        es: "Alcalosis mixta con hipocalcemia; iniciar gluconato cálcico IV"
      },
      explanation: {
        pt: "Não há hipocalcemia documentada, e a alcalose é explicada pelo quadro digestivo e perdas gástricas.",
        en: "No hypocalcemia is documented; alkalosis is due to GI losses.",
        es: "No hay hipocalcemia; la alcalosis se debe a pérdidas digestivas."
      }
    }
  ]
},
{
  id: 709,
  code: "nephro03-q709",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "pneumo", "pneumo+icu"],
  topics: ["respiratory acidosis"],
  level: "hard",
  correct: 0,
  question: {
    pt: "Homem de 69 anos com DPOC GOLD 3, internado por exacerbação infecciosa, evolui com piora do nível de consciência após uso de opioides e benzodiazepínicos para controle de agitação. Gasometria: pH 7,21, PaCO₂ 78 mmHg, HCO₃⁻ 31 mEq/L, PaO₂ 62 mmHg em máscara com reservatório. Qual a conduta mais apropriada neste cenário?",
    en: "A 69-year-old man with GOLD 3 COPD admitted for infectious exacerbation develops decreased consciousness after opioids and benzodiazepines were used for agitation. ABG: pH 7.21, PaCO₂ 78 mmHg, HCO₃⁻ 31 mEq/L, PaO₂ 62 mmHg on reservoir mask. What is the most appropriate management?",
    es: "Hombre de 69 años con EPOC GOLD 3 hospitalizado por exacerbación infecciosa presenta disminución del sensorio tras uso de opioides y benzodiacepinas. GSA: pH 7,21, PaCO₂ 78 mmHg, HCO₃⁻ 31, PaO₂ 62 con máscara con reservorio. ¿Cuál es la conducta más apropiada?"
  },
  options: [
    {
      text: {
        pt: "Iniciar ventilação não invasiva com monitorização clínica estreita",
        en: "Start non-invasive ventilation with close clinical monitoring",
        es: "Iniciar ventilación no invasiva con monitoreo clínico estrecho"
      },
      explanation: {
        pt: "Pacientes com acidose respiratória aguda hipercápnica por DPOC, especialmente com depressão de consciência leve-moderada, são candidatos à VNI (ERS/ATS 2020).",
        en: "Patients with acute hypercapnic respiratory acidosis due to COPD and mild-moderate reduced consciousness are candidates for NIV (ERS/ATS 2020).",
        es: "Pacientes con acidosis respiratoria hipercápnica aguda y sensorio levemente deprimido pueden recibir VNI (ERS/ATS 2020)."
      }
    },
    {
      text: {
        pt: "Administrar naloxona e flumazenil como terapia de reversão primária",
        en: "Administer naloxone and flumazenil as primary reversal therapy",
        es: "Administrar naloxona y flumazenilo como terapia primaria"
      },
      explanation: {
        pt: "Embora possíveis, essas medicações devem ser usadas com cautela e não substituem suporte ventilatório quando há acidose significativa.",
        en: "Although possible, these drugs require caution and do not replace ventilatory support when acidosis is significant.",
        es: "Posibles, pero no reemplazan el soporte ventilatorio cuando hay acidosis significativa."
      }
    },
    {
      text: {
        pt: "Intubar imediatamente e iniciar ventilação mecânica protetora",
        en: "Immediately intubate and start protective mechanical ventilation",
        es: "Intubar inmediatamente e iniciar ventilación mecánica protectora"
      },
      explanation: {
        pt: "A intubação pode ser necessária, mas deve ser reservada para falha da VNI ou piora neurológica evidente.",
        en: "Intubation may be needed, but should follow failure of NIV or worsening neurologic status.",
        es: "La intubación se reserva para fracaso de la VNI o deterioro neurológico."
      }
    },
    {
      text: {
        pt: "Reduzir suplementação de oxigênio para evitar hipoxemia permissiva",
        en: "Reduce oxygen supplementation to allow permissive hypoxemia",
        es: "Reducir oxígeno para permitir hipoxemia permisiva"
      },
      explanation: {
        pt: "O controle da hipercapnia não deve ser feito à custa de hipoxemia. O alvo de SpO₂ é 88-92% (GOLD 2023).",
        en: "Hypercapnia should not be corrected by allowing hypoxemia. SpO₂ target is 88–92% (GOLD 2023).",
        es: "La hipercapnia no debe corregirse con hipoxemia. La SpO₂ debe mantenerse entre 88–92% (GOLD 2023)."
      }
    }
  ]
},
{
  id: 710,
  code: "nephro03-q710",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "pneumo", "pneumo+icu"],
  topics: ["respiratory alkalosis"],
  level: "hard",
  correct: 2,
  question: {
    pt: "Mulher de 34 anos, previamente hígida, é admitida no pronto-socorro por crise de ansiedade grave e dispneia intensa. Após hiperventilar por cerca de 20 minutos, apresenta parestesias, espasmo carpopedal e tetania leve. Gasometria: pH 7,58, PaCO₂ 24 mmHg, HCO₃⁻ 20 mEq/L, PaO₂ 98 mmHg em ar ambiente. Qual o diagnóstico e conduta imediata mais adequada?",
    en: "A 34-year-old previously healthy woman is admitted with severe anxiety and intense dyspnea. After hyperventilating for about 20 minutes, she develops paresthesias, carpopedal spasm, and mild tetany. ABG: pH 7.58, PaCO₂ 24 mmHg, HCO₃⁻ 20 mEq/L, PaO₂ 98 mmHg on room air. What is the diagnosis and most appropriate immediate management?",
    es: "Mujer de 34 años, previamente sana, ingresa con crisis de ansiedad y disnea intensa. Tras hiperventilar durante 20 minutos, presenta parestesias, espasmo carpopedal y tetania leve. GSA: pH 7,58, PaCO₂ 24 mmHg, HCO₃⁻ 20 mEq/L, PaO₂ 98 mmHg en aire ambiente. ¿Cuál es el diagnóstico y la conducta inmediata más adecuada?"
  },
  options: [
    {
      text: {
        pt: "Acidose respiratória compensada; iniciar ventilação não invasiva",
        en: "Compensated respiratory acidosis; start non-invasive ventilation",
        es: "Acidosis respiratoria compensada; iniciar ventilación no invasiva"
      },
      explanation: {
        pt: "A paciente está em alcalose respiratória, não acidose. O padrão gasométrico é típico de hiperventilação aguda.",
        en: "This is respiratory alkalosis, not acidosis. ABG matches acute hyperventilation.",
        es: "Es una alcalosis respiratoria, no acidosis. El patrón coincide con hiperventilación aguda."
      }
    },
    {
      text: {
        pt: "Alcalose metabólica aguda; iniciar reposição de cloreto",
        en: "Acute metabolic alkalosis; begin chloride repletion",
        es: "Alcalosis metabólica aguda; reponer cloro"
      },
      explanation: {
        pt: "A alcalose é respiratória. Cloro não é a base do distúrbio.",
        en: "This is respiratory alkalosis; chloride does not address the underlying issue.",
        es: "Es alcalosis respiratoria; el cloro no corrige el problema."
      }
    },
    {
      text: {
        pt: "Alcalose respiratória aguda por hiperventilação; interromper estímulo e considerar sedação leve com benzodiazepínico",
        en: "Acute respiratory alkalosis due to hyperventilation; stop stimulus and consider mild sedation",
        es: "Alcalosis respiratoria aguda por hiperventilación; retirar estímulo y considerar sedación leve"
      },
      explanation: {
        pt: "O manejo da hiperventilação inclui remoção do gatilho e, se necessário, sedação leve. Evita-se sedação profunda ou VM invasiva desnecessária (Bourke et al., Thorax 2021).",
        en: "Management includes removing the trigger and light sedation. Deep sedation or ventilation is not advised (Bourke et al., Thorax 2021).",
        es: "Se retira el estímulo y puede usarse sedación leve. Evitar VM innecesaria (Bourke et al., Thorax 2021)."
      }
    },
    {
      text: {
        pt: "Alcalose mista; iniciar ventilação mecânica com sedação profunda",
        en: "Mixed alkalosis; begin mechanical ventilation and deep sedation",
        es: "Alcalosis mixta; iniciar ventilación mecánica y sedación profunda"
      },
      explanation: {
        pt: "Não há evidência de distúrbio misto, e sedação profunda pode causar depressão respiratória desnecessária.",
        en: "No mixed disorder is present; deep sedation risks unnecessary respiratory depression.",
        es: "No hay alcalosis mixta; la sedación profunda puede ser perjudicial."
      }
    }
  ]
},

];
questionBank.addBank(bancoNephroDificil);
