const express= require('express');
const cors=require('cors');
const MongoClient= require('mongodb').MongoClient;
const uri='mongodb://localhost:27017';
const port= process.env.PORT || 4500;

let collection;

const current_lat=41.014225;
const current_lon= -91.969432;

const app=express();
app.use(cors());
app.use(express.json());

const connectToMongoDB= async function(){
    const client =new MongoClient(uri,{useNewUrlParser:true});
    await client.connect();
    const db= client.db('MUM');
    collection=db.collection('places');


}
connectToMongoDB();


app.post('/places',async(req,res)=>{
    const newplace=await collection.insertOne(req.body);
    console.log(req.body)
    res.send(req.body);
});


app.get('/search',async (req,resp)=>{
    const { name, category }=req.query;
    const query={
        location: {
            $near: [current_lon,current_lat]
        }
    };

    if(name) query.name=name;
    if(category) query.category=category;

    const result= await collection.find(query).limit(5).toArray();
    resp.send(result);
});

app.listen(port)