
const http = require('http');
const server = http.createServer();

const fs = require('fs');
const path = require('path');

const {promisify} = require('util');
// const readFile = promisify(fs.readFile); //Asynch...Promise
server.listen(3000); 

// Using readFileSync

// server.on('request',function(req, res){
//     const data = fs.readFileSync(path.join(__dirname,'immoral3.mkv'));
//     res.write(data);
//     res.end();
// });


// Using readFile 
// server.on('request',  function(req, res){
//     const data =  fs.readFile(path.join(__dirname,'immoral3.mkv'));
//     res.write(data);
//     res.end();
// });

// Using streams
server.on('request',function(req, res){
 fs.createReadStream('immoral3.mkv').pipe(res);
     
});