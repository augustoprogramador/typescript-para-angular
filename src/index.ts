
/**
 * VARIÁVEIS
 */

// TIPOS PRIMITIVOS boolean, number, string
let ligado: boolean = false;
let nome: string = 'Augusto';
let idade: number = 32;
let altura: number = 1.9;

// null
// undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// TIPOS ABRANGENTES any, void
let retorno: void
let retornoView: any = false;

// objeto
let produto: object = {
    name: 'Augusto'
}

type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89,
    unidades: 2
}