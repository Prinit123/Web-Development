let a = 340;
let ld;
let fd = "";
let words ;

while(a!=0){
           ld=parseInt(a%10);
           switch(ld){
                      case 0:words="zero" ; break;
                      case 1 :words = "one"; break;
                      case 2 : words = "two"; break;
                      case 3 : words = "three"; break;
                      case 4: words = "four"; break;
                      case 5 : words = "five"; break;
                      case 6: words = "six" ; break;
                      case 7 : words = "seven" ; break;
                      case 8 : words = "eight";break;
                      case 9 : words = "nine"; break;
                      }
           fd = words+" "+fd;
           a = parseInt(a/10);
}
console.log(fd);
