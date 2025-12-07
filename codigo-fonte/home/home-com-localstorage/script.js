// ========== LOCAL STORAGE SYSTEM ==========
class CourseStorage {
    constructor() {
        this.storageKey = 'fulldev_courses';
        this.init();
    }

    init() {
        if (!this.getCourses()) {
            // Dados iniciais dos cursos
            const initialCourses = [
                {
                    id: 1,
                    title: "Formação em React",
                    description: "Formação React Básico ao avançado",
                    price: 59.99,
                    originalPrice: 259.99,
                    image: "⚛️",
                    badge: "ROCKETSEAT",
                    sponsored: true,
                    category: "Frontend",
                    createdAt: new Date().toISOString()
                },
                {
                    id: 2,
                    title: "Chat Gpt Completo",
                    description: "Domine Prompts",
                    price: 89.99,
                    originalPrice: 199.99,
                    image: "🤖",
                    badge: "UDEMY",
                    sponsored: true,
                    category: "IA",
                    createdAt: new Date().toISOString()
                },
                {
                    id: 3,
                    title: "Curso de Angular 2",
                    description: "Do zero ao profissional",
                    price: 149.99,
                    originalPrice: 299.99,
                    image: "🅰️",
                    badge: "ROCKETSEAT",
                    sponsored: true,
                    category: "Frontend",
                    createdAt: new Date().toISOString()
                },
                {
                    id: 4,
                    title: "Node.js Avançado",
                    description: "APIs RESTful e GraphQL",
                    price: 199.99,
                    originalPrice: 399.99,
                    image: "🟢",
                    badge: "UDEMY",
                    sponsored: false,
                    category: "Backend",
                    createdAt: new Date().toISOString()
                },
                {
                    id: 5,
                    title: "Python Data Science",
                    description: "Machine Learning completo",
                    price: 179.99,
                    originalPrice: 349.99,
                    image: "🐍",
                    badge: "ROCKETSEAT",
                    sponsored: true,
                    category: "Data Science",
                    createdAt: new Date().toISOString()
                },
                {
                    id: 6,
                    title: "Flutter Mobile",
                    description: "Apps nativos multiplataforma",
                    price: 129.99,
                    originalPrice: 249.99,
                    image: "📱",
                    badge: "UDEMY",
                    sponsored: false,
                    category: "Mobile",
                    createdAt: new Date().toISOString()
                }
            ];
            this.setCourses(initialCourses);
        }
    }

    getCourses() {
        try {
            const courses = localStorage.getItem(this.storageKey);
            return courses ? JSON.parse(courses) : null;
        } catch (error) {
            console.error('Erro ao obter cursos:', error);
            return [];
        }
    }

    setCourses(courses) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(courses));
            return true;
        } catch (error) {
            console.error('Erro ao salvar cursos:', error);
            return false;
        }
    }

    addCourse(courseData) {
        try {
            const courses = this.getCourses();
            const newCourse = {
                id: Date.now(),
                title: courseData.title || '',
                description: courseData.description || '',
                price: courseData.price || 0,
                originalPrice: courseData.originalPrice || 0,
                image: courseData.image || '📚',
                badge: courseData.badge || '',
                category: courseData.category || 'Geral',
                sponsored: courseData.sponsored || false,
                createdAt: new Date().toISOString()
            };
            
            courses.push(newCourse);
            this.setCourses(courses);
            return newCourse;
        } catch (error) {
            console.error('Erro ao adicionar curso:', error);
            return null;
        }
    }

    deleteCourse(courseId) {
        try {
            const courses = this.getCourses();
            const filtered = courses.filter(c => c.id !== courseId);
            this.setCourses(filtered);
            return true;
        } catch (error) {
            console.error('Erro ao deletar curso:', error);
            return false;
        }
    }

    searchCourses(query) {
        const courses = this.getCourses();
        const lowerQuery = query.toLowerCase();
        
        return courses.filter(course => 
            course.title.toLowerCase().includes(lowerQuery) ||
            course.description.toLowerCase().includes(lowerQuery) ||
            course.category.toLowerCase().includes(lowerQuery)
        );
    }
}

// Instância global do sistema de storage
const courseStorage = new CourseStorage();

// Obter dados dos cursos do Local Storage
let coursesData = courseStorage.getCourses();

