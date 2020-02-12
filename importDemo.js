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


let Personnew = {
    name: 'swapnil',
    hobbies: ['abc','def','ghi','jkl'],
    [Symbol.iterator] :function(){
     let i=0;
     let hobbies = this.hobbies;
     return{
          next : function(){
          let value = hobbies[i];
          i++;
          return{
            done : i > hobbies.length ? true : false, 
            value : value
          };
       }
     };
     
   }
   };
   
   for(let hobby of Personnew)
   {
     console.log(hobby);
   }

let User = {
 name : 'swapnil',
 activities : ['origami','driving','travelling','job'],
 [Symbol.iterator] : function(){
    let i = 0;
    let activities = this.activities;

    return{
        next: function(){
            let value = activities[i];
            i++;
            return{
            done : i > activities.length ? true : false,
            value : value
            };
        }

    };

 }
};

for(let demo of User)
{
    console.log(demo);
}



function *gen(end){
    for(let i=0;i<end;i++)
    {
        yield i;
    }
}

let it = gen(10);
console.log(it.next());



class Obj1{
    constructor(){
        this.a=10;
    }
}
class Obj2{
    constructor(){
        this.b=20;
    }
}
let obj1=new Obj1();
let obj2=new Obj2();

let obj3=Object.assign(obj1,obj2);

console.log(obj3);
console.log(obj3.__Proto__ == Obj1.prototype);




