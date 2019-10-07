module.exports = function(sqlQry, val, res){
    var mysql = require('mysql');
        
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12345678',
        database : 'projeto'
    });

    connection.query(sqlQry, val, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });

    return connection;
}