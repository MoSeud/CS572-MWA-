
const Mongo=require('mongodb');

const{MongoClient}=Mongo;

let collection;

const getMessage= async function(){
    MongoClient.connect('mongodb://homework01:homework01@ds233806.mlab.com:338006/homework01',
    async (err,client)=>{
       if(err) throw err;
       const db=client.db('homework01');
       collection=db.collection('data');
    });

  

   const result=await collection.findOne({},{key:1,message:1, _id:0});
   const decryptedKey=encrypt(result.key);
   return decryptedKey.decrypt(result.message);
}

getMessage().catch(console.log);