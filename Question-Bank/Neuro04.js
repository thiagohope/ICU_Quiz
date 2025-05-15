const bancoNeuroDificilima = [
{
  id: 401,
  codigo: "neuro04-q401",
  area: "neurointensivismo",
  topic: ["ischemic stroke", "atrial fibrillation", "anticoagulation", "thrombolysis", "decision-making"],
  nivel: "muito_dificil",
  correta: 3,
  pergunta: {
    pt: "Homem de 78 anos, hipertenso, diabético e com fibrilação atrial permanente, faz uso regular de apixabana 5 mg duas vezes ao dia. Foi encontrado por familiares às 08h com afasia global e hemiplegia à direita, tendo sido visto assintomático pela última vez às 05h. Chega ao hospital às 08h45 com NIHSS 16. A última dose da apixabana foi às 22h da noite anterior. TC de crânio sem sangramento; angioTC mostra oclusão da ACM esquerda (M1). Todas as afirmações estão corretas, **exceto**:",
    en: "A 78-year-old man with hypertension, diabetes, and permanent atrial fibrillation takes apixaban 5 mg twice daily. He is found by family at 8:00 with global aphasia and right hemiplegia, last seen well at 5:00. He arrives at the hospital at 8:45 with NIHSS 16. Last apixaban dose was at 22:00 the night before. Head CT shows no bleeding; CTA reveals left M1 occlusion. All of the following are correct, **except**:",
    es: "Hombre de 78 años, hipertenso, diabético y con fibrilación auricular permanente, toma apixabán 5 mg dos veces al día. Es encontrado por familiares a las 08:00 con afasia global y hemiplejía derecha, visto asintomático por última vez a las 05:00. Llega al hospital a las 08:45 con NIHSS 16. Última dosis de apixabán: 22:00 la noche anterior. TC sin sangrado; angioTC muestra oclusión de ACM izquierda (M1). Todas las afirmaciones son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "A trombólise intravenosa está contraindicada pela exposição recente ao anticoagulante oral direto.",
        en: "IV thrombolysis is contraindicated due to recent exposure to a direct oral anticoagulant.",
        es: "La trombólisis IV está contraindicada por exposición reciente a un anticoagulante oral directo."
      },
      explicacao: {
        pt: "Segundo a AHA/ASA (2021) e a ESO (2021), a trombólise com alteplase é contraindicada em pacientes que utilizaram DOAC nas últimas 48h, a menos que testes específicos confirmem ausência de atividade anticoagulante. O estudo TREAT (Stroke, 2019) mostrou risco aumentado de hemorragia sintomática nesses casos.",
        en: "According to AHA/ASA (2021) and ESO (2021), IV thrombolysis with alteplase is contraindicated within 48h of DOAC use unless lab testing confirms no residual effect. The TREAT study (Stroke, 2019) showed increased risk of symptomatic hemorrhage in this context.",
        es: "Según la AHA/ASA (2021) y la ESO (2021), la trombólisis con alteplasa está contraindicada en pacientes que tomaron AOD en las últimas 48h, salvo que se demuestre ausencia de efecto anticoagulante. El estudio TREAT (Stroke, 2019) demostró mayor riesgo de hemorragia sintomática."
      }
    },
    {
      texto: {
        pt: "A trombectomia mecânica pode ser realizada com segurança mesmo em pacientes anticoagulados.",
        en: "Mechanical thrombectomy may be safely performed even in anticoagulated patients.",
        es: "La trombectomía mecánica puede realizarse con seguridad incluso en pacientes anticoagulados."
      },
      explicacao: {
        pt: "Estudos como DAWN e DEFUSE 3 (NEJM, 2018) demonstraram benefício da trombectomia até 24h em pacientes com critérios clínico-radiológicos, independentemente do uso de anticoagulantes. Recomendado pelas diretrizes AHA/ASA e ESO.",
        en: "DAWN and DEFUSE 3 trials (NEJM, 2018) support thrombectomy up to 24h based on clinical and imaging criteria, regardless of anticoagulant use. Supported by AHA/ASA and ESO guidelines.",
        es: "Los estudios DAWN y DEFUSE 3 (NEJM, 2018) respaldan la trombectomía hasta 24h si se cumplen criterios clínico-radiológicos, incluso con anticoagulantes. Respaldado por las guías AHA/ASA y ESO."
      }
    },
    {
      texto: {
        pt: "A anticoagulação oral deve ser suspensa por no mínimo 21 dias após o evento, mesmo após trombectomia bem-sucedida.",
        en: "Oral anticoagulation should be withheld for at least 21 days after stroke, even after successful thrombectomy.",
        es: "La anticoagulación oral debe suspenderse por al menos 21 días tras el ictus, incluso con trombectomía exitosa."
      },
      explicacao: {
        pt: "**INCORRETA.** A retomada da anticoagulação deve ser individualizada. Diretrizes AHA/ASA (2021) e ESO (2021) sugerem reinício em 3–14 dias, com base na gravidade do AVC, risco de recorrência (ex: CHA₂DS₂-VASc ≥ 4) e risco hemorrágico. Retomar após 21 dias só é recomendado em infartos extensos com transformação hemorrágica.",
        en: "**INCORRECT.** Anticoagulation resumption must be individualized. AHA/ASA (2021) and ESO (2021) recommend restarting between 3–14 days depending on stroke severity and hemorrhagic risk. A 21-day delay is reserved for large infarcts with hemorrhagic transformation.",
        es: "**INCORRECTA.** El reinicio de anticoagulación debe individualizarse. AHA/ASA (2021) y ESO (2021) recomiendan entre 3–14 días según la gravedad del ictus y riesgo hemorrágico. 21 días se reserva para infartos extensos con transformación hemorrágica."
      }
    },
    {
      texto: {
        pt: "A dosagem do fator anti-Xa específico pode auxiliar na decisão de trombólise se disponível com rapidez.",
        en: "Specific anti-Xa testing may aid thrombolysis decision if rapidly available.",
        es: "La medición de anti-Xa específico puede ayudar a decidir trombólisis si está disponible rápidamente."
      },
      explicacao: {
        pt: "Segundo a ESO (2021), níveis de anti-Xa < 50 ng/mL indicam baixo risco hemorrágico e podem permitir trombólise com segurança. Contudo, o teste precisa ser validado para o DOAC utilizado (no caso, apixabana) e disponível em tempo real.",
        en: "ESO (2021) states that anti-Xa levels < 50 ng/mL suggest low bleeding risk and may allow safe thrombolysis. However, the assay must be calibrated for the specific DOAC (here, apixaban) and rapidly available.",
        es: "La ESO (2021) considera que niveles de anti-Xa < 50 ng/mL indican bajo riesgo y podrían permitir trombólisis. La prueba debe estar calibrada para el AOD específico y disponible rápidamente."
      }
    },
    {
      texto: {
        pt: "O uso de andexanet alfa pode ser considerado para reversão da apixabana em contextos emergenciais específicos.",
        en: "Andexanet alfa may be considered for apixaban reversal in specific emergency contexts.",
        es: "Andexanet alfa puede considerarse para revertir la apixabán en contextos de emergencia seleccionados."
      },
      explicacao: {
        pt: "O ANNEXA-4 (NEJM, 2016) mostrou eficácia do andexanet na reversão rápida de DOACs com redução da atividade anti-Xa. Seu uso em contexto de trombólise ainda é controverso, mas pode ser considerado em centros com protocolo estruturado.",
        en: "ANNEXA-4 (NEJM, 2016) demonstrated andexanet’s rapid reversal of DOACs by reducing anti-Xa activity. Use before thrombolysis is still controversial but may be considered in structured centers.",
        es: "ANNEXA-4 (NEJM, 2016) mostró que andexanet revierte rápidamente AOD reduciendo la actividad anti-Xa. Su uso previo a trombólisis sigue siendo controvertido, pero puede considerarse en centros estructurados."
      }
    }
  ]
},
{
  id: 402,
  codigo: "neuro04-q402",
  area: "neurointensivismo",
  topic: ["subarachnoid hemorrhage", "vasospasm", "endovascular therapy", "ethics", "informed refusal"],
  nivel: "muito_dificil",
  correta: 1,
  pergunta: {
    pt: "Mulher de 52 anos, previamente saudável, foi admitida na UTI neuro após hemorragia subaracnóidea por ruptura de aneurisma da artéria comunicante anterior, tratado por clipagem cirúrgica no 2º dia. No 6º dia, ainda sob sedação leve, desenvolve hemiparesia esquerda e agitação. Doppler transcraniano mostra velocidade > 200 cm/s na ACM direita, e a angioTC com perfusão confirma mismatch compatível com vasoespasmo grave. A equipe indica terapia endovascular urgente, mas os familiares recusam o procedimento por considerá-lo invasivo demais. Todas as afirmações abaixo estão corretas, **exceto**:",
    en: "A 52-year-old woman, previously healthy, is admitted to the neuro ICU after subarachnoid hemorrhage due to rupture of an anterior communicating artery aneurysm, clipped surgically on day 2. On day 6, still under light sedation, she develops left hemiparesis and agitation. Transcranial Doppler shows >200 cm/s in right MCA, and CT perfusion confirms mismatch consistent with severe vasospasm. The team recommends urgent endovascular therapy, but the family refuses the procedure, considering it too invasive. All of the following statements are correct, **except**:",
    es: "Mujer de 52 años, previamente sana, es admitida en UCI neurológica tras hemorragia subaracnoidea por ruptura de aneurisma de comunicante anterior, clipado quirúrgicamente en el día 2. En el día 6, aún con sedación ligera, desarrolla hemiparesia izquierda y agitación. El Doppler transcraneal muestra >200 cm/s en ACM derecha, y la angioTC con perfusión confirma mismatch compatible con vasoespasmo grave. El equipo recomienda tratamiento endovascular urgente, pero la familia lo rechaza por considerarlo demasiado invasivo. Todas las afirmaciones son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "Vasoespasmo cerebral é causa frequente de isquemia secundária tardia após HSA, com pico entre o 5º e 10º dia.",
        en: "Cerebral vasospasm is a common cause of delayed secondary ischemia after SAH, peaking between days 5 and 10.",
        es: "El vasoespasmo cerebral es causa frecuente de isquemia secundaria tardía tras HSA, con pico entre los días 5 y 10."
      },
      explicacao: {
        pt: "As diretrizes da ESO (2023) e da AHA/ASA (2021) reforçam o risco elevado de DCI (delayed cerebral ischemia) entre o 5º e 14º dia pós-HSA, especialmente em pacientes com HSA de grau moderado a grave (WFNS ≥ III).",
        en: "ESO (2023) and AHA/ASA (2021) guidelines emphasize the high risk of delayed cerebral ischemia (DCI) between days 5–14, especially in moderate-to-severe SAH cases (WFNS ≥ III).",
        es: "Las guías ESO (2023) y AHA/ASA (2021) destacan el alto riesgo de isquemia cerebral diferida entre los días 5–14, especialmente en HSA moderada a grave (WFNS ≥ III)."
      }
    },
    {
      texto: {
        pt: "Terapias endovasculares, como angioplastia ou infusão intra-arterial de vasodilatadores, podem ser indicadas em vasoespasmos refratários com déficit clínico e evidência perfusional.",
        en: "Endovascular therapies, such as angioplasty or intra-arterial vasodilator infusion, are indicated in refractory vasospasm with clinical deficit and perfusion mismatch.",
        es: "Las terapias endovasculares como angioplastia o vasodilatadores intraarteriales están indicadas en vasoespasmo refractario con déficit clínico y mismatch de perfusión."
      },
      explicacao: {
        pt: "As diretrizes da SNIS (2022) e AHA/ASA (2021) apoiam o uso de terapia endovascular em vasoespasmo clínico refratário, com benefício funcional documentado em estudos prospectivos como o HIMALAIA e coortes multicêntricas.",
        en: "SNIS (2022) and AHA/ASA (2021) support endovascular therapy in clinically refractory vasospasm, with functional benefit shown in trials like HIMALAIA and multicenter registries.",
        es: "Las guías SNIS (2022) y AHA/ASA (2021) respaldan la terapia endovascular en vasoespasmo clínico refractario, con beneficio funcional demostrado en estudios como HIMALAIA."
      }
    },
    {
      texto: {
        pt: "O uso de nimodipina oral é padrão de cuidado e deve ser mantido por pelo menos 21 dias após HSA aneurismática.",
        en: "Oral nimodipine is standard of care and should be maintained for at least 21 days after aneurysmal SAH.",
        es: "La nimodipina oral es tratamiento estándar y debe mantenerse por al menos 21 días tras HSA aneurismática."
      },
      explicacao: {
        pt: "Baseado em estudos como o CONSCIOUS-1 e validação em guidelines ESO/AHA, a nimodipina reduz risco de DCI e melhora desfecho funcional, ainda que não reduza vasoespasmo angiográfico.",
        en: "Based on CONSCIOUS-1 and ESO/AHA guidelines, nimodipine lowers DCI risk and improves outcomes, despite not reducing angiographic vasospasm.",
        es: "Basado en CONSCIOUS-1 y guías ESO/AHA, la nimodipina reduce el riesgo de DCI y mejora desenlaces, aunque no disminuya el vasoespasmo angiográfico."
      }
    },
    {
      texto: {
        pt: "A recusa familiar deve sempre ser respeitada, mesmo diante de risco iminente de morte neurológica.",
        en: "Family refusal must always be respected, even in the face of imminent neurological death.",
        es: "La negativa de la familia debe respetarse siempre, incluso ante riesgo inminente de muerte neurológica."
      },
      explicacao: {
        pt: "**INCORRETA.** Segundo os princípios bioéticos (Beauchamp & Childress) e documentos da American College of Physicians (2021), a autonomia familiar não se sobrepõe ao dever do médico de oferecer terapias com forte evidência de benefício vital. Em situações de risco imediato, o profissional pode agir em benefício do paciente, mesmo com objeção familiar, desde que haja respaldo institucional e documentação ética.",
        en: "**INCORRECT.** According to bioethics principles (Beauchamp & Childress) and ACP (2021), family refusal does not override the physician's duty to provide life-saving evidence-based care. In immediate-risk situations, physicians may act beneficently with institutional and ethical support.",
        es: "**INCORRECTA.** Según los principios bioéticos (Beauchamp & Childress) y el American College of Physicians (2021), la negativa familiar no anula el deber médico de actuar cuando existe evidencia sólida de beneficio vital. En emergencias, se puede proceder con respaldo ético e institucional."
      }
    },
    {
      texto: {
        pt: "A manutenção da pressão de perfusão cerebral em valores elevados (CPP > 70 mmHg) é estratégia complementar para reduzir isquemia por vasoespasmo.",
        en: "Maintaining elevated cerebral perfusion pressure (CPP > 70 mmHg) is a complementary strategy to reduce vasospasm-related ischemia.",
        es: "Mantener la presión de perfusión cerebral elevada (PPC > 70 mmHg) es una estrategia complementaria para reducir la isquemia por vasoespasmo."
      },
      explicacao: {
        pt: "A estratégia de hipertensão induzida guiada por PPC é recomendada pelas diretrizes da AHA/ASA e adotada amplamente em centros terciários, embora com base em evidência de grau B.",
        en: "Induced hypertension guided by CPP is recommended by AHA/ASA and widely used in tertiary centers, though evidence grade is B.",
        es: "La hipertensión inducida guiada por PPC es recomendada por AHA/ASA y usada ampliamente, aunque con evidencia tipo B."
      }
    }
  ]
},
{
  id: 403,
  codigo: "neuro04-q403",
  area: "neurointensivismo",
  topic: ["post-cardiac arrest", "brain death", "ethics", "prognosis", "EEG"],
  nivel: "muito_dificil",
  correta: 2,
  pergunta: {
    pt: "Homem de 61 anos, previamente hígido, é atendido após parada cardiorrespiratória extra-hospitalar presenciada, com reanimação em 10 minutos. Evolui em coma profundo, GCS 3, com EEG plano, pupilas midriáticas arreativas, reflexo óculo-cefálico ausente, e eletroneuromiografia com ausência de potenciais motores. A dosagem de NSE (neuron-specific enolase) está > 100 mcg/L. Após 72h do evento, mantido em ventilação mecânica e hemodinamicamente estável, a equipe propõe limitação de suporte, mas a família exige continuidade total. Todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 61-year-old previously healthy man is admitted after a witnessed out-of-hospital cardiac arrest, with return of spontaneous circulation after 10 minutes. He remains deeply comatose (GCS 3) with flat EEG, nonreactive midriatic pupils, absent oculocephalic reflex, and motor evoked potentials absent. NSE > 100 mcg/L. After 72h, still on mechanical ventilation and hemodynamically stable, the ICU team suggests limiting support, but the family insists on full life-sustaining therapy. All of the following statements are correct, **except**:",
    es: "Hombre de 61 años previamente sano ingresa tras una parada cardiorrespiratoria extrahospitalaria presenciada, con recuperación de circulación espontánea a los 10 minutos. Permanece en coma profundo (GCS 3) con EEG plano, pupilas midriáticas no reactivas, reflejo oculocefálico ausente y sin potenciales evocados motores. NSE > 100 mcg/L. Tras 72h, con VM y estabilidad hemodinámica, el equipo propone limitación del soporte, pero la familia exige mantener terapias completas. Todas las afirmaciones son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "A combinação de EEG isoelétrico, ausência de reflexos do tronco encefálico e marcadores neuronais elevados após 72h indica prognóstico neurológico extremamente reservado.",
        en: "The combination of isoelectric EEG, absent brainstem reflexes, and elevated neuronal biomarkers after 72h indicates extremely poor neurological prognosis.",
        es: "La combinación de EEG isoeléctrico, ausencia de reflejos de tronco encefálico y marcadores neuronales elevados tras 72h indica pronóstico neurológico extremadamente desfavorable."
      },
      explicacao: {
        pt: "Segundo a AAN (2020) e a AHA, essa tríade é considerada marcador robusto de prognóstico fúnebre pós-PCR, com acurácia > 95% para desfecho desfavorável irreversível.",
        en: "According to AAN (2020) and AHA, this triad is a strong predictor of poor prognosis post-CA, with >95% specificity for irreversible outcome.",
        es: "Según AAN (2020) y AHA, esta tríada es un predictor robusto de mal pronóstico tras paro, con >95% de especificidad para desenlace irreversible."
      }
    },
    {
      texto: {
        pt: "A decisão sobre limitação de suporte deve considerar o princípio da proporcionalidade terapêutica e o dever de não maleficência.",
        en: "The decision to limit support must consider therapeutic proportionality and the duty of non-maleficence.",
        es: "La decisión sobre limitar soporte debe considerar la proporcionalidad terapéutica y el principio de no maleficencia."
      },
      explicacao: {
        pt: "Diretrizes da SCCM e da American College of Physicians apoiam a suspensão de medidas fúteis, mesmo contra vontade familiar, se houver consenso institucional e documentação ética.",
        en: "SCCM and ACP guidelines support withdrawing futile treatment even against family will, if there is institutional support and ethical documentation.",
        es: "Las guías de SCCM y ACP respaldan suspender tratamientos fútiles incluso contra la voluntad familiar si hay respaldo institucional y documentación ética."
      }
    },
    {
      texto: {
        pt: "A ausência de resposta motora ao estímulo doloroso não tem valor prognóstico após 72h, devendo ser ignorada na decisão clínica.",
        en: "Lack of motor response to pain after 72h has no prognostic value and should be disregarded in clinical decision-making.",
        es: "La ausencia de respuesta motora al dolor tras 72h no tiene valor pronóstico y debe ignorarse en la toma de decisiones clínicas."
      },
      explicacao: {
        pt: "**INCORRETA.** A ausência de resposta motora bilateral ao estímulo nociceptivo profundo (score motor 1 na escala GCS) após 72h é marcador independente de mau prognóstico, segundo a AAN (2020), com valor preditivo negativo > 90%.",
        en: "**INCORRECT.** Bilateral lack of motor response to pain (GCS motor 1) after 72h is an independent poor prognostic marker per AAN (2020), with >90% predictive value.",
        es: "**INCORRECTA.** La ausencia bilateral de respuesta motora al dolor (GCS motor 1) tras 72h es un marcador de mal pronóstico según AAN (2020), con valor predictivo > 90%."
      }
    },
    {
      texto: {
        pt: "A avaliação da encefalopatia pós-parada deve ser adiada até que efeitos sedativos e distúrbios metabólicos sejam descartados.",
        en: "Post-arrest encephalopathy assessment must be delayed until sedation and metabolic confounders are excluded.",
        es: "La evaluación de encefalopatía post-paro debe retrasarse hasta descartar sedación o alteraciones metabólicas."
      },
      explicacao: {
        pt: "É recomendação de consenso AHA/AAN/ESICM aguardar 72h pós-PCR e suspender sedação antes de qualquer decisão prognóstica definitiva.",
        en: "AHA/AAN/ESICM recommend deferring prognosis until 72h post-ROSC and after sedation clearance.",
        es: "Las guías AHA/AAN/ESICM recomiendan esperar 72h post-ROSC y suspender sedación antes de tomar decisiones sobre pronóstico."
      }
    },
    {
      texto: {
        pt: "A existência de diretriz antecipada (testamento vital) simplificaria o processo de tomada de decisão em contextos como este.",
        en: "An advance directive would simplify decision-making in such cases.",
        es: "Una directiva anticipada facilitaría la toma de decisiones en contextos como este."
      },
      explicacao: {
        pt: "As diretrizes da AMA e da European Academy of Neurology recomendam a inclusão de diretivas antecipadas no planejamento do cuidado crítico, especialmente em populações de risco.",
        en: "AMA and EAN recommend advance directives in critical care planning, especially for high-risk patients.",
        es: "La AMA y la EAN recomiendan las directivas anticipadas como parte del plan de cuidados críticos en pacientes de alto riesgo."
      }
    }
  ]
},
{
  id: 404,
  codigo: "neuro04-q404",
  area: "neurointensivismo",
  topic: ["vasospasm", "subarachnoid hemorrhage", "endovascular therapy", "angioplasty", "nimodipine"],
  nivel: "muito_dificil",
  correta: 1,
  pergunta: {
    pt: "Mulher de 49 anos com HSA grau IV (WFNS) por aneurisma de cerebral anterior tratado com clipagem evolui no 7º dia com rebaixamento do nível de consciência e déficit motor direito. Doppler transcraniano mostra velocidades > 220 cm/s na ACM esquerda. A angioTC evidencia vasoespasmo segmentar proximal da ACM e da artéria carótida intracraniana esquerda, sem sinais de infarto estabelecido na perfusão cerebral. A equipe endovascular considera intervenção imediata. Todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 49-year-old woman with grade IV SAH (WFNS) due to anterior cerebral artery aneurysm treated by clipping develops decreased consciousness and right-sided motor deficit on day 7. Transcranial Doppler shows MCA velocities >220 cm/s on the left. CTA reveals proximal segmental vasospasm of the left MCA and intracranial carotid artery, with no established infarct on CT perfusion. The endovascular team considers immediate intervention. All statements below are correct, **except**:",
    es: "Mujer de 49 años con HSA grado IV (WFNS) por aneurisma de cerebral anterior tratado con clipado evoluciona en el día 7 con disminución de conciencia y déficit motor derecho. El Doppler transcraneal muestra velocidades > 220 cm/s en la ACM izquierda. La angioTC evidencia vasoespasmo segmentario proximal en la ACM y carótida intracraneal izquierda, sin infarto establecido en la perfusión cerebral. El equipo endovascular considera intervención inmediata. Todas las afirmaciones siguientes son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "A angioplastia transluminal com balão é preferencial para vasoespasmo proximal focal em grandes vasos.",
        en: "Balloon transluminal angioplasty is preferred for focal proximal vasospasm in large vessels.",
        es: "La angioplastia transluminal con balón es preferida en vasoespasmo focal proximal de grandes vasos."
      },
      explicacao: {
        pt: "Segundo as diretrizes SNIS (2022) e ESO (2023), a angioplastia mecânica é eficaz em vasos como a ACI e segmentos proximais da ACM, com maior durabilidade e menor necessidade de reintervenção.",
        en: "According to SNIS (2022) and ESO (2023), mechanical angioplasty is effective in ICA and proximal MCA segments, offering longer durability and fewer reinterventions.",
        es: "Según SNIS (2022) y ESO (2023), la angioplastia mecánica es eficaz en la ACI y segmentos proximales de la ACM, con mayor durabilidad y menos reintervenciones."
      }
    },
    {
      texto: {
        pt: "A infusão intra-arterial de vasodilatadores é mais indicada para vasoespasmo distal, difuso ou recorrente.",
        en: "Intra-arterial vasodilator infusion is better suited for diffuse, distal, or recurrent vasospasm.",
        es: "La infusión intraarterial de vasodilatadores está más indicada para vasoespasmo difuso, distal o recurrente."
      },
      explicacao: {
        pt: "Estudos como HIMALAIA e NEWTON-2 demonstraram benefício em casos de múltiplos territórios, com drogas como nimodipina, milrinona e nicardipina.",
        en: "Trials like HIMALAIA and NEWTON-2 support use of nimodipine, milrinone, or nicardipine in multi-territory vasospasm.",
        es: "Estudios como HIMALAIA y NEWTON-2 avalan el uso de nimodipina, milrinona o nicardipina en vasoespasmo multiterritorial."
      }
    },
    {
      texto: {
        pt: "A ausência de infarto na imagem perfusional não contraindica a abordagem endovascular.",
        en: "Absence of infarct on perfusion imaging does not contraindicate endovascular approach.",
        es: "La ausencia de infarto en la perfusión cerebral no contraindica la terapia endovascular."
      },
      explicacao: {
        pt: "A intervenção precoce tem maior benefício antes de infarto estabelecido, especialmente com déficit neurológico progressivo.",
        en: "Intervening before established infarction is ideal, particularly in cases with worsening deficits.",
        es: "Intervenir antes del infarto establecido tiene mejor pronóstico, especialmente con deterioro neurológico."
      }
    },
    {
      texto: {
        pt: "A resposta ao tratamento endovascular deve ser avaliada clinicamente e por novos exames de perfusão cerebral em até 24h.",
        en: "Response to endovascular treatment should be evaluated clinically and with follow-up perfusion imaging within 24h.",
        es: "La respuesta al tratamiento endovascular debe evaluarse clínicamente y con imágenes de perfusión dentro de las 24h."
      },
      explicacao: {
        pt: "A ESO recomenda avaliação multimodal da eficácia, incluindo exame neurológico, doppler e perfusão seriada (ESO 2023).",
        en: "ESO (2023) recommends multimodal assessment of efficacy, including neuro exam, Doppler, and serial perfusion.",
        es: "La ESO (2023) recomienda evaluación multimodal de eficacia, con examen neurológico, Doppler y perfusión seriada."
      }
    },
    {
      texto: {
        pt: "O tratamento endovascular está contraindicado em pacientes com Doppler > 200 cm/s e vasoespasmo em grandes vasos.",
        en: "Endovascular treatment is contraindicated in patients with Doppler > 200 cm/s and large vessel vasospasm.",
        es: "El tratamiento endovascular está contraindicado en pacientes con Doppler > 200 cm/s y vasoespasmo de grandes vasos."
      },
      explicacao: {
        pt: "**INCORRETA.** Essa é a afirmativa incorreta. Doppler com velocidades > 200 cm/s em território correspondente a déficit neurológico e vasoespasmo proximal é uma das principais indicações para intervenção endovascular, segundo a SNIS (2022) e AHA/ASA (2021).",
        en: "**INCORRECT.** This is the incorrect statement. Doppler > 200 cm/s in symptomatic proximal vasospasm is a key indication for endovascular treatment per SNIS (2022) and AHA/ASA (2021).",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. Velocidades > 200 cm/s en vasoespasmo proximal sintomático son indicación clásica de terapia endovascular (SNIS 2022, AHA/ASA 2021)."
      }
    }
  ]
},
{
  id: 405,
  codigo: "neuro04-q405",
  area: "neurointensivismo",
  topic: ["intracranial hypertension", "uremia", "renal replacement therapy", "dialysis", "osmolarity"],
  nivel: "muito_dificil",
  correta: 2,
  pergunta: {
    pt: "Homem de 54 anos, previamente hipertenso e diabético, é admitido na UTI com rebaixamento do nível de consciência, crises convulsivas e sinais clínicos de hipertensão intracraniana (midríase assimétrica, vômitos, GCS 7). TC de crânio evidencia edema cerebral difuso sem lesões focais. Ureia: 258 mg/dL; creatinina: 6,3 mg/dL; Na⁺: 132 mEq/L; K⁺: 6,0 mEq/L; pH: 7,18. ECG com ondas T apiculadas e alargamento de QRS. A equipe considera início de terapia renal substitutiva (TRS). Todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 54-year-old man with hypertension and diabetes is admitted to the ICU with altered consciousness, seizures, and clinical signs of intracranial hypertension (anisocoria, vomiting, GCS 7). Brain CT shows diffuse cerebral edema without focal lesions. Urea: 258 mg/dL; creatinine: 6.3 mg/dL; Na⁺: 132 mEq/L; K⁺: 6.0 mEq/L; pH: 7.18. ECG shows peaked T waves and QRS widening. The team considers starting renal replacement therapy (RRT). All of the following statements are correct, **except**:",
    es: "Hombre de 54 años, hipertenso y diabético, ingresa en UCI con alteración de conciencia, convulsiones y signos clínicos de hipertensión intracraneal (midriasis asimétrica, vómitos, GCS 7). La TC craneal muestra edema cerebral difuso sin lesiones focales. Urea: 258 mg/dL; creatinina: 6,3 mg/dL; Na⁺: 132 mEq/L; K⁺: 6,0 mEq/L; pH: 7,18. El ECG muestra ondas T picudas y QRS ancho. El equipo considera iniciar terapia renal sustitutiva (TRS). Todas las afirmaciones son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "A hipercalemia com alterações eletrocardiográficas é indicação absoluta de início imediato de TRS.",
        en: "Hyperkalemia with ECG changes is an absolute indication for immediate RRT initiation.",
        es: "La hiperpotasemia con cambios en el ECG es indicación absoluta para iniciar TRS de forma inmediata."
      },
      explicacao: {
        pt: "Segundo as diretrizes KDIGO (2012) e ESICM (2020), hipercalemia grave com sinais eletrocardiográficos impõe início urgente de diálise, independentemente do contexto neurológico.",
        en: "KDIGO (2012) and ESICM (2020) recommend immediate dialysis for severe hyperkalemia with ECG abnormalities, regardless of neurological status.",
        es: "Las guías KDIGO (2012) y ESICM (2020) indican TRS urgente ante hiperpotasemia severa con alteraciones en el ECG."
      }
    },
    {
      texto: {
        pt: "Hemodiálise convencional é preferível por remover ureia mais rapidamente e controlar melhor a hipercalemia aguda.",
        en: "Conventional hemodialysis is preferred due to faster urea clearance and better acute hyperkalemia control.",
        es: "La hemodiálisis convencional es preferida por su depuración rápida de urea y mejor control de la hiperpotasemia aguda."
      },
      explicacao: {
        pt: "**INCORRETA.** Em pacientes com HIC, diálise rápida pode causar gradiente osmótico reverso, com risco de edema cerebral dialítico. A NCS (Neurocritical Care Society) recomenda métodos lentos ou descontínuos (SLED, CVVHDF) para evitar flutuações osmóticas abruptas.",
        en: "**INCORRECT.** In HIC patients, rapid solute shifts may worsen cerebral edema (dialysis disequilibrium). NCS recommends slow or hybrid RRT (e.g., SLED, CVVHDF) to avoid osmotic rebound.",
        es: "**INCORRECTA.** En pacientes con HIC, los cambios osmóticos rápidos pueden agravar el edema cerebral (síndrome dialítico). NCS recomienda técnicas lentas o híbridas (SLED, CVVHDF)."
      }
    },
    {
      texto: {
        pt: "Modificações na osmolaridade plasmática durante TRS devem ser minimizadas em pacientes com HIC ou edema cerebral.",
        en: "Plasma osmolarity shifts during RRT should be minimized in patients with HIC or cerebral edema.",
        es: "Los cambios en la osmolaridad plasmática durante TRS deben minimizarse en pacientes con HIC o edema cerebral."
      },
      explicacao: {
        pt: "Estudos observacionais e recomendações da NCS indicam que oscilações osmóticas > 15 mOsm/L durante TRS estão associadas a piora de HIC e deterioração neurológica.",
        en: "Observational data and NCS guidance associate osmolar shifts >15 mOsm/L with worsening HIC and poor outcomes.",
        es: "Datos observacionales y guías NCS asocian cambios osmóticos >15 mOsm/L con empeoramiento de HIC y mal pronóstico."
      }
    },
    {
      texto: {
        pt: "TRS pode ser iniciada de forma segura se forem usados protocolos de fluxo reduzido com ajustes progressivos.",
        en: "RRT can be safely started using low-flow protocols with gradual adjustment.",
        es: "La TRS puede iniciarse de forma segura con protocolos de bajo flujo y ajuste progresivo."
      },
      explicacao: {
        pt: "A técnica SLED (hemodiálise lenta de curta duração) ou CVVHDF permite remoção controlada e é recomendada por KDIGO e ESICM para pacientes neurológicos críticos.",
        en: "SLED or CVVHDF enables controlled clearance and is recommended by KDIGO and ESICM for neurocritical patients.",
        es: "SLED o CVVHDF permiten depuración controlada y son recomendadas por KDIGO y ESICM en pacientes neurocríticos."
      }
    },
    {
      texto: {
        pt: "A escolha da técnica dialítica deve considerar tanto a gravidade metabólica quanto o risco de piora neurológica.",
        en: "Dialysis modality should account for both metabolic urgency and neurologic risk.",
        es: "La modalidad de diálisis debe considerar tanto la urgencia metabólica como el riesgo neurológico."
      },
      explicacao: {
        pt: "As diretrizes da Neurocritical Care Society (2021) destacam a importância de equilibrar urgência clínica e risco cerebral, especialmente em pacientes com HIC e status epiléptico.",
        en: "NCS guidelines (2021) highlight the need to balance metabolic urgency and cerebral risk, especially in HIC and seizure settings.",
        es: "Las guías NCS (2021) subrayan el equilibrio entre urgencia metabólica y riesgo cerebral, particularmente en HIC y crisis epilépticas."
      }
    }
  ]
},
{
  id: 406,
  codigo: "neuro04-q406",
  area: "neurointensivismo",
  topic: ["brain death", "transcranial doppler", "ancillary testing", "neurosonology", "ethics"],
  nivel: "muito_dificil",
  correta: 3,
  pergunta: {
    pt: "Homem de 46 anos, vítima de traumatismo cranioencefálico grave, evolui para coma profundo com Glasgow 3, ausência de reflexos troncoencefálicos e apneia persistente. Após testes clínicos seriados e exclusão de causas reversíveis, decide-se por um exame complementar para confirmar morte encefálica. O Doppler transcraniano (DTC) é realizado. Sobre o uso do DTC nessa situação, assinale a alternativa incorreta:",
    en: "A 46-year-old man, victim of severe traumatic brain injury, evolves into a deep coma with a Glasgow Coma Scale of 3, absent brainstem reflexes, and persistent apnea. After serial clinical tests and exclusion of reversible causes, an ancillary test is chosen to confirm brain death. Transcranial Doppler (TCD) is performed. Regarding the use of TCD in this context, select the incorrect statement:",
    es: "Hombre de 46 años, víctima de traumatismo craneoencefálico grave, evoluciona a coma profundo con puntuación de Glasgow 3, ausencia de reflejos del tronco encefálico y apnea persistente. Tras pruebas clínicas seriadas y exclusión de causas reversibles, se decide realizar un examen complementario para confirmar muerte encefálica. Se realiza Doppler transcraneal (DTC). En relación con su uso en este contexto, señale la afirmación incorrecta:"
  },
  alternativas: [
    {
      texto: {
        pt: "A presença de fluxo reverberante ou sinais de parada circulatória em ambas as artérias cerebrais médias pode ser compatível com morte encefálica.",
        en: "The presence of reverberating flow or signs of circulatory arrest in both middle cerebral arteries may be compatible with brain death.",
        es: "La presencia de flujo reverberante o signos de paro circulatorio en ambas arterias cerebrales medias puede ser compatible con muerte encefálica."
      },
      explicacao: {
        pt: "Esse padrão, especialmente quando bilateral e sustentado, é um dos critérios aceitos internacionalmente como compatível com ausência de perfusão cerebral.",
        en: "This bilateral and sustained pattern is internationally accepted as compatible with cerebral circulatory arrest.",
        es: "Este patrón bilateral sostenido es un criterio aceptado internacionalmente como compatible con paro circulatorio cerebral."
      }
    },
    {
      texto: {
        pt: "A ausência de janelas acústicas adequadas inviabiliza o uso do DTC como teste confirmatório isolado para morte encefálica.",
        en: "The absence of adequate acoustic windows invalidates the use of TCD as a stand-alone confirmatory test for brain death.",
        es: "La ausencia de ventanas acústicas adecuadas invalida el uso del DTC como prueba confirmatoria única para muerte encefálica."
      },
      explicacao: {
        pt: "Sem janelas temporais ou occipitais, não é possível documentar fluxo em vasos intracranianos, exigindo outro método diagnóstico.",
        en: "Without temporal or occipital windows, intracranial flow cannot be documented, requiring another diagnostic method.",
        es: "Sin ventanas temporales u occipitales, no se puede documentar el flujo intracraneal y se requiere otro método diagnóstico."
      }
    },
    {
      texto: {
        pt: "Em alguns países, é necessário repetir o exame com intervalo mínimo de 30 minutos para validação legal do diagnóstico.",
        en: "In some countries, repeating the test after a minimum 30-minute interval is required for legal validation of the diagnosis.",
        es: "En algunos países, se requiere repetir el examen con un intervalo mínimo de 30 minutos para validar legalmente el diagnóstico."
      },
      explicacao: {
        pt: "Normas variam por país. No Brasil, por exemplo, exige-se repetição em intervalos definidos em adultos. Já nos EUA, a exigência depende da legislação estadual.",
        en: "Regulations vary. In Brazil, repetition at defined intervals is required for adults. In the US, it depends on state law.",
        es: "Las normativas varían. En Brasil se exige repetición en adultos. En EE.UU. depende de la legislación del estado."
      }
    },
    {
      texto: {
        pt: "A visualização de fluxo anterógrado contínuo nas artérias cerebrais anteriores confirma o diagnóstico de morte encefálica.",
        en: "The visualization of continuous antegrade flow in the anterior cerebral arteries confirms the diagnosis of brain death.",
        es: "La visualización de flujo anterógrado continuo en las arterias cerebrales anteriores confirma el diagnóstico de muerte encefálica."
      },
      explicacao: {
        pt: "**INCORRETA.** Fluxo anterógrado contínuo indica presença de perfusão cerebral, o que é incompatível com o diagnóstico de morte encefálica.",
        en: "**INCORRECT.** Continuous antegrade flow indicates cerebral perfusion, which is incompatible with brain death diagnosis.",
        es: "**INCORRECTA.** El flujo anterógrado continuo indica perfusión cerebral, lo cual es incompatible con el diagnóstico de muerte encefálica."
      }
    }
  ]
},
{
  id: 407,
  codigo: "neuro04-q407",
  area: "neurointensivismo",
  topic: ["intracerebral hemorrhage", "venous hypertension", "cerebral venous thrombosis", "posterior fossa", "anticoagulation"],
  nivel: "muito_dificil",
  correta: 1,
  pergunta: {
    pt: "Homem de 59 anos, previamente hígido, apresenta cefaleia súbita intensa e desequilíbrio ao caminhar. É admitido com rebaixamento progressivo do nível de consciência (GCS 10), vômitos e rigidez de nuca. TC de crânio revela hemorragia cerebelar direita e sinais de compressão do quarto ventrículo. AngioTC evidencia sinais indiretos de trombose do seio transverso direito com congestão venosa local. Após estabilização clínica, a equipe discute conduta. Todas as afirmativas abaixo estão corretas, **exceto**:",
    en: "A 59-year-old previously healthy man presents with sudden severe headache and gait imbalance. He is admitted with progressive decreased consciousness (GCS 10), vomiting, and neck stiffness. Head CT shows right cerebellar hemorrhage with fourth ventricle compression. CTA reveals indirect signs of right transverse sinus thrombosis and local venous congestion. After clinical stabilization, the team discusses management. All of the following statements are correct, **except**:",
    es: "Hombre de 59 años previamente sano presenta cefalea súbita intensa e inestabilidad al caminar. Ingresa con disminución progresiva del nivel de conciencia (GCS 10), vómitos y rigidez de nuca. La TC craneal muestra hemorragia cerebelosa derecha con compresión del cuarto ventrículo. La angioTC revela signos indirectos de trombosis del seno transverso derecho con congestión venosa local. Tras estabilización clínica, el equipo discute la conducta. Todas las afirmaciones son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "A anticoagulação plena pode ser indicada mesmo na presença de hemorragia, desde que não haja herniação iminente.",
        en: "Full anticoagulation may be indicated even in the presence of hemorrhage, provided there is no imminent herniation.",
        es: "La anticoagulación plena puede estar indicada incluso con hemorragia si no hay herniación inminente."
      },
      explicacao: {
        pt: "Segundo a AHA/ASA (2011) e a ESO (2017), a anticoagulação com heparina é recomendada em trombose venosa cerebral, mesmo com AVCh, desde que o risco de expansão não supere o benefício de recanalização.",
        en: "According to AHA/ASA (2011) and ESO (2017), anticoagulation with heparin is recommended in cerebral venous thrombosis, even with ICH, if the risk of expansion does not outweigh the benefit.",
        es: "Según AHA/ASA (2011) y ESO (2017), la anticoagulación con heparina está indicada en trombosis venosa cerebral incluso con hemorragia, si el beneficio supera el riesgo de expansión."
      }
    },
    {
      texto: {
        pt: "A hemorragia cerebelar pode ser secundária à hipertensão venosa local por trombose do seio transverso.",
        en: "Cerebellar hemorrhage may be secondary to local venous hypertension due to transverse sinus thrombosis.",
        es: "La hemorragia cerebelosa puede deberse a hipertensión venosa local por trombosis del seno transverso."
      },
      explicacao: {
        pt: "A fisiopatologia inclui congestão retrógrada dos vasos perfurantes, ruptura capilar e extravasamento hemorrágico, comum em tromboses de drenagem posterior.",
        en: "Pathophysiology involves retrograde congestion, capillary rupture, and hemorrhagic extravasation, frequent in posterior drainage thrombosis.",
        es: "La fisiopatología incluye congestión retrógrada, ruptura capilar y extravasación hemorrágica, común en trombosis de drenaje posterior."
      }
    },
    {
      texto: {
        pt: "A cirurgia descompressiva pode ser necessária se houver compressão do tronco encefálico ou hidrocefalia obstrutiva.",
        en: "Decompressive surgery may be required in cases of brainstem compression or obstructive hydrocephalus.",
        es: "La cirugía descompresiva puede ser necesaria si hay compresión del tronco encefálico o hidrocefalia obstructiva."
      },
      explicacao: {
        pt: "Em casos com sinais de compressão do IV ventrículo, desvio da linha média ou deterioração clínica, a craniectomia descompressiva ou derivação ventricular está indicada.",
        en: "In cases with fourth ventricle compression, midline shift, or clinical deterioration, decompressive craniectomy or ventricular shunting is indicated.",
        es: "Ante compresión del IV ventrículo, desviación de línea media o deterioro clínico, se indica craniectomía descompresiva o derivación."
      }
    },
    {
      texto: {
        pt: "A anticoagulação está absolutamente contraindicada em qualquer tipo de hemorragia cerebelar aguda.",
        en: "Anticoagulation is absolutely contraindicated in any type of acute cerebellar hemorrhage.",
        es: "La anticoagulación está absolutamente contraindicada en cualquier tipo de hemorragia cerebelosa aguda."
      },
      explicacao: {
        pt: "**INCORRETA.** Essa é a afirmativa incorreta. A presença de hemorragia cerebelar por trombose venosa não contraindica anticoagulação, desde que o paciente esteja estável e sem herniação ativa.",
        en: "**INCORRECT.** This is the incorrect statement. Cerebellar hemorrhage due to venous thrombosis does not absolutely contraindicate anticoagulation if the patient is stable and without ongoing herniation.",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. La hemorragia cerebelosa por trombosis venosa no contraindica anticoagulación si el paciente está clínicamente estable y sin herniación."
      }
    }
  ]
},
{
  id: 408,
  codigo: "neuro04-q408",
  area: "neurointensivismo",
  topic: ["intracranial hypertension", "cerebral hyperperfusion", "autoregulation", "carotid revascularization", "osmotherapy"],
  nivel: "muito_dificil",
  correta: 2,
  pergunta: {
    pt: "Mulher de 67 anos, hipertensa e dislipidêmica, é submetida a endarterectomia de carótida direita por estenose crítica sintomática. Evolui no pós-operatório imediato com agitação, cefaleia intensa, hipertensão arterial (PA 200x110 mmHg) e sonolência progressiva. TC de crânio sem sinais de AVC. PIC monitorada mostra pressão intracraniana de 26 mmHg, com pressão de perfusão cerebral (PPC) em 90 mmHg. O EEG mostra lentificação difusa sem descargas epileptiformes. A equipe considera tratar a hipertensão intracraniana. Todas as afirmações abaixo estão corretas, **exceto**:",
    en: "A 67-year-old woman with hypertension and dyslipidemia undergoes right carotid endarterectomy for symptomatic critical stenosis. In the immediate postoperative period, she develops agitation, severe headache, high blood pressure (200/110 mmHg), and progressive somnolence. Brain CT shows no infarct. ICP monitoring reveals intracranial pressure of 26 mmHg and cerebral perfusion pressure (CPP) of 90 mmHg. EEG shows diffuse slowing without epileptiform discharges. The team considers treatment for intracranial hypertension. All of the following statements are correct, **except**:",
    es: "Mujer de 67 años, hipertensa y dislipidémica, se somete a endarterectomía carotídea derecha por estenosis crítica sintomática. En el postoperatorio inmediato presenta agitación, cefalea intensa, hipertensión arterial (PA 200x110 mmHg) y somnolencia progresiva. La TC craneal no muestra infarto. La PIC es de 26 mmHg y la PPC de 90 mmHg. El EEG muestra enlentecimiento difuso sin descargas epilépticas. El equipo considera tratar la hipertensión intracraneal. Todas las afirmaciones son correctas, **excepto**:"
  },
  alternativas: [
    {
      texto: {
        pt: "O quadro é compatível com síndrome de hiperperfusão cerebral, que pode ocorrer após revascularização carotídea.",
        en: "The clinical picture is compatible with cerebral hyperperfusion syndrome, which may occur after carotid revascularization.",
        es: "El cuadro clínico es compatible con síndrome de hiperperfusión cerebral, que puede presentarse tras revascularización carotídea."
      },
      explicacao: {
        pt: "A síndrome de hiperperfusão cerebral ocorre em até 3% dos pacientes após endarterectomia ou stent carotídeo, especialmente com perda da autorregulação em territórios cronicamente hipoperfundidos.",
        en: "Cerebral hyperperfusion syndrome occurs in up to 3% of patients after carotid surgery, especially when autoregulation is impaired.",
        es: "El síndrome de hiperperfusión cerebral ocurre hasta en el 3% de los pacientes tras cirugía carotídea, especialmente con disautoregulación."
      }
    },
    {
      texto: {
        pt: "O uso de manitol e hiperventilação deve ser prioritário para reduzir rapidamente a pressão intracraniana.",
        en: "Mannitol and hyperventilation should be prioritized to rapidly reduce intracranial pressure.",
        es: "Se debe priorizar el uso de manitol e hiperventilación para reducir rápidamente la presión intracraneal."
      },
      explicacao: {
        pt: "**INCORRETA.** Essa é a afirmativa incorreta. Em contextos de hiperperfusão, medidas que reduzem a resistência vascular cerebral (como manitol ou hipocapnia) podem agravar o fluxo cerebral e aumentar o risco de hemorragia. O tratamento deve focar em controle rigoroso da PA.",
        en: "**INCORRECT.** This is the incorrect statement. In hyperperfusion contexts, mannitol or hypocapnia may lower vascular resistance and worsen perfusion, increasing hemorrhagic risk. Management should focus on strict BP control.",
        es: "**INCORRECTA.** Esta es la afirmación incorrecta. En casos de hiperperfusión, el manitol o la hipocapnia pueden aumentar el flujo cerebral y el riesgo de hemorragia. El manejo debe centrarse en el control estricto de la PA."
      }
    },
    {
      texto: {
        pt: "O EEG pode ser útil no diagnóstico diferencial com estado de mal não convulsivo em pacientes com alteração do nível de consciência.",
        en: "EEG may help differentiate from nonconvulsive status epilepticus in patients with altered consciousness.",
        es: "El EEG puede ayudar en el diagnóstico diferencial con estatus no convulsivo en pacientes con alteración de la conciencia."
      },
      explicacao: {
        pt: "Lentificação difusa sem descargas sugere encefalopatia metabólica ou vascular, mas o EEG é essencial para afastar causas eletrográficas ocultas como status não convulsivo.",
        en: "Diffuse slowing without discharges suggests metabolic or vascular encephalopathy, but EEG helps exclude hidden electrographic status.",
        es: "El enlentecimiento difuso sugiere encefalopatía metabólica o vascular, pero el EEG es útil para excluir estatus oculto."
      }
    },
    {
      texto: {
        pt: "A redução da pressão arterial deve ser feita com agentes que não causem vasodilatação cerebral adicional.",
        en: "Blood pressure should be lowered using agents that do not cause further cerebral vasodilation.",
        es: "La reducción de la presión arterial debe realizarse con fármacos que no causen vasodilatación cerebral adicional."
      },
      explicacao: {
        pt: "Beta-bloqueadores ou nicardipina são frequentemente preferidos. Evita-se nitroprussiato e vasodilatadores potentes por risco de agravamento da hiperperfusão.",
        en: "Beta-blockers or nicardipine are often preferred. Nitroprusside and potent vasodilators are avoided due to hyperperfusion risk.",
        es: "Los betabloqueantes o la nicardipina son preferidos. Se evita nitroprusiato y vasodilatadores potentes por riesgo de hiperperfusión."
      }
    }
  ]
},

];

bancoQuestoes.adicionarBanco(bancoNeuroDificilima);
