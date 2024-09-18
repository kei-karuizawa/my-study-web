// 2-10：数组与元组

const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined];

// 类型别名：
type User = {name: string; age: number};

class Teacher {
    name: string = '';
    age: number = 0;
}

const objectArr: {name: string}[] = [{name: 'wangyi'}];
// 对象数组可以传展开的对象，也可以传 new 出来的对象。
const objectArr2: User[] = [{name: 'wangyi', age: 0}, new Teacher()];

// 元组。
const teacherInfo: [string, string, number] = ['wangyi', 'male', 12];
const teacherInfo2: [name: string, age: number] = ['wangyi', 12];
