# Registro de Testes de Software

Este documento reúne os resultados obtidos durante a execução dos testes funcionais planejados no **Plano de Testes de Software (Documento 07)**.  
A estrutura e formatação seguem o mesmo padrão adotado no CT-01 original e replicado em todas as demais aplicações.

Cada registro inclui:  
- Objetivo resumido  
- Resultado obtido  
- Evidência (prints ou vídeos)  
- Responsável pela execução  

---

# 1. Resultados dos Casos de Teste

---

## **CT-01 – Adicionar Novo Curso ao Catálogo**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar a criação de um novo curso no catálogo. |
| Resultado Obtido | **Sucesso.** O modal fechou corretamente, a mensagem “Curso criado com sucesso!” foi exibida e o novo curso apareceu no catálogo. |
| Evidência (vídeo) | <a href="https://github.com/user-attachments/assets/cda87494-db84-4c1b-a2fa-d8fedeb85a6c">Ver vídeo</a> |
| Responsável | **Lorenzo** |

---

## **CT-02 – Login de Usuário**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar se o usuário consegue realizar login. |
| Resultado Obtido | **Sucesso.** Login concluído, sem erros visuais. O usuário foi redirecionado para a Home. |
| Evidência (vídeo) | <a href="video/gravacao login.mp4">Ver vídeo</a> |
| Responsável | **Luan** |

---

## **CT-03 – Recuperação de Senha**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar o fluxo de recuperação de senha. |
| Resultado Obtido | **Sucesso.** O sistema exibiu mensagem de solicitação enviada corretamente. |
| Evidência (vídeo) | <a href="video/gravacao login.mp4">Ver vídeo</a> |
| Responsável | **Luan** |

---

## **CT-04 – Renderização do Feed da Home**

| Campo | Resultado |
|------|-----------|
| Objetivo | Garantir que cursos e postagens sejam renderizados conforme o previsto. |
| Resultado Obtido | **Sucesso.** Carrossel carregou normalmente, postagens renderizaram com categorias corretas e filtros ativos. |
| Evidência (vídeo) | <a href="video/renderizacao home.mp4">Ver vídeo</a> |
| Responsável | **Lorenzo** |

---

## **CT-05 – Interações com Postagens**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar incrementos nos contadores e efeitos visuais. |
| Resultado Obtido | **Sucesso Parcial.** Os contadores incrementam corretamente e os efeitos visuais funcionam. Função completa de comentários ainda não implementada. |
| Evidência (vídeo) | <a href="video/renderizacao home.mp4">Ver vídeo</a> |
| Responsável | **Lorenzo** |

---

## **CT-06 – Exibição da Página “Minha Conta”**

| Campo | Resultado |
|------|-----------|
| Objetivo | Confirmar exibição das indicações cadastradas pelo usuário. |
| Resultado Obtido | **Sucesso.** Lista carregada corretamente, cards renderizados e navegação funcional para a publicação. |
| Evidência (vídeo) | <a href="video/minha conta.mp4">Ver vídeo</a> |
| Responsável | **Lucas Pedro** |

---

## **CT-07 – Acesso à Página de Publicação**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar o conteúdo completo da publicação. |
| Resultado Obtido | **Sucesso.** Página exibida com autor, título, descrição, avatar e métricas corretamente estruturadas. |
| Evidência (vídeo) | <a href="video/publi.mp4">Ver vídeo</a> |
| Responsável | **João Pedro / Jeniffer** |

---

## **CT-08 – Cadastro de Novo Usuário (3 Etapas)**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar o processo completo de cadastro em 3 etapas com validação de CPF. |
| Resultado Obtido | **Sucesso.** Todas as 3 etapas funcionaram corretamente. Validação de CPF matemática aprovada. Modal de sucesso exibido e dados salvos no LocalStorage. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Luan** |

---

## **CT-09 – Validação de CPF Inválido**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar se o sistema rejeita CPFs inválidos ou duplicados. |
| Resultado Obtido | **Sucesso.** Sistema rejeitou CPF inválido (111.111.111-11) e exibiu mensagem de erro em vermelho. Impossível avançar para próxima etapa. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Luan** |

---

## **CT-10 – Compartilhamento de Curso via WhatsApp**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar abertura do modal de compartilhamento e envio via WhatsApp. |
| Resultado Obtido | **Sucesso.** Modal abriu corretamente, link gerado com sucesso. WhatsApp Web abriu com mensagem pré-formatada contendo título do curso e URL. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lorenzo** |

---

## **CT-11 – Cópia de Link de Compartilhamento**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar se o botão "Copiar Link" funciona corretamente. |
| Resultado Obtido | **Sucesso.** Link copiado para área de transferência. Toast "Link copiado!" exibido com animação. Link funcional ao colar no navegador. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lorenzo** |

