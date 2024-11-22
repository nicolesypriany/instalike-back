import express from "express"; // Importa a biblioteca Express para criar o servidor web.
import routes from "./src/routes/postRoutes.js";

const app = express(); // Cria uma instância do Express para iniciar o servidor.
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => { // Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver ouvindo.
  console.log("Servidor escutando...");
});

