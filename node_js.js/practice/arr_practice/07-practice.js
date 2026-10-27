let number = [23,34,45,65,56,56,78];



for(let i =0; i<number.length; i++){
           let curentnum = number[i];

           let count = 0;

           for(let j=0; j<number.length; j++){
                      if(number[j] === curentnum){
                                 count++;
                      }
           }
           if(count>1){
           console.log(curentnum,"number apear in arry",count);
           }
}