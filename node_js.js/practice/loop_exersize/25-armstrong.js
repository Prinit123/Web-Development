let a = 153
for(let a= 1; a<=1000; a++){
let t = a
let sum1 = 0;
while (t > 0) {
    ld = parseInt(t % 10)
    t = parseInt(t / 10)
    sum = ld * ld * ld;
    sum1 = sum1 + sum;
}
if(a===sum1){
    console.log("armstrong number : " ,a);
}
}


