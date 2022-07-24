# Buffer 模块

## 简介


Nodejs 中 Buffer(缓冲区) 就是一块内存空间。

- 是全局变量
- 不占用 v8 堆内存大小，是 C++ 申请，无法调整大小，内存使用由 Node 控制，V8 的 GC 回收
- 一般配合 Stream 流使用，充当数据缓冲区
- 可以将 buffer 理解为一个整数数组(16位)，每个整数代表一个数据字节

引入 Buffer 是为了让 js 能操作二进制数据。

- 二进制数据：IO 操作的就是二进制
- 流操作：Stream, 将数据分段传输
- 管道连接数据的生产和消费者，如果生产和消费速度不一样，就需要缓冲区。

## 创建 Buffer 实例

Buffer 提供了三个方法 Buffer.from()、Buffer.alloc()、Buffer.allocUnsafe()，来创建 Buffer 实例。

- Buffer.from(array)
- Buffer.from(arrayBuffer[, byteOffset[, length]])
- Buffer.from(buffer)
- Buffer.from(string[, encoding])

```js
const buf = Buffer.alloc(1024)
const buf = Buffer.allocUnsafe(1024)
```

- `alloc()` 分配时会用零初始化 buffer
- `allocUnsafe()` 不会初始化 buffer，可能包含旧数据(会造成数据访问和泄漏，所以不安全)，但是速度比 alloc() 快

## 常用操作

### 获取 buffer 长度

```js
const buf = Buffer.from('Hey!');
console.log(buf.length);
```

### 遍历 buffer 内容

```js
const buf = Buffer.from('Hey!');
for (const item of buf) {
  console.log(item); // 72 101 121 33
}
```

### 改变 buffer 内容

```
const buf = Buffer.alloc(4);
buf.write('Hey!');
```

也可以使用数组语法：

```js
const buf = Buffer.from('Hey!');
buf[1] = 111; // o in UTF-8
console.log(buf.toString()); // Hoy!
```

## 实例方法

- fill: 使用数据填充 buffer
- write: 向 buffer 写数据
- toString
- `slice() deprecated`: 使用 subarray 代替
- indexOf
- copy
### subarray()

subarray() 用来创建 buffer 切片，注意切片不是拷贝，如果原 buffer 改变，切片也会改变。

```js
const buf = Buffer.from('Hey!');
buf.subarray(0).toString(); // Hey!
const slice = buf.subarray(0, 2);
console.log(slice.toString()); // He
buf[1] = 111; // o
console.log(slice.toString()); // Ho
```

### set()

set() 方法用来拷贝 buffer。

```js
const buf = Buffer.from('Hey!');
const bufcopy = Buffer.alloc(4); // allocate 4 bytes
bufcopy.set(buf);
```

默认情况下，会拷贝整个 buffer，如果想拷贝一部分，可以使用 subarray() 并设置 offset 参数。

```js
const buf = Buffer.from('Hey?');
const bufcopy = Buffer.from('Moo!');
bufcopy.set(buf.subarray(1, 3), 1);
console.log(bufcopy.toString()); // 'Mey!'
```

## 静态方法

- concat
- isBuffer
