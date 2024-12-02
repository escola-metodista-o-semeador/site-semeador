"use strict"

/* Importação de dependências */
import express, { json } from "express" // Express: criar o servidor | json: processar requisições JSON
import cors from "cors" // CORS: permite requisições de diferentes origens

/** Instância do aplicativo Express. */
const app = express()
/* Middlewares */
app.use(json()) // processar requisições com corpo em JSOn
app.use(cors) // permitir requisições de outras origens

/*
 * Configurar o servidor para escutar a porta 3000.
 */
app.listen(
  3000, // porta
  () => {
    /* callback */
    try {
      /* código executado quando o servidor inicia */

      // Mensagem de tudo OK
      console.log(`\n${"-".repeat(75)}
      Servidor em execução.`)
    } catch (e) {
      /* tratamento de erros */
      console.log(`\n${"-".repeat(75)}
      Houve um erro na conexão:\n
      ${e}\n`)
    }
  }
)
