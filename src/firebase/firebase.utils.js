import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCr9GSAK_4Tf7mlE7MQYSLM8qH1PwvjcLA",
    authDomain: "apparelfactory-29d3c.firebaseapp.com",
    databaseURL: "https://apparelfactory-29d3c.firebaseio.com",
    projectId: "apparelfactory-29d3c",
    storageBucket: "apparelfactory-29d3c.appspot.com",
    messagingSenderId: "461677521971",
    appId: "1:461677521971:web:206b8cb3968435ec6a8746"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;