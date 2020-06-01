// 注意.+后面的问号?，代表开启非贪婪模式，只要遇到后面的引号就结束一次匹配
let reg = /['|`](\/api.+?)['|`]/gi

let str = "isTrue ? '/api/a/b' : `/api/a/c/${d}`"

console.log(str.match(reg))

/**
 * [ '`/api/a/b`', '`/api/a/c/${d}`' ]
 */
