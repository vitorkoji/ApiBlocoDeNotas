module.exports = function(){
    var mysql = require('mysql');
        
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12345678',
        database : 'projeto'
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    });

    return connection;
}