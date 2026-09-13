# Ecommerce-loja

> E-commerce de roupas oversized para treino — projeto de portfólio com potencial de evoluir para uma marca real.

**Status atual:** 🟡 Em planejamento — nenhum código escrito ainda. Veja o [backlog completo](./backlog_mvp_v0.2.3.md) para o roteiro detalhado.

---

## Sobre o projeto

Este repositório contém o desenvolvimento de um catálogo de e-commerce, construído como projeto de estudo dentro do curso de Front-End Angular (SCTEC), com a intenção de futuramente se tornar o catálogo oficial de uma marca própria de roupas oversized voltadas para treino.

O projeto prioriza:
- experiência de compra simples e moderna
- catálogo de produtos bem estruturado
- responsividade
- arquitetura organizada entre front-end e back-end
- código limpo, semântico e sustentável
- espaço para evoluir com pagamentos, estoque e autenticação no futuro

> Nenhuma tecnologia é adicionada só para parecer profissional — cada ferramenta entra quando resolve uma necessidade real do momento atual do projeto.

## Stack

| Camada | Tecnologias |
|---|---|
| Front-end | Angular, TypeScript, HTML, CSS |
| Back-end | Node.js, API REST |
| Futuro (sob demanda) | Banco de dados, ORM, autenticação, testes automatizados, gerenciamento de estado, gateway de pagamento, Docker, CI/CD |

## Funcionalidades planejadas (MVP)

- [ ] Listagem de produtos com imagem, nome, preço e categoria
- [ ] Filtro por categoria e busca por nome
- [ ] Ordenação por preço
- [ ] Seleção de tamanho (P/M/G/GG)
- [ ] Página de detalhes do produto
- [ ] Carrinho de compras com persistência local
- [ ] Checkout simulado (sem pagamento real)
- [ ] Layout responsivo (mobile-first)
- [ ] API própria em Node.js consumida pelo front-end

Fora do escopo do MVP por enquanto: pagamento real, frete, autenticação de usuário, painel administrativo, banco de dados — ver seção "Fora do MVP" no backlog.

## Estrutura do projeto (planejada)

```
Ecommerce-loja/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── product-list/
│   │   │   ├── product-card/
│   │   │   ├── product-detail/
│   │   │   ├── cart/
│   │   │   └── checkout/
│   │   ├── services/
│   │   │   ├── product.service.ts
│   │   │   └── cart.service.ts
│   │   ├── models/
│   │   │   └── product.ts
│   │   └── app.routes.ts
│   └── data/
│       └── products.json
├── backend/            (futuro — API Node.js)
├── backlog_mvp.md
├── TODOS.md
└── README.md
```

## Como rodar o projeto

> Ainda não aplicável — o projeto ainda não foi criado. Esta seção será preenchida assim que o `ng new` for executado (tarefa `FND-001` do backlog).

Quando estiver disponível, o fluxo será:

```bash
# clonar o repositório
git clone https://github.com/<seu-usuario>/Ecommerce-loja.git
cd Ecommerce-loja

# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
ng serve
```
Acesse `http://localhost:4200`.

## Padrões de código

- **HTML sempre semântico** — uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<form>`, evitando `<div>`/`<span>` genéricos sem necessidade.
- Componentes pequenos, com responsabilidade única
- Lógica de negócio fora do template — sempre no `.ts`
- Tipagem forte em TypeScript, evitando `any` sem necessidade real
- Acessibilidade básica (`alt`, `label`, ARIA quando necessário)
- Sem duplicação de código — extrair para serviço/utilitário quando necessário

Critérios completos de conclusão de tarefa estão na seção 9 (Definition of Done) do backlog.

## Fluxo de contribuição (uso solo com boas práticas de mercado)

```
Backlog → GitHub Issue → Branch → Desenvolvimento → Commit
→ Pull Request → Revisão → Merge na main → Atualização do backlog
```

Convenção de branches:
```
feature/nome-da-feature
fix/nome-do-problema
refactor/nome-do-refactor
docs/nome-da-documentacao
chore/nome-da-tarefa
```

## Roadmap

1. **Fase 0 — Organização:** estrutura do projeto, Git/GitHub, fluxo de branches, identidade visual provisória
2. **Fase 1 — MVP Front-end:** catálogo, busca, filtros, detalhe do produto, tamanhos, carrinho, checkout simulado, responsividade
3. **Fase 2 — API:** API própria em Node.js, integração com o front-end
4. **Fase 3 — Persistência:** avaliação e integração de banco de dados
5. **Fase 4 — Compra simulada completa:** fluxo ponta a ponta validado
6. **Fase 5 — Profissionalização:** testes, painel administrativo, autenticação, estoque, deploy, documentação completa

Roadmap detalhado, épicos e critérios técnicos: ver [`backlog_mvp.md`](./backlog_mvp.md).

## Objetivos de aprendizado

Projeto desenvolvido praticando, no contexto do curso SCTEC Carreira Tech: HTML semântico, CSS e responsividade, JavaScript, TypeScript, Angular (componentes, rotas, serviços, formulários), consumo de API, Node.js, integração front-end/back-end, Git/GitHub e organização de projeto.

## Marca

Nome da marca ainda **a definir**. O catálogo é construído desde já pensando em receber a identidade visual definitiva (paleta de cores, tipografia e logo) assim que estiver decidida — ver Épico 02 do backlog.

## Licença

A definir.
