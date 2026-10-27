let a = 3443;
let ld;
let fd ;
let rev = 0;
let t = a;

while(a>0){
           fd=parseInt(a%10);
           rev = (rev*10)+fd;
           a = parseInt(a/10);
}
console.log(rev);

if(t==rev){
           console.log("palindrome  number is : ", t);
}
else{
           console.log("not  palindrome  number:", t );
           
}

