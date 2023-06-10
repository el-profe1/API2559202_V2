const express = require('express');
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb'); //ObjectId: Para poder trabajar con idconst bodyparser = require('body-parser');

const uri = process.env.URI;

const router = express.Router();

//COMMENTS
router.get('/',async (req, res)=>{
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const movies = await client.db("sample_mflix").collection("comments").find({}).limit(10).toArray();
        if(movies){
            res.status(200).send(movies);
        }else{
            res.status(404).send("No se encontro la informacion");
        }
    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
})

module.exports = router;