// 2-15：抽象类

class Person0215 {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 抽象类只能被继承。
const person0215: Person0215 = new Person0215('wy')
// 报错。
// person0215.name = 'wy';

abstract class Geom0215 {
    width: number = 0;
    getType() {
        return 'Geom';
    }
    abstract getArea(): number;
}

class Circle0215 extends Geom0215 {
    width: number = 0;
    getArea(): number {
        return 0;
    }
}

interface Person02151 {
    name: string;
}

interface Teacher extends Person02151 {
    name: string;
    teachingAge: number;
}

interface Student extends Person02151 {
    age: number;
}

const getUserInfo = (user: /*Teacher | Student*/Person02151) => {
    return user.name
}
