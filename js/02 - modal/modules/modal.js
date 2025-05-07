
export default function initModal(){

  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(e){     //O (e) significa que vai receber um evento

    e.preventDefault();

    containerModal.classList.add('ativo');
  }

  function fecharModal(e){
    containerModal.classList.remove('ativo');
  }
//
  function cliqueForaDoModal(e){

//    console.log(e.target);

    if (e.target === this){
      fecharModal(e);
    }
//    console.log(containerModal);
  }

  botaoAbrir.addEventListener('click',abrirModal);
  botaoFechar.addEventListener('click', fecharModal);

  containerModal.addEventListener('click',cliqueForaDoModal); 
}