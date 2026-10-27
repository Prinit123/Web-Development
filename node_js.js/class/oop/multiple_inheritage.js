// multiple inheriatnce

class A{
    a()
    {
        console.log("Im A");
    }
}
class B extends A{
    b()
    {
        console.log("Im B");
    }
}
class C extends A{
    c()
    {
        console.log("Im C");
    }
}

obj = new C();
obj.c()
obj.a()