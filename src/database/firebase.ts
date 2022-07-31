import firebase from 'firebase';

import firebaseConfig from '../config/firebaseConfig';

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db;