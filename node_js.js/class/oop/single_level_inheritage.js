// single level inheritance

class kict{
    std1()
    {
        console.log("Im student 1");
    }
}

class room2 extends kict{
    std2()
    {
        console.log("Im student 2");
    }
}

obj = new room2();
obj.std1();
obj.std2();