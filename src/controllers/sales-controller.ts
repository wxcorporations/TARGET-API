import { SaleRepositoryInMemory } from '../infra/repository/sales-repository-In-memory';
import { Sale } from '../core/Sale';

const repository = new SaleRepositoryInMemory()

export const list = async (req:any, res:any) => {
    try {
        const data = await repository.getAll()
        
        const result = ('order' in req.query)
            ? Sale.orderSales(data, req.query.order) : data

        res.status(200).json({ status: 'ok', data: result })
    } catch (error) {
        res.status(500).json({ status: 'erro'})
    }
}

export const filter = async (req: any, res: any) => {
    try {
        const data = await repository.getAll()

        res.status(200).json({ status: 'ok', data })
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }
}

// cadastrar uma nova venda
export const register = async (req: any, res: any) => {
    try {
        const data = await repository.getAll()

        res.status(200).json({ status: 'ok', data })
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }   
}

// editar uma venda
export const update = async (req: any, res: any) => {
    try {
        const data = await repository.getAll()

        res.status(200).json({ status: 'ok', data })
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }   
}