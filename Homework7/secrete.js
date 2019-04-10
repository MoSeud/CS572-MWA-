
const Mongo=require('mongodb');
const encryptor=require('simple-encryptor')

const  MongoClient=Mongo.MongoClient;
const uri='mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01'

let collection;

const getMessage= async function(){
    const client=new MongoClient(uri,{useNewUrlParser:true});
   await client.connect();
   const db=client.db('homework01');
   collection=db.collection('data');

  

   const result=await collection.findOne({},{key:1,message:1, _id:0});
   const decryptedKey=encryptor(result.key);
   return decryptedKey.decrypt(result.message);
}

getMessage().catch(console.log).then(console.log);