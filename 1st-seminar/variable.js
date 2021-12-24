// 변수 선언법

// var
// 재선언 가능
// -> 재선언이 가능하면 나중에 변수를 설정했었는지 헷갈릴 수 있다.

var variableVar = "123";
var variableVar = "321";

console.log("variableVar", variableVar);

// 재할당 가능
var variableVar = "123";
variableVar = "321";

console.log("variableVar", variableVar);

// let
// 재선언 불가
let variableLet = "123";
let variableLet = "321";

console.log("variableLet", variableLet);
// -> 오류 발생

// 재할당 가능
let variableLet = "123";
variableLet = "321";

console.log("variableLet", variableLet);

// const
// 재선언 불가
const variableConst = "123";
const variableConst = "321";

console.log("variableConst", variableConst);
// -> 오류 발생

// 재할당 불가
const variableConst = "123";
variableConst = "321";

console.log("variableConst", variableConst);
