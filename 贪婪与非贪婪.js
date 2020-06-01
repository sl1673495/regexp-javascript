//我们本来预想上面会匹配得到"witch"和"broom"两个字符串，运行上面的例子，却发现结果只匹配到"witch" and her "broom"一个字符串。
let str = 'a "witch" and her "broom" is one';
let reg =  /".*"/g
console.log(str.match(reg))

// 非贪婪模式
let str2 = 'a "witch" and her "broom" is one';
let reg2 =  /".*?"/g
console.log(str2.match(reg2))