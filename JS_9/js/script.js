
function executar(){

    let corInicial = document.getElementById("iptCorInicial").value;
    let corFinal = document.getElementById("iptCorFinal").value;

    let tempo = parseInt(document.getElementById('iptTempo').value);

    criarCarta(corInicial, corFinal, tempo);


}

function criarCarta(ci, cf, t){

    let carta = document.createElement("div");
    carta.setAttribute("class","box");

    carta.style.backgroundColor = ci;

    carta.addEventListener("click", function (){
        carta.style.backgroundColor = cf;

        
        setTimeout( function() {
            carta.style.backgroundColor = ci;
        }, t*1000);
        
    });
    
    document.querySelector("body").appendChild(carta);

}

