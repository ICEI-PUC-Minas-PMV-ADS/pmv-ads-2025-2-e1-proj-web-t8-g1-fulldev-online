// ========== TERMOS.HTML - JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    initializeTableOfContents();
    initializeProgressBar();
    initializeHighlights();
    initializeSmoothScroll();
    initializePrintButton();
    initializeBackButton();
});

// Criar índice de navegação (Table of Contents)
function initializeTableOfContents() {
    const headers = document.querySelectorAll('.content-section h2');
    
    if (headers.length === 0) return;
    
    // Criar container do TOC
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-container';
    tocContainer.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 1.5rem;
        max-width: 250px;
        max-height: calc(100vh - 150px);
        overflow-y: auto;
        z-index: 100;
        display: none;
    `;
    
    const tocTitle = document.createElement('h3');
    tocTitle.textContent = 'Índice';
    tocTitle.style.cssText = `
        color: var(--accent-orange);
        font-size: 1rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--border-color);
    `;
    tocContainer.appendChild(tocTitle);
    
    const tocList = document.createElement('ul');
    tocList.style.cssText = `
        list-style: none;
        padding: 0;
        margin: 0;
    `;
    
    headers.forEach((header, index) => {
        // Adicionar ID ao header se não tiver
        if (!header.id) {
            header.id = `section-${index + 1}`;
        }
        
        const li = document.createElement('li');
        li.style.cssText = `
            margin-bottom: 0.75rem;
        `;
        
        const link = document.createElement('a');
        link.href = `#${header.id}`;
        link.textContent = header.textContent;
        link.style.cssText = `
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.875rem;
            transition: color 0.2s ease;
            display: block;
        `;
        
        link.addEventListener('mouseenter', () => {
            link.style.color = 'var(--accent-orange)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.color = 'var(--text-secondary)';
        });
        
        li.appendChild(link);
        tocList.appendChild(li);
    });
    
    tocContainer.appendChild(tocList);
    document.body.appendChild(tocContainer);
    
    // Mostrar TOC apenas em desktop
    if (window.innerWidth > 1200) {
        tocContainer.style.display = 'block';
    }
    
    window.addEventListener('resize', () => {
        tocContainer.style.display = window.innerWidth > 1200 ? 'block' : 'none';
    });
}

// Barra de progresso de leitura
function initializeProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #FF6600, #8B5CF6);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = progress + '%';
    });
}

// Destacar termos importantes ao passar o mouse
function initializeHighlights() {
    const importantTerms = [
        'LGPD', 'obrigatório', 'proibido', 'responsável', 'direito', 'dever',
        'pode', 'deve', 'não pode', 'vedado', 'autorizado'
    ];
    
    const contentSections = document.querySelectorAll('.content-section p, .content-section li');
    
    contentSections.forEach(element => {
        let html = element.innerHTML;
        
        importantTerms.forEach(term => {
            const regex = new RegExp(`\\b(${term})\\b`, 'gi');
            html = html.replace(regex, '<mark class="term-highlight">$1</mark>');
        });
        
        element.innerHTML = html;
    });
    
    // Adicionar estilos para highlights
    const style = document.createElement('style');
    style.textContent = `
        .term-highlight {
            background: transparent;
            color: inherit;
            font-weight: 600;
            padding: 0 2px;
            transition: background 0.2s ease;
        }
        
        .term-highlight:hover {
            background: rgba(255, 102, 0, 0.2);
            border-radius: 3px;
        }
    `;
    document.head.appendChild(style);
}

// Rolagem suave
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offset = 80; // Espaço do topo
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Highlight temporário da seção
                target.style.backgroundColor = 'rgba(255, 102, 0, 0.1)';
                setTimeout(() => {
                    target.style.backgroundColor = '';
                }, 1500);
            }
        });
    });
}

// Botão de imprimir
function initializePrintButton() {
    const headerDiv = document.querySelector('.institutional-header');
    
    if (headerDiv) {
        const printBtn = document.createElement('button');
        printBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 6,2 18,2 18,9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Imprimir Termos
        `;
        printBtn.style.cssText = `
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            background: var(--bg-secondary);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        `;
        
        printBtn.addEventListener('mouseenter', () => {
            printBtn.style.borderColor = 'var(--accent-orange)';
            printBtn.style.transform = 'translateY(-2px)';
        });
        
        printBtn.addEventListener('mouseleave', () => {
            printBtn.style.borderColor = 'var(--border-color)';
            printBtn.style.transform = 'translateY(0)';
        });
        
        printBtn.addEventListener('click', () => {
            window.print();
        });
        
        headerDiv.appendChild(printBtn);
    }
}

// Botão voltar animado
function initializeBackButton() {
    const backButton = document.querySelector('a[href*="home"]');
    
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 20px rgba(255, 102, 0, 0.3)';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }
}

// Checkbox de aceitação dos termos (simulação)
function createAcceptanceCheckbox() {
    const lastSection = document.querySelector('.content-section:last-of-type');
    
    if (lastSection) {
        const acceptanceDiv = document.createElement('div');
        acceptanceDiv.style.cssText = `
            margin-top: 3rem;
            padding: 2rem;
            background: var(--bg-secondary);
            border: 2px solid var(--border-color);
            border-radius: 12px;
            text-align: center;
        `;
        
        acceptanceDiv.innerHTML = `
            <label style="
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                cursor: pointer;
                font-size: 1rem;
                color: var(--text-primary);
            ">
                <input type="checkbox" id="acceptTerms" style="
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                ">
                <span>Li e concordo com os Termos de Uso</span>
            </label>
            <button id="confirmAcceptance" disabled style="
                margin-top: 1.5rem;
                padding: 1rem 2rem;
                background: var(--gradient-orange);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                cursor: not-allowed;
                opacity: 0.5;
                transition: all 0.3s ease;
            ">
                Confirmar Aceitação
            </button>
        `;
        
        lastSection.appendChild(acceptanceDiv);
        
        const checkbox = document.getElementById('acceptTerms');
        const confirmBtn = document.getElementById('confirmAcceptance');
        
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                confirmBtn.disabled = false;
                confirmBtn.style.cursor = 'pointer';
                confirmBtn.style.opacity = '1';
            } else {
                confirmBtn.disabled = true;
                confirmBtn.style.cursor = 'not-allowed';
                confirmBtn.style.opacity = '0.5';
            }
        });
        
        confirmBtn.addEventListener('click', () => {
            if (checkbox.checked) {
                showConfirmationMessage();
            }
        });
    }
}

function showConfirmationMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-secondary);
        border: 2px solid var(--accent-orange);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        z-index: 10001;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        animation: scaleIn 0.3s ease;
    `;
    
    message.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="color: var(--accent-orange); margin-bottom: 0.5rem;">Termos Aceitos!</h3>
        <p style="color: var(--text-secondary);">Você concordou com os Termos de Uso do FullDev Online.</p>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'scaleOut 0.3s ease';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes scaleOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    @media print {
        .toc-container,
        button,
        .reading-progress {
            display: none !important;
        }
    }
`;
document.head.appendChild(style);

// Inicializar checkbox de aceitação (opcional)
// createAcceptanceCheckbox();

console.log('✅ Termos.js carregado com sucesso!');
