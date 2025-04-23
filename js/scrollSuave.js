console.log("08 - Scroll suave");

/*           */
initAccordion();

function initAccordion() {

  const accordionList = document.querySelectorAll('.js-accordion dt');

  const classeAtiva = 'ativo'; // só pra organizar

  accordionList[0].classList.add(classeAtiva);     // Inclui no primeiro elemento
  accordionList[0].nextElementSibling.classList.add(classeAtiva);
  
  function activeAccordion(){

    this.classList.toggle(classeAtiva);   // da pra colocar entre os parenteses (classeAtiva)          // Inclui nos demais elementos (ou remove por causa do toggle)
    this.nextElementSibling.classList.toggle(classeAtiva);    // da pra colocar entre os parenteses (classeAtiva)

  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}
/* --- Acima os Comandos do 07Accordion --- */

//initAccordion();

function initScrollSuave(){

  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //todos que comecem com o # dentro do menu

  function scrolltoSection(e){
    e.preventDefault(); //vai evitar que a página recarrega, isto vai acontecer ao clicar por causa do callback, causando uma transição mais suave
    
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior :'smooth',   //transição suave
      block:'start',        //no início
    });
  }

  linkInternos.forEach((item) => { //arrow function
    
    item.addEventListener('click',scrolltoSection);
  });

  console.log (linkInternos);
}

initScrollSuave();

/* ESTÁ FUNCIONANDO, CONSERTAR DEPOIS O 07 */