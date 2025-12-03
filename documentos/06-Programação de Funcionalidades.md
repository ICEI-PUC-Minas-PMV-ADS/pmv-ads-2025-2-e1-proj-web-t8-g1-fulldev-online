# Programação de Funcionalidades

## Tela de Login  
**Responsável:** Luan  
**Requisitos associados:** RF-01, RF-12, RF-37  

### Descrição da Funcionalidade
A tela de login permite ao usuário acessar a plataforma utilizando e-mail e senha, além de oferecer suporte à recuperação de senha.

### Funcionalidades Implementadas
- Validação de campos obrigatórios (e-mail e senha).
- Feedback visual de erro em caso de credenciais inválidas.
- Redirecionamento para a recuperação de senha.
- Fluxo simples e objetivo, seguindo o padrão visual definido no Template da Aplicação.

### Artefatos da Funcionalidade
- `login.html`
- `style.css` (elementos visuais compartilhados)
- `script.js` (validação e redirecionamentos)

### Requisito Atendido
- **RF-01** – Permitir login com validação e fluxo de recuperação.

### Exemplo em imagem

![exemplo](image-1.png)

---

## Tela Home  
**Responsável:** Lorenzo  
**Requisitos associados:** RF-08, RF-16, RF-15, RF-17, RF-23  

### Descrição da Funcionalidade
A Home exibe o feed principal com:
- Carrossel de cursos patrocinados.
- Listagem de publicações com interações (comentários, hype, respostas de marca).
- Filtros por categoria.
- Busca inteligente.

### Funcionalidades Implementadas
- Renderização dinâmica de cursos e posts via JavaScript.
- Carrossel automático com autoplay e navegação manual.
- Sistema de filtros em tabs.
- Interações com posts (comentários, hype, interações).
- Efeitos de hover, contadores animados e simulação de dados em tempo real.
- Barra lateral com comunidades e redes sociais.

### Artefatos da Funcionalidade
- `index.html`
- `script.js`  
- `style.css`

### Requisitos Atendidos
- **RF-08** – Exibir catálogo de cursos com detalhes.  
- **RF-16** – Exibir feed inicial com conteúdos em destaque.  
- **RF-15** – Permitir interações como hype e comentários.  
- **RF-17** – Respostas oficiais de marcas.  
- **RF-23** – Busca global via barra de pesquisa.

### Exemplo em imagem
![Exemplo](image.png)

---

## Tela Minha Conta  
**Responsável:** Lucas Pedro  
**Requisitos associados:** RF-04, RF-33, RF-11  

### Descrição da Funcionalidade
Exibe as informações pessoais do usuário e suas indicações publicadas, permitindo acompanhar o histórico e navegar entre suas publicações.

### Funcionalidades Implementadas
- Exibição de avatar, nome e username.
- Menu lateral exclusivo para navegação da conta.
- Lista de indicações feitas pelo usuário.
- Card com ações de edição e exclusão (UI preparada, lógica futura).
- Integração com header, sidebar e busca padrão da aplicação.

### Artefatos da Funcionalidade
- `minha-conta.html`
- `style.css`
- `script.js` (funções comuns reutilizadas da Home)

### Requisitos Atendidos
- **RF-33** – Painel simples do usuário.  
- **RF-04** – Exibição e estrutura para edição futura de perfil.  
- **RF-11** – Histórico mínimo de interações (publicações feitas).

### Exemplo em imagem
![Exemplo](image-2.png)
---

## Tela de Publicação  
**Responsáveis:** João Pedro (implementação) + Jeniffer (ajustes e refinamentos)  
**Requisitos associados:** RF-13, RF-15, RF-17, RF-31  

### Descrição da Funcionalidade
Página dedicada à visualização completa de uma publicação específica.

### Funcionalidades Implementadas
- Exibição do conteúdo completo da publicação.
- Informações do autor, tempo de publicação e estatísticas.
- Estrutura para comentários futuros.
- Integração com fluxo da Home (listagem → clique → abertura da publicação).
- Indicadores visuais de hype e interações.

### Artefatos da Funcionalidade
- `publicacao.html`
- `style.css`
- `script.js` (reaproveitado para animações e interações)

### Requisitos Atendidos
- **RF-13** – Exibição de avaliação/publicação feita por um usuário.  
- **RF-15** – Interações (hype, comentários).  
- **RF-17** – Suporte visual para resposta oficial da marca.  
- **RF-31** – Estrutura para página detalhada, seguindo padrão UI.

### Exemplo em imagem
![Exemplo](image-3.png)
---

## Considerações Finais
Todas as funcionalidades foram desenvolvidas mantendo consistência visual, acessibilidade e alinhamento com os requisitos funcionais definidos na Especificação do Projeto.


