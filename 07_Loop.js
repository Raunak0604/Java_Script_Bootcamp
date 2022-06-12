// Loop in JavaScript

var arr = [1, 2, 3, 4, 5, 6, 7];

// for loop
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}


// var j = 0;
let j = 0;

// While loop
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

// Do_while loop
do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);
