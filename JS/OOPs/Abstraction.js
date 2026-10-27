    // Abstraction
    // the core Object-Oriented Programming (OOP) practice of hiding complex internal implementation details and exposing only the essential features to the user

    // this is a special keyword in JavaScript that refers to the object currently calling or "owning" the executing function — its value depends on how a function is called, not where it's written.

    // this થી એ જ class ની properties અને methods access કરી શકાય.

    // જો બે classes નો કોઈ સંબંધ (inheritance) ન હોય, તો this થી બીજી class ની properties અથવા methods સીધી access કરી શકાતી નથી.

    // જો Student એ Person ને extends કરે છે, તો parent ની properties this થી access કરી શકાય.

    // class P{
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    // getD(){
    //     return `${this.name} is ${this.age} years old.`;
    // }
    // }
    // const p1 = new P("Alen", 30);
    // console.log(p1.getD());


   // Abstract class
// class Car {
//     startEngine() {
//         console.log("Engine starts...");
//     }
// }

// // User class
// class Driver extends Car {
//     drive() {
//         console.log("Car is moving");
//     }
// }

// const car = new Driver();

// car.startEngine();
// car.drive();

// Easy (5 Questions)
// Create a class Vehicle with a method startEngine(). Create subclasses Car and Bike that implement their own version of the method.
// Create a class Shape with a method calculateArea(). Create a Circle class that provides the actual implementation.
// Create a class Animal with a method makeSound(). Create subclasses Dog and Cat that implement the method.
// Create a class Payment with a method pay(). Create a UPI class that implements the payment process.
// Create a class Employee with a method work(). Create a Developer class that defines how the work is performed.
// Intermediate (5 Questions)
// Create a class BankAccount with methods deposit() and withdraw(). Create subclasses SavingsAccount and CurrentAccount with their own implementations.
// Create a class Notification with a method send(). Create subclasses EmailNotification and SMSNotification.
// Create a class Product with a method getDiscount(). Create subclasses Electronics and Clothing that calculate discounts differently.
// Create a class Transport with a method fare(). Create subclasses Bus and Train that calculate fares differently.
// Create a class UserAuthentication with a method login(). Create subclasses GoogleLogin and EmailLogin.
// Hard (5 Questions)

// Create a class PaymentGateway with methods:

// processPayment()
// refund()

// Create subclasses:

// CreditCardPayment
// UPIPayment
// NetBankingPayment

// Create a class Database with methods:

// connect()
// disconnect()

// Create subclasses:

// MySQLDatabase
// MongoDBDatabase
// Create a class FoodOrder with a method prepareFood(). Create subclasses:
// PizzaOrder
// BurgerOrder
// PastaOrder

// Create a class CloudStorage with methods:

// uploadFile()
// downloadFile()

// Create subclasses:

// GoogleDrive
// Dropbox
// OneDrive
// Create a class ReportGenerator with a method generateReport(). Create subclasses:
// PDFReport
// ExcelReport
// HTMLReport

class p{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getD(){
        return `${this.name} is ${this.age} years old.`;
    }
}
const p1 = new p("Alen",30);
console.log(p1.getD());