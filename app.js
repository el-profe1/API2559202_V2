const express = require('express');
const path = require("path");
const bodyparser = require('body-parser');
const routerApi = require('./routes');
// const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


//Middlewares
app.use(bodyparser.json()); //para poder trabajar con json
app.use(bodyparser.urlencoded({ extended: true })); //para poder trabajar con formularios codificados en url
app.use(express.json()); //para poder trabajar con json
// app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'));

routerApi(app);

const port = process.env.PORT || 4000;

app.get('/api/v1',(req, res)=>{
    // res.status(200).send('API de peliculas 📽️');
    res.sendFile(path.join(__dirname, '/public/html/index.html'))
})

app.get('/*',(req, res)=>{
    res.status(404).send('Oops! La informacion que solicitaste no esta disponible 😿');
})

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${port}`);
})