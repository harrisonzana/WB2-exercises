"use strict";

//what do we start with?
let currentHour = 14;


//what do we need to compute
let greeting;

greeting = "test";

if( currentHour < 10){
    greeting = "Good morning!";

}
else if( currentHour < 17 ){
    greeting = "Good day!";
}
else{
    greeting = "ERROR INVALID HOUR OF" + currentHour;
}

//results ran

console.log(greeting);