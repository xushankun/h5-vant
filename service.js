// 导入模块
const fs = require('fs')
const path = require('path')
// 文件路径
const fileName = path.join(__dirname, './dist/version.json')
// 读【异步：readFile    同步：readFileSync】
function readFileData() {
    const fileData = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
    return fileData
}
// 写
function writeFileData(_data) {
    fs.writeFileSync(fileName, JSON.stringify(_data))
    return true
}
// =========================== json 操作=========================
const _data = {
    description:'H5最新build时间戳，用于webview访问url更新缓存',
    version: new Date().getTime()
}
// 写入版本号
if(writeFileData(_data)){
    console.log('version.json文件已写入')
}

