import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwnNMRjHhMeMBo0jdXDO6-c6fZNiqnP4c",
    authDomain: "boardapp-2b681.firebaseapp.com",
    projectId: "boardapp-2b681",
    storageBucket: "boardapp-2b681.appspot.com",
    messagingSenderId: "869670213632",
    appId: "1:869670213632:web:f751b52d1b518eff6aa0e5",
    measurementId: "G-HFSND1N65X"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
  