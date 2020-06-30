function show(){

const value=document.getElementById("text").value;
const a=document.querySelector("ul");
const nw=document.createElement("li");
const text=document.createTextNode(value);
nw.appendChild(text);
a.appendChild(nw);
console.log(a);
document.getElementById("text").value="";
}