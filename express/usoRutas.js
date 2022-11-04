var express = require('express');

// creando aplicación en Express
var app = express();

// invocando archivo que maneja rutas
var rutas = require('./rutas.js');
app.use('/',rutas);

// El servidor de escucha que desplegará mi ruta HTTP
app.listen(3000,function(){
    console.log('La aplicación está funcionando en el puerto 3000');
});
