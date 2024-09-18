// 3-7：TypeScript的编译运转过程的进一步理解

// tsconfig.json 文件可以对 tsc 命令编译 TS 文件进行控制。
// 该文件下有个 `outdir` 参数，控制 tsc 指令将 TS 文件编译后的 JS 文件保存到哪个路径下。

// `tsc -w` 指令可以监测文件 TS 代码是否改动，有改动会自动重新编译成 JS 文件。

// nodemon 框架会自动监测文件是否变化，有变化会自动运行。它还可以配置忽略文件等。
// npm install -D nodemon.
// 它默认只支持 JS 文件的改动，也可以通过配置以支持 TS 文件的改动。
// `nodemon node ./build/crowller.js` 开始启动 nodemon。

// tsc 和 nodemon 结合使用，就可以实现代码改动后自动编译并运行。
