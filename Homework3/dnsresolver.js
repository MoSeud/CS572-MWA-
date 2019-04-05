const dns = require('dns');
const { promisify } = require("util");

//dns resolver
 dns.resolve4('www.mum.edu', (err, ipaddress) => { console.log(ipaddress); })

 // Promisify

 const resolve= promisify(dns.resolve4);
 resolve('www.mum.edu').then(ipaddress=>console.log(ipaddress))
                        .catch(err=>console.log(err));

  // aync/await
  
  async function asyncResolve4(url){
      try{
          const ipaddress=await resolve(url);
          console.log(ipaddress);
      }catch(err){
          console.log(err);
      }
  }
asyncResolve4('www.mum.edu');

