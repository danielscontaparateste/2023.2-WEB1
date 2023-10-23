function verificarIdade(){
    let idade = parseInt(document.getElementById("iptIdade").value);
    var spnResp = document.getElementById("respStatus");
    var divStatus = document.getElementById("divStatus");

    if (idade < 16){
        respStatus.innerHTML = "Não votar, não dirigir.";
    } else if (idade < 18){
        respStatus.innerHTML = "Votar, não dirigir.";
    } else{
        respStatus.innerHTML = "Votar, Dirigir.";
        divStatus.style.backgroundImage = "url('imgs/ifce900x331.jpg')";
        divStatus.style.backgroundPosition = center;
    }


}