
console.log("Accordion");


// initTABNav();

initAccordion();

function initAccordion() {

  const accordList = document.querySelectorAll('.js-accordion dt');


  accordionList[0].classList.add('ativo');      // Inclui no primeiro elemento
  accordionList[0].nextElementSibling.classList.add('ativo');
  
  function activeAccordion(){

    this.classList.toggle('ativo');             // Inclui nos demais elementos (ou remove por causa do toggle)
    this.nextElementSibling.classList.toggle('ativo');

  }

  initAccordion.forEach(( item) =>{
    
      item.addEventListener('click', activeAccordion);
    });
}
