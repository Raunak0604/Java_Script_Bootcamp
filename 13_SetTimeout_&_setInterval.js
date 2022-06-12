// SetTimeout and setinterval In Java Script

logKaro = ()=>{
    //document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}

clr = setInterval(logKaro, 2000);
// clr = setTimeout(logKaro, 1000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
