
var app = require('./config/server');

var moduleNoticia = require('./src/routes/noticia');
moduleNoticia(app);

// app.get('/', function(req, res){
//     res.send('<html><body><h1>Testeee</h1></body></html>');
// });

app.listen(3000, function(){
    console.log('servidor rodando com express');
});