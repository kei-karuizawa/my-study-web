// 2-13：类中的访问类型和构造器

// 类和类中的属性和方法默认是 `public`：允许在类的内外被调用，也可以在子类内使用。
// private：允许在类内被使用。
// protect：允许在类内以及继承的子类内使用。

// 构造器：

class Person0213 {
    private name: string;

    // 在 new 的时候自动调用。
    constructor(name: string, public age: number) {
        this.name = name;
        // 不用写 this.age = age；因为在构造器参数的简化写法里 `public age: number` 已经代表了声明和 this.age = age 两行代码。
    }
}

class Teacher0213 extends Person0213 {
    // 子类继承父类，子类调用构造器方法时，一定要把父类的构造器给调用了，否则会报错。
    constructor(public sex: string) {
        super('wy', 12);
    }

    sayHi() {
        // 调用父类。
        this.age = 12;
    }
}
