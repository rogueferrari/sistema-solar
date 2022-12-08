const sections = document.querySelectorAll('[data-anime="scroll"]');
const windowMetade = window.innerHeight * 0.5;

function animaScroll() {
  sections.forEach((section) => {
    const sectioTop = section.getBoundingClientRect().top - windowMetade;
    const isSectionVisible = sectioTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", animaScroll);

console.log(sections);
