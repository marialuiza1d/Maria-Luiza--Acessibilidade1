// Acessibilidade - Alterar tamanho da fonte
const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');
const body = document.body;
let fontSize = 16; // Tamanho inicial da fonte

// Função para aumentar a fonte
aumentarFonteBtn.addEventListener('click', () => {
    fontSize += 2;
    body.style.fontSize = fontSize + 'px';
});

// Função para diminuir a fonte
diminuirFonteBtn.addEventListener('click', () => {
    if (fontSize > 12) {
        fontSize -= 2;
        body.style.fontSize = fontSize + 'px';
    }
});

// Alternar contraste
const alternaContrasteBtn = document.getElementById('alterna-contraste');
let contrastOn = false;

alternaContrasteBtn.addEventListener('click', () => {
    contrastOn = !contrastOn;
    if (contrastOn) {
        body.classList.add('high-contrast');
        alternaContrasteBtn.innerHTML = '<i class="bi bi-sun"></i>'; // Ícone de sol para modo claro
    } else {
        body.classList.remove('high-contrast');
        alternaContrasteBtn.innerHTML = '<i class="bi bi-moon"></i>'; // Ícone de lua para modo escuro
    }
});

// Menu de Acessibilidade
const menuAcessibilidadeBtn = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

menuAcessibilidadeBtn.addEventListener('click', () => {
    opcoesAcessibilidade.classList.toggle('show');
});

// CSS para contraste alto
const style = document.createElement('style');
style.innerHTML = `
    .high-contrast {
        background-color: #000;
        color: #fff;
    }

    .high-contrast .btn-primary {
        background-color: #fff;
        border-color: #fff;
        color: #000;
    }

    .high-contrast .btn-primary:hover {
        background-color: #ccc;
        border-color: #ccc;
    }
    
    .high-contrast .nav-link {
        color: #fff !important;
    }
    
    .high-contrast .footer-social-icons i {
        color: #fff;
    }
    
    .high-contrast .footer-social-icons i:hover {
        color: #a67c52;
    }
    
    .high-contrast .img-fluid {
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    .high-contrast .nav-link:hover {
        color: #a67c52;
    }
`;

document.head.appendChild(style);

// Função para otimizar o carregamento de imagens
const images = document.querySelectorAll('img[loading="lazy"]');
images.forEach(image => {
    image.addEventListener('load', () => {
        image.classList.add('img-loaded');
    });
});
