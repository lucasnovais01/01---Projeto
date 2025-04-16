console.log("06 - Navegação: ");

//  Navegação, ao clicar nas imagem

const tabMenu = document.querySelectorAll('img'); //pegou todas as imagens

const animaisItens = document.querySelectorAll('.animal-item'); //pegou todos os itens dos animais

//console.log('animaisItens');

let activeIndex = null; 

function showAll(){

  animaisItens.forEach((item)=>{
    item.classList.remove('oculto');
  })
  console.log('removendo a classe oculto');
  activeIndex = null;
}

function showOnly(index){
                        // i = posição
  animaisItens.forEach((item, i) => {

    if (i===index){
      item.classList.remove('oculto');
      
      void item.offsetWidth; //força o reflow para reiniciar
      item.classList.add('ativo');
    }
    else {
      console.log('adicionando a classe oculto');
      item.classList.add('oculto');
      item.classList.remove('ativo');
    }
  })
//console.log('Imagem da posição ' + index);
  console.log('adicionando a classe oculto');
  activeIndex = index;
}

tabMenu.forEach((itemMenu, index) => {

  itemMenu.addEventListener('click', () => {
    
    if (activeIndex === index){
      showAll(); // Mostrar todas as imagens "novamente"
    }
    else {
      showOnly(index); //Ocultar todas as imagens e exibe
    }
  })
})

