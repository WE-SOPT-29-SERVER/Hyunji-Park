const crypto = require("crypto");

//const password = "serveristhebest";

/*
createHash: 해시 값 반환
update: 변환할 문자열을 입력
digest: base64, hex등의 인코딩 알고리즘을 입력
*/
//const hex = crypto.createHash("sha512").update(password).digest("hex");
//const base64 = crypto.createHash("base64").update(password).digest("base64");

//console.log("hew:", hex);

//pbkdf2 (비번, 솔트 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback)

const password = "qwerty";
const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iterations = 100000;
const keylen = 64;
const digest = "sha512";
const callback = (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
};
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);

const encrypt = (salt, password) => {
  crypto.pbkdf2(
    password,
    salt.toString(),
    1,
    32,
    "sha512",
    (err, derivedKey) => {
      if (err) throw err;
      const hashed = derivedKey.toString("hex");
      console.log("salt : ", salt);
      console.log("hashed : ", hashed);
    }
  );
};

const password1 = "fl0wer";
const salt1 = crypto.randomBytes(32).toString("hex");
encrypt(salt, password);
