import { ORDER } from "../config/constants";

export interface ISaleDTO {
    vendedor: string,
    valor: number,
    id?: number,
}

export type order = 'cre' | 'dec'

export type ISaleFilters = {
    value?: number,
    min_value?: number,
    max_value?: number,
    name?: string,
    order?: order
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

    static orderSales(data: ISaleDTO[] , order: order) {
        const _data = data.map((d) => d ).sort((a:any, b:any) => b.valor - a.valor)
        return order === ORDER.DECRECENTE ? _data : _data.reverse()
    }

    static async filteSales(data:ISaleDTO[] , filter: ISaleFilters): Promise<ISaleDTO[]> {
        return data.filter(report => {
            const isName = filter.name ? report.vendedor === filter.name : true
            const isValue = filter.value ? report.valor === filter.value : true
            const isMinValue = filter.min_value ? (report.valor > filter.min_value) : true
            const isMaxValue = filter.max_value ? (report.valor < filter.max_value) : true

            return isName && isValue && isMinValue && isMaxValue
        })
    }

    static async create({ valor, vendedor, id }: ISaleDTO)  {
        Sale.validate({valor, vendedor, id})

        return {
            vendedor,
            id,
            valor,
        }
    }
}