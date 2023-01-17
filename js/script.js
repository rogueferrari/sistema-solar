import outsideClick from "./modules/outsideClick.js";
import buttonUp from "./modules/buttonUp.js";

//anima elementos ao scroll
const sections = document.querySelectorAll('[data-anime="scroll"]');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.remove("inativo");
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
      section.classList.add("inativo");
    }
  });
}

animaScroll();

window.addEventListener("scroll", animaScroll);

// adiciona funcionalidade ao menu mobile
const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const eventos = ["click", "touchstart"];

if (menuButton) {
  function openMenu(event) {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("active");
    // outsideClick(menuList, eventos, () => {
    //   menuList.classList.remove("active");
    //   menuButton.classList.remove("active");
    // });
  }

  // eventos.forEach((evento) => {
  // });
  menuButton.addEventListener("click", openMenu);
}

// ativa o botão de subir a tela para o header
buttonUp();
