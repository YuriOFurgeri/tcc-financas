import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "financasapp",
})

export const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
      db.connect((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };
  
  export const queryDatabase = (q, values = []) => {
    return new Promise((resolve, reject) => {
      db.query(q, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
  
  /*
  export const getUserByEmailAndPassword = (email, password) => {
    const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
    const values = [email, password];
    
    return queryDatabase(query, values);
  };
*/
  export default db;