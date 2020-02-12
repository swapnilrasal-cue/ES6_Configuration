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