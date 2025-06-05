const bancoNephroDificilima = [
  {
    id: 701,
    code: "nephro04-q701",
    areas: ["nephro", "nephro+icu", "icu", "medicine"],
    topics: ["acute kidney injury", "biomarkers", "sepsis", "renal perfusion", "early diagnosis"],
    level: "very_hard",
    correct: 4,
    question: {
      pt: "Homem de 62 anos, com hipertensão e insuficiência cardíaca (FEVE 38%), é admitido por pneumonia grave e choque séptico. Está em noradrenalina (0,2 mcg/kg/min), antibioticoterapia e volume guiado por ecocardiograma. Após 24h, apresenta oligúria persistente, creatinina de 1,9 mg/dL (prévia 1,4), ureia 88 mg/dL, relação ureia/creatinina >45, FeNa <1%, cistatina C elevada e NGAL plasmático positivo. Sobre esse caso, todas as alternativas são verdadeiras, **exceto**:",
      en: "A 62-year-old man with hypertension and heart failure (LVEF 38%) is admitted with severe pneumonia and septic shock. He is on norepinephrine (0.2 mcg/kg/min), antibiotics, and volume guided by echocardiography. After 24h, he develops persistent oliguria, creatinine 1.9 mg/dL (baseline 1.4), BUN 88 mg/dL, BUN/creatinine ratio >45, FeNa <1%, elevated cystatin C, and positive plasma NGAL. All of the following are true, **except**:",
      es: "Hombre de 62 años con hipertensión e insuficiencia cardíaca (FEVI 38%) es ingresado por neumonía grave y shock séptico. Está en noradrenalina (0,2 mcg/kg/min), antibióticos y volumen guiado por ecocardiograma. Después de 24h, presenta oliguria persistente, creatinina de 1,9 mg/dL (previa 1,4), urea 88 mg/dL, relación urea/creatinina >45, FeNa <1%, cistatina C elevada y NGAL plasmático positivo. Todas las siguientes son verdaderas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A relação ureia/creatinina >45 e FeNa <1% sugerem hipoperfusão renal.",
          en: "BUN/creatinine ratio >45 and FeNa <1% suggest renal hypoperfusion.",
          es: "Relación urea/creatinina >45 y FeNa <1% sugieren hipoperfusión renal."
        },
        explanation: {
          pt: "Esses achados são clássicos de LRA pré-renal, mas devem ser interpretados com cautela em pacientes sépticos. (Palevsky PM et al., N Engl J Med 2008)",
          en: "These findings are classic for prerenal AKI but should be cautiously interpreted in septic patients. (Palevsky PM et al., N Engl J Med 2008)",
          es: "Estos hallazgos son típicos de IRA prerrenal, pero requieren interpretación cautelosa en sepsis. (Palevsky PM et al., N Engl J Med 2008)"
        }
      },
      {
        text: {
          pt: "A cistatina C é um marcador precoce de disfunção glomerular, superior à creatinina em muitos contextos.",
          en: "Cystatin C is an early marker of glomerular dysfunction, often superior to creatinine.",
          es: "La cistatina C es un marcador temprano de disfunción glomerular, a menudo superior a la creatinina."
        },
        explanation: {
          pt: "Menos influenciada por massa muscular, cistatina C antecipa alterações da taxa de filtração. (Shlipak MG et al., N Engl J Med 2013)",
          en: "Less affected by muscle mass, cystatin C anticipates filtration changes. (Shlipak MG et al., N Engl J Med 2013)",
          es: "Menos afectada por la masa muscular, anticipa alteraciones de filtrado. (Shlipak MG et al., N Engl J Med 2013)"
        }
      },
      {
        text: {
          pt: "NGAL plasmático elevado indica lesão tubular precoce, mesmo antes da creatinina subir.",
          en: "Elevated plasma NGAL indicates early tubular injury, even before creatinine rises.",
          es: "NGAL plasmático elevado indica lesión tubular precoz, incluso antes del aumento de creatinina."
        },
        explanation: {
          pt: "NGAL é altamente sensível para LRA inicial, especialmente em contexto séptico. (Haase M et al., Crit Care 2009)",
          en: "NGAL is highly sensitive for early AKI, particularly in sepsis. (Haase M et al., Crit Care 2009)",
          es: "NGAL es muy sensible para IRA temprana, especialmente en sepsis. (Haase M et al., Crit Care 2009)"
        }
      },
      {
        text: {
          pt: "A avaliação combinada de NGAL e cistatina C aumenta a precisão na detecção precoce de LRA.",
          en: "Combined use of NGAL and cystatin C improves early AKI detection accuracy.",
          es: "El uso conjunto de NGAL y cistatina C mejora la precisión diagnóstica de IRA precoz."
        },
        explanation: {
          pt: "Modelos combinando biomarcadores têm maior sensibilidade e valor prognóstico. (Endre ZH et al., Kidney Int 2011)",
          en: "Combined biomarkers provide greater sensitivity and prognostic value. (Endre ZH et al., Kidney Int 2011)",
          es: "La combinación de biomarcadores mejora la sensibilidad y el valor pronóstico. (Endre ZH et al., Kidney Int 2011)"
        }
      },
      {
        text: {
          pt: "Mesmo elevação leve de creatinina requer diálise imediata, especialmente na presença de biomarcadores positivos.",
          en: "Even mild creatinine rise mandates immediate dialysis, especially with positive biomarkers.",
          es: "Incluso un aumento leve de creatinina exige diálisis inmediata, especialmente con biomarcadores positivos."
        },
        explanation: {
          pt: "**INCORRETA.** O início da terapia substitutiva renal depende de critérios clínicos (hipercalemia, sobrecarga, acidose, uremia), não apenas da creatinina ou biomarcadores. (Kellum JA et al., Crit Care 2012)",
          en: "**INCORRECT.** Dialysis initiation depends on clinical criteria (hyperkalemia, overload, acidosis, uremia), not just creatinine or biomarkers. (Kellum JA et al., Crit Care 2012)",
          es: "**INCORRECTA.** La indicación de diálisis depende de criterios clínicos (hiperpotasemia, sobrecarga, acidosis, uremia), no solo de la creatinina. (Kellum JA et al., Crit Care 2012)"
        }
      }
    ]
  },
{
  id: 702,
  code: "nephro04-q702",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "hematology"],
  topics: ["sepsis", "thrombotic microangiopathy", "renal injury", "ADAMTS13", "plasma exchange"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Mulher de 48 anos, previamente hígida, é admitida na UTI com choque séptico por pneumonia. Após 72h, apresenta piora da função renal (creatinina de 0,8 para 3,6 mg/dL), plaquetopenia (de 210.000 para 49.000), anemia (Hb 7,8 g/dL), elevação de DHL e presença de esquizócitos no sangue periférico. Está hemodinamicamente estável, sem sangramento evidente. ADAMTS13 = 38%, coombs direto negativo. Sobre esse quadro, todas as alternativas abaixo são verdadeiras, **exceto**:",
    en: "A 48-year-old previously healthy woman is admitted to the ICU with septic shock due to pneumonia. After 72h, she develops worsening kidney function (creatinine from 0.8 to 3.6 mg/dL), thrombocytopenia (from 210,000 to 49,000), anemia (Hb 7.8 g/dL), elevated LDH, and schistocytes on peripheral smear. She is hemodynamically stable with no evident bleeding. ADAMTS13 = 38%, direct Coombs test negative. Regarding this condition, all statements below are true, **except**:",
    es: "Mujer de 48 años, previamente sana, es admitida en UCI por shock séptico por neumonía. Tras 72h, desarrolla deterioro renal (creatinina de 0,8 a 3,6 mg/dL), trombocitopenia (de 210.000 a 49.000), anemia (Hb 7,8 g/dL), DHL elevada y esquizócitos en frotis. Está hemodinámicamente estable, sin sangrado evidente. ADAMTS13 = 38%, Coombs directo negativo. Con respecto a este cuadro, todas las afirmaciones son verdaderas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "O achado de esquizócitos e DHL elevada sugere microangiopatia trombótica (TMA) como causa da lesão renal aguda.",
        en: "The presence of schistocytes and elevated LDH suggests thrombotic microangiopathy (TMA) as the cause of AKI.",
        es: "La presencia de esquizócitos y DHL elevada sugiere microangiopatía trombótica (TMA) como causa de IRA."
      },
      explanation: {
        pt: "Esquizócitos + anemia hemolítica + plaquetopenia com disfunção renal são marcadores clássicos de TMA. (George JN et al., Blood 2014)",
        en: "Schistocytes + hemolytic anemia + thrombocytopenia with AKI are classic TMA findings. (George JN et al., Blood 2014)",
        es: "Esquizócitos + anemia hemolítica + trombocitopenia con IRA son hallazgos clásicos de TMA. (George JN et al., Blood 2014)"
      }
    },
    {
      text: {
        pt: "Níveis de ADAMTS13 >10% tornam PTT clássico improvável, mas não excluem formas secundárias de TMA.",
        en: "ADAMTS13 >10% makes classic TTP unlikely but does not exclude secondary TMAs.",
        es: "ADAMTS13 >10% hace improbable el PTT clásico, pero no excluye TMAs secundarias."
      },
      explanation: {
        pt: "PTT adquirido costuma ter ADAMTS13 <10%. Valores intermediários ocorrem em sepse e SHU. (Joly BS et al., Lancet Haematol 2017)",
        en: "Acquired TTP usually has ADAMTS13 <10%. Intermediate values are seen in sepsis and HUS. (Joly BS et al., Lancet Haematol 2017)",
        es: "El PTT adquirido suele tener ADAMTS13 <10%. Valores intermedios ocurren en sepsis y SHU. (Joly BS et al., Lancet Haematol 2017)"
      }
    },
    {
      text: {
        pt: "A biópsia renal deve ser realizada de rotina antes de considerar plasmaférese em pacientes com LRA e anemia hemolítica.",
        en: "Renal biopsy should routinely be performed before considering plasma exchange in patients with AKI and hemolytic anemia.",
        es: "La biopsia renal debe realizarse de forma rutinaria antes de considerar plasmaféresis en pacientes con IRA y anemia hemolítica."
      },
      explanation: {
        pt: "**INCORRETA.** A biópsia não é obrigatória nem recomendada de rotina nesse contexto. O tratamento com plasmaférese pode ser iniciado empiricamente quando há forte suspeita de TMA, especialmente se há disfunção orgânica e achados laboratoriais compatíveis. (Zhou J et al., Kidney Int 2021; ASFA guidelines 2019)",
        en: "**INCORRECT.** Renal biopsy is not mandatory and is not routinely recommended. Plasma exchange may be initiated empirically in suspected TMA with organ dysfunction. (Zhou J et al., Kidney Int 2021; ASFA 2019)",
        es: "**INCORRECTA.** La biopsia renal no es obligatoria ni recomendada de forma rutinaria. La plasmaféresis puede iniciarse empíricamente en sospecha de TMA con disfunción orgánica. (Zhou J et al., Kidney Int 2021; ASFA 2019)"
      }
    },
    {
      text: {
        pt: "A ausência de sangramentos e Coombs negativo são compatíveis com anemia microangiopática trombótica.",
        en: "Lack of bleeding and negative Coombs are consistent with thrombotic microangiopathic anemia.",
        es: "La ausencia de sangrado y Coombs negativo son compatibles con anemia microangiopática trombótica."
      },
      explanation: {
        pt: "Coombs negativo ajuda a diferenciar hemólise imune de microangiopática. Hemorragia ativa não é comum em TMA. (George JN et al., Blood 2014)",
        en: "Negative Coombs helps distinguish immune from microangiopathic hemolysis. Active bleeding is uncommon in TMA. (George JN et al., Blood 2014)",
        es: "Coombs negativo diferencia hemólisis inmune de microangiopática. El sangrado no es típico de TMA. (George JN et al., Blood 2014)"
      }
    },
    {
      text: {
        pt: "A plasmaférese pode ser indicada mesmo em TMA secundária à sepse, caso haja disfunção orgânica e risco iminente.",
        en: "Plasma exchange may be indicated even in sepsis-associated TMA if organ dysfunction is present.",
        es: "La plasmaféresis puede estar indicada incluso en TMA secundaria a sepsis si hay disfunción orgánica."
      },
      explanation: {
        pt: "Apesar de controversa, a plasmaférese é indicada empiricamente em muitos centros quando há falência multiorgânica e suspeita de TMA, mesmo sem ADAMTS13 muito baixo. (Zhou J et al., Kidney Int 2021; ASFA 2019)",
        en: "Though controversial, plasma exchange is empirically used when multiorgan failure and TMA are suspected, even with non-severely reduced ADAMTS13. (Zhou J et al., Kidney Int 2021; ASFA 2019)",
        es: "Aunque controvertida, la plasmaféresis se usa empíricamente cuando hay fallo multiorgánico y sospecha de TMA, incluso con ADAMTS13 moderado. (Zhou J et al., Kidney Int 2021; ASFA 2019)"
      }
    }
  ]
},
{
  id: 703,
  code: "nephro04-q703",
  areas: ["nephro", "nephro+icu", "icu", "medicine"],
  topics: ["rhabdomyolysis", "acute kidney injury", "trauma", "myoglobin", "fluid management"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 31 anos é resgatado após 8 horas preso sob escombros em acidente estrutural. Na admissão à UTI, está consciente, com sinais de hipoperfusão periférica, CPK >90.000 U/L, potássio sérico 6,2 mEq/L, creatinina 2,8 mg/dL e urina com aspecto castanho-avermelhado, sem hematúria microscópica. Em relação à lesão renal aguda secundária à rabdomiólise traumática, todas as afirmações a seguir são verdadeiras, **exceto**:",
    en: "A 31-year-old man is rescued after being trapped under rubble for 8 hours following a structural collapse. Upon ICU admission, he is conscious with peripheral hypoperfusion, CPK >90,000 U/L, serum potassium 6.2 mEq/L, creatinine 2.8 mg/dL, and dark reddish-brown urine without microscopic hematuria. Regarding acute kidney injury secondary to traumatic rhabdomyolysis, all of the following are true, **except**:",
    es: "Hombre de 31 años es rescatado tras quedar atrapado bajo escombros durante 8 horas en un colapso estructural. Al ingreso en UCI está consciente, con hipoperfusión periférica, CPK >90.000 U/L, potasio 6,2 mEq/L, creatinina 2,8 mg/dL y orina marrón-rojiza sin hematuria microscópica. Con respecto a la lesión renal aguda por rabdomiólisis traumática, todas las siguientes son verdaderas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A mioglobinúria é uma das principais responsáveis pela lesão tubular aguda nesse contexto.",
        en: "Myoglobinuria is one of the main contributors to acute tubular injury in this setting.",
        es: "La mioglobinuria es una de las principales responsables de la lesión tubular aguda en este contexto."
      },
      explanation: {
        pt: "A liberação de mioglobina em grande quantidade causa vasoconstrição intrarrenal, obstrução tubular e toxicidade direta, especialmente em ambiente ácido. (Bosch X et al., N Engl J Med 2009)",
        en: "Massive myoglobin release leads to intrarenal vasoconstriction, tubular obstruction, and direct toxicity, especially under acidic conditions. (Bosch X et al., N Engl J Med 2009)",
        es: "La liberación masiva de mioglobina provoca vasoconstricción renal, obstrucción tubular y toxicidad directa, especialmente en medios ácidos. (Bosch X et al., N Engl J Med 2009)"
      }
    },
    {
      text: {
        pt: "A alcalinização urinária está formalmente indicada para prevenir LRA quando o pH urinário está abaixo de 6,0.",
        en: "Urine alkalinization is formally indicated to prevent AKI when urinary pH is below 6.0.",
        es: "La alcalinización urinaria está formalmente indicada para prevenir IRA cuando el pH urinario es inferior a 6,0."
      },
      explanation: {
        pt: "Apesar de amplamente adotada, a evidência que sustenta a alcalinização urinária é limitada e inconclusiva. Não há recomendação universal para sua aplicação rotineira. (Petejova N et al., Int Urol Nephrol 2014)",
        en: "Although commonly used, evidence supporting routine urine alkalinization is limited and inconclusive. There is no universal guideline endorsing it. (Petejova N et al., Int Urol Nephrol 2014)",
        es: "Aunque comúnmente utilizada, la evidencia que respalda la alcalinización urinaria rutinaria es limitada. No hay recomendación universal. (Petejova N et al., Int Urol Nephrol 2014)"
      }
    },
    {
      text: {
        pt: "A reposição volêmica agressiva precoce com solução isotônica reduz significativamente o risco de LRA.",
        en: "Early aggressive fluid resuscitation with isotonic solution significantly reduces AKI risk.",
        es: "La reposición volémica precoz y agresiva con solución isotónica reduce significativamente el riesgo de IRA."
      },
      explanation: {
        pt: "A hidratação precoce dilui toxinas, mantém fluxo tubular e reduz obstrução. É a medida mais eficaz na prevenção da LRA na rabdomiólise. (Zager RA, J Am Soc Nephrol 2000)",
        en: "Early hydration dilutes toxins, maintains tubular flow, and reduces obstruction. It’s the most effective measure to prevent AKI in rhabdomyolysis. (Zager RA, J Am Soc Nephrol 2000)",
        es: "La hidratación precoz diluye toxinas, mantiene el flujo tubular y reduce la obstrucción. Es la medida más efectiva para prevenir IRA en rabdomiólisis. (Zager RA, J Am Soc Nephrol 2000)"
      }
    },
    {
      text: {
        pt: "A presença de urina escura com ausência de hematúria microscópica é sugestiva de mioglobinúria.",
        en: "Dark urine without microscopic hematuria suggests myoglobinuria.",
        es: "La orina oscura sin hematuria microscópica sugiere mioglobinuria."
      },
      explanation: {
        pt: "A mioglobina dá coloração semelhante à hemoglobina na urina, mas sem presença de hemácias ao microscópio. (Melli G et al., BMJ 2005)",
        en: "Myoglobin causes urine discoloration similar to hemoglobin, but without red blood cells on microscopy. (Melli G et al., BMJ 2005)",
        es: "La mioglobina tiñe la orina como la hemoglobina, pero sin hematíes visibles en el sedimento. (Melli G et al., BMJ 2005)"
      }
    },
    {
      text: {
        pt: "A hipercalcemia é um achado precoce clássico da rabdomiólise traumática grave.",
        en: "Hypercalcemia is a classic early finding in severe traumatic rhabdomyolysis.",
        es: "La hipercalcemia es un hallazgo clásico temprano en la rabdomiólisis traumática grave."
      },
      explanation: {
        pt: "Ao contrário, a hipocalcemia é comum na fase inicial devido à deposição de cálcio nos tecidos lesados. A hipercalcemia pode surgir tardiamente na fase de recuperação. (Zimmerman JL et al., Crit Care 2005)",
        en: "On the contrary, hypocalcemia is common early due to calcium deposition in damaged tissues. Hypercalcemia may occur later during recovery. (Zimmerman JL et al., Crit Care 2005)",
        es: "Al contrario, la hipocalcemia es frecuente al inicio por depósito de calcio en los tejidos dañados. La hipercalcemia aparece en la fase de recuperación. (Zimmerman JL et al., Crit Care 2005)"
      }
    }
  ]
},
{
  id: 704,
  code: "nephro04-q704",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "ventilation"],
  topics: ["acid-base", "meningitis", "ventilatory strategy", "metabolic acidosis", "respiratory alkalosis"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Paciente de 35 anos, previamente hígido, é admitido com quadro de meningite bacteriana aguda. Apresenta hiperpneia, pH 7,46, PaCO₂ 22 mmHg, HCO₃⁻ 16 mEq/L e anion gap aumentado. Evolui com rebaixamento do nível de consciência (GCS 7), sendo intubado. Qual das seguintes condutas é inadequada no manejo do distúrbio ácido-básico e ventilação mecânica inicial?",
    en: "A 35-year-old previously healthy patient is admitted with acute bacterial meningitis. He presents with hyperpnea, pH 7.46, PaCO₂ 22 mmHg, HCO₃⁻ 16 mEq/L, and elevated anion gap. He deteriorates neurologically (GCS 7) and is intubated. Which of the following is an inappropriate approach regarding acid–base management and initial mechanical ventilation?",
    es: "Paciente de 35 años, previamente sano, es ingresado por meningitis bacteriana aguda. Presenta hiperpnea, pH 7,46, PaCO₂ 22 mmHg, HCO₃⁻ 16 mEq/L y anion gap aumentado. Empeora neurológicamente (GCS 7) y es intubado. ¿Cuál de las siguientes conductas es inadecuada en el manejo ácido-base y ventilación mecánica inicial?"
  },
  options: [
    {
      text: {
        pt: "A hiperpneia é uma resposta fisiológica à acidose metabólica e não deve ser corrigida automaticamente.",
        en: "Hyperpnea is a physiological response to metabolic acidosis and should not be automatically corrected.",
        es: "La hiperpnea es una respuesta fisiológica a la acidosis metabólica y no debe corregirse automáticamente."
      },
      explanation: {
        pt: "A hiperventilação mantém o pH em zona aceitável. Corrigir para PaCO₂ normal após intubação pode causar acidemia grave. (Kraut JA, N Engl J Med 2018)",
        en: "Hyperventilation helps maintain a tolerable pH. Returning PaCO₂ to normal after intubation may lead to severe acidemia. (Kraut JA, N Engl J Med 2018)",
        es: "La hiperventilación mantiene el pH tolerable. Normalizar PaCO₂ tras intubación puede inducir acidemia severa. (Kraut JA, N Engl J Med 2018)"
      }
    },
    {
      text: {
        pt: "Ajustar o ventilador para PaCO₂ entre 35–40 mmHg após a intubação é a estratégia ventilatória ideal.",
        en: "Adjusting the ventilator to maintain PaCO₂ between 35–40 mmHg after intubation is the ideal ventilatory strategy.",
        es: "Ajustar el ventilador para mantener PaCO₂ entre 35–40 mmHg tras la intubación es la estrategia ventilatoria ideal."
      },
      explanation: {
        pt: "Esse alvo é inadequado neste contexto. O paciente estava compensando uma acidose com hiperventilação. Reduzir ventilação causará acidemia descompensada. (Marino PL. The ICU Book. 4th ed.)",
        en: "This target is inappropriate here. The patient was compensating for acidosis via hyperventilation. Reducing it would cause unbuffered acidemia. (Marino PL. The ICU Book. 4th ed.)",
        es: "Este objetivo es inadecuado en este caso. El paciente compensaba una acidosis con hiperventilación. Reducirla causará acidemia. (Marino PL. The ICU Book. 4th ed.)"
      }
    },
    {
      text: {
        pt: "Deve-se estimar o PaCO₂ esperado com base na compensação da acidose metabólica antes de ajustar o ventilador.",
        en: "The expected PaCO₂ based on metabolic acidosis compensation should be estimated before ventilator adjustment.",
        es: "Debe estimarse el PaCO₂ esperado por compensación metabólica antes de ajustar el ventilador."
      },
      explanation: {
        pt: "Fórmulas como PaCO₂ ≈ (1,5 × HCO₃⁻) + 8 ±2 ajudam a prever o nível compensatório ideal. (Kraut JA, Madias NE. N Engl J Med 2018)",
        en: "Formulas like PaCO₂ ≈ (1.5 × HCO₃⁻) + 8 ±2 help predict the compensatory target. (Kraut JA, Madias NE. N Engl J Med 2018)",
        es: "Fórmulas como PaCO₂ ≈ (1,5 × HCO₃⁻) + 8 ±2 permiten estimar el nivel compensatorio. (Kraut JA, Madias NE. N Engl J Med 2018)"
      }
    },
    {
      text: {
        pt: "Distúrbios mistos ácido-base são comuns em infecções do SNC com hiperventilação central e sepse associada.",
        en: "Mixed acid–base disorders are common in CNS infections with central hyperventilation and sepsis.",
        es: "Los trastornos ácido-base mixtos son comunes en infecciones del SNC con hiperventilación central y sepsis."
      },
      explanation: {
        pt: "Meningite pode cursar com alcalose respiratória por estímulo central, além de acidose metabólica por sepse ou hipoperfusão. (Wooten EW, Clin J Am Soc Nephrol 2012)",
        en: "Meningitis may trigger respiratory alkalosis centrally, with coexistent metabolic acidosis from sepsis or hypoperfusion. (Wooten EW, Clin J Am Soc Nephrol 2012)",
        es: "La meningitis puede causar alcalosis respiratoria central junto a acidosis metabólica por sepsis o hipoperfusión. (Wooten EW, Clin J Am Soc Nephrol 2012)"
      }
    },
    {
      text: {
        pt: "O bicarbonato sérico baixo, isoladamente, não define acidose descompensada se o pH estiver mantido por hiperventilação.",
        en: "Low serum bicarbonate alone does not define uncompensated acidosis if pH is maintained through hyperventilation.",
        es: "El bicarbonato sérico bajo, por sí solo, no define acidosis descompensada si el pH se mantiene con hiperventilación."
      },
      explanation: {
        pt: "O valor do pH é a principal referência clínica. A hipocapnia compensatória mantém o pH, mesmo com HCO₃⁻ reduzido. (Marino PL, ICU Book)",
        en: "pH remains the main clinical reference. Compensatory hypocapnia maintains pH despite low HCO₃⁻. (Marino PL, ICU Book)",
        es: "El pH sigue siendo la referencia clínica principal. La hipocapnia compensadora mantiene el pH aunque el HCO₃⁻ esté bajo. (Marino PL, ICU Book)"
      }
    }
  ]
},
{
  id: 705,
  code: "nephro04-q705",
  areas: ["nephro", "nephro+icu", "icu", "medicine"],
  topics: ["hypokalemia", "acidosis", "paralysis", "potassium replacement", "acid-base disorders"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Homem de 62 anos com sepse abdominal e acidose metabólica (pH 7,22, HCO₃⁻ 14 mEq/L, PaCO₂ 29 mmHg, anion gap aumentado) apresenta hipocalemia (K+ 2,3 mEq/L) e fraqueza muscular progressiva. Apesar da infusão de KCl (40 mEq/h), não há melhora clínica nem aumento significativo dos níveis séricos. ECG com ondas U e prolongamento do intervalo QT. Qual das condutas abaixo é **menos adequada** nesse cenário?",
    en: "A 62-year-old man with abdominal sepsis and metabolic acidosis (pH 7.22, HCO₃⁻ 14 mEq/L, PaCO₂ 29 mmHg, elevated anion gap) develops hypokalemia (K+ 2.3 mEq/L) and progressive muscle weakness. Despite KCl infusion (40 mEq/h), there is no clinical improvement or significant rise in serum potassium. ECG shows U waves and QT prolongation. Which of the following is the **least appropriate** management step?",
    es: "Hombre de 62 años con sepsis abdominal y acidosis metabólica (pH 7,22, HCO₃⁻ 14 mEq/L, PaCO₂ 29 mmHg, anion gap elevado) presenta hipocalemia (K+ 2,3 mEq/L) y debilidad muscular progresiva. A pesar de la infusión de KCl (40 mEq/h), no hay mejoría clínica ni aumento significativo del potasio sérico. El ECG muestra ondas U y QT prolongado. ¿Cuál de las siguientes conductas es la **menos adecuada** en este escenario?"
  },
  options: [
    {
      text: {
        pt: "Reavaliar a acidose metabólica e considerar correção simultânea com bicarbonato se indicada.",
        en: "Reassess the metabolic acidosis and consider bicarbonate correction if indicated.",
        es: "Reevaluar la acidosis metabólica y considerar corrección con bicarbonato si está indicada."
      },
      explanation: {
        pt: "A acidose grave altera o gradiente transcelular do potássio. Corrigir o pH pode facilitar a entrada do K⁺ nas células e aumentar a eficácia da reposição. (Palmer BF et al., N Engl J Med 2010)",
        en: "Severe acidosis alters potassium transcellular shift. Correcting pH may enhance cellular uptake and potassium replacement effectiveness. (Palmer BF et al., N Engl J Med 2010)",
        es: "La acidosis grave altera el gradiente transcelular del potasio. Corregir el pH puede facilitar la captación celular y mejorar la reposición. (Palmer BF et al., N Engl J Med 2010)"
      }
    },
    {
      text: {
        pt: "Continuar com infusão de KCl em ritmo elevado, mesmo sem correção do pH.",
        en: "Continue high-rate KCl infusion without correcting pH.",
        es: "Continuar con infusión rápida de KCl sin corregir el pH."
      },
      explanation: {
        pt: "Infusões agressivas de K⁺ com acidose persistente tendem a ser ineficazes. O potássio permanece no espaço extracelular e sua reposição se torna refratária. (Weiner ID et al., Kidney Int 2013)",
        en: "Aggressive potassium infusions in persistent acidosis are often ineffective. Potassium stays extracellular, making correction refractory. (Weiner ID et al., Kidney Int 2013)",
        es: "Infusiones agresivas de K⁺ con acidosis persistente suelen ser ineficaces. El potasio queda extracelular, dificultando la corrección. (Weiner ID et al., Kidney Int 2013)"
      }
    },
    {
      text: {
        pt: "Investigar perdas urinárias ou intestinais associadas de potássio e magnésio.",
        en: "Investigate urinary or intestinal losses of potassium and magnesium.",
        es: "Investigar pérdidas urinarias o intestinales de potasio y magnesio."
      },
      explanation: {
        pt: "Hipomagnesemia é causa comum de hipocalemia refratária. Perdas associadas devem ser corrigidas para sucesso na reposição. (Whang R et al., Am J Med 1992)",
        en: "Hypomagnesemia often causes refractory hypokalemia. Identifying and correcting associated losses is essential. (Whang R et al., Am J Med 1992)",
        es: "La hipomagnesemia es una causa frecuente de hipocalemia refractaria. Es clave corregir pérdidas asociadas. (Whang R et al., Am J Med 1992)"
      }
    },
    {
      text: {
        pt: "Monitorar ECG continuamente e observar por arritmias ventriculares.",
        en: "Continuously monitor ECG and watch for ventricular arrhythmias.",
        es: "Monitorizar ECG continuamente y vigilar arritmias ventriculares."
      },
      explanation: {
        pt: "A hipocalemia grave, especialmente com alterações eletrocardiográficas, exige monitorização cardíaca contínua. (Surawicz B et al., J Am Coll Cardiol 1996)",
        en: "Severe hypokalemia with ECG changes requires continuous cardiac monitoring. (Surawicz B et al., J Am Coll Cardiol 1996)",
        es: "La hipocalemia severa con cambios en ECG requiere monitorización cardíaca continua. (Surawicz B et al., J Am Coll Cardiol 1996)"
      }
    },
    {
      text: {
        pt: "Corrigir hipomagnesemia concomitante se presente.",
        en: "Correct concomitant hypomagnesemia if present.",
        es: "Corregir hipomagnesemia concomitante si está presente."
      },
      explanation: {
        pt: "O magnésio regula canais de potássio na membrana celular. Sua deficiência impede retenção adequada de K⁺. (Whang R et al., Am J Med 1992)",
        en: "Magnesium modulates cellular potassium channels. Its deficiency impairs potassium retention. (Whang R et al., Am J Med 1992)",
        es: "El magnesio regula canales celulares de potasio. Su déficit impide la retención de K⁺. (Whang R et al., Am J Med 1992)"
      }
    }
  ]
},
{
  id: 706,
  code: "nephro04-q706",
  areas: ["nephro", "nephro+icu", "icu", "medicine", "electrolytes"],
  topics: ["metabolic alkalosis", "hypokalemia", "chloride depletion", "mechanical ventilation", "diuretics"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Paciente de 68 anos, portador de ICC, está internado na UTI com pneumonia e instabilidade hemodinâmica. Em ventilação mecânica, apresenta pH 7,56, PaCO₂ 48 mmHg, HCO₃⁻ 42 mEq/L, K⁺ 2,8 mEq/L e Cl⁻ 88 mEq/L. Está em uso de furosemida IV contínua. Permanece hipotenso apesar de expansão inicial. Qual das seguintes condutas é a **menos apropriada** neste caso de alcalose metabólica persistente?",
    en: "A 68-year-old man with heart failure is in the ICU due to pneumonia and hemodynamic instability. On mechanical ventilation, he presents with pH 7.56, PaCO₂ 48 mmHg, HCO₃⁻ 42 mEq/L, K⁺ 2.8 mEq/L and Cl⁻ 88 mEq/L. He is receiving continuous IV furosemide. Remains hypotensive despite initial fluid resuscitation. Which of the following is the **least appropriate** management in this case of persistent metabolic alkalosis?",
    es: "Paciente de 68 años con insuficiencia cardíaca está en la UCI por neumonía e inestabilidad hemodinámica. En ventilación mecánica, presenta pH 7,56, PaCO₂ 48 mmHg, HCO₃⁻ 42 mEq/L, K⁺ 2,8 mEq/L y Cl⁻ 88 mEq/L. Recibe furosemida IV continua. Permanece hipotenso a pesar de la expansión inicial. ¿Cuál de las siguientes conductas es la **menos apropiada** en este caso de alcalosis metabólica persistente?"
  },
  options: [
    {
      text: {
        pt: "Iniciar reposição de potássio e magnésio de forma agressiva.",
        en: "Initiate aggressive potassium and magnesium replacement.",
        es: "Iniciar reposición agresiva de potasio y magnesio."
      },
      explanation: {
        pt: "A hipocalemia e a hipomagnesemia sustentam a alcalose ao estimular reabsorção renal de bicarbonato. Corrigir eletrólitos é fundamental. (Galla JH, N Engl J Med 2000)",
        en: "Hypokalemia and hypomagnesemia sustain alkalosis by stimulating renal bicarbonate reabsorption. Correction is essential. (Galla JH, N Engl J Med 2000)",
        es: "La hipocalemia e hipomagnesemia perpetúan la alcalosis al estimular la reabsorción de bicarbonato. Su corrección es esencial. (Galla JH, N Engl J Med 2000)"
      }
    },
    {
      text: {
        pt: "Suspender temporariamente a furosemida e avaliar volemia cuidadosamente.",
        en: "Temporarily suspend furosemide and assess volume status closely.",
        es: "Suspender temporalmente la furosemida y evaluar cuidadosamente el estado de volemia."
      },
      explanation: {
        pt: "A alcalose é classicamente mantida por hipovolemia induzida por diuréticos. Interromper o agente causal é passo essencial. (Batlle D et al., Am J Kidney Dis 2001)",
        en: "Alkalosis is often maintained by diuretic-induced hypovolemia. Withdrawing the offending agent is a key step. (Batlle D et al., Am J Kidney Dis 2001)",
        es: "La alcalosis suele mantenerse por hipovolemia inducida por diuréticos. Suspender el agente causal es esencial. (Batlle D et al., Am J Kidney Dis 2001)"
      }
    },
    {
      text: {
        pt: "Iniciar solução salina isotônica com cloreto de sódio para correção da depleção de cloro.",
        en: "Start isotonic saline with sodium chloride to correct chloride depletion.",
        es: "Iniciar solución salina isotónica con cloruro de sodio para corregir la depleción de cloro."
      },
      explanation: {
        pt: "A alcalose metabólica hipoclorêmica é sensível à reposição de NaCl. A solução salina ajuda a restaurar a excreção renal de bicarbonato. (Galla JH, N Engl J Med 2000)",
        en: "Hypochloremic metabolic alkalosis is sensitive to NaCl replacement. Saline restores renal bicarbonate excretion. (Galla JH, N Engl J Med 2000)",
        es: "La alcalosis metabólica hipoclorémica responde a la reposición de NaCl. La salina facilita la excreción renal de bicarbonato. (Galla JH, N Engl J Med 2000)"
      }
    },
    {
      text: {
        pt: "Utilizar bicarbonato intravenoso para corrigir a hipoperfusão e melhorar o pH.",
        en: "Use intravenous bicarbonate to correct hypoperfusion and improve pH.",
        es: "Utilizar bicarbonato intravenoso para corregir la hipoperfusión y mejorar el pH."
      },
      explanation: {
        pt: "O uso de bicarbonato é contraindicado em pacientes com pH alcalino e HCO₃⁻ elevado. Agrava a alcalose e pode gerar efeitos deletérios, como hipocalcemia e arritmias. (Adrogue HJ et al., Crit Care Med 1998)",
        en: "Bicarbonate is contraindicated in patients with alkaline pH and elevated HCO₃⁻. It worsens alkalosis and may trigger adverse effects like hypocalcemia and arrhythmias. (Adrogue HJ et al., Crit Care Med 1998)",
        es: "El bicarbonato está contraindicado con pH alcalino y HCO₃⁻ elevado. Empeora la alcalosis y puede provocar efectos adversos como hipocalcemia. (Adrogue HJ et al., Crit Care Med 1998)"
      }
    },
    {
      text: {
        pt: "Ajustar a ventilação mecânica para evitar retenção adicional de CO₂.",
        en: "Adjust mechanical ventilation to avoid further CO₂ retention.",
        es: "Ajustar la ventilación mecánica para evitar retención adicional de CO₂."
      },
      explanation: {
        pt: "A hipoventilação pode agravar o componente respiratório da alcalose mista. Ajustar o suporte ventilatório é essencial para controle ácido-base. (Marino PL. ICU Book)",
        en: "Hypoventilation can worsen the respiratory component of mixed alkalosis. Adjusting ventilator support is essential. (Marino PL. ICU Book)",
        es: "La hipoventilación puede empeorar la alcalosis respiratoria en un trastorno mixto. Es esencial ajustar el soporte ventilatorio. (Marino PL. ICU Book)"
      }
    }
  ]
},
{
  id: 707,
  code: "nephro04-q707",
  areas: ["nephro", "nephro+icu", "icu", "medicine"],
  topics: ["furosemide stress test", "AKI", "diuretics", "renal replacement therapy", "tubular function"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Paciente de 58 anos com LRA KDIGO 2, após cirurgia abdominal séptica. Apresenta diurese <0,3 mL/kg/h, sem sinais de hipovolemia. Considera-se realizar Furosemide Stress Test (FST) para prever necessidade de TRS. Qual das seguintes afirmações está INCORRETA sobre o FST?",
    en: "A 58-year-old patient with KDIGO 2 AKI after septic abdominal surgery presents with urine output <0.3 mL/kg/h and no signs of hypovolemia. A Furosemide Stress Test (FST) is considered to predict need for RRT. Which of the following statements is INCORRECT about FST?",
    es: "Paciente de 58 años con LRA KDIGO 2 tras cirugía abdominal séptica, con diuresis <0,3 mL/kg/h y sin signos de hipovolemia. Se considera realizar Furosemide Stress Test (FST) para predecir necesidad de TRS. ¿Cuál de las siguientes afirmaciones es INCORRECTA sobre el FST?"
  },
  options: [
    {
      text: {
        pt: "O FST ajuda a diferenciar entre LRA reversível e disfunção tubular sustentada.",
        en: "FST helps differentiate between reversible AKI and sustained tubular dysfunction.",
        es: "El FST ayuda a diferenciar entre LRA reversible y disfunción tubular sostenida."
      },
      explanation: {
        pt: "Uma resposta negativa ao FST (diurese <200 mL nas 2h) sugere lesão tubular estrutural com maior risco de TRS. (Chawla LS et al., Crit Care 2013)",
        en: "A negative FST (urine output <200 mL in 2h) suggests structural tubular damage and higher RRT risk. (Chawla LS et al., Crit Care 2013)",
        es: "Un FST negativo (diuresis <200 mL en 2h) sugiere daño tubular estructural y mayor riesgo de TRS. (Chawla LS et al., Crit Care 2013)"
      }
    },
    {
      text: {
        pt: "É necessário excluir hipovolemia antes da administração do fármaco.",
        en: "Hypovolemia must be ruled out before administering the drug.",
        es: "Debe excluirse hipovolemia antes de administrar el medicamento."
      },
      explanation: {
        pt: "Administração de furosemida em paciente hipovolêmico pode piorar função renal. Volume intravascular deve ser avaliado previamente. (KDIGO Guidelines, 2012)",
        en: "Administering furosemide in hypovolemic patients may worsen renal function. Volume status must be assessed. (KDIGO Guidelines, 2012)",
        es: "Administrar furosemida en pacientes hipovolémicos puede empeorar la función renal. Evaluar volemia previamente. (KDIGO Guidelines, 2012)"
      }
    },
    {
      text: {
        pt: "A resposta esperada é uma diurese ≥200 mL nas duas primeiras horas.",
        en: "Expected response is urine output ≥200 mL in the first two hours.",
        es: "La respuesta esperada es diuresis ≥200 mL en las primeras dos horas."
      },
      explanation: {
        pt: "Esse é o principal critério utilizado para definir resposta positiva ao FST. (Chawla LS et al., Crit Care 2013)",
        en: "This is the main criterion used to define positive response to FST. (Chawla LS et al., Crit Care 2013)",
        es: "Este es el criterio principal para definir respuesta positiva al FST. (Chawla LS et al., Crit Care 2013)"
      }
    },
    {
      text: {
        pt: "O FST é validado para pacientes em KDIGO 3 e anúricos como ferramenta de triagem.",
        en: "FST is validated for KDIGO 3 patients and anuric cases as a screening tool.",
        es: "El FST está validado para pacientes en KDIGO 3 y anúricos como herramienta de cribado."
      },
      explanation: {
        pt: "O FST não é recomendado em pacientes anúricos ou já em estágio KDIGO 3, pois sua eficácia preditiva é limitada nesses cenários. (Chawla LS et al., Crit Care 2013)",
        en: "FST is not recommended for anuric or KDIGO 3 patients, as its predictive power is limited in such cases. (Chawla LS et al., Crit Care 2013)",
        es: "El FST no se recomienda en pacientes anúricos o KDIGO 3, ya que su valor predictivo es limitado en esos casos. (Chawla LS et al., Crit Care 2013)"
      }
    },
    {
      text: {
        pt: "Pacientes que já usavam diurético devem receber dose maior no teste.",
        en: "Patients already on diuretics should receive a higher dose during the test.",
        es: "Pacientes que ya usaban diuréticos deben recibir una dosis mayor durante la prueba."
      },
      explanation: {
        pt: "Pacientes com exposição prévia a furosemida devem receber 1,5 mg/kg IV (vs. 1 mg/kg se naive), para garantir efeito adequado. (Chawla LS et al., Crit Care 2013)",
        en: "Those with prior furosemide use should receive 1.5 mg/kg IV (vs. 1 mg/kg if naive), to ensure adequate effect. (Chawla LS et al., Crit Care 2013)",
        es: "Los pacientes ya expuestos a furosemida deben recibir 1,5 mg/kg IV (vs. 1 mg/kg si naive), para asegurar efecto adecuado. (Chawla LS et al., Crit Care 2013)"
      }
    }
  ]
},

];

questionBank.addBank(bancoNephroDificilima);  