# Backlog MVP — E-commerce da Marca

> **Versão:** 0.2.3 (regra de HTML semântico)
> **Status geral do projeto:** ainda não iniciado — nenhum código escrito
> **Nome da marca:** a definir
> **Nicho:** roupas oversized para treino
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
| [x] | FND-001 | Estrutura base Angular | todo | alta | --- |
| [x] | FND-002 | Configurar Git/GitHub | todo | alta | --- |
| [] | FND-003 | Definir estrutura de pastas | todo | alta | --- |
| [x] | FND-004 | Criar `.gitignore` | todo | alta | --- |
| [ ] | FND-005 | Definir padrão de commits | todo | média | --- |
| [ ] | FND-006 | Documentar fluxo de branches/PRs | todo | média | --- |
| [ ] | FND-007 | Avaliar estrutura Node.js | todo | alta | --- |
| [ ] | FND-008 | Criar API Node.js inicial | todo | alta | --- |
| [ ] | FND-009 | Criar `.env.example` quando necessário | todo | média | --- |

**TODO:** finalizar organização do repositório · definir estrutura de diretórios · iniciar API Node.js quando o front-end estiver pronto para integração

### Épico 02 — Marca e identidade

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | BRD-001 | Definir nome da marca | todo | alta | --- |
| [ ] | BRD-002 | Definir paleta de cores | todo | alta | --- |
| [ ] | BRD-003 | Definir tipografia | todo | alta | --- |
| [ ] | BRD-004 | Criar logo provisório | todo | média | --- |
| [ ] | BRD-005 | Criar variáveis/tokens de estilo | todo | média | --- |
| [ ] | BRD-006 | Aplicar identidade visual | todo | alta | --- |

### Épico 03 — Layout e navegação

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | UI-001 | Header | todo | alta | --- |
| [ ] | UI-002 | Navegação principal | todo | alta | --- |
| [ ] | UI-003 | Layout base | todo | alta | --- |
| [ ] | UI-004 | Home | todo | alta | --- |
| [ ] | UI-005 | Footer | todo | média | --- |
| [ ] | UI-006 | Responsividade mobile | todo | alta | --- |
| [ ] | UI-007 | Loading states | todo | média | --- |
| [ ] | UI-008 | Error states | todo | média | --- |
| [ ] | UI-009 | Catálogo vazio | todo | média | --- |
| [ ] | UI-010 | Acessibilidade básica | todo | média | --- |

### Épico 04 — Catálogo

| Feito | ID | Tarefa | Status | Prioridade | Branch/PR |
| --- | --- | --- | --- | --- | --- |
| [ ] | CAT-001 | Modelo `Product` inicial | todo | alta | --- |
| [ ] | CAT-002 | ProductService | todo | alta | --- |
| [ ] | CAT-003 | ProductList | todo | alta | --- |
| [ ] | CAT-004 | ProductCard | todo | alta | --- |
| [ ] | CAT-005 | Filtro por categoria | todo | média | --- |
| [ ] | CAT-006 | Busca por nome | todo | média | --- |
| [ ] | CAT-007 | Ordenação por preço | todo | baixa | --- |
| [ ] | CAT-008 | Adaptar categorias ao nicho | todo | alta | --- |
| [ ] | CAT-009 | Adicionar tamanhos | todo | alta | --- |
| [ ] | CAT-010 | Revisar modelo de produto | todo | alta | --- |
| [ ] | CAT-011 | Estado sem resultados | todo | média | --- |

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
| [ ] | CRT-001 | CartService | todo | alta | --- |
| [ ] | CRT-002 | Adicionar produto | todo | alta | --- |
| [ ] | CRT-003 | Remover produto | todo | alta | --- |
| [ ] | CRT-004 | Persistência local | todo | alta | --- |
| [ ] | CRT-005 | Página do carrinho | todo | alta | --- |
| [ ] | CRT-006 | Tamanho no item | todo | alta | --- |
| [ ] | CRT-007 | Alterar quantidade | todo | alta | --- |
| [ ] | CRT-008 | Subtotal | todo | alta | --- |
| [ ] | CRT-009 | Quantidade total de itens | todo | média | --- |
| [ ] | CRT-010 | Carrinho vazio | todo | média | --- |
| [ ] | CRT-011 | Resumo do pedido | todo | média | --- |

**Regra:** produtos iguais com tamanhos diferentes devem poder ser tratados como itens distintos.

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
