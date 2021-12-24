// Hoisting: 변수를 끌어올리는 것

hoistingFunction();

// 우리가 작성한 코드
function hoistingFunction() {
  console.log(x);
  var x = "var";
  console.log(x);
}

// JS엔진이 해석한 코드
// 선언을 끌어올리고 원래 위치에서 할당을 한다.
function hoistingFunction() {
  var x; // 선언
  console.log(x);
  x = "var"; // 할당
  console.log(x);
}

hoistingFunction();
