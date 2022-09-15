/**
 * index.js 入口起点文件
 * 
 * 1.运行指令
 * 开发环境 webpack ./src/index.js -o ./build --mode=development
 * 开发环境 webpack ./src/index.js -o ./dist --mode=production
 * 
 * 生产环境 
 */
import './css/index.less'

function add(x,y) {
    return x + y
}

console.info(add(1, 2));