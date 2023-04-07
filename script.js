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
let primeiraCarta;
let segundaCarta;



function quantasCartas(){
    qtdCartas = Number( prompt('Com quantas cartas quer jogar?') );

    while((qtdCartas < 4) || (qtdCartas > 14) || (qtdCartas%2 !== 0)){
        qtdCartas = Number( prompt('Com quantas cartas quer jogar?') );
    }
}
quantasCartas();
abrirBaralho();
distribuirCartas();

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
function distribuirCartas(){
    const jogo = document.querySelector('.container');
    for(let i=0; i<baralho.length; i++){
        let carta = `
        <li class="carta" onclick="clicar(this)">
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

function clicar(carta){
    
    if(!carta.classList.contains('virar')){
    if(primeiraCarta === undefined || segundaCarta === undefined){

        carta.classList.add('virar');

        if(primeiraCarta === undefined){
            primeiraCarta = carta;
        }else{
            if(segundaCarta === undefined){
                segundaCarta = carta;
            }
            if(primeiraCarta.innerHTML === segundaCarta.innerHTML){
                console.log("igual");
            }else{
                console.log("diferente");
            }
        }
       
    }
}

}
