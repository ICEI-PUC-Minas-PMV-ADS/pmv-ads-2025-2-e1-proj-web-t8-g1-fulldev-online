# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align="center">
<th colspan="2">Novato/Estudante</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa ingressando na área de desenvolvimento de software, buscando orientação e aprendizado.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Descobrir caminhos para se profissionalizar, encontrar cursos recomendados, tirar dúvidas iniciais.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align="center">
<th colspan="2">Desenvolvedor Júnior</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissional com pouca experiência que já iniciou a carreira, mas busca crescer e se atualizar.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Interagir na comunidade, discutir dúvidas do dia a dia, encontrar eventos e materiais mais avançados.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align="center">
<th colspan="2">Desenvolvedor Sênior</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissional experiente que deseja compartilhar conhecimento e orientar novos membros.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Ajudar outros membros, responder dúvidas, indicar conteúdos, participar de eventos e fóruns.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align="center">
<th colspan="2">Visitante/Membro Não Cadastrado</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário que acessa a página para conhecer o conteúdo antes de se cadastrar.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Navegar nos tópicos e eventos da página inicial, visualizar discussões abertas, decidir sobre registro.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align="center">
<th colspan="2">Patrocinador/Empresa</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas e parceiros que apoiam a comunidade e desejam promover eventos ou oportunidades.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Divulgar oportunidades, promover cursos e eventos, encontrar novos talentos.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align="center">
<th colspan="2">Moderador</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Membro responsável por garantir o bom funcionamento, segurança e respeito nas interações da comunidade.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Gerenciar conteúdos e membros, aplicar regras, solucionar conflitos, remover conteúdos inadequados, estimular discussões saudáveis.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

<table>
  <thead>
    <tr align="center">
      <th>EU COMO... <code>QUEM</code></th>
      <th>QUERO/PRECISO ... <code>O QUE</code></th>
      <th>PARA ... <code>PORQUE</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Novato/Estudante</td>
      <td>Criar uma conta na FullDev</td>
      <td>Poder participar de discussões e acessar conteúdos sobre TI.</td>
    </tr>
    <tr>
      <td>Novato/Estudante</td>
      <td>Visualizar uma lista de cursos recomendados</td>
      <td>Descobrir quais trilhas seguir para me profissionalizar.</td>
    </tr>
    <tr>
      <td>Novato/Estudante</td>
      <td>Publicar minha primeira dúvida ou pergunta no fórum</td>
      <td>Receber orientação da comunidade e aprender com os mais experientes.</td>
    </tr>
    <tr>
      <td>Desenvolvedor Júnior</td>
      <td>Acessar página de eventos</td>
      <td>Conhecer oportunidades de networking e atualização profissional.</td>
    </tr>
    <tr>
      <td>Desenvolvedor Júnior</td>
      <td>Responder perguntas de outros usuários</td>
      <td>Ajudar colegas e consolidar meu próprio conhecimento.</td>
    </tr>
    <tr>
      <td>Desenvolvedor Sênior</td>
      <td>Cadastrar um artigo ou material didático</td>
      <td>Compartilhar conhecimento e contribuir com o crescimento da comunidade.</td>
    </tr>
    <tr>
      <td>Desenvolvedor Sênior</td>
      <td>Visualizar quais tópicos estão mais discutidos</td>
      <td>Identificar onde posso ajudar e propor soluções avançadas.</td>
    </tr>
    <tr>
      <td>Visitante/Membro não cadastrado</td>
      <td>Navegar nos tópicos da página inicial sem se cadastrar</td>
      <td>Avaliar se vale a pena entrar para a comunidade.</td>
    </tr>
    <tr>
      <td>Patrocinador/Empresa</td>
      <td>Divulgar oportunidades de estágio ou patrocinar eventos</td>
      <td>Atrair novos talentos e promover a marca junto à comunidade.</td>
    </tr>
    <tr>
      <td>Moderador</td>
      <td>Remover conteúdos inadequados ou ofensivos</td>
      <td>Assegurar que o ambiente seja saudável e alinhado às regras da comunidade.</td>
    </tr>
    <tr>
      <td>Moderador</td>
      <td>Intermediar conflitos ou denúncias</td>
      <td>Garantir um espaço seguro e justo para todos os participantes.</td>
    </tr>
  </tbody>
