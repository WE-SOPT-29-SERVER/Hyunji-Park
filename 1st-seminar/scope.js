// Function Scope
// var
if (true) {
  var x = "var";
}
console.log(`var: ${x}`);

// Block Scope
// let, const
// if (true) {
//   let y = "let";
//   const z = "const";
// }
// console.log(`let: ${y}`);
// console.log(`const: ${z}`);
// -> let과 const는 Block scope이기 떄문에 오류 발생

function colorFunction() {
  if (true) {
    var color = "blue";
    console.log(color);
  }
  console.log(color);
}

colorFunction();
//console.log(color);
