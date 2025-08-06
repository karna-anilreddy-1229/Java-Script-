// class parent{
//     constructor(relation){
//          this.GROUP = "Family";
//          this.relation = relation;
//     }
//     hello(){
//     console.log("hello");
//     }
//     sleep(){
//         console.log("Sleeps Well");
//     }
// }
// class child extends parent{
//     work(){
//         console.log("parents guide children");
//     }
    
// }
// class relatives extends child{
//     gifts(){
//         console.log("gives gifts");
//     }
//     constructor(relation){
//         super(relation);
//         // this.relation = relation;
//     }
// }
//  let A = new child("Aunty");
//  let B = new relatives("UNCLE");
//  //  console.log(A);
class user {
   constructor(Name,email){
    this.Name = Name;
    this.email = email;
   }
   viewdata(){
    console.log("The Name and email is")
    console.log(this.Name ,this.email);
   }
}
let U = new user("Anil","anil@gmail.com");
let G = new user("srav","srav@gmail.com");
let T = new user("subbaya","subbaya@gmail.com");


class admin extends user {
    constructor(Name,email){
        super(Name,email)
    }
          editdata(){
              console.log("data is changed","Name is",this.Name="all","email is",this.email="all@gmail.com");
          }
}
let A = new admin("admin","admin@gmail.com");
