const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const uri='mongodb://localhost:27017';
const port= process.env.PORT ||3333;

let collection;

const app = express();

const connectToMongo = async function() {
    const client = new MongoClient(uri,{useNewUrlParser:true});
    await client.connect();
    const db = client.db('homework07');
    collection = db.collection('lectures');

}
connectToMongo();


app.use(cors());
app.use(express.json());

app.get("/lectures", async (req, res) => {
    try {
        const cursor = await collection.find({});
        const data = await cursor.toArray();
        res.send(data);
    } catch(e) {
        console.log(e);
        res.send('eror occured');
    }

});

app.get("/lectures/:id", async (req, res) => {
    try {
        const lecture = await collection.findOne({_id: mongo.ObjectID(req.params.id)});
        res.send(lecture);
    } catch(e) {
        console.log(e);
        res.send('error occured')
    }

});

app.post("/lectures", async (req, res) => {
  const newPost = await collection.insertOne(req.body);
  res.json(newPost);
});

app.delete("/lectures/:id", async (req, res) => {
    try {
        await collection.deleteOne({ _id: mongo.ObjectID(req.params.id )});
        res.send(true);
    } catch(e) {
        console.log(e);
        res.send('error occured')
    }

});

app.put("/lectures/:id", async (req, res) => {
    try {
        const updatedata = await collection.updateOne({ _id:  mongo.ObjectID(req.params.id) }, {$set: req.body });
        res.send(updatedata);
    } catch(e) {
        console.log(e);
        res.send('error occured');
    }

});

app.post("/search:q", async (req, res) => {
    try {
        console.log(req.query.q);
        const searchResultCursor = await collection.find({ name: { $regex: req.query.q}});
        const searchResult = await searchResultCursor.toArray();
        res.send(searchResult);
    } catch(e) {
        console.log(e);
        res.send('error occured');
    }
});

app.listen(port);

