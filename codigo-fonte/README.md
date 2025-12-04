# Código-Fonte - FullDev Online

Esta pasta contém todo o código-fonte da aplicação FullDev Online.

## 🚀 Execução Rápida

**Página Principal**: Abra `home/index.html` no navegador

## 📂 Estrutura de Arquivos

```
codigo-fonte/
├── 🏠 home/                    # Página principal
│   ├── index.html             # Interface principal da aplicação
│   ├── script.js              # Funcionalidades JavaScript
│   └── home-com-localstorage/ # Versão com persistência local
│       ├── index.html         # Página com LocalStorage
│       ├── script.js          # Scripts com persistência
│       └── style.css          # Estilos específicos
│
├── 🔐 login/                   # Sistema de autenticação
│   └── login.html             # Página de login de usuários
│
├── 👤 minha-conta/             # Perfil do usuário
│   └── minha-conta.html       # Página de perfil e configurações
│
├── 📝 publicacao/              # Sistema de publicações
│   └── publicacao.html        # Criação e visualização de posts
│
├── 🎨 style/                   # Estilos globais
│   └── style.css              # Folha de estilos principal
│
└── 📎 assets/                  # Recursos estáticos
    └── imgs/                  # Imagens da aplicação
```

## 🛠️ Tecnologias

- **HTML5** - Estruturação semântica das páginas
- **CSS3** - Estilização responsiva e moderna
- **JavaScript (ES6+)** - Funcionalidades interativas
- **Google Fonts** - Tipografia (Inter)
- **LocalStorage API** - Persistência local de dados

## 🌐 Como Executar

### Método 1: Abertura Direta
```bash
# Abra diretamente no navegador
start home/index.html  # Windows
open home/index.html   # macOS
```

### Método 2: Servidor Local (Recomendado)
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### Método 3: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique direito em `home/index.html`
3. Selecione "Open with Live Server"

## 📱 Páginas da Aplicação

### 🏠 Página Principal (`home/index.html`)
- Interface principal da plataforma
- Sistema de busca e filtros
- Cards de cursos e avaliações
- Navegação principal

### 🔐 Login (`login/login.html`)
- Formulário de autenticação
- Validação de credenciais
- Redirecionamento pós-login

### 👤 Minha Conta (`minha-conta/minha-conta.html`)
- Perfil do usuário
- Configurações de conta
- Histórico de atividades

### 📝 Publicações (`publicacao/publicacao.html`)
- Criação de novos posts
- Avaliação de cursos
- Sistema de comentários

## 🎯 Funcionalidades Implementadas

- [x] **Interface Responsiva** - Adaptável a mobile e desktop
- [x] **Sistema de Login** - Autenticação básica
- [x] **Navegação Fluida** - Links entre páginas
- [x] **Persistência Local** - Dados salvos no LocalStorage
- [x] **Design Moderno** - UI/UX otimizada
- [x] **Avaliação de Cursos** - Sistema básico de rating

## 🔧 Configuração de Desenvolvimento

### Estrutura Recomendada:
1. **Editor**: VS Code com extensões:
   - Live Server
   - HTML CSS Support
   - JavaScript (ES6) snippets
   - Prettier

2. **Navegador**: Chrome DevTools para debug

3. **Versionamento**: Git com commits organizados por feature

## 📋 Padrões de Código

### HTML
- Uso de elementos semânticos
- Atributos `alt` em imagens
- Estrutura acessível

### CSS
- Mobile-first approach
- Variáveis CSS para cores e tipografia
- Flexbox e Grid para layouts

### JavaScript
- ES6+ features
- Funções puras quando possível
- Nomenclatura clara e descritiva

## 🚨 Troubleshooting

### Problemas Comuns:

1. **JavaScript não funciona**
   - Use servidor local (não abra arquivo diretamente)
   - Verifique console do navegador (F12)

2. **Estilos não carregam**
   - Verifique caminhos dos arquivos CSS
   - Confirme estrutura de pastas

3. **Imagens não aparecem**
   - Verifique pasta `assets/imgs/`
   - Confirme caminhos relativos

## 📞 Suporte

Para dúvidas técnicas:
1. Verifique console do navegador
2. Confirme estrutura de arquivos
3. Teste em servidor local
4. Consulte documentação do projeto

---

**Projeto**: FullDev Online  
**Instituição**: PUC Minas - ADS  
**Data**: Dezembro 2024
