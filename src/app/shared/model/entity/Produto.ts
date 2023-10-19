import { Fabricante } from "./Fabricante";

export class Produto {
    id?: number;
    nome: string;
    fabricanteDoProduto: string;
    valor: number;
    peso: number;
    dataCadastro: Date;
}
