const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCaCIpTHNjoDFo4ns7M0QNei8Rom1bOMss",
  authDomain: "wesopt29-21638.firebaseapp.com",
  projectId: "wesopt29-21638",
  storageBucket: "wesopt29-21638.appspot.com",
  messagingSenderId: "596634424242",
  appId: "1:596634424242:web:9c0418824d89fceda4caab",
  measurementId: "G-KFQ8ZM7YL3",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
