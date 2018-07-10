var mysql      = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'top_songsDB'
});

connection.connect();

inquirer.prompt([
  {
    type: 'list',
    name: 'searchPrompt',
    message: 'WHAT WOULD YOU LIKE TO SEARCH FOR?',
    choices: [
      'Songs by a specific artist',
      'Artists who appear more than once',
      'All data within a specific range',
      'Search for specific song'
    ]
  }
]).then(answers => {
    //console.log('answers ' + JSON.stringify(answers))
    let answer = answers.searchPrompt

    switch(answer){
      case 'Songs by a specific artist':
        console.log('Songs by a specific artist')
        break;
      case 'Artists who appear more than once':
        console.log('Artists who appear more than once')
        break;
      case 'All data within a specific range':
        console.log('All data within a specific range')
        break
      case 'Search for specific song':
        console.log('Search for specific song')
        break
    }
});

/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
*/
connection.end();
