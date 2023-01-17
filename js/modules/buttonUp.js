export default function buttonUp() {
  const buttonUp = document.querySelector(".button-up");
  const windowMetade = window.innerHeight * 0.6;

  function apearButton() {
    const headerButtonUp = document.querySelector(".header-button-up");
    const elementTop = Math.floor(headerButtonUp.getBoundingClientRect().top);
    if (elementTop < -50) {
      //valor real 638
      buttonUp.classList.add("active");
    } else {
      buttonUp.classList.remove("active");
    }
  }

  apearButton();

  function handleClick(event) {
    const topo = event.target.offsetTop;
    window.scrollTo({ top: topo, behavior: "smooth" });
  }

  window.addEventListener("scroll", apearButton);
  buttonUp.addEventListener("click", handleClick);
}
