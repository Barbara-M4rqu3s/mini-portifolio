const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")){
            return;
        }

       selecionarAba(aba)

       mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba){
    const abaSelecionada = document.
    querySelector(".aba.selecionada");
    abaSelecionada.classList.remove
    ("selecionada")

    aba.classList.add("selecionada");
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.
    querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove
    ("selecionada");

    const idDoElementoDeinformacoesDaAba = 
    `informacao-${aba.id}`

    const informacaoASeerMostrada = document.
    getElementById(idDoElementoDeinformacoesDaAba)
    informacaoASeerMostrada.classList.add
    ("selecionada")
}