import Student from './index';
// import {name} from './test';

// const s = new student("sonal", 12);
Student.sayname();
Student.sayage();

// console.log(name);

class Person{
    constructor(fname){
      this.fname=fname;
    }
    greet(){
        console.log("this is class Example Parent Class:" +this.fname + " and this is Child Class :" +this.category);
    }
}

class Second extends Person{

    constructor(category){
        super("FirstClass");
        this.category = category;
    }
    greet(){
        console.log("hello from child class");
    }
    greetTwice(){
        this.greet();
        super.greet();
    }
}

let Per = new Second("SecondClass");
Per.greetTwice();

class GetterSetter{
    constructor(data){
        this._data = data;
    }

    get data()
    {
        return this._data;
    }

    set data(value){
        if(value.length > 2)
        {
         this._data= value;
        }
        else{
            console.log("REJECTED");
        }
    }
}
let gs=new GetterSetter("abc");
console.log(gs.data);
gs.data = 'rasal';
console.log(gs.data);
