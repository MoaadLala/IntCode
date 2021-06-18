import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBFvnGOY9Low_HwVUxw-ZcHeIkG8UILy_U",
    authDomain: "intcode-f1a10.firebaseapp.com",
    projectId: "intcode-f1a10",
    storageBucket: "intcode-f1a10.appspot.com",
    messagingSenderId: "745006364982",
    appId: "1:745006364982:web:0fea1a1e7fee63c9c9db97",
    measurementId: "G-W137H43XWF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

export default db;