</table>

## Requisitos do Projeto

### Requisitos Funcionais

| ID     | Descrição                                                                                                                                         | Prioridade |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF-01  | Permitir cadastro e login de usuários (e-mail/senha), com validação de CPF único, verificação de e-mail e recuperação de senha.                   | Alta       |
| RF-02  | Permitir validação do perfil do usuário apenas pelo CPF.                                                                                          | Alta       |
| RF-03  | Disponibilizar controle de acesso baseado em papéis (usuário, marca, moderador, administrador).                                                    | Alta       |
| RF-04  | Permitir edição de perfil de usuário: avatar, nome, @username único, bio, localidade, stack, senioridade, portfólio, LinkedIn.                     | Média      |
| RF-05  | Permitir configuração de preferências e privacidade (tema, stacks de interesse, exibir ou não LinkedIn/estatísticas).                             | Média      |
| RF-06  | Exibir onboarding inicial e questionário vocacional (interesses, objetivos, orçamento, modalidade).                                                | Alta       |
| RF-07  | Calcular um “perfil de aprendizagem/objetivo” a partir das respostas (ex.: Front-end, Back-end, Dados, UI/UX; nível iniciante/intermediário/avançado). | Alta       |
| RF-08  | Manter catálogo de cursos com título, provedor, preço, idioma, modalidade, carga horária, nível, trilha e tags.                                    | Alta       |
| RF-09  | Gerar recomendações de cursos com base no perfil, permitindo filtros (preço, modalidade, duração, idioma, nível, provedor).                        | Alta       |
| RF-10  | Exibir página/lista de recomendações com cartões de curso (detalhes, selo “recomendado”).                                                          | Alta       |
| RF-11  | Permitir salvar/favoritar cursos e manter histórico mínimo de interações.                                                                          | Média      |
| RF-12  | Permitir compartilhamento de curso via link externo.                                                                                              | Baixa      |
| RF-13  | Permitir que usuários criem publicações/avaliações de cursos com campos obrigatórios (nota, justificativa, stack, etc.).                          | Alta       |
| RF-14  | Implementar fluxo de moderação: filtro automático de linguagem ofensiva, revisão por moderador e status visível ao autor.                         | Alta       |
| RF-15  | Permitir comentários, likes/dislikes e promoção de publicações (hype).                                                                             | Alta       |
| RF-16  | Exibir feed inicial com posts em destaque (score, hype, patrocinados).                                                                             | Média      |
| RF-17  | Permitir resposta oficial de marcas em publicações, com selo de verificação.                                                                      | Alta       |
| RF-18  | Disponibilizar painel da marca com menções, métricas (notas, hype, volume), histórico e exportação de dados.                                       | Média      |
| RF-19  | Disponibilizar painel do moderador com fila de publicações, denúncias, vínculos e ações (aprovar, recusar, remover).                              | Alta       |
| RF-20  | Permitir denúncias de conteúdo (post, comentário, resposta de marca) e trilha de auditoria para ações de moderação.                               | Alta       |
| RF-21  | Exibir notificações (comentários, respostas, status de publicação, menções à marca, fila de moderação).                                           | Média      |
| RF-22  | Disponibilizar página de eventos e oportunidades para empresas/patrocinadores.                                                                    | Alta       |
| RF-23  | Disponibilizar busca global e filtros combinados por curso, stack, usuário, evento.                                                               | Média      |
| RF-24  | Disponibilizar área administrativa de curadoria de cursos (CRUD, taxonomias, importação CSV).                                                     | Alta       |
| RF-25  | Gerar métricas mínimas na área administrativa (número de usuários, CTR, top cursos).                                                              | Média      |
| RF-26  | Disponibilizar páginas institucionais: Sobre/Metodologia, Termos de Uso, Política de Privacidade (LGPD).                                          | Alta       |
| RF-27  | Permitir exclusão da conta e download dos dados do usuário (portabilidade).                                                                       | Alta       |
| RF-28  | Exibir onboarding com explicação rápida do Indicador de Cursos e consentimento de uso dos dados.                                                  | Alta       |
| RF-29  | Gerar recomendações de cursos com base no perfil do usuário, ordenadas por aderência (score).                                                     | Alta       |
| RF-30  | Permitir filtros nas recomendações (preço, modalidade, duração, idioma, provedor, nível).                                                         | Alta       |
| RF-31  | Exibir página de detalhes do curso (descrição resumida, pré-requisitos, habilidades ensinadas, vantagens, link para o provedor).                   | Alta       |
| RF-32  | Compartilhar curso (gerar link compartilhável).                                                                                                   | Baixa      |
| RF-33  | Painel simples do usuário: ver perfil, cursos recomendados, salvos e feedbacks dados.                                                             | Alta       |
| RF-34  | Área administrativa (curadoria): CRUD de cursos (criar, editar, remover, desativar/reativar).                                                     | Alta       |
| RF-35  | Moderação básica: marcar curso como “verificado”/“em revisão” e esconder cursos não verificados das recomendações.                                | Alta       |
| RF-36  | Métricas mínimas na área admin: número de usuários, preenchimentos de questionário, CTR em cursos, top cursos recomendados/abertos.               | Média      |
| RF-37  | Tratamento de erros e mensagens amigáveis (ex.: “nenhum curso encontrado com esses filtros”).                                                     | Alta       |
| RF-38  | Notificações por e-mail (opcional no MVP): quando houver novas recomendações aderentes ao perfil.                                                 | Baixa      |
| RF-39  | Logs mínimos de auditoria para ações administrativas (quem criou/editou/desativou curso e quando).                                                | Média      |

