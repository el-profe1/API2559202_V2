const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); //ObjectId: Para poder trabajar con id
const bodyparser = require('body-parser');
require('dotenv').config();

const uri = process.env.URI;


class movieService{

    constructor(){}
    
    //CREATE
    //1. insertOne()
    async insertOne(body){
        const client = new MongoClient(uri);        
        try {
            await client.connect();
            const result = await client.db("sample_mflix").collection("movies").insertOne(body);
            return result
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }    
    }
    // Tarea
    //2. insertMany()

    //READ
    //1. find()
    async find(limit, offset){
        const client = new MongoClient(uri);
        try{
            await client.connect();
            const movies = await client.db("sample_mflix").collection("movies").find({}).skip(Number(offset)).limit(Number(limit)).toArray();
            return movies;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }    

    //2. findOne()
    async findOne(id){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db("sample_mflix").collection("movies").findOne({_id: new ObjectId(id)});
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }
    
    //UPDATE
    // 1. updateOne() Actualizamos solo un campo
    async updateOne(id, title, year){
        const client = new MongoClient(uri);        
        try {
            await client.connect();
            const result = await client.db("sample_mflix").collection("movies").updateOne({_id: new ObjectId(id)},{$set:{title:title, year:year}});
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }    
    // Tarea
    //2. updateMany()

    //DELETE
    //1. deleteOne()
    async deleteOne(id){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const result = await client.db("sample_mflix").collection("movies").deleteOne({_id: new ObjectId(id)});
            return result;
        }catch(e){
            console.log(e);
        }finally{
            await client.close();
        }
    }
    
    // Tarea
    //2. deleteMany()    

    //TAREAS
    /**
     * Pipelines: o sea los aggregates
     * lookups
     * unwinds
     * drop collection
     * 
     *  |
     *  |
     *  |
     *  |
     * \|/
     * 
     * ETC
     * 
     * 
     */
}

module.exports = movieService;