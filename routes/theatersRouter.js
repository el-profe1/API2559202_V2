const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); //ObjectId: Para poder trabajar con id

const uri = "mongodb+srv://el-profe1:el-profe1@cluster0.gdzt1ar.mongodb.net/?retryWrites=true&w=majority";

const router = express.Router();

//THEATERS
router.get('/',async (req, res)=>{
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const movies = await client.db("sample_mflix").collection("theaters").find({}).limit(10).toArray();
        if(movies){
            res.send(movies);
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