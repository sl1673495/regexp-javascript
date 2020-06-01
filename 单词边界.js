let res = "adobe(2016) ps6.4".match(/\b(\w+)/g)
console.log("res: ", res)
// ["adobe", "2016", "ps6", "4"]

let res2 = "adobe(2016) ps6.4".match(/\B(\w+)/g)
console.log('res2: ', res2);
// ["dobe", "016", "s6"]
