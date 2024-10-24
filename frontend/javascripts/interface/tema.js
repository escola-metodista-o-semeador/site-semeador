"use strict"

/*
 * Este script é responsável por alterar o tema do site entre claro e escuro.
 */

// Obter tema atual do sistema
let temaAtual = getTemaAtual()
// Aplicar o tema atual
aplicarTema(temaAtual)

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
  // Alterar valor da variável
  temaAtual = temaAtual == "light" ? "dark" : "light"

  // Aplicar o tema
  aplicarTema(temaAtual)
}

/**
 * Aplica o tema (claro ou escuro), alterando as variáveis CSS de cores e o botão de tema.
 *
 * @param {string} theme O tema definido pelo navegador ou alterado pelo usuário ("light" ou "dark"). Por padrão, é tema claro ("light").
 */
function aplicarTema(
  theme = "light" // Tema a ser aplicado (padrão: claro)
) {
  // Obter elemento raiz (:root)
  const root = document.documentElement

  // Obter ícones dos botões de tema
  const lightIcon = document.getElementById("icone-light-mode")
  const darkIcon = document.getElementById("icone-dark-mode")

  if (theme == "light") {
    /* Aplicar tema claro */

    // Background
    root.style.setProperty("--background", "var(--background-claro)")
    root.style.setProperty("--background-contraste", "var(--background-escuro)")

    // Background transparentes
    root.style.setProperty("--background-transparente", "var(--background-claro-transparente)")

    // Cor da letra
    root.style.setProperty("--letra-uso", "var(--letra-preta)")

    // Ocultar botão de modo claro
    lightIcon.style.display = "none"
    // Exibir botão de modo escuro
    darkIcon.style.display = "block"
  } else {
    /* Aplicar tema escuro */

    // Backgrounds
    root.style.setProperty("--background", "var(--background-escuro)")
    root.style.setProperty("--background-contraste", "var(--background-claro)")

    // Background transparentes
    root.style.setProperty("--background-transparente", "var(--background-escuro-transparente)")

    // Cor da letra
    root.style.setProperty("--letra-uso", "var(--letra-branca)")

    // Exibir botão de modo claro
    lightIcon.style.display = "block"
    // Ocultar botão de modo escuro
    darkIcon.style.display = "none"
  }
}
