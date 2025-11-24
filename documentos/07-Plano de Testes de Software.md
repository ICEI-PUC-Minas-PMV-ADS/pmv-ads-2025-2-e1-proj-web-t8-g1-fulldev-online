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


