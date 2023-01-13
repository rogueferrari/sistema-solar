const sections = document.querySelectorAll('[data-anime="scroll"]');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectioTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectioTop - windowMetade < 0;
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
