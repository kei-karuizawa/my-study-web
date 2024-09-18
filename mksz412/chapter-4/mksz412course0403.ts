// 4-3：联合类型和类型保护

interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

function trainAnimal(animal: Bird | Dog) {
  // 联合类型，代码提示只会提示每个类型共有的。
  //animal.fly = true;

  if (animal.fly) {
    // 通过类型断言进行类型保护。
    (animal as Bird).sing();
  }
  (animal as Dog).bark();
}

function trainAnimalSecond(animal: Bird | Dog) {
  // animal 当中有 sing 方法吗？
  // 通过 in 语法做类型保护。
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

function add(first: string | number, second: string | number) {
  // 报错。
  //return first + second;

  // 使用 typeof 做类型保护。
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second;
}

class NumberObj {
  count: number = 0;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  // instanceof 语法做类型保护。
  // 这种方法必须对象是 class 类型的，不能是 interface。interface 不能使用 instanceof。
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0;
}
