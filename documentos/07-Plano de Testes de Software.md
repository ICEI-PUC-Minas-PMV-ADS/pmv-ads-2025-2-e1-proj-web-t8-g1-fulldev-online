# Plano de Testes de Software

Este documento apresenta o conjunto de testes funcionais definidos para validar as telas implementadas no projeto (Login, Home, Minha Conta e Publicação).  
Todos os testes seguem a mesma estrutura padrão utilizada no CT-01 original, garantindo consistência, rastreabilidade e alinhamento com a **Especificação do Projeto**.

---

# 1. Objetivo dos Testes

O objetivo do plano de testes é:

- Verificar o correto funcionamento das funcionalidades essenciais implementadas no MVP.
- Garantir que cada tela entregue atenda aos requisitos associados.
- Validar fluxos e interações essenciais do usuário.
- Minimizar falhas durante o uso real da aplicação.
- Documentar evidências para auditoria e acompanhamento.

---

# 2. Escopo dos Testes

Serão avaliadas as seguintes áreas:

- Autenticação do usuário (Login)
- Renderização dinâmica de conteúdo (Home)
- Interações com postagens (Home/Publicação)
- Visualização de informações pessoais (Minha Conta)
- Abertura de publicações específicas (Publicação)

Os testes foram elaborados considerando exclusivamente as telas já implementadas.

---

# 3. Casos de Teste

A seguir, estão listados todos os casos de teste padronizados.

---

## **CT-01 – Adicionar Novo Curso ao Catálogo**  

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-008 |
| Objetivo | Validar a criação de um novo curso no catálogo. |
| Passos | 1. Acessar página de cursos. <br>2. Clicar em “Adicionar Curso”. <br>3. Preencher formulário. <br>4. Confirmar criação. |
| Critérios de êxito | Fechamento do modal, exibição da mensagem “Curso criado com sucesso!”, curso aparecendo na lista. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | <a href="https://github.com/user-attachments/assets/cda87494-db84-4c1b-a2fa-d8fedeb85a6c">Tela de adição</a>|

---

## **CT-02 – Login de Usuário**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-01, RF-12 |
| Objetivo | Confirmar que o usuário consegue realizar login. |
| Passos | 1. Acessar tela de login. <br>2. Inserir e-mail. <br>3. Inserir senha. <br>4. Clicar em "Entrar". |
| Critérios de êxito | Redirecionamento para Home sem erros. |
| Responsável | **Luan** |
| Evidência (vídeo) | <a href="video/gravacao login.mp4">Tela de login</a> |

---

## **CT-03 – Recuperação de Senha**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-01, RF-37 |
| Objetivo | Validar o envio da solicitação de recuperação de senha. |
| Passos | 1. Acessar tela de login. <br>2. Clicar em “Esqueci minha senha”. <br>3. Informar e-mail cadastrado. <br>4. Submeter solicitação. |
| Critérios de êxito | Exibição de mensagem de envio de recuperação. |
| Responsável | **Luan** |
| Evidência (vídeo) | <a href="video/gravacao login.mp4">Tela de login</a> |

---

## **CT-04 – Renderização do Feed da Home**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-08, RF-16 |
| Objetivo | Garantir que cursos e postagens carregam corretamente. |
| Passos | 1. Acessar Home. <br>2. Validar carrossel. <br>3. Verificar lista de posts. <br>4. Testar filtros. |
| Critérios de êxito | Conteúdo exibido corretamente conforme filtros. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | <a href="video/renderizacao home.mp4">Tela home</a> |

---

## **CT-05 – Interações com Postagens**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-15, RF-17 |
| Objetivo | Validar incremento dos contadores e efeitos visuais. |
| Passos | 1. Acessar Home. <br>2. Selecionar post. <br>3. Clicar nos botões de interação. |
| Critérios de êxito | Contador incrementa + efeito visual aplicado. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | <a href="video/renderizacao home.mp4">Tela home</a> |

---

## **CT-06 – Exibição da Página “Minha Conta”**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-33 |
| Objetivo | Verificar se as indicações do usuário são renderizadas. |
| Passos | 1. Acessar “Minha Conta”. <br>2. Validar lista de indicações. <br>3. Clicar em uma indicação. |
| Critérios de êxito | Cards exibidos + fluxo de navegação funcional. |
| Responsável | **Lucas Pedro** |
| Evidência (vídeo) | <a href="video/minha conta.mp4">Tela de minha conta</a> |

---

## **CT-07 – Acesso à Página de Publicação**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-13, RF-31 |
| Objetivo | Validar exibição da publicação completa. |
| Passos | 1. Acessar Home ou Minha Conta. <br>2. Clicar em uma publicação. |
| Critérios de êxito | Conteúdo completo exibido (autor, descrição, métricas). |
| Responsável | **João Pedro / Jeniffer** |
| Evidência (vídeo) | <a href="video/publi.mp4">Tela de postagem</a> |


