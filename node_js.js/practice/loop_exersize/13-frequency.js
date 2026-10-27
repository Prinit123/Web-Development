let a = 9007;
let ld = 0;
let f0=0,f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0,f9=0;
while(a>0){
           ld = parseInt(a%10);
           switch(ld){
                      case 0 : f0++ ; break;
                      case 1 : f1++ ; break;
                      case 2 : f2++ ; break;
                      case 3 : f3++ ; break;
                      case 4 : f4++ ; break;
                      case 5 : f5++ ; break;
                      case 6 : f6++ ; break;
                      case 7 : f7++ ; break;
                      case 8 : f8++ ; break;
                      case 9 : f9++ ; break;
           }
           a = parseInt(a/10);
}
console.log("Digit Frequencies:");
if (f0 > 0) console.log("0 appears", f0, "times");
if (f1 > 0) console.log("1 appears", f1, "times");
if (f2 > 0) console.log("2 appears", f2, "times");
if (f3 > 0) console.log("3 appears", f3, "times");
if (f4 > 0) console.log("4 appears", f4, "times");
if (f5 > 0) console.log("5 appears", f5, "times");
if (f6 > 0) console.log("6 appears", f6, "times");
if (f7 > 0) console.log("7 appears", f7, "times");
if (f8 > 0) console.log("8 appears", f8, "times");
if (f9 > 0) console.log("9 appears", f9, "times");
