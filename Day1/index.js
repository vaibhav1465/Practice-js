// usestrict:
// let data={
//     employee:[
//         {name:"vk",age:24},
//         {name:"karan",age:12},
//         {name:"raj",age:13}
//     ]
// }
// let employee=[
//     {name:"vk",age:24},
//     {name:"karan",age:12},
//     {name:"raj",age:13}
// ]
// for (const i of employee) {
//     console.log(i);
// }
// console.log(data);
// var data1=JSON.stringify(data);
// console.log(data1);
// let final=JSON.parse(data1);
// console.log(final);
// let a={
//     firstname:24,
// abc:function(){
//     console.log(this.firstname);
// },
// xyz:()=>{
//     console.log(this.firstname);
// }
// }

// a.abc();
// a.xyz();

// watchPosition() - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
// clearWatch() - Stops the watchPosition() method.

// const x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
    
// function showPosition(position) {
//     x.innerHTML="Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;
// }
let a=[12,23,45,12,23];
var b;
b=a.reduce((acc,cur)=>{
if(acc[cur])
  acc[cur]++;
  else
  acc[cur]=1;
  return acc;
},{});
console.log(b);
// 12=2;23=2,45=1,
// let b={
//   "12":1,
//   "13":2,
//   length:12,
// }
// console.log(b.length);
// console.log(b[12]);
