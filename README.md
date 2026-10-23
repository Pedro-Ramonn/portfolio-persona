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

## Publicação

Site: https://pedro-ramonn.github.io/portfolio-persona/

GitHub Pages deve usar GitHub Actions como fonte. O workflow de publicação executa testes e build, depois publica dist automaticamente a cada alteração integrada à main. Também pode ser executado manualmente na aba Actions.

A configuração base do Vite e o caminho do retrato respeitam o subdiretório /portfolio-persona/. A navegação usa hash, sem exigir redirecionamentos do servidor.

## Validação

Testes e build da implementação inicial passaram no GitHub Actions. Revisão visual em desktop/celular permanece pendente. Os documentos pessoais originais não estão no repositório.

Depois da aprovação final, a explicação de React será feita passo a passo usando o código deste projeto.
