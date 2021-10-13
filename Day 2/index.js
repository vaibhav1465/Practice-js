function task(){
    let resString="";
let a=document.getElementById("amt").value;
// console.log("Withdrawn Amount", a);
resString+="Withdrawn Amount "+a+" <br>";
let v=[2000,500,200,100];
let r=[800,300,100,0]
var b={};
let l=v.findIndex((val)=>{
return val<a;
})
// console.log(v[l]);
// console.log("1. Evaluating value less than ammount from (", ...v,") = ",v[l]);
if(l!=-1){
resString+="1. Evaluating value less than ammount from "+v+" =  "+v[l]+"<br>" ;
let t,t1,c=1;
// console.log("2. Calculating Notes");
resString+="2. Calculating Notes"+"<br>";
for(let i=l;i<v.length;i++)
{
    // console.log(" ",c++," Iteration");
    resString+="========"+(c++)+" Iteration  ========<br>";
    t=Math.floor(a/v[i]);
    // console.log(" Result of Diving Amount from Evaluated Value = ",t );
    resString+="    Result of Diving Amount from Evaluated Value = "+t;
    t1=a-(t*v[i])
     t = t1 >= r[i] ? t : t-1;
// console.log("  Checking if Remaining Amount left after Subtracting is More than ",r[i]);
resString+="     Checking if Remaining Amount left after Subtracting is More than "+r[i]+"<br>";
// console.log("Total NOtes of ",v[i]," after checking remaining value =",t);
resString+="  Total Notes of "+v[i]+" after checking remaining value ="+t +"<br>";


   
    a-=v[i]*t;
    b[v[i]]=t;
if(a>0){
// console.log("Amount Left to be Calculated for further Iterations =",a);
resString+="   Amount Left to be Calculated for further Iterations = "+a+"<br>";
}
}
}
else{
    resString+="Enter a valid Ammount";
}
document.getElementById("res").innerHTML=resString;
// b[100]++;
// console.log(b);
}
