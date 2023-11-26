import express  from "express";
import cors from "cors";
import movimentacoesRoutes from "./routes/movimentacoes.js";
import usuariosRoutes from "./routes/usuarios.js";
import { connectToDatabase } from "./db.js";
import jwt from "jsonwebtoken";
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import eventosRoutes from './routes/eventos.js';

const app = express();
const port = 8080;
/*
app.use(express.json());
app.use(cors())
//vai pegar a rota do userRoutes e no user routes há um get
app.use("/", movimentacoesRoutes)

app.listen(8080)


export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, 'segredo', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.userId = decoded.userId;
    next();
  });
};
*/
/*
connectToDatabase()
  .then(() => {
    app.use(express.json());
    app.use(cors());

    //movimentacoes
    //app.use("/",verifyToken, movimentacoesRoutes);
    app.use("/", movimentacoesRoutes)

    //usuarios
    app.use("/usuarios", usuariosRoutes);

    app.listen(8080, () => {
      console.log("Servidor rodando na porta 8080");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
*/

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use('/users', userRoutes);
app.use('/movimentacoes', movimentacoesRoutes); // Adicionado
app.use("/eventos", eventosRoutes);

//app.use('/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de movimentações!');
});

// Servir o frontend em produção
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});