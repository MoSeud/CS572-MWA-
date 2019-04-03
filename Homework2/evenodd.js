Array.prototype.even= function(){
    return new Promise((resolve,reject)=>{
        resolve(this.filter(e=>e%2==0))
    })
}

Array.prototype.odd= function(){
   
    return new Promise((resolve,reject)=>{
        resolve(this.filter(o=>o%2==1))
    })
}

// Array.prototype.even= async function(){

//         return (this.filter(e=>e%2==0))
// }

// Array.prototype.odd= async function(){
   
//         return (this.filter(o=>o%2==1))
// }

// const Arr=[2,3,4,5,6,7,8,9];
// console.log('Start...')
// Arr.even().then(console.log);
// Arr.odd().then(console.log);
// console.log('Done')


///another way
function evenodd(){
const Arr=[1,2,3,4,5,6,7,8,9];
console.log("Start...")
setTimeout(()=>console.log(Arr.filter(e=>e%2==0)),0);
setImmediate(()=>console.log(Arr.filter(o=>o%2!=0)));
console.log('Done');
}
evenodd();