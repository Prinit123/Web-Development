let a = 10;
let b = 20;
let HCF = 0;
for(let i=1;i<=b; i++){
           if(a%i==0 && b%i==0){
                      HCF = i;
           }
}
console.log(HCF);
let LCM = (a*b)/HCF;