const express = require('express');
const app= express();
const router = express.Router();
const bodyParser= require('body-parser');
const cors = require('cors');
const dboperations = require('./dboperations');
const PORT = process.env.PORT||8080;
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


    router.route('/estudiante').get((req, res) => {
        dboperations.getEstudiante().then(result => {
        res.json(result);      
        })
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
app.listen(8080, () =>{
    console.log('el servidor esta incializado en el port 8080');
});