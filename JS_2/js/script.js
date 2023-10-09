function somar(){
    var x = parseInt(document.getElementById("iptX").value);
    var y = parseInt(document.getElementById("iptY").value);

    // var x = parseFloat(document.getElementById("iptX").value);
    // var y = parseFloat(document.getElementById("iptY").value);
    
    var res = x + y;

    var spnResp = document.getElementById("spnResp");

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