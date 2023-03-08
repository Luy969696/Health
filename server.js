
const path = require('path');
const express = require('express');
const app = express();
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
  
  // connection.end();
});

app.get('/button', function(req, res) {
  
  connection.query('SELECT * FROM work_unit', function(error, results, fields) {
    if (error) throw error;

    // 쿼리 결과를 JSON 형식으로 보내기
    res.json(results);
  });
});

app.get('/WorkList', function(req, res) {
  console.log("1");
  const id= req.query.id;
  console.log(req.query);
  connection.query(`SELECT * FROM Work where work_unit_cd ='${id}';`, function(error, results, fields) {
  if (error) throw error;

    // 쿼리 결과를 JSON 형식으로 보내기
    res.json(results);
  });
});




// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// 라우트 설정
app.get('/', function(req, res) {
  // console.log(__dirname+"/index.html");
  res.sendFile(__dirname+"/index.html");
});

// 서버를 시작합니다.
app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});

app.get('/data', (req, res) => {
    
    mysql.getdata((error, results) => {
      if (error) {
        res.status(500).send('Internal server error');
        return;
      }
  
      res.send(results);
    });
  });

  
  