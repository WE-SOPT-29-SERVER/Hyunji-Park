// ./ -> 같은 폴더, / -> root directory
const sum = require("./sum");

const result = sum(3, 4);
console.log("sum result: ", result);

// 계산기 모듈
const cal = require("./calculator");
console.log("add result: ", cal.add(10, 5));
console.log("sub result: ", cal.sub(10, 5));
console.log("mul result: ", cal.mul(10, 5));
console.log("div result: ", cal.div(10, 5));
