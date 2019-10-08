
exports.getAll = (req, res, next) => {
    const filter = '';
    execSQLQuery('SELECT * FROM anotacao', filter, res);
};

exports.get = (req, res, next) => {
    const filter = [parseInt(req.params.id)];

    //Esse jeito é utilizando mysql
    // const consulta = 'SELECT * FROM anotacao WHERE id_anotacao= ?';

    //Esse é utilizando postgre
    const consulta = 'SELECT * FROM anotacao WHERE id_anotacao= $1';
    
    execSQLQuery(consulta, filter, res);
};

exports.post = (req, res, next) => {
    const filter = [
        req.body.titulo.substring(0,30), 
        req.body.texto.substring(0,150)
    ];

    console.log(filter);

    execSQLQuery(`INSERT INTO anotacao(titulo, texto) VALUES( $1 , $2 )`, filter, res);
};

exports.patch = (req, res, next) => {
    const filter = [
        req.body.titulo.substring(0,30), 
        req.body.texto.substring(0,150),
        parseInt(req.params.id)
    ];
    execSQLQuery(`UPDATE anotacao SET titulo= $1, texto= $2 WHERE id_anotacao= $3`, filter, res);
};

exports.delete = (req, res, next) => {
    const filter = [parseInt(req.params.id)];
    execSQLQuery('DELETE FROM anotacao WHERE id_anotacao= $1', filter, res);
};


function execSQLQuery(sqlQry, val, res) {
    var connection = require('../../bin/db_connection');
    connection(sqlQry, val, res);
}
