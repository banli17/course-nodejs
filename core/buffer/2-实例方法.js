let b1 = Buffer.alloc(6)

// fill(data[, start])
b1.fill('12', 1)
console.log(b1); // <Buffer 00 00 31 32 31 32>
console.log(b1.toString('utf-8')); // 12121

b1.fill(123)
console.log(b1); // <Buffer 7b 7b 7b 7b 7b 7b>
console.log(b1.toString()); // {{{{{{

b1.fill('12345678')
console.log(b1); // <Buffer 31 32 33 34 35 36>
console.log(b1.toString()); // 123456


// write(data[, start, len]), len 是写多少个 data
const len = b1.write('2222', 1, 3)
console.log('len', len); // 3
console.log(b1); // <Buffer 31 32 32 32 35 36>
console.log(b1.toString()); // 122256

const b2 = Buffer.from('你好啊')
console.log(b2);
console.log(b2.toString('utf-8', 3, 6)); //好 toString(ecode, start, end)

// slice
console.log(b2.slice(3).toString()); // 好啊
console.log(b2.slice(-3).toString()); // 啊
const b2copy = b2.slice(0)

b2[0] = 'a'
console.log('b2copy', b2copy);


// indexOf
const b5 = Buffer.from('hello你好啊, 哎你好啊')
console.log(b5);
console.log(b5.indexOf('好')); // 8
console.log(b5.indexOf('好', 10)); // 22


// copy(source, sourceStart, distStart, distEnd)
const b3 = Buffer.from("你好啊")
const b4 = Buffer.alloc(9)
b3.copy(b4, 3, 3, 6) // b3 拷贝到 b4
console.log(b4);
console.log(b4.toString());

// Buffer.concat 参数是一个数组
console.log(Buffer.concat([b5, b3]).toString()); // hello你好啊, 哎你好啊你好啊
console.log(Buffer.isBuffer(b3)); // true


t8
- 强调个人独挡一面的能力
- 能力方面，可以解决一些复杂的问题

t9
- 强调自己组织团队完成目标、整合资源、设计方案
- 能力方面，可以解决高度复杂和专业的问题
- 行为标准：可以给团队一些引导和提升，比如代码审核、提升组内开发效率
- 知识技能：强调精通，比如框架的整体设计模式、精通js运行原理


差距：
- 框架方面，虽然写过一些简单的实现，但是没有系统看过源码
- 基础知识：几何、三维知识
