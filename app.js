var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'hortalizasorg',
  user: 'root',
  password: '' 
});

conexion.connect(function(error){
    if (error){
        throw error;
    } else {
        console.log('Conexión Exitosa');
    }
});



conexion.query('select * from empleados', function(error, results, fields){
    if (error)
    throw error;

    results.forEach(result => {
        console.log(result);
    });

});

conexion.end();