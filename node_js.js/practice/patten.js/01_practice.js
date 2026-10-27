// let a="";

// for(let r=1;r<=5;r++){
//            for(let c=1 ; c<=5; c++){
//                       a+="*";
//            }
//            a=a+"\n";
// }
// console.log(a);


let a="";
for(r=1;r<=5;r++){
           for(c=r;c<=5;c++){
                      a+=" ";
           }
           for(let c=1;c<=r;c++){
                      if(c==1 || r==5  ){
                      a+="*";
                      }else{
                                 a+=" ";
                      }
           }
           for(let c=2; c<=r;c++){
                      if(c==r || r==5 ){
                      a+="*";
                      }
                      else{
                                 a+=" ";
                      }
           }
           a+="\n";
}
console.log(a);
