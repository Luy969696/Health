const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
  });
  console.log("T");
  
  connection.connect((error) => {
    
    if (error) {
      console.error('Error connecting to MySQL server: ' + error.stack);
      return;
    }
  
    console.log('Connected to MySQL server.');
  
    const query = 'SELECT * FROM work_unit;';
    connection.query(query, (error, results) => {
      
      if (error) throw error;
      console.log('Results:', results);
    });
  
    connection.end();
  });
  
  app.get('/button', function(req, res) {
    connection.query('SELECT * FROM work_unit', function(error, results, fields) {
      if (error) throw error;
  
      // 쿼리 결과를 JSON 형식으로 보내기
      res.json(results);
    });
  });
  
  