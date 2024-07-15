const express = require('express');
const prisma = require('./lib/connect');
const app = express();
const db = prisma;



app.use( express

app.listen(8080, ()=> {
    console.log('rodando')
})