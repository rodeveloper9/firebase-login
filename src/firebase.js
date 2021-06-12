import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAZdoxxuygW49rmDJV2Til-vf3Uo9RZLZs",
    authDomain: "messaging-e59d5.firebaseapp.com",
    databaseURL: "https://messaging-e59d5.firebaseio.com",
    projectId: "messaging-e59d5",
    storageBucket: "messaging-e59d5.appspot.com",
    messagingSenderId: "333387629994",
    appId: "1:333387629994:web:6f94b4218b9af4541c57d3",
    measurementId: "G-YH99PG4W7T"
})

export const auth = app.auth();
export const database = app.database().ref();
export default app;