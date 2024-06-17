// 4-2：TypeScript中的配置文件（下）

// ts-node 工具会使用 `tsconfig.json` 文件。

// `"rootDir": "./"`：指定你存放源代码文件的根目录。
// `"outDir": "./"`：TS 文件编译后的产物存放在哪。

// `"incremental": true`：增量编译。打开时会产生一个配置文件，保存上次编译的信息。这次编译和上次编译比较，实现增量编译。

// `"allowJs": true`：是否编译 JS 文件。也可以利用这个配置转换 ES5 或者 ES6 语法。
// `"checkJs": true`：是否进行 JS 语法检测。

// `"noUnusedLocals": true`: Enable error reporting when local variables aren't read.
// `"noUnusedParameters": true`: Raise an error when a function parameter isn't read.
