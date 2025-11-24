# Plano de Testes de Software
Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de teste | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CT-01: Adicionar Novo Curso no Catálogo** | RF-008: O sistema deve permitir ao usuário cadastrar novos itens (cursos) no catálogo. | Verificar se a funcionalidade de cadastro de novos cursos está operando corretamente, garantindo que o item seja adicionado ao catálogo com todos os dados informados. | 1. Acessar a página de cursos. <br> 2. Clicar em "Adicionar Curso". <br> 3. Preencher todos os campos do formulário modal. <br> 4. Clicar em "Criar Curso". | O modal deve ser fechado após a submissão. <br> Uma mensagem de sucesso ("Curso criado com sucesso!") deve ser exibida. <br> O novo card do curso deve aparecer na lista com as informações preenchidas. | Lorenzo |


https://github.com/user-attachments/assets/cda87494-db84-4c1b-a2fa-d8fedeb85a6c




# 📑 Registro de Testes – Tela: Painel do Usuário (RF-033)

## 🧪 Caso de Teste CT-02: Exibir Painel do Usuário com Indicações

| Campo | Descrição |
|------|-----------|
| **Caso de teste** | CT-02: Exibir Painel do Usuário |
| **Requisito associado** | **RF-033** — O sistema deve disponibilizar um painel simples do usuário, permitindo visualizar perfil e histórico de interações. |
| **Objetivo do teste** | Validar se a tela do painel do usuário exibe corretamente as informações do perfil e as indicações/publicações associadas ao usuário logado. |
| **Pré-condições** | O usuário deve estar cadastrado e autenticado no sistema. |
| **Responsável** | _[inserir responsável]_ |

---

## 🔍 Passos do Teste

1. Realizar login na plataforma com um usuário válido.  
2. Acessar o menu lateral e clicar em **“Minha conta”**.  
3. Verificar se o painel do usuário é exibido.  
4. Validar se os seguintes elementos aparecem corretamente:  
   - Avatar do usuário  
   - Nome e @username  
   - Botão “Minhas indicações” selecionado  
   - Lista de publicações/indicações feitas pelo usuário  
5. Verificar se os cards das indicações exibem título, autor, texto e data.

---

## ✅ Critérios de Êxito

- A tela deve carregar sem erros.  
- Avatar, nome e username devem corresponder ao usuário autenticado.  
- O botão **“Minhas indicações”** deve estar ativo.  
- Devem aparecer os cards das indicações do usuário, com título e conteúdo.  
- A navegação no painel deve ser fluida e sem falhas.

---

## 📎 Evidência da Execução

![tela-painel-do-usuario](<img width="1912" height="931" alt="image" src="https://github.com/user-attachments/assets/9ec848e8-8c97-4b67-adb3-4e6521bdc776" />
)

---
✅ Plano de Testes de Software – Descrição Adaptada ao Vídeo da RF-008

Os testes funcionais da aplicação incluem a validação da criação de novos cursos através do modal apresentado no vídeo. A seguir está o caso de teste atualizado conforme o fluxo real capturado nos frames.

🧪 CT-01: Adicionar Novo Curso no Catálogo (Adaptado ao Vídeo)
Campo	Descrição
Caso de Teste	CT-01 — Adicionar Novo Curso no Catálogo
Requisito associado	RF-008 — O sistema deve permitir ao administrador adicionar novos itens (cursos) ao catálogo.
Objetivo do teste	Validar se o administrador consegue abrir o modal “Novo Curso”, preencher corretamente as informações e registrar um novo curso, que deve aparecer na listagem após o salvamento.
Responsável	Lorenzo
🔍 Passos do Teste (Conforme o Vídeo)

Acessar a aplicação já logado como administrador (vídeo inicia na tela de catálogo).

Navegar até a página de Cursos, visível nos frames iniciais.

Clicar no botão “+ Adicionar Curso”, localizado no canto superior direito (identificado no frame_80).

Verificar a abertura do modal de Novo Curso, como visto nos frames 120 e 160.

Preencher os campos do formulário exibido no modal (título, descrição, carga horária, etc.).

Clicar no botão “Criar Curso” / “Salvar” dentro do modal.

Confirmar que o modal é fechado automaticamente após o envio.

Verificar se o novo curso aparece imediatamente na lista de cursos na página principal.

✅ Critérios de Êxito (Adaptados ao Fluxo Real)

O modal deve abrir corretamente ao clicar no botão “+ Adicionar Curso”.

O formulário deve aceitar todos os dados preenchidos.

Após clicar em Criar/Salvar, o modal deve fechar automaticamente.

Uma notificação de sucesso deve ser exibida (se presente na aplicação).

O novo curso deve aparecer na lista de cursos, como mostrado na parte final do vídeo.

Todas as informações exibidas no card do curso devem corresponder aos dados informados no modal.

📎 Evidência da Execução (com base nos frames do vídeo)

Frame_80: Usuário posiciona o cursor sobre o botão “+ Adicionar Curso”.

Frame_120: Modal de cadastro é exibido.

Frame_160: Formulário preenchido e pronto para envio.

Lista de cursos atualizada após o salvamento.

📑 Registro de Testes – Painel do Usuário (RF-033) – Mantido e Padronizado

A seguir está a versão padronizada e adaptada ao mesmo estilo de documentação do CT-01, mantendo tudo coerente e profissional.

🧪 Caso de Teste CT-02: Exibir Painel do Usuário
Campo	Descrição
Caso de teste	CT-02 — Exibir Painel do Usuário
Requisito associado	RF-033 — O sistema deve exibir um painel simples do usuário, com perfil e histórico de interações.
Objetivo	Validar se o painel exibe corretamente avatar, nome, username e lista de indicações do usuário autenticado.
Pré-condições	Usuário deve estar autenticado.
Responsável	[Inserir responsável]


