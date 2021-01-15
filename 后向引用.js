// 后向引用中 \1 就代表引用了前一个分组 在这个例子中就是 (go)
// 所以可以匹配到重复出现的 go
const reg = /(go) \1/;
const str = "go go";
reg.test(str);

const tagReg = /<([^>]+)>[\d\D]*<\/\1>/
const html = "<title>regular expression</title>";
// title
console.log('html.match(tagReg)', html.match(tagReg))