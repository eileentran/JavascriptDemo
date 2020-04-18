console.log("External Javascript Connected");

/*change background color on click
1.Listen for click event on div
2.Change background color to something other than red.
*/

var div1=
document.getElementsByClassName("div1")[0];
div1.addEventListener("click",function(){console.log("Div 1 Clicked")
div1.style.backgroundColor="blue";
});

var h1=
document.getElementsByTagName("h1")[0];
h1.addEventListener("click", function(){
div1.style.background="green";
});

// select div2 and h2 from DOM
var div2=
document.getElementById("div2");
var h2=
document.getElementsByTagName("h2")[0];
// add growTurn class with the growAndTurn animation to div2 when clicking on the h2
h2.addEventListener("click",function(){
div2.classList.add("growTurn");
})

var div3=
document.getElementById("div3");
//OR document.getElementsByTagName("div")[2]
div3.addEventListener("click",function(){
  console.log("Clicked div 3");
  div3.style.display="none";
})

function showDiv3(){
  div3.style.display="block";
}

function addPara(){
  // creat html element
  para=document.createElement("p");
  text=document.createTextNode("Hello, world!");
  // Put the text node inside of the paragraph element we created
  para.appendChild(text);
  // take parahraph element and append to the body
  var body=
  document.getElementsByTagName("body")[0]
  // append paragphr element inside of body
  body.appendChild(para);
}
