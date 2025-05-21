// todo este trabalho abaixo, é o que faz a mesma coisa do title, em vez de aria-label colocar title

export default function initTooltip() {

  const tooltips = document.querySelectorAll('[data-tooltip]'); //efeito esperado
                                                                //Quando passar o mouse por cima da palavra contato.
                                                                //vai dar display da mensagem
                                                                //E quando sair do "evento"(tirar o mouse). ele desaparece

  tooltips.forEach((item)=>{
    item.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver(e){

    const toolTipBox = criarToolTipBox(this);

    this.toolTipBox = toolTipBox; //adicionado pelo chatgpt


    console.log(toolTipBox.style.top = e.pageY+'px');
    console.log(toolTipBox.style.left = e.pageX+'px');
    

    onMouseMove.toolTipBox = toolTipBox;  //criou um objeto - confirme isto chatGPT e comente, para este objeto funcione precisa do handleEvent
    this.addEventListener('mousemove',onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox; //adicionado depois
    onMouseLeave.element = this;

    onMouseLeave.element = this;
    this.addEventListener('mouseleave',onMouseMove);
  }

  const onMouseLeave = {
    handleEvent(e){
      this.toolTipBox.remove();
    }
  }

  const onMouseMove = {
    handleEvent(e){

      this.toolTipBox.style.top = e.pageY+20+'px';   //pega as coordenadas da página "div" em relação ao top eixo y
      this.toolTipBox.style.left = e.pageX+20+'px';  //pega as coordenadas da página "div" no eixo x
    }
  }

  function criarToolTipBox(element){

    const tooltipBox = document.createElement('div'); //criar a div
    const text = element.getAttribute('aria-label');  //pegar o text
    tooltipBox.classList.add('tooltip');              // adiciona a class
                                                      // adiciona o text no dom
    tooltipBox.innerText = text;                      // ???
    document.body.appendChild(tooltipBox); // no final da página
    return tooltipBox;
  }
}