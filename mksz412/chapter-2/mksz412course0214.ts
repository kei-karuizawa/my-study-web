// 2-14：静态属性，Setter 和 Getter。

class Person0214 {
    constructor(private name: string, private _age: number) {}

    // 可以作为私有属性对外开放的保护。
    get getName() {
        return this.name;
    }

    get age() {
        return this._age;
    }
    set age(age: number) {
        this._age = age;
    }
}

const person0214: Person0214 = new Person0214('wy', 12)
person0214.getName;
person0214.age;  // 对于私有属性的保护，更推荐这种写法。

// 单例。
class Single0214 {
    private static instance: Single0214;

    private constructor(public name: string) {}

    public static getInstance(): Single0214 {
        if (!this.instance) {
            this.instance = new Single0214('wy');
        }
        return this.instance;
    }
}

const single0214: Single0214 = Single0214.getInstance();
single0214.name = 'wywy';
