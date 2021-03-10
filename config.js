import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBf-Sy_S303kBMpNpS4j_hsTdZXXzbzWqI",
  authDomain: "music-zone-cbb73.firebaseapp.com",
  projectId: "music-zone-cbb73",
  storageBucket: "music-zone-cbb73.appspot.com",
  messagingSenderId: "586720009656",
  appId: "1:586720009656:web:2d275adc0cbc39b7d1c34d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
