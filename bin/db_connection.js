module.exports = function (sqlQry, val, res) {
  // var mysql = require('mysql');

  // var connection = mysql.createConnection({
  //     host : 'ec2-107-20-198-176.compute-1.amazonaws.com',
  //     port: '5432',
  //     user : 'vworkxizvmcbfi',
  //     password : 'bc2224927cd29a3e5bc8082cdec4ee681ae2ef126720be754b29d3c7304defff',
  //     database : 'dbsq8bpvd3037e'
  // });

  const Pool = require('pg').Pool
  const pool = new Pool({
    user: 'vworkxizvmcbfi',
    host: 'ec2-107-20-198-176.compute-1.amazonaws.com',
    database: 'dbsq8bpvd3037e',
    password: 'bc2224927cd29a3e5bc8082cdec4ee681ae2ef126720be754b29d3c7304defff',
    port: 5432,
  })

  pool.query(sqlQry, val, (error, results) => {
    if (error)
      res.json(error);
    else
      res.json(results);
    pool.end();
    console.log('executou!');
  });

  return pool;

  // connection.query(sqlQry, val, function (error, results) {
  //   if (error)
  //     res.json(error);
  //   else
  //     res.json(results);
  //   connection.end();
  //   console.log('executou!');
  // });

  // return connection;
}