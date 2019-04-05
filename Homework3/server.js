const http= require('http');
const fs=require('fs');

 http.createServer(function(req,resp){
     resp.writeHead(200,{'Content-Type':'plain/text'});
     resp.end('./immoral3.mkv');
     }).listen(433,()=>console.log('listening to 433'))


 ///streaming
//  http.createServer(function(req,resp){
    //  const result=fs.createReadStream('immoral3.mkv').pipe(result);
//  })

