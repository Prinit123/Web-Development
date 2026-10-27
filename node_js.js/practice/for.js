for(i=1;i<=5;i++){
           let s="";
           for(j=1;j<=5;j++)
                      if(i==2&&j==3||i==3&&j==2||i==3&&j==4||i==4&&j==3){
                                 s+=" ";
                      }
                      else{
                                 s+="*";
                      }
                      console.log(s);
}