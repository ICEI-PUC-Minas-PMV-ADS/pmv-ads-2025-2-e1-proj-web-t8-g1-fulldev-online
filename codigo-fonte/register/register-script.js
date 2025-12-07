// ========== REGISTRO - JAVASCRIPT ==========

// Sistema de armazenamento de usuários
class UserStorage {
    constructor() {
        this.storageKey = 'fulldev_users';
        this.currentUserKey = 'fulldev_current_user';
        this.init();
    }

    init() {
        if (!this.getUsers()) {
            this.setUsers([]);
        }
    }

    getUsers() {
        try {
            const users = localStorage.getItem(this.storageKey);
            return users ? JSON.parse(users) : null;
        } catch (error) {
            console.error('Erro ao obter usuários:', error);
            return [];
        }
    }

    setUsers(users) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(users));
            return true;
        } catch (error) {
            console.error('Erro ao salvar usuários:', error);
            return false;
        }
    }

    addUser(userData) {
        try {
            const users = this.getUsers();
            const newUser = {
                id: Date.now(),
                firstName: userData.firstName,
                lastName: userData.lastName,
                cpf: userData.cpf,
                email: userData.email,
                password: userData.password, // Em produção, usar hash
                avatar: '',
                bio: '',
                location: '',
                stack: [],
                seniority: 'Iniciante',
                portfolio: '',
                linkedin: '',
                createdAt: new Date().toISOString(),
                preferences: {
                    theme: 'dark',
                    notifications: true
                }
            };
            
            users.push(newUser);
            this.setUsers(users);
            return newUser;
        } catch (error) {
            console.error('Erro ao adicionar usuário:', error);
            return null;
        }
    }

    getUserByEmail(email) {
        const users = this.getUsers();
        return users.find(u => u.email.toLowerCase() === email.toLowerCase());
    }

    getUserByCPF(cpf) {
        const users = this.getUsers();
        const cleanCPF = cpf.replace(/\D/g, '');
        return users.find(u => u.cpf.replace(/\D/g, '') === cleanCPF);
    }

    setCurrentUser(user) {
        try {
            localStorage.setItem(this.currentUserKey, JSON.stringify(user));
            return true;
        } catch (error) {
            console.error('Erro ao definir usuário atual:', error);
            return false;
        }
    }

    getCurrentUser() {
        try {
            const user = localStorage.getItem(this.currentUserKey);
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Erro ao obter usuário atual:', error);
            return null;
        }
    }
}

// Instância global
const userStorage = new UserStorage();

// Dados temporários do registro
let registrationData = {
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    password: ''
};

// ========== NAVEGAÇÃO ENTRE ETAPAS ==========

function showStep1() {
    document.getElementById('step1').classList.remove('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
}

function showStep2() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
    document.getElementById('step3').classList.add('hidden');
}

function showStep3() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
}

// ========== VALIDAÇÕES ==========

function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Validação dos dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

// ========== FEEDBACK VISUAL ==========

function showFieldError(input, message) {
    input.classList.add('error');
    input.classList.remove('success');
    
    const existingError = input.parentNode.querySelector('.form-error-message');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.innerHTML = `⚠️ ${message}`;
    input.parentNode.appendChild(errorDiv);
}

function showFieldSuccess(input) {
    input.classList.remove('error');
    input.classList.add('success');
    
    const existingError = input.parentNode.querySelector('.form-error-message');
    if (existingError) {
        existingError.remove();
    }
}

function clearFieldError(input) {
    input.classList.remove('error', 'success');
    const existingError = input.parentNode.querySelector('.form-error-message');
    if (existingError) {
        existingError.remove();
    }
}

