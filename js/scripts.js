const btPlus = document.querySelector(".js-plus");
const colTransport = document.querySelector(".conteneur-transport");

btPlus.addEventListener("click" ,ouvreferme);

function ouvreferme(){
    colTransport.classList.toggle("conteneur-transport-invisible");
}