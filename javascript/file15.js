//json
// const student = '{"name":"Amy","age":21}';
// console.log(JSON.parse(student));

const student = '{"name":"Amy","age":21}';
const obj=JSON.parse(student) ////STRING IS CONVERTED TO OBJECT
console.log(obj.name);
console.log(JSON.stringify(obj));/////OBJ IS CONVERTED TO STRING AGAIN