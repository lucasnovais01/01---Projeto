/*

console.log("Javascript FUNCIONANDO");

console.log("feito upload no github");

console.log("22-04-2025 Casa - Ultimo js criado foi Navegacao");
console.log("22-04-2025 Casa - exercicios em Eventos.js o penultimo");
*/

// outra forma: (dessa outra forma que da pra puxar o accordion por exemplo)
// import { teste } from "./modules/accordion.js";
// teste
//
// outro teste:
// import { SERVIDOR } from ".modules/constante.js";
//

/* pasta 01 - modulos

import initAccordion from "./01 - modulos/modules/accordion.js";
import initAnimacaoScroll from "./01 - modulos/modules/scroll-animacao.js";
import initScrollSuave from "./01 - modulos/modules/scroll-suave.js";
import initTabNav from "./01 - modulos/modules/tabnav.js";

*/

// pasta 02 - modal   // O que é Modal? é quando vc sobre uma tela com outra
                      // O modal é geralmente colocado dentro da página principal
/*
import initAccordion from "./02 - modal/modules/accordion.js";
import initAnimacaoScroll from "./02 - modal/modules/scroll-animacao.js";
import initScrollSuave from "./02 - modal/modules/scroll-suave.js";
import initTabNav from "./02 - modal/modules/tabnav.js";

import initModal from "./02 - modal/modules/modal.js";
import initTooltip from "./03 - tooltip/modules/tooltip.js";
*/

// pasta 03 - tool tip
import initAccordion from "./03 - tooltip/modules/accordion.js";
import initAnimacaoScroll from "./03 - tooltip/modules/scroll-animacao.js";
import initScrollSuave from "./03 - tooltip/modules/scroll-suave.js";
import initTabNav from "./03 - tooltip/modules/tabnav.js";

import initModal from "./03 - tooltip/modules/modal.js";
import initTooltip from "./03 - tooltip/modules/tooltip.js";



initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();