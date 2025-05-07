//console.log("Scroll suave - Funcionando");

export default function initScrollSuave(){

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

//  console.log (linkInternos);
}

//initScrollSuave();