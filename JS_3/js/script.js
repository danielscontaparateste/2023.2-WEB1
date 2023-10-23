function somar(){
    var x = document.getElementById("iptX").value;
    var y = document.getElementById("iptY").value;

    var spnResp = document.getElementById("spnResp");

    if ( (x=="" ) || (y=="") ){
        spnResp.textContent = "Entre com os valores de x e y. ";
        return; 
    }

    // var x = parseFloat(document.getElementById("iptX").value);
    // var y = parseFloat(document.getElementById("iptY").value);

    x = parseInt(x);
    y = parseInt(y);

    // x = parseFloat(x);
    // y = parseFloat(y);
    
    var res = x + y;

    spnResp.innerHTML = "Soma: "+res; 

    var bxResp = document.getElementById("bxResp");

    if (res % 2 == 0){
        bxResp.style.backgroundColor = "green";
    }else{
        bxResp.style.backgroundColor = "red";
    }        

    /* Exercícios:

    1. Quando o usuário esquece de digitar os números, lembrar com uma mensagem, evitando NaN.

    2. Implementar um botão de reset para limpar os campos de texto e voltar a cor da caixa de resposta para a cor padrão.

    */ 
}


function limpar(){
    var inputX = document.getElementById("iptX");
    var inputY = document.getElementById("iptY");
    var spnRes = document.getElementById("spnResp");
    var bxResp = document.getElementById("bxResp");

    inputX.value = "";
    inputY.value = "";
    // spnRes.innerHTML = "";
    // spnRes.innerText = "";
    spnRes.textContent = "";

    bxResp.style.backgroundColor = "gray";

}

function modBoxWidth(){
    var largura = document.getElementById("iptRgWidth").value;
    var bxResp = document.getElementById("bxResp");
    document.getElementById("spnWidth").innerHTML = largura; 


    bxResp.style.width = largura+"px";
}