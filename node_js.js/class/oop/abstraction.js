class emp{
    #totalsalary()
    {
        let salary = 10000;
        let bonus =2000;
        console.log("total sal",salary+bonus);
    }

    final()
    {
        this.#totalsalary();
    }
}

obj = new emp();
obj.final();
// obj.totalsalary();