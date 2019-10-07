const express = require('express');
const app = express();

//definindo as rotas
const index = require('./routes/index');
const blocoNotas = require('./routes/blocoNotasRoute');

var admin = express()

admin.get('/', function (req, res) {
  console.dir(admin.mountpath) // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage')
})

app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app

app.use('/', index);
app.use('/noticias', blocoNotas);

module.exports = app;