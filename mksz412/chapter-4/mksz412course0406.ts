// 4-6：类中的泛型以及泛型类型

interface Item {
  name: string
}

class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name
  }
}
const data = new DataManager([
  {
    name: 'wy',
  },
])
data.getItem(0);

// T 的类型必须是 number 或者 string。
class DataManager2<T extends number | string> {

}

const func: <T>(param: T) => T = <T>(param: T) => { return param }
