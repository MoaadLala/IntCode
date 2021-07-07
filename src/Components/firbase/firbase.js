import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
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

      var uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        // Privacy policy url/callback.
        callbacks: {
          signInSuccess: () => { 
            return false;
          },
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#signInButtons', uiConfig);
export let userName;
export let userEmail;
export let emailVerified;
export let userPhotoUrl;

      const initApp = () => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            userName = user.displayName;
            userEmail = user.email;
            emailVerified = user.emailVerified;
            waitForPhotoUrl(user.photoURL);
          } else {
            
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });

function waitForPhotoUrl(photoUrl){
  if(typeof userPhotoUrl !== undefined){
    document.querySelector('.loginIcon').src = photoUrl;
    document.querySelector('.loginIcon').style.display = 'inline-block';
    document.querySelector('.loginMainText').style.display = 'none';
    document.getElementById('signInButtons').style.display = 'none';
  } else {
    setTimeout(waitForPhotoUrl, 250);
  }
}