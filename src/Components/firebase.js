import firebase from 'firebase/app'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyNwIKKVNl53cfaL649HtLw_yd5sEX7CE",
    authDomain: "clone-6a3dd.firebaseapp.com",
    projectId: "clone-6a3dd",
    storageBucket: "clone-6a3dd.appspot.com",
    messagingSenderId: "609307541623",
    appId: "1:609307541623:web:7cd7932a13bf56a810c672",
    measurementId: "G-5YY2F7D4VR"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()