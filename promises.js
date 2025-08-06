// const hello=()=>{
//     console.log("Hello");
// }
// setTimeout(hello,3000);

let promise = new promise((resolve,reject)=>{
    console.log("promise");
    resolve("success");
    // reject("error");
},)
console.log(promise);