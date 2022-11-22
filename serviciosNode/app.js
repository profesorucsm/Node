const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen('3001',()=>{
    console.log("Servidor en Ejecucion");
})

const albumRouter = require('./routes/albums');
app.use('/api',albumRouter);