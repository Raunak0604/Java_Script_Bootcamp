// DOM Manipulation in Java script

// ID
let elem = document.getElementById ('click')
console.log (elem)

// CLASS
let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

console.log(elem.innerHTML);
console.log(elem.innerText); 

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText); 

// TAG
let tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(createdElement2); //---> removes an element

// Selecting using Query
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)
