import firebase from 'firebase/app';
import 'firebase/storage';


const config = {
  apiKey: 'AIzaSyAsPSq3J7KPY7JW-EW-5KrJ9OzpMJUqwXY',
  authDomain: 'upwork-39ee9.firebaseapp.com',
  databaseURL: 'https://upwork-39ee9.firebaseio.com',
  projectId: 'upwork-39ee9',
  storageBucket: 'upwork-39ee9.appspot.com',
  messagingSenderId: '500528365223',
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default,
};
