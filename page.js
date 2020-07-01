function show(){
const value=document.getElementById("text").value;
if(value==""){
    alert("Please enter valid Goal!");
}
else{
const a=document.querySelector("ul");
const nw=document.createElement("li");
var inp=document.createElement("input");
inp.setAttribute('type','checkbox');
inp.setAttribute('name','del');
inp.setAttribute('id',value);
nw.append(inp);
nw.id=value;
const text=document.createTextNode(value);
nw.appendChild(text);
a.appendChild(nw);
console.log(a);
document.getElementById("text").value="";
}}
