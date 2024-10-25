const menuFechado = document.getElementById("icone-menu-fechado");
const menuAberto = document.getElementById("icone-menu-aberto");
const opcoes = document.querySelectorAll(".opcoes");
const menu = document.getElementById("menu-hamburguer");

menuFechado.addEventListener("click", () => {
    abrirMenu();
});

menuAberto.addEventListener("click", () => {
    fecharMenu();
});

for (var i = 0; i < opcoes.length; i++) {
    opcoes[i].addEventListener("click", () => {
        fecharMenu();
    });
};

function abrirMenu() {
    menu.classList.add("open");
    menuFechado.classList.add("escondido");
    menuAberto.classList.remove("escondido");
    menuAberto.classList.add("aberto");
};

function fecharMenu(){
    menu.classList.remove("open");
    menuAberto.classList.remove("aberto");
    menuAberto.classList.add("escondido");
    menuFechado.classList.remove("escondido");
};