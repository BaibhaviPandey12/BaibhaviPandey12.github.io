//arrow function
// greet();//hoisting - calling function or anything before creating it
// function greet() {
//     console.log("Hello")
// }

// const greet =10;
// console.log(greet)


// greet()( HOISTING DOESNT WORK WITH ARROW FUNCTION)
// const greet =()=>{
//     console.log("Hello")
// }
//  greet()

//  const add= (a,b)=>{
//     console.log(a+b)
//  }
//  add(4,5)


//  const add= (a,b)=>{
//     return(a+b)
//  }
//  const result = add(4,5)
// console.log(result)

const add=(...args)=>{
    console.log(args)
      console.log(args[1])
}
add(4,5,6,7,8)