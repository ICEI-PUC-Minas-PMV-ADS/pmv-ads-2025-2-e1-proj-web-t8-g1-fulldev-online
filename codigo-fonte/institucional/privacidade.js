// ========== PRIVACIDADE.HTML - JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    initializeTableOfContents();
    initializeProgressBar();
    initializeDataTable();
    initializeCookiePreferences();
    initializeDataRequestForm();
    initializeSmoothScroll();
    initializeBackButton();
});

// Índice de navegação
function initializeTableOfContents() {
    const headers = document.querySelectorAll('.content-section h2');
    
    if (headers.length === 0) return;
    
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
    tocTitle.textContent = 'Navegação';
    tocTitle.style.cssText = `
        color: var(--accent-purple);
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
        if (!header.id) {
            header.id = `privacy-section-${index + 1}`;
        }
        
        const li = document.createElement('li');
        li.style.marginBottom = '0.75rem';
        
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
            link.style.color = 'var(--accent-purple)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.color = 'var(--text-secondary)';
        });
        
        li.appendChild(link);
        tocList.appendChild(li);
    });
    
    tocContainer.appendChild(tocList);
    document.body.appendChild(tocContainer);
    
    if (window.innerWidth > 1200) {
        tocContainer.style.display = 'block';
    }
    
    window.addEventListener('resize', () => {
        tocContainer.style.display = window.innerWidth > 1200 ? 'block' : 'none';
    });
}

// Barra de progresso
function initializeProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #8B5CF6, #FF6600);
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

// Interatividade na tabela de dados
function initializeDataTable() {
    const table = document.querySelector('.data-table');
    
    if (table) {
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            row.style.transition = 'background-color 0.2s ease';
            
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
            });
            
            row.addEventListener('mouseleave', () => {
                row.style.backgroundColor = '';
            });
        });
    }
}

// Central de Preferências de Cookies
function initializeCookiePreferences() {
    const cookieSection = Array.from(document.querySelectorAll('.content-section h2'))
        .find(h2 => h2.textContent.includes('Cookies'));
    
    if (cookieSection) {
        const preferenceBtn = document.createElement('button');
        preferenceBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
            </svg>
            Gerenciar Cookies
        `;
        preferenceBtn.style.cssText = `
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            background: var(--accent-purple);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        `;
        
        preferenceBtn.addEventListener('mouseenter', () => {
            preferenceBtn.style.transform = 'translateY(-2px)';
            preferenceBtn.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.3)';
        });
        
        preferenceBtn.addEventListener('mouseleave', () => {
            preferenceBtn.style.transform = 'translateY(0)';
            preferenceBtn.style.boxShadow = 'none';
        });
        
        preferenceBtn.addEventListener('click', showCookiePreferencesModal);
        
        cookieSection.parentElement.insertBefore(preferenceBtn, cookieSection.nextSibling);
    }
}

function showCookiePreferencesModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            padding: 2rem;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="color: var(--accent-purple); margin: 0;">Preferências de Cookies</h2>
                <button class="close-modal" style="
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                ">✕</button>
            </div>
            
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                Personalize suas preferências de cookies. Os cookies essenciais são necessários e não podem ser desativados.
            </p>
            
            <div class="cookie-option" style="margin-bottom: 1rem;">
                <label style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 8px;
                    cursor: not-allowed;
                ">
                    <div>
                        <strong style="color: var(--text-primary);">Cookies Essenciais</strong>
                        <div style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.25rem;">
                            Necessários para o funcionamento básico
                        </div>
                    </div>
                    <input type="checkbox" checked disabled style="width: 20px; height: 20px;">
                </label>
            </div>
            
            <div class="cookie-option" style="margin-bottom: 1rem;">
                <label style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 8px;
                    cursor: pointer;
                ">
                    <div>
                        <strong style="color: var(--text-primary);">Cookies Funcionais</strong>
                        <div style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.25rem;">
                            Lembram suas preferências
                        </div>
                    </div>
                    <input type="checkbox" id="functionalCookies" checked style="width: 20px; height: 20px; cursor: pointer;">
                </label>
            </div>
            
            <div class="cookie-option" style="margin-bottom: 1rem;">
                <label style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 8px;
                    cursor: pointer;
                ">
                    <div>
                        <strong style="color: var(--text-primary);">Cookies Analíticos</strong>
                        <div style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.25rem;">
                            Ajudam a melhorar a plataforma
                        </div>
                    </div>
                    <input type="checkbox" id="analyticsCookies" checked style="width: 20px; height: 20px; cursor: pointer;">
                </label>
            </div>
            
            <div class="cookie-option" style="margin-bottom: 1.5rem;">
                <label style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 8px;
                    cursor: pointer;
                ">
                    <div>
                        <strong style="color: var(--text-primary);">Cookies de Marketing</strong>
                        <div style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.25rem;">
                            Personalizam anúncios
                        </div>
                    </div>
                    <input type="checkbox" id="marketingCookies" style="width: 20px; height: 20px; cursor: pointer;">
                </label>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button class="save-preferences" style="
                    flex: 1;
                    padding: 1rem;
                    background: var(--gradient-orange);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Salvar Preferências</button>
                <button class="reject-all" style="
                    padding: 1rem 1.5rem;
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Rejeitar Todos</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    modal.querySelector('.save-preferences').addEventListener('click', () => {
        const prefs = {
            functional: document.getElementById('functionalCookies').checked,
            analytics: document.getElementById('analyticsCookies').checked,
            marketing: document.getElementById('marketingCookies').checked
        };
        
        localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
        showSuccessMessage('Preferências salvas com sucesso!');
        modal.remove();
    });
    
    modal.querySelector('.reject-all').addEventListener('click', () => {
        document.getElementById('functionalCookies').checked = false;
        document.getElementById('analyticsCookies').checked = false;
        document.getElementById('marketingCookies').checked = false;
    });
}

