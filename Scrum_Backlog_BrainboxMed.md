# 🧠 Scrum Agile Backlog – Projeto Brainbox Med

---

## 📌 Visão do Produto

**Brainbox Med** é uma plataforma de simulado médico interativo, multilíngue e modular, com foco inicial em Medicina Intensiva e expansão futura. Oferece modos de estudo e simulado, relatórios inteligentes, gráficos de desempenho, navegação personalizada e um banco de dados escalável com questões baseadas em evidência.

---

## 📋 Product Backlog Geral

| ID   | Tarefa                                                                                      | Descrição                                                                                                | Prioridade | Status       |
|------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------|--------------|
| BB01 | Definir nome, logo e identidade visual                                                      | Nome "Brainbox Med", logo com cubo roxo e circuitos laranja ligados a estetoscópio branco                | Alta       | ✅ Concluído   |
| BB02 | Estruturar layout do site com paleta de cores e slogan                                      | Aplicar visual limpo, responsivo e com slogan multilíngue no `index.html`                                | Alta       | ✅ Concluído   |
| BB03 | Criar banco de dados modular externo para as questões                                       | Separar `bancoICU.js`, `bancoCardio.js`, etc. para facilitar expansão e manutenção                        | Alta       | ✅ Concluído   |
| BB04 | Implementar navegação entre questões no modo estudo e simulado                              | Botões "Próxima", "Anterior", marcar pendentes, e revisão final antes de encerrar                        | Alta       | ✅ Concluído   |
| BB05 | Dividir modo estudo em blocos de 10 questões com relatório a cada bloco                     | Relatório parcial a cada 10, relatório final após 50                                                      | Alta       | ✅ Concluído   |
| BB06 | Exibir explicações completas após cada questão (modo estudo) e ao final (modo simulado)     | Mostrar qual a correta, incorreta e explicar cada alternativa                                             | Alta       | ✅ Concluído   |
| BB07 | Criar páginas de planos signup-basic.html, adfree, focused, pro                             | Páginas de inscrição básicas para cada plano, inicialmente sem i18n completo ou logos detalhados.        | Alta       | ✅ Concluído   |
| BB08 | Adicionar gráficos de desempenho                                                            | Dificuldade, tempo por questão, áreas médicas, acertos/erros                                              | Alta       | ✅ Concluído   |
| BB09 | Gerar relatório com formatação clara e multilíngue                                          | Correto em verde, incorreto em vermelho, com destaque de explicações e exportável                        | Alta       | ✅ Concluído   |
| BB10 | Implementar sistema multilíngue completo (EN, PT, ES)                                       | Toda interface, questões e relatórios devem adaptar-se ao idioma selecionado                             | Alta       | 🔄 Em andamento |
| BB11 | Adicionar proteção contra cópias e prints                                                   | Bloqueio de botão direito, inibição de screenshots, proteção de conteúdo                                 | Média      | 🔄 Em andamento |
| BB12 | Incluir temporizador visível e adaptável ao modo                                             | Relógio regressivo de 50 minutos no simulado, adaptável por questão                                      | Alta       | ✅ Concluído   |
| BB13 | Integrar painel inicial com menu de seleção de modo e área médica                           | Tela com escolha entre “Modo Estudo” e “Simulado”, além da especialidade                                 | Alta       | ✅ Concluído   |
| BB14 | Criar banco de dados com 80 questões em Terapia Intensiva (com explicações reais)           | Em blocos equilibrados de dificuldade e por subtemas, com arquivos externos separados                    | Alta       | ✅ Concluído   |
| BB15 | Expandir banco com 80 questões em Cardiologia intensiva                                     | Subáreas como IAM, ICC, monitorização, suporte circulatório, arritmias, etc.                             | Alta       | 🚧 Em produção |
| BB16 | Gerar relatórios parciais no modo estudo após 5 blocos de 10                                | Relatório de 50 questões no final com link para revisão                                                  | Alta       | ✅ Concluído   |
| BB17 | Criar estrutura para login de usuário e perfil pessoal                                      | Usuário com username, senha, histórico de desempenho, etc.                                               | Alta       | ✅ Concluído  |
| BB18 | Incluir sistema de pagamento por cartão, débito e bitcoin                                   | Integração com gateway de pagamento                                                                      | Média      | 🔜 Sprint 6     |
| BB19 | Refinar signup-focused.html                                                                 | Adicionar logo, link para upsell de simulações (add-sim-focused.html) e implementar i18n completo.      | Alta       | ✅ Concluído   |
| BB20 | Criar página add-sim-focused.html                                                           | Página para upgrade do plano Focused para incluir simulações, similar a add-sim-focusedpro.html, multilíngue e com logo. | Média      | 🔜 A fazer    |
| BB21 | Refinar signup-basic.html                                                                 | Adicionar logo e implementar i18n completo.                                                             | Alta       | 🔜 A fazer    |
| BB22 | Refinar signup-pro.html