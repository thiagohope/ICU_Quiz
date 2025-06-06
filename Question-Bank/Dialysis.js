const bancoDialysis = [
{
  "id": 801,
  "code": "dialysis-q801",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "electrolytes", "hyperkalemia"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Qual das seguintes situações clínicas representa uma indicação absoluta de terapia renal substitutiva (TRS) na insuficiência renal aguda?",
    "en": "Which of the following clinical situations represents an absolute indication for renal replacement therapy (RRT) in acute kidney injury?",
    "es": "¿Cuál de las siguientes situaciones clínicas representa una indicación absoluta de terapia de reemplazo renal (TRR) en insuficiencia renal aguda?"
  },
  "options": [
    {
      "text": {
        "pt": "Ureia de 130 mg/dL sem sintomas urêmicos.",
        "en": "Urea level of 130 mg/dL without uremic symptoms.",
        "es": "Urea de 130 mg/dL sin síntomas urémicos."
      },
      "explanation": {
        "pt": "A ureia isoladamente elevada, na ausência de sintomas urêmicos, não configura uma urgência dialítica.",
        "en": "Elevated urea alone, without uremic symptoms, does not constitute a dialysis emergency.",
        "es": "La urea elevada sin síntomas urémicos no constituye una urgencia dialítica."
      }
    },
    {
      "text": {
        "pt": "Creatinina sérica de 4,5 mg/dL em paciente estável.",
        "en": "Serum creatinine of 4.5 mg/dL in a stable patient.",
        "es": "Creatinina sérica de 4,5 mg/dL en un paciente estable."
      },
      "explanation": {
        "pt": "A creatinina elevada é um marcador de lesão, mas não define sozinha a necessidade urgente de TRS.",
        "en": "High creatinine indicates injury but does not alone define the need for urgent RRT.",
        "es": "La creatinina elevada indica lesión pero no define por sí sola la necesidad urgente de TRR."
      }
    },
    {
      "text": {
        "pt": "Oligúria com débito urinário de 0,4 mL/kg/h por 12h.",
        "en": "Oliguria with urine output of 0.4 mL/kg/h for 12h.",
        "es": "Oliguria con diuresis de 0,4 mL/kg/h durante 12h."
      },
      "explanation": {
        "pt": "Oligúria por 12h caracteriza LRA estágio II, mas não é critério absoluto para TRS.",
        "en": "Oliguria for 12h is stage II AKI but not an absolute criterion for RRT.",
        "es": "La oliguria durante 12h es LRA estadio II pero no un criterio absoluto para TRR."
      }
    },
    {
      "text": {
        "pt": "Hipercalemia refratária com alterações no ECG.",
        "en": "Refractory hyperkalemia with ECG changes.",
        "es": "Hipercalemia refractaria con alteraciones en el ECG."
      },
      "explanation": {
        "pt": "A presença de hipercalemia com repercussões eletrocardiográficas é uma indicação absoluta e emergencial de TRS.",
        "en": "Hyperkalemia with ECG abnormalities is an absolute and emergency indication for RRT.",
        "es": "La hipercalemia con alteraciones en el ECG es una indicación absoluta y urgente de TRR."
      }
    },
    {
      "text": {
        "pt": "Acidose metabólica compensada com pH de 7,33.",
        "en": "Compensated metabolic acidosis with pH 7.33.",
        "es": "Acidosis metabólica compensada con pH 7,33."
      },
      "explanation": {
        "pt": "O pH 7,33 indica leve acidose compensada, sem necessidade imediata de TRS.",
        "en": "A pH of 7.33 indicates mild compensated acidosis, not an urgent need for RRT.",
        "es": "Un pH de 7,33 indica acidosis compensada leve, sin necesidad urgente de TRR."
      }
    }
  ]
},
{
  "id": 802,
  "code": "dialysis-q802",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "acid-base", "metabolic acidosis"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Em qual das situações a seguir a acidose metabólica configura uma indicação absoluta de início de terapia renal substitutiva (TRS)?",
    "en": "In which of the following scenarios does metabolic acidosis represent an absolute indication to initiate renal replacement therapy (RRT)?",
    "es": "¿En cuál de los siguientes escenarios la acidosis metabólica representa una indicación absoluta para iniciar terapia de reemplazo renal (TRR)?"
  },
  "options": [
    {
      "text": {
        "pt": "Paciente com pH 7,34 e bicarbonato 17 mEq/L, sem sinais clínicos.",
        "en": "Patient with pH 7.34 and bicarbonate 17 mEq/L, no clinical signs.",
        "es": "Paciente con pH 7,34 y bicarbonato 17 mEq/L, sin signos clínicos."
      },
      "explanation": {
        "pt": "Acidose leve e compensada não é critério absoluto para TRS.",
        "en": "Mild, compensated acidosis is not an absolute indication for RRT.",
        "es": "La acidosis leve y compensada no es una indicación absoluta de TRR."
      }
    },
    {
      "text": {
        "pt": "Paciente em ventilação mecânica com pH 7,29 e anion gap normal.",
        "en": "Patient on mechanical ventilation with pH 7.29 and normal anion gap.",
        "es": "Paciente en ventilación mecánica con pH 7,29 y anión gap normal."
      },
      "explanation": {
        "pt": "pH abaixo de 7,30 com anion gap normal pode ser compensação respiratória e não necessariamente TRS.",
        "en": "pH below 7.30 with normal anion gap may reflect respiratory compensation, not necessarily requiring RRT.",
        "es": "Un pH inferior a 7,30 con anión gap normal puede reflejar compensación respiratoria y no requiere TRR necesariamente."
      }
    },
    {
      "text": {
        "pt": "Paciente séptico com pH 7,08, bicarbonato 11 mEq/L e sinais de hipoperfusão.",
        "en": "Septic patient with pH 7.08, bicarbonate 11 mEq/L, and signs of hypoperfusion.",
        "es": "Paciente séptico con pH 7,08, bicarbonato 11 mEq/L y signos de hipoperfusión."
      },
      "explanation": {
        "pt": "Acidose metabólica grave com hipoperfusão é uma das principais indicações de TRS precoce. (KDIGO 2012)",
        "en": "Severe metabolic acidosis with hypoperfusion is a main early indication for RRT. (KDIGO 2012)",
        "es": "La acidosis metabólica grave con hipoperfusión es una indicación principal para TRR precoz. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Paciente com alcalose respiratória compensatória com pH de 7,48.",
        "en": "Patient with compensatory respiratory alkalosis and pH 7.48.",
        "es": "Paciente con alcalosis respiratoria compensadora y pH 7,48."
      },
      "explanation": {
        "pt": "Alcalose respiratória com pH dentro da normalidade não configura indicação de TRS.",
        "en": "Respiratory alkalosis with normal-range pH is not an indication for RRT.",
        "es": "La alcalosis respiratoria con pH normal no es indicación de TRR."
      }
    },
    {
      "text": {
        "pt": "Paciente renal crônico com pH 7,3 e ausência de queixas.",
        "en": "Chronic kidney disease patient with pH 7.3 and no complaints.",
        "es": "Paciente con enfermedad renal crónica con pH 7,3 y sin quejas."
      },
      "explanation": {
        "pt": "O pH de 7,3 é tolerável e não configura emergência dialítica em pacientes compensados.",
        "en": "A pH of 7.3 is tolerable and not a dialysis emergency in compensated patients.",
        "es": "Un pH de 7,3 es tolerable y no representa una emergencia dialítica en pacientes compensados."
      }
    }
  ]
},
{
  "id": 803,
  "code": "dialysis-q803",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "uremia", "pericarditis"],
  "level": "easy",
  "correct": 4,
  "question": {
    "pt": "Qual das condições abaixo representa uma indicação clássica de início de terapia renal substitutiva (TRS) por síndrome urêmica?",
    "en": "Which of the following conditions represents a classic indication to initiate renal replacement therapy (RRT) due to uremic syndrome?",
    "es": "¿Cuál de las siguientes condiciones representa una indicación clásica para iniciar terapia de reemplazo renal (TRR) por síndrome urémico?"
  },
  "options": [
    {
      "text": {
        "pt": "Creatinina sérica de 6,0 mg/dL em paciente assintomático.",
        "en": "Serum creatinine of 6.0 mg/dL in an asymptomatic patient.",
        "es": "Creatinina sérica de 6,0 mg/dL en un paciente asintomático."
      },
      "explanation": {
        "pt": "A creatinina elevada isoladamente não justifica início de TRS sem sintomas clínicos.",
        "en": "Elevated creatinine alone does not justify RRT initiation without clinical symptoms.",
        "es": "La creatinina alta por sí sola no justifica iniciar TRR sin síntomas clínicos."
      }
    },
    {
      "text": {
        "pt": "Oligúria isolada com débito de 0,6 mL/kg/h.",
        "en": "Isolated oliguria with output of 0.6 mL/kg/h.",
        "es": "Oliguria aislada con diuresis de 0,6 mL/kg/h."
      },
      "explanation": {
        "pt": "Oligúria leve não constitui critério absoluto de TRS.",
        "en": "Mild oliguria is not an absolute indication for RRT.",
        "es": "La oliguria leve no es una indicación absoluta de TRR."
      }
    },
    {
      "text": {
        "pt": "Ureia plasmática de 150 mg/dL sem alterações clínicas.",
        "en": "Plasma urea of 150 mg/dL without clinical changes.",
        "es": "Urea plasmática de 150 mg/dL sin alteraciones clínicas."
      },
      "explanation": {
        "pt": "Ureia elevada sem sintomas urêmicos ainda pode ser manejada conservadoramente.",
        "en": "Elevated urea without uremic symptoms can still be managed conservatively.",
        "es": "La urea elevada sin síntomas urémicos puede manejarse conservadoramente."
      }
    },
    {
      "text": {
        "pt": "Dor torácica pleurítica com atrito pericárdico em paciente urêmico.",
        "en": "Pleuritic chest pain with pericardial rub in a uremic patient.",
        "es": "Dolor torácico pleurítico con roce pericárdico en un paciente urémico."
      },
      "explanation": {
        "pt": "A pericardite urêmica é uma das indicações clássicas de início de TRS, por risco de tamponamento.",
        "en": "Uremic pericarditis is a classic indication to start RRT, due to risk of tamponade.",
        "es": "La pericarditis urémica es una indicación clásica para iniciar TRR, por riesgo de taponamiento."
      }
    },
    {
      "text": {
        "pt": "Hipernatremia leve com sede preservada.",
        "en": "Mild hypernatremia with preserved thirst.",
        "es": "Hipernatremia leve con sed preservada."
      },
      "explanation": {
        "pt": "A hipernatremia leve com mecanismo de sede intacto não requer TRS.",
        "en": "Mild hypernatremia with intact thirst mechanism does not require RRT.",
        "es": "La hipernatremia leve con mecanismo de sed intacto no requiere TRR."
      }
    }
  ]
},
{
  "id": 804,
  "code": "dialysis-q804",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "uremia", "encephalopathy"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual dos seguintes quadros clínicos é compatível com encefalopatia urêmica e configura indicação de início de TRS?",
    "en": "Which of the following clinical scenarios is compatible with uremic encephalopathy and indicates the need for RRT?",
    "es": "¿Cuál de los siguientes escenarios clínicos es compatible con encefalopatía urémica e indica necesidad de TRR?"
  },
  "options": [
    {
      "text": {
        "pt": "Paciente com confusão mental progressiva, mioclonias e sinais de irritação piramidal.",
        "en": "Patient with progressive confusion, myoclonus, and pyramidal irritation signs.",
        "es": "Paciente con confusión progresiva, mioclonías y signos de irritación piramidal."
      },
      "explanation": {
        "pt": "Encefalopatia urêmica cursa com alterações neurológicas progressivas, sendo indicação absoluta de TRS.",
        "en": "Uremic encephalopathy causes progressive neurologic symptoms and is an absolute indication for RRT.",
        "es": "La encefalopatía urémica cursa con síntomas neurológicos progresivos y es una indicación absoluta de TRR."
      }
    },
    {
      "text": {
        "pt": "Paciente com leve sonolência pós-sedação e eletrólitos normais.",
        "en": "Patient with mild drowsiness post-sedation and normal electrolytes.",
        "es": "Paciente con somnolencia leve post-sedación y electrolitos normales."
      },
      "explanation": {
        "pt": "Sonolência leve isolada pode ter outras causas e não configura encefalopatia urêmica.",
        "en": "Mild drowsiness alone may have other causes and does not define uremic encephalopathy.",
        "es": "La somnolencia leve aislada puede tener otras causas y no define encefalopatía urémica."
      }
    },
    {
      "text": {
        "pt": "Paciente com convulsão febril em contexto infeccioso agudo.",
        "en": "Patient with febrile seizure in the context of acute infection.",
        "es": "Paciente con convulsión febril en contexto de infección aguda."
      },
      "explanation": {
        "pt": "Convulsões febris isoladas não são manifestações típicas de encefalopatia urêmica.",
        "en": "Isolated febrile seizures are not typical of uremic encephalopathy.",
        "es": "Las convulsiones febriles aisladas no son típicas de la encefalopatía urémica."
      }
    },
    {
      "text": {
        "pt": "Paciente com insônia e fadiga em estágio 4 de DRC.",
        "en": "Patient with insomnia and fatigue in CKD stage 4.",
        "es": "Paciente con insomnio y fatiga en ERC estadio 4."
      },
      "explanation": {
        "pt": "Insônia e fadiga são sintomas inespecíficos e não configuram encefalopatia urêmica.",
        "en": "Insomnia and fatigue are nonspecific and do not define uremic encephalopathy.",
        "es": "El insomnio y la fatiga son síntomas inespecíficos y no definen encefalopatía urémica."
      }
    },
    {
      "text": {
        "pt": "Paciente confuso com hipoglicemia corrigida recente.",
        "en": "Confused patient with recent corrected hypoglycemia.",
        "es": "Paciente confuso tras hipoglucemia recientemente corregida."
      },
      "explanation": {
        "pt": "A confusão nesse contexto pode ser transitória e não relacionada à uremia.",
        "en": "Confusion in this context may be transient and unrelated to uremia.",
        "es": "La confusión en este contexto puede ser transitoria y no relacionada con la uremia."
      }
    }
  ]
},
{
  "id": 805,
  "code": "dialysis-q805",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "uremia", "bleeding"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Qual das manifestações clínicas abaixo, em paciente urêmico, representa uma indicação clássica para início de TRS devido à disfunção plaquetária?",
    "en": "Which of the following clinical manifestations, in a uremic patient, represents a classic indication to start RRT due to platelet dysfunction?",
    "es": "¿Cuál de las siguientes manifestaciones clínicas, en un paciente urémico, representa una indicación clásica para iniciar TRR debido a disfunción plaquetaria?"
  },
  "options": [
    {
      "text": {
        "pt": "Melena persistente sem causa gastrointestinal identificada.",
        "en": "Persistent melena with no identifiable GI source.",
        "es": "Melena persistente sin causa gastrointestinal identificada."
      },
      "explanation": {
        "pt": "Sangramentos inexplicáveis em pacientes urêmicos podem indicar disfunção plaquetária associada à uremia, sendo indicação para TRS.",
        "en": "Unexplained bleeding in uremic patients may signal uremia-related platelet dysfunction, indicating RRT.",
        "es": "Los sangrados inexplicables en pacientes urémicos pueden indicar disfunción plaquetaria por uremia, siendo indicación de TRR."
      }
    },
    {
      "text": {
        "pt": "Gengivorragia leve após escovação dentária.",
        "en": "Mild gum bleeding after toothbrushing.",
        "es": "Sangrado gingival leve tras el cepillado dental."
      },
      "explanation": {
        "pt": "Sangramentos leves e esporádicos não configuram, isoladamente, indicação para TRS.",
        "en": "Mild and sporadic bleeding alone is not an indication for RRT.",
        "es": "Sangrados leves y esporádicos no son, por sí solos, indicación para TRR."
      }
    },
    {
      "text": {
        "pt": "Epistaxe única, autolimitada.",
        "en": "Single, self-limited episode of epistaxis.",
        "es": "Episodio único de epistaxis autolimitado."
      },
      "explanation": {
        "pt": "Eventos únicos e autolimitados são comuns e não necessariamente associados à uremia grave.",
        "en": "Single, self-limited events are common and not necessarily linked to severe uremia.",
        "es": "Eventos únicos y autolimitados son comunes y no necesariamente relacionados con uremia grave."
      }
    },
    {
      "text": {
        "pt": "Plaquetopenia leve sem sangramentos.",
        "en": "Mild thrombocytopenia without bleeding.",
        "es": "Trombocitopenia leve sin sangrados."
      },
      "explanation": {
        "pt": "A contagem de plaquetas pode estar normal na uremia; o distúrbio é funcional. Sem sangramento, não há indicação de TRS.",
        "en": "Platelet count may be normal in uremia; dysfunction is functional. Without bleeding, RRT is not indicated.",
        "es": "El recuento plaquetario puede ser normal en uremia; el trastorno es funcional. Sin sangrado, no hay indicación de TRR."
      }
    },
    {
      "text": {
        "pt": "Hematúria microscópica isolada.",
        "en": "Isolated microscopic hematuria.",
        "es": "Hematuria microscópica aislada."
      },
      "explanation": {
        "pt": "Hematúria microscópica isolada é inespecífica e não indica, sozinha, necessidade de TRS.",
        "en": "Isolated microscopic hematuria is nonspecific and not an indication for RRT by itself.",
        "es": "La hematuria microscópica aislada es inespecífica y no indica TRR por sí sola."
      }
    }
  ]
},
{
  "id": 806,
  "code": "dialysis-q806",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "toxins", "lithium"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Qual das seguintes condições clínicas justifica início de TRS por intoxicação exógena com substância dializável?",
    "en": "Which of the following clinical conditions justifies initiating RRT due to exogenous intoxication with a dialyzable substance?",
    "es": "¿Cuál de las siguientes condiciones clínicas justifica iniciar TRR por intoxicación exógena con una sustancia dializable?"
  },
  "options": [
    {
      "text": {
        "pt": "Intoxicação por benzodiazepínico, hemodinamicamente estável.",
        "en": "Benzodiazepine overdose, hemodynamically stable.",
        "es": "Intoxicación por benzodiazepina, hemodinámicamente estable."
      },
      "explanation": {
        "pt": "Benzodiazepínicos têm alto volume de distribuição e ligação proteica, não sendo efetivamente removidos por diálise.",
        "en": "Benzodiazepines have high volume of distribution and protein binding, making dialysis ineffective.",
        "es": "Las benzodiazepinas tienen alto volumen de distribución y unión proteica, por lo que la diálisis es ineficaz."
      }
    },
    {
      "text": {
        "pt": "Intoxicação por digoxina com níveis terapêuticos.",
        "en": "Digoxin intoxication with therapeutic levels.",
        "es": "Intoxicación por digoxina con niveles terapéuticos."
      },
      "explanation": {
        "pt": "A digoxina também tem alto volume de distribuição; a terapia de escolha é o antídoto específico (Fab).",
        "en": "Digoxin also has a high volume of distribution; antidote therapy (Fab) is preferred.",
        "es": "La digoxina tiene alto volumen de distribución; el tratamiento de elección es el antídoto específico (Fab)."
      }
    },
    {
      "text": {
        "pt": "Ingestão de paracetamol com tempo de protrombina normal.",
        "en": "Paracetamol ingestion with normal prothrombin time.",
        "es": "Ingesta de paracetamol con tiempo de protrombina normal."
      },
      "explanation": {
        "pt": "A toxicidade do paracetamol é hepática; TRS não é eficaz nem indicada nesse contexto.",
        "en": "Paracetamol toxicity is hepatic; RRT is neither effective nor indicated in this context.",
        "es": "La toxicidad del paracetamol es hepática; la TRR no es eficaz ni está indicada en este contexto."
      }
    },
    {
      "text": {
        "pt": "Intoxicação por lítio com níveis séricos elevados e sintomas neurológicos.",
        "en": "Lithium intoxication with elevated serum levels and neurologic symptoms.",
        "es": "Intoxicación por litio con niveles séricos elevados y síntomas neurológicos."
      },
      "explanation": {
        "pt": "O lítio é uma substância dializável com indicação clássica de TRS quando há toxicidade neurológica ou falência da depuração renal. (EXTRIP Workgroup, 2015)",
        "en": "Lithium is dialyzable and a classic indication for RRT when neurologic toxicity or renal clearance failure is present. (EXTRIP Workgroup, 2015)",
        "es": "El litio es dializable y una indicación clásica de TRR cuando hay toxicidad neurológica o falla renal. (EXTRIP Workgroup, 2015)"
      }
    },
    {
      "text": {
        "pt": "Intoxicação leve por álcool etílico com melhora espontânea.",
        "en": "Mild ethanol intoxication with spontaneous improvement.",
        "es": "Intoxicación leve por etanol con mejoría espontánea."
      },
      "explanation": {
        "pt": "O etanol comum raramente necessita TRS, exceto em quadros extremos com acidose grave ou insuficiência hepática associada.",
        "en": "Ethanol rarely requires RRT, unless in extreme cases with severe acidosis or liver failure.",
        "es": "El etanol raramente requiere TRR, salvo en casos extremos con acidosis severa o insuficiencia hepática asociada."
      }
    }
  ]
},
{
  "id": 807,
  "code": "dialysis-q807",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "indications", "toxins", "methanol"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Em qual das situações abaixo a diálise está formalmente indicada devido à presença de toxina dializável?",
    "en": "In which of the following situations is dialysis formally indicated due to the presence of a dialyzable toxin?",
    "es": "¿En cuál de las siguientes situaciones la diálisis está formalmente indicada por la presencia de una toxina dializable?"
  },
  "options": [
    {
      "text": {
        "pt": "Ingestão acidental de cloro de piscina.",
        "en": "Accidental ingestion of pool chlorine.",
        "es": "Ingesta accidental de cloro de piscina."
      },
      "explanation": {
        "pt": "O cloro não é dializável e o tratamento é suporte clínico e proteção de mucosas.",
        "en": "Chlorine is not dialyzable; treatment is clinical support and mucosal protection.",
        "es": "El cloro no es dializable; el tratamiento es soporte clínico y protección de mucosas."
      }
    },
    {
      "text": {
        "pt": "Ingestão de metanol com acidose metabólica e rebaixamento do sensório.",
        "en": "Methanol ingestion with metabolic acidosis and altered mental status.",
        "es": "Ingesta de metanol con acidosis metabólica y alteración del sensorio."
      },
      "explanation": {
        "pt": "O metanol é uma toxina dializável e sua remoção rápida por TRS é essencial para evitar sequelas neurológicas e visuais. (EXTRIP, 2014)",
        "en": "Methanol is dialyzable, and rapid RRT is essential to avoid neurologic and visual sequelae. (EXTRIP, 2014)",
        "es": "El metanol es dializable, y su remoción rápida con TRR es esencial para evitar secuelas neurológicas y visuales. (EXTRIP, 2014)"
      }
    },
    {
      "text": {
        "pt": "Ingestão de benzina com vômitos e diarreia autolimitados.",
        "en": "Benzene ingestion with self-limited vomiting and diarrhea.",
        "es": "Ingesta de bencina con vómitos y diarrea autolimitados."
      },
      "explanation": {
        "pt": "A benzina tem toxicidade sistêmica, mas não é removida efetivamente por diálise.",
        "en": "Benzene has systemic toxicity but is not effectively removed by dialysis.",
        "es": "La bencina tiene toxicidad sistémica pero no se elimina eficazmente por diálisis."
      }
    },
    {
      "text": {
        "pt": "Uso excessivo de cafeína em paciente previamente saudável.",
        "en": "Excessive caffeine use in an otherwise healthy patient.",
        "es": "Uso excesivo de cafeína en un paciente previamente sano."
      },
      "explanation": {
        "pt": "A intoxicação por cafeína raramente exige diálise, exceto em casos extremos e refratários ao tratamento de suporte.",
        "en": "Caffeine intoxication rarely requires dialysis unless in extreme, refractory cases.",
        "es": "La intoxicación por cafeína rara vez requiere diálisis, salvo en casos extremos y refractarios."
      }
    },
    {
      "text": {
        "pt": "Ingestão de ferro em dose moderada sem alterações laboratoriais.",
        "en": "Moderate iron ingestion without lab abnormalities.",
        "es": "Ingesta moderada de hierro sin alteraciones en laboratorio."
      },
      "explanation": {
        "pt": "O ferro é pouco dializável; o tratamento se baseia no uso de quelantes como o deferoxamina.",
        "en": "Iron is poorly dialyzable; treatment relies on chelation with deferoxamine.",
        "es": "El hierro es poco dializable; el tratamiento se basa en quelantes como la deferoxamina."
      }
    }
  ]
},
{
  "id": 808,
  "code": "dialysis-q808",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "antibiotics", "pharmacokinetics", "dose-adjustment"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Em relação ao uso de antibióticos em pacientes com lesão renal aguda submetidos à TRS, qual das afirmativas abaixo está mais correta?",
    "en": "Regarding antibiotic use in patients with acute kidney injury (AKI) undergoing RRT, which of the following statements is most accurate?",
    "es": "Respecto al uso de antibióticos en pacientes con lesión renal aguda (LRA) sometidos a TRR, ¿cuál de las siguientes afirmaciones es más correcta?"
  },
  "options": [
    {
      "text": {
        "pt": "Não é necessário ajustar a dose, pois os antibióticos são eliminados exclusivamente pelo fígado.",
        "en": "No dose adjustment is needed since antibiotics are eliminated exclusively by the liver.",
        "es": "No es necesario ajustar la dosis, ya que los antibióticos se eliminan exclusivamente por el hígado."
      },
      "explanation": {
        "pt": "A maioria dos antibióticos possui excreção renal significativa, exigindo ajuste conforme tipo de TRS e farmacocinética da droga.",
        "en": "Most antibiotics have significant renal clearance and require adjustment according to RRT type and drug pharmacokinetics.",
        "es": "La mayoría de los antibióticos tienen eliminación renal significativa y requieren ajuste según el tipo de TRR y farmacocinética del fármaco."
      }
    },
    {
      "text": {
        "pt": "Durante a TRS, antibióticos de alto peso molecular são rapidamente removidos.",
        "en": "During RRT, high molecular weight antibiotics are rapidly removed.",
        "es": "Durante la TRR, los antibióticos de alto peso molecular se eliminan rápidamente."
      },
      "explanation": {
        "pt": "Antibióticos de alto peso molecular tendem a ser menos removidos pela TRS; fármacos pequenos e hidrofílicos são mais facilmente eliminados.",
        "en": "High molecular weight antibiotics are less likely to be removed by RRT; small, hydrophilic drugs are more easily cleared.",
        "es": "Los antibióticos de alto peso molecular son menos eliminados por TRR; los fármacos pequeños e hidrofílicos se eliminan más fácilmente."
      }
    },
    {
      "text": {
        "pt": "A farmacocinética de muitos antibióticos é alterada na LRA com TRS, exigindo ajuste frequente das doses.",
        "en": "Pharmacokinetics of many antibiotics is altered in AKI with RRT, requiring frequent dose adjustments.",
        "es": "La farmacocinética de muchos antibióticos se altera en LRA con TRR, lo que requiere ajustes frecuentes de dosis."
      },
      "explanation": {
        "pt": "A TRS altera volume de distribuição, meia-vida e depuração de antibióticos, sendo necessário monitoramento frequente e ajuste individualizado. (Roberts JA et al., Crit Care 2014)",
        "en": "RRT alters volume of distribution, half-life, and drug clearance, requiring close monitoring and individualized dosing. (Roberts JA et al., Crit Care 2014)",
        "es": "La TRR altera el volumen de distribución, la vida media y la depuración de antibióticos, requiriendo ajustes individualizados. (Roberts JA et al., Crit Care 2014)"
      }
    },
    {
      "text": {
        "pt": "Antibióticos não devem ser administrados até a LRA ser resolvida e a TRS suspensa.",
        "en": "Antibiotics should not be administered until AKI is resolved and RRT is discontinued.",
        "es": "Los antibióticos no deben administrarse hasta que se resuelva la LRA y se suspenda la TRR."
      },
      "explanation": {
        "pt": "A suspensão de antibióticos em pacientes graves com infecção e LRA aumenta mortalidade. A terapia antimicrobiana deve ser iniciada e ajustada imediatamente.",
        "en": "Withholding antibiotics in critically ill patients with infection and AKI increases mortality. Antimicrobial therapy should begin promptly and be adjusted accordingly.",
        "es": "Suspender antibióticos en pacientes graves con infección y LRA aumenta la mortalidad. La terapia debe iniciarse y ajustarse inmediatamente."
      }
    },
    {
      "text": {
        "pt": "Todos os antibióticos devem ser redoseados imediatamente após cada sessão de TRS, independentemente do tipo de droga.",
        "en": "All antibiotics must be redosed immediately after each RRT session, regardless of drug type.",
        "es": "Todos los antibióticos deben redosificarse inmediatamente después de cada sesión de TRR, independientemente del tipo de fármaco."
      },
      "explanation": {
        "pt": "A redosagem depende da depuração da droga na TRS. Nem todos os antibióticos requerem reposição pós-diálise.",
        "en": "Redosing depends on drug clearance during RRT. Not all antibiotics require post-dialysis supplementation.",
        "es": "La redosificación depende de la depuración del fármaco en TRR. No todos los antibióticos requieren reposición post-diálisis."
      }
    }
  ]
},
{
  "id": 809,
  "code": "dialysis-q809",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "hemodynamics", "sepsis", "crrt"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Em paciente séptico com LRA e instabilidade hemodinâmica, qual modalidade de TRS é preferida como primeira escolha?",
    "en": "In a septic patient with AKI and hemodynamic instability, which RRT modality is preferred as first-line?",
    "es": "En un paciente séptico con LRA e inestabilidad hemodinámica, ¿qué modalidad de TRR es preferida como primera opción?"
  },
  "options": [
    {
      "text": {
        "pt": "TRS contínua, com ultrafiltração lenta e estável.",
        "en": "Continuous RRT with slow and stable ultrafiltration.",
        "es": "TRR continua, con ultrafiltración lenta y estable."
      },
      "explanation": {
        "pt": "A TRS contínua é preferida em pacientes instáveis, pois minimiza oscilações de pressão arterial e perfusão renal. (KDIGO 2012)",
        "en": "Continuous RRT is preferred in unstable patients, as it reduces blood pressure and renal perfusion fluctuations. (KDIGO 2012)",
        "es": "La TRR continua es preferida en pacientes inestables, ya que minimiza las oscilaciones de presión arterial y perfusión renal. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "TRS intermitente, devido à maior eficiência na depuração por sessão.",
        "en": "Intermittent RRT, due to higher clearance efficiency per session.",
        "es": "TRR intermitente, por mayor eficiencia de depuración por sesión."
      },
      "explanation": {
        "pt": "Apesar da eficiência, a TRS intermitente pode provocar instabilidade hemodinâmica significativa em pacientes sépticos.",
        "en": "Despite efficiency, intermittent RRT may cause significant hemodynamic instability in septic patients.",
        "es": "A pesar de su eficiencia, la TRR intermitente puede causar inestabilidad hemodinámica significativa en pacientes sépticos."
      }
    },
    {
      "text": {
        "pt": "A escolha deve sempre ser baseada no custo e na disponibilidade, não no estado clínico.",
        "en": "Choice should always be based on cost and availability, not clinical status.",
        "es": "La elección debe basarse siempre en el costo y disponibilidad, no en el estado clínico."
      },
      "explanation": {
        "pt": "A decisão terapêutica deve priorizar a condição clínica e segurança do paciente, mesmo quando recursos forem limitados.",
        "en": "Therapeutic decisions should prioritize patient condition and safety, even when resources are limited.",
        "es": "Las decisiones terapéuticas deben priorizar el estado y seguridad del paciente, incluso con recursos limitados."
      }
    },
    {
      "text": {
        "pt": "TRS intermitente é preferida por permitir períodos livres de máquina.",
        "en": "Intermittent RRT is preferred because it allows machine-free periods.",
        "es": "La TRR intermitente es preferida porque permite periodos sin máquina."
      },
      "explanation": {
        "pt": "Embora ofereça pausas, a TRS intermitente pode ser prejudicial em pacientes instáveis devido a variações súbitas de volume e eletrólitos.",
        "en": "Though it offers breaks, intermittent RRT may be harmful in unstable patients due to sudden fluid and electrolyte shifts.",
        "es": "Aunque ofrece pausas, la TRR intermitente puede ser perjudicial en pacientes inestables por cambios bruscos de volumen y electrolitos."
      }
    },
    {
      "text": {
        "pt": "TRS peritoneal é preferida por ser minimamente invasiva.",
        "en": "Peritoneal dialysis is preferred for being minimally invasive.",
        "es": "La diálisis peritoneal es preferida por ser mínimamente invasiva."
      },
      "explanation": {
        "pt": "A diálise peritoneal raramente é indicada em pacientes críticos, devido à baixa eficiência e risco de complicações infecciosas.",
        "en": "Peritoneal dialysis is rarely indicated in critically ill patients due to low efficiency and risk of infections.",
        "es": "La diálisis peritoneal rara vez se indica en pacientes críticos por baja eficiencia y riesgo de infecciones."
      }
    }
  ]
},
{
  "id": 810,
  "code": "dialysis-q810",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "modalities", "crrt", "sled", "scuf", "classic dialysis"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual das seguintes alternativas descreve corretamente uma característica da TRS contínua (CRRT), em comparação com outras modalidades como TRS intermitente, SLED e SCUF?",
    "en": "Which of the following statements correctly describes a characteristic of continuous RRT (CRRT), compared to other modalities like intermittent RRT, SLED, and SCUF?",
    "es": "¿Cuál de las siguientes afirmaciones describe correctamente una característica de la TRR continua (CRRT), en comparación con otras modalidades como la TRR intermitente, SLED y SCUF?"
  },
  "options": [
    {
      "text": {
        "pt": "A TRS contínua é menos eficiente na remoção de solutos e, por isso, usada apenas como terapia paliativa.",
        "en": "CRRT is less efficient in solute removal and thus used only as palliative therapy.",
        "es": "La TRR continua es menos eficiente en la eliminación de solutos y por ello se utiliza solo como terapia paliativa."
      },
      "explanation": {
        "pt": "Embora a remoção de solutos por hora seja menor, a TRS contínua é mais indicada para pacientes instáveis, não sendo apenas paliativa.",
        "en": "Though hourly solute clearance is lower, CRRT is indicated for unstable patients and not merely palliative.",
        "es": "Aunque la depuración de solutos por hora es menor, la TRR continua está indicada en pacientes inestables y no es solo paliativa."
      }
    },
    {
      "text": {
        "pt": "A TRS contínua oferece maior estabilidade hemodinâmica em pacientes críticos.",
        "en": "CRRT provides greater hemodynamic stability in critically ill patients.",
        "es": "La TRR continua ofrece mayor estabilidad hemodinámica en pacientes críticos."
      },
      "explanation": {
        "pt": "Por permitir remoção lenta e contínua de líquidos e solutos, a CRRT é ideal para pacientes hemodinamicamente instáveis. (KDIGO 2012)",
        "en": "By allowing slow, continuous removal of fluids and solutes, CRRT is ideal for hemodynamically unstable patients. (KDIGO 2012)",
        "es": "Al permitir eliminación lenta y continua de líquidos y solutos, la CRRT es ideal para pacientes hemodinámicamente inestables. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "SLED é a modalidade mais indicada para pacientes com encefalopatia hepática grave.",
        "en": "SLED is the preferred modality for patients with severe hepatic encephalopathy.",
        "es": "SLED es la modalidad preferida para pacientes con encefalopatía hepática grave."
      },
      "explanation": {
        "pt": "SLED pode ser usada em pacientes críticos, mas não é a primeira escolha para tratamento específico de encefalopatia hepática.",
        "en": "SLED can be used in critical patients but is not the first-line therapy for hepatic encephalopathy.",
        "es": "SLED puede utilizarse en pacientes críticos, pero no es la terapia de primera elección para encefalopatía hepática."
      }
    },
    {
      "text": {
        "pt": "SCUF é a modalidade mais adequada para rápida depuração de ureia e creatinina.",
        "en": "SCUF is the most appropriate modality for rapid clearance of urea and creatinine.",
        "es": "SCUF es la modalidad más adecuada para la depuración rápida de urea y creatinina."
      },
      "explanation": {
        "pt": "SCUF é voltada exclusivamente para remoção de volume, com baixa ou nenhuma depuração de solutos. Não é indicada para controlar uremia ou acidose.",
        "en": "SCUF is used exclusively for fluid removal, with minimal or no solute clearance. It is not suitable for controlling uremia or acidosis.",
        "es": "SCUF se utiliza exclusivamente para la eliminación de líquidos, con poca o ninguna depuración de solutos. No es adecuada para controlar uremia o acidosis."
      }
    },
    {
      "text": {
        "pt": "A TRS intermitente é contraindicada em qualquer paciente com noradrenalina em uso.",
        "en": "Intermittent RRT is contraindicated in any patient using norepinephrine.",
        "es": "La TRR intermitente está contraindicada en cualquier paciente que use noradrenalina."
      },
      "explanation": {
        "pt": "A TRS intermitente pode ser usada em pacientes com vasopressores, desde que hemodinamicamente estáveis.",
        "en": "Intermittent RRT can be used in patients on vasopressors if they are hemodynamically stable.",
        "es": "La TRR intermitente puede usarse en pacientes con vasopresores si están hemodinámicamente estables."
      }
    }
  ]
},
{
  "id": 811,
  "code": "dialysis-q811",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "scuf", "fluid overload", "shock", "modality-selection"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Paciente com IC descompensada grave e DPOC, sob ventilação mecânica e vasopressores em doses moderadas, apresenta balanço hídrico positivo de 6L, pCO₂ cronicamente elevado, e sem sinais de uremia ou distúrbios eletrolíticos relevantes. Diante da necessidade de remover volume com estabilidade hemodinâmica, qual é a modalidade de TRS mais indicada?",
    "en": "A patient with severe decompensated heart failure and COPD, on mechanical ventilation and moderate vasopressor support, presents with +6L fluid balance, chronically elevated pCO₂, and no signs of uremia or significant electrolyte disorders. To remove fluid while maintaining hemodynamic stability, which RRT modality is most appropriate?",
    "es": "Un paciente con insuficiencia cardíaca grave descompensada y EPOC, bajo ventilación mecánica y soporte vasopresor moderado, presenta un balance hídrico positivo de 6L, pCO₂ crónicamente elevado y sin signos de uremia ni alteraciones electrolíticas relevantes. ¿Qué modalidad de TRR es la más adecuada para remover líquido manteniendo estabilidad hemodinámica?"
  },
  "options": [
    {
      "text": {
        "pt": "SCUF (ultrafiltração contínua lenta)",
        "en": "SCUF (Slow Continuous Ultrafiltration)",
        "es": "SCUF (Ultrafiltración continua lenta)"
      },
      "explanation": {
        "pt": "SCUF é indicada quando há sobrecarga hídrica refratária sem necessidade de depuração soluta, permitindo ultrafiltração suave em pacientes instáveis. (KDIGO 2012)",
        "en": "SCUF is indicated for fluid overload without solute clearance needs, allowing gentle ultrafiltration in unstable patients. (KDIGO 2012)",
        "es": "SCUF está indicada para sobrecarga hídrica sin necesidad de depuración de solutos, permitiendo ultrafiltración suave en pacientes inestables. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Hemodiálise intermitente padrão",
        "en": "Standard intermittent hemodialysis",
        "es": "Hemodiálisis intermitente estándar"
      },
      "explanation": {
        "pt": "Apesar da eficiência, pode causar instabilidade hemodinâmica significativa em pacientes com choque e congestão grave.",
        "en": "Though efficient, it may cause significant hemodynamic instability in patients with shock and severe congestion.",
        "es": "Aunque eficiente, puede causar inestabilidad hemodinámica en pacientes con shock y congestión grave."
      }
    },
    {
      "text": {
        "pt": "Diálise peritoneal",
        "en": "Peritoneal dialysis",
        "es": "Diálisis peritoneal"
      },
      "explanation": {
        "pt": "Pouco usada em contextos de terapia intensiva aguda, com eficácia limitada na remoção rápida de volume em pacientes graves.",
        "en": "Rarely used in acute intensive care, with limited effectiveness in rapid fluid removal in critically ill patients.",
        "es": "Raramente se usa en cuidados intensivos agudos, con eficacia limitada para eliminación rápida de líquidos."
      }
    },
    {
      "text": {
        "pt": "SLED (diálise lenta de baixa eficiência)",
        "en": "SLED (Slow Low-Efficiency Dialysis)",
        "es": "SLED (Diálisis lenta de baja eficiencia)"
      },
      "explanation": {
        "pt": "SLED promove remoção gradual de solutos e volume, mas ainda pode causar instabilidade em pacientes altamente dependentes de vasopressor.",
        "en": "SLED allows gradual solute and volume removal, but may still cause instability in highly vasopressor-dependent patients.",
        "es": "SLED permite eliminación gradual de solutos y volumen, pero aún puede causar inestabilidad en pacientes con alta dependencia de vasopresores."
      }
    },
    {
      "text": {
        "pt": "CRRT com dose máxima de depuração",
        "en": "CRRT with maximal solute clearance dose",
        "es": "CRRT con dosis máxima de depuración de solutos"
      },
      "explanation": {
        "pt": "A dose máxima de depuração não é necessária na ausência de distúrbios metabólicos ou urêmicos; pode aumentar perda de nutrientes e eletrólitos.",
        "en": "Maximal clearance is unnecessary without metabolic or uremic issues; may increase nutrient and electrolyte loss.",
        "es": "La depuración máxima no es necesaria sin alteraciones metabólicas o urémicas; puede aumentar la pérdida de nutrientes y electrolitos."
      }
    }
  ]
},
{
  "id": 812,
  "code": "dialysis-q812",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "dose", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual é a dose recomendada de TRS contínua (CRRT) em ml/kg/h para pacientes críticos com LRA?",
    "en": "What is the recommended dose of continuous RRT (CRRT) in ml/kg/h for critically ill patients with AKI?",
    "es": "¿Cuál es la dosis recomendada de TRR continua (CRRT) en ml/kg/h para pacientes críticos con LRA?"
  },
  "options": [
    {
      "text": {
        "pt": "10 a 15 ml/kg/h",
        "en": "10 to 15 ml/kg/h",
        "es": "10 a 15 ml/kg/h"
      },
      "explanation": {
        "pt": "Doses abaixo de 20 ml/kg/h estão associadas a maior acúmulo de solutos e pior prognóstico. (KDIGO 2012)",
        "en": "Doses below 20 ml/kg/h are associated with solute accumulation and worse outcomes. (KDIGO 2012)",
        "es": "Dosis menores de 20 ml/kg/h se asocian con acumulación de solutos y peor pronóstico. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "20 a 25 ml/kg/h",
        "en": "20 to 25 ml/kg/h",
        "es": "20 a 25 ml/kg/h"
      },
      "explanation": {
        "pt": "Essa é a dose recomendada de CRRT, equilibrando depuração eficaz com minimização de complicações. (KDIGO 2012)",
        "en": "This is the recommended CRRT dose, balancing effective clearance with minimal complications. (KDIGO 2012)",
        "es": "Esta es la dosis recomendada de CRRT, equilibrando depuración efectiva con mínimas complicaciones. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "30 a 35 ml/kg/h",
        "en": "30 to 35 ml/kg/h",
        "es": "30 a 35 ml/kg/h"
      },
      "explanation": {
        "pt": "Doses maiores podem ser utilizadas em situações específicas, mas não conferem benefício adicional rotineiro. (VA/NIH ATN Study, NEJM 2008)",
        "en": "Higher doses may be used in specific settings, but offer no routine survival advantage. (VA/NIH ATN Study, NEJM 2008)",
        "es": "Dosis mayores pueden usarse en contextos específicos, pero no mejoran la sobrevida en general. (VA/NIH ATN Study, NEJM 2008)"
      }
    },
    {
      "text": {
        "pt": "40 a 50 ml/kg/h",
        "en": "40 to 50 ml/kg/h",
        "es": "40 a 50 ml/kg/h"
      },
      "explanation": {
        "pt": "Doses excessivas aumentam perda de eletrólitos e nutrientes, sem impacto positivo em desfechos. (RENAL Study, NEJM 2009)",
        "en": "Excessive dosing increases electrolyte and nutrient loss without improving outcomes. (RENAL Study, NEJM 2009)",
        "es": "Dosis excesivas aumentan la pérdida de electrolitos y nutrientes, sin mejorar resultados. (RENAL Study, NEJM 2009)"
      }
    },
    {
      "text": {
        "pt": "Até 60 ml/kg/h, conforme necessidade urinária.",
        "en": "Up to 60 ml/kg/h depending on urine output.",
        "es": "Hasta 60 ml/kg/h según la diuresis."
      },
      "explanation": {
        "pt": "A prescrição de CRRT não deve ser baseada na diurese, mas na necessidade de depuração e remoção de volume. (KDIGO 2012)",
        "en": "CRRT prescription should not rely on urine output but on clearance and fluid needs. (KDIGO 2012)",
        "es": "La prescripción de CRRT no debe basarse en la diuresis, sino en las necesidades de depuración y volumen. (KDIGO 2012)"
      }
    }
  ]
},
{
  "id": 813,
  "code": "dialysis-q813",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "flow", "prescription"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Na prescrição de uma TRS contínua (CRRT), qual é o fluxo sanguíneo (Qb) geralmente recomendado para equilíbrio entre eficácia e tolerabilidade hemodinâmica?",
    "en": "In prescribing continuous RRT (CRRT), what is the generally recommended blood flow (Qb) to balance efficacy and hemodynamic tolerance?",
    "es": "En la prescripción de TRR continua (CRRT), ¿cuál es el flujo sanguíneo (Qb) generalmente recomendado para equilibrar eficacia y tolerancia hemodinámica?"
  },
  "options": [
    {
      "text": {
        "pt": "50 a 100 mL/min",
        "en": "50 to 100 mL/min",
        "es": "50 a 100 mL/min"
      },
      "explanation": {
        "pt": "Qb abaixo de 100 mL/min pode resultar em menor depuração e maior risco de coagulação do filtro.",
        "en": "Qb below 100 mL/min may lead to lower clearance and higher risk of filter clotting.",
        "es": "Un Qb inferior a 100 mL/min puede reducir la depuración y aumentar el riesgo de coagulación del filtro."
      }
    },
    {
      "text": {
        "pt": "100 a 200 mL/min",
        "en": "100 to 200 mL/min",
        "es": "100 a 200 mL/min"
      },
      "explanation": {
        "pt": "Este intervalo é o mais utilizado, garantindo fluxo suficiente para depuração eficaz sem comprometer a estabilidade hemodinâmica. (KDIGO 2012)",
        "en": "This range is commonly used, providing effective clearance without compromising hemodynamic stability. (KDIGO 2012)",
        "es": "Este rango es el más utilizado, proporcionando depuración eficaz sin comprometer la estabilidad hemodinámica. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "250 a 300 mL/min",
        "en": "250 to 300 mL/min",
        "es": "250 a 300 mL/min"
      },
      "explanation": {
        "pt": "Qb nesse intervalo é mais comum em hemodiálise intermitente. Em CRRT, pode não ser bem tolerado por pacientes críticos.",
        "en": "This Qb is more typical for intermittent dialysis. In CRRT, it may not be well tolerated in critically ill patients.",
        "es": "Este Qb es más típico de diálisis intermitente. En CRRT puede no ser bien tolerado por pacientes críticos."
      }
    },
    {
      "text": {
        "pt": "350 a 400 mL/min",
        "en": "350 to 400 mL/min",
        "es": "350 a 400 mL/min"
      },
      "explanation": {
        "pt": "Fluxos acima de 300 mL/min raramente são usados em CRRT e aumentam o risco de instabilidade hemodinâmica.",
        "en": "Qb over 300 mL/min is rarely used in CRRT and increases the risk of hemodynamic instability.",
        "es": "Qb superiores a 300 mL/min raramente se utilizan en CRRT y aumentan el riesgo de inestabilidad hemodinámica."
      }
    },
    {
      "text": {
        "pt": "Acima de 450 mL/min em todos os pacientes com choque séptico.",
        "en": "Over 450 mL/min in all patients with septic shock.",
        "es": "Más de 450 mL/min en todos los pacientes con shock séptico."
      },
      "explanation": {
        "pt": "Não há benefício em usar Qb tão alto na CRRT, mesmo em choque séptico. A individualização é fundamental. (KDIGO 2012)",
        "en": "There's no benefit in such high Qb in CRRT, even in septic shock. Individualization is key. (KDIGO 2012)",
        "es": "No hay beneficio en usar un Qb tan alto en CRRT, incluso en shock séptico. La individualización es clave. (KDIGO 2012)"
      }
    }
  ]
},
{
  "id": 814,
  "code": "dialysis-q814",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "replacement", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Na prescrição de TRS contínua (CRRT), em que circunstância é recomendada a utilização de solução de reposição (replacement fluid)?",
    "en": "When prescribing continuous RRT (CRRT), in which circumstance is the use of replacement fluid recommended?",
    "es": "Al prescribir TRR continua (CRRT), ¿en qué circunstancia se recomienda el uso de solución de reemplazo?"
  },
  "options": [
    {
      "text": {
        "pt": "Apenas quando há hipercalemia grave.",
        "en": "Only when there is severe hyperkalemia.",
        "es": "Solo cuando hay hiperpotasemia grave."
      },
      "explanation": {
        "pt": "A hipercalemia não é o principal determinante do uso de replacement; este está ligado à técnica convectiva da CRRT.",
        "en": "Hyperkalemia is not the main indication for replacement; it relates to the convective technique in CRRT.",
        "es": "La hiperpotasemia no es la indicación principal del replacement; está relacionada con la técnica convectiva en CRRT."
      }
    },
    {
      "text": {
        "pt": "Quando se utiliza a modalidade convectiva (hemofiltração ou hemodiafiltração).",
        "en": "When using the convective modality (hemofiltration or hemodiafiltration).",
        "es": "Cuando se utiliza la modalidad convectiva (hemofiltración o hemodiafiltración)."
      },
      "explanation": {
        "pt": "A reposição é fundamental em modalidades convectivas, para manter o volume intravascular e permitir a depuração por convecção. (KDIGO 2012)",
        "en": "Replacement fluid is essential in convective modalities to maintain volume and allow solute removal via convection. (KDIGO 2012)",
        "es": "El replacement es fundamental en modalidades convectivas para mantener el volumen y permitir la depuración por convección. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Nunca deve ser utilizada na CRRT.",
        "en": "It should never be used in CRRT.",
        "es": "Nunca debe usarse en la CRRT."
      },
      "explanation": {
        "pt": "A afirmação é incorreta. Replacement é parte integrante de várias modalidades de CRRT.",
        "en": "Incorrect statement. Replacement is integral to several CRRT modalities.",
        "es": "Declaración incorrecta. El replacement forma parte de varias modalidades de CRRT."
      }
    },
    {
      "text": {
        "pt": "Somente quando a pressão venosa central estiver acima de 10 mmHg.",
        "en": "Only when central venous pressure is above 10 mmHg.",
        "es": "Solo cuando la presión venosa central está por encima de 10 mmHg."
      },
      "explanation": {
        "pt": "A PVC não determina o uso de solução de reposição na CRRT; isso depende da técnica depurativa utilizada.",
        "en": "CVP does not dictate replacement use in CRRT; it depends on the depurative modality.",
        "es": "La PVC no determina el uso de replacement en la CRRT; depende de la modalidad depurativa."
      }
    },
    {
      "text": {
        "pt": "Apenas quando se utiliza SCUF.",
        "en": "Only when SCUF is used.",
        "es": "Solo cuando se utiliza SCUF."
      },
      "explanation": {
        "pt": "SCUF não requer solução de reposição, pois é uma técnica apenas para ultrafiltração sem depuração significativa.",
        "en": "SCUF does not require replacement fluid, as it's designed for fluid removal without significant clearance.",
        "es": "SCUF no requiere replacement, ya que está diseñada solo para ultrafiltración sin depuración significativa."
      }
    }
  ]
},
{
  "id": 815,
  "code": "dialysis-q815",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "dialysate", "prescription"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Na prescrição de TRS contínua (CRRT), em que modalidade é necessário incluir o uso de solução de dialisato (Qd)?",
    "en": "In prescribing continuous RRT (CRRT), in which modality is the use of dialysate (Qd) required?",
    "es": "Al prescribir TRR continua (CRRT), ¿en qué modalidad es necesario el uso de dialisato (Qd)?"
  },
  "options": [
    {
      "text": {
        "pt": "Apenas na hemofiltração venovenosa contínua (CVVH).",
        "en": "Only in continuous venovenous hemofiltration (CVVH).",
        "es": "Solo en hemofiltración venovenosa continua (CVVH)."
      },
      "explanation": {
        "pt": "Na CVVH, a depuração é por convecção, utilizando replacement e não Qd.",
        "en": "In CVVH, clearance is by convection using replacement fluid, not Qd.",
        "es": "En CVVH, la depuración es por convección con solución de replacement, no Qd."
      }
    },
    {
      "text": {
        "pt": "Na hemodiálise venovenosa contínua (CVVHD).",
        "en": "In continuous venovenous hemodialysis (CVVHD).",
        "es": "En hemodiálisis venovenosa continua (CVVHD)."
      },
      "explanation": {
        "pt": "A CVVHD utiliza difusão como principal mecanismo de depuração, exigindo o uso de dialisato (Qd). (KDIGO 2012)",
        "en": "CVVHD relies on diffusion for solute removal, requiring dialysate (Qd). (KDIGO 2012)",
        "es": "CVVHD se basa en la difusión para depuración de solutos, requiriendo dialisato (Qd). (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Na SCUF.",
        "en": "In SCUF.",
        "es": "En SCUF."
      },
      "explanation": {
        "pt": "A SCUF é usada apenas para ultrafiltração de volume e não envolve dialisato.",
        "en": "SCUF is used only for fluid removal and does not involve dialysate.",
        "es": "SCUF se utiliza solo para eliminación de líquidos y no involucra dialisato."
      }
    },
    {
      "text": {
        "pt": "Em nenhuma modalidade de TRS contínua.",
        "en": "In no continuous RRT modality.",
        "es": "En ninguna modalidad de TRR continua."
      },
      "explanation": {
        "pt": "A afirmação está incorreta, já que CVVHD e CVVHDF utilizam dialisato.",
        "en": "Incorrect, since CVVHD and CVVHDF use dialysate.",
        "es": "Incorrecto, ya que CVVHD y CVVHDF usan dialisato."
      }
    },
    {
      "text": {
        "pt": "Apenas na TRS intermitente convencional.",
        "en": "Only in conventional intermittent RRT.",
        "es": "Solo en TRR intermitente convencional."
      },
      "explanation": {
        "pt": "Embora o dialisato também seja usado em TRS intermitente, ele é essencial em CVVHD, que é uma modalidade contínua.",
        "en": "Although dialysate is also used in intermittent RRT, it's essential in CVVHD, a continuous modality.",
        "es": "Aunque el dialisato también se usa en TRR intermitente, es esencial en CVVHD, que es continua."
      }
    }
  ]
},
{
  "id": 816,
  "code": "dialysis-q816",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "sled", "duration", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Na prescrição da SLED (diálise lenta de baixa eficiência), qual é a duração média recomendada da sessão para atingir depuração adequada com tolerância hemodinâmica?",
    "en": "In prescribing SLED (Slow Low-Efficiency Dialysis), what is the typical session duration recommended to achieve adequate clearance with hemodynamic tolerance?",
    "es": "Al prescribir SLED (diálisis lenta de baja eficiencia), ¿cuál es la duración promedio recomendada de la sesión para lograr depuración adecuada con tolerancia hemodinámica?"
  },
  "options": [
    {
      "text": {
        "pt": "2 a 3 horas",
        "en": "2 to 3 hours",
        "es": "2 a 3 horas"
      },
      "explanation": {
        "pt": "Essa duração é curta demais para o objetivo da SLED, podendo comprometer a estabilidade hemodinâmica.",
        "en": "This duration is too short for SLED’s purpose and may affect hemodynamic stability.",
        "es": "Esta duración es demasiado corta para el objetivo de SLED y puede comprometer la estabilidad hemodinámica."
      }
    },
    {
      "text": {
        "pt": "6 a 12 horas",
        "en": "6 to 12 hours",
        "es": "6 a 12 horas"
      },
      "explanation": {
        "pt": "A SLED é geralmente realizada por 6 a 12 horas para proporcionar depuração adequada e melhor tolerância em pacientes críticos. (KDIGO 2012)",
        "en": "SLED is typically conducted for 6–12 hours to ensure adequate clearance and better tolerance in critically ill patients. (KDIGO 2012)",
        "es": "SLED suele realizarse entre 6 y 12 horas para garantizar depuración adecuada y mejor tolerancia en pacientes críticos. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "18 a 24 horas",
        "en": "18 to 24 hours",
        "es": "18 a 24 horas"
      },
      "explanation": {
        "pt": "Sessões tão prolongadas são características da CRRT e não da SLED.",
        "en": "Sessions this long are typical of CRRT, not SLED.",
        "es": "Sesiones tan prolongadas son propias de CRRT, no de SLED."
      }
    },
    {
      "text": {
        "pt": "1 a 2 horas, com dialisato aquecido",
        "en": "1 to 2 hours with heated dialysate",
        "es": "1 a 2 horas con dialisato calentado"
      },
      "explanation": {
        "pt": "Essa duração é inadequada e o uso de dialisato aquecido não compensa o tempo curto.",
        "en": "This duration is inadequate, and heated dialysate does not compensate for short session length.",
        "es": "Esta duración es inadecuada, y el dialisato calentado no compensa el tiempo reducido."
      }
    },
    {
      "text": {
        "pt": "Acima de 30 horas com anticoagulação sistêmica contínua.",
        "en": "Over 30 hours with continuous systemic anticoagulation.",
        "es": "Más de 30 horas con anticoagulación sistémica continua."
      },
      "explanation": {
        "pt": "Sessões acima de 30h caracterizam CRRT e não SLED, além de aumentarem o risco de complicações hemorrágicas.",
        "en": "Sessions over 30h characterize CRRT, not SLED, and increase bleeding risk.",
        "es": "Sesiones de más de 30h corresponden a CRRT, no a SLED, y aumentan el riesgo de sangrado."
      }
    }
  ]
},
{
  "id": 817,
  "code": "dialysis-q817",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "sled", "flow", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual é o fluxo sanguíneo (Qb) mais comumente utilizado na prescrição de uma sessão de SLED (diálise lenta de baixa eficiência)?",
    "en": "What is the most commonly used blood flow (Qb) in prescribing a SLED (Slow Low-Efficiency Dialysis) session?",
    "es": "¿Cuál es el flujo sanguíneo (Qb) más utilizado al prescribir una sesión de SLED (diálisis lenta de baja eficiencia)?"
  },
  "options": [
    {
      "text": {
        "pt": "150 a 250 mL/min",
        "en": "150 to 250 mL/min",
        "es": "150 a 250 mL/min"
      },
      "explanation": {
        "pt": "Esse intervalo é o mais comum na SLED, garantindo depuração eficaz com menor risco de instabilidade hemodinâmica. (KDIGO 2012)",
        "en": "This range is commonly used in SLED, ensuring effective clearance with lower risk of hemodynamic instability. (KDIGO 2012)",
        "es": "Este rango es el más común en SLED, asegurando depuración efectiva con menor riesgo de inestabilidad hemodinámica. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "50 a 100 mL/min",
        "en": "50 to 100 mL/min",
        "es": "50 a 100 mL/min"
      },
      "explanation": {
        "pt": "Fluxos muito baixos como este são típicos da SCUF ou CRRT, mas insuficientes para depuração eficaz em SLED.",
        "en": "Such low flows are typical of SCUF or CRRT but insufficient for effective SLED clearance.",
        "es": "Flujos tan bajos son típicos de SCUF o CRRT, pero insuficientes para depuración efectiva en SLED."
      }
    },
    {
      "text": {
        "pt": "300 a 350 mL/min",
        "en": "300 to 350 mL/min",
        "es": "300 a 350 mL/min"
      },
      "explanation": {
        "pt": "Esse fluxo é mais típico da diálise intermitente convencional e pode não ser bem tolerado por pacientes críticos em SLED.",
        "en": "This flow is more typical of conventional intermittent dialysis and may not be well tolerated in SLED.",
        "es": "Este flujo es más típico de diálisis intermitente convencional y puede no ser bien tolerado en SLED."
      }
    },
    {
      "text": {
        "pt": "Acima de 400 mL/min",
        "en": "Over 400 mL/min",
        "es": "Más de 400 mL/min"
      },
      "explanation": {
        "pt": "Fluxos tão altos são incomuns em SLED e podem causar instabilidade hemodinâmica significativa.",
        "en": "Such high flows are uncommon in SLED and may cause significant hemodynamic instability.",
        "es": "Flujos tan altos son inusuales en SLED y pueden causar inestabilidad hemodinámica significativa."
      }
    },
    {
      "text": {
        "pt": "Não se utiliza fluxo sanguíneo em SLED, apenas dialisato.",
        "en": "No blood flow is used in SLED, only dialysate.",
        "es": "No se utiliza flujo sanguíneo en SLED, solo dialisato."
      },
      "explanation": {
        "pt": "A SLED é uma técnica dialítica extracorpórea, com uso obrigatório de fluxo sanguíneo por cateter.",
        "en": "SLED is an extracorporeal dialysis technique that requires blood flow via catheter.",
        "es": "SLED es una técnica de diálisis extracorpórea que requiere flujo sanguíneo por catéter."
      }
    }
  ]
},
{
  "id": 818,
  "code": "dialysis-q818",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "sled", "dialysate", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Na prescrição de SLED (diálise lenta de baixa eficiência), qual é o fluxo de dialisato (Qd) habitualmente recomendado?",
    "en": "In prescribing SLED (Slow Low-Efficiency Dialysis), what is the typical recommended dialysate flow rate (Qd)?",
    "es": "Al prescribir SLED (diálisis lenta de baja eficiencia), ¿cuál es el flujo de dialisato (Qd) habitualmente recomendado?"
  },
  "options": [
    {
      "text": {
        "pt": "300 a 500 mL/min",
        "en": "300 to 500 mL/min",
        "es": "300 a 500 mL/min"
      },
      "explanation": {
        "pt": "Esse fluxo é típico de hemodiálise convencional e não da SLED, que utiliza taxas mais baixas para melhor tolerância hemodinâmica.",
        "en": "This rate is typical of conventional dialysis, not SLED, which uses lower flows to improve hemodynamic tolerance.",
        "es": "Esta tasa es típica de diálisis convencional, no de SLED, que emplea flujos más bajos para mejorar la tolerancia hemodinámica."
      }
    },
    {
      "text": {
        "pt": "100 a 300 mL/min",
        "en": "100 to 300 mL/min",
        "es": "100 a 300 mL/min"
      },
      "explanation": {
        "pt": "Esse intervalo é o mais utilizado na SLED, promovendo depuração gradual e segura em pacientes críticos. (KDIGO 2012)",
        "en": "This range is most used in SLED, allowing gradual and safe clearance in critically ill patients. (KDIGO 2012)",
        "es": "Este rango es el más utilizado en SLED, permitiendo depuración gradual y segura en pacientes críticos. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "50 a 100 mL/min",
        "en": "50 to 100 mL/min",
        "es": "50 a 100 mL/min"
      },
      "explanation": {
        "pt": "Fluxos muito baixos podem ser ineficazes na depuração de solutos e prolongar excessivamente a sessão.",
        "en": "Very low flows may result in ineffective solute clearance and excessively prolong the session.",
        "es": "Flujos muy bajos pueden resultar en depuración ineficaz de solutos y sesiones excesivamente largas."
      }
    },
    {
      "text": {
        "pt": "Acima de 600 mL/min",
        "en": "Over 600 mL/min",
        "es": "Más de 600 mL/min"
      },
      "explanation": {
        "pt": "Taxas tão elevadas são típicas de hemodiálise convencional de alta eficiência, não da SLED.",
        "en": "Such high flow rates are typical of high-efficiency conventional dialysis, not SLED.",
        "es": "Tasas tan elevadas son propias de diálisis convencional de alta eficiencia, no de SLED."
      }
    },
    {
      "text": {
        "pt": "SLED não utiliza dialisato, apenas replacement.",
        "en": "SLED does not use dialysate, only replacement.",
        "es": "SLED no utiliza dialisato, solo replacement."
      },
      "explanation": {
        "pt": "SLED é uma técnica difusiva baseada em dialisato. Replacement é usado em modalidades convectivas como CVVH.",
        "en": "SLED is a diffusive technique based on dialysate. Replacement is used in convective modalities like CVVH.",
        "es": "SLED es una técnica difusiva basada en dialisato. El replacement se emplea en modalidades convectivas como CVVH."
      }
    }
  ]
},
{
  "id": 819,
  "code": "dialysis-q819",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "sled", "hemodynamic stability", "prescription"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Qual das seguintes é uma vantagem da SLED em pacientes com instabilidade hemodinâmica?",
    "en": "Which of the following is an advantage of SLED in patients with hemodynamic instability?",
    "es": "¿Cuál de las siguientes es una ventaja de la SLED en pacientes con inestabilidad hemodinámica?"
  },
  "options": [
    {
      "text": {
        "pt": "Alta taxa de ultrafiltração rápida.",
        "en": "High rate of rapid ultrafiltration.",
        "es": "Alta tasa de ultrafiltración rápida."
      },
      "explanation": {
        "pt": "A ultrafiltração rápida pode descompensar pacientes instáveis. SLED se caracteriza por taxas mais lentas.",
        "en": "Rapid ultrafiltration can destabilize patients. SLED is characterized by slower fluid removal.",
        "es": "La ultrafiltración rápida puede descompensar al paciente. SLED se caracteriza por una eliminación lenta de líquidos."
      }
    },
    {
      "text": {
        "pt": "Necessidade de cateter de alto fluxo arterial.",
        "en": "Need for high-flow arterial catheter.",
        "es": "Necesidad de catéter arterial de alto flujo."
      },
      "explanation": {
        "pt": "SLED utiliza cateteres venosos, geralmente duplo lúmen, sem necessidade de acesso arterial.",
        "en": "SLED uses venous catheters, usually double-lumen, with no need for arterial access.",
        "es": "SLED usa catéteres venosos, generalmente de doble lumen, sin necesidad de acceso arterial."
      }
    },
    {
      "text": {
        "pt": "Depuração extremamente intensa em pouco tempo.",
        "en": "Extremely intense clearance in a short time.",
        "es": "Depuración extremadamente intensa en poco tiempo."
      },
      "explanation": {
        "pt": "Essa característica é da hemodiálise convencional. SLED busca uma depuração gradual e estável.",
        "en": "That is a trait of conventional hemodialysis. SLED aims for gradual and stable clearance.",
        "es": "Esa es una característica de la hemodiálisis convencional. SLED busca depuración gradual y estable."
      }
    },
    {
      "text": {
        "pt": "Melhor tolerância cardiovascular por menor variação de volume.",
        "en": "Better cardiovascular tolerance due to lower volume shifts.",
        "es": "Mejor tolerancia cardiovascular por menores variaciones de volumen."
      },
      "explanation": {
        "pt": "SLED proporciona remoção mais lenta e contínua de solutos e volume, o que reduz o estresse hemodinâmico. (KDIGO 2012)",
        "en": "SLED provides slower and continuous removal of solutes and fluid, reducing hemodynamic stress. (KDIGO 2012)",
        "es": "SLED permite una eliminación más lenta y continua de solutos y volumen, reduciendo el estrés hemodinámico. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Utilização exclusiva em pacientes normotensos e jovens.",
        "en": "Exclusive use in young, normotensive patients.",
        "es": "Uso exclusivo en pacientes jóvenes y normotensos."
      },
      "explanation": {
        "pt": "SLED é indicada justamente em pacientes críticos, idosos ou instáveis. Essa afirmação está incorreta.",
        "en": "SLED is actually indicated for critically ill, elderly, or unstable patients. This statement is incorrect.",
        "es": "SLED está indicada precisamente en pacientes críticos, ancianos o inestables. Esta afirmación es incorrecta."
      }
    }
  ]
},
{
  "id": 820,
  "code": "dialysis-q820",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "sled", "anticoagulation", "prescription"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Qual das alternativas abaixo reflete uma prática comum de anticoagulação durante sessões de SLED em pacientes críticos?",
    "en": "Which of the following reflects a common anticoagulation practice during SLED sessions in critically ill patients?",
    "es": "¿Cuál de las siguientes refleja una práctica común de anticoagulación durante sesiones de SLED en pacientes críticos?"
  },
  "options": [
    {
      "text": {
        "pt": "Uso de heparina não fracionada com monitoramento de TTPa.",
        "en": "Use of unfractionated heparin with aPTT monitoring.",
        "es": "Uso de heparina no fraccionada con monitoreo de TTPa."
      },
      "explanation": {
        "pt": "A heparina não fracionada é amplamente utilizada na SLED, com monitoramento do TTPa para ajuste seguro da dose. (KDIGO 2012)",
        "en": "Unfractionated heparin is commonly used in SLED, with aPTT monitoring to safely adjust dosage. (KDIGO 2012)",
        "es": "La heparina no fraccionada es común en SLED, con monitoreo de TTPa para ajustar la dosis de forma segura. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Evitar anticoagulação em todos os casos por risco hemorrágico.",
        "en": "Avoid anticoagulation in all cases due to bleeding risk.",
        "es": "Evitar anticoagulación en todos los casos por riesgo hemorrágico."
      },
      "explanation": {
        "pt": "Embora o risco hemorrágico exista, a anticoagulação é frequentemente necessária para evitar coagulação do circuito.",
        "en": "Although bleeding risk exists, anticoagulation is often needed to prevent circuit clotting.",
        "es": "Aunque existe riesgo de sangrado, frecuentemente se necesita anticoagulación para evitar coagulación del circuito."
      }
    },
    {
      "text": {
        "pt": "Uso exclusivo de anticoagulação regional com citrato.",
        "en": "Exclusive use of regional citrate anticoagulation.",
        "es": "Uso exclusivo de anticoagulación regional con citrato."
      },
      "explanation": {
        "pt": "O citrato é mais comum em CRRT. Na SLED, a heparina sistêmica é mais frequentemente utilizada.",
        "en": "Citrate is more common in CRRT. Systemic heparin is more frequently used in SLED.",
        "es": "El citrato es más común en CRRT. En SLED se usa más frecuentemente heparina sistémica."
      }
    },
    {
      "text": {
        "pt": "Anticoagulação com varfarina ajustada ao INR alvo.",
        "en": "Anticoagulation with warfarin adjusted to target INR.",
        "es": "Anticoagulación con warfarina ajustada a INR objetivo."
      },
      "explanation": {
        "pt": "Varfarina não é adequada para anticoagulação em circuito dialítico por seu início lento e controle instável.",
        "en": "Warfarin is not suitable for dialysis circuit anticoagulation due to slow onset and unstable control.",
        "es": "La warfarina no es adecuada para anticoagulación de circuito dialítico por su inicio lento y control inestable."
      }
    },
    {
      "text": {
        "pt": "SLED não requer anticoagulação em nenhum cenário clínico.",
        "en": "SLED does not require anticoagulation in any clinical scenario.",
        "es": "SLED no requiere anticoagulación en ningún escenario clínico."
      },
      "explanation": {
        "pt": "SLED pode dispensar anticoagulação em casos específicos, mas não em todos. O risco de coagulação do circuito persiste.",
        "en": "SLED may be anticoagulation-free in some cases, but not universally. Circuit clotting remains a risk.",
        "es": "SLED puede prescindir de anticoagulación en ciertos casos, pero no en todos. El riesgo de coagulación del circuito persiste."
      }
    }
  ]
},
{
  "id": 821,
  "code": "dialysis-q821",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "intermittent", "duration", "prescription"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Em pacientes críticos, qual é a duração mais habitual de uma sessão de diálise intermitente convencional (hemodiálise) na UTI?",
    "en": "In critically ill patients, what is the most common duration of a conventional intermittent dialysis session in the ICU?",
    "es": "En pacientes críticos, ¿cuál es la duración más habitual de una sesión de diálisis intermitente convencional en UCI?"
  },
  "options": [
    {
      "text": {
        "pt": "1 a 2 horas",
        "en": "1 to 2 hours",
        "es": "1 a 2 horas"
      },
      "explanation": {
        "pt": "Esse tempo é curto demais para depuração adequada e frequentemente leva a instabilidade hemodinâmica.",
        "en": "This duration is too short for adequate clearance and often leads to hemodynamic instability.",
        "es": "Esta duración es demasiado corta para una depuración adecuada y suele causar inestabilidad hemodinámica."
      }
    },
    {
      "text": {
        "pt": "3 a 5 horas",
        "en": "3 to 5 hours",
        "es": "3 a 5 horas"
      },
      "explanation": {
        "pt": "Esse é o tempo mais comum de sessões de TRS intermitente em pacientes críticos, permitindo boa depuração e tolerância. (KDIGO 2012)",
        "en": "This is the most common duration for intermittent RRT sessions in critically ill patients, allowing good clearance and tolerance. (KDIGO 2012)",
        "es": "Esta es la duración más común de las sesiones de TRS intermitente en pacientes críticos, permitiendo buena depuración y tolerancia. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "8 a 12 horas",
        "en": "8 to 12 hours",
        "es": "8 a 12 horas"
      },
      "explanation": {
        "pt": "Essa duração se aproxima mais da SLED, não da hemodiálise convencional.",
        "en": "This duration is more typical of SLED, not conventional hemodialysis.",
        "es": "Esta duración es más típica de SLED, no de hemodiálisis convencional."
      }
    },
    {
      "text": {
        "pt": "24 horas contínuas",
        "en": "24 continuous hours",
        "es": "24 horas continuas"
      },
      "explanation": {
        "pt": "TRS contínua (CRRT) é que ocorre por 24h, não a intermitente.",
        "en": "Continuous RRT (CRRT) runs for 24h, not intermittent dialysis.",
        "es": "La TRS continua (CRRT) dura 24h, no la diálisis intermitente."
      }
    },
    {
      "text": {
        "pt": "Somente noturna, com duração de 6 a 8 horas.",
        "en": "Night-time only, lasting 6 to 8 hours.",
        "es": "Solo nocturna, con duración de 6 a 8 horas."
      },
      "explanation": {
        "pt": "Essa abordagem é mais comum em programas domiciliares, não em UTI.",
        "en": "This approach is more common in home dialysis programs, not ICU practice.",
        "es": "Este enfoque es más común en programas domiciliarios, no en UCI."
      }
    }
  ]
},
{
  "id": 822,
  "code": "dialysis-q822",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "intermittent", "dose", "prescription"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Na hemodiálise intermitente para pacientes críticos, qual é a meta habitual de dose mínima de diálise prescrita por sessão?",
    "en": "In intermittent hemodialysis for critically ill patients, what is the usual target minimum dialysis dose per session?",
    "es": "En la hemodiálisis intermitente para pacientes críticos, ¿cuál es la dosis mínima habitual de diálisis prescrita por sesión?"
  },
  "options": [
    {
      "text": {
        "pt": "Kt/V menor que 0,5",
        "en": "Kt/V less than 0.5",
        "es": "Kt/V menor de 0.5"
      },
      "explanation": {
        "pt": "Essa dose é considerada inadequada e está associada a piores desfechos clínicos.",
        "en": "This dose is inadequate and associated with worse clinical outcomes.",
        "es": "Esta dosis es inadecuada y se asocia con peores desenlaces clínicos."
      }
    },
    {
      "text": {
        "pt": "Kt/V de 0,7 a 0,9",
        "en": "Kt/V of 0.7 to 0.9",
        "es": "Kt/V de 0.7 a 0.9"
      },
      "explanation": {
        "pt": "Essa faixa representa a dose mínima recomendada para sessões eficazes de TRS intermitente. (KDIGO 2012)",
        "en": "This range represents the minimum recommended dose for effective intermittent RRT sessions. (KDIGO 2012)",
        "es": "Este rango representa la dosis mínima recomendada para sesiones efectivas de TRS intermitente. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Kt/V acima de 2,5",
        "en": "Kt/V greater than 2.5",
        "es": "Kt/V mayor de 2.5"
      },
      "explanation": {
        "pt": "Essa dose é mais comum em diálise crônica de longa duração e não é necessária em sessões agudas.",
        "en": "This dose is more common in long chronic dialysis and not required in acute sessions.",
        "es": "Esta dosis es más común en diálisis crónica prolongada y no es necesaria en sesiones agudas."
      }
    },
    {
      "text": {
        "pt": "Não se utiliza Kt/V na hemodiálise hospitalar.",
        "en": "Kt/V is not used in hospital-based hemodialysis.",
        "es": "No se utiliza Kt/V en hemodiálisis hospitalaria."
      },
      "explanation": {
        "pt": "Embora Kt/V tenha limitações, é frequentemente usado como parâmetro para dose de diálise em UTI e ambiente hospitalar.",
        "en": "Although Kt/V has limitations, it is often used as a parameter for dialysis dosing in ICU and hospital settings.",
        "es": "Aunque el Kt/V tiene limitaciones, se usa comúnmente como parámetro de dosis en UCI y hospitales."
      }
    },
    {
      "text": {
        "pt": "A dose não é importante se houver ultrafiltração.",
        "en": "Dose is not important if ultrafiltration occurs.",
        "es": "La dosis no importa si hay ultrafiltración."
      },
      "explanation": {
        "pt": "A dose de depuração soluta é independente da ultrafiltração. Ambas devem ser avaliadas separadamente.",
        "en": "Solute clearance dose is independent of ultrafiltration. Both should be assessed separately.",
        "es": "La dosis de depuración de solutos es independiente de la ultrafiltración. Ambas deben evaluarse por separado."
      }
    }
  ]
},
{
  "id": 823,
  "code": "dialysis-q823",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "intermittent", "anticoagulation", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual é a forma mais frequentemente utilizada de anticoagulação durante hemodiálise intermitente em pacientes críticos?",
    "en": "What is the most commonly used form of anticoagulation during intermittent hemodialysis in critically ill patients?",
    "es": "¿Cuál es la forma de anticoagulación más utilizada durante la hemodiálisis intermitente en pacientes críticos?"
  },
  "options": [
    {
      "text": {
        "pt": "Heparina de baixo peso molecular (HBPM)",
        "en": "Low molecular weight heparin (LMWH)",
        "es": "Heparina de bajo peso molecular (HBPM)"
      },
      "explanation": {
        "pt": "HBPM tem uso limitado em diálise hospitalar devido à dificuldade de reversão e acúmulo em pacientes com função renal reduzida.",
        "en": "LMWH is less frequently used in hospital dialysis due to poor reversibility and accumulation in renal failure.",
        "es": "La HBPM tiene uso limitado en diálisis hospitalaria por su difícil reversión y acumulación en insuficiencia renal."
      }
    },
    {
      "text": {
        "pt": "Heparina não fracionada em bolus ou infusão",
        "en": "Unfractionated heparin as bolus or infusion",
        "es": "Heparina no fraccionada en bolo o infusión"
      },
      "explanation": {
        "pt": "A heparina não fracionada é o anticoagulante mais utilizado, devido à ampla experiência, baixo custo e reversão fácil com protamina. (KDIGO 2012)",
        "en": "Unfractionated heparin is most used due to broad experience, low cost, and easy reversal with protamine. (KDIGO 2012)",
        "es": "La heparina no fraccionada es la más utilizada por experiencia amplia, bajo costo y reversión fácil con protamina. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Citrato regional obrigatório",
        "en": "Mandatory regional citrate",
        "es": "Citrato regional obligatorio"
      },
      "explanation": {
        "pt": "Citrato é usado principalmente em TRS contínua. Não é obrigatório em sessões intermitentes.",
        "en": "Citrate is mainly used in continuous RRT. It is not mandatory in intermittent sessions.",
        "es": "El citrato se usa principalmente en TRS continua. No es obligatorio en sesiones intermitentes."
      }
    },
    {
      "text": {
        "pt": "Argatroban como primeira linha",
        "en": "Argatroban as first-line",
        "es": "Argatroban como primera línea"
      },
      "explanation": {
        "pt": "Argatroban é reservado para casos específicos como trombocitopenia induzida por heparina (HIT), não sendo primeira linha.",
        "en": "Argatroban is reserved for specific cases like HIT, not used as first-line anticoagulation.",
        "es": "El argatroban se reserva para casos específicos como HIT, no es primera línea de anticoagulación."
      }
    },
    {
      "text": {
        "pt": "Plasma fresco como anticoagulante dialítico",
        "en": "Fresh frozen plasma as dialysis anticoagulant",
        "es": "Plasma fresco como anticoagulante en diálisis"
      },
      "explanation": {
        "pt": "Plasma fresco não é um anticoagulante. Seu uso é para correção de coagulopatias, não em circuitos dialíticos.",
        "en": "Fresh plasma is not an anticoagulant. It's used for coagulopathy correction, not for dialysis circuits.",
        "es": "El plasma fresco no es un anticoagulante. Se usa para corregir coagulopatías, no en circuitos de diálisis."
      }
    }
  ]
},
{
  "id": 824,
  "code": "dialysis-q824",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "citrate", "anticoagulation", "prescription"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual é o principal mecanismo de ação do citrato como anticoagulante regional em terapias contínuas (CRRT)?",
    "en": "What is the main mechanism of action of citrate as a regional anticoagulant in continuous therapies (CRRT)?",
    "es": "¿Cuál es el principal mecanismo de acción del citrato como anticoagulante regional en terapias continuas (CRRT)?"
  },
  "options": [
    {
      "text": {
        "pt": "Ativação da antitrombina III no circuito extracorpóreo.",
        "en": "Activation of antithrombin III in the extracorporeal circuit.",
        "es": "Activación de la antitrombina III en el circuito extracorpóreo."
      },
      "explanation": {
        "pt": "Esse é o mecanismo da heparina. O citrato atua de forma diferente.",
        "en": "That’s the mechanism of heparin. Citrate works differently.",
        "es": "Ese es el mecanismo de la heparina. El citrato actúa de otra forma."
      }
    },
    {
      "text": {
        "pt": "Quelar o cálcio ionizado, inibindo a cascata de coagulação localmente.",
        "en": "Chelation of ionized calcium, inhibiting local coagulation cascade.",
        "es": "Quelación del calcio ionizado, inhibiendo la cascada de coagulación localmente."
      },
      "explanation": {
        "pt": "O citrato liga-se ao cálcio ionizado no circuito extracorpóreo, impedindo a ativação da coagulação. (KDIGO 2012)",
        "en": "Citrate binds ionized calcium in the extracorporeal circuit, blocking coagulation activation. (KDIGO 2012)",
        "es": "El citrato se une al calcio ionizado en el circuito extracorpóreo, impidiendo la activación de la coagulación. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Estímulo da fibrinólise endógena.",
        "en": "Stimulation of endogenous fibrinolysis.",
        "es": "Estimulación de la fibrinólisis endógena."
      },
      "explanation": {
        "pt": "O citrato não atua promovendo fibrinólise, mas sim prevenindo a coagulação.",
        "en": "Citrate does not promote fibrinolysis but prevents clotting.",
        "es": "El citrato no promueve la fibrinólisis, sino que previene la coagulación."
      }
    },
    {
      "text": {
        "pt": "Bloqueio direto dos receptores plaquetários.",
        "en": "Direct blockade of platelet receptors.",
        "es": "Bloqueo directo de los receptores plaquetarios."
      },
      "explanation": {
        "pt": "O citrato atua sobre o cálcio e não interfere diretamente na função plaquetária.",
        "en": "Citrate acts on calcium and does not directly block platelet function.",
        "es": "El citrato actúa sobre el calcio y no bloquea directamente la función plaquetaria."
      }
    },
    {
      "text": {
        "pt": "Produção local de óxido nítrico anticoagulante.",
        "en": "Local production of anticoagulant nitric oxide.",
        "es": "Producción local de óxido nítrico anticoagulante."
      },
      "explanation": {
        "pt": "Esse mecanismo não se relaciona com a ação do citrato. O efeito principal é quelante do cálcio.",
        "en": "This mechanism is unrelated to citrate. Its main effect is calcium chelation.",
        "es": "Este mecanismo no está relacionado con el citrato. Su efecto principal es la quelación del calcio."
      }
    }
  ]
},
{
  "id": 825,
  "code": "dialysis-q825",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "citrate", "calcium", "monitoring"],
  "level": "easy",
  "correct": 2,
  "question": {
    "pt": "Durante a anticoagulação regional com citrato em CRRT, qual parâmetro deve ser monitorado de forma frequente para ajustar a reposição de cálcio?",
    "en": "During regional citrate anticoagulation in CRRT, which parameter must be frequently monitored to adjust calcium replacement?",
    "es": "Durante la anticoagulación regional con citrato en CRRT, ¿qué parámetro debe monitorearse frecuentemente para ajustar la reposición de calcio?"
  },
  "options": [
    {
      "text": {
        "pt": "Níveis de sódio sérico",
        "en": "Serum sodium levels",
        "es": "Niveles séricos de sodio"
      },
      "explanation": {
        "pt": "O citrato afeta o metabolismo do cálcio, não o sódio.",
        "en": "Citrate affects calcium metabolism, not sodium.",
        "es": "El citrato afecta el metabolismo del calcio, no del sodio."
      }
    },
    {
      "text": {
        "pt": "Cálcio total",
        "en": "Total calcium",
        "es": "Calcio total"
      },
      "explanation": {
        "pt": "O cálcio total pode estar elevado devido à ligação com citrato, mas não reflete o cálcio ionizado ativo.",
        "en": "Total calcium may be elevated due to citrate binding, but does not reflect active ionized calcium.",
        "es": "El calcio total puede estar elevado por la unión al citrato, pero no refleja el calcio ionizado activo."
      }
    },
    {
      "text": {
        "pt": "Cálcio ionizado pós-filtro e sistêmico",
        "en": "Post-filter and systemic ionized calcium",
        "es": "Calcio ionizado post-filtro y sistémico"
      },
      "explanation": {
        "pt": "O cálcio ionizado deve ser monitorado no pós-filtro (para avaliar eficácia da anticoagulação) e no sangue sistêmico (para prevenir hipocalcemia grave). (KDIGO 2012)",
        "en": "Ionized calcium should be monitored post-filter (for anticoagulation efficacy) and systemically (to prevent severe hypocalcemia). (KDIGO 2012)",
        "es": "El calcio ionizado debe monitorearse post-filtro (para eficacia anticoagulante) y sistémico (para evitar hipocalcemia grave). (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "pH arterial",
        "en": "Arterial pH",
        "es": "pH arterial"
      },
      "explanation": {
        "pt": "Embora o citrato afete o pH, o ajuste da reposição de cálcio depende do cálcio ionizado.",
        "en": "Though citrate can affect pH, calcium replacement adjustment relies on ionized calcium.",
        "es": "Aunque el citrato puede alterar el pH, el ajuste del calcio se basa en el calcio ionizado."
      }
    },
    {
      "text": {
        "pt": "Creatinina sérica",
        "en": "Serum creatinine",
        "es": "Creatinina sérica"
      },
      "explanation": {
        "pt": "A creatinina não interfere diretamente na anticoagulação por citrato nem na reposição de cálcio.",
        "en": "Creatinine does not directly influence citrate anticoagulation or calcium replacement.",
        "es": "La creatinina no influye directamente en la anticoagulación con citrato ni en la reposición de calcio."
      }
    }
  ]
},
{
  "id": 826,
  "code": "dialysis-q826",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "citrate", "complications"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Quais são complicações potenciais associadas ao uso de anticoagulação regional com citrato em terapias contínuas (CRRT)?",
    "en": "What are potential complications associated with regional citrate anticoagulation in continuous therapies (CRRT)?",
    "es": "¿Cuáles son complicaciones potenciales asociadas al uso de citrato como anticoagulante regional en terapias continuas (CRRT)?"
  },
  "options": [
    {
      "text": {
        "pt": "Hipocalemia, hiponatremia e acidose grave.",
        "en": "Hypokalemia, hyponatremia, and severe acidosis.",
        "es": "Hipocalemia, hiponatremia y acidosis grave."
      },
      "explanation": {
        "pt": "Essas alterações não são características do uso de citrato em CRRT.",
        "en": "These are not typical disturbances related to citrate use in CRRT.",
        "es": "Estas alteraciones no son características del uso de citrato en CRRT."
      }
    },
    {
      "text": {
        "pt": "Hipermagnesemia e hiperglicemia.",
        "en": "Hypermagnesemia and hyperglycemia.",
        "es": "Hipermagnesemia e hiperglucemia."
      },
      "explanation": {
        "pt": "Essas alterações são comuns em outras situações, mas não específicas da anticoagulação com citrato.",
        "en": "These are more common in other contexts, not specific to citrate anticoagulation.",
        "es": "Estas alteraciones son más comunes en otros contextos, no son específicas del citrato."
      }
    },
    {
      "text": {
        "pt": "Hipofosfatemia severa e hiponatremia dilucional.",
        "en": "Severe hypophosphatemia and dilutional hyponatremia.",
        "es": "Hipofosfatemia severa e hiponatremia dilucional."
      },
      "explanation": {
        "pt": "Embora possíveis durante CRRT, essas alterações não estão diretamente relacionadas ao citrato.",
        "en": "Although possible during CRRT, these are not directly related to citrate.",
        "es": "Aunque posibles durante la CRRT, no están directamente relacionadas al citrato."
      }
    },
    {
      "text": {
        "pt": "Hipocalcemia, alcalose metabólica e toxicidade por citrato.",
        "en": "Hypocalcemia, metabolic alkalosis, and citrate toxicity.",
        "es": "Hipocalcemia, alcalosis metabólica y toxicidad por citrato."
      },
      "explanation": {
        "pt": "Essas são as complicações clássicas do uso de citrato, especialmente em pacientes com falência hepática ou baixa depuração. (KDIGO 2012)",
        "en": "These are the classic complications of citrate use, especially in hepatic failure or low clearance. (KDIGO 2012)",
        "es": "Estas son las complicaciones clásicas del citrato, especialmente en fallo hepático o depuración reducida. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Trombocitose, acidose láctica e hemólise.",
        "en": "Thrombocytosis, lactic acidosis, and hemolysis.",
        "es": "Trombocitosis, acidosis láctica y hemólisis."
      },
      "explanation": {
        "pt": "Essas condições não têm relação direta com o uso de citrato em TRS contínua.",
        "en": "These conditions are not directly linked to citrate use in continuous dialysis.",
        "es": "Estas condiciones no se relacionan directamente con el uso de citrato en TRS continua."
      }
    }
  ]
},
{
  "id": 826,
  "code": "dialysis-q826",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "citrate", "complications"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Quais são complicações potenciais associadas ao uso de anticoagulação regional com citrato em terapias contínuas (CRRT)?",
    "en": "What are potential complications associated with regional citrate anticoagulation in continuous therapies (CRRT)?",
    "es": "¿Cuáles son complicaciones potenciales asociadas al uso de citrato como anticoagulante regional en terapias continuas (CRRT)?"
  },
  "options": [
    {
      "text": {
        "pt": "Hipocalemia, hiponatremia e acidose grave.",
        "en": "Hypokalemia, hyponatremia, and severe acidosis.",
        "es": "Hipocalemia, hiponatremia y acidosis grave."
      },
      "explanation": {
        "pt": "Essas alterações não são características do uso de citrato em CRRT.",
        "en": "These are not typical disturbances related to citrate use in CRRT.",
        "es": "Estas alteraciones no son características del uso de citrato en CRRT."
      }
    },
    {
      "text": {
        "pt": "Hipermagnesemia e hiperglicemia.",
        "en": "Hypermagnesemia and hyperglycemia.",
        "es": "Hipermagnesemia e hiperglucemia."
      },
      "explanation": {
        "pt": "Essas alterações são comuns em outras situações, mas não específicas da anticoagulação com citrato.",
        "en": "These are more common in other contexts, not specific to citrate anticoagulation.",
        "es": "Estas alteraciones son más comunes en otros contextos, no son específicas del citrato."
      }
    },
    {
      "text": {
        "pt": "Hipofosfatemia severa e hiponatremia dilucional.",
        "en": "Severe hypophosphatemia and dilutional hyponatremia.",
        "es": "Hipofosfatemia severa e hiponatremia dilucional."
      },
      "explanation": {
        "pt": "Embora possíveis durante CRRT, essas alterações não estão diretamente relacionadas ao citrato.",
        "en": "Although possible during CRRT, these are not directly related to citrate.",
        "es": "Aunque posibles durante la CRRT, no están directamente relacionadas al citrato."
      }
    },
    {
      "text": {
        "pt": "Hipocalcemia, alcalose metabólica e toxicidade por citrato.",
        "en": "Hypocalcemia, metabolic alkalosis, and citrate toxicity.",
        "es": "Hipocalcemia, alcalosis metabólica y toxicidad por citrato."
      },
      "explanation": {
        "pt": "Essas são as complicações clássicas do uso de citrato, especialmente em pacientes com falência hepática ou baixa depuração. (KDIGO 2012)",
        "en": "These are the classic complications of citrate use, especially in hepatic failure or low clearance. (KDIGO 2012)",
        "es": "Estas son las complicaciones clásicas del citrato, especialmente en fallo hepático o depuración reducida. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Trombocitose, acidose láctica e hemólise.",
        "en": "Thrombocytosis, lactic acidosis, and hemolysis.",
        "es": "Trombocitosis, acidosis láctica y hemólisis."
      },
      "explanation": {
        "pt": "Essas condições não têm relação direta com o uso de citrato em TRS contínua.",
        "en": "These conditions are not directly linked to citrate use in continuous dialysis.",
        "es": "Estas condiciones no se relacionan directamente con el uso de citrato en TRS continua."
      }
    }
  ]
},
{
  "id": 827,
  "code": "dialysis-q827",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "scuf", "prescription", "fluid removal"],
  "level": "easy",
  "correct": 1,
  "question": {
    "pt": "Qual é a principal característica da SCUF (ultrafiltração contínua lenta) em relação à sua prescrição?",
    "en": "What is the main characteristic of SCUF (slow continuous ultrafiltration) regarding its prescription?",
    "es": "¿Cuál es la principal característica de la SCUF (ultrafiltración continua lenta) en cuanto a su prescripción?"
  },
  "options": [
    {
      "text": {
        "pt": "Uso de alto fluxo de dialisato para correção de ureia e eletrólitos.",
        "en": "Use of high dialysate flow for urea and electrolyte correction.",
        "es": "Uso de alto flujo de dializado para corregir urea y electrolitos."
      },
      "explanation": {
        "pt": "SCUF não utiliza dialisato. Seu objetivo é apenas a remoção de volume.",
        "en": "SCUF does not use dialysate. Its purpose is only volume removal.",
        "es": "La SCUF no utiliza dializado. Su objetivo es solo la remoción de volumen."
      }
    },
    {
      "text": {
        "pt": "Não utiliza dialisato nem reposição, focando exclusivamente na remoção de volume.",
        "en": "Does not use dialysate or replacement, focusing solely on fluid removal.",
        "es": "No utiliza dializado ni reposición, enfocado exclusivamente en la eliminación de líquidos."
      },
      "explanation": {
        "pt": "Essa é a definição da SCUF: uma técnica que remove lentamente líquidos por ultrafiltração, sem dialisato. (KDIGO 2012)",
        "en": "This is the definition of SCUF: a technique for slow fluid removal via ultrafiltration, without dialysate. (KDIGO 2012)",
        "es": "Esta es la definición de la SCUF: una técnica para eliminar líquidos lentamente por ultrafiltración, sin dializado. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "É usada para remoção rápida de toxinas urêmicas.",
        "en": "Used for rapid removal of uremic toxins.",
        "es": "Se usa para eliminar rápidamente toxinas urémicas."
      },
      "explanation": {
        "pt": "SCUF não é eficaz para depurar solutos como ureia ou creatinina.",
        "en": "SCUF is not effective for solute clearance like urea or creatinine.",
        "es": "La SCUF no es eficaz para depurar solutos como la urea o creatinina."
      }
    },
    {
      "text": {
        "pt": "Utiliza dialisato e solução de reposição simultaneamente.",
        "en": "Uses dialysate and replacement fluid simultaneously.",
        "es": "Utiliza dializado y solución de reposición simultáneamente."
      },
      "explanation": {
        "pt": "Isso descreve técnicas como CVVHDF, não SCUF.",
        "en": "That describes techniques like CVVHDF, not SCUF.",
        "es": "Eso describe técnicas como CVVHDF, no SCUF."
      }
    },
    {
      "text": {
        "pt": "Requer anticoagulação sistêmica intensa com heparina.",
        "en": "Requires intense systemic anticoagulation with heparin.",
        "es": "Requiere anticoagulación sistémica intensa con heparina."
      },
      "explanation": {
        "pt": "A anticoagulação na SCUF pode ser mínima ou regional, dado o baixo fluxo e risco reduzido de coagulação.",
        "en": "Anticoagulation in SCUF may be minimal or regional, due to low flow and reduced clotting risk.",
        "es": "La anticoagulación en SCUF puede ser mínima o regional por el bajo flujo y menor riesgo de coagulación."
      }
    }
  ]
},
{
  "id": 828,
  "code": "dialysis-q828",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "scuf", "prescription", "ultrafiltration"],
  "level": "easy",
  "correct": 0,
  "question": {
    "pt": "Durante a prescrição de SCUF (ultrafiltração contínua lenta), qual das taxas de ultrafiltração abaixo é geralmente considerada segura em pacientes críticos?",
    "en": "During SCUF (slow continuous ultrafiltration) prescription, which of the following ultrafiltration rates is generally considered safe in critically ill patients?",
    "es": "Durante la prescripción de SCUF (ultrafiltración continua lenta), ¿cuál de las siguientes tasas de ultrafiltración se considera generalmente segura en pacientes críticos?"
  },
  "options": [
    {
      "text": {
        "pt": "100–250 mL/h",
        "en": "100–250 mL/h",
        "es": "100–250 mL/h"
      },
      "explanation": {
        "pt": "Essa faixa é considerada segura para remoção gradual de volume em pacientes instáveis, minimizando risco de hipotensão. (KDIGO 2012)",
        "en": "This range is considered safe for gradual fluid removal in unstable patients, minimizing hypotension risk. (KDIGO 2012)",
        "es": "Este rango se considera seguro para eliminación gradual de volumen en pacientes inestables, minimizando el riesgo de hipotensión. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "500–700 mL/h",
        "en": "500–700 mL/h",
        "es": "500–700 mL/h"
      },
      "explanation": {
        "pt": "Taxas acima de 500 mL/h aumentam o risco de instabilidade hemodinâmica e devem ser usadas com cautela.",
        "en": "Rates above 500 mL/h increase hemodynamic instability risk and should be used cautiously.",
        "es": "Tasas superiores a 500 mL/h aumentan el riesgo de inestabilidad hemodinámica y deben usarse con precaución."
      }
    },
    {
      "text": {
        "pt": "750–1000 mL/h",
        "en": "750–1000 mL/h",
        "es": "750–1000 mL/h"
      },
      "explanation": {
        "pt": "Valores altos como esses são usados em hemodiálise intermitente ou SLED, não na SCUF.",
        "en": "High values like these are typical of intermittent dialysis or SLED, not SCUF.",
        "es": "Valores altos como estos son típicos de diálisis intermitente o SLED, no SCUF."
      }
    },
    {
      "text": {
        "pt": "1–2 L/h",
        "en": "1–2 L/h",
        "es": "1–2 L/h"
      },
      "explanation": {
        "pt": "Ultrafiltração tão rápida pode causar colapso circulatório em pacientes críticos e não é usada em SCUF.",
        "en": "Such rapid ultrafiltration can cause circulatory collapse in critically ill patients and is not used in SCUF.",
        "es": "Una ultrafiltración tan rápida puede causar colapso circulatorio en pacientes críticos y no se usa en SCUF."
      }
    },
    {
      "text": {
        "pt": "Apenas 25 mL/h são suficientes em qualquer cenário.",
        "en": "Only 25 mL/h is sufficient in any scenario.",
        "es": "Solo 25 mL/h son suficientes en cualquier escenario."
      },
      "explanation": {
        "pt": "Taxas tão baixas geralmente não são eficazes para controle clínico da sobrecarga de volume.",
        "en": "Such low rates are generally ineffective for managing fluid overload clinically.",
        "es": "Tasas tan bajas no suelen ser eficaces para manejar la sobrecarga de líquidos clínicamente."
      }
    }
  ]
},
{
  "id": 829,
  "code": "dialysis-q829",
  "areas": ["nephro", "medicine"],
  "topics": ["rrt", "peritoneal dialysis", "prescription", "volume"],
  "level": "easy",
  "correct": 3,
  "question": {
    "pt": "Na prescrição de diálise peritoneal em adultos, qual é o volume mais frequentemente utilizado por troca, especialmente em pacientes sem alterações abdominais?",
    "en": "In adult peritoneal dialysis prescriptions, what is the most commonly used fill volume per exchange, particularly in patients without abdominal abnormalities?",
    "es": "En la prescripción de diálisis peritoneal para adultos, ¿cuál es el volumen más común por intercambio, especialmente en pacientes sin alteraciones abdominales?"
  },
  "options": [
    {
      "text": {
        "pt": "500 mL",
        "en": "500 mL",
        "es": "500 mL"
      },
      "explanation": {
        "pt": "Volume muito baixo, geralmente reservado a pacientes pediátricos ou com risco de vazamento.",
        "en": "Very low volume, usually for pediatric patients or those at risk of leakage.",
        "es": "Volumen muy bajo, generalmente para pacientes pediátricos o con riesgo de fuga."
      }
    },
    {
      "text": {
        "pt": "1.0 litro",
        "en": "1.0 liter",
        "es": "1.0 litro"
      },
      "explanation": {
        "pt": "Embora possível, é menos eficiente em adultos em comparação com volumes maiores.",
        "en": "Although possible, it's less efficient in adults compared to larger volumes.",
        "es": "Aunque posible, es menos eficiente en adultos en comparación con volúmenes mayores."
      }
    },
    {
      "text": {
        "pt": "2.5 litros",
        "en": "2.5 liters",
        "es": "2.5 litros"
      },
      "explanation": {
        "pt": "Volume elevado que pode causar desconforto abdominal e não é usado rotineiramente.",
        "en": "High volume that may cause abdominal discomfort and is not routinely used.",
        "es": "Volumen elevado que puede causar malestar abdominal y no se usa de forma rutinaria."
      }
    },
    {
      "text": {
        "pt": "2.0 litros",
        "en": "2.0 liters",
        "es": "2.0 litros"
      },
      "explanation": {
        "pt": "Volume padrão por troca em adultos estáveis, promovendo bom equilíbrio entre depuração e conforto. (ISPD 2020)",
        "en": "Standard fill volume per exchange in stable adults, balancing clearance and comfort. (ISPD 2020)",
        "es": "Volumen estándar por intercambio en adultos estables, con buen equilibrio entre depuración y comodidad. (ISPD 2020)"
      }
    },
    {
      "text": {
        "pt": "3.0 litros",
        "en": "3.0 liters",
        "es": "3.0 litros"
      },
      "explanation": {
        "pt": "Usado em situações específicas, como pacientes altos com maior cavidade peritoneal, mas não como padrão.",
        "en": "Used in specific situations, such as tall patients with larger peritoneal cavities, but not as standard.",
        "es": "Utilizado en situaciones específicas, como pacientes altos con cavidad peritoneal grande, pero no como estándar."
      }
    }
  ]
},
{
  "id": 830,
  "code": "dialysis-q830",
  "areas": ["nephro", "medicine"],
  "topics": ["rrt", "peritoneal dialysis", "prescription", "frequency"],
  "level": "easy",
  "correct": 4,
  "question": {
    "pt": "Durante a prescrição de diálise peritoneal aguda em adultos, qual é o número usual de trocas por dia para garantir adequação dialítica?",
    "en": "In acute peritoneal dialysis prescriptions for adults, what is the usual number of daily exchanges to ensure adequate dialysis?",
    "es": "En la prescripción de diálisis peritoneal aguda para adultos, ¿cuál es el número habitual de intercambios diarios para garantizar una diálisis adecuada?"
  },
  "options": [
    {
      "text": {
        "pt": "1 a 2 trocas por dia",
        "en": "1 to 2 exchanges per day",
        "es": "1 a 2 intercambios por día"
      },
      "explanation": {
        "pt": "Muito abaixo do necessário para remover solutos e líquidos em insuficiência renal aguda.",
        "en": "Far below what is needed to remove solutes and fluids in acute kidney injury.",
        "es": "Muy por debajo de lo necesario para eliminar solutos y líquidos en lesión renal aguda."
      }
    },
    {
      "text": {
        "pt": "3 a 4 trocas por dia",
        "en": "3 to 4 exchanges per day",
        "es": "3 a 4 intercambios por día"
      },
      "explanation": {
        "pt": "Usado em pacientes crônicos estáveis, mas geralmente insuficiente na fase aguda.",
        "en": "Used in stable chronic patients, but generally insufficient in acute settings.",
        "es": "Utilizado en pacientes crónicos estables, pero generalmente insuficiente en situaciones agudas."
      }
    },
    {
      "text": {
        "pt": "5 a 6 trocas por dia",
        "en": "5 to 6 exchanges per day",
        "es": "5 a 6 intercambios por día"
      },
      "explanation": {
        "pt": "Pode ser considerado em protocolos intermediários, mas não garante adequação plena.",
        "en": "May be considered in intermediate protocols but does not guarantee full adequacy.",
        "es": "Puede considerarse en protocolos intermedios, pero no garantiza adecuación total."
      }
    },
    {
      "text": {
        "pt": "8 a 10 trocas por dia",
        "en": "8 to 10 exchanges per day",
        "es": "8 a 10 intercambios por día"
      },
      "explanation": {
        "pt": "É o regime habitual para pacientes com IRA, especialmente quando se busca clearance eficiente de solutos e remoção hídrica. (ISPD 2020)",
        "en": "This is the usual regimen for AKI patients, aiming for efficient solute clearance and fluid removal. (ISPD 2020)",
        "es": "Es el régimen habitual para pacientes con LRA, buscando depuración eficaz de solutos y eliminación de líquidos. (ISPD 2020)"
      }
    },
    {
      "text": {
        "pt": "15 a 18 trocas por dia",
        "en": "15 to 18 exchanges per day",
        "es": "15 a 18 intercambios por día"
      },
      "explanation": {
        "pt": "Frequência muito elevada, raramente necessária, exceto em situações extremas.",
        "en": "Very high frequency, rarely required except in extreme situations.",
        "es": "Frecuencia muy elevada, rara vez necesaria, excepto en situaciones extremas."
      }
    }
  ]
},
{
  "id": 831,
  "code": "dialysis-q831",
  "areas": ["nephro", "nephro+icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "dose", "sepsis", "individualization"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Paciente de 64 anos, com choque séptico por pneumonia, encontra-se em ventilação mecânica, com catabolismo elevado, hiperlactatemia persistente e lesão renal aguda KDIGO 3. Foi iniciado CRRT por sobrecarga hídrica e oligúria refratária. Qual estratégia de dose dialítica é mais adequada nesta fase inicial?",
    "en": "A 64-year-old patient with septic shock from pneumonia is on mechanical ventilation, with high catabolic rate, persistent hyperlactatemia, and KDIGO stage 3 AKI. CRRT was started due to fluid overload and refractory oliguria. What dialysis dose strategy is most appropriate at this early stage?",
    "es": "Paciente de 64 años con shock séptico por neumonía, en ventilación mecánica, con alto catabolismo, hiperlactatemia persistente y LRA estadio 3 KDIGO. Se inició CRRT por sobrecarga de líquidos y oliguria refractaria. ¿Qué estrategia de dosis dialítica es más adecuada en esta fase inicial?"
  },
  "options": [
    {
      "text": {
        "pt": "Prescrever dose de 30–35 mL/kg/h em CRRT para otimizar remoção de solutos e ácido lático.",
        "en": "Prescribe 30–35 mL/kg/h CRRT dose to optimize solute and lactate clearance.",
        "es": "Prescribir dosis de 30–35 mL/kg/h en CRRT para optimizar depuración de solutos y lactato."
      },
      "explanation": {
        "pt": "Em pacientes hipercatabólicos com sepse, doses maiores que o mínimo recomendado (20–25 mL/kg/h) podem ser indicadas para maior clearance, especialmente no início. (Bellomo R et al., Intensive Care Med 2015)",
        "en": "In hypercatabolic septic patients, doses above the minimum (20–25 mL/kg/h) may be warranted for higher clearance, especially early. (Bellomo R et al., Intensive Care Med 2015)",
        "es": "En pacientes sépticos hipercatabólicos, dosis superiores al mínimo (20–25 mL/kg/h) pueden estar indicadas para mayor depuración. (Bellomo R et al., Intensive Care Med 2015)"
      }
    },
    {
      "text": {
        "pt": "Utilizar dose padrão de 15 mL/kg/h, pois a literatura não mostra benefício em doses maiores.",
        "en": "Use standard 15 mL/kg/h dose, as literature shows no benefit in higher doses.",
        "es": "Usar dosis estándar de 15 mL/kg/h, ya que no hay evidencia de beneficio en dosis mayores."
      },
      "explanation": {
        "pt": "Essa dose está abaixo do recomendado pelas diretrizes (mínimo de 20 mL/kg/h) e pode resultar em depuração inadequada em catabolismo elevado.",
        "en": "This dose is below guideline recommendations (minimum 20 mL/kg/h) and may lead to inadequate clearance in high catabolism.",
        "es": "Esta dosis está por debajo de lo recomendado (mínimo 20 mL/kg/h) y puede resultar en depuración insuficiente."
      }
    },
    {
      "text": {
        "pt": "Evitar CRRT neste caso e optar por hemodiálise intermitente diária de alta eficiência.",
        "en": "Avoid CRRT and choose daily high-efficiency intermittent hemodialysis.",
        "es": "Evitar CRRT y optar por hemodiálisis intermitente diaria de alta eficiencia."
      },
      "explanation": {
        "pt": "Em instabilidade hemodinâmica grave, como no choque séptico, CRRT é preferido à hemodiálise intermitente. (KDIGO 2012)",
        "en": "In severe hemodynamic instability, as in septic shock, CRRT is preferred over intermittent dialysis. (KDIGO 2012)",
        "es": "En inestabilidad hemodinámica severa, como en shock séptico, se prefiere la CRRT. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Reduzir a dose inicial para 10 mL/kg/h para evitar perda proteica excessiva.",
        "en": "Reduce initial dose to 10 mL/kg/h to avoid excessive protein loss.",
        "es": "Reducir la dosis inicial a 10 mL/kg/h para evitar pérdida excesiva de proteínas."
      },
      "explanation": {
        "pt": "Doses muito baixas comprometem a depuração de toxinas e não são indicadas, mesmo com preocupações nutricionais.",
        "en": "Very low doses impair toxin clearance and are not recommended, even with nutritional concerns.",
        "es": "Dosis muy bajas comprometen la depuración de toxinas y no se recomiendan, incluso con preocupaciones nutricionales."
      }
    },
    {
      "text": {
        "pt": "Interromper CRRT se não houver sinais de uremia clássica nas primeiras 24h.",
        "en": "Discontinue CRRT if classic uremic signs are absent in the first 24h.",
        "es": "Suspender la CRRT si no hay signos urémicos clásicos en las primeras 24h."
      },
      "explanation": {
        "pt": "A presença de sobrecarga hídrica e hiperlactatemia já justifica CRRT, mesmo na ausência de sintomas urêmicos.",
        "en": "Fluid overload and hyperlactatemia already justify CRRT, even without uremic symptoms.",
        "es": "La sobrecarga hídrica y la hiperlactatemia ya justifican CRRT, incluso sin síntomas urémicos."
      }
    }
  ]
},
{
  "id": 832,
  "code": "dialysis-q832",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "neurocritical care", "osmolarity", "intracranial hypertension", "crrt"],
  "level": "hard",
  "correct": 4,
  "question": {
    "pt": "Paciente de 58 anos com hemorragia subaracnoide complicada por hipertensão intracraniana encontra-se sob sedação, osmoterapia e ventilação mecânica. Evolui com LRA KDIGO 3 e necessidade de início de TRS. Qual abordagem abaixo é mais adequada para evitar piora da HIC durante o início da terapia dialítica?",
    "en": "A 58-year-old patient with subarachnoid hemorrhage complicated by intracranial hypertension is sedated, under osmotherapy and mechanical ventilation. The patient develops KDIGO stage 3 AKI and requires initiation of RRT. What is the most appropriate approach to avoid worsening ICP during dialysis initiation?",
    "es": "Paciente de 58 años con hemorragia subaracnoidea complicada por hipertensión intracraneal se encuentra sedado, en osmoterapia y ventilación mecánica. Desarrolla LRA KDIGO 3 y requiere iniciar TRS. ¿Cuál es el enfoque más adecuado para evitar empeoramiento de la PIC al iniciar la terapia dialítica?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar hemodiálise intermitente com fluxo rápido para remover toxinas e normalizar osmolaridade.",
        "en": "Start rapid-flow intermittent hemodialysis to remove toxins and normalize osmolarity.",
        "es": "Iniciar hemodiálisis intermitente de flujo rápido para eliminar toxinas y normalizar la osmolaridad."
      },
      "explanation": {
        "pt": "Fluxos rápidos com redução abrupta da osmolaridade podem precipitar crise de hipertensão intracraniana (síndrome de desequilíbrio osmótico).",
        "en": "Rapid flows with abrupt osmolarity drop may precipitate intracranial hypertension (dialysis disequilibrium syndrome).",
        "es": "Flujos rápidos con caída abrupta de la osmolaridad pueden precipitar hipertensión intracraneal (síndrome de desequilibrio dialítico)."
      }
    },
    {
      "text": {
        "pt": "Optar por diálise peritoneal para evitar alterações rápidas de pressão intracraniana.",
        "en": "Choose peritoneal dialysis to avoid rapid intracranial pressure changes.",
        "es": "Elegir diálisis peritoneal para evitar cambios rápidos en la presión intracraneal."
      },
      "explanation": {
        "pt": "A diálise peritoneal não é eficaz em casos agudos e críticos com necessidade urgente de controle volêmico e depurativo.",
        "en": "Peritoneal dialysis is not effective in acute, critically ill patients requiring urgent volume and solute control.",
        "es": "La diálisis peritoneal no es eficaz en pacientes agudos críticos que requieren control urgente de volumen y solutos."
      }
    },
    {
      "text": {
        "pt": "Administrar solução salina hipertônica contínua junto ao dialisato para compensar gradiente osmótico.",
        "en": "Administer continuous hypertonic saline along with dialysate to compensate osmotic gradient.",
        "es": "Administrar solución salina hipertónica continua junto al dializado para compensar el gradiente osmótico."
      },
      "explanation": {
        "pt": "Não é prática comum combinar solução hipertônica diretamente ao dialisato, e há risco de sobrecarga de sódio.",
        "en": "Not standard to add hypertonic saline directly to dialysate; may cause sodium overload.",
        "es": "No es común agregar solución hipertónica directamente al dializado; puede causar sobrecarga de sodio."
      }
    },
    {
      "text": {
        "pt": "Iniciar SLED (diálise estendida) com Qb e Qd baixos, com ajuste gradual da osmolaridade.",
        "en": "Start SLED (slow extended dialysis) with low Qb and Qd, gradually adjusting osmolarity.",
        "es": "Iniciar SLED (diálisis extendida) con Qb y Qd bajos, ajustando gradualmente la osmolaridad."
      },
      "explanation": {
        "pt": "SLED pode ser considerada, mas nem sempre está disponível e exige modulação precisa do dialisato. CRRT é geralmente preferida.",
        "en": "SLED can be considered, but availability and dialysate modulation are limiting. CRRT is generally preferred.",
        "es": "SLED puede considerarse, pero su disponibilidad y la modulación del dializado son limitantes. CRRT es preferible."
      }
    },
    {
      "text": {
        "pt": "Utilizar CRRT com dialisato hipertônico ou ajuste osmolar cuidadoso, iniciando com baixas taxas de ultrafiltração.",
        "en": "Use CRRT with hypertonic dialysate or careful osmolar adjustment, starting with low ultrafiltration rates.",
        "es": "Usar CRRT con dializado hipertónico o ajuste osmolar cuidadoso, comenzando con tasas bajas de ultrafiltración."
      },
      "explanation": {
        "pt": "A CRRT permite controle mais preciso de osmolaridade e taxa de ultrafiltração, sendo a modalidade de escolha em pacientes com HIC. (Hoffmann J et al., Neurocrit Care 2020)",
        "en": "CRRT allows precise control of osmolarity and ultrafiltration rate, making it the preferred modality in patients with raised ICP. (Hoffmann J et al., Neurocrit Care 2020)",
        "es": "La CRRT permite un control preciso de la osmolaridad y la ultrafiltración, siendo la modalidad preferida en pacientes con PIC elevada. (Hoffmann J et al., Neurocrit Care 2020)"
      }
    }
  ]
},
{
  "id": 832,
  "code": "dialysis-q832",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "neurocritical care", "osmolarity", "intracranial hypertension", "crrt"],
  "level": "hard",
  "correct": 4,
  "question": {
    "pt": "Paciente de 58 anos com hemorragia subaracnoide complicada por hipertensão intracraniana encontra-se sob sedação, osmoterapia e ventilação mecânica. Evolui com LRA KDIGO 3 e necessidade de início de TRS. Qual abordagem abaixo é mais adequada para evitar piora da HIC durante o início da terapia dialítica?",
    "en": "A 58-year-old patient with subarachnoid hemorrhage complicated by intracranial hypertension is sedated, under osmotherapy and mechanical ventilation. The patient develops KDIGO stage 3 AKI and requires initiation of RRT. What is the most appropriate approach to avoid worsening ICP during dialysis initiation?",
    "es": "Paciente de 58 años con hemorragia subaracnoidea complicada por hipertensión intracraneal se encuentra sedado, en osmoterapia y ventilación mecánica. Desarrolla LRA KDIGO 3 y requiere iniciar TRS. ¿Cuál es el enfoque más adecuado para evitar empeoramiento de la PIC al iniciar la terapia dialítica?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar hemodiálise intermitente com fluxo rápido para remover toxinas e normalizar osmolaridade.",
        "en": "Start rapid-flow intermittent hemodialysis to remove toxins and normalize osmolarity.",
        "es": "Iniciar hemodiálisis intermitente de flujo rápido para eliminar toxinas y normalizar la osmolaridad."
      },
      "explanation": {
        "pt": "Fluxos rápidos com redução abrupta da osmolaridade podem precipitar crise de hipertensão intracraniana (síndrome de desequilíbrio osmótico).",
        "en": "Rapid flows with abrupt osmolarity drop may precipitate intracranial hypertension (dialysis disequilibrium syndrome).",
        "es": "Flujos rápidos con caída abrupta de la osmolaridad pueden precipitar hipertensión intracraneal (síndrome de desequilibrio dialítico)."
      }
    },
    {
      "text": {
        "pt": "Optar por diálise peritoneal para evitar alterações rápidas de pressão intracraniana.",
        "en": "Choose peritoneal dialysis to avoid rapid intracranial pressure changes.",
        "es": "Elegir diálisis peritoneal para evitar cambios rápidos en la presión intracraneal."
      },
      "explanation": {
        "pt": "A diálise peritoneal não é eficaz em casos agudos e críticos com necessidade urgente de controle volêmico e depurativo.",
        "en": "Peritoneal dialysis is not effective in acute, critically ill patients requiring urgent volume and solute control.",
        "es": "La diálisis peritoneal no es eficaz en pacientes agudos críticos que requieren control urgente de volumen y solutos."
      }
    },
    {
      "text": {
        "pt": "Administrar solução salina hipertônica contínua junto ao dialisato para compensar gradiente osmótico.",
        "en": "Administer continuous hypertonic saline along with dialysate to compensate osmotic gradient.",
        "es": "Administrar solución salina hipertónica continua junto al dializado para compensar el gradiente osmótico."
      },
      "explanation": {
        "pt": "Não é prática comum combinar solução hipertônica diretamente ao dialisato, e há risco de sobrecarga de sódio.",
        "en": "Not standard to add hypertonic saline directly to dialysate; may cause sodium overload.",
        "es": "No es común agregar solución hipertónica directamente al dializado; puede causar sobrecarga de sodio."
      }
    },
    {
      "text": {
        "pt": "Iniciar SLED (diálise estendida) com Qb e Qd baixos, com ajuste gradual da osmolaridade.",
        "en": "Start SLED (slow extended dialysis) with low Qb and Qd, gradually adjusting osmolarity.",
        "es": "Iniciar SLED (diálisis extendida) con Qb y Qd bajos, ajustando gradualmente la osmolaridad."
      },
      "explanation": {
        "pt": "SLED pode ser considerada, mas nem sempre está disponível e exige modulação precisa do dialisato. CRRT é geralmente preferida.",
        "en": "SLED can be considered, but availability and dialysate modulation are limiting. CRRT is generally preferred.",
        "es": "SLED puede considerarse, pero su disponibilidad y la modulación del dializado son limitantes. CRRT es preferible."
      }
    },
    {
      "text": {
        "pt": "Utilizar CRRT com dialisato hipertônico ou ajuste osmolar cuidadoso, iniciando com baixas taxas de ultrafiltração.",
        "en": "Use CRRT with hypertonic dialysate or careful osmolar adjustment, starting with low ultrafiltration rates.",
        "es": "Usar CRRT con dializado hipertónico o ajuste osmolar cuidadoso, comenzando con tasas bajas de ultrafiltración."
      },
      "explanation": {
        "pt": "A CRRT permite controle mais preciso de osmolaridade e taxa de ultrafiltração, sendo a modalidade de escolha em pacientes com HIC. (Hoffmann J et al., Neurocrit Care 2020)",
        "en": "CRRT allows precise control of osmolarity and ultrafiltration rate, making it the preferred modality in patients with raised ICP. (Hoffmann J et al., Neurocrit Care 2020)",
        "es": "La CRRT permite un control preciso de la osmolaridad y la ultrafiltración, siendo la modalidad preferida en pacientes con PIC elevada. (Hoffmann J et al., Neurocrit Care 2020)"
      }
    }
  ]
},
{
  "id": 833,
  "code": "dialysis-q833",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "rhabdomyolysis", "clearance", "crrt", "prescription"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Homem de 42 anos é admitido após politrauma, apresentando rabdomiólise grave (CPK > 120.000 U/L, mioglobina urinária positiva) e LRA KDIGO 3. Evolui com hipercalemia, acidose e sobrecarga hídrica. Qual prescrição de TRS é mais indicada para favorecer remoção de mioglobina e estabilização clínica?",
    "en": "A 42-year-old man is admitted after polytrauma, presenting with severe rhabdomyolysis (CPK > 120,000 U/L, positive urinary myoglobin) and KDIGO stage 3 AKI. He develops hyperkalemia, acidosis, and fluid overload. Which RRT prescription is best suited to enhance myoglobin removal and clinical stabilization?",
    "es": "Hombre de 42 años es admitido tras politraumatismo, con rabdomiólisis grave (CPK > 120.000 U/L, mioglobina urinaria positiva) y LRA estadio 3 KDIGO. Desarrolla hipercalemia, acidosis y sobrecarga hídrica. ¿Qué prescripción de TRS favorece mejor la eliminación de mioglobina y la estabilización clínica?"
  },
  "options": [
    {
      "text": {
        "pt": "Hemodiálise intermitente com baixo fluxo para prevenir instabilidade hemodinâmica.",
        "en": "Low-flow intermittent hemodialysis to prevent hemodynamic instability.",
        "es": "Hemodiálisis intermitente de bajo flujo para prevenir inestabilidad hemodinámica."
      },
      "explanation": {
        "pt": "Hemodiálise intermitente de baixo fluxo é pouco eficaz na remoção de moléculas médias como a mioglobina.",
        "en": "Low-flow intermittent dialysis is not effective for removing middle molecules like myoglobin.",
        "es": "La hemodiálisis de bajo flujo no es eficaz para eliminar moléculas medianas como la mioglobina."
      }
    },
    {
      "text": {
        "pt": "Diálise peritoneal com trocas frequentes e uso de solução hipertônica.",
        "en": "Peritoneal dialysis with frequent exchanges and hypertonic solution.",
        "es": "Diálisis peritoneal con intercambios frecuentes y solución hipertónica."
      },
      "explanation": {
        "pt": "A diálise peritoneal não remove de forma eficaz mioglobina devido à baixa permeabilidade da membrana peritoneal a essas moléculas.",
        "en": "Peritoneal dialysis is ineffective at removing myoglobin due to low peritoneal membrane permeability.",
        "es": "La diálisis peritoneal no elimina eficazmente la mioglobina debido a su baja permeabilidad a estas moléculas."
      }
    },
    {
      "text": {
        "pt": "CRRT com baixa dose (15 mL/kg/h) para evitar perda proteica excessiva.",
        "en": "CRRT at low dose (15 mL/kg/h) to avoid excessive protein loss.",
        "es": "CRRT con dosis baja (15 mL/kg/h) para evitar pérdida excesiva de proteínas."
      },
      "explanation": {
        "pt": "Dose baixa compromete a remoção efetiva de mioglobina e correção de distúrbios eletrolíticos.",
        "en": "Low dose impairs effective myoglobin removal and correction of electrolyte disturbances.",
        "es": "La dosis baja compromete la eliminación eficaz de mioglobina y la corrección de alteraciones electrolíticas."
      }
    },
    {
      "text": {
        "pt": "CRRT com alto fluxo e filtro de alto corte (high cut-off), com dose de 30–35 mL/kg/h.",
        "en": "High-flow CRRT using high cut-off filter at 30–35 mL/kg/h dose.",
        "es": "CRRT de alto flujo con filtro de corte alto (high cut-off), con dosis de 30–35 mL/kg/h."
      },
      "explanation": {
        "pt": "Mioglobina é uma molécula média (~17 kDa) que requer fluxo elevado e membranas de alto corte para remoção eficiente. (Honoré PM et al., Crit Care 2012)",
        "en": "Myoglobin is a middle molecule (~17 kDa) requiring high flow and high cut-off membranes for effective clearance. (Honoré PM et al., Crit Care 2012)",
        "es": "La mioglobina es una molécula mediana (~17 kDa) que requiere flujo alto y filtros de corte alto para su eliminación eficaz. (Honoré PM et al., Crit Care 2012)"
      }
    },
    {
      "text": {
        "pt": "SLED com Qb baixo e dialisato isotônico por 6 horas diárias.",
        "en": "SLED with low Qb and isotonic dialysate for 6 hours daily.",
        "es": "SLED con Qb bajo y dializado isotónico durante 6 horas diarias."
      },
      "explanation": {
        "pt": "Embora útil para controle gradual, essa estratégia é insuficiente para depuração de mioglobina em rabdomiólise grave.",
        "en": "While useful for gradual control, this strategy is insufficient for myoglobin clearance in severe rhabdomyolysis.",
        "es": "Aunque útil para control gradual, esta estrategia es insuficiente para eliminar mioglobina en rabdomiólisis grave."
      }
    }
  ]
},
{
  "id": 834,
  "code": "dialysis-q834",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "hepatorenal syndrome", "liver failure", "crrt", "anticoagulation"],
  "level": "hard",
  "correct": 2,
  "question": {
    "pt": "Paciente de 54 anos com cirrose hepática descompensada, ascite volumosa e encefalopatia é admitido por sepse urinária e evolui com instabilidade hemodinâmica e LRA KDIGO 3. Diante da suspeita de síndrome hepatorrenal tipo 1, é iniciada TRS. Qual das condutas abaixo é mais apropriada no manejo inicial?",
    "en": "A 54-year-old patient with decompensated cirrhosis, large-volume ascites, and encephalopathy is admitted with urinary sepsis and develops hemodynamic instability and KDIGO stage 3 AKI. Suspecting type 1 hepatorenal syndrome, RRT is initiated. Which of the following is the most appropriate initial management step?",
    "es": "Paciente de 54 años con cirrosis hepática descompensada, ascitis masiva y encefalopatía es admitido por sepsis urinaria y presenta inestabilidad hemodinámica y LRA estadio 3 KDIGO. Ante la sospecha de síndrome hepatorrenal tipo 1, se inicia TRS. ¿Cuál de las siguientes conductas es más apropiada en el manejo inicial?"
  },
  "options": [
    {
      "text": {
        "pt": "Iniciar hemodiálise intermitente com fluxo padrão e anticoagulação plena com heparina.",
        "en": "Start standard-flow intermittent hemodialysis with full-dose heparin anticoagulation.",
        "es": "Iniciar hemodiálisis intermitente de flujo estándar con anticoagulación plena con heparina."
      },
      "explanation": {
        "pt": "A anticoagulação plena com heparina é desaconselhada em pacientes com coagulopatia hepática e risco elevado de sangramento.",
        "en": "Full-dose heparin anticoagulation is not recommended in hepatic coagulopathy due to high bleeding risk.",
        "es": "La anticoagulación plena con heparina no se recomienda en pacientes con coagulopatía hepática por alto riesgo de sangrado."
      }
    },
    {
      "text": {
        "pt": "Iniciar CRRT com doses de 25–30 mL/kg/h, sem anticoagulação ou com citrato se disponível.",
        "en": "Start CRRT at 25–30 mL/kg/h, without anticoagulation or using citrate if available.",
        "es": "Iniciar CRRT a 25–30 mL/kg/h, sin anticoagulación o con citrato si está disponible."
      },
      "explanation": {
        "pt": "Em pacientes com risco hemorrágico elevado, o uso de CRRT sem anticoagulação ou com citrato regional é a melhor escolha, garantindo depuração contínua e segura. (KDIGO 2012; Cavallazzi R, Liver Int 2021)",
        "en": "In high bleeding risk patients, CRRT without anticoagulation or with regional citrate is safest while ensuring solute clearance. (KDIGO 2012; Cavallazzi R, Liver Int 2021)",
        "es": "En pacientes con alto riesgo de sangrado, CRRT sin anticoagulación o con citrato regional es más segura, con depuración continua. (KDIGO 2012; Cavallazzi R, Liver Int 2021)"
      }
    },
    {
      "text": {
        "pt": "Optar por TRS intermitente diária de curta duração com anticoagulação padrão.",
        "en": "Choose daily short-duration intermittent RRT with standard anticoagulation.",
        "es": "Optar por TRS intermitente diaria de corta duración con anticoagulación estándar."
      },
      "explanation": {
        "pt": "TRS intermitente pode causar instabilidade hemodinâmica em pacientes com disfunção hepática grave, além do risco aumentado de sangramento com anticoagulação padrão.",
        "en": "Intermittent RRT may cause hemodynamic instability in patients with severe liver dysfunction and standard anticoagulation increases bleeding risk.",
        "es": "La TRS intermitente puede causar inestabilidad hemodinámica en pacientes con disfunción hepática grave, además del riesgo de sangrado."
      }
    },
    {
      "text": {
        "pt": "Priorizar apenas expansão volêmica com albumina, evitando TRS nas primeiras 72h.",
        "en": "Prioritize only volume expansion with albumin, avoiding RRT in the first 72h.",
        "es": "Priorizar sólo la expansión con albúmina, evitando TRS en las primeras 72h."
      },
      "explanation": {
        "pt": "Embora a albumina seja parte essencial do tratamento da SHR, a necessidade de TRS já está indicada pela LRA KDIGO 3 e instabilidade hemodinâmica persistente.",
        "en": "Albumin is essential in HRS therapy, but KDIGO 3 AKI with persistent instability already indicates RRT initiation.",
        "es": "Aunque la albúmina es parte esencial del tratamiento del SHR, la LRA KDIGO 3 con inestabilidad persistente ya indica TRS."
      }
    },
    {
      "text": {
        "pt": "Utilizar anticoagulação com heparina de baixo peso molecular como alternativa mais segura.",
        "en": "Use low molecular weight heparin as a safer anticoagulation alternative.",
        "es": "Usar heparina de bajo peso molecular como alternativa de anticoagulación más segura."
      },
      "explanation": {
        "pt": "Mesmo com menor risco trombocitopênico, a heparina de baixo peso molecular ainda apresenta risco hemorrágico elevado em hepatopatas graves.",
        "en": "Even with lower HIT risk, LMWH still poses high bleeding risk in advanced liver disease.",
        "es": "Aunque con menor riesgo de trombocitopenia, la HBPM aún conlleva alto riesgo hemorrágico en hepatopatía avanzada."
      }
    }
  ]
},
{
  "id": 835,
  "code": "dialysis-q835",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "ecmo", "anticoagulation", "dose"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Paciente de 36 anos com miocardite fulminante está sob suporte com ECMO venoarterial (VA) e evolui com LRA KDIGO 3, hipercalemia e acidose metabólica. Indica-se início de CRRT. Qual das abordagens abaixo é a mais adequada para integração da TRS ao suporte com ECMO?",
    "en": "A 36-year-old patient with fulminant myocarditis is supported with venoarterial ECMO and develops KDIGO stage 3 AKI, hyperkalemia, and metabolic acidosis. CRRT is indicated. Which of the following approaches is most appropriate for integrating RRT into ECMO support?",
    "es": "Paciente de 36 años con miocarditis fulminante está en soporte con ECMO venoarterial (VA) y presenta LRA estadio 3 KDIGO, hipercalemia y acidosis metabólica. Se indica CRRT. ¿Cuál es el enfoque más adecuado para integrar la TRS al soporte con ECMO?"
  },
  "options": [
    {
      "text": {
        "pt": "Integrar a CRRT ao circuito de ECMO em linha pós-oxigenador, com controle preciso de pressões.",
        "en": "Integrate CRRT into the ECMO circuit post-oxygenator, with precise pressure control.",
        "es": "Integrar la CRRT al circuito de ECMO después del oxigenador, con control preciso de presiones."
      },
      "explanation": {
        "pt": "A integração da CRRT no circuito pós-oxigenador permite melhor controle de fluxo e segurança, evitando pressões negativas excessivas. Requer monitoramento rigoroso. (Ronco C et al., Intensive Care Med 2015)",
        "en": "Integrating CRRT post-oxygenator allows safer flow control and prevents excessive negative pressure. Requires strict monitoring. (Ronco C et al., Intensive Care Med 2015)",
        "es": "Integrar CRRT después del oxigenador permite mejor control del flujo y evita presiones negativas excesivas. Requiere monitoreo estricto. (Ronco C et al., Intensive Care Med 2015)"
      }
    },
    {
      "text": {
        "pt": "Usar CRRT com linha venosa independente fora do circuito de ECMO, para maior autonomia do sistema renal.",
        "en": "Use CRRT with an independent venous line outside the ECMO circuit for renal system autonomy.",
        "es": "Utilizar CRRT con línea venosa independiente fuera del circuito de ECMO para mayor autonomía del sistema renal."
      },
      "explanation": {
        "pt": "Linhas independentes podem dificultar acesso vascular adequado e criar riscos adicionais em pacientes já com suporte invasivo complexo.",
        "en": "Independent lines may limit vascular access and increase risk in patients under complex invasive support.",
        "es": "Las líneas independientes pueden limitar el acceso vascular y aumentar riesgos en pacientes con soporte invasivo complejo."
      }
    },
    {
      "text": {
        "pt": "Administrar diuréticos em altas doses antes de considerar TRS, mesmo com sinais de hipercalemia.",
        "en": "Administer high-dose diuretics before considering RRT, even with hyperkalemia signs.",
        "es": "Administrar diuréticos a altas dosis antes de considerar TRS, incluso con signos de hipercalemia."
      },
      "explanation": {
        "pt": "Diante de hipercalemia e LRA KDIGO 3, a espera com diuréticos é inapropriada e pode atrasar tratamento salvador.",
        "en": "With hyperkalemia and KDIGO 3 AKI, delaying with diuretics is inappropriate and may postpone life-saving therapy.",
        "es": "Con hipercalemia y LRA KDIGO 3, retrasar con diuréticos es inapropiado y puede demorar terapia salvadora."
      }
    },
    {
      "text": {
        "pt": "Iniciar CRRT com anticoagulação sistêmica intensa para evitar coágulos no oxigenador e no filtro.",
        "en": "Start CRRT with intense systemic anticoagulation to avoid clots in the oxygenator and filter.",
        "es": "Iniciar CRRT con anticoagulación sistémica intensa para evitar coágulos en el oxigenador y el filtro."
      },
      "explanation": {
        "pt": "A anticoagulação deve ser balanceada entre risco hemorrágico e eficácia. Doses intensas aumentam sangramento, especialmente com múltiplos acessos.",
        "en": "Anticoagulation should balance bleeding risk and efficacy. High doses increase hemorrhage, especially with multiple accesses.",
        "es": "La anticoagulación debe equilibrar riesgo de sangrado y eficacia. Dosis altas aumentan el sangrado, especialmente con múltiples accesos."
      }
    },
    {
      "text": {
        "pt": "Usar CRRT em modo SCUF para controle de eletrólitos e depuração de solutos.",
        "en": "Use CRRT in SCUF mode for electrolyte and solute clearance.",
        "es": "Usar CRRT en modo SCUF para control de electrolitos y depuración de solutos."
      },
      "explanation": {
        "pt": "SCUF é voltado para remoção de volume, não para depuração eletrolítica e de solutos, sendo inadequado em hipercalemia e acidose.",
        "en": "SCUF targets volume removal, not solute or electrolyte clearance, thus inadequate for hyperkalemia and acidosis.",
        "es": "SCUF se dirige a la remoción de volumen, no a la depuración de solutos o electrolitos, por lo tanto, es inadecuado."
      }
    }
  ]
},
{
  "id": 836,
  "code": "dialysis-q836",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "crrt", "metabolic alkalosis", "bicarbonate", "prescription"],
  "level": "hard",
  "correct": 4,
  "question": {
    "pt": "Paciente de 71 anos com sepse abdominal grave está em uso de CRRT contínua há 5 dias. Evolui com alcalose metabólica (pH 7,58; HCO₃⁻ 39 mEq/L), hipocalemia leve e hipocalcemia. Está estável hemodinamicamente. Qual é a melhor conduta para correção da alcalose neste contexto?",
    "en": "A 71-year-old patient with severe abdominal sepsis has been on continuous CRRT for 5 days. They develop metabolic alkalosis (pH 7.58; HCO₃⁻ 39 mEq/L), mild hypokalemia, and hypocalcemia. Hemodynamically stable. What is the best approach to correct alkalosis in this context?",
    "es": "Paciente de 71 años con sepsis abdominal grave lleva 5 días en CRRT continua. Desarrolla alcalosis metabólica (pH 7,58; HCO₃⁻ 39 mEq/L), hipocalemia leve e hipocalcemia. Hemodinámicamente estable. ¿Cuál es la mejor conducta para corregir la alcalosis en este contexto?"
  },
  "options": [
    {
      "text": {
        "pt": "Suspender temporariamente a CRRT e reavaliar após 24h.",
        "en": "Temporarily suspend CRRT and reassess after 24h.",
        "es": "Suspender temporalmente la CRRT y reevaluar en 24h."
      },
      "explanation": {
        "pt": "A suspensão pode piorar a depuração de toxinas e o balanço hídrico, além de não corrigir a alcalose de forma ativa.",
        "en": "Suspending CRRT may worsen solute clearance and fluid balance, without actively correcting alkalosis.",
        "es": "Suspender la CRRT puede empeorar la depuración de solutos y el equilibrio hídrico sin corregir activamente la alcalosis."
      }
    },
    {
      "text": {
        "pt": "Reduzir a dose de CRRT para 10 mL/kg/h e manter solução padrão.",
        "en": "Reduce CRRT dose to 10 mL/kg/h while maintaining standard solution.",
        "es": "Reducir la dosis de CRRT a 10 mL/kg/h manteniendo solución estándar."
      },
      "explanation": {
        "pt": "Reduzir o fluxo não corrige diretamente o distúrbio ácido-base e pode comprometer a eficácia dialítica.",
        "en": "Lowering the dose doesn't address acid-base imbalance and may reduce dialysis efficacy.",
        "es": "Reducir la dosis no corrige el trastorno ácido-base y puede comprometer la eficacia de la diálisis."
      }
    },
    {
      "text": {
        "pt": "Administrar ácido clorídrico EV em bomba lenta.",
        "en": "Administer intravenous hydrochloric acid via slow infusion.",
        "es": "Administrar ácido clorhídrico IV en infusión lenta."
      },
      "explanation": {
        "pt": "Reservado para casos extremos de alcalose refratária e com risco vital. Deve-se tentar primeiro ajustar a solução dialítica.",
        "en": "Reserved for extreme refractory alkalosis with life-threatening risk. Solution adjustment should be tried first.",
        "es": "Reservado para casos extremos de alcalosis refractaria y riesgo vital. Primero se debe ajustar la solución dialítica."
      }
    },
    {
      "text": {
        "pt": "Substituir o dialisato/bath com bicarbonato por solução com lactato ou fluido personalizado com menor alcalinidade.",
        "en": "Switch bicarbonate-based dialysate to lactate-based or customized low-alkalinity solution.",
        "es": "Cambiar dializado con bicarbonato por uno con lactato o solución personalizada de baja alcalinidad."
      },
      "explanation": {
        "pt": "A substituição da solução é a principal forma de corrigir alcalose em TRS contínua. Soluções com lactato ou balanceadas têm menor carga alcalina. (Bellomo R et al., Crit Care 2012)",
        "en": "Switching the dialysate is the main way to manage alkalosis during CRRT. Lactate or balanced solutions have lower alkalinity. (Bellomo R et al., Crit Care 2012)",
        "es": "Cambiar la solución es la principal estrategia para corregir alcalosis en CRRT. Soluciones con lactato o balanceadas tienen menor alcalinidad. (Bellomo R et al., Crit Care 2012)"
      }
    },
    {
      "text": {
        "pt": "Acrescentar furosemida IV para aumentar a excreção de bicarbonato.",
        "en": "Add IV furosemide to increase bicarbonate excretion.",
        "es": "Agregar furosemida IV para aumentar la excreción de bicarbonato."
      },
      "explanation": {
        "pt": "Diuréticos têm efeito limitado sobre a alcalose em anúricos ou pacientes com função renal mínima.",
        "en": "Diuretics have limited effect on alkalosis in anuric or minimally functioning kidneys.",
        "es": "Los diuréticos tienen efecto limitado sobre la alcalosis en pacientes anúricos o con función renal mínima."
      }
    }
  ]
},
{
  "id": 837,
  "code": "dialysis-q837",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "calcium", "phosphate", "electrolytes", "crrt"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Paciente de 63 anos com insuficiência renal aguda permanece em TRS contínua há 7 dias. Os exames mostram hipofosfatemia (1,1 mg/dL), hipocalcemia iônica (0,98 mmol/L) e fraqueza muscular progressiva. Qual das abordagens abaixo é mais adequada para manejo desses distúrbios?",
    "en": "A 63-year-old patient with acute kidney injury has been on continuous RRT for 7 days. Labs show hypophosphatemia (1.1 mg/dL), ionized hypocalcemia (0.98 mmol/L), and progressive muscle weakness. Which of the following approaches is most appropriate for managing these disturbances?",
    "es": "Paciente de 63 años con insuficiencia renal aguda lleva 7 días en TRS continua. Exámenes muestran hipofosfatemia (1,1 mg/dL), hipocalcemia iónica (0,98 mmol/L) y debilidad muscular progresiva. ¿Cuál de los siguientes enfoques es más adecuado para manejar estas alteraciones?"
  },
  "options": [
    {
      "text": {
        "pt": "Adicionar fosfato ao fluido de reposição e iniciar reposição EV de cálcio sob monitorização sérica.",
        "en": "Add phosphate to replacement fluid and initiate IV calcium supplementation under serum monitoring.",
        "es": "Agregar fosfato al líquido de reemplazo e iniciar suplemento IV de calcio con monitoreo sérico."
      },
      "explanation": {
        "pt": "A perda contínua de fósforo e cálcio na TRS contínua pode causar distúrbios graves. A correção exige reposição dirigida e, se possível, ajustes no banho. (Schetz M et al., Intensive Care Med 2021)",
        "en": "Ongoing CRRT leads to phosphate and calcium losses. Management requires directed supplementation and dialysate adjustment when feasible. (Schetz M et al., Intensive Care Med 2021)",
        "es": "La TRS continua produce pérdidas de fósforo y calcio. El manejo requiere suplementación dirigida y ajustes en el baño si es posible. (Schetz M et al., Intensive Care Med 2021)"
      }
    },
    {
      "text": {
        "pt": "Suspender temporariamente a TRS e observar correção espontânea dos eletrólitos.",
        "en": "Temporarily stop RRT and observe for spontaneous correction of electrolytes.",
        "es": "Suspender temporalmente la TRS y observar corrección espontánea de los electrolitos."
      },
      "explanation": {
        "pt": "Suspender a TRS em pacientes críticos pode agravar acúmulo de toxinas e instabilidade hídrica. A alcalose e distúrbios persistem se não corrigidos ativamente.",
        "en": "Stopping RRT in critically ill may worsen toxin buildup and fluid imbalance. Electrolyte issues persist without intervention.",
        "es": "Suspender la TRS en pacientes críticos puede empeorar el acúmulo de toxinas y el balance hídrico. Los trastornos persisten sin intervención."
      }
    },
    {
      "text": {
        "pt": "Usar solução padrão com alto bicarbonato para correção indireta do cálcio.",
        "en": "Use standard solution with high bicarbonate for indirect calcium correction.",
        "es": "Usar solución estándar con alto bicarbonato para corrección indirecta del calcio."
      },
      "explanation": {
        "pt": "Bicarbonato elevado pode agravar hipocalcemia iônica ao aumentar ligação com albumina. Não é apropriado como medida de correção.",
        "en": "High bicarbonate may worsen ionized hypocalcemia by increasing albumin binding. Not suitable for correction.",
        "es": "El bicarbonato alto puede agravar la hipocalcemia iónica aumentando su unión a albúmina. No es apropiado."
      }
    },
    {
      "text": {
        "pt": "Administrar cálcio EV sem correção do fósforo devido ao risco de precipitação.",
        "en": "Give IV calcium without phosphate correction to avoid precipitation risk.",
        "es": "Administrar calcio IV sin corregir fósforo por riesgo de precipitación."
      },
      "explanation": {
        "pt": "Embora haja risco teórico de precipitação, a reposição conjunta sob monitoramento é segura e necessária na hipofosfatemia grave.",
        "en": "Despite theoretical precipitation risk, co-replacement under monitoring is safe and necessary in severe hypophosphatemia.",
        "es": "Aunque hay riesgo teórico de precipitación, la reposición conjunta monitorizada es segura y necesaria."
      }
    },
    {
      "text": {
        "pt": "Trocar para solução com magnésio e potássio aumentados como estratégia primária.",
        "en": "Switch to solution with increased magnesium and potassium as primary strategy.",
        "es": "Cambiar a solución con magnesio y potasio aumentados como estrategia primaria."
      },
      "explanation": {
        "pt": "Magnesemia e potássio são relevantes, mas não corrigem a hipocalcemia ou hipofosfatemia diretamente. Correção dirigida é prioritária.",
        "en": "Magnesium and potassium are relevant but don’t directly address calcium or phosphate deficits. Direct correction is preferred.",
        "es": "El magnesio y potasio son relevantes pero no corrigen directamente los déficits de calcio o fósforo. La corrección dirigida es preferible."
      }
    }
  ]
},
{
  "id": 838,
  "code": "dialysis-q838",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "nutrition", "electrolytes", "micronutrients", "crrt"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Paciente em TRS contínua há 6 dias recebe nutrição parenteral total (NPT) devido à íleo paralítico. Evolui com hipomagnesemia, hipofosfatemia e hipocalemia progressivas, apesar de reposição diária. Qual estratégia a seguir é mais adequada para prevenir perdas contínuas desses eletrólitos pela TRS?",
    "en": "A patient on continuous RRT for 6 days is receiving total parenteral nutrition (TPN) due to paralytic ileus. They develop progressive hypomagnesemia, hypophosphatemia, and hypokalemia despite daily supplementation. Which of the following is the most appropriate strategy to prevent continued electrolyte losses via RRT?",
    "es": "Paciente en TRS continua por 6 días recibe nutrición parenteral total (NPT) por íleo paralítico. Desarrolla hipomagnesemia, hipofosfatemia e hipocalemia progresivas pese a suplementación diaria. ¿Cuál es la mejor estrategia para prevenir pérdidas continuas de estos electrolitos por la TRS?"
  },
  "options": [
    {
      "text": {
        "pt": "Ajustar a solução de diálise/reposição para incluir magnésio, fosfato e potássio em concentrações personalizadas.",
        "en": "Adjust dialysate/replacement solution to include magnesium, phosphate, and potassium in customized concentrations.",
        "es": "Ajustar la solución de diálisis/reemplazo para incluir magnesio, fósforo y potasio en concentraciones personalizadas."
      },
      "explanation": {
        "pt": "A principal forma de evitar perdas contínuas é modificar as soluções usadas na TRS para conter eletrólitos em concentrações adaptadas ao paciente. (Bellomo R et al., Crit Care 2012)",
        "en": "The main strategy to prevent ongoing losses is to adapt dialysate and replacement solutions to include patient-specific electrolyte concentrations. (Bellomo R et al., Crit Care 2012)",
        "es": "La estrategia principal para evitar pérdidas continuas es adaptar las soluciones con concentraciones electrolíticas específicas para el paciente. (Bellomo R et al., Crit Care 2012)"
      }
    },
    {
      "text": {
        "pt": "Interromper a NPT por 48h para evitar sobrecarga de solutos.",
        "en": "Suspend TPN for 48h to avoid solute overload.",
        "es": "Suspender NPT por 48h para evitar sobrecarga de solutos."
      },
      "explanation": {
        "pt": "A suspensão da NPT compromete o suporte nutricional em pacientes críticos e não corrige diretamente as perdas dialíticas.",
        "en": "Suspending TPN may worsen nutritional status and doesn’t address the dialytic losses directly.",
        "es": "Suspender la NPT puede comprometer el soporte nutricional y no corrige las pérdidas por TRS."
      }
    },
    {
      "text": {
        "pt": "Aumentar a dose de CRRT para reduzir o tempo de exposição aos eletrólitos perdidos.",
        "en": "Increase CRRT dose to reduce exposure time to lost electrolytes.",
        "es": "Aumentar la dosis de CRRT para reducir el tiempo de exposición a los electrolitos perdidos."
      },
      "explanation": {
        "pt": "Doses maiores aumentam as perdas de eletrólitos e não reduzem a exposição — pioram o problema em vez de resolvê-lo.",
        "en": "Higher doses increase electrolyte losses rather than reduce them — worsening the issue.",
        "es": "Dosis mayores aumentan la pérdida de electrolitos en vez de reducirla — empeorando el problema."
      }
    },
    {
      "text": {
        "pt": "Trocar para TRS intermitente para limitar perdas contínuas.",
        "en": "Switch to intermittent RRT to limit continuous losses.",
        "es": "Cambiar a TRS intermitente para limitar las pérdidas continuas."
      },
      "explanation": {
        "pt": "A TRS contínua é preferível em instabilidade hemodinâmica. A mudança para forma intermitente pode prejudicar o equilíbrio volêmico e soluto.",
        "en": "Continuous RRT is preferable in hemodynamic instability. Switching may impair fluid and solute balance.",
        "es": "La TRS continua es preferible en inestabilidad hemodinámica. Cambiar puede perjudicar el equilibrio hídrico y de solutos."
      }
    },
    {
      "text": {
        "pt": "Reduzir a oferta de eletrólitos na NPT para compensar perdas dialíticas.",
        "en": "Reduce electrolyte content in TPN to compensate for dialytic losses.",
        "es": "Reducir el contenido de electrolitos en la NPT para compensar las pérdidas dialíticas."
      },
      "explanation": {
        "pt": "Reduzir os eletrólitos na NPT pode agravar ainda mais a deficiência, sendo o oposto do necessário nesse cenário.",
        "en": "Reducing TPN electrolytes worsens the deficit — the opposite of what is needed.",
        "es": "Reducir los electrolitos en la NPT agrava el déficit, siendo lo contrario a lo indicado."
      }
    }
  ]
},
{
  "id": 839,
  "code": "dialysis-q839",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "micronutrients", "vitamins", "trace elements", "crrt"],
  "level": "hard",
  "correct": 3,
  "question": {
    "pt": "Paciente em TRS contínua há mais de 10 dias por LRA pós-operatória apresenta encefalopatia, neuropatia periférica e queda de imunidade inata. Exames laboratoriais mostram deficiência de selênio e tiamina. Qual das seguintes abordagens é mais adequada no manejo dessas deficiências em pacientes sob diálise contínua prolongada?",
    "en": "A patient undergoing continuous RRT for over 10 days due to postoperative AKI presents with encephalopathy, peripheral neuropathy, and impaired innate immunity. Labs show selenium and thiamine deficiency. Which of the following approaches is most appropriate for managing these deficiencies in prolonged continuous dialysis?",
    "es": "Paciente en TRS continua por más de 10 días debido a IRA posoperatoria presenta encefalopatía, neuropatía periférica y disminución de la inmunidad innata. Los exámenes muestran deficiencia de selenio y tiamina. ¿Cuál de los siguientes enfoques es más adecuado para el manejo de estas deficiencias en diálisis continua prolongada?"
  },
  "options": [
    {
      "text": {
        "pt": "Reduzir a dose de CRRT para minimizar perdas dialíticas de micronutrientes.",
        "en": "Reduce CRRT dose to minimize dialytic micronutrient losses.",
        "es": "Reducir la dosis de TRS para minimizar pérdidas dialíticas de micronutrientes."
      },
      "explanation": {
        "pt": "Reduzir a dose pode comprometer a depuração de solutos e volume, sem garantir correção das deficiências nutricionais.",
        "en": "Reducing dose may compromise solute and volume clearance, without addressing nutritional deficiencies.",
        "es": "Reducir la dosis puede comprometer la depuración de solutos y volumen, sin corregir las deficiencias nutricionales."
      }
    },
    {
      "text": {
        "pt": "Suspender TRS por 24h e administrar polivitamínico padrão.",
        "en": "Suspend RRT for 24h and give standard multivitamin supplement.",
        "es": "Suspender la TRS por 24h y administrar suplemento multivitamínico estándar."
      },
      "explanation": {
        "pt": "Suspender a TRS em paciente crítico não é recomendável. Multivitamínicos padrão não contêm doses adequadas para reposição terapêutica.",
        "en": "Suspending RRT in critical patients is not advisable. Standard multivitamins lack therapeutic dosing.",
        "es": "Suspender TRS en críticos no es recomendable. Multivitamínicos estándar no contienen dosis terapéuticas."
      }
    },
    {
      "text": {
        "pt": "Trocar TRS contínua por SLED para diminuir remoção de micronutrientes.",
        "en": "Switch from continuous RRT to SLED to reduce micronutrient removal.",
        "es": "Cambiar de TRS continua a SLED para reducir la eliminación de micronutrientes."
      },
      "explanation": {
        "pt": "Embora a SLED remova menos micronutrientes, não é suficiente para corrigir deficiências existentes. A reposição ativa é necessária.",
        "en": "SLED removes fewer micronutrients, but isn’t sufficient to reverse existing deficiencies. Active replacement is required.",
        "es": "La SLED elimina menos micronutrientes, pero no corrige deficiencias existentes. Se requiere reposición activa."
      }
    },
    {
      "text": {
        "pt": "Iniciar reposição parenteral específica de selênio e tiamina, monitorando resposta clínica e laboratorial.",
        "en": "Start targeted parenteral supplementation of selenium and thiamine, with clinical and lab monitoring.",
        "es": "Iniciar suplementación parenteral dirigida de selenio y tiamina, con monitoreo clínico y de laboratorio."
      },
      "explanation": {
        "pt": "TRS contínua promove perdas relevantes de micronutrientes e vitaminas hidrossolúveis. A reposição específica deve ser iniciada precocemente com monitoramento. (Fiaccadori E et al., CJASN 2010)",
        "en": "CRRT leads to significant losses of micronutrients and water-soluble vitamins. Specific replacement should be initiated early with monitoring. (Fiaccadori E et al., CJASN 2010)",
        "es": "La TRS continua promueve pérdidas de micronutrientes y vitaminas hidrosolubles. Se debe iniciar suplementación dirigida con monitoreo. (Fiaccadori E et al., CJASN 2010)"
      }
    },
    {
      "text": {
        "pt": "Aumentar calorias da NPT para estimular síntese de micronutrientes.",
        "en": "Increase calories in TPN to stimulate micronutrient synthesis.",
        "es": "Aumentar calorías en NPT para estimular síntesis de micronutrientes."
      },
      "explanation": {
        "pt": "Micronutrientes não são sintetizados endogenamente. Aumentar calorias não corrige suas deficiências.",
        "en": "Micronutrients are not endogenously synthesized. Increasing calories won’t fix deficiencies.",
        "es": "Los micronutrientes no se sintetizan endógenamente. Aumentar calorías no corrige deficiencias."
      }
    }
  ]
},
{
  "id": 840,
  "code": "dialysis-q840",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "hyperkalemia", "rhabdomyolysis", "sepsis", "crrt"],
  "level": "hard",
  "correct": 2,
  "question": {
    "pt": "Homem de 58 anos com sepse por pielonefrite obstrutiva evolui com rabdomiólise grave (CK > 25.000 U/L), potássio de 6,7 mEq/L e creatinina de 3,9 mg/dL. Mantém diurese, porém apresenta acidose metabólica (pH 7,21, HCO₃⁻ 14) e hiperfosfatemia. Qual modalidade de terapia renal substitutiva e parâmetro de prescrição são mais indicados para este caso?",
    "en": "A 58-year-old man with sepsis due to obstructive pyelonephritis develops severe rhabdomyolysis (CK > 25,000 U/L), potassium of 6.7 mEq/L, and creatinine of 3.9 mg/dL. He is still producing urine, but shows metabolic acidosis (pH 7.21, HCO₃⁻ 14) and hyperphosphatemia. What is the most appropriate RRT modality and prescription parameter for this case?",
    "es": "Hombre de 58 años con sepsis por pielonefritis obstructiva desarrolla rabdomiólisis grave (CK > 25.000 U/L), potasio de 6,7 mEq/L y creatinina de 3,9 mg/dL. Mantiene diuresis, pero presenta acidosis metabólica (pH 7,21, HCO₃⁻ 14) e hiperfosfatemia. ¿Cuál es la modalidad de TRS y parámetro de prescripción más adecuados en este caso?"
  },
  "options": [
    {
      "text": {
        "pt": "SLED por 6 horas com baixo fluxo de dialisato e sem reposição.",
        "en": "6-hour SLED with low dialysate flow and no replacement.",
        "es": "SLED de 6 horas con bajo flujo de dialisato y sin reposición."
      },
      "explanation": {
        "pt": "SLED de curta duração e fluxo baixo não promove depuração eficaz de potássio ou toxinas musculares como mioglobina.",
        "en": "Short SLED with low flow provides insufficient clearance of potassium or muscle toxins like myoglobin.",
        "es": "SLED corto y con bajo flujo no proporciona depuración adecuada de potasio ni toxinas musculares como mioglobina."
      }
    },
    {
      "text": {
        "pt": "Diálise intermitente padrão com bicarbonato alto no dialisato.",
        "en": "Standard intermittent dialysis with high bicarbonate in dialysate.",
        "es": "Diálisis intermitente estándar con bicarbonato alto en el dialisato."
      },
      "explanation": {
        "pt": "Apesar de eficaz para acidose, a hemodiálise intermitente pode causar instabilidade hemodinâmica e não controla de forma contínua o potássio em rabdomiólise.",
        "en": "While effective for acidosis, intermittent HD may cause hemodynamic instability and does not control potassium continuously in rhabdomyolysis.",
        "es": "Aunque efectiva para la acidosis, la HD intermitente puede causar inestabilidad hemodinámica y no controla el potasio de forma continua."
      }
    },
    {
      "text": {
        "pt": "TRS contínua com alta taxa de dialisato (≥ 2 L/h) e uso de membranas de alta permeabilidade.",
        "en": "Continuous RRT with high dialysate flow rate (≥ 2 L/h) and high-permeability membranes.",
        "es": "TRS continua con flujo alto de dialisato (≥ 2 L/h) y membranas de alta permeabilidad."
      },
      "explanation": {
        "pt": "CRRT com dialisato em alta taxa e membranas específicas permite remoção progressiva de potássio e mioglobina, com estabilidade acidobásica. (Naka T et al., Blood Purif 2012)",
        "en": "High-flow CRRT with appropriate membranes supports continuous potassium and myoglobin clearance with acid-base control. (Naka T et al., Blood Purif 2012)",
        "es": "La TRS continua con alto flujo y membranas adecuadas permite depuración continua de potasio y mioglobina con control ácido-base. (Naka T et al., Blood Purif 2012)"
      }
    },
    {
      "text": {
        "pt": "Ultrafiltração isolada com solução de bicarbonato EV intermitente.",
        "en": "Isolated ultrafiltration with intermittent IV bicarbonate.",
        "es": "Ultrafiltración aislada con bicarbonato EV intermitente."
      },
      "explanation": {
        "pt": "Ultrafiltração isolada não remove potássio nem toxinas. Bicarbonato EV corrige acidose temporariamente, mas não trata o distúrbio de base.",
        "en": "Isolated ultrafiltration doesn't remove potassium or toxins. IV bicarbonate corrects acidosis temporarily without addressing the cause.",
        "es": "La ultrafiltración aislada no elimina potasio ni toxinas. El bicarbonato EV corrige la acidosis de forma temporal."
      }
    },
    {
      "text": {
        "pt": "CRRT padrão com fluxo sanguíneo reduzido e solução sem potássio.",
        "en": "Standard CRRT with reduced blood flow and potassium-free solution.",
        "es": "TRS continua estándar con flujo sanguíneo reducido y solución sin potasio."
      },
      "explanation": {
        "pt": "Fluxo reduzido pode prejudicar a depuração em paciente com alta carga tóxica. Soluções sem potássio são úteis, mas não suficientes isoladamente.",
        "en": "Reduced blood flow may impair clearance in high-toxin burden. Potassium-free solutions help but aren't sufficient alone.",
        "es": "Flujo reducido puede limitar la depuración en casos con alta carga tóxica. Soluciones sin potasio ayudan, pero no bastan por sí solas."
      }
    }
  ]
},
{
  "id": 841,
  "code": "dialysis-q841",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "ace inhibitors", "aki", "crrt", "hemodynamics"],
  "level": "hard",
  "correct": 1,
  "question": {
    "pt": "Homem de 72 anos com insuficiência cardíaca e hipertensão faz uso crônico de enalapril. Internado por sepse urinária, evolui com hipotensão refratária e oligúria, necessitando vasopressores. A creatinina sobe de 1,2 mg/dL para 3,4 mg/dL em 48 horas. Inicia-se TRS contínua por sobrecarga hídrica e acidose. Qual conduta a seguir é mais adequada em relação ao uso do IECA durante a fase inicial da TRS?",
    "en": "A 72-year-old man with heart failure and hypertension is on chronic enalapril. Admitted for urinary sepsis, he develops refractory hypotension and oliguria, requiring vasopressors. Creatinine rises from 1.2 to 3.4 mg/dL over 48 hours. Continuous RRT is started due to fluid overload and acidosis. What is the most appropriate approach regarding ACE inhibitor use during the early phase of RRT?",
    "es": "Hombre de 72 años con insuficiencia cardíaca e hipertensión en uso crónico de enalapril. Ingresado por sepsis urinaria, desarrolla hipotensión refractaria y oliguria, requiriendo vasopresores. Creatinina sube de 1,2 a 3,4 mg/dL en 48h. Se inicia TRS continua por sobrecarga hídrica y acidosis. ¿Cuál es el abordaje más adecuado sobre el IECA durante la fase inicial de la TRS?"
  },
  "options": [
    {
      "text": {
        "pt": "Manter o enalapril sem alterações para preservar função cardíaca.",
        "en": "Continue enalapril unchanged to preserve cardiac function.",
        "es": "Mantener enalapril sin cambios para preservar función cardíaca."
      },
      "explanation": {
        "pt": "O uso contínuo de IECA na presença de hipotensão e LRA pode agravar a perfusão renal. Não é seguro mantê-lo no início da TRS.",
        "en": "Continuing ACE inhibitors during hypotension and AKI may worsen renal perfusion. Not safe during early RRT phase.",
        "es": "El uso continuo de IECA en hipotensión y IRA puede empeorar la perfusión renal. No es seguro durante la fase inicial de TRS."
      }
    },
    {
      "text": {
        "pt": "Suspender temporariamente o IECA e reavaliar após estabilização hemodinâmica.",
        "en": "Temporarily withhold ACE inhibitor and reassess after hemodynamic stabilization.",
        "es": "Suspender temporalmente el IECA y reevaluar tras estabilización hemodinámica."
      },
      "explanation": {
        "pt": "A suspensão temporária do IECA é indicada até melhora da perfusão e estabilização clínica, devido ao risco de agravamento da LRA. (KDIGO 2012)",
        "en": "Temporary discontinuation of ACEi is indicated until clinical stabilization and improved perfusion, due to AKI worsening risk. (KDIGO 2012)",
        "es": "La suspensión temporal del IECA está indicada hasta la estabilización clínica por riesgo de empeorar la IRA. (KDIGO 2012)"
      }
    },
    {
      "text": {
        "pt": "Substituir IECA por antagonista da aldosterona durante a TRS.",
        "en": "Replace ACEi with aldosterone antagonist during RRT.",
        "es": "Reemplazar IECA por antagonista de aldosterona durante TRS."
      },
      "explanation": {
        "pt": "Antagonistas da aldosterona também impactam a função renal e potássio, e não são indicados nesse momento crítico.",
        "en": "Aldosterone antagonists affect renal function and potassium; not recommended during critical AKI phase.",
        "es": "Los antagonistas de aldosterona también afectan función renal y potasio. No recomendados en esta fase crítica."
      }
    },
    {
      "text": {
        "pt": "Reduzir a dose do IECA pela metade e manter durante a TRS.",
        "en": "Halve the ACEi dose and continue during RRT.",
        "es": "Reducir la dosis del IECA a la mitad y mantener durante TRS."
      },
      "explanation": {
        "pt": "Mesmo em doses reduzidas, IECA pode perpetuar a hipotensão e comprometer a recuperação renal. É preferível suspender temporariamente.",
        "en": "Even reduced doses may sustain hypotension and delay renal recovery. Temporary withdrawal is safer.",
        "es": "Incluso en dosis bajas, el IECA puede mantener la hipotensión y retrasar recuperación renal. Mejor suspender temporalmente."
      }
    },
    {
      "text": {
        "pt": "Associar bloqueador de receptor de angiotensina II ao IECA para potencializar efeito cardiorrenal.",
        "en": "Add ARB to ACEi to enhance cardiorenal effect.",
        "es": "Agregar ARA-II al IECA para potenciar efecto cardiorrenal."
      },
      "explanation": {
        "pt": "A associação IECA + BRA está contraindicada em LRA e TRS devido ao alto risco de hipercalemia, hipotensão e piora renal.",
        "en": "Combining ACEi and ARB is contraindicated in AKI and RRT due to high risk of hyperkalemia, hypotension, and worsening renal function.",
        "es": "Asociar IECA y ARA-II está contraindicado en IRA y TRS por riesgo de hipercalemia, hipotensión y deterioro renal."
      }
    }
  ]
},
{
  "id": 842,
  "code": "dialysis-q842",
  "areas": ["nephro", "nephro-icu", "icu", "medicine"],
  "topics": ["rrt", "anticoagulation", "HIT", "crrt", "hematology"],
  "level": "hard",
  "correct": 0,
  "question": {
    "pt": "Mulher de 64 anos em TRS contínua por LRA séptica desenvolve queda progressiva de plaquetas e trombose de acesso venoso profundo. Usava heparina não fracionada na anticoagulação do circuito. Imunodosagem confirma presença de anticorpos anti-PF4. Qual conduta é mais apropriada quanto à anticoagulação na TRS?",
    "en": "A 64-year-old woman on continuous RRT for septic AKI develops progressive thrombocytopenia and deep venous catheter thrombosis. She was on unfractionated heparin for circuit anticoagulation. PF4 antibodies are confirmed. What is the most appropriate approach to anticoagulation during RRT?",
    "es": "Mujer de 64 años en TRS continua por IRA séptica presenta trombocitopenia progresiva y trombosis de catéter venoso profundo. Usaba heparina no fraccionada en el circuito. Se confirma anticuerpos anti-PF4. ¿Cuál es el abordaje más adecuado de la anticoagulación en TRS?"
  },
  "options": [
    {
      "text": {
        "pt": "Substituir heparina por argatroban ou danaparóide para anticoagulação do circuito.",
        "en": "Replace heparin with argatroban or danaparoid for circuit anticoagulation.",
        "es": "Reemplazar heparina por argatroban o danaparoide para anticoagulación del circuito."
      },
      "explanation": {
        "pt": "HIT exige retirada imediata da heparina e uso de anticoagulantes alternativos como argatroban, danaparóide ou fondaparina. (Warkentin TE, NEJM 2015)",
        "en": "HIT requires immediate heparin cessation and switch to alternative anticoagulants like argatroban, danaparoid or fondaparinux. (Warkentin TE, NEJM 2015)",
        "es": "HIT requiere suspensión inmediata de heparina y uso de anticoagulantes alternativos como argatroban, danaparoide o fondaparinux. (Warkentin TE, NEJM 2015)"
      }
    },
    {
      "text": {
        "pt": "Trocar heparina não fracionada por heparina de baixo peso molecular.",
        "en": "Switch from unfractionated to low molecular weight heparin.",
        "es": "Cambiar heparina no fraccionada por heparina de bajo peso molecular."
      },
      "explanation": {
        "pt": "Existe reação cruzada significativa entre as heparinas. A HBPM também pode induzir ou perpetuar a HIT.",
        "en": "Cross-reactivity exists between UFH and LMWH. LMWH can also induce or worsen HIT.",
        "es": "Existe reactividad cruzada entre heparinas. HBPM también puede inducir o agravar la HIT."
      }
    },
    {
      "text": {
        "pt": "Manter heparina, pois HIT não interfere na anticoagulação extracorpórea.",
        "en": "Continue heparin, as HIT doesn’t interfere with extracorporeal anticoagulation.",
        "es": "Continuar heparina, ya que HIT no interfiere con anticoagulación extracorpórea."
      },
      "explanation": {
        "pt": "Manter heparina frente à suspeita ou confirmação de HIT representa risco de trombose sistêmica grave e alta mortalidade.",
        "en": "Maintaining heparin in confirmed HIT carries high risk of thrombosis and mortality.",
        "es": "Mantener heparina con HIT confirmada implica alto riesgo de trombosis y mortalidad."
      }
    },
    {
      "text": {
        "pt": "Suspender anticoagulação completamente e realizar TRS sem anticoagulante.",
        "en": "Suspend all anticoagulation and perform RRT without any anticoagulant.",
        "es": "Suspender toda anticoagulación y realizar TRS sin anticoagulantes."
      },
      "explanation": {
        "pt": "TRS sem anticoagulação pode falhar rapidamente por coagulação do circuito. Opções alternativas devem ser consideradas.",
        "en": "RRT without anticoagulation often fails due to circuit clotting. Safer alternatives exist.",
        "es": "La TRS sin anticoagulación suele fallar por coagulación del circuito. Existen alternativas más seguras."
      }
    },
    {
      "text": {
        "pt": "Iniciar citrato como anticoagulante principal do circuito sem ajustes.",
        "en": "Start citrate as main circuit anticoagulant without adjustments.",
        "es": "Iniciar citrato como anticoagulante principal del circuito sin ajustes."
      },
      "explanation": {
        "pt": "Embora o citrato seja alternativa segura, sua implementação exige monitoramento rigoroso e ajustes conforme função hepática e distúrbios eletrolíticos.",
        "en": "Citrate is a safe alternative, but requires careful monitoring and adjustment depending on liver function and electrolytes.",
        "es": "El citrato es una opción segura, pero requiere monitoreo y ajustes según función hepática y electrolitos."
      }
    }
  ]
},

];
questionBank.addBank(bancoDialysis);