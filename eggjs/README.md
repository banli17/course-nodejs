# eggjs

## npm init 原理

```
npm init egg --type=simple
```

- npm init 不带参数时，会将当前目录去初始化
- npm init 如果带上参数 egg，它内部会调用 `npm exec create-egg` 命令，去下载 create-egg 这个包并执行 bin 里的命令。
