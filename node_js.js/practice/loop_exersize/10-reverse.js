let a = 3456;
let ld;
let fd;
let rev=0;

while(a!=0){
           ld=(a%10)
           rev=(rev*10)+ld;
           a=parseInt(a/10);
}
console.log(rev);