function showToast(type, title, message) {
    // Reutilizar sistema de toast da home se disponível
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#EF4444' : '#10B981'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;
    toast.innerHTML = `<strong>${title}</strong><br>${message}`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========== REGISTRO COM REDES SOCIAIS ==========

function registerWithGoogle() {
    showToast('info', 'Google OAuth', 'Funcionalidade em desenvolvimento. Use o cadastro por email.');
}

function registerWithFacebook() {
    showToast('info', 'Facebook OAuth', 'Funcionalidade em desenvolvimento. Use o cadastro por email.');
}

// ========== ETAPA 2: DADOS PESSOAIS ==========

document.addEventListener('DOMContentLoaded', function() {
    const personalDetailsForm = document.getElementById('personalDetailsForm');
    const cpfInput = document.getElementById('cpf');
    
    // Máscara de CPF
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            e.target.value = formatCPF(e.target.value);
        });
        
        cpfInput.addEventListener('blur', function(e) {
            const cpf = e.target.value;
            if (cpf) {
                if (!validateCPF(cpf)) {
                    showFieldError(cpfInput, 'CPF inválido');
                } else if (userStorage.getUserByCPF(cpf)) {
                    showFieldError(cpfInput, 'CPF já cadastrado');
                } else {
                    showFieldSuccess(cpfInput);
                }
            }
        });
    }
    
    // Validação do formulário de dados pessoais
    if (personalDetailsForm) {
        personalDetailsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const cpf = document.getElementById('cpf').value;
            
            let isValid = true;
            
            // Validar nome
            if (!firstName || firstName.length < 2) {
                showFieldError(document.getElementById('firstName'), 'Nome deve ter no mínimo 2 caracteres');
                isValid = false;
            } else {
                showFieldSuccess(document.getElementById('firstName'));
            }
            
            // Validar sobrenome
            if (!lastName || lastName.length < 2) {
                showFieldError(document.getElementById('lastName'), 'Sobrenome deve ter no mínimo 2 caracteres');
                isValid = false;
            } else {
                showFieldSuccess(document.getElementById('lastName'));
            }
            
            // Validar CPF
            if (!validateCPF(cpf)) {
                showFieldError(document.getElementById('cpf'), 'CPF inválido');
                isValid = false;
            } else if (userStorage.getUserByCPF(cpf)) {
                showFieldError(document.getElementById('cpf'), 'CPF já cadastrado');
                isValid = false;
            } else {
                showFieldSuccess(document.getElementById('cpf'));
            }
            
            if (isValid) {
                registrationData.firstName = firstName;
                registrationData.lastName = lastName;
                registrationData.cpf = cpf;
                
                showStep3();
            }
        });
    }
});

// ========== ETAPA 3: COMPLETAR CADASTRO ==========

document.addEventListener('DOMContentLoaded', function() {
    const completeRegistrationForm = document.getElementById('completeRegistrationForm');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const passwordInput = document.getElementById('password');
    
    // Validação de email
    if (emailInput) {
        emailInput.addEventListener('blur', function(e) {
            const email = e.target.value.trim();
            if (email) {
                if (!validateEmail(email)) {
                    showFieldError(emailInput, 'Email inválido');
                } else if (userStorage.getUserByEmail(email)) {
                    showFieldError(emailInput, 'Email já cadastrado');
                } else {
                    showFieldSuccess(emailInput);
                }
            }
        });
    }
    
    // Validação de confirmação de email
    if (confirmEmailInput) {
        confirmEmailInput.addEventListener('blur', function(e) {
            const email = emailInput.value.trim();
            const confirmEmail = e.target.value.trim();
            
            if (confirmEmail) {
                if (email !== confirmEmail) {
                    showFieldError(confirmEmailInput, 'Os emails não coincidem');
                } else {
                    showFieldSuccess(confirmEmailInput);
                }
            }
        });
    }
    
    // Validação de senha
    if (passwordInput) {
        passwordInput.addEventListener('blur', function(e) {
            const password = e.target.value;
            if (password) {
                if (!validatePassword(password)) {
                    showFieldError(passwordInput, 'Senha deve ter no mínimo 6 caracteres');
                } else {
                    showFieldSuccess(passwordInput);
                }
            }
        });
    }
    
    // Submissão do formulário final
    if (completeRegistrationForm) {
        completeRegistrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const confirmEmail = confirmEmailInput.value.trim();
            const password = passwordInput.value;
            
            let isValid = true;
            
            // Validar email
            if (!validateEmail(email)) {
                showFieldError(emailInput, 'Email inválido');
                isValid = false;
            } else if (userStorage.getUserByEmail(email)) {
                showFieldError(emailInput, 'Email já cadastrado');
                isValid = false;
            } else {
                showFieldSuccess(emailInput);
            }
            
            // Validar confirmação de email
            if (email !== confirmEmail) {
                showFieldError(confirmEmailInput, 'Os emails não coincidem');
                isValid = false;
            } else {
                showFieldSuccess(confirmEmailInput);
            }
            
            // Validar senha
            if (!validatePassword(password)) {
                showFieldError(passwordInput, 'Senha deve ter no mínimo 6 caracteres');
                isValid = false;
            } else {
                showFieldSuccess(passwordInput);
            }
            
            if (isValid) {
                registrationData.email = email;
                registrationData.password = password;
                
                // Criar usuário
                const submitBtn = e.target.querySelector('button[type="submit"]');
                submitBtn.classList.add('loading');
                
                setTimeout(() => {
                    const newUser = userStorage.addUser(registrationData);
                    
                    if (newUser) {
                        userStorage.setCurrentUser(newUser);
                        showSuccessModal();
                    } else {
                        showToast('error', 'Erro', 'Não foi possível criar a conta. Tente novamente.');
                        submitBtn.classList.remove('loading');
                    }
                }, 1000);
            }
        });
    }
});

// ========== MODAL DE SUCESSO ==========

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        window.location.href = '../home/home-com-localstorage/index.html';
    }, 3000);
}

// ========== ANIMAÇÕES CSS ==========

const style = document.createElement('style');
style.textContent = `
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

console.log('✅ Sistema de registro carregado com sucesso!');
