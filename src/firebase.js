import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCMOt17eqEE5c5YVtZ4xV2tiLU71K-8zCY",
  authDomain: "first-flight-with-friends-2019.firebaseapp.com",
  databaseURL: "https://first-flight-with-friends-2019.firebaseio.com",
  projectId: "first-flight-with-friends-2019",
  storageBucket: "first-flight-with-friends-2019.appspot.com",
  messagingSenderId: "684156966092",
  appId: "1:684156966092:web:044fca91f7a3f82674de69",
  measurementId: "G-F57ZTEHFDT"
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database(); 