const path = require('path')

console.log(path.sep)

const file = path.join('/content','subfolder','test.txt')
console.log(file)

const base = path.basename(file)
console.log(base)

const resolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(resolve)