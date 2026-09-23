# Ecommerce-loja

> E-commerce de roupas oversized para treino — projeto de portfólio com potencial de evoluir para uma marca real.

**Status atual:** 🟢 Em desenvolvimento — Header, catálogo de produtos e identidade visual já funcionais. Veja o [backlog completo](./backlog_mvp.md) para o roteiro detalhado.

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
| --- | --- |
| Front-end | Angular, TypeScript, HTML, CSS |
| Back-end | Node.js, API REST |
| Futuro (sob demanda) | Banco de dados, ORM, autenticação, testes automatizados, gerenciamento de estado, gateway de pagamento, Docker, CI/CD |

## Funcionalidades

- [x] Header com logo, menu (hambúrguer no mobile) e ícone de carrinho com badge dinâmica
- [x] Listagem de produtos com imagem, nome, preço e categoria (grid responsivo)
- [x] Carrinho de compras com persistência local (adicionar produto validado)
- [x] Identidade visual aplicada (paleta de cores e tipografia)
- [ ] Filtro por categoria e busca por nome *(pausado temporariamente — ver backlog)*
- [ ] Ordenação por preço *(pausado temporariamente — ver backlog)*
- [ ] Seção de destaque (Hero) na Home
- [ ] Página de detalhes do produto
- [ ] Remover item / editar quantidade no carrinho
- [ ] Checkout simulado (sem pagamento real)
- [ ] API própria em Node.js consumida pelo front-end

Fora do escopo do MVP por enquanto: pagamento real, frete, autenticação de usuário, painel administrativo, banco de dados, seleção de tamanho — ver seção "Fora do MVP" no backlog.

## Estrutura do projeto

```
Ecommerce-loja/
├── public/
│   └── data/
│       └── products.json
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── product-list/
│   │   │   └── product-card/
│   │   ├── services/
│   │   │   ├── product.service.ts
│   │   │   └── cart.service.ts
│   │   ├── models/
│   │   │   └── product.ts
│   │   ├── app.ts
│   │   └── app.html
│   └── styles.css        (tokens globais: cores e tipografia)
├── backend/            (futuro — API Node.js)
├── backlog_mvp.md
├── TODOS.md
└── README.md
```

Componentes futuros (Épico 05 em diante): `product-detail/`, `cart/`, `checkout/`.

## Como rodar o projeto

```bash
# clonar o repositório
git clone https://github.com/MarcoosChina/Ecommerce-loja.git
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

1. **Fase 0 — Organização:** ✅ estrutura do projeto, Git/GitHub, fluxo de branches
2. **Fase 1 — MVP Front-end:** 🟡 em andamento — Header, catálogo e identidade visual prontos; faltam detalhe do produto, carrinho completo, checkout, filtros/busca/ordenação (retomados após a identidade), Hero section
3. **Fase 2 — API:** API própria em Node.js, integração com o front-end
4. **Fase 3 — Persistência:** avaliação e integração de banco de dados
5. **Fase 4 — Compra simulada completa:** fluxo ponta a ponta validado
6. **Fase 5 — Profissionalização:** testes, painel administrativo, autenticação, estoque, deploy, documentação completa

Roadmap detalhado, épicos e critérios técnicos: ver [`backlog_mvp.md`](./backlog_mvp.md).

## Objetivos de aprendizado

Projeto desenvolvido praticando, no contexto do curso SCTEC Carreira Tech: HTML semântico, CSS e responsividade, JavaScript, TypeScript, Angular (componentes, rotas, serviços, formulários), consumo de API, Node.js, integração front-end/back-end, Git/GitHub e organização de projeto.

## Marca

Nome ainda **a definir**. Escopo inicial de produto: **somente camisetas oversized** (moletom, calça e shorts ficam para uma expansão futura).

Identidade visual já definida:

| Token | Valor |
| --- | --- |
| Fundo | `#16151A` (Asfalto) |
| Superfície (cards) | `#221F26` (Concreto) |
| Texto principal | `#EDEAE4` (Giz) |
| Texto secundário | `#8B8790` (Fumaça) |
| Destaque (CTAs, preço) | `#C4551F` (Ferro Oxidado) |
| Secundária (uso raro) | `#4C6B8A` (Aço) |

Tipografia: títulos e preço em fonte condensada/pesada (Archivo Black), corpo de texto em Inter.

## Licença

A definir.
