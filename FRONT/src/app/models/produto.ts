import { Categoria } from "./categoria";

export interface Produto {
    id?: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
    criadoem?: string;
    categoriaId: number;
    categoria?: Categoria;
    //alteração pedida do prof
}
