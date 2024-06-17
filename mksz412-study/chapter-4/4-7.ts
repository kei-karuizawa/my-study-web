// 4-7：命名空间-namespace（上）

// 模块化概念。
namespace MKSZ412Course0407 {
  class Header {
    constructor() {}
  }

  class Content {
    constructor() {}
  }

  // 命名空间里的类要被外部使用的话需要加 export。
  export class Course {
    constructor() {}
  }
}

new MKSZ412Course0407.Course();
// 以下代码是调用不到的。
//new MKSZ412Course0407.Content();
