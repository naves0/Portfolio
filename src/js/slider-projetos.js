const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
const todosProjetos = document.querySelectorAll(".projeto");
let projetoAtual = 0;

setaVoltar.addEventListener("click", () => {
    const ehPrimeroProjeto = projetoAtual === 0;
    if (ehPrimeroProjeto){
        // setaVoltar.classList.add("opacity");
        return;
    };
    esconderProjetoSelecionado();
    projetoAtual--;
    mostrarProjeto();
});

setaAvancar.addEventListener("click", () => {
    const ehUltimoProjeto = projetoAtual === todosProjetos.length - 1;
    if (ehUltimoProjeto) {
        // setaAvancar.classList.add("opacity");
        return;
    };
    esconderProjetoSelecionado();
    projetoAtual++;
    mostrarProjeto();
});

function esconderProjetoSelecionado() {
    const projetoSelecionado = document.querySelector(".selecionado");
    projetoSelecionado.classList.remove("selecionado");
};

function mostrarProjeto() {
    todosProjetos[projetoAtual].classList.add("selecionado");
};