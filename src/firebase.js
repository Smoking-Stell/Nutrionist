// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'
  
//import 'firebase/auth';
//import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA6j1MCHBXAljkLaGzdNluolr8ZeuJuwMo",
  authDomain: "nutrition-hueta.firebaseapp.com",
  projectId: "nutrition-hueta",
  storageBucket: "nutrition-hueta.appspot.com",
  messagingSenderId: "664389421229",
  appId: "1:664389421229:web:b55c0df5d0735357bf1e24",
  measurementId: "G-6ZSSPNSFPQ"
};

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
//firebase.analytics();
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

export { db ,firebase, auth, storage};