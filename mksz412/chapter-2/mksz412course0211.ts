// 2-11：interface 接口。

interface Person {
    name: string;
    age?: number;  // age 属性可有可无。
    readonly sex: string;  // 只读。
    [propName: string]: any;  // 可能还有其他的属性，属性名称是字符串类型，值是 any 类型。
    say(): string;  // 可以加方法，返回值是 string。
}

// type 和 interface 区别？
type Person1 = string;  // type 是类型别名，其实不是用来声明一个具体类的。

const person = {
    name: 'dell',
    sex: 'male',
    other: 'other',
    say(): string {
        return 'hello';
    }
}

const getPersonName = (person: Person): void => {
    console.log(person.name)
}

getPersonName(person);  // 注意这样传的话其实数据结构不对也没关系，这里直接传变量不做强校验。
// 但是像下面这样对象字面量展开传就不行，对象字面量展开时会做强校验。
getPersonName({
    name: 'dell',
    sex: 'male',
    // say() {
    //     return 'hello'
    // }
    say: (): string => {
        return 'hh'
    }
    // other: 'other',  这样写会报错。
});

// 类可以应用其他类。
class User0211 implements Person {
    name = 'dell';
    say(): string {
        return 'hello'
    }
    sex: string = 'male';
}

// 类的继承。
interface Teacher extends Person {
    teacher(): string;
    otherFunction: () => string;
}

// 定义一个函数类型声明。
interface SayHi {
    (word: string): string
}

const sayHi: SayHi = (word: string): string => {
    return word;
}

// TS 在编译成 JS 的时候，接口以及类型相关全部剔除掉，也就是说接口只是 TS 做类型辅助用的。
