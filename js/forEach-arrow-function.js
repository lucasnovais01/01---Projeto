console.log("foreach e arrow functions");

//foreach e arrow functions

//A melhor maneira de selecionar uma lista é com querySelectionAll
//E manipular com forEach

const imgs = document.querySelectorAll('img');
//console.log(img); //Com isto a gente tem uma Nodelist
//três parâmetros {valor atua, posição atual, array}
imgs.forEach(function(item, index, array){
  console.log(item);
  console.log(index);
  console.log(array); //da pra colocar index, array[index], dentro do array
});
// ****************
console.log(" Parte 2 array e array-like: ")

//  foreach é array e é um método do array, mas

//array-like não é um array, mas é possível convertê-lo
//e manipulá-lo através de um forEach

const titulos = document.getElementsByClassName('titulo');
//console.log(titulos);

const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
console.log("Parte 3 - Arrow Function e forEach abaixo")
//Arrow function
// => arrow

const imagens = document.querySelectorAll('img');

//formas de usar o forEach abaixo

// titulosArray.forEach(function(item)){}
imagens.forEach((item)=>{
  console.log(item);
});

imagens.forEach(item=>{
  //console.log(item);
});

imagens.forEach((item, index)=>{
  //console.log(item, index);
});

console.log("Parte 3a - Arrow");

let i = 0;
imagens.forEach(()=>{
  console.log(i++);
});


