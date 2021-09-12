import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBTYJBGzkT4SoYqv0DcgKjvQaBgV5-7ROw",
    authDomain: "challenge-27126.firebaseapp.com",
    projectId: "challenge-27126",
    storageBucket: "challenge-27126.appspot.com",
    messagingSenderId: "706256092301",
    appId: "1:706256092301:web:34d2bcc9f77aeef42f36c4",
    measurementId: "G-4RQS3G7393"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};