/* 07 - Accordion          */
// initAccordion();

//export default = exporta a função com o exato nome

export default function initAccordion() {

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



export function teste(){


}

export function teste2(){


}