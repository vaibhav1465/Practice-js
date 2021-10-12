function task(){
let a=document.getElementById("amt").value;
let v=[2000,500,200,100];
let r=[800,300,100,0]
var b={};
let l=v.findIndex((val)=>{
return val<a;
})
// console.log(v[l]);
let t,t1;
for(let i=l;i<v.length;i++)
{
    t=Math.floor(a/v[i]);
    t1=a-(t*v[i])
     console.log("t1",t1, r[i], t)
     t = t1 >= r[i] ? t : t-1;
   
    a-=v[i]*t;
    b[v[i]]=t;
}
// b[100]++;
console.log(b);
}
// let f=true?4:3;
// console.log(f);