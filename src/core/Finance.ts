import { Commission } from "./commission";
import { ISaleDTO } from './Sale'

type commissionReport = {
    vendedor: string,
    valor: number
}

export class Finance {
    static createReportCommissions(data: any): ISaleDTO[] | false  {
        try {
            const sallers = new Map()
            const report: ISaleDTO[] = []
            
            for (const saller of data) {
                const valueCommission = Commission.calculate(saller.valor)

                !sallers.has(saller.vendedor) && sallers.set(saller.vendedor, (saller.valor + valueCommission))
                sallers.set(saller.vendedor, (sallers.get(saller.vendedor) + valueCommission))
            }
            
            sallers.forEach((value, key) => { report.push({ vendedor: key, valor: value })})
            
            return report
            
        } catch (error) {
            console.error(error)
            return false
        }
    }
}