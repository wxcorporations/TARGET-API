type tipoUnid = 'UN' | 'CX';

type Iunit = {
    unidade: tipoUnid,
    fator: number
}

export interface IProduct {
    codigoProduto: number,
    descricaoProduto: string,
    estoque: string, 
    unidade: Iunit[]
}

export class Product implements IProduct{
    codigoProduto: number;
    descricaoProduto: string;
    estoque: string;
    unidade: Iunit[];

    constructor(
        codigoProduto: number,
        descricaoProduto: string,
        quatidade: string,
        unidade: Iunit[],
    ) {
        this.codigoProduto = codigoProduto
        this.descricaoProduto = descricaoProduto
        this.estoque = quatidade
        this.unidade = unidade
    }

    getData():IProduct {
        return {
            codigoProduto: this.codigoProduto,
            descricaoProduto: this.descricaoProduto,
            estoque: this.estoque,
            unidade: this.unidade,
        }
    }
}