---
## **CT-08 – Cadastro de Novo Usuário (3 Etapas)**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-01, RF-02 |
| Objetivo | Validar o processo completo de cadastro em 3 etapas com validação de CPF. |
| Passos | 1. Acessar tela de cadastro. <br>2. Selecionar método de cadastro (e-mail). <br>3. Informar CPF válido. <br>4. Validar formatação e unicidade do CPF. <br>5. Informar e-mail e confirmação. <br>6. Criar senha. <br>7. Aceitar termos de uso. <br>8. Confirmar cadastro. |
| Critérios de êxito | Modal de sucesso exibido, redirecionamento para login, dados salvos no LocalStorage. |
| Responsável | **Luan** |
| Evidência (vídeo) | [Tela de cadastro] |

---

## **CT-09 – Validação de CPF Inválido**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-02, RF-37 |
| Objetivo | Verificar se o sistema rejeita CPFs inválidos ou duplicados. |
| Passos | 1. Acessar tela de cadastro. <br>2. Avançar para etapa 2. <br>3. Informar CPF inválido (ex: 111.111.111-11). <br>4. Tentar avançar. |
| Critérios de êxito | Mensagem de erro exibida, campo marcado em vermelho, impossibilidade de avançar. |
| Responsável | **Luan** |
| Evidência (vídeo) | [Tela de cadastro - validação] |

---

## **CT-10 – Compartilhamento de Curso via WhatsApp**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-12, RF-32 |
| Objetivo | Validar abertura do modal de compartilhamento e envio via WhatsApp. |
| Passos | 1. Acessar Home. <br>2. Localizar um curso. <br>3. Clicar no botão de compartilhar. <br>4. Selecionar WhatsApp no modal. <br>5. Verificar abertura do WhatsApp Web/App. |
| Critérios de êxito | Modal aberto corretamente, link gerado, WhatsApp aberto com mensagem pré-formatada. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | [Sistema de compartilhamento] |

---

## **CT-11 – Cópia de Link de Compartilhamento**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-32, RF-37 |
| Objetivo | Verificar se o botão "Copiar Link" funciona corretamente. |
| Passos | 1. Abrir modal de compartilhamento. <br>2. Clicar em "Copiar Link". <br>3. Verificar toast de confirmação. <br>4. Colar link em navegador. |
| Critérios de êxito | Link copiado para área de transferência, toast "Link copiado!" exibido, link funcional ao colar. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | [Sistema de compartilhamento] |

---

## **CT-12 – Exibição de Toast de Sucesso**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-37 |
| Objetivo | Validar exibição e comportamento do toast de sucesso. |
| Passos | 1. Realizar ação que gere toast (ex: copiar link). <br>2. Observar animação de entrada. <br>3. Aguardar auto-close (3-5s). <br>4. Verificar animação de saída. |
| Critérios de êxito | Toast exibido com ícone e cores corretas, auto-close funcionando, animações suaves. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | [Sistema de notificações] |

---

## **CT-13 – Exibição de Toast de Erro**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-37 |
| Objetivo | Validar exibição de toast de erro em situações de falha. |
| Passos | 1. Realizar ação que gere erro (ex: CPF inválido). <br>2. Observar toast vermelho. <br>3. Verificar mensagem descritiva. |
| Critérios de êxito | Toast de erro exibido com ícone apropriado, mensagem clara, cor vermelha aplicada. |
| Responsável | **Luan** |
| Evidência (vídeo) | [Sistema de notificações - erro] |

---

## **CT-14 – Navegação para Página de Eventos**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-22 |
| Objetivo | Verificar carregamento e exibição da página de eventos. |
| Passos | 1. Acessar Home. <br>2. Clicar no link "Eventos" (menu ou footer). <br>3. Validar carregamento da página. <br>4. Verificar grid de cards de eventos. |
| Critérios de êxito | Página carrega sem erros, cards exibidos com informações corretas (data, local, tipo). |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Página de eventos] |

---

## **CT-15 – Filtro de Eventos por Tipo**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-22, RF-23 |
| Objetivo | Validar funcionamento dos filtros de eventos. |
| Passos | 1. Acessar página de eventos. <br>2. Selecionar filtro "Online". <br>3. Verificar atualização da lista. <br>4. Testar outros filtros (Presencial, Híbrido). |
| Critérios de êxito | Lista atualiza dinamicamente conforme filtro selecionado, eventos exibidos correspondem ao tipo escolhido. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Filtros de eventos] |

---

## **CT-16 – Acesso à Página "Sobre Nós"**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-26 |
| Objetivo | Verificar carregamento e conteúdo da página institucional. |
| Passos | 1. Acessar footer da Home. <br>2. Clicar em "Sobre". <br>3. Validar seções (história, equipe, estatísticas). <br>4. Verificar contador animado. |
| Critérios de êxito | Página carrega completa, contador anima corretamente, grid de equipe exibido. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Página sobre] |

