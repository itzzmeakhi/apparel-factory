import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase Configuration

const firebaseConfig = {
    apiKey: "AIzaSyCr9GSAK_4Tf7mlE7MQYSLM8qH1PwvjcLA",
    authDomain: "apparelfactory-29d3c.firebaseapp.com",
    databaseURL: "https://apparelfactory-29d3c.firebaseio.com",
    projectId: "apparelfactory-29d3c",
    storageBucket: "apparelfactory-29d3c.appspot.com",
    messagingSenderId: "461677521971",
    appId: "1:461677521971:web:206b8cb3968435ec6a8746"
  };

  // Storing User signedUp date in firestore

  export const createUserProfileDocument = async(authData, additionalData) => {
    if(!authData) return;

    //console.log(firestore.doc('users/122iidsidnm'));

    const userRef = firestore.doc(`users/${authData.uid}`);

    // console.log(userRef);

    const snapshot = await userRef.get();

    // console.log(snapshot);

    if(!snapshot.exists) {
      const { displayName, email, uid } = authData;
      const createdOn = new Date();

      try {
        // userRef.set({
        //   displayName,
        //   email,
        //   uid,
        //   createdOn,
        //   ...additionalData
        // })
        userRef.set({
          'userName' : displayName,
          'userEmail' : email,
          'userId' : uid,
          'userSignedOn' : createdOn,
          ...additionalData
        })
      } catch(err) {
        console.log("Error occured : " + err.message);
      }
    }
    
    return userRef;
  }

  // Storing documents and collections

  export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(object => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, object);
    })

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
      };
    });

    return transformedCollection.reduce((accumulator, collection) => {
      //accumulator[collection.title.toLowerCase()] = collection;
      accumulator.push(collection);
      return accumulator;
    }, []);
  };

  // Google Auth  Provider

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // Initializing Firebase app

  firebase.initializeApp(firebaseConfig);

  // Exporting firebase, firebase auth and firestore modules

  export default firebase;
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();