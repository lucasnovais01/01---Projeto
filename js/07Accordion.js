
console.log("07 - Accordion");


// initTABNav();

initAccordion();

function initAccordion() {

  const accordionList = document.querySelectorAll('.js-accordion dt');

  const classeAtiva = 'ativo'; // só pra organizar

  accordionList[0].classList.add('ativo');      // Inclui no primeiro elemento
  accordionList[0].nextElementSibling.classList.add('ativo');
  
  function activeAccordion(){

    this.classList.toggle('ativo');   // da pra colocar entre os parenteses (classeAtiva)          // Inclui nos demais elementos (ou remove por causa do toggle)
    this.nextElementSibling.classList.toggle('ativo');    // da pra colocar entre os parenteses (classeAtiva)

  }

  initAccordion.forEach(( item) =>{
    
      item.addEventListener('click', activeAccordion);
    });
}


/* NÃO FUNCIONOU NO FINAL DA AULA - O PROFESSOR TESTOU NO FAQ */