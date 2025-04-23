console.log("05 - Eventos: ");

//  Eventos
/*
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
  */
  /*
  console.log( 
    currentTarget,
    target,
    type,
    path
    );
}
*/

/*

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

*/

// 1 - Selecione todo os elementos do site começando a
// partir do body, ao clique mostre exatamente
// quais elementos estão sendo clicados

// 2 - Com o código anterior (06 - Navegacao), ao invés 
// de mostrar no console, remova o elemento que está 
// sendo clicado.

// 3 - Se o usuário clicar na tecla (t) aumento todo
// o texto do site.

// 1

const todosElementos = document.querySelectorAll('body');

todosElementos.forEach((coisa) => {
  coisa.addEventListener('click', () => {

    console.log('Elemento clicado: ', coisa);
  })
})

// 2 - só copiar o código de cima e trocar o console.log('texto', objeto); por console.remove();
/* //O código abaixo faz com que tudo seja apagado
const todosElementos2 = document.querySelectorAll('body');

todosElementos2.forEach((coisa) => {
  coisa.addEventListener('click', () => {

    coisa.remove(); // Para remover o elemento clicado
  });
});
*/

// 2

const todosElementos3 = document.querySelectorAll('body *');

todosElementos3.forEach((coisa) => {
  coisa.addEventListener('click', (event) => {

    event.stopPropagation(); // Impede que o evento se propague para outros elementos https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

    coisa.remove();
  });
});


// 3

document.addEventListener('keydown', (event) => {
  if (event.key === 't' || event.key === 'T') {
    const todosElementos = document.querySelectorAll('body');

    todosElementos.forEach((elemento) => {
      elemento.classList.toggle('aumentar-texto');
    });
  }
});

//forma do professor de fazer o 3

function handleClick(e){
  if (e.key === 't'){
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown',handleClick)






/*
let activeIndex = null;

function showAll(){

  primeiro.forEach((item)=>{

  })
}
function showOnly(index){

}
*/