//pro-simulation-timer.js

console.log("pro-simulation-timer.js LOADED"); // Padrão Inglês

// --- Constantes e Variáveis Internas do Módulo ---
const activeTimerTextColor = 'rgb(239, 68, 68)';
const subtleTimerTextColor = '#1f2937'; 
const activeTimerButtonBg = '#4B5563'; 

let timerInterval;
let totalSecondsInModule = 0;
let timerIsRunningInModule = false;
let timerDisplayElement = null;
let timerStartStopButtonElement = null;
let timerContainerElement = null;
let timerInteractedRecentlyFlag = false;
let timerInteractionTimeoutId;

let translateFunctionForTimer = null; 
let onTimeUpCallbackFunction = null;
let saveProgressFunctionForTimer = null; // Para chamar saveProgress

// --- Funções Internas do Módulo (adaptadas de pro-simulation.js [2, 7, 18, 19, 20]) ---

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `<span class="math-inline">${h}:</span>${m}:${s}`;
}

function setTimerDisplayVisibility(isClearlyVisible) {
    if (timerDisplayElement) {
        timerDisplayElement.style.color = isClearlyVisible ? activeTimerTextColor : subtleTimerTextColor;
    }
    // O botão mantém seu estilo destacado sempre
}

function scheduleSubtleTimer() {
    clearTimeout(timerInteractionTimeoutId);
    timerInteractionTimeoutId = setTimeout(() => {
        timerInteractedRecentlyFlag = false;
        if (timerIsRunningInModule && totalSecondsInModule > 600) {
            setTimerDisplayVisibility(false);
        }
    }, 3000); 
}

function handleTimerContainerInteraction() {
    if (totalSecondsInModule > 600) {
        setTimerDisplayVisibility(true); 
        timerInteractedRecentlyFlag = true; 
        scheduleSubtleTimer(); 
    }
}

function handleTimerContainerMouseLeave() {
    if (timerIsRunningInModule && totalSecondsInModule > 600 && !timerInteractedRecentlyFlag) {
        scheduleSubtleTimer(); 
    }
}

function updateTimerDisplayInternal() { // Renomeado para evitar conflito global se pro-simulation.js [2, 7, 18, 19, 20] ainda tiver
  if (timerDisplayElement) {
    timerDisplayElement.innerHTML = formatTime(totalSecondsInModule);
  }

  if (totalSecondsInModule <= 0) {
    clearInterval(timerInterval);
    timerIsRunningInModule = false;
    if (timerStartStopButtonElement) {
        timerStartStopButtonElement.disabled = true;
        if (translateFunctionForTimer) {
            timerStartStopButtonElement.textContent = translateFunctionForTimer("timer_start_button_text");
        }
        timerStartStopButtonElement.style.color = 'white';
        timerStartStopButtonElement.style.backgroundColor = activeTimerButtonBg;
    }
    if (timerContainerElement) timerContainerElement.style.opacity = '1';
    setTimerDisplayVisibility(true); 
    
    console.log("Timer module: Time's up!"); // Inglês
    if (typeof handleTimeUpInternal === 'function') { // Verifica se a função existe antes de chamar
        handleTimeUpInternal();
    }
    return; 
  }

  if (totalSecondsInModule <= 600) {
    if (timerContainerElement) timerContainerElement.style.opacity = '1';
    setTimerDisplayVisibility(true);
  } else if (timerIsRunningInModule && !timerInteractedRecentlyFlag) {
    // Deixa scheduleSubtleTimer cuidar
  } else if (!timerIsRunningInModule && totalSecondsInModule > 600) {
    setTimerDisplayVisibility(true);
  }
}

function timerTickInternal() {
    if (totalSecondsInModule > 0) {
        totalSecondsInModule--;
    }
    updateTimerDisplayInternal();
}

