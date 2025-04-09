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
  console.log(array[index]); //da pra colocar index dentro do array
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