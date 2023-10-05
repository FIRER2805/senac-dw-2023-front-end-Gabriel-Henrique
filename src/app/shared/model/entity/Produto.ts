import { Fabricante } from "./Fabricante";

export class Produto {
    id: number;
    nome: string;
    fabricanteDoProduto: Fabricante;
    valor: number;
    peso: number;
    dataCadastro: Date;
}