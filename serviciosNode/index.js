// Creando objetos de librerías importadas
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

// Cargando parámetros de Conexion con la BD
var connection = mysql.createConnection({
    host:'localhost',
    database:'musicdb',
    port:'8889',
    user:'root',
    password:'root',
});

// Conectarse a la BD y manejar errores
connection.connect(function(err){
    if(err) throw err;
    console.log("Se conecto a la BD");
});

// Configurando el Parser(conversor) de formato HTTP a formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// Creando Servidor
var server = app.listen(3000,"127.0.0.1",function(){
    var host = server.address().address;
    var port = server.address().port;
});

// Creando y configurando API para recupera datos de musicdb/albums
app.get('/albums',function(req, res){
    connection.query('select * from albums', function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});

// Creando y configurando API para recupera datos de musicdb/albums en base a ID
app.get('/albums/:id',function(req, res){
    connection.query('select * from albums where id=?', [req.params.id],function(error,results){
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
});

