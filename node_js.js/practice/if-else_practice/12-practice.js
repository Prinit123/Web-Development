let a = 13540;

if(a>=500){
           let b = parseInt(a/500);
           console.log("500 note give me: ",b);
           a = parseInt(a-(b*500));
           console.log(a);
           a =parseInt(a - (b*500));
           console.log(a);
}
