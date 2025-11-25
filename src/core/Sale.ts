import { ORDER } from "../config/constants";

export interface ISaleDTO {
    vendedor: string,
    valor: number,
    id?: number,
}

export class Sale {
    private readonly vendedor: string;
    private readonly valor: number;
    private readonly id?: number

    constructor({ valor, vendedor, id }: ISaleDTO) {
        Sale.validate({valor, vendedor, id})

        this.vendedor = vendedor
        this.id = id
        this.valor = valor
    }

    static validate({ valor, vendedor, id }: ISaleDTO){
        if (!valor || !vendedor || !id ) throw new Error('Campos obrigatorios [ valor | vendedor | id ]')
        if (Number(valor) <= 0) throw new Error('Valor deve ser do tipo numerico positivo')
    }

    static orderSales(data: ISaleDTO[] , order: 'cre' | 'dec') {
        const _data = data.map((d) => d ).sort((a:any, b:any) => b.valor - a.valor)
        return order === ORDER.DECRECENTE ? _data : _data.reverse()
    }
}