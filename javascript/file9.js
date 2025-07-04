////ARRAYS/////

const score = [2,1,7,5,3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// 


// const cart={
//     1:5,
//     5:3,
// };
// const newCart=({...cart,2:1})
// console.log(newCart)
let cart={}
const products=[
    {id:1,name: "Product 1",price:25},
   {id:2,name: "Product 2",price:50},
   {id:3,name: "Product 3",price:75}

];

//adding new product 
//const newProduct=[...product,{id:4,name:"Product 4",price:56}]
function addToCart(id){ 
cart={...cart,[id]:1};
}
addToCart(1)
addToCart(3)
console.log(cart)