var dbConnection = require('../../config/db_connection');

module.exports = function(app){
    app.get('/noticias', function(req, res){

        var connection = dbConnection(); 
        
        connection.query('select * from noticias', function(error, result){
            res.send(result);
        });
        
    });
}