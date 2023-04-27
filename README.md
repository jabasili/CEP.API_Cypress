Validação de chamada GET na rota https://cep-v2-americanas-npf.b2w.io/cep/ validando os resultados no response da chamada!

Verificado também cenário alternativo usando CEP inválido, conforme solicita a tarefa!


!!!ATENÇÃO!!!

Tenho por costume colocar no arquivo package.json os scripts abaixo para facilitação na abertura do Cypress e para rodar sem a parte grafica:

"scripts": { "cypress:open": "./node_modules/.bin/cypress open", "cypress:run": "./node_modules/.bin/cypress run"

Então para abrir o Cypress use o comando "npm run cypress:open"
