import express from "express";
import { routes } from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// GET - BUSCAR INFORMAÇÕES
// POST - CADASTRAR INFORMAÇÕES
// PUT - ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH - ATUALIZAR UMA INFORMAÇÕES DE UMA ENTIDADE
// DELETE - DESCUBRA

app.use(routes);

app.listen(PORT, () => {
  console.log("HTTP Server Running");
});
