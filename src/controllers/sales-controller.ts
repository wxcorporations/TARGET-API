import { SaleRepositoryInMemory } from '../infra/repository/sales-repository-In-memory';
import { Sale } from '../core/Sale';

const repository = new SaleRepositoryInMemory()

export const list = async (req:any, res:any) => {
    try {
        const data = await repository.getAll()
        
        let saleOrderned = ('order' in req.query)
            ? Sale.orderSales(data, req.query.order) : data

        console.log(req.query)

        const result = saleOrderned 
            ? await Sale.filteSales(saleOrderned, req.query)
            : saleOrderned

        res.status(200).json({ status: 'ok', data: result })
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}