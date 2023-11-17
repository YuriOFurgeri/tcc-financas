import db from "../db.js";
import { queryDatabase } from "../db.js";


export const getMovimentacoes = (req, res) => {
    //q de query
    //const q = "SELECT * FROM movimentacao LIMIT 5, 10";
    
    const q = "SELECT * FROM movimentacao";
    //DESCOMENTAR
    //const q = "SELECT * FROM movimentacao WHERE idusuario = ?";
    //const idUser = req.idusuario;
        
    /*
    //(db o mysql)primeiro parametro o q, se tiver erro ele devolve, senão devolve errado 
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
    */

      //queryDatabase(q, [idUser])
        queryDatabase(q)
        .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: "Erro ao obter movimentações", details: error }));
};



export const addMovimentacao = (req, res) => {
    const q = "INSERT INTO movimentacao(`descricao`, `operacao`, `valor`, `data_mov`) VALUES (?)";

  
    const values = [
        req.body.descricao,
        req.body.operacao,
        req.body.valor,
        req.body.data_mov,
        //req.body.idusuario,
    ];
      /*
    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentacao criada com sucesso");
    });
    */

    queryDatabase(q, [values])
    .then(() => res.status(201).json("Movimentação criada com sucesso"))
    .catch((error) => res.status(500).json({ error: "Erro ao adicionar movimentação", details: error }));

};

export const updateMovimentacao = (req, res) => {
    const q =
    "UPDATE movimentacao SET `descricao` = ?, `operacao` = ?, `valor` = ?, `data_mov` = ? WHERE `id` = ?";
    const values = [
        req.body.descricao,
        req.body.operacao,
        req.body.valor,
        req.body.data_mov,
    ];
/*
    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso");
    });
    */
    queryDatabase(q, [...values, req.params.id])
    .then(() => res.status(200).json("Movimentação atualizada com sucesso"))
    .catch((error) =>
      res.status(500).json({ error: "Erro ao atualizar movimentação", details: error })
    );
};



export const deleteMovimentacao = (req, res) => {
    const q = "DELETE FROM movimentacao WHERE `id` = ?";
/*
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentacao deletada com sucesso");
    });
*/
queryDatabase(q, [req.params.id])
.then(() => res.status(200).json("Movimentação deletada com sucesso"))
.catch((error) =>
  res.status(500).json({ error: "Erro ao deletar movimentação", details: error })
);

}
