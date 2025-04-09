console.log("Classes e atributos: ");

//  classlist
//Retorna uma lista com as classes
//do elemento . Permite adicionar, remover e verificar se cóntem algum valor especifico que vc quer

console.log("Parte 1: classList e Name");

//const menu = document.querySelector('.menu');

//console.log(menu); //costume pra ver se está pegando o javascript

//console.log(menu.classList); // []Traz uma array string

//console.log(menu.className) // string

//Para adicionar um elemento ao menu por exemplo

//menu.classList.add('ativo'); // adiciona um "elemento" ao componente 'tag.class html'

//menu.classList.add('ativo', 'mobile'); //mais de um, tem que colocar virgula

//menu.classList.remove('mobile'); // agora só vai ter o ativo, pois ele removeu

//menu.classList.toggle('ativo'); // se não existir - ele adiciona, se não existir ele adiciona
//toggle de ligado e desligado só lembrar

//menu.classList.contains('ativo'); 
// 
//const contem = menu.classList.contains('ativo'); //true ou false

//console.log(contem);

//menu.classList.replace('ativo', 'inativo');
//***********
console.log("Parte 2: Attribute - retorna um array")

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
console.log("Parte 3: Read Only e Writeable: ");
// Read Only e Writable:
//propriedades que são somente de leitura
//propriedades que permitem alteração

const meusAnimais = document.querySelector('.animais');

//console.log(meusAnimais);

console.log(meusAnimais.className);

meusAnimais.className = 'azul'; // substitui completamente a string

meusAnimais.className+='vermelho';

meusAnimais.attribute = 'class="ativo"';

console.log("Parte 4: Objeto propriedade: ");
//objeto.propriedade

//Desafio:
//1 - Adicione a classe ativo a todos os item do menu

//2 - Remova a classe Ativo e todos os itens do menu,
//mantenha apenas no primeiro


//3 - Verifique se as imagens possuem o attribute Alt

//4 - Modifique o href do link externo do menu
//bri.ifsp.edu.br => www.google.com.br

console.log("1 - Adicione a classe ativo a todos os item do menu: ");

const itensMenu = document.querySelectorAll('.menu a'); // assim vai selecionar os links, ".menu a"

//console.log(itensMenu); //dica pra ver se está funcionando

itensMenu.forEach((item)=>{
  item.classList.add('ativo'); //a classe ativo dentro do href do li do menu
});

console.log("2 - Remova a classe Ativo e todos os itens do menu, mantenha apenas no primeiro");

itensMenu.forEach((item)=>{
  item.classList.remove('ativo');
});
//manter só o primeiro
itensMenu[0].classList.add('ativo');

console.log("3 - Verifique se as imagens possuem o attribute Alt");

const pegarImagens = document.querySelectorAll('img');

// console.log(pegarImagens); // ver se está funcionando

pegarImagens.forEach((img) => {
  const possuiAlt = img.hasAttribute('alt');
  console.log(img, possuiAlt);
});

console.log("4 - Modifique o href do link externo do menu");

const link = document.querySelectorAll('a[href^="http"]');
//ajuda 
const links = document.querySelectorAll('a[href^="http"]');

// Itera sobre cada link e modifica o href
links.forEach((link) => {
  link.setAttribute('href', 'https://www.google.com.br');
});

console.log(links);