---

## **CT-17 – Navegação no Sumário dos Termos de Uso**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-26 |
| Objetivo | Validar funcionalidade do sumário interativo. |
| Passos | 1. Acessar página "Termos de Uso". <br>2. Clicar em item do sumário. <br>3. Verificar scroll suave até seção. <br>4. Testar múltiplos itens. |
| Critérios de êxito | Scroll suave funciona, página navega para seção correta, sem quebras visuais. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Termos de uso] |

---

## **CT-18 – Impressão dos Termos de Uso**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-26 |
| Objetivo | Verificar funcionalidade do botão de impressão. |
| Passos | 1. Acessar página "Termos de Uso". <br>2. Clicar no botão "Imprimir". <br>3. Verificar abertura do diálogo de impressão. |
| Critérios de êxito | Diálogo de impressão do navegador abre corretamente, documento formatado para impressão. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Termos de uso - impressão] |

---

## **CT-19 – Modal de Preferências de Cookies**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-05, RF-26 |
| Objetivo | Validar abertura e funcionamento do modal de cookies. |
| Passos | 1. Acessar página "Privacidade". <br>2. Clicar em "Personalizar Cookies". <br>3. Alterar preferências. <br>4. Salvar configurações. |
| Critérios de êxito | Modal abre e fecha corretamente, preferências salvas no LocalStorage, toast de confirmação exibido. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Modal de cookies] |

---

## **CT-20 – Formulário de Solicitação de Dados (LGPD)**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-27 |
| Objetivo | Verificar preenchimento e envio do formulário de portabilidade. |
| Passos | 1. Acessar página "Privacidade". <br>2. Localizar seção "Seus Direitos". <br>3. Preencher formulário de solicitação. <br>4. Enviar solicitação. |
| Critérios de êxito | Formulário valida campos obrigatórios, mensagem de confirmação exibida, dados simulam envio. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Formulário LGPD] |

---

## **CT-21 – Formulário de Exclusão de Conta**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-27 |
| Objetivo | Validar fluxo de exclusão de conta. |
| Passos | 1. Acessar página "Privacidade". <br>2. Localizar formulário de exclusão. <br>3. Preencher motivo da exclusão. <br>4. Confirmar exclusão. |
| Critérios de êxito | Modal de confirmação exibido, toast de sucesso após confirmação, estrutura preparada para exclusão futura. |
| Responsável | **Equipe** |
| Evidência (vídeo) | [Exclusão de conta] |

---

## **CT-22 – Responsividade Mobile (Cadastro)**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RNF-02 |
| Objetivo | Verificar layout responsivo da tela de cadastro em dispositivos móveis. |
| Passos | 1. Acessar tela de cadastro em resolução 375px. <br>2. Navegar pelas 3 etapas. <br>3. Verificar campos e botões. |
| Critérios de êxito | Layout adapta corretamente, campos acessíveis, sem quebras visuais, botões clicáveis. |
| Responsável | **Luan** |
| Evidência (vídeo) | [Responsividade mobile] |

---

## **CT-23 – Empilhamento de Múltiplos Toasts**

| Campo | Descrição |
|------|-----------|
| Requisitos associados | RF-37 |
| Objetivo | Verificar comportamento com múltiplas notificações simultâneas. |
| Passos | 1. Gerar múltiplas ações que disparam toasts. <br>2. Observar empilhamento vertical. <br>3. Verificar auto-close individual. |
| Critérios de êxito | Toasts empilham sem sobreposição, cada um fecha independentemente, sem travamentos. |
| Responsável | **Lorenzo** |
| Evidência (vídeo) | [Múltiplos toasts] |

---

# 4. Considerações Finais

- Todos os casos de teste foram estruturados seguindo o mesmo modelo do CT-01 entregue originalmente por Lorenzo.
- O plano agora cobre **todas as telas implementadas**, incluindo as novas funcionalidades:
  - Sistema de cadastro em 3 etapas (RF-01, RF-02)
  - Validação de CPF com algoritmo mod-11 (RF-02)
  - Sistema de compartilhamento social (RF-12, RF-32)
  - Toast notifications (RF-37)
  - Página de eventos (RF-22)
  - Páginas institucionais (RF-26)
  - Formulários LGPD (RF-27)
  - Modal de cookies (RF-05)

# 4. Considerações Finais

- Todos os casos de teste foram estruturados seguindo o mesmo modelo do CT-01 entregue originalmente por Lorenzo.
- O plano cobre todas as telas já implementadas.
- Os responsáveis foram vinculados de acordo com suas contribuições reais no projeto.
- O vídeo do teste realizado pelo Lorenzo foi mantido e referenciado corretamente.
