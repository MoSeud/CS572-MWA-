const express=require('express');
const app=express();
const axios=require('axios');
// const helmet=require('helmet');
const port= process.env.PORT || 7000;

app.enable('trust proxy');
app.enable('strict routing');
app.enable('case sensitive routing')
// app.enable('etag');
app.set('x-powered-by',false);

app.use(express.json());
// app.use(helmet());

app.get('/users', async function(req,res){
try{
    res.status(200);
    res.set("Link","<http://localhost:8090?p=1> rel=first")
    res.set('Content-Type','application/json');
    const resp= await axios.get('https://randomuser.me/api/?results=10');
     res.set('Cache-Control', 'private, max-age=86400');
    res.json(resp.data.results);
}catch(error){
    console.log(error);
}
});

app.listen(port,()=>console.log('Listening to port 7000'));