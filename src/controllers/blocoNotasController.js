
exports.getAll = (req, res, next) => {
    const filter = '';
    execSQLQuery('SELECT * FROM anotacao', filter, res);
};

exports.get = (req, res, next) => {
    const filter = [parseInt(req.params.id)];
    console.log(filter);
    // const consulta = 'SELECT * FROM anotacao WHERE id_noticia= ?';
    const consulta = 'SELECT * FROM anotacao WHERE id_noticia= $1';
    
    execSQLQuery(consulta, filter, res);
};

exports.post = (req, res, next) => {
    const filter = [
        // req.body.titulo.substring(0,30), 
        req.body.texto.substring(0,150)
    ];

    execSQLQuery(`INSERT INTO anotacao(titulo, texto) VALUES( ? , ? )`, filter, res);
};
exports.patch = (req, res, next) => {
    const filter = [
        req.body.titulo.substring(0,30), 
        req.body.texto.substring(0,150),
        parseInt(req.params.id)
    ];
    execSQLQuery(`UPDATE anotacao SET titulo= ?, texto= ? WHERE id_noticia= ?`, filter, res);
};
exports.delete = (req, res, next) => {
    const filter = [parseInt(req.params.id)];
    execSQLQuery('DELETE FROM anotacao WHERE id_noticia= ?', filter, res);
};


function execSQLQuery(sqlQry, val, res) {
    var connection = require('../../bin/db_connection');
    connection(sqlQry, val, res);
}
