type Heroi = {
    nome: string,
    vulgo: string
};

function printaObjeto(pessoa: Heroi) {
    console.log(pessoa);
    
}

printaObjeto({
    nome: 'Saitama',
    vulgo: 'One Punchman'
});