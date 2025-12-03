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

# 4. Considerações Finais

- Todos os casos de teste foram estruturados seguindo o mesmo modelo do CT-01 entregue originalmente por Lorenzo.
- O plano cobre todas as telas já implementadas.
- Os responsáveis foram vinculados de acordo com suas contribuições reais no projeto.
- O vídeo do teste realizado pelo Lorenzo foi mantido e referenciado corretamente.
