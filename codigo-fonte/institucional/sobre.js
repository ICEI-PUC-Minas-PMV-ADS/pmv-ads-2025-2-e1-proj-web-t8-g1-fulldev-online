// ========== SOBRE.HTML - JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeStatsCounter();
    initializeTeamHover();
    initializeSmoothScroll();
    initializeBackButton();
});

// Animações de entrada
function initializeAnimations() {
    const sections = document.querySelectorAll('.content-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Contador animado de estatísticas
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                // Extrair número e sufixo (ex: "10K+")
                const match = text.match(/(\d+)(K\+|%|\+)?/);
                if (match) {
                    const targetNumber = parseInt(match[1]);
                    const suffix = match[2] || '';
                    
                    animateCounter(element, 0, targetNumber, suffix, 2000);
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, suffix, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(start + (end - start) * easeProgress);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Efeitos hover nos membros da equipe
function initializeTeamHover() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const avatar = member.querySelector('.team-avatar');
        
        member.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
            avatar.style.transition = 'transform 0.3s ease';
        });
        
        member.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Rolagem suave para links internos
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

// Botão voltar com animação
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

// Copiar email ao clicar
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        
        navigator.clipboard.writeText(email).then(() => {
            showTooltip(this, 'Email copiado!');
        }).catch(() => {
            // Fallback: abrir cliente de email
            window.location.href = this.getAttribute('href');
        });
    });
});

// Tooltip temporário
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: fixed;
        background: #10B981;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 600;
        z-index: 10000;
        pointer-events: none;
        animation: fadeIn 0.2s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => {
        tooltip.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => tooltip.remove(), 200);
    }, 2000);
}

// Adicionar estilos para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Sobre.js carregado com sucesso!');
