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
distribuirCartas();

function distribuirCartas(){
    const jogo = document.querySelector('.container');

    for(let i=0; i<baralho.length; i++){
        let carta = `
        <li class="carta">
            <div  class="front-face face">
                <img src="./Imagens/back.png" alt="">
            </div>
            <div class="back-face face">
                <img src="./Imagens/${baralho[i]}.gif">
            </div> 
         </li>`;
         
         jogo.innerHTML += carta;

    }

}

function comparador(){
    return Math.random() - 0.5;
}

function abrirBaralho(){
    
    for(let i=0; i < qtdCartas/2; i++){
        let carta = cartas[i];
        baralho.push(carta);
        baralho.push(carta);
    }
    
     baralho.sort(comparador);
    
}

function clicar(front){
    front = document.querySelector('.front-face');
    console.log(front);
    front.classlist.add('virar')
    front.classlist.remove('face');
    console.log(front);


}
