// polymorphism = Same action → different behavior. That’s polymorphism.
// It allows the same function, method, or operator to behave differently depending on the context.

// Method overloading means multiple methods with the same name but different parameters (type, number, or order) in the same class.

// Method overriding means a child class provides a new implementation of a method already defined in its parent class.

// super keyword => In JavaScript, the super keyword is used in classes to access properties and methods of a parent (base) class.


// overridding 

// class kict{
//     person(){
//         console.log("I am student");        
//     }
// }
// class home extends kict{
//     person(){
//         super.person()
//         console.log("I am family member");        
//     }
// }
// class shop extends home{
//     person(){
//         super.person()
//         console.log("I am customer");
//     }
// }

// let s=new shop()
// s.person()

// overloading

// class kict{
//     add(){
//         console.log("Hello world");

//     }
//     add1(a){
//         console.log(a);

//     }
//     add2(a,b){
//         console.log(a+b);

//     }
// }
// let k=new kict()
// k.add()
// k.add1(6)

// 1. Compile-time Polymorphism (Method Overloading)

// class Demo{

//     add(a){
//         console.log(a);
//     }

//     add(a,b){
//         console.log(a+b);
//     }

//     add(a,b,c){
//         console.log(a+b+c);
//     }

// }

// let d = new Demo();

// d.add(1);


// 2. Runtime Polymorphism (Method Overriding)

class Animal{
    sound(){
        console.log("Animal makes sound");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    sound(){
        console.log("Cat meows");
    }
}

let d = new Dog();
let c = new Cat();

d.sound();
c.sound();