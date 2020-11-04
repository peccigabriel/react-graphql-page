Olá, tudo bem? Vou escrever aqui embaixo algumas considerações e suposições durante o desenvolvimento desse teste.

O challenge está publicado na MASTER e não na MAIN. 

Execute: npm i ou npm install para instalar as dependências.

Execute: npm start para executar o projeto.

Qualquer dúvida ou problema pra executar estou à disposição


- ALTERAÇÃO NOS DADOS DE ENTRADA

Precisei alterar os dados "numberOfPeople" e "weeklyRecipes" no front, pois precisei fazer um match correto com o que vem do listPlans, seguindo o Adobe XD, alguns valores no existiam no listPlans


- DISTRIBUIÇÃO DOS ARQUIVOS

Bom, optei por não componentizar a tela, pois pos se tratar de uma tela só não vi vantagens em quebrar os componentes que eu utilizei como o button por exemplo, por isso apliquei toda a lógica somente em uma página visto que o JSX da página é bem pequeno se não considerarmos os eventos.

A configuração do apollo está sendo feita na pasta service e seu provider é chamado no App.js (nível mais alto da aplicação).

Na pasta graphQL criei os dois arquivos (querie e mutation) que utilizei na comunicação do graphQl com o API de vocês.

Por fim na pasta pages/jungsoft, vocês irão encontram o index.js com todo JSX, logica e comunicação com o graphQL, nessa mesma pasta se encontra o arquivo SCSS.


- LIBS E ADICIONAIS

Optei por utilizar o padrão BEM do CSS para construção dessa página, acredito ser um facilitador na leitura do código se usado corretamente.

Utilizei SASS como pré processador do CSS, utilizo ele diariamente por isso achei mais fácil trabalhar desse modo.

A única lib externa utilizada no projeto foi o sweetalert que gera os modais conforme a tratativa do button "Quero assinar"


- USO DOS HOOKS

Procurei utilizar os hooks da melhor maneira possível, de modo em que o código seja fácil de ser lido e curto de maneira geral.



Agradeço pela oportunidade, adoraria receber feedbacks sobre possíveis melhorias no código!

