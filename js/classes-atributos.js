console.log("Classes e atributos: ");

//  classlist
//Retorna uma lista com as classes
//do elemento . Permite adicionar, remover e verificar se cóntem algum valor especifico que vc quer

console.log("Parte 1: ");

const menu = document.querySelector('.menu');

//console.log(menu); //costume pra ver se está pegando o javascript

console.log(menu.classList); // []Traz uma array string

console.log(menu.className) // string

//Para adicionar um elemento ao menu por exemplo

menu.classList.add('ativo'); // adiciona um "elemento" ao componente 'tag.class html'

menu.classList.add('ativo', 'mobile'); //mais de um, tem que colocar virgula

menu.classList.remove('mobile'); // agora só vai ter o ativo, pois ele removeu

menu.classList.toggle('ativo'); // se não existir - ele adiciona, se não existir ele adiciona
//toggle de ligado e desligado só lembrar

menu.classList.contains('ativo'); 
// 
const contem = menu.classList.contains('ativo'); //true ou false

//console.log(contem);

menu.classList.replace('ativo', 'inativo');

//atributes - retorna um array-like com os elementos
/*// tem erro no de baixo
const animais = document.querySelector('animais');

console.log(animais.attributes); //trás todos os atributos do elemento e também da pra selecionar usando o [1],[2],..
*/

//get , set
//getAttribute - pegar
//setAttribute - atribuir

//const img = document.querySelector('img'); //pegou o primeiro elemento

//console.log(img);

//console.log(img.getAttribute('src'));

// ************

//console.log(img.setAttribute('alt','Texto alternativo');

// const possui = img.hasAttribute
// console.log(possui);

//img.removeAttribute('alt');

// *************

// Read Only e Writable:
//propriedades que são somente de leitura
//propriedades que permitem alteração

const meusAnimais = document.querySelector('.animais');

//console.log(meusAnimais);

console.log(meusAnimais.className);

meusAnimais.className = 'azul'; // substitui completamente a string

meusAnimais.className+='vermelho';

meusAnimais.attribute = 'class="ativo"';

//objeto.propriedade