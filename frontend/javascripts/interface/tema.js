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

  // Obter e adicionar classe ao body
  const body = document.querySelector("body")
  body.classList.add("alterar-tema")

  if (theme == "light") {
    /* Aplicar tema claro */

    // Remover classe dark-mode do <body>
    body.classList.remove("dark-mode")

    // Background
    root.style.setProperty("--background", "var(--background-claro)")
    root.style.setProperty("--background-contraste", "var(--background-escuro)")
    // Background destaque sutil
    root.style.setProperty("--background-destaque-sutil", "var(--background-destaque-sutil-claro)")
    root.style.setProperty("--background-destaque-sutil-contraste", "var(--background-destaque-sutil-escuro)")
    // Background cinza
    root.style.setProperty("--background-cinza", "var(--background-cinza-claro)")
    root.style.setProperty("--background-cinza-contraste", "var(--background-cinza-escuro)")

    // Background transparentes
    root.style.setProperty("--background-transparente", "var(--background-claro-transparente)")

    // Cor da letra
    root.style.setProperty("--letra-uso", "var(--letra-preta)")
    root.style.setProperty("--letra-oposta", "var(--letra-branca)")

    // Cores de tema
    root.style.setProperty("--cor-primaria-tema", "var(--cor-primaria)")

    // Ocultar botão de modo claro
    lightIcon.style.display = "none"
    // Exibir botão de modo escuro
    darkIcon.style.display = "block"
  } else {
    /* Aplicar tema escuro */

    // Adicionar classe dark-mode ao <body>
    body.classList.add("dark-mode")

    // Backgrounds
    root.style.setProperty("--background", "var(--background-escuro)")
    root.style.setProperty("--background-contraste", "var(--background-claro)")
    // Background destaque sutil
    root.style.setProperty("--background-destaque-sutil", "var(--background-destaque-sutil-escuro)")
    root.style.setProperty("--background-destaque-sutil-contraste", "var(--background-destaque-sutil-claro)")
    // Background cinza
    root.style.setProperty("--background-cinza", "var(--background-cinza-escuro)")
    root.style.setProperty("--background-cinza-contraste", "var(--background-cinza-claro)")

    // Background transparentes
    root.style.setProperty("--background-transparente", "var(--background-escuro-transparente)")

    // Cor da letra
    root.style.setProperty("--letra-uso", "var(--letra-branca)")
    root.style.setProperty("--letra-oposta", "var(--letra-preta)")

    // Cores de tema
    root.style.setProperty("--cor-primaria-tema", "var(--roxo-medio)")

    // Exibir botão de modo claro
    lightIcon.style.display = "block"
    // Ocultar botão de modo escuro
    darkIcon.style.display = "none"
  }

  // Remover classe de transição de tema depois de um tempo
  setTimeout(
    () => {
      body.classList.remove("alterar-tema")
    },
    550 // 0.55 segundos
  )
}
