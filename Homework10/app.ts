class university {

    constructor(public name: string, public dept: string){

    }
    graduation(year:number){
  console.log(`Graduating ${ this.dept} ${year} students`)
    }
    getName(){
      return this.name;
    }
    setName(name){
        this.name=name;
    }
    getDept(){
      return this.dept;
    }
    setDept(dept){
      this.dept=dept;
    }
}

let mum=new university("MUM","CS");
mum.setDept("MUMcompro");
mum.graduation(2019);