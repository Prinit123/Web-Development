let ld ;
let fd;
let a = 3456;
let count = 1;
ld=parseInt(a%10);
let v =a ;

while (a>10){
           fd=parseInt(a/10);
           count = count*10;
           a=parseInt(a/10);
}

console.log(count);
console.log(fd , ld);
console.log(v);
v=v-(fd*count);
v=v+(ld*count);
v=v-ld;
v=v+fd;
console.log(v);



