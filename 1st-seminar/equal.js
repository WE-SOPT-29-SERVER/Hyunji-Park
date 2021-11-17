const numVar = 2;
const strVar = "2";

// 동등연산자: 값만 비교
// == equal
// != not equal
console.log(numVar == strVar); // 숫자와 문자열을 비교할 때 숫자를 문자열로 바꾼다.

/*
2 -> "2"
"2" + "2" = "22"
*/
console.log(numVar + strVar);
console.log(typeof (numVar + strVar));

// Number
console.log(Number(numVar) + Number(strVar));
console.log(typeof (Number(numVar) + Number(strVar)));

// String
console.log(String(numVar) + String(strVar));
console.log(typeof (String(numVar) + String(strVar)));

// 일치연산자: 값 & 타입 비교
// === equal
// !== not equal
console.log(numVar === strVar);
