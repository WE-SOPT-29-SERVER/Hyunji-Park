const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

/*
  원래는 key : value 형식,
  key와 value의 이름이 같으면 value 생략 가능
*/
const calculator = {
  add,
  sub,
  mul,
  div,
};

module.exports = calculator;
