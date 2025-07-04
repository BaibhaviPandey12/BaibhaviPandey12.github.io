//promises

//     function f1(){
//     return new Promise((resolve,reject)=>{
//        //resolve(5);
//        reject("Something went wrong"); 
//     })
//         // setTimeout(()=>{return 5},1000)
//    }

// function f2(x){
//     console.log(x+7)
// }
// f1()
// .then((n)=>f2(n))
// .catch((err)=>console.log(err))
// const n=f1()/
// f1().then((n)=>f2(n));
// //buy().then((n)=>pay(n));
// // const result=f2(n)
// // console.log(result)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//     data.map(value=>{
//         console.log(value.name,value.email)
//     })
// })
// .catch((err)=>console.log(err))

const fetchData= async()=>{
    const res= await fetch ("https://jsonplaceholder.typicode.com/users")
    const data= await res.json();
    data.map(value=>{
         console.log(value.name,value.email)
   })

};

fetchData();