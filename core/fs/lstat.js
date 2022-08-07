import fs from 'fs'
import path from 'path'
import { URL } from 'url'

const __dirname = new URL('.', import.meta.url).pathname

const file = path.join(__dirname, 'data.txt')

const res1 = fs.statSync(file)

console.log('1', res1)

const res2 = fs.lstatSync(file)

console.log('2,', res2)

// 上面两个返回的 时间信息 不一样
