// function vowels(str){
//    let count=0;
//     for(i=0;i<=str.length;i++){
        // if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u")
//             {
//         // console.log(str[i]);
//         count++;
//         }
//     }
//     console.log(count);
// }
// str = prompt("enter");
// vowels(str);

// ARROW FUNCTION
// const vowels=(str)=>{
//    let c=0;
//    for(i=0;i<str.length;i++)
//    {
//        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//         c++;
//        }

//    }
//    return c;
// }

// FOR EACH IN ARRAYS

// arr = [1,2,3,4];
// arr.forEach(function square(num){
//     s=num*num;
//     console.log(s);
// })

// nums =[34,56,89];
//  let arr = nums.filter((val)=>{
//     if(val%2==0){
//     return val;
//     }
// })
// let a = nums.filter((v)=>{
//     if(v%2!==0){
//     return v;
//     }
// })
// console.log(arr);
// console.log(a);

// let marks =[20,40,66,98,97,100,94];
// let A = marks.filter((val)=>{
//     if(val>90){
//         return val;
//     }
// })
// console.log(A);

N = prompt("Enter n value");
let arr=[]; 
for(i=1;i<=N;i++){
    arr[i-1]=i;//1[0],2[1]
}
console.log(arr);
let sum = arr.reduce((pre,curr)=>{
    return pre + curr;
})
console.log("Total Sum =",sum);

let product = arr.reduce((pre,curr)=>{
    return pre * curr;
})
console.log("Total product =",product);


