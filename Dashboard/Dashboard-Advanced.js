// Dashboard-Advanced.js
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log("Dashboard-Advanced: DOM carregado e página rolada para o topo.");

    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const staticDashboardTexts = {
        en: {
            "dashboard_logout_text": "Logout",
            "logout_confirm_message": "Your progress will be saved. Are you sure you want to logout and go to the login page?",
            // ... outras traduções para esta página ...
        },
        pt: {
            "dashboard_logout_text": "Sair",
            "logout_confirm_message": "Seu progresso será salvo. Tem certeza que deseja sair e ir para a página de login?",
            // ...
        },
        es: {
            "dashboard_logout_text": "Cerrar Sesión",
            "logout_confirm_message": "Tu progreso se guardará. ¿Estás seguro de que quieres cerrar sesión e ir a la página de inicio de sesión?",
            // ...
        }
    };
    const s_t = staticDashboardTexts[currentLang] || staticDashboardTexts['en'];

    // Aplicar traduções estáticas (ex: texto do botão de logout)
    const logoutTextSpan = document.getElementById("dashboard_logout_text");
    if (logoutTextSpan) logoutTextSpan.textContent = s_t["dashboard_logout_text"];

    // ... (código para aplicar outras traduções estáticas, se houver) ...

    // --- LÓGICA DOS BOTÕES DE NAVEGAÇÃO ---
    const focusedProButton = document.getElementById('start-focused-pro-mode-button');
    const simulationButton = document.getElementById('start-simulation-mode-button');

    if (focusedProButton) {
        focusedProButton.addEventListener('click', () => {
            console.log("Redirecionando para Dashboard-FocusedPro.html");
            window.location.href = 'Dashboard-FocusedPro.html'; // Ajuste o caminho se necessário
        });
    } else {
        console.error("Dashboard-Advanced: Botão 'start-focused-pro-mode-button' não encontrado.");
    }

    if (simulationButton) {
        simulationButton.addEventListener('click', () => {
            console.log("Redirecionando para Dashboard-Pro.html");
            window.location.href = 'Dashboard-Pro.html'; // Ajuste o caminho se necessário
        });
    } else {
        console.error("Dashboard-Advanced: Botão 'start-simulation-mode-button' não encontrado.");
    }

    // --- LÓGICA DE LOGOUT ---
    const logoutButton = document.getElementById('dashboard-logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const confirmMessage = s_t.logout_confirm_message; // Usa s_t definido no topo do script

            if (confirm(confirmMessage)) {
                console.log("Logout: Limpando dados do usuário e redirecionando..."); // VERIFIQUE ESTE LOG
                localStorage.removeItem('userDetails');
                localStorage.removeItem('authToken');
                localStorage.removeItem('focusedProState');
                localStorage.removeItem('quizBasicState');
                localStorage.removeItem('quizAdFreeState');
                localStorage.removeItem('proSimulationState');
                // Adicione quaisquer outras chaves de localStorage que precisem ser limpas no logout
                window.location.href = '../login.html'; // Ajuste o caminho para sua página de login
            } else {
                console.log("Logout cancelado pelo usuário.");
            }
        });
    } else {
        console.error("Dashboard-Advanced: Botão 'dashboard-logout-button' não encontrado.");
    }
}); // Fim do DOMContentLoaded