const express=require('express');
const app=express();
const axios=require('axios');
const cache=require('cache-control');
const port= 7000;

app.enable('trust proxy',true);
app.enable('strict routing');
app.enable('case sensitive routing')
app.set('x-powered-by',false);

app.use(express.json());

app.get('/users', async function(req,res){
try{
    res.status(200);
  res.set('Content-Type','application/json');
    const resp= await axios.get('https://randomuser.me/api/?results=10');
     res.set('Cache-Control', 'public, max-age=86400');
 res.send(resp.data.results);
}catch(error){
    console.log(error);
}
});

app.listen(port,()=>console.log('Listening to port 7000'));