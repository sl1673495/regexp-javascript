let str = "adobe-aacc-bbaa"
let reg = /-(\w)/g
console.log(str.replace(reg, (str) => str[1].toUpperCase()))

// 这个正则先找到 - 符号后面的单个字母，转大写即可。