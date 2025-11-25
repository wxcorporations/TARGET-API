import dataJson from '../../../store/sales-db.json'
import { Sale, ISaleDTO } from '../../core/Sale';

type filteSale = {
    value?: number,
    min_value?: number,
    max_value?: number,
    name: string
}

type SaleFields = {
    vendedor?: string,
    valor?: number
}

type order = 'cre' | 'dec'

export class SaleRepositoryInMemory{
    private readonly data: ISaleDTO[]

    constructor() {
        this.data = dataJson.vendas
    }

    async getAll(order?: order) {
        return order 
            ? Sale.orderSales(this.data, order)
            : this.data
    }

    async getByName(name: string): Promise<ISaleDTO[]|[]> {
        return this.data.filter(report => {
            return report.vendedor === name
        }) 
    }

    async getById(id: number): Promise<ISaleDTO|null> {
        const data = this.data.find(report => report.id === id) 
        return  data ?? null
    }

    async getFilter(filter: filteSale): Promise<ISaleDTO[]|[]> {
        return this.data.filter(report => {
            const isName = filter.name ? report.vendedor === filter.name : true
            const isValue = filter.value ? report.valor === filter.value : true
            const isMinValue = filter.min_value ? (report.valor > filter.min_value) : true
            const isMaxValue = filter.max_value ? (report.valor < filter.max_value) : true

            return isName && isValue && isMinValue && isMaxValue
        })
    }

    // editar
    async upadateById(id:number, data: SaleFields ): Promise<ISaleDTO|null> {
        let sale = await this.getById(id)
        sale && Object.assign(sale, data)
        return sale ?? null
    }

    async create(data: ISaleDTO): Promise<ISaleDTO|unknown> {
        try {
            const _sale = await Sale.create({ id: this.data.length, vendedor: data.vendedor, valor: data.valor })
            this.data.push(_sale)
            
            return data

        } catch (error) {
            console.error(error)
        }
    }
}