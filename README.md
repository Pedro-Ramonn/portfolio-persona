# Pedro Ramon — Portfólio

Portfólio em React + Vite inspirado nos menus de Persona 5, com retrato personalizado, navegação por teclado, cinco seções e suporte a movimento reduzido.

## Executar

Requer Node.js 20.19+ e npm.

```sh
npm install
npm run dev
npm test
npm run build
```

## Estrutura

- `src/main.jsx`: componentes, estado, navegação e interações.
- `src/data.js`: conteúdo profissional baseado no currículo e na cover letter fornecidos.
- `src/styles.css`: composição visual, responsividade e animações.
- `public/pedro.png`: retrato estilizado.
- `.github/workflows/checks.yml`: testes e build dos pull requests.

Com o foco no menu, use as setas, Home e End para navegar. URLs com hash abrem seções diretamente. Fontes Barlow são carregadas do Google Fonts, com fallback local.

## Validação e revisão

Os dois testes de navegação e dados passaram localmente com `node --preserve-symlinks-main --preserve-symlinks src/data.test.js`. A instalação npm foi bloqueada pela rede do ambiente de desenvolvimento; build e revisão visual em desktop/celular permanecem pendentes. O workflow executa testes e build no GitHub.

A implementação está na branch `feat/portfolio`, para revisão por PR antes de integrar à `main`. Os documentos pessoais originais não estão no repositório.

Depois da aprovação final, a explicação de React será feita passo a passo usando o código deste projeto.
