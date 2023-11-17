// controllers/usuarios.mjs
import { queryDatabase } from "../db.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  queryDatabase("SELECT * FROM usuarios WHERE email = ?", [email])
    .then((result) => {
      if (result.length === 0) {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.status(500).json({ error: "Erro ao cadastrar usuário", details: err });
          } else {
            queryDatabase("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash])
              .then(() => res.status(200).json({ msg: "Usuário cadastrado com sucesso" }))
              .catch((error) =>
                res.status(500).json({ error: "Erro ao cadastrar usuário", details: error })
              );
          }
        });
      } else {
        res.status(400).json({ msg: "Email já cadastrado" });
      }
    })
    .catch((error) =>
      res.status(500).json({ error: "Erro ao cadastrar usuário", details: error })
    );
};

export const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  queryDatabase("SELECT * FROM usuarios WHERE email = ?", [email])
    .then((result) => {
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (err) {
            res.status(500).json({ error: "Erro ao realizar login", details: err });
          } else if (response) {
            res.status(200).json({ msg: "Usuário logado" });
          } else {
            res.status(401).json({ msg: "Senha incorreta" });
          }
        });
      } else {
        res.status(404).json({ msg: "Usuário não registrado" });
      }
    })
    .catch((error) =>
      res.status(500).json({ error: "Erro ao realizar login", details: error })
    );
};
