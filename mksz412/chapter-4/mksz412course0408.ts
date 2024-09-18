// 4-8：命名空间-namespace（下）

// `tsconfig.json` 下的 `outfile` 可以让所有的 TS 编译成一个文件：
// `"outFile": "./build/test.js"`。
// 在设置这个属性的时候，`"module": "commonjs"` 要换成其他支持的模块类型。

//命名空间相互间有依赖时，可以指定依赖关系：
// `/// reference path='./components.ts'`.

namespace MKSZ412Course0408 {
  export interface Test {}

  export namespace SubNameSpace {}
}
