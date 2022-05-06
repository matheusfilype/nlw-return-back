import express from "express";
import { routes } from "./routes";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// GET - BUSCAR INFORMAÇÕES
// POST - CADASTRAR INFORMAÇÕES
// PUT - ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH - ATUALIZAR UMA INFORMAÇÕES DE UMA ENTIDADE
// DELETE - DESCUBRA

app.listen(PORT, () => {
  console.log("HTTP Server Running");
});
