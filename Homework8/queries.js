const MongoClient=require('mongodb').MongoClient;

const uri='mongodb://localhost:27017';
const dbName="restaurant";
const collectioName="restaurants";

const client=new MongoClient(uri);

client.connect((error)=>{
    Queries();
    
})


function Queries() {
const db=client.db(dbName);
const collection= db.collection(collectioName);

collection.find({}).limit(10).toArray((err,data)=>{
    console.log(data);
    client.close();
});

}