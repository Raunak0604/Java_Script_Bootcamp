// Events in JavaScript

function clicked(){
    console.log('The button was clicked')
}

window.onload = function(){
    console.log('The document was loaded')
}

first_container.addEventListener('click', function(){
    // document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Clicked on Container")
})

first_container.addEventListener('mouseover', function(){
    console.log("Mouse on Container")
})

first_container.addEventListener('mouseout', function(){
    console.log("Mouse out Container")
})