import firebase from 'firebase';

const config = {
  
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database(); 