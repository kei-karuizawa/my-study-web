// 4-5：函数泛型

function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}

join(1, '2');
// 如何规定：first 传 string，second 也必须传 string？也就是说如何让 first 和 second 的类型必须一样？
// 答案：泛型。

function join2<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`;
}

join2<string>('1', '2');
join2<number>(1, 2);

function joint3<ABC>(params: ABC[]) {
  return params;
}
joint3<string>(['1', '2']);
joint3<number>([1, 2]);

function joint4<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
joint4(1, '2');
