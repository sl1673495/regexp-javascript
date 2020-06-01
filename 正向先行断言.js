let str = 'The fat cat sat on the mat.'
// 它会引导正则表达式引擎匹配 The 或 the 后面跟着 fat。
let reg = /(T|t)he(?=\sfat)/g

console.log(str.match(reg))