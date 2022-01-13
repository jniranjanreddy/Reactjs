import React from "react";
import ReactDOM from "react-dom";
var name = "Rama";
const sname = "Sita";
var num = 7;
ReactDOM.render(
<div>
<h1>{sname} {name} </h1>
<p>Your Lucky number is: {
if (name === "Rama") {
    return 7
}else if (name === "Ravana"){
    return 10;
}
}</p> 
</div>,
document.getElementById("root")
);