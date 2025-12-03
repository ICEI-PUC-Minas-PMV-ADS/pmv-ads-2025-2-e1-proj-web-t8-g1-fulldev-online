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

# 2. Considerações Finais

- As funcionalidades principais se mostraram estáveis e coerentes com os requisitos.  
- Os vídeos servem como comprovação da execução real dos testes.  
- Pequenos ajustes podem ser necessários em funcionalidades futuras (ex.: comentários completos, exclusão/edição real).  
- O registro fecha perfeitamente o ciclo de testes definido no Documento 07.
