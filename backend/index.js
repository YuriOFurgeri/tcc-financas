import  express  from "express";
import cors from "cors";
import movimentacoesRoutes from "./routes/movimentacoes.js";
import usuariosRoutes from "./routes/usuarios.js";
import { connectToDatabase } from "./db.js";

const app = express();
/*
app.use(express.json());
app.use(cors())
//vai pegar a rota do userRoutes e no user routes há um get
app.use("/", movimentacoesRoutes)

app.listen(8080)
*/
connectToDatabase()
  .then(() => {
    app.use(express.json());
    app.use(cors());

    //movimentacoes
    app.use("/", movimentacoesRoutes);


    //usuarios
    app.use("/usuarios", usuariosRoutes);

    app.listen(8080, () => {
      console.log("Servidor rodando na porta 8080");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
