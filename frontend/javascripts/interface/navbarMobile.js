"use strict"

/*
 * Este script é responsável por exibir e ocultar o navbar mobile ao clicar no botão de menu hambúrguer ou no X da sidebar.
 */

// Obter elementos DOM
const botaoAbrirNavbar = document.getElementById("botao-menu-mobile")
const botaoFecharNavbar = document.getElementById("botao-fechar-navbar")
const navbar = document.getElementById("nav-principal")

// Adicionar eventos listeners ao clicar nos botões
botaoAbrirNavbar.addEventListener("click", exibirNavbar)
botaoFecharNavbar.addEventListener("click", ocultarNavbar)

/**
 * Exibe o navbar mobile na tela.
 */
function exibirNavbar() {
  navbar.classList.add("show")
}

/**
 * Oculta o navbar mobile na tela.
 */
function ocultarNavbar() {
  navbar.classList.remove("show")
}
