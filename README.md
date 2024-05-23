
# Carrinho de Compras Dinâmico com API do Mercado Livre

Este projeto consiste em um carrinho de compras totalmente dinâmico, onde os produtos são obtidos diretamente da API do Mercado Livre. Utilizando a metodologia de desenvolvimento orientado a testes (TDD - Test Driven Development), garantimos a confiabilidade e qualidade do código.




## Funcionalidades

- Busca de Produtos: Realiza buscas de produtos na API do Mercado Livre.
- Adicionar ao Carrinho: Adiciona produtos ao carrinho de compras.
- Remover do Carrinho: Remove produtos do carrinho de compras.
- Visualizar Carrinho: Exibe os produtos adicionados ao carrinho.
- Calcular Total: Calcula o valor total dos produtos no carrinho.
- Persistência de Dados: Armazena o estado do carrinho de compras no localStorage do navegador para que os dados persistam após recarregar a página.
- bus
- Busca na API de CEPs e exibe o endereço do CEP.

## Tecnologias Utilizadas

- Frontend: HTML, CSS, JavaScript
- API: Mercado Livre, awesomeapi e BrasilAPI
- Teste: Jest

## Instalação e Uso

### Pré-requisitos
 - Node.js instalado

### Passos para rodar o projeto

1. Clone o repositório:
```bash
git clone git@github.com:GabrielReis1/Shopping-Cart.git
```
2. Navegue até o diretório do projeto:
```bash
 cd Shopping-Cart
```
3. Instale as dependências:
```bash
 npm install
```
4. Rode os testes para garantir que tudo está funcionando corretamente:
```bash
npm test
```
5. Inicie a Aplicação:
```bash
npm start
```

### Estrutura do projeto

```markdown
    /src
    - main.js
    - style.css
        /helpers 
            - cartFunctions.js
            - cepFunctions.js
            - fetchFunctions.js
            - shopFunctions.js
        /img
            - logo.png
        /tests
            /mocks
                - fetchSimulator.js
                - product.js
                - search.js
            - fetchProduct.test.js
            - fetchProductList.js
```

### Detalhes dos Arquivos

- **main.js**: Contém as funções para carregar os itens salvos no carrinho.
- **style.css**: Estilos CSS para a interface da aplicação.
- **cartFunctions.js**: Contém as funções para retornar todos os itens do carrinho salvos no localStorage, que adiciona um producto ao carrinho e que remover um product do carrinho.
- **cepFunctions.js**: Contém funções para buscar e exibir endereços com base em um CEP fornecido pelo usuário. 
- **shopFunctions**: Define várias funções que são usadas para criar elementos HTML dinamicamente, carrega o preço total dos produtos do carrinho armazenado no localStorage e exibe na página, busca um endereço correspondente a um CEP fornecido e o exibe na interface do usuário.
- **/tests**: Contém os arquivos de teste para garantir que as funcionalidades estão funcionando corretamente.

## Desenvolvimento Orientado a Testes (TDD)

A implementação deste projeto foi realizada seguindo os princípios do TDD. Isso significa que para cada funcionalidade, foi escrito um teste antes de implementar a funcionalidade em si. Esse processo ajuda a entender os requisitos e garante que o código atenda a todos os casos de uso esperados.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

---

**Autor**: Gabriel Reis

**Contato**: gabrielreis.santos@outlook.com

---
