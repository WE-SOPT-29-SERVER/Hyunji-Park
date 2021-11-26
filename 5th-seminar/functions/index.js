const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-21638-firebase-adminsdk-u5j9d-036d7e5d48.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};
