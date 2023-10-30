// function gerar(){
//     var qtd = parseInt(document.getElementById("iptQtd").value);
    
//     var spnResp = document.querySelector("#spnResp");
    
//     var msg = "Programação Web 1";


//     var mensagemTela = "";

//     for (let k=0; k<qtd; k++){
//         // mensagemTela = mensagemTela + "["+k+"]" + msg + "<br>"; 
//         mensagemTela = mensagemTela + ` <br> [${k+1}] ${msg}`; 
//     }

//     spnResp.innerHTML = mensagemTela;
    
// }


function gerar(){
    var qtd = parseInt(document.getElementById("iptQtd").value);
    var bttGerar = document.getElementById("bttGerar");
    var bttApagar = document.getElementById("bttApagar");

    const divContainerMsgs = document.createElement("div");
    divContainerMsgs.setAttribute("id","divContainerMsgs");

    for (let k=0; k<qtd; k++){
        const spnResp = document.createElement("span");
        spnResp.setAttribute("class","mensagem");
        spnResp.innerHTML = "Programação Web";
        // document.querySelector("body").appendChild(spnResp);
        divContainerMsgs.appendChild(spnResp);
    }

    document.querySelector("body").appendChild(divContainerMsgs);

    bttGerar.disabled = true;
    bttApagar.disabled = false;

}

// Modifique o código para a função "apagar" remover também as mensagens geradas.

function apagar(){
    var bttGerar = document.getElementById("bttGerar");
    
    document.getElementById("iptQtd").value = "";

    document.getElementById("divContainerMsgs").remove();
    
    bttGerar.disabled = false;
    bttApagar.disabled = true;

}

