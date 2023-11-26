import db from "../db.js";
//import { queryDatabase } from "../db.js";

export const getMovimentacoes = (req, res) => {
    const userId = req.query.userId;
  
    db.query('SELECT * FROM movimentacao WHERE userId = ?', [userId], (err, result) => {
      if (err) {
        console.error('Erro ao obter movimentacoes:', err);
        return res.status(500).json({ error: 'Erro interno no servidor' });
      }
  
      res.json(result);
    });
  };



export const addMovimentacao = (req, res) => {
    const { userId, descricao, operacao,valor, data_mov } = req.body;

  
    db.query('INSERT INTO movimentacao (userId, descricao, operacao, valor , data_mov) VALUES (?, ?, ?, ?, ?)', [userId, descricao,operacao, valor, data_mov], (err, result) => {
        if (err) {
          console.error('Erro ao adicionar movimentação:', err);
          return res.status(500).json({ error: 'Erro interno no servidor' });
        }
        res.json({ message: 'Movimentação adicionada com sucesso!' });
    });
  };
      /*
    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentacao criada com sucesso");
    });
    */



export const updateMovimentacao = (req, res) => {

        const movimentacaoId = req.params.id;
        const { descricao,operacao, valor, data_mov } = req.body;
      
        db.query(
          'UPDATE movimentacao SET descricao = ?,operacao =?, valor = ?, data_mov = ? WHERE id = ?',
          [descricao, operacao, valor, data_mov, movimentacaoId],
          (err, result) => {
            if (err) {
              console.error('Erro ao editar movimentação:', err);
              return res.status(500).json({ error: 'Erro interno no servidor' });
            }
      
            res.json({ message: 'Movimentação editada com sucesso!' });
          }
        );
      };
      
    /*
    const q =
    "UPDATE movimentacao SET `descricao` = ?, `operacao` = ?, `valor` = ?, `data_mov` = ? WHERE `id` = ?";
    const values = [
        req.body.descricao,
        req.body.operacao,
        req.body.valor,
        req.body.data_mov,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso");
    });
    queryDatabase(q, [...values, req.params.id])
    .then(() => res.status(200).json("Movimentação atualizada com sucesso"))
    .catch((error) =>
      res.status(500).json({ error: "Erro ao atualizar movimentação", details: error })
    );
};
    */



export const deleteMovimentacao = (req, res) => {
  /*
  const q = "DELETE FROM movimentacao WHERE `id` = ?";
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentacao deletada com sucesso");
    });

queryDatabase(q, [req.params.id])
.then(() => res.status(200).json("Movimentação deletada com sucesso"))
.catch((error) =>
  res.status(500).json({ error: "Erro ao deletar movimentação", details: error })
);
*/
const movimentacaoId = req.params.id;

db.query('DELETE FROM movimentacao WHERE id = ?', [movimentacaoId], (err, result) => {
  if (err) {
    console.error('Erro ao deletar movimentação:', err);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }

  res.json({ message: 'Movimentação deletada com sucesso!' });

}); };
