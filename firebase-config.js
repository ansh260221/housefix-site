// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyB0El091HqM3boVPIRloVVPFPV2IIC793s",
  authDomain: "houseworks-43c92.firebaseapp.com",
  databaseURL: "https://houseworks-43c92-default-rtdb.firebaseio.com",
  projectId: "houseworks-43c92",
  storageBucket: "houseworks-43c92.appspot.com",
  messagingSenderId: "724321274397",
  appId: "1:724321274397:web:26d484cbbcc74b0149d4f4"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
