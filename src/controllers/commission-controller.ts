import { SaleRepositoryInMemory } from '../infra/repository/sales-repository-In-memory';
import { Finance } from '../core/Finance';
import { Sale, ISaleFilters } from '../core/Sale';

const repository = new SaleRepositoryInMemory()


export const list = async (req:any, res:any) => {
    try {
        const data = await repository.getAll()
        
        const reportSale = Finance.createReportCommissions(data)

        let result = ('order' in req.query && reportSale !== false)
            ? Sale.orderSales(reportSale, req.query.order) : reportSale

        res.status(200).json({ status: 'ok', data: result })
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}
