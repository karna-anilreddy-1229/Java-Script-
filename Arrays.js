// let arr=["anil","reddy","lokesh"];
// console.log(arr);
// console.log(arr.length)
// arr[2]="karna";
// console.log(arr);

// let arr=[250,645,300,900,50];
// for(let i=0;i<arr.length;i++)
// {
//     // console.log("original price:",arr[i]);
//     offerprices =arr[i]/10;
//     arr[i]=arr[i]-offerprices;
//     console.log(`The offer prices of = ${arr[i]}`);
// }

let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr.shift());
console.log(arr.splice(2,1,"OLA"));
console.log(arr.push("Amazon"));
console.log(arr);