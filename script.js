// Verifica o tema salvo no localStorage ou usa a preferência do sistema
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

// Atualiza o ícone do botão de acordo com o tema
function updateThemeButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = theme === 'dark' ? '☀️' : '🌙';
        themeToggle.textContent = icon;
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    }
}

// Alterna entre dark e light mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

// Inicializa o tema quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Grava perfil ativo antes de navegar ao catálogo
    document.querySelectorAll('.perfil-link').forEach(link => {
        link.addEventListener('click', event => {
            const nome = link.dataset.perfil;
            const img = link.dataset.img;

            if (nome) localStorage.setItem('perfilAtivoNome', nome);
            if (img) localStorage.setItem('perfilAtivoImagem', img);
        });
    });
});
