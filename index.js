const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('saludos si funciona');    
});

app.post('/', function (req, res){
    res.send('saludos si funciona');
});

app.put('/', function (req, res){
    res.send('si funciona');
});
app.delete('/', function (req, res){
  res.send('si funciona ');
});
app.listen(3000, () =>{
    console.log('el servidor esta incializado en el port 3000');
});