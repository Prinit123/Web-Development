let ld = 0;
let a = 2345;
let fd ;
ld=parseInt(a%10);
console.log("last digit :",ld);

while (a!=0) {
           fd = parseInt(a%10);
           a=parseInt(a/10);
}
console.log("first digit : ",fd);

let  sum = fd+ld;
console.log("sum of ld and fd : ",sum);

