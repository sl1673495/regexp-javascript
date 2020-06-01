let str = 'The fat cat sat on the mat.'
let reg = /(T|t)he(?!\sfat)/g
// The 或者 the 且后面跟的不是 fat

console.log(str.match(reg))

let str2 = 'abconeabcfgon'
let reg2 = /(.){3}(?=o)/ig
// The 或者 the 且后面跟的不是 fat

console.log(str2.match(reg2))