// Dados das Postagens
const postsData = [
    {
        id: 1,
        author: "Lucas Pedro",
        avatar: "LP",
        time: "34 minutos atrás",
        title: "Primeiros passos em programação? Curso de Pascal gratuito",
        description: "Esse curso não foi muito produtivo para meu desenvolvimento, gastei tempo e dinheiro.",
        category: "all",
        comments: 509,
        interactions: 2300,
        hypes: 45,
        hasBrandResponse: true
    },
    {
        id: 2,
        author: "Luciano",
        avatar: "LU",
        time: "28/07/2025 às 09:29",
        title: "Gastei muito dinheiro com esse curso",
        description: "Fui professor do curso técnico de Desenvolvimento de Sistemas no Senac e sempre gostei muito de ensinar programação para quem está começando.",
        category: "all",
        comments: 2,
        interactions: 0,
        hypes: 0,
        hasBrandResponse: false
    },
    {
        id: 3,
        author: "Ana Silva",
        avatar: "AS",
        time: "2 horas atrás",
        title: "Como otimizar performance em React",
        description: "Descubra técnicas avançadas para melhorar a performance das suas aplicações React, incluindo memoização, lazy loading e code splitting.",
        category: "frontend",
        comments: 23,
        interactions: 156,
        hypes: 89,
        hasBrandResponse: false
    },
    {
        id: 4,
        author: "Carlos Santos",
        avatar: "CS",
        time: "4 horas atrás",
        title: "API RESTful com Node.js e Express",
        description: "Tutorial completo para criar APIs robustas e escaláveis usando Node.js, Express e boas práticas de desenvolvimento.",
        category: "backend",
        comments: 45,
        interactions: 234,
        hypes: 167,
        hasBrandResponse: false
    },
    {
        id: 5,
        author: "Maria Oliveira",
        avatar: "MO",
        time: "6 horas atrás",
        title: "Flutter vs React Native: Qual escolher?",
        description: "Análise detalhada das duas principais tecnologias para desenvolvimento mobile, comparando performance, comunidade e casos de uso.",
        category: "mobile",
        comments: 67,
        interactions: 189,
        hypes: 145,
        hasBrandResponse: false
    },
    {
        id: 6,
        author: "João Pedro",
        avatar: "JP",
        time: "8 horas atrás",
        title: "Docker e Kubernetes na prática",
        description: "Aprenda a containerizar aplicações e orquestrar com Kubernetes. Inclui exemplos práticos e boas práticas para produção.",
        category: "devops",
        comments: 34,
        interactions: 278,
        hypes: 203,
        hasBrandResponse: false
    }
];

// Variáveis globais
let currentCourseIndex = 0;
let currentFilter = 'all';
let sidebarOpen = false;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializePosts();
    initializeFilters();
    initializeSidebar();
    initializeSearch();
    initializeInteractions();
    
    // Adicionar botões de compartilhar após renderizar cursos
    setTimeout(() => {
        addShareButtonsToCourses();
    }, 500);
});

// Carrossel de Cursos
function initializeCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Renderizar cursos
    renderCourses();
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (currentCourseIndex > 0) {
            currentCourseIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const maxIndex = coursesData.length - Math.floor(carouselTrack.offsetWidth / 315);
        if (currentCourseIndex < maxIndex) {
            currentCourseIndex++;
            updateCarousel();
        }
    });
    
    // Auto-play do carrossel
    setInterval(() => {
        const maxIndex = coursesData.length - Math.floor(carouselTrack.offsetWidth / 315);
        if (currentCourseIndex < maxIndex) {
            currentCourseIndex++;
        } else {
            currentCourseIndex = 0;
        }
        updateCarousel();
    }, 5000);
}

function renderCourses() {
    const carouselTrack = document.getElementById('carouselTrack');
    carouselTrack.innerHTML = ''; // Limpar antes de renderizar
    
    // Recarregar dados do Local Storage
    coursesData = courseStorage.getCourses();
    
    coursesData.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            ${course.badge ? `<div class="course-badge badge-${course.badge.toLowerCase()}">${course.badge}</div>` : ''}
            <div class="course-image">
                ${course.image}
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-price-container">
                    <span class="course-price">R$ ${course.price.toFixed(2)}</span>
                    ${course.originalPrice > 0 ? `<span class="course-price-original">R$ ${course.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="course-btn" onclick="handleCourseClick(${course.id})">
                    ${course.sponsored ? 'Curso patrocinado' : 'Ver curso'}
                </button>
            </div>
        `;
        
        carouselTrack.appendChild(courseCard);
    });
    
    updateCarousel();
}

function updateCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const cardWidth = 315; // 300px + 15px gap
    const translateX = -currentCourseIndex * cardWidth;
    carouselTrack.style.transform = `translateX(${translateX}px)`;
    
    // Atualizar botões
    prevBtn.disabled = currentCourseIndex === 0;
    nextBtn.disabled = currentCourseIndex >= coursesData.length - Math.floor(carouselTrack.offsetWidth / cardWidth);
}

// Postagens
function initializePosts() {
    renderPosts();
}

function renderPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    
    const filteredPosts = currentFilter === 'all' 
        ? postsData 
        : postsData.filter(post => post.category === currentFilter);
    
    filteredPosts.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.style.animationDelay = `${index * 0.1}s`;
        postCard.innerHTML = `
            <div class="post-header">
                <div class="post-author-avatar">${post.avatar}</div>
                <div class="post-author-info">
                    <div class="post-author-name">${post.author}</div>
                    <div class="post-time">${post.time}</div>
                </div>
            </div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-description">${post.description}</p>
            </div>
            <div class="post-actions">
                <div class="post-action" onclick="handlePostAction(${post.id}, 'comments')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>${post.comments} comentários</span>
                </div>
                <div class="post-action" onclick="handlePostAction(${post.id}, 'interactions')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span>${post.interactions} interações</span>
                </div>
                ${post.hasBrandResponse ? `
                    <div class="post-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                        <span>Resposta da marca</span>
                    </div>
                ` : ''}
                <div class="post-action hype-action" onclick="handlePostAction(${post.id}, 'hypes')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span>${post.hypes} Hype${post.hypes !== 1 ? 's' : ''}</span>
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postCard);
    });
}

// Filtros
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover classe active de todos os tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active ao tab clicado
            tab.classList.add('active');
            
            // Atualizar filtro atual
            currentFilter = tab.dataset.filter;
            
            // Re-renderizar postagens
            renderPosts();
        });
    });
}

// Sidebar
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    sidebarToggle.addEventListener('click', () => {
        sidebarOpen = !sidebarOpen;
        sidebar.classList.toggle('open', sidebarOpen);
        
        // Animação do botão
        sidebarToggle.style.transform = sidebarOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    });
    
    // Fechar sidebar ao clicar fora (mobile)
    document.addEventListener('click', (e) => {
        if (sidebarOpen && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebarOpen = false;
            sidebar.classList.remove('open');
            sidebarToggle.style.transform = 'rotate(0deg)';
        }
    });
    
    // Navegação da sidebar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover active de todos os links
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            
            // Adicionar active ao link clicado
            link.parentElement.classList.add('active');
            
            // Fechar sidebar no mobile após clicar
            if (window.innerWidth <= 768) {
                sidebarOpen = false;
                sidebar.classList.remove('open');
                sidebarToggle.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// Busca
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchInput.value);
        }
    });
    
    // Busca em tempo real
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length > 2) {
            // Buscar cursos
            const results = courseStorage.searchCourses(query);
            coursesData = results;
            renderCourses();
            
            // Filtrar postagens por título ou descrição
            const filteredPosts = postsData.filter(post => 
                post.title.toLowerCase().includes(query) || 
                post.description.toLowerCase().includes(query)
            );
            
            // Aplicar filtro visual
            highlightSearchResults(query);
        } else {
            // Restaurar todos os cursos
            coursesData = courseStorage.getCourses();
            renderCourses();
            // Limpar destaques
            clearSearchHighlights();
        }
    });
}

function handleSearch(query) {
    if (query.trim()) {
        const results = courseStorage.searchCourses(query);
        coursesData = results;
        renderCourses();
        showNotification(`${results.length} curso(s) encontrado(s)`, 'info');
    }
}

function showCourseForm(courseId = null) {
    const course = courseId ? coursesData.find(c => c.id === courseId) : null;
    const isEdit = !!course;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
        overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <div style="
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            max-width: 600px;
            width: 100%;
            padding: 2rem;
            margin: 2rem 0;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="color: var(--text-primary);">${isEdit ? 'Editar Curso' : 'Novo Curso'}</h2>
                <button onclick="this.closest('[style*=fixed]').remove()" style="
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                ">✕</button>
            </div>
            
            <form id="courseForm" style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                    <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Título</label>
                    <input type="text" id="courseTitle" value="${course ? course.title : ''}" required style="
                        width: 100%;
                        padding: 0.75rem;
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        color: var(--text-primary);
                        font-size: 0.9rem;
                    ">
                </div>
                
                <div>
                    <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Descrição</label>
                    <textarea id="courseDescription" required style="
                        width: 100%;
                        padding: 0.75rem;
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        color: var(--text-primary);
                        font-size: 0.9rem;
                        min-height: 100px;
                        resize: vertical;
                    ">${course ? course.description : ''}</textarea>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Preço (R$)</label>
                        <input type="number" id="coursePrice" value="${course ? course.price : ''}" step="0.01" required style="
                            width: 100%;
                            padding: 0.75rem;
                            background: var(--bg-tertiary);
                            border: 1px solid var(--border-color);
                            border-radius: 8px;
                            color: var(--text-primary);
                            font-size: 0.9rem;
                        ">
                    </div>
                    
                    <div>
                        <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Preço Original (R$)</label>
                        <input type="number" id="courseOriginalPrice" value="${course ? course.originalPrice : ''}" step="0.01" style="
                            width: 100%;
                            padding: 0.75rem;
                            background: var(--bg-tertiary);
                            border: 1px solid var(--border-color);
                            border-radius: 8px;
                            color: var(--text-primary);
                            font-size: 0.9rem;
                        ">
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Emoji/Ícone</label>
                        <input type="text" id="courseImage" value="${course ? course.image : '📚'}" maxlength="2" required style="
                            width: 100%;
                            padding: 0.75rem;
                            background: var(--bg-tertiary);
                            border: 1px solid var(--border-color);
                            border-radius: 8px;
                            color: var(--text-primary);
                            font-size: 0.9rem;
                        ">
                    </div>
                    
                    <div>
                        <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Badge</label>
                        <input type="text" id="courseBadge" value="${course ? course.badge : ''}" style="
                            width: 100%;
                            padding: 0.75rem;
                            background: var(--bg-tertiary);
                            border: 1px solid var(--border-color);
                            border-radius: 8px;
                            color: var(--text-primary);
                            font-size: 0.9rem;
                        ">
                    </div>
                </div>
                
                <div>
                    <label style="color: var(--text-primary); font-weight: 600; display: block; margin-bottom: 0.5rem;">Categoria</label>
                    <select id="courseCategory" required style="
                        width: 100%;
                        padding: 0.75rem;
                        background: var(--bg-tertiary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        color: var(--text-primary);
                        font-size: 0.9rem;
                    ">
                        <option value="Frontend" ${course && course.category === 'Frontend' ? 'selected' : ''}>Frontend</option>
                        <option value="Backend" ${course && course.category === 'Backend' ? 'selected' : ''}>Backend</option>
                        <option value="Mobile" ${course && course.category === 'Mobile' ? 'selected' : ''}>Mobile</option>
                        <option value="Data Science" ${course && course.category === 'Data Science' ? 'selected' : ''}>Data Science</option>
                        <option value="DevOps" ${course && course.category === 'DevOps' ? 'selected' : ''}>DevOps</option>
                        <option value="IA" ${course && course.category === 'IA' ? 'selected' : ''}>IA & ML</option>
                        <option value="Design" ${course && course.category === 'Design' ? 'selected' : ''}>Design</option>
                        <option value="Geral" ${course && course.category === 'Geral' ? 'selected' : ''}>Geral</option>
                    </select>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="submit" style="
                        flex: 1;
                        padding: 1rem;
                        background: var(--gradient-orange);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-weight: 600;
                        font-size: 1rem;
                        cursor: pointer;
                    ">
                        ${isEdit ? '💾 Salvar Alterações' : '➕ Criar Curso'}
                    </button>
                    <button type="button" onclick="this.closest('[style*=fixed]').remove()" style="
                        padding: 1rem 2rem;
                        background: var(--bg-tertiary);
                        color: var(--text-primary);
                        border: 1px solid var(--border-color);
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                    ">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handler do formulário
    document.getElementById('courseForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const courseData = {
            title: document.getElementById('courseTitle').value,
            description: document.getElementById('courseDescription').value,
            price: parseFloat(document.getElementById('coursePrice').value),
            originalPrice: parseFloat(document.getElementById('courseOriginalPrice').value) || 0,
            image: document.getElementById('courseImage').value,
            badge: document.getElementById('courseBadge').value,
            category: document.getElementById('courseCategory').value,
            sponsored: true
        };
        
        if (isEdit) {
            // Atualizar curso existente
            const courses = courseStorage.getCourses();
            const index = courses.findIndex(c => c.id === courseId);
            if (index !== -1) {
                courses[index] = { ...courses[index], ...courseData };
                courseStorage.setCourses(courses);
                showNotification('Curso atualizado com sucesso! ✅', 'success');
            }
        } else {
            // Criar novo curso
            courseStorage.addCourse(courseData);
            showNotification('Curso criado com sucesso! 🎉', 'success');
        }
        
        coursesData = courseStorage.getCourses();
        renderCourses();
        modal.remove();
    });
}

function highlightSearchResults(query) {
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        const title = card.querySelector('.post-title');
        const description = card.querySelector('.post-description');
        
        if (title.textContent.toLowerCase().includes(query) || 
            description.textContent.toLowerCase().includes(query)) {
            card.style.borderColor = 'var(--accent-orange)';
            card.style.boxShadow = '0 4px 12px rgba(255, 102, 0, 0.3)';
        } else {
            card.style.opacity = '0.6';
        }
    });
}

function clearSearchHighlights() {
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        card.style.borderColor = '';
        card.style.boxShadow = '';
        card.style.opacity = '';
    });
}

// Interações
function initializeInteractions() {
    // Contadores dinâmicos
    animateCounters();
    
    // Efeitos de hover
    initializeHoverEffects();
}

function animateCounters() {
    const counters = document.querySelectorAll('.post-action span');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 50);
    });
}

function initializeHoverEffects() {
    // Efeito de hover nos cards de postagem
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efeito de hover nos cards de curso
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Handlers de eventos
function handleCourseClick(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    
    if (!course) return;
    
    // Mostrar modal com detalhes do curso
    showCourseModal(course);
}

function showCourseModal(course) {
    // Criar modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
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
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
                <div style="font-size: 3rem;">${course.image}</div>
                <button onclick="this.closest('[style*=fixed]').remove()" style="
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    transition: var(--transition-fast);
                " onmouseover="this.style.color='var(--accent-orange)'" onmouseout="this.style.color='var(--text-secondary)'">✕</button>
            </div>
            
            <h2 style="color: var(--text-primary); margin-bottom: 0.5rem;">${course.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">${course.description}</p>
            
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <span style="background: var(--accent-orange); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">
                    ${course.category}
                </span>
                ${course.badge ? `
                    <span style="background: #EC5252; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">
                        ${course.badge}
                    </span>
                ` : ''}
            </div>
            
            <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="color: var(--accent-orange); font-size: 1.5rem; font-weight: 700;">
                            R$ ${course.price.toFixed(2)}
                        </div>
                        ${course.originalPrice > 0 ? `
                            <div style="color: var(--text-muted); text-decoration: line-through;">
                                R$ ${course.originalPrice.toFixed(2)}
                            </div>
                        ` : ''}
                    </div>
                    ${course.originalPrice > 0 ? `
                        <div style="background: var(--accent-orange); color: white; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600;">
                            ${Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                <button onclick="enrollCourse(${course.id})" style="
                    flex: 1;
                    padding: 1rem;
                    background: var(--gradient-orange);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: var(--transition-fast);
                " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    Matricular-se
                </button>
                <button onclick="showShareModal(${course.id})" style="
                    padding: 1rem;
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition-fast);
                " onmouseover="this.style.borderColor='var(--accent-purple)'" onmouseout="this.style.borderColor='var(--border-color)'">
                    🔗
                </button>
            </div>
            
            <div style="display: flex; gap: 0.5rem;">
                <button onclick="editCourse(${course.id})" style="
                    flex: 1;
                    padding: 0.75rem;
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition-fast);
                " onmouseover="this.style.borderColor='var(--accent-purple)'" onmouseout="this.style.borderColor='var(--border-color)'">
                    ✏️ Editar
                </button>
                <button onclick="confirmDeleteCourse(${course.id})" style="
                    flex: 1;
                    padding: 0.75rem;
                    background: var(--bg-tertiary);
                    color: #EF4444;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition-fast);
                " onmouseover="this.style.borderColor='#EF4444'" onmouseout="this.style.borderColor='var(--border-color)'">
                    🗑️ Deletar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function enrollCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    showNotification(`Você se matriculou em: ${course.title}! 🎉`, 'success');
    document.querySelector('[style*="position: fixed"]').remove();
}

