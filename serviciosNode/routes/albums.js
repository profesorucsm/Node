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


///// Trabajando Autenticación con JSONWebToken

// Importando Libreria en variable
const jwt = require('jsonwebtoken');

// Ruta para generar el Token
appRouter.post('/login', (req,res)=>{
    const user = {
        id: 1,
        username: "msantillana",
        email: "msantillana@ucsm.edu.pe",
    }
    jwt.sign({user}, 'secretkey', {expiresIn: '30s'},(err,token)=>{
        res.json({
            token
        });
    });
});

// Función para validar que el Token ingresado es correcto
function verifiToken(req,res,next){
    const bearerHeader =  req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

// Ruta para invocar servicio con método Post utilizando Autenticación
appRouter.post('/postseguro', verifiToken, (req,res)=>{
    jwt.verify(req.token, 'secretkey', (err, authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                mensaje: "Post Creado",
                authData
            });
        }
    });
});



module.exports = appRouter;