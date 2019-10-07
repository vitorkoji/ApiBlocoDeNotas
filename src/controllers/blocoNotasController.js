
exports.getAll = (req, res, next) => {
    const filter = '';
    execSQLQuery('SELECT * FROM noticias', filter, res);
};

exports.get = (req, res, next) => {
    const filter = [parseInt(req.params.id)];
    const consulta = 'SELECT * FROM noticias WHERE id_noticia= ?';
    
    execSQLQuery(consulta, filter, res);
};

exports.post = (req, res, next) => {
    const filter = [
        req.body.titulo.substring(0,30), 
        req.body.noticia.substring(0,150)
    ];

    execSQLQuery(`INSERT INTO noticias(titulo, noticia) VALUES( ? , ? )`, filter, res);
};
exports.patch = (req, res, next) => {
    const filter = [
        req.body.titulo.substring(0,30), 
        req.body.noticia.substring(0,150),
        parseInt(req.params.id)
    ];
    execSQLQuery(`UPDATE noticias SET titulo= ?, noticia= ? WHERE id_noticia= ?`, filter, res);
};
exports.delete = (req, res, next) => {
    const filter = [parseInt(req.params.id)];
    execSQLQuery('DELETE FROM noticias WHERE id_noticia= ?', filter, res);
};


function execSQLQuery(sqlQry, val, res) {
    var connection = require('../../bin/db_connection');
    connection(sqlQry, val, res);
}
