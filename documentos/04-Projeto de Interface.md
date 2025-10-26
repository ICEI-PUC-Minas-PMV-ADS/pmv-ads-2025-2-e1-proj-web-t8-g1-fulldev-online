
# Projeto de Interface

## User Flow

[Fluxo do usuário](img/User-flow.png)

[Figma](https://www.figma.com/design/A1q1K4D5VF3kulYk8YNvU3/Ui-Design-FullDev?node-id=201-3014&t=WyKG1adYeAIXQCY7-1)


### Acesso inicial: o usuário pode escolher entre:

- Fazer login como usuário comum.

- Fazer login como empresa.

- Navegar sem login (com acesso apenas para leitura/pesquisa).

- Criar conta (usuário ou empresa).

### Navegar sem login:

- Permite pesquisar e ler publicações.

- Não permite interagir (criar posts, comentar, curtir, hype).

- Login (usuário ou empresa):

### Tela de login com opção de recuperar senha via e-mail e código.

- Após login, acesso total às funcionalidades.

### Criação de conta:

- Usuário comum: cadastro com e-mail, CPF único e confirmação por e-mail.

- Empresa: exige CNPJ válido + e-mail corporativo vinculado + confirmação por e-mail.

### Usuário comum logado:

- Pode interagir livremente: postar, comentar, curtir, dar hype.

### Usuário empresa logado:

- Tem os mesmos direitos de um usuário comum.

- Além disso, pode responder oficialmente avaliações vinculadas à sua marca (com selo de verificação).

## 1. Protótipo
[Pagina inicial](img/ui-design/Page-home.png)
[Pagina de detalhes da publicação](img/ui-design/Page-home.png)
[Pagina de Login](img/ui-design/Login.png)
[Pagina de Login como empresa](img/ui-design/Exemplo-inicial-10.png)
[Pagina de Criação de conta](img/ui-design/Exemplo-inicial-5.png)
[Pagina de Recuperação de senha](img/ui-design/Exemplo-inicial-2.png)
[Variantes de login](img/ui-design/Exemplo-inicial-1.png)
[Variantes de login](img/ui-design/Exemplo-inicial-2.png)
[Variantes de login](img/ui-design/Exemplo-inicial-3.png)
[Variantes de login](img/ui-design/Exemplo-inicial-4.png)
[Variantes de login](img/ui-design/Exemplo-inicial-6.png)
[Variantes de login](img/ui-design/Exemplo-inicial-7.png)
[Variantes de login](img/ui-design/Exemplo-inicial-8.png)
[Variantes de login](img/ui-design/Exemplo-inicial-9.png)
[Variantes de login](img/ui-design/Exemplo-inicial-11.png)
[Variantes de login](img/ui-design/Exemplo-inicial-12.png)
[Variantes de login](img/ui-design/Exemplo-inicial-13.png)
[Variantes de login](img/ui-design/Exemplo-inicial-14.png)
[Variantes de login](img/ui-design/Exemplo-inicial-15.png)
[Variantes de login](img/ui-design/Exemplo-inicial-16.png)
[Variantes de login](img/ui-design/Exemplo-inicial-18.png)
[Variantes de login](img/ui-design/Exemplo-inicial-19.png)
[Variantes de login](img/ui-design/Exemplo-inicial-20.png)
[Variantes de login](img/ui-design/Exemplo-inicial-21.png)

[Figma](https://www.figma.com/design/A1q1K4D5VF3kulYk8YNvU3/Ui-Design-FullDev?node-id=201-3014&t=WyKG1adYeAIXQCY7-1)

## 2. Princípios de UI adotados  
- **Clareza**: priorizar a leitura das avaliações (tipografia legível e hierarquia visual).  
- **Credibilidade**: destacar selos de verificação, perfis institucionais e métricas.  
- **Gamificação leve**: uso do ícone de hype (🔥) para promover publicações.  
- **Inclusão**: suporte a tema claro/escuro, acessibilidade (WCAG 2.1 AA).  
- **Identidade FullDev**: paleta baseada nas imagens de referência (gradientes modernos, contraste alto).  

---

## 3. Paleta de Cores

- **Blue:**   
  - blue-50: `#E6F2FF`  
  - blue-100: `#B0D6FF`  
  - blue-200: `#8AC2FF`  
  - blue-300: `#54A7FF`  
  - blue-400: `#3395FF`  
  - blue-500: `#007BFF`  
  - blue-600: `#0070E8`  
  - blue-700: `#0057B5`  
  - blue-800: `#00448C`  
  - blue-900: `#00346B`  
- **Red:** 
  - red-50: `#F7EAE6`  
  - red-100: `#E7BEB0`  
  - red-200: `#DC9E8A`  
  - red-300: `#CB7254`  
  - red-400: `#C15733`  
  - red-500: `#B22D00`  
  - red-600: `#A22900`  
  - red-700: `#7E2000`  
  - red-800: `#621900`  
  - red-900: `#4B1300`  
- **Orange:** 
  - Light: `#FDF4E6`  
  - Light-hover: `#FDEED9`  
  - Light:active: `#FADBB0`  
  - Normal: `#EF8C00`  
  - Normal: hover: `#D77E00`  
  - Normal: active: `#BF7000`  
  - Dark: `#B36900`  
  - Dark:hover: `#8F5400`  
  - Dark:active: `#543100`  
  - Darker: `#543100`  

- **Neutros:**  
  - Black: `#000`  
  - White: `#fff`  
  - Neutral-50: `#E9E9E9`  
  - Neutral-100: `#BABABA`  
  - Neutral-200: `#989898`  
  - Neutral-300: `#696969`  
  - Neutral-400: `#4C4C4C`  
  - Neutral-500: `#1F1F1F`  
  - Neutral-600: `#1C1C1C`  
  - Neutral-700: `#161616`  
  - Neutral-800: `#111111`  
  - Neutral-900: `#0D0D0D`  
 
---

## 4. Componentes de Interface 

### 4.1 Tela Inicial  
- Barra de busca com filtros por stack.  
- Destaques de cursos patrocinados.  
- Lista de recomendações mais hypadas.  
- Card de curso: imagem + título + nota (estrelas) + hype.  

### 4.2 Detalhe da Publicação  
- Topo com imagem, título, autor e nota geral.  
- Corpo com justificativa completa e campos avaliados (didática, preço, usabilidade).  
- Resposta oficial da instituição (se houver).  
- Comentários da comunidade com likes/dislikes.  

