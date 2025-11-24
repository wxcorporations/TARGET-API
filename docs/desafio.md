# DESAFIO

[voltar](../README.md)

Criar uma tela de “consulta de movimentação de estoque”, onde eu
possa listar as movimentações de entrada e saída de mercadorias. Além disso,
que eu também possa nessa tela lançar ou estornar as movimentações, sendo:
 - As propriedades de cada lançamento são: Id, descrição, código do
produto, data, qtde.
 - O Id deve ser o identificador único do lançamento
 - A descrição deve ser alfanumérica para ajudar o usuário a identificar
qual movimentação foi realizada
 - A data deve ser a data que foi feito a movimentação.
 - A qtde da movimentação pode ser positiva ou negativa.
 - A tela deve ter filtros para que possa auxiliar na consulta das
informações.
 - Deve ser possível estornar uma movimentação

**Json para auxiliar no desafio:**

```json
[ 
  { 
    "codigoProduto": 101, 
    "descricaoProduto": "Caneta Azul", 
    "estoque": 150, 
    "unidade": [ 
      { "unidade": "UN", "fator": 1 }, 
      { "unidade": "CX", "fator": 12 } 
    ] 
  }, 
  { 
    "codigoProduto": 102, 
    "descricaoProduto": "Caderno Universitário", 
    "estoque": 75, 
    "unidade": [ 
      { "unidade": "UN", "fator": 1 }, 
      { "unidade": "CX", "fator": 10 } 
    ] 

  }, 
  { 
    "codigoProduto": 103, 
    "descricaoProduto": "Borracha Branca", 
    "estoque": 200, 
    "unidade": [ 
      { "unidade": "UN", "fator": 1 }, 
      { "unidade": "DP", "fator": 5 } 
      { "unidade": "CX", "fator": 20 } 
    ] 
  }, 
  { 
    "codigoProduto": 104, 
    "descricaoProduto": "Lápis Preto HB", 
    "estoque": 320, 
    "unidade": [ 
      { "unidade": "UN", "fator": 1 }, 
      { "unidade": "DP", "fator": 6 }, 
 
      { "unidade": "CX", "fator": 24 } 
    ] 
  }, 
  { 
    "codigoProduto": 105, 
    "descricaoProduto": "Marcador de Texto Amarelo", 
    "estoque": 90, 
    "unidade": [ 
      { "unidade": "UN", "fator": 1 }, 
      { "unidade": "CX", "fator": 6 } 
    ] 

  } 
] 
 

```

## 2 Desafio
2. Considerando que o json abaixo tem registros de vendas de um time
comercial, faça um programa que leia os dados e calcule a comissão de cada
vendedor, seguindo a seguinte regra para cada venda:
 - Vendas abaixo de R$100,00 não gera comissão
 - Vendas abaixo de R$500,00 gera 1% de comissão
 - A partir de R$500,00 gera 5% de comissão
E que exiba o resultado ranqueado do valor total de vendas e do valor total de
comissão.
**Json para auxiliar no desafio**
```JSON
{
    "vendas": [
        { "vendedor": "João Silva", "valor": 1200.50 },
        { "vendedor": "João Silva", "valor": 950.75 },
        { "vendedor": "João Silva", "valor": 1800.00 },
        { "vendedor": "João Silva", "valor": 1400.30 },
        { "vendedor": "João Silva", "valor": 1100.90 },
        { "vendedor": "João Silva", "valor": 1550.00 },
        { "vendedor": "João Silva", "valor": 1700.80 },
        { "vendedor": "João Silva", "valor": 250.30 },
        { "vendedor": "João Silva", "valor": 480.75 },
        { "vendedor": "João Silva", "valor": 320.40 },
        { "vendedor": "Maria Souza", "valor": 2100.40 },
        { "vendedor": "Maria Souza", "valor": 1350.60 },
        { "vendedor": "Maria Souza", "valor": 950.20 },
        { "vendedor": "Maria Souza", "valor": 1600.75 },
        { "vendedor": "Maria Souza", "valor": 1750.00 },
        { "vendedor": "Maria Souza", "valor": 1450.90 },
        { "vendedor": "Maria Souza", "valor": 400.50 },
        { "vendedor": "Maria Souza", "valor": 180.20 },
        { "vendedor": "Maria Souza", "valor": 90.75 },
        { "vendedor": "Carlos Oliveira", "valor": 800.50 },
        { "vendedor": "Carlos Oliveira", "valor": 1200.00 },
        { "vendedor": "Carlos Oliveira", "valor": 1950.30 },
        { "vendedor": "Carlos Oliveira", "valor": 1750.80 },
        { "vendedor": "Carlos Oliveira", "valor": 1300.60 },
        { "vendedor": "Carlos Oliveira", "valor": 300.40 },
        { "vendedor": "Carlos Oliveira", "valor": 500.00 },
        { "vendedor": "Carlos Oliveira", "valor": 125.75 },
        { "vendedor": "Ana Lima", "valor": 1000.00 },
        { "vendedor": "Ana Lima", "valor": 1100.50 },
        { "vendedor": "Ana Lima", "valor": 1250.75 },
        { "vendedor": "Ana Lima", "valor": 1400.20 },
        { "vendedor": "Ana Lima", "valor": 1550.90 },
        { "vendedor": "Ana Lima", "valor": 1650.00 },
        { "vendedor": "Ana Lima", "valor": 75.30 },
        { "vendedor": "Ana Lima", "valor": 420.90 },
        { "vendedor": "Ana Lima", "valor": 315.40 }
    ]
}
```

Critério de Aceite Técnico:
· Obrigatório utilizar frontend em Angular
· Recomendado utilizar SPA, dessa forma, teremos um serviço apenas para a
API e o APP (o template do próprio Visual Studio já cria a API dessa forma).
· Recomendado utilizar Material Angular para os objetos da tela, como inputs,
tabelas, grids, ou o que for do agrado para criação da página.