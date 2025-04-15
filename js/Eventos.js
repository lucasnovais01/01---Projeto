console.log("05 - Eventos: ");

//  Eventos

console.log("Parte 1: ");

img = document.querySelector('img');

function callback(e){ //recomendado em usar o callback
  console.log('clicou');
}

console.log(img);

img.addEventListener('click', callback); // Tem sempre dois parâmetros, o primeiro é o que espera que faz, e o segundo é a função

img.addEventListener('click', function(){
  console.log('clicou');
});

// primeiro parâmetro é ação = esperada

// segundo parâmetro é a função a ser executada. O call back

const animaisLista = document.querySelector('.animal-item');

console.log(animaisLista);


function executaCallBack(e){
  
  const currentTarget = e.currentTarget;
  const target = e.target;
  const type = e.type;
  const path = e.path; // pra funcionar precisa do composedPath(), porque a propriedade path não é uma propriedade padrão do objeto Event em todos os navegadores. Ela era uma propriedade não padrão suportada apenas pelo Chrome, mas foi removida em versões mais recentes.

  console.log(currentTarget);
  console.log(target);
  console.log(type);
  console.log(path);
  /*
  console.log( 
    currentTarget,
    target,
    type,
    path
    );
*/
}

animaisLista.addEventListener('click', executaCallBack);

const link = document.querySelector('a[href^="http"]');

function clickNoLink(e){
  e.preventDefault(); // evita o evento padrão, carregamento das páginas
  
  console.log(this); // this - palavra reservada do javascript, serve para fazer referência a próprio objeto.
  
  //console.log(e.currentTarget.href);
  console.log(this.getAttribute('href'));
}

//link.addEventListener('click');

function callKey(e){
  if (e.key === 'a'){
    document.body.classList.toggle('azul');
  }
  else {
    if (e.key='v') {
      document.body.classList.toggle('verde');
    }
  }
}

window.addEventListener('keydown', callKey);