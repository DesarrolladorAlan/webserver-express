const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


// Hacemos publico un directorio
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Solicitud y respuesta
app.get('/', (req, res) => {

    //     // res.send('Hola Mundo');
    //     let salida = {
    //         nombre: 'fernando',
    //         edad: 32,
    //         url: req.url
    //     };

    // rendereiza home.hbs
    res.render('home', {
        nombre: 'fernando'

    });

});

app.get('/about', (req, res) => {


    // renderiza home.hbs
    res.render('about');

});

// Otro servicio para que escuche a Data
app.get('/data', (req, res) => {

    res.send('Hola Data');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});