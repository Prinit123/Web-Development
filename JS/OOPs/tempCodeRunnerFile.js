    class P{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getD() {
        return `${this.name} is ${this.age} years old.`;
    }
    }
    const p1 = new P("Alen", 30);
    console.log(p1.getD());
