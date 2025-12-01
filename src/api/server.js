import express from "express";
import cors from "cors";
import {MongoClient} from "mongodb";
const app=express();
app.use(cors());
app.use(express.json());

const MONGO_URL="mongodb://mongo:27017";
const client=new MongoClient(MONGO_URL);
let collection;

async function init(){
    try{
    await client.connect();
    const db=client.db("adbrew_test");
    collection=db.collection("todos");
    console.log("Connected to MongoDB");
}
   
 catch(error){
    console.error("Failed to connect to MongoDB", error);
}
}
init();

// Get all todos 
app.get("/todos",async(req,res)=>{
    try{
    const data=await collection.find().toArray();
    res.status(200).json(data); 
} catch(err){
    res.status(500).json({error:"Failed to fetch todos"});
}
});

// Posting a todo

app.post("/todos",async(req,res)=>{
    try{
    const {description}=req.body;
    
    if(!description){
        return res.status(400).json({error:"Description is required"});
    }
    const result=await collection.insertOne({
        description,
    });
    res.status(201).json({
        id:result.insertedId,
        description,
    });
} catch(err){
    res.status(500).json({error:"Failed in creating your todo"});
}
});

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});