class university {

    constructor(public name: string, public dept: string){

    }
    graduation(year:number){
  console.log(`Graduating ${ this.dept} ${year} students`)
    }
}

let mum=new university("MUM","CS");
mum.graduation(2019);