let number = [23,34,45,65,56,78];


let max = number[0];
for(let j=0;j<=(number.length-1);j++){
           if(number[j]>=max){
                      max=number[j];
           }
}
console.log(max);
