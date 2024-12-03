# Teste Montik

## Vite - React - Typescript - Tailwind

# Informações sobre o teste :)

O Objetivo deste teste é montar uma página de um produto de um ecommerce

Nosso principal objetivo é ver a sua linha de raciocínio, então ja deixamos preparado uma página HTML e CSS para isto.

Temos uma api JSON que te fornece os dados de produtos do ecommerce 
Esses produtos possui varios atributos, como: titulo, imagem, preço além de varias variantes (como cor e tamanho)
A página HTML de exemplo, é estática, então você terá que preecher todos os dados do produto vindos da api, na página HTML

Esse teste possui alguns niveis, você deverá cumprir as seguintes tarefas:

1.  Preencher o campo nome do prudoto, imagem e preço
2.  Preencher os campos de seleção das variantes (cor, voltagem, etc). É importante você prever que um produto pode ter de zero a 3 variantes
3.  Quando o cliente escolher uma variante, indicar se o produto tem ou não estoque. (Para mostrar a resposta, fique livre para escolher a forma de exibição, você pode usar um alert(), ou utilizar qualquer forma mais bonita para isso)
4.  Enviar os dados de compra para o checkout


## Requisitos
Precisamos que tenha algumas coisas para poder rodar:
- Computador
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)


## APIs

### Carregar Dados dos Produtos

O produto é obtido através de uma requisição `get`
#### Produto 1
```
https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-1.json
```
#### Produto 2
```
https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-2.json
```


Exemplo de resposta (Quantidade de propriedades foi reduzida para apenas o que será usado):

````javascript
{
    "id": 127809233,
    "title": "Camisa Prime - Podcast",
    "options": ["Cor","Tamanho"],
    "values": [["Preto","Azul"],["P", "M"]],
    "variants": [
        {
            "id": 499249469,
            "product_id": 127809233,
            "price": "50.00",
            "values": [ "Preto", "P"],
            "image_id": 347611168,
            "inventory_quantity": 20,
            "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        },{
            "id": 499249469,
            "product_id": 127809233,
            "price": "50.00",
            "values": [ "Azul", "P"],
            "image_id": 347611168,
            "inventory_quantity": 20,
            "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        }
    ],
    // imagem principal do produto
    "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png",
    // imagens das variantes
    "images": [
        {
            "id": 347611168,
            "product_id": 127809233,
            "src": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        }
    ]
}
````
## API do Checkout

O produto deve ser enviado através do método `post`
```
https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c
```

O formato de envio é um array com um objeto seguindo a seguinte estrutura:
````javascript
[{
  values: ["Preto", "p"],
  quantity: 1,
  product_id: 1,
  variant_id: 1,
}]
````