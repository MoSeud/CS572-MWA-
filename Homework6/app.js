const express=require('express');
const logger=require('morgan');
const cors=require('cors');
const app=express();
const port = process.env.PORT || 3500;
const grades=require('./grades')

 app.enable('etag')
 app.set('x-powered-by',false);
 app.use(express.json())//support json encoded bodies
 app.use(cors());
 app.use(logger("combined"));


app.get('/grades',(req,res)=>{
    res.send(grades);
    res.end();
});

app.get('/grades/:gid',(req,res)=>{
  const gid=req.params.id;
  const grade=grades.find(s=>s.id==gid);

  if(grade) res.send(grade);
  else res.send(`grade with this ${gid} does not exist`);
});

app.post('/grades',(req,res)=>{
  res.setHeader('Content-Type', 'application/json');
   grades.push(req.body);
   res.send(grades);

});

app.delete('/grades/:id',(req,res)=>{
  const id=req.params.id;
  const grade=grades.splice(id-1,1);
  res.send(grades);
})


app.listen(port);