require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); //ObjectId: Para poder trabajar con id
const bodyparser = require('body-parser');

const uri = process.env.URI;

const router = express.Router();

//THEATERS
router.get('/',async (req, res)=>{
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const users = await client.db("sample_mflix").collection("users").find({}).limit(10).toArray();
        if(users){
            res.send(users);
        }else{
            res.send("No se encontro la informacion");
        }
    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
})

module.exports = router;