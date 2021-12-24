const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const users = require("../../dbMockup/user");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  // request body가 잘못됐을 때
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const data = users.filter((user) => user.email === email)[0];

  // 해당 email을 가진 유저가 없을 때
  if (!data) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  // 유저의 email과 password가 일치하지 않을 때
  if (data.password !== password) {
    // return을 쓰는 이유: 오류를 감지하면 멈춰서 그 이후로 가지 못하게 하기 위해
    // -> 즉 error처리를 할 때에는 return을 쓰자!
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }

  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, data));
};