function editCourse(courseId) {
    document.querySelector('[style*="position: fixed"]').remove();
    showCourseForm(courseId);
}

function confirmDeleteCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    
    if (confirm(`Tem certeza que deseja deletar o curso "${course.title}"?`)) {
        courseStorage.deleteCourse(courseId);
        coursesData = courseStorage.getCourses();
        renderCourses();
        showNotification('Curso deletado com sucesso!', 'success');
        document.querySelector('[style*="position: fixed"]').remove();
    }
}

function handlePostAction(postId, action) {
    const post = postsData.find(p => p.id === postId);
    
    if (post) {
        // Simular incremento do contador
        const actionElement = event.currentTarget;
        const counter = actionElement.querySelector('span');
        const currentValue = parseInt(counter.textContent);
        
        // Efeito visual
        actionElement.style.transform = 'scale(1.2)';
        actionElement.style.color = 'var(--accent-orange)';
        
        setTimeout(() => {
            actionElement.style.transform = 'scale(1)';
            actionElement.style.color = '';
        }, 200);
        
        // Atualizar contador
        counter.textContent = currentValue + 1;
        
        // Atualizar dados
        post[action]++;
        
        console.log(`${action} incrementado para o post ${postId}: ${post[action]}`);
    }
}

// Utilitários
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsividade
function handleResize() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (window.innerWidth > 768) {
        sidebarOpen = false;
        sidebar.classList.remove('open');
        sidebarToggle.style.transform = 'rotate(0deg)';
    }
    
    // Re-calcular carrossel
    updateCarousel();
}

