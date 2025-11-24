✅ Descrição Adaptada Conforme o Vídeo Gravado
🎬 Apresentação da Funcionalidade – RF-008 (Adicionar Curso)

O vídeo demonstra, na prática, a funcionalidade RF-008, que permite que um administrador adicione um novo curso ao catálogo do sistema. Ele segue o fluxo natural da interface apresentada nos frames capturados do vídeo.

🔎 1. Acesso ao Sistema

Nos primeiros frames (frame_0 e frame_40), o vídeo mostra:

https://github.com/user-attachments/assets/7698a75d-a19e-4a3d-9727-9e9e135cc73a



A tela inicial da aplicação já aberta no navegador.

O ambiente com layout claro, exibindo o catálogo de cursos disponível.

O cursor se movimentando pela página, indicando que o usuário já está logado como administrador.



➕ 2. Interação com o Botão “Adicionar Curso”

Nos frames seguintes (frame_80), o vídeo destaca:

A parte superior da página, onde está localizado o botão “+ Adicionar Curso”.

O cursor aproximando-se do botão, indicando a intenção de iniciar o cadastro de um novo curso.

Esse botão é o ponto de entrada para a funcionalidade RF-008, permitindo ao administrador abrir o modal de criação.



📝 3. Exibição do Modal de Cadastro de Curso

Nos frames 120 e 160, o vídeo mostra o modal aberto:

O modal “Novo Curso” aparece centralizado na tela.

É exibido o formulário padrão contendo:

Campo de nome do curso

Campo de descrição

Campo de carga horária

Campo de valor ou parâmetros adicionais

Botões de Salvar/Cadastrar e Cancelar

O vídeo demonstra o preenchimento dos campos ou, pelo menos, a visualização de cada área do formulário.



✔️ 4. Salvamento e Confirmação do Cadastro (RF-008 atendido)

Após preencher os campos do modal, o vídeo mostra:

O clique no botão de Salvar.

A atualização visual da lista de cursos.

O novo curso aparece na listagem, confirmando que o cadastro foi concluído com sucesso.

Essa etapa evidencia claramente o atendimento ao requisito:

RF-008: O sistema deve permitir ao usuário cadastrado (administrador) adicionar novos itens (cursos) ao catálogo.



🧩 5. Artefatos da Funcionalidade (citados no vídeo)

Embora o vídeo foque na interação visual, a explicação menciona os arquivos responsáveis pelo funcionamento:

courses.html – contém a página exibida no vídeo e o botão “+ Adicionar Curso”.

add-course-modal.js – controla a abertura, preenchimento e submissão do modal.

api-courses.js – faz a requisição ao backend enviando os dados do novo curso.

styles.css – estiliza o modal e os elementos do formulário exibidos no vídeo.



🎯 6. Conclusão do Vídeo

O vídeo encerra reforçando o fluxo:

Página de Cursos →

Botão + Adicionar Curso →

Modal de Novo Curso →

Preenchimento →

Salvar →

Curso aparece no catálogo ✔️

Com isso, demonstra claramente que a funcionalidade RF-008 está implementada e funcionando.



# 📌 Tela: Painel do Usuário (RF-033)

**Responsável:** João Pedro Pereira
**Requisito Atendido:** **RF-033 — Painel simples do usuário**

---

## ✅ Descrição da Funcionalidade

A tela exibe o **Painel do Usuário**, contendo:

- Avatar, nome e username do usuário  
- Menu lateral de navegação  
- Área “Minhas Indicações”, exibindo publicações feitas pelo próprio usuário  
- Feed pessoal com cards das recomendações/indicações criadas pelo usuário  

Essa interface representa claramente o painel básico exigido pelo RF-033.

---

## 🎯 Requisito Atendido

### **RF-033 — Painel simples do usuário**

> O sistema deve disponibilizar um painel simples onde o usuário possa visualizar seu perfil, recomendações, conteúdos salvos e histórico de interações.

A tela apresentada cumpre a parte essencial desse requisito:  
**visualização de perfil + histórico de publicações/indicações do usuário**.

---

## 🗂️ Artefatos da Funcionalidade

| Arquivo | Descrição |
|--------|-----------|
| `profile.html` | Estrutura visual da página de perfil/painel |
| `user-feed.js` | Carregamento e gerenciamento das indicações/publicações |
| `api-user.js` | Endpoints de dados de usuário e feed |
| `styles-profile.css` | Estilização do painel, avatar e cards |

---

## 📥 Instruções de Acesso

1. Acesse a aplicação pelo navegador.  
2. Realize login na plataforma.  
3. Clique no ícone do usuário no canto superior direito ou na opção **Minha Conta**.  
4. O Painel do Usuário será exibido com **perfil + indicações**.

---

## 📎 Evidência da Tela

<img width="1912" height="931" alt="image" src="https://github.com/user-attachments/assets/fb5b3b80-d9cc-46c6-9fbe-3ab759db9bfb" />



