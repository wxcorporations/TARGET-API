import { SaleRepositoryInMemory } from '../infra/repository/sales-repository-In-memory';
import { Finance } from '../core/Finance';



export const list = async (req:any, res:any) => {
    try {
        const repository = new SaleRepositoryInMemory()

        const data = ('order' in req.query)
            ? await repository.getAll(req.query.order)
            : await repository.getAll()

        res.status(200).json({ status: 'ok', data })
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}

export const filter = async (req:any, res:any) => {
    try {
        const repository = new SaleRepositoryInMemory()
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