
var numeroSorteado;

function loadDefault(){
    const bttGerar = document.createElement("button");
    bttGerar.setAttribute("type","button");
    bttGerar.setAttribute("id","bttInicio");
    bttGerar.addEventListener("click",iniciarJogo);
    bttGerar.textContent = "Iniciar Jogo";

    document.querySelector("body").appendChild(bttGerar);

}

function iniciarJogo(){

    this.disabled = true;
    
    const qtdBlocos = parseInt(document.getElementById("iptQtd").value);
    

    // Gerar o número sorteado
    numeroSorteado = Math.floor( Math.random() * qtdBlocos);

    console.log(numeroSorteado);

    // Criar o container para os blocos
    const container = document.createElement("div");
    container.setAttribute("id","container");

    // Gerar os blocos
    for (let k=0; k<qtdBlocos; k++){
        var bloco = document.createElement("div");
        bloco.setAttribute("class","box");
        bloco.textContent = k;
        bloco.addEventListener("click", function (){
            // alert(this.textContent);
            const msg = document.createElement("span");
            if (parseInt(this.textContent) == numeroSorteado){
                msg.setAttribute("class","acertou");
                msg.textContent = "Parabéns, você acertou o número sorteado.";
            }else {
                msg.setAttribute("class","errou");
                msg.textContent = "Infelizmente, você não acertou!.";
                this.remove();
            }
            container.appendChild(msg);
        } );
        
        container.appendChild(bloco);
    }

    document.querySelector("body").appendChild(container);

}



// Exercício: Implementar a finalização do jogo: quando o usuário acertar o número sorteado, ele deve travar todos os botões e aparecer um para reiniciar. 

