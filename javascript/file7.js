//////DATA TYPE / REFERENCE TYPE //////
//CALLBACK FUNCTION 

const f1=()=>{
    console.log("hello")
};
const main=(x)=>{
    x()
}
main(f1);