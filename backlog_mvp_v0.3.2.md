# Backlog MVP — E-commerce da Marca

> **Versão:** 0.3.2 (filtro, busca e ordenação concluídos)
> **Status geral do projeto:** em desenvolvimento — Header, ProductService, ProductList e ProductCard funcionais; agora em fase de identidade visual antes de continuar as funcionalidades
> **Nome da marca:** a definir
> **Nicho atual:** camisetas oversized para treino (moletom, calça e shorts adiados até decisão futura de expandir)
> **Repositório:** `Ecommerce-loja`

## 1. Visão do projeto

Construir um e-commerce profissional que inicialmente funcione como projeto de estudo e portfólio e, futuramente, possa evoluir para uma loja real de roupas oversized voltadas para treino.

O projeto deve priorizar experiência de compra simples, catálogo estruturado, responsividade, arquitetura organizada entre front-end e back-end, código sustentável e possibilidade futura de pagamentos, estoque, autenticação e serviços externos.

### Regra principal

O MVP deve permanecer pequeno até o fluxo catálogo → produto → carrinho → checkout simulado estar sólido. Tecnologias só devem ser adicionadas quando resolverem uma necessidade real.

## 2. Stack

**Front-end:** Angular, TypeScript, HTML, CSS
**Back-end:** Node.js, API REST
**Futuro, somente quando necessário:** TypeScript no back-end, banco SQL/NoSQL, ORM, autenticação, testes automatizados, biblioteca de componentes, gerenciamento de estado, armazenamento de imagens, gateway de pagamento, frete, Docker, CI/CD

## 3. Objetivos de aprendizado

Praticar, no contexto do SCTEC Carreira Tech: HTML semântico, CSS e responsividade, JavaScript, TypeScript, Angular, componentes, rotas, serviços, formulários e validações, consumo de API, Node.js, APIs REST, integração front-end/back-end, persistência, tratamento de erros, Git/GitHub, organização de projeto, deploy.

## 4. Convenções

**Status:** `todo` · `em andamento` · `em revisão` · `concluído` · `bloqueado`
**Prioridade:** `alta` · `média` · `baixa`
**Feito:** a caixinha `[ ]` na primeira coluna de cada tarefa — marque `[x]` quando a tarefa for concluída de fato (além de atualizar a coluna Status)

**Fluxo Git:**

```
Backlog → GitHub Issue → Branch → Desenvolvimento → Commit
→ Pull Request → Revisão → Merge na main → Atualização do backlog
```

**Branches:**

```
feature/nome-da-feature
fix/nome-do-problema
refactor/nome-do-refactor
docs/nome-da-documentacao
chore/nome-da-tarefa
```

Toda tarefa concluída deve registrar branch e, quando houver, PR.

### Padrões de código obrigatórios

