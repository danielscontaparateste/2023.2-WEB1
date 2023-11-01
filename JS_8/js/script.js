
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
    
    const qtdBlocos = parseInt(document.getElementById("iptQtd").value);

    // Gerar o número sorteado
    numeroSorteado = Math.floor( Math.random() * qtdBlocos);

    // console.log(numeroSorteado);

    // Criar o container para os blocos
    const container = document.createElement("div");
    container.setAttribute("id","container");

    // Gerar os blocos
    for (let k=0; k<qtdBlocos; k++){
        var bloco = document.createElement("div");
        bloco.setAttribute("class","box");
        container.appendChild(bloco);
    }

    document.querySelector("body").appendChild(container);




}


// Exercício: Continuar o código para atender o solicitado na questão. 

