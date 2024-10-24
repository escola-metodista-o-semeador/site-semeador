"use strict"

/*
 * Este script é responsável por alterar o tema do site entre claro e escuro.
 */

// Obter botão de menu pelo DOM
const botaoTema = document.getElementById("botao-tema")
// Adicionar evento listener ao clicar no botão de tema
botaoTema.addEventListener("click", alterarTema)

/**
 * Altera o valor do tema atual (light ou dark).
 */
function alterarTema() {
  window.alert("Botão clicado!")
}