- **HTML sempre semântico.** Usar as tags certas para cada finalidade (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<form>`, etc.) em vez de abusar de `<div>`/`<span>` genéricos. Isso vale para todos os templates de todos os componentes, sem exceção — inclusive protótipos e páginas simuladas como o Checkout.
- **Boas práticas de código em geral**, mesmo em fase de MVP:
  - nomes de variáveis, componentes e serviços claros e consistentes (em inglês, seguindo a convenção do Angular)
  - componentes pequenos e com responsabilidade única (single responsibility)
  - sem lógica de negócio dentro do template — lógica fica no `.ts`
  - tipagem forte em TypeScript (evitar `any` sem necessidade real)
  - evitar duplicação de código (extrair para serviço/utilitário quando repetir)
  - acessibilidade básica junto com a semântica (`alt` em imagens, `label` em inputs, atributos ARIA quando o HTML nativo não for suficiente)
- Essas regras entram na **Definition of Done** (seção 9): nenhuma tarefa de UI é considerada `concluído` se o HTML não for semântico ou se o código não seguir esses padrões mínimos.

## 5. Organização do MVP

**MVP atual:** Fundação e organização → Catálogo → Detalhe do produto → Carrinho → Checkout simulado → Responsividade → API de produtos → Documentação → Deploy inicial

**Pós-MVP:** banco de dados, autenticação, painel administrativo, estoque, gerenciamento de pedidos, testes mais completos, melhorias avançadas de UX

**Futuro — loja real:** pagamento real, frete, domínio, emissão fiscal, integrações externas, analytics, recursos comerciais

---

## 6. Backlog

### Épico 01 — Fundação

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [x] | FND-001 | Estrutura base Angular | concluído | alta | `main` (bootstrap) |
| [x] | FND-002 | Configurar Git/GitHub | concluído | alta | `main` (bootstrap) |
| [x] | FND-003 | Definir estrutura de pastas | concluído | alta | `feature/folder-structure` (PR #5) |
| [x] | FND-004 | Criar `.gitignore` | concluído | alta | `main` (bootstrap) |
| [ ] | FND-005 | Definir padrão de commits | todo | média | --- |
| [ ] | FND-006 | Documentar fluxo de branches/PRs | todo | média | --- |
| [ ] | FND-007 | Avaliar estrutura Node.js | todo | alta | --- |
| [ ] | FND-008 | Criar API Node.js inicial | todo | alta | --- |
| [ ] | FND-009 | Criar `.env.example` quando necessário | todo | média | --- |

**TODO:** Épico 01 concluído para o MVP atual · iniciar API Node.js (FND-007/008) quando o front-end estiver pronto para integração

### Épico 02 — Marca e identidade

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | BRD-001 | Definir nome da marca | todo | alta | --- |
| [x] | BRD-002 | Definir paleta de cores | concluído | alta | `feature/visual-identity` |
| [x] | BRD-003 | Definir tipografia | concluído | alta | `feature/visual-identity` |
| [ ] | BRD-004 | Criar logo provisório | todo | média | --- |
| [x] | BRD-005 | Criar variáveis/tokens de estilo | concluído | alta | `feature/visual-identity` |
| [x] | BRD-006 | Aplicar identidade visual (Header e ProductCard) | concluído | alta | `feature/visual-identity` |

**Paleta definida (BRD-002):**

```
Asfalto        #16151A  — fundo principal
Concreto       #221F26  — superfície dos cards
Giz            #EDEAE4  — texto principal
Fumaça         #8B8790  — texto secundário
Ferro Oxidado  #C4551F  — cor de destaque (CTAs, preço)
Aço            #4C6B8A  — uso raro (links, estado secundário)
```

**Tipografia definida (BRD-003):**

- Display/títulos/preço: fonte condensada e pesada (Archivo Black ou Anton)
- Corpo/descrições: sans neutra (Inter)

### Épico 03 — Layout e navegação

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [x] | UI-001 | Header | concluído | alta | `feature/header` |
| [ ] | UI-002 | Navegação principal | todo | alta | --- |
| [ ] | UI-003 | Layout base | todo | alta | --- |
| [ ] | UI-004 | Home | todo | alta | --- |
| [ ] | UI-005 | Footer | todo | média | --- |
| [ ] | UI-006 | Responsividade mobile | todo | alta | --- |
| [ ] | UI-007 | Loading states | todo | média | --- |
| [ ] | UI-008 | Error states | todo | média | --- |
| [ ] | UI-009 | Catálogo vazio | todo | média | --- |
| [ ] | UI-010 | Acessibilidade básica | todo | média | --- |
| [ ] | UI-011 | Criar seção Hero de abertura na Home | todo | alta | `feature/hero-section` (futuro) |

### Épico 04 — Catálogo

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [x] | CAT-001 | Modelo `Product` inicial | concluído | alta | `feature/header` |
| [x] | CAT-002 | ProductService | concluído | alta | `feature/product-service` |
| [x] | CAT-003 | ProductList | concluído | alta | `feature/product-list` |
| [x] | CAT-004 | ProductCard | concluído | alta | `feature/product-card` |
| [x] | CAT-005 | Filtro por categoria | concluído | média | `feature/product-filters` (#17) |
| [x] | CAT-006 | Busca por nome | concluído | média | `feature/product-filters` (#18) |
| [x] | CAT-007 | Ordenação por preço | concluído | baixa | `feature/product-filters` (#19) |
| [ ] | CAT-008 | Adaptar categorias ao nicho | todo | alta | --- |
| [ ] | CAT-009 | Adicionar tamanhos | todo | alta | --- |
| [ ] | CAT-010 | Revisar modelo de produto | todo | alta | --- |
| [x] | CAT-011 | Estado sem resultados | concluído | média | `feature/product-filters` |
| [x] | CAT-012 | Restringir catálogo à categoria única (Camiseta Oversized) | concluído | alta | `feature/visual-identity` |

**Modelo inicial:**

```ts
Product {
  id
  name
  price
  category
  image
  description
  sizes
}
```

### Épico 05 — Produto

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | PRD-001 | ProductDetail | todo | alta | --- |
| [ ] | PRD-002 | Informações completas do produto | todo | alta | --- |
| [ ] | PRD-003 | Seleção de tamanho | todo | alta | --- |
| [ ] | PRD-004 | Adicionar ao carrinho | todo | alta | --- |
| [ ] | PRD-005 | Produto inexistente | todo | média | --- |

### Épico 06 — Carrinho

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [x] | CRT-001 | CartService | concluído | alta | `feature/header` |
| [x] | CRT-002 | Adicionar produto | concluído | alta | `feature/product-card` |
| [ ] | CRT-003 | Remover produto | todo | alta | --- |
| [x] | CRT-004 | Persistência local | concluído | alta | `feature/header` |
| [ ] | CRT-005 | Página do carrinho | todo | alta | --- |
| [ ] | CRT-006 | Tamanho no item | todo | alta | --- |
| [ ] | CRT-007 | Alterar quantidade | todo | alta | --- |
| [ ] | CRT-008 | Subtotal | todo | alta | --- |
| [ ] | CRT-009 | Quantidade total de itens | todo | média | --- |
| [ ] | CRT-010 | Carrinho vazio | todo | média | --- |
| [ ] | CRT-011 | Resumo do pedido | todo | média | --- |

**Regra:** produtos iguais com tamanhos diferentes devem poder ser tratados como itens distintos.

**Nota:** `add()` e a persistência via localStorage foram validados na prática (badge do Header soma corretamente e mantém o valor após F5). `remove()` ainda não foi testado — depende da página do Carrinho existir (CRT-005) para ter uma interface onde remover um item.

### Épico 07 — Checkout simulado

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | CHK-001 | Formulário simulado | todo | média | --- |
| [ ] | CHK-002 | Confirmação visual | todo | média | --- |
| [ ] | CHK-003 | Validação dos campos | todo | alta | --- |
| [ ] | CHK-004 | Resumo da compra | todo | alta | --- |
| [ ] | CHK-005 | Simulação de pedido | todo | média | --- |
| [ ] | CHK-006 | Número fictício do pedido | todo | baixa | --- |
| [ ] | CHK-007 | Confirmação final | todo | média | --- |

**Fora do MVP:** pagamento real, frete real, emissão fiscal, transportadoras

### Épico 08 — API

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | API-001 | Criar servidor Node.js | todo | alta | --- |
| [ ] | API-002 | `GET /api/products` | todo | alta | --- |
| [ ] | API-003 | `GET /api/products/:id` | todo | alta | --- |
| [ ] | API-004 | `GET /api/categories` | todo | média | --- |
| [ ] | API-005 | Busca de produtos | todo | média | --- |
| [ ] | API-006 | Padrão de resposta | todo | média | --- |
| [ ] | API-007 | Validação de dados | todo | média | --- |
| [ ] | API-008 | Tratamento global de erros | todo | alta | --- |
| [ ] | API-009 | Documentar endpoints | todo | média | --- |
| [ ] | API-010 | Integrar Angular com API | todo | alta | --- |
| [ ] | API-011 | Loading/error no consumo | todo | média | --- |

**Contrato inicial:**

```
GET /api/products
GET /api/products/:id
GET /api/categories
GET /api/products/search
```

### Épico 09 — Persistência *(pós-MVP)*

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | DB-001 | Avaliar necessidade de banco | todo | alta | --- |
| [ ] | DB-002 | Escolher banco | todo | alta | --- |
| [ ] | DB-003 | Justificar escolha | todo | média | --- |
| [ ] | DB-004 | Criar schema/model | todo | alta | --- |
| [ ] | DB-005 | Criar seed | todo | média | --- |
| [ ] | DB-006 | Conectar API ao banco | todo | alta | --- |
| [ ] | DB-007 | Testar leitura | todo | média | --- |
| [ ] | DB-008 | Testar escrita | todo | média | --- |
| [ ] | DB-009 | Documentar configuração | todo | média | --- |

### Épico 10 — Administração *(pós-MVP)*

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | ADM-001 | Definir escopo do painel | todo | média | --- |
| [ ] | ADM-002 | Autenticação administrativa | todo | média | --- |
| [ ] | ADM-003 | Login | todo | média | --- |
| [ ] | ADM-004 | Dashboard | todo | baixa | --- |
| [ ] | ADM-005 | Listar produtos | todo | média | --- |
| [ ] | ADM-006 | Criar produto | todo | média | --- |
| [ ] | ADM-007 | Editar produto | todo | média | --- |
| [ ] | ADM-008 | Desativar produto | todo | média | --- |
| [ ] | ADM-009 | Gerenciar estoque | todo | alta | --- |
| [ ] | ADM-010 | Gerenciar pedidos | todo | alta | --- |

### Épico 11 — Qualidade

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | QUA-001 | Revisar arquitetura | todo | média | --- |
| [ ] | QUA-002 | Padronizar nomenclatura | todo | média | --- |
| [ ] | QUA-003 | Remover duplicação | todo | média | --- |
| [ ] | QUA-004 | Testar navegação | todo | alta | --- |
| [ ] | QUA-005 | Testar catálogo | todo | alta | --- |
| [ ] | QUA-006 | Testar carrinho | todo | alta | --- |
| [ ] | QUA-007 | Testar checkout | todo | alta | --- |
| [ ] | QUA-008 | Testar API | todo | média | --- |
| [ ] | QUA-009 | Revisar responsividade | todo | alta | --- |
| [ ] | QUA-010 | Revisar acessibilidade | todo | média | --- |
| [ ] | QUA-011 | Revisar performance | todo | baixa | --- |
| [ ] | QUA-012 | Testes automatizados onde fizer sentido | todo | baixa | --- |

### Épico 12 — Deploy

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | DEP-001 | Escolher plataforma | todo | média | --- |
| [ ] | DEP-002 | Build de produção | todo | média | --- |
| [ ] | DEP-003 | Publicar front-end | todo | média | --- |
| [ ] | DEP-004 | Publicar API | todo | média | --- |
| [ ] | DEP-005 | Configurar CORS | todo | alta | --- |
| [ ] | DEP-006 | Variáveis de ambiente | todo | alta | --- |
| [ ] | DEP-007 | Validar produção | todo | alta | --- |
| [ ] | DEP-008 | Documentar deploy | todo | média | --- |
| [ ] | DEP-009 | Domínio próprio futuramente | todo | baixa | --- |

### Épico 13 — Documentação

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | DOC-001 | README profissional | todo | alta | --- |
| [ ] | DOC-002 | Documentar stack | todo | alta | --- |
| [ ] | DOC-003 | Documentar execução local | todo | alta | --- |
| [ ] | DOC-004 | Documentar estrutura | todo | média | --- |
| [ ] | DOC-005 | Documentar API | todo | média | --- |
| [ ] | DOC-006 | Manter backlog atualizado | todo | alta | --- |
| [ ] | DOC-007 | Manter `TODOS.md` | todo | alta | --- |
| [ ] | DOC-008 | Registrar decisões técnicas | todo | média | --- |

---

## 7. Roadmap

**Fase 0 — Organização:** revisar estrutura atual, definir arquitetura inicial, organizar Git/GitHub, definir fluxo de branches/PRs, definir identidade visual provisória

**Fase 1 — MVP Front-end:** home, catálogo, busca, filtros, detalhe, tamanhos, carrinho, quantidade, checkout simulado, responsividade, loading/error/empty states

**Fase 2 — API:** criar API Node.js, criar endpoints, integrar Angular, tratar erros, documentar contrato

**Fase 3 — Persistência:** avaliar necessidade, escolher banco, criar schema, criar seed, integrar API, validar operações

**Fase 4 — Compra simulada completa:** finalizar carrinho, finalizar checkout, criar pedido simulado, criar confirmação, validar fluxo ponta a ponta

**Fase 5 — Profissionalização:** melhorar UX/acessibilidade/performance, adicionar testes, painel administrativo, autenticação, estoque, gerenciar pedidos, deploy, documentação completa

## 8. GitHub Issues

O backlog é a visão geral. Quando uma tarefa estiver pronta:

1. criar uma GitHub Issue
2. vincular a Issue ao ID do backlog
3. criar a branch
4. mudar o status para `em andamento`
5. desenvolver
6. abrir PR
7. mudar para `em revisão`
8. fazer merge
9. mudar para `concluído` e marcar a checkbox `[x]`
10. registrar branch/PR

**Exemplo:**

```
CAT-009 — Adicionar tamanhos ao produto
Issue: #XX
Branch: feature/product-sizes
PR: #XX
Status: em andamento
```

## 9. Definition of Done

Uma tarefa só é `concluído` (e só deve receber `[x]`) quando: implementação realizada · comportamento validado · **HTML semântico e boas práticas de código seguidas (seção 4)** · responsividade considerada quando aplicável · erros básicos considerados · código organizado · documentação atualizada quando necessário · TODO atualizado · branch/PR registrada · alteração versionada no Git · merge realizado na `main`.

## 10. Decisões técnicas

- **DEC-001 — Angular** (definida): framework principal do front-end
- **DEC-002 — Node.js** (definida): usado para a API REST inicial
- **DEC-003 — TypeScript no back-end** (em aberto): avaliar conforme evolução
- **DEC-004 — Banco de dados** (em aberto): escolher quando a persistência se tornar necessária
- **DEC-005 — Dados mockados antes da API** (definida): front-end pode usar dados locais/mockados até a API estar pronta; integração real em etapa separada
- **DEC-006 — Commit inicial de bootstrap direto na `main`** (definida): o primeiro commit (estrutura Angular + Git/GitHub + `.gitignore`) foi feito direto na `main`, sem branch/PR, por ser configuração inicial do projeto. **A partir daqui, todo o fluxo padrão (branch → commit → PR → revisão → merge) passa a ser seguido sem exceções.**
- **DEC-007 — Identidade visual definida** (definida): paleta "Asfalto/Concreto/Giz/Fumaça/Ferro Oxidado/Aço" e tipografia condensada (Archivo Black/Anton) + Inter, inspiradas no universo de treino/ferro, evitando defaults genéricos de IA (cream+terracota, dark+neon, cards SaaS uniformes). Ver seção do Épico 02.
- **DEC-008 — Escopo de produto reduzido** (definida): loja venderá inicialmente só camisetas oversized. Moletom, calça e shorts ficam fora até decisão futura de expandir a linha.
- **DEC-009 — Prioridade temporária: visual antes de funcionalidade** (concluída): CAT-005/006/007 foram pausados para aplicar a identidade visual primeiro, e retomados e concluídos logo em seguida.

## 11. Fora do MVP

Programa de fidelidade, cupons, avaliações, wishlist, recomendações, recuperação de senha, notificações, integração com redes sociais, analytics avançado, múltiplos meios de pagamento, frete avançado, marketplace, aplicativo mobile, internacionalização, múltiplos idiomas, múltiplas moedas.

*(revisar essa lista após a primeira versão funcional)*

## 12. Registro de atualizações

```md
## Atualização — YYYY-MM-DD

### Concluído
- [x] Tarefa X (branch: feature/nome-da-branch)

### TODO
- [ ] Próxima ação necessária

### Decisões
- Alguma decisão técnica tomada nesse momento, se houver
```

### v0.3.2 — Filtro, busca e ordenação concluídos

**Concluído:**

- [x] CAT-005 — Filtro por categoria (Issue #17)
- [x] CAT-006 — Busca por nome (Issue #18)
- [x] CAT-007 — Ordenação por preço (Issue #19)
- [x] Os três funcionando combinados (busca + categoria + ordenação), testado e validado
- [x] Contador "X produto(s) encontrado(s)" adicionado como extra de UX
- [x] Branch `feature/product-filters` → PR (Closes #17, #18, #19) → merge na `main` concluído

**TODO — próxima etapa:**

- [ ] Épico 04 quase completo — restam CAT-008 (adaptar categorias, já parcialmente resolvido por CAT-012), CAT-009 (tamanhos, adiado), CAT-010 (revisar modelo), CAT-011 (estado sem resultados, já implementado como "Nenhum produto encontrado" — só falta marcar)
- [ ] Decidir entre: ProductDetail (Épico 05) ou página real do Carrinho (Épico 06)

### v0.3.1 — Identidade visual aplicada

**Concluído:**

- [x] BRD-005 — Tokens CSS criados (`src/styles.css`): cores e tipografia centralizadas
- [x] BRD-006 — Identidade aplicada no Header e no ProductCard, validada visualmente
- [x] CAT-012 — `products.json` atualizado: só camisetas oversized (Preta, Branca, Cinza, Bege)
- [x] Backlog e README organizados: nomes de arquivo padronizados (sem sufixo de versão), arquivos antigos duplicados removidos
- [x] Branch `feature/visual-identity` → PR → merge na `main` concluído

**TODO — próxima etapa:**

- [ ] Retomar CAT-005/006/007 (filtro, busca, ordenação) agora que a identidade está aplicada
- [ ] Ou seguir para Épico 05 (ProductDetail) / Épico 06 (página real do Carrinho) — a decidir com o usuário

### v0.3.0 — Identidade visual definida + escopo reduzido

**Concluído:**

- [x] BRD-002 — Paleta de cores definida (Asfalto, Concreto, Giz, Fumaça, Ferro Oxidado, Aço), com skill frontend-design usada para evitar padrões genéricos de IA
- [x] BRD-003 — Tipografia definida (condensada/pesada para títulos e preço + Inter para corpo)

**Decisões:**

- [x] DEC-007, DEC-008, DEC-009 registradas (identidade visual, escopo de produto, prioridade temporária)

**Pausado:**

- [ ] CAT-005, CAT-006, CAT-007 — retomar depois que Header e ProductCard estiverem com a identidade aplicada

**TODO — próxima etapa:**

- [ ] CAT-012 — Editar `products.json`: remover Moletom e Short, manter só camisetas oversized (3-4 variantes: Preta, Branca, Cinza, Bege)
- [ ] BRD-005 — Criar arquivo de tokens CSS (variáveis de cor e tipografia)
- [ ] BRD-006 — Aplicar identidade no Header e no ProductCard
- [ ] UI-011 — Hero section fica registrada para o futuro, branch própria (`feature/hero-section`), não faz parte do escopo imediato

### v0.2.9 — ProductCard concluído

**Concluído:**

- [x] CAT-004 — `ProductCard` criado, extraído do `ProductList`, com botão "Adicionar ao carrinho"
- [x] CRT-002 — `CartService.add()` validado na prática (badge soma corretamente a cada clique, inclusive quantidade do mesmo produto)
- [x] CRT-004 — Persistência local validada (F5 mantém o número da badge)
- [x] Branch `feature/product-card` → PR → merge na `main` concluído

**Decisões:**

- [x] Adiada a seleção de tamanho (CAT-009/PRD-003/CRT-006) para depois do fluxo de compra estar completo, conforme regra do MVP enxuto

**TODO — próxima etapa:**

- [ ] CAT-005/006/007 — filtro por categoria, busca por nome e ordenação por preço, numa mesma branch (`feature/product-filters`)
- [ ] CRT-003 (remover produto) fica pendente até a página do Carrinho existir (CRT-005)

### v0.2.8 — ProductList concluído

**Concluído:**

- [x] CAT-003 — `ProductList` criado, consumindo o `ProductService` de verdade (sem gambiarra de teste)
- [x] Grid responsivo com CSS Grid (`repeat(auto-fill, minmax(220px, 1fr))`) validado visualmente
- [x] HTML semântico (`<section>`, `<ul>/<li>`)
- [x] Conectado ao `app.html`, os 5 produtos aparecem corretamente na tela
- [x] Branch `feature/product-list` → PR → merge na `main` concluído

**Nota:** o HTML do card de produto está, por enquanto, direto dentro do `product-list.html`. Será extraído para o `ProductCard` (CAT-004) na próxima etapa.

**TODO — próxima etapa:**

- [ ] Iniciar CAT-004 (ProductCard) — extrair o card para componente reutilizável e testar `CartService.add()` pela primeira vez

### v0.2.7 — ProductService concluído

**Concluído:**

- [x] CAT-002 — `ProductService` criado, com `products.json` mockado (5 produtos: Moletom, Camiseta, Short) e `provideHttpClient()` habilitado
- [x] Testado via console/Network (5 produtos carregados, requisição 200) antes do merge
- [x] Branch `feature/product-service` → PR → merge na `main` concluído

**TODO — próxima etapa:**

- [ ] Iniciar CAT-003 (ProductList) — consumir o ProductService de verdade, grid responsivo

### v0.2.6 — Header concluído

**Concluído:**

- [x] UI-001 — Header criado (semântico, menu hambúrguer, badge condicional, Flexbox space-between), testado em larguras mobile
- [x] CAT-001 — Interface `Product` criada
- [x] CRT-001 — `CartService` criado (signals, computed, persistência local), integrado ao Header
- [x] Branch `feature/header` → PR → merge na `main` concluído

**TODO — próxima etapa:**

- [ ] Iniciar Épico 04 (Catálogo) — ProductService, ProductList, ProductCard
- [ ] Ao criar o ProductCard, testar `CartService.add()`/`remove()` na prática pela primeira vez (CRT-002/003)

### v0.2.5 — Fundação concluída

**Concluído:**

- [x] FND-003 — Estrutura de pastas criada (`components/`, `services/`, `models/`, `data/`) via branch `feature/folder-structure`, PR #5 mergeado sem conflitos
- [x] Primeiro fluxo completo de branch → PR → merge → atualização de backlog realizado com sucesso
- [x] `main` local atualizada com `git pull`

**TODO — próxima etapa:**

- [ ] Iniciar Épico 03 (Layout e navegação) — começar pelo Header (UI-001)
- [ ] Criar Issue e branch `feature/header` para a próxima tarefa

### v0.2.4 — Primeiras tarefas concluídas

**Concluído:**

- [x] FND-001 — Estrutura base Angular criada (`ng new`)
- [x] FND-002 — Git inicializado e repositório conectado ao GitHub
- [x] FND-004 — `.gitignore` gerado automaticamente pelo Angular

**Decisões:**

- [x] Registrada a DEC-006: commit inicial de bootstrap feito direto na `main`, como exceção única. Fluxo de branch/PR passa a valer normalmente a partir de agora.

**TODO — próxima etapa:**

- [ ] Criar branch `feature/folder-structure` para resolver FND-003
- [ ] Fechar as Issues correspondentes a FND-001, FND-002 e FND-004 no GitHub
- [ ] Manter a Issue de FND-003 aberta até as pastas serem criadas

### v0.2.3 — Regra de HTML semântico e boas práticas

**Concluído:**

- [x] Adicionada regra fixa: HTML sempre semântico em todos os componentes
- [x] Adicionadas boas práticas obrigatórias de código (nomenclatura, componentes de responsabilidade única, tipagem forte, sem lógica no template, evitar duplicação, acessibilidade básica)
- [x] Definition of Done atualizada para exigir essas práticas antes de marcar qualquer tarefa de UI como `concluído`

### v0.2.2 — Checkboxes por tarefa

**Concluído:**

- [x] Adicionada coluna "Feito" com checkbox `[ ]`/`[x]` em cada tarefa de todos os épicos

### v0.2.1 — Correção de status

**Concluído:**

- [x] Revisado o estado real do código (nenhum ainda) e corrigidos todos os status incorretamente marcados como `concluído`/`em andamento` na v0.2.0

**TODO — próxima etapa:**

- [ ] Criar o repositório `Ecommerce-loja` no GitHub
- [ ] Rodar `ng new` e configurar o ambiente (FND-001 a FND-004)
- [ ] Criar a primeira branch e a primeira Issue real
- [ ] Atualizar este backlog após o primeiro merge

### v0.2.0 — Consolidação do backlog

**Concluído:**

- [x] Unificado o backlog de produto/arquitetura com o backlog operacional
- [x] Adicionados IDs para Issues e rastreamento
- [x] Adicionados status e prioridades
- [x] Adicionado controle de branch/PR
- [x] Separado MVP, pós-MVP e futuro da loja real
- [x] Mantida a visão de evolução de portfólio para negócio real
- [x] Mantidos os objetivos de aprendizado
- [x] Adicionadas regras de GitHub Issues, branches, commits e PRs
- [x] Mantida a regra de atualização contínua

## 13. Próxima tarefa recomendada

Como nada foi iniciado, a ordem recomendada agora é:

1. **FND-001 a FND-004** — criar o projeto Angular, repositório Git, estrutura de pastas e `.gitignore`
2. **UI-001 a UI-003** — Header, navegação e layout base
3. **CAT-001 a CAT-004** — modelo de produto, ProductService, ProductList, ProductCard
4. **PRD-001** — página de detalhe do produto
5. **CRT-001 a CRT-005** — CartService e página do carrinho
6. **CHK-001 e CHK-002** — checkout simulado básico
7. Seguir então para tamanhos (CAT-009, PRD-003, CRT-006), responsividade (UI-006) e API (Épico 08)

> A ordem pode mudar conforme o andamento real. Toda mudança relevante deve ser registrada na próxima atualização.
