console.log("Javascript FUNCIONANDO");

//SELEÇÃO DE OBJETOS / ELEMENTOS

//getElementById


//getElementByTagName

//gridAnimais

//console.log(gridAnimais);

//se for um id é jogo da velha + id = #id

// ************



// querySelector - pega a primeira ocorrência - SELETOR UNICO

animais = document.querySelector

console.log(animais);

/*
const animais = document.querySelector('.animais-descricao');
*/
const contato = document.querySelector('#contato');

// console.log(primeiraUl);
/*
const link = document.querySelector('[href^=""');
*/
//console.log(link);

//SELETOR GERAL

//querySelectorAll - retorna todos os elementos compatíveis

//com seletor css em uma Nodelist

const gridSection = document.querySelector('.grid-section');

//console.log(gridSection);

const lista = document.querySelector('lista');
console.log(lista); //se é uma lista da pra pegar pela posição

const titulos = document.querySelectorAll('.titulo');
console.log(titulos); //titulos[1] pra pegar o primeiro por exemplo

//dois abaixo são lista, mas

const gridSelectionHtml = document.getElementsByClassName('grid-section');
console.log(gridSelectionHtml);

//estática
const gridSelectionNode = document.querySelectorAll('grid-section');
console.log(gridSelectionNode);

// mas a diferença entre uma lista HmtlCollection e uma lista Nodelist
//vai estar nos métodos e propriedades existentes.

// gridSelectionHtml.forEach(element => {}); não vai funcionar

gridSelectionNode.forEach(element => {}); //vai funcionar, pq é sempre estática

//vc sempre gera uma Nodelist através de uma querySelectionAll

// as duas são array-like // array nodelist - foreach


// ***************

gridSelectionNode.forEach(function(gridItem, index, array){
  gridItem.classList.add('vermelho');
  console.log(index);
  console.log(array);
})

// Retornar no console todas as imagens do site?

// 1- Retorne no console apenas as imagens que começam com a 
//palavra imagem

// 2- Selecione todos os links internos do site ( onde o href começa com o # )

// 3- Selecione o primeiro h2 dentro de .animais-descricao

//tentativa da questão 1
/*
const imagens = document.querySelectorAll('img');

imagens.forEach(img => {

  if (img.src.includes('/img/imagem')) { //vai verificar se src começa "imagem"
    console.log(img);
  }
})
*/
console.log("1 - Retorne no console apenas as imagens que começam com a palavra imagem");
//feito pelo professor // se é uma nodelist é uma array se é um array eu consigo interar
const img = document.querySelectorAll('img');
console.log(img);

const todasImagens = document.querySelectorAll('img[src^="img/imagem');
console.log(todasImagens);
// ****************
console.log("2 - Selecione todos os links internos do site ( onde o href começa com o # )")

const todosLinks = document.querySelectorAll('[href^="#"');
console.log(todosLinks);

// ****************
console.log("3- Selecione o primeiro h2 dentro de .animais-descricao");

const animais1 = document.querySelector('.animais-descricao');

const h2animais = animais1.querySelector('h2');
console.log(h2animais);
/*
const linkInternos = document.querySelectorAll('a[href^="#"]'); //era pra selecionar todos os link interno
console.log(linksInternos);
/*
/*
const primeiroH2 = document.querySelector('.animais-descricao h2'); //vai selecionar o primeiro h2 dentro de .animais-descricao
console.log(primerioH2);
*/
