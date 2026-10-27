let number = [23,34,45,65,56,56,78];

let dublicate;
for(let i=0; i<(number.length);i++){
           dublicate = number[i];
           for(let j=i+1; j<(number.length); j++){
                      if(number[j]==dublicate){
                                 console.log(dublicate);
                                 break;
                      }
           }
}
// console.log(dublicate);