## GET /commission

Retorna a lista de vendas já calculadas para comissão, permitindo aplicar filtros por valor, intervalo de valores, nome do vendedor e ordenação.

### Query parameters

Todos os parâmetros são opcionais.  
Se todos forem enviados com valores “falsy” (vazios, 0, null, undefined), a lista completa será retornada (sem filtro).

| Parâmetro     | Tipo    | Descrição                                                                                  | Exemplo                    |
|---------------|---------|--------------------------------------------------------------------------------------------|----------------------------|
| value         | number  | Filtra vendas com valor exatamente igual ao informado (usa `filter.value`).               | `?value=1000`              |
| min_value     | number  | Filtra vendas com valor maior que o mínimo informado (usa `filter.min_value`).            | `?min_value=500`           |
| max_value     | number  | Filtra vendas com valor menor que o máximo informado (usa `filter.max_value`).            | `?max_value=2000`          |
| name          | string  | Filtra vendas pelo nome exato do vendedor (usa `filter.name`).                            | `?name=Joao`               |
| order         | string  | Ordena o resultado pelo campo `valor`. Aceita `cre` (crescente) ou `dec` (decrescente).   | `?order=dec`               |

- Quando `order` é informado, a lista é ordenada usando `Sale.orderSales(data, order)`.  
- A combinação de `value`, `min_value`, `max_value` e `name` é aplicada em conjunto via `Sale.filteSales(data, filter)`.

### Comportamento dos filtros

1. value  
   - Se definido (`value` truthy), apenas vendas com `valor === value` serão retornadas.

2. min_value  
   - Se definido, apenas vendas com `valor > min_value` serão retornadas.

3. max_value  
   - Se definido, apenas vendas com `valor < max_value` serão retornadas.

4. name  
   - Se definido, apenas vendas com `vendedor === name` serão retornadas.

5. Nenhum filtro ativo  
   - Se `value`, `min_value`, `max_value` e `name` forem todos ausentes/falsy, a rota deve retornar a lista completa sem filtragem.

### Exemplo de requisição

```
GET /commission?name=Joao&min_value=500&max_value=5000&order=dec
```