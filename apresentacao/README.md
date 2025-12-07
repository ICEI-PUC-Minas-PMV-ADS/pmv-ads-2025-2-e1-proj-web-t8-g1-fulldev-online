# Apresentação do Projeto

## Conjunto de Slides

A apresentação do projeto consiste na geração de um conjunto de slides em um arquivo no formato ppt, pptx ou pdf, contemplando os seguintes itens:

> - Contexto (Problema, Público-alvo)
> - Requisitos
> - Solução Implementada (funcionalidades de software)
> - Conclusão da elaboração do projeto (pontos positivos, desafios, aprendizado).

### 📊 Apresentação FullDev Online

**[Acesse a Apresentação em PDF](./full%20dev%20(2).pdf)**

A apresentação completa do projeto FullDev Online está disponível no arquivo PDF incluído nesta pasta. O documento contempla:

#### 📋 Conteúdo da Apresentação

1. **Contexto do Projeto**
   - Problema identificado: Dificuldade dos desenvolvedores em escolher cursos de qualidade
   - Público-alvo: Desenvolvedores em todos os níveis (novatos, júniors, sêniores)
   - Proposta de valor: Plataforma colaborativa de avaliação e indicação de cursos

2. **Requisitos Funcionais**
   - Sistema de cadastro e autenticação (RF-01, RF-02)
   - Catálogo de cursos com filtros e busca (RF-08, RF-23)
   - Sistema de publicações e avaliações (RF-13, RF-15)
   - Páginas institucionais e compliance LGPD (RF-26, RF-27)
   - Sistema de eventos e oportunidades (RF-22)

3. **Solução Implementada**
   - **Frontend**: HTML5, CSS3, JavaScript ES6+
   - **Persistência**: LocalStorage API
   - **Funcionalidades**:
     - ✅ Cadastro em 3 etapas com validação de CPF
     - ✅ Feed dinâmico com carrossel de cursos
     - ✅ Sistema de compartilhamento social
     - ✅ Toast notifications
     - ✅ Páginas institucionais (Sobre, Termos, Privacidade)
     - ✅ Interface responsiva mobile-first
   - **Progresso**: 20/39 requisitos implementados (51%)

4. **Conclusão**
   - **Pontos Positivos**:
     - Design moderno e profissional
     - Código modular e reutilizável
     - Boa experiência do usuário (UX)
     - Conformidade com LGPD
   - **Desafios Enfrentados**:
     - Validação complexa de CPF
     - Sincronização de dados via LocalStorage
     - Responsividade em múltiplos dispositivos
   - **Aprendizados**:
     - Trabalho em equipe com Git Flow
     - Padrões de código e boas práticas
     - Desenvolvimento frontend completo
     - Gestão de requisitos e entregas

> **Links Úteis**:
> - [A regra 10-20-30 para apresentações de sucesso](https://revistapegn.globo.com/Noticias/noticia/2014/07/regra-10-20-30-para-apresentacoes-de-sucesso.html)
> - [Top Tips for Effective Presentations](https://www.skillsyouneed.com/present/presentation-tips.html)
> - [How to make a great presentation](https://www.ted.com/playlists/574/how_to_make_a_great_presentation)

---

## Vídeo de Apresentação

A equipe deverá gravar um vídeo de, no máximo, três minutos, com a apresentação da solução. O vídeo deve abrir a aplicação hospedada e apresentar o seu funcionamento.

### 📹 Especificações Técnicas

- **Tamanho máximo**: 90 MB
- **Taxa de FPS**: 30 quadros por segundo
- **Resolução**: HD (720p) ou Full HD (1080p)
- **Formato**: MP4

### 🎬 Estrutura Sugerida do Vídeo (3 minutos)

**0:00 - 0:30** | Introdução
- Apresentação da equipe
- Contexto do problema
- Objetivo da plataforma

**0:30 - 1:00** | Cadastro e Login
- Demonstrar tela de login
- Processo de cadastro em 3 etapas
- Validação de CPF

**1:00 - 1:45** | Funcionalidades Principais
- Navegação na Home
- Carrossel de cursos
- Sistema de filtros e busca
- Interações (hype, comentários)
- Sistema de compartilhamento

**1:45 - 2:30** | Recursos Adicionais
- Página Minha Conta
- Página de Eventos
- Páginas Institucionais (Sobre, Termos, Privacidade)
- Toast notifications

**2:30 - 3:00** | Conclusão
- Resumo das funcionalidades
- Próximos passos do projeto
- Agradecimentos

### 📍 Checklist de Gravação

- [ ] Testar áudio e microfone
- [ ] Limpar cache e dados de teste
- [ ] Preparar dados de exemplo (usuários, posts, cursos)
- [ ] Testar todos os fluxos antes da gravação
- [ ] Verificar responsividade (desktop e mobile)
- [ ] Gravar em ambiente silencioso
- [ ] Usar cursor destacado (opcional)
- [ ] Adicionar música de fundo suave (opcional)
- [ ] Exportar em MP4 com as especificações corretas

**Status**: 🔴 Pendente de gravação

[Adicione o link do vídeo aqui após o upload]

---

## Hospedagem

### 🌐 Acesso à Aplicação

**URL de Produção**: [https://puc.fulldev.com.br](https://puc.fulldev.com.br)

### 📦 Informações de Deploy

- **Servidor**: Hospedagem web estática
- **Tecnologia**: HTML5 + CSS3 + JavaScript (sem backend)
- **CDN**: Cloudflare (opcional)
- **SSL**: Certificado HTTPS ativo
- **Backup**: Repositório GitHub como fonte de verdade

### 🚀 Como Acessar

1. Acesse [https://puc.fulldev.com.br](https://puc.fulldev.com.br)
2. Para testar o cadastro, use um CPF válido fictício
3. Navegue pelas funcionalidades implementadas:
   - Home com feed e carrossel
   - Sistema de cadastro e login
   - Minha Conta (perfil do usuário)
   - Página de Eventos
   - Páginas Institucionais

### 📊 Monitoramento

- **Uptime**: 99.9% (meta)
- **Velocidade de carregamento**: < 2s
- **Compatibilidade**: Chrome, Firefox, Edge, Safari
- **Responsividade**: Desktop, Tablet, Mobile

### 🔧 Deploy Local

Para executar localmente, siga as instruções no [README principal](../README.md#hospedagem) ou no [README do código-fonte](../codigo-fonte/README.md#-como-executar).

---

## 📚 Documentação Adicional

- [Documentação Completa](../documentos/)
- [Código-Fonte](../codigo-fonte/)
- [Estrutura de Arquivos](../ESTRUTURA.md)
- [Programação de Funcionalidades](../documentos/06-Programação%20de%20Funcionalidades.md)

---

**Última atualização**: 07 de dezembro de 2025  
**Equipe**: Lucas Pedro, Lorenzo, Luan, João Pedro, Jeniffer, Luiz Fernando  
**Orientador**: Luiz Alberto Ferreira Gomes
