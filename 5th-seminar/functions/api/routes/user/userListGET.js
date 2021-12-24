const _ = require("lodash");
const functions = require("firebase-functions");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");
const db = require("../../../db/db");
const { userDB, postDB } = require("../../../db");

module.exports = async (req, res) => {
  let client;

  // error 발생시 catch문으로 감 - error handling
  try {
    // db/db.js에 정의한 connect 함수를 통해 connection pool에서 connection을 빌려옵니다.
    client = await db.connect(req);

    // 빌려온 connection을 사용해 우리가 db/user.js에서 미리 정의한 SQL 쿼리문을 날려줍니다.
    const users = await userDB.getAllUsers(client);

    // 성공적으로 users를 가져왔다면, response를 보내줍니다.
    res.status(statusCode.OK).send(
      util.success(statusCode.OK, responseMessage.READ_ALL_USERS_SUCCESS, {
        users,
      })
    );
  } catch (error) {
    // Firebase 콘솔에서도 에러를 볼 수 있게 하기
    functions.logger.error(
      `[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`,
      `[CONTENT] ${error}`
    );
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  } finally {
    client.release();
  }
};