// Event listeners para responsividade
window.addEventListener('resize', debounce(handleResize, 250));

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Lazy loading para imagens (quando implementadas)
function observeImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading quando disponível
if ('IntersectionObserver' in window) {
    observeImages();
}

// Notificações (simulação)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--bg-secondary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-lg);
        z-index: 1002;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// CSS para animações de notificação
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
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
document.head.appendChild(notificationStyles);

// Exemplo de uso das notificações
setTimeout(() => {
    showNotification('Bem-vindo ao FullDev! 🚀', 'success');
}, 1000);

// ========== RF-37: TOAST NOTIFICATIONS ==========
function showToast(type, title, message, duration = 5000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toastId = `toast-${Date.now()}`;
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || 'ℹ'}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="closeToast('${toastId}')">✕</button>
    `;
    
    container.appendChild(toast);
    
    // Auto-remover após duração especificada
    setTimeout(() => {
        closeToast(toastId);
    }, duration);
}

function closeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }
}

// Validação de formulário com toast feedback
function validateFormInput(input, validationType) {
    const value = input.value.trim();
    let isValid = false;
    let errorMessage = '';
    
    switch(validationType) {
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            errorMessage = 'Por favor, insira um email válido';
            break;
        case 'required':
            isValid = value.length > 0;
            errorMessage = 'Este campo é obrigatório';
            break;
        case 'minLength':
            const minLength = input.getAttribute('data-min-length') || 3;
            isValid = value.length >= minLength;
            errorMessage = `Mínimo de ${minLength} caracteres`;
            break;
        case 'password':
            isValid = value.length >= 6;
            errorMessage = 'A senha deve ter no mínimo 6 caracteres';
            break;
        default:
            isValid = true;
    }
    
    // Aplicar classe de validação
    if (isValid) {
        input.classList.remove('error');
        input.classList.add('success');
        removeFieldError(input);
        return true;
    } else {
        input.classList.remove('success');
        input.classList.add('error');
        showFieldError(input, errorMessage);
        return false;
    }
}

function showFieldError(input, message) {
    removeFieldError(input);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
}

function removeFieldError(input) {
    const existingError = input.parentNode.querySelector('.form-error-message');
    if (existingError) {
        existingError.remove();
    }
}

// ========== RF-12/32: SHARE FUNCTIONALITY ==========
function showShareModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const shareUrl = `${window.location.origin}/curso/${courseId}`;
    const shareTitle = `Confira este curso: ${course.title}`;
    const shareText = `${course.title} - ${course.description}`;
    
    const modal = document.createElement('div');
    modal.className = 'share-modal-overlay';
    modal.innerHTML = `
        <div class="share-modal">
            <div class="share-modal-header">
                <h3>Compartilhar Curso</h3>
                <button class="share-modal-close" onclick="closeShareModal()">✕</button>
            </div>
            
            <div class="share-modal-body">
                <div class="share-course-info">
                    <div class="share-course-image">${course.image}</div>
                    <div class="share-course-details">
                        <div class="share-course-title">${course.title}</div>
                        <div class="share-course-price">R$ ${course.price.toFixed(2)}</div>
                    </div>
                </div>
                
                <div class="share-url-container">
                    <input type="text" class="share-url-input" value="${shareUrl}" readonly id="shareUrlInput">
                    <button class="share-copy-btn" onclick="copyShareUrl()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copiar
                    </button>
                </div>
                
                <div class="share-divider">
                    <span>ou compartilhe via</span>
                </div>
                
                <div class="share-social-buttons">
                    <button class="share-social-btn share-whatsapp" onclick="shareViaWhatsApp('${encodeURIComponent(shareUrl)}', '${encodeURIComponent(shareText)}')">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp
                    </button>
                    
                    <button class="share-social-btn share-twitter" onclick="shareViaTwitter('${encodeURIComponent(shareUrl)}', '${encodeURIComponent(shareTitle)}')">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Twitter
                    </button>
                    
                    <button class="share-social-btn share-linkedin" onclick="shareViaLinkedIn('${encodeURIComponent(shareUrl)}', '${encodeURIComponent(shareTitle)}')">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </button>
                    
                    <button class="share-social-btn share-facebook" onclick="shareViaFacebook('${encodeURIComponent(shareUrl)}')">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('share-modal-overlay')) {
            closeShareModal();
        }
    });
}

