// 4-1 TypeScript中的配置文件（上）

// `tsconfig.json` 是 TS 的编译配置文件。

// 执行 `tsc -<file>` 时是不会使用到配置文件的，而只有直接运行 `tsc` 指令时才会用到配置文件。
// 可以在 `tsconfig.json` 中增加 `include` 字段。
// `"include": ["./demo.ts"]`；对应的是 `exclude`。
// 如果这两个字段都不写，那就所有文件都编译。

// 如果 TS 里不指定类型的话，它可能是 `any` 类型，这时候编译器会提示你就算是 `any` 类型的话也要显式声明，可以通过 `"noImplicitAny": false` 禁止这一行为，但是一般都是 `true`。
// `"strictNullChecks": true` 代表是否可以赋值 `null` 或者 `undefined`。