---

## **CT-12 – Exibição de Toast de Sucesso**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar exibição e comportamento do toast de sucesso. |
| Resultado Obtido | **Sucesso.** Toast verde exibido no canto superior direito, ícone de check, animação de entrada suave, auto-close em 3 segundos funcionou perfeitamente. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lorenzo** |

---

## **CT-13 – Exibição de Toast de Erro**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar exibição de toast de erro em situações de falha. |
| Resultado Obtido | **Sucesso.** Toast vermelho exibido com ícone de X. Mensagem "CPF inválido" clara e objetiva. Animação e posicionamento corretos. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Luan** |

---

## **CT-14 – Navegação para Página de Eventos**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar carregamento e exibição da página de eventos. |
| Resultado Obtido | **Sucesso.** Página carregou sem erros. Grid de cards responsivo exibido corretamente com informações de data, local, formato e vagas. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lucas PEdro** |

---

## **CT-15 – Filtro de Eventos por Tipo**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar funcionamento dos filtros de eventos. |
| Resultado Obtido | **Sucesso.** Filtros "Todos", "Online", "Presencial" e "Híbrido" funcionaram perfeitamente. Lista atualiza dinamicamente sem recarregar página. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lorenzo** |

---

## **CT-16 – Acesso à Página "Sobre Nós"**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar carregamento e conteúdo da página institucional. |
| Resultado Obtido | **Sucesso.** Página carregou completamente. Contador animado funcionou (incremento de 0 até valor final). Grid de equipe exibido com 6 membros e links sociais. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Joao** |

---

## **CT-17 – Navegação no Sumário dos Termos de Uso**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar funcionalidade do sumário interativo. |
| Resultado Obtido | **Sucesso.** Scroll suave funcionou em todos os itens do sumário. Navegação precisa para cada seção (11 seções testadas). Sem quebras visuais. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Luan** |

---

## **CT-18 – Impressão dos Termos de Uso**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar funcionalidade do botão de impressão. |
| Resultado Obtido | **Sucesso.** Botão "Imprimir" abriu diálogo de impressão do navegador. Documento formatado corretamente para impressão (sem elementos desnecessários). |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Joao** |

---

## **CT-19 – Modal de Preferências de Cookies**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar abertura e funcionamento do modal de cookies. |
| Resultado Obtido | **Sucesso.** Modal abriu corretamente. Checkboxes de preferências funcionais. Botão "Salvar" persistiu configurações no LocalStorage. Toast de confirmação exibido. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lorenzo** |

---

## **CT-20 – Formulário de Solicitação de Dados (LGPD)**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar preenchimento e envio do formulário de portabilidade. |
| Resultado Obtido | **Sucesso.** Formulário validou campos obrigatórios (e-mail). Validação de formato de e-mail funcionou. Mensagem de confirmação exibida após envio. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lucas Pedro** |

---

## **CT-21 – Formulário de Exclusão de Conta**

| Campo | Resultado |
|------|-----------|
| Objetivo | Validar fluxo de exclusão de conta. |
| Resultado Obtido | **Sucesso.** Formulário exibiu campo de motivo. Modal de confirmação dupla implementado ("Tem certeza?"). Toast de sucesso após confirmação. Estrutura preparada para exclusão futura no backend. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Joao** |

---

## **CT-22 – Responsividade Mobile (Cadastro)**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar layout responsivo da tela de cadastro em dispositivos móveis. |
| Resultado Obtido | **Sucesso.** Testado em resolução 375px (iPhone SE). Layout adaptou perfeitamente. Campos acessíveis, botões clicáveis, etapas navegáveis. Sem quebras visuais. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Luan** |

---

## **CT-23 – Empilhamento de Múltiplos Toasts**

| Campo | Resultado |
|------|-----------|
| Objetivo | Verificar comportamento com múltiplas notificações simultâneas. |
| Resultado Obtido | **Sucesso.** Geradas 3 notificações simultâneas. Empilhamento vertical funcionou sem sobreposição. Cada toast fechou independentemente após seu timer. Sem travamentos ou bugs visuais. |
| Evidência (vídeo) | [Ver vídeo] |
| Responsável | **Lorenzo** |

# 2. Considerações Finais

- As funcionalidades principais se mostraram estáveis e coerentes com os requisitos.  
- Os vídeos servem como comprovação da execução real dos testes.  
- Pequenos ajustes podem ser necessários em funcionalidades futuras (ex.: comentários completos, exclusão/edição real).  
- O registro fecha perfeitamente o ciclo de testes definido no Documento 07.