---

### Requisitos Não Funcionais

| ID      | Descrição                                                                                         | Prioridade |
|---------|---------------------------------------------------------------------------------------------------|------------|
| RNF-01  | Implementar autenticação segura com criptografia forte (hash de senhas, HTTPS, proteção XSS/CSRF/SQLi). | Alta       |
| RNF-02  | O sistema deve ser responsivo e acessível em desktop, tablets e smartphones.                      | Alta       |
| RNF-03  | O tempo de resposta das principais operações (login, publicação, navegação) deve ser ≤ 2s em 95% dos casos. | Alta       |
| RNF-04  | O sistema deve suportar até 5k usuários e 10k cursos no MVP, com escalabilidade futura.            | Média      |
| RNF-05  | O sistema deve garantir alta disponibilidade (uptime ≥ 99%).                                      | Alta       |
| RNF-06  | O sistema deve estar em conformidade com a LGPD (consentimento, exclusão, portabilidade).         | Alta       |
| RNF-07  | A interface deve seguir padrões de usabilidade (fluxos claros, no máximo 3 cliques para recomendações). | Média      |
| RNF-08  | O sistema deve garantir acessibilidade mínima (WCAG 2.1 AA: contraste, navegação por teclado, textos alternativos). | Alta       |
| RNF-09  | O sistema deve possuir compatibilidade com navegadores modernos (Chrome, Firefox, Edge, Safari).  | Alta       |
| RNF-10  | O sistema deve manter logs de ações críticas (moderação, cadastros, respostas de marcas).         | Média      |
| RNF-11  | O sistema deve permitir backup diário e restauração testada periodicamente.                       | Média      |
| RNF-12  | O sistema deve implementar rate limiting e bloqueio temporário após tentativas falhas de login.   | Alta       |
| RNF-13  | O sistema deve possuir monitoramento de erros, métricas de uso e alertas para falhas críticas.    | Média      |
| RNF-14  | O sistema deve permitir evolução modular e documentação clara da API/endpoints.                   | Média      |

