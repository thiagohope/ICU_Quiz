const bancoNephroModerate = [
  {
    id: 611,
    code: "nephro02-q01",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["aki staging", "kdigo"],
    level: "moderate",
    correct: 2,
    question: {
      pt: "Segundo os critérios KDIGO, qual é o estágio 3 da lesão renal aguda (LRA)?",
      en: "According to KDIGO criteria, what defines stage 3 acute kidney injury (AKI)?",
      es: "Según los criterios KDIGO, ¿qué define la etapa 3 de lesión renal aguda (LRA)?"
    },
    options: [
      {
        text: {
          pt: "Aumento da creatinina ≥ 0,3 mg/dL em 48h",
          en: "Creatinine increase ≥ 0.3 mg/dL in 48h",
          es: "Aumento de creatinina ≥ 0.3 mg/dL en 48h"
        },
        explanation: {
          pt: "Esse é critério para estágio 1, não 3.",
          en: "This defines stage 1, not stage 3.",
          es: "Esto define la etapa 1, no la 3."
        }
      },
      {
        text: {
          pt: "Creatinina ≥ 1,5x valor basal em até 7 dias",
          en: "Creatinine ≥ 1.5x baseline in 7 days",
          es: "Creatinina ≥ 1.5x del valor basal en 7 días"
        },
        explanation: {
          pt: "Critério típico do estágio 1 de LRA.",
          en: "This is a stage 1 criterion.",
          es: "Este es un criterio de etapa 1."
        }
      },
      {
        text: {
          pt: "Aumento ≥ 3x da creatinina basal ou início de diálise",
          en: "Increase ≥ 3x baseline creatinine or dialysis initiation",
          es: "Aumento ≥ 3x creatinina basal o inicio de diálisis"
        },
        explanation: {
          pt: "Esse é critério KDIGO para estágio 3 da LRA.",
          en: "This defines stage 3 AKI per KDIGO.",
          es: "Esto define la etapa 3 de LRA según KDIGO."
        }
      },
      {
        text: {
          pt: "Débito urinário < 0,5 mL/kg/h por 6h",
          en: "Urine output < 0.5 mL/kg/h for 6h",
          es: "Diuresis < 0.5 mL/kg/h por 6h"
        },
        explanation: {
          pt: "Esse critério corresponde ao estágio 1 de oligúria.",
          en: "This reflects stage 1 oliguria.",
          es: "Corresponde a la etapa 1 de oliguria."
        }
      }
    ]
  },
  {
    id: 612,
    code: "nephro02-q02",
    areas: ["nephro", "nephro+icu", "icu", "medicine", "rrt"],
    topics: ["renal replacement therapy", "crrt"],
    level: "moderate",
    correct: 1,
    question: {
      pt: "Qual das seguintes opções descreve corretamente a modalidade CVVH na terapia contínua de substituição renal?",
      en: "Which of the following correctly describes CVVH in continuous renal replacement therapy (CRRT)?",
      es: "¿Cuál de las siguientes describe correctamente la CVVH en terapia de reemplazo renal continua (CRRT)?"
    },
    options: [
      {
        text: {
          pt: "Utiliza difusão como principal mecanismo de depuração",
          en: "Uses diffusion as the main clearance mechanism",
          es: "Utiliza la difusión como mecanismo principal de depuración"
        },
        explanation: {
          pt: "Esse é o mecanismo principal na CVVHD, não CVVH.",
          en: "This applies to CVVHD, not CVVH.",
          es: "Esto corresponde a la CVVHD, no a la CVVH."
        }
      },
      {
        text: {
          pt: "Utiliza convecção e reposição de volume por via pós-filtro",
          en: "Uses convection and post-filter fluid replacement",
          es: "Utiliza convección y reposición de volumen post-filtro"
        },
        explanation: {
          pt: "CVVH usa convecção e pode usar reposição pós-filtro.",
          en: "CVVH works via convection and can use post-filter replacement.",
          es: "La CVVH utiliza convección y reposición post-filtro."
        }
      },
      {
        text: {
          pt: "É preferencialmente indicada para pacientes com hiponatremia",
          en: "Preferably indicated for patients with hyponatremia",
          es: "Preferentemente indicada para pacientes con hiponatremia"
        },
        explanation: {
          pt: "Não há indicação específica para hiponatremia.",
          en: "Not specifically indicated for hyponatremia.",
          es: "No está específicamente indicada para hiponatremia."
        }
      },
      {
        text: {
          pt: "Tem maior eficiência na remoção de pequenas moléculas que CVVHD",
          en: "More efficient in removing small molecules than CVVHD",
          es: "Más eficiente en eliminar moléculas pequeñas que la CVVHD"
        },
        explanation: {
          pt: "Difusão (CVVHD) remove melhor moléculas pequenas que convecção (CVVH).",
          en: "Diffusion (CVVHD) is more efficient for small molecules than convection.",
          es: "La difusión (CVVHD) es mejor para moléculas pequeñas que la convección (CVVH)."
        }
      }
    ]
  },
  {
    id: 613,
    code: "nephro02-q03",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["electrolyte imbalance", "ecg"],
    level: "moderate",
    correct: 3,
    question: {
      pt: "Em um paciente com hipercalemia grave, qual sequência terapêutica imediata está CORRETA?",
      en: "In a patient with severe hyperkalemia, which immediate therapeutic sequence is CORRECT?",
      es: "En un paciente con hipercalemia grave, ¿cuál es la secuencia terapéutica inmediata CORRECTA?"
    },
    options: [
      {
        text: {
          pt: "Soro fisiológico, insulina, cálcio",
          en: "Saline, insulin, calcium",
          es: "Salina, insulina, calcio"
        },
        explanation: {
          pt: "Cálcio deve ser administrado primeiro para estabilizar membrana.",
          en: "Calcium should be given first to stabilize membranes.",
          es: "El calcio se debe administrar primero para estabilizar membranas."
        }
      },
      {
        text: {
          pt: "Glicose, beta-bloqueador, bicarbonato",
          en: "Glucose, beta-blocker, bicarbonate",
          es: "Glucosa, betabloqueador, bicarbonato"
        },
        explanation: {
          pt: "Beta-bloqueadores pioram hipercalemia, não são terapêuticos.",
          en: "Beta-blockers worsen hyperkalemia.",
          es: "Los betabloqueantes empeoran la hipercalemia."
        }
      },
      {
        text: {
          pt: "Furosemida, bicarbonato, corticoide",
          en: "Furosemide, bicarbonate, steroid",
          es: "Furosemida, bicarbonato, corticoide"
        },
        explanation: {
          pt: "Essa sequência não é adequada em hipercalemia com risco imediato.",
          en: "Not the proper sequence in immediate hyperkalemia threat.",
          es: "No es la secuencia adecuada ante riesgo inmediato."
        }
      },
      {
        text: {
          pt: "Gluconato de cálcio, insulina com glicose, beta-agonista",
          en: "Calcium gluconate, insulin with glucose, beta-agonist",
          es: "Gluconato de calcio, insulina con glucosa, betaagonista"
        },
        explanation: {
          pt: "Sequência correta: estabilizar membrana, depois deslocar potássio para o intracelular.",
          en: "Correct sequence: membrane stabilization, then intracellular potassium shift.",
          es: "Secuencia correcta: estabilizar membrana y luego desplazar potasio al intracelular."
        }
      }
    ]
  },
    {
    id: 614,
    code: "nephro02-q04",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["fluid balance", "oliguria"],
    level: "moderate",
    correct: 0,
    question: {
      pt: "Qual das seguintes estratégias é mais adequada para avaliar sobrecarga hídrica em paciente com LRA oligúrica na UTI?",
      en: "Which of the following is the most appropriate strategy to assess fluid overload in an oliguric ICU patient with AKI?",
      es: "¿Cuál de las siguientes estrategias es más adecuada para evaluar sobrecarga hídrica en un paciente oligúrico con LRA en UCI?"
    },
    options: [
      {
        text: {
          pt: "Avaliação de balanço hídrico cumulativo e ultrassom de pulmão",
          en: "Cumulative fluid balance and lung ultrasound",
          es: "Balance hídrico acumulado y ecografía pulmonar"
        },
        explanation: {
          pt: "A associação de balanço hídrico com achados de congestão à USG pulmonar é prática e eficaz.",
          en: "Combining fluid balance with lung ultrasound for congestion is practical and effective.",
          es: "Combinar balance hídrico con ecografía pulmonar es práctico y eficaz."
        }
      },
      {
        text: {
          pt: "Peso corporal isolado",
          en: "Body weight alone",
          es: "Peso corporal solo"
        },
        explanation: {
          pt: "Variações de peso são úteis, mas insuficientes isoladamente.",
          en: "Weight variations help but are insufficient alone.",
          es: "Las variaciones de peso ayudan, pero no bastan por sí solas."
        }
      },
      {
        text: {
          pt: "Frequência respiratória",
          en: "Respiratory rate",
          es: "Frecuencia respiratoria"
        },
        explanation: {
          pt: "Pode refletir desconforto, mas é inespecífico para sobrecarga.",
          en: "May reflect distress but is nonspecific for fluid overload.",
          es: "Puede reflejar disconfort, pero es inespecífica para sobrecarga."
        }
      },
      {
        text: {
          pt: "Pressão arterial média (PAM)",
          en: "Mean arterial pressure (MAP)",
          es: "Presión arterial media (PAM)"
        },
        explanation: {
          pt: "Não é um marcador confiável isolado para status volêmico.",
          en: "Not a reliable standalone marker of volume status.",
          es: "No es marcador confiable de estado de volumen por sí solo."
        }
      }
    ]
  },
  {
    id: 615,
    code: "nephro02-q05",
    areas: ["nephro", "nephro+icu", "icu", "medicine", "rrt"],
    topics: ["rrt", "vascular access"],
    level: "moderate",
    correct: 2,
    question: {
      pt: "Qual das seguintes opções representa o melhor sítio de acesso vascular para terapia renal substitutiva contínua (CRRT) em pacientes críticos?",
      en: "Which of the following is the best vascular access site for continuous renal replacement therapy (CRRT) in critically ill patients?",
      es: "¿Cuál de los siguientes es el mejor sitio de acceso vascular para CRRT en pacientes críticos?"
    },
    options: [
      {
        text: {
          pt: "Veia femoral esquerda em decúbito dorsal",
          en: "Left femoral vein in supine position",
          es: "Vena femoral izquierda en decúbito supino"
        },
        explanation: {
          pt: "Menor fluxo, maior risco de infecção e trombose comparado à direita.",
          en: "Lower flow and higher infection risk than right-sided access.",
          es: "Flujo menor y más riesgo de infección que acceso derecho."
        }
      },
      {
        text: {
          pt: "Veia subclávia esquerda com cateter curto",
          en: "Left subclavian vein with short catheter",
          es: "Vena subclavia izquierda con catéter corto"
        },
        explanation: {
          pt: "Subclávia deve ser evitada por risco de estenose venosa central.",
          en: "Subclavian site avoided due to central venous stenosis risk.",
          es: "Evitar subclavia por riesgo de estenosis venosa central."
        }
      },
      {
        text: {
          pt: "Veia jugular interna direita com cateter duplo lúmen",
          en: "Right internal jugular vein with dual-lumen catheter",
          es: "Vena yugular interna derecha con catéter de doble lumen"
        },
        explanation: {
          pt: "É o acesso preferido para RRT: posição, fluxo e menor risco de complicações.",
          en: "Preferred RRT access site: good flow and low complication risk.",
          es: "Sitio preferido para TRR: buen flujo y bajo riesgo de complicaciones."
        }
      },
      {
        text: {
          pt: "Veia basílica com cateter periférico",
          en: "Basilic vein with peripheral catheter",
          es: "Vena basílica con catéter periférico"
        },
        explanation: {
          pt: "Não atinge os fluxos exigidos para RRT em pacientes críticos.",
          en: "Cannot provide necessary flow for CRRT in critically ill.",
          es: "No proporciona flujo adecuado para TRR en críticos."
        }
      }
    ]
  },
{
    id: 616,
    code: "nephro02-q06",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["fluid balance", "icu monitoring"],
    level: "moderate",
    correct: 1,
    question: {
      pt: "Qual dos seguintes métodos auxilia na avaliação da responsividade volêmica em pacientes críticos com risco de LRA?",
      en: "Which of the following methods helps assess fluid responsiveness in critically ill patients at risk of AKI?",
      es: "¿Cuál de los siguientes métodos ayuda a evaluar la respuesta a fluidos en pacientes críticos con riesgo de LRA?"
    },
    options: [
      {
        text: {
          pt: "Pressão arterial média estática",
          en: "Static mean arterial pressure",
          es: "Presión arterial media estática"
        },
        explanation: {
          pt: "Valores isolados de PAM não preveem resposta à infusão volêmica.",
          en: "Static MAP values do not predict fluid responsiveness.",
          es: "Los valores de PAM estáticos no predicen la respuesta a fluidos."
        }
      },
      {
        text: {
          pt: "Variação do diâmetro da veia cava inferior com respiração",
          en: "Respiratory variation of inferior vena cava diameter",
          es: "Variación respiratoria del diámetro de la vena cava inferior"
        },
        explanation: {
          pt: "É método dinâmico usado amplamente para avaliar responsividade a fluidos.",
          en: "Widely used dynamic method to assess fluid responsiveness.",
          es: "Método dinámico ampliamente usado para evaluar respuesta a fluidos."
        }
      },
      {
        text: {
          pt: "Sódio urinário isolado",
          en: "Isolated urinary sodium",
          es: "Sodio urinario aislado"
        },
        explanation: {
          pt: "Pode ter valor diagnóstico, mas não para prever resposta a volume.",
          en: "Helpful diagnostically, but not for volume response prediction.",
          es: "Útil en diagnóstico, pero no predice respuesta a volumen."
        }
      },
      {
        text: {
          pt: "Valor absoluto de creatinina",
          en: "Absolute creatinine value",
          es: "Valor absoluto de creatinina"
        },
        explanation: {
          pt: "Ajuda a avaliar gravidade da LRA, mas não resposta a fluidos.",
          en: "Assesses AKI severity, not fluid responsiveness.",
          es: "Evalúa la severidad de LRA, no la respuesta a fluidos."
        }
      }
    ]
  },
  {
    id: 617,
    code: "nephro02-q07",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["hypernatremia", "electrolyte correction"],
    level: "moderate",
    correct: 0,
    question: {
      pt: "Em paciente com hipernatremia crônica, qual é o risco de uma correção rápida?",
      en: "In a patient with chronic hypernatremia, what is the risk of rapid correction?",
      es: "En un paciente con hipernatremia crónica, ¿cuál es el riesgo de una corrección rápida?"
    },
    options: [
      {
        text: {
          pt: "Edema cerebral",
          en: "Cerebral edema",
          es: "Edema cerebral"
        },
        explanation: {
          pt: "A correção rápida em hipernatremia crônica pode levar a edema cerebral grave.",
          en: "Rapid correction in chronic hypernatremia may cause cerebral edema.",
          es: "La corrección rápida en hipernatremia crónica puede causar edema cerebral."
        }
      },
      {
        text: {
          pt: "Síndrome de lise tumoral",
          en: "Tumor lysis syndrome",
          es: "Síndrome de lisis tumoral"
        },
        explanation: {
          pt: "Não está associada diretamente à correção de sódio.",
          en: "Not directly associated with sodium correction.",
          es: "No está directamente asociada a la corrección de sodio."
        }
      },
      {
        text: {
          pt: "Pneumotórax hipertensivo",
          en: "Tension pneumothorax",
          es: "Neumotórax a tensión"
        },
        explanation: {
          pt: "Sem relação com distúrbios de sódio.",
          en: "Unrelated to sodium disorders.",
          es: "No relacionado con trastornos del sodio."
        }
      },
      {
        text: {
          pt: "Rabdomiólise",
          en: "Rhabdomyolysis",
          es: "Rabdomiólisis"
        },
        explanation: {
          pt: "Pode ocorrer em hipernatremia grave, mas não é causada pela correção rápida.",
          en: "May occur in severe hypernatremia, not due to rapid correction.",
          es: "Puede presentarse en hipernatremia grave, pero no por corrección rápida."
        }
      }
    ]
  },
  {
    id: 618,
    code: "nephro02-q08",
    areas: ["nephro", "nephro+icu", "icu", "medicine", "rrt"],
    topics: ["rrt", "anticoagulation"],
    level: "moderate",
    correct: 3,
    question: {
      pt: "Qual é a principal vantagem da anticoagulação regional com citrato na CRRT?",
      en: "What is the main advantage of regional citrate anticoagulation in CRRT?",
      es: "¿Cuál es la principal ventaja de la anticoagulación regional con citrato en CRRT?"
    },
    options: [
      {
        text: {
          pt: "Aumenta o tempo de meia-vida do filtro",
          en: "Increases filter half-life",
          es: "Aumenta la vida útil del filtro"
        },
        explanation: {
          pt: "Verdadeiro, mas não é a principal vantagem clínica.",
          en: "True, but not the key clinical advantage.",
          es: "Cierto, pero no es la ventaja clínica principal."
        }
      },
      {
        text: {
          pt: "Melhora a perfusão esplâncnica",
          en: "Improves splanchnic perfusion",
          es: "Mejora la perfusión esplácnica"
        },
        explanation: {
          pt: "Não há evidência clara para essa associação.",
          en: "No clear evidence supports this.",
          es: "No hay evidencia clara de esto."
        }
      },
      {
        text: {
          pt: "Reduz hipernatremia em pacientes sépticos",
          en: "Reduces hypernatremia in septic patients",
          es: "Reduce la hipernatremia en pacientes sépticos"
        },
        explanation: {
          pt: "O citrato não está relacionado à regulação de sódio.",
          en: "Citrate is not linked to sodium regulation.",
          es: "El citrato no regula el sodio."
        }
      },
      {
        text: {
          pt: "Menor risco de sangramento sistêmico",
          en: "Lower risk of systemic bleeding",
          es: "Menor riesgo de sangrado sistémico"
        },
        explanation: {
          pt: "Principal benefício do citrato é restringir anticoagulação ao circuito extracorpóreo.",
          en: "Main benefit is localized anticoagulation avoiding systemic effects.",
          es: "Principal ventaja: anticoagulación localizada sin efectos sistémicos."
        }
      }
    ]
  },
  {
    id: 619,
    code: "nephro02-q09",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["drug dosing", "renal failure"],
    level: "moderate",
    correct: 1,
    question: {
      pt: "Qual princípio deve guiar o ajuste de antibióticos em pacientes com LRA na UTI?",
      en: "Which principle should guide antibiotic adjustment in ICU patients with AKI?",
      es: "¿Qué principio debe guiar el ajuste de antibióticos en pacientes con LRA en UCI?"
    },
    options: [
      {
        text: {
          pt: "Reduzir todas as doses pela metade",
          en: "Halve all doses",
          es: "Reducir todas las dosis a la mitad"
        },
        explanation: {
          pt: "Não é uma regra segura — o ajuste depende da droga e da função renal.",
          en: "Not a safe rule — adjustment depends on drug and renal function.",
          es: "No es una regla segura — depende del fármaco y función renal."
        }
      },
      {
        text: {
          pt: "Basear-se na farmacocinética e farmacodinâmica específicas da droga",
          en: "Base it on the drug’s pharmacokinetics and pharmacodynamics",
          es: "Basarse en la farmacocinética y farmacodinámica de cada fármaco"
        },
        explanation: {
          pt: "É o princípio correto para ajustar antibióticos em LRA.",
          en: "Correct principle to adjust antibiotics in AKI.",
          es: "Principio correcto para ajustar antibióticos en LRA."
        }
      },
      {
        text: {
          pt: "Evitar uso de antibióticos nefrotóxicos independentemente do risco-benefício",
          en: "Avoid nephrotoxic antibiotics regardless of risk-benefit",
          es: "Evitar antibióticos nefrotóxicos sin considerar el riesgo-beneficio"
        },
        explanation: {
          pt: "Nefrotoxicidade deve ser ponderada, mas pode ser aceitável em infecções graves.",
          en: "Nephrotoxicity must be balanced with clinical need.",
          es: "La nefrotoxicidad debe valorarse según el contexto clínico."
        }
      },
      {
        text: {
          pt: "Suspender antibióticos até normalizar função renal",
          en: "Hold antibiotics until renal function normalizes",
          es: "Suspender antibióticos hasta normalizar función renal"
        },
        explanation: {
          pt: "Essa conduta é incorreta e perigosa em sepse e infecções graves.",
          en: "This is unsafe and inappropriate in sepsis.",
          es: "Inseguro y errado en sepsis o infecciones graves."
        }
      }
    ]
  },
  {
    id: 620,
    code: "nephro02-q10",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["nephrotoxicity", "contrast-induced aki"],
    level: "moderate",
    correct: 0,
    question: {
      pt: "Qual das seguintes medidas é recomendada para reduzir o risco de nefropatia induzida por contraste em pacientes críticos?",
      en: "Which of the following is recommended to reduce the risk of contrast-induced nephropathy in critically ill patients?",
      es: "¿Cuál de las siguientes se recomienda para reducir el riesgo de nefropatía por contraste en pacientes críticos?"
    },
    options: [
      {
        text: {
          pt: "Hidratação com soro fisiológico antes e após o contraste",
          en: "Hydration with normal saline before and after contrast",
          es: "Hidratación con salina antes y después del contraste"
        },
        explanation: {
          pt: "É a principal medida preventiva da LRA por contraste.",
          en: "Main preventive strategy for contrast-induced AKI.",
          es: "Principal estrategia para prevenir LRA por contraste."
        }
      },
      {
        text: {
          pt: "Uso profilático de diuréticos de alça",
          en: "Prophylactic loop diuretics",
          es: "Diuréticos de asa profilácticos"
        },
        explanation: {
          pt: "Podem piorar o risco de lesão renal, não são indicados profilaticamente.",
          en: "May worsen AKI risk, not recommended as prophylaxis.",
          es: "Pueden empeorar el riesgo de LRA, no se recomiendan como profilaxis."
        }
      },
      {
        text: {
          pt: "Evitar qualquer contraste iodado",
          en: "Avoid any iodinated contrast",
          es: "Evitar cualquier contraste yodado"
        },
        explanation: {
          pt: "Nem sempre possível — deve-se minimizar riscos, não evitar sempre.",
          en: "Not always feasible — risk mitigation is key.",
          es: "No siempre factible — hay que minimizar riesgos, no evitar todo."
        }
      },
      {
        text: {
          pt: "Usar bicarbonato de sódio como única medida preventiva",
          en: "Use sodium bicarbonate as sole preventive measure",
          es: "Usar bicarbonato como única medida preventiva"
        },
        explanation: {
          pt: "Pode ser usado junto à hidratação, mas não isoladamente.",
          en: "Can be used alongside hydration, not alone.",
          es: "Puede usarse junto con hidratación, pero no solo."
        }
      }
    ]
  },
];
questionBank.addBank(bancoNephroModerate);