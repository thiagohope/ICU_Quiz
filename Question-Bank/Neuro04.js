const bancoNeuroDificilima = [
{
  id: 401,
  code: "neuro04-q401",
    areas: ["neuro+icu", "neuro"],
  topics: ["ischemic stroke", "atrial fibrillation", "anticoagulation", "thrombolysis", "decision-making"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Homem de 78 anos, hipertenso, diabético e com fibrilação atrial permanente, faz uso regular de apixabana 5 mg duas vezes ao dia. Foi encontrado por familiares às 08h com afasia global e hemiplegia à direita, tendo sido visto assintomático pela última vez às 05h. Chega ao hospital às 08h45 com NIHSS 16. A última dose da apixabana foi às 22h da noite anterior. TC de crânio sem sangramento; angioTC mostra oclusão da ACM esquerda (M1). Todas as afirmações estão corrects, **exceto**:",
    en: "A 78-year-old man with hypertension, diabetes, and permanent atrial fibrillation takes apixaban 5 mg twice daily. He is found by family at 8:00 with global aphasia and right hemiplegia, last seen well at 5:00. He arrives at the hospital at 8:45 with NIHSS 16. Last apixaban dose was at 22:00 the night before. Head CT shows no bleeding; CTA reveals left M1 occlusion. All of the following are correct, **except**:",
    es: "Hombre de 78 años, hipertenso, diabético y con fibrilación auricular permanente, toma apixabán 5 mg dos veces al día. Es encontrado por familiares a las 08:00 con afasia global y hemiplejía derecha, visto asintomático por última vez a las 05:00. Llega al hospital a las 08:45 con NIHSS 16. Última dosis de apixabán: 22:00 la noche anterior. TC sin sangrado; angioTC muestra oclusión de ACM izquierda (M1). Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A trombólise intravenosa está contraindicada pela exposição recente ao anticoagulante oral direto.",
        en: "IV thrombolysis is contraindicated due to recent exposure to a direct oral anticoagulant.",
        es: "La trombólisis IV está contraindicada por exposición reciente a un anticoagulante oral directo."
      },
      explanation: {
        pt: "Segundo a AHA/ASA (2021) e a ESO (2021), a trombólise com alteplase é contraindicada em pacientes que utilizaram DOAC nas últimas 48h, a menos que testes específicos confirmem ausência de atividade anticoagulante. O estudo TREAT (Stroke, 2019) mostrou risco aumentado de hemorragia sintomática nesses casos.",
        en: "According to AHA/ASA (2021) and ESO (2021), IV thrombolysis with alteplase is contraindicated within 48h of DOAC use unless lab testing confirms no residual effect. The TREAT study (Stroke, 2019) showed increased risk of symptomatic hemorrhage in this context.",
        es: "Según la AHA/ASA (2021) y la ESO (2021), la trombólisis con alteplasa está contraindicada en pacientes que tomaron AOD en las últimas 48h, salvo que se demuestre ausencia de efecto anticoagulante. El estudio TREAT (Stroke, 2019) demostró mayor riesgo de hemorragia sintomática."
      }
    },
    {
      text: {
        pt: "A trombectomia mecânica pode ser realizada com segurança mesmo em pacientes anticoagulados.",
        en: "Mechanical thrombectomy may be safely performed even in anticoagulated patients.",
        es: "La trombectomía mecánica puede realizarse con seguridad incluso en pacientes anticoagulados."
      },
      explanation: {
        pt: "Estudos como DAWN e DEFUSE 3 (NEJM, 2018) demonstraram benefício da trombectomia até 24h em pacientes com critérios clínico-radiológicos, independentemente do uso de anticoagulantes. Recomendado pelas diretrizes AHA/ASA e ESO.",
        en: "DAWN and DEFUSE 3 trials (NEJM, 2018) support thrombectomy up to 24h based on clinical and imaging criteria, regardless of anticoagulant use. Supported by AHA/ASA and ESO guidelines.",
        es: "Los estudios DAWN y DEFUSE 3 (NEJM, 2018) respaldan la trombectomía hasta 24h si se cumplen criterios clínico-radiológicos, incluso con anticoagulantes. Respaldado por las guías AHA/ASA y ESO."
      }
    },
    {
      text: {
        pt: "A anticoagulação oral deve ser suspensa por no mínimo 21 dias após o evento, mesmo após trombectomia bem-sucedida.",
        en: "Oral anticoagulation should be withheld for at least 21 days after stroke, even after successful thrombectomy.",
        es: "La anticoagulación oral debe suspenderse por al menos 21 días tras el ictus, incluso con trombectomía exitosa."
      },
      explanation: {
        pt: "**INCORRETA.** A retomada da anticoagulação deve ser individualizada. Diretrizes AHA/ASA (2021) e ESO (2021) sugerem reinício em 3–14 dias, com base na gravidade do AVC, risco de recorrência (ex: CHA₂DS₂-VASc ≥ 4) e risco hemorrágico. Retomar após 21 dias só é recomendado em infartos extensos com transformação hemorrágica.",
        en: "**INCORRECT.** Anticoagulation resumption must be individualized. AHA/ASA (2021) and ESO (2021) recommend restarting between 3–14 days depending on stroke severity and hemorrhagic risk. A 21-day delay is reserved for large infarcts with hemorrhagic transformation.",
        es: "**INCORRECTA.** El reinicio de anticoagulación debe individualizarse. AHA/ASA (2021) y ESO (2021) recomiendan entre 3–14 días según la gravedad del ictus y riesgo hemorrágico. 21 días se reserva para infartos extensos con transformación hemorrágica."
      }
    },
    {
      text: {
        pt: "A dosagem do fator anti-Xa específico pode auxiliar na decisão de trombólise se disponível com rapidez.",
        en: "Specific anti-Xa testing may aid thrombolysis decision if rapidly available.",
        es: "La medición de anti-Xa específico puede ayudar a decidir trombólisis si está disponible rápidamente."
      },
      explanation: {
        pt: "Segundo a ESO (2021), níveis de anti-Xa < 50 ng/mL indicam baixo risco hemorrágico e podem permitir trombólise com segurança. Contudo, o teste precisa ser validado para o DOAC utilizado (no caso, apixabana) e disponível em tempo real.",
        en: "ESO (2021) states that anti-Xa levels < 50 ng/mL suggest low bleeding risk and may allow safe thrombolysis. However, the assay must be calibrated for the specific DOAC (here, apixaban) and rapidly available.",
        es: "La ESO (2021) considera que leveles de anti-Xa < 50 ng/mL indican bajo riesgo y podrían permitir trombólisis. La prueba debe estar calibrada para el AOD específico y disponible rápidamente."
      }
    },
    {
      text: {
        pt: "O uso de andexanet alfa pode ser considerado para reversão da apixabana em contexts emergenciais específicos.",
        en: "Andexanet alfa may be considered for apixaban reversal in specific emergency contexts.",
        es: "Andexanet alfa puede considerarse para revertir la apixabán en contexts de emergencia seleccionados."
      },
      explanation: {
        pt: "O ANNEXA-4 (NEJM, 2016) mostrou eficácia do andexanet na reversão rápida de DOACs com redução da atividade anti-Xa. Seu uso em context de trombólise ainda é controverso, mas pode ser considerado em centros com protocolo estruturado.",
        en: "ANNEXA-4 (NEJM, 2016) demonstrated andexanet’s rapid reversal of DOACs by reducing anti-Xa activity. Use before thrombolysis is still controversial but may be considered in structured centers.",
        es: "ANNEXA-4 (NEJM, 2016) mostró que andexanet revierte rápidamente AOD reduciendo la actividad anti-Xa. Su uso previo a trombólisis sigue siendo controvertido, pero puede considerarse en centros estructurados."
      }
    }
  ]
},
{
  id: 402,
  code: "neuro04-q402",
    areas: ["neuro+icu", "neuro"],
  topics: ["subarachnoid hemorrhage", "vasospasm", "endovascular therapy", "ethics", "informed refusal"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Mulher de 52 anos, previamente saudável, foi admitida na UTI neuro após hemorragia subaracnóidea por ruptura de aneurisma da artéria comunicante anterior, tratado por clipagem cirúrgica no 2º dia. No 6º dia, ainda sob sedação leve, desenvolve hemiparesia esquerda e agitação. Doppler transcraniano mostra velocidade > 200 cm/s na ACM direita, e a angioTC com perfusão confirma mismatch compatível com vasoespasmo grave. A equipe indica terapia endovascular urgente, mas os familiares recusam o procedimento por considerá-lo invasivo demais. Todas as afirmações abaixo estão corrects, **exceto**:",
    en: "A 52-year-old woman, previously healthy, is admitted to the neuro ICU after subarachnoid hemorrhage due to rupture of an anterior communicating artery aneurysm, clipped surgically on day 2. On day 6, still under light sedation, she develops left hemiparesis and agitation. Transcranial Doppler shows >200 cm/s in right MCA, and CT perfusion confirms mismatch consistent with severe vasospasm. The team recommends urgent endovascular therapy, but the family refuses the procedure, considering it too invasive. All of the following statements are correct, **except**:",
    es: "Mujer de 52 años, previamente sana, es admitida en UCI neurológica tras hemorragia subaracnoidea por ruptura de aneurisma de comunicante anterior, clipado quirúrgicamente en el día 2. En el día 6, aún con sedación ligera, desarrolla hemiparesia izquierda y agitación. El Doppler transcraneal muestra >200 cm/s en ACM derecha, y la angioTC con perfusión confirma mismatch compatible con vasoespasmo grave. El equipo recomienda tratamiento endovascular urgente, pero la familia lo rechaza por considerarlo demasiado invasivo. Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "Vasoespasmo cerebral é causa frequente de isquemia secundária tardia após HSA, com pico entre o 5º e 10º dia.",
        en: "Cerebral vasospasm is a common cause of delayed secondary ischemia after SAH, peaking between days 5 and 10.",
        es: "El vasoespasmo cerebral es causa frecuente de isquemia secundaria tardía tras HSA, con pico entre los días 5 y 10."
      },
      explanation: {
        pt: "As diretrizes da ESO (2023) e da AHA/ASA (2021) reforçam o risco elevado de DCI (delayed cerebral ischemia) entre o 5º e 14º dia pós-HSA, especialmente em pacientes com HSA de grau moderado a grave (WFNS ≥ III).",
        en: "ESO (2023) and AHA/ASA (2021) guidelines emphasize the high risk of delayed cerebral ischemia (DCI) between days 5–14, especially in moderate-to-severe SAH cases (WFNS ≥ III).",
        es: "Las guías ESO (2023) y AHA/ASA (2021) destacan el alto riesgo de isquemia cerebral diferida entre los días 5–14, especialmente en HSA moderate a grave (WFNS ≥ III)."
      }
    },
    {
      text: {
        pt: "Terapias endovasculares, como angioplastia ou infusão intra-arterial de vasodilatadores, podem ser indicadas em vasoespasmos refratários com déficit clínico e evidência perfusional.",
        en: "Endovascular therapies, such as angioplasty or intra-arterial vasodilator infusion, are indicated in refractory vasospasm with clinical deficit and perfusion mismatch.",
        es: "Las terapias endovasculares como angioplastia o vasodilatadores intraarteriales están indicadas en vasoespasmo refractario con déficit clínico y mismatch de perfusión."
      },
      explanation: {
        pt: "As diretrizes da SNIS (2022) e AHA/ASA (2021) apoiam o uso de terapia endovascular em vasoespasmo clínico refratário, com benefício funcional documentado em estudos prospectivos como o HIMALAIA e coortes multicêntricas.",
        en: "SNIS (2022) and AHA/ASA (2021) support endovascular therapy in clinically refractory vasospasm, with functional benefit shown in trials like HIMALAIA and multicenter registries.",
        es: "Las guías SNIS (2022) y AHA/ASA (2021) respaldan la terapia endovascular en vasoespasmo clínico refractario, con beneficio funcional demostrado en estudios como HIMALAIA."
      }
    },
    {
      text: {
        pt: "O uso de nimodipina oral é padrão de cuidado e deve ser mantido por pelo menos 21 dias após HSA aneurismática.",
        en: "Oral nimodipine is standard of care and should be maintained for at least 21 days after aneurysmal SAH.",
        es: "La nimodipina oral es tratamiento estándar y debe mantenerse por al menos 21 días tras HSA aneurismática."
      },
      explanation: {
        pt: "Baseado em estudos como o CONSCIOUS-1 e validação em guidelines ESO/AHA, a nimodipina reduz risco de DCI e melhora desfecho funcional, ainda que não reduza vasoespasmo angiográfico.",
        en: "Based on CONSCIOUS-1 and ESO/AHA guidelines, nimodipine lowers DCI risk and improves outcomes, despite not reducing angiographic vasospasm.",
        es: "Basado en CONSCIOUS-1 y guías ESO/AHA, la nimodipina reduce el riesgo de DCI y mejora desenlaces, aunque no disminuya el vasoespasmo angiográfico."
      }
    },
    {
      text: {
        pt: "A recusa familiar deve sempre ser respeitada, mesmo diante de risco iminente de morte neurológica.",
        en: "Family refusal must always be respected, even in the face of imminent neurological death.",
        es: "La negativa de la familia debe respetarse siempre, incluso ante riesgo inminente de muerte neurológica."
      },
      explanation: {
        pt: "**INCORRETA.** Segundo os princípios bioéticos (Beauchamp & Childress) e documentos da American College of Physicians (2021), a autonomia familiar não se sobrepõe ao dever do médico de oferecer terapias com forte evidência de benefício vital. Em situações de risco imediato, o profissional pode agir em benefício do paciente, mesmo com objeção familiar, desde que haja respaldo institucional e documentação ética.",
        en: "**INCORRECT.** According to bioethics principles (Beauchamp & Childress) and ACP (2021), family refusal does not override the physician's duty to provide life-saving evidence-based care. In immediate-risk situations, physicians may act beneficently with institutional and ethical support.",
        es: "**INCORRECTA.** Según los principios bioéticos (Beauchamp & Childress) y el American College of Physicians (2021), la negativa familiar no anula el deber médico de actuar cuando existe evidencia sólida de beneficio vital. En emergencias, se puede proceder con respaldo ético e institucional."
      }
    },
    {
      text: {
        pt: "A manutenção da pressão de perfusão cerebral em valores elevados (CPP > 70 mmHg) é estratégia complementar para reduzir isquemia por vasoespasmo.",
        en: "Maintaining elevated cerebral perfusion pressure (CPP > 70 mmHg) is a complementary strategy to reduce vasospasm-related ischemia.",
        es: "Mantener la presión de perfusión cerebral elevada (PPC > 70 mmHg) es una estrategia complementaria para reducir la isquemia por vasoespasmo."
      },
      explanation: {
        pt: "A estratégia de hipertensão induzida guiada por PPC é recomendada pelas diretrizes da AHA/ASA e adotada amplamente em centros terciários, embora com base em evidência de grau B.",
        en: "Induced hypertension guided by CPP is recommended by AHA/ASA and widely used in tertiary centers, though evidence grade is B.",
        es: "La hipertensión inducida guiada por PPC es recomendada por AHA/ASA y usada ampliamente, aunque con evidencia tipo B."
      }
    }
  ]
},
{
  id: 403,
  code: "neuro04-q403",
    areas: ["neuro+icu", "neuro"],
  topics: ["post-cardiac arrest", "brain death", "ethics", "prognosis", "EEG"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 61 anos, previamente hígido, é atendido após parada cardiorrespiratória extra-hospitalar presenciada, com reanimação em 10 minutos. Evolui em coma profundo, GCS 3, com EEG plano, pupilas midriáticas arreativas, reflexo óculo-cefálico ausente, e eletroneuromiografia com ausência de potenciais motores. A dosagem de NSE (neuron-specific enolase) está > 100 mcg/L. Após 72h do evento, mantido em ventilação mecânica e hemodinamicamente estável, a equipe propõe limitação de suporte, mas a família exige continuidade total. Todas as afirmativas abaixo estão corrects, **exceto**:",
    en: "A 61-year-old previously healthy man is admitted after a witnessed out-of-hospital cardiac arrest, with return of spontaneous circulation after 10 minutes. He remains deeply comatose (GCS 3) with flat EEG, nonreactive midriatic pupils, absent oculocephalic reflex, and motor evoked potentials absent. NSE > 100 mcg/L. After 72h, still on mechanical ventilation and hemodynamically stable, the ICU team suggests limiting support, but the family insists on full life-sustaining therapy. All of the following statements are correct, **except**:",
    es: "Hombre de 61 años previamente sano ingresa tras una parada cardiorrespiratoria extrahospitalaria presenciada, con recuperación de circulación espontánea a los 10 minutos. Permanece en coma profundo (GCS 3) con EEG plano, pupilas midriáticas no reactivas, reflejo oculocefálico ausente y sin potenciales evocados motores. NSE > 100 mcg/L. Tras 72h, con VM y estabilidad hemodinámica, el equipo propone limitación del soporte, pero la familia exige mantener terapias completas. Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A combinação de EEG isoelétrico, ausência de reflexos do tronco encefálico e marcadores neuronais elevados após 72h indica prognóstico neurológico extremamente reservado.",
        en: "The combination of isoelectric EEG, absent brainstem reflexes, and elevated neuronal biomarkers after 72h indicates extremely poor neurological prognosis.",
        es: "La combinación de EEG isoeléctrico, ausencia de reflejos de tronco encefálico y marcadores neuronales elevados tras 72h indica pronóstico neurológico extremadamente desfavorable."
      },
      explanation: {
        pt: "Segundo a AAN (2020) e a AHA, essa tríade é considerada marcador robusto de prognóstico fúnebre pós-PCR, com acurácia > 95% para desfecho desfavorável irreversível.",
        en: "According to AAN (2020) and AHA, this triad is a strong predictor of poor prognosis post-CA, with >95% specificity for irreversible outcome.",
        es: "Según AAN (2020) y AHA, esta tríada es un predictor robusto de mal pronóstico tras paro, con >95% de especificidad para desenlace irreversible."
      }
    },
    {
      text: {
        pt: "A decisão sobre limitação de suporte deve considerar o princípio da proporcionalidade terapêutica e o dever de não maleficência.",
        en: "The decision to limit support must consider therapeutic proportionality and the duty of non-maleficence.",
        es: "La decisión sobre limitar soporte debe considerar la proporcionalidad terapéutica y el principio de no maleficencia."
      },
      explanation: {
        pt: "Diretrizes da SCCM e da American College of Physicians apoiam a suspensão de medidas fúteis, mesmo contra vontade familiar, se houver consenso institucional e documentação ética.",
        en: "SCCM and ACP guidelines support withdrawing futile treatment even against family will, if there is institutional support and ethical documentation.",
        es: "Las guías de SCCM y ACP respaldan suspender tratamientos fútiles incluso contra la voluntad familiar si hay respaldo institucional y documentación ética."
      }
    },
    {
      text: {
        pt: "A ausência de resposta motora ao estímulo doloroso não tem valor prognóstico após 72h, devendo ser ignorada na decisão clínica.",
        en: "Lack of motor response to pain after 72h has no prognostic value and should be disregarded in clinical decision-making.",
        es: "La ausencia de respuesta motora al dolor tras 72h no tiene valor pronóstico y debe ignorarse en la toma de decisiones clínicas."
      },
      explanation: {
        pt: "**INCORRETA.** A ausência de resposta motora bilateral ao estímulo nociceptivo profundo (score motor 1 na escala GCS) após 72h é marcador independente de mau prognóstico, segundo a AAN (2020), com valor preditivo negativo > 90%.",
        en: "**INCORRECT.** Bilateral lack of motor response to pain (GCS motor 1) after 72h is an independent poor prognostic marker per AAN (2020), with >90% predictive value.",
        es: "**INCORRECTA.** La ausencia bilateral de respuesta motora al dolor (GCS motor 1) tras 72h es un marcador de mal pronóstico según AAN (2020), con valor predictivo > 90%."
      }
    },
    {
      text: {
        pt: "A avaliação da encefalopatia pós-parada deve ser adiada até que efeitos sedativos e distúrbios metabólicos sejam descartados.",
        en: "Post-arrest encephalopathy assessment must be delayed until sedation and metabolic confounders are excluded.",
        es: "La evaluación de encefalopatía post-paro debe retrasarse hasta descartar sedación o alteraciones metabólicas."
      },
      explanation: {
        pt: "É recomendação de consenso AHA/AAN/ESICM aguardar 72h pós-PCR e suspender sedação antes de qualquer decisão prognóstica definitiva.",
        en: "AHA/AAN/ESICM recommend deferring prognosis until 72h post-ROSC and after sedation clearance.",
        es: "Las guías AHA/AAN/ESICM recomiendan esperar 72h post-ROSC y suspender sedación antes de tomar decisiones sobre pronóstico."
      }
    },
    {
      text: {
        pt: "A existência de diretriz antecipada (testamento vital) simplificaria o processo de tomada de decisão em contexts como este.",
        en: "An advance directive would simplify decision-making in such cases.",
        es: "Una directiva anticipada easyitaría la toma de decisiones en contexts como este."
      },
      explanation: {
        pt: "As diretrizes da AMA e da European Academy of Neurology recomendam a inclusão de diretivas antecipadas no planejamento do cuidado crítico, especialmente em populações de risco.",
        en: "AMA and EAN recommend advance directives in critical care planning, especially for high-risk patients.",
        es: "La AMA y la EAN recomiendan las directivas anticipadas como parte del plan de cuidados críticos en pacientes de alto riesgo."
      }
    }
  ]
},
{
  id: 404,
  code: "neuro04-q404",
    areas: ["neuro+icu", "neuro"],
  topics: ["vasospasm", "subarachnoid hemorrhage", "endovascular therapy", "angioplasty", "nimodipine"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Mulher de 49 anos com HSA grau IV (WFNS) por aneurisma de cerebral anterior tratado com clipagem evolui no 7º dia com rebaixamento do nível de consciência e déficit motor direito. Doppler transcraniano mostra velocidades > 220 cm/s na ACM esquerda. A angioTC evidencia vasoespasmo segmentar proximal da ACM e da artéria carótida intracraniana esquerda, sem sinais de infarto estabelecido na perfusão cerebral. A equipe endovascular considera intervenção imediata. Todas as afirmativas abaixo estão corrects, **exceto**:",
    en: "A 49-year-old woman with grade IV SAH (WFNS) due to anterior cerebral artery aneurysm treated by clipping develops decreased consciousness and right-sided motor deficit on day 7. Transcranial Doppler shows MCA velocities >220 cm/s on the left. CTA reveals proximal segmental vasospasm of the left MCA and intracranial carotid artery, with no established infarct on CT perfusion. The endovascular team considers immediate intervention. All statements below are correct, **except**:",
    es: "Mujer de 49 años con HSA grado IV (WFNS) por aneurisma de cerebral anterior tratado con clipado evoluciona en el día 7 con disminución de conciencia y déficit motor derecho. El Doppler transcraneal muestra velocidades > 220 cm/s en la ACM izquierda. La angioTC evidencia vasoespasmo segmentario proximal en la ACM y carótida intracraneal izquierda, sin infarto establecido en la perfusión cerebral. El equipo endovascular considera intervención inmediata. Todas las afirmaciones siguientes son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A angioplastia transluminal com balão é preferencial para vasoespasmo proximal focal em grandes vasos.",
        en: "Balloon transluminal angioplasty is preferred for focal proximal vasospasm in large vessels.",
        es: "La angioplastia transluminal con balón es preferida en vasoespasmo focal proximal de grandes vasos."
      },
      explanation: {
        pt: "Segundo as diretrizes SNIS (2022) e ESO (2023), a angioplastia mecânica é eficaz em vasos como a ACI e segmentos proximais da ACM, com maior durabilidade e menor necessidade de reintervenção.",
        en: "According to SNIS (2022) and ESO (2023), mechanical angioplasty is effective in ICA and proximal MCA segments, offering longer durability and fewer reinterventions.",
        es: "Según SNIS (2022) y ESO (2023), la angioplastia mecánica es eficaz en la ACI y segmentos proximales de la ACM, con mayor durabilidad y menos reintervenciones."
      }
    },
    {
      text: {
        pt: "A infusão intra-arterial de vasodilatadores é mais indicada para vasoespasmo distal, difuso ou recorrente.",
        en: "Intra-arterial vasodilator infusion is better suited for diffuse, distal, or recurrent vasospasm.",
        es: "La infusión intraarterial de vasodilatadores está más indicada para vasoespasmo difuso, distal o recurrente."
      },
      explanation: {
        pt: "Estudos como HIMALAIA e NEWTON-2 demonstraram benefício em casos de múltiplos territórios, com drogas como nimodipina, milrinona e nicardipina.",
        en: "Trials like HIMALAIA and NEWTON-2 support use of nimodipine, milrinone, or nicardipine in multi-territory vasospasm.",
        es: "Estudios como HIMALAIA y NEWTON-2 avalan el uso de nimodipina, milrinona o nicardipina en vasoespasmo multiterritorial."
      }
    },
    {
      text: {
        pt: "A ausência de infarto na imagem perfusional não contraindica a abordagem endovascular.",
        en: "Absence of infarct on perfusion imaging does not contraindicate endovascular approach.",
        es: "La ausencia de infarto en la perfusión cerebral no contraindica la terapia endovascular."
      },
      explanation: {
        pt: "A intervenção precoce tem maior benefício antes de infarto estabelecido, especialmente com déficit neurológico progressivo.",
        en: "Intervening before established infarction is ideal, particularly in cases with worsening deficits.",
        es: "Intervenir antes del infarto establecido tiene mejor pronóstico, especialmente con deterioro neurológico."
      }
    },
    {
      text: {
        pt: "A resposta ao tratamento endovascular deve ser avaliada clinicamente e por novos exames de perfusão cerebral em até 24h.",
        en: "Response to endovascular treatment should be evaluated clinically and with follow-up perfusion imaging within 24h.",
        es: "La respuesta al tratamiento endovascular debe evaluarse clínicamente y con imágenes de perfusión dentro de las 24h."
      },
      explanation: {
        pt: "A ESO recomenda avaliação multimodal da eficácia, incluindo exame neurológico, doppler e perfusão seriada (ESO 2023).",
        en: "ESO (2023) recommends multimodal assessment of efficacy, including neuro exam, Doppler, and serial perfusion.",
        es: "La ESO (2023) recomienda evaluación multimodal de eficacia, con examen neurológico, Doppler y perfusión seriada."
      }
    },
    {
      text: {
        pt: "O tratamento endovascular está contraindicado em pacientes com Doppler > 200 cm/s e vasoespasmo em grandes vasos.",
        en: "Endovascular treatment is contraindicated in patients with Doppler > 200 cm/s and large vessel vasospasm.",
        es: "El tratamiento endovascular está contraindicado en pacientes con Doppler > 200 cm/s y vasoespasmo de grandes vasos."
      },
      explanation: {
        pt: "**INCORRETA.** Essa é a afirmativa incorrect. Doppler com velocidades > 200 cm/s em território correspondente a déficit neurológico e vasoespasmo proximal é uma das principais indicações para intervenção endovascular, segundo a SNIS (2022) e AHA/ASA (2021).",
        en: "**INCORRECT.** This is the incorrect statement. Doppler > 200 cm/s in symptomatic proximal vasospasm is a key indication for endovascular treatment per SNIS (2022) and AHA/ASA (2021).",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. Velocidades > 200 cm/s en vasoespasmo proximal sintomático son indicación clásica de terapia endovascular (SNIS 2022, AHA/ASA 2021)."
      }
    }
  ]
},
{
  id: 405,
  code: "neuro04-q405",
    areas: ["neuro+icu", "neuro"],
  topics: ["intracranial hypertension", "uremia", "renal replacement therapy", "dialysis", "osmolarity"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Homem de 54 anos, previamente hipertenso e diabético, é admitido na UTI com rebaixamento do nível de consciência, crises convulsivas e sinais clínicos de hipertensão intracraniana (midríase assimétrica, vômitos, GCS 7). TC de crânio evidencia edema cerebral difuso sem lesões focais. Ureia: 258 mg/dL; creatinina: 6,3 mg/dL; Na⁺: 132 mEq/L; K⁺: 6,0 mEq/L; pH: 7,18. ECG com ondas T apiculadas e alargamento de QRS. A equipe considera início de terapia renal substitutiva (TRS). Todas as afirmativas abaixo estão corrects, **exceto**:",
    en: "A 54-year-old man with hypertension and diabetes is admitted to the ICU with altered consciousness, seizures, and clinical signs of intracranial hypertension (anisocoria, vomiting, GCS 7). Brain CT shows diffuse cerebral edema without focal lesions. Urea: 258 mg/dL; creatinine: 6.3 mg/dL; Na⁺: 132 mEq/L; K⁺: 6.0 mEq/L; pH: 7.18. ECG shows peaked T waves and QRS widening. The team considers starting renal replacement therapy (RRT). All of the following statements are correct, **except**:",
    es: "Hombre de 54 años, hipertenso y diabético, ingresa en UCI con alteración de conciencia, convulsiones y signos clínicos de hipertensión intracraneal (midriasis asimétrica, vómitos, GCS 7). La TC craneal muestra edema cerebral difuso sin lesiones focales. Urea: 258 mg/dL; creatinina: 6,3 mg/dL; Na⁺: 132 mEq/L; K⁺: 6,0 mEq/L; pH: 7,18. El ECG muestra ondas T picudas y QRS ancho. El equipo considera iniciar terapia renal sustitutiva (TRS). Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A hipercalemia com alterações eletrocardiográficas é indicação absoluta de início imediato de TRS.",
        en: "Hyperkalemia with ECG changes is an absolute indication for immediate RRT initiation.",
        es: "La hiperpotasemia con cambios en el ECG es indicación absoluta para iniciar TRS de forma inmediata."
      },
      explanation: {
        pt: "Segundo as diretrizes KDIGO (2012) e ESICM (2020), hipercalemia grave com sinais eletrocardiográficos impõe início urgente de diálise, independentemente do context neurológico.",
        en: "KDIGO (2012) and ESICM (2020) recommend immediate dialysis for severe hyperkalemia with ECG abnormalities, regardless of neurological status.",
        es: "Las guías KDIGO (2012) y ESICM (2020) indican TRS urgente ante hiperpotasemia severa con alteraciones en el ECG."
      }
    },
    {
      text: {
        pt: "Hemodiálise convencional é preferível por remover ureia mais rapidamente e controlar melhor a hipercalemia aguda.",
        en: "Conventional hemodialysis is preferred due to faster urea clearance and better acute hyperkalemia control.",
        es: "La hemodiálisis convencional es preferida por su depuración rápida de urea y mejor control de la hiperpotasemia aguda."
      },
      explanation: {
        pt: "**INCORRETA.** Em pacientes com HIC, diálise rápida pode causar gradiente osmótico reverso, com risco de edema cerebral dialítico. A NCS (Neurocritical Care Society) recomenda métodos lentos ou descontínuos (SLED, CVVHDF) para evitar flutuações osmóticas abruptas.",
        en: "**INCORRECT.** In HIC patients, rapid solute shifts may worsen cerebral edema (dialysis disequilibrium). NCS recommends slow or hybrid RRT (e.g., SLED, CVVHDF) to avoid osmotic rebound.",
        es: "**INCORRECTA.** En pacientes con HIC, los cambios osmóticos rápidos pueden agravar el edema cerebral (síndrome dialítico). NCS recomienda técnicas lentas o híbridas (SLED, CVVHDF)."
      }
    },
    {
      text: {
        pt: "Modificações na osmolaridade plasmática durante TRS devem ser minimizadas em pacientes com HIC ou edema cerebral.",
        en: "Plasma osmolarity shifts during RRT should be minimized in patients with HIC or cerebral edema.",
        es: "Los cambios en la osmolaridad plasmática durante TRS deben minimizarse en pacientes con HIC o edema cerebral."
      },
      explanation: {
        pt: "Estudos observacionais e recomendações da NCS indicam que oscilações osmóticas > 15 mOsm/L durante TRS estão associadas a piora de HIC e deterioração neurológica.",
        en: "Observational data and NCS guidance associate osmolar shifts >15 mOsm/L with worsening HIC and poor outcomes.",
        es: "Datos observacionales y guías NCS asocian cambios osmóticos >15 mOsm/L con empeoramiento de HIC y mal pronóstico."
      }
    },
    {
      text: {
        pt: "TRS pode ser iniciada de forma segura se forem usados protocolos de fluxo reduzido com ajustes progressivos.",
        en: "RRT can be safely started using low-flow protocols with gradual adjustment.",
        es: "La TRS puede iniciarse de forma segura con protocolos de bajo flujo y ajuste progresivo."
      },
      explanation: {
        pt: "A técnica SLED (hemodiálise lenta de curta duração) ou CVVHDF permite remoção controlada e é recomendada por KDIGO e ESICM para pacientes neurológicos críticos.",
        en: "SLED or CVVHDF enables controlled clearance and is recommended by KDIGO and ESICM for neurocritical patients.",
        es: "SLED o CVVHDF permiten depuración controlada y son recomendadas por KDIGO y ESICM en pacientes neurocríticos."
      }
    },
    {
      text: {
        pt: "A escolha da técnica dialítica deve considerar tanto a gravidade metabólica quanto o risco de piora neurológica.",
        en: "Dialysis modality should account for both metabolic urgency and neurologic risk.",
        es: "La modalidad de diálisis debe considerar tanto la urgencia metabólica como el riesgo neurológico."
      },
      explanation: {
        pt: "As diretrizes da Neurocritical Care Society (2021) destacam a importância de equilibrar urgência clínica e risco cerebral, especialmente em pacientes com HIC e status epiléptico.",
        en: "NCS guidelines (2021) highlight the need to balance metabolic urgency and cerebral risk, especially in HIC and seizure settings.",
        es: "Las guías NCS (2021) subrayan el equilibrio entre urgencia metabólica y riesgo cerebral, particularmente en HIC y crisis epilépticas."
      }
    }
  ]
},
{
  id: 406,
  code: "neuro04-q406",
    areas: ["neuro+icu", "neuro"],
  topics: ["brain death", "transcranial doppler", "ancillary testing", "neurosonology", "ethics"],
  level: "very_hard",
  correct: 3,
  question: {
    pt: "Homem de 46 anos, vítima de traumatismo cranioencefálico grave, evolui para coma profundo com Glasgow 3, ausência de reflexos troncoencefálicos e apneia persistente. Após testes clínicos seriados e exclusão de causas reversíveis, decide-se por um exame complementar para confirmar morte encefálica. O Doppler transcraniano (DTC) é realizado. Sobre o uso do DTC nessa situação, assinale a alternativa incorrect:",
    en: "A 46-year-old man, victim of severe traumatic brain injury, evolves into a deep coma with a Glasgow Coma Scale of 3, absent brainstem reflexes, and persistent apnea. After serial clinical tests and exclusion of reversible causes, an ancillary test is chosen to confirm brain death. Transcranial Doppler (TCD) is performed. Regarding the use of TCD in this context, select the incorrect statement:",
    es: "Hombre de 46 años, víctima de traumatismo craneoencefálico grave, evoluciona a coma profundo con puntuación de Glasgow 3, ausencia de reflejos del tronco encefálico y apnea persistente. Tras pruebas clínicas seriadas y exclusión de causas reversibles, se decide realizar un examen complementario para confirmar muerte encefálica. Se realiza Doppler transcraneal (DTC). En relación con su uso en este context, señale la afirmación incorrecta:"
  },
  options: [
    {
      text: {
        pt: "A presença de fluxo reverberante ou sinais de parada circulatória em ambas as artérias cerebrais médias pode ser compatível com morte encefálica.",
        en: "The presence of reverberating flow or signs of circulatory arrest in both middle cerebral arteries may be compatible with brain death.",
        es: "La presencia de flujo reverberante o signos de paro circulatorio en ambas arterias cerebrales medias puede ser compatible con muerte encefálica."
      },
      explanation: {
        pt: "Esse padrão, especialmente quando bilateral e sustentado, é um dos critérios aceitos internacionalmente como compatível com ausência de perfusão cerebral.",
        en: "This bilateral and sustained pattern is internationally accepted as compatible with cerebral circulatory arrest.",
        es: "Este patrón bilateral sostenido es un criterio aceptado internacionalmente como compatible con paro circulatorio cerebral."
      }
    },
    {
      text: {
        pt: "A ausência de janelas acústicas adequadas inviabiliza o uso do DTC como teste confirmatório isolado para morte encefálica.",
        en: "The absence of adequate acoustic windows invalidates the use of TCD as a stand-alone confirmatory test for brain death.",
        es: "La ausencia de ventanas acústicas adecuadas invalida el uso del DTC como prueba confirmatoria única para muerte encefálica."
      },
      explanation: {
        pt: "Sem janelas temporais ou occipitais, não é possível documentar fluxo em vasos intracranianos, exigindo outro método diagnóstico.",
        en: "Without temporal or occipital windows, intracranial flow cannot be documented, requiring another diagnostic method.",
        es: "Sin ventanas temporales u occipitales, no se puede documentar el flujo intracraneal y se requiere otro método diagnóstico."
      }
    },
    {
      text: {
        pt: "Em alguns países, é necessário repetir o exame com intervalo mínimo de 30 minutos para validação legal do diagnóstico.",
        en: "In some countries, repeating the test after a minimum 30-minute interval is required for legal validation of the diagnosis.",
        es: "En algunos países, se requiere repetir el examen con un intervalo mínimo de 30 minutos para validar legalmente el diagnóstico."
      },
      explanation: {
        pt: "Normas variam por país. No Brasil, por exemplo, exige-se repetição em intervalos definidos em adultos. Já nos EUA, a exigência depende da legislação estadual.",
        en: "Regulations vary. In Brazil, repetition at defined intervals is required for adults. In the US, it depends on state law.",
        es: "Las normativas varían. En Brasil se exige repetición en adultos. En EE.UU. depende de la legislación del estado."
      }
    },
    {
      text: {
        pt: "A visualização de fluxo anterógrado contínuo nas artérias cerebrais anteriores confirma o diagnóstico de morte encefálica.",
        en: "The visualization of continuous antegrade flow in the anterior cerebral arteries confirms the diagnosis of brain death.",
        es: "La visualización de flujo anterógrado continuo en las arterias cerebrales anteriores confirma el diagnóstico de muerte encefálica."
      },
      explanation: {
        pt: "**INCORRETA.** Fluxo anterógrado contínuo indica presença de perfusão cerebral, o que é incompatível com o diagnóstico de morte encefálica.",
        en: "**INCORRECT.** Continuous antegrade flow indicates cerebral perfusion, which is incompatible with brain death diagnosis.",
        es: "**INCORRECTA.** El flujo anterógrado continuo indica perfusión cerebral, lo cual es incompatible con el diagnóstico de muerte encefálica."
      }
    }
  ]
},
{
  id: 407,
  code: "neuro04-q407",
    areas: ["neuro+icu", "neuro"],
  topics: ["intracerebral hemorrhage", "venous hypertension", "cerebral venous thrombosis", "posterior fossa", "anticoagulation"],
  level: "very_hard",
  correct: 1,
  question: {
    pt: "Homem de 59 anos, previamente hígido, apresenta cefaleia súbita intensa e desequilíbrio ao caminhar. É admitido com rebaixamento progressivo do nível de consciência (GCS 10), vômitos e rigidez de nuca. TC de crânio revela hemorragia cerebelar direita e sinais de compressão do quarto ventrículo. AngioTC evidencia sinais indiretos de trombose do seio transverso direito com congestão venosa local. Após estabilização clínica, a equipe discute conduta. Todas as afirmativas abaixo estão corrects, **exceto**:",
    en: "A 59-year-old previously healthy man presents with sudden severe headache and gait imbalance. He is admitted with progressive decreased consciousness (GCS 10), vomiting, and neck stiffness. Head CT shows right cerebellar hemorrhage with fourth ventricle compression. CTA reveals indirect signs of right transverse sinus thrombosis and local venous congestion. After clinical stabilization, the team discusses management. All of the following statements are correct, **except**:",
    es: "Hombre de 59 años previamente sano presenta cefalea súbita intensa e inestabilidad al caminar. Ingresa con disminución progresiva del level de conciencia (GCS 10), vómitos y rigidez de nuca. La TC craneal muestra hemorragia cerebelosa derecha con compresión del cuarto ventrículo. La angioTC revela signos indirectos de trombosis del seno transverso derecho con congestión venosa local. Tras estabilización clínica, el equipo discute la conducta. Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "A anticoagulação plena pode ser indicada mesmo na presença de hemorragia, desde que não haja herniação iminente.",
        en: "Full anticoagulation may be indicated even in the presence of hemorrhage, provided there is no imminent herniation.",
        es: "La anticoagulación plena puede estar indicada incluso con hemorragia si no hay herniación inminente."
      },
      explanation: {
        pt: "Segundo a AHA/ASA (2011) e a ESO (2017), a anticoagulação com heparina é recomendada em trombose venosa cerebral, mesmo com AVCh, desde que o risco de expansão não supere o benefício de recanalização.",
        en: "According to AHA/ASA (2011) and ESO (2017), anticoagulation with heparin is recommended in cerebral venous thrombosis, even with ICH, if the risk of expansion does not outweigh the benefit.",
        es: "Según AHA/ASA (2011) y ESO (2017), la anticoagulación con heparina está indicada en trombosis venosa cerebral incluso con hemorragia, si el beneficio supera el riesgo de expansión."
      }
    },
    {
      text: {
        pt: "A hemorragia cerebelar pode ser secundária à hipertensão venosa local por trombose do seio transverso.",
        en: "Cerebellar hemorrhage may be secondary to local venous hypertension due to transverse sinus thrombosis.",
        es: "La hemorragia cerebelosa puede deberse a hipertensión venosa local por trombosis del seno transverso."
      },
      explanation: {
        pt: "A fisiopatologia inclui congestão retrógrada dos vasos perfurantes, ruptura capilar e extravasamento hemorrágico, comum em tromboses de drenagem posterior.",
        en: "Pathophysiology involves retrograde congestion, capillary rupture, and hemorrhagic extravasation, frequent in posterior drainage thrombosis.",
        es: "La fisiopatología incluye congestión retrógrada, ruptura capilar y extravasación hemorrágica, común en trombosis de drenaje posterior."
      }
    },
    {
      text: {
        pt: "A cirurgia descompressiva pode ser necessária se houver compressão do tronco encefálico ou hidrocefalia obstrutiva.",
        en: "Decompressive surgery may be required in cases of brainstem compression or obstructive hydrocephalus.",
        es: "La cirugía descompresiva puede ser necesaria si hay compresión del tronco encefálico o hidrocefalia obstructiva."
      },
      explanation: {
        pt: "Em casos com sinais de compressão do IV ventrículo, desvio da linha média ou deterioração clínica, a craniectomia descompressiva ou derivação ventricular está indicada.",
        en: "In cases with fourth ventricle compression, midline shift, or clinical deterioration, decompressive craniectomy or ventricular shunting is indicated.",
        es: "Ante compresión del IV ventrículo, desviación de línea media o deterioro clínico, se indica craniectomía descompresiva o derivación."
      }
    },
    {
      text: {
        pt: "A anticoagulação está absolutamente contraindicada em qualquer tipo de hemorragia cerebelar aguda.",
        en: "Anticoagulation is absolutely contraindicated in any type of acute cerebellar hemorrhage.",
        es: "La anticoagulación está absolutamente contraindicada en cualquier tipo de hemorragia cerebelosa aguda."
      },
      explanation: {
        pt: "**INCORRETA.** Essa é a afirmativa incorrect. A presença de hemorragia cerebelar por trombose venosa não contraindica anticoagulação, desde que o paciente esteja estável e sem herniação ativa.",
        en: "**INCORRECT.** This is the incorrect statement. Cerebellar hemorrhage due to venous thrombosis does not absolutely contraindicate anticoagulation if the patient is stable and without ongoing herniation.",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. La hemorragia cerebelosa por trombosis venosa no contraindica anticoagulación si el paciente está clínicamente estable y sin herniación."
      }
    }
  ]
},
{
  id: 408,
  code: "neuro04-q408",
    areas: ["neuro+icu", "neuro"],
  topics: ["intracranial hypertension", "neuroprotection", "cerebral hyperperfusion", "autoregulation", "carotid revascularization", "osmotherapy"],
  level: "very_hard",
  correct: 2,
  question: {
    pt: "Mulher de 67 anos, hipertensa e dislipidêmica, é submetida a endarterectomia de carótida direita por estenose crítica sintomática. Evolui no pós-operatório imediato com agitação, cefaleia intensa, hipertensão arterial (PA 200x110 mmHg) e sonolência progressiva. TC de crânio sem sinais de AVC. PIC monitorada mostra pressão intracraniana de 26 mmHg, com pressão de perfusão cerebral (PPC) em 90 mmHg. O EEG mostra lentificação difusa sem descargas epileptiformes. A equipe considera tratar a hipertensão intracraniana. Todas as afirmações abaixo estão corrects, **exceto**:",
    en: "A 67-year-old woman with hypertension and dyslipidemia undergoes right carotid endarterectomy for symptomatic critical stenosis. In the immediate postoperative period, she develops agitation, severe headache, high blood pressure (200/110 mmHg), and progressive somnolence. Brain CT shows no infarct. ICP monitoring reveals intracranial pressure of 26 mmHg and cerebral perfusion pressure (CPP) of 90 mmHg. EEG shows diffuse slowing without epileptiform discharges. The team considers treatment for intracranial hypertension. All of the following statements are correct, **except**:",
    es: "Mujer de 67 años, hipertensa y dislipidémica, se somete a endarterectomía carotídea derecha por estenosis crítica sintomática. En el postoperatorio inmediato presenta agitación, cefalea intensa, hipertensión arterial (PA 200x110 mmHg) y somnolencia progresiva. La TC craneal no muestra infarto. La PIC es de 26 mmHg y la PPC de 90 mmHg. El EEG muestra enlentecimiento difuso sin descargas epilépticas. El equipo considera tratar la hipertensión intracraneal. Todas las afirmaciones son correctas, **excepto**:"
  },
  options: [
    {
      text: {
        pt: "O quadro é compatível com síndrome de hiperperfusão cerebral, que pode ocorrer após revascularização carotídea.",
        en: "The clinical picture is compatible with cerebral hyperperfusion syndrome, which may occur after carotid revascularization.",
        es: "El cuadro clínico es compatible con síndrome de hiperperfusión cerebral, que puede presentarse tras revascularización carotídea."
      },
      explanation: {
        pt: "A síndrome de hiperperfusão cerebral ocorre em até 3% dos pacientes após endarterectomia ou stent carotídeo, especialmente com perda da autorregulação em territórios cronicamente hipoperfundidos.",
        en: "Cerebral hyperperfusion syndrome occurs in up to 3% of patients after carotid surgery, especially when autoregulation is impaired.",
        es: "El síndrome de hiperperfusión cerebral ocurre hasta en el 3% de los pacientes tras cirugía carotídea, especialmente con disautoregulación."
      }
    },
    {
      text: {
        pt: "O uso de manitol e hiperventilação deve ser prioritário para reduzir rapidamente a pressão intracraniana.",
        en: "Mannitol and hyperventilation should be prioritized to rapidly reduce intracranial pressure.",
        es: "Se debe priorizar el uso de manitol e hiperventilación para reducir rápidamente la presión intracraneal."
      },
      explanation: {
        pt: "**INCORRETA.** Essa é a afirmativa incorrect. Em contexts de hiperperfusão, medidas que reduzem a resistência vascular cerebral (como manitol ou hipocapnia) podem agravar o fluxo cerebral e aumentar o risco de hemorragia. O tratamento deve focar em controle rigoroso da PA.",
        en: "**INCORRECT.** This is the incorrect statement. In hyperperfusion contexts, mannitol or hypocapnia may lower vascular resistance and worsen perfusion, increasing hemorrhagic risk. Management should focus on strict BP control.",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. En casos de hiperperfusión, el manitol o la hipocapnia pueden aumentar el flujo cerebral y el riesgo de hemorragia. El manejo debe centrarse en el control estricto de la PA."
      }
    },
    {
      text: {
        pt: "O EEG pode ser útil no diagnóstico diferencial com estado de mal não convulsivo em pacientes com alteração do nível de consciência.",
        en: "EEG may help differentiate from nonconvulsive status epilepticus in patients with altered consciousness.",
        es: "El EEG puede ayudar en el diagnóstico diferencial con estatus no convulsivo en pacientes con alteración de la conciencia."
      },
      explanation: {
        pt: "Lentificação difusa sem descargas sugere encefalopatia metabólica ou vascular, mas o EEG é essencial para afastar causas eletrográficas ocultas como status não convulsivo.",
        en: "Diffuse slowing without discharges suggests metabolic or vascular encephalopathy, but EEG helps exclude hidden electrographic status.",
        es: "El enlentecimiento difuso sugiere encefalopatía metabólica o vascular, pero el EEG es útil para excluir estatus oculto."
      }
    },
    {
      text: {
        pt: "A redução da pressão arterial deve ser feita com agentes que não causem vasodilatação cerebral adicional.",
        en: "Blood pressure should be lowered using agents that do not cause further cerebral vasodilation.",
        es: "La reducción de la presión arterial debe realizarse con fármacos que no causen vasodilatación cerebral adicional."
      },
      explanation: {
        pt: "Beta-bloqueadores ou nicardipina são frequentemente preferidos. Evita-se nitroprussiato e vasodilatadores potentes por risco de agravamento da hiperperfusão.",
        en: "Beta-blockers or nicardipine are often preferred. Nitroprusside and potent vasodilators are avoided due to hyperperfusion risk.",
        es: "Los betabloqueantes o la nicardipina son preferidos. Se evita nitroprusiato y vasodilatadores potentes por riesgo de hiperperfusión."
      }
    }
  ]
},
{
    id: 409,
    code: "neuro04-q409",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["ischemic stroke", "COVID-19", "hypercoagulability", "thrombosis", "anticoagulation"],
    level: "very_hard",
    correct: 2,
    question: {
      pt: "Homem de 39 anos, previamente hígido, é admitido na UTI com AVC isquêmico extenso em território da ACM esquerda, após 10 dias de internação por pneumonia grave por COVID-19 com necessidade de ventilação mecânica. Apresentava dímero-D > 4000 ng/mL, trombocitose e ferritina elevada. Estava em heparina de baixo peso molecular profilática. AngioTC mostra trombose em carótida interna esquerda. Não há evidência de fibrilação atrial. Todas as options abaixo estão corrects, **exceto**:",
      en: "A 39-year-old previously healthy man is admitted to the ICU with a large ischemic stroke in the left MCA territory, 10 days into hospitalization for severe COVID-19 pneumonia requiring mechanical ventilation. Labs show D-dimer > 4000 ng/mL, thrombocytosis, and elevated ferritin. He was on prophylactic low-molecular-weight heparin. CTA reveals left internal carotid artery thrombosis. No evidence of atrial fibrillation. All statements below are correct, **except**:",
      es: "Hombre de 39 años previamente sano es admitido en UCI con ictus isquémico extenso en el territorio de la ACM izquierda, tras 10 días de hospitalización por neumonía grave por COVID-19 con ventilación mecánica. Dímero-D > 4000 ng/mL, trombocitosis y ferritina elevada. Estaba con heparina de bajo peso molecular profiláctica. AngioTC muestra trombosis en carótida interna izquierda. Sin evidencia de fibrilación auricular. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "Pacientes com COVID-19 apresentam risco aumentado de eventos trombóticos arteriais e venosos, mesmo com profilaxia.",
          en: "COVID-19 patients have increased risk of arterial and venous thrombotic events, even under prophylaxis.",
          es: "Los pacientes con COVID-19 presentan mayor riesgo de eventos trombóticos arteriales y venosos, incluso con profilaxis."
        },
        explanation: {
          pt: "Estudos como o ATTACC/REMAP-CAP/ACTIV-4 (NEJM, 2021) demonstraram hipercoagulabilidade persistente em pacientes críticos, com incidência de eventos arteriais mesmo sob profilaxia padrão.",
          en: "Trials like ATTACC/REMAP-CAP/ACTIV-4 (NEJM, 2021) showed persistent hypercoagulability in critically ill patients, with arterial events despite standard prophylaxis.",
          es: "Estudios como ATTACC/REMAP-CAP/ACTIV-4 (NEJM, 2021) demostraron hipercoagulabilidad persistente, con eventos arteriales incluso bajo profilaxis estándar."
        }
      },
      {
        text: {
          pt: "A trombólise intravenosa pode ser considerada caso o diagnóstico seja precoce e não haja contraindicações, mesmo em COVID-19.",
          en: "IV thrombolysis may be considered in early diagnosis without contraindications, even in COVID-19.",
          es: "La trombólisis IV puede considerarse si el diagnóstico es precoz y no hay contraindicaciones, incluso en COVID-19."
        },
        explanation: {
          pt: "Segundo a AHA/ASA (2021) e ESO (2022), a COVID-19 por si só não contraindica trombólise. O tratamento segue critérios habituais com avaliação individualizada do risco.",
          en: "AHA/ASA (2021) and ESO (2022) state that COVID-19 alone is not a contraindication to thrombolysis. Treatment follows standard criteria with individualized risk assessment.",
          es: "AHA/ASA (2021) y ESO (2022) indican que COVID-19 no contraindica trombólisis per se. Se aplican criterios habituales con valoración individual del riesgo."
        }
      },
      {
        text: {
          pt: "A anticoagulação plena com heparina de baixo peso molecular é contraindicada em pacientes com AVC isquêmico recente por risco de transformação hemorrágica.",
          en: "Full anticoagulation with LMWH is contraindicated in recent ischemic stroke due to risk of hemorrhagic transformation.",
          es: "La anticoagulación plena con HBPM está contraindicada en ictus isquémico reciente por riesgo de transformación hemorrágica."
        },
        explanation: {
          pt: "**INCORRETA.** Em casos com evidência de trombose arterial relacionada à COVID-19 (como neste caso), a anticoagulação terapêutica pode ser indicada com monitoramento rigoroso. Diretrizes da ESC (2022) e ISTH sugerem individualização da conduta conforme risco-benefício.",
          en: "**INCORRECT.** In COVID-associated arterial thrombosis, full anticoagulation may be warranted with careful monitoring. ESC (2022) and ISTH recommend individualized decisions based on risk-benefit.",
          es: "**INCORRECTA.** En trombosis arterial asociada a COVID, puede indicarse anticoagulación plena con monitorización cuidadosa. ESC (2022) e ISTH recomiendan individualizar según riesgo-beneficio."
        }
      },
      {
        text: {
          pt: "A presença de níveis elevados de dímero-D e ferritina indicam ativação imunotrombótica associada ao SARS-CoV-2.",
          en: "Elevated D-dimer and ferritin suggest immunothrombosis triggered by SARS-CoV-2.",
          es: "Dímero-D y ferritina elevados indican inmunotrombosis asociada a SARS-CoV-2."
        },
        explanation: {
          pt: "Esses marcadores refletem ativação endotelial, NETosis e resposta inflamatória exagerada. Estudos como o RAPID COVID COAG (Lancet, 2022) associam esses achados a maior risco de eventos arteriais.",
          en: "These markers reflect endothelial injury, NETosis, and exaggerated inflammatory response. RAPID COVID COAG (Lancet, 2022) links them to arterial events.",
          es: "Estos marcadores reflejan daño endotelial, NETosis y respuesta inflamatoria exacerbada. RAPID COVID COAG (Lancet, 2022) los vincula a eventos arteriales."
        }
      },
      {
        text: {
          pt: "O uso precoce de anticoagulação terapêutica em pacientes COVID-19 graves com sinais de trombose arterial pode melhorar o prognóstico.",
          en: "Early therapeutic anticoagulation in severe COVID-19 with arterial thrombosis may improve outcomes.",
          es: "El uso temprano de anticoagulación terapéutica en COVID-19 grave con trombosis arterial puede mejorar el pronóstico."
        },
        explanation: {
          pt: "Estudos observacionais sugerem benefício em context específico. A ESC e a ISTH recomendam anticoagulação plena em eventos arteriais documentados, mesmo com risco moderado de sangramento.",
          en: "Observational studies suggest benefit in this context. ESC and ISTH recommend full anticoagulation in documented arterial events, even with moderate bleeding risk.",
          es: "Estudios observacionales sugieren beneficio en este context. ESC e ISTH recomiendan anticoagulación plena en eventos arteriales documentados, incluso con riesgo moderado de sangrado."
        }
      }
    ]
  },
  {
    id: 410,
    code: "neuro04-q410",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["ARDS", "ventilation", "intracranial pressure", "permissive hypercapnia", "neuroprotection", "lung-brain interaction"],
    level: "very_hard",
    correct: 3,
    question: {
      pt: "Homem de 51 anos com hemorragia subaracnóidea grau IV (WFNS) evolui com edema cerebral difuso e hipertensão intracraniana, sendo submetido à monitorização da PIC. No 3º dia, desenvolve síndrome do desconforto respiratório agudo (SDRA) com PaO₂/FiO₂ < 100 e infiltrado bilateral. Está em ventilação protetora com PEEP de 12 cmH₂O e PaCO₂ de 62 mmHg. Todas as options estão corrects, **exceto**:",
      en: "A 51-year-old man with grade IV subarachnoid hemorrhage (WFNS) develops diffuse cerebral edema and intracranial hypertension, monitored with ICP. On day 3, he develops ARDS with PaO₂/FiO₂ < 100 and bilateral infiltrates. He is on protective ventilation with PEEP of 12 cmH₂O and PaCO₂ of 62 mmHg. All of the following statements are correct, **except**:",
      es: "Hombre de 51 años con hemorragia subaracnoidea grado IV (WFNS) evoluciona con edema cerebral difuso e hipertensión intracraneal, con monitoreo de PIC. En el día 3 desarrolla SDRA con PaO₂/FiO₂ < 100 e infiltrados bilaterales. Está en ventilación protectora con PEEP de 12 cmH₂O y PaCO₂ de 62 mmHg. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A hipercapnia permissiva pode elevar a PIC e deve ser evitada em pacientes com hipertensão intracraniana descompensada.",
          en: "Permissive hypercapnia may raise ICP and should be avoided in decompensated intracranial hypertension.",
          es: "La hipercapnia permisiva puede aumentar la PIC y debe evitarse en hipertensión intracraneal descompensada."
        },
        explanation: {
          pt: "A elevação do CO₂ causa vasodilatação cerebral, o que pode agravar a hipertensão intracraniana. Recomenda-se manter PaCO₂ entre 35–40 mmHg em pacientes com PIC elevada.",
          en: "Elevated CO₂ leads to cerebral vasodilation, potentially worsening ICP. PaCO₂ should be kept at 35–40 mmHg in raised ICP.",
          es: "El CO₂ elevado provoca vasodilatación cerebral, lo que puede agravar la PIC. Se recomienda mantener PaCO₂ entre 35–40 mmHg en estos casos."
        }
      },
      {
        text: {
          pt: "PEEP elevada pode aumentar a pressão intratorácica e reduzir o retorno venoso cerebral.",
          en: "High PEEP may increase intrathoracic pressure and impair cerebral venous return.",
          es: "La PEEP alta puede aumentar la presión intratorácica y dificultar el retorno venoso cerebral."
        },
        explanation: {
          pt: "PEEP acima de 10 cmH₂O pode interferir na drenagem venosa cerebral, contribuindo para elevação da PIC em pacientes vulneráveis.",
          en: "PEEP >10 cmH₂O may impair cerebral venous drainage, contributing to increased ICP in susceptible patients.",
          es: "La PEEP >10 cmH₂O puede dificultar el drenaje venoso cerebral y aumentar la PIC en pacientes vulnerables."
        }
      },
      {
        text: {
          pt: "A PaCO₂ de 62 mmHg é adequada para melhorar a oxigenação e não interfere significativamente na PIC.",
          en: "A PaCO₂ of 62 mmHg is appropriate to improve oxygenation and does not significantly affect ICP.",
          es: "Una PaCO₂ de 62 mmHg es adecuada para mejorar la oxigenación y no afecta significativamente la PIC."
        },
        explanation: {
          pt: "**INCORRETA.** Esse nível de hipercapnia pode agravar a PIC. Estratégias ventilatórias em pacientes com lesão cerebral grave devem priorizar normocapnia sempre que possível.",
          en: "**INCORRECT.** This level of hypercapnia can worsen ICP. In brain-injured patients, ventilation should prioritize normocapnia whenever possible.",
          es: "**INCORRECTA.** Este level de hipercapnia puede empeorar la PIC. Se debe priorizar la normocapnia en pacientes con lesión cerebral."
        }
      },
      {
        text: {
          pt: "A ventilação protetora deve ser mantida com Vt de 6 mL/kg mesmo em pacientes neurocríticos.",
          en: "Protective ventilation with 6 mL/kg tidal volume should be maintained even in neurocritical patients.",
          es: "La ventilación protectora con Vt de 6 mL/kg debe mantenerse incluso en pacientes neurocríticos."
        },
        explanation: {
          pt: "Diretrizes de ventilação em neurointensivismo recomendam manter estratégia protetora, com ajustes individualizados conforme resposta cerebral e respiratória.",
          en: "Neurocritical care ventilation guidelines recommend maintaining lung-protective strategy with case-by-case adjustments.",
          es: "Las guías de cuidados neurocríticos recomiendan mantener ventilación protectora con ajustes individualizados."
        }
      }
    ]
  },
{
    id: 411,
    code: "neuro04-q411",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["intracranial hypertension", "tiered therapy", "decompressive craniectomy", "prognosis", "ethics"],
    level: "very_hard",
    correct: 1,
    question: {
      pt: "Mulher de 74 anos, com histórico de hipertensão e diabetes, é internada após TCE grave por queda. TC mostra contusão frontal extensa e desvio da linha média de 9 mm. PIC monitorada com valores sustentados > 28 mmHg por 6 horas, refratária a sedação, osmoterapia e hiperventilação leve. A equipe considera craniectomia descompressiva. Todas as afirmações abaixo estão corrects, **exceto**:",
      en: "A 74-year-old woman with a history of hypertension and diabetes is admitted after severe TBI from a fall. CT shows large frontal contusion and 9 mm midline shift. ICP is monitored and remains >28 mmHg for 6 hours despite sedation, osmotherapy, and mild hyperventilation. The team considers decompressive craniectomy. All statements below are correct, **except**:",
      es: "Mujer de 74 años con antecedentes de hipertensión y diabetes es ingresada tras TCE grave por caída. La TC muestra contusión frontal extensa y desviación de línea media de 9 mm. La PIC permanece >28 mmHg durante 6 horas pese a sedación, osmoterapia e hiperventilación leve. El equipo considera craniectomía descompresiva. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "Craniectomia descompressiva pode reduzir a mortalidade em pacientes com HIC refratária pós-TCE.",
          en: "Decompressive craniectomy can reduce mortality in patients with refractory ICP after TBI.",
          es: "La craniectomía descompresiva puede reducir la mortalidad en pacientes con PIC refractaria tras TCE."
        },
        explanation: {
          pt: "Estudos como o DECRA e o RESCUEicp mostram redução de mortalidade, mas com risco de sobrevida com sequelas graves.",
          en: "DECRA and RESCUEicp trials show reduced mortality, but increased survival with severe disability.",
          es: "Los estudios DECRA y RESCUEicp muestran reducción de mortalidad pero con mayor supervivencia con secuelas graves."
        }
      },
      {
        text: {
          pt: "A idade avançada e comorbidades devem ser consideradas na decisão por craniectomia descompressiva.",
          en: "Advanced age and comorbidities must be considered when deciding on decompressive craniectomy.",
          es: "La edad avanzada y las comorbilidades deben considerarse al decidir una craniectomía descompresiva."
        },
        explanation: {
          pt: "Idade > 70 anos está associada a pior desfecho funcional após craniectomia, segundo subanálises do RESCUEicp e diretrizes da ESICM.",
          en: "Age >70 is linked to worse functional outcomes post-craniectomy per RESCUEicp subanalyses and ESICM guidelines.",
          es: "La edad >70 años se asocia con peor evolución funcional tras craniectomía según RESCUEicp y guías ESICM."
        }
      },
      {
        text: {
          pt: "Discussões com familiares e equipe multidisciplinar são essenciais antes de uma decisão invasiva e prognóstico incerto.",
          en: "Discussions with family and multidisciplinary team are essential before invasive decisions with uncertain prognosis.",
          es: "Las discusiones con familia y equipo multidisciplinar son esenciales antes de decisiones invasivas con pronóstico incierto."
        },
        explanation: {
          pt: "A bioética clínica recomenda planejamento compartilhado, especialmente em intervenções com alto risco de incapacidade.",
          en: "Clinical bioethics recommends shared planning, especially for high-risk interventions with potential disability.",
          es: "La bioética clínica recomienda planificación compartida, especialmente ante intervenciones con riesgo de discapacidad."
        }
      },
      {
        text: {
          pt: "A craniectomia descompressiva está indicada em qualquer paciente com PIC > 25 mmHg por mais de 30 minutos.",
          en: "Decompressive craniectomy is indicated in any patient with ICP > 25 mmHg for over 30 minutes.",
          es: "La craniectomía descompresiva está indicada en cualquier paciente con PIC > 25 mmHg por más de 30 minutos."
        },
        explanation: {
          pt: "**INCORRETA.** A decisão depende do context clínico, idade, resposta às terapias de primeira linha e prognóstico funcional estimado.",
          en: "**INCORRECT.** Decision depends on clinical context, age, first-tier response, and estimated functional prognosis.",
          es: "**INCORRECTA.** La decisión depende del context clínico, edad, respuesta inicial y pronóstico funcional estimado."
        }
      }
    ]
  },
  {
    id: 412,
    code: "neuro04-q412",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["ventriculitis", "empirical antibiotics", "external ventricular drain", "intracranial hypertension", "CNS infections"],
    level: "very_hard",
    correct: 3,
    question: {
      pt: "Homem de 58 anos com hemorragia intraventricular por HIC está com DVE desde o 1º dia de internação. No 8º dia, desenvolve febre, rebaixamento do nível de consciência e secreção purulenta na câmara externa. LCR turvo, com 850 leucócitos/mm³ (90% neutrófilos), proteína 190 mg/dL e glicose 24 mg/dL. A equipe inicia antibioticoterapia empírica. Todas as afirmativas abaixo estão corrects, **exceto**:",
      en: "A 58-year-old man with intraventricular hemorrhage due to hypertensive ICH has had an external ventricular drain (EVD) since day 1. On day 8, he develops fever, decreased consciousness, and purulent drainage in the EVD chamber. CSF is cloudy, with 850 WBC/mm³ (90% neutrophils), protein 190 mg/dL, and glucose 24 mg/dL. The team initiates empiric antibiotics. All of the following statements are correct, **except**:",
      es: "Hombre de 58 años con hemorragia intraventricular por HIC tiene una DVE desde el primer día de hospitalización. En el día 8 desarrolla fiebre, disminución de conciencia y secreción purulenta en la cámara externa. LCR turbio, con 850 leucocitos/mm³ (90% neutrófilos), proteína 190 mg/dL y glucosa 24 mg/dL. El equipo inicia antibióticos empíricos. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A combinação de vancomicina com cefepime ou meropeném é uma escolha empírica aceitável.",
          en: "Combining vancomycin with cefepime or meropenem is an acceptable empirical choice.",
          es: "Combinar vancomicina con cefepima o meropenem es una opción empírica aceptable."
        },
        explanation: {
          pt: "Segundo diretrizes da IDSA (2017), cobertura para Staphylococcus resistente e bacilos gram-negativos deve ser iniciada imediatamente em suspeita de ventriculite associada a DVE.",
          en: "According to IDSA guidelines (2017), empiric coverage for resistant staphylococci and gram-negative bacilli should be started immediately in suspected EVD-related ventriculitis.",
          es: "Según las guías de la IDSA (2017), se debe iniciar cobertura empírica para estafilococos resistentes y bacilos gramnegativos ante sospecha de ventriculitis asociada a DVE."
        }
      },
      {
        text: {
          pt: "A troca precoce da DVE está indicada em casos com sinais clínicos e laboratoriais de infecção.",
          en: "Early replacement of the EVD is indicated in cases with clinical and laboratory signs of infection.",
          es: "El recambio temprano de la DVE está indicado en presencia de signos clínicos y de laboratorio de infección."
        },
        explanation: {
          pt: "A remoção ou substituição da derivação externa é parte essencial do tratamento para controle da fonte infecciosa, conforme estudos observacionais e recomendações da ESICM.",
          en: "Removal or replacement of the EVD is essential for infection source control, as supported by observational studies and ESICM recommendations.",
          es: "La retirada o sustitución de la DVE es esencial para el control del foco infeccioso, según estudios observacionales y recomendaciones de la ESICM."
        }
      },
      {
        text: {
          pt: "A terapia intraventricular com antibióticos é preferida como abordagem inicial em todos os casos de ventriculite.",
          en: "Intraventricular antibiotic therapy is preferred as the initial approach in all cases of ventriculitis.",
          es: "El uso de antibióticos intraventriculares es preferido como enfoque inicial en todos los casos de ventriculitis."
        },
        explanation: {
          pt: "**INCORRETA.** A via intraventricular é reservada para casos refratários ou com falha da terapia sistêmica. A IDSA recomenda iniciar com antibióticos endovenosos com boa penetração no SNC.",
          en: "**INCORRECT.** Intraventricular route is reserved for refractory or treatment-failure cases. IDSA recommends starting with IV antibiotics that penetrate the CNS well.",
          es: "**INCORRECTA.** La vía intraventricular se reserva para casos refractarios o con fallo de terapia sistémica. La IDSA recomienda iniciar con antibióticos IV con buena penetración en SNC."
        }
      },
      {
        text: {
          pt: "O perfil de sensibilidade do agente isolado deve orientar ajustes terapêuticos após cultura positiva.",
          en: "Antibiotic susceptibility profile should guide therapy adjustments after a positive culture.",
          es: "El perfil de sensibilidad debe guiar los ajustes terapéuticos tras cultivo positivo."
        },
        explanation: {
          pt: "Ajustes precoces com base em cultura reduzem mortalidade e neurotoxicidade associada a esquemas de amplo espectro desnecessários.",
          en: "Early adjustment based on cultures reduces mortality and avoids neurotoxicity from unnecessary broad-spectrum antibiotics.",
          es: "Los ajustes precoces basados en cultivo reducen la mortalidad y evitan la neurotoxicidad de antibióticos innecesarios."
        }
      }
    ]
  },
  {
    id: 413,
    code: "neuro04-q413",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["biofilm", "external ventricular drain", "antimicrobial pharmacodynamics", "multidrug resistance", "CNS infections"],
    level: "very_hard",
    correct: 1,
    question: {
      pt: "Paciente de 63 anos com DVE mantida há 15 dias por hidrocefalia pós-HSA evolui com febre e alteração do nível de consciência. Cultura de LCR com crescimento de Acinetobacter baumannii multirresistente. Considerando os mecanismos de resistência e presença de biofilme, todas as afirmações abaixo estão corrects, **exceto**:",
      en: "A 63-year-old patient with an EVD in place for 15 days due to post-SAH hydrocephalus develops fever and altered mental status. CSF culture grows multidrug-resistant Acinetobacter baumannii. Considering resistance mechanisms and biofilm presence, all statements below are correct, **except**:",
      es: "Paciente de 63 años con DVE mantenida por 15 días por hidrocefalia post-HSA desarrolla fiebre y alteración del estado de conciencia. Cultivo de LCR con Acinetobacter baumannii multirresistente. Considerando los mecanismos de resistencia y biofilm, todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A presença de biofilme pode reduzir a penetração de antibióticos e favorecer a persistência da infecção.",
          en: "Biofilm presence may reduce antibiotic penetration and favor persistent infection.",
          es: "La presencia de biofilm puede reducir la penetración de antibióticos y favorecer la infección persistente."
        },
        explanation: {
          pt: "Biofilmes criam barreira física e alteram o microambiente local, dificultando ação antimicrobiana e promovendo resistência fenotípica.",
          en: "Biofilms create a physical barrier and alter the microenvironment, impairing antibiotic action and promoting phenotypic resistance.",
          es: "Los biofilms generan barrera física y alteran el microambiente, dificultando la acción de antibióticos y promoviendo resistencia fenotípica."
        }
      },
      {
        text: {
          pt: "Antibióticos como colistina e tigeciclina podem ser considerados em casos de MDR-Acinetobacter, inclusive por via intraventricular.",
          en: "Antibiotics such as colistin and tigecycline may be considered in MDR-Acinetobacter, including via intraventricular route.",
          es: "Antibióticos como colistina y tigeciclina pueden considerarse en casos de Acinetobacter multirresistente, incluso por vía intraventricular."
        },
        explanation: {
          pt: "Diretrizes IDSA e literatura de casos apoiam uso intraventricular de colistina para cepas MDR, com ajuste de dose baseado em níveis e resposta clínica.",
          en: "IDSA guidelines and case reports support intraventricular colistin for MDR strains, with dosing guided by levels and clinical response.",
          es: "Las guías IDSA y casos clínicos respaldan el uso intraventricular de colistina en cepas MDR, con dosis ajustadas según leveles y respuesta clínica."
        }
      },
      {
        text: {
          pt: "A troca da DVE pode ser necessária para erradicar biofilme e permitir controle efetivo da infecção.",
          en: "Replacing the EVD may be necessary to eradicate biofilm and allow effective infection control.",
          es: "El recambio de la DVE puede ser necesario para erradicar el biofilm y permitir el control de la infección."
        },
        explanation: {
          pt: "Biofilmes aderidos ao cateter são difíceis de esterilizar apenas com antibióticos, sendo a troca recomendada na maioria dos casos.",
          en: "Biofilm adhered to the catheter is difficult to sterilize with antibiotics alone; replacement is recommended in most cases.",
          es: "El biofilm adherido al catéter es difícil de esterilizar solo con antibióticos, por lo que se recomienda el recambio."
        }
      },
      {
        text: {
          pt: "A maioria dos antibióticos beta-lactâmicos tem excelente penetração no biofilme e são a primeira escolha nesses casos.",
          en: "Most beta-lactam antibiotics have excellent biofilm penetration and are the first choice in such cases.",
          es: "La mayoría de los antibióticos betalactámicos tiene excelente penetración en biofilm y son de primera elección en estos casos."
        },
        explanation: {
          pt: "**INCORRETA.** Beta-lactâmicos, em geral, têm penetração limitada no biofilme maduro. Antibióticos como rifampicina, fosfomicina ou colistina são mais eficazes contra microrganismos em biofilme.",
          en: "**INCORRECT.** Beta-lactams generally have poor penetration into mature biofilms. Agents like rifampin, fosfomycin, or colistin are more effective against biofilm organisms.",
          es: "**INCORRECTA.** Los betalactámicos suelen tener pobre penetración en biofilms maduros. Rifampicina, fosfomicina o colistina son más eficaces contra organismos en biofilm."
        }
      }
    ]
  },
  {
    id: 414,
    code: "neuro04-q414",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["TBI", "multimodal monitoring", "ICP", "PbtO2", "tiered therapy"],
    level: "very_hard",
    correct: 1,
    question: {
      pt: "Homem de 34 anos, vítima de colisão veicular, é admitido com TCE grave (GCS 5). TC inicial mostra contusão frontotemporal e edema difuso. Monitorização mostra PIC 24 mmHg, PbtO₂ 14 mmHg e PPC 68 mmHg. Após sedação, osmoterapia e alinhamento postural, a equipe discute próximos passos. Todas as afirmativas abaixo estão corrects, **exceto**:",
      en: "A 34-year-old man, victim of vehicle collision, is admitted with severe TBI (GCS 5). Initial CT shows frontotemporal contusion and diffuse edema. Monitoring shows ICP 24 mmHg, PbtO₂ 14 mmHg, and CPP 68 mmHg. After sedation, osmotherapy, and head elevation, the team considers next steps. All statements below are correct, **except**:",
      es: "Hombre de 34 años, víctima de accidente vehicular, ingresa con TCE grave (GCS 5). La TC inicial muestra contusión frontotemporal y edema difuso. Monitorización muestra PIC 24 mmHg, PbtO₂ 14 mmHg y PPC 68 mmHg. Tras sedación, osmoterapia y elevación cefálica, el equipo considera próximos pasos. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A PbtO₂ < 20 mmHg indica risco de hipoxia cerebral e deve guiar intervenções adicionais.",
          en: "PbtO₂ < 20 mmHg indicates cerebral hypoxia risk and should prompt further interventions.",
          es: "Una PbtO₂ < 20 mmHg indica riesgo de hipoxia cerebral y debe motivar intervenciones adicionales."
        },
        explanation: {
          pt: "Monitorização de oxigenação tecidual cerebral ajuda a orientar estratégias para otimização da perfusão e oxigenação, sendo valores < 20 mmHg indicativos de hipoxia.",
          en: "Brain tissue oxygen monitoring guides optimization of perfusion and oxygenation; values <20 mmHg suggest hypoxia.",
          es: "La monitorización de oxígeno tisular cerebral orienta estrategias de perfusión; valores <20 mmHg indican hipoxia."
        }
      },
      {
        text: {
          pt: "Terapias de segunda linha incluem paralisia neuromuscular, hiperventilação controlada e barbitúricos.",
          en: "Second-tier therapies include neuromuscular blockade, controlled hyperventilation, and barbiturates.",
          es: "Las terapias de segunda línea incluyen bloqueo neuromuscular, hiperventilación controlada y barbitúricos."
        },
        explanation: {
          pt: "Essas intervenções são recomendadas em casos refratários, com riscos associados, devendo ser monitoradas cuidadosamente.",
          en: "These are recommended in refractory cases with potential risks, requiring close monitoring.",
          es: "Estas intervenciones se recomiendan en casos refractarios con riesgo potencial y requieren monitoreo estricto."
        }
      },
      {
        text: {
          pt: "A manutenção da PPC entre 60–70 mmHg é adequada na maioria dos pacientes com TCE grave.",
          en: "Maintaining CPP between 60–70 mmHg is adequate in most severe TBI patients.",
          es: "Mantener la PPC entre 60–70 mmHg es adecuado en la mayoría de los pacientes con TCE grave."
        },
        explanation: {
          pt: "As diretrizes da Brain Trauma Foundation (2020) recomendam PPC > 60 mmHg, com alvo adaptado conforme autorregulação cerebral e oxigenação.",
          en: "Brain Trauma Foundation (2020) recommends CPP > 60 mmHg, individualized to autoregulation and oxygenation.",
          es: "La BTF (2020) recomienda PPC > 60 mmHg, individualizada según autorregulación y oxigenación."
        }
      },
      {
        text: {
          pt: "A presença de PbtO₂ > 12 mmHg descarta hipóxia e permite reduzir a PPC para < 50 mmHg com segurança.",
          en: "PbtO₂ > 12 mmHg rules out hypoxia and allows safely reducing CPP to < 50 mmHg.",
          es: "Una PbtO₂ > 12 mmHg descarta hipoxia y permite reducir la PPC a < 50 mmHg de forma segura."
        },
        explanation: {
          pt: "**INCORRETA.** Mesmo PbtO₂ > 12 mmHg não garante perfusão cerebral adequada em todos os casos. PPC < 50 mmHg está abaixo do limiar seguro em TCE grave, podendo comprometer autorregulação.",
          en: "**INCORRECT.** Even PbtO₂ > 12 mmHg doesn’t ensure adequate cerebral perfusion. CPP < 50 mmHg may impair autoregulation and is considered unsafe in severe TBI.",
          es: "**INCORRECTA.** Una PbtO₂ > 12 mmHg no garantiza perfusión adecuada. PPC < 50 mmHg puede alterar la autorregulación y es insegura en TCE grave."
        }
      }
    ]
  },
  {
    id: 415,
    code: "neuro04-q415",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["TBI", "prognosis", "decompressive craniectomy", "ethical decision", "withdrawal of care"],
    level: "very_hard",
    correct: 2,
    question: {
      pt: "Mulher de 69 anos, previamente independente, é admitida após TCE grave por atropelamento. GCS inicial 4, TC com lesão hemisférica extensa e desvio da linha média de 11 mm. Após 48h de manejo intensivo, mantém PIC > 30 mmHg e sinais de herniação. A família question sobre continuidade terapêutica. Todas as afirmativas estão corrects, **exceto**:",
      en: "A 69-year-old woman, previously independent, is admitted after severe TBI from pedestrian trauma. Initial GCS is 4. CT shows large hemispheric lesion and 11 mm midline shift. After 48h of intensive care, ICP remains >30 mmHg with signs of herniation. Family inquires about continuing treatment. All of the following statements are correct, **except**:",
      es: "Mujer de 69 años, previamente independiente, ingresa tras TCE grave por atropello. GCS inicial 4, TC muestra lesión hemisférica extensa y desviación de línea media de 11 mm. Tras 48h de manejo intensivo, PIC > 30 mmHg y signos de herniación. La familia pregunta sobre continuar tratamiento. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A craniectomia descompressiva de emergência pode reduzir mortalidade, mas está associada a maiores taxas de sobrevida com dependência.",
          en: "Emergency decompressive craniectomy may reduce mortality but is associated with higher rates of dependent survival.",
          es: "La craniectomía descompresiva de urgencia puede reducir la mortalidad pero se asocia a mayor supervivencia con dependencia."
        },
        explanation: {
          pt: "Estudos como RESCUEicp mostram essa correlação, reforçando a necessidade de discussão prévia com a família sobre desfechos possíveis.",
          en: "RESCUEicp trial supports this, stressing prior discussion with family about potential outcomes.",
          es: "El estudio RESCUEicp demuestra esta relación, subrayando la necesidad de discutir los desenlaces con la familia."
        }
      },
      {
        text: {
          pt: "Prognóstico funcional pode ser estimado com auxílio de escores como IMPACT-TBI e condição clínica inicial.",
          en: "Functional prognosis may be estimated using IMPACT-TBI scores and initial clinical condition.",
          es: "El pronóstico funcional puede estimarse con escalas como IMPACT-TBI y la condición clínica inicial."
        },
        explanation: {
          pt: "Modelos como IMPACT ajudam a estimar mortalidade e dependência severa, baseando-se em dados populacionais multicêntricos.",
          en: "Models like IMPACT estimate mortality and severe dependency, based on multicenter population data.",
          es: "Modelos como IMPACT estiman mortalidad y dependencia grave con base en datos poblacionales multicéntricos."
        }
      },
      {
        text: {
          pt: "A decisão de limitar suporte deve considerar preferências do paciente, quando conhecidas, e princípios de proporcionalidade terapêutica.",
          en: "Limiting support should consider patient preferences, when known, and principles of therapeutic proportionality.",
          es: "Limitar el soporte debe considerar las preferencias del paciente, si se conocen, y la proporcionalidad terapéutica."
        },
        explanation: {
          pt: "A ética clínica recomenda considerar diretivas antecipadas, valores do paciente e impacto do tratamento sobre a qualidade de vida.",
          en: "Clinical ethics recommend considering advance directives, patient values, and impact on quality of life.",
          es: "La ética clínica recomienda considerar directivas anticipadas, valores del paciente y el impacto sobre la calidad de vida."
        }
      },
      {
        text: {
          pt: "A ausência de melhora clínica nas primeiras 48h após TCE é indicação formal para suspensão de cuidados intensivos.",
          en: "Lack of clinical improvement in the first 48h after TBI is a formal indication to withdraw intensive care.",
          es: "La ausencia de mejoría clínica en las primeras 48h tras TCE es una indicación formal para suspender cuidados intensivos."
        },
        explanation: {
          pt: "**INCORRETA.** A decisão não deve basear-se apenas no tempo decorrido, mas na evolução neurológica, exames, idade e valores do paciente. Não há tempo fixo universal para suspender cuidados.",
          en: "**INCORRECT.** Decision should not be based on time alone but on neurologic evolution, tests, age, and patient values. No universal cutoff exists.",
          es: "**INCORRECTA.** La decisión no debe basarse solo en el tiempo, sino en evolución neurológica, exámenes, edad y valores del paciente. No hay plazo universal."
        }
      }
    ]
  },
  {
    id: 416,
    code: "neuro04-q416",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["tracheostomy", "neurosurgery", "ICP", "procedural risk", "ventilator weaning"],
    level: "very_hard",
    correct: 0,
    question: {
      pt: "Homem de 49 anos, submetido a craniotomia frontal por tumor cerebral, permanece em ventilação mecânica com GCS 6 e sem previsão de extubação. A equipe propõe traqueostomia percutânea no leito da UTI. Todas as afirmações abaixo estão corrects, **exceto**:",
      en: "A 49-year-old man underwent frontal craniotomy for brain tumor and remains on mechanical ventilation with GCS 6 and no extubation forecast. The ICU team proposes percutaneous tracheostomy. All of the following statements are correct, **except**:",
      es: "Hombre de 49 años, sometido a craneotomía frontal por tumor cerebral, permanece en ventilación mecánica con GCS 6 y sin previsión de extubación. El equipo propone traqueostomía percutánea en la UCI. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A traqueostomia percutânea está absolutamente contraindicada em todos os pacientes com hipertensão intracraniana.",
          en: "Percutaneous tracheostomy is absolutely contraindicated in all patients with intracranial hypertension.",
          es: "La traqueostomía percutánea está absolutamente contraindicada en todos los pacientes con hipertensión intracraneal."
        },
        explanation: {
          pt: "**INCORRETA.** Hipertensão intracraniana não é contraindicação absoluta, mas requer controle rigoroso da PIC durante o procedimento. Técnicas minimamente invasivas com sedação profunda podem ser seguras com monitoramento adequado.",
          en: "**INCORRECT.** ICP elevation is not an absolute contraindication. With adequate sedation and ICP control, the procedure can be safely performed.",
          es: "**INCORRECTA.** La HIC no es contraindicación absoluta. Con sedación adecuada y control de la PIC, el procedimiento puede realizarse con seguridad."
        }
      },
      {
        text: {
          pt: "A traqueostomia precoce pode easyitar o desmame da ventilação e reduzir sedação.",
          en: "Early tracheostomy may easyitate ventilator weaning and reduce sedation.",
          es: "La traqueostomía precoz puede easyitar el destete ventilatorio y reducir la sedación."
        },
        explanation: {
          pt: "Meta-análises mostram benefício em ventilação prolongada, inclusive em neurointensivismo, com menor tempo de sedação contínua e risco de pneumonia.",
          en: "Meta-analyses show benefit in prolonged ventilation, even in neurocritical care, reducing sedation time and pneumonia risk.",
          es: "Las metaanálisis muestran beneficio en ventilación prolongada, incluso en cuidados neurocríticos, reduciendo sedación y neumonía."
        }
      },
      {
        text: {
          pt: "A decisão pela traqueostomia deve considerar prognóstico neurológico e duração esperada da ventilação.",
          en: "Tracheostomy decision should consider neurologic prognosis and expected ventilation duration.",
          es: "La decisión de traqueostomía debe considerar el pronóstico neurológico y duración estimada de ventilación."
        },
        explanation: {
          pt: "A Brain Trauma Foundation e diretrizes da Neurocritical Care Society recomendam individualização baseada na condição neurológica e no plano terapêutico.",
          en: "BTF and NCS guidelines recommend individualized decision-making based on neurologic status and care plan.",
          es: "Las guías de BTF y NCS recomiendan decisiones individualizadas según el estado neurológico y plan de cuidados."
        }
      },
      {
        text: {
          pt: "Monitorização da PIC durante a traqueostomia é recomendada em pacientes com risco de descompensação.",
          en: "ICP monitoring during tracheostomy is recommended in patients at risk of decompensation.",
          es: "El monitoreo de la PIC durante la traqueostomía es recomendable en pacientes con riesgo de descompensación."
        },
        explanation: {
          pt: "Evidências observacionais indicam que a manipulação do pescoço e hipercapnia transitória podem elevar a PIC; o uso de sedação e monitorização contínua é recomendado.",
          en: "Neck manipulation and transient hypercapnia may increase ICP; sedation and continuous monitoring are advised.",
          es: "La manipulación del cuello y la hipercapnia transitoria pueden aumentar la PIC; se recomienda sedación y monitoreo continuo."
        }
      }
    ]
  },
  {
    id: 417,
    code: "neuro04-q417",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["postoperative care", "brain tumor", "seizure prevention", "corticosteroids", "complications"],
    level: "very_hard",
    correct: 1,
    question: {
      pt: "Mulher de 61 anos, submetida a ressecção de meningioma parasagital esquerdo, é admitida na UTI para monitorização. Evolui com paresia leve à direita e cefaleia moderate. Todas as afirmações abaixo estão corrects, **exceto**:",
      en: "A 61-year-old woman underwent resection of a left parasagittal meningioma and is admitted to the ICU for monitoring. She develops mild right-sided paresis and moderate headache. All of the following statements are correct, **except**:",
      es: "Mujer de 61 años, sometida a resección de meningioma parasagital izquierdo, ingresa en UCI para monitoreo. Presenta paresia derecha leve y cefalea moderate. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "Edema perilesional é comum após ressecção tumoral e pode responder ao uso de corticoides.",
          en: "Perilesional edema is common after tumor resection and may respond to corticosteroids.",
          es: "El edema perilesional es común tras resección tumoral y puede responder a corticoides."
        },
        explanation: {
          pt: "Dexametasona é frequentemente utilizada no pós-operatório de tumores extra-axiais com edema significativo.",
          en: "Dexamethasone is frequently used post-op in extra-axial tumors with significant edema.",
          es: "La dexametasona se utiliza con frecuencia en el postoperatorio de tumores extraaxiales con edema."
        }
      },
      {
        text: {
          pt: "Anticonvulsivantes devem ser mantidos por pelo menos 3 meses após qualquer neurocirurgia oncológica.",
          en: "Anticonvulsants should be maintained for at least 3 months after any oncologic neurosurgery.",
          es: "Los anticonvulsivos deben mantenerse por al menos 3 meses tras cualquier neurocirugía oncológica."
        },
        explanation: {
          pt: "**INCORRETA.** A profilaxia anticonvulsivante não é recomendada rotineiramente após cirurgia de tumor cerebral, exceto em casos com história prévia de crise ou localização epileptogênica.",
          en: "**INCORRECT.** Routine anticonvulsant prophylaxis is not recommended post-op unless prior seizures or epileptogenic location.",
          es: "**INCORRECTA.** La profilaxis anticonvulsiva no es recomendada de forma rutinaria salvo antecedentes de crisis o localización epileptógena."
        }
      },
      {
        text: {
          pt: "Hidrocefalia pode ocorrer tardiamente após cirurgia de base ou tumores intraventriculares.",
          en: "Hydrocephalus may occur late after skull base or intraventricular tumor surgery.",
          es: "La hidrocefalia puede aparecer de forma tardía tras cirugía de base craneal o tumores intraventriculares."
        },
        explanation: {
          pt: "Bloqueio do fluxo liquórico por debris ou inflamação pode levar à necessidade de derivação.",
          en: "CSF flow obstruction by debris or inflammation may require shunting.",
          es: "La obstrucción del LCR por detritos o inflamación puede requerir derivación."
        }
      },
      {
        text: {
          pt: "Déficits neurológicos novos devem ser avaliados com imagem para descartar complicações como infarto ou hematoma.",
          en: "New neurologic deficits should prompt imaging to exclude complications such as infarct or hematoma.",
          es: "Déficits neurológicos nuevos deben motivar imagen para descartar infarto o hematoma."
        },
        explanation: {
          pt: "Tomografia ou ressonância são indicadas diante de qualquer piora neurológica inesperada.",
          en: "CT or MRI is indicated in any unexpected neurological deterioration.",
          es: "Se indica TC o RM ante cualquier empeoramiento neurológico inesperado."
        }
      }
    ]
  },
  {
    id: 418,
    code: "neuro04-q418",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["cervical trauma", "spinal cord injury", "immobilization", "neurogenic shock", "airway management"],
    level: "very_hard",
    correct: 3,
    question: {
      pt: "Homem de 27 anos, vítima de acidente automobilístico, chega intubado à emergência. Apresenta tetraplegia flácida e hipotensão persistente com bradicardia. TC de coluna mostra fratura instável de C5. Todas as afirmativas abaixo estão corrects, **exceto**:",
      en: "A 27-year-old man, victim of a car accident, arrives intubated. He presents with flaccid tetraplegia and persistent hypotension with bradycardia. Cervical CT shows unstable C5 fracture. All of the following statements are correct, **except**:",
      es: "Hombre de 27 años, víctima de accidente de tráfico, llega intubado. Presenta tetraplejia flácida e hipotensión persistente con bradicardia. La TC cervical muestra fractura inestable de C5. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "O choque neurogênico deve ser diferenciado de hipovolemia e pode cursar com bradicardia significativa.",
          en: "Neurogenic shock must be distinguished from hypovolemia and may present with significant bradycardia.",
          es: "El shock neurogénico debe diferenciarse de la hipovolemia y puede cursar con bradicardia significativa."
        },
        explanation: {
          pt: "Choque neurogênico resulta da perda de tônus simpático, causando vasodilatação e bradicardia. Volume adequado deve ser garantido antes de vasopressores.",
          en: "Neurogenic shock arises from sympathetic tone loss, leading to vasodilation and bradycardia. Adequate volume must be ensured before vasopressors.",
          es: "El shock neurogénico resulta de pérdida del tono simpático, con vasodilatación y bradicardia. Se debe asegurar volumen antes de vasopresores."
        }
      },
      {
        text: {
          pt: "A imobilização cervical deve ser mantida até avaliação por neurocirurgião e/ou fixação definitiva.",
          en: "Cervical immobilization must be maintained until neurosurgical evaluation and/or definitive fixation.",
          es: "La inmovilización cervical debe mantenerse hasta evaluación neuroquirúrgica o fijación definitiva."
        },
        explanation: {
          pt: "Fraturas instáveis da coluna cervical exigem precaução máxima até cirurgia ou estabilização.",
          en: "Unstable cervical fractures require maximum precautions until surgical or definitive stabilization.",
          es: "Las fracturas inestables cervicales exigen precaución máxima hasta estabilización quirúrgica."
        }
      },
      {
        text: {
          pt: "A intubação orotraqueal em ambiente hospitalar pode ser feita com estabilização manual do pescoço.",
          en: "Hospital intubation may be performed with manual neck stabilization.",
          es: "La intubación en hospital puede realizarse con estabilización manual del cuello."
        },
        explanation: {
          pt: "Técnica de intubação com assistência manual (MILSt – Manual In Line Stabilization) é padrão em trauma cervical.",
          en: "Manual in-line stabilization (MILSt) is standard technique for cervical trauma intubation.",
          es: "La estabilización manual en línea es técnica estándar en intubación por trauma cervical."
        }
      },
      {
        text: {
          pt: "A metilprednisolona em altas doses é recomendada nas primeiras 8 horas após o trauma cervical grave.",
          en: "High-dose methylprednisolone is recommended in the first 8 hours after severe cervical trauma.",
          es: "La metilprednisolona en altas dosis está recomendada en las primeras 8 horas tras trauma cervical grave."
        },
        explanation: {
          pt: "**INCORRETA.** O uso de corticoides em trauma raquimedular agudo é controverso e **não é recomendado rotineiramente** pelas diretrizes atuais (AANS/ACS).",
          en: "**INCORRECT.** Steroid use in acute spinal cord injury is controversial and **not routinely recommended** by current guidelines (AANS/ACS).",
          es: "**INCORRECTA.** El uso de corticoides en trauma medular agudo es controvertido y **no está recomendado** por las guías actuales (AANS/ACS)."
        }
      }
    ]
  },
  {
    id: 419,
    code: "neuro04-q419",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["multimodal monitoring", "ICP", "PbtO2", "EEG", "microdialysis"],
    level: "very_hard",
    correct: 1,
    question: {
      pt: "Paciente de 42 anos com TCE grave está sob monitorização com PIC, PbtO₂, EEG contínuo e microdiálise cerebral. Nas últimas 6h, PIC permaneceu < 20 mmHg, mas PbtO₂ caiu para 13 mmHg, e microdiálise mostra elevação da razão lactato/piruvato para 38. EEG mostra lentificação difusa. Todas as afirmativas abaixo estão corrects, **exceto**:",
      en: "A 42-year-old patient with severe TBI is being monitored with ICP, PbtO₂, continuous EEG, and cerebral microdialysis. In the last 6h, ICP remained <20 mmHg, but PbtO₂ dropped to 13 mmHg, lactate/pyruvate ratio rose to 38, and EEG shows diffuse slowing. All of the following statements are correct, **except**:",
      es: "Paciente de 42 años con TCE grave bajo monitoreo con PIC, PbtO₂, EEG continuo y microdiálisis cerebral. En las últimas 6h, la PIC se mantuvo < 20 mmHg, pero la PbtO₂ cayó a 13 mmHg, la relación lactato/piruvato aumentó a 38 y el EEG muestra enlentecimiento difuso. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A combinação de PbtO₂ < 20 mmHg e razão L/P > 30 indica sofrimento metabólico cerebral.",
          en: "PbtO₂ < 20 mmHg combined with L/P ratio >30 indicates cerebral metabolic distress.",
          es: "PbtO₂ < 20 mmHg y relación L/P > 30 indica sufrimiento metabólico cerebral."
        },
        explanation: {
          pt: "Esse perfil indica mismatch entre oxigenação e metabolismo, podendo preceder lesão secundária se não corrigido.",
          en: "This profile reflects mismatch between oxygenation and metabolism, potentially leading to secondary injury.",
          es: "Este perfil refleja un desequilibrio entre oxigenación y metabolismo que puede preceder lesión secundaria."
        }
      },
      {
        text: {
          pt: "O EEG contínuo pode detectar isquemia elétrica antes de alterações estruturais visíveis.",
          en: "Continuous EEG can detect electrical ischemia before structural changes appear.",
          es: "El EEG continuo puede detectar isquemia eléctrica antes de cambios estructurales."
        },
        explanation: {
          pt: "Lentificação difusa sem padrão epileptiforme pode refletir sofrimento cortical difuso e requer investigação perfusional.",
          en: "Diffuse slowing without epileptiform patterns may reflect cortical distress and warrants perfusion assessment.",
          es: "El enlentecimiento difuso sin patrón epiléptico puede indicar sufrimiento cortical y requiere evaluación de perfusión."
        }
      },
      {
        text: {
          pt: "Mesmo com PIC normal, pacientes podem apresentar hipóxia cerebral e disfunção metabólica local.",
          en: "Even with normal ICP, patients may have cerebral hypoxia and local metabolic dysfunction.",
          es: "Incluso con PIC normal, los pacientes pueden presentar hipoxia cerebral y disfunción metabólica local."
        },
        explanation: {
          pt: "A dissociação entre PIC e PbtO₂ é descrita em casos de hipoperfusão focal, justificando abordagem multimodal.",
          en: "Mismatch between ICP and PbtO₂ is reported in focal hypoperfusion cases, justifying multimodal approach.",
          es: "La disociación entre PIC y PbtO₂ ocurre en hipoperfusión focal, justificando enfoque multimodal."
        }
      },
      {
        text: {
          pt: "A normalização da razão L/P descarta disfunção mitocondrial cerebral aguda.",
          en: "Normalization of L/P ratio excludes acute cerebral mitochondrial dysfunction.",
          es: "La normalización de la relación L/P descarta disfunción mitocondrial cerebral aguda."
        },
        explanation: {
          pt: "**INCORRETA.** A razão L/P pode normalizar mesmo com hipóxia tecidual persistente ou lesão mitocondrial tardia. Deve ser interpretada junto a outros parâmetros.",
          en: "**INCORRECT.** L/P ratio may normalize despite ongoing hypoxia or delayed mitochondrial dysfunction. Must be interpreted in context.",
          es: "**INCORRECTA.** La relación L/P puede normalizarse pese a hipoxia persistente o disfunción mitocondrial. Debe interpretarse con otros parámetros."
        }
      }
    ]
  },
  {
    id: 420,
    code: "neuro04-q420",
    areas: ["neuro+icu", "neuro", "icu", "medicine"],
    topics: ["hyponatremia", "diabetes insipidus", "SIADH", "CSW", "subarachnoid hemorrhage"],
    level: "very_hard",
    correct: 2,
    question: {
      pt: "Mulher de 56 anos, com HSA por aneurisma de comunicante anterior tratado com clipagem, evolui com hiponatremia (Na⁺ 124 mEq/L), diurese aumentada e hipotensão no 6º dia. Todas as afirmativas abaixo estão corrects, **exceto**:",
      en: "A 56-year-old woman with SAH due to anterior communicating artery aneurysm clipped, develops hyponatremia (Na⁺ 124 mEq/L), increased diuresis, and hypotension on day 6. All of the following statements are correct, **except**:",
      es: "Mujer de 56 años con HSA por aneurisma de comunicante anterior clipado, presenta hiponatremia (Na⁺ 124 mEq/L), diuresis aumentada e hipotensión en el día 6. Todas las afirmaciones son correctas, **excepto**:"
    },
    options: [
      {
        text: {
          pt: "A síndrome de secreção inapropriada de ADH (SIADH) cursa com hiponatremia euvolêmica e osmolaridade urinária aumentada.",
          en: "SIADH presents with euvolemic hyponatremia and elevated urinary osmolality.",
          es: "El SIADH cursa con hiponatremia euvolémica y osmolalidad urinaria elevada."
        },
        explanation: {
          pt: "Na SIADH, há retenção de água livre por excesso de ADH, mantendo volemia estável, com urina concentrada.",
          en: "In SIADH, excess ADH leads to free water retention with normal volume and concentrated urine.",
          es: "En SIADH, el exceso de ADH provoca retención de agua libre con volumen normal y orina concentrada."
        }
      },
      {
        text: {
          pt: "A diabetes insipidus causa hipernatremia e urina diluída com osmolaridade urinária < 300 mOsm/kg.",
          en: "Diabetes insipidus causes hypernatremia and dilute urine with urine osmolality < 300 mOsm/kg.",
          es: "La diabetes insípida causa hipernatremia y orina diluida con osmolalidad urinaria < 300 mOsm/kg."
        },
        explanation: {
          pt: "A ausência de ADH funcional impede concentração urinária, levando à perda de água livre e hipernatremia.",
          en: "Lack of functional ADH prevents urine concentration, causing free water loss and hypernatremia.",
          es: "La ausencia de ADH funcional impide concentrar la orina, provocando pérdida de agua libre e hipernatremia."
        }
      },
      {
        text: {
          pt: "A síndrome perdedora de sal cerebral (CSW) é caracterizada por hiponatremia hipovolêmica e natriurese aumentada.",
          en: "Cerebral salt-wasting syndrome (CSW) is characterized by hypovolemic hyponatremia and increased natriuresis.",
          es: "El síndrome de pérdida de sal cerebral (CSW) se caracteriza por hiponatremia hipovolémica y natriuresis aumentada."
        },
        explanation: {
          pt: "CSW envolve perda de sal por efeito natriurético cerebral, associada à hipovolemia clínica e necessidade de reposição salina e volêmica.",
          en: "CSW involves cerebral natriuretic effect causing salt loss, clinical hypovolemia, and need for fluid and salt replacement.",
          es: "El CSW implica pérdida de sal por efecto natriurético cerebral, hipovolemia clínica y necesidad de reposición salina."
        }
      },
      {
        text: {
          pt: "SIADH e CSW cursam com achados laboratoriais semelhantes, mas o estado volêmico é o principal critério diferencial.",
          en: "SIADH and CSW have similar labs, but volume status is the key differential criterion.",
          es: "SIADH y CSW comparten hallazgos de laboratorio, pero el estado de volumen es el criterio diferencial clave."
        },
        explanation: {
          pt: "**INCORRETA.** Embora os achados laboratoriais se sobreponham, **o diagnóstico diferencial requer avaliação clínica rigorosa da volemia**, já que o tratamento difere radicalmente.",
          en: "**INCORRECT.** Despite similar labs, **volume status assessment is essential** for proper differential, as treatments differ significantly.",
          es: "**INCORRECTA.** Aunque los datos de laboratorio son similares, **evaluar el estado de volumen es esencial**, ya que el tratamiento es radicalmente diferente."
        }
      }
    ]
  },
];

questionBank.addBank(bancoNeuroDificilima);
