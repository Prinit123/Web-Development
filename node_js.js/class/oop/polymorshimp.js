// overriding - same same but different

class kict {
           person() {
                      console.log("Student");
           }
}
class shop extends kict {
           person() {
                      console.log("client");
           }
}
class home extends shop {
           person() {
                      console.log("son");
           }
}

obj = new shop();
obj.person();

// overloading , // vadhare parameter a run thase


// class kict {
//            person() {
//                       console.log("Student");

//            }
//            person(a) {
//                       console.log("Student", a);

//            }
//            person(a, b) {
//                       console.log("Student", a + b);
//            }
// }

// obj = new kict()
// obj.person(10,30)

// encuplsation

// class emp {
//            salary = 0;

//            setsalary(s) {
//                       this.salary = s;
//            }

//            getsalary() {
//                       return this.salary;
//            }
// }

// obj = new emp()
// obj.setsalary(30000)
// console.log(obj.getsalary());