function toggleTimerInternal() {
    if (!translateFunctionForTimer) {
        console.error("Timer module: translateFunction not set during init."); // Inglês
        return;
    }
    const translatedTextPause = translateFunctionForTimer("timer_pause_button_text");
    const translatedTextResume = translateFunctionForTimer("timer_resume_button_text");

    if (timerIsRunningInModule) {
        clearInterval(timerInterval);
        if (timerStartStopButtonElement) timerStartStopButtonElement.textContent = translatedTextResume;
        timerIsRunningInModule = false;
        clearTimeout(timerInteractionTimeoutId);
        setTimerDisplayVisibility(true); 
        timerInteractedRecentlyFlag = true; 
    } else {
        if (totalSecondsInModule <= 0) return;
        timerIsRunningInModule = true;
        setTimerDisplayVisibility(true);
        timerInterval = setInterval(timerTickInternal, 1000); 
        if (timerStartStopButtonElement) timerStartStopButtonElement.textContent = translatedTextPause;
        scheduleSubtleTimer(); 
    }
}

function handleTimeUpInternal() {
  const translatedTitle = translateFunctionForTimer("time_up_message_title");
  const translatedBody = translateFunctionForTimer("time_up_message_body");
  alert(translatedTitle + "\n" + translatedBody);
  
  if (typeof saveProgressFunctionForTimer === 'function') { // Chama saveProgress passado do pro-simulation
    saveProgressFunctionForTimer();
  }

  if (typeof onTimeUpCallbackFunction === 'function') {
    setTimeout(onTimeUpCallbackFunction, 1000); // Reduzido delay para callback
  }
}

// --- API do Módulo ---
window.ProSimulationTimer = {
  init: function(config) {
    console.log("ProSimulationTimer: Initializing with config:", config); // Inglês
    totalSecondsInModule = config.durationSeconds || (120 * 60);
    timerDisplayElement = document.getElementById(config.displayId);
    timerStartStopButtonElement = document.getElementById(config.buttonId);
    timerContainerElement = document.getElementById(config.containerId);
    translateFunctionForTimer = config.translateFunction;
    onTimeUpCallbackFunction = config.timeUpCallback;
    saveProgressFunctionForTimer = config.saveProgressFunction; // Nova adição

    if (!timerDisplayElement || !timerStartStopButtonElement || !timerContainerElement || 
        typeof translateFunctionForTimer !== 'function' || typeof onTimeUpCallbackFunction !== 'function' ||
        typeof saveProgressFunctionForTimer !== 'function') {
        console.error("Timer module init: Missing essential DOM elements, translateFunction, timeUpCallback, or saveProgressFunction."); // Inglês
        return;
    }

    timerStartStopButtonElement.textContent = translateFunctionForTimer("timer_start_button_text");
    timerStartStopButtonElement.disabled = false;
    timerStartStopButtonElement.removeEventListener('click', toggleTimerInternal);
    timerStartStopButtonElement.addEventListener('click', toggleTimerInternal);

    if (timerContainerElement) {
        timerContainerElement.style.opacity = '1';
        timerContainerElement.removeEventListener('mouseenter', handleTimerContainerInteraction);
        timerContainerElement.addEventListener('mouseenter', handleTimerContainerInteraction);
        timerContainerElement.removeEventListener('mouseleave', handleTimerContainerMouseLeave);
        timerContainerElement.addEventListener('mouseleave', handleTimerContainerMouseLeave);
        timerContainerElement.removeEventListener('click', handleTimerContainerInteraction);
        timerContainerElement.addEventListener('click', handleTimerContainerInteraction);
    }
    
    updateTimerDisplayInternal(); 

    if (totalSecondsInModule > 600 && !timerIsRunningInModule) {
        setTimerDisplayVisibility(false);
    } else {
        setTimerDisplayVisibility(true);
    }
  },

  start: function() {
    if (!timerIsRunningInModule && totalSecondsInModule > 0) {
      console.log("ProSimulationTimer: External start called."); // Inglês
      toggleTimerInternal();
    }
  },

  isRunning: function() {
    return timerIsRunningInModule;
  },

  getTotalSeconds: function() { // Função para pro-simulation.js [2, 7, 18, 19, 20] verificar se há tempo
      return totalSecondsInModule;
  }
};