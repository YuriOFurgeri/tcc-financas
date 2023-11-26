import db from "../db.js";

export const getEventos = (req, res) => {
  const userId = req.query.userId;

  db.query('SELECT * FROM eventos WHERE userId = ?', [userId], (err, result) => {
    if (err) {
      console.error('Erro ao obter eventos:', err);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }

    res.json(result);
  });
};

export const addEvento = (req, res) => {
  const { userId, title, start, end, valor } = req.body;

  db.query('INSERT INTO eventos (userId, title, start, end, valor) VALUES (?, ?, ?, ?, ?)', [userId, title, start, end, valor], (err, result) => {
    if (err) {
      console.error('Erro ao adicionar evento:', err);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
    res.json({ message: 'Evento adicionado com sucesso!' });
  });
};

export const updateEvento = (req, res) => {
  const eventoId = req.params.id;
  const { title, start, end, valor } = req.body;

  db.query(
    'UPDATE eventos SET title = ?, start = ?, end = ?, valor = ? WHERE id = ?',
    [title, start, end, valor, eventoId],
    (err, result) => {
      if (err) {
        console.error('Erro ao editar evento:', err);
        return res.status(500).json({ error: 'Erro interno no servidor' });
      }

      res.json({ message: 'Evento editado com sucesso!' });
    }
  );
};

export const deleteEvento = (req, res) => {
  const eventoId = req.params.id;

  db.query('DELETE FROM eventos WHERE id = ?', [eventoId], (err, result) => {
    if (err) {
      console.error('Erro ao deletar evento:', err);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }

    res.json({ message: 'Evento deletado com sucesso!' });
  });
};
