let str = "1234567890"
// (?!^)表示不是开头位置
let reg = /(?!^)(?=(\d{3})+$)/g

console.log(str.replace(reg, (s) => `${s},`))
