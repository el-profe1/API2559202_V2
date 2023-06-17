require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); //ObjectId: Para poder trabajar con id
const bodyparser = require('body-parser');
const movieService = require('../services/movieService');

const uri = process.env.URI;

const router = express.Router();

const service = new movieService();

/**
 * Rutas, con verbos HTTP: GET, POST, PATCH, DELETE...
 */

// GET
router.get('/', async (req, res)=>{
    const { limit, offset } = req.query;
    const movies =await service.find(limit, offset);
    if(movies){
        // res.status(200).send(movies);
        res.render('index.ejs', {movies});
    }else{
        res.status(404).send("No se encontro la informacion");
    }
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id;
        const result = await service.findOne(id);
        if(result){
            res.status(200).send(result);
        }else{
            res.status(404).send("No se encontro la pelicula");
        }
})

// POST
router.post('/', async (req, res)=>{ 
    const body = req.body;
    const result = await service.insertOne(body);
    if(result){
        res.status(201).json({
            message: 'Se creo la pelicula en la Base de Datos',
            result
        });
    }else{
        res.status(404).send("No se creo la pelicula");
    }
})

// PATCH
router.patch('/:id', async (req, res)=>{
    const id = req.params.id;
    const { title, year  }= req.body;
    const result = await service.updateOne(id, title, year);
    if(result){
        res.status(201).json({
            message: 'Se actualizo la pelicula',
            result
        });
    }else{
        res.status(400).send("No se actualizo la pelicula");
    }
})

// DELETE
router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    const result = await service.deleteOne(id);
    if(result){
        res.status(200).json({
            message: 'Se borro la pelicula',
            result
        });
    }else{
        res.status(400).send("No se actualizo la pelicula");
    }
})

module.exports = router;