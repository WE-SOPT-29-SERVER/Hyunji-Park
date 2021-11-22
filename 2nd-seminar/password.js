const fs = require("fs");
const crypto = require("crypto");

/*
   fs.readFileSync ( path, [options]) {}
   동기 방식으로 파일 불러오기 - 순서 확인해보기
*/
const data = fs.readFileSync("password.txt");
console.log("password.txt: ", `${data}`);

const password = `${data}`;
const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iterations = 100000;
const keylen = 64;
const digest = "sha512";
const callback = (err, derivedKey) => {
  if (err) throw err;
  const cryptoNum = derivedKey.toString("hex");

  /*
   fs.writeFileSync ( file, data, [options]) {}
   동기 방식으로 파일 쓰기 - 순서 확인해보기
*/
  fs.writeFileSync("hashed.txt", cryptoNum);
};
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);
