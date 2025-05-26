const bancoCardioDificilima = [
{
  id: 401,
  code: "cardio04-q401",
  area: ["cardio", "icu"],
  topic: ["myocardial infarction", "valvular complications", "cardiogenic shock", "echocardiography", "surgery"],
  level: "muito_hard",
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
  
];

questionBank.addBank(bancoCardioDificilima);
