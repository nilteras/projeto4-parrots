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
let contador = 0;
let jogadas = 0;

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
        <li class="carta" data-test="card" onclick="clicar(this)">
            <div  class="front-face face" data-test="face-down-image">
                <img data-test="face-down-image" src="./Imagens/back.png" alt="">
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="./Imagens/${baralho[i]}.gif">
            </div> 
         </li>`;
         
         jogo.innerHTML += carta;

    }

}

function voltarCarta(){
    primeiraCarta.classList.remove('virar');
    segundaCarta.classList.remove('virar');
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function clicar(carta){
    
    if(!carta.classList.contains('virar')){
        if(primeiraCarta === undefined || segundaCarta === undefined){

            carta.classList.add('virar');
            contador++;

            if(primeiraCarta === undefined){
                primeiraCarta = carta;
            }else{
                if(segundaCarta === undefined){
                    segundaCarta = carta;
                }
                if(primeiraCarta.innerHTML === segundaCarta.innerHTML){
                    primeiraCarta = undefined;
                    segundaCarta = undefined;
                    jogadas += 2;

                    fimJogo();
                }else{
                    setTimeout(voltarCarta, 1000);

                }
            }
        
        }
    }

}
function fimJogo(){
    if(jogadas === baralho.length){
        alert("Você ganhou em "+contador+" jogadas!");
    }
}
