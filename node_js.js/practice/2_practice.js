function name2(name,callback){
           console.log("hi"+name);
           callback();
}
function name3(){
           console.log("i am fine ,bro");
}
name2("prinit",name3);