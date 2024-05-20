const elementosCabecera = document.querySelectorAll(".header_element");
const NavPag = document.getElementsByTagName("nav");
let navStatus = false;


window.addEventListener("mousemove", (e)=>{
    posicionX = e.clientX - window.innerWidth / 2;
    posicionY = e.clientY - window.innerHeight / 2;

    for (const elemento of elementosCabecera) {
        let velocidadHorizontal = elemento.dataset.velx;
        let velocidadVertical = elemento.dataset.vely;
        elemento.style.transform = `translateX(calc( ${-posicionX * velocidadHorizontal}px)) translateY(calc(${-posicionY * velocidadVertical}px))`;
    }
});

function openNav() {
    if (navStatus) {
        NavPag[0].style.height = "70px";
        navStatus = !navStatus;
    } else {
        NavPag[0].style.height = "255px";
        navStatus = !navStatus;
    }
}