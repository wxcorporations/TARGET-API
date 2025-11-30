# GET /sales

Rota responsável por listar vendas com suporte a filtros e ordenação pelo valor da venda.

---

## Método e URL

- **Método:** `GET`  
- **Endpoint:** `/sales`  

---

## Estrutura da venda (Sale)

Cada item retornado representa uma venda e segue a interface:


```ts
interface ISaleDTO {
vendedor: string;
valor: number;
id?: number;
}

```

- **vendedor** (`string`) – Nome do vendedor.  
- **valor** (`number`) – Valor da venda (deve ser numérico positivo).  
- **id** (`number`) – Identificador da venda.  

> Observação: internamente a classe `Sale.validate` exige `valor`, `vendedor` e `id` como obrigatórios e valida que `valor > 0`.

---

## Parâmetros de filtro (query string)

A rota aceita filtros opcionais definidos por `ISaleFilters`:


```shell
type order = 'cre' | 'dec';

type ISaleFilters = {
value?: number;
min_value?: number;
max_value?: number;
name?: string;
order?: order;
};
```

### `name`

- **Tipo:** `string`  
- **Opcional**  
- **Descrição:** Filtra vendas cujo `vendedor` seja **exatamente igual** ao valor informado.  
- **Exemplo:**  
  - `GET /sales?name=Joao`

### `value`

- **Tipo:** `number`  
- **Opcional**  
- **Descrição:** Filtra vendas cujo `valor` seja **exatamente igual** ao valor informado.  
- **Exemplo:**  
  - `GET /sales?value=100`

### `min_value`

- **Tipo:** `number`  
- **Opcional**  
- **Descrição:** Filtra vendas cujo `valor` seja **estritamente maior** que `min_value`.  
- **Exemplo:**  
  - `GET /sales?min_value=100`  
    (retorna vendas com `valor > 100`)

### `max_value`

- **Tipo:** `number`  
- **Opcional**  
- **Descrição:** Filtra vendas cujo `valor` seja **estritamente menor** que `max_value`.  
- **Exemplo:**  
  - `GET /sales?max_value=500`  
    (retorna vendas com `valor < 500`)

### Combinação dos filtros

Todos os filtros são combinados com **AND**.  

Equivalente ao seguinte pseudo-código:



```shell
const isName = filter.name ? sale.vendedor === filter.name : true;
const isValue = filter.value ? sale.valor === filter.value : true;
const isMinValue = filter.min_value ? sale.valor > filter.min_value : true;
const isMaxValue = filter.max_value ? sale.valor < filter.max_value : true;

return isName && isValue && isMinValue && isMaxValue;
```

Ou seja, a venda só é retornada se **todas** as condições configuradas forem verdadeiras.

---

## Ordenação de resultados

A ordenação é feita com base no campo `valor`.

### Parâmetro `order`

- **Tipo:** `'cre' | 'dec'`  
- **Opcional**  
- **Descrição:** Define a ordenação das vendas pelo campo `valor`.  

Valores possíveis:

- `dec` – Ordenação **decrescente** (do maior valor para o menor).  
- `cre` – Ordenação **crescente** (do menor valor para o maior).  

Regra interna simplificada:


```shell
static orderSales(data: ISaleDTO[], order: order) {
const _data = data
.map((d) => d)
.sort((a, b) => b.valor - a.valor); // decrescente por padrão

return order === ORDER.DECRECENTE ? _data : _data.reverse();
}

```

---

## Exemplos de requisição

### 1. Listar todas as vendas


```shell
GET /sales

```

### 2. Listar vendas de um vendedor específico


```shell
GET /sales?name=Joao

```

### 3. Vendas com valor exato


```shell
GET /sales?value=200

```

### 4. Vendas acima de 100, ordenadas do maior para o menor


```shell
GET /sales?min_value=100&order=dec

```

### 5. Vendas abaixo de 500, ordenadas do menor para o maior


```shell
GET /sales?max_value=500&order=cre

```
