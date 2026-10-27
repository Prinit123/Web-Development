let a = 30;
let sum = 0;

for(let i=2;i<a; i++){
           let isprime = true;
           for(let j=2; j<i; j++){
                      if(i%j==0){
                                 isprime = false;
                                 break;
                      }
           }
           if(isprime){
                      console.log(" prime number : ",i);
                        sum=sum+i;
           }
           else{
                      console.log("not prime number: ",i);
           }
           
}
console.log(sum);
