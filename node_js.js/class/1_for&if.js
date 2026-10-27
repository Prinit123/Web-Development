// for(var i=1;i<=10;i++){
//            if(i==5)
//                       console.log(i);
//                       break;
// }

//pattern

// var a=""
// for(var i=0;i<=5;i++){
//            for(var j=1;j<=i;j++){
//                       a=a+"*";
//            }
//            a=a+"\n";
// }
// console.log(a);

// even number

// a=" "
// for(i=0;i<=100;i++){
//            if(i%2==0){
//                       a=a+" "+i;//console.log(i);
//            }
// }
// console.log(a)


//pattern cross

// for(let i=0;i<10;i++){
//            let a="";
//            for(let j=0;j<10;j++){
//                       if((i==j||i==10-j)){
//                                  a=a+" "+"*";
//                       }else{
//                                  a=a+" "+" "
//                       }
//            }
//            console.log(a);
// }

// for(i=1;i<=5;i++){
//            let s="";
//            for(j=1;j<=5;j++)
//                       if(i==2&&j==3||i==3&&j==2||i==3&&j==4||i==4&&j==3){
//                                  s+=" ";
//                       }
//                       else{
//                                  s+="*";
//                       }
//                       console.log(s);
// }



// let r,c;

// let a="";

// for( r=1; r<=5 ;r++){
//            for(c=1; c<=5; c++){
//                       a+="*";
//            }
//            a+="\n";
// }
// console.log(a);


// let r,c;

// let a="";

// for( r=1; r<=5 ;r++){
//            for(c=1; c<=r; c++){
//                       a+="*";
//            }
//            a+="\n";
// }
// console.log(a);




var i;
var a = "";
for (i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        a += "*"
    }
    a += "\n"
}
console.log(a);