// Formulário de Solicitação de Dados (LGPD)
function initializeDataRequestForm() {
    const dpoSection = Array.from(document.querySelectorAll('.content-section h2'))
        .find(h2 => h2.textContent.includes('Encarregado'));
    
    if (dpoSection) {
        const requestBtn = document.createElement('button');
        requestBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
            </svg>
            Solicitar Meus Dados (LGPD)
        `;
        requestBtn.style.cssText = `
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            background: var(--bg-secondary);
            color: var(--text-primary);
            border: 2px solid var(--accent-purple);
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        `;
        
        requestBtn.addEventListener('mouseenter', () => {
            requestBtn.style.background = 'var(--accent-purple)';
            requestBtn.style.color = 'white';
            requestBtn.style.transform = 'translateY(-2px)';
        });
        
        requestBtn.addEventListener('mouseleave', () => {
            requestBtn.style.background = 'var(--bg-secondary)';
            requestBtn.style.color = 'var(--text-primary)';
            requestBtn.style.transform = 'translateY(0)';
        });
        
        requestBtn.addEventListener('click', showDataRequestForm);
        
        dpoSection.parentElement.insertBefore(requestBtn, dpoSection.nextSibling);
    }
}

function showDataRequestForm() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            max-width: 500px;
            width: 100%;
            padding: 2rem;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="color: var(--accent-purple); margin: 0;">Solicitação LGPD</h2>
                <button class="close-modal" style="
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                ">✕</button>
            </div>
            
            <form id="dataRequestForm">
                <div style="margin-bottom: 1rem;">
                    <label style="color: var(--text-primary); display: block; margin-bottom: 0.5rem; font-weight: 600;">
                        Tipo de Solicitação
                    </label>
                    <select required style="
                        width: 100%;
                        padding: 0.75rem;
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        color: var(--text-primary);
                    ">
                        <option value="">Selecione...</option>
                        <option value="access">Acessar meus dados</option>
                        <option value="correct">Corrigir dados</option>
                        <option value="delete">Excluir meus dados</option>
                        <option value="portability">Portabilidade de dados</option>
                        <option value="revoke">Revogar consentimento</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="color: var(--text-primary); display: block; margin-bottom: 0.5rem; font-weight: 600;">
                        Email
                    </label>
                    <input type="email" required placeholder="seu@email.com" style="
                        width: 100%;
                        padding: 0.75rem;
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        color: var(--text-primary);
                    ">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="color: var(--text-primary); display: block; margin-bottom: 0.5rem; font-weight: 600;">
                        Detalhes da Solicitação
                    </label>
                    <textarea rows="4" placeholder="Descreva sua solicitação..." style="
                        width: 100%;
                        padding: 0.75rem;
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        color: var(--text-primary);
                        resize: vertical;
                    "></textarea>
                </div>
                
                <button type="submit" style="
                    width: 100%;
                    padding: 1rem;
                    background: var(--gradient-orange);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Enviar Solicitação</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    modal.querySelector('#dataRequestForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showSuccessMessage('Solicitação enviada! Você receberá resposta em até 15 dias.');
        modal.remove();
    });
}

// Rolagem suave
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Botão voltar
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

// Mensagem de sucesso
function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: #10B981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Privacidade.js carregado com sucesso!');
