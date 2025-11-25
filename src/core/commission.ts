
import { COMISSION } from "../config/enums"

// REGRAS DE CALCULO
// ========================================================================
interface IComission {
    calcule(value:number): number
}

class ComissionLessOneHundred implements IComission {
    calcule(value: number): number {
        return value * COMISSION.LESS_THAN_ONE_HUNDRED
    }
}

class ComissionBetweenOneHundredAndFiveHundred implements IComission {
    calcule(value: number): number {
        return value * COMISSION.BETWEEN_ONE_AND_FIVE_HUNDRED
    }
}

class ComissionGreaterFiveHundred implements IComission {
    calcule(value: number): number {
        return value * COMISSION.GREATER_THAN_FIVE_HUNDRED
    }
}

export class Commission {
    private static getRule(value:number): IComission {
        if (value < 100) return new ComissionLessOneHundred()
        if (value > 100 && value < 500) return new ComissionBetweenOneHundredAndFiveHundred() 
        
        // value > 500
        return new ComissionGreaterFiveHundred()
    }

    static calculate(value:number):number {
        if (!value) throw new Error('[value] e um parametro requirido!')
        if (typeof value !== 'number' ) throw new Error('[value] deve ser do tipo number')
        if (value <= 0) throw new Error('Não é possivel realizar este calculo!')

        return this.getRule(value).calcule(value)
    }
}