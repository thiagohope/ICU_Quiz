// Dashboard-Focused.js
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0); // Rola o dashboard para o topo no carregamento
    console.log("Dashboard-Focused: DOM carregado e página rolada para o topo."); // Log corrigido

    // Certifique-se que o ID do botão no seu Dashboard-Focused.html corresponde.
    // O Dashboard-Focused.html (Source 3) usa 'start-session-button'.
    // Se este ID for partilhado com outros dashboards, pode ser problemático se os scripts
    // não estiverem perfeitamente isolados. Considerar IDs únicos como 'start-session-button-Focused'.
    // Por agora, vamos usar o ID que está no seu HTML.
    const startButton = document.getElementById('start-session-button');

    if (startButton) {
        startButton.addEventListener('click', () => {
            // O quiz-ad-free.js deverá lidar com o carregamento de todas as áreas
            // ou áreas padrão, já que não estamos a passar parâmetros.
            let quizUrl = `../Quiz/Focused.html`; // Caminho para o seu quiz ad-free

            console.log("Dashboard-Focused: Redirecionando para Focused com URL:", quizUrl);
            window.location.href = quizUrl;
        });
    } else {
        console.error("Dashboard-Focused: Erro! Botão 'start-session-button' não encontrado.");
    }
});