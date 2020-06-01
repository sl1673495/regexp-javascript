let str = 'The fat cat sat on the mat.'
let reg = /(?<=(T|t)he\s)(fat|mat)/g
// 从输入字符串中获取在单词 The 或 the 之后的所有 fat 和 mat 单词。

console.log(str.match(reg))
// [ 'fat', 'mat' ]