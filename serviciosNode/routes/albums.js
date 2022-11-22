// Creando objetos de librerías importadas
const express = require('express');
const appRouter = express.Router();
var bodyParser = require('body-parser');

const con = require("../config/connection");

// Configurando el Parser(conversor) de formato HTTP a formato JSON
appRouter.use(bodyParser.urlencoded({
    extended:true
}));
appRouter.use(bodyParser.json());

// Creando y configurando API para recuperar datos con Procedimiento Almacenado
let sql_all = `call listar_albums()`;

appRouter.get('/albums', (req,res)=>{
    con.query(sql_all,(error, results)=>{
        if(error) throw error;

        res.send(results[0]);
    });
});


// Creando y configurando API para insertar datos con Procedimiento Almacenado
let sql_insert = `call insertar_albums(?,?,?,?)`;

appRouter.post('/insertalbums', (req,res)=>{
    const album = {
        pTitulo : req.body.titulo,
        pLanzado : req.body.lanzado,
        pPrecio : req.body.precio,
        pGenero : req.body.genero
    };
    con.query(sql_insert,[album.pTitulo,album.pLanzado,album.pPrecio,album.pGenero]
        ,(error, results)=>{
            if(error) throw error;

            res.send(results[0]);
        });
});


module.exports = appRouter;