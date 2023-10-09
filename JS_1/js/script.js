function criarMensagem(){

    var inputNome = document.getElementById("iptNome");
    var nome = inputNome.value;

    // alert("Sejam bem-vindos ao Javascript.");
    console.log("Primeiro programa em Javascript");

    var spanMensagem = document.getElementById("spnMsg");

    spanMensagem.innerHTML = "Oi " + nome + ", seja bem-vindo ao Javascript.";
}

function apagarMensagem(){
    var spanMensagem = document.getElementById("spnMsg");
    spanMensagem.innerHTML = "";

    document.getElementById("iptNome").value = "";

}