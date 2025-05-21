// function test(){
//     console.log("hi")
//         console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
//     console.log("hi");
// var x = 20 ;
// var name = "aya" ;
// var age = 30 ;
// }
// test()

var user = {
  name: "aya",
  age: 30,
  husband: {
    name: "mo",
    age: 40,
  },
  eat: function (n) {
    console.log("eating");
  },
};
// user.eat();

// console.log(user [window.prompt("key?")]);

var aya = {
  name: "aya" ,
  age : 28 ,
  husband : "mo" 
};

var mo ={
  name: "mo" ,
  age : 30 ,
  wife : "aya"
};
var yos={
  name: "youssef" ,
  age : 1 ,
  mother: "aya"
};
 var family= [aya , mo , yos];
 console.log( family);

 for(var i=0 ;i<family.length ;i++){
  if(i%2==0){
    document.getElementById("demo").innerHTML=aya.age ;
  }
 }

 var mm = user.husband
 family.push(mm);