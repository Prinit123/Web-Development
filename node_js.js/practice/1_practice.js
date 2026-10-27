for(let i=0;i<10;i++){
           let a="";
           for(let j=0;j<10;j++){
                      if((i==j||i==10-j)){
                                 a=a+" "+"*";
                      }else{
                                 a=a+" "+" "
                      }
           }
           console.log(a);
}