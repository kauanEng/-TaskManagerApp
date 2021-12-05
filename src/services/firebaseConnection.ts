import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyB4FY6g-UdwhKJ4GtMZr7asnK6xHQE6ULU',
  authDomain: 'boardapp-432a4.firebaseapp.com',
  projectId: 'boardapp-432a4',
  storageBucket: 'boardapp-432a4.appspot.com',
  messagingSenderId: '1092616922825',
  appId: '1:1092616922825:web:949664efc8c27ee9598f18',
  measurementId: 'G-4XTRD1C553',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase
