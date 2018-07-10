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
        songsByArtist()
        break;
      case 'Artists who appear more than once':
        doubleArtist()
        break;
      case 'All data within a specific range':
        console.log('All data within a specific range')
        break
      case 'Search for specific song':
        console.log('Search for specific song')
        break
    }
});

function doubleArtist(){
  connection.query('SELECT artist, COUNT(*) c FROM top5000 GROUP BY artist HAVING c > 1', function(error, results, fields){
    console.log(results[0])
    for(let i = 0; i < results.length; i++){
      console.log(results[i].artist + ' appears ' + results[i].c + ' time/s')
    }

  })
}

function songsByArtist(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'whichArtist',
      message:'Which artist would you like to search for?'
    }
  ]).then(answers => {
    //console.log(answers.whichArtist)

    connection.query('SELECT * FROM top5000 WHERE artist = ?',
    [
      answers.whichArtist
    ],
     function(error, results, fields){
       //console.log('results ' + JSON.stringify(results[0].song))

       //loop through the results and print to console
       for(let i = 0; i < results.length; i++){
         console.log(results[i].song + '  ' + results[i].position)
       }
    })
});

}

//connection.end();
