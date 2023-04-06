let qtdCartas;
const baralho =[];
const cartas = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];



function quantasCartas(){
    qtdCartas = Number( prompt('Com quantas cartas quer jogar?') );

    while((qtdCartas < 4) || (qtdCartas > 14) || (qtdCartas%2 !== 0)){
        qtdCartas = Number( prompt('Com quantas cartas quer jogar?') );
    }
}
quantasCartas();
abrirBaralho();

function abrirBaralho(){
    
    for(let i=0; i < qtdCartas/2; i++){
        let carta = cartas[i];
        baralho.push(carta);
        baralho.push(carta);
    }
    
}
