// 2-1：TypeScript 究竟是什么？

// TS 是 JS 的超集，它在浏览器上或者 Node 环境下不能直接运行，需要编译成 JS 后才可以运行。
// TS 有自己的类型，是静态的代码类型。

// JS 是动态类型，以下代码不会报错：
// let a = 123
// a = '123'

// TS 是静态类型，以下代码会报错：
// let b = 123;
// b = '123';
