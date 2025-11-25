import { SaleRepositoryInMemory } from '../infra/repository/sales-repository-In-memory';
import { Finance } from '../core/Finance';
import { Sale } from '../core/Sale';

const repository = new SaleRepositoryInMemory()

export const list = async (req:any, res:any) => {
    try {
        const data = await repository.getAll()
        
        const reportSale = Finance.createReportCommissions(data)

        const result = ('order' in req.query && reportSale !== false)
            ? Sale.orderSales(reportSale, req.query.order) : reportSale

        res.status(200).json({ status: 'ok', data: result })
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}

export const filter = async (req:any, res:any) => {
    try {
        // const repository = new SaleRepositoryInMemory()
        // nome

        // maior que 

        // menor que 

        // entre 

        // 
        const data = await repository.getAll()
        const result = Finance.createReportCommissions(data)

        res.status(200).json({ status: result })
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}

export const register = async (req:any, res:any) => {
    try {
        res.status(200).json({ status: 'commission'})
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}


export const update = async (req:any, res:any) => {
    try {
        res.status(200).json({ status: 'commission'})
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}