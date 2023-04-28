
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

/**
 * Arrays
 */

let dados: string[] = ['Augusto', 'José', 'Ana'];
let dados2: Array<string> = ['Augusto', 'Ana', 'Adriana'];

let infos: (string | number)[] = [322, 'Felipe'];

/**
 * Tuplas
 */

let boleto: [string, number, number] = ['água', 7.0, 12341232134234];

/**
 * Datas
 */

let aniversario: Date = new Date('2023-04-07 05:00');
// console.log(aniversario.toString());

// Funções

function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello, ${name}`;
}

let soma: number = addNumber(3, 5);

// console.log(soma);
// console.log(addToHello('Augusto'));

function callToPhone(phone: number | string): number | string {
    return phone;
}

// console.log(callToPhone(12345678));


async function getDataBase(id: number): Promise<string> {
    return 'Augusto';
}

// INTERFACES (type X interface)

type robot = {
    readonly id: number | string,
    name: string
};

interface robot2 {
    readonly id: number | string,
    name: string
}

const bot1: robot = {
    id: 1,
    name: 'Augusto'
};

const bot2: robot2 = {
    id: 1,
    name: 'Augusto'
};

// console.log(bot1, bot2);

// Classes
/**
 * Public
 * Private -> Somente a própria classe pode acessar o recurso
 * Protected -> Classes herdadas podem acessar recursos da classe pai
 */

class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    public attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}

class Magician extends Character {
    magicPoints: number;

    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }

}

const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Mago Negro', 10, 98, 100);
p1.attack();
