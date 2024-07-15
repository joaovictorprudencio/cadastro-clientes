const express = require('express');
const prisma = require('./lib/connect');
const app = express();
const db = prisma;



app.get('/', async  (req , res ) => {
    res.send('pagina inicial');
})

app.listen(8080, ()=> {
    console.log('rodando')
})