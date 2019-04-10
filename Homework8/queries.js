const MongoClient=require('mongodb').MongoClient;

const uri='mongodb://localhost:27017';
const dbName="restaurant";
const collectioName="restaurants";

const client=new MongoClient(uri,{useNewUrlParser:true});

client.connect((error)=>{
    Queries();
    
})


function Queries() {
const db=client.db(dbName);
const collection= db.collection(collectioName);
// const filter={district:{$in:["Staten Island ","Queens","Bronx","Brooklyn"]},projection:{restaurant_id:1,name:1,district:1,cuisine:1}}
collection.find({name:{$regex:"^Mad"}},{ projection:{_id:0 ,name:1,district:1,"address.coord":1,cuisine:1}})
.toArray((err,data)=>{
    console.log(data);
    client.close();
});

}