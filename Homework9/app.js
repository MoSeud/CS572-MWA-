const MongoClient=require('mongodb').MongoClient;
const uri="mongodb://localhost:27017";

const dbName="zip";
const collectionName="zips";
const client = new MongoClient(uri,{useNewUrlParser:true});

client.connect((error)=>{
    executeQueries();
})


function executeQueries(){
    const db=client.db(dbName);
    const collection=db.collection(collectionName);
    collection.aggregate([
        {$group:{ 
            _id:{state:"$state", city:"$city"},
             pop:{$sum:"$pop"},
        }},
      {$sort : {pop:1}},
     
      { $group : {
        _id:"$_id.state",
       smallCity:{$first:"$_id.city"},
       population:{$first:"$pop"}
       }},
       {$project: {
           _id:0,
           state:"$_id",
           smallestCity:{ name:"$smallCity", population:"$population"}
       }}
      ],
     function(err,cursor){
        console.log(err)
        cursor.toArray((err,data)=>{
            console.log(err)
            console.log(data)
            client.close();
        })
    });  
   
}