function closeShareModal() {
    const modal = document.querySelector('.share-modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => modal.remove(), 200);
    }
}

function copyShareUrl() {
    const input = document.getElementById('shareUrlInput');
    input.select();
    input.setSelectionRange(0, 99999);
    
    try {
        navigator.clipboard.writeText(input.value).then(() => {
            showToast('success', 'Link Copiado!', 'O link foi copiado para a área de transferência');
            
            // Feedback visual no botão
            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span style="color: #10B981;">✓ Copiado!</span>';
            btn.style.background = '#10B98120';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 2000);
        }).catch(() => {
            // Fallback para navegadores antigos
            document.execCommand('copy');
            showToast('success', 'Link Copiado!', 'O link foi copiado para a área de transferência');
        });
    } catch (err) {
        showToast('error', 'Erro', 'Não foi possível copiar o link');
    }
}

function shareViaWhatsApp(url, text) {
    const whatsappUrl = `https://wa.me/?text=${text}%20${url}`;
    window.open(whatsappUrl, '_blank', 'width=600,height=400');
    showToast('info', 'Compartilhando', 'Abrindo WhatsApp...');
}

function shareViaTwitter(url, text) {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    showToast('info', 'Compartilhando', 'Abrindo Twitter...');
}

function shareViaLinkedIn(url, title) {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
    showToast('info', 'Compartilhando', 'Abrindo LinkedIn...');
}

function shareViaFacebook(url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    showToast('info', 'Compartilhando', 'Abrindo Facebook...');
}

// Adicionar botão de compartilhar aos cards de curso
function addShareButtonsToCourses() {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const btn = card.querySelector('.course-btn');
        if (btn && !card.querySelector('.course-share-btn')) {
            const shareBtn = document.createElement('button');
            shareBtn.className = 'course-share-btn';
            shareBtn.innerHTML = '🔗 Compartilhar';
            shareBtn.style.cssText = `
                width: 100%;
                padding: 0.75rem;
                margin-top: 0.5rem;
                background: var(--bg-tertiary);
                color: var(--text-primary);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition-fast);
            `;
            shareBtn.onclick = (e) => {
                e.stopPropagation();
                const courseId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
                showShareModal(courseId);
            };
            btn.parentNode.appendChild(shareBtn);
        }
    });
}

// Simulação de dados em tempo real
setInterval(() => {
    // Simular novos comentários/likes ocasionalmente
    const randomPost = postsData[Math.floor(Math.random() * postsData.length)];
    const randomAction = ['comments', 'likes', 'hypes'][Math.floor(Math.random() * 3)];
    
    if (Math.random() < 0.1) { // 10% de chance
        randomPost[randomAction]++;
        renderPosts();
    }
}, 10000); // A cada 10 segundos

