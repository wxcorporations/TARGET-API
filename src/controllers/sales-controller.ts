import saleLocalDb from '../../store/sales-db.json'

export const list = async (req: any, res: any) => {
    try {
        res.status(200).json(saleLocalDb)
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }   
}

export const filter = async (req: any, res: any) => {
    try {
        res.status(200).json(saleLocalDb)
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }   
}

// cadastrar uma nova venda
export const register = async (req: any, res: any) => {
    try {
        res.status(200).json(saleLocalDb)
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }   
}

// editar uma venda
export const update = async (req: any, res: any) => {
    try {
        res.status(200).json(saleLocalDb)
    } catch (error) {
        res.status(500).json({ error: ['Erro no processamento!'] })
    }   
}