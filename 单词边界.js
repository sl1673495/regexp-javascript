let res = "The cat sat on cat".match(/\b(\w+)/g)
console.log("res: ", res)
// [ 'The', 'cat', 'sat', 'on', 'cat' ]

let res2 = "The cat sat on cat".match(/\B(\w+)/g)
console.log("res2: ", res2)
// [ 'he', 'at', 'at', 'n', 'at' ]
