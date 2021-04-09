import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
apiKey: "AIzaSyBHKZx_uScSghILW2wcuFdcdz4PNjsGMwk",
authDomain: "blogpost-c8ccc.firebaseapp.com",
databaseURL: "https://blogpost-c8ccc-default-rtdb.firebaseio.com",
projectId: "blogpost-c8ccc",
storageBucket: "blogpost-c8ccc.appspot.com",
messagingSenderId: "57179887558",
appId: "1:57179887558:web:c0e61925d3a829e19944c7",
measurementId: "G-GN8HJVENG3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();