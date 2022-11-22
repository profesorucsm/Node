// Creando objetos de librerías importadas
var mysql = require('mysql');

// Cargando parámetros de Conexion con la BD
var con = mysql.createConnection({
    host:'localhost',
    database:'musicdb',
    port:'8889',
    user:'root',
    password:'root',
});

// Conectarse a la BD y manejar errores
con.connect(function(err){
    if(err) throw err;
    console.log("Se conecto a la BD");
});

module.exports = con;