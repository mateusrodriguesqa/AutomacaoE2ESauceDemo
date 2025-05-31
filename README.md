# Automação E2E - SauceDemo com Playwright

Este projeto tem como objetivo realizar testes de ponta a ponta (E2E) utilizando o [Playwright](https://playwright.dev/) com JavaScript, validando o fluxo completo de compra na plataforma de testes [SauceDemo](https://www.saucedemo.com/).

## Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- JavaScript (ES6+)
- Node.js
- GitHub Actions (CI/CD)

## Objetivo do Projeto

Automatizar o fluxo de:
1. Login na aplicação
2. Adição de produtos ao carrinho
3. Verificação do carrinho
4. Preenchimento do formulário de checkout
5. Finalização do pedido

## Estrutura de Pastas

```
playwright-e2e-saucedemo/
├── tests/
│   └── e2e/
│       ├── pages/          # Page Objects
│       ├── specs/          # Casos de Teste
│       └── utils/          # Helpers e configurações
├── environment/            # URLs, dados e variáveis globais
├── playwright.config.js    # Configuração do Playwright
├── .gitignore
└── package.json
```

## Como Executar os Testes

### Instale as dependências:
```bash
npm install
```

### Instale os browsers do Playwright:
```bash
npx playwright install --with-deps
```

### Execute todos os testes:
```bash
npx playwright test
```

### Execute testes em modo UI:
```bash
npx playwright test --ui
```

### Execute em navegador específico:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Abra o relatório HTML gerado:
```bash
npx playwright show-report
```

## Relatório Técnico

Um relatório técnico detalhado em `.docx` foi incluído neste repositório, contendo:
- Validações por página
- Cobertura de testes
- Estratégias utilizadas (POM, config centralizada, etc)
- Execução em múltiplos navegadores

## Boas Práticas
- Page Object Model (POM)
- Separação clara entre lógica e testes
- Uso de `expect()` para validações robustas
- Testes confiáveis e sincronizados com `waitFor()`

---

Desenvolvido por Mateus Rodrigues 
