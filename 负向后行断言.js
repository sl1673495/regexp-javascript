let str = 'The cat sat on cat.'
let reg = /(?<!the\s)(cat)/ig

// 在输入字符中获取所有不在 The 或 the 之后的所有单词 cat。
console.log(str.match(reg))