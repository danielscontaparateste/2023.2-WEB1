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

    for (let k=0; k<qtd; k++){
        const spnResp = document.createElement("span");
        spnResp.setAttribute("class","mensagem");
        spnResp.innerHTML = "Daniel Silva";
        document.querySelector("body").appendChild(spnResp);
    }

}