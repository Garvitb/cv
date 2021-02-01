var x=1;
var y=2;
var z=3;
var recharged=true;
var notrecharged=false;
var age=12;
console.log("what is the value of x:",x);
console.log("what is the value of y:",y);
console.log("what is the value of z:",z);
console.log("what if x adds up to y and z got minus from the their sum:",x+y-z);
console.log("is z is greator than x&y?",z>x,z>y);
console.log("is z is greator tha 10",z>10);
console.log("the user has recharged.",recharged);
console.log("the user has not recharged.",notrecharged);
if (z>x) {
    console.log("z is greatest in the defined variables");
    console.log("condition:",z>x);
}
if (y>x) {
    console.log("y is greator than x");
    console.log("condition:",y>x);
} 
if (x=10) {
    console.log("x is greatest");
    console.log("condition:",x);
}
if (recharged) {
    console.log("Service will continue",recharged);
} else {
    console.log("service will not continue",notrecharged);           //inline comments
}                                                                   
if (notrecharged) {
    console.log("Service will continue",recharged);
} else {
    console.log("service will continue",notrecharged);
}
if (age>12) {
    console.log("U CAN PLAY GAMES");
} else if (age==12) {
console.log("U CAN PLAY GAMES AFTER 1 YR");
} else {  
console.log("NO GAMES FOR YOU");
}
/* multi 
   line 
   comments*/
