const express = require('express');
const app = express();


app.get('*', (req,res) => {
    console.log('Hola mundo mi primera app serverless');
    res.send({message: 'Chanchito feliz'});
})

module.exports = app;