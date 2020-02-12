import {filter} from 'lodash';



class Student {
constructor(rollno, name) {
this.rollno = rollno;
this.name = name;
}
sayname() {
console.log("My name is ", this.name);
}
sayage() {
console.log("My age is ", this.rollno);
}
}

export default new Student(23,'swapnil');
// module.exports = s;