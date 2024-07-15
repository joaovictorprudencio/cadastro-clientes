const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());
app.use('/usuarios', require('./router/usuario'));

app.listen(port, ()=> {
    console.log('rodando');
})