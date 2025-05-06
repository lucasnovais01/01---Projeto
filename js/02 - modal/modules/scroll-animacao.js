console.log("09 - Animação Scroll");

export default function initAnimacaoScroll(){

  const sections = document.querySelectorAll('.js-scroll');
  const windowsMetade = window.innerHeight * 0.6; //Pega a altura da tela vezes 60% dessa tela

  console.log(windowsMetade);


  function animaScroll(){

    sections.forEach((section) => {
      
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = ( sectionTop - windowsMetade) < 0;

      if (isSectionVisible){
        section.classList.add('ativo');
      }
      else {
        section.classList.remove('ativo');
      }
    });
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

//initAnimacaoScroll();