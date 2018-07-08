var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'additional_favorites_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
  //afterConnection()
  //queryAllSongs()
  createTable()
  updateTable1()
  updateTable2()
});

function createTable(){
  connection.query('CREATE TABLE IF NOT EXISTS ice_cream_crud(size INT NOT NULL,flavor VARCHAR(50) NOT NULL)', function(err, res){
    if (err) throw err;
    console.log('table created');

    //connection.destroy()
  })
}

function updateTable1(){
  connection.query({
    sql: 'SELECT * FROM ice_cream_crud WHERE flavor = ?',
    values: ['vanilla']
  }, function(err, res){
    if (err) throw err;
    console.log('table updated')
    console.log(res)
  //  connection.destroy()
  })
}
function updateTable2(){
  connection.query({
    sql: 'DELETE FROM ice_cream_crud WHERE size = ? AND flavor = ?',
    values: [3, 'vanilla']
  }, function(err, res){
    if (err) throw err;
    console.log('table updated')
    console.log(res)
  //  connection.destroy()
  })
}

function afterConnection(){
  connection.query("SELECT * FROM favorite_foods", function(err, res) {
    if (err) throw err;
    console.log(res);

    connection.destroy()
  });
}

function queryAllSongs(){
  connection.query('SELECT * FROM favorite_songs', function(err, res){
    console.log(res[1].song)
    connection.destroy()
  })
}
