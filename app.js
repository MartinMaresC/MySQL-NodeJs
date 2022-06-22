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

conexion.end();