const leftPad = require('left-pad')
const fs = require('fs')

const result = leftPad('ok', 10, 'o')
fs.writeFileSync('result', result)
console.log(result)
