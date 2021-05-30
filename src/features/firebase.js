import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC5l_bMnQwAt2I9GyHnh-vV052xVcvSbhs",
  authDomain: "chat-box-2049e.firebaseapp.com",
  projectId: "chat-box-2049e",
  storageBucket: "chat-box-2049e.appspot.com",
  messagingSenderId: "88852994273",
  appId: "1:88852994273:web:4a47301707608b821bbfa0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;