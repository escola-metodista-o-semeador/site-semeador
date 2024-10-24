"use strict"

/*
 * Este script é responsável por alterar o tema do site entre claro e escuro.
 */

// Obter tema atual do sistema
let temaAtual = getTemaAtual()

// Obter botão de menu pelo DOM
const botaoTema = document.getElementById("botao-tema")
// Adicionar evento listener ao clicar no botão de tema
botaoTema.addEventListener("click", alterarTema)

/**
 * Retorna o tema atual do sistema do usuário.
 * A função pode retornar os valores em strings "light" ou "dark".
 */
function getTemaAtual() {
  // Condicional para verificar tema do navegador cliente
  if (window.matchMedia("(prefers-color-scheme: light").matches) {
    // Tema claro
    return "light"
  } else {
    // Tema escuro
    return "dark"
  }
}

/**
 * Altera o valor do tema atual (light ou dark).
 */
function alterarTema() {
  window.alert("Botão clicado!")
}
