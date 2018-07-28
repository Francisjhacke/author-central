import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBC7EixbPEh_IGpJUa95wsBAh5QbYcp0Uk",
  authDomain: "author-central-905.firebaseapp.com",
  databaseURL: "https://author-central-905.firebaseio.com",
  messagingSenderId: "310131066353",
  projectId: "author-central-905",
  storageBucket: "author-central-905.appspot.